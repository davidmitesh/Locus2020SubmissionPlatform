import React from 'react';
import {Route,Switch} from 'react-router-dom';
import PostsIndex from './components/posts_index';

import App from './components/app';

export default (
    <div>
        <Switch>
            <Route exact path='/' component={PostsIndex}/>


            <Route path='/posts'>
                <div>Hey I am called</div>
            </Route>
        </Switch>

    </div>

);
