import {
  Grid,
  Box,
  Button,
  Modal,
  Typography,
  TextField,
} from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import MessageIcon from "@mui/icons-material/Message";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import style from "./style.module.css";
import axios from "axios";

import { userContext } from "../../context";
const Chat = () => {
  const [open, setOpen] = useState(false);
  const [chatCreate, setchatCreate] = useState(false);
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState("");
  const [idMessage, setIdMessage] = useState('');
  const [isApi, setIsApi] = useState(false);
  const [arrayMessage, setArrayMessage] = useState([])
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCreateChat = () => {setchatCreate(true)
    handleClose()};
  const handleCloceChat = () => setchatCreate(false);

  const { user } = useContext(userContext);
   
  let data = JSON.stringify({
    "chatId": `${phone}@c.us`,
    "count": 100
  });
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://api.green-api.com/waInstance${user.id}/getChatHistory/${user.token}`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    
    function makeRequest() {
     
        
        
        
      
      
    }
    
  if(arrayMessage){
    console.log(arrayMessage)
  }
  
     
  getMessage ()
  deleteMessage ()
 
  async function  postMessage () {

    let data = JSON.stringify({
      "chatId": `${phone}@c.us`,
      "message": `${message}`
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://api.green-api.com/waInstance${user.id}/sendMessage/${user.token}`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
   await axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      setArrayMessage([...arrayMessage,message])
    })
    .catch((error) => {
      console.log(error);
    });
    
  }

  async function getMessage () {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://api.green-api.com/waInstance${user.id}/ReceiveNotification/${user.token}`,
      headers: { }
    };
    
    await axios.request(config)
    .then((response) => {
      
      setIdMessage(JSON.stringify(response.data.receiptId));
      setIsApi(JSON.stringify(response.data.body.sendByApi));
      setArrayMessage([...arrayMessage, JSON.parse(JSON.stringify(response.data)).body.messageData.textMessageData.textMessage])
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  async function deleteMessage () {
    let config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: `https://api.green-api.com/waInstance${user.id}/deleteNotification/${user.token}/${idMessage}`,
      headers: { }
    };
    
    await axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  }
  return (
    <Grid container>
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
            <MessageIcon fontSize="medium" color="primary" />
          </Button>
        </Grid>
        <Modal
          sx={{ maxWidth: 500 }}
          background-color={"white"}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style.main__modal}>
            <Typography color={"white"} fontSize={"30px"}>
              Новый чат
            </Typography>
            <Box>
              <TextField
                className={style.modal__input}
                margin="normal"
                required
                fullWidth
                id="phone"
                name="phohe"
                type="phohe"
                placeholder="Введите номер"
                inputProps={{ maxLength: 12 }}
                autoFocus
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Button variant={"outlined"} onClick={handleCreateChat}>
                Создать чат
              </Button>
            </Box>
          </Box>
        </Modal>
      </Grid>
      <Grid xs={6}>
        {chatCreate ? (
          <Grid container alignItems={"center"} direction={"column"}>
            <Grid
              container
              alignItems={"center"}
              className={style.main__panel}
              padding={"16px"}
            >
              <Button>
                <AccountCircleIcon fontSize="large" color="primary" />
              </Button>
              <Box>
                <Typography className={style.main__text}>
                  {phone}
                </Typography>
                <Typography className={style.main__text}>
                  Был сегодня в 12:22
                </Typography>
              </Box>
              <Box className={style.main__icons}>
                <Button>
                  <ManageSearchIcon fontSize="medium" />
                </Button>
                <Button>
                  <MoreVertIcon fontSize="medium" onClick={handleCloceChat} />
                </Button>
              </Box>
            </Grid>
            <Grid>
              {arrayMessage ? arrayMessage.map(item => <p style={{color:'#FFFFFF', padding:'10px',}}>{item}</p>) 
              
              : null}
            </Grid>
            <Grid sx={style.main__modal} container alignItems={"center"}>
            <TextField
                  className={style.modal__input}
                  margin="normal"
                  required
                  fullWidth
                  id="message"
                  name="message"
                  type="text"
                  placeholder="Введите сообщение"
                  autoFocus
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button variant={"outlined"} onClick={postMessage}>
                  Отправить
                </Button>
                <Button variant={"outlined"} onClick={makeRequest}>
                  Del
                </Button>
            </Grid>
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default Chat;
