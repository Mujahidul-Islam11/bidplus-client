import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState } from 'react';
import WebDevelopment from './WebDevelopment';
import GraphicDesigning from './GraphicDesigning';
import DigitalMarketing from './DigitalMarketing';


const TabCategories = () => {
  const [web , setWeb] = useState()
  const [grdis, setGrDis] = useState()
  const [dM, setDM] = useState()

  useEffect(()=>{
    fetch('WebDevelopment.json')
    .then(res=>res.json())
    .then(data => setWeb(data))
  },[])

  useEffect(()=>{
    fetch('GraphicDesigning.json')
    .then(res=>res.json())
    .then(data => setGrDis(data))
  },[])

  useEffect(()=>{
    fetch('DigitalMarketing.json')
    .then(res=>res.json())
    .then(data => setDM(data))
  },[])



    return (
      <Tabs className={'mt-4 border-2 rounded-lg'}>
      <TabList className={'text-center'}>
        <Tab>Web Development</Tab>
        <Tab>Graphic designer</Tab>
        <Tab>Digital Marketing</Tab>
      </TabList>
  
      <TabPanel>
        <div className='grid md:grid-cols-4 gap-4'>
        {
          web?.map(webjobs => <WebDevelopment key={webjobs.id} webjobs={webjobs}></WebDevelopment>)
        }
        </div>
      </TabPanel>
      <TabPanel>
        <div className='grid md:grid-cols-4 gap-4'>
          {
            grdis?.map(grdisJobs => <GraphicDesigning key={grdisJobs.id} grdisJobs={grdisJobs}></GraphicDesigning>)
          }
        </div>
      </TabPanel>
      <TabPanel>
        <div className='grid md:grid-cols-4 gap-4'>
        {
          dM?.map(dMJobs => <DigitalMarketing key={dMJobs.id} dMJobs={dMJobs}></DigitalMarketing>)
        }
        </div>
      </TabPanel>
    </Tabs>
);

};

export default TabCategories;