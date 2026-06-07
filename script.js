const locations = {
  plant: {
    code: "объект 04",
    title: "ЧАЭС",
    text: "Центральная точка зоны. Руины четвертого энергоблока и новый защитный конфайнмент остаются главным символом катастрофы.",
    danger: "92%",
    signal: "фон высокий",
    access: "закрыт",
    note: "Рекомендуется обходить сектор без защитного снаряжения.",
    task: "Оперативная сводка: сектор ЧАЭС под наблюдением"
  },
  pripyat: {
    code: "сектор п-01",
    title: "Припять",
    text: "Заброшенный город атомщиков: пустые проспекты, дворцы культуры, школы и колесо обозрения, которое стало знаком внезапно оборванной жизни.",
    danger: "76%",
    signal: "эхо города",
    access: "ограничен",
    note: "Внутри много закрытых дворов, стекла и провалов перекрытий.",
    task: "Оперативная сводка: Припять отмечена как тихий сектор"
  },
  forest: {
    code: "пятно р-17",
    title: "Рыжий лес",
    text: "Участок, принявший один из самых сильных радиоактивных следов после аварии. В легендах зоны это место звучит как предупреждение.",
    danger: "88%",
    signal: "почва шумит",
    access: "опасен",
    note: "Дозиметр здесь не успокаивается даже на открытой дороге.",
    task: "Оперативная сводка: Рыжий лес дает высокий фон"
  },
  cordon: {
    code: "рубеж к-12",
    title: "Кордон",
    text: "Южная граница, где начинаются нелегальные тропы, военные посты и первые разговоры о том, что внутри все иначе.",
    danger: "45%",
    signal: "слабый фон",
    access: "частичный",
    note: "Самый понятный вход в зону, но патрули ходят чаще обычного.",
    task: "Оперативная сводка: Кордон пригоден для входа"
  },
  bar: {
    code: "узел б-06",
    title: "Бар",
    text: "Относительно безопасная точка обмена новостями, припасами и слухами. Здесь усталые люди на время перестают быть мишенями.",
    danger: "39%",
    signal: "стабильно",
    access: "условный",
    note: "Лучшее место, чтобы переждать выброс и сверить слухи с картой.",
    task: "Оперативная сводка: Бар держит устойчивую связь"
  },
  swamps: {
    code: "низина б-22",
    title: "Болота",
    text: "Тяжелая, вязкая территория с плохой видимостью. Вода скрывает старые дороги, а туман делает расстояние обманчивым.",
    danger: "67%",
    signal: "помехи",
    access: "трудный",
    note: "Маршрут меняется после дождя, а вода скрывает старую технику.",
    task: "Оперативная сводка: болота дают сильные помехи"
  }
};

const records = {
  test: {
    state: "record damaged",
    title: "Испытание турбогенератора",
    text: "Ночная проверка режима выбега турбины привела к неустойчивому состоянию реактора РБМК-1000. После теплового разгона активная зона была разрушена, начался выброс радиоактивных материалов."
  },
  evacuation: {
    state: "partial transcript",
    title: "Эвакуация Припяти",
    text: "27 апреля 1986 года жителей Припяти вывезли автобусными колоннами. Людям сообщили взять документы и минимум вещей, но временная эвакуация стала началом долгого отсутствия дома."
  },
  liquidation: {
    state: "archive fragment",
    title: "Ликвидация последствий",
    text: "Пожарные, военные, инженеры, шахтеры и строители работали в условиях высокого радиационного риска. Их задача была остановить распространение загрязнения и закрыть разрушенный энергоблок."
  },
  exclusion: {
    state: "classified sector",
    title: "Зона отчуждения",
    text: "После аварии вокруг станции создали закрытую территорию. Заброшенные поселки, техника, леса и дороги стали частью большого периметра, где обычная жизнь сменилась режимом наблюдения."
  }
};

const relationColumns = [
  "Одиночки",
  "«Долг»",
  "«Свобода»",
  "«Чистое небо»",
  "Учёные",
  "Наёмники",
  "Военные",
  "Бандиты",
  "«Монолит»"
];

const relationRows = [
  { label: "Отношение", values: [1, 0, 0, 2, 3, 0, -150, -330, 0], summary: true },
  { label: "Одиночки", values: [300, 0, 0, 0, 0, -2000, -2000, -2000, -2000] },
  { label: "«Долг»", values: [0, 300, -2000, -2000, 0, -2000, 0, -2000, -2000] },
  { label: "«Свобода»", values: [0, -2000, 300, 0, 0, 0, -2000, 0, -2000] },
  { label: "«Чистое небо»", values: [0, -2000, 0, 300, 0, 0, -2000, -2000, -2000] },
  { label: "Учёные", values: [0, 0, 0, 0, 300, 0, 0, -2000, -2000] },
  { label: "Наёмники", values: [-2000, -2000, 0, 0, 0, 300, -2000, 0, -2000] },
  { label: "Военные", values: [-2000, 0, -2000, -2000, 0, -2000, 300, -2000, -2000] },
  { label: "Бандиты", values: [-2000, -2000, 0, -2000, -2000, 0, -2000, 300, -2000] },
  { label: "«Монолит»", values: [-2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000, 2000] }
];

