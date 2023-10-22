import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import * as Field from '@/components/forms/package'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

export function SidePanel ({
  title,
  description,
  triggerBtn,
  actionBtn,
  schema,
  create = true,
  dictionary
}) {
  const properties = Object.keys(schema.shape)
    .filter((key) => !(create && ['id', 'created_at', 'updated_at'].includes(key)))
  const [useForm, setUseForm] = useState(Object.fromEntries(properties.map(key => {
    const localSchema = schema.shape[key]?._def
    const defaultValue = localSchema.typeName === 'ZodDefault' ? localSchema.defaultValue() : null
    return [key, defaultValue]
  })))

  const setter = (key, value) => {
    setUseForm({ ...useForm, [key]: value })
  }

  useEffect(() => {
    console.log(useForm)
  }, [useForm])

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className='capitalize'>{triggerBtn}</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="capitalize">{title}</SheetTitle>
          <SheetDescription>
            {description}
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {properties.map((label) => {
            const localSchema = schema.shape[label]?._def
            const innerType = localSchema.innerType?._def?.typeName || localSchema.typeName
            const checks = localSchema.checks || []

            const hasMin = checks.some(constraint => constraint.kind === 'min' && constraint.value)
            const hasMax = checks.some(constraint => constraint.kind === 'max' && constraint.value)

            const values = localSchema.typeName !== 'ZodDefault'
              ? localSchema.values
              : localSchema.innerType?._def?.values || []

            if (innerType === 'ZodString') {
              if (!hasMin && hasMax) {
                return (
                  <Field.TextArea
                    key={label}
                    label={label}
                    onChange={(e) => setter(label, e.target.value)}
                  />
                )
              }
              return (
                <Field.Text
                  key={label}
                  label={label}
                  onChange={(e) => setter(label, e.target.value)}
                />
              )
            } else if (innerType === 'ZodNumber') {
              return (
                <Field.Number
                  key={label}
                  label={label}
                />
              )
            } else if (innerType === 'ZodEnum') {
              if (values.length === 2) {
                return (
                  <Field.Bool
                    key={label}
                    label={label}
                    value={values[0]}
                    checked={values[0] === useForm[label]}
                    onCheckedChange={(e) => setter(label, values[Number(!e)])}
                  />
                )
              }
              return (
                <Field.Combobox
                  key={label}
                  label={label}
                  list={[]}
                />
              )
            }

            return null
          })}
        </div>
        <SheetFooter className="">
          <SheetClose asChild>
            <Button
              type="submit"
            >
              {actionBtn}
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
