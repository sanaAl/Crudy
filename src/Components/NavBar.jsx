import{AppBar,Toolbar,makeStyles} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
 const useStyles = makeStyles({
     header: {
         background:'#111111'  
          },
          tabs:{
              color: '#ffffff',
              textDecoration:'none',
              marginRight: 100,
              fontSize:20
          }

 })

const NavBar =()=>{
    const classes = useStyles();
    return(
       <AppBar className= {classes.header} position="static">
           <Toolbar>
               <NavLink className={classes.tabs} to='./' exact >Crudy</NavLink>
               <NavLink  className={classes.tabs} to='all'exact>All users</NavLink>
               <NavLink  className={classes.tabs} to='add'exact >Add user</NavLink>
           </Toolbar>
       </AppBar>
    )
}

export default NavBar;