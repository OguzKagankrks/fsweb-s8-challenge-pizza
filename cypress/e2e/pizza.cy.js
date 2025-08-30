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

describe('Pizza Order Form - IT2 extras', () => {
  it('enforces max 10 toppings (11th disabled)', () => {
    cy.visit('/#/form')
    cy.get('input[name="isim"]').type('Limit Test')
    cy.get('input[type="radio"][name="boyut"][value="Kucuk"]').check({ force: true })

    const ten = ['pepperoni','sosis','sucuk','domates','biber','misir','zeytin','mantar','ananas','sogan']
    ten.forEach((k) => {
      cy.get(`input[type="checkbox"][name="${k}"]`).check({ force: true }).should('be.checked')
    })

    // 11th should be disabled
    cy.get('input[type="checkbox"][name="sarimsak"]').should('be.disabled')
  })

  it('shows error message on failed POST and stays on form', () => {
    cy.intercept('POST', 'https://reqres.in/api/pizza', { forceNetworkError: true }).as('postPizzaFail')
    cy.visit('/#/form')

    cy.get('input[name="isim"]').type('Hata Test')
    cy.get('input[type="radio"][name="boyut"][value="Kucuk"]').check({ force: true })
    ;['pepperoni','sosis','sucuk','domates'].forEach((k) => {
      cy.get(`input[type="checkbox"][name="${k}"]`).check({ force: true })
    })

    cy.get('[data-testid="submit-button"]').click()
    cy.wait('@postPizzaFail')
    cy.get('[data-testid="submit-error"]').should('exist')
    cy.url().should('include', '/#/form')
  })

  it('navigates to success and shows summary', () => {
    cy.intercept('POST', 'https://reqres.in/api/pizza', {
      statusCode: 201,
      body: { id: 'ok-1', createdAt: '2025-01-01T00:00:00.000Z' },
    }).as('postPizzaOk2')

    cy.visit('/#/form')
    cy.get('input[name="isim"]').type('Ayşe Başarılı')
    cy.get('input[type="radio"][name="boyut"][value="Kucuk"]').check({ force: true })
    ;['pepperoni','sosis','sucuk','domates'].forEach((k) => {
      cy.get(`input[type="checkbox"][name="${k}"]`).check({ force: true })
    })

    cy.get('[data-testid="submit-button"]').click()
    cy.wait('@postPizzaOk2')
    cy.url().should('include', '/#/success')
    cy.contains('Siparişiniz Alındı').should('exist')
    cy.contains('Ayşe Başarılı').should('exist')
  })

  it('pricing reflects size and dough multipliers', () => {
    cy.visit('/#/form')
    cy.get('input[name="isim"]').type('Fiyat Test')

    // Kucuk + Ince + 4 topping: 85.5*1*1 + 4*5 = 105.5
    cy.get('input[type="radio"][name="boyut"][value="Kucuk"]').check({ force: true })
    cy.get('select[name="hamur"]').select('Ince')
    ;['pepperoni','sosis','sucuk','domates'].forEach((k) => {
      cy.get(`input[type="checkbox"][name="${k}"]`).check({ force: true })
    })
    cy.get('[data-testid="total-amount"]').should(($el) => {
      const text = $el.text().replace('₺','').trim()
      expect(parseFloat(text)).to.eq(105.5)
    })

    // Orta + Kalin + 4 topping: 85.5*1.2*1.1 + 20 = 132.86
    cy.get('input[type="radio"][name="boyut"][value="Orta"]').check({ force: true })
    cy.get('select[name="hamur"]').select('Kalin')
    cy.get('[data-testid="total-amount"]').should(($el) => {
      const text = $el.text().replace('₺','').trim()
      expect(parseFloat(text)).to.eq(132.86)
    })
  })

  it('Home CTA navigates to form', () => {
    cy.visit('/#/')
    cy.contains('a, button, [role="link"]', 'Siparis Olustur').click()
    cy.url().should('include', '/#/form')
  })

  it('submit stays disabled until form valid', () => {
    cy.visit('/#/form')

    // initially disabled
    cy.get('[data-testid="submit-button"]').should('be.disabled')

    // name < 3 keeps disabled
    cy.get('input[name="isim"]').type('Al')
    cy.get('[data-testid="submit-button"]').should('be.disabled')

    // name >= 3 but others missing
    cy.get('input[name="isim"]').type('i') // now 'Ali'
    cy.get('[data-testid="submit-button"]').should('be.disabled')

    // select size only
    cy.get('input[type="radio"][name="boyut"][value="Kucuk"]').check({ force: true })
    cy.get('[data-testid="submit-button"]').should('be.disabled')

    // select 3 toppings -> still disabled
    ;['pepperoni','sosis','sucuk'].forEach((k) => {
      cy.get(`input[type=\"checkbox\"][name=\"${k}\"]`).check({ force: true })
    })
    cy.get('[data-testid="submit-button"]').should('be.disabled')

    // 4th topping -> enabled
    cy.get('input[type="checkbox"][name="domates"]').check({ force: true })
    cy.get('[data-testid="submit-button"]').should('not.be.disabled')
  })
})
