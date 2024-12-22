import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { UserModel } from '../../../types/schemas';
import closestAppointment from '../../../utilities/closestAppointment';



interface NextAppointmentInterFace
{
  user: UserModel | null
}
const OutlinedCard: React.FC<NextAppointmentInterFace> = ({user})=> {
  const nextapp = closestAppointment(user);
  const nextAppFormet = nextapp?.start.toLocaleDateString();
  const hourStrat =nextapp?.start.toLocaleTimeString();
  const hourFinish =nextapp?.end.toLocaleTimeString();



  const card = (
    <React.Fragment>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          next Appoitment:
        </Typography>
        <Typography variant="h5" component="div" sx={{fontSize: 16}}>
          {nextAppFormet?.toString()}
        </Typography>
        <Typography variant="h5" component="div" sx={{fontSize: 16}}>
          {nextapp &&`${hourStrat?.toString()} - ${hourFinish?.toString()}`}
        </Typography>
        
        <Typography variant="body2">
          {nextapp?.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Cancel Appoitment</Button>
      </CardActions>
    </React.Fragment>
  );
  return (
    <Box>
      <Card sx={{
        backgroundColor: '#dedbd3', // Custom background color
        padding: 2, // Optional: Add some padding
        borderRadius: 2, // Optional: Add border radius for rounded corners
      }} variant="outlined">{card}</Card>
    </Box>
  );
}
export default OutlinedCard
