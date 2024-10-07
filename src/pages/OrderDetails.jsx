
  import React from 'react';
  import { useParams, useNavigate } from 'react-router-dom';
  import { Button } from '@/components/ui/button';
  
  const OrderDetails = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();

    const orderDetails = {
      "53200002": {
        id: "53200002",
        products: "5 items",
        date: "Jan 10, 2020",
        customer: "Ronald Jones",
        status: "Pending",
        quantity: 5,
        city: "New York",
        totalAmount: "$253.52",
      },
      "53200003": {
        id: "53200003",
        products: "3 items",
        date: "Jan 15, 2020",
        customer: "Jacob McKinney",
        status: "Completed",
        quantity: 3,
        city: "Los Angeles",
        totalAmount: "$966.41",
      },
    };
  
    const order = orderDetails[orderId];
  
    if (!order) {
      return (
        <div className="flex items-center justify-center h-screen">
          <h2 className="font-bold text-lg text-center">Order not found</h2>
        </div>
      );
    }
  
    return (
      <div className="flex items-center justify-center h-screen ">
        <div className="flex  max-w-lg p-10 border border-gray-700 rounded-lg shadow hover:bg-muted">
          <main className="flex-1 ">
            <h2 className="font-bold text-lg mb-5">Order Details: {order.id}</h2>
            <p><strong>Products :</strong> {order.products}</p>
            <p><strong>Date :</strong> {order.date}</p>
            <p><strong>Customer :</strong> {order.customer}</p>
            <p><strong>Status :</strong> {order.status}</p>
            <p><strong>Quantity :</strong> {order.quantity}</p>
            <p><strong>City :</strong> {order.city}</p>
            <p><strong>Total :</strong> {order.totalAmount}</p>
            <p><strong>Payment Status :</strong> </p>
            <p><strong>Payment Type :</strong> </p>
            <p><strong>Created At :</strong> </p>
            <p><strong>Updated At :</strong> </p>
            <p><strong>Address :</strong> </p>

  
            <Button className="mt-4" onClick={() => navigate('/orders')}>
              Go Back
            </Button>
          </main>
        </div>
      </div>
    );
  };
  
  export default OrderDetails;




    // just dummy data from table to check and then using fetch data from order file when make backend functions







