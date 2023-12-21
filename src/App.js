import "./App.css";

function App() {
  return (
    <div className="react">
      <header>
        <title>카카오톡</title>
        <nav>
          <ul>
            <li>카톡 안녕가이드</li>
            <li>카톡 설명서</li>
            <li>다운로드</li>
          </ul>
        </nav>
        <hr></hr>
      </header>
      <section>
        <div>
          <h1>이모티콘</h1>
          <p>
            우리들의 새로운 언어, 이모티콘! 글자만으로는 내 감정을 표현하기
            어려운 순간들, 고민하지 말고 이모티콘을 이용해보세요!
          </p>
        </div>
        <div>이미지</div>
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
