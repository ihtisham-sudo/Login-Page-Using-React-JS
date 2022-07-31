import React from 'react'
import { Grid, Paper, TextField, Button, Typography, Link } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const PurchaserLogin = ({ handleChange }) => {

    const paperStyle = { padding: 20, height: '73vh', width: 300, margin: "0 auto" }

    const btnstyle = { margin: '8px 0' }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <h4>Adoptionof Smart Contract In Supply Chain Management using IoT</h4>

                    <h2>Welcome Purchaser!</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required />
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in as a Purchaser</Button>
                {/* <Typography >
                    <Link href="#" >
                        Forgot password ?
                    </Link>
                </Typography> */}
                <Typography > Are you a Seller ?
                    <Link href="#" onClick={() => handleChange("event", 1)} >
                        Sign In Here
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default PurchaserLogin