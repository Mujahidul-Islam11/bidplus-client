import Banner from "./Banner";
import TabCategories from "./TabCategories";
import Blog from "./Blog";
import FeaturedFreelancers from "./FeaturedFreelancers";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <TabCategories></TabCategories>
      <FeaturedFreelancers></FeaturedFreelancers>
      <Blog></Blog>
      
    </div>
  );
};

export default Home;
