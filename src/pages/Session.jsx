import React, {useState} from 'react'
import { 
  CssBaseline,
   Grid, 
   Box, 
   Container, 
   Tab, 
   Tabs, 
   Paper, 
   makeStyles  
} from '@material-ui/core';
import { motion } from "framer-motion";

import Login from '../components/session/Login';
import Register from '../components/session/Register';
import backgroundImage from "../assets/images/backgrounds/sessions-background.jpg";

const useStyles = makeStyles((theme) => ({
  background:{
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: "91vh",
    paddingTop: "70px",
    [theme.breakpoints.down('sm')]: {
      paddingTop: "135px",
      height: "100vh",
    },
  }
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
          <Box>
            {children}
          </Box>
        )}
      </div>
    );
  }

const Session = () => {

  const myAccountContainerVariant = {
    hidden: {
      opacity: 0,
    },
    visible:{
      opacity: 1,
      transition:{ 
        delay: 0.5, 
        duration: 1, 
        type: "spring", 
        stiffness: 50 
      },
    },
    exit:{
      opacity:0,
      x: "10vw",
      transition:{ ease: "easeInOut" },
    },
  };

  const [value, setValue] = useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <motion.div
      variants = {myAccountContainerVariant}
      initial= "hidden"
      animate= "visible"
      exit="exit"
      className={classes.background}
    >
      <Grid>
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
                    <Login/>
                  </TabPanel>
                  <TabPanel 
                      value={value} 
                      index={1} 
                  >
                      <Register/>
                  </TabPanel>
              </Paper>
          </Container>
      </Grid>
    </motion.div>
  );
}

export default Session;
