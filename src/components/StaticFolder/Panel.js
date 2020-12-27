import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import person from '../../assets/img/team/1.jpg'
import ProfileCard from './ProfileCard';
import logo1 from "../../assets/img/logo.png";
import LoginUserMenu from '../common/header-component/loginUserMenu';
import NavBar from "../helperComponents/navBar";
import {Grid, makeStyles, Paper} from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    header: {
        background: "rgb(128,128,128, 0.6)",
        // background: "rgb(103, 185, 83, 0.5)",
        fontWeight: "bolder",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "white",
        borderRadius: "10px",
    },
    gridRoot: {
      background: "rgb(103, 185, 83, 0.5)",
        // background: "rgb(128,128,128, 0.4)",
    },
}));

const Panel = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <NavBar />
            <Grid container spacing={3} justify="center" classes={{ root: classes.gridRoot }}>
                <Grid item xs={12}>
                    <Paper className={classNames(classes.paper, classes.header)}>CHIEF ADVISOR</Paper>
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} justify="center">
                    <Paper className={classNames(classes.paper, classes.header)}>
                        MEDIATORS PANEL(SENIOR)(A-H)
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12}justify="center">
                    <Paper className={classNames(classes.paper, classes.header)}>
                        (I - P)
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12}justify="center">
                    <Paper className={classNames(classes.paper, classes.header)}>
                        (Q - Z)
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12}justify="center">
                    <Paper className={classNames(classes.paper, classes.header)}>
                        ARBITRATORS PANEL (SENIOR) (A - H)
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12}justify="center">
                    <Paper className={classNames(classes.paper, classes.header)}>
                        (I - P)
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12}justify="center">
                    <Paper className={classNames(classes.paper, classes.header)}>
                        (Q - Z)
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12}justify="center">
                    <Paper className={classNames(classes.paper, classes.header)}>
                        ADVISORY PANEL (SENIOR) (A-H)
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12}justify="center">
                    <Paper className={classNames(classes.paper, classes.header)}>
                        (I - P)
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12}justify="center">
                    <Paper className={classNames(classes.paper, classes.header)}>
                        (Q - Z)
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
                <Grid item xs={12} sm={3} md={2} justify="center">
                    <ProfileCard imgsrc={person} name="Name" profession="Profession" />
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default Panel;
