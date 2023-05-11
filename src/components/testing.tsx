import { useState, useEffect } from "react";

type Props = {};

export default function Testing({}: Props) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("count was updated");
  }, [count]);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count: {count}
      </button>
    </div>
  );
}
