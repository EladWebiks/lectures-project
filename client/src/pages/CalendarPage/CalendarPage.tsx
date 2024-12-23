import React, { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import "./CalendarPage.css";
import OrderAppointment from "../../Components/orderAppointment/OrderAppointment";

const CalendarPage: React.FC = () => {
  const [events, setEvents] = useState<{ title: string; start: string }[]>([]);
  const [newEventTitle, setNewEventTitle] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const currentDate = useRef<Date>(new Date())

  const handleDateClick = (arg: DateClickArg) => {
    if (arg.date.getDay() === 5 || arg.date.getDay() === 6) {
      return;
    }
  if(new Date(arg.date) < new Date(currentDate.current)) return;
    setSelectedDate(arg.dateStr);
    setOpenModal(true);
  };

  const addEvent = () => {
    if (selectedDate && newEventTitle.trim() !== "") {
      setEvents([...events, { title: newEventTitle, start: selectedDate }]);
      setNewEventTitle("");
      setSelectedDate(null);
    }
  };

  const disabaledColorForWeekend = (arg: any) => {
    const date = new Date(arg.date);
    const day = date.getUTCDay();
    if (day === 4 || day === 5) return "weekend";
    else if(new Date(date) < new Date(currentDate.current)){
      return "passDate"
    }
    else {
      return "";
    }
  };

  useEffect(()=>{

    console.log(currentDate.current)
  },[])

  return (
    <div className="page" style={{ maxWidth: "900px", margin: "0 auto" }}>
      {openModal && (
        <OrderAppointment
          selectedDate={selectedDate}
          setOpenModal={setOpenModal}
        />
      )}
      <FullCalendar
        plugins={[dayGridPlugin, listPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,listWeek",
        }}
        dayCellClassNames={disabaledColorForWeekend}
        dateClick={handleDateClick}
        events={events}
        selectable={true}
        editable={true}
      />

      {/* {selectedDate && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h4>הוסף אירוע לתאריך: {selectedDate}</h4>
          <input
            type="text"
            placeholder="כותרת האירוע"
            value={newEventTitle}
            onChange={(e) => setNewEventTitle(e.target.value)}
            style={{
              padding: "5px",
              marginRight: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button onClick={addEvent} style={{ padding: "5px 10px" }}>
            הוסף אירוע
          </button>
        </div>
      )} */}
    </div>
  );
};

export default CalendarPage;