const guideSections = {
  anomalies: {
    label: "Аномалии",
    items: [
      {
        id: "zharka",
        title: "«Жарка»",
        aliases: "термический очаг",
        type: "Термическая аномалия",
        threat: "высокая",
        paragraphs: [
          "Локальный тепловой разрыв, заметный по дрожанию воздуха, обугленной траве и резкому подъему температуры у поверхности.",
          "При контакте наносит тяжелые ожоги. В темноте иногда виден слабый оранжевый отблеск, но днем обнаруживается хуже.",
          "Перед пересечением маршрута рекомендуется проверять сектор болтами и обходить любые пятна с сухой травой или копотью."
        ]
      },
      {
        id: "electra",
        title: "«Электра»",
        aliases: "электрический разряд",
        type: "Электрическая аномалия",
        threat: "высокая",
        paragraphs: [
          "Скопление нестабильного электрического поля. Проявляется сухим треском, вспышками и помехами в наушниках.",
          "Металлические предметы рядом с очагом могут искрить. Попадание внутрь зоны поражения вызывает мощный разряд.",
          "На открытой местности заметна лучше после дождя и в сумерках. Без детектора к ней лучше не приближаться."
        ]
      },
      {
        id: "kisel",
        title: "«Кисель»",
        aliases: "студень / холодец",
        type: "Химическая аномалия",
        threat: "средняя",
        paragraphs: [
          "Ядовитое образование, похожее на светящуюся зеленую жижу. Часто встречается в низинах, подвалах и влажных помещениях.",
          "При контакте разъедает ткань, кожу и фильтры снаряжения. Вокруг очага часто ощущается кисловатый запах.",
          "Сталкеры обходят такие зоны по сухим участкам, не наступая в лужи и не касаясь подозрительной растительности."
        ]
      },
      {
        id: "gravi",
        title: "Гравиконцентрат",
        aliases: "локальное сжатие",
        type: "Гравитационная аномалия",
        threat: "критическая",
        paragraphs: [
          "Зона резкого гравитационного давления. Внешне может выглядеть почти пустой, но искажает пыль, листву и мелкий мусор.",
          "Попадание внутрь приводит к сильному сдавливанию и травмам. Иногда рядом возникают вторичные вихри меньшей силы.",
          "Безопасный проход возможен только после проверки болтами и при большом запасе дистанции."
        ]
      },
      {
        id: "springboard",
        title: "«Трамплин»",
        aliases: "ударная волна",
        type: "Гравитационная аномалия",
        threat: "средняя",
        paragraphs: [
          "Одна из самых распространенных аномалий. Срабатывает как невидимая пружина, отбрасывая тело или предмет резким импульсом.",
          "Обнаруживается по искажению воздуха, круговым пятнам на земле и реакции брошенного болта.",
          "Опасность зависит от окружения: на открытом месте можно отделаться ушибами, возле стен и арматуры часто смертельна."
        ]
      }
    ]
  },
  groups: {
    label: "Группировки",
    items: [
      {
        id: "loners",
        title: "Одиночки",
        aliases: "вольные сталкеры / нейтралы",
        type: "Свободные сталкеры",
        threat: "переменная",
        paragraphs: [
          "Сталкеры, не входящие в крупные группировки. Действуют поодиночке или малыми группами, живут хабаром, проводкой и слухами.",
          "Среди одиночек встречаются новички, опытные проводники и люди, которые просто не хотят подчиняться чужой идеологии.",
          "Чаще держат нейтралитет, но отношение зависит от района, репутации и того, кто первым достал оружие."
        ]
      },
      {
        id: "duty",
        title: "«Долг»",
        aliases: "военизированная группировка",
        type: "Организованная сила",
        threat: "высокая",
        paragraphs: [
          "Дисциплинированная группировка, считающая Зону угрозой, которую необходимо сдерживать и уничтожать.",
          "Хорошо вооружены, держат посты и стараются контролировать опасные направления. Часто конфликтуют со «Свободой».",
          "К одиночкам обычно относятся прагматично, если те не мешают операциям и не нарушают установленный порядок."
        ]
      },
      {
        id: "freedom",
        title: "«Свобода»",
        aliases: "анархисты Зоны",
        type: "Идеологическая группировка",
        threat: "средняя",
        paragraphs: [
          "Сторонники открытой Зоны. Считают, что ее нельзя закрыть военными кордонами и бюрократическими запретами.",
          "Конфликтуют с «Долгом» и армейскими подразделениями. Ценят независимость, информацию и доступ к территориям.",
          "Отношение к одиночкам чаще нейтральное, особенно если те не работают на военных."
        ]
      },
      {
        id: "clearsky",
        title: "«Чистое небо»",
        aliases: "исследователи болот",
        type: "Научно-полевая группа",
        threat: "средняя",
        paragraphs: [
          "Закрытая группа исследователей и бойцов, пытающихся понять природу Зоны и причины ее нестабильности.",
          "Предпочитают наблюдение и сбор данных, но при угрозе способны действовать жестко и организованно.",
          "Их маршруты часто проходят через труднодоступные участки, где чужаки редко задерживаются надолго."
        ]
      },
      {
        id: "scientists",
        title: "Учёные",
        aliases: "экспедиционные группы",
        type: "Исследовательский персонал",
        threat: "низкая",
        paragraphs: [
          "Специалисты, изучающие аномалии, артефакты и радиационные изменения. Обычно работают под охраной.",
          "Сами редко вступают в бой, но рядом с ними могут быть наемники, военные или охранные группы.",
          "Платят за данные, образцы и сопровождение, поэтому для сталкеров часто являются источником работы."
        ]
      },
      {
        id: "mercs",
        title: "Наёмники",
        aliases: "контрактные отряды",
        type: "Профессиональные бойцы",
        threat: "высокая",
        paragraphs: [
          "Вооруженные группы, работающие по контракту. Их заказчики и цели обычно неизвестны.",
          "Хорошо экипированы, действуют быстро и редко вступают в переговоры без выгоды.",
          "Встреча с ними вне нейтральной территории считается серьезным риском."
        ]
      },
      {
        id: "military",
        title: "Военные",
        aliases: "армейский контроль",
        type: "Государственные силы",
        threat: "высокая",
        paragraphs: [
          "Подразделения, охраняющие периметр, дороги и важные объекты. Их задача - ограничивать доступ и контролировать перемещение.",
          "Для нелегальных сталкеров чаще являются угрозой, особенно возле блокпостов и закрытых секторов.",
          "Иногда вступают во временные сделки, но доверять таким договоренностям опасно."
        ]
      },
      {
        id: "bandits",
        title: "Бандиты",
        aliases: "криминальные группы",
        type: "Враждебная группировка",
        threat: "высокая",
        paragraphs: [
          "Разрозненные криминальные отряды, живущие грабежом, контролем троп и торговлей сомнительным хабаром.",
          "Слабых сталкеров стараются запугать или обобрать. Между собой часто конфликтуют за склады и маршруты.",
          "Переговоры возможны, но почти всегда проходят с оружием наготове."
        ]
      },
      {
        id: "monolith",
        title: "«Монолит»",
        aliases: "центр Зоны",
        type: "Фанатичная группировка",
        threat: "критическая",
        paragraphs: [
          "Замкнутая и крайне опасная группировка, связанная с центром Зоны. Их мотивы непонятны, а переговоры почти невозможны.",
          "Бойцы «Монолита» действуют фанатично, хорошо знают свои позиции и редко отступают.",
          "Контакт с ними считается одним из самых опасных сценариев для любой группы сталкеров."
        ]
      }
    ]
  }
};

