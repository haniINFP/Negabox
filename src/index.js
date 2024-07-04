import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <div class="headTitle head">
      NEGABOX
      </div>
      <div class="menu head">
        <div>최신 작품</div>
        <div>인기있는 작품</div>
        <div>평가가 좋은 작품</div>
        <div>방영 예정 작품</div>
      </div>
    {/* 헤드라인 및 메뉴 블록 생성 */}
    </div>
    <App />
  </React.StrictMode>
);
