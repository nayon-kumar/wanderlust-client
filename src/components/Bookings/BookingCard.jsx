import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { PiCalendarBold, PiMapPinLineLight } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";

const BookingCard = ({ booking }) => {
  return (
    <div className="border shadow-md rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-6">
          <div className="relative w-64 aspect-video">
            <Image
              className="rounded-lg shadow"
              src={booking?.imageUrl}
              alt={booking?.destinationName}
              fill
            />
          </div>
          <div>
            <Chip
              color="success"
              className="flex items-center gap-1 bg-[#E8F9EE] text-[#1E9E35]"
            >
              <FaRegCheckCircle />
              Success
            </Chip>
            <h3 className="font-bold text-2xl md:text-3xl mt-2">
              {booking?.destinationName}
            </h3>
            <div className="flex items-center gap-2 font-medium text-[#6C696D] mt-4">
              <PiCalendarBold size={20} />
              <span className="capitalize">
                Departure: {booking?.departureDate.slice(0, 10)}
              </span>
            </div>
            <div className="flex items-center gap-2 font-medium text-[#6C696D] mt-4">
              <PiMapPinLineLight size={20} />
              <span className="capitalize">{booking?.country}</span>
            </div>
            <h3 className="text-[#15A1BF] mt-4 text-2xl md:text-3xl font-bold">
              ${booking.price}
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <Button>
            <IoMdEye size={20} /> View
          </Button>
          <Button variant="danger">
            <RiDeleteBinLine size={20} />
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
