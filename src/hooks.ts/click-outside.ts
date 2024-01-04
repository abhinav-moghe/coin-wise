import { MutableRefObject, useEffect } from "react"

const useClickOutside = (open: boolean, ref: MutableRefObject<HTMLDivElement | null>, handler: () => void): void => {
  useEffect(() => {
    const listener = (e: MouseEvent): void => {
      if (open && !ref?.current?.contains(e.target as HTMLDivElement)) {
        handler()
      }
    }

    if (open) {
      document.addEventListener("click", listener, true)
    }

    return () => document.removeEventListener("click", listener, true)
  }, [open])
}

export default useClickOutside