"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiCalendarBold, PiMapPinLineLight } from "react-icons/pi";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const DestinationCard = ({ destination }) => {
  const { _id, imageUrl, country, destinationName, price, duration } =
    destination;
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="border border-gray-200 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-in-out">
        <Link href={`/destinations/${_id}`}>
          <div className="relative aspect-video">
            <Image
              src={imageUrl}
              alt={destinationName}
              fill
              className="rounded-t-xl"
            />
          </div>
          <div className="px-4 pb-4">
            <div>
              <div className="flex items-center gap-2 font-medium text-[#6C696D] mt-4">
                <PiMapPinLineLight size={20} />
                <span className="capitalize">{country}</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <h3 className="text-[#0C0B0B] capitalize font-medium text-xl sm:text-2xl">
                  {destinationName}
                </h3>
                <h2>
                  <span className="text-[#0C0B0B] font-medium text-xl sm:text-2xl">
                    ${price}
                  </span>
                  <span className="text-[#6C696D]">/Person</span>
                </h2>
              </div>
              <div className="flex items-center gap-2 font-medium text-[#6C696D] mt-2">
                <PiCalendarBold size={20} />
                <span className="capitalize">{duration}</span>
              </div>
              <Button className="w-full mt-4 mb-2">View Details</Button>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
