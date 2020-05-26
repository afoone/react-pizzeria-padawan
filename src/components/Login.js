import React from 'react'
import GoogleLogin from 'react-google-login'


const Login = (response) => {
    
    return (
            
        <div>

            <GoogleLogin

                clientId="573036941156-1u57c3u6hfm57912gp0i9ijlg8be9b21.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={
                    
                    console.log



                }

                onFailure={Login}
                cookiePolicy={'single_host_origin'}

            />

        </div>

    )

}

export default Login
