import Image from "next/image";
import React from "react";

const DestinationCard = ({ destination }) => {
  const { imageUrl, country, destinationName, price, duration } = destination;
  return (
    <div>
      <Image src={imageUrl} alt={destinationName} width={400} height={400} />
    </div>
  );
};

export default DestinationCard;
