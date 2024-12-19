import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const card = (
  <React.Fragment>
    <CardContent>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        next Appoitment:
      </Typography>
      <Typography variant="h5" component="div">
        22/11/24
      </Typography>
      
      <Typography variant="body2">
        name of app
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Cancel Appoitment</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
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
