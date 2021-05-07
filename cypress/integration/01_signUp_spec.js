describe("go to home page and then account", () => {
    it("should go the page", () =>{
        cy.visit("/");
        cy.url().should('include', '/')
    });
    it("should click on params", () =>{
        cy.xpath("/html/body/div/section/header/div/div[2]/span[2]").should('exist').click()
        cy.xpath("/html/body/div[3]/div/div/ul/li[1]").should('exist').click()
        cy.url().should('include', '/account')
    });
});

describe("check log in", () => {
    it("check and send false info to inputs", () =>{
        cy.xpath("/html/body/div[1]/section/main/div/div[1]/div/div/form/div[1]/div[2]/div/div/input").should('exist').click()
        cy.xpath("/html/body/div[1]/section/main/div/div[1]/div/div/form/div[2]/div[2]/div/div/span/input").should('exist').click()
        cy.xpath("/html/body/div[1]/section/main/div/div[1]/div/div/form/div[3]/div/div/div/button").should('exist').click()
        cy.xpath("/html/body/div[1]/section/main/div/div[1]/div/div/form/div[1]/div[2]/div[2]/div").should('exist').contains("Please input your username!")
        cy.xpath("/html/body/div[1]/section/main/div/div[1]/div/div/form/div[2]/div[2]/div[2]/div").should('exist').contains("Please input your password!")
    });
    it("check and send true info to inputs", () =>{
        cy.xpath("/html/body/div[1]/section/main/div/div[1]/div/div/form/div[1]/div[2]/div/div/input").should('exist').click().type("test")
        cy.xpath("/html/body/div[1]/section/main/div/div[1]/div/div/form/div[2]/div[2]/div/div/span/input").should('exist').click().type("test")
        cy.xpath("/html/body/div[1]/section/main/div/div[1]/div/div/form/div[3]/div/div/div/button").should('exist').click()
        cy.xpath("/html/body/div[1]/section/main/div/div[1]/div/div/form/div[1]/div[2]/div[2]/div").should('not.exist')
        cy.xpath("/html/body/div[1]/section/main/div/div[1]/div/div/form/div[2]/div[2]/div[2]/div").should('not.exist')
        cy.get(".ant-message-success").should('be.visible').contains("Connecter !")
    });
});