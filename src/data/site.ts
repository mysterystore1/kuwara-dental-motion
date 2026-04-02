/** Site-wide constants — change here, update everywhere */
export const SITE = {
  name: "湘南桑田歯科",
  nameShort: "桑田歯科",
  tagline: "「怖い」を我慢しなくていい歯科医院",
  description:
    "湘南エリアで安心して通える歯医者。歯医者が怖い方、久しぶりの方も安心してご相談ください。必要以上に削らない・患者さんを責めない・無理に治療を進めない、3つの約束でお待ちしています。",
  url: "https://kuwara-dental.example.com",
  phone: "0466-XX-XXXX",
  phoneHref: "tel:0466XXXXXX",
  address: {
    full: "〒251-XXXX 神奈川県藤沢市南藤沢XX-XX ○○ビル2F",
    short: "藤沢市南藤沢XX-XX",
    station: "JR藤沢駅南口より徒歩3分",
  },
  hours: {
    weekday: "9:30 – 13:00 / 14:30 – 19:00",
    saturday: "9:30 – 13:00 / 14:30 – 17:00",
    closed: "木曜・日曜・祝日",
  },
  reserve: {
    epark: "https://epark.jp/XXXXX",
    line: "https://line.me/R/ti/p/@XXXXX",
  },
  social: {
    instagram: "",
  },
} as const;

export const NAV_ITEMS = [
  {
    label: "初めての方へ",
    href: "/first-visit/",
    children: [
      { label: "歯医者が怖い方へ", href: "/dental-anxiety/" },
      { label: "私たちの考え", href: "/philosophy/" },
    ],
  },
  {
    label: "症状から探す",
    href: "#",
    children: [
      { label: "歯が痛い", href: "/symptoms/toothache/" },
      { label: "歯がしみる", href: "/symptoms/sensitivity/" },
      { label: "歯茎が腫れた", href: "/symptoms/swollen-gums/" },
      { label: "詰め物が取れた", href: "/symptoms/lost-filling/" },
    ],
  },
  {
    label: "診療案内",
    href: "#",
    children: [
      { label: "虫歯治療", href: "/services/cavity/" },
      { label: "歯周病治療", href: "/services/periodontal/" },
      { label: "予防歯科", href: "/services/preventive/" },
      { label: "小児歯科", href: "/services/pediatric/" },
      { label: "ホワイトニング", href: "/services/whitening/" },
    ],
  },
  {
    label: "医院案内",
    href: "#",
    children: [
      { label: "院長紹介", href: "/clinic/doctor/" },
      { label: "院内紹介", href: "/clinic/facility/" },
      { label: "料金表", href: "/clinic/pricing/" },
      { label: "アクセス", href: "/access/" },
    ],
  },
  { label: "FAQ", href: "/faq/" },
] as const;

export const THREE_PROMISES = [
  {
    title: "必要以上に削らない",
    description: "歯はできるだけ残す方針で、最小限の治療を心がけています。",
    icon: "shield",
  },
  {
    title: "患者さんを責めない",
    description: "久しぶりの来院でも大丈夫。今の状態から一緒に考えましょう。",
    icon: "heart",
  },
  {
    title: "無理に治療を進めない",
    description: "まずはお話を聞くところから。納得いただいてから治療を始めます。",
    icon: "hand",
  },
] as const;
