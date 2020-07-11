import React, { useState } from 'react'
import Evercomm from '../../Config/Images/New_Evercomm_Logo_gradient .png'
import GradientBtn from '../../Tools/button'
import InputBox from '../../Tools/input'
import Font from '../../Config/Font'

const Login = (props) => {
    const [data, setData] = useState()
    const handleLogin = e => {
        if(data.email === "admin@gmail.com" || data.password === "admin"){
            props.history.push("/main")
        }
       else alert("Email or password does not match.")
    }

    const onChange = data => setData(data)
    return (
        <div className="container-fluid justify-content-center align-items-center " style={{height: window.innerHeight, display:'flex', }} >
            <div className="mx-auto col-sm-12 col-md-10 col-lg-6 col-xl-4 py-5 px-5 bg-white shadow rounded"
            >
                <div className='row justify-content-center pt-2 pb-4'>
                    <img src={Evercomm} height={25} />
                </div>

                <form onSubmit={handleLogin} >
                    <div className="form-group my-0" >
                        <InputBox
                            type="email"
                            required
                            onChange={(e) => onChange({ email: e.target.value })}
                            placeholder="username"
                        //value={this.state.email}
                        />
                    </div>
                    <div className="form-group my-0">
                        <InputBox
                            required
                            type="password"
                            onChange={(e) => onChange({ password: e.target.value })}
                            placeholder="password"
                        //value={this.state.password}
                        />
                    </div>
                    <div className='row justify-content-between text-secondary px-3 py-4'>
                        <div style={{ fontSize: Font.small }}>fotget password?</div>
                        <div style={{ fontSize: Font.small }}>contact us</div>
                    </div>
                    <div className="form-group pt-2">
                        <GradientBtn type="submit" text="Login" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login