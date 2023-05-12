import { Container, Grid,Box } from '@mui/material';
import React from 'react';
import MessageIcon from '@mui/icons-material/Message';
const Chat = () => {
    return (
        <Container>
            <Grid container >
                <Grid xs={6}>
                    <Box>
                        <MessageIcon fontSize='25px'/>
                        
                    </Box>
                </Grid>
                <Grid xs={6}>
                    dddd
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;