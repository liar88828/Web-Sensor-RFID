import {NextRequest, NextResponse} from "next/server";
import prisma from "@/utils/prisma/client";
import {Inputs, tryCatch} from "@/utils/next/apiAdd";
import {hashed} from "@/utils/validator/bcrypt";
import {registerSchema} from "@/utils/validator/zod";


export async function POST(req: NextRequest) {
  return tryCatch(async () => {
    const {json} = await Inputs(req)

    if (!json.email.includes('@gmail.com')) {
      throw {message: 'you must be used Gmail', data: {}}
    }
    console.log('test')

    const validJson = registerSchema.parse(json)
    const hash = await hashed(validJson.password)
    const data = await prisma.user.create({
      data: {
        name: validJson.name,
        email: validJson.email,
        no_hp: validJson.no_hp,
        alamat: validJson.alamat,
        password: hash,
        role: 'Unverified',
      }
    })
    return NextResponse.json({message: "Register Success", data: {}}, {status: 200})

  })
}
