import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container, Typography, Card, CardContent, CardMedia,
  TextField, Grid, Box, Chip, Link,
} from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Header from '../components/Header';


const formatInstructions = (text) => {
  return text.split('. ').map((step, i) => (
    <Typography key={i} sx={{ mb: 1 }}>
      {step.trim().endsWith('.') ? step : step + '.'}
    </Typography>
  ));
};

const Home = () => {
  const [randomRecipes, setRandomRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [moreRecipes, setMoreRecipes] = useState([]);

  useEffect(() => {
    fetchRandomRecipes();
    fetchMoreRecipes();
  }, []);

  const fetchRandomRecipes = async () => {
    const promises = Array.from({ length: 6 }).map(() =>
      axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    );
    const results = await Promise.all(promises);
    const meals = results.map(res => res.data.meals[0]);
    setRandomRecipes(meals);
    setSelectedRecipe(meals[0]);
  };

  const fetchMoreRecipes = async () => {
    const promises = Array.from({ length: 16 }).map(() =>
      axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    );
    const results = await Promise.all(promises);
    setMoreRecipes(results.map(res => res.data.meals[0]));
  };

  const fetchRecipeDetails = async (id) => {
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    setSelectedRecipe(res.data.meals[0]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = async (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.trim()) {
      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
      setSearchResults(res.data.meals || []);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
      <Header />
      <br />

      <TextField
        label="Search recipes..."
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearch}
        sx={{ mb: 4 }}
      />

      <Grid container spacing={3}>
        {(searchTerm ? searchResults : randomRecipes).map((meal) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={meal.idMeal}>
            <Card
              onClick={() => fetchRecipeDetails(meal.idMeal)}
              sx={{
                cursor: 'pointer',
                transition: '0.3s',
                height: '100%',
                '&:hover': { boxShadow: 6 }
              }}
            >
              <CardMedia
                component="img"
                image={meal.strMealThumb}
                alt={meal.strMeal}
                sx={{ height: { xs: 180, sm: 200, md: 160 } }}
              />
              <CardContent>
                <Typography align="center" fontWeight="bold" fontSize={{ xs: 16, md: 18 }}>
                  {meal.strMeal}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)',
        py: 4
      }}>
        <Container maxWidth="lg">
          {selectedRecipe && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    // component={motion.img}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                    image={selectedRecipe.strMealThumb}
                    alt={selectedRecipe.strMeal}
                    sx={{ height: 400 }}
                  />
                  <Box sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    p: 3
                  }}>
                    <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold' }}>
                      {selectedRecipe.strMeal}
                    </Typography>
                  </Box>
                </Box>

                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                    <Chip icon={<RestaurantMenuIcon />} label={selectedRecipe.strCategory} color="primary" variant="outlined" />
                    <Chip icon={<LocationOnIcon />} label={selectedRecipe.strArea} color="secondary" variant="outlined" />
                    {selectedRecipe.strTags && (
                      <Chip icon={<RamenDiningIcon />} label={selectedRecipe.strTags.replace(/,/g, ', ')} color="success" variant="outlined" />
                    )}
                    <Chip icon={<AccessTimeIcon />} label="45 min" color="info" variant="outlined" />
                  </Box>

                  <Typography variant="h5" sx={{ mb: 2, color: '#D84315', fontWeight: 'bold' }}>
                    Ingredients
                  </Typography>
                  <Grid container spacing={2} sx={{ mb: 4 }}>
                    {Array.from({ length: 20 }).map((_, i) => {
                      const ingredient = selectedRecipe[`strIngredient${i + 1}`];
                      const measure = selectedRecipe[`strMeasure${i + 1}`];
                      return ingredient && ingredient.trim() ? (
                        <Grid item xs={12} sm={6} key={i}>
                          <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            p: 1.5,
                            borderRadius: 2,
                            bgcolor: 'rgba(255,243,224,0.5)',
                            '&:hover': { bgcolor: 'rgba(255,243,224,0.8)' }
                          }}>
                            <Box sx={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              bgcolor: '#D84315',
                              mr: 2
                            }} />
                            <Typography sx={{ fontWeight: 'medium' }}>
                              {measure?.trim()} {ingredient}
                            </Typography>
                          </Box>
                        </Grid>
                      ) : null;
                    })}
                  </Grid>

                  <Typography variant="h5" sx={{ mb: 2, color: '#D84315', fontWeight: 'bold' }}>
                    Instructions
                  </Typography>
                  <Box sx={{ color: 'text.primary' }}>
                    {formatInstructions(selectedRecipe.strInstructions)}
                  </Box>

                  {selectedRecipe.strYoutube && (
                    <Box sx={{ mt: 4, textAlign: 'center' }}>
                      <Link
                        href={selectedRecipe.strYoutube}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          px: 3,
                          py: 1.5,
                          bgcolor: '#FF0000',
                          color: 'white',
                          borderRadius: 2,
                          textDecoration: 'none',
                          '&:hover': {
                            bgcolor: '#D50000'
                          }
                        }}
                      >
                        Watch Video Tutorial
                      </Link>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}
        </Container>
      </Box>

      <Typography variant="h6" mt={5} mb={2}>
        More Recipes
      </Typography>
      <Box sx={{ display: 'flex', overflowX: 'auto', gap: 2, p: 1 }}>
        {moreRecipes.map((recipe) => (
          <Card
            key={recipe.idMeal}
            onClick={() => fetchRecipeDetails(recipe.idMeal)}
            sx={{ minWidth: 200, cursor: 'pointer', flexShrink: 0 }}
          >
            <CardMedia
              component="img"
              height="120"
              image={recipe.strMealThumb}
              alt={recipe.strMeal}
            />
            <CardContent>
              <Typography align="center" fontWeight="medium">
                {recipe.strMeal}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Link
                        href='/fullrecipe'
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          px: 3,
                          py: 1.5,
                          marginRight:20,
                          bgcolor: '#FF0000',
                          color: 'white',
                          borderRadius: 2,
                          textDecoration: 'none',
                          '&:hover': {
                            bgcolor: '#D50000'
                          }
                        }}
                      >
                        MORE
                      </Link>

      <Footer />
    </Container>
  );
};

export default Home;
