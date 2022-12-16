import Slider from "../components/Slider";
import BrandNavBar from "../components/NavBar"
import About from "../components/about";
import IntroMenu from "../components/menu-intro";
import Ubicacion from "../components/ubicacion";
import Horarios from "../components/horarios";
import Footer from "../components/footer";
import Recomendations from "../components/recomendations";
import Carta from "./carta";

export default function Home() {
  return <>
    <Slider/>
    <div className="custom-shape-divider-top-1670423651">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
        </svg>
    </div>
    <Carta/>
  </>
}
