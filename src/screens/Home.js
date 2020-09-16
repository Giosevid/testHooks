import React, { useState, useEffect } from 'react';
import { userService } from '../api';
import Loader from '../components/commons/Loader/Loader';
import UsersList from '../components/UserList/Userslist';

export default function Home({ navigation }) {
    const [users, setuser] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      getUserData()
    }, [])

    const getUserData = async () => {
      await userService.getUser()
      .then(({data}) => {
        setuser(data.results)
        setLoading(false)
      })
      .catch(console.error)
    }

    if (loading) {
      return <Loader />
    }
  
    return (
      <>
        <UsersList users={users} navigation={navigation} />
      </>
    );
};