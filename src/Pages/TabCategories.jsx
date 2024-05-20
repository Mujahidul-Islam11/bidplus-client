import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useEffect, useState } from "react";
import WebDevelopment from "../TabComponents/WebDevelopment";
import GraphicDesigning from "../TabComponents/GraphicDesigning";
import DigitalMarketing from "../TabComponents/DigitalMarketing";
import "../index.css"

const TabCategories = () => {
  const [web, setWeb] = useState();
  const [grdis, setGrDis] = useState();
  const [dM, setDM] = useState();

  useEffect(() => {
    fetch("https://skill-swap-hub-server.vercel.app/Jobs/web-development")
      .then((res) => res.json())
      .then((data) => setWeb(data));
  }, []);

  useEffect(() => {
    fetch("https://skill-swap-hub-server.vercel.app/Jobs/graphics-design")
      .then((res) => res.json())
      .then((data) => setGrDis(data));
  }, []);

  useEffect(() => {
    fetch("https://skill-swap-hub-server.vercel.app/Jobs/digital-marketing")
      .then((res) => res.json())
      .then((data) => setDM(data));
  }, []);

  return (
    <div className="mx-auto flex justify-center my-16 md:my-20">
     <div>
      <div className="mb-6 md:mb-12">
        <h3 className="font-bold text-center text-2xl md:text-5xl mb-3">
          Discover Your Next Opportunity
        </h3>
        <p className="text-gray-700 text-center text-sm md:text-lg">
          Explore our job board and find your next career opportunity.
        </p>
      </div>
      <Tabs className={`mt-4 rounded-lg p-4`}  selectedTabClassName="my-custom-active-tab">
        <TabList className={"text-center mb-4 flex justify-center gap-8"}>
          <Tab className="cursor-pointer ">
            Web Development
          </Tab>
          <Tab className="cursor-pointer ">
            Graphic Design
          </Tab>
          <Tab className="cursor-pointer ">
            Digital Marketing
          </Tab>
        </TabList>
        <TabPanel>
          <div className="grid md:grid-cols-4 gap-4">
            {web?.map((webjobs) => (
              <WebDevelopment
                key={webjobs._id}
                webjobs={webjobs}
              ></WebDevelopment>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-4 gap-4">
            {grdis?.map((grdisJobs) => (
              <GraphicDesigning
                key={grdisJobs._id}
                grdisJobs={grdisJobs}
              ></GraphicDesigning>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-4 gap-4">
            {dM?.map((dMJobs) => (
              <DigitalMarketing
                key={dMJobs._id}
                dMJobs={dMJobs}
              ></DigitalMarketing>
            ))}
          </div>
        </TabPanel>
      </Tabs>
     </div>
    </div>
  );
};

export default TabCategories;
