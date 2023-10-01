import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = ['en', 'es']

function getLocale (request) {
  const headers = { 'accept-language': request.headers.get('accept-language') }
  const languages = new Negotiator({ headers }).languages()
  const locales = ['en', 'es']
  const defaultLocale = 'en'

  const langMatched = match(languages, locales, defaultLocale)
  return langMatched
}

export function middleware (request) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return Response.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)'
    // Optional: only run on root (/) URL
    // '/'
  ]
}
