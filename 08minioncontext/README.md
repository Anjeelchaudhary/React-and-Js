# Router Notes

#### # UserContext.js

```
import React from "react";

const UserContext = React.createContext();

export default UserContext;
```

#### # App -- wrapping all components with UserContextProvider

```
import UserContextProvider from './context/UserContextProvider'
   return (
    <UserContextProvider>
      <div>React with anjeel</div>
      <Login />
      <Profile />
    </UserContextProvider>
  )
```

#### # UserContextProvider.jsx -- UserContext is component

```

const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
```

#### # givingInput from file login

```
import React, { useState, useContext } from 'react';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);         //this setUser is from UserContextProvider component

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ userName, password })
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='userName' />
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
```

#### # takingInput as Profile.jsx

```
import React, { useContext } from 'react'

function Profile() {
    const { user } = useContext(UserContext);    //this use taking from UserContextProvider component
    if (!user) return <div>PleaseLogin</div>
    return <div>Wecome {user.userName}</div>
}

export default Profile
```
