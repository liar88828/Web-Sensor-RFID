import {getServerSession} from "next-auth";
import {options} from "@/utils/nextauth/option";

export const getSessions = async () => {
  return await getServerSession(options)
}
