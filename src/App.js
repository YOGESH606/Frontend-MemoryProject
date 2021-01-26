import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './images/memories.png';
import useStyles from './styles';
import Posts from './component/Posts/Posts.js';
import Form from './component/Form/Form.js';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

const App = () => {
    const classes = useStyles();

    const [currentId, setCurrentId] = useState(null);

    const dispatch = useDispatch();
    useEffect(() => {
        console.log('USEEFFEXT')
        dispatch(getPosts())
    }, [dispatch]);

    return (
        <Container maxWidth='xl'>
            <AppBar className={classes.appBar} position="static" color='inherit'>
                <Typography className={classes.heading} variant="h2" align="center">
                    memories
                </Typography>
                <img className={'classes.image'} src={memories} alt="memories" height="80" width='80' />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className="mainContainer" container justify="space-between" alignItems='stretch' spacing={3} >
                        <Grid item xs={12} sm={8}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}
export default App;