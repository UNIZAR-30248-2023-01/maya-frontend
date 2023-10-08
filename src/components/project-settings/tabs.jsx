import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  LuLineChart,
  LuPanelRightOpen,
  LuSettings2

} from 'react-icons/lu'

export function Util () {
  return (
      <Tabs defaultValue="complete">
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="complete">
            <LuLineChart className='h-5 w-5 stroke-1'/>
          </TabsTrigger>
          <TabsTrigger value="insert">
            <LuPanelRightOpen className='h-5 w-5 stroke-1'/>
          </TabsTrigger>
          <TabsTrigger value="edit">
            <LuSettings2 className='h-5 w-5 stroke-1'/>
          </TabsTrigger>
        </TabsList>
      </Tabs>
  )
}
