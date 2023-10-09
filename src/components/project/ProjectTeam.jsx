/*import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import {
  Avatar,
  AvatarImage
} from '@/components/ui/avatar'*/
import {
  Card,
  CardContent
} from '@/components/ui/card'
import { DataTable } from '@/components/ui/table/team/data-table'
import { spanishColumns, englishColumns } from '@/components/ui/table/team/columns'


export async function ProjectTeam({ lang, user, dict }) {
  const languageColumns = lang === 'es' ? spanishColumns : englishColumns
  return (
    /* <Table>
       <TableCaption>A list of your team members.</TableCaption>
       <TableHeader>
         <TableRow>
           <TableHead>Name</TableHead>
           <TableHead>Username</TableHead>
           <TableHead>Email</TableHead>
         </TableRow>
       </TableHeader>
       <TableBody>
         {user.map((team) => (
           <TableRow key={team.user.id}>
             <TableCell className='flex items-center gap-4'>
               <Avatar>
                 <AvatarImage src="/assets/avatars/memojis/4.webp"/>
               </Avatar>
               {team.user.name}
             </TableCell>
             <TableCell>{team.user.username}</TableCell>
             <TableCell>{team.user.email}</TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>*/
    <Card>
      <CardContent className='pt-6'>
        <DataTable data={user} columns={languageColumns} dict={dict} />
      </CardContent>
    </Card>
  )
}
