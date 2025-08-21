export interface Project {
  id: number;
  title: string;
  summary: string;
  images: string[];
  tags: string[];
  details: {
    challenge: string[];
    solution: string[];
    impact: string[];
  };
  externalLink?: {
    title: string;
    url: string;
  };
}
export const projects: Project[] = [
  {
    id: 1,
    title: "영화 예매 사이트 - EATCH",
    summary: "영화 티켓 예매 시, 먹거리 주문을 포함시켜 보다 편리한 영화관 이용을 돕는 사이트",
    images: [
      "EATCH_main.png",
      "EATCH_order.png"
    ],
    tags: ["Spring Legacy", "Oracle DB","SQL", "Vanila Javascript", "Mybatis", "JSP", "AJAX"],
    details: {
      challenge: ["하나의 영화티켓에 먹거리를 여러 종류 주문 시, 먹거리의 종류와 개수를 DB에 주문 데이터를 어떻게 저장할 것인가.",],
      solution: ["영화 티켓에 담길 먹거리 주문 정보 테이블을 복합키 구조로 만들어, 기본키를 '먹거리 주문번호'와 '먹거리 종류'로 구성. 주문 정보 테이블에서는 영화 주문번호와 먹거리 주문번호만 외래키(FK)로 구성하였음.",],
      impact: [
        "Increased marketing ROI by 25% through data-driven campaign adjustments.",
        "Enhanced customer segmentation, leading to a 15% improvement in personalized recommendations and repeat purchases."
      ]
    }
  },
  {
    id: 2,
    title: "Automated Financial Reporting System",
    summary: "Created an automated ETL pipeline to streamline financial reporting, reducing manual data processing time for a financial services firm.",
    images: [
      "https://example.com/finance1.jpg",
      "https://example.com/finance2.jpg"
    ],
    tags: ["Python", "ETL", "Data Engineering", "Finance", "Power BI", "Automation"],
    details: {
      challenge: ["The finance team spent excessive time manually aggregating and reconciling data from multiple sources for monthly reports.",],
      solution: ["Developed a Python-based ETL pipeline that extracted, cleaned, and loaded financial data into Power BI, automating report generation.",],
      impact: [
        "Reduced reporting time from 5 days to a few hours, improving efficiency.",
        "Minimized errors in financial reports, ensuring data accuracy for decision-making."
      ]
    }
  }
];
