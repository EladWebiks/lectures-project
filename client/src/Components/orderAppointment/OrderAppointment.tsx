import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import OneHourBox from "../OneHourBox/OneHourBox";
import theme from "../../theme";
import { Container, display } from "@mui/system";

import freeTimes from "../../constants/tempHourArr";

const style = (theme: any) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: theme.palette.background.default, // Use theme color
  border: `2px solid ${theme.palette.primary.main}`, // Use primary color for border
  boxShadow: 24,
  p: 4,
});

interface OrderAppointmentInterface {
  setOpenModal: (bool: boolean) => void;
  selectedDate: string | null;
}

const OrderAppointment: React.FC<OrderAppointmentInterface> = ({
  setOpenModal,
  selectedDate,
}) => {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [pickedHour, setPickedHour] = React.useState<string>("");

  const saveTheDate = () => {
    ///// add appoitnment to the db
    setOpenModal(false);
  };

  return (
    <div>
      <Container>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={() => {
            handleClose;
            setOpenModal(false);
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style(theme)}>
            <Typography
              sx={{ textAlign: "center", width: "100%", marginBottom: "5%" }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              {`${selectedDate}`}
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: `repeat(${Math.ceil(
                  freeTimes.length / 8
                )}, 1fr)`, // Adjust the grid columns based on the number of hours
                gap: 2, // Consistent spacing
                justifyItems: "center", // Center items horizontally
                alignItems: "center", // Center items vertically
              }}
            >
              {freeTimes.map((hour) => {
                return (
                  <OneHourBox
                    pickedHour={pickedHour}
                    setPickedHour={setPickedHour}
                    hour={hour}
                  />
                );
              })}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "10%",
              }}
            >
              {pickedHour && (
                <Button
                  onClick={saveTheDate}
                  variant="contained"
                  sx={{
                    backgroundColor: "#C19A6B", // צבע חום בהיר
                    color: "white", // צבע הטקסט
                    padding: "12px 24px", // ריווח פנימי גדול יותר
                    borderRadius: "12px", // פינות מעוגלות
                    fontSize: "16px", // גודל פונט משופר
                    fontWeight: "bold", // טקסט מודגש
                    textTransform: "uppercase", // טקסט באותיות גדולות
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // צל לכפתור
                    transition: "all 0.3s ease", // אפקט חלק בעת ריחוף/לחיצה
                    "&:hover": {
                      backgroundColor: "#A0754F", // שינוי צבע בעת ריחוף
                      boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)", // צל מוגבר בריחוף
                    },
                  }}
                >
                  {`Choose: ${pickedHour}`}
                </Button>
              )}
            </Box>
          </Box>
        </Modal>
      </Container>
    </div>
  );
};

export default OrderAppointment;
