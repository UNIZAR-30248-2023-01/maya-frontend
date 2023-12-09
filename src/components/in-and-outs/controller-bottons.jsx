import { useState, useEffect } from 'react'
import { ClockIn } from '@/components/in-and-outs/botton-clock-in'
import { ClockOut } from '@/components/in-and-outs/botton-clock-out'
import { useLang } from '@/context/language-context'
import { inAndOutsSchema } from '@/lib/schemas'
import useSWR from 'swr'
import { useUser } from '@/context/user-context'

export function BottonController () {
  const { user } = useUser()
  console.log('usssser ', user)
  const { data: inAndOuts } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/in-and-outs?username=eq.${user?.username}&out_date=is.null&select=*`)
  console.log('innnnAndOuts ', inAndOuts)
  console.log('inAndOuts?.length ', inAndOuts?.length)
  const [isClockInVisible, setIsClockInVisible] = useState(inAndOuts?.length === 0)
  const [isClockOutVisible, setIsClockOutVisible] = useState(inAndOuts?.length !== 0)
  const { dictionary } = useLang()

  useEffect(() => {
    // Configura el estado basado en la longitud de inAndOuts
    setIsClockInVisible(inAndOuts?.length === 0)
    setIsClockOutVisible(inAndOuts?.length !== 0)
  }, [inAndOuts])

  return (
    <div>
      {isClockInVisible && (
        <ClockIn
          triggerBtn={dictionary.inandouts['new-date-automatic-clock-in']}
          schema={inAndOutsSchema}
          dictionary={dictionary}
          setIsClockInVisible={setIsClockInVisible}
          setIsClockOutVisible={setIsClockOutVisible}
        />
      )}

      {isClockOutVisible && (
        <ClockOut
          triggerBtn={dictionary.inandouts['new-date-automatic-clock-out']}
          schema={inAndOutsSchema}
          dictionary={dictionary}
          setIsClockInVisible={setIsClockInVisible}
          setIsClockOutVisible={setIsClockOutVisible}
        />
      )}
    </div>
  )
}
