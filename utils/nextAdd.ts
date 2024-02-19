export const nextUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000'
export const paginationParam = '?limit=100&page=0'
export const cssValid = (key: string, value: string) => key === value ? ' bg-success ' : ' bg-error '
