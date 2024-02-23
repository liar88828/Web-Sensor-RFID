// noinspection JSUnusedGlobalSymbols

import NextAuth from 'next-auth'
import {options} from "@/utils/nextauth/option";

const handler = NextAuth( options )
export { handler as GET, handler as POST }
// export const runtime = "edge"
