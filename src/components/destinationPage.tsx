import React from "react";
import { useParams } from "react-router-dom";

import { Destinations } from "./data/data";
import DestinationCard from "./destinationCard";

type Props = {};

export default function DestinationPage({}: Props) {
  const destinationId = useParams<{ destinationId: string }>().destinationId;

  if (!destinationId) {
    return <div>Destination Id not found</div>;
  }

  const destination = Destinations.find(
    (destination) => destination.id === parseInt(destinationId)
  );

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <DestinationCard
        name={destination.name}
        image={destination.image}
        description={destination.description}
        id={destination.id}
      />
    </div>
  );
}
