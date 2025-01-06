import { useEffect } from 'react'

export default function useTitle(new_title) {

    useEffect(() => {
        document.title = new_title;
    });

  return null;
  
}
