import { Link } from "react-router-dom";

const Card = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-6">
      {products.map((props) => {
        const { id, img, title, price, color, chipset } = props;
        const colorMap = {
          Black: "bg-black",
          White: "bg-white border-gray-400",
          Blue: "bg-blue-500",
          Titanium: "bg-[#878684]",
          Silver: "bg-[#C0C0C0]",
          Pink: "bg-pink-700",
          Red: "bg-red-700",
          Brown: "bg-[#964B00]",
          Default: "bg-[#800080]",
        };
        // this component using obj and productDetail using ternary instead
        const selectedColor = colorMap[color] || colorMap.Default;

        //======================================
        return (
          <article
            key={id}
            className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200"
          >
            {/* Image */}
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-8 aspect-square">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Float Badge */}
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                New
              </div>

              {/* Color  */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full border-2 border-white shadow-md ${selectedColor}`}
                />
                <span className="text-xs text-gray-600 font-medium">
                  {color}
                </span>
              </div>
            </div>
            <div className="p-6">
              {/* Title */}
              <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {title}
              </h3>

              {/* Spec */}
              <div className="mb-4 space-y-1">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Chip:</span> {chipset}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">{price}</p>
                  <p className="text-sm text-gray-500">Starting price</p>
                </div>

                <Link
                  to={`products/${id}`}
                  className="bg-blue-600  hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                >
                  Details
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Card;
