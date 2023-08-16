interface IItem {
  name: string;
  isPacked: boolean;
}

// 조건부 렌더링
// React 안에서 JSX는 if와 같이 && 이나 ? : 같은 삼항연산자를 사용하기도 한다
// 아래는 &&을 사용한 사례
function Item({ name, isPacked }: IItem) {
  return (
    <li className="item">
      {name} {isPacked && "✔"}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Hamster's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="golden leaf" />
        <Item isPacked={false} name="photo of Tam" />
      </ul>
    </section>
  );
}
