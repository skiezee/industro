import Navbar from "./components/Header/navbar";
import Landing from "./components/Landing/landing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#FFFFFF]">
      <Navbar/>
      <div className="">
        <Landing/>
      </div>
    </main>
  );
}
