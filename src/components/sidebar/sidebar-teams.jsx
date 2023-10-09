import { cn } from '@/lib/utils'

export function SidebarTeams ({ teams }) {
  return (
    <>
      <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>

      <ul role="list" className="-mx-2 mt-2 space-y-1">
        {teams.map((team) => (
          <li key={team.name}>
            <a
              href={team.href}
              className={cn(
                team.current
                  ? 'bg-gray-50 text-indigo-600'
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium'
              )}
            >
              <span
                className={cn(
                  team.current
                    ? 'text-indigo-600 border-indigo-600'
                    : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
                  'flex h-5 w-5 shrink-0 stroke-1 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                )}
              >
                {team.initial}
              </span>
              <span className="truncate">{team.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </>

  )
}
