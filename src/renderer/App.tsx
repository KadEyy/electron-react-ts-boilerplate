import * as React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Routes from './routes';
import CustomFrame from './components/customFrame';

const App: React.FC = () => {
    return(
        <Router>
            <CustomFrame/>
            <Switch>
                {routes}
            </Switch>
        </Router>
    )
}

//Function converting your route array from routes.ts to <Route> components
const routes = Routes.map((route) => <Route key={route.title} exact={route.exact} path={route.url} component={route.component}/> );

export default App;