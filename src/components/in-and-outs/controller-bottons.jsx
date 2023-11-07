import { useState, useEffect } from 'react';
import { ClockIn } from '@/components/in-and-outs/botton-clock-in'
import { ClockOut } from '@/components/in-and-outs/botton-clock-out'
import { useLang } from '@/context/language-context'
import { inAndOutsSchema } from '@/lib/schemas'
import useSWR from 'swr'

export function BottonController() {
  const { data: inAndOuts } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/in-and-outs?out_date=is.null&select=*`);
  const [isClockInVisible, setIsClockInVisible] = useState(false);
  const [isClockOutVisible, setIsClockOutVisible] = useState(false);
  const { dictionary } = useLang();


  useEffect(() => {
    if (inAndOuts === undefined) {
      return;
    }

    // Configura el estado basado en la longitud de inAndOuts
    setIsClockInVisible(inAndOuts.length === 0);
    setIsClockOutVisible(inAndOuts.length === 1);

  }, [inAndOuts]);

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
  );
}
