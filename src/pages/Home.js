import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Home = () => {
    return (
        <div>
            <h1 className='elegantshadow home'>Home</h1>

                <div className="Card">
                    <Card text='dark' className='ms-4 cards'>
                        <Card.Header className='headers'>Método Render</Card.Header>
                        <Card.Body>
                            <Card.Text className='textbody'>
                            Todo componente de React, tiene un método Render que es el que se encarga de renderizar en el navegador el HTML correspondiente al componente. Este método se llama automáticamente cuando se crea un componente y cuando el estado del componente se actualiza (veremos esto más adelante)
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                    <Card text='dark' className='ms-4 cards'>
                        <Card.Header className='headers'>React Strict Mode</Card.Header>
                        <Card.Body>
                            <Card.Text className='textbody'>
                            StrictMode es una herramienta para destacar problemas potenciales en la aplicación. Al igual que Fragment, StrictMode no renderiza nada en la interfaz de usuario. Este modo también activa advertencias y comprobaciones adicionales para sus descendientes.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                    <Card text='dark' className='ms-4 me-4 cards'>
                        <Card.Header className='headers'>Método Return</Card.Header>
                        <Card.Body>
                            <Card.Text className='textbody'>
                            Este método es obligatorio en cualquier componente, pues como su nombre lo indica, se utiliza para obtener los elementos finales a visualizar y renderizar en el navegador. Debe ser una funcion pura, es decir, no debe modificar las props, no debe modificar el state, ni realizar operaciones en el DOM
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
        
        </div>
    )
}

export default Home;