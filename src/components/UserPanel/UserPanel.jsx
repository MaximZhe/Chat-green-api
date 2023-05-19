import React, {useContext} from 'react';
import {
    Grid,
    Button,
  } from "@mui/material";
  import style from "./style.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MessageIcon from "@mui/icons-material/Message";
import { isModalContext } from '../../context';

const UserPanel = () => {
    const {handleOpen} = useContext(isModalContext)
    return (
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
    );
};

export default UserPanel;