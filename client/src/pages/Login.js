import styled from 'styled-components'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import MyContext from '../MyContext';
import { Link } from 'react-router-dom';
const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { token,setToken ,setUser } = useContext(MyContext);
    const navigate=useNavigate()

    const submitHandler = async() => {
        const {data} = await axios.post('http://localhost:2000/api/v1/user/login',{email,password})
        
        const token =data.token
        const user = data.user
        
        localStorage.setItem('token',token)
        localStorage.setItem('_id',user._id)
        localStorage.setItem('name',user.name)
        localStorage.setItem('email',user.email)
        localStorage.setItem('address1',user.address1)
        localStorage.setItem('address2',user.address2)
        localStorage.setItem('phone',user.phone)
        localStorage.setItem('orders',user.orders)
        localStorage.setItem('offers',user.offers)
        localStorage.setItem('products',user.products)
        setUser(user)
        setToken(token)
        navigate('/user')
    }
    return (
        <Wrapper>

            <div className='main'>
                <div className='card'>
                    <div className='title'>
                        Login
                        
                    </div>
                 
                    <div className='text' >
                        Email
                    </div>
                    <div className='input text'>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='text'>
                        Password
                    </div>

                    <div className='input text'>
                        <input type="text" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <button className='toggle'>
                            <Link to='/register' className='link'>
                            Don't have an account ?
                            </Link>
                            </button>
                    </div>
                    <div className='input text'>

                        <button className='btn' onClick={submitHandler}>Submit</button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
.link{
    text-decoration: none;
    color: #39A1AE;
}

.text{
    margin-top: 1.2rem;
}
.btn{
    padding: 1.4rem;
    font-size: 1.2rem;
    background-color: #39A1AE;
    color: white;
    border: none;
    border-radius: 1rem;
}
.input{
    display: flex;
    justify-content: space-evenly;
}
input{
    padding: 1.2rem;
    width: 100%;
    font-size: 1.4rem;
}
.title{
    display: flex;
    justify-content: space-evenly;
}
.main{
   
    margin: 1.4rem;
    font-size: 1.8rem;
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.card{
    
    width: 30%;
     background-color: aliceblue;
     padding: 1.4rem;

}
.toggle{
    color: #39A1AE;
    background: none;
    border: none;
    font-size: 1.2rem;

}
.toggle:hover{
    cursor: pointer;
}

`
export default Login