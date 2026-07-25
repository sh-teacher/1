// ---------- Data ----------

const CATEGORIES = [
  { key: "it", name: "IT·개발", icon: "💻" },
  { key: "medical", name: "의료·보건", icon: "🩺" },
  { key: "art", name: "예술·디자인", icon: "🎨" },
  { key: "edu", name: "교육", icon: "📚" },
  { key: "business", name: "경영·비즈니스", icon: "💼" },
  { key: "science", name: "과학·연구", icon: "🔬" },
  { key: "social", name: "사회·공공서비스", icon: "🤝" },
  { key: "law", name: "법률", icon: "⚖️" },
  { key: "sports", name: "스포츠·레저", icon: "🏅" },
  { key: "culinary", name: "요식업·농수산", icon: "🍳" },
];

// aiImpact.level: "low" | "medium" | "high" — how much AI is expected to reshape the role
const CAREERS = [
  // IT·개발
  { id: "sw-dev", name: "소프트웨어 개발자", category: "it", icon: "💻",
    desc: "웹, 앱, 프로그램 등을 설계하고 코드를 작성해 서비스를 만드는 일을 해요.",
    skills: ["논리적 사고", "문제 해결력", "협업 능력"],
    subjects: ["수학", "정보"], majors: ["컴퓨터공학과", "소프트웨어학과"],
    salary: "평균 4,500만원", outlook: "전망 매우 밝음",
    aiImpact: { level: "medium", text: "AI가 코드 작성을 도와주면서 개발 속도는 빨라지지만, 요구사항을 이해하고 AI가 만든 코드를 검증·설계하는 역량이 더 중요해져요." } },
  { id: "data-analyst", name: "데이터 분석가", category: "it", icon: "📊",
    desc: "데이터를 수집하고 분석해 문제 해결과 의사 결정에 필요한 인사이트를 찾아내요.",
    skills: ["통계", "논리적 사고", "커뮤니케이션"],
    subjects: ["수학", "정보"], majors: ["통계학과", "데이터사이언스학과"],
    salary: "평균 4,800만원", outlook: "전망 매우 밝음",
    aiImpact: { level: "medium", text: "AI가 데이터 정리와 기초 분석을 자동화해주지만, 결과를 해석하고 의사결정에 연결하는 역할은 여전히 사람의 몫이에요." } },
  { id: "ai-engineer", name: "인공지능(AI) 엔지니어", category: "it", icon: "🤖",
    desc: "인공지능 모델을 설계, 학습시켜 다양한 문제를 자동으로 해결하도록 만들어요.",
    skills: ["수학", "프로그래밍", "탐구심"],
    subjects: ["수학", "정보", "과학"], majors: ["인공지능학과", "컴퓨터공학과"],
    salary: "평균 5,200만원", outlook: "전망 매우 밝음",
    aiImpact: { level: "low", text: "AI 기술 자체를 만들고 발전시키는 직업이라 오히려 수요가 계속 커지고 있어요." } },
  { id: "game-planner", name: "게임 기획자", category: "it", icon: "🎮",
    desc: "게임의 세계관, 규칙, 콘텐츠를 기획하고 개발팀과 협업해 게임을 완성해요.",
    skills: ["창의력", "기획력", "협업 능력"],
    subjects: ["정보", "국어"], majors: ["게임학과", "콘텐츠학과"],
    salary: "평균 4,000만원", outlook: "전망 밝음",
    aiImpact: { level: "medium", text: "AI가 그래픽이나 대사 초안 제작을 도와주지만, 재미있는 규칙과 세계관을 구상하는 창의적 기획력은 대체하기 어려워요." } },
  { id: "security-specialist", name: "정보보안 전문가", category: "it", icon: "🔐",
    desc: "해킹과 사이버 공격으로부터 시스템과 데이터를 보호하는 보안 전문가예요.",
    skills: ["분석력", "논리적 사고", "꼼꼼함"],
    subjects: ["정보", "수학"], majors: ["정보보안학과", "컴퓨터공학과"],
    salary: "평균 4,700만원", outlook: "전망 매우 밝음",
    aiImpact: { level: "low", text: "AI를 활용한 해킹이 늘면서 이를 막아낼 보안 전문가의 역할이 오히려 더 중요해지고 있어요." } },
  { id: "cloud-engineer", name: "클라우드 엔지니어", category: "it", icon: "☁️",
    desc: "서버와 데이터를 클라우드 환경에서 안정적으로 운영하고 관리하는 일을 해요.",
    skills: ["문제 해결력", "논리적 사고", "협업 능력"],
    subjects: ["정보", "수학"], majors: ["컴퓨터공학과", "소프트웨어학과"],
    salary: "평균 4,900만원", outlook: "전망 매우 밝음",
    aiImpact: { level: "low", text: "AI 서비스가 늘어날수록 이를 안정적으로 운영할 클라우드 인프라 수요도 함께 커지고 있어요." } },

  // 의료·보건
  { id: "doctor", name: "의사", category: "medical", icon: "🩻",
    desc: "환자를 진찰하고 진단하여 치료 계획을 세우고 건강을 회복하도록 도와요.",
    skills: ["공감 능력", "책임감", "집중력"],
    subjects: ["생명과학", "화학"], majors: ["의예과", "의학과"],
    salary: "평균 8,000만원 이상", outlook: "전망 매우 밝음",
    aiImpact: { level: "low", text: "AI가 진단을 보조하는 도구로 활용되지만, 최종 판단과 환자와의 신뢰 관계 형성은 의사 고유의 영역으로 남아있어요." } },
  { id: "nurse", name: "간호사", category: "medical", icon: "💉",
    desc: "환자를 가까이에서 돌보고 치료 과정을 지원하며 건강 관리를 도와요.",
    skills: ["공감 능력", "꼼꼼함", "체력"],
    subjects: ["생명과학", "보건"], majors: ["간호학과"],
    salary: "평균 4,200만원", outlook: "전망 매우 밝음",
    aiImpact: { level: "low", text: "AI가 기록과 모니터링을 도와줄 수 있지만, 환자를 직접 돌보고 공감하는 역할은 대체하기 어려워요." } },
  { id: "physical-therapist", name: "물리치료사", category: "medical", icon: "🦵",
    desc: "운동이나 재활 치료를 통해 환자의 신체 기능 회복을 돕는 전문가예요.",
    skills: ["공감 능력", "체력", "꼼꼼함"],
    subjects: ["생명과학", "체육"], majors: ["물리치료학과"],
    salary: "평균 3,600만원", outlook: "전망 밝음",
    aiImpact: { level: "low", text: "AI가 재활 데이터를 분석해줄 수 있지만, 직접 몸을 다루고 맞춤 치료하는 과정은 사람이 필요해요." } },
  { id: "clinical-lab", name: "임상병리사", category: "medical", icon: "🧪",
    desc: "혈액, 조직 등을 검사해 질병 진단에 필요한 정보를 제공하는 일을 해요.",
    skills: ["꼼꼼함", "탐구심", "집중력"],
    subjects: ["화학", "생명과학"], majors: ["임상병리학과"],
    salary: "평균 3,800만원", outlook: "전망 밝음",
    aiImpact: { level: "medium", text: "AI가 검사 결과 분석 속도를 높여주지만, 정확한 검체 관리와 이상 소견 판단은 여전히 전문가의 역할이에요." } },
  { id: "pharmacist", name: "약사", category: "medical", icon: "💊",
    desc: "약을 조제하고 올바른 복용법을 안내해 환자의 건강을 지켜주는 전문가예요.",
    skills: ["꼼꼼함", "책임감", "소통 능력"],
    subjects: ["화학", "생명과학"], majors: ["약학과"],
    salary: "평균 6,000만원", outlook: "전망 밝음",
    aiImpact: { level: "medium", text: "AI가 약물 상호작용 확인을 도와주지만, 환자 상태에 맞는 복약 지도는 사람이 직접 해야 해요." } },
  { id: "veterinarian", name: "수의사", category: "medical", icon: "🐾",
    desc: "아픈 동물을 진찰하고 치료하며 동물의 건강과 생명을 돌보는 일을 해요.",
    skills: ["공감 능력", "책임감", "체력"],
    subjects: ["생명과학", "화학"], majors: ["수의예과", "수의학과"],
    salary: "평균 5,500만원", outlook: "전망 밝음",
    aiImpact: { level: "low", text: "AI가 진단 보조 도구로 쓰일 수 있지만, 동물을 직접 다루고 치료하는 일은 여전히 사람의 손이 필요해요." } },

  // 예술·디자인
  { id: "graphic-designer", name: "그래픽 디자이너", category: "art", icon: "🖌️",
    desc: "브랜드, 광고, 편집물 등 다양한 매체의 시각 디자인을 기획하고 제작해요.",
    skills: ["창의력", "감각", "소프트웨어 활용"],
    subjects: ["미술", "정보"], majors: ["시각디자인학과"],
    salary: "평균 3,500만원", outlook: "전망 유지",
    aiImpact: { level: "medium", text: "AI 이미지 생성 도구가 빠르게 시안을 만들어주면서, 사람은 방향을 설정하고 완성도를 다듬는 역할에 집중하게 돼요." } },
  { id: "webtoon-artist", name: "웹툰 작가", category: "art", icon: "✏️",
    desc: "이야기를 구상하고 그림으로 표현해 온라인 만화 콘텐츠를 연재해요.",
    skills: ["창의력", "스토리텔링", "성실함"],
    subjects: ["미술", "국어"], majors: ["웹툰학과", "만화애니메이션학과"],
    salary: "평균 3,000만원(편차 큼)", outlook: "전망 밝음",
    aiImpact: { level: "medium", text: "AI가 배경이나 채색 같은 반복 작업을 도와줄 수 있지만, 독창적인 스토리와 캐릭터를 만드는 힘은 작가에게 있어요." } },
  { id: "video-creator", name: "영상 콘텐츠 크리에이터", category: "art", icon: "🎬",
    desc: "기획부터 촬영, 편집까지 직접 콘텐츠를 만들어 온라인에 공유해요.",
    skills: ["창의력", "기획력", "편집 기술"],
    subjects: ["정보", "미술"], majors: ["영상학과", "미디어콘텐츠학과"],
    salary: "평균 3,200만원(편차 큼)", outlook: "전망 밝음",
    aiImpact: { level: "medium", text: "AI 편집 도구가 작업 시간을 줄여주지만, 기획력과 개성 있는 시점은 여전히 크리에이터의 강점이에요." } },
  { id: "architect", name: "건축가", category: "art", icon: "🏛️",
    desc: "건물과 공간을 설계하여 안전하고 아름다운 구조물을 만들어내요.",
    skills: ["공간 감각", "창의력", "수학"],
    subjects: ["미술", "수학"], majors: ["건축학과"],
    salary: "평균 4,300만원", outlook: "전망 유지",
    aiImpact: { level: "low", text: "AI가 도면 작업을 보조할 수 있지만, 공간과 사람의 삶을 함께 고려한 설계는 건축가의 전문 영역이에요." } },
  { id: "ux-ui-designer", name: "UX/UI 디자이너", category: "art", icon: "📱",
    desc: "앱과 웹사이트를 사용자가 편리하고 즐겁게 이용할 수 있도록 화면을 설계해요.",
    skills: ["창의력", "공감 능력", "소프트웨어 활용"],
    subjects: ["미술", "정보"], majors: ["산업디자인학과", "UX디자인학과"],
    salary: "평균 4,100만원", outlook: "전망 매우 밝음",
    aiImpact: { level: "medium", text: "AI가 화면 시안을 빠르게 제안해주지만, 실제 사용자의 마음을 이해하고 다듬는 감각은 사람만이 할 수 있어요." } },
  { id: "music-producer", name: "음악 프로듀서", category: "art", icon: "🎵",
    desc: "음악을 기획, 작곡, 편곡하고 앨범 제작 전 과정을 총괄하는 일을 해요.",
    skills: ["창의력", "음악적 감각", "기획력"],
    subjects: ["음악", "정보"], majors: ["실용음악과", "음악학과"],
    salary: "평균 3,700만원(편차 큼)", outlook: "전망 유지",
    aiImpact: { level: "medium", text: "AI 작곡 도구가 아이디어 스케치를 도와줄 수 있지만, 감성을 담은 완성도 높은 곡을 만드는 건 사람의 몫이에요." } },

  // 교육
  { id: "elementary-teacher", name: "초등학교 교사", category: "edu", icon: "🍎",
    desc: "어린이들의 전 과목 학습과 인성 발달을 지도하고 이끌어주는 일을 해요.",
    skills: ["소통 능력", "인내심", "기획력"],
    subjects: ["전 과목"], majors: ["초등교육과"],
    salary: "평균 4,000만원", outlook: "전망 유지",
    aiImpact: { level: "low", text: "AI가 학습 자료 준비를 도와줄 수 있지만, 어린이와 정서적으로 교감하며 인성을 지도하는 역할은 대체할 수 없어요." } },
  { id: "science-teacher", name: "중등교사(과학)", category: "edu", icon: "🧫",
    desc: "청소년에게 과학 지식을 가르치고 탐구 활동을 지도하는 교육 전문가예요.",
    skills: ["전달력", "탐구심", "인내심"],
    subjects: ["과학", "국어"], majors: ["과학교육과"],
    salary: "평균 4,100만원", outlook: "전망 유지",
    aiImpact: { level: "medium", text: "AI가 맞춤형 문제와 자료 제공을 도와주지만, 학생의 이해도를 살피고 동기를 부여하는 건 교사의 역할이에요." } },
  { id: "edu-content-developer", name: "교육 콘텐츠 개발자", category: "edu", icon: "📖",
    desc: "교재, 온라인 강의, 학습 프로그램 등 교육 콘텐츠를 기획하고 제작해요.",
    skills: ["기획력", "전달력", "창의력"],
    subjects: ["국어", "정보"], majors: ["교육공학과"],
    salary: "평균 3,800만원", outlook: "전망 밝음",
    aiImpact: { level: "medium", text: "AI가 콘텐츠 초안 제작을 도와주지만, 학습 목표에 맞게 기획하고 검수하는 역량이 더 중요해져요." } },
  { id: "career-counselor", name: "진로상담사", category: "edu", icon: "🧭",
    desc: "학생들이 자신의 적성과 진로를 찾을 수 있도록 상담하고 안내해줘요.",
    skills: ["공감 능력", "소통 능력", "분석력"],
    subjects: ["사회", "국어"], majors: ["교육학과", "상담심리학과"],
    salary: "평균 3,600만원", outlook: "전망 밝음",
    aiImpact: { level: "low", text: "AI가 진로 정보 제공은 도와줄 수 있지만, 학생 개개인의 고민에 공감하며 상담하는 일은 사람이 해야 해요." } },
  { id: "special-ed-teacher", name: "특수교사", category: "edu", icon: "🧩",
    desc: "장애가 있는 학생들이 저마다의 속도로 배울 수 있도록 맞춤 지도하는 교사예요.",
    skills: ["공감 능력", "인내심", "전달력"],
    subjects: ["전 과목"], majors: ["특수교육과"],
    salary: "평균 4,000만원", outlook: "전망 밝음",
    aiImpact: { level: "low", text: "학생마다 다른 필요를 세심하게 살피고 정서적으로 지지하는 역할은 AI가 대체하기 어려워요." } },
  { id: "early-childhood-teacher", name: "유아교육 교사", category: "edu", icon: "🧸",
    desc: "유치원이나 어린이집에서 어린이의 발달과 놀이 학습을 지도하는 교사예요.",
    skills: ["인내심", "소통 능력", "창의력"],
    subjects: ["국어", "음악·미술"], majors: ["유아교육과"],
    salary: "평균 3,300만원", outlook: "전망 유지",
    aiImpact: { level: "low", text: "어린 아이들을 직접 돌보고 놀이로 배움을 이끄는 역할은 사람만이 할 수 있어요." } },

  // 경영·비즈니스
  { id: "marketer", name: "마케팅 전문가", category: "business", icon: "📣",
    desc: "제품과 서비스를 알리기 위한 전략을 세우고 캠페인을 기획, 운영해요.",
    skills: ["창의력", "분석력", "소통 능력"],
    subjects: ["사회", "정보"], majors: ["경영학과", "마케팅학과"],
    salary: "평균 4,200만원", outlook: "전망 밝음",
    aiImpact: { level: "medium", text: "AI가 데이터 분석과 카피 초안 작성을 도와주지만, 브랜드 전략을 세우고 트렌드를 읽는 감각은 여전히 중요해요." } },
  { id: "startup-founder", name: "창업가(스타트업 CEO)", category: "business", icon: "🚀",
    desc: "새로운 아이디어로 사업을 시작하고 팀을 이끌어 성장시키는 일을 해요.",
    skills: ["리더십", "도전 정신", "문제 해결력"],
    subjects: ["사회", "정보"], majors: ["경영학과", "산업공학과"],
    salary: "수익에 따라 다름", outlook: "전망 변동",
    aiImpact: { level: "low", text: "AI 도구를 활용해 업무 효율을 높일 수 있지만, 사업 방향을 결정하고 사람들을 이끄는 리더십은 대체할 수 없어요." } },
  { id: "accountant", name: "회계사", category: "business", icon: "🧾",
    desc: "기업의 재무 정보를 기록, 분석하고 회계 감사를 수행하는 전문가예요.",
    skills: ["꼼꼼함", "분석력", "신뢰성"],
    subjects: ["수학", "사회"], majors: ["회계학과", "경영학과"],
    salary: "평균 5,000만원", outlook: "전망 유지",
    aiImpact: { level: "high", text: "AI가 반복적인 장부 정리와 계산 업무를 빠르게 처리하면서, 회계사의 역할은 데이터 해석과 자문 쪽으로 무게 중심이 옮겨가고 있어요." } },
  { id: "financial-analyst", name: "금융 애널리스트", category: "business", icon: "📈",
    desc: "시장과 기업 데이터를 분석해 투자 및 금융 전략을 제안하는 일을 해요.",
    skills: ["분석력", "수학", "판단력"],
    subjects: ["수학", "사회"], majors: ["경제학과", "금융학과"],
    salary: "평균 5,500만원", outlook: "전망 밝음",
    aiImpact: { level: "medium", text: "AI가 방대한 시장 데이터를 빠르게 분석해주지만, 최종 투자 판단과 리스크 조율은 여전히 사람의 몫이에요." } },
  { id: "hr-manager", name: "인사(HR) 담당자", category: "business", icon: "🧑‍💼",
    desc: "회사에 필요한 인재를 채용하고 직원 교육, 조직 문화를 관리하는 일을 해요.",
    skills: ["소통 능력", "판단력", "공감 능력"],
    subjects: ["사회", "국어"], majors: ["경영학과", "심리학과"],
    salary: "평균 4,300만원", outlook: "전망 유지",
    aiImpact: { level: "medium", text: "AI가 서류 심사 같은 반복 업무를 도와주지만, 사람을 이해하고 조직 문화를 만드는 일은 사람이 해야 해요." } },
  { id: "logistics-manager", name: "물류관리자", category: "business", icon: "📦",
    desc: "상품이 생산지에서 소비자까지 효율적으로 이동하도록 유통 과정을 관리해요.",
    skills: ["기획력", "분석력", "문제 해결력"],
    subjects: ["수학", "사회"], majors: ["물류학과", "경영학과"],
    salary: "평균 4,200만원", outlook: "전망 밝음",
    aiImpact: { level: "medium", text: "AI가 최적 경로와 재고 예측을 도와주지만, 돌발 상황 대응과 전체 흐름 조율은 사람의 판단이 필요해요." } },

  // 과학·연구
  { id: "bio-researcher", name: "생명공학 연구원", category: "science", icon: "🧬",
    desc: "생명 현상을 연구하여 의약품, 식품, 환경 문제 해결에 활용해요.",
    skills: ["탐구심", "꼼꼼함", "논리적 사고"],
    subjects: ["생명과학", "화학"], majors: ["생명공학과"],
    salary: "평균 4,300만원", outlook: "전망 밝음",
    aiImpact: { level: "low", text: "AI가 방대한 실험 데이터 분석을 도와주면서 오히려 새로운 발견의 속도가 빨라지고 있어요." } },
  { id: "environmental-engineer", name: "환경공학자", category: "science", icon: "🌱",
    desc: "환경 오염을 분석하고 해결책을 연구해 지속 가능한 환경을 만들어요.",
    skills: ["탐구심", "분석력", "책임감"],
    subjects: ["화학", "지구과학"], majors: ["환경공학과"],
    salary: "평균 4,000만원", outlook: "전망 밝음",
    aiImpact: { level: "low", text: "AI가 환경 데이터 예측을 도와주지만, 현장에 맞는 해결책을 설계하는 일은 사람의 전문성이 필요해요." } },
  { id: "aerospace-researcher", name: "우주항공 연구원", category: "science", icon: "🚀",
    desc: "로켓, 위성, 항공기 등을 연구하고 개발하는 첨단 과학기술 분야예요.",
    skills: ["수학", "탐구심", "끈기"],
    subjects: ["물리학", "수학"], majors: ["항공우주공학과"],
    salary: "평균 4,600만원", outlook: "전망 밝음",
    aiImpact: { level: "low", text: "AI가 설계와 시뮬레이션을 도와주지만, 새로운 아이디어를 실현하는 연구는 여전히 사람이 이끌어요." } },
  { id: "chemist", name: "화학 연구원", category: "science", icon: "⚗️",
    desc: "새로운 물질을 연구, 개발해 산업과 생활 전반에 활용될 기술을 만들어요.",
    skills: ["탐구심", "꼼꼼함", "논리적 사고"],
    subjects: ["화학", "수학"], majors: ["화학과"],
    salary: "평균 4,200만원", outlook: "전망 유지",
    aiImpact: { level: "low", text: "AI가 물질 조합을 예측해 실험 효율을 높여주지만, 실제 검증과 응용 연구는 사람의 몫이에요." } },
  { id: "astronomer", name: "천문학자", category: "science", icon: "🔭",
    desc: "별, 행성, 우주의 원리를 연구해 우주에 대한 이해를 넓히는 연구자예요.",
    skills: ["탐구심", "수학", "끈기"],
    subjects: ["물리학", "지구과학"], majors: ["천문우주학과", "물리학과"],
    salary: "평균 4,300만원", outlook: "전망 유지",
    aiImpact: { level: "low", text: "AI가 방대한 관측 데이터 분석을 도와주면서 연구자는 더 큰 질문에 집중할 수 있게 됐어요." } },
  { id: "meteorologist", name: "기상연구원", category: "science", icon: "🌦️",
    desc: "날씨와 기후 데이터를 분석해 기상을 예측하고 재해에 대비하도록 도와요.",
    skills: ["탐구심", "분석력", "꼼꼼함"],
    subjects: ["지구과학", "수학"], majors: ["대기과학과"],
    salary: "평균 4,000만원", outlook: "전망 밝음",
    aiImpact: { level: "medium", text: "AI가 기상 예측 모델의 정확도를 높여주지만, 이상 기후 등 예외 상황 판단은 사람의 전문성이 필요해요." } },

  // 사회·공공서비스
  { id: "social-worker", name: "사회복지사", category: "social", icon: "🤲",
    desc: "어려움을 겪는 사람들을 만나 상담하고 필요한 복지 서비스를 연결해줘요.",
    skills: ["공감 능력", "소통 능력", "정의감"],
    subjects: ["사회", "도덕"], majors: ["사회복지학과"],
    salary: "평균 3,200만원", outlook: "전망 밝음",
    aiImpact: { level: "low", text: "AI가 행정 업무를 도와줄 수 있지만, 사람과 신뢰를 쌓고 마음을 돌보는 일은 사람만이 할 수 있어요." } },
  { id: "police-officer", name: "경찰관", category: "social", icon: "👮",
    desc: "시민의 안전을 지키고 범죄를 예방, 수사하는 공공 안전 전문가예요.",
    skills: ["정의감", "체력", "판단력"],
    subjects: ["사회", "체육"], majors: ["경찰행정학과"],
    salary: "평균 4,500만원", outlook: "전망 유지",
    aiImpact: { level: "low", text: "AI가 CCTV 분석 등 수사를 보조할 수 있지만, 현장 판단과 시민과의 신뢰 형성은 사람의 역할이에요." } },
  { id: "diplomat", name: "외교관", category: "social", icon: "🌐",
    desc: "국가를 대표해 다른 나라와 소통하며 국제 문제를 조율하는 일을 해요.",
    skills: ["외국어", "협상력", "논리적 사고"],
    subjects: ["영어", "사회"], majors: ["외교학과", "정치외교학과"],
    salary: "평균 5,000만원", outlook: "전망 유지",
    aiImpact: { level: "low", text: "AI가 번역이나 정보 정리를 도와주지만, 국가 간 신뢰를 쌓고 협상하는 일은 사람만이 할 수 있어요." } },
  { id: "firefighter", name: "소방관", category: "social", icon: "🚒",
    desc: "화재를 진압하고 인명을 구조하며 시민의 생명과 안전을 지켜요.",
    skills: ["체력", "용기", "협업 능력"],
    subjects: ["체육", "과학"], majors: ["소방행정학과"],
    salary: "평균 4,400만원", outlook: "전망 밝음",
    aiImpact: { level: "low", text: "AI가 화재 감지나 경로 안내를 도와줄 수 있지만, 현장에서 인명을 구조하는 일은 사람이 직접 해야 해요." } },
  { id: "public-officer", name: "공무원(행정직)", category: "social", icon: "🏛️",
    desc: "국가와 지역 사회를 위한 행정 업무를 수행하며 공공 서비스를 제공해요.",
    skills: ["책임감", "꼼꼼함", "소통 능력"],
    subjects: ["사회", "국어"], majors: ["행정학과"],
    salary: "평균 4,000만원", outlook: "전망 유지",
    aiImpact: { level: "medium", text: "AI가 민원 응대와 서류 처리를 도와주면서, 공무원은 정책 기획과 시민 소통에 더 집중하게 돼요." } },
  { id: "aid-worker", name: "국제구호활동가", category: "social", icon: "🌏",
    desc: "재난이나 분쟁 지역에서 어려움에 처한 사람들을 돕는 구호 활동을 해요.",
    skills: ["정의감", "외국어", "체력"],
    subjects: ["영어", "사회"], majors: ["국제개발학과", "사회복지학과"],
    salary: "평균 3,500만원(단체별 상이)", outlook: "전망 유지",
    aiImpact: { level: "low", text: "AI가 물자 배분 계획을 도와줄 수 있지만, 위기 현장에서 사람을 직접 돕는 일은 대체할 수 없어요." } },

  // 법률
  { id: "lawyer", name: "변호사", category: "law", icon: "⚖️",
    desc: "법률 지식을 바탕으로 의뢰인을 대리해 분쟁을 해결하고 권리를 보호하는 일을 해요.",
    skills: ["논리적 사고", "설득력", "꼼꼼함"],
    subjects: ["사회", "국어"], majors: ["법학과", "법학전문대학원"],
    salary: "평균 6,500만원", outlook: "전망 유지",
    aiImpact: { level: "medium", text: "AI가 판례 검색과 서류 초안 작성을 도와주지만, 의뢰인 전략 수립과 법정 변론은 여전히 사람의 전문성이 필요해요." } },
  { id: "judge", name: "판사", category: "law", icon: "🧑‍⚖️",
    desc: "법과 증거에 따라 공정하게 사건을 심리하고 판결을 내리는 일을 해요.",
    skills: ["공정성", "논리적 사고", "책임감"],
    subjects: ["사회", "국어"], majors: ["법학과"],
    salary: "평균 9,000만원 이상", outlook: "전망 유지",
    aiImpact: { level: "low", text: "AI가 판례 분석을 보조할 수 있지만, 최종 판단의 책임과 공정성은 반드시 사람이 맡아야 해요." } },
  { id: "judicial-scrivener", name: "법무사", category: "law", icon: "📜",
    desc: "등기, 소송 서류 등 법률 관련 문서를 작성하고 절차를 대행하는 전문가예요.",
    skills: ["꼼꼼함", "법률 지식", "신뢰성"],
    subjects: ["사회", "국어"], majors: ["법학과"],
    salary: "평균 4,800만원", outlook: "전망 유지",
    aiImpact: { level: "high", text: "AI가 정형화된 서류 작성을 빠르게 처리할 수 있어, 단순 서류 대행보다 복잡한 법률 자문 역량이 더 중요해지고 있어요." } },

  // 스포츠·레저
  { id: "athlete", name: "운동선수", category: "sports", icon: "🏃",
    desc: "체계적인 훈련을 통해 기량을 갈고닦아 경기에서 실력을 겨루는 일을 해요.",
    skills: ["체력", "승부욕", "자기관리"],
    subjects: ["체육"], majors: ["체육학과", "스포츠과학과"],
    salary: "종목·실력에 따라 다름", outlook: "전망 변동",
    aiImpact: { level: "low", text: "AI가 훈련 데이터 분석을 도와줄 수 있지만, 실제 경기에서 실력을 발휘하는 건 오직 선수 자신의 몫이에요." } },
  { id: "sports-trainer", name: "스포츠 트레이너", category: "sports", icon: "💪",
    desc: "선수나 일반인의 체력과 재활을 관리해 최상의 몸 상태를 유지하도록 도와요.",
    skills: ["체육 지식", "공감 능력", "꼼꼼함"],
    subjects: ["체육", "생명과학"], majors: ["스포츠의학과", "체육학과"],
    salary: "평균 3,800만원", outlook: "전망 밝음",
    aiImpact: { level: "low", text: "AI가 신체 데이터를 분석해줄 수 있지만, 직접 몸을 살피며 케어하는 일은 사람이 해야 해요." } },
  { id: "sports-marketer", name: "스포츠 마케터", category: "sports", icon: "🏟️",
    desc: "스포츠 구단, 선수, 이벤트를 홍보하고 브랜드 가치를 높이는 마케팅을 기획해요.",
    skills: ["창의력", "소통 능력", "기획력"],
    subjects: ["사회", "정보"], majors: ["스포츠경영학과", "마케팅학과"],
    salary: "평균 4,000만원", outlook: "전망 밝음",
    aiImpact: { level: "medium", text: "AI가 데이터 분석과 콘텐츠 초안 제작을 도와주지만, 팬들과 감성적으로 소통하는 전략은 사람의 역할이에요." } },

  // 요식업·농수산
  { id: "chef", name: "셰프(조리사)", category: "culinary", icon: "🧑‍🍳",
    desc: "창의적인 메뉴를 개발하고 정성껏 요리를 만들어 사람들에게 맛있는 경험을 선사해요.",
    skills: ["창의력", "미각", "체력"],
    subjects: ["가정", "화학"], majors: ["조리학과", "외식조리학과"],
    salary: "평균 3,500만원(편차 큼)", outlook: "전망 유지",
    aiImpact: { level: "low", text: "AI가 레시피 아이디어를 제안할 수 있지만, 실제로 맛을 내고 조리하는 손끝의 감각은 사람만의 것이에요." } },
  { id: "pastry-chef", name: "파티시에", category: "culinary", icon: "🧁",
    desc: "빵과 디저트를 개발하고 만들어 달콤한 즐거움을 전하는 전문가예요.",
    skills: ["창의력", "꼼꼼함", "미적 감각"],
    subjects: ["가정", "미술"], majors: ["제과제빵학과"],
    salary: "평균 3,200만원", outlook: "전망 유지",
    aiImpact: { level: "low", text: "AI가 레시피 배합을 계산해줄 수 있지만, 정교한 손기술과 감각적인 디자인은 사람이 직접 해야 해요." } },
  { id: "smart-farm-manager", name: "스마트팜 경영자", category: "culinary", icon: "🌾",
    desc: "첨단 기술을 활용해 작물을 재배하고 농업 경영을 효율적으로 관리하는 일을 해요.",
    skills: ["문제 해결력", "기획력", "탐구심"],
    subjects: ["과학", "정보"], majors: ["농업생명과학과", "스마트팜학과"],
    salary: "평균 4,000만원(경영 규모별 상이)", outlook: "전망 밝음",
    aiImpact: { level: "medium", text: "AI가 생육 데이터를 분석해 최적의 재배 조건을 제안해주면서, 농업 경영의 효율이 크게 높아지고 있어요." } },
];

