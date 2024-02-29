import jwt, {JwtPayload} from "jsonwebtoken";

interface SignOption {
  expiresIn?: string | number;
}

const DEFAULT_SIGN_OPTION: SignOption = {
  expiresIn: "1h",
};

export function signJwtAccessToken(payload: JwtPayload, options: SignOption = DEFAULT_SIGN_OPTION) {
  const secretKey = process.env.SECRET_KEY as string
  return jwt.sign(payload, secretKey, options);
}

export function verifyJwt(token: string) {
  try {
    const secretKey = process.env.SECRET_KEY as string
    const decoded = jwt.verify(token, secretKey);
    // console.log(decoded)
    return decoded as JwtPayload;
  } catch (error) {
    console.error(error);
  }
}
