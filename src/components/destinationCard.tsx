import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  id: number;
  name: string;
  image: string;
  description?: string;
};

export default function DestinationCard({
  id,
  name,
  image,
  description,
}: Props) {
  const navigate = useNavigate();

  //how to get current url
  const currentUrl = useLocation().pathname;

  return (
    <div
      key={id}
      className="p-5 flex flex-col justify-center items-center w-1/2 bg-gray-500 rounded-lg"
    >
      <p>{name}</p>
      <div className="flex flex-row justify-center items-center gap-4">
        <img src={image} alt={name} className="w-1/3" />
        <p>{description}</p>
      </div>
      <br />
      {currentUrl === "/" ? (
        <button


          className="bg-blue-500 hover:bg-blue-700 hover:translate-x-8 transition-all duration-300 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            navigate(`/destination/${id}`);
          }}
        >
          Go to {name}
        </button>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            navigate(`/`);
          }}
        >
          Go to home
        </button>
      )}
    </div>
  );
}
