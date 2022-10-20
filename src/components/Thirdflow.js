import React, { useContext } from 'react'
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { multiStepContext } from "../helpers/Stepcontext"
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);
function Thirdflow() {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    return (
        <>
            <div className='flex'>
                <div className='card-container'>
                    <Card sx={{ width: "180px", height: "150px" }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 8 }} color="text.secondary" gutterBottom>
                                <PersonIcon style={{ fill: "#5A4AD1" }} />
                            </Typography>
                            <Typography variant="h5" component="div" style={{ fontSize: "18px", fontWeight: "700" }}>
                                For myself
                            </Typography>
                            <Typography variant="body2">
                                Write better.Think more clearly.Stay organized.
                                <br />

                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
                <div className='space'></div>
                <div className='card-container'>
                    <Card sx={{ width: "180px", height: "150px" }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 8 }} color="text.secondary" gutterBottom>
                                <GroupsIcon style={{ fill: "#5A4AD1" }} />
                            </Typography>
                            <Typography variant="h5" component="div" style={{ fontSize: "18px", fontWeight: "700" }}>
                                With my team
                            </Typography>
                            <Typography variant="body2">
                                Wikis,docs,tasks & projects,all in one place.
                                <br />
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
            <Button style={{ marginLeft: "10px", backgroundColor: "#5A4AD1", width: "475px", height: "50px" }} variant='contained' onClick={() => setStep(4)}>Create Workspace</Button>
        </>
    )
}

export default Thirdflow









