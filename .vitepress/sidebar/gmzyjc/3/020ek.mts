const path = {
  main: '/gmzyjc/ok/ek/',
};

const sidebar = [
  { text: '《中医儿科学》' },
  { text: '编者与编者的话', link: `${path.main}ek0000` },
  { text: '导言', link: `${path.main}daoyan` },
  {
    text: '总论',
    link: `${path.main}ek0zl01`,
    collapsed: true,
    items: [
      { text: '第一章 中医儿科学的源流和发展', link: `${path.main}ek0zl01-1.0.0.0.0` },
      { text: '第二章 小儿生理病理特点', link: `${path.main}ek0zl02` },
      { text: '第三章 小儿保育', link: `${path.main}ek0zl03` },
      { text: '第四章 小儿病因特点', link: `${path.main}ek0zl04` },
      {
        text: '第五章 儿科诊断学特点',
        link: `${path.main}ek0zl05`,
        collapsed: true,
        items: [
          { text: '第一节 望诊', link: `${path.main}ek0zl05-0.1.0.0.0` },
          { text: '第二节 闻诊', link: `${path.main}ek0zl05-0.2.0.0.0` },
          { text: '第三节 问诊', link: `${path.main}ek0zl05-0.3.0.0.0` },
          { text: '第四节 切诊', link: `${path.main}ek0zl05-0.4.0.0.0` },
          { text: '第五节 按诊', link: `${path.main}ek0zl05-0.5.0.0.0` },
        ],
      },
      { text: '第六章 儿科病的预防和护理', link: `${path.main}ek0zl06` },
      {
        text: '第七章 儿科辨证论治特点',
        link: `${path.main}ek0zl07`,
        collapsed: true,
        items: [
          { text: '第一节 五脏辨证', link: `${path.main}ek0zl07-0.1.0.0.0` },
          { text: '第二节 儿科治疗特点', link: `${path.main}ek0zl07-0.2.0.0.0` },
          { text: '第三节 常用治法', link: `${path.main}ek0zl07-0.3.0.0.0` },
          { text: '第四节 针剌与推拿', link: `${path.main}ek0zl07-0.4.0.0.0` },
          { text: '小结', link: `${path.main}ek0zl07-0.5.0.0.0` },
        ],
      },
      {
        text: '第八章 儿科名方的应用',
        link: `${path.main}ek0zl08`,
        collapsed: true,
        items: [
          { text: '第一节 脏腑证治法', link: `${path.main}ek0zl08-0.1.0.0.0` },
          { text: '第二节 儿科急证', link: `${path.main}ek0zl08-0.2.0.0.0` },
          { text: '小结', link: `${path.main}ek0zl08-0.3.0.0.0` },
        ],
      },
    ],
  },
  {
    text: '各论',
    link: `${path.main}ekgl01`,
    collapsed: true,
    items: [
      {
        text: '第一章 新生儿疾病',
        link: `${path.main}ekgl01-1.0.0.0.0`,
        collapsed: true,
        items: [
          { text: '不乳', link: `${path.main}ekgl01-1.1.0.0.0` },
          { text: '吐乳', link: `${path.main}ekgl01-1.2.0.0.0` },
          { text: '胎黄', link: `${path.main}ekgl01-1.3.0.0.0` },
          { text: '脐病', link: `${path.main}ekgl01-1.4.0.0.0` },
          { text: '脐风', link: `${path.main}ekgl01-1.5.0.0.0` },
          { text: '夜啼', link: `${path.main}ekgl01-1.6.0.0.0` },
          { text: '硬肿症', link: `${path.main}ekgl01-1.7.0.0.0` },
        ],
      },
      {
        text: '第二章 传染疾病',
        link: `${path.main}ekgl02`,
        collapsed: true,
        items: [
          { text: '麻疹  附：奶麻', link: `${path.main}ekgl02-0.1.0.0.0` },
          { text: '水痘', link: `${path.main}ekgl02-0.2.0.0.0` },
          { text: '丹痧', link: `${path.main}ekgl02-0.3.0.0.0` },
          { text: '白喉', link: `${path.main}ekgl02-0.4.0.0.0` },
          { text: '痄腮', link: `${path.main}ekgl02-0.5.0.0.0` },
          { text: '风痧', link: `${path.main}ekgl02-0.6.0.0.0` },
          { text: '顿咳', link: `${path.main}ekgl02-0.7.0.0.0` },
          { text: '黄疸 附：传染性肝炎', link: `${path.main}ekgl02-0.8.0.0.0` },
          { text: '痢疾', link: `${path.main}ekgl02-0.9.0.0.0` },
        ],
      },
      {
        text: '第三章外感疾病',
        link: `${path.main}ekgl03`,
        collapsed: true,
        items: [
          { text: '感冒', link: `${path.main}ekgl03-0.1.0.0.0` },
          { text: '咳嗽', link: `${path.main}ekgl03-0.2.0.0.0` },
          { text: '春温', link: `${path.main}ekgl03-0.3.0.0.0` },
          { text: '暑温 附：乙脑', link: `${path.main}ekgl03-0.4.0.0.0` },
          { text: '湿温  附：肠伤寒', link: `${path.main}ekgl03-0.5.0.0.0` },
          { text: '风温 附：流脑', link: `${path.main}ekgl03-0.6.0.0.0` },
          { text: '秋燥', link: `${path.main}ekgl03-0.7.0.0.0` },
          { text: '中暑', link: `${path.main}ekgl03-0.8.0.0.0` },
          { text: '疰夏 附：夏季热', link: `${path.main}ekgl03-0.9.0.0.0` },
        ],
      },
      {
        text: '第四章 内科疾病',
        link: `${path.main}ekgl04`,
        collapsed: true,
        items: [
          { text: '发热', link: `${path.main}ekgl04-0.1.0.0.0` },
          { text: '喘嗽', link: `${path.main}ekgl04-0.2.0.0.0` },
          { text: '肺胀', link: `${path.main}ekgl04-0.3.0.0.0` },
          { text: '哮喘', link: `${path.main}ekgl04-0.4.0.0.0` },
          { text: '呃逆', link: `${path.main}ekgl04-0.5.0.0.0` },
          { text: '呕吐', link: `${path.main}ekgl04-0.6.0.0.0` },
          { text: '泄泻', link: `${path.main}ekgl04-0.7.0.0.0` },
          { text: '腹痛', link: `${path.main}ekgl04-0.8.0.0.0` },
          { text: '腹胀', link: `${path.main}ekgl04-0.9.0.0.0` },
          { text: '疳证 附：积滞、异食、厌食', link: `${path.main}ekgl04-0.10.0.0.0` },
          { text: '水肿', link: `${path.main}ekgl04-0.11.0.0.0` },
          { text: '消渴', link: `${path.main}ekgl04-0.12.0.0.0` },
          { text: '惊风', link: `${path.main}ekgl04-0.13.0.0.0` },
          { text: '痫证', link: `${path.main}ekgl04-0.14.0.0.0` },
          { text: '心悸', link: `${path.main}ekgl04-0.15.0.0.0` },
          { text: '眩晕', link: `${path.main}ekgl04-0.16.0.0.0` },
          { text: '自汗与盗汗', link: `${path.main}ekgl04-0.17.0.0.0` },
          { text: '痴呆', link: `${path.main}ekgl04-0.18.0.0.0` },
          { text: '淋证', link: `${path.main}ekgl04-0.19.0.0.0` },
          { text: '癃闭', link: `${path.main}ekgl04-0.20.0.0.0` },
          { text: '便秘', link: `${path.main}ekgl04-0.21.0.0.0` },
          { text: '痹证 附：舞蹈证', link: `${path.main}ekgl04-0.22.0.0.0` },
          { text: '痿证', link: `${path.main}ekgl04-0.23.0.0.0` },
          { text: '痿躄', link: `${path.main}ekgl04-0.24.0.0.0` },
          { text: '紫癜', link: `${path.main}ekgl04-0.25.0.0.0` },
          { text: '疝气', link: `${path.main}ekgl04-0.26.0.0.0` },
          { text: '脱肛', link: `${path.main}ekgl04-0.27.0.0.0` },
          { text: '遗尿 附：尿频', link: `${path.main}ekgl04-0.28.0.0.0` },
        ],
      },
      {
        text: '第五章 肠道虫病',
        link: `${path.main}ekgl05`,
        collapsed: true,
        items: [
          { text: '蛔虫病', link: `${path.main}ekgl05-0.1.0.0.0` },
          { text: '蛲虫病', link: `${path.main}ekgl05-0.2.0.0.0` },
          { text: '姜片虫病', link: `${path.main}ekgl05-0.3.0.0.0` },
          { text: '钩虫病', link: `${path.main}ekgl05-0.4.0.0.0` },
        ],
      },
      {
        text: '第六章 外科疾病',
        link: `${path.main}ekgl06`,
        collapsed: true,
        items: [
          { text: '疖肿', link: `${path.main}ekgl06-0.1.0.0.0` },
          { text: '瘰疬', link: `${path.main}ekgl06-0.2.0.0.0` },
          { text: '白秃疮', link: `${path.main}ekgl06-0.3.0.0.0` },
          { text: '黄水疮', link: `${path.main}ekgl06-0.4.0.0.0` },
          { text: '冻疮', link: `${path.main}ekgl06-0.5.0.0.0` },
          { text: '尿布疹', link: `${path.main}ekgl06-0.6.0.0.0` },
          { text: '烫火伤', link: `${path.main}ekgl06-0.7.0.0.0` },
          { text: '湿疹', link: `${path.main}ekgl06-0.8.0.0.0` },
          { text: '赤游丹', link: `${path.main}ekgl06-0.9.0.0.0` },
        ],
      },
      {
        text: '第七章 五官疾病',
        link: `${path.main}ekgl07`,
        collapsed: true,
        items: [
          { text: '青盲', link: `${path.main}ekgl07-0.1.0.0.0` },
          { text: '聚星障', link: `${path.main}ekgl07-0.2.0.0.0` },
          { text: '针眼', link: `${path.main}ekgl07-0.3.0.0.0` },
          { text: '沙眼', link: `${path.main}ekgl07-0.4.0.0.0` },
          { text: '睑缘赤烂', link: `${path.main}ekgl07-0.5.0.0.0` },
          { text: '脓耳', link: `${path.main}ekgl07-0.6.0.0.0` },
          { text: '耳聋', link: `${path.main}ekgl07-0.7.0.0.0` },
          { text: '鼻衄', link: `${path.main}ekgl07-0.8.0.0.0` },
          { text: '鼻渊', link: `${path.main}ekgl07-0.9.0.0.0` },
          { text: '乳蛾', link: `${path.main}ekgl07-0.10.0.0.0` },
          { text: '喉瘖', link: `${path.main}ekgl07-0.11.0.0.0` },
          { text: '鹅口疮', link: `${path.main}ekgl07-0.12.0.0.0` },
          { text: '口疮', link: `${path.main}ekgl07-0.13.0.0.0` },
          { text: '木舌重舌', link: `${path.main}ekgl07-0.14.0.0.0` },
        ],
      },
      {
        text: '第八章杂病',
        link: `${path.main}ekgl08`,
        collapsed: true,
        items: [
          { text: '解颅', link: `${path.main}ekgl08-0.1.0.0.0` },
          { text: '五硬', link: `${path.main}ekgl08-0.2.0.0.0` },
          { text: '五软', link: `${path.main}ekgl08-0.3.0.0.0` },
          { text: '五迟', link: `${path.main}ekgl08-0.4.0.0.0` },
          { text: '鸡胸龟背', link: `${path.main}ekgl08-0.5.0.0.0` },
        ],
      },
      {
        text: '第九章常见中毒急救处理',
        link: `${path.main}ekgl09`,
        collapsed: true,
        items: [
          { text: '溺水', link: `${path.main}ekgl09-0.1.0.0.0` },
          { text: '触电', link: `${path.main}ekgl09-0.2.0.0.0` },
          { text: '煤气中毒', link: `${path.main}ekgl09-0.3.0.0.0` },
          { text: '食物中毒', link: `${path.main}ekgl09-0.4.0.0.0` },
          { text: '驱蛔灵中毒', link: `${path.main}ekgl09-0.5.0.0.0` },
          { text: '有机磷中毒', link: `${path.main}ekgl09-0.6.0.0.0` },
          { text: '有机氯中毒', link: `${path.main}ekgl09-0.7.0.0.0` },
          { text: '白果中毒', link: `${path.main}ekgl09-0.8.0.0.0` },
          { text: '木薯与果仁中毒', link: `${path.main}ekgl09-0.9.0.0.0` },
        ],
      },
    ],
  },
  { text: '常见证治方剂索引', link: `${path.main}ekgl10fjsy` },
  { text: '电子版录入与校对', link: `${path.main}dzb` },
];

export { sidebar as ek };
