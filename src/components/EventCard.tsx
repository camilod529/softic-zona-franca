import { useNavigate } from "react-router-dom";
import { Event } from "../types/types.d";
import useWindowDimensions from "../hooks/useWindowsDiemensions";

export default function EventCard({
  title = "no title",
  description = "no description",
  imageUrl = "",
  event,
}: {
  title?: string;
  description?: string;
  imageUrl?: string;
  event: Event;
}) {
  const navigate = useNavigate();
  const { width } = useWindowDimensions();
  console.log({ width });

  return (
    <div className="card " onClick={() => navigate(`/events/${event.id_evento}`)}>
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body cardview">
        <h5 className="card-title">{title}</h5>
        {width > 768 && <p className="card-text">{description}</p>}
        <p className="card-text">
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
}
