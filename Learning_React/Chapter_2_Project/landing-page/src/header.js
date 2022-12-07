import React from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1
import Item from '@mui/material/Grid'; // Grid version 1

class topNav extends React.Component {
    render() {
        return (
            <div className="header">
                <Grid container spacing={2}>
                    <Grid xs={2}>
                        <Item>xs=8</Item>
                    </Grid>
                    <Grid xs={5}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid xs={5}>
                        <Item>xs=4</Item>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default topNav;
