describe('Role Select Learn Test', () => {
    // 访问http://localhost:5173/role-select-learn/0,界面上包含 接待与咨询服务、资料管理与档案简历、确保环境整洁舒适、接待到访的顾客、准备接待区域、解答顾客咨询、指引顾客
    it('page show', () => {
        cy.visit('http://localhost:5173/role-select-learn/0')
        cy.contains('接待与咨询服务')
        cy.contains('资料管理与档案建立')
        cy.contains('确保环境整洁舒适')
        cy.contains('接待到访的顾客')
        cy.contains('准备接待区域')
        cy.contains('解答顾客咨询')
        cy.contains('指引顾客')
    })

    // 点击接待与咨询服务，然后界面上应当包含接待顾客、管理预约
    it('click the nav item', () => {
        cy.visit('http://localhost:5173/role-select-learn/0')
        cy.contains('接待与咨询服务').click()
        cy.contains('接待顾客')
        cy.contains('管理预约')
    })

    // 点击接待到访的顾客，界面上应当包含提供座位和等候服务。
    it('click the procedure item', () => {
        cy.visit('http://localhost:5173/role-select-learn/0')
        cy.contains('接待到访的顾客').click()
        cy.contains('提供座位和等候服务')
    })

    it('Dark Mode', () => {
        cy.visit('http://localhost:5173/role-select-learn/0')
        cy.get('button').should('have.class', 'h-6 w-10').click()
        // 判断html标签是否包含class为dark
        cy.get('html').should('have.class', 'dark')
    })

    
})