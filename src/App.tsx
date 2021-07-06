import avatarimg from './assets/images/img-user-01.jpg';
import { ReactComponent as Star } from './assets/Icon/Star.svg';
import { ReactComponent as Search } from './assets/Icon/Search.svg';
import { ReactComponent as Caret } from './assets/Icon/Caret.svg';

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
      <div>
        <div className="select-group is-active">
          <select className="form-select ">
            <option value="1">
              선택사항 1 Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Accusamus officiis, soluta molestias harum dolore odio
              quasi. Asperiores, expedita. Architecto esse velit, labore
              suscipit ipsum quas reprehenderit deserunt porro odio in ducimus,
              maxime mollitia cCumque vitae in, recusandae eligendi delectus
              beatae quod aperiam nihil dolore excepturi consequatur nulla,
              culpa error? Nostrum possimus distinctio excepturi dignissimos
              qui.
            </option>
            <option value="2">선택사항 2</option>
            <option value="3">선택사항 3</option>
            <option value="4">선택사항 4</option>
            <option value="5">선택사항 5</option>
          </select>
          <Caret className="select-caret" />
        </div>
      </div>

      <div className="input-group">
        <Search className="input-search" />
        <input type="text" className="form-input" placeholder="스토어 검색" />
      </div>
    </div>
  );
}

export default App;
