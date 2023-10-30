

export const ReedPrizeCard = () => {
  return (
    <>
      <div className="col">
        <div className="card prizeCard">
          <img src={prize.foto} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{prize.nombre_premio}</h5>
            <p className="card-text">{prize.detalles_premio}</p>
            
          </div>
        </div>
      </div>
    </>
  );
};