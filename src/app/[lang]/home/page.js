import { obtenerUsuario } from './layout'

export default async function Home() {
  // State para almacenar el valor de la cookie
  const usuario = await obtenerUsuario()
  return (
    <home>
      <p>Bienvenido: {usuario}</p>
    </home>
  );
}
