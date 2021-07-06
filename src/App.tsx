import avatarimg from './assets/images/img-user-01.jpg';

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <div>
        <strong className="tag-red">특가</strong>
        <strong className="tag-green">무료배송</strong>
        <strong className="tag-gray">첫 리뷰 두 배 적립</strong>
      </div>
      <div>
        <div className="avatar-24">
          <img src={avatarimg} alt="아바타 샘플" />
        </div>
        <div className="avatar-32">
          <img src={avatarimg} alt="아바타 샘플" />
        </div>
      </div>
    </div>
  );
}

export default App;
