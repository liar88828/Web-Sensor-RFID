import {compare, hash} from 'bcrypt';

export const comparePass = async (user: string, db: string) => compare(user, db)
export const hashed = async (password: string) => hash(password, 12);
