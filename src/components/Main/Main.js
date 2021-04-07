import React from "react";

import Layout from "~components/Layout";
import Hero from "./Hero";
import Advantages from "./Advantages";
import ReadyToOrder from "./ReadyToOrder";
import Service from "./Service";
import Works from "./Works";
import Contacts from "./Contacts";

const Main = () => (
  <Layout>
    <Hero />
    <Advantages />
    <ReadyToOrder />
    <Service />
    <Works />
    <Contacts />
  </Layout>
);

export default Main;
