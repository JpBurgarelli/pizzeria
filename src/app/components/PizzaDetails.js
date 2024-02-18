'use client';

import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';

import SizeSelection from './SizeSelection';
import CrustSelection from './CrustSelection';
import Topping from './Topping';

//Context
import { CartContext } from '../context/CartContext';

const PizzaDetails = ({ pizza, setModal }) => {
  //pizza size state
  const [size, setSize] = useState('small');

  //pizza crust state
  const [crust, setCrust] = useState('thin');

  //additional toppings state
  const [additionalTopping, setAdditionalTopping] = useState([]);

  //additional toppings price
  const [additionalToppingPrice, setAdditionalToppingPrice] = useState(0);

  //price state
  const [price, setPrice] = useState();

  //
  const { addToCart } = useContext(CartContext);

  //set the price based on the pizza zize
  useEffect(() => {
    size === 'small'
      ? setPrice(parseFloat(pizza.priceSm + additionalToppingPrice).toFixed(2))
      : size === 'medium'
      ? setPrice(parseFloat(pizza.priceMd + additionalToppingPrice).toFixed(2))
      : size === 'large'
      ? setPrice(parseFloat(pizza.priceLg + additionalToppingPrice).toFixed(2))
      : null;
  }, [size, additionalToppingPrice]);

  useEffect(() => {
    if (additionalTopping.length > 0) {
      const toppingPrice = additionalTopping.reduce((a, c) => {
        return a + c.price;
      }, 0);
      setAdditionalToppingPrice(toppingPrice);
    } else {
      setAdditionalToppingPrice(0);
    }
  }, [additionalTopping]);

  return (
    <div className="flex flex-col lg:flex-row lg:gap-x-8 h-full md:p-8">
      {/* top*/}
      <div className="lg:flex-1 flex justify-center items-center">
        {/* Pizza Image */}
        <div className="max-w-[300px] lg:max-w-none mt-6 lg:mt-0">
          <Image
            src={pizza.image}
            alt={pizza.name}
            width={450}
            height={450}
            priority={1}
            className="mx-auto relative"
          />
        </div>
      </div>
      {/* Details */}
      <div className=" flex flex-col flex-1">
        <div className="flex-1 p-2 text-center lg:text-left">
          <div className="flex-1 bg-white overflow-y-scroll h-[46vh] scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white pr-2">
            {/* name */}
            <div className="font-semibold">
              <h2 className="capitalize text-2xl mb-1">{pizza.name}</h2>
              {/* size & crust text */}
              <div className=" mb-6 text-lg font-medium">
                <span>
                  {size === 'small'
                    ? '25 cm'
                    : size === 'medium'
                    ? '30 cm'
                    : size === 'large'
                    ? '35 cm'
                    : null}
                </span>
                <span>, {crust} crust</span>
              </div>
            </div>

            {/* Size Selection */}
            <SizeSelection pizza={pizza} size={size} setSize={setSize} />

            {/* Crust Selection */}
            <CrustSelection crust={crust} setCrust={setCrust} />

            {/* Toppings */}
            <div className="mb-4 text-xl font-semibold">Choose topping</div>

            {/* Toppings List */}
            <div className="flex flex-1 flex-wrap gap-2 py-1 justify-center lg:justify-start">
              {pizza.toppings?.map((topping, index) => {
                return (
                  <Topping
                    topping={topping}
                    additionalTopping={additionalTopping}
                    setAdditionalTopping={setAdditionalTopping}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Add to cart btn */}
        <div className="h-full flex items-center px-2 lg:items-end">
          <button
            onClick={() => {
              addToCart(
                pizza.id,
                pizza.image,
                pizza.name,
                price,
                additionalTopping,
                size,
                crust,
              ),
                setModal(false);
            }}
            className="btn btn-lg gradient w-full flex justify-center gap-x-2"
          >
            <div>Add to cart for</div>
            <div>$ {price}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetails;