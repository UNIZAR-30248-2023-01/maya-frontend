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
  create = true
}) {
  const properties = Object.keys(schema.shape)
    .filter((key) => !(create && ['id', 'created_at', 'updated_at'].includes(key)))

  // console.log(schema.shape.title?._def?.checks[0]?.kind)
  // console.log(schema.shape.title)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">{triggerBtn}</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>
            {description}
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <Field.Text />
          <Field.TextArea />
          <Field.Number />
          <Field.Bool />
          <Field.DatePicker />
          <Field.DatePickerWithRange />
          {/* {properties.map((key) => {
            const label = key
            return (
              <Text key={key} label={label} />
            )
          })} */}
        </div>
        <SheetFooter className="">
          <SheetClose asChild>
            <Button type="submit">{actionBtn}</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
