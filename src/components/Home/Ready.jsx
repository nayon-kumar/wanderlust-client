"use client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Ready = () => {
  const router = useRouter();
  return (
    <div>
      <section
        className="relative py-20 w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/CTA.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
          <div className="text-white">
            <h3 className="mb-4 font-semibold text-2xl md:text-4xl">
              Ready to Start Your Journey?
            </h3>

            <p className="mb-6 text-gray-200">
              Join thousands of travelers who have discovered the world with us
            </p>

            <Button
              onClick={() => router.push("/bookings")}
              className="rounded-md"
            >
              Book Your Trip <FaArrowRight />{" "}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ready;
