import React from 'react';
import {Typography,Button,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container,} from '@material-ui/core';
import {PhotoCamera} from '@material-ui/icons';
import useStyle from './styles';
import Data  from './Data'; 
import {Link} from 'react-router-dom';

const App = () => {
    const classes=useStyle();
    console.log(Data);
    return (
        <>
        <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon}/>
                    <Typography variant="h6">Cricket Album</Typography>
                </Toolbar>
            </AppBar> 
                <main>
                    <div className={classes.container}>
                <Container maxWidth="sm" style={{ marginTop:'100px' }}>
                 <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                  Cricket Facts   
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  Hello Everyone This is a Cricket Album to show most interesting and amazing cricket facts.
                </Typography>
                <div className={classes.button}>
                     <Grid container spacing={2} justify="center" color="primary">
                         <Grid item>
                             <a href="https://www.scoopwhoop.com/sports/unbelievable-cricket-facts/">
                             <Button variant="contained" >
                                More..
                             </Button>
                             </a>
                         </Grid>
                         <Grid item>
                             <Button variant="outlined" color="primary">
                                 Secondary 
                             </Button>
                         </Grid>
                     </Grid>
                </div>
                </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {Data.map((card)=>
                    (
                <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia
                        className={classes.cardMedia}
                        image={card.img}
                        title="Image Title"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5">
                             {card.title}
                            </Typography>
                            <Typography>
                             {card.content}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">View</Button>
                            <Button size="small" color="primary">Edit</Button>
                        </CardActions>
                    </Card>
                </Grid>
                ))}
                </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                @Shekhar
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary">
            If you are a true cricket lover then you have choosen the right option Welcome you!!
            </Typography>
            </footer>
        </>
    )
}

export default App;
