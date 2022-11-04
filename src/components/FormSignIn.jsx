import {useState} from "react";

function FormSignIn() {

    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();

        const option ={
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // the body it's the most changable
            body: JSON.stringify({
                username: username,
                password: password
            })
        }
        fetch('http://44.201.115.90/user', option)
            .then(response=>response.json())
            .then(data=> data.status ? alert('u can pass'):alert('no  access go fuck'))
            .catch(err=>console.log('err'))

    }

    const handleChangeUsername = (e) =>setUsername(e.target.value)
    const handleChangePassword = (e) =>setPassword(e.target.value)

return(
    <>
    <h2>log In</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor={"inputUsername"}>Username:</label>
                <input type={"text"} id={"inputUsername"} onChange={handleChangeUsername}/>
            </div>
            <br/>
            <div>
                <label htmlFor={"inputPassword"}>Password:</label>
                <input type={"password"} id={"inputPassword"} onChange={handleChangePassword}/>
            </div>

            <br/>
            <button>log in</button>
        </form>
    </>
);

}export default FormSignIn;