import { useState, useEffect } from "react";
import type { RocketData } from "@lib/rockets";

type RocketLineProps = {
  rocket: RocketData;
};

export const RocketLine = ({ rocket }: RocketLineProps) => {
  return <div>{rocket.name}</div>;
};

export const RocketsPane = () => {
  const [rockets, setRockets] = useState<Array<RocketData>>([]);

  useEffect(() => {
    let ignore = false;
    async function fetchAgData() {
      const response = await fetch("/api/rockets");
      const rocketsResp = await response.json();
      if (!ignore && rocketsResp) {
        setRockets(rocketsResp);
      }
    }
    fetchAgData();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div>
      <h1>Rockets</h1>
      {rockets.map((r, i) => (
        <RocketLine key={i} rocket={r} />
      ))}
    </div>
  );
};
