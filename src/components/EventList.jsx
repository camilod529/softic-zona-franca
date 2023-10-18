import EventCard from "./EventCard";
export const EventList = () => {
  return (
    <>
      <div class="container text-center top">
        <div class="row">
          <div class="col-md-"></div>
          <div class="col-md">
            <h1>Lista de eventos</h1>
          </div>
          <div class="col-md-"></div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-1"></div>
          <div class="col-10">
            <div class="accordion" id="accordionPanelsStayOpenExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Proximos eventos
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse show"
                >
                  <div class="accordion-body">
                    <div class="card mb-3">
                      <img src="..." class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p class="card-text">
                          <small class="text-body-secondary">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                    <div class="card mb-3">
                      <img src="..." class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p class="card-text">
                          <small class="text-body-secondary">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                    <EventCard />
                    <div class="card mb-3">
                      <img src="..." class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p class="card-text">
                          <small class="text-body-secondary">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    Eventos pasados
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  class="accordion-collapse collapse"
                >
                  <div class="accordion-body">
                    <div class="card mb-3">
                      <img src="..." class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p class="card-text">
                          <small class="text-body-secondary">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                    <div class="card mb-3">
                      <img src="..." class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p class="card-text">
                          <small class="text-body-secondary">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                    <div class="card mb-3">
                      <img src="..." class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p class="card-text">
                          <small class="text-body-secondary">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-2"></div>
        </div>
      </div>
    </>
  );
};
