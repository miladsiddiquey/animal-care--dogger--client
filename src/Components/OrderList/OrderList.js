import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const OrderList = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/orders', {  
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({  email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    

    return (
        <div className="container">
            <div className="row">
            <div className="col-md-2"></div>
           <div className="col-md-10 col-lg-10 col-sm-12">
           <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Card Id</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Price</th>
                <th className="text-secondary" scope="col">Time</th>
                <th className="text-secondary" scope="col">status</th>
              
               
               
                </tr>
            </thead>
            <tbody>
                {
                  orders.map((orders, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{orders.paymentId}</td>
                        <td>{orders.name}</td>
                        <td>${orders.price}</td>
                        <td>{orders.orderTime}</td>
                        
                            
                        
                        
                    </tr>
                    )
                }
            </tbody>
        </table>
           </div>
           </div>
        </div>
    );
};

export default OrderList;