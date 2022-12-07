import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import Title from './Title'
import ChatBox from './Message'

function AutoLayoutExample() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
                <Item>
                    <Title />
                </Item>
            </Grid>
            <Grid item xs={6} md={6}>
                <Item>
                    <ChatBox/>
                </Item>
            </Grid>
            <Grid item xs={6} md={4}>
                <Item>xs=6 md=4</Item>
            </Grid>
            <Grid item xs={6} md={8}>
                <Item>xs=6 md=8</Item>
            </Grid>
        </Grid>
    );
}

export default AutoLayoutExample;