'use client';

import { useContext } from 'react';

//icons
import { IoCloseOutline } from 'react-icons/io5';

//Context
import { CartContext } from '../context/CartContext';

const CartTop = () => {
  const { setIsOpen,itemAmount } = useContext(CartContext);
  return (
    <div className='w-full flex h-20 border-b items-center justify-between px-10 '>
      {/* Shopping bag text*/}
      <div className='font-semibold'>Shopping bag ({itemAmount})</div>

      {/* Close icon*/}
      <div onClick={() => setIsOpen(false)} className=" cursor-pointer group ">
        <IoCloseOutline className="text-3xl group-hover:scale-110 duration-300 transition-all " />
      </div>
    </div>
  );
};

export default CartTop;
