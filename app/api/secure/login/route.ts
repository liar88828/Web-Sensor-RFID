import prisma from "@/utils/prisma/client";
import {signJwtAccessToken} from "@/utils/validator/jwt";
import {Inputs} from "@/utils/next/apiAdd";
import {NextRequest, NextResponse} from "next/server";
import {comparePass} from "@/utils/validator/bcrypt";

interface RequestBody {
  username: string;
  password: string;
}

export async function POST(req: NextRequest) {
  const {json} = await Inputs(req)
  console.log(json, 'is json')
  const user = await prisma.user.findUnique({
    where: {
      email: json.email,
    },
  }) as { email: string, password: string }
  console.log(user, 'is lomba')
  if (user && (await comparePass(json.password, user.password))) {
    const {password, ...userWithoutPass} = user;
    const accessToken = signJwtAccessToken(userWithoutPass);

    const result = {
      ...userWithoutPass,
      accessToken,
    };
    return NextResponse.json(result);
  } else
    return new Response(
      JSON.stringify({
        message: "Unathenticated",
      }),
      {
        status: 401,
      }
    );
}

// const {password, ...data} = lomba
// console.log('lomba exists')
// const match = await comparePass(credentials.password, password)
// if (!match) {
//   return null
// }
//
// data.role = 'Unverified Email'
// console.log('Good Pass')
// const accessToken = signJwtAccessToken(data)
//
// return {
//   ...data,
//   accessToken
// }
