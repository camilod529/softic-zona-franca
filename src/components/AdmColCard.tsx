
export const AdmColCard = ({ img, title }: { img: string, title: string }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </>
  );
};
