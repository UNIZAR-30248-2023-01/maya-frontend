import { Layout } from "@/components/layout"
import { cookies } from 'next/headers'
import { verify, devolverTokenUsuario } from '@/lib/jwt_sign_verify'
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'home',
  description: 'You are in the home page'
}
export const obtenerUsuario = async () => {
  const tokenCookie = cookies().get('OutsiteJWT')
  const usuario = devolverTokenUsuario(tokenCookie.value)
  return usuario
}
export default async function home ({ children }) {

  //Autorizacion ruta /home/*
  const token = cookies().get('OutsiteJWT')
  
  if(token !== undefined){
    const resultado = await verify(token.value)
    if(resultado !== undefined){
      //Token valido 
    }else{
      //Token invalido
      redirect('/')
    }
  }
  else{
    //No existe token
    redirect('/')
  }

  return (
    <Layout>
      {children}
    </Layout>
  )
}
