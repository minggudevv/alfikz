import Hero from "@/components/Hero";
import Features from "@/components/Features";
import RankList from "@/components/RankList";
import StaffList from "@/components/StaffList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <Features />
      <RankList />
      <StaffList />
      <Footer />
    </main>
  );
}
