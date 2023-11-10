'use client'

import { CircleDollarSign, MenuSquareIcon } from "lucide-react";
import { JetBrains_Mono } from "next/font/google";

import { useState } from "react";

const jetBrain = JetBrains_Mono({
  weight: ["100", "400"],
  subsets: ["latin"],
});

const products = () => {

  const [title , setTitle] = useState("");
  const [slug , setSlug] = useState("");
  const [desc , setDesc] = useState("");
  const [img , setImg] = useState("");
  const [category, setCategory] = useState({});
  const [size, setSize] = useState({});
  const [color, setColor] = useState({});
  const [price, setPrice] = useState(0);
  const [availableQty, setAvailableQty] = useState(0);

  const handleChange = (e:any) =>{
    if(e.target.title == "title"){
      setTitle(e.target.value);
    }else if(e.target.slug == "slug"){
      setSlug(e.target.value);
    }else if(e.target.desc == "desc"){
      setDesc(e.target.value);
    }else if(e.target.value == "img"){
      setImg(e.target.value);
    }else if(e.target.value == "category"){
      setCategory(e.target.value);
    }else if(e.target.value == "size"){

    }
  }


  const [product, setProduct] = useState({
    title: "",
    slug: "",
    desc: "",
    img: "",
    category: "",
    size: "",
    color : "",
    price : 0,
    availableQty : 0
  });

  return (
    <>
      <h1 className={`text-2xl font-bold px-4 ${jetBrain.className}`}>
        Add Products
      </h1>

      <main className="p-2 md:flex">
        <div className="md:w-1/2 h-full flex flex-col gap-y-3 p-2">
          <div className="p-1">
            <h1>Products</h1>
            <input
              type="text"
              className="w-1/2 p-2 border border-gray-300 rounded-md outline-none focus:border-blue-400 font-extralight bg-white text-black"
              placeholder="Add Product"
            />
          </div>

          <div className="p-1 my-1">
            <h1 className="flex gap-x-2 items-center">
              Category <MenuSquareIcon size={12} />
            </h1>

            <select
              name="category"
              className="p-2 w-[40%] rounded-md bg-slate-100 text-black font-extralight text-sm"
            >
              <option value="1" className="font-extralight text-sm">
                Shoes
              </option>
              <option value="2" className="font-extralight text-sm">
                T-Shirt
              </option>
              <option value="3" className="font-extralight text-sm">
                Mugs
              </option>
              <option value="4" className="font-extralight text-sm">
                Pants
              </option>
              <option value="4" className="font-extralight text-sm">
                Hoodies
              </option>
            </select>
          </div>

          <div className="p-1 my-1">
            <h1 className="flex gap-x-2 items-center">
              Price <CircleDollarSign size={12} />
            </h1>
            <input
              type="number"
              className="p-2 border border-gray-300 rounded-md outline-none focus:border-blue-400 font-extralight bg-white text-black"
              placeholder="Price"
            />
          </div>

          <div>
            <h1>Color</h1>
            <input
              type="text"
              placeholder="Color"
              className="p-2 w-[70%] border border-gray-300 rounded-md outline-none focus:border-blue-400 font-extralight bg-white text-black"
            />
          </div>

          <div className="my-2">
            <h1>Description</h1>
            <textarea
              name="desc"
              rows={5}
              placeholder="Description of product"
              className="p-2 border border-gray-300 rounded-md outline-none focus:border-blue-400 font-extralight bg-white text-black w-full"
            ></textarea>
          </div>
        </div>

        <div className="md:w-1/2 h-full flex flex-col gap-y-3 p-2">
          <div>
            <h1>Product Image</h1>
            <input
              type="url"
              name="imgUrl"
              placeholder="Image URL"
              className="p-2 border border-gray-300 rounded-md outline-none focus:border-blue-400 font-extralight bg-white text-black w-1/2"
            />
          </div>

          <div>
            <div className=""></div>
          </div>

          <div>
            <h1>Available Qty</h1>
            <input
              type="number"
              name="AvailableQty"
              placeholder="Available Qty"
              className="p-2 border border-gray-300 rounded-md outline-none focus:border-blue-400 font-extralight bg-white text-black w-1/2"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default products;
