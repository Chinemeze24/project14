import React from 'react';
    import Profile from './components/UserProfile';
    import UserDetails from './components/UserDetails';
    import './App.css';
    
    const App = () => {
      return (
        <div className="container">
          <Profile />
          <UserDetails />
        </div>
      );
    }


export default App;
