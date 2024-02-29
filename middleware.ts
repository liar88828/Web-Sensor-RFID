import {JWT} from 'next-auth/jwt'
import {NextRequestWithAuth, withAuth} from 'next-auth/middleware'

export default withAuth(
  function middleware(req: NextRequestWithAuth,event,) {
    // console.log(req,'req middleware')
    // console.log(event,'event middleware')
    // console.log(req.nextUrl.pathname)
    // console.log('test')
    // console.log(req?.nextauth.token?.role)
    // if (
    // 	req.nextUrl.pathname.startsWith('/createUser') &&
    // 	req.nextauth.token?.role !== 'admin'
    // ) {
    // 	return NextResponse.rewrite(new URL('/denied', req.url))
    // }
    // if (req.nextUrl.pathname.startsWith('/login')
    //   || req.nextUrl.pathname.startsWith('/register')
    // ) {
    //   // if (req.nextauth.token !== null||req.nextauth.token !== undefined) {
    //   //   return NextResponse.rewrite(new URL('/', req.url))
    //   // }
    // }

    // if (
    //   req.nextUrl.pathname.startsWith('/admin') //&&
    //   // req.nextauth.token?.role !== 'admin'
    // ) {
    //   return NextResponse.rewrite(new URL('/denied', req.url))
    // }
  },
  {
    callbacks: {
      authorized: ({req, token}: { token: JWT | null; req: any }) => {
        // console.log(req,'req middleware callbacks')
        // console.log(token,'token middleware callbacks')
        if (req.nextUrl.pathname.startsWith('/admin')) {
          return token.role === 'admin'
        }
        return !!token // will remove token
      },
    },
  },

)
export const config = {
  matcher: [
    // '/',
    '/dashboard/:path*',
    '/anggota/:path*',
    '/sensor/:path*',
    '/record/:path*',
    '/lomba/:path*',
  ]
}
