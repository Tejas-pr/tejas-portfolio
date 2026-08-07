import Container from "@/components/common/Container";
import FadeIn from "@/components/common/FadeIn";
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
import Certifications from "@/components/landing/Certifications";

export default function Home() {
  return (
    <Container className="min-h-screen py-16">
      <FadeIn>
        <Hero />
      </FadeIn>
      <FadeIn delay={0.1}>
        <YTMusicPlaylistCard />
      </FadeIn>
      <FadeIn>
        <Technologies />
      </FadeIn>
      <FadeIn>
        <Experience />
      </FadeIn>
      <FadeIn>
        <Projects />
      </FadeIn>
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn>
        <Certifications />
      </FadeIn>
      <FadeIn>
        <Github />
      </FadeIn>
      {/* <Blog /> */}
      <FadeIn>
        <CTA />
      </FadeIn>
      <FadeIn>
        <Journey />
      </FadeIn>
    </Container>
  );
}
