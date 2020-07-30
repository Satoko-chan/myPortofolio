import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";

import YamaLog from "./asset/img/works1.jpg"
import Peace from "./asset/img/works2.jpg"
import Blog from "./asset/img/works3.jpg"
import BookChat from "./asset/img/works4.png"


const images = [
    {
        url: YamaLog,
        title: "YamaLog",
        comment: "Ruby on Rails, Javascript, Sass, Bootstrap",
        link: "/yamalog"
    },
    {
        url: Peace,
        title: "Web API app",
        comment: "comming soon...",
        link: ""
    },
    {
        url: Blog,
        title: "Blog",
        comment: "EJS, MongoDB, Bootstrap",
        link: "/blog"
    },
    {
        url: BookChat,
        title: "My portofolio",
        comment: "React.js, Material-UI",
        link: "/portofolio"
    }
];

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        minWidth: 300,
        width: "100%"
    },
    image: {
        position: "relative",
        height: 500,
        width: "50% !important",
        [theme.breakpoints.down("sm")]: {
            width: "100% !important", // Overrides inline-style
            // height: 500
        },
        "&:hover, &$focusVisible": {
            zIndex: 1,
            "& $imageBackdrop": {
                opacity: 0.5,
                backgroundColor: theme.palette.common.black
            },
            "& $imageMarked": {
                opacity: 1
            },
            "& $imageTitle": {
                border: "4px solid currentColor"
            }
        }
    },
    focusVisible: {},
    imageButton: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.common.white
    },
    imageSrc: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: "cover",
        backgroundPosition: "center 50%"
    },
    imageBackdrop: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.4,
        transition: theme.transitions.create("opacity")
    },
    imageTitle: {
        position: "relative",
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
            6}px`
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: "absolute",
        bottom: -2,
        left: "calc(50% - 9px)",
        transition: theme.transitions.create("opacity")
    }
}));


function Works() {
    const classes = useStyles();
    return (
        <div id="works">
            <h2>Works</h2>
            <br />

            {/* <Grid container spacing={5}>
                <Grid item xs={12} md={8} >
                    <div className="work1" >
                        <img src={YamaLog} width="100%" height="400em" alt="YamaLog" />
                    </div>
                </Grid>
                <Grid item xs={12} md={4} >
                    <img src={Peace} width="100%" height="400em" alt="Peace" className="work2" />
                </Grid>
                <Grid item xs={12} md={6} ><img src={Blog} width="100%" height="400em" alt="Blog" className="work3" /></Grid>
                <Grid item xs={12} md={6} ><img src={BookChat} width="100%" height="400em" alt="BookChat" className="work4" /></Grid>
            </Grid> */}


            <Fade right cascade>
                <div className={classes.root}>
                    {images.map(image => (
                        <ButtonBase
                            focusRipple
                            key={image.title}
                            className={classes.image}
                            focusVisibleClassName={classes.focusVisible}
                        >
                            <Link to={`${image.link}`} >
                                <span
                                    className={classes.imageSrc}
                                    style={{
                                        backgroundImage: `url(${image.url})`
                                    }}
                                />
                                <span className={classes.imageBackdrop} />
                                <span className={classes.imageButton}>
                                    <Typography
                                        component="span"
                                        variant="subtitle1"
                                        color="inherit"
                                        className={classes.imageTitle}
                                    >
                                        <h3 style={{ letterSpacing: "0.5vh" }}>{image.title}</h3>
                                        <p>using :</p>
                                        <p style={{ fontWeight: "border" }}>{image.comment}</p>
                                        <span className={classes.imageMarked} />
                                    </Typography>
                                </span>
                            </Link>
                        </ButtonBase>
                    ))}
                </div>
            </Fade>
        </div>
    )
}

export default Works;