import React from 'react'

import Evercomm from '../../Config/images/New_Evercomm_Logo_gradient .png'

import GradientBtn from '../../Features/KMGradientButton'
import InputBox from '../../Features/InputBox'
import Font from '../../Config/Font'

const Login = (props) => {

    const _handleLogin = e => {
        props.history.push("/main")
    }

    return (
        <div className="container-fluid justify-content-center align-items-center " style={{height: window.innerHeight, display:'flex', }} >
            <div className="mx-auto col-sm-12 col-md-10 col-lg-6 col-xl-4 py-5 px-5 bg-white shadow rounded"
            >
                <div className='row justify-content-center pt-2 pb-4'>
                    <img src={Evercomm} height={25} />
                </div>

                <form onSubmit={_handleLogin} >
                    <div className="form-group my-0" >
                        <InputBox
                            type="email"
                            required
                            //onChange={(e) => this.onChange({ email: e.target.value })}
                            placeholder="username"
                        //value={this.state.email}
                        />
                    </div>
                    <div className="form-group my-0">
                        <InputBox
                            required
                            //type={showPassword ? "text" : "password"}
                            type="password"
                            //onChange={(e) => this.onChange({ password: e.target.value })}
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