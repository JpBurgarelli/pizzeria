'use client';
// import { IoCloseOuutline } from 'react-icons/io5';

import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';

export default function Modal({ closeModal, children }) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="bg-[#fff] w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:transform lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none">
            {/*header*/}
            <div>
              <div className="absolute z-30 right-2 top-2 ">
                <IoCloseOutline
                  className="text-4xl text-orange hover:scale-110 duration-200 cursor-pointer"
                  onClick={closeModal}
                />
              </div>
            </div>

            {/*body*/}
            <div className="relative p-6 flex-auto">
              {/* <PizzaDetails pizza={pizza} /> */}
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
