import MyContainer from "@/components/Common/MyContainer";
import EditModal from "@/components/Destinations/EditModal";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import { PiCalendarBold, PiMapPinLineLight } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:8000/destination/${id}`);
  const destination = await res.json();
  const { destinationName, imageUrl, country, description, duration } =
    destination;
  return (
    <MyContainer className="pt-35 pb-20">
      <div className="flex flex-wrap items-center gap-4 justify-between">
        <div>
          <Link
            href="/destinations"
            className="flex text-[#6C696D] gap-1 items-center"
          >
            <GoArrowLeft size={20} />
            <span>Back to Destinations</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <EditModal destination={destination} />
          <div className="flex items-center text-[#EF4444] px-6 py-2 border border-[#EF4444] gap-2 cursor-pointer">
            <RiDeleteBinLine size={20} />
            <span>Cancel</span>
          </div>
        </div>
      </div>

      <div className="relative aspect-video mt-6">
        <Image src={imageUrl} alt={destinationName} fill />
      </div>
      <div className="mt-10 border-t-2 border-[#EFEFEF]">
        <div className="flex items-center gap-2 font-medium text-[#6C696D] mt-10">
          <PiMapPinLineLight size={20} />
          <span className="capitalize">{country}</span>
        </div>
        <h2 className="text-[#0C0B0B] font-bold text-2xl md:text-4xl mt-4">
          {destinationName}
        </h2>
        <div className="flex items-center gap-2 font-medium text-[#6C696D] mt-4">
          <PiCalendarBold size={20} />
          <span className="capitalize">{duration}</span>
        </div>
        <div className="mt-10">
          <h3 className="font-semibold text-xl md:text-2xl">Overview</h3>
          <p className="text-[#6C696D] mt-5">{description}</p>
        </div>
        <div className="mt-10">
          <h3 className="font-semibold text-xl md:text-2xl">Heighlights</h3>
          <p className="text-[#6C696D] mt-5">
            Discover the magic of Bali with pristine beaches, ancient temples,
            and vibrant culture. Experience luxury resorts, tropical landscapes,
            and unforgettable sunsets.
          </p>
        </div>
        <div className="mt-5 grid grid-cols-1 space-y-2 md:grid-cols-2">
          <div className="flex items-center gap-2">
            <FaCheck className="text-green-500" />
            <p className="text-[#6C696D]">Luxury beachfront accommodation</p>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-green-500" />
            <p className="text-[#6C696D]">Traditional Balinese spa treatment</p>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-green-500" />
            <p className="text-[#6C696D]">Sunrise trek to Mount Batur</p>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-green-500" />
            <p className="text-[#6C696D]">Visit Uluwatu Temple at sunset</p>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-green-500" />
            <p className="text-[#6C696D]">Private beach dinner experience</p>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-green-500" />
            <p className="text-[#6C696D]">Luxury beachfront accommodation</p>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default DetailsPage;
