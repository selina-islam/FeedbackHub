import { Button } from "../ReuseableComponent/Button";

const Magnificent = () => {
  return (
    <section className="w-[80%] mx-auto my-24">
      <div>
        <h1 className=" font-semibold text-[34px] leading-[42px] md:text-start text-center ">
          Discover our magnificent place in photos
        </h1>
        <p className="font-roboto text-base leading-[18px] text-[#5E5E5E] my-5 max-w-lg">
          The lorem ipsum is, in printing, a series of meaningless words used
          temporarily to calibrate a layout.The lorem ipsum is, in printing.
        </p>
      </div>
      <div>
        <div className="flex flex-col sm:flex-row items-center gap-6 my-16">
          <div className="relative">
            <img src="/magnificent1.png" alt="" className="cursor-pointer" />
            <div className="absolute bottom-5 left-5">
              <Button className="bg-white text-black flex gap-3 items-center">
                <img src="/grid.png" alt="" />
                View all photos (7)
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <img src="/magnificent2.png" alt="" className="cursor-pointer" />
            <img src="/magnificent3.png" alt="" className="cursor-pointer" />
          </div>
          <div className="space-y-4">
            <img src="/magnificent4.png" alt="" className="cursor-pointer" />
            <img src="/magnificent5.png" alt="" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Magnificent;
