import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 고기 맛집';
  let [body_title, b] = useState(['남자 코트 추천', '여자 코트 추천', '강남 우동 맛집']);
  // useState는 내용이 바뀌면 알아서 자동 랜더링 해줌
  // destructuring 문법
  let [thumb, thumb_change] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{post}</h4>
      </div>

      <button onClick={()=>{
        let temp = [...body_title];
        temp[0] = '여자 코트 추천';
        b(temp)
      }}>글수정</button>

      <div className="list">
        <h4>{ body_title[0] } <span onClick={()=>{ thumb_change(thumb+1) }}>👍</span> {thumb} </h4>
        <p>12월 20일</p>
      </div>
      <div className="list">
        <h4>{ body_title[1] }</h4>
        <p>12월 20일</p>
      </div>
      <div className="list">
        <h4>{ body_title[2] }</h4>
        <p>12월 20일</p>
      </div>
      
      <Modal></Modal>
      <Modal/>

    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
} 

// class 는 className 으로 써야함
// {} 안에는 변수를 넣을 수 있음
// style={{color: 'blue'}} 이런식으로 쓸 수 있음

export default App;
