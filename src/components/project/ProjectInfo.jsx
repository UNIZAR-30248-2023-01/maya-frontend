import {
  Card,
  CardHeader
} from '@/components/ui/card'
import { TeamMember } from '@/components/TeamMember'
import { cn } from '@/lib/utils'

export function ProjectInfo ({ project }) {
  function getColorClass (status) {
    switch (status) {
      case 'Finished':
        return 'bg-[#B9EFCA] text-[#00513A]' // Cambiar a la clase de color deseada c47af38c-819e-4d66-aa8e-93919a2077fd
      case 'In Progress':
        return 'bg-[#EFDCB9] text-[#50d71e]' // Cambiar a la clase de color deseada
      case 'Not Started':
        return 'bg-[#B9C5EF] text-[#000D51] ' // Cambiar a la clase de color deseada
      default:
        return 'bg-grey-500'
    }
  }

  return (
    <div className="flex flex-col mt-8 gap-8">
            <div className="flex flex-col gap-2">
              <p className="pl-4 font-semibold text-base">Name</p>
              <Card className="bg-[#F9F5EF]">
                <CardHeader>
                  <p>{project.name}</p>
                </CardHeader>
              </Card>
            </div>

            <div className="flex flex-col gap-2">
              <p className="pl-4 font-semibold text-base">Owner</p>
              <Card className="w-fit bg-[#F9F5EF]">
                <CardHeader>
                  <TeamMember id={project.owner} />
                </CardHeader>
              </Card>
            </div>
            <div className="flex flex-col gap-2">
              <p className="pl-4 font-semibold text-base">Status</p>
              <Card className={
                cn(
                  'w-fit',
                  getColorClass(project.status)
                )}>
                <CardHeader>
                  <p>{project.status}</p>
                </CardHeader>
              </Card>
            </div>

            <div className="flex flex-col gap-2">
              <p className="pl-4 text-base font-semibold">Descripcion</p>
              <Card className="bg-[#F9F5EF]">
                <CardHeader>
                  <p>{project.description}</p>
                </CardHeader>
              </Card>
            </div>
          </div>
  )
}
