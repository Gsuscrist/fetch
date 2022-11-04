import '../assets/styles/FormData.css'
import {useState} from "react";

function FormSignUp() {
    const [name, setName]=useState('');
    const [lastname, setLastname]=useState('');
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');


    const handlerFocus=()=>{
        console.log('viva el rock ')};



    const submitForm=(e)=> {
    e.preventDefault();

    const option ={
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        // the body it's the most changable
        body: JSON.stringify({
            name: name,
            lastname: lastname,
            username: username,
            password: password
        })
    }
    // this almost never needs to change
    fetch('http://44.201.115.90/user', option)
        .then(response=>response.json())
        .then(data=> data.status ? alert('fuck u'):alert('no fuck'))
        .catch(err=>console.log('err'))

    }
    // manejador de eventos
    const handleChangeName = (e) => setName(e.target.value)
    const handleChangeLastname = (e) =>setLastname(e.target.value)
    const handleChangeUsername = (e) =>setUsername(e.target.value)
    const handleChangePassword = (e) =>setPassword(e.target.value)



    const handleBlur =(event)=> {
        console.log("blur");

        // this almost never needs to change
        fetch('http://44.201.115.90/user/usernameValidate/'+username)
            .then(response=>response.json())
            .then(data=> data.status ? alert('fuck u '+ data.message):alert('no fuck'))
            .catch(err=>console.log('err'))

    }

    return (
        <>
            <h2>Register</h2>
            <form onSubmit={submitForm}>
                <div>
                    <label htmlFor={"inputName"}>name: </label>
                    {/*using anonymous function*/}
                    <input type={"text"} id={"inputName"} value={name} onChange={handleChangeName}  onFocus={function (){
                        console.log('eventoFocus')
                    }} />
                </div>
                <br/>
                <br/>
                <div>
                    <label htmlFor={"inputLastame"}>lastname: </label>
                    {/*using anonymous function*/}
                    <input type={"text"} id={"inputLastName"} value={lastname} onChange={handleChangeLastname} onFocus={function (){
                        console.log('eventoFocus')
                    }} />
                </div>
                <br/>
                <div>
                    <label htmlFor={"inputUsername"}>User Name: </label>
                    {/*using anonymous function*/}
                    <input type={"name"} id={"inputUsername"} value={username} onChange={handleChangeUsername} onFocus={function (){
                        console.log('eventoFocus')
                    }} onBlur={handleBlur}/>
                </div>
                <br/>
                <div>
                    {/*using arrow function*/}
                    <label htmlFor={"inputPassword"} onFocus={()=> console.log('aca ta el foco')}>password: </label>
                    {/*this is the best way of do the events*/}
                    <input type={"password"} id={"inputPassword"} value={password} onChange={handleChangePassword} onFocus={handlerFocus}/>
                </div>
                <br/>
                <button>log In</button>
            </form>
        </>
    );
}

export default FormSignUp;