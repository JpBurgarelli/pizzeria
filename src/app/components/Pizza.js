'use client';

import ModalPizzaDetail from './ModalPizzaDetail';

import { useState } from 'react';

import Image from 'next/image';

import PizzaDetails from './PizzaDetails';

const Pizza = ({ pizza }) => {
  //Modal state

  const [modal, setModal] = useState(false);
  console.log(modal, 'modal status');

  //Open Modal
  const openModal = () => {
    setModal(true);
  };

  //close Modal
  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl">
      <Image
        onClick={openModal}
        className="lg:group-hover:translate-y-3 transition-all duration-300 mmb-8 cursor-pointer rounded-xl"
        src={pizza.image}
        alt={pizza.name}
        width={270}
        height={270}
        priority={1}
      />
      {/* Title */}
      <div className="text-xl font-bold mb-3 capitalize cursor-pointer">
        {pizza.name}
      </div>

      {/* Description */}
      <div className="text-sm font-medium min-h-[60px] mb-6">
        {pizza.description}
      </div>
      <div className="mb-6 flex items-center justify-between">
        {/* Price -> hidden (sm) - visible (lg) */}
        <div className="hidden lg:flex text-xl font-semibold">
          Starts at {pizza.priceSm}
        </div>

        {/* Button -> hidden (sm) - visible (lg) */}
        <button
          onClick={openModal}
          className="hidden lg:flex gradient rounded-lg btn-sm font-semibold text-sm"
        >
          Choose
        </button>

        {/* Button -> visible (sm) - hiden (lg) */}
        <button
          onClick={openModal}
          className="btn btn-sm gradient text-sm lg:hidden px-3 "
        >
          Start at {pizza.priceSm}
        </button>
      </div>
      {/* Modal */}
      {modal && (
        <ModalPizzaDetail closeModal={closeModal}>
          {<PizzaDetails setModal={setModal} pizza={pizza} />}
        </ModalPizzaDetail>
      )}
    </div>
  );
};

export default Pizza;
