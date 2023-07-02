import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 h-screen grid grid-rows-[auto_1fr_auto] dark:bg-black dark:text-white">
      <Header />
      <div className="p-4">Main</div>
      <Footer />
    </div>
  );
}
