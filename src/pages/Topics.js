import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import NoMatch from './NoMatch';
import Topic from './Topic';

const Empty = () => {
    return( 
        <div>
        PLease select a topic
        </div>
    )
}
const Topics = ({match}) => 
    {
        return(

        <div>
            <h2>Topics</h2>
            <ul>
                <li><Link to={`${match.url}/render`}>Render</Link></li>
                <li><Link to={`${match.url}/component`}>Component</Link></li>
                <li><Link to={`${match.url}/props`}>Props</Link></li>
            </ul>
            
            <Switch>
                <Route exact path={match.url} component={Empty}/>
                <Route path={`${match.url}/:topicId`} component={Topic}  />
                <Route component={NoMatch}/>
            </Switch>
        </div>
    )
    };

export default Topics;


