export const RankListItem = ({ index = 0, nombre = "", puntos = 0 }) => {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item mt-1">
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <strong>{index}</strong>
              </div>
              <div className="col-6">
                <strong>{nombre}</strong>
              </div>
              <div className="col">
                <strong>{puntos}</strong>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};
