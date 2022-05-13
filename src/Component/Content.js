import React from 'react'
import { CardContent, Typography } from '@mui/material'
function Content() {
  return (
    <div>
        <CardContent sx={{textAlign:'left',padding:'5px 30px',marginBottom:'10px'}}>
        <h2>About</h2>
        <Typography variant="body2" color="text.light">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
        <h2>Interests</h2>
        <Typography variant="body2" color="text.light">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
    </div>
  )
}

export default Content