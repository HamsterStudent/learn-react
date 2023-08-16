import { people } from "./data";
import { getImageUrl } from "./utils";

// map을 사용해서 유사한 컴포넌트 출력하기
// data에서 받아온 배열을 바탕으로 컴포넌트 출력, 이를 jsx에 넣어서 리턴
// 각 배열 항목에 key를 지정해야 함!!
export default function List() {
  const listItems = people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}known for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}
