import React,{useState} from 'react';
import './App.css';
import AppRoute from './components/AppRouter/AppRoute';
import { userContext } from './context';
function App() {

  const [isUser, setIsUser] = useState(false);
  const [user, setUser] = useState({id:'', token:''})
  return (
   <userContext.Provider value={{
      isUser,
      setIsUser,
      user,
      setUser
   }}>
      <>
    <AppRoute/>
    </>
   </userContext.Provider>
    
    
    
  );
  
}

export default App;
