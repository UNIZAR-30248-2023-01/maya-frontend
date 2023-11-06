'use client'

import { SignJWT, jwtVerify, type JWTPayload } from 'jose';

export async function sign(payload, secret: string): Promise<string> {
    const iat = Math.floor(Date.now() / 1000);
    const exp = iat + 60 * 60; // one hour

    return new SignJWT({ payload })
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setExpirationTime(exp)
        .setIssuedAt(iat)
        .setNotBefore(iat)
        .sign(new TextEncoder().encode(secret));
}

export async function verify(token: string, secret: string) {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
    // run some checks on the returned payload, perhaps you expect some specific values
    // if its all good, return it, or perhaps just return a boolean
    return payload;
}

export async function devolverTokenUsuario(token, secret) {
  
    try {
      const payload: JWTPayload = await verify(token, secret);
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