const tabTasks = {
  map: "Оперативная сводка: сектор ЧАЭС под наблюдением",
  archive: "Архивный статус: часть записей повреждена",
  relations: "Разведсводка: фракционные данные обновлены",
  anomalies: "Справочник: запись открыта в полевом архиве",
  gear: "Инвентарный статус: часть изображений утрачена",
  radio: "Радиоканал: частота 104.7 принимает обрывки связи"
};

const radioMessages = [
  "...сектор Р-17 закрыт, фон растет...",
  "...группа не вышла на связь после перехода через лес...",
  "...передайте бару: маршрут через болота нестабилен...",
  "...на частоте слышны посторонние сигналы...",
  "...у северного периметра замечено движение...",
  "...архивный файл поврежден, повторите запрос..."
];

const radiationLayer = document.querySelector("#radiationLayer");
const pdaScreen = document.querySelector(".pda-screen");
const powerButton = document.querySelector("#powerButton");
const screenOff = document.querySelector("#screenOff");
const screenBoot = document.querySelector("#screenBoot");
const screenRadiation = document.querySelector("#screenRadiation");
const screenCorruption = document.querySelector("#screenCorruption");
const soundToggle = document.querySelector("#soundToggle");
const soundText = soundToggle.querySelector(".sound-text");
const pdaTime = document.querySelector("#pdaTime");
const radiationPill = document.querySelector("#radiationPill");
const statusRadiation = document.querySelector("#statusRadiation");
const signalPill = document.querySelector("#signalPill");
const statusSignal = document.querySelector("#statusSignal");
const activeTask = document.querySelector("#activeTask");
const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");
const shortcutButtons = document.querySelectorAll("[data-tab-shortcut]");
const mapPoints = document.querySelectorAll(".map-point");
const locationCode = document.querySelector("#locationCode");
const locationSignal = document.querySelector("#locationSignal");
const locationTitle = document.querySelector("#locationTitle");
const locationText = document.querySelector("#locationText");
const locationDanger = document.querySelector("#locationDanger");
const locationAccess = document.querySelector("#locationAccess");
const locationNote = document.querySelector("#locationNote");
const meter = document.querySelector(".meter span");
const fileButtons = document.querySelectorAll(".file-button");
const recordState = document.querySelector("#recordState");
const recordTitle = document.querySelector("#recordTitle");
const recordText = document.querySelector("#recordText");
const relationMatrix = document.querySelector("#relationMatrix");
const relationModeToggle = document.querySelector("#relationModeToggle");
const relationModeText = document.querySelector("#relationModeText");
const guideCategoryButtons = document.querySelectorAll(".guide-category-button");
const guideItemList = document.querySelector("#guideItemList");
const guideImage = document.querySelector("#guideImage");
const guideTitle = document.querySelector("#guideTitle");
const guideAlias = document.querySelector("#guideAlias");
const guideType = document.querySelector("#guideType");
const guideThreat = document.querySelector("#guideThreat");
const guideBody = document.querySelector("#guideBody");
const radioLog = document.querySelector("#radioLog");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasGsap = typeof window.gsap !== "undefined";
const hasHowler = typeof window.Howler !== "undefined" && typeof window.Howl !== "undefined";
const motion = hasGsap && !prefersReducedMotion ? window.gsap : null;
const bootLineItems = screenBoot.querySelectorAll(".boot-lines span");

let audioContext;
let audioMaster;
let ambientBus;
let soundEnabled = false;
let radioIndex = 3;
let isPoweredOn = false;
let isBooting = false;
let radiationStarted = false;
let radiationLevel = 0.42;
let signalLevel = 31;
let bootTimeline;
let audioUnlockSound;
let relationMode = "text";
let activeGuideSection = "anomalies";
let activeGuideItem = "zharka";

