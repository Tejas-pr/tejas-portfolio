import Container from "@/components/common/Container";
import YTMusicPlaylistCard from "@/components/common/YTMusicPlaylistCard";
import Hero from "@/components/landing/Hero";
import Experience from "@/components/landing/Experience";
import Technologies from "@/components/landing/Technologies";
import Projects from "@/components/landing/Projects";
import About from "@/components/landing/About";
import Github from "@/components/landing/Github";
import CTA from "@/components/landing/CTA";
import Blog from "@/components/landing/Blog";
import Journey from "@/components/landing/Journey";

export default function Home() {
  return (
    <Container className="min-h-screen py-16">
      <Hero />
      <YTMusicPlaylistCard />
      <Technologies />
      <Experience />
      <Projects />
      <About />
      <Github />
      {/* <Blog /> */}
      <CTA />
      <Journey />
    </Container>
  );
}
