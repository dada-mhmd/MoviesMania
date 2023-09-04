import { useEffect } from 'react'

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Movies`
  }, [title])
  return null
}

export default useDocumentTitle
