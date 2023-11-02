import { ChevronDownIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export function MyCard ({
  title,
  description,
  icon,
  button
}) {
  return (
      <Card className="w-full">
        <CardHeader className="grid items-start gap-4 space-y-0">
          <div className="w-full space-y-1">
            <div className='w-full flex items-center justify-between mb-1'>
              <CardTitle>{title}</CardTitle>
              {icon}
            </div>
            <CardDescription className='line-clamp-2'>
              {description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          {button
            ? (
              <Button variant="secondary" className="font-medium w-fit whitespace-nowrap">
                Manage
              </Button>
              )
            : (
              <div className="w-fit flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
                <Button variant="secondary" className="px-3 shadow-none">
                  No access
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="secondary" className="px-2 shadow-none">
                      <ChevronDownIcon className="h-4 w-4 text-secondary-foreground" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    alignOffset={-5}
                    className="w-[200px]"
                    forceMount
                  >

                    <DropdownMenuCheckboxItem>Admin</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Write</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Read</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked>
                      No access
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              )}
        </CardContent>
      </Card>
  )
}
