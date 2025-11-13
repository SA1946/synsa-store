import Card from "../Components/Card";
import data from "../Data/homeData";

const Home = () => {
  return (
    // <section
    //   className={` min-h-screen ${
    //     isDark
    //       ? " bg-gradient-to-br from-gray-50 via-white to-gray-100"
    //       : "bg-gradient-to-br from-blue-950 via-slate-950 to-gray-900 "
    //   }`}
    // >
    <section className="dark:bg-gradient-to-br dark:from-gray-50 dark:via-white dark:to-gray-100 bg-gradient-to-br from-blue-950 via-slate-950 to-gray-900 ">
      {/* Hero */}

      <div className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="dark:text-gray-900 text-gray-300">
              Discover Our
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 ml-3">
              Premium Collection
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Explore the latest smartphones with cutting-edge technology and
            premium design
          </p>

          {/*  key features */}
          <div className=" flex flex-wrap justify-center gap-8 mb-12 font-bold dark:text-gray-800    text-gray-200 ">
            <div className="text-center">
              <div className="text-3xl  ">{data.length}+</div>
              <div className="text-sm text-gray-600">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl ">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl ">2 Year</div>
              <div className="text-sm text-gray-600">Warranty</div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex flex-col items-center gap-4 mb-8 md:flex-row md:justify-between ">
          <h2 className=" text-2xl md:text-3xl font-bold  dark:text-gray-900 text-gray-300">
            All Products
          </h2>

          {/* Filter Options */}
          <div className="flex gap-3">
            <select className="px-4 py-2 border text-center border-gray-300 rounded-xl bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Sort by Price</option>
              <option>Low to High</option>
              <option>High to Low</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-xl bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Colors</option>
              <option>Black</option>
              <option>White</option>
              <option>Blue</option>
            </select>
          </div>
        </div>

        <Card products={data} />
      </div>
    </section>
  );
};

export default Home;
