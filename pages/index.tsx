import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Work from "../components/Work";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shafayet Hossain | Front-end Developer</title>
        <meta
          name="description"
          content="Personal Portfolio website of Shafayet Hossain. An Experienced Fron-tend Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Skills />
      <Work />
      <Project />
      <Footer />
    </>
  );
};

export default Home;
