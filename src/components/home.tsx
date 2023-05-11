import React, { useEffect } from "react";
// import { Destinations } from "./data/data";
import DestinationCard from "./destinationCard";

type Props = {};

export default function Home({}: Props) {
  const [Destinations, setDestinations] = React.useState<
    {
      id: number;
      name: string;
      image: string;
      description: string;
    }[]
  >([]);
  useEffect(() => {
    fetch("http://localhost:3000/Destination").then((data) => {
      data.json().then((jsonData) => {
        setDestinations(jsonData);
      });
    });
  }, []);

  if (!Destinations) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-screen">
      <div className="Destinations flex flex-col space-y-4 justify-center items-center">
        {/* render all the destinations */}
        {Destinations.map((Destination) => {
          return (
            <DestinationCard
              id={Destination.id}
              name={Destination.name}
              image={Destination.image}
              description={Destination.description}
            />
          );
        })}
      </div>
    </div>
  );
}
