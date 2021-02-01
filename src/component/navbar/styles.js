import { deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
    (theme) => ({
        appBar: {
            borderRadius: 15,
            margin: '0px 0px 15px 0px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding:'5px 50px',
        },
        heading: {
            color: 'rgba(0,183,255,1)',
            textDecoration:'none',
        },
        image: {
            marginLeft: '15px',
            height:"4.5rem"
        },
        toolbar:{
            display:"flex",
            justifyContent:'flex-end',
            width:'400px'
        },
        profile:{
           display:"flex" ,
            justifyContent: 'space-between',
            width:'400px',
        },
        username:{
            display:"flex",
            alignItems:"center",   
        },
        brandContainer:{
            display:"flex",
            alignItems:'center',
        },
        purple:{
            color:theme.palette.getContrastText(deepPurple[500]),
            backgroundColor:deepPurple[500],
        },
    }));