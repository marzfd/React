import Hobby from "./Hobby";

export default function HobbyList() {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing"
  ];

  return (
    <div className="hobby-list">
      <ul>
        {hobbies.map((hobby, index) =>
          <Hobby key={index} hobby={hobby} />
        )}
      </ul>
    </div>
  );
}