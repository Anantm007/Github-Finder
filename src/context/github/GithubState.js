import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USERS,
    GET_REPOS
} from '../types';

const GithubState = props => {
    const intitialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, intitialState);

    // Search users

    //Get repos

    // Get repos

    // Clear users

    // Set loading
    return <GithubContext.Provider 
    value={{
        users = state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading
    }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;