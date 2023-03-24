/* eslint-disable react/no-unknown-property */
/* eslint-disable react/button-has-type */
import React from 'react';
import CartItems from 'renderer/components/CartItem';

export default function RightSidebar() {
  return (
    <div className="w-5/12 flex flex-col bg-blue-gray-50 h-full bg-white pr-4 pl-2 py-4">
      <div className="bg-white rounded-3xl flex flex-col h-full shadow">
        {/* <!-- empty cart --> */}
        <div
          x-show="cart.length === 0"
          className="flex-1 w-full p-4 opacity-25 select-none flex flex-col flex-wrap content-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <p>CART EMPTY</p>
        </div>

        {/* <!-- cart items --> */}
        <div
          x-show="cart.length > 0"
          className="flex-1 flex flex-col overflow-auto"
        >
          <div className="h-16 text-center flex justify-center">
            <div className="pl-8 text-left text-lg py-4 relative">
              {/* <!-- cart icon --> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <div
                x-show="getItemsCount() > 0"
                className="text-center absolute bg-cyan-500 text-white w-5 h-5 text-xs p-0 leading-5 rounded-full -right-2 top-3"
                x-text="getItemsCount()"
              >
                0
              </div>
            </div>
            <div className="flex-grow px-8 text-right text-lg py-4 relative">
              {/* <!-- trash button --> */}
              <button
                x-on:click="clear()"
                className="text-blue-gray-300 hover:text-pink-500 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1 w-full px-4 overflow-auto">
            {/* Cart items */}
            <CartItems cart={[]} />
          </div>
        </div>
        {/* <!-- end of cart items --> */}

        {/* <!-- payment info --> */}
        <div className="select-none h-auto w-full text-center pt-3 pb-4 px-4">
          <div className="flex mb-3 text-lg font-semibold text-blue-gray-700">
            <div>TOTAL</div>
            <div
              className="text-right w-full"
              // x-text="priceFormat(getTotalPrice())"
            >
              {0}
            </div>
          </div>
          <div className="mb-3 text-blue-gray-700 px-3 pt-2 pb-3 rounded-lg bg-blue-gray-50">
            <div className="flex text-lg font-semibold">
              <div className="flex-grow text-left">CASH</div>
              <div className="flex text-right">
                <div className="mr-2">Rp</div>
                <input
                  x-bind:value="numberFormat(cash)"
                  x-on:keyup="updateCash($event.target.value)"
                  type="text"
                  className="w-28 text-right bg-white shadow rounded-lg focus:bg-white focus:shadow-lg px-2 focus:outline-none"
                />
              </div>
            </div>
            <hr className="my-2" />
            <div className="grid grid-cols-3 gap-2 mt-2">
              {/* <template x-for="money in moneys">
                <button
                  x-on:click="addCash(money)"
                  className="bg-white rounded-lg shadow hover:shadow-lg focus:outline-none inline-block px-2 py-1 text-sm"
                >
                  +<span x-text="numberFormat(money)"></span>
                </button>
              </template> */}
            </div>
          </div>
          <div
            x-show="change > 0"
            className="flex mb-3 text-lg font-semibold bg-cyan-50 text-blue-gray-700 rounded-lg py-2 px-3"
          >
            <div className="text-cyan-800">CHANGE</div>
            <div
              className="text-right flex-grow text-cyan-600"
              x-text="priceFormat(change)"
            >
              0
            </div>
          </div>
          <div
            x-show="change < 0"
            className="flex mb-3 text-lg font-semibold bg-pink-100 text-blue-gray-700 rounded-lg py-2 px-3"
          >
            <div
              className="text-right flex-grow text-pink-600"
              x-text="priceFormat(change)"
            >
              0
            </div>
          </div>
          <div
            x-show="change == 0 && cart.length > 0"
            className="flex justify-center mb-3 text-lg font-semibold bg-cyan-50 text-cyan-700 rounded-lg py-2 px-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
          </div>
          <button
            className="text-white rounded-2xl text-lg w-full py-3 focus:outline-none"
            x-bind:className="{
              'bg-cyan-500 hover:bg-cyan-600': submitable(),
              'bg-blue-gray-200': !submitable()
            }"
            // disabled={"!submitable()"}
            // x-on:click="submit()"
          >
            SUBMIT
          </button>
        </div>
        {/* - end of payment info -- */}
      </div>
    </div>
  );
}