"use client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const DestinationButton = () => {
  const router = useRouter();
  return (
    <div>
      <Button
        className="rounded-md"
        onClick={() => router.push("/destinations")}
      >
        All destinations <FaArrowRight />{" "}
      </Button>
    </div>
  );
};

export default DestinationButton;
