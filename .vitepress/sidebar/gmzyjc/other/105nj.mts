const path = {
  main: '/gmzyjc/ok/nj/',
};

const sidebar = [
  { text: '《难经》' },
  { text: '《难经》简介', link: `${path.main}nj00` },
  { text: '《难经》', link: `${path.main}nj01` },
  {
    text: '论脉',
    link: `${path.main}nj02`,
    collapsed: true,
    items: [
      { text: '一难', link: `${path.main}nj03` },
      { text: '二难', link: `${path.main}nj04` },
      { text: '三难', link: `${path.main}nj05` },
      { text: '四难', link: `${path.main}nj06` },
      { text: '五难', link: `${path.main}nj07` },
      { text: '六难', link: `${path.main}nj08` },
      { text: '七难', link: `${path.main}nj09` },
      { text: '八难', link: `${path.main}nj10` },
      { text: '九难', link: `${path.main}nj11` },
      { text: '十难', link: `${path.main}nj12` },
      { text: '十一难', link: `${path.main}nj13` },
      { text: '十二难', link: `${path.main}nj14` },
      { text: '十三难', link: `${path.main}nj15` },
      { text: '十四难', link: `${path.main}nj16` },
      { text: '十五难', link: `${path.main}nj17` },
      { text: '十六难', link: `${path.main}nj18` },
      { text: '十七难', link: `${path.main}nj19` },
      { text: '十八难', link: `${path.main}nj20` },
      { text: '十九难', link: `${path.main}nj21` },
      { text: '二十难', link: `${path.main}nj22` },
      { text: '二十一难', link: `${path.main}nj23` },
      { text: '二十二难', link: `${path.main}nj24` },
    ],
  },

  {
    text: '论经络',
    link: `${path.main}nj25`,
    collapsed: true,
    items: [
      { text: '二十三难', link: `${path.main}nj26` },
      { text: '二十四难', link: `${path.main}nj27` },
      { text: '二十五难', link: `${path.main}nj28` },
      { text: '二十六难', link: `${path.main}nj29` },
      { text: '二十七难', link: `${path.main}nj30` },
      { text: '二十八难', link: `${path.main}nj31` },
      { text: '二十九难', link: `${path.main}nj32` },
    ],
  },
  {
    text: '论脏腑',
    link: `${path.main}nj33`,
    collapsed: true,
    items: [
      { text: '三十难', link: `${path.main}nj34` },
      { text: '三十一难', link: `${path.main}nj35` },
      { text: '三十二难', link: `${path.main}nj36` },
      { text: '三十三难', link: `${path.main}nj37` },
      { text: '三十四难', link: `${path.main}nj38` },
      { text: '三十五难', link: `${path.main}nj39` },
      { text: '三十六难', link: `${path.main}nj40` },
      { text: '三十七难', link: `${path.main}nj41` },
      { text: '三十八难', link: `${path.main}nj42` },
      { text: '三十九难', link: `${path.main}nj43` },
      { text: '四十难', link: `${path.main}nj44` },
      { text: '四十一难', link: `${path.main}nj45` },
      { text: '四十二难', link: `${path.main}nj46` },
      { text: '四十三难', link: `${path.main}nj47` },
      { text: '四十四难', link: `${path.main}nj48` },
      { text: '四十五难', link: `${path.main}nj49` },
      { text: '四十六难', link: `${path.main}nj50` },
      { text: '四十七难', link: `${path.main}nj51` },
    ],
  },
  {
    text: '论病',
    link: `${path.main}nj52`,
    collapsed: true,
    items: [
      { text: '四十八难', link: `${path.main}nj53` },
      { text: '四十九难', link: `${path.main}nj54` },
      { text: '五十难', link: `${path.main}nj55` },
      { text: '五十一难', link: `${path.main}nj56` },
      { text: '五十二难', link: `${path.main}nj57` },
      { text: '五十三难', link: `${path.main}nj58` },
      { text: '五十四难', link: `${path.main}nj59` },
      { text: '五十五难', link: `${path.main}nj60` },
      { text: '五十六难', link: `${path.main}nj61` },
      { text: '五十七难', link: `${path.main}nj62` },
      { text: '五十八难', link: `${path.main}nj63` },
      { text: '五十九难', link: `${path.main}nj64` },
      { text: '六十难', link: `${path.main}nj65` },
      { text: '六十一难', link: `${path.main}nj66` },
    ],
  },
  {
    text: '论穴道',
    link: `${path.main}nj67`,
    collapsed: true,
    items: [
      { text: '六十二难', link: `${path.main}nj68` },
      { text: '六十三难', link: `${path.main}nj69` },
      { text: '六十四难', link: `${path.main}nj70` },
      { text: '六十五难', link: `${path.main}nj71` },
      { text: '六十六难', link: `${path.main}nj72` },
      { text: '六十七难', link: `${path.main}nj73` },
      { text: '六十八难', link: `${path.main}nj74` },
    ],
  },
  {
    text: '论针法',
    link: `${path.main}nj75`,
    collapsed: true,
    items: [
      { text: '六十九难', link: `${path.main}nj76` },
      { text: '七十难', link: `${path.main}nj77` },
      { text: '七十一难', link: `${path.main}nj78` },
      { text: '七十二难', link: `${path.main}nj79` },
      { text: '七十三难', link: `${path.main}nj80` },
      { text: '七十四难', link: `${path.main}nj81` },
      { text: '七十五难', link: `${path.main}nj82` },
      { text: '七十六难', link: `${path.main}nj83` },
      { text: '七十七难', link: `${path.main}nj84` },
      { text: '七十八难', link: `${path.main}nj85` },
      { text: '七十九难', link: `${path.main}nj86` },
      { text: '八十难', link: `${path.main}nj87` },
      { text: '八十一难', link: `${path.main}nj88` },
    ],
  },
];

export { sidebar as nj };
