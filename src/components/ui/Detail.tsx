import { MdOutlineWatchLater } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { AiOutlineDollar } from "react-icons/ai";

interface DetailProps {
  name: string;
  duration: string;
  location: string;
  price: string;
  description: string;
  imageUrl: string;
}

const Detail: React.FC<DetailProps> = ({ name, duration, location, price, description, imageUrl }) => {
  return (
    <section className="text-gray-40 body-font font-primary">
      <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
        <img
          className="object-cover object-center w-5/6 mb-10 border-4 border-blue-500 rounded bg-primary-celeste lg:w-2/6 md:w-3/6"
          alt="hero"
          src={imageUrl}
        />
        <div className="w-full lg:w-2/3">
          <h1 className="mb-4 text-3xl font-medium text-center title-font sm:text-4xl">
            {name}
          </h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex items-center">
              <MdOutlineWatchLater className="mr-2" />
              <h2 className="text-xl font-medium title-font sm:text-2xl">{duration}</h2>
            </div>
            <div className="flex items-center">
              <GrMapLocation className="mr-2" />
              <h2 className="text-xl font-medium title-font sm:text-2xl">{location}</h2>
            </div>
            <div className="flex items-center md:col-span-2">
              <AiOutlineDollar className="mr-2" />
              <h2 className="text-xl font-medium title-font sm:text-2xl">{price}</h2>
            </div>
          </div>
          <p className="mt-4 leading-relaxed text-center">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default Detail;
