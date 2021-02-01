import { Navbar } from './component/navbar/Navbar';
import Home from './component/home/Home';
import Auth from './component/auth/Auth';
import { Container } from '@material-ui/core';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

const App = () => {
     return (
        <BrowserRouter>
             <Container>
                 <Navbar />
                 <Switch>
                     <Route path="/" exact component={Home}/>
                     <Route path="/auth" exact component={Auth}/>
                 </Switch>
             </Container>
        </BrowserRouter>
    );
}
export default App;