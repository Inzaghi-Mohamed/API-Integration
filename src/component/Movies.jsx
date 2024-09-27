import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Container, Grid } from '@mui/material';

function Movies({pokemons, search}) {
  return (

    <Container>
    <Grid container spacing={2}>

      {pokemons.filter((pokemon)=>{
               return search.toLowerCase()  === ""? pokemon: pokemon.pokemon.toLowerCase().includes(search);
      }).map((pokemon, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card sx={{ height: '100%' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={pokemon.image_url}
                alt={pokemon.pokemon}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {pokemon.pokemon}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {pokemon.location}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

}


export default Movies