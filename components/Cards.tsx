import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Cards() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '30vh' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia 
            component="img"
            height="140"
            image="/src/assets/cats.jpg"
            alt="beautiful creations"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              КОТИКИ
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Вы наблюдаете самых прекрасных существ.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
