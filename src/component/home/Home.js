import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { Container, Grow, Grid } from '@material-ui/core';
import Posts from '../../component/Posts/Posts.js';
import Form from '../../component/Form/Form.js';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';


const Home = () => {
    const classes = useStyles();
    const [currentId, setCurrentId] = useState(null);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Grow in>
            <Container>
                <Grid className={classes.reverse} container justify="space-between" alignItems='stretch' spacing={3} >
                    <Grid item xs={12} sm={8}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home;
