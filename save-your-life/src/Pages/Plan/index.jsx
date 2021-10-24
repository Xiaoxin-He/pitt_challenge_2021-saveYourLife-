import { height } from '@mui/system';
import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
    background: 'white',
    fontFamily: 'Helvetica Neue',
    headerBgColor: 'black',
    headerFontColor: '#fff',
    headerFontSize: '35px',
    botBubbleColor: '#0c8ea8',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  
export default function Plan() {
    return (
        <ThemeProvider theme={theme}>
        <ChatBot
        bubbleStyle={{ fontSize: '17px' }}
        contentStyle={{ fontSize: '17px' }}
        customStyle={{ fontSize: '17px' }}
        // contentStyle={[{ "height": "100px"}]}
        style= {{width: '100%', height:"100%"}}
         steps={steps}
        />
        </ThemeProvider>
      );
}

const steps = [
    {
     id:'intro', 
     message:'How are you feel today?', 
     trigger:'intro-user',
    },
    {
     id:'intro-user', 
     options:[
       {value:'y', label:'I am doing great! 😌', trigger:'yes-response'},
       {value:'n', label:'I feel bad today 😟', trigger:'no-response'},
     ],
    },
    {
     id:'yes-response', 
     message:'Great!', 
     trigger:'intro2',
    //  end:true,
    },
    {
     id:'no-response', 
     message:'Sorry to hear that, could you tell me more about it? ', 
     trigger:'intro2',
    //  end:true,
    },
    //next round
    {
        id:'intro2', 
        message:'Did you have exercise today?', 
        trigger:'intro-user2',
    },
    {
        id:'intro-user2', 
        options:[
          {value:'y', label:'Yes, I did! 😆', trigger:'yes-response2'},
          {value:'n', label:'Nope...I was too busy 😟', trigger:'no-response2'},
        ],
    },
    {
        id:'yes-response2', 
        message:'Awesome! The records show you did exercising for 30 min', 
        end:true,
    },
    {
        id:'no-response2', 
        message:'Excerising help you control your weight', 
        // end:true,
        trigger:'intro3',
    },
    {
        id:'intro3', 
        message:'Please follow this link to do a 10min exercise', 
    }
   ]