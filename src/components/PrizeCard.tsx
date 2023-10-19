export const PrizeCard = () => {
  return (
    <>
      <div className="col">
        <div className="card prizeCard">
          <img src="https://img.freepik.com/vector-premium/trofeo-oro-placa-ganador-concurso_68708-545.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Nombre del premio</h5>
            <p className="card-text">
              Mini descripción junto con precio
            </p>
            <a href="#" className="btn btn-primary">
              Redimir
            </a>
            <p className="card-text">
              Precio
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
