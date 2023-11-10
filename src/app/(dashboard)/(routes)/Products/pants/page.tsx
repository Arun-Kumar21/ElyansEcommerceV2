'use client'

import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState, useContext } from "react";
import CartContext from "@/app/context/cartContext/cartContext";
import Link from "next/link";
import { Expand } from "lucide-react";

const pants = () => {
  const [products, setProducts] = useState([]);
  const { toast } = useToast();

  const cartContext: any = useContext(CartContext);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("/api/getproducts", {
      signal: signal,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      controller.abort();
    };
  }, []);

  const shoesProducts = products.filter((product: any) => {
    return product.category === "pants";
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
                  className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-sm rounded-md dark:text-white"
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

                    <div className="flex gap-x-1 h-1/2 items-center p-2">
                      <Link href={`/Products/${product.slug}`}>
                        <div className="p-2 dark:text-white rounded-md text-black shadow-sm hover:scale-110">
                          <Expand size={20} />
                        </div>
                      </Link>

                      <button
                        className="bg-black dark:bg-white dark:text-black text-white p-2 rounded-md  hover:bg-sky-500 hover:text-white transition duration-300 ease-in-out dark:hover:bg-sky-500 dark:hover:text-white shadow-md"
                        onClick={() => {
                          cartContext.addToCart(
                            1,
                            product.price,
                            product.title
                          );
                          toast({
                            title: "Added to Cart",
                            description:
                              "We've added the product to your cart.",
                          });
                        }}
                      >
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

export default pants;
