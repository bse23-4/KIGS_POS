/* eslint-disable jsx-a11y/click-events-have-key-events */

import ProductInterface from '../modules/modules';

/* eslint-disable react/destructuring-assignment */
export default function Products(props: { products: Array<ProductInterface> }) {
  return (
    <div className="grid grid-cols-4 gap-4 pb-3">
      {props.products.map((data) => {
        return (
          <div className="select-none cursor-pointer transition-shadow overflow-hidden rounded-2xl bg-white shadow hover:shadow-lg">
            <img src={data.image} alt={data.name} />
            <div className="flex pb-3 px-3 text-sm -mt-3">
              <p className="flex-grow truncate mr-1">{data.name}</p>
              <p className="nowrap font-semibold">{data.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
