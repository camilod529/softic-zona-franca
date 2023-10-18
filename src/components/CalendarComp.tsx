import { addHours } from "date-fns";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { localizer } from "../helpers/calendarLocalizer";

const events = [
  {
    title: "Cumpleaños del jefe",
    notes: "Hay que comprar el pastel",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgcolor: "#fafafa",
    user: {
      _id: "123",
      name: "Camilo",
    },
  },
];

export const CalendarComp = () => {
  const eventStyleGetter = (event: any, start: Date, end: Date, isSelected: boolean) => {
    // console.log({ event, start, end, isSelected });

    const style = {
      backgroundColor: "#347CF7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };
    return { style };
  };
  return (
    <Calendar
      culture="es"
      style={{ height: "500px" }}
      eventPropGetter={eventStyleGetter}
      localizer={localizer}
      defaultView="week"
      events={events}
    />
  );
};
