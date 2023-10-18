import { CompCard } from "./CompCard";

export const AdmEmp =() =>{
    return(
        <>
    
<div class="container text-center top">
  <div class="row">
    <div class="col-md-">
      
    </div>
    <div class="col-md">
      <h1>Compañias Vinculadas</h1>
    </div>
    <div class="col-md-">
      
    </div>
  </div>
</div>

<div class="container text-center">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">
      
    </div>
    <div class="col-md-auto">
    <div class="row row-cols-1 row-cols-md-3 g-4">
    <CompCard/>
    <CompCard/>
    <CompCard/>
    <CompCard/>
    <CompCard/>
    <CompCard/>
    <CompCard/>
    <CompCard/>
    <CompCard/>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Agregar empresa</h5>
        <p class="card-text">Aqui podra agregar una empresa nueva</p>
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="col col-lg-2">
      
    </div>
  </div>
  </div>
        </>
    );
};
