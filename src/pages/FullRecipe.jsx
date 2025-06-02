import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,

} from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FullRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  

  
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const promises = Array.from({ length: 100 }).map(() =>
          axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        );
        const responses = await Promise.all(promises);
        const meals = responses.map(res => res.data.meals[0]);
        setRecipes(meals);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
      
      }
    };

    fetchRecipes();
  }, []);


  

  return (
    <>
<Header/>
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {recipes.map((meal) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={meal.idMeal}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                '&:hover': { boxShadow: 6 },
                transition: '0.3s ease'
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={meal.strMealThumb}
                alt={meal.strMeal}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontWeight="bold" align="center">
                  {meal.strMeal}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  {meal.strArea} - {meal.strCategory}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    <Footer/>
    </>
  );
};

export default FullRecipe;
