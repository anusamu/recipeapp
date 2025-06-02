
// login.jsx


import {
    TextField,
    Button,
    Typography,
    Box,
    Paper,
    Link
} from '@mui/material';


const Login = () => {
  

    return (
        <div className='center'>
        <Box
            className="flex items-center justify-center min-h-screen bg-gray-50"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f9f9f9',
                height: '100vh',
                padding: 2,
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    width: '100%',
                    maxWidth: 450,
                    padding: 3, 
                    borderRadius: 3,
                    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Typography variant="h5" textAlign="center" fontWeight="bold" mb={3} color="black">
                    Welcome Back!
                </Typography>
                <form >
                    <Box sx={{ marginBottom: 2 }}>
                        <TextField
                            label="Email Address"
                            variant="outlined"
                            fullWidth
                            name="email"
                            
                        
                            type="email"
                            required
                        />
                    </Box>
                    <Box sx={{ marginBottom: 2 }}>
                        <TextField
                            label="Password"
                            variant="outlined"
                            fullWidth
                            name="password"
                            type="password"
                            
                        
                            required
                        />
                    </Box>
                    <Box sx={{ marginBottom: 2 }}>
                    
                      
                    </Box>
                    <Box sx={{ marginBottom: 2 }}>
                        
                         
                        
                            <Button
                                sx={{ background: 'linear-gradient(to right, rgb(5, 3, 0), rgb(7, 5, 3))', color: 'white' }}
                                type="submit"
                                fullWidth
                                size="large"
                            >
                                Login
                            </Button>
                    
                    </Box>
                    <Typography className="text-center mt-3 text-sm">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-blue-600 hover:underline">
                            Signup
                        </Link>
                    </Typography>
                </form>
            </Paper>
        </Box>
        </div>
    );
};

export default Login;
