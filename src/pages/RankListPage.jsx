import { RankListItem } from "../components";

export const RankList = () => {
  return (
    <>
      <div className="container text-center top">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <h1>Tabla de puntajes</h1>
          </div>
          <div className="col-1"></div>
        </div>
      </div>

      <div className="container text-center list">
        <div className="row justify-content-md-center">
          <div className="col-1"></div>
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
                    <strong>Empresas</strong>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                >
                  <div class="container text-center mt-2 mb-3">
                    <div class="row">
                      <div class="col">
                        <strong>Rank</strong>
                      </div>
                      <div class="col-6">
                        <strong>Nombre</strong>
                      </div>
                      <div class="col">
                        <strong>ZF-Coins</strong>
                      </div>
                    </div>
                  </div>

                  <RankListItem />
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
                    <strong>Colaboradores</strong>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                >
                  <div class="container text-center mt-2 mb-3">
                    <div class="row">
                      <div class="col">
                        <strong>Rank</strong>
                      </div>
                      <div class="col-6">
                        <strong>Nombre</strong>
                      </div>
                      <div class="col">
                        <strong>ZF-Coins</strong>
                      </div>
                    </div>
                  </div>
                  <RankListItem />
                  <RankListItem />
                  <RankListItem />
                  <RankListItem />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </>
  );
};
