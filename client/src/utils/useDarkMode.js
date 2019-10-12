import {useEffect} from 'react'
import { useLocalStorage } from './useLocalStorage'

const useDarkMode = () => {
    const [toggle, setToggle] = useLocalStorage('toggle')
    //be more explicit with what 'toggle' refers to.
    
    useEffect(() => {
        toggle 
        ? document.body.classList.add('dark-mode') 
        : document.body.classList.remove('dark-mode')
    }, [toggle])

    return [toggle, setToggle]
}

export default useDarkMode;