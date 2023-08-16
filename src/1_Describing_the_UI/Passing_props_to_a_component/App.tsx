import { PropsWithChildren } from "react";
import { getImageUrl } from "./utils";

// props는
// 객체, 배열, 함수, jsx 등을 포함한 어떤 값도 전달할 수 있다.
export default function Profile() {
  return (
    // card에 Avatar 전달
    <Card>
      {/* Avatar에 person과 size 전달 */}
      <Avatar size={100} person={{ name: "hamster", imageId: "YfeOqp2" }} />
    </Card>
  );
}
interface IPerson {
  person: { name: string; imageId: string };
  size: number;
}

function Avatar({ person, size }: IPerson) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({ children }: PropsWithChildren) {
  return <div className="card">{children}</div>;
}
