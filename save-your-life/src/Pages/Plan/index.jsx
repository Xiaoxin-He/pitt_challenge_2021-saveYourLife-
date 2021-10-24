import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
    background: 'white',
    fontFamily: 'Helvetica Neue',
    headerBgColor: 'black',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#0c8ea8',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  
export default function Plan() {
    return (
        <ThemeProvider theme={theme}>
        <ChatBot
         steps={[
           {
            id:'intro', 
            message:'How are you feel today?', 
            trigger:'intro-user',
           },
           {
            id:'intro-user', 
            options:[
              {value:'y', label:'Good', trigger:'yes-response'},
              {value:'n', label:'Bad', trigger:'no-response'},
            ] 
           },
           {
            id:'yes-response', 
            message:'Great!', 
            end:true,
           },
           {
            id:'no-response', 
            message:'Sorry to hear that.', 
            end:true,
           },
          ]}
        />
        </ThemeProvider>
      );
}