const Banner = () => {
  return (
    <div className="hero flex gap-6 w-full h-[400px] text-center">
      <div className="mx-auto p-4 md:px-44">
        <h3 className="text-2xl md:text-5xl font-700">
          Find Your Next Dream Job - Bid and Get Hired Today{" "}
          <span className="text-[#6D54FE] font-extrabold">!</span>
        </h3>
        <p className="text-sm md:text-xl text-gray-700 mt-2">
          The easiest way for freelancers to connect with top employers.
        </p>
        <div className="join mt-8 rounded">
          <input
            className="input input-bordered join-item md:w-[360px]"
            placeholder="Your email"
          />
          <button className="btn join-item text-white bg-[#6D54FE] hover:bg-[#6e54fed0]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
