
import { useState } from 'react';
import { ClockIn } from '@/components/in-and-outs/botton-clock-in'
import { ClockOut } from '@/components/in-and-outs/botton-clock-out'
import { useLang } from '@/context/language-context'
import { inAndOutsSchema } from '@/lib/schemas'
import useSWR from 'swr'


export function BottonController() {

  //const { data: inAndOuts } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/in-and-outs?out_date=is.null&select=*`) 
  //const [isClockInVisible, setIsClockInVisible] = useState(inAndOuts.length === 0);
  //const [isClockOutVisible, setIsClockOutVisible] = useState(inAndOuts.length > 0 );

  const [isClockInVisible, setIsClockInVisible] = useState(false);
  const [isClockOutVisible, setIsClockOutVisible] = useState(true);

  const { dictionary } = useLang()

  return (
    <div>
      {isClockInVisible && <ClockIn 
                            triggerBtn={dictionary.inandouts['new-date-automatic-clock-in']}
                            schema={inAndOutsSchema}
                            dictionary={dictionary}
                            setIsClockInVisible={setIsClockInVisible}
                            setIsClockOutVisible={setIsClockOutVisible}/>}

      {isClockOutVisible && <ClockOut triggerBtn={dictionary.inandouts['new-date-automatic-clock-out']}
                            schema={inAndOutsSchema}
                            dictionary={dictionary} 
                            setIsClockInVisible={setIsClockInVisible}
                            setIsClockOutVisible={setIsClockOutVisible}/>}
    </div>
  );
}
