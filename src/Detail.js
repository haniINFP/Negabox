import React, { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom'; // React Router DOM에서 useLocation과 useNavigate 훅을 가져옵니다

function Detail() {
  const location = useLocation(); // 현재 URL 경로와 상태를 가져옵니다
  const navigate = useNavigate(); // 프로그래밍 방식으로 경로를 변경할 수 있게 해주는 navigate 함수

  useEffect(() => {
    // 컴포넌트가 렌더링된 후에 실행되는 useEffect 훅
    if (location.state == null) { // location.state가 null인 경우
      return navigate('/'); // 홈 페이지로 리다이렉트합니다
    }
  }, []); // 빈 배열을 두 번째 인수로 전달하여 이 효과가 처음 렌더링될 때만 실행되도록 합니다

  if (location.state) { // location.state가 존재하는 경우
    return <span>{location.state.title}</span>; // 상태 객체의 title 속성을 화면에 출력합니다
  } else {
    return null; // location.state가 존재하지 않는 경우 아무것도 렌더링하지 않습니다
  }
}

export default Detail; // Detail 컴포넌트를 기본 내보내기로 내보냅니다
