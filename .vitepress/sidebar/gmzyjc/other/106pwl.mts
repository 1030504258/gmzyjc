const path = {
  main: '/gmzyjc/ok/pwl/',
};

const sidebar = [
  { text: '《脾胃论》' },
  { text: '序', link: `${path.main}pwl-3-00` },
  {
    text: '卷上',
    link: `${path.main}pwl-4-00`,
    collapsed: true,
    items: [
      { text: '脾胃虚实传变论', link: `${path.main}pwl-4-01` },
      { text: '脏气法时升降浮沉补泻图说', link: `${path.main}pwl-4-02` },
      { text: '脾胃胜衰论', link: `${path.main}pwl-4-03` },
      { text: '肺之脾胃虚论', link: `${path.main}pwl-4-05` },
      { text: '君臣佐使法', link: `${path.main}pwl-4-07` },
      { text: '分经随病制方', link: `${path.main}pwl-4-08` },
      { text: '用药宜禁论', link: `${path.main}pwl-4-11` },
      { text: '《内经》、仲景所说脾胃', link: `${path.main}pwl-4-12` },
    ],
  },
  {
    text: '卷中',
    link: `${path.main}pwl-5-00`,
    collapsed: true,
    items: [
      { text: '气运衰旺图说', link: `${path.main}pwl-5-01` },
      { text: '饮食劳倦所伤始为热中论', link: `${path.main}pwl-5-02` },
      {
        text: '脾胃虚弱随时为病随病制方',
        link: `${path.main}pwl-5-04`,
        collapsed: true,
        items: [
          { text: '黄人参汤', link: `${path.main}pwl-5-05` },
          { text: '除风湿羌活汤', link: `${path.main}pwl-5-06` },
          { text: '调中益气汤', link: `${path.main}pwl-5-07` },
        ],
      },
      {
        text: '长夏湿热胃困尤甚用清暑益气汤论',
        link: `${path.main}pwl-5-08`,
        collapsed: true,
        items: [{ text: '清暑益气汤', link: `${path.main}pwl-5-09` }],
      },
      { text: '随时加减用药法', link: `${path.main}pwl-5-10` },
      {
        text: '肠下血论',
        link: `${path.main}pwl-5-11`,
        collapsed: true,
        items: [
          { text: '凉血地黄汤', link: `${path.main}pwl-5-12` },
          { text: '升阳除湿防风汤', link: `${path.main}pwl-5-13` },
        ],
      },
      { text: '脾胃虚不可妄用吐药论', link: `${path.main}pwl-5-14` },
      { text: '安养心神调治脾胃论', link: `${path.main}pwl-5-15` },
      { text: '凡治病当问其所便', link: `${path.main}pwl-5-16` },
      { text: '胃气下溜五脏气皆乱其为病互相出见论', link: `${path.main}pwl-5-17` },
      { text: '阴病治阳阳病治阴', link: `${path.main}pwl-5-18` },
      { text: '三焦元气衰旺', link: `${path.main}pwl-5-19` },
    ],
  },
  {
    text: '卷下',
    link: `${path.main}pwl-6-00`,
    collapsed: true,
    items: [
      { text: '大肠小肠五脏皆属于胃胃虚则俱病论', link: `${path.main}pwl-6-01` },
      { text: '脾胃虚则九窍不通论', link: `${path.main}pwl-6-02` },
      { text: '胃虚脏腑经络皆无所受气而俱病论', link: `${path.main}pwl-6-03` },
      { text: '胃虚元气不足诸病所生论', link: `${path.main}pwl-6-04` },
      { text: '忽肥忽瘦论', link: `${path.main}pwl-6-05` },
      { text: '天地阴阳生杀之理在升降浮沉之间论', link: `${path.main}pwl-6-06` },
      { text: '阴阳寿夭论', link: `${path.main}pwl-6-07` },
      { text: '五脏之气交变论', link: `${path.main}pwl-6-08` },
      { text: '阴阳升降论', link: `${path.main}pwl-6-09` },
      {
        text: '调理脾胃治验治法用药若不明升降浮沉差互反损论',
        link: `${path.main}pwl-6-10`,
        collapsed: true,
        items: [
          { text: '清神益气汤', link: `${path.main}pwl-6-11` },
          { text: '半夏白术天麻汤', link: `${path.main}pwl-6-12` },
          { text: '人参芍药汤', link: `${path.main}pwl-6-13` },
          { text: '麻黄人参芍药汤', link: `${path.main}pwl-6-14` },
          { text: '升阳散火汤', link: `${path.main}pwl-6-15` },
          { text: '安胃汤', link: `${path.main}pwl-6-16` },
          { text: '清胃散', link: `${path.main}pwl-6-17` },
          { text: '清阳汤', link: `${path.main}pwl-6-18` },
          { text: '胃风汤（一）', link: `${path.main}pwl-6-19` },
        ],
      },
      {
        text: '阳明病湿胜自汗论',
        link: `${path.main}pwl-6-20`,
        collapsed: true,
        items: [{ text: '调卫汤', link: `${path.main}pwl-6-21` }],
      },
      {
        text: '湿热成痿肺金受邪论',
        link: `${path.main}pwl-6-22`,
        collapsed: true,
        items: [
          { text: '清燥汤', link: `${path.main}pwl-6-23` },
          { text: '助阳和血补气汤', link: `${path.main}pwl-6-24` },
          { text: '升阳汤', link: `${path.main}pwl-6-25` },
          { text: '升阳除湿汤', link: `${path.main}pwl-6-26` },
          { text: '益胃汤', link: `${path.main}pwl-6-27` },
          { text: '生姜和中汤', link: `${path.main}pwl-6-28` },
          { text: '强胃汤', link: `${path.main}pwl-6-29` },
          { text: '温胃汤', link: `${path.main}pwl-6-30` },
          { text: '和中丸（一）', link: `${path.main}pwl-6-31` },
          { text: '藿香安胃散', link: `${path.main}pwl-6-32` },
          { text: '异功散', link: `${path.main}pwl-6-33` },
        ],
      },
      {
        text: '饮食伤脾论',
        link: `${path.main}pwl-6-34`,
        collapsed: true,
        items: [{ text: '五苓散', link: `${path.main}pwl-6-35` }],
      },
      {
        text: '论饮酒过伤',
        link: `${path.main}pwl-6-36`,
        collapsed: true,
        items: [
          { text: '葛花解酲汤', link: `${path.main}pwl-6-37` },
          { text: '枳术丸', link: `${path.main}pwl-6-38` },
          { text: '橘皮枳术丸', link: `${path.main}pwl-6-39` },
          { text: '半夏枳术丸', link: `${path.main}pwl-6-40` },
          { text: '木香干姜枳术丸', link: `${path.main}pwl-6-41` },
          { text: '木香人参生姜枳术丸', link: `${path.main}pwl-6-42` },
          { text: '和中丸（二）', link: `${path.main}pwl-6-43` },
          { text: '交泰丸', link: `${path.main}pwl-6-44` },
          { text: '三棱消积丸', link: `${path.main}pwl-6-45` },
          { text: '备急丸', link: `${path.main}pwl-6-46` },
          { text: '神保丸', link: `${path.main}pwl-6-47` },
          { text: '雄黄圣饼子', link: `${path.main}pwl-6-48` },
          { text: '蠲饮枳实丸', link: `${path.main}pwl-6-49` },
          { text: '感应丸', link: `${path.main}pwl-6-50` },
          { text: '神应丸', link: `${path.main}pwl-6-51` },
          { text: '白术安胃散', link: `${path.main}pwl-6-52` },
          { text: '圣饼子', link: `${path.main}pwl-6-53` },
          { text: '当归和血散', link: `${path.main}pwl-6-54` },
          { text: '诃梨勒丸', link: `${path.main}pwl-6-55` },
        ],
      },
      {
        text: '脾胃损在调饮食适寒温',
        link: `${path.main}pwl-6-56`,
        collapsed: true,
        items: [
          { text: '胃风汤（二）', link: `${path.main}pwl-6-57` },
          { text: '三黄丸', link: `${path.main}pwl-6-58` },
          { text: '白术散', link: `${path.main}pwl-6-59` },
          { text: '加减平胃散', link: `${path.main}pwl-6-60` },
          { text: '散滞气汤', link: `${path.main}pwl-6-61` },
          { text: '通幽汤', link: `${path.main}pwl-6-62` },
          { text: '润肠丸', link: `${path.main}pwl-6-63` },
          { text: '导气除燥汤', link: `${path.main}pwl-6-64` },
          { text: '丁香茱萸汤', link: `${path.main}pwl-6-65` },
          { text: '草豆蔻丸', link: `${path.main}pwl-6-66` },
          { text: '神圣复气汤', link: `${path.main}pwl-6-67` },
        ],
      },
      { text: '脾胃将理法', link: `${path.main}pwl-6-68` },
      { text: '摄养', link: `${path.main}pwl-6-69` },
      { text: '远欲', link: `${path.main}pwl-6-70` },
      { text: '省言箴', link: `${path.main}pwl-6-71` },
    ],
  },
  { text: '后序', link: `${path.main}pwl-7-00` },
];

export { sidebar as pwl };
