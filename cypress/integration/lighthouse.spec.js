context('Test website perf', () => {
    it('should pass the audits', () => {
        cy.visit('/')
        cy.get('.section').should('be.visible')
        cy.lighthouse(
            null,
            {
                formFactor: 'desktop',
                screenEmulation: { disabled: true }
            }
        )
        cy.pa11y()
    })
})