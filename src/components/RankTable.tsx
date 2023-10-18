import { useState } from "react";
import { useEffect } from "react";

export const RankTable = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container">
      {data ? (
        <>
          <div className="row">
            <div className="col">
              <div className="d-flex justify-content-center">2do puesto</div>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center">1er puesto</div>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center">3er puesto</div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="d-flex justify-content-center">
                <img src={data.results[0].picture.large} alt="" />
              </div>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center">
                <img src={data.results[0].picture.large} alt="" />
              </div>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center">
                <img src={data.results[0].picture.large} alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="d-flex justify-content-center">300</div>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center">11000</div>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center">300</div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
