const person = {
  name: "Hamster",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

// {} 를 사용하면 동적 속성을 참조할 수 있다.
export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Hamster"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