const AI_IMPACT_LABEL = { low: "AI 영향 낮음", medium: "AI 영향 보통", high: "AI 영향 높음" };

// ---------- Quiz data ----------
// 10 questions x 4 options, each of the 10 categories appears in exactly 4 questions.
const QUIZ_QUESTIONS = [
  {
    question: "여가 시간에 가장 끌리는 활동은?",
    options: [
      { text: "새로운 앱이나 게임을 직접 만들어본다", cat: "it" },
      { text: "다치거나 아픈 친구를 챙겨준다", cat: "medical" },
      { text: "친구에게 모르는 문제를 설명해준다", cat: "edu" },
      { text: "뉴스 속 사건이 공정하게 처리됐는지 따져본다", cat: "law" },
    ],
  },
  {
    question: "학교에서 가장 흥미로운 과목은?",
    options: [
      { text: "생명과학, 보건", cat: "medical" },
      { text: "미술, 음악", cat: "art" },
      { text: "경제, 사회", cat: "business" },
      { text: "체육", cat: "sports" },
    ],
  },
  {
    question: "팀 프로젝트에서 나는 주로?",
    options: [
      { text: "아이디어를 시각적으로 표현한다", cat: "art" },
      { text: "발표 자료를 만들고 팀원에게 설명한다", cat: "edu" },
      { text: "자료를 꼼꼼히 조사하고 근거를 찾는다", cat: "science" },
      { text: "다과나 먹거리를 챙기며 팀 분위기를 살린다", cat: "culinary" },
    ],
  },
  {
    question: "가장 관심이 가는 뉴스 주제는?",
    options: [
      { text: "교육 정책, 입시 소식", cat: "edu" },
      { text: "창업, 경제 트렌드 소식", cat: "business" },
      { text: "사회 문제, 복지 정책 소식", cat: "social" },
      { text: "AI, 신기술 관련 소식", cat: "it" },
    ],
  },
  {
    question: "나의 강점에 가장 가까운 것은?",
    options: [
      { text: "리더십이 있고 설득을 잘한다", cat: "business" },
      { text: "궁금한 건 끝까지 파고드는 탐구심이 있다", cat: "science" },
      { text: "원칙과 규칙을 꼼꼼하게 따지는 편이다", cat: "law" },
      { text: "공감 능력이 뛰어나다는 말을 자주 듣는다", cat: "medical" },
    ],
  },
  {
    question: "미래에 일하고 싶은 환경은?",
    options: [
      { text: "탐구하고 실험할 수 있는 연구소", cat: "science" },
      { text: "사람들을 직접 돕는 현장(기관, 거리 등)", cat: "social" },
      { text: "몸을 움직이고 경쟁하는 활동적인 현장", cat: "sports" },
      { text: "감각을 살릴 수 있는 작업실이나 스튜디오", cat: "art" },
    ],
  },
  {
    question: "존경하거나 닮고 싶은 사람의 모습은?",
    options: [
      { text: "어려운 이웃을 위해 봉사하는 사람", cat: "social" },
      { text: "억울한 사람의 편에서 옳고 그름을 가려주는 사람", cat: "law" },
      { text: "정성으로 맛있는 음식을 만들어 사람들을 행복하게 하는 사람", cat: "culinary" },
      { text: "지식을 알기 쉽게 전달해 사람들을 성장시키는 사람", cat: "edu" },
    ],
  },
  {
    question: "가장 뿌듯했던 순간은?",
    options: [
      { text: "다툼이나 갈등을 공정하게 중재했을 때", cat: "law" },
      { text: "목표한 기록이나 성과를 달성했을 때", cat: "sports" },
      { text: "만든 프로그램이나 코드가 제대로 작동했을 때", cat: "it" },
      { text: "아이디어로 사람들을 설득해 일이 성사됐을 때", cat: "business" },
    ],
  },
  {
    question: "쉬는 날 가장 하고 싶은 일은?",
    options: [
      { text: "운동을 하거나 경기를 관람한다", cat: "sports" },
      { text: "새로운 요리나 디저트를 만들어본다", cat: "culinary" },
      { text: "아프거나 힘든 사람을 챙긴다", cat: "medical" },
      { text: "다큐멘터리나 과학 실험 영상을 찾아본다", cat: "science" },
    ],
  },
  {
    question: "선호하는 문제 해결 방식은?",
    options: [
      { text: "직접 손으로 만들고 시도해보며 해결한다", cat: "culinary" },
      { text: "논리적인 순서로 차근차근 해결한다", cat: "it" },
      { text: "색다른 관점에서 창의적으로 접근한다", cat: "art" },
      { text: "관련된 사람들의 이야기를 들어보고 함께 해결한다", cat: "social" },
    ],
  },
];

