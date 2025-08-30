describe('Pizza Order Form - IT1', () => {
  it('types into name input', () => {
    cy.visit('/#/form')
    cy.get('input[name="isim"]').type('Ali Veli').should('have.value', 'Ali Veli')
  })

  it('selects multiple toppings (at least 4)', () => {
    cy.visit('/#/form')

    const keys = ['pepperoni', 'sosis', 'sucuk', 'domates']
    keys.forEach((k) => {
      cy.get(`input[type="checkbox"][name="${k}"]`).check({ force: true }).should('be.checked')
    })
  })

  it('submits the form successfully', () => {
    cy.intercept('POST', 'https://reqres.in/api/pizza', {
      statusCode: 201,
      body: { id: 'test-id-1', createdAt: '2025-01-01T00:00:00.000Z' },
    }).as('postPizza')

    cy.visit('/#/form')

    cy.get('input[name="isim"]').type('Mehmet Test')
    cy.get('input[type="radio"][name="boyut"][value="Kucuk"]').check({ force: true }).should('be.checked')

    const keys = ['pepperoni', 'sosis', 'sucuk', 'domates']
    keys.forEach((k) => {
      cy.get(`input[type="checkbox"][name="${k}"]`).check({ force: true }).should('be.checked')
    })

    cy.get('textarea[name="siparisNotu"]').type('Kapıya bırakınız')

    cy.get('button[type="submit"]').should('not.be.disabled').click()

    cy.wait('@postPizza').its('request.body').then((body) => {
      expect(body.isim).to.eq('Mehmet Test')
      expect(body.boyut).to.eq('Kucuk')
      expect(body.malzemeler).to.include.members(keys)
    })
  })
})

