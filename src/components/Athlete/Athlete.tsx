import * as React from 'react';
import styled from '@emotion/styled';
import { styled as muiStyled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { Athlete, SweepPreference } from 'types/athlete';
import { getRowingAge, getRowingAgeClassification } from 'utils';


const SweptualityIndicatorContainer = styled.span`
  display: inline-block;
  border: 1px solid gray;
  border-radius: 2px;
  width: 34px;
  color: gray;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  padding-top: 1px;
  padding-bottom: 1px;
  background-color: transparent;
`;

const PortText = styled.span`
  color: #E7203B;
`;

const StarboardText = styled.span`
  color: green;
`;

const SweepPreferenceIndicator: React.FC<{ sweep: SweepPreference }> = ({ sweep }) => {
  const nonDomText = sweep.includes('Dominant') ? `  +` : '';
  const pText = !sweep.includes('starboard') ? (
    <>
      <PortText>P</PortText>
      <StarboardText>{nonDomText}</StarboardText>
    </>
  ) : undefined;
  const sText = !sweep.includes('port') ? (
    <>
      <StarboardText>S</StarboardText>
      <PortText>{nonDomText}</PortText>
    </>
  ) : undefined
  return (
    <SweptualityIndicatorContainer>
      {pText}{sweep === 'bi' ? ' | ' : ''}{sText}
    </SweptualityIndicatorContainer>
  );
};


const AthleteCard: React.FC<Athlete> = ({ 
  firstName,
  lastName,
  displayName,
  sweep,
  dob,
  sex,
}) => {
  const athleteName = displayName || `${firstName} ${lastName}`;
  const rowingAge = getRowingAge(dob);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            {firstName[0] + lastName[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={athleteName}
        subheader={
          <>
            {`${sex} | A: ${rowingAge} (${getRowingAgeClassification(rowingAge)}) `}
            <SweepPreferenceIndicator sweep={sweep}/>
          </>
        }
      />
    </Card>
  );
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = muiStyled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function Recipe() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            P
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default AthleteCard;
