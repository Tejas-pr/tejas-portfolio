import Container from "@/components/common/Container";
import YTMusicPlaylistCard from "@/components/common/YTMusicPlaylistCard";
import Hero from "@/components/landing/Hero";

export default function Home() {
  return (
    <Container className="min-h-screen py-16">
      <Hero />
      <YTMusicPlaylistCard />
    </Container>
  );
}
