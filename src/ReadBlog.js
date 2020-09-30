import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    mainGrid: {
        marginTop: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function FullWidthGrid({ match }) {
    const classes = useStyles();

    const sections = [
        { title: 'Home', url: '#' },
        { title: 'Blogs', url: '#' },
        { title: 'Published', url: '#' },
        { title: 'About us', url: '#' },
        { title: 'Contact us', url: '#' },
        { title: 'FAQs', url: '#' },
    ];

    useEffect(() => {
        fetchBlog()
        console.log(match);
    }, [])

    const [blog, setBlog] = useState({});

    const fetchBlog = async () => {
        const fetchBlogged = await fetch(`http://localhost:3001/cms/762273d2-3fa9-4c84-bb98-44f2e4930884/single-post/${match.params.id}`);

        const blog = await fetchBlogged.json();
        setBlog(blog.data.post);
        console.log(blog);
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Blogged" sections={sections} />
                <main>
                    <div className={classes.root}>
                        <Grid container >
                            <Grid item xs={12}>
                                <h1>{blog.title}</h1>
                                <div className="blog" dangerouslySetInnerHTML={{ __html: blog.body }} style={{ height: 'auto', textAlign: 'left', marginLeft: '10vw', width: '80%' }} />
                                <div />
                            </Grid>
                        </Grid>
                    </div>
                </main>
            </Container>
            <Footer title="Footer" description="Something here to give the footer a purpose!" />
        </React.Fragment>
    );
}
