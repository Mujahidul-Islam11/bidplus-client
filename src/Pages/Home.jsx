import { Helmet } from "react-helmet";
import Banner from "./Banner";
import TabCategories from "./TabCategories";
import TopFrelencers from "./TopFrelencers";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Banner></Banner>
      <TabCategories></TabCategories>
      <TopFrelencers></TopFrelencers>
    </div>
  );
};

export default Home;
