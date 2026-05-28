import Banner from "@/components/Home/Banner";
import Featured from "@/components/Home/Featured";
import Ready from "@/components/Home/Ready";
import Why from "@/components/Home/Why";

export default function Home() {
  return (
    <div>
      <main>
        <Banner />
        <Featured />
        <Why />
        <Ready />
      </main>
    </div>
  );
}
