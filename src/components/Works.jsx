import React from 'react';
import Grid from '@material-ui/core/Grid';
import workImg from "./asset/img/workImg.png"
import Button from '@material-ui/core/Button';
// import { makeStyles } from "@material-ui/core/styles";
// import ButtonBase from "@material-ui/core/ButtonBase";
// import Typography from "@material-ui/core/Typography";


// const images = [
//     {
//         url: "",
//         title: "Yamalog",
//         width: "60%"
//     },
//     {
//         url: "",
//         title: "Dokusho app",
//         width: "50%"
//     },
//     {
//         url: "",
//         title: "Blog",
//         width: "50%"
//     },

// ];

// const useStyles = makeStyles(theme => ({
//     root: {
//         display: "flex",
//         flexWrap: "wrap",
//         minWidth: 300,
//         width: "100%"
//     },
//     image: {
//         position: "relative",
//         height: 400,
//         [theme.breakpoints.down("xs")]: {
//             width: "100% !important", // Overrides inline-style
//             height: 100
//         },
//         "&:hover, &$focusVisible": {
//             zIndex: 1,
//             "& $imageBackdrop": {
//                 opacity: 0.15
//             },
//             "& $imageMarked": {
//                 opacity: 0
//             },
//             "& $imageTitle": {
//                 border: "4px solid currentColor"
//             }
//         }
//     },
//     focusVisible: {},
//     imageButton: {
//         position: "absolute",
//         left: 0,
//         right: 0,
//         top: 0,
//         bottom: 0,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         color: theme.palette.common.white
//     },
//     imageSrc: {
//         position: "absolute",
//         left: 0,
//         right: 0,
//         top: 0,
//         bottom: 0,
//         backgroundSize: "cover",
//         backgroundPosition: "center 40%"
//     },
//     imageBackdrop: {
//         position: "absolute",
//         left: 0,
//         right: 0,
//         top: 0,
//         bottom: 0,
//         backgroundColor: theme.palette.common.black,
//         opacity: 0.4,
//         transition: theme.transitions.create("opacity")
//     },
//     imageTitle: {
//         position: "relative",
//         padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
//             6}px`
//     },
//     imageMarked: {
//         height: 3,
//         width: 18,
//         backgroundColor: theme.palette.common.white,
//         position: "absolute",
//         bottom: -2,
//         left: "calc(50% - 9px)",
//         transition: theme.transitions.create("opacity")
//     }
// }));



function Works() {
    // const classes = useStyles();
    return (
        <div className="works">
            <h1 style={{ position: "absolute", top: 5, right: 100 }}>Works</h1>
            <Grid container spacing={5} className="workOne" style={{ marginBottom: "10em" }}>
                <Grid item xs={12} sm={4} className="workImg">
                    <img src={workImg} width="80%" alt="workImg" />
                </Grid>
                <Grid item xs={12} sm={8} className="workText">
                    <h3 style={{ paddingBottom: "5%" }}>Yama-log</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <Button variant="outlined" size="large">GitHub</Button>
                </Grid>
            </Grid>
            <Grid container spacing={5} className="workTwo">
                <Grid item xs={12} sm={4} className="workImg">
                    <img src={workImg} width="80%" alt="workImg" />
                </Grid>
                <Grid item xs={12} sm={8} className="workText">
                    <h3 style={{ paddingBottom: "5%" }}>Dokusho-app</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <Button variant="outlined" size="large">GitHub</Button>
                    <Button variant="contained" size="large">Visit Webpage</Button>
                </Grid>
            </Grid>
        </div >


        // <Grid container spacing={3} className={classes.root}>
        //     <Grid><h1 style={{ width: "40%" }}>My works</h1></Grid>
        //     {images.map(image => (

        //         <ButtonBase
        //             focusRipple
        //             key={image.title}
        //             className={classes.image}
        //             focusVisibleClassName={classes.focusVisible}
        //             style={{
        //                 width: image.width
        //             }}
        //         >
        //             <Grid
        //                 className={classes.imageSrc}
        //                 style={{
        //                     backgroundImage: `url(${image.url})`
        //                 }}
        //             />
        //             <Grid className={classes.imageBackdrop} />
        //             <Grid className={classes.imageButton}>
        //                 <Typography
        //                     component="Grid"
        //                     variant="subtitle1"
        //                     color="inherit"
        //                     className={classes.imageTitle}
        //                 >

        //                     {image.title}
        //                     <Grid className={classes.imageMarked} />
        //                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        //                 </Typography>

        //             </Grid>

        //         </ButtonBase>
        //     ))}
        // </Grid>
    )
}

export default Works;