'use client';

import { useContext, useState } from 'react';

//icons
import { IoCloseOutline } from 'react-icons/io5';

//Components
import CheckoutDetails from './CheckoutDetails';

import ModalCart from './ModalCart';

//context
import { CartContext } from '../context/CartContext';

const CartBottom = () => {
  const { setIsOpen, cart, cartTotal } = useContext(CartContext);

  //Modal state
  const [modal, setModal] = useState(false);

  //Open Modal
  const openModal = () => {
    setModal(true);
    setIsOpen(false)
  };

  //close Modal
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      {cart.length >= 1 ? (
        <div className="px-6 py-3 lg:py-6 mt-auto">
          {/* total price */}
          <div className="flex items-center justify-between mb-6 text-lg font-semibold font-robotoCondensed">
            <div>Total:</div>
            <div>${parseFloat(cartTotal).toFixed(2)}</div>
          </div>
          {/* btn */}
          <div className="flex flex-col gap-y-3">
            <button
              onClick={openModal}
              className="btn btn-lg gradient font-semibold flex justify-center"
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="absolute top-0 w-full h-full flex justify-center items-center -z-10 ">
          <div className="font-semibold">Your cart is empty</div>
        </div>
      )}

      {/* checkout modal */}
      {modal && (
        <ModalCart closeModal={closeModal}>
          {<div>{<CheckoutDetails setModal={setModal} />}</div>}
        </ModalCart>
      )}
    </>
  );
};

export default CartBottom;
