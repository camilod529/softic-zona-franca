import { CompCard } from "../components/CompCard";

export const AdmEmp =() =>{
    return(
        <>
    
<div className="container text-center top">
  <div className="row">
    <div className="col-md-">
      
    </div>
    <div className="col-md">
      <h1>Compañias Vinculadas</h1>
    </div>
    <div className="col-md-">
      
    </div>
  </div>
</div>

<div className="container text-center">
  <div className="row justify-content-md-center">
    <div className="col col-lg-2">
      
    </div>
    <div className="col-md-auto">
    <div className="row row-cols-1 row-cols-md-3 g-4">
    <CompCard/>
    <CompCard/>
    <CompCard/>
    <CompCard/>
    <CompCard/>
    <CompCard/>
    <CompCard/>
    <CompCard/>
    <CompCard/>
  <div className="col">
    <div className="card h-100">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Agregar empresa</h5>
        <p className="card-text">Aqui podra agregar una empresa nueva</p>
      </div>
    </div>
  </div>
</div>
    </div>
    <div className="col col-lg-2">
      
    </div>
  </div>
  </div>
        </>
    );
};
