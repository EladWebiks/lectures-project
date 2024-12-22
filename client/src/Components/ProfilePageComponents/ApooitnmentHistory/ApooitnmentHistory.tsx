import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AppoitnmentInList from '../AppoitnmentInList/AppoitnmentInList';
import { UserModel } from '../../../types/schemas';

interface AppointmentsHistoryInterFace
{
  user: UserModel | null
}


const ApooitnmentHistory : React.FC <AppointmentsHistoryInterFace>= ({user})=> {

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Appoitment history:
        </Typography>
        <Typography variant="body2">
        {user?.appointments.map((app)=>{return <AppoitnmentInList date ={app.start} description={app.description}/>})}
  
        </Typography>
      </CardContent>
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

export default ApooitnmentHistory;
