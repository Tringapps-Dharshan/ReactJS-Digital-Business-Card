import './App.css';
import profile from './asserts/profile-pic.jfif'
import { Stack, Button, Card, CardMedia} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Icons from './Component/Icons';
import Content from './Component/Content';
function App() {
  return (
    <div className='digital-card'>
     <Card sx={{ maxWidth: 300,lineHeight: 0.3,textAlign: 'center',backgroundColor:'#333',color:'#fff' }}>
      <CardMedia
        component="img"
        height="194"
        image={profile}
        alt="Paella dish"
        className='card-profile'
      />
      <h3>Dharshan A</h3>
      <h4 className='role'>Frontend Developer</h4>
      <h4 className='email-id'>dharshan.a@tringapps.com</h4>
      <Stack direction="row" spacing={2} sx={{display: 'inline-block',justifyContent: 'center', alignItems: 'center'}}>
      <Button variant="contained" startIcon={<MailIcon />} sx={{textTransform:'inherit',backgroundColor:'hotpink'}}>
        Email
      </Button>
      <Button variant="contained" startIcon={<LinkedInIcon />} sx={{textTransform:'inherit'}}>
        LinkedIn
      </Button>
    </Stack>
      <Content/>
      <Icons/>
    </Card>
    </div>
  );
}

export default App;
