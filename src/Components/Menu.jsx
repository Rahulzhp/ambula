import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../Styles/Menu.css";
import { Button, useToast } from '@chakra-ui/react';

const Menu = () => {
    const toast = useToast();
    const [menu, setMenu] = useState([]);
    const authrization = localStorage.getItem("food");

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products?limit=12`, {
                headers: {
                    'Authorization': authrization
                }
            })
            .then((res) => {
                console.log(res.data);
                setMenu(res.data);
            })
            .catch((er) => {
                console.log(er);
            });
    }, [authrization]);

    const Addtocart = (dish) => {
        console.log(dish);

        const order = {
            date: new Date(),
            products: [
                {
                    productId: dish.id,
                    quantity: 1,
                    name: dish.title,
                    image: dish.image,
                    price: dish.price
                }
            ],
            totalPrice: dish.price,
            estimatedDeliveryTime: '30 minutes' // You can adjust the delivery time as needed
        };

        let storedOrders = JSON.parse(localStorage.getItem('orders')) || [];

        if (authrization) {
            storedOrders.push(order);
            localStorage.setItem('orders', JSON.stringify(storedOrders));

            toast({
                title: "Added to Cart",
                description: "Successfully added to cart",
                status: "success",
                position: "top",
                duration: 3000,
                isClosable: true
            });
        } else {
            toast({
                title: "Please Login First",
                description: "Login First to add to cart",
                status: "error",
                position: "top",
                duration: 3000,
                isClosable: true
            });
        }
    };

    return (
        <div id="menu" className="menu">
            <div>
                <h1>New Arrivals</h1>
                <p>Check out recommended item of your choice</p>
            </div>
            <div className="menuItem">
                {menu &&
                    menu.map((item) => (
                        <div key={item.id} className="dish-card">
                            <div className="dishimg">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="dishprice">
                                <div className="menuItemdtitle">
                                    <h3>{item.title}</h3>
                                </div>
                                <div className="menuItemdescription">
                                    <p>{item.description}</p>
                                </div>
                                <div className="menuItemdPrice">
                                    <p>
                                        Price: Rs : <span>{item.price.toFixed(2)}</span>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <Button
                                    onClick={() => Addtocart(item)}
                                    backgroundColor={"#FF4D00"}
                                    padding={"15px"}
                                    color={"white"}
                                    fontSize={"17px"}
                                    borderRadius={"21px"}
                                >
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Menu;
