import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppoitnmentInList from '../AppoitnmentInList/AppoitnmentInList';


const appArr = [
    {date: "22/11/23 16:00",description: "mkad nud sanuad kmads sasadsad sadsa"},
    {date: "22/11/23 16:00",description: "mkad nud sanuad kmads sasadsad sadsa"},
    {date: "22/11/23 16:00",description: "mkad nud sanuad kmads sasadsad sadsa"},
    {date: "22/11/23 16:00",description: "mkad nud sanuad kmads sasadsad sadsa"},
    {date: "22/11/23 16:00",description: "mkad nud sanuad kmads sasadsad sadsa"},
    {date: "22/11/23 16:00",description: "mkad nud sanuad kmads sasadsad sadsa"},
    {date: "22/11/23 16:00",description: "mkad nud sanuad kmads sasadsad sadsa"},
    {date: "22/11/23 16:00",description: "mkad nud sanuad kmads sasadsad sadsa"},
]


const card = (
  <React.Fragment>
    <CardContent>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        Appoitment history:
      </Typography>
      <Typography variant="body2">
      {appArr.map((app)=>{return <AppoitnmentInList date ={app.date} description={app.description}/>})}

      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function ApooitnmentHistory() {
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
