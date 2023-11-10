import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useEffect, useState } from "react";
import WebDevelopment from "../TabComponents/WebDevelopment";
import GraphicDesigning from "../TabComponents/GraphicDesigning";
import DigitalMarketing from "../TabComponents/DigitalMarketing";

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

  const webDev = "Web Development";
  const GraphicDesign = "Graphic designer";
  const DigitalMarket = "Digital Marketing";

  return (
    <Tabs className={"mt-4 border-2 rounded-lg p-4"}>
      <TabList className={"text-center mb-4 "}>
        <Tab>{webDev}</Tab>
        <Tab>{GraphicDesign}</Tab>
        <Tab>{DigitalMarket}</Tab>
      </TabList>

      <TabPanel>
        <div className="grid md:grid-cols-4 gap-4">
          {web?.map((webjobs) => (
            <WebDevelopment key={webjobs._id} webjobs={webjobs}></WebDevelopment>
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
  );
};

export default TabCategories;
