context('Test website quality', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('.section').should('be.visible')
    })

    it('should pass the lighthouse audits', () => {
        cy.lighthouse(
            {
                performance: Cypress.env('IS_CI') ? 55 : 84,
                accessibility: 95,
                'best-practices': 93,
                pwa: 1

            },
            {
                formFactor: 'desktop',
                screenEmulation: { disabled: true }
            }
        )
    })

    xit('should pass the pa11y audits', () => {
        cy.visit('/')
        cy.get('.section').should('be.visible')
        cy.pa11y()
    })
})