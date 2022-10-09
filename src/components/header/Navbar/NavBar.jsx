import { useState, useEffect } from "react";
import { Burger } from "./Burger";
import { Items } from "./Items";

export const NavBar = ({widhtWindows}) => {
  const [widht, setWidht] = useState(widhtWindows);
  useEffect(() => {
    window.addEventListener("resize", () => {
       setWidht(window.innerWidth);
    });
  }, [widht]);
  return (widht < 1024 ? <Burger />: <Items /> );
};