// ---------- State ----------

let activeCategory = "all";
let searchTerm = "";

const quizState = {
  step: 0,
  scores: {},
};

// ---------- Explore section ----------

function renderFilterChips() {
  const container = document.getElementById("filterChips");
  const allChip = makeChip("all", "전체");
  container.appendChild(allChip);
  CATEGORIES.forEach((cat) => {
    container.appendChild(makeChip(cat.key, `${cat.icon} ${cat.name}`));
  });
}

function makeChip(key, label) {
  const btn = document.createElement("button");
  btn.className = "chip" + (key !== "all" ? ` cat-${key}` : "") + (activeCategory === key ? " active" : "");
  btn.textContent = label;
  btn.dataset.key = key;
  btn.addEventListener("click", () => {
    activeCategory = key;
    document.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    btn.classList.add("active");
    renderCareerGrid();
  });
  return btn;
}

function getCategoryInfo(key) {
  return CATEGORIES.find((c) => c.key === key);
}

function renderCareerGrid() {
  const grid = document.getElementById("careerGrid");
  const emptyState = document.getElementById("emptyState");
  grid.innerHTML = "";

  const filtered = CAREERS.filter((career) => {
    const matchesCategory = activeCategory === "all" || career.category === activeCategory;
    const matchesSearch = career.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    emptyState.hidden = false;
  } else {
    emptyState.hidden = true;
    filtered.forEach((career) => grid.appendChild(makeCareerCard(career)));
  }
}

function makeCareerCard(career) {
  const catInfo = getCategoryInfo(career.category);
  const card = document.createElement("div");
  card.className = `career-card cat-${career.category}`;
  card.innerHTML = `
    <div class="icon-badge cat-${career.category}">${career.icon}</div>
    <div class="card-tags">
      <span class="category-tag cat-${career.category}">${catInfo.name}</span>
      <span class="ai-badge ai-${career.aiImpact.level}">${AI_IMPACT_LABEL[career.aiImpact.level]}</span>
    </div>
    <h3>${career.name}</h3>
    <p class="desc">${career.desc}</p>
    <span class="more-link">자세히 보기 →</span>
  `;
  card.addEventListener("click", () => openModal(career));
  return card;
}

// ---------- Modal ----------

function openModal(career) {
  const catInfo = getCategoryInfo(career.category);
  const content = document.getElementById("modalContent");
  content.innerHTML = `
    <div class="modal-icon-badge cat-${career.category}">${career.icon}</div>
    <span class="category-tag cat-${career.category}">${catInfo.name}</span>
    <h3>${career.name}</h3>
    <p class="modal-desc">${career.desc}</p>

    <div class="modal-detail-block">
      <h4>필요 역량</h4>
      <div class="tag-list">${career.skills.map((s) => `<span>${s}</span>`).join("")}</div>
    </div>

    <div class="modal-detail-block">
      <h4>관련 교과목</h4>
      <div class="tag-list">${career.subjects.map((s) => `<span>${s}</span>`).join("")}</div>
    </div>

    <div class="modal-detail-block">
      <h4>관련 전공</h4>
      <div class="tag-list">${career.majors.map((s) => `<span>${s}</span>`).join("")}</div>
    </div>

    <div class="modal-detail-block">
      <h4>평균 연봉</h4>
      <p>${career.salary}</p>
    </div>

    <div class="modal-detail-block">
      <h4>전망</h4>
      <p>${career.outlook}</p>
    </div>

    <div class="modal-detail-block">
      <h4>AI 시대, 이렇게 변화해요</h4>
      <span class="ai-badge ai-${career.aiImpact.level}">${AI_IMPACT_LABEL[career.aiImpact.level]}</span>
      <p class="ai-impact-text">${career.aiImpact.text}</p>
    </div>
  `;
  document.getElementById("modalOverlay").hidden = false;
}

function closeModal() {
  document.getElementById("modalOverlay").hidden = true;
}

// ---------- Quiz ----------

function resetQuiz() {
  quizState.step = 0;
  quizState.scores = {};
  CATEGORIES.forEach((c) => (quizState.scores[c.key] = 0));
}

function startQuiz() {
  resetQuiz();
  document.getElementById("quizIntro").hidden = true;
  document.getElementById("quizResult").hidden = true;
  document.getElementById("quizBody").hidden = false;
  renderQuizStep();
}

function renderQuizStep() {
  const q = QUIZ_QUESTIONS[quizState.step];
  document.getElementById("quizStepLabel").textContent =
    `${quizState.step + 1} / ${QUIZ_QUESTIONS.length}`;
  document.getElementById("quizQuestion").textContent = q.question;

  const pct = (quizState.step / QUIZ_QUESTIONS.length) * 100;
  document.getElementById("progressFill").style.width = `${pct}%`;

  const optionsContainer = document.getElementById("quizOptions");
  optionsContainer.innerHTML = "";
  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.textContent = opt.text;
    btn.addEventListener("click", () => {
      quizState.scores[opt.cat] += 1;
      quizState.step += 1;
      if (quizState.step >= QUIZ_QUESTIONS.length) {
        showQuizResult();
      } else {
        renderQuizStep();
      }
    });
    optionsContainer.appendChild(btn);
  });
}

