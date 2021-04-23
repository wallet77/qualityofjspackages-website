context('Test website quality', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('.section').should('be.visible')
    })

    it('should pass the lighthouse audits', () => {
        cy.lighthouse(
            null,
            {
                formFactor: 'desktop',
                screenEmulation: { disabled: true }
            }
        )
    })

    it('should pass the pa11y audits', () => {
        cy.visit('/')
        cy.get('.section').should('be.visible')
        cy.pa11y()
    })
})