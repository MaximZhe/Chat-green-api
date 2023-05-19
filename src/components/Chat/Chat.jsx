import { Grid, Box, Button, Typography, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { deleteMessage } from "../../utils/deleteMessage";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import style from "./style.module.css";
import { getMessage } from "../../utils/getMessage";
import { postMessage } from "../../utils/postMessage";
import {
  userContext,
  isModalContext,
  phoneInterlocutorContext,
} from "../../context";
import UserPanel from "../UserPanel/UserPanel";
import ModalCreateChat from "../ModalCreateChat/ModalCreateChat";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [chatCreate, setchatCreate] = useState(false);
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [idMessage, setIdMessage] = useState("");
  const [arrayMessage, setArrayMessage] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCreateChat = () => {
    setchatCreate(true);
    handleClose();
  };
  const handleCloceChat = () => {
    setchatCreate(false);
    setArrayMessage([]);
  };

  const { user } = useContext(userContext);

  function getIdMessage(idMessage) {
    setIdMessage(idMessage);
  }
  function getArrayMessage(array) {
    setArrayMessage([...arrayMessage, array]);
  }
  function postNewMessageArray() {
    setArrayMessage([...arrayMessage, message]);
  }
  function clearInputMessage() {
    setMessage("");
  }
  getMessage(user.id, user.token, getIdMessage, getArrayMessage);
  deleteMessage(user.id, user.token, idMessage);

  function dispatchMessage() {
    postMessage(
      user.id,
      user.token,
      phone,
      message,
      postNewMessageArray,
      clearInputMessage
    );
  }

  return (
    <Grid container>
      <Grid xs={4} className={style.main__wrapper}>
        <isModalContext.Provider
          value={{
            open,
            setOpen,
            handleOpen,
            handleClose,
            handleCreateChat,
          }}
        >
          <UserPanel />

          <phoneInterlocutorContext.Provider
            value={{
              phone,
              setPhone,
            }}
          >
            <ModalCreateChat />
          </phoneInterlocutorContext.Provider>
        </isModalContext.Provider>
      </Grid>
      <Grid xs={8}>
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
                <Typography className={style.main__text}>{phone}</Typography>
                <Typography className={style.main__text}>
                  Был сегодня в 12:22
                </Typography>
              </Box>
              <Box className={style.main__icons}>
                <Button>
                  <MoreVertIcon fontSize="medium" onClick={handleCloceChat} />
                </Button>
              </Box>
            </Grid>
            <Grid className={style.messages}>
              {arrayMessage
                ? arrayMessage.map((item) => (
                    <p className={style.messages__item}>{item}</p>
                  ))
                : null}
            </Grid>
            <Grid
              container
              alignItems={"center"}
              className={style.message__form}
            >
              <TextField
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
              <Button variant={"outlined"} onClick={dispatchMessage}>
                Отправить
              </Button>
            </Grid>
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default Chat;
