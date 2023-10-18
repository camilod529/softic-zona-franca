import EventCard from "../components/EventCard";
export const EventList = () => {
  return (
    <>
      <div className="container text-center top">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <h1>Lista de eventos</h1>
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
                    className="accordion-button"
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
                  className="accordion-collapse collapse show"
                >
                  <div className="accordion-body">
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                  </div>
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
                    Eventos pasados
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
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
          <div className="col-1">
        </div>
      </div>
    </>
  );
};
