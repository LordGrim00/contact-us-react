import react , {useState} from 'react'
import './App.css';
import TextField from '@mui/material/TextField';
import { Container, makeStyles } from '@material-ui/core';
import { color } from '@mui/system';
import { motion } from "framer-motion"
import AnimatedText from './AnimatedText'

const styles = makeStyles(theme => ({
  textField: {
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto',            
      paddingBottom: 0,
      marginTop: 0,
      fontWeight: 500,
      color: 'white',
  },
  innput: {
      // backgroundColor: 'white',
      color: 'white',
      width: '80%',
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "yellow !important"
  }
}));

function App() {

  const [mail, setmail] = useState({
    firstname: '',
    lastname: '',
    message: ''
  })

  const classes = styles();

  const placeholderText = [
    { type: "heading1", text: "We are at your service! Contact Us ;)" },
    // {
    //   type: "heading2",
    //   text: "Animating responsive text!"
    // }
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

  

  return (
    <div className="App">
      <motion.div
      initial="hidden"
      // animate="visible"
      animate={"visible"}
      variants={container}
      >
    <h1>
    {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
      })}
    
      
    </h1>
    </motion.div>

    {/* <img src={'./assets/Down.svg'} alt='down'/> */}

    <div className='map-mail-box'>

      <div className='mail-box'>

      <form type='submit'>

      <h3>
        First Name
      </h3>
      <TextField id="outlined-name" 
        // label="First Name" 
        // variant="standard" 
        // color="rgb(0, 217, 255)"
        // color="success"
        focused
        // color="warning"
        className={classes.innput}
        InputProps={{
          style: {
              color: "rgb(0, 252, 197)"
          },
          notchedOutline: classes.notchedOutline
      }}

      />

      <h3>
        Last Name
      </h3>
      <TextField id="outlined-name" 
        // label="First Name" 
        // variant="standard" 
        // color="rgb(0, 217, 255)"
        // color="success"
        focused
        // color="warning"
        className={classes.innput}
        InputProps={{
          style: {
              color: "rgb(0, 252, 197)"
          },
          notchedOutline: classes.notchedOutline
      }}

      />

      <h3>
        Message
      </h3>

      <TextField
      id="outlined-multiline-static"
      // label="Multiline"
      multiline
      focused
      rows={4}
      // defaultValue="Default Value"
      // color="warning"
      className={classes.innput}
      InputProps={{
          style: {
              color: "rgb(0, 252, 197)"
         },
         notchedOutline: classes.notchedOutline
      }}
        />

      </form>
        
      
      </div>

    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className='iframe-box'
    >
    <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7308795753047!2d72.55598574686977!3d23.033651508694547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f368a87e9b%3A0x4404c5fac85ee456!2sSchool%20of%20Engineering%20and%20Applied%20Science!5e0!3m2!1sen!2sin!4v1632192471792!5m2!1sen!2sin"
              width="85%"
              height="450"
              // className={}
              frameBorder="0"
              style={{border:"0", "filter" : "invert(95%)"}}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title='my-mapp'
            />
    </motion.div>
    </div>
      
    </div>
  );
}

export default App;
