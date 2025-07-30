import { useParams, Link } from "react-router-dom";
import data from "../Data/homeData";

const ProductDetail = () => {
  const { id } = useParams();

  const product = data.find((p) => p.id == id);
  const {
    title,
    img,
    color,
    announced,
    display,
    resolution,
    chipset,
    ram,
    battery,
    price,
  } = product;

  // if (!product) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="text-center">
  //         <h2 className="text-2xl font-bold text-gray-900 mb-4">
  //           Product not found
  //         </h2>
  //         <Link to="/" className="text-blue-600 hover:text-blue-800">
  //           Back to Home
  //         </Link>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back btn */}
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors duration-300"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/*  Image */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl p-12 aspect-square flex items-center justify-center">
              <img
                src={img}
                alt={title}
                className=" animate-scale-infinite w-full h-full object-contain max-w-sm transition-transform duration-500 "
              />
            </div>

            {/* Color */}
            <div className="absolute top-6 left-6 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
              <div
                className={`w-4 h-4 rounded-full border-2 border-white shadow-md ${
                  // this component using ternary and Card using obj instead
                  color === "Black"
                    ? "bg-black"
                    : color === "White"
                    ? "bg-white border-gray-300"
                    : color === "Blue"
                    ? "bg-blue-500"
                    : color === "Titanium"
                    ? "bg-[#878684]"
                    : color === "Silver"
                    ? "bg-[#C0C0C0]"
                    : color === "Pink"
                    ? "bg-pink-700"
                    : color === "Red"
                    ? "bg-red-700"
                    : color === "Brown"
                    ? "bg-[#964B00]"
                    : "bg-[#800080]"
                }`}
              />
              <span className="text-sm font-medium text-gray-700">{color}</span>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Title and Price */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {title}
              </h1>
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-gray-900">
                  {price}
                </span>
                <span className="text-lg text-gray-500">Starting price</span>
              </div>
            </div>

            {/*  key features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Announced
                </h3>
                <p className="text-lg font-bold text-gray-900">{announced}</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Color
                </h3>
                <p className="text-lg font-bold text-gray-900">{color}</p>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Specifications
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Display</span>
                  <span className="text-gray-900 font-semibold">{display}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Resolution</span>
                  <span className="text-gray-900 font-semibold">
                    {resolution}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Chipset</span>
                  <span className="text-gray-900 font-semibold">{chipset}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">RAM</span>
                  <span className="text-gray-900 font-semibold">{ram}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600 font-medium">Battery</span>
                  <span className="text-gray-900 font-semibold">{battery}</span>
                </div>
              </div>
            </div>

            {/*  Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => (window.location.pathname = "/")}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              >
                Add to Cart
              </button>
              <button
                onClick={() => (window.location.pathname = "/")}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              >
                Save for Later
              </button>
            </div>

            {/* Why chhose this */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Why Choose This?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Premium build quality</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Latest technology</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">2-year warranty</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Free shipping</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
