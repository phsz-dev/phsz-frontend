describe('User Test', () => {
  // 将以下代码提取为函数
  const login = () => {
    cy.visit('http://localhost:5173/login')
    cy.contains('登录')
    cy.get('input[type="text"]').type('mofeng')
    cy.get('input[type="password"]').type('123456')
    cy.contains('下一步').click()
    // 判断是否正确跳转到首页
    cy.url().should('include', '/home')
    cy.wait(1000)
    // 点击个人资料按钮
    cy.contains('个人资料').click()
  }
  // 访问http://localhost:5173/login，输入正确的用户名和密码 mofeng 123456，点击下一步按钮
  it('Correct Username', () => {
    //判断页面上是否包含 mofeng
    login()
    cy.contains('mofeng')
  })

  // 先登录，然后在页面上的input中输入一个随机的邮箱，点击保存按钮，判断邮箱是否正确保存
    it('Correct Email', () => {
        login()
        // 随机邮箱
        const email = Math.random().toString(36).substring(7) + '@qq.com'
        cy.get('input[type="email"]').clear().type(email)
        cy.contains('保存').click()
        // input中的邮箱是否等于随机邮箱
        cy.get('input[type="email"]').should('have.value', email)
    })

    // 点击带有类名h-6 w-10的按钮，判断是否进入深色模式
    it('Dark Mode', () => {
        login()
        cy.get('button').should('have.class', 'h-6 w-10').click()
        // 判断html标签是否包含class为dark
        cy.get('html').should('have.class', 'dark')
    })
})