function showQuizResult() {
  document.getElementById("progressFill").style.width = "100%";
  document.getElementById("quizBody").hidden = true;
  document.getElementById("quizResult").hidden = false;

  const sortedCats = Object.entries(quizState.scores).sort((a, b) => b[1] - a[1]);
  const [topCatKey, topScore] = sortedCats[0];
  const [secondCatKey, secondScore] = sortedCats[1];
  const topCatInfo = getCategoryInfo(topCatKey);
  const secondCatInfo = getCategoryInfo(secondCatKey);

  let summaryHtml = `당신에게 가장 잘 어울리는 분야는 <strong>${topCatInfo.icon} ${topCatInfo.name}</strong> 이에요!`;
  if (secondScore > 0 && topScore - secondScore <= 1) {
    summaryHtml += `<br><strong>${secondCatInfo.icon} ${secondCatInfo.name}</strong> 분야에도 소질이 있어 보여요.`;
  }
  summaryHtml += `<br>아래에서 답변 분포와 추천 직업들을 살펴보세요.`;
  document.getElementById("resultSummary").innerHTML = summaryHtml;

  const maxScore = topScore || 1;
  const scoreBars = document.getElementById("scoreBars");
  scoreBars.innerHTML = sortedCats
    .map(([key, score]) => {
      const info = getCategoryInfo(key);
      const pct = Math.round((score / maxScore) * 100);
      return `
        <div class="score-bar-row cat-${key}">
          <span class="score-bar-label">${info.icon} ${info.name}</span>
          <div class="score-bar-track"><div class="score-bar-fill" style="width:${pct}%"></div></div>
          <span class="score-bar-value">${score}</span>
        </div>
      `;
    })
    .join("");

  const recommended = CAREERS.filter((c) => c.category === topCatKey).slice(0, 6);
  const resultContainer = document.getElementById("resultCareers");
  resultContainer.innerHTML = "";
  recommended.forEach((career) => resultContainer.appendChild(makeCareerCard(career)));
}

// ---------- Init ----------

function init() {
  renderFilterChips();
  renderCareerGrid();

  document.getElementById("searchInput").addEventListener("input", (e) => {
    searchTerm = e.target.value;
    renderCareerGrid();
  });

  document.getElementById("startQuizBtn").addEventListener("click", () => {
    document.getElementById("quiz").scrollIntoView({ behavior: "smooth" });
    startQuiz();
  });

  document.getElementById("quizIntroStartBtn").addEventListener("click", startQuiz);
  document.getElementById("retakeQuizBtn").addEventListener("click", () => {
    document.getElementById("quizResult").hidden = true;
    document.getElementById("quizIntro").hidden = false;
    document.getElementById("progressFill").style.width = "0%";
  });

  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("modalOverlay").addEventListener("click", (e) => {
    if (e.target.id === "modalOverlay") closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

init();
