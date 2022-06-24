import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(()=>document.title(`Piston parTs | ${title}}`,[title]))
}

export default useDocumentTitle
