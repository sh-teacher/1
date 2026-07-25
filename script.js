// ---------- Data ----------

const CATEGORIES = [
  { key: "it", name: "IT·개발", icon: "💻" },
  { key: "medical", name: "의료·보건", icon: "🩺" },
  { key: "art", name: "예술·디자인", icon: "🎨" },
  { key: "edu", name: "교육", icon: "📚" },
  { key: "business", name: "경영·비즈니스", icon: "💼" },
  { key: "science", name: "과학·연구", icon: "🔬" },
  { key: "social", name: "사회·공공서비스", icon: "🤝" },
];

const CAREERS = [
  // IT·개발
  { id: "sw-dev", name: "소프트웨어 개발자", category: "it", icon: "💻",
    desc: "웹, 앱, 프로그램 등을 설계하고 코드를 작성해 서비스를 만드는 일을 해요.",
    skills: ["논리적 사고", "문제 해결력", "협업 능력"],
    subjects: ["수학", "정보"], majors: ["컴퓨터공학과", "소프트웨어학과"],
    salary: "평균 4,500만원", outlook: "전망 매우 밝음" },
  { id: "data-analyst", name: "데이터 분석가", category: "it", icon: "📊",
    desc: "데이터를 수집하고 분석해 문제 해결과 의사 결정에 필요한 인사이트를 찾아내요.",
    skills: ["통계", "논리적 사고", "커뮤니케이션"],
    subjects: ["수학", "정보"], majors: ["통계학과", "데이터사이언스학과"],
    salary: "평균 4,800만원", outlook: "전망 매우 밝음" },
  { id: "ai-engineer", name: "인공지능(AI) 엔지니어", category: "it", icon: "🤖",
    desc: "인공지능 모델을 설계, 학습시켜 다양한 문제를 자동으로 해결하도록 만들어요.",
    skills: ["수학", "프로그래밍", "탐구심"],
    subjects: ["수학", "정보", "과학"], majors: ["인공지능학과", "컴퓨터공학과"],
    salary: "평균 5,200만원", outlook: "전망 매우 밝음" },
  { id: "game-planner", name: "게임 기획자", category: "it", icon: "🎮",
    desc: "게임의 세계관, 규칙, 콘텐츠를 기획하고 개발팀과 협업해 게임을 완성해요.",
    skills: ["창의력", "기획력", "협업 능력"],
    subjects: ["정보", "국어"], majors: ["게임학과", "콘텐츠학과"],
    salary: "평균 4,000만원", outlook: "전망 밝음" },

  // 의료·보건
  { id: "doctor", name: "의사", category: "medical", icon: "🩻",
    desc: "환자를 진찰하고 진단하여 치료 계획을 세우고 건강을 회복하도록 도와요.",
    skills: ["공감 능력", "책임감", "집중력"],
    subjects: ["생명과학", "화학"], majors: ["의예과", "의학과"],
    salary: "평균 8,000만원 이상", outlook: "전망 매우 밝음" },
  { id: "nurse", name: "간호사", category: "medical", icon: "💉",
    desc: "환자를 가까이에서 돌보고 치료 과정을 지원하며 건강 관리를 도와요.",
    skills: ["공감 능력", "꼼꼼함", "체력"],
    subjects: ["생명과학", "보건"], majors: ["간호학과"],
    salary: "평균 4,200만원", outlook: "전망 매우 밝음" },
  { id: "physical-therapist", name: "물리치료사", category: "medical", icon: "🦵",
    desc: "운동이나 재활 치료를 통해 환자의 신체 기능 회복을 돕는 전문가예요.",
    skills: ["공감 능력", "체력", "꼼꼼함"],
    subjects: ["생명과학", "체육"], majors: ["물리치료학과"],
    salary: "평균 3,600만원", outlook: "전망 밝음" },
  { id: "clinical-lab", name: "임상병리사", category: "medical", icon: "🧪",
    desc: "혈액, 조직 등을 검사해 질병 진단에 필요한 정보를 제공하는 일을 해요.",
    skills: ["꼼꼼함", "탐구심", "집중력"],
    subjects: ["화학", "생명과학"], majors: ["임상병리학과"],
    salary: "평균 3,800만원", outlook: "전망 밝음" },

  // 예술·디자인
  { id: "graphic-designer", name: "그래픽 디자이너", category: "art", icon: "🖌️",
    desc: "브랜드, 광고, 편집물 등 다양한 매체의 시각 디자인을 기획하고 제작해요.",
    skills: ["창의력", "감각", "소프트웨어 활용"],
    subjects: ["미술", "정보"], majors: ["시각디자인학과"],
    salary: "평균 3,500만원", outlook: "전망 유지" },
  { id: "webtoon-artist", name: "웹툰 작가", category: "art", icon: "✏️",
    desc: "이야기를 구상하고 그림으로 표현해 온라인 만화 콘텐츠를 연재해요.",
    skills: ["창의력", "스토리텔링", "성실함"],
    subjects: ["미술", "국어"], majors: ["웹툰학과", "만화애니메이션학과"],
    salary: "평균 3,000만원(편차 큼)", outlook: "전망 밝음" },
  { id: "video-creator", name: "영상 콘텐츠 크리에이터", category: "art", icon: "🎬",
    desc: "기획부터 촬영, 편집까지 직접 콘텐츠를 만들어 온라인에 공유해요.",
    skills: ["창의력", "기획력", "편집 기술"],
    subjects: ["정보", "미술"], majors: ["영상학과", "미디어콘텐츠학과"],
    salary: "평균 3,200만원(편차 큼)", outlook: "전망 밝음" },
  { id: "architect", name: "건축가", category: "art", icon: "🏛️",
    desc: "건물과 공간을 설계하여 안전하고 아름다운 구조물을 만들어내요.",
    skills: ["공간 감각", "창의력", "수학"],
    subjects: ["미술", "수학"], majors: ["건축학과"],
    salary: "평균 4,300만원", outlook: "전망 유지" },

  // 교육
  { id: "elementary-teacher", name: "초등학교 교사", category: "edu", icon: "🍎",
    desc: "어린이들의 전 과목 학습과 인성 발달을 지도하고 이끌어주는 일을 해요.",
    skills: ["소통 능력", "인내심", "기획력"],
    subjects: ["전 과목"], majors: ["초등교육과"],
    salary: "평균 4,000만원", outlook: "전망 유지" },
  { id: "science-teacher", name: "중등교사(과학)", category: "edu", icon: "🧫",
    desc: "청소년에게 과학 지식을 가르치고 탐구 활동을 지도하는 교육 전문가예요.",
    skills: ["전달력", "탐구심", "인내심"],
    subjects: ["과학", "국어"], majors: ["과학교육과"],
    salary: "평균 4,100만원", outlook: "전망 유지" },
  { id: "edu-content-developer", name: "교육 콘텐츠 개발자", category: "edu", icon: "📖",
    desc: "교재, 온라인 강의, 학습 프로그램 등 교육 콘텐츠를 기획하고 제작해요.",
    skills: ["기획력", "전달력", "창의력"],
    subjects: ["국어", "정보"], majors: ["교육공학과"],
    salary: "평균 3,800만원", outlook: "전망 밝음" },
  { id: "career-counselor", name: "진로상담사", category: "edu", icon: "🧭",
    desc: "학생들이 자신의 적성과 진로를 찾을 수 있도록 상담하고 안내해줘요.",
    skills: ["공감 능력", "소통 능력", "분석력"],
    subjects: ["사회", "국어"], majors: ["교육학과", "상담심리학과"],
    salary: "평균 3,600만원", outlook: "전망 밝음" },

  // 경영·비즈니스
  { id: "marketer", name: "마케팅 전문가", category: "business", icon: "📣",
    desc: "제품과 서비스를 알리기 위한 전략을 세우고 캠페인을 기획, 운영해요.",
    skills: ["창의력", "분석력", "소통 능력"],
    subjects: ["사회", "정보"], majors: ["경영학과", "마케팅학과"],
    salary: "평균 4,200만원", outlook: "전망 밝음" },
  { id: "startup-founder", name: "창업가(스타트업 CEO)", category: "business", icon: "🚀",
    desc: "새로운 아이디어로 사업을 시작하고 팀을 이끌어 성장시키는 일을 해요.",
    skills: ["리더십", "도전 정신", "문제 해결력"],
    subjects: ["사회", "정보"], majors: ["경영학과", "산업공학과"],
    salary: "수익에 따라 다름", outlook: "전망 변동" },
  { id: "accountant", name: "회계사", category: "business", icon: "🧾",
    desc: "기업의 재무 정보를 기록, 분석하고 회계 감사를 수행하는 전문가예요.",
    skills: ["꼼꼼함", "분석력", "신뢰성"],
    subjects: ["수학", "사회"], majors: ["회계학과", "경영학과"],
    salary: "평균 5,000만원", outlook: "전망 유지" },
  { id: "financial-analyst", name: "금융 애널리스트", category: "business", icon: "📈",
    desc: "시장과 기업 데이터를 분석해 투자 및 금융 전략을 제안하는 일을 해요.",
    skills: ["분석력", "수학", "판단력"],
    subjects: ["수학", "사회"], majors: ["경제학과", "금융학과"],
    salary: "평균 5,500만원", outlook: "전망 밝음" },

  // 과학·연구
  { id: "bio-researcher", name: "생명공학 연구원", category: "science", icon: "🧬",
    desc: "생명 현상을 연구하여 의약품, 식품, 환경 문제 해결에 활용해요.",
    skills: ["탐구심", "꼼꼼함", "논리적 사고"],
    subjects: ["생명과학", "화학"], majors: ["생명공학과"],
    salary: "평균 4,300만원", outlook: "전망 밝음" },
  { id: "environmental-engineer", name: "환경공학자", category: "science", icon: "🌱",
    desc: "환경 오염을 분석하고 해결책을 연구해 지속 가능한 환경을 만들어요.",
    skills: ["탐구심", "분석력", "책임감"],
    subjects: ["화학", "지구과학"], majors: ["환경공학과"],
    salary: "평균 4,000만원", outlook: "전망 밝음" },
  { id: "aerospace-researcher", name: "우주항공 연구원", category: "science", icon: "🚀",
    desc: "로켓, 위성, 항공기 등을 연구하고 개발하는 첨단 과학기술 분야예요.",
    skills: ["수학", "탐구심", "끈기"],
    subjects: ["물리학", "수학"], majors: ["항공우주공학과"],
    salary: "평균 4,600만원", outlook: "전망 밝음" },
  { id: "chemist", name: "화학 연구원", category: "science", icon: "⚗️",
    desc: "새로운 물질을 연구, 개발해 산업과 생활 전반에 활용될 기술을 만들어요.",
    skills: ["탐구심", "꼼꼼함", "논리적 사고"],
    subjects: ["화학", "수학"], majors: ["화학과"],
    salary: "평균 4,200만원", outlook: "전망 유지" },

  // 사회·공공서비스
  { id: "social-worker", name: "사회복지사", category: "social", icon: "🤲",
    desc: "어려움을 겪는 사람들을 만나 상담하고 필요한 복지 서비스를 연결해줘요.",
    skills: ["공감 능력", "소통 능력", "정의감"],
    subjects: ["사회", "도덕"], majors: ["사회복지학과"],
    salary: "평균 3,200만원", outlook: "전망 밝음" },
  { id: "police-officer", name: "경찰관", category: "social", icon: "👮",
    desc: "시민의 안전을 지키고 범죄를 예방, 수사하는 공공 안전 전문가예요.",
    skills: ["정의감", "체력", "판단력"],
    subjects: ["사회", "체육"], majors: ["경찰행정학과"],
    salary: "평균 4,500만원", outlook: "전망 유지" },
  { id: "diplomat", name: "외교관", category: "social", icon: "🌐",
    desc: "국가를 대표해 다른 나라와 소통하며 국제 문제를 조율하는 일을 해요.",
    skills: ["외국어", "협상력", "논리적 사고"],
    subjects: ["영어", "사회"], majors: ["외교학과", "정치외교학과"],
    salary: "평균 5,000만원", outlook: "전망 유지" },
  { id: "firefighter", name: "소방관", category: "social", icon: "🚒",
    desc: "화재를 진압하고 인명을 구조하며 시민의 생명과 안전을 지켜요.",
    skills: ["체력", "용기", "협업 능력"],
    subjects: ["체육", "과학"], majors: ["소방행정학과"],
    salary: "평균 4,400만원", outlook: "전망 밝음" },
];

