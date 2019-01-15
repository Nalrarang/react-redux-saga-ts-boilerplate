import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './pages/Main';

const MainRoute: React.SFC = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/main" component={Main} />
            </Switch>
        </div>
    );
};

export default MainRoute;
