export const RankListItem = ({ index = 0, nombre = "", puntos = 0 }) => {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item mt-1">
          <div className="container">
            <div className="row">
              <div className="col-2">
                <strong>{index}</strong>
              </div>
              <div className="col-8 text-left">
                <strong>{nombre}</strong>
              </div>
              <div className="col-2">
                <strong>{puntos}</strong>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};
