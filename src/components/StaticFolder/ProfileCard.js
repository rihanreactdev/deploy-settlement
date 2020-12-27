import React from 'react'
import {Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        borderRadius: 10,
        textAlign: "center",
    },
}));

const ProfileCard=props=>{
    const classes = useStyles();
    return(
      <Card className={classes.root}>
          <CardActionArea>
              <CardMedia
                component="img"
                alt="Person"
                height="200"
                image={props.imgsrc}
                title="Person"
              />
              <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                      Mona Lisa #Name
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                      Judge #Profession
                  </Typography>
              </CardContent>
          </CardActionArea>
      </Card>
    )
}

export default ProfileCard


// <div className="row">
//   <div className="col-sm-12" style={{display:'flex',flexDirection:'row',width:'100%', justifyContent: "center"}}>
// <div>
// <div className="card" style={{display:'flex',width:'300px',height:'300px',justifyContent:'center',alignItems:'center', border: "none"}}>
// <br></br>
// <div style={{justifyContent:'center',alignItems:'center',overflow:'hidden',height:'200px',width:'200px',display:'flex',borderRadius:'10px', border: "none"}}>
//     <img  src={props.imgsrc} alt="image1"/>
// </div>
// <br></br>
// <div className="card" style={{textAlign:'left',overflow:'hidden',display:'flex',borderRadius:'10px', border: "none"}}>
//     <p>{props.name}</p>
//     <p>{props.profession}</p>
// </div>
// </div>
// </div>
// </div>
// </div>