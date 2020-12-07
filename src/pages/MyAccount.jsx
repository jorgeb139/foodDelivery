import React, {useState} from 'react'
import { CssBaseline, Grid, Box, Typography, Container, Tab, Tabs, Paper, Avatar, makeStyles  } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={2}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

const MyAccount = () => {

    const [value, setValue] = useState(0);
    const classes = useStyles();

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <Grid >
            <CssBaseline /> 
            <Container maxWidth="xs" >
                <Paper>
                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        aria-label="disabled tabs example"
                        centered = {true}
                    >
                        <Tab label="Inicia sesión" />
                        <Tab label="Registrate" />
                    </Tabs>
                    <TabPanel 
                        value={value} 
                        index={0} 
                    >
                        <Avatar className={classes.avatar}>
                          <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                          Ingresa
                        </Typography>
                    </TabPanel>
                    <TabPanel 
                        value={value} 
                        index={1} 
                    >
                        Item Two
                    </TabPanel>
                </Paper>
            </Container>
        </Grid>
  );
}

export default MyAccount;
