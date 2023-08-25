import React, { useState, useEffect } from "react";
import { Formik, FieldArray } from "formik";
import * as Yup from "yup";
import axios from "axios"; 
import { useNavigate } from "react-router-dom"; 

const CartSchema = Yup.object().shape({
  cartItems: Yup.array().of(
    Yup.object().shape({
      id: Yup.number().required(),
      quantity: Yup.number().min(1, "Quantity must be 1 or more").required(),
      price: Yup.number().required(),
    })
  ),
});

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   axios.get("/api/user/cart").then((response) => {
  //     setCart(response.data);
  //   });
  // }, []);

  const calculateTotal = (cartItems) => {
    return cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  return (
    <Formik
      initialValues={{ cartItems: cart }}
      validationSchema={CartSchema}
      onSubmit={(values) => {
        navigate("/payment");
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <div className="container mx-auto p-4">
          <FieldArray name="cartItems">
            {({ remove, push }) => (
              <div>
                {values.cartItems.map((item, index) => (
                  <div key={index} className="flex justify-between mb-4">
                    <span>{item.name}</span>
                    <input
                      type="number"
                      name={`cartItems[${index}].quantity`}
                      value={item.quantity}
                      onChange={handleChange}
                      className="border px-2 py-1 w-24"
                    />
                    <span>${item.price * item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="ml-4 text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <div className="flex justify-between mt-8">
                  <span>Total</span>
                  <span>${calculateTotal(values.cartItems)}</span>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            )}
          </FieldArray>
        </div>
      )}
    </Formik>
  );
};

export default Cart;