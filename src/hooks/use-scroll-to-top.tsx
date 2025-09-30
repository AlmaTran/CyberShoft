import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export function useScrollToTop() {
    // lắng nge url thay đổi thì scroll top
  const location = useLocation();
  // lắng nge một cái gì thay đó thay đổi, thì sẽ làm một cái gì đó
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  },[location.pathname])
}