window.addEventListener("load", () => {
  updateClock();
  initializeMotionState();
  document.body.classList.add("pda-is-off");
});

window.setInterval(updateClock, 1000);
window.setInterval(updateTelemetry, 1800);
window.setInterval(addRadioMessage, 24000);

tabButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveTab(button.dataset.tab));
});

shortcutButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveTab(button.dataset.tabShortcut));
});

powerButton.addEventListener("click", () => {
  if (isBooting) {
    return;
  }

  if (isPoweredOn) {
    powerOffPda();
    return;
  }

  startBootSequence();
});

mapPoints.forEach((point) => {
  point.addEventListener("click", () => {
    if (!isPoweredOn) {
      return;
    }

    const nextLocation = locations[point.dataset.location];

    mapPoints.forEach((item) => item.classList.remove("active"));
    point.classList.add("active");

    locationCode.textContent = nextLocation.code;
    locationSignal.textContent = nextLocation.signal;
    locationTitle.textContent = nextLocation.title;
    locationText.textContent = nextLocation.text;
    locationDanger.textContent = nextLocation.danger;
    locationAccess.textContent = nextLocation.access;
    locationNote.textContent = nextLocation.note;
    activeTask.textContent = nextLocation.task;
    meter.style.setProperty("--value", nextLocation.danger);
    playMapTick();
  });
});

fileButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!isPoweredOn) {
      return;
    }

    const record = records[button.dataset.record];

    fileButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    recordState.textContent = record.state;
    recordTitle.textContent = record.title;
    recordText.textContent = record.text;
    triggerDataCorruption();
    playMapTick();
  });
});

renderRelationMatrix();
renderGuide();

relationModeToggle.addEventListener("click", () => {
  if (!isPoweredOn) {
    return;
  }

  relationMode = relationMode === "text" ? "values" : "text";
  renderRelationMatrix();
  triggerDataCorruption();
  playMapTick();
});

guideCategoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!isPoweredOn) {
      return;
    }

    activeGuideSection = button.dataset.guideSection;
    activeGuideItem = guideSections[activeGuideSection].items[0].id;
    renderGuide();
    triggerDataCorruption();
    playMapTick();
  });
});

guideItemList.addEventListener("click", (event) => {
  const button = event.target.closest(".guide-entry-button");

  if (!button || !isPoweredOn) {
    return;
  }

  activeGuideItem = button.dataset.guideItem;
  renderGuide();
  triggerDataCorruption();
  playMapTick();
});

soundToggle.addEventListener("click", async () => {
  if (!isPoweredOn) {
    return;
  }

  if (!hasHowler) {
    soundText.textContent = "Нет";
    soundToggle.setAttribute("aria-label", "Звук не поддерживается");
    return;
  }

  if (!audioContext && !createAudioGraph()) {
    soundText.textContent = "Нет";
    soundToggle.setAttribute("aria-label", "Звук не поддерживается");
    return;
  }

  if (audioContext.state === "suspended") {
    await audioContext.resume();
  }

  soundEnabled = !soundEnabled;
  setSoundEnabled(soundEnabled);
});

function initializeMotionState() {
  document.documentElement.classList.toggle("has-gsap", Boolean(motion));

  if (!motion) {
    return;
  }

  motion.set(screenBoot, { autoAlpha: 0 });
  motion.set(bootLineItems, { opacity: 0, y: 5, animation: "none" });
  motion.set(screenRadiation, { autoAlpha: 0 });
  motion.set(screenCorruption, { autoAlpha: 0, x: 0 });
}

function prepareStartupAudio() {
  if (!hasHowler) {
    return;
  }

  if (!audioContext && !createAudioGraph()) {
    return;
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  if (!soundEnabled) {
    soundEnabled = true;
    setSoundEnabled(true, { tick: false });
  }
}

function startBootSequence() {
  isBooting = true;
  prepareStartupAudio();
  document.body.classList.remove("pda-is-off");
  document.body.classList.add("pda-is-booting");
  screenBoot.classList.add("active");
  playStartupSound();
  playBootSequenceSound();

  if (motion) {
    runBootTimeline();
    return;
  }

  screenOff.classList.remove("active");
  window.setTimeout(finishBootSequence, 2800);
}

function runBootTimeline() {
  if (bootTimeline) {
    bootTimeline.kill();
  }

  motion.killTweensOf([screenOff, screenBoot, pdaScreen, bootLineItems]);
  motion.set(screenBoot, { autoAlpha: 0 });
  motion.set(bootLineItems, { opacity: 0, y: 5, animation: "none" });

  bootTimeline = motion.timeline({ onComplete: finishBootSequence });
  bootTimeline
    .to(screenOff, {
      autoAlpha: 0,
      duration: 0.18,
      ease: "power1.out",
      onComplete: () => screenOff.classList.remove("active")
    })
    .to(screenBoot, { autoAlpha: 1, duration: 0.12, ease: "none" }, 0.08)
    .to(bootLineItems, {
      opacity: 1,
      y: 0,
      duration: 0.12,
      stagger: 0.38,
      ease: "none"
    }, 0.18)
    .to(pdaScreen, {
      filter: "brightness(1.22)",
      duration: 0.08,
      repeat: 5,
      yoyo: true,
      ease: "none"
    }, 0.18)
    .to(screenBoot, { autoAlpha: 0, duration: 0.28, ease: "power1.in" }, 2.52);
}

function finishBootSequence() {
  isBooting = false;
  isPoweredOn = true;
  bootTimeline = null;
  document.body.classList.remove("pda-is-booting");
  document.body.classList.add("pda-is-on");
  screenBoot.classList.remove("active");

  if (motion) {
    motion.set(screenBoot, { autoAlpha: 0 });
    motion.set(pdaScreen, { clearProps: "filter" });
  }

  triggerDataCorruption();
  updateTelemetry(true);

  if (!prefersReducedMotion && !radiationStarted) {
    radiationStarted = true;
    window.setTimeout(scheduleRadiationEvent, 2600);
  }
}

function powerOffPda() {
  isPoweredOn = false;
  isBooting = false;
  if (bootTimeline) {
    bootTimeline.kill();
    bootTimeline = null;
  }
  document.body.classList.remove("pda-is-on", "pda-is-booting");
  document.body.classList.add("pda-is-off");
  screenBoot.classList.remove("active");
  screenOff.classList.add("active");
  screenRadiation.classList.remove("is-active");
  screenCorruption.classList.remove("is-active");

  if (motion) {
    motion.killTweensOf([screenOff, screenBoot, screenRadiation, screenCorruption, pdaScreen]);
    motion.set(screenBoot, { autoAlpha: 0 });
    motion.set(screenRadiation, { autoAlpha: 0 });
    motion.set(screenCorruption, { autoAlpha: 0, x: 0 });
    motion.fromTo(screenOff, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2, ease: "power1.out" });
  }

  if (soundEnabled && audioContext) {
    soundEnabled = false;
    setSoundEnabled(false);
  }
}

