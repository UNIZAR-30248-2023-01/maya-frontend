'use client'

import { Button } from '@/components/ui/button'

import { useLang } from '@/context/language-context'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog'
import { Card, CardContent } from '../ui/card'
import { Label } from '../ui/label'
import { LuCopy } from 'react-icons/lu'

export function InvitationLink ({
  triggerBtn,
  organization
}) {
  const { dictionary } = useLang()

  const invitationLink = `${process.env.NEXT_PUBLIC_VERCEL_URL}/organizations/join/${organization}`

  const copylink = (e) => {
    navigator.clipboard.writeText(invitationLink)
  }
  const handleCreateInvitationLink = () => {

  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button id="invite-member-to-org" className='first-letter:uppercase hover:bg-custom-lighterYellow text-black bg-custom-mustard w-fit font-semibold' onClick={handleCreateInvitationLink}>{dictionary.people['invite-member']}</Button>
      </DialogTrigger>
      <DialogContent>
          <DialogHeader>
            <DialogTitle className='first-letter:uppercase'>{dictionary.people['invite-member']}</DialogTitle>
            <DialogDescription>
              {dictionary.people['invite-member']}
          </DialogDescription>
          <Card>
            <CardContent className='p-2 flex justify-between h-auto items-center'>
              <Label className='p-2' id='invitation-link'>{invitationLink}</Label>
              <DialogClose asChild>
                <Button onClick={copylink} id='invitation-link-button' type="submit" className='flex flex-row gap-2 capitalize hover:bg-custom-lighterYellow text-black bg-custom-mustard min-w-fit'>
                  <Label>{dictionary.people.copy}</Label>
                  <LuCopy />
                </Button>
              </DialogClose>
            </CardContent>
          </Card>
          </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
