import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import useFirebase from '../Hooks/useFirebase';


const MyOrder = () => {


    const { user } = useFirebase();
    const [foods, setFoods] = useState([]);
        useEffect(() => {
          fetch("http://localhost:5000/orders")
            .then(res => res.json())
            .then(data => setFoods(data));
        }, []);

        const handleDeleteOrder = (id) => {
            console.log(id);
        
            const proceed = window.confirm('Are you Sure you want to delted ?')
            console.log(proceed);
            if (proceed) {
                axios.delete(`http://localhost:5000/order/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remainingUser = foods.filter(food => food._id !== id)
                    setFoods(remainingUser); 
    
                }
            })
            }
          };

    return (
        <div className ="my-5">
            <Container>
                <Table className="text-center" striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Food Name</th>
                        <th>Address</th>
                        <th>Action</th>
                        <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                   {
                       foods.filter(food => food.email === user.email).map((food, index) =>  
                        <tr>
                            <td>{index + 1}</td>
                            <td>{food.name}</td>
                            <td>{food.email}</td>
                            <td>{food.destination}</td>
                            <td>{food.address}</td>
                            <td><Button variant="danger" onClick={() => handleDeleteOrder(food._id)}>Delete</Button></td>
                            <td>{food.status}</td>

                        </tr>
                    )
                }
                </tbody>
                </Table>
           </Container>
        </div>
    );
};

export default MyOrder;