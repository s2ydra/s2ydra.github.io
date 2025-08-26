export interface Project {
  id: number
  title: string
  name: string
  info: {
    people: string
    period: string
    result: string[]
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
    title: '영화 예매 사이트 - EATCH',
    name: 'EATCH',
    info: {
      people: '1인 (개인프로젝트)',
      period: '2024-08 ~ 2024.11',
      result: [
        '게시물, 목록 등 CRUD 구현',
        '바닐라 자바스크립트를 활용한 JavaScript 역량 향상',
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

  // {
  //   id: 2,
  //   title: "중고 경매 사이트 - OXIOM",
  //   name:"EATCH",
  //   info : {
  //     people: "1인 (개인프로젝트)",
  //     period: "2024-08 ~ 2024.11",
  //     result: ["게시물, 목록 등 CRUD 구현", "바닐라 자바스크립트를 활용한 JavaScript 역량 향상"]
  //   },
  //   summary:"",
  //   images: ["EATCH_main.png", "EATCH_login.jpg", "EATCH_order.png"],
  //   tags: [
  //     "Spring Legacy",
  //     "Oracle DB",
  //     "SQL",
  //     "Vanilla Javascript",
  //     "Mybatis",
  //     "JSP",
  //     "AJAX",
  //   ],
  //   details: {
  //     challenge: [
  //       "하나의 영화티켓에 먹거리를 여러 종류 주문 시, 먹거리의 종류와 개수를 DB에 주문 데이터를 어떻게 저장할 것인가.",
  //       "사용자가 여러 종류의 먹거리를 주문 시, 바닐라 자바스크립트를 이용해 사용자 입력값 검증 후 서버와의 통신 과정에서의 데이터 형식의 문제 : 자바스크립트에서 '종류 - 개수' 형식의 Map을 Array에 담아 서버에 전달할 때, 매핑되는 메소드가 받는 Parameter의 데이터형과 해당 데이터(Map 형식의 데이터가 담긴 Array)를 Java로 어떻게 가공하는가",
  //     ],
  //     solution: [
  //       "영화 티켓에 담길 먹거리 주문 정보 테이블을 복합키 구조로 만들어, 기본키를 '먹거리 주문번호'와 '먹거리 종류'로 구성. 주문 정보 테이블에서는 영화 주문번호와 먹거리 주문번호만 외래키(FK)로 구성하였음.",
  //       "Map 데이터가 담겨있는 Array를 json 형식에 담아 서버에 전송. Jackson ObjectMapper를 활용하여 해당 데이터를 Parsing 하여 받은 후, entrySet()을 활용해 key와 value로 나눠 HashMap에 저장하여 DB로 전송하였음.",
  //     ],
  //     impact: [
  //       "영화 티켓 예매 시 먹거리 주문 정보를 포함하여, 영화관에서 티켓 발권과 동일하게 세팅 되어있는 먹거리를 바로 수령할 수 있도록 돕는 기능",
  //       "먹거리 예약 등록 시, 수령 시간 선택 및 세팅(스위트박스 좌석 전용) 기능",
  //     ],
  //   },
  // },
]
