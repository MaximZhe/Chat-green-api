import React, {useContext, useState} from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import axios from "axios"
import { userContext } from "../../context";
const Login = () => {

    

    const [user, setUser] = useState({id:'', token:''})
    const {setIsUser} = useContext(userContext)
      
        async function fetchDataWeather () {
          try{
            const response = await axios.get(`https://api.green-api.com/waInstance${user.id}/getSettings/${user.token}`)
            console.log(response.data)
            if(response){
                setIsUser(true)
            }else{
                setIsUser(false)
            }
          } catch (e) {
            alert(e);
          } 
        }
        
      
    //   const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(user);
        
    //   };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField value={user.id} onChange={e => setUser({...user,...{id:e.target.value}})}
            margin="normal"
            required
            fullWidth
            id="idInstance"
            label="idInstance"
            name="idInstance"
            type="text"
            autoFocus
          />
          <TextField value={user.token} onChange={e => setUser({...user,...{token:e.target.value}})}
            margin="normal"
            required
            fullWidth
            name="apiTokenInstance)"
            label="apiTokenInstance)"
            id="apiTokenInstance)"
            type="text"
          />
          <Button
            onClick={fetchDataWeather}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
