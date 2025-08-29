export interface Project {
  id: number
  title: string
  name: string
  info: {
    people: string
    period: string
    result: string[]
    role?: string[]
  }
  summary: string
  images: string[]
  tags: string[]
  details: {
    challenge: string[]
    solution: string[]
    impact: string[]
  }
  externalLink?: {
    title: string
    url: string
  }
}
export const projects: Project[] = [
  {
    id: 1,
    title: '영화 예매 사이트',
    name: 'EATCH',
    info: {
      people: '1인 (개인프로젝트)',
      period: '2024-08 ~ 2024.11',
      result: [
        '게시물, 목록 등 CRUD 구현',
        '바닐라 자바스크립트를 활용한 JavaScript 역량 향상',
        '외부 CSS 라이브러리를 사용하지 않고 바닐라 CSS로 작업하여, CSS의 기본 지식을 쌓음',
      ],
    },
    summary:
      '영화 티켓 예매 시, 티켓 내용에 먹거리 주문을 포함시켜 보다 편리한 영화관 이용을 돕는 사이트',
    images: ['EATCH_main.png', 'EATCH_login.jpg', 'EATCH_order.png'],
    tags: [
      'Spring Legacy',
      'Oracle DB',
      'SQL',
      'Vanila Javascript',
      'Mybatis',
      'JSP',
      'AJAX',
    ],
    details: {
      challenge: [
        '하나의 영화티켓에 먹거리를 여러 종류 주문 시, 먹거리의 종류와 개수를 DB에 주문 데이터를 어떻게 저장할 것인가.',
        "사용자가 여러 종류의 먹거리를 주문 시, 바닐라 자바스크립트를 이용해 사용자 입력값 검증 후 서버와의 통신 과정에서의 데이터 형식의 문제 : 자바스크립트에서 '종류 - 개수' 형식의 Map을 Array에 담아 서버에 전달할 때, 매핑되는 메소드가 받는 Parameter의 데이터형과 해당 데이터(Map 형식의 데이터가 담긴 Array)를 Java로 어떻게 가공하는가",
      ],
      solution: [
        "영화 티켓에 담길 먹거리 주문 정보 테이블을 복합키 구조로 만들어, 기본키를 '먹거리 주문번호'와 '먹거리 종류'로 구성. 주문 정보 테이블에서는 영화 주문번호와 먹거리 주문번호만 외래키(FK)로 구성하였음.",
        'Map 데이터가 담겨있는 Array를 json 형식에 담아 서버에 전송. Jackson ObjectMapper를 활용하여 해당 데이터를 Parsing 하여 받은 후, entrySet()을 활용해 key와 value로 나눠 HashMap에 저장하여 DB로 전송하였음.',
      ],
      impact: [
        '영화 티켓 예매 시 먹거리 주문 정보를 포함하여, 영화관에서 티켓 발권과 동일하게 세팅 되어있는 먹거리를 바로 수령할 수 있도록 돕는 기능',
        '먹거리 예약 등록 시, 수령 시간 선택 및 세팅(스위트박스 좌석 전용) 기능',
      ],
    },
  },

  {
    id: 2,
    title: '중고 경매 사이트',
    name: 'OXIOM',
    info: {
      people: '4인',
      period: '2025-04 ~ 2024.06',
      result: [
        'Spring Security + JWT 를 활용하여 보안성을 강화',
        'WebSocket을 활용하여 실시간 데이터 송수신(경매금액 변동에 활용)',
        'React + Typescript 를 활용한 프론트앤드 개발을 통해, SPA의 전반적인 개념과 컴포넌트 기반 개발의 경험을 쌓음',
        'Docker를 활용하여 서버에 배포 (http://oxiom.myodan.me)',
      ],
      role: [
        '기획 / 설계',
        'Back-end(비즈니스 로직 설계/작성)',
        'Front-end(경매 페이지, 경매 관련 기록 페이지 퍼블리싱)',
      ],
    },
    summary:
      "'중고거래 + 경매 시스템' 을 통해 판매/구매자 간의 갈등을 해소하며, 보다 더 합리적인 가격으로 거래를 할 수 있는 사이트 ",
    images: ['oxiom_mainpage.png', 'oxiom_bidpage.png'],
    tags: [
      'Spring Boot',
      'Spring Security',
      'PostgeSQL',
      'React',
      'Typescript',
      'node.js',
      'JPA',
      'Websocket',
      'mongoDB',
      'Docker',
    ],
    details: {
      challenge: [
        '경매 기능의 안전성과 보안성을 어떤 식으로 보장할 것인가',
        '입찰 등록 컴포넌트에서 상위 컴포넌트로의 form 데이터 전송 방법을 보다 더 모던하고 간단한 방법은 무엇이 있는가',
      ],
      solution: [
        'Front-end와 Back-end 모두 사용자 입력값 검증 및 Token 검증 기능을 넣어, 보안성을 강화. (Front-end : zod 라이브러리 사용 / Back-end : DTO를 활용하여 입력값 검증, JWT를 통해 현재 토큰 검증',
        'react-hook-form 라이브러리를 사용하여 입력값 검증 기능을 강화하고, handleSubmit 으로 상위 컴포넌트로의 월활한 데이터 전송을 가능하게 함',
      ],
      impact: [
        '채팅 기능과 알림 기능',
        '판매자가 희망하는 경매 기간과 시작가 등 설정 후, 물품 등록 가능',
        '실시간 입찰가 변동을 통해, 구매자는 현재 입찰가를 확인한 후 입찰 등록 가능',
        '거래에 대한 안전성을 높이기 위해 포인트제도로 운영',
      ],
    },
  },
]
