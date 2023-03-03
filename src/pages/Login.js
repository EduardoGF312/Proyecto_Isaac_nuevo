import React from 'react';
import '../App.css';
import Swal from 'sweetalert2'
import Button from 'react-bootstrap/Button';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Form from 'react-bootstrap/Form';
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import { gapi } from 'gapi-script'
import FacebookLogin from 'react-facebook-login';


function Login() {

    //CONFIGURACION DE GOOGLE
    const [isSignedIn, setIsSignedIn] = useState(false);
    const key_login = "889082775733-uft314q6mcdcam2in0dd7rd0nsq8uprc.apps.googleusercontent.com";
    const [user, setUser] = useState({});
    useEffect(() => {
        const start = () => {
            gapi.Auth2.init({
                clientId: key_login,
            });
        }
        gapi.load("client:auth2", start)
    }, [])

    const logeado_exito = (respuesta_exitosa) => {
        setIsSignedIn(true);
        console.log("LOGUEADO CON ÉXITO:", respuesta_exitosa.profileObj);
        setUser(respuesta_exitosa.profileObj);
        Swal.fire({
            icon: 'success',
            title: `BIENVENIDO APP UTD`,
        })
    }

    const fallo_login = (res) => {
        console.log("FALLO EN EL ACCESO:", res.profileObj);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'LAS CREDENCIALES SON ERRONEAS',
        })
    }

    const Logout = () => {
        console.log("SESIÓN TERMINADA");
        Swal.fire({
            icon: 'success',
            title: `Sesión terminada, adios ${user.name}!`,
        })
        setIsSignedIn(false);
    }

    //CONFIGURACION DE FACEBOOK
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [picture, setPicture] = useState('');

    const responseFacebook = (response) => {
        console.log(response);
        setIsLoggedIn(true);
        setName(response.name);
        setEmail(response.email);
        setPicture(response.picture.data.url);
    }

    const componentClicked = () => {
        console.log('Facebook button clicked');
    }

    return (
        <>
            <h1 className='text-center mt-3'>APP PARCIAL II</h1>
            <Form className='w-50 mx-auto mt-5 formulario'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Correo Electronico: </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password: </Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" style={{ display: "flex", justifyContent: "space-between" }} controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recordarme" />
                    <Form.Text>
                        <a href='#'>Olvidaste tu contraseña?</a>
                    </Form.Text>
                </Form.Group>
                <Button className="w-100 fw-bold" variant="primary" type="submit">
                    INGRESAR
                </Button>
                <Form.Group className='text-center mt-4'>
                    No eres usuario? <a href='#'>Registrarse</a>
                    <p className='mt-3'>o ingresa con:</p>
                </Form.Group>

                <Form.Group className='text-center'>
                    {isSignedIn ? (
                        <>
                            <div className='datos'>
                                <h3 className='mb-3'>Tus credenciales de Google son:</h3>
                                <img className='mb-3' src={user.imageUrl} alt="" />
                                <p><b>Nombre:</b> {user.name}</p>
                                <p><b>Correo electrónico:</b> {user.email}</p>

                                <GoogleLogout
                                    clientId={key_login}
                                    buttonText={"CERRAR SESIÓN"}
                                    onLogoutSuccess={Logout}
                                    className='mt-1'
                                />
                            </div>


                        </>
                    ) : (
                        <GoogleLogin
                            clientId={key_login}
                            buttonText="INGRESAR"
                            onSuccess={logeado_exito}
                            onFailure={fallo_login}
                            cookiePolicy={'single_host_origin'}
                            isSignedIn={true}
                            className='google-button'
                            render={(renderProps) => (
                                <button
                                    className="google-button"
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                >
                                    <i className="fab fa-google"></i>
                                </button>
                            )}
                        />
                    )}

                    {isLoggedIn ? (
                        <>
                        <div className='datos'>
                            <h3 className='mb-3'>Tus credenciales de Facebook son:</h3>
                            <img className="img-fa" src={picture} alt={name} />
                            <p><b>Nombre: </b> {name}</p>
                            <p><b>Correo electrónico:</b> {email}</p>
                        </div>
                        </>
                    ) : (
                        <FacebookLogin
                            appId="3332190267021210"
                            autoLoad={false}
                            fields="name,email,picture"
                            onClick={componentClicked}
                            callback={responseFacebook}
                            icon={<FontAwesomeIcon icon={faFacebook} color="blue" />}
                            textButton=""
                            cssClass="facebook-login-button"
                        />

                    )}
                </Form.Group>
            </Form>
        </>
    )
}
export default Login;

