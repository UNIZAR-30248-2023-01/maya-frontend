import {
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
} from '@/components/ui/avatar'
// import { TeamMember } from '@/components/TeamMember'

// const invoices = [
//   {
//     invoice: 'INV001',
//     paymentStatus: 'Paid',
//     totalAmount: '$250.00',
//     paymentMethod: 'Credit Card'
//   },
//   {
//     invoice: 'INV002',
//     paymentStatus: 'Pending',
//     totalAmount: '$150.00',
//     paymentMethod: 'PayPal'
//   },
//   {
//     invoice: 'INV003',
//     paymentStatus: 'Unpaid',
//     totalAmount: '$350.00',
//     paymentMethod: 'Bank Transfer'
//   },
//   {
//     invoice: 'INV004',
//     paymentStatus: 'Paid',
//     totalAmount: '$450.00',
//     paymentMethod: 'Credit Card'
//   },
//   {
//     invoice: 'INV005',
//     paymentStatus: 'Paid',
//     totalAmount: '$550.00',
//     paymentMethod: 'PayPal'
//   },
//   {
//     invoice: 'INV006',
//     paymentStatus: 'Pending',
//     totalAmount: '$200.00',
//     paymentMethod: 'Bank Transfer'
//   },
//   {
//     invoice: 'INV007',
//     paymentStatus: 'Unpaid',
//     totalAmount: '$300.00',
//     paymentMethod: 'Credit Card'
//   }
// ]

export async function ProjectTeam ({ user, dict }) {
  return (
    <Table>
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
    </Table>
  )
}
