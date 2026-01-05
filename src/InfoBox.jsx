import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({ info }) {
    const INIT_URL="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
   
    return (
        <div className="InfoBox">
            <h2>Weather Information</h2>    
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <h2>Temperature={info.temp}&deg;</h2>
            <h2>Humidity={info.humidity}%</h2>
            <h2>Weather={info.weather}</h2>
            <h2>Feels Like={info.feelslike}&deg;</h2>
            <h2>Min Temp={info.temp_min}&deg;</h2>
            <h2>Max Temp={info.temp_max}&deg;</h2>
            <h2>Wind Speed={info.windspeed}m/s</h2>
        </Typography>
      </CardContent>
      
    </Card>
        </div>
    );
}