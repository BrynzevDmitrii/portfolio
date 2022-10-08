import { useState, useEffect } from 'react';
import {Burger} from "./Burger";
import {Items} from "./Items";


export const NavBar = () => {
    const[widht, setWidht] = useState();
    useEffect(() => {
        window.addEventListener('resize', ()=> {
          return setWidht(window.innerWidth)  
        })
  }, []);
    return(
        (widht>1024)? (<Items />):(<Burger />)
         
    )

};