// ---------- Quiz data ----------
// Each question has 4 options; each option carries a category key.
const QUIZ_QUESTIONS = [
  {
    question: "여가 시간에 가장 끌리는 활동은?",
    options: [
      { text: "친구에게 모르는 문제를 설명해준다", cat: "edu" },
      { text: "새로운 앱이나 게임을 직접 만들어본다", cat: "it" },
      { text: "다치거나 아픈 친구를 챙겨준다", cat: "medical" },
      { text: "그림을 그리거나 영상을 편집한다", cat: "art" },
    ],
  },
  {
    question: "학교에서 가장 흥미로운 과목은?",
    options: [
      { text: "생명과학, 보건", cat: "medical" },
      { text: "미술, 음악", cat: "art" },
      { text: "국어, 사회처럼 설명하고 발표하는 과목", cat: "edu" },
      { text: "수학, 정보", cat: "it" },
    ],
  },
  {
    question: "팀 프로젝트에서 나는 주로?",
    options: [
      { text: "일정과 역할을 계획하고 팀을 이끈다", cat: "business" },
      { text: "자료를 분석하고 논리적으로 해결책을 찾는다", cat: "it" },
      { text: "발표 자료를 만들고 팀원에게 설명한다", cat: "edu" },
      { text: "팀원들의 컨디션과 어려움을 세심하게 챙긴다", cat: "medical" },
    ],
  },
  {
    question: "가장 관심이 가는 뉴스 주제는?",
    options: [
      { text: "우주 탐사, 환경, 과학 실험 소식", cat: "science" },
      { text: "사회 문제, 복지 정책 소식", cat: "social" },
      { text: "AI, 신기술 관련 소식", cat: "it" },
      { text: "창업, 경제 트렌드 소식", cat: "business" },
    ],
  },
  {
    question: "나의 강점에 가장 가까운 것은?",
    options: [
      { text: "정의감이 강하고 다른 사람을 돕고 싶어한다", cat: "social" },
      { text: "공감 능력이 뛰어나다는 말을 자주 듣는다", cat: "medical" },
      { text: "궁금한 건 끝까지 파고드는 탐구심이 있다", cat: "science" },
      { text: "리더십이 있고 설득을 잘한다", cat: "business" },
    ],
  },
  {
    question: "미래에 일하고 싶은 환경은?",
    options: [
      { text: "사람들과 활발히 소통하는 회사나 시장", cat: "business" },
      { text: "탐구하고 실험할 수 있는 연구소", cat: "science" },
      { text: "감각을 살릴 수 있는 작업실이나 스튜디오", cat: "art" },
      { text: "사람들을 직접 돕는 현장(기관, 거리 등)", cat: "social" },
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
  btn.className = "chip" + (activeCategory === key ? " active" : "");
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
  card.className = "career-card";
  card.innerHTML = `
    <div class="icon">${career.icon}</div>
    <span class="category-tag">${catInfo.name}</span>
    <h3>${career.name}</h3>
    <p class="desc">${career.desc}</p>
    <span class="more-link">자세히 보기 →</span>
  `;
  card.addEventListener("click", () => openModal(career));
  return card;
}

function renderCareerMiniCard(career) {
  const catInfo = getCategoryInfo(career.category);
  const card = document.createElement("div");
  card.className = "career-card";
  card.innerHTML = `
    <div class="icon">${career.icon}</div>
    <span class="category-tag">${catInfo.name}</span>
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
    <div class="modal-icon">${career.icon}</div>
    <span class="category-tag">${catInfo.name}</span>
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
  const topCatKey = sortedCats[0][0];
  const topCatInfo = getCategoryInfo(topCatKey);

  document.getElementById("resultSummary").innerHTML =
    `당신에게 가장 잘 어울리는 분야는 <strong>${topCatInfo.icon} ${topCatInfo.name}</strong> 이에요!<br>아래 추천 직업들을 살펴보세요.`;

  const recommended = CAREERS.filter((c) => c.category === topCatKey).slice(0, 4);
  const resultContainer = document.getElementById("resultCareers");
  resultContainer.innerHTML = "";
  recommended.forEach((career) => resultContainer.appendChild(renderCareerMiniCard(career)));
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
