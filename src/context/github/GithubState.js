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
    const searchUsers = async text => {
        setLoading();
    
        const res = await axios.get(
          `https://api.github.com/search/users?q=${text}&client_id=${
            process.env.REACT_APP_GITHUB_CLIENT_ID
          }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );
    
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        });

      };

    //Get repos

    // Get repos

    // Clear users

    // Set loading
      const setLoading = () => dispatch({type: SET_LOADING});


    return <GithubContext.Provider 
    value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers
    }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;