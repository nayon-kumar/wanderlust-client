import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { PiCalendarBold, PiMapPinLineLight } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import { CancelAlert } from "./CancelAlert";
import Link from "next/link";

const BookingCard = ({ booking }) => {
  return (
    <div className="border shadow-md rounded-lg p-4">
      {/* Main container */}
      <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
        {/* Left section */}
        <div className="flex flex-col sm:flex-row gap-5 w-full">
          {/* Image */}
          <div className="relative w-full sm:w-64 aspect-video">
            <Image
              className="rounded-lg object-cover"
              src={booking?.imageUrl}
              alt={booking?.destinationName}
              fill
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <Chip
              color="success"
              className="flex w-fit items-center gap-1 bg-[#E8F9EE] text-[#1E9E35]"
            >
              <FaRegCheckCircle />
              Success
            </Chip>

            <h3 className="font-bold text-xl sm:text-2xl md:text-3xl mt-2">
              {booking?.destinationName}
            </h3>

            {/* Date */}
            <div className="flex items-center gap-2 font-medium text-[#6C696D] mt-3">
              <PiCalendarBold size={20} />
              <span>
                Departure:{" "}
                {booking?.departureDate
                  ? booking.departureDate.slice(0, 10)
                  : "N/A"}
              </span>
            </div>

            {/* Country */}
            <div className="flex items-center gap-2 font-medium text-[#6C696D] mt-3">
              <PiMapPinLineLight size={20} />
              <span className="capitalize">{booking?.country}</span>
            </div>

            {/* Price */}
            <h3 className="text-[#15A1BF] mt-4 text-xl sm:text-2xl md:text-3xl font-bold">
              ${booking?.price}
            </h3>
          </div>
        </div>

        {/* Right actions */}
        <div className="flex flex-row lg:flex-col gap-3 w-full lg:w-auto">
          <Link
            href={`/destinations/${booking.destinationID}`}
            className="w-full"
          >
            <Button className="w-full flex items-center justify-center gap-2">
              <IoMdEye size={18} />
              View
            </Button>
          </Link>

          <div className="w-full">
            <CancelAlert booking={booking} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
