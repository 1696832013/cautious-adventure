const list = [
  {
    nick: 'Allen',
    phone: 18072709968,
    name: '徐敏超',
    subject: '-',
    job: '项目经理',
    year: '10年',
    updateTime: '2021-8-31 17:50:13'
  },
  {
    nick: 'Ryan',
    phone: 17857696889,
    name: '李日成',
    subject: '',
    job: '项目经理',
    year: '3年',
    updateTime: '2021-8-20 16:15:39'
  },
  {
    nick: '伏惜',
    phone: 17767079851,
    name: '孟金桥',
    subject: '',
    job: '项目经理',
    year: '6年',
    updateTime: '2021-8-17 14:03:09'
  }
]

module.exports = [
  {
    url: '/vue-admin-template/test/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: list.length,
          items: list
        }
      }
    }
  }
]
