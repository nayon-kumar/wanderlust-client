"use client";
import { Separator } from "@heroui/react";
import MyContainer from "../Common/MyContainer";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();
  return (
    <div className="bg-[url('/assets/Banner.png')] bg-no-repeats bg-cover text-white  flex justify-between flex-col items-center pt-30  md:pt-40 pb-10 gap-5">
      <div className="p-10 text-center flex justify-center flex-col items-center gap-3.5 flex-1">
        <h1 className="text-4xl md:text-6xl">
          Discover Your <br /> Next Adventure
        </h1>

        <p className="text-xl max-w-166 md:text-2xl">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-normal gap-5">
          <button
            onClick={() => router.push("/destinations")}
            className="uppercase bg-cyan-500 px-5 py-1.5 md:py-3 cursor-pointer"
          >
            Explore Now
          </button>

          <button
            onClick={() => router.push("/destinations")}
            className="uppercase px-5 py-1.5 md:py-3 bg-white/50 cursor-pointer"
          >
            View Destination
          </button>
        </div>
      </div>

      <MyContainer>
        <div className="bg-white/30 flex flex-wrap gap-5 items-center justify-around">
          <div className="px-4 py-4 text-center">
            <h3 className="text-sm">Location</h3>
            <p className="text-xs mt-1">Address, City or Zip</p>
          </div>
          <Separator
            className="hidden sm:flex"
            variant="tertiary"
            orientation="vertical"
          />
          <div className="px-4 py-4 text-center">
            <h3 className="text-sm">Date/Duration</h3>
            <p className="text-xs mt-1">Anytime/3 Days</p>
          </div>
          <Separator
            className="hidden sm:flex"
            variant="tertiary"
            orientation="vertical"
          />
          <div className="px-4 py-4 text-center">
            <h3 className="text-sm">Budget</h3>
            <p className="text-xs mt-1">$0-$3000</p>
          </div>
          <Separator
            className="hidden sm:flex"
            variant="tertiary"
            orientation="vertical"
          />
          <div className="px-4 py-4 text-center">
            <h3 className="text-sm">People</h3>
            <p className="text-xs mt-1">5-10</p>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Banner;
