import React, { useEffect, useState } from 'react';
import {
    Button,
    Image,
    useToast,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Text,
} from '@chakra-ui/react';
import '../Styles/Cart.css';

const Cart = () => {
    const toast = useToast();
    const [cartItems, setCartItems] = useState([]);
    const [state, setState] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        fetchData();
    }, [state]);

    const fetchData = () => {
        const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        setCartItems(storedOrders);
        setState(false);
        setIsLoading(false);
    };

    const handleQuantityChange = (itemId, quantity) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.products[0].productId === itemId) {
                const updatedItem = {
                    ...item,
                    products: [
                        {
                            ...item.products[0],
                            quantity,
                        },
                    ],
                    totalPrice: item.products[0].price * quantity,
                };
                return updatedItem;
            }
            return item;
        });

        setCartItems(updatedCartItems);
        localStorage.setItem('orders', JSON.stringify(updatedCartItems));
    };

    const handleDeleteItem = (itemId) => {
        const updatedCartItems = cartItems.filter((item) => item.products[0].productId !== itemId);
        setCartItems(updatedCartItems);
        localStorage.setItem('orders', JSON.stringify(updatedCartItems));
    };

    const getTotalPrice = () => {
        const totalPrice = cartItems?.reduce((total, item) => total + item.totalPrice, 0);
        return totalPrice;
    };

    const handleDeleteCart = () => {
        localStorage.removeItem('orders');
        setCartItems([]);
    };

    return (
        <div className="cart">
            <h1>Cart Item</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : cartItems?.length === 0 ? (
                <p className='cartEmpty'>Your cart is empty</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map((item, i) => (
                            <div key={i} className="cart-item">
                                <div className="cartfix">
                                    <div>
                                        <div className="CartImg">
                                            <Image src={item.products[0]?.image}></Image>
                                        </div>
                                        <div>
                                            <h3>{item.products[0]?.name}</h3>
                                        </div>
                                        <div className='Cartitemprice'>
                                            <p>Price: Rs: {item.totalPrice?.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="quantity-container">
                                            <Button
                                                onClick={() =>
                                                    handleQuantityChange(
                                                        item.products[0]?.productId,
                                                        item.products[0]?.quantity - 1
                                                    )
                                                }
                                                disabled={item.products[0]?.quantity === 1}
                                                backgroundColor="#FF4D00"
                                                padding="4px"
                                                color="white"
                                                fontSize="18px"
                                                marginRight="5px"
                                                borderRadius="3px"
                                            >
                                                -
                                            </Button>
                                            <p>{item.products[0]?.quantity}</p>
                                            <Button
                                                onClick={() =>
                                                    handleQuantityChange(
                                                        item.products[0]?.productId,
                                                        item.products[0]?.quantity + 1
                                                    )
                                                }
                                                backgroundColor="#FF4D00"
                                                padding="4px"
                                                color="white"
                                                fontSize="18px"
                                                borderRadius="3px"
                                            >
                                                +
                                            </Button>
                                        </div>
                                        <Button
                                            onClick={() => handleDeleteItem(item.products[0]?.productId)}
                                            backgroundColor="#FF4D00"
                                            padding="5px"
                                            color="white"
                                            fontSize="15px"
                                            width="71px"
                                            height="29px"
                                            borderRadius="5px"
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="order-summary">
                        <h3>Order Summary</h3>
                        <p>Total Items: {cartItems.length}</p>
                        <p>Total Price: Rs: {getTotalPrice().toFixed(2)}</p>
                        <Button
                            onClick={() => {
                                handleDeleteCart();
                                onOpen();
                            }}
                            backgroundColor="#FF4D00"
                            padding="15px"
                            color="white"
                            fontSize="17px"
                            borderRadius="21px"
                        >
                            Place Order
                        </Button>
                    </div>
                </>
            )}
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader color="#FF4D00">Order Placed Successfully</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody className='place' pb={6}>
                        <Image width="31%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4CuQpzkmcDfr7ONuWvfxlT6UI3RrNo-bCGQ&usqp=CAU"></Image>
                    </ModalBody>
                    <ModalBody pb={6}>
                        <Text>Thankyou for Shoping</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button backgroundColor="#FF4D00" onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default Cart;
