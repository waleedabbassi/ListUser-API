import Table from 'react-bootstrap/Table';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  // the useState hook. listOfUser is initialized as an empty array, and setListOfUser is used to update its value

  const [listOfUSer, setlistOfUSer]=useState([])


//The useEffect hook is used to fetch the user data from the API when the component mounts. It makes an HTTP GET request to the URL
// It makes an HTTP GET request to the URL 'https://jsonplaceholder.typicode.com/users', retrieves the data from the response, and updates the listOfUser state with the fetched data. If an error occurs, it is logged to the console. The empty dependency array [] ensures that the effect runs only once when the component mounts.
  useEffect (()=> {
  axios.get('https://jsonplaceholder.typicode.com/users')
  
  .then(res => setlistOfUSer(res.data))
  .catch((err) => console.log(err))
  
  })


  return (
    <div className="App">
      <h1> User List  </h1>
      
      {listOfUSer.map((user) => (
      
      <Table striped bordered hover size="sm">
      <thead>
        
          <tr>
          <th>Id: </th>
          <th> {user.id}</th>
          </tr>
          <tr>
          <th>Name: </th>
          <th>{user.name}</th>
          </tr>
          
          <tr>
          <th>Username: </th>
          <th>{user.username}</th>
          </tr>
        
          <tr>
          <th>Email: </th>
          <th>{user.email}</th>
          </tr>
          
      </thead>
    
    </Table>
      ))}
        
    </div>
  );
}

export default App;
