import React, { useContext } from 'react';
import { Button, TextField } from "@mui/material";
import { multiStepContext } from "../helpers/Stepcontext"

function Firstflow() {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    return (
        <div>
            <div>
                <h3 style={{ color: "black", marginLeft: "70px", marginTop: "-30px" }}>Welcome! First things first...</h3>
                <div style={{ margin: '-29px' }}></div>
                <h8 style={{ color: "grey", marginLeft: "110px", fontSize: "18px" }}>You can always change them later</h8>
            </div>
            <div>
                <h4 style={{ color: "black", fontSize: "20px" }}>Full Name</h4>
                <TextField style={{ width: "500px", marginTop: "-20px" }} placeholder='Steve Jobs' margin="normal" variant="outlined" />
            </div>
            <div>
                <h4 style={{ color: "black", fontSize: "20px" }}>Display Name</h4>
                <TextField style={{ width: "500px", marginTop: "-20px" }} placeholder='Steve' margin="normal" variant="outlined" />
            </div>
            <div>
                <Button style={{ marginLeft: "1px", backgroundColor: "#5A4AD1", width: "500px", height: "50px" }} variant='contained' onClick={() => setStep(2)}>Create Workspace</Button>
            </div>
        </div>
    )
}

export default Firstflow