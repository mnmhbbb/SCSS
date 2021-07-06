import avatarimg from './assets/images/img-user-01.jpg';
import { ReactComponent as Star } from './assets/Icon/Star.svg';

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
      <div className="star-rating-13">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <div>
        <button type="button" className="btn-primary btn-32">
          버튼
        </button>
        <button type="button" className="btn-outlined btn-40">
          버튼
        </button>
        <button type="button" className="btn-primary btn-55">
          버튼버튼버튼
        </button>
        <button type="button" disabled className="btn-secondary btn-32">
          버튼
        </button>
        <button type="button" disabled className="btn-primary btn-40">
          버튼
        </button>
        <button type="button" className="btn-outlined btn-48">
          버튼
        </button>
        <button type="button" className="btn-secondary btn-55">
          버튼
        </button>
        <button type="button" className="btn-ghost btn-32">
          버튼!
        </button>
        <button type="button" disabled className="btn-ghost btn-32">
          버튼!
        </button>
      </div>
    </div>
  );
}

export default App;
