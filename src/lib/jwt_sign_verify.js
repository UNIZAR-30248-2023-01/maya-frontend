const { SignJWT, jwtVerify } = require('jose');

export async function signin(username) {
  // Define el payload (contenido del token)
  const payload = {
    sub: '1234567890',
    userId: username,
    iat: Math.floor(Date.now() / 1000),
  };

  // Define la clave secreta dentro de la función (definir en otro lado)
  const secret = new TextEncoder().encode(
    "Swe4g7c?UBm5Nrd96vhsVDtkyJFbqKMTm!TMw5BDRLtaCFAXNvbq?s4rGKQSZnUP"
  );

  // Firma el token y devuelve el token resultante
  return (async () => {
    const token = await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt() // Agregar la fecha de emisión
      .setExpirationTime('1h') // Tiempo de expiración
      .sign(secret);

    return token;
  })();
}

export async function verify(token) {
  try{
    const { payload, protectedHeader } = await jwtVerify(token, new TextEncoder().encode("Swe4g7c?UBm5Nrd96vhsVDtkyJFbqKMTm!TMw5BDRLtaCFAXNvbq?s4rGKQSZnUP"));
    return payload;
  }catch (error) {
    return undefined
  }
    
}

export async function devolverTokenUsuario(token) {
    try {
      const payload = await verify(token)
      // Haz lo que necesites con el objeto payload aquí
      const payloadString = JSON.stringify(payload);
      const userIdMatch = payloadString.match(/"userId":"([^"]+)"/);

    if (userIdMatch && userIdMatch[1]) {
      const userId = userIdMatch[1];
      return userId;
    } else {
      return null;
    }
    } catch (error) {
      console.error('Error al verificar el token:', error);
    }
  }