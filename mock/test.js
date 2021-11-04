const list = [
  {
    nick: 'Allen',
    phone: 159381366,
    name: 'aaaaa',
    subject: '数学',
    year: 22,
    updateTime: '2021-9-12'
  },
  {
    nick: 'Allen2',
    phone: 159381366,
    name: 'aaaaa',
    subject: '数学',
    year: 22,
    updateTime: '2021-9-12'
  },
  {
    nick: 'Allen3',
    phone: 159381366,
    name: 'aaaaa',
    subject: '数学',
    year: 22,
    updateTime: '2021-9-12'
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