function setActiveTab(tabName) {
  if (!isPoweredOn) {
    return;
  }

  const currentPanel = document.querySelector(".tab-panel.active");
  const nextPanel = document.querySelector(`#tab-${tabName}`);

  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabName);
  });

  if (motion && nextPanel && currentPanel !== nextPanel) {
    if (currentPanel) {
      currentPanel.classList.remove("active");
    }

    nextPanel.classList.add("active");
    motion.killTweensOf(nextPanel);
    motion.fromTo(
      nextPanel,
      { autoAlpha: 0, y: 8, filter: "brightness(1.65)" },
      { autoAlpha: 1, y: 0, filter: "brightness(1)", duration: 0.32, ease: "power2.out", clearProps: "filter" }
    );
  } else {
    tabPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.id === `tab-${tabName}`);
    });
  }

  activeTask.textContent = tabTasks[tabName] || tabTasks.map;
  triggerDataCorruption();
  playMapTick();

  if (tabName === "radio") {
    addRadioMessage();
  }
}

function renderRelationMatrix() {
  relationMatrix.replaceChildren();
  relationModeText.textContent = relationMode === "text" ? "Показ значений" : "Показ текста";
  relationModeToggle.setAttribute("aria-pressed", String(relationMode === "values"));

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const emptyHeader = document.createElement("th");

  emptyHeader.scope = "col";
  emptyHeader.textContent = "";
  headerRow.append(emptyHeader);

  relationColumns.forEach((column) => {
    const th = document.createElement("th");
    th.scope = "col";
    th.textContent = column;
    headerRow.append(th);
  });

  thead.append(headerRow);
  relationMatrix.append(thead);

  const tbody = document.createElement("tbody");

  relationRows.forEach((row) => {
    const tr = document.createElement("tr");
    const rowHeader = document.createElement("th");

    rowHeader.scope = "row";
    rowHeader.textContent = row.label;
    tr.append(rowHeader);

    row.values.forEach((value) => {
      const td = document.createElement("td");
      const state = getRelationState(value, row.summary);

      td.dataset.state = state;
      td.textContent = relationMode === "values" ? String(value) : getRelationLabel(value, row.summary);
      tr.append(td);
    });

    tbody.append(tr);
  });

  relationMatrix.append(tbody);

  if (motion) {
    motion.fromTo(
      relationMatrix.querySelectorAll("td"),
      { autoAlpha: 0, y: 3 },
      { autoAlpha: 1, y: 0, duration: 0.18, stagger: 0.006, ease: "power1.out" }
    );
  }
}

function getRelationState(value, isSummary) {
  if (value >= 1800) {
    return "friend";
  }

  if (value >= 900) {
    return "good";
  }

  if (value < 0 || (isSummary && value === 0)) {
    return "enemy";
  }

  return "neutral";
}

function getRelationLabel(value, isSummary) {
  if (value >= 1800) {
    return "друг";
  }

  if (value >= 1400) {
    return "Хорош.";
  }

  if (value >= 900) {
    return "Норм.";
  }

  if (value > 0) {
    return isSummary ? "Обычн." : "нейтрал";
  }

  if (value < 0 || isSummary) {
    return isSummary ? "Миним." : "враг";
  }

  return "нейтрал";
}

