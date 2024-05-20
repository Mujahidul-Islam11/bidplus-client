/* eslint-disable react/no-unescaped-entities */

const TopFrelencers = () => {
  return (
    <div className="my-16 md:my-20">
      <div className="mb-8 md:mb-12">
        <h2 className="font-bold text-center text-4xl md:text-5xl mb-3">
          Meet Our Top Recruiters
        </h2>
        <p className="text-gray-700 text-center text-lg">
          Connect with industry-leading experts to find your perfect fit.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 px-4 md:px-0">
        <div className="card bg-base-100 shadow-md rounded-md overflow-hidden hover:scale-105 transition-transform duration-300">
          <figure>
            <img
              src="https://i.ibb.co/1qNWgcp/successful-freelancer-repeat-work-opt.jpg"
              className="h-72 w-full object-cover"
              alt="Jon Smith"
            />
          </figure>
          <div className="card-body">
            <h3 className="card-title text-2xl font-bold">Jon Smith</h3>
            <p className="text-gray-600">Senior Recruitment Specialist</p>
            <div className="card-actions justify-end">
              <a
                href="#"
                className="btn btn-primary btn-sm rounded-full px-6 font-medium"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md rounded-md overflow-hidden hover:scale-105 transition-transform duration-300">
          <figure>
            <img
              src="https://i.ibb.co/nf4R88R/young-smiling-latin-girl-college-260nw-2151924839.webp"
              className="h-72 w-full object-cover"
              alt="Scara John"
            />
          </figure>
          <div className="card-body">
            <h3 className="card-title text-2xl font-bold">Scara John</h3>
            <p className="text-gray-600">Talent Acquisition Manager</p>
            <div className="card-actions justify-end">
              <a
                href="#"
                className="btn btn-primary btn-sm rounded-full px-6 font-medium"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md rounded-md overflow-hidden hover:scale-105 transition-transform duration-300">
          <figure>
            <img
              src="https://i.ibb.co/vdmdwFG/64078de6934c2c001802ee35.webp"
              className="h-72 w-full object-cover"
              alt="Mrs. Alva"
            />
          </figure>
          <div className="card-body">
            <h3 className="card-title text-2xl font-bold">Mrs. Alva</h3>
            <p className="text-gray-600">Recruitment Consultant</p>
            <div className="card-actions justify-end">
              <a
                href="#"
                className="btn btn-primary btn-sm rounded-full px-6 font-medium"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFrelencers;
