import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function FullWidthGrid({match}) {
    const classes = useStyles();

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
        <div className={classes.root}>
            <Grid container >
                <Grid item xs={12}>
                    <h1>{blog.title}</h1>
                    <div className="blog" dangerouslySetInnerHTML={{ __html: blog.body }} style={{ height: 'auto', textAlign: 'left', marginLeft: '10vw', width: '80%' }} />
                    <div />
                </Grid>
            </Grid>
        </div>
    );
}
