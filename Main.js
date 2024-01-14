// IP 주소를 저장할 객체
const ipCounts = {};

// 기본 특별한 페이지 내용
let specialPageContent = '<h1>특별한 페이지</h1>';

// IP 주소 추적 함수
function trackIP(ip) {
  // IP 주소가 이미 저장되어 있다면 카운트를 증가시킴
  if (ipCounts[ip]) {
    ipCounts[ip]++;
  } else {
    // IP 주소가 저장되어 있지 않다면 초기화
    ipCounts[ip] = 1;
  }
}

// 특별한 페이지 내용을 설정하는 함수
function setSpecialPageContent(content) {
  specialPageContent = content;
}

// 특정 IP 주소에게 특별한 페이지를 보여주는 함수
function showSpecialPage(ip, elementId) {
  if (ip === '특정_IP_주소') {
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = specialPageContent;
    }
  }
}

// 라이브러리 내보내기
window.vIP = {
  trackIP,
  setSpecialPageContent,
  showSpecialPage,
};
