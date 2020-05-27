import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


const Login = () => {

    const [redirect, setRedirect] = useState(false)


    const onSuccess = async (usuarioGoogle) => {
        // console.log("responde en console", usuarioGoogle);

        // axios.get("http://localhost:4000/usuario?email="+usuarioGoogle.profileObj.email)
        //     .then(
        //         res => {
        //             localStorage.setItem("user", JSON.stringify(usuarioGoogle.profileObj))
        //             if (!res.data[0]) {
        //                 return axios.post("http://localhost:4000/usuario", usuarioGoogle.profileObj)
        //             }
        //         }
        //     )
        //     .then(
        //         console.log("nuevo usuario grabado")
        //     )

        const res = await axios.get("http://localhost:4000/usuario?email=" + usuarioGoogle.profileObj.email).catch(console.error);
        localStorage.setItem("user", JSON.stringify(usuarioGoogle.profileObj))
        if (!res.data[0]) {
            await axios.post("http://localhost:4000/usuario", usuarioGoogle.profileObj).catch(console.error);
        }
        setRedirect(true)


    }

    return (

        <div>

            {redirect ? <Redirect to="/pizzas"/> : null}

            <GoogleLogin

                clientId="573036941156-1u57c3u6hfm57912gp0i9ijlg8be9b21.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={

                    // console.log
                    res => onSuccess(res)

                }

                onFailure={Login}
                cookiePolicy={'single_host_origin'}

            />

        </div>

    )

}

export default Login
