import React, { useEffect, useState } from 'react';

const App = () => {

  const [user, setUser] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch('/api/user');
      const data = await response.json();
      console.log('Data type :', Array.isArray(data.data));
      setUser(data.data);
      console.log('Data:', data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {user.map((user, index) => {
        return <>
          <div style={{ border: "1px solid grey", width:"500px" }}>
            <p>{user.Name.first_name}</p>
            <p>{user.Name.last_name}</p>
            <p>{user.Phone_Number}</p>
            <p>{user.Email}</p>
          </div>
        </>
      })}
    </div>
  );
}

export default App;