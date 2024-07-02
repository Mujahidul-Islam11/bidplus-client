import Banner from "./Banner";
import TabCategories from "./TabCategories";
import Blog from "./Blog";
import FeaturedFreelancers from "./FeaturedFreelancers";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <TabCategories></TabCategories>
      <FeaturedFreelancers></FeaturedFreelancers>
      <Blog></Blog>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
