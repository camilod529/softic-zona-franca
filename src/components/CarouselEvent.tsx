export const CarouselEvent = () => {
  return (
    <div className="d-flex justify-content-center carusel">
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.bannerbuzz.com/media/wysiwyg/new-description/Party_Banners.png" className="d-block w-80" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.bannerbuzz.com/media/wysiwyg/new-description/Party_Banners.png" className="d-block w-80" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.bannerbuzz.com/media/wysiwyg/new-description/Party_Banners.png" className="d-block w-80" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  );
};
