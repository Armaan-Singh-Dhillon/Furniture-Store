import styled from 'styled-components'
import { useState } from 'react'
const Login = () => {
    const [toggle, settoggle] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = () => {
        console.log(email, password)
    }
    return (
        <Wrapper>

            <div className='main'>
                <div className='card'>
                    <div className='title'>
                        <h4>
                             {toggle ? 'Register':'Login'}
                        </h4>
                    </div>
                    {
                        toggle && <>
                            <div className='text' >
                                Name
                            </div>
                            <div className='input text'>
                                <input type="text" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </>


                    }
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
                        <button className='toggle'onClick={()=>settoggle(!toggle)}>Already have an acount ?</button>
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
    padding: 1.4rem;
    width: 100%;
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

`
export default Login