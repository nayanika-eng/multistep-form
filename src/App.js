import './App.css';
import {Stepper,StepLabel,Step} from "@mui/material"
import Firstflow from './components/Firstflow';
import Fourthflow from './components/Fourthflow';
import Thirdflow from './components/Thirdflow';
import Secondflow from './components/Secondflow';
import { multiStepContext } from './helpers/Stepcontext';
import { useContext } from 'react';
function App() {
const {currentStep,finalData}=useContext(multiStepContext);
  function showstep(step){
    switch(step){
      case 1:
        return <Firstflow/>
      case 2:
        return <Secondflow/>
      case 3:
        return <Thirdflow/>
      case 4:
        return <Fourthflow/>
      
     }
  }
  return (
    <div className="App">
      <header className="App-header">
      <div className='heading-container'>
      <h3 style={{color:"black",marginLeft:"30px"}}>
      <img
        src={process.env.PUBLIC_URL + "/images/flowlogo.png"}
        alt="logo"
      /> Eden</h3>
    
      <div className='center-stepper'>
  
        <Stepper style={{ color:"red"}} activeStep={currentStep -1} orientation='horizontal'>
          <Step sx={{
          '& .MuiStepLabel-root .Mui-completed': {
            color: '#5A4AD1', // circle color (COMPLETED)
          },
          '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
            {
              color: 'grey.500', // Just text label (COMPLETED)
            },
          '& .MuiStepLabel-root .Mui-active': {
            color: '#5A4AD1', // circle color (ACTIVE)
          },
          '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
            {
              color: 'common.white', // Just text label (ACTIVE)
            },
          '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
            fill: 'white', // circle's number (ACTIVE)
          },
        }}>
            <StepLabel></StepLabel>
          </Step>
          <Step sx={{
          '& .MuiStepLabel-root .Mui-completed': {
            color: '#5A4AD1', // circle color (COMPLETED)
          },
          '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
            {
              color: 'grey.500', // Just text label (COMPLETED)
            },
          '& .MuiStepLabel-root .Mui-active': {
            color: '#5A4AD1', // circle color (ACTIVE)
          },
          '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
            {
              color: 'common.white', // Just text label (ACTIVE)
            },
          '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
            fill: 'white', // circle's number (ACTIVE)
          },
        }}>
            <StepLabel></StepLabel>
          </Step>
          <Step sx={{
          '& .MuiStepLabel-root .Mui-completed': {
            color: '#5A4AD1', // circle color (COMPLETED)
          },
          '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
            {
              color: 'grey.500', // Just text label (COMPLETED)
            },
          '& .MuiStepLabel-root .Mui-active': {
            color: '#5A4AD1', // circle color (ACTIVE)
          },
          '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
            {
              color: 'common.white', // Just text label (ACTIVE)
            },
          '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
            fill: 'white', // circle's number (ACTIVE)
          },
        }}>
            <StepLabel></StepLabel>
          </Step>
          <Step sx={{
          '& .MuiStepLabel-root .Mui-completed': {
            color: '#5A4AD1', // circle color (COMPLETED)
          },
          '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
            {
              color: 'grey.500', // Just text label (COMPLETED)
            },
          '& .MuiStepLabel-root .Mui-active': {
            color: '#5A4AD1', // circle color (ACTIVE)
          },
          '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
            {
              color: 'common.white', // Just text label (ACTIVE)
            },
          '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
            fill: 'white', // circle's number (ACTIVE)
          },
        }}>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </div>
      </div>
      {showstep(currentStep)}

      </header>
      </div>
  );
}

export default App;
