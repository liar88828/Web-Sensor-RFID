'use client'
import {useCallback, useRef} from "react";
import {toPng} from "html-to-image";

export function useDownloadImage() {
  const ref = useRef<HTMLDivElement>(null)
  // console.log(ref)

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, {cacheBust: true,})
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download =
          new Date().toLocaleDateString('id-ID', {dateStyle: 'full'}) +
          '.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])
  return {ref, onButtonClick}
}
