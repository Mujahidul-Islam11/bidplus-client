const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/FgzH6Ys/5358345-2761902.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">Your Future Starts Here – Apply Now</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