function renderGuide() {
  const section = guideSections[activeGuideSection] || guideSections.anomalies;
  const selectedItem = section.items.find((item) => item.id === activeGuideItem) || section.items[0];

  activeGuideItem = selectedItem.id;
  guideCategoryButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.guideSection === activeGuideSection);
  });

  guideItemList.replaceChildren();

  section.items.forEach((item) => {
    const button = document.createElement("button");

    button.className = "guide-entry-button";
    button.classList.toggle("active", item.id === activeGuideItem);
    button.type = "button";
    button.dataset.guideItem = item.id;
    button.textContent = item.title;
    guideItemList.append(button);
  });

  guideImage.src = "assets/nodata.png";
  guideImage.alt = `NO DATA / ${selectedItem.title}`;
  guideTitle.textContent = selectedItem.title;
  guideAlias.textContent = selectedItem.aliases;
  guideType.textContent = selectedItem.type;
  guideThreat.textContent = selectedItem.threat;
  guideBody.replaceChildren();

  selectedItem.paragraphs.forEach((paragraph, index) => {
    if (index === 0) {
      const heading = document.createElement("h2");
      heading.textContent = "Информация";
      guideBody.append(heading);
    }

    const p = document.createElement("p");
    p.textContent = paragraph;
    guideBody.append(p);
  });

  if (motion) {
    motion.fromTo(
      [guideImage, guideTitle, guideBody],
      { autoAlpha: 0, y: 6 },
      { autoAlpha: 1, y: 0, duration: 0.22, stagger: 0.035, ease: "power1.out" }
    );
  }
}

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  pdaTime.textContent = `${hours}:${minutes}`;
}

function updateTelemetry(force = false) {
  if (!isPoweredOn && !force) {
    return;
  }

  radiationLevel = clamp(radiationLevel + randomBetween(-0.045, 0.065), 0.26, 1.08);
  signalLevel = clamp(signalLevel + randomBetween(-3.8, 3.2), 18, 48);

  if (Math.random() > 0.88) {
    radiationLevel = clamp(radiationLevel + randomBetween(0.08, 0.16), 0.26, 1.18);
    signalLevel = clamp(signalLevel - randomBetween(2.5, 7.5), 12, 48);
  }

  if (Math.random() > 0.94) {
    signalLevel = clamp(signalLevel + randomBetween(4, 9), 12, 53);
  }

  statusRadiation.textContent = radiationLevel.toFixed(2);
  statusSignal.textContent = `${Math.round(signalLevel)}%`;
  setPillState(radiationPill, radiationLevel >= 0.92 ? "danger" : radiationLevel >= 0.72 ? "warning" : "normal");
  setPillState(signalPill, signalLevel <= 22 ? "danger" : signalLevel <= 30 ? "warning" : "normal");
}

function addRadioMessage() {
  if (!isPoweredOn) {
    return;
  }

  const time = pdaTime.textContent;
  const line = document.createElement("p");
  const marker = document.createElement("span");

  marker.textContent = time;
  line.append(marker, ` ${radioMessages[radioIndex % radioMessages.length]}`);
  radioLog.prepend(line);
  radioIndex += 1;

  while (radioLog.children.length > 8) {
    radioLog.lastElementChild.remove();
  }

  if (soundEnabled) {
    playRadioBlip();
  }
}

function scheduleRadiationEvent() {
  const delay = randomBetween(7000, 18000);

  window.setTimeout(() => {
    triggerRadiationEvent();
    scheduleRadiationEvent();
  }, delay);
}

function triggerRadiationEvent() {
  if (!isPoweredOn) {
    return;
  }

  const pulseX = `${randomBetween(18, 82)}%`;
  const pulseY = `${randomBetween(14, 86)}%`;
  const scanY = `${randomBetween(18, 82)}%`;
  const speckCount = Math.round(randomBetween(3, 8));

  radiationLayer.style.setProperty("--pulse-x", pulseX);
  radiationLayer.style.setProperty("--pulse-y", pulseY);
  radiationLayer.style.setProperty("--scan-y", scanY);
  radiationLayer.classList.remove("is-pulsing", "is-sweeping");
  void radiationLayer.offsetWidth;
  radiationLayer.classList.add("is-pulsing");
  animateGlobalRadiation();
  triggerScreenRadiation();
  playRadiationSound();

  if (Math.random() > 0.42) {
    radiationLayer.classList.add("is-sweeping");
  }

  for (let index = 0; index < speckCount; index += 1) {
    window.setTimeout(createRadiationSpeck, randomBetween(0, 480));
  }

  window.setTimeout(() => {
    radiationLayer.classList.remove("is-pulsing", "is-sweeping");
  }, 1250);
}

function animateGlobalRadiation() {
  if (!motion) {
    return;
  }

  motion.killTweensOf(radiationLayer);
  motion.fromTo(
    radiationLayer,
    { filter: "brightness(1) saturate(1)" },
    {
      filter: "brightness(1.32) saturate(1.35)",
      duration: 0.18,
      repeat: 1,
      yoyo: true,
      ease: "none",
      clearProps: "filter"
    }
  );
}

function triggerScreenRadiation() {
  if (prefersReducedMotion) {
    return;
  }

  if (motion) {
    screenRadiation.classList.remove("is-active");
    void screenRadiation.offsetWidth;
    screenRadiation.classList.add("is-active");
    motion.killTweensOf(screenRadiation);
    motion.fromTo(
      screenRadiation,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 0.14,
        repeat: 1,
        repeatDelay: 0.54,
        yoyo: true,
        ease: "power2.out",
        onComplete: () => {
          screenRadiation.classList.remove("is-active");
          motion.set(screenRadiation, { autoAlpha: 0 });
        }
      }
    );
    return;
  }

  screenRadiation.classList.remove("is-active");
  void screenRadiation.offsetWidth;
  screenRadiation.classList.add("is-active");

  window.setTimeout(() => {
    screenRadiation.classList.remove("is-active");
  }, 950);
}

