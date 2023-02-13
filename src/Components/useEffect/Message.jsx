import { useEffect, useState } from "react";

const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const MouseMove = ({ x, y }) => {
      setCoords({ x, y });
    };

    window.addEventListener("mousemove", MouseMove);
    return () => {
      window.removeEventListener("mousemove", MouseMove);
    };
  }, []);

  return (
    <>
      <h3 className="mt-4 block text-center">Message</h3>
      <div>{JSON.stringify(coords   )}</div>
    </>
  );
};

export default Message;
