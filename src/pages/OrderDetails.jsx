

import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Header from "@/components/shared/Header";
import { useParams } from "react-router-dom";
import axios from "axios";

function OrderDetails() {
    const { id } = useParams();
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/orders/${id}`)
            .then((res) => {
                setOrderDetails(res.data.results);
            })
            .catch((error) => {
                console.error("Error fetching order details:", error);
            });
    }, [id]);

    if (!orderDetails) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <>
            <div className="p-5">
                <Header currentPage={` ${id}`} prevPage={"Orders"} prevPageLink={"/orders"} />

                <div className="py-4 gap-5">
                    {orderDetails.products.map((product) => (
                        <Card key={product._id} className="flex flex-col mb-4">
                            <CardContent className="flex flex-col items-center p-4">
                                <img
                                    src={product.images[0]}  
                                    alt={product.title} 
                                    className="mb-2 w-full h-auto max-w-[200px] md:max-w-[250px]" 
                                />
                                <div className="text-center">
                                    <h2 className="text-lg font-bold">{product.title}</h2>
                                    <p className="text-sm mb-1"><strong className="text-orange-700 text-base">SKU : </strong> {product.sku}</p>
                                    <p className="text-sm mb-1"><strong className="text-orange-700 text-base">Size :</strong> {product.size}</p>
                                    <p className="text-sm mb-1"><strong className="text-orange-700 text-base">Quantity :</strong> {product.quantity}</p>
                                    <p className="text-sm mb-1"><strong className="text-orange-700 text-base">Total Price : </strong>{orderDetails.totalPrice ? orderDetails.totalPrice :  'NAN'}</p>
                                    <p className="text-sm mb-1"><strong className="text-orange-700 text-base">Order Date :</strong> {new Date(orderDetails.createdAt).toLocaleDateString()}</p>
                                    <p className="text-sm mb-1"><strong className="text-orange-700 text-base">Status :</strong> {orderDetails.status}</p>

                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-center">
                                <p className="text-sm"><strong className="text-orange-700 text-base">Order ID :</strong> {orderDetails.id}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}

export default OrderDetails;


