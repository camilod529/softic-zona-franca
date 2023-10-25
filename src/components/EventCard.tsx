import { useNavigate } from "react-router-dom";
import { Event } from "../types/types.d";

export default function EventCard({
  title = "no title",
  description = "no description",
  imageUrl = "",
  event
}: {
  title?: string;
  description?: string;
  imageUrl?: string;
  event: Event;
}) {
  const navigate = useNavigate();

  return (
    <div
      className="card "
      onClick={() => navigate(`/events/${event.id_evento}`)}
    >
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
}
