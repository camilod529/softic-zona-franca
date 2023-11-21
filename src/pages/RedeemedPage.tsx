import { Navbar } from "../components";

export const Redeemed = () => {
    return (
        <>
            <Navbar/>
            <img
            src="https://www.zonafrancasantander.com/imagenes//vco_secciones/secc_37d4bbfbf2565771790085cdc4767c80413274bd.jpg"
            className="img-fluid banner"
            />  
            <div className="container text-center titulo mb-5">
        <div className="row mb-5">
          <div className="col-1"></div>
          <div className="col-10">
            <h1>Premios Redimidos </h1>
          </div>
          <div className="col-1"></div>
        </div>

        <div className="container text-center list">
          <div className="row justify-content-md-center">
            <div className="col-10">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button txt"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      <strong>Redimidos sin entregar</strong>
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                  >
                    <div className="container text-center mt-2 mb-3">
                      <div className="row">
                        <div className="col-6">
                          <strong>Persona</strong>
                        </div>
                        <div className="col-6">
                          <strong>Premio</strong>
                        </div>
                        <div className="row">
                        <div className="col-6">
                        <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src="..." className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div className="col-6">
                        <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src="..." className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
                      </div>
                    </div>
                    --Contenido --
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      <strong>Redimidos entregados</strong>
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse"
                  >
                    <div className="container text-center mt-2 mb-3">
                      <div className="row">
                        <div className="col-2">
                          <strong>Nombre</strong>
                        </div>
                        <div className="col-8">
                          <strong>Premio</strong>
                        </div>
                        <div className="col-2">
                          <strong>ZF-Coins</strong>
                        </div>
                      </div>
                    </div>
                    --Contenido--
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    );
};