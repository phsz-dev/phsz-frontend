describe('Register Test', () => {
  it('page show', () => {
    cy.visit('http://localhost:5173/register')
    // 界面上包含 注册、一个type为text的input和两个type为password 的input
    cy.contains('注册')
    cy.get('input[type="text"]').type('admin')
    cy.get('input[type="password"]').eq(0).type('admin')
    cy.get('input[type="password"]').eq(1).type('admin')
  })
  // 不输入用户名,直接点击下一步按钮
  it('No Username', () => {
    cy.visit('http://localhost:5173/register')
    cy.contains('注册')
    cy.get('input[type="password"]').eq(0).type('admin')
    cy.get('input[type="password"]').eq(1).type('admin')
    cy.contains('下一步').click()
    cy.contains('用户名不能为空')
  })
  // 不输入密码,直接点击下一步按钮
  it('No Password', () => {
    cy.visit('http://localhost:5173/register')
    cy.contains('注册')
    cy.get('input[type="text"]').type('admin')
    cy.get('input[type="password"]').eq(1).type('admin')
    cy.contains('下一步').click()
    cy.contains('密码不能为空')
  })

  // 两次密码输入不一致
  it('Password not same', () => {
    cy.visit('http://localhost:5173/register')
    cy.contains('注册')
    cy.get('input[type="text"]').type('admin')
    cy.get('input[type="password"]').eq(0).type('admin')
    cy.get('input[type="password"]').eq(1).type('admin1')
    cy.contains('下一步').click()
    cy.contains('两次输入的密码不一致')
  })

  // 输入正确的用户名和密码,随机用户名，123456
  it('Correct Username and Password', () => {
    cy.visit('http://localhost:5173/register')
    cy.contains('注册')
    // 随机用户名
    const username = Math.random().toString(36).substring(7)
    cy.get('input[type="text"]').type(username)
    cy.get('input[type="password"]').eq(0).type('123456')
    cy.get('input[type="password"]').eq(1).type('123456')
    cy.contains('下一步').click()
    // 判断是否正确跳转到登录界面，在登陆界面的密码中填入123456，点击下一步按钮
    cy.url().should('include', '/login')
    // 等一会儿，等页面加载完
    cy.wait(1000)
    cy.get('input[type="password"]').type('123456')
    cy.contains('下一步').click()
    // 判断是否正确跳转到首页
    cy.url().should('include', '/home')
  })

  // 点击带有类名h-6 w-10的按钮，判断是否进入深色模式
  it('Dark Mode', () => {
    cy.visit('http://localhost:5173/register')
    cy.get('button').should('have.class', 'h-6 w-10').click()
    // 判断html标签是否包含class为dark
    cy.get('html').should('have.class', 'dark')
  })
})
