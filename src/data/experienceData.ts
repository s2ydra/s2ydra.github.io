export type Job = {
  title: string
  company: string
  dates: string
  description: string[]
}

export const jobs: Job[] = [
  {
    title: '프로그래밍 언어의 첫경험',
    company: '진로의 결정, 노력의 시작',
    dates: '2015-03',
    description: [
      "동아마이스터고등학교 1학년, '프로그래밍 언어실습' 과목에서 C++ 언어 실습과 알고리즘의 이해를 처음 접하게 됨.",
    ],
  },
  {
    title: '경제적 자립을 위한 취업',
    company: '꿈을 위한 발판을 만드는 시기',
    dates: '2017-09 ~ 2021-03',
    description: [
      '가정형편으로 인해 선취업을 선택하여, 꿈을 위해 성실히 준비',
      'CS / AS 팀에서 근무하여, 협업 능력과 사회 경험을 키움',
    ],
  },
  {
    title: '본격적인 시작',
    company: '학원과 교습소를 다니며 개발 역량을 키움',
    dates: '2021-03 ~ 2021-12',
    description: [
      '학원에서 JAVA의 기본기를 다짐',
      '지인을 통해 교습소를 다니며, 백엔드와 프론트엔드의 기본 개념을 잡음',
    ],
  },
  {
    title: '좀 더 깊은 배움',
    company: '한국폴리텍IV대학에 입학하여 웹개발에 대한 역량을 쌓음',
    dates: '2022-03 ~ 현재',
    description: [
      'JAVA 기반의 Spring Framework 를 중심으로 웹 개발 기술을 학습함',
      'RDBMS 를 학습하여, 빅데이터 관리를 학습 (Oracle Database)',
      '성실함을 무기로 준수한 학점을 기록 (1학년 : 4.47 / 2학년 : 4.43)',
    ],
  },
]
