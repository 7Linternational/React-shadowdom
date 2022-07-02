import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Stack from "@mui/material/Stack";



export const OfferCardDemo = () => {

  return (
    <Card className={'card'} elevation={3} >
      <CardContent>
        <Stack gap={2} direction="column">
          <Stack direction="column" spacing={2} justifyContent="center"
            alignItems="center">

            <Typography variant="h4" className={'title'} component="div">50 Days of Premium!</Typography>
            <Typography variant="h4" className={'subtitle'} component="div">Get it before 01.01.2020</Typography>
          </Stack>

        </Stack>
        <CardMedia
          sx={{ objectFit: 'contain' }}
          component="img"
          height="140"
          image="https://pathwaychurch.life/wp-content/uploads/2018/09/bow-transparent-background-1.png"
          alt="ribbon"
        />

        <div className={'shell'}>
          <div className={'circle1'}></div>
          <div className={'circle2'}></div>
        </div>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button className={'learnMore'}>Learn more</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
