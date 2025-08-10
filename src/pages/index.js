import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Project";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}
