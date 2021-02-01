import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
    (theme) => ({
    reverse:{
        
            [theme.breakpoints.down('sm')]: {
            flexDirection: "column-reverse"            
            }
    }
        
    }));