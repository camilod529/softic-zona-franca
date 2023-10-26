import { Tag } from "../components/Tag";
import { Navbar } from "../components";
import Footer from "../components/Footer";

export const TagsPage = () => {
  return (
    <>
      <img
        src="https://www.zonafrancasantander.com/imagenes/vdo_cabezotes/cabe_93d666c2e538322a27e6562c19bc5597a2066bd6.jpg"
        className="contenido img-fluid"
      />
      <img
        src="https://i.imgur.com/9PDGhjx.jpg"
        className="contenido-alternativa img-fluid contenido "
      />
      <Navbar />
      <div className="">
        <div className="container titulo">
          <h1 className="cool-title mt-5">Intereses</h1>

          <div className="greaterdiv"></div>
          <div className="interests-container">
            <form id="interests-form">
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <br />
              <br />
              <button className="float-end marRight" type="button">
                Save Interests
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
