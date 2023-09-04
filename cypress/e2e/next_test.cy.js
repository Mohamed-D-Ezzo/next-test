describe('Overvieww test', () => {

  beforeEach(() => {
    cy.visit('/')

  })

  it('Contains correct header text', () => {
    cy.getDataTest('Overview-header').should('contain.text','Overview')

  })

  it('Accordion works correctly', () => {
    cy.contains(/Next.js is an open-source JavaScript framework used for building web applications and websites./i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.wait(2000)
    cy.contains(/Next.js is an open-source JavaScript framework used for building web applications and websites./i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.wait(2000)
    cy.contains(/Next.js is an open-source JavaScript framework used for building web applications and websites./i).should('not.be.visible')

    cy.contains(/Cypress is a popular end-to-end testing framework for web applications./i).should('not.be.visible')
    cy.get('[data-test="accordion-item-2"] div[role="button"]').click()
    cy.wait(2000)
    cy.contains(/Cypress is a popular end-to-end testing framework for web applications./i).should('be.visible')
    cy.get('[data-test="accordion-item-2"] div[role="button"]').click()
    cy.wait(2000)
    cy.contains(/Cypress is a popular end-to-end testing framework for web applications./i).should('not.be.visible')
  
  })


})

describe('Why test', () => {

  beforeEach(() => {
    cy.visit('/why')

  })

  it('Contains correct header text', () => {
    cy.getDataTest('next-header').should('contain.text','Why Next.js ?')
    cy.getDataTest('cypress-header').should('contain.text','Why Cypress ?')

  })

  it('Accordion works correctly', () => {
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
   cy.wait(1500)
    cy.get('[data-test="accordion-item-2"] div[role="button"]').click()
    cy.wait(1500)

    cy.get('[data-test="accordion-item-3"] div[role="button"]').click()
    cy.wait(1500)
    cy.get('[data-test="accordion-item-4"] div[role="button"]').click()
    cy.wait(1500)

    cy.get('[data-test="accordion-item-5"] div[role="button"]').click()
    cy.wait(1500)
    cy.get('[data-test="accordion-item-6"] div[role="button"]').click()
    cy.wait(1500)

    cy.get('[data-test="accordion-item-7"] div[role="button"]').click()
    cy.wait(1500)
    cy.get('[data-test="accordion-item-8"] div[role="button"]').click()
    cy.wait(1500)

    cy.get('[data-test="accordion-item-9"] div[role="button"]').click()
    cy.wait(1500)
    cy.get('[data-test="accordion-item-10"] div[role="button"]').click()
    cy.wait(1500)

    cy.get('[data-test="accordion-item-11"] div[role="button"]').click()
    cy.wait(1500)
    cy.get('[data-test="accordion-item-12"] div[role="button"]').click()
    cy.wait(1500)

    cy.get('[data-test="accordion-item-13"] div[role="button"]').click()
    cy.wait(1500)
    cy.get('[data-test="accordion-item-14"] div[role="button"]').click()
    cy.wait(1500)

    cy.get('[data-test="accordion-item-15"] div[role="button"]').click()
    cy.wait(1500)
    cy.get('[data-test="accordion-item-16"] div[role="button"]').click()
    cy.wait(1500)

    cy.get('[data-test="accordion-item-17"] div[role="button"]').click()
    cy.wait(1500)
    cy.get('[data-test="accordion-item-18"] div[role="button"]').click()
    cy.wait(1500)

    cy.get('[data-test="accordion-item-19"] div[role="button"]').click()
    cy.wait(1500)
    cy.get('[data-test="accordion-item-20"] div[role="button"]').click()
    cy.wait(1500)

    cy.get('[data-test="accordion-item-21"] div[role="button"]').click()
    cy.wait(1500)
    cy.get('[data-test="accordion-item-22"] div[role="button"]').click()
    cy.wait(1500)

    cy.get('[data-test="accordion-item-23"] div[role="button"]').click()
    cy.wait(1500)
    cy.get('[data-test="accordion-item-24"] div[role="button"]').click()
    cy.wait(1500)
  
  })


})


describe('Skills test', () => {

  beforeEach(() => {
    cy.visit('/skills')

  })

  it('Contains correct header text', () => {
        cy.getDataTest('skills-header').should('contain.text','Write down the skills you master')
    
      })
  
  it('Skills', () => {

        cy.contains(/add some skills/i)

        cy.getDataTest('skill-list').within(() => {
            cy.get('li').should('have.length', 0)
        })

        cy.getDataTest('clear-button').should('not.exist')

        cy.getDataTest('skill-list-title').should('have.text', 'Add Some Skills')

        cy.getDataTest('skill-input').within(() => {
            cy.get('input').type('CSS')
        })
        cy.wait(1000)

        cy.getDataTest('add-skill-button').click()
        cy.wait(1000)

        cy.getDataTest('skill-list').within(() => {
            cy.get('li').should('have.length', 1)
        })

        cy.getDataTest('skill-list-title').should('have.text', 'Skills')

        cy.getDataTest('skill-input').within(() => {
            cy.get('input').type('Next js')
        })
        cy.wait(1000)
        cy.getDataTest('add-skill-button').click()
        cy.wait(1000)

        cy.getDataTest('skill-list').within(() => {
            cy.get('li').should('have.length', 2)
            cy.get('li').its(0).should('contains.text', 'CSS')
        })

        cy.wait(1000)
        cy.getDataTest('skill-list').within(() => {
            cy.get('li').its(0).within(() => {
                cy.get('button').click()
            })
        })
        cy.wait(1000)

        cy.getDataTest('skill-list').within(() => {
            cy.get('li').should('have.length', 1)
        })

        cy.wait(1000)
        cy.getDataTest('clear-list').click()
        cy.getDataTest('skill-list').within(() => {
            cy.get('li').should('have.length', 0)
        })
        cy.wait(1000)


    })
   

  })

describe('Submit test', () => {
    beforeEach(() => {
        cy.visit('/submitemail')
    })
    it('Test Submit', () => {
        cy.contains(/Write your email for more information/i)
        cy.getDataTest('submit-form').find('input').as('submit-input')
        cy.get('@submit-input').type('mo@ezzo.com')
        cy.wait(1000)

        cy.contains(/Successfully subbed: mo@ezzo.com!/i).should('not.exist')
        cy.getDataTest('submit-button').click()
        cy.contains(/Successfully subbed: mo@ezzo.com!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Successfully subbed: mo@ezzo.com!/i).should('not.exist')
  
        cy.get('@submit-input').type('mo@ezzo.io')
        cy.contains(/invalid email: mo@ezzo.io!/i).should('not.exist')
        cy.getDataTest('submit-button').click()
        cy.contains(/invalid email: mo@ezzo.io!/i).should('exist')
        cy.wait(3000)
        cy.contains(/invalid email: mo@ezzo.io!/i).should('not.exist')
  
        cy.contains(/fail!/i).should('not.exist')
        cy.getDataTest('submit-button').click()
        cy.contains(/fail!/i).should('exist')
  
    })
  })
