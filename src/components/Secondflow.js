import React, { useContext } from 'react'
import {Button, TextField} from "@mui/material";
import {multiStepContext} from "../helpers/Stepcontext"

function Secondflow() {
    const{setStep,userData,setUserData}=useContext(multiStepContext);
  return (
    <div>
        <h3 style={{color:"black",marginLeft:"40px",marginTop:"-30px"}}>Let's set up a home for all your work</h3>
  <div style={{margin:'-29px'}}></div>
  <h8 style={{color:"grey",marginLeft:"90px",fontSize:"18px"}}>You can always create another workspace later</h8>
  <div>
  <h4 style={{color:"black",fontSize:"20px"}}>Workspace Name</h4>
  <TextField style={{width:"500px",marginTop:"-20px"}} placeholder='Eden' margin="normal" variant="outlined" />
  </div>
  <div>
  <h4 style={{color:"black",fontSize:"20px"}}>Workspace URL</h4>
  <TextField  style={{width:"500px",marginTop:"-20px"}} placeholder='www.Example@gmail.com' margin="normal" variant="outlined" />
  </div>
  <div>
  <Button style={{marginLeft:"1px",backgroundColor:"#5A4AD1",width:"500px",height:"50px"}} variant='contained' onClick={()=>setStep(3)}>Create Workspace</Button>
  </div>
  </div>
  )
}

export default Secondflow