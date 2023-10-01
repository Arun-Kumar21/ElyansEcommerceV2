"use client";
import { useEffect, useState } from "react";

const Shoes = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("http://localhost:3000/api/getproducts", {
      signal: signal,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err)=>{
        console.log(err)
      })
    return () => {
      controller.abort();
    };
  }, []);

  const shoesProducts = products.filter((product: any) => {
    return product.category === "Shoes";
  });

  return (
    <div>
      <section className="text-gray-400 bg-white dark:bg-transparent body-font">
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-wrap -m-4">
            {shoesProducts.map((product: any) => {
              return (
                <div
                  key={product.slug}
                  className="lg:w-1/4 md:w-1/2 p-4 w-full"
                >
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-contain  w-full h-full block"
                      src={product.img}
                    />
                  </a>
                  <div className="mt-4 flex justify-between item-center">
                    <div>
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {product.title}
                      </h3>
                      <p className="mt-1">${product.price}</p>
                      <h2 className="title-font text-sm pt-1 text-black font-medium dark:text-slate-300">
                        {product.category}
                      </h2>
                    </div>

                    <div>
                      <button className="bg-black dark:bg-white dark:text-black text-white p-2 rounded-md mt-2">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shoes;
