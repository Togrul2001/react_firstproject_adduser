import React, {Component} from 'react'
import AddUser from './components/addUser';
import Users from './components/Users';
function App(){
    const [users, setUsers] = React.useState([
    {
      id:Math.floor(Math.random()*100),
      name: 'Eli',
      email: 'eli@gmail.com'
    },
    {
      id:Math.floor(Math.random()*100),
      name: 'Mahir',
      email: 'mahir@gmail.com'
    },
    {
      id:Math.floor(Math.random()*100),
      name: 'Elnur',
      email: 'elnur@gmail.com'
    },
  ])
  function submitTest(event, form){
    event.preventDefault();
    const newUser = {
      id:Math.floor(Math.random()*100),
      ...form
    }
    setUsers(prev=> [...prev, newUser 
])
  }

  const [test, setTest] = React.useState(0);

  const testClick = () => {
   setTest(test+1)
  }

  return (
    <div className='container'>
      <h3 className='text-center m-5'>Users Page</h3>
      <AddUser submitTest={submitTest} users={users}/><br />
      <Users users={users}/>
      <h1>{test}</h1>
      <button className='btn btn-primary' onClick={testClick}>Test</button>
    </div>
  )
}

export default App;
