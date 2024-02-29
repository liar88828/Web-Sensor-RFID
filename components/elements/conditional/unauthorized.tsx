/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/ibvcWKHe9jA
 */
import Link from "next/link"

interface IUnauthorized {
  href: string;
  title?: string;
  text?: string
}

export function Unauthorized({
                               href = '/',
                               title = 'Unauthorized',
                               text = 'You do not have permission to access this resource.'
                             }: IUnauthorized) {
  return (
    <div className="flex flex-col h-screen p-4 items-center justify-center gap-4 text-center">
      <div className="w-full max-w-[400px]">
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tighter">{title}</h1>
          <p className="text-gray-500 dark:text-gray-400">{text}</p>
        </div>
        <Link
          className="btn btn-neutral mt-5"
          href={href}
        >
          Go Back
        </Link>
      </div>
    </div>
  )
}