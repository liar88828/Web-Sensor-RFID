import {PropsWithChildren,} from 'react';

export const FormLayout = ({children}: PropsWithChildren) => {
  return <div
    data-test={"iki div test"}
    id={"iki div id"}
    className="iki div class flex sm:flex-row flex-col gap-5 justify-center  ">

    {children}
  </div>
}

export const FormBody = ({children}: PropsWithChildren) => {
  return <div className={" bg-white rounded-xl p-5 w-full shadows"}>
    {children}
  </div>
}
export const FormButton = ({children}: PropsWithChildren) => {
  return <div className="mt-5 flex flex-row gap-2 ">{children}</div>
}
