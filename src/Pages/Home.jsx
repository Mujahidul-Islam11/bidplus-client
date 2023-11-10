import { Helmet } from "react-helmet";
import Banner from "./Banner";
import TabCategories from "./TabCategories";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Banner></Banner>
      <TabCategories></TabCategories>
    </div>
  );
};

export default Home;
