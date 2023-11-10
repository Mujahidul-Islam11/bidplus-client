/* eslint-disable react/no-unescaped-entities */

const TopFrelencers = () => {
  return (
    <div className="my-10">
      <h3 className="font-bold text-center text-2xl mb-6">
        Top Freelancer's Of Our Site
      </h3>
      <div className="grid md:grid-cols-3 gap-6 p-4"> 
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/6DnG7Yk/images.jpg"
              className="h-72 w-full"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Andrew Garfield</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/JtKhgsM/images.jpg"
              className="h-72 w-full"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Scralett Johanson</h2>         
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/vdmdwFG/64078de6934c2c001802ee35.webp"
              className="h-72 w-full"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Jessica Alva</h2>       
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFrelencers;
