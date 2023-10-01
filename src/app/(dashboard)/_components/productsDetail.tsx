import Image from "next/image";
import Link from "next/link";

import shoesImg from "@/assets/Images/ImageComponents/unsplashshoe.jpg";
import tshirtImg from "@/assets/Images/ImageComponents/unsplashTshirt.jpg";
import pantImg from "@/assets/Images/ImageComponents/unsplashPant.jpg";
import mugsImg from "@/assets/Images/ImageComponents/unsplashMugs.jpg";
import hoodiesImg from "@/assets/Images/ImageComponents/unsplashHoodies.jpg";

const products = [
  {
    type: "Shoes",
    src: shoesImg,
    desc: "Step into Greatness: Elevate Your Journey with Our Premium Footwear Collection",
    alt: "shoes",
    link: "/Products/shoes",
  },
  {
    type: "T-Shirt",
    src: tshirtImg,
    desc: "Elevate Your Style: Unleash the Power of Expression with Our T-Shirt Collection",
    alt: "tshirt",
    link: "/Products/tshirts",
  },
  {
    type: "Pants",
    src: pantImg,
    desc: "Dress for Success: Redefine Your Wardrobe with Our Exclusive Pants Selection",
    alt: "pants",
    link: "/Products/pants",
  },
  {
    type: "Mugs",
    src: mugsImg,
    desc: "Sip in Style: Unwrap Joy with Our Mug Collection",
    alt: "mugs",
    link: "/Products/mugs",
  },
  {
    type: "Hoodies",
    src: hoodiesImg,
    desc: "Sip in Style: Unwrap Joy with Our Mug Collection",
    alt: "hoodies",
    link: "/Products/hoodies",
  },
];

const ProductDetail = () => {
  const items = products;
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-sm text-sky-500 tracking-widest font-medium title-font mb-1">
              Discover Our Inventory
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 dark:text-slate-300">
              eLYans ECommerce 2.0
            </h1>
          </div>

          <section className="text-gray-600 body-font">
            <div className="container px-5 py-3 mx-auto">
              <div className="flex flex-wrap -m-4">
                {items.map((item) => {
                  return (
                    <div className="p-4 md:w-1/3">
                      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden relative">
                        <Image
                          className="h-full w-full object-cover object-center
                      hover:scale-105 transition-all ease-in-out"
                          src={item.src}
                          alt={item.alt}
                          priority
                        />

                        <div className="absolute left-4 bottom-4 w-[80%] md:left-2 p-2 rounded-md text-white">
                          <h1 className="text-2xl my-2 md:text-base lg:text-2xl">{item.type}</h1>
                          <p className="text-sm w-[90%] md:hidden lg:flex">{item.desc}</p>
                          <Link href={item.link}>
                            <button className="bg-sky-500 p-2 rounded-md text-white my-2 hover:bg-sky-700 px-4 md:my-0 lg:my-1">
                              Shop
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
