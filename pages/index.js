import Slider from "../components/Slider";
import BrandNavBar from "../components/NavBar"
import About from "../components/about";
import IntroMenu from "../components/menu-intro";
import Ubicacion from "../components/ubicacion";
import Horarios from "../components/horarios";
import Footer from "../components/footer";
import Recomendations from "../components/recomendations";

export default function Home() {
  return <>
    <Slider/>
    <About/>
    <Recomendations/>
    <Ubicacion/>
    <Horarios/>
  </>
}
