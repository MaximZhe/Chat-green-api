import { Container, Grid, Box, Button,Modal,Typography,TextField } from "@mui/material";
import React, { useState } from "react";
import MessageIcon from "@mui/icons-material/Message";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import style from "./style.module.css";
const Chat = () => {

    const [open, setOpen] = useState(false);
    const [phone,setPhone] = useState(0);
    function createChat(e){
        e.preventDefault();
        console.log(phone)
    }
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    
      <Grid container >
        <Grid xs={6} className={style.main__wrapper}>
          <Grid
            container
            alignItems={"center"}
            className={style.main__panel}
            padding={"16px"}
          >
            <Button>
              <AccountCircleIcon fontSize="large" color="primary" />
            </Button>
            <Button onClick={handleOpen}>
              <MessageIcon fontSize="smalle" color="primary" />
            </Button>
          </Grid>
          <Modal  sx={{maxWidth:500}} background-color={'white'}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.main__modal}>
            <Typography color={'white'} fontSize={'30px'}>
                Новый чат
            </Typography>
            <Box>
            <TextField className={style.modal__input}
            margin="normal"
            required
            fullWidth
            id="phone"
            name="phohe"
            type="phohe"
            placeholder="Введите номер"
            inputProps={{ maxLength: 12 }}
            autoFocus
            value={phone} onChange={(e => setPhone(e.target.value))}
          />
          <Button variant={'outlined'} onClick={createChat}>Disabled</Button>
            </Box>
          
        </Box>
      </Modal>
        </Grid>
        <Grid xs={6}>dddd</Grid>
      </Grid>

  );
};

export default Chat;
