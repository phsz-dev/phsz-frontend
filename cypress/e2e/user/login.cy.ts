describe('Login Test', () => {
  it('Wrong Username or password', () => {
    cy.visit('http://localhost:5173/login')
    // 界面上包含 登录、type为text的input和type为password 的input，并且往里面输入内容
    cy.contains('登录')
    cy.get('input[type="text"]').type('admin')
    cy.get('input[type="password"]').type('admin')
    // 点击文本为下一步的按钮
    cy.contains('下一步').click()
    // 判断是否返回用户名或密码错误
    cy.contains('用户名或密码错误')
  })
  // 不输入用户名,直接点击下一步按钮
  it('No Username', () => {
    cy.visit('http://localhost:5173/login')
    cy.contains('登录')
    cy.get('input[type="password"]').type('admin')
    cy.contains('下一步').click()
    cy.contains('用户名不能为空')
  })
  // 不输入密码,直接点击下一步按钮
  it('No Password', () => {
    cy.visit('http://localhost:5173/login')
    cy.contains('登录')
    cy.get('input[type="text"]').type('admin')
    cy.contains('下一步').click()
    cy.contains('密码不能为空')
  })
  // 输入正确的用户名和密码 mofeng 123456
  it('Correct Username and Password', () => {
    cy.visit('http://localhost:5173/login')
    cy.contains('登录')
    cy.get('input[type="text"]').type('mofeng')
    cy.get('input[type="password"]').type('123456')
    cy.contains('下一步').click()
    // 判断是否正确跳转到首页
    cy.url().should('include', '/home')
  })
  // 点击带有类名h-6 w-10的按钮，判断是否进入深色模式
  it('Dark Mode', () => {
    cy.visit('http://localhost:5173/login')
    cy.get('button').should('have.class', 'h-6 w-10').click()
    // 判断html标签是否包含class为dark
    cy.get('html').should('have.class', 'dark')
  })
})
