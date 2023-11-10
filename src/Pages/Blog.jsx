/* eslint-disable react/no-unescaped-entities */

const Blog = () => {
  return (
    <div className="my-10">
      <h3 className="font-bold text-center text-2xl mb-6">
        Our Blogs And Articles
      </h3>
      <div className="grid md:grid-cols-3 gap-3 px-5">
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              10 Essential Tools for Web Developers
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Discover the must-have tools every web developer should consider
              for a more productive and efficient workflow.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Design Trends to Watch in 2023
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Explore the design trends that are expected to dominate the
              graphic design industry in the coming year.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Mastering Digital Marketing: Tips for Success
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Learn the strategies and tactics that can help you achieve success
              in the dynamic world of digital marketing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
