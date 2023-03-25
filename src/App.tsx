import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import AthleteCard from 'components/Athlete/Athlete';
import AthleteFilterBar from 'components/AthleteFilterBar/AthleteFilterBar';
import { Athlete } from 'types/athlete';
import athletesList from 'mockData/athletes.json';
const rowers = athletesList.rowers.slice(0, 3);

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  console.log({ rowers}); // DM debug
  return (
    <>
      <AthleteFilterBar />
      <Container maxWidth={'sm'}>
        {rowers.map((ath) => <AthleteCard {...ath as Athlete} key={`athCard_${ath.athleteId}`} />)}
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Some content will go here
          </Typography>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
