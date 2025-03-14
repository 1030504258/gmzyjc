const path = {
  main: '/gmzyjc/ok/fjx/',
};

const sidebar = [
  { text: '《方剂讲解》' },
  { text: '编者', link: `${path.main}fjs0.1bz` },
  { text: '导言', link: `${path.main}daoyan` },
  { text: '编者的话', link: `${path.main}fjs0.2bzdh` },
  {
    text: '上篇总论',
    link: `${path.main}fjs00`,
    collapsed: true,
    items: [
      {
        text: '第一章 方剂与临床应用',
        link: `${path.main}fjs01`,
        collapsed: true,
        items: [
          { text: '一、方剂与理法药的关系', link: `${path.main}fjs1-0.1.1.0.0` },
          { text: '二、治疗大法', link: `${path.main}fjs1-0.1.2.0.0` },
        ],
      },
      { text: '第二章 方剂的配伍组合', link: `${path.main}fjs02` },
      { text: '第三章 剂型的种类', link: `${path.main}fjs03` },
      {
        text: '第四章 方剂的用法',
        link: `${path.main}fjs04`,
        collapsed: true,
        items: [
          { text: '一、煎法', link: `${path.main}fjs4-0.0.1.0.0` },
          { text: '二、服法', link: `${path.main}fjs4-0.0.2.0.0` },
          { text: '〔附〕古方药量考证', link: `${path.main}fjs4-0.0.3.0.0` },
        ],
      },
    ],
  },
  {
    text: '下篇各论',
    link: `${path.main}fjx00`,
    collapsed: true,
    items: [
      {
        text: '第一章 解表剂',
        link: `${path.main}fjx01`,
        collapsed: true,
        items: [
          { text: '桂枝汤《伤寒论》', link: `${path.main}fjx01-0.1.0.0.0` },
          { text: '麻黄汤《伤寒论》', link: `${path.main}fjx01-0.2.0.0.0` },
          { text: '小青龙汤《伤寒论》', link: `${path.main}fjx01-0.3.0.0.0` },
          { text: '荆防败毒散《摄生众妙方》', link: `${path.main}fjx01-0.4.0.0.0` },
          { text: '清暑益气汤《温热经纬》', link: `${path.main}fjx01-0.5.0.0.0` },
          { text: '银翘散《温病条辨》', link: `${path.main}fjx01-0.6.0.0.0` },
          { text: '桑菊饮《温病条辨》', link: `${path.main}fjx01-0.7.0.0.0` },
          { text: '升降散《寒瘟条辨》', link: `${path.main}fjx01-0.8.0.0.0` },
        ],
      },
      {
        text: '第二章 和解剂',
        link: `${path.main}fjx02`,
        collapsed: true,
        items: [
          { text: '小柴胡汤《伤寒论》', link: `${path.main}fjx02-0.1.0.0.0` },
          { text: '逍遥散《太平惠民和剂局方》', link: `${path.main}fjx02-0.2.0.0.0` },
          { text: '藿香正气散《太平惠民和剂局方》', link: `${path.main}fjx02-0.3.0.0.0` },
        ],
      },
      {
        text: '第三章 攻里剂',
        link: `${path.main}fjx03`,
        collapsed: true,
        items: [
          { text: '大承气汤《伤寒论》', link: `${path.main}fjx03-0.1.0.0.0` },
          { text: '大陷胸汤《伤寒论》', link: `${path.main}fjx03-0.2.0.0.0` },
        ],
      },
      {
        text: '第四章 清热剂',
        link: `${path.main}fjx04`,
        collapsed: true,
        items: [
          { text: '白虎汤《伤寒论》', link: `${path.main}fjx04-0.1.0.0.0` },
          { text: '清营汤《温病条辨》', link: `${path.main}fjx04-0.2.0.0.0` },
          { text: '犀角地黄汤《备急千金要方》', link: `${path.main}fjx04-0.3.0.0.0` },
          { text: '黄连解毒汤《外台秘要》引崔氏方', link: `${path.main}fjx04-0.4.0.0.0` },
          { text: '普济消毒饮《医方集解》', link: `${path.main}fjx04-0.5.0.0.0` },
          { text: '导赤散《小儿药证直诀》', link: `${path.main}fjx04-0.6.0.0.0` },
          { text: '泻白散《小儿药证直决》', link: `${path.main}fjx04-0.7.0.0.0` },
          { text: '清胃散《兰室秘藏》', link: `${path.main}fjx04-0.8.0.0.0` },
          { text: '玉女煎《景岳全书》', link: `${path.main}fjx04-0.9.0.0.0` },
          { text: '龙胆泻肝汤《太平惠民和剂局方》', link: `${path.main}fjx04-0.10.0.0.0` },
          { text: '芍药汤《医学六书》', link: `${path.main}fjx04-0.11.0.0.0` },
          { text: '滋肾通关丸《兰室秘藏》', link: `${path.main}fjx04-0.12.0.0.0` },
          { text: '青蒿鳖甲汤《温病条辨》', link: `${path.main}fjx04-0.13.0.0.0` },
          { text: '秦艽鳖甲散《卫生宝鉴》', link: `${path.main}fjx04-0.14.0.0.0` },
          { text: '新加香薷饮《温病条辨》', link: `${path.main}fjx04-0.15.0.0.0` },
          { text: '六一散《河间六书·伤寒标本心法类萃》', link: `${path.main}fjx04-0.16.0.0.0` },
        ],
      },
      {
        text: '第五章 温阳剂',
        link: `${path.main}fjx05`,
        collapsed: true,
        items: [
          { text: '理中丸《伤寒论》', link: `${path.main}fjx05-0.1.0.0.0` },
          { text: '大建中汤《金匮要略》', link: `${path.main}fjx05-0.2.0.0.0` },
          { text: '四逆汤《伤寒论》', link: `${path.main}fjx05-0.3.0.0.0` },
        ],
      },
      {
        text: '第六章 消导剂',
        link: `${path.main}fjx06`,
        collapsed: true,
        items: [
          { text: '保和丸《丹溪心法》', link: `${path.main}fjx06-0.1.0.0.0` },
          { text: '木香槟榔丸《儒门事亲》', link: `${path.main}fjx06-0.2.0.0.0` },
        ],
      },
      {
        text: '第七章 补益剂',
        link: `${path.main}fjx07`,
        collapsed: true,
        items: [
          { text: '四君子汤《和剂局方》', link: `${path.main}fjx07-0.1.0.0.0` },
          { text: '补中益气汤《脾胃论》', link: `${path.main}fjx07-0.2.0.0.0` },
          { text: '四物汤《和剂局方》', link: `${path.main}fjx07-0.3.0.0.0` },
          { text: '归脾汤《济生方》', link: `${path.main}fjx07-0.4.0.0.0` },
          { text: '六味地黄丸《小儿药证真诀》', link: `${path.main}fjx07-0.5.0.0.0` },
          { text: '一贯煎《柳州医话》', link: `${path.main}fjx07-0.6.0.0.0` },
          { text: '补肺阿胶汤《小儿药证直诀》', link: `${path.main}fjx07-0.7.0.0.0` },
          { text: '沙参麦冬汤《温病条辨》', link: `${path.main}fjx07-0.8.0.0.0` },
          { text: '生脉散《内外伤辨惑论》', link: `${path.main}fjx07-0.9.0.0.0` },
          { text: '金匮肾气丸《金匮要略》', link: `${path.main}fjx07-0.10.0.0.0` },
          { text: '天王补心丹《摄生秘剖》', link: `${path.main}fjx07-0.11.0.0.0` },
          { text: '玉屏风散《丹溪心法》', link: `${path.main}fjx07-0.12.0.0.0` },
        ],
      },
      {
        text: '第八章 理气剂',
        link: `${path.main}fjx08`,
        collapsed: true,
        items: [
          { text: '越鞠丸《丹溪心法》', link: `${path.main}fjx08-0.1.0.0.0` },
          { text: '四磨汤《济生方》', link: `${path.main}fjx08-0.2.0.0.0` },
          { text: '天台乌药散《医学发明》', link: `${path.main}fjx08-0.3.0.0.0` },
          { text: '旋复代赭汤《伤寒论》', link: `${path.main}fjx08-0.4.0.0.0` },
          { text: '橘核丸《济生方》', link: `${path.main}fjx08-0.5.0.0.0` },
        ],
      },
      {
        text: '第九章 理血剂',
        link: `${path.main}fjx09`,
        collapsed: true,
        items: [
          { text: '血府逐瘀汤《医林改错》', link: `${path.main}fjx09-0.1.0.0.0` },
          { text: '补阳还五汤《医林改错》', link: `${path.main}fjx09-0.2.0.0.0` },
          { text: '复元活血汤《医学发明》', link: `${path.main}fjx09-0.3.0.0.0` },
          { text: '活络效灵丹《医学衷中参西录》', link: `${path.main}fjx09-0.4.0.0.0` },
          { text: '小蓟饮子《济生方》', link: `${path.main}fjx09-0.5.0.0.0` },
          { text: '黄土汤《金匮要略》', link: `${path.main}fjx09-0.6.0.0.0` },
        ],
      },
      {
        text: '第十章 祛湿剂',
        link: `${path.main}fjx10`,
        collapsed: true,
        items: [
          { text: '平胃散《太平惠民和剂局方》', link: `${path.main}fjx10-0.1.0.0.0` },
          { text: '茵陈蒿汤《伤寒论》', link: `${path.main}fjx10-0.2.0.0.0` },
          { text: '三仁汤《温病条辨》', link: `${path.main}fjx10-0.3.0.0.0` },
          { text: '甘露消毒丹《温热经纬》', link: `${path.main}fjx10-0.4.0.0.0` },
          { text: '八正散《太平惠民和剂局方》', link: `${path.main}fjx10-0.5.0.0.0` },
          { text: '五苓散《伤寒论》', link: `${path.main}fjx10-0.6.0.0.0` },
          { text: '猪苓汤《伤寒论》', link: `${path.main}fjx10-0.7.0.0.0` },
          { text: '茯苓桂枝白术甘草汤《伤寒论》', link: `${path.main}fjx10-0.8.0.0.0` },
          { text: '实脾散《重订严氏济生方》', link: `${path.main}fjx10-0.9.0.0.0` },
          { text: '萆薢分清饮《丹溪心法》', link: `${path.main}fjx10-0.10.0.0.0` },
          { text: '独活寄生汤《备急千金要方》', link: `${path.main}fjx10-0.11.0.0.0` },
        ],
      },
      {
        text: '第十一章 润燥剂',
        link: `${path.main}fjx11`,
        collapsed: true,
        items: [
          { text: '清燥救肺汤《医门法律》', link: `${path.main}fjx11-0.1.0.0.0` },
          { text: '杏苏散《温病条辨》', link: `${path.main}fjx11-0.2.0.0.0` },
          { text: '养阴清肺汤《重楼玉钥》', link: `${path.main}fjx11-0.3.0.0.0` },
          { text: '百合固金汤《医方集解》', link: `${path.main}fjx11-0.4.0.0.0` },
          { text: '麦门冬汤《金匮要略》', link: `${path.main}fjx11-0.5.0.0.0` },
        ],
      },
      {
        text: '第十二章 除痰剂',
        link: `${path.main}fjx12`,
        collapsed: true,
        items: [
          { text: '二陈汤《太平惠民和剂局方》', link: `${path.main}fjx12-0.1.0.0.0` },
          { text: '止嗽散《医学心悟》', link: `${path.main}fjx12-0.2.0.0.0` },
          { text: '三子养亲汤《韩氏医通》', link: `${path.main}fjx12-0.3.0.0.0` },
          { text: '定喘汤《摄生众妙方》', link: `${path.main}fjx12-0.4.0.0.0` },
          { text: '礞石滚痰丸《丹溪心法附余》引王隐君方', link: `${path.main}fjx12-0.5.0.0.0` },
        ],
      },
      {
        text: '第十三章 固涩剂',
        link: `${path.main}fjx13`,
        collapsed: true,
        items: [
          { text: '真人养脏汤《太平惠民和剂局方》', link: `${path.main}fjx13-0.1.0.0.0` },
          { text: '四神丸《证治准绳》', link: `${path.main}fjx13-0.2.0.0.0` },
          { text: '桑螵蛸散《本草衍义》', link: `${path.main}fjx13-0.3.0.0.0` },
        ],
      },
      {
        text: '第十四章 杀虫剂',
        link: `${path.main}fjx14`,
        collapsed: true,
        items: [
          { text: '乌梅丸《伤寒论》', link: `${path.main}fjx14-0.1.0.0.0` },
          { text: '肥儿丸《太平惠民和剂局方》', link: `${path.main}fjx14-0.2.0.0.0` },
        ],
      },
      {
        text: '第十五章 涌吐剂',
        link: `${path.main}fjx15`,
        collapsed: true,
        items: [{ text: '瓜蒂散《伤寒论》', link: `${path.main}fjx15-0.1.0.0.0` }],
      },
      {
        text: '第十六章 治风剂',
        link: `${path.main}fjx16`,
        collapsed: true,
        items: [
          { text: '大秦艽汤《素问病机气宜保命集方》', link: `${path.main}fjx16-0.1.0.0.0` },
          { text: '玉真散《外科正宗》', link: `${path.main}fjx16-0.2.0.0.0` },
          { text: '小活络丹《太平惠民和剂局方》', link: `${path.main}fjx16-0.3.0.0.0` },
          { text: '羚角钩藤汤《通俗伤寒论》', link: `${path.main}fjx16-0.4.0.0.0` },
          { text: '镇肝熄风汤《医学衷中参西录》', link: `${path.main}fjx16-0.5.0.0.0` },
          { text: '天麻钩藤饮《杂病证治新义》', link: `${path.main}fjx16-0.6.0.0.0` },
          { text: '大定风珠《温病条辨》', link: `${path.main}fjx16-0.7.0.0.0` },
          { text: '地黄饮子《宣明论方》', link: `${path.main}fjx16-0.8.0.0.0` },
          { text: '小续命汤《备急千金要方》', link: `${path.main}fjx16-0.9.0.0.0` },
        ],
      },
      {
        text: '第十七章 疮疡剂',
        link: `${path.main}fjx17`,
        collapsed: true,
        items: [
          { text: '仙方活命饮《校注妇人良方》', link: `${path.main}fjx17-0.1.0.0.0` },
          { text: '阳和汤《外科证治全生集》', link: `${path.main}fjx17-0.2.0.0.0` },
          { text: '犀黄丸《外科证治全生集》', link: `${path.main}fjx17-0.3.0.0.0` },
          { text: '苇茎汤《备急千金要方》', link: `${path.main}fjx17-0.4.0.0.0` },
          { text: '大黄牡丹汤《金匮要略》', link: `${path.main}fjx17-0.5.0.0.0` },
        ],
      },
      {
        text: '第十八章 经产剂',
        link: `${path.main}fjx18`,
        collapsed: true,
        items: [
          { text: '温经汤《金匮要略》', link: `${path.main}fjx18-0.1.0.0.0` },
          { text: '固经丸《医学入门》', link: `${path.main}fjx18-0.2.0.0.0` },
          { text: '完带汤《傅青主女科》', link: `${path.main}fjx18-0.3.0.0.0` },
          { text: '泰山磐石散《景岳全书》', link: `${path.main}fjx18-0.4.0.0.0` },
          { text: '生化汤《傅青主女科》《景岳全书》', link: `${path.main}fjx18-0.5.0.0.0` },
        ],
      },
      {
        text: '第十九章 开窍剂',
        link: `${path.main}fjx19`,
        collapsed: true,
        items: [
          { text: '安宫牛黄丸《温病条辨》', link: `${path.main}fjx19-0.1.0.0.0` },
          { text: '至宝丹《太平惠民和剂局方》', link: `${path.main}fjx19-0.2.0.0.0` },
          { text: '苏合香丸《太平惠民和剂局方》', link: `${path.main}fjx19-0.3.0.0.0` },
        ],
      },
    ],
  },
  { text: '电子版录入与校对', link: `${path.main}dzb` },
];

export { sidebar as fjx };
