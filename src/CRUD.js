import axios from "axios";
import {useEffect, useState } from "react";
function CRUD() {

  const[id , setId] =useState("");
  const[name, setName] =useState("");
  const[users , setUsers] =useState([])
  const[selected , setSelected] = useState("")

  useEffect(()=>{
    getUser();
    

  })
 



  const createUser = () => {
    axios.post()
    .then(response =>{
      if(!id =="" &&  ! name == "" ){
      alert("User created successfully");
   
   }else{
    alert ("Enter the details!!")
   }
   })
    .catch(error =>{
          alert(error);
    });
    
   

};


 const getUser = () =>{
  axios.get()
.then (response =>{
  setUsers(response.data.response);


  })
   .catch(error => {
        console.error("Error fetching data:", error);
         });

 }


const UpdateUser = (userId) => {
  axios.put()
    .then(res => {
      setSelected(res);
      getUser();
    })
    
};

const deleteUser = (userId) => {
  axios.delete()
    .then(res => {
      alert("User deleted successfully");
      setId("");
      setName("");
      getUser(); 
    })
 
};





return (
        <div>
          <form>
            <h1> Fill the Details</h1>
            <label> Enter your id   </label> <input type="text" name="id" value={id}
              onChange = {(e) =>  setId(e.target.value) } ></input><br></br>
              <label> Enter your Name </label> <input type="text" name="name" value={name}
               onChange={(e) => setName(e.target.value)}></input><br></br>
            
          

          </form>
            <button  onClick={createUser}> Submit  </button>  <br></br> <br></br>


<div>
  <h2> Users </h2>
  <table border="1">
    <tr>
      <th>ID</th> 
      <th>Name</th> 
    </tr>
    <tr>
      <td></td> 
      <td></td> 
    </tr>
      <tbody>
        {users.map((user)=>(
          <tr key={user._id}>
  <td>{user.id}</td>
  <td>{user.name}</td>
  <td>
    <button onClick={() =>{
     setId(user.id); 
     setName(user.name);
     UpdateUser(user.id);
    }} >Update</button>
  </td>
  <td>
    <button onClick={()=>{
      setId(user.id); 
     setName(user.name);
    deleteUser(user.id);

    }} >Delete</button>
  </td>
</tr>


        )
        )}
      </tbody>
    
  </table>
</div>
            
        </div>

      


       


    );
};

export default CRUD;
