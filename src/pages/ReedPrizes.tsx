import { Navbar } from "../components"
import Footer from "../components/Footer"
import { PrizeCard } from "../components/PrizeCard";
export const ReedPrizes =()=> {
return(
    <>
    <Navbar/>
    <img
        src="https://www.zonafrancasantander.com/imagenes//vco_secciones/secc_b271a675b677dfa13f571cf1ddbe66b79b10fd87.jpg"
        className="img-fluid banner"
      />
      <h1 className="cool-title mt-5">Tienda de Premios</h1>

      <div className="container text-center">
            <PrizeCard/>
      </div>
      <Footer />
    </>
)
}