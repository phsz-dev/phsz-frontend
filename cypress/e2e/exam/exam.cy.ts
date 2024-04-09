describe('Exam Test', () => {
  // 访问http://localhost:5173/paper-selection，界面上应包含大类1、一个type=text的input输入框和试卷1
  it('page show', () => {
    cy.visit('http://localhost:5173/paper-selection')
    cy.contains('大类1')
    cy.get('input[type="search"]').type('admin')
    cy.contains('试卷一')
  })

  // 访问http://localhost:5173/test/0
  it('click the first paper', () => {
    cy.visit('http://localhost:5173/test/0')
    // 界面上包含大于四个button
    cy.get('button').should('have.length.greaterThan', 4)
    cy.contains('1')
    cy.contains('2')
    cy.contains('3')
    cy.contains('4')
    cy.contains('What is the capital of France?')
  })

  // 点击包含w-8并且文本为2的button，页面上包含 What is 2 + 2?
  it('click the second button', () => {
    cy.visit('http://localhost:5173/test/0')
    cy.get('button').contains('2').click()
    cy.contains('What is 2 + 2?')
  })

  // 点击下一题，页面上包含 What is 2 + 2?
  it('click the next button', () => {
    cy.visit('http://localhost:5173/test/0')
    cy.get('button').contains('2').click()
    cy.contains('What is 2 + 2?')
    cy.contains('下一题').click()
    cy.wait(1000)
    cy.contains('What is the capital of Germany?')
  })

  // 点击带有类名h-6 w-10的按钮，判断是否进入深色模式
  it('Dark Mode', () => {
    cy.visit('http://localhost:5173/test/0')
    cy.get('button').should('have.class', 'h-6 w-10').click()
    // 判断html标签是否包含class为dark
    cy.get('html').should('have.class', 'dark')
  })
})
