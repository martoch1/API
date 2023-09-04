import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    // Use Axios to fetch data from the API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // Save the list of users in state
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {listOfUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
