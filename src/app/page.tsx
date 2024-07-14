import Data from "@/components/Data";
import Controller from "@/components/Controller";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="container flex flex-col gap-8 min-h-screen p-24">
      <Controller />
      <Data />
      <Footer />
    </main>
  );
}
