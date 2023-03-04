
import styled from 'styled-components'
import { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import MyContext from '../MyContext';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
const Register = () => {
    const navigate=useNavigate('/user')
    const { token, setToken, setUser } = useContext(MyContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address1: '',
        address2: '',
        phone: '',
        password:''
        
    });

    const handleChange = event => {
        const { name, value } = event.target;
        
        setFormData(prevState => ({ ...prevState, [name]: value }));
        console.log(formData)
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        const { data } = await axios.post('http://localhost:2000/api/v1/user/register', {...formData})

        const token = data.token
        const user = data.user
        console.log(user)
        localStorage.setItem('token', token)
        localStorage.setItem('user', user)
        setUser(user)
        setToken(token)
        navigate('/user')
        
    };

    return (
        <Wrapper>
            <form onSubmit={handleSubmit} className='upper' >
                <div className='item'>
                    <h1>Register</h1>
                </div>
                <div className='form'>
                   
                    
                        <div className='item'>
                            <label>
                                Name:
                            </label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                        </div>

                    

                    <div className='item'>


                        <label>
                            Email:
                        </label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} />

                    </div>
                    <div className='item'>
                        <label>
                            Password:
                        </label>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} />
                    </div>
                    <div className='item'>


                        <label>
                            Address 1:
                        </label>
                            <input type="text" name="address1" value={formData.address1} onChange={handleChange} />
                    </div>
                    <div className='item'>


                        <label>
                            Address 2:
                        </label>
                            <input type="text" name="address2" value={formData.address2} onChange={handleChange} />
                    </div>


                    <div className='item'>

                        <label htmlFor="phone">Phone:</label>
                       
                        <input type='tel' id="phone" name="phone" value={formData.phone} placeholder="Enter your phone number" onChange={handleChange} />
                    </div>
                    <div className='link'>
                        
                            <Link to='/login' className='link'>
                                Already got an account ?
                            </Link>
                        
                    </div>
                    <div>

                        <button type="submit" className='btn'>Submit</button>
                    </div>
                </div>
                
            </form>
            
        </Wrapper>
    );
}
const Wrapper = styled.div`
.item{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.name input{
    width:80%
}
select{
    padding: 1.2rem;
    width: 20%;
    font-size: 1.4rem;
    margin: 1.2rem ;
}
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
    width: 70%;
    font-size: 1.4rem;
    margin: 1.2rem ;
}
.name{
   display: flex;
   justify-content: space-between;
}
.upper{
    width: 50%;
    background-color: aliceblue;
    padding: 1.2rem;
}
margin: 1.4rem;

display: flex;
justify-content: space-evenly;

.form{
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    
    
}
`
export default Register
