export const menuList = [
  {
    title: '首页',
    icon: 'el-icon-s-home',
    index: 'home',
    children: []
  },
  {
    title: '防疫情况',
    icon: 'el-icon-s-opportunity',
    index: '2',
    children: [
      {
        title: '感染人数分布',
        icon: 'el-icon-s-custom',
        index: 'infect',
      },
      {
        title: '隔离点分布',
        icon: 'el-icon-s-flag',
        index: 'isolation',
      },
      {
        title: '管控分布',
        icon: 'el-icon-s-help',
        index: 'control',
      },
      {
        title: '核酸点分布',
        icon: 'el-icon-office-building',
        index: 'acid',
      },
    ]
  },
  {
    title: '防疫管理',
    icon: 'el-icon-s-data',
    index: '3',
    children: [
      {
        title: '核酸点管理',
        icon: 'el-icon-school',
        index: 'acidContrl',
      },
      {
        title: '隔离点管理',
        icon: 'el-icon-c-scale-to-original',
        index: 'controlManage',
      },
      {
        title: '管控点管理',
        icon: 'el-icon-connection',
        index: 'isolationManage',
      }
    ]
  },
  {
    title: '防疫调配',
    icon: 'el-icon-s-goods',
    index: '4',
    children: [
      {
        title: '管理防疫人员',
        icon: 'el-icon-user',
        index: 'people',
      },
      {
        title: '管理防疫物资',
        icon: 'el-icon-reading',
        index: 'goods',
      }
    ]
  },
  {
    title: '智能调度',
    icon: 'el-icon-guide',
    index: 'smart',
    children: []
  },
  {
    title: '交通信息管理',
    icon: 'el-icon-location',
    index: 'traffic',
    children: []
  },
  {
    title: '统计报表',
    icon: 'el-icon-pie-chart',
    index: 'statement',
    children: []
  },
  {
    title: '辅助信息',
    icon: 'el-icon-tickets',
    index: 'assist',
    children: [
      // {
      //   title: '感染人数分布',
      //   icon: 'el-icon-s-custom',
      //   index: 'infect',
      // }
    ]
  },
  {
    title: '用户信息管理',
    icon: 'el-icon-s-custom',
    index: 'user',
    children: []
  }
]