import Banner from "./Banner";
import TabCategories from "./TabCategories";
import Blog from "./Blog";
import FeaturedFreelancers from "./FeaturedFreelancers";
import Newsletter from "./Newsletter";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <div className="mt-18">
      <TabCategories></TabCategories>
      </div>
      <FeaturedFreelancers></FeaturedFreelancers>
      <Blog></Blog>
      <Testimonials></Testimonials>
      {/* <Newsletter></Newsletter> */}
    </div>
  );
};

export default Home;
