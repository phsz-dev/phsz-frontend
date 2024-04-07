describe('Case Test', () => {
    // 访问http://localhost:5173/case-study，界面上应包含疾病分类、传染病、犬细小病毒
    it('page show', () => {
        cy.visit('http://localhost:5173/case-study')
        cy.contains('疾病分类')
        cy.contains('传染病')
        cy.contains('犬细小病毒')
    })

    // 点击内科，界面上犬细小病毒不见了，应当包含口炎
    it('click the nav item', () => {
        cy.visit('http://localhost:5173/case-study')
        cy.contains('内科').click()
        cy.contains('犬细小病毒').should('not.exist')
        cy.contains('口炎')
    })

    // 点击犬瘟热，进入http://localhost:5173/case-study-detail/1界面，界面上应包含犬瘟、贵宾犬、金毛、德牧
    it('click the case item', () => {
        cy.visit('http://localhost:5173/case-study')
        cy.contains('犬瘟热').click()
        cy.contains('犬瘟')
        cy.contains('贵宾犬')
        cy.contains('金毛')
        cy.contains('德牧')
    })

    // 点击贵宾犬，界面上应包含基本介绍、处方药品、处方疫苗、检查项目、收费详情以及加粗的确认疾病
    it('click the case item', () => {
        cy.visit('http://localhost:5173/case-study-detail/1')
        cy.contains('贵宾犬').click()
        cy.contains('基本介绍')
        cy.contains('处方药品')
        cy.contains('处方疫苗')
        cy.contains('检查项目')
        cy.contains('收费详情')
        cy.contains('确认疾病').should('have.css', 'font-weight', '700')
    })

    // 点击处方药品，应当出现阿菲索干扰素注射液，同时确认疾病消失
    it('click the case item', () => {
        cy.visit('http://localhost:5173/case-study-detail/1')
        cy.contains('贵宾犬').click()
        cy.contains('处方药品').click()
        cy.contains('阿菲索干扰素注射液')
        cy.contains('确认疾病').should('not.exist')
    })

})