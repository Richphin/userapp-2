import { useState } from 'react';
import './App.css';
import Userform from './components/userform';
import Userlist from './components/userlist';

function App() {
  const[users,userstate]=useState([])

  function adduser(user) {
    userstate([
      ...users,user
    ]);
  }
  function deleteuser(id) {
    let newUsers = users.filter((user) => user.id !==id)
    userstate(newUsers)
  }


 return(
  <div className="container">
  <div className="col-md-6 formcontainer" >
    <Userform adduser={adduser}/>
  </div>
  <div className="col-md-6">
    <Userlist allUsers={users} delete={deleteuser}/>
  </div>
</div>
 )
}

export default App;
