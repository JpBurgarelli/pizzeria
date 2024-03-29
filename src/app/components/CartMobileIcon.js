'use client';

//Icons
import { useContext } from 'react';
import { BsHandbagFill } from 'react-icons/bs';
import { CartContext } from '../context/CartContext';

const CartMobileIcon = () => {
  const { isOpen, setIsOpen, itemAmount } = useContext(CartContext);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="bg-tertiary w-[72px] h-[72px] rounded-full flex justify-center items-center text-[#fff] cursor-pointer fixed right-[10%] bottom-[5%] z-20 lg:hidden"
    >
      <BsHandbagFill className="text-4xl" />

      {/* Amount */}
      <span className="absolute text-[#fff] gradient bottom-3 right-3 w-5 h-5 flex justify-center items-center rounded-full font-robotoCondensed text-[14px] ">
        {itemAmount}
      </span>
    </div>
  );
};

export default CartMobileIcon;
