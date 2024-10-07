import React, { useState } from 'react'
import { Typography, Card, CardActions, CardContent, CardMedia, IconButton } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import './App.css'

function Testimonio({ name, country, profession, imageURL, imageSize, testimony, description }) {

  // Estado para controlar si se ha dado "me gusta"
  const [liked, setLiked] = useState(false);

  // Función para cambiar el estado al hacer clic en el icono
  const handleLike = () => {
    setLiked(!liked);

  }

  return (
    <>
      <Card 
        sx={{ 
         maxWidth: 500, 
         border: '2px solid black', 
         mb:3, 
         ':last-child': { mb:0 } // elimina el margen inferior para el último Card
        }}
      >
        <CardMedia
          sx={{ height: imageSize }}
          image={imageURL}
          alt={description}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name} en {country}
          </Typography>
          <Typography gutterBottom variant="h7" component="div" sx={{ mb: 2 }}>
            {profession}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'justify' }}>
            {testimony}
          </Typography>
        </CardContent>

        <CardActions>
          <IconButton onClick={handleLike}>
            {liked === true ? <FavoriteIcon sx={{ color: 'red' }} /> : <FavoriteBorderIcon sx={{ color: 'black' }} />}
          </IconButton>
        </CardActions>

      </Card>
    </>
  )
}

export default Testimonio