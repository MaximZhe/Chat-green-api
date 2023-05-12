import React,{useState} from 'react';
import './App.css';
import AppRoute from './components/AppRouter/AppRoute';
import { userContext } from './context';
function App() {

  const [isUser, setIsUser] = useState(false);
  return (
   <userContext.Provider value={{
      isUser,
      setIsUser
   }}>
      <>
    <AppRoute/>
    </>
   </userContext.Provider>
    
    
    
  );
  
}

export default App;
