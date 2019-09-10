import React, {useContext} from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Users = () => {

    const githubContext = useContext(GithubContext);
    const {loading, users} = githubContext;

    if(loading)
    {
        return <Spinner></Spinner>
    }

    else
    {

        return (
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem key={user.id} user={user}></UserItem>
                ))} 
                
            </div>
        )
    }

}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)"
}

export default Users