function triggerDataCorruption() {
  if (!isPoweredOn || prefersReducedMotion) {
    return;
  }

  if (motion) {
    screenCorruption.classList.add("is-active");
    motion.killTweensOf(screenCorruption);
    motion.timeline({
      onComplete: () => {
        screenCorruption.classList.remove("is-active");
        motion.set(screenCorruption, { autoAlpha: 0, x: 0 });
      }
    })
      .set(screenCorruption, { autoAlpha: 1, x: 0 })
      .to(screenCorruption, { x: -7, duration: 0.08, ease: "none" })
      .to(screenCorruption, { x: 5, duration: 0.08, ease: "none" })
      .to(screenCorruption, { x: -2, duration: 0.12, ease: "none" })
      .to(screenCorruption, { autoAlpha: 0, x: 0, duration: 0.18, ease: "power1.out" });
    return;
  }

  screenCorruption.classList.remove("is-active");
  void screenCorruption.offsetWidth;
  screenCorruption.classList.add("is-active");

  window.setTimeout(() => {
    screenCorruption.classList.remove("is-active");
  }, 620);
}

function createRadiationSpeck() {
  const speck = document.createElement("span");

  speck.className = "rad-speck";
  speck.style.setProperty("--x", `${randomBetween(4, 96)}%`);
  speck.style.setProperty("--y", `${randomBetween(6, 94)}%`);
  speck.style.setProperty("--size", `${randomBetween(2, 6)}px`);
  speck.style.setProperty("--life", `${randomBetween(620, 1350)}ms`);
  speck.style.setProperty("--drift-x", `${randomBetween(-24, 24)}px`);
  speck.style.setProperty("--drift-y", `${randomBetween(-18, 18)}px`);

  radiationLayer.append(speck);

  if (motion) {
    const life = Number.parseFloat(speck.style.getPropertyValue("--life")) / 1000;
    const driftX = Number.parseFloat(speck.style.getPropertyValue("--drift-x"));
    const driftY = Number.parseFloat(speck.style.getPropertyValue("--drift-y"));

    motion.timeline({ onComplete: () => speck.remove() })
      .set(speck, { xPercent: -50, yPercent: -50, scale: 0.35, autoAlpha: 0 })
      .to(speck, { autoAlpha: 1, duration: life * 0.16, ease: "power1.out" }, 0)
      .to(speck, { x: driftX, y: driftY, scale: 1, duration: life, ease: "power2.out" }, 0)
      .to(speck, { autoAlpha: 0, duration: life * 0.34, ease: "power1.in" }, life * 0.66);
    return;
  }

  speck.addEventListener("animationend", () => speck.remove(), { once: true });
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function setPillState(element, state) {
  element.classList.toggle("is-warning", state === "warning");
  element.classList.toggle("is-danger", state === "danger");
}

function createAudioGraph() {
  if (!hasHowler || !window.Howler.usingWebAudio) {
    return false;
  }

  window.Howler.autoSuspend = false;
  window.Howler.volume(1);

  if (!audioUnlockSound) {
    audioUnlockSound = new window.Howl({
      src: ["data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"],
      volume: 0,
      preload: true
    });
  }

  const unlockId = audioUnlockSound.play();
  audioUnlockSound.stop(unlockId);

  audioContext = window.Howler.ctx;

  if (!audioContext) {
    return false;
  }

  audioMaster = audioContext.createGain();
  ambientBus = audioContext.createGain();

  audioMaster.gain.value = 0.0001;
  ambientBus.gain.value = 0.32;
  ambientBus.connect(audioMaster);
  audioMaster.connect(window.Howler.masterGain || audioContext.destination);

  createDrone(38, "sine", 0.13, -8);
  createDrone(56, "triangle", 0.055, 5);
  createDrone(91, "sine", 0.035, -14);
  createAmbientNoise();

  const lfo = audioContext.createOscillator();
  const lfoGain = audioContext.createGain();
  lfo.type = "sine";
  lfo.frequency.value = 0.035;
  lfoGain.gain.value = 0.08;
  lfo.connect(lfoGain);
  lfoGain.connect(ambientBus.gain);
  lfo.start();

  return true;
}

function createDrone(frequency, type, gainValue, detune) {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = type;
  oscillator.frequency.value = frequency;
  oscillator.detune.value = detune;
  gain.gain.value = gainValue;

  oscillator.connect(gain);
  gain.connect(ambientBus);
  oscillator.start();
}

function createAmbientNoise() {
  const source = audioContext.createBufferSource();
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();

  source.buffer = createNoiseBuffer(3);
  source.loop = true;
  filter.type = "lowpass";
  filter.frequency.value = 520;
  filter.Q.value = 0.7;
  gain.gain.value = 0.045;

  source.connect(filter);
  filter.connect(gain);
  gain.connect(ambientBus);
  source.start();
}

function setSoundEnabled(enabled, options = {}) {
  const now = audioContext.currentTime;
  const targetVolume = enabled ? 0.58 : 0.0001;

  audioMaster.gain.cancelScheduledValues(now);

  if (motion) {
    motion.killTweensOf(audioMaster.gain);
    motion.to(audioMaster.gain, { value: targetVolume, duration: 0.42, ease: "power2.out" });
  } else {
    audioMaster.gain.setTargetAtTime(targetVolume, now, 0.42);
  }

  soundToggle.classList.toggle("is-on", enabled);
  soundToggle.setAttribute("aria-pressed", String(enabled));
  soundToggle.setAttribute("aria-label", enabled ? "Выключить звук" : "Включить звук");
  soundText.textContent = enabled ? "Вкл" : "Выкл";

  if (enabled && options.tick !== false) {
    playMapTick();
  }
}

function playStartupSound() {
  if (!soundEnabled || !audioContext) {
    return;
  }

  const now = audioContext.currentTime;

  createBootNoiseBurst(now + 0.01, 0.18, 520, 0.07);
  createBootTone(now + 0.02, 96, 0.26, 0.16, "sawtooth", -9);
  createBootTone(now + 0.14, 620, 0.08, 0.045, "square", 4);
  createBootTone(now + 0.25, 880, 0.07, 0.04, "square", -6);
}

function playBootSequenceSound() {
  if (!soundEnabled || !audioContext) {
    return;
  }

  const now = audioContext.currentTime;
  const steps = [
    [0.36, 410, 0.08],
    [0.76, 520, 0.07],
    [1.18, 690, 0.08],
    [1.66, 350, 0.11],
    [2.18, 920, 0.1]
  ];

  createBootNoiseBurst(now + 0.48, 0.32, 1400, 0.028);
  createBootNoiseBurst(now + 1.38, 0.26, 2400, 0.024);

  steps.forEach(([offset, frequency, duration], index) => {
    createBootTone(now + offset, frequency, duration, index === steps.length - 1 ? 0.058 : 0.044, "square", index * 3);
  });
}

function createBootTone(at, frequency, duration, gainValue, type, detune = 0) {
  const oscillator = audioContext.createOscillator();
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();
  const targetFrequency = frequency < 140 ? frequency * 0.64 : frequency * 0.82;

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, at);
  oscillator.frequency.exponentialRampToValueAtTime(targetFrequency, at + duration * 0.9);
  oscillator.detune.value = detune;
  filter.type = frequency < 140 ? "lowpass" : "bandpass";
  filter.frequency.value = frequency < 140 ? 420 : frequency * 1.8;
  filter.Q.value = frequency < 140 ? 0.8 : 7;
  gain.gain.setValueAtTime(0.0001, at);
  gain.gain.exponentialRampToValueAtTime(gainValue, at + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, at + duration);

  oscillator.connect(filter);
  filter.connect(gain);
  gain.connect(audioMaster);
  oscillator.start(at);
  oscillator.stop(at + duration + 0.03);
}

