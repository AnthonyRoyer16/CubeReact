describe("go to home page and then register page", () => {
    it("should go the page", () =>{
        cy.visit("/");
        cy.visit("/account");
        cy.url().should('include', '/account')
    });

});

describe("check and send no info to inputs", () => {
   
    it("false try to submit", () =>{
        cy.xpath(
            "//*[@id='basic']/div[3]/div/div/div/button"
          )
            .should("be.visible")
            .click()
        cy.xpath(
            "//*[@id='basic']/div[1]/div[2]/div[2]/div"
          )
            .should("be.visible")
        cy.xpath(
            "//*[@id='basic']/div[2]/div[2]/div[2]/div"
            )
            .should("be.visible")  
    });

});

describe("check and send false info to inputs", () => {

    it("false info to email", () =>{
        cy.xpath(
            "//*[@id='basic_email']"
          )
            .should("be.visible")
            .click()
            .click()
            .clear()
            .type("aa")
    });


    it("false info to password", () =>{
        cy.xpath(
            "//*[@id='basic_password']"
          )
            .should("be.visible")
            .click()
            .clear()
            .type("aa")
    });

    it("false try to submit", () =>{
        cy.xpath(
            "//*[@id='basic']/div[3]/div/div/div/button"
          )
            .should("be.visible")
            .click()
        cy.xpath(
            "//*[@id='basic']/div[2]/div[2]/div[2]/div"
            )
            .should("be.visible")  
    });

});

describe("check and send true info to inputs", () => {

    it("true info to email", () =>{
        cy.xpath(
            "//*[@id='basic_email']"
          )
            .should("be.visible")
            .click()
            .click()
            .clear()
            .type("anthony.royer16@gmail.com")
    });


    it("true info to password", () =>{
        cy.xpath(
            "//*[@id='basic_password']"
          )
            .should("be.visible")
            .click()
            .clear()
            .type("bbbBBB11223344")
    });


    it("true try to submit", () =>{
        cy.xpath(
            "//*[@id='basic']/div[3]/div/div/div/button"
          )
            .should("be.visible")
            .click()
        cy.xpath(
            "//*[@id='basic']/div[1]/div[2]/div[2]/div"
          )
            .should("not.exist")
        cy.xpath(
            "//*[@id='basic']/div[2]/div[2]/div[2]/div"
            )
            .should("not.exist")  
    });

});