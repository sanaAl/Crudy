
import NavBar from './Components/NavBar';
import Crudy from './Components/Crudy';
import AllUser from './Components/Alluser';
import AddUser from './Components/Adduser';
import NotFound from './Components/NotFound';
import EditUser from './Components/Edit';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Switch>
    <Route exact path ='/' component={Crudy}/>
    <Route exact path ='/all' component={AllUser}/>
    <Route exact path ='/add' component={AddUser}/>
    <Route exact path ='/edit/:id' component={EditUser}/>
    <Route component={NotFound}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