function createBootNoiseBurst(at, duration, frequency, gainValue) {
  const source = audioContext.createBufferSource();
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();

  source.buffer = createNoiseBuffer(duration);
  filter.type = "bandpass";
  filter.frequency.value = frequency;
  filter.Q.value = 1.6;
  gain.gain.setValueAtTime(0.0001, at);
  gain.gain.exponentialRampToValueAtTime(gainValue, at + 0.018);
  gain.gain.exponentialRampToValueAtTime(0.0001, at + duration);

  source.connect(filter);
  filter.connect(gain);
  gain.connect(audioMaster);
  source.start(at);
  source.stop(at + duration + 0.02);
}

function playRadiationSound() {
  if (!soundEnabled || !audioContext) {
    return;
  }

  const now = audioContext.currentTime;
  const hiss = audioContext.createBufferSource();
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();
  const clickCount = Math.round(randomBetween(4, 9));

  hiss.buffer = createNoiseBuffer(0.32);
  filter.type = "bandpass";
  filter.frequency.value = 2600;
  filter.Q.value = 3.2;
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.1, now + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);

  hiss.connect(filter);
  filter.connect(gain);
  gain.connect(audioMaster);
  hiss.start(now);
  hiss.stop(now + 0.34);

  for (let index = 0; index < clickCount; index += 1) {
    createGeigerClick(now + randomBetween(0.01, 0.72));
  }
}

function createGeigerClick(at) {
  const oscillator = audioContext.createOscillator();
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();

  oscillator.type = "square";
  oscillator.frequency.value = randomBetween(1100, 3600);
  filter.type = "bandpass";
  filter.frequency.value = oscillator.frequency.value;
  filter.Q.value = 6;
  gain.gain.setValueAtTime(0.0001, at);
  gain.gain.exponentialRampToValueAtTime(randomBetween(0.06, 0.14), at + 0.004);
  gain.gain.exponentialRampToValueAtTime(0.0001, at + randomBetween(0.025, 0.055));

  oscillator.connect(filter);
  filter.connect(gain);
  gain.connect(audioMaster);
  oscillator.start(at);
  oscillator.stop(at + 0.07);
}

function playMapTick() {
  if (!soundEnabled || !audioContext) {
    return;
  }

  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(420, now);
  oscillator.frequency.exponentialRampToValueAtTime(180, now + 0.08);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.045, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.11);

  oscillator.connect(gain);
  gain.connect(audioMaster);
  oscillator.start(now);
  oscillator.stop(now + 0.13);
}

function playRadioBlip() {
  if (!soundEnabled || !audioContext) {
    return;
  }

  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(760, now);
  oscillator.frequency.exponentialRampToValueAtTime(260, now + 0.18);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.055, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

  oscillator.connect(gain);
  gain.connect(audioMaster);
  oscillator.start(now);
  oscillator.stop(now + 0.25);
}

function createNoiseBuffer(duration) {
  const sampleRate = audioContext.sampleRate;
  const buffer = audioContext.createBuffer(1, Math.ceil(sampleRate * duration), sampleRate);
  const data = buffer.getChannelData(0);

  for (let index = 0; index < data.length; index += 1) {
    data[index] = Math.random() * 2 - 1;
  }

  return buffer;
}
