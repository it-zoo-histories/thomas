import React from 'react';

import {connect} from 'react-redux';

import {Route, Redirect} from 'react-router-dom';


const PrivateRoute = ({component: Component, userAction, isAuthenticated, ...rest}) => {
    if(isAuthenticated){
        console.log("get current user")
        userAction.getCurrentUser();
    }
    return (
        <Route 
            {...rest}
            render={props => 
                isAuthenticated ? (
                    <Component {...rest} {...props} />
                ):(
                    <Redirect 
                        to={{
                            pathname: '/login',
                            state: {from: props.location}
                        }}
                        />
                )
                
            }
        />
    )
}

function mapStore(state){
    return {
        isAuthenticated: state.UPI_userStatePart
    }
}

function mapDispatches(dispatch){
    return {
        
    }
}

export default connect(mapStore, mapDispatches)(PrivateRoute)