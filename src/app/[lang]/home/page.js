'use client'
import React, { useEffect, useState } from 'react';
import { devolverTokenUsuario } from '@/lib/jwt_sign_verify'

export default function Home() {
  // State para almacenar el valor de la cookie
  const [cookieValue, setCookieValue] = useState('');

  // Función para obtener el valor del token
  function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

  // Efecto para obtener y mostrar el valor de la cookie cuando el componente se monta
  useEffect(() => {
    const token = getCookie("OutsiteJWT");
    if (token) {
      const valor = devolverTokenUsuario(token, "secret") //DEVUELVE ID USUARIO
      setCookieValue(valor);
    }
  }, []);

  return (
    <div>
      <p>Bienvenido: {cookieValue || 'No se encontró la cookie'}</p>
    </div>
  );
}
