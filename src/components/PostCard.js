import React, { useState,useEffect } from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function PostCard(data_obj) {
  //console.log(data_obj);
  
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {(data_obj.data.data.title)}
        </Typography>
        <LazyLoadImage width="100%" height="auto" src={(data_obj.data.data.img_url)} />
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         {(data_obj.data.data.title)}
        </Typography>
        <Typography variant="body2">
         {(data_obj.data.price)}
          <br />
          {JSON.stringify((data_obj.data.data.location))}
        </Typography>
        <Typography variant="body2">
         {(data_obj.data.priority)}
          <br />
          {JSON.stringify((data_obj.data.data.time))}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

  );
}
