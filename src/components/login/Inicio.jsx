'use client'
import  { SignUp } from '@/components/login/SignUp'
import { SignIn } from '@/components/login/SignIn'

export function Inicio ({ children }) {
    
    return (
        
        <div className="w-screen h-screen relative bg-white">
           <div className="flex items-center justify-between p-4">
                <div className="flex items-center">
                    <img className="w-28 h-[104px]" src="/assets/avatars/iconos/abeja.png" alt="Abeja" />
                </div>
                <div className="flex space-x-4">
                    <div className="px-4 py-2 rounded-md shadow border border-gray-300">
                        <SignUp></SignUp>
                    </div>
                    <div className="px-4 py-2 bg-gray-900 rounded-md shadow">
                        <SignIn></SignIn>    
                    </div>
                </div>
            </div>

            <div class="flex flex-col items-center justify-center h-screen ">
                <div className="flex space-x-8">
                    <img className="w-246 h-193" src="/assets/avatars/iconos/abeja.png" />
                    <div className="text-black text-8xl font-medium font-['Inter'] leading-tight">MAYA</div>
                </div>
                <div className="text-blackk text-[64px] font-medium font-['Inter'] leading-tight">Manage Your Assignments</div>  
            
                <div className="w-[284px] h-[67px] px-4 py-2 bg-zinc-900 rounded-md shadow justify-center items-center gap-2 flex items-center">
                    <button className="text-white text-3xl font-medium font-['Inter'] leading-tight">Sign In</button>
                </div>
            </div>
           
            

         </div>
    )
  }