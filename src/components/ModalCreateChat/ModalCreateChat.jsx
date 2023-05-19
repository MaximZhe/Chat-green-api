import React,{useContext} from 'react';
import { isModalContext, phoneInterlocutorContext } from '../../context';
import {
    Box,
    Button,
    Modal,
    Typography,
    TextField,} from "@mui/material";

    import style from "./style.module.css";
const ModalCreateChat = () => {
  const {open, handleClose, handleCreateChat} = useContext(isModalContext);
  const {phone, setPhone} = useContext(phoneInterlocutorContext)
    return (
        <Modal
          className={style.modal}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style.modal__form}>
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
    );
};

export default ModalCreateChat;