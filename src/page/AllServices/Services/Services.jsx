import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ServiceCard from "../../../component/ServiceCard";
import useServices from "../../../hooks/useServices";
import "react-tabs/style/react-tabs.css";
import { motion, useScroll } from "framer-motion";
import TitleSection from "../../../component/Shared/TitleSection";

const Services = () => {
  const { scrollYProgress } = useScroll();
  const [services] = useServices();
  // console.log(services);
  let acSercvice = services.filter(
    (ser) => ser.category === "AC Repair Services"
  );
  let repairSercvice = services.filter(
    (ser) => ser.category === "Appliance Repair"
  );
  let tripSercvice = services.filter(
    (ser) => ser.category === "Trips & Travels"
  );
  let shiftSercvice = services.filter((ser) => ser.category === "Shifting");
  let beautySercvice = services.filter(
    (ser) => ser.category === "Beauty & Salon"
  );
  let carSercvice = services.filter(
    (ser) => ser.category === "Car Care Services"
  );
  let pestSercvice = services.filter(
    (ser) => ser.category === "Cleaning & Pest Control"
  );
  let paintingSercvice = services.filter(
    (ser) => ser.category === "Painting & Renovation"
  );
  let electricSercvice = services.filter(
    (ser) => ser.category === "Electric & Plumbing"
  );
  let rentSercvice = services.filter((ser) => ser.category === "Car Rental");
  let salonSercvice = services.filter(
    (ser) => ser.category === "Men's Care & Salon"
  );
  return (
    <div>
      <motion.div
        className="progress-bar bg-green-400 z-10 top-16 h-[4px] sticky left-0 right-0 origin-[0%]"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="p-10">
        {/* <h2 className="text-center text-4xl font-bold">All Services</h2> */}
        <TitleSection title="All Services" />
        <div className="text-center p-5">
          <Tabs>
              <TabList>
                <Tab>All Services</Tab>
                <Tab>AC Repair Services</Tab>
                <Tab>Appliance Repair</Tab>
                <Tab>Trips & Travels</Tab>
                <Tab>Shifting</Tab>
                <Tab>Beauty & Salon</Tab>
                <Tab>Car Care Services</Tab>
                <Tab>Cleaning & Pest Control</Tab>
                <Tab>Painting & Renovation</Tab>
                <Tab>Electric & Plumbing</Tab>
                <Tab>Car Rental</Tab>
                <Tab>Men's Care & Salon</Tab>
              </TabList>

            <TabPanel>
              <div className="py-20 grid grid-cols-3 gap-5 justify-items-center">
                {services.map((doc) => (
                  <ServiceCard key={doc._id} data={doc} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="py-20 grid grid-cols-3 gap-5 justify-items-center">
                {acSercvice.map((doc) => (
                  <ServiceCard key={doc._id} data={doc} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="py-20 grid grid-cols-3 gap-5 justify-items-center">
                {repairSercvice.map((doc) => (
                  <ServiceCard key={doc._id} data={doc} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="py-20 grid grid-cols-3 gap-5 justify-items-center">
                {tripSercvice.map((doc) => (
                  <ServiceCard key={doc._id} data={doc} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="py-20 grid grid-cols-3 gap-5 justify-items-center">
                {shiftSercvice.map((doc) => (
                  <ServiceCard key={doc._id} data={doc} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="py-20 grid grid-cols-3 gap-5 justify-items-center">
                {beautySercvice.map((doc) => (
                  <ServiceCard key={doc._id} data={doc} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="py-20 grid grid-cols-3 gap-5 justify-items-center">
                {carSercvice.map((doc) => (
                  <ServiceCard key={doc._id} data={doc} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="py-20 grid grid-cols-3 gap-5 justify-items-center">
                {pestSercvice.map((doc) => (
                  <ServiceCard key={doc._id} data={doc} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="py-20 grid grid-cols-3 gap-5 justify-items-center">
                {paintingSercvice.map((doc) => (
                  <ServiceCard key={doc._id} data={doc} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="py-20 grid grid-cols-3 gap-5 justify-items-center">
                {electricSercvice.map((doc) => (
                  <ServiceCard key={doc._id} data={doc} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="py-20 grid grid-cols-3 gap-5 justify-items-center">
                {rentSercvice.map((doc) => (
                  <ServiceCard key={doc._id} data={doc} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="py-20 grid grid-cols-3 gap-5 justify-items-center">
                {salonSercvice.map((doc) => (
                  <ServiceCard key={doc._id} data={doc} />
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Services;
