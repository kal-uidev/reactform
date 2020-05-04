import React, { Component } from 'react'
import FormData from '../components/FormData'

 class Simpleform extends Component {
     constructor(props) {
         super(props)
        this.inputRef = React.createRef();
        this.showformdata = false;
        this.users = [];
         this.state = {
             
              username:"defaultname",
              password:"",
              email:"",
              phoneNumber:"",
              country:"canada",
              
              showdata:""
              
         }
        
     }
     handleSubmit = (e) => {
         e.preventDefault();
        this.showformdata=true;
        this.users.push(this.state);
        this.setState({
            showdata:"true"
        })

     }
     handleReset = () => {
        
       this.showformdata=false;
       this.setState({
           showdata:"true"
       },()=>{
        this.inputRef.current.focus();
       })

    }
     handleInputChange = (e) => {
        let inputname = e.target.name;
        let inputvalue = e.target.value;
        this.setState({
            [inputname]: inputvalue
        })
     }
componentDidMount(){
    this.inputRef.current.focus();
    
}
     
    render() {
        // this.objArr = Object.entries(this.state);
        return (
            <div>
            <div id="simple-form">
                <form onSubmit={this.handleSubmit}>
                <div class="labels">
                    <ul>
                       <li> <label for="username">Username:</label></li><br/>
                       <li> <label for="password">Password:</label></li><br/>
                       <li> <label for="email">Email:</label></li><br/>
                       <li> <label for="phonenumber">Phone Number:</label></li><br/>
                       <li> <label for="country">Country:</label></li><br/>
                    </ul>
                </div>
                <div class="fields">
                    <ul>
                    <li><input ref={this.inputRef} type="text" id="username" name="username" onChange={this.handleInputChange} placeholder='please enter username' required/></li><br/>
                    <li><input  type="password" id="password" name="password" onChange={this.handleInputChange}required/></li><br/>
                    <li><input  type="email" id="email" name="email" onChange={this.handleInputChange}/></li><br/>
                    <li><input  type="tel" id="phonenumber" name="phoneNumber" onChange={this.handleInputChange}/></li><br/>
                    <li><select id="country" name="country"  onChange={this.handleInputChange}>
                            <option>India</option>
                            <option>USA</option>
                            <option>Australia</option>
                            <option selected>Canada</option>
                        </select></li><br/>             
                    <li><button id="reset-btn" onClick={this.handleReset} type="reset">Reset</button>
                    <button type="submit">Submit</button></li>
                </ul>
                </div>
                </form>
                
            </div>
    <FormData users={this.users} show={this.showformdata}></FormData>
    </div>
        )
    }
}
export default Simpleform;