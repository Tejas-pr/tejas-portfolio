import Container from "@/components/common/Container";
import YTMusicPlaylistCard from "@/components/common/YTMusicPlaylistCard";
import Hero from "@/components/landing/Hero";
import Experience from "@/components/landing/Experience";
import Technologies from "@/components/landing/Technologies";
import Projects from "@/components/landing/Projects";

export default function Home() {
  return (
    <Container className="min-h-screen py-16">
      <Hero />
      <YTMusicPlaylistCard />
      <Technologies />
      <Experience />
      <Projects />
    </Container>
  );
}
