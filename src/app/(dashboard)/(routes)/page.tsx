import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import hero from "@/assets/Images/hero.png";
import ProductDetail from "../_components/productsDetail";

const jetBrain = JetBrains_Mono({
  weight: ["100", "400"],
  subsets: ["latin"],
});

const Home = () => {
  return (
    <div>
      <div className={jetBrain.className}>
        <h1 className="text-3xl font-[100] w-[60vw] p-3 md:p-5">
          Elevate Your <br className="md:hidden" /> Style With{" "}
          <br className="md:hidden" /> Our <br className="md:hidden" />{" "}
          Exquisite Wardrobe
          <br /> Collection
        </h1>
      </div>

      <div className="relative my-3 p-2">
        <Image
          src={hero}
          alt="hero"
          className="object-cover w-full h-[70vh]"
          priority
        />

        <div className="absolute flex w-full top-0">
          <div className="w-[50%] h-[70vh] hidden lg:flex"></div>

          <div className="w-[100%] h-[70vh] flex flex-col justify-center items-center">
            <div className="p-5">
              <h1 className="text-black opacity-80 text-4xl">
                Discount 20% For All Orders Over $2000
              </h1>
            </div>

            <div className="md:w-[50%]">
              <h1 className="text-black opacity-60">
                Unleash Savings: Shop Smarter, Not Harder!
              </h1>
            </div>
          </div>
        </div>

        <div className="w-full h-full">
          <ProductDetail />
        </div>

      </div>
    </div>
  );
};

export default Home;
