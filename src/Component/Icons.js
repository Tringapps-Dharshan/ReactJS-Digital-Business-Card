import React from 'react'
import { CardActions,IconButton } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
function Icons() {
  return (
    <CardActions sx={{display: 'inline-block',justifyContent: 'center', alignItems: 'center',margin:'10px'}}>
        <IconButton aria-label="TwitterIcon" sx={{backgroundColor:'lightgray'}}>
          <TwitterIcon />
        </IconButton>
        <IconButton aria-label="FacebookIcon" sx={{backgroundColor:'lightgray'}}>
          <FacebookIcon />
        </IconButton>
        <IconButton aria-label="InstagramIcon" sx={{backgroundColor:'lightgray'}}>
          <InstagramIcon />
        </IconButton>
        <IconButton aria-label="GitHubIcon" sx={{backgroundColor:'lightgray'}}>
          <GitHubIcon />
        </IconButton>
      </CardActions>
  )
}

export default Icons