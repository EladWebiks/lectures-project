import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import OneHourBox from '../OneHourBox/OneHourBox';
import theme from '../../theme';
import { display } from '@mui/system';



const freeTimes = [
    "12:00","12:20","12:40",
    "13:00","13:20","13:40",
    "14:00","14:20","14:40",
    "15:00","15:20","15:40",
    "15:00","15:20","15:40",
    "15:00","15:20","15:40",
    "15:00","15:20","15:40",
] 


const style = (theme: any) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: theme.palette.background.default, // Use theme color
    border: `2px solid ${theme.palette.primary.main}`, // Use primary color for border
    boxShadow: 24,
    p: 4,
  });

interface OrderAppointmentInterface {
    setOpenModal: (bool: boolean)=>void
    selectedDate: string | null
}

const OrderAppointment : React.FC<OrderAppointmentInterface> =({setOpenModal,selectedDate}) => {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [pickedHour, setPickedHour] = React.useState<string>("")


  const saveTheDate = ()=>{
    ///// add appoitnment to the db
    setOpenModal(false)
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={()=>{handleClose; setOpenModal(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style(theme)}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {`${selectedDate}`}
          </Typography>
          <Box sx={{maxHeight: 392, display: 'flex', flexDirection: 'column', flexWrap: 'wrap'}}>
            {freeTimes.map((hour)=>{ return <OneHourBox pickedHour={pickedHour} setPickedHour = {setPickedHour} hour={hour}/>})}
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Button onClick={saveTheDate} variant="contained">{`choose: ${pickedHour}`}</Button>
            </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default OrderAppointment;
