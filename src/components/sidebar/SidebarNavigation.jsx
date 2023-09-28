import { cn } from '@/lib/utils'

export function SidebarNavigation ({ navigation }) {
  return (
    <ul role="list" className=" space-y-1">
      {navigation.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            className={cn(
              item.current
                ? 'bg-gray-50 text-indigo-600'
                : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
              'group flex gap-x-3 items-center rounded-md p-2 text-sm leading-6 font-medium'
            )}
          >
            <item.icon
              className={cn(
                item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                'h-5 w-5 shrink-0 stroke-1'
              )}
              aria-hidden="true"
            />
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  )
}
