import { Link } from "react-router-dom";

export const AdmEventCard = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">
            <Link to="#" className="card-link">
              Card link
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="#" className="card-link">
              Card link
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
