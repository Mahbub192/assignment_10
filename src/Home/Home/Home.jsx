import { FaHandPointRight } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const chefData = useLoaderData();
  return (
    <div className="">
      <div
        className="hero h-[calc(100vh-150px)] "
        style={{ backgroundImage: `url("https://i.ibb.co/fF9kSnF/herro.jpg")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-2 md:mb-5 text-2xl md:text-5xl font-bold ">
              Being <span className="text-yellow-600">Smart</span> Chef{" "}
              <span className="text-yellow-600">Every</span> Day
            </h1>
            <p className="mb-3 md:mb-5 uppercase tracking-widest  md:text-lg">
              Recipes every week updates
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <h2 className="mb-2 mt-5 md:my-16 md:mb-5 text-2xl md:text-4xl font-bold ">
          Latest <span className="text-yellow-600">Blog</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="relative">
            <img
              className="h-96"
              src={`https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=1060&t=st=1682968261~exp=1682968861~hmac=5a1da2f9b9dc4b35c2842c534b5a7a5761c7fb54707412bf2a84e4b346d9a605`}
              alt=""
            />
            <p className="bg-yellow-600 w-20 text-xl font-bold text-center px-5 py-8 absolute top-2 left-4">
              2 May 2023
            </p>
            <p className="text-lg font-bold absolute bottom-4 text-white">
              Blog Title Goes To Here
            </p>
          </div>
          <div className="relative">
            <img
              className="h-96"
              src={`https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?size=626&ext=jpg&ga=GA1.2.1589682514.1675421972&semt=sph`}
              alt=""
            />
            <p className="bg-yellow-600 w-20 text-xl font-bold text-center px-5 py-8 absolute top-2 left-4">
              2 May 2023
            </p>
            <p className="text-lg font-bold absolute bottom-4 text-white">
              Blog Title Goes To Here
            </p>
          </div>
          <div className="relative">
            <img
              className="h-96"
              src={`https://img.freepik.com/free-photo/pakistani-dish-arrangement-view_23-2148825114.jpg?size=626&ext=jpg&ga=GA1.2.1589682514.1675421972&semt=sph`}
              alt=""
            />
            <p className="bg-yellow-600 w-20 text-xl font-bold text-center px-5 py-8 absolute top-2 left-4">
              2 May 2023
            </p>
            <p className="text-lg font-bold absolute bottom-4 text-white">
              Blog Title Goes To Here
            </p>
          </div>
          <div className="relative">
            <img
              className="h-96"
              src={`https://img.freepik.com/free-photo/delicious-pakistani-dish-high-angle_23-2148825127.jpg?size=626&ext=jpg&ga=GA1.2.1589682514.1675421972&semt=sph`}
              alt=""
            />
            <p className="bg-yellow-600 w-20 text-xl font-bold text-center px-5 py-8 absolute top-2 left-4">
              2 May 2023
            </p>
            <p className="text-lg font-bold absolute bottom-4 text-white">
              Blog Title Goes To Here
            </p>
          </div>
          <div className="relative">
            <img
              className="h-96"
              src={`https://img.freepik.com/free-photo/side-view-pilaf-with-stewed-beef-meat-plate_141793-5057.jpg?size=626&ext=jpg&ga=GA1.2.1589682514.1675421972&semt=sph`}
              alt=""
            />
            <p className="bg-yellow-600 w-20 text-xl font-bold text-center px-5 py-8 absolute top-2 left-4">
              2 May 2023
            </p>
            <p className="text-lg font-bold absolute bottom-4 text-white">
              Blog Title Goes To Here
            </p>
          </div>
          <div className="relative">
            <img
              className="h-96"
              src={`https://img.freepik.com/premium-photo/mutton-biryani-food-photography_162831-2.jpg?size=626&ext=jpg&ga=GA1.1.1589682514.1675421972&semt=sph`}
              alt=""
            />
            <p className="bg-yellow-600 w-20 text-xl font-bold text-center px-5 py-8 absolute top-2 left-4">
              2 May 2023
            </p>
            <p className="text-lg font-bold absolute bottom-4 text-white">
              Blog Title Goes To Here
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10">
        <h3 className="mb-2 md:mb-5 text-3xl md:text-4xl font-bold">
          Our <span className="text-yellow-600">Chef</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {chefData.map((singleChef) => (
            <div
              key={singleChef?.id}
              className="card md:w-96 bg-base-100 shadow-xl"
            >
              <figure>
                <LazyLoad  threshold={0.95}>
                  <img
                    className="w-full h-64 "
                    src={singleChef?.picture}
                    alt="Shoes"
                  />
                </LazyLoad>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{singleChef?.name}</h2>
                <p>Experience: {singleChef?.experience} years</p>
                <div className="flex items-center justify-between">
                  <p>Recipes: {singleChef?.recipes_count}</p>
                  <p className="flex items-center gap-2">
                    Likes: {singleChef?.likes}
                    <span className="text-yellow-600 text-lg">
                      <FaHandPointRight></FaHandPointRight>
                    </span>
                  </p>
                </div>
                <div className="card-actions ">
                  <Link to={`/category/${singleChef?.id}`}>
                    <button className="btn btn-primary">View Recipes </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 bg-black relative ">
          <img
            className="opacity-40 w-full h-[700px] md:h-80"
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJmSfv3W5Y_IzDRGnvA0mlLnCnTo2BiXMmlw&usqp=CAU`}
            alt=""
          />
          <div className="absolute top-5 flex flex-wrap items-center justify-between gap-10">
            <div className="md:w-5/12 ">
              <h2 className="text-white text-xl font-bold px-5 uppercase">
                most selling food in Bangladesh
              </h2>
              <p className="text-white px-5 mt-2">
                Bangladesh is a country of great cuisine. Its food has been
                shaped by its diverse history and its particular geography.
                Bangladeshi cuisine is influenced by Mughlai cuisine and many
                Persian, Turkish, Arabic, and Indian dishes are popular here. So
                you can guess how many different tastes you will find on any
                menu.
              </p>
            </div>
            <div className="carousel carousel-center md:w-6/12 bg-white  p-4 space-x-4  rounded-box  ">
              {chefData.map((singleChef) => (
                <div
                  key={singleChef.id}
                  className="carousel-item bg-black relative"
                >
                  <img
                    src={singleChef.food_img}
                    className="w-56 h-56 rounded-box opacity-60"
                  />
                  <p className="text-lg text-white absolute bottom-3 font-bold">
                    {singleChef.food_name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
