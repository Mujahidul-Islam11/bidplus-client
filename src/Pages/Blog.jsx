/* eslint-disable react/no-unescaped-entities */

const Blog = () => {
  return (
    <div className="my-16 md:my-20">
      <div className="mb-6 md:mb-12">
        <h3 className="font-bold text-center text-4xl md:text-5xl mb-3">Our Blogs</h3>
        <p className="text-gray-700 text-center text-lg">
          Explore our blog for career-enhancing insights,<br /> expert advice, and
          inspiring stories.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 px-5">
        <div className="relative flex flex-col bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
          <img
            src="https://i.ibb.co/4gqGJZD/10-tips-for-choosing-the-right-web-development-company-itechnolabs.jpg"
            alt="Blog 1"
            className="h-48 w-full object-cover"
          />
          <div className="p-6 bg-gradient-to-b from-transparent to-blue-gray-50">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              10 Essential Tips for Web Developers
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Discover the must-have tips every web developer should consider
              for a more productive and efficient workflow.
            </p>
            <a
              href="#"
              className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="relative flex flex-col bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
          <img
            src="https://i.ibb.co/K9jWtJF/1703761887616.jpg"
            alt="Blog 1"
            className="h-48 w-full object-cover"
          />
          <div className="p-6 bg-gradient-to-b from-transparent to-blue-gray-50">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Design trends to watch in 2024
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Discover the must-have tools every web developer should consider
              for a more productive and efficient workflow.
            </p>
            <a
              href="#"
              className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="relative flex flex-col bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
          <img
            src="https://i.ibb.co/JB33gkG/1687510640252.jpg"
            alt="Blog 1"
            className="h-48 w-full object-cover"
          />
          <div className="p-6 bg-gradient-to-b from-transparent to-blue-gray-50">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Mastering Digital Marketing: Tips for Success
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Discover the must-have tools every web developer should consider
              for a more productive and efficient workflow.
            </p>
            <a
              href="#"
              className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
