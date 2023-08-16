// 컴포넌트별 쪼개기 연습.
// 하나의 컴포넌트는 버튼부터, 하나의 페이지가 될 수도 있음
function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
