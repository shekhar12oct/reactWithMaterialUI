import {makeStyles} from '@material-ui/core/styles';


const useStyle=makeStyles((theme)=>({
    container:{
        backgroundColor:theme.palette.background.paper,
        padding:theme.spacing(8,0,6)
    },
    icon:{
         marginRight:'20px',
    },
    button :{
        margingTop:'40px'
    },
    cardGrid:{
        padding:'20px 0',


    },
    card:{
        height:'100%',
        display:'flex',
        flexDirection:'column'
    },
    cardMedia:{
        paddingTop:'56.25%' //gives aspect ratios as 16:9
    },
    cardContent:{
      flexGrow:1
    },
    footer:{
        backgroundColor:theme.palette.background.paper,
        padding:"50px 0"
    }
}));



export default useStyle;