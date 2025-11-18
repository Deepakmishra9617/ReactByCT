import React from 'react'
import { Form } from 'react-router-dom'
   
function Signup() {
  return (
    <form>
        <h3>SignUp</h3>
        Name:  <br /><input type ="text" name="Name" /><br/>
        Email:   <br /> <input type ="email" name="Email" /><br/>
        Phone: <br />  <input type ="number" name ="Phone"/><br/>
        Password: <br /> <input type ="password" name="Password" /><br/>
        Address : <br /> <input type ="text" name ="Address"/><br/>
        <br /> <button type="submit">Signup</button>
            </form>
)
}
export default Signup
