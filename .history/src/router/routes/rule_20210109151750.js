export default [
  {
    path: '/rule/arcade',
    name: 'RuleArcade',
    component: () => import('/@/'),
    meta: {
      title: '万元礼喵争夺赛-活动细则',
    },
  },
  {
    path: '/rule/privacy',
    name: 'privacyrule',
    component: PrivacyRule,
    meta: {
      title: '隐私权政策',
    },
  },
  {
    path: '/rule/legal',
    name: 'legalrule',
    component: LegalRule,
    meta: {
      title: '法律声明',
    },
  },
  {
    path: '/rule/maooo',
    name: 'maooorule',
    component: MaoooRule,
    meta: {
      title: '猫巷平台服务协议',
    },
  },
  {
    path: '/rule/cattery',
    name: 'catteryrule',
    component: CatteryRule,
    meta: {
      title: '猫舍认证规则',
    },
  },
  {
    path: '/rule/blood',
    name: 'bloodrule',
    component: BloodRule,
    meta: {
      title: '血统认证规则',
    },
  },
  {
    path: '/rule/sitter',
    name: 'sitterrule',
    component: SitterRule,
    meta: {
      title: '宠托师认证规则',
    },
  },
  {
    path: '/rule/user',
    name: 'userrule',
    component: UserRule,
    meta: {
      title: '猫巷用户协议',
    },
  },
]
