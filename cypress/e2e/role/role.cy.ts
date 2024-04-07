describe('Role Test', () => {
    it('page show', () => {
        cy.visit('http://localhost:5173/role-select')
        // 界面上包含 三张图片和前台、医助、兽医师三段文字
        cy.get('img').should('have.length', 3)
        cy.contains('前台')
        cy.contains('医助')
        cy.contains('兽医师')
    })

    //点击第一张图片，跳转到 http://localhost:5173/role-select-learn/0
    it('click the first image', () => {
        cy.visit('http://localhost:5173/role-select')
        cy.get('img').eq(0).click()
        cy.url().should('include', '/role-select-learn/0')
    })
    // 点击带有类名h-6 w-10的按钮，判断是否进入深色模式
    it('Dark Mode', () => {
        cy.visit('http://localhost:5173/role-select')
        cy.get('button').should('have.class', 'h-6 w-10').click()
        // 判断html标签是否包含class为dark
        cy.get('html').should('have.class', 'dark')
    })
})
  