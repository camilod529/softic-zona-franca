import EventCard from "./EventCard";
export const EventList = () => {
  return (
    <>
      <div class="container text-center top">
        <div class="row">
          <div class="col-1"></div>
          <div class="col-10">
            <h1>Lista de eventos</h1>
          </div>
          <div class="col-1"></div>
        </div>
      </div>

      <div class="container text-center list">
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
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
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
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-1">
        </div>
      </div>
    </>
  );
};
