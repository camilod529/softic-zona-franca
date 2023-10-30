import { Navbar, ReedPrizeCard } from "../components"
import Footer from "../components/Footer"

export const ReedPrizes =()=> {
return(
    <>
    <Navbar/>
    <img
        src="https://www.zonafrancasantander.com/imagenes//vco_secciones/secc_b271a675b677dfa13f571cf1ddbe66b79b10fd87.jpg"
        className="img-fluid banner"
      />
      <h1 className="cool-title mt-5">Premios reclamados</h1>

      <div className="container text-center">
            <ReedPrizeCard/>
      </div>
      <Footer />
    </>
)
}