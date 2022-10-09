import { NavBar } from "../../components/header/Navbar/NavBar";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";


export default function HomePage() {
  const  windowDimensions = 1080
    return(
      <NavBar widhtWindows = {windowDimensions} />
    )
}