const user='#nickname'
 const verifyUser='#main-btn'
 const result='#result > p:nth-child(1)'
 const logo='#result > p:nth-child(5) > img'
 const homepage='#result > p:nth-child(8) > a > img'

 export class QaCucumber{

     static visit() {
         cy.visit('https://chcibelli.github.io/meli-age/')
     }

     static enterUSer(){
         cy.get(user).type('fravega')
     }

     static addCountry(){
         cy.get('select').select('MLA').should('have.value', 'MLA')
     }

     static submitButton(){
         cy.get(verifyUser).click()
         cy.get(result).should('contain', 'Te registraste el 31/07/2013')
         cy.get(logo).should('be.visible')
         cy.get(homepage).should('be.visible')
     }

 }
 export default QaCucumber 