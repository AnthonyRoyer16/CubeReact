describe("go to home page and then register page", () => {
    it("should go the page", () =>{
        cy.visit("/");
        cy.visit("/accountLogged");
        cy.url().should('include', '/accountLogged')
    });

});

describe("check and send no info to inputs", () => {
   
    it("false try to submit", () =>{
        cy.xpath(
            "//*[@id='root']/section/main/div/div[2]/form/div/div[10]/button"
          )
            .should("be.visible")
            .click()
    });

    it("it should check error", () =>{
        cy.xpath(
            "//*[@id='root']/section/main/div/div[2]/form/div/div[1]/div/div[2]/div[2]/div"
          )
            .should("be.visible")
        cy.xpath(
            "//*[@id='root']/section/main/div/div[2]/form/div/div[2]/div/div[2]/div[2]/div"
            )
            .should("be.visible")    
        cy.xpath(
            "//*[@id='root']/section/main/div/div[2]/form/div/div[3]/div/div[2]/div[2]/div"
            )
            .should("be.visible")   
        cy.xpath(
            "//*[@id='root']/section/main/div/div[2]/form/div/div[4]/div/div[2]/div[2]/div"
             )
             .should("be.visible")   
        cy.xpath(
            "//*[@id='root']/section/main/div/div[2]/form/div/div[5]/div/div[2]/div[2]/div"
            )
            .should("be.visible")   
        cy.xpath(
            "//*[@id='root']/section/main/div/div[2]/form/div/div[6]/div/div[2]/div[2]/div"
            )
            .should("be.visible")   
        cy.xpath(
            "//*[@id='root']/section/main/div/div[2]/form/div/div[7]/div/div[2]/div[2]/div"
            )
            .should("be.visible") 
        cy.xpath(
            "//*[@id='root']/section/main/div/div[2]/form/div/div[8]/div/div[2]/div[2]/div"
            )
            .should("be.visible") 
        cy.xpath(
            "//*[@id='root']/section/main/div/div[2]/form/div/div[9]/div/div[2]/div[2]/div"
            )
            .should("be.visible") 
    });


});

describe("check and send true info to inputs", () => {
    it("false info to name", () =>{
        cy.xpath(
            "//*[@id='lastName']"
          )
            .should("be.visible")
            .clear()
            .type("Royer");
    });
    it("false info to firstname", () =>{
        cy.xpath(
            "//*[@id='firstName']"
          )
            .should("be.visible")
            .clear()
            .type("Anthony");
    });
    it("false info to firstname", () =>{
        cy.xpath(
            "//*[@id='pseudo']"
          )
            .should("be.visible")
            .clear()
            .type("Anthony16");
    });
    it("false info to email", () =>{
        cy.xpath(
            "//*[@id='email']"
          )
            .should("be.visible")
            .clear()
            .type("anthony.royer@yopmail.com");
    });
    it("false info to password", () =>{
        cy.xpath(
            "//*[@id='password1']"
          )
            .should("be.visible")
            .clear()
            .type("bbbBBB11223344");
    });
    it("false info to password", () =>{
        cy.xpath(
            "//*[@id='password2']"
          )
            .should("be.visible")
            .clear()
            .type("bbbBBB11223344");
    });
    it("false info to city", () =>{
        cy.xpath(
            "//*[@id='city']"
          )
            .should("be.visible")
            .clear()
            .type("Angoulême");
    });
    it("false info to code", () =>{
        cy.xpath(
            "//*[@id='code']"
          )
            .should("be.visible")
            .clear()
            .type("16000");
    });

    it("false try to submit", () =>{
        cy.xpath(
            "//*[@id='root']/section/main/div/div[2]/form/div/div[10]/button"
          )
            .should("be.visible")
            .click()
    });

    it("it should check error", () =>{
        cy.xpath(
            "//*[@id='root']/section/main/div/div[2]/form/div/div[1]/div/div[2]/div[2]/div"
          )
            .should("not.not.exist")
        cy.xpath(
            "//*[@id='root']/section/main/div/div[2]/form/div/div[2]/div/div[2]/div[2]/div"
            )
            .should("not.exist")    
        cy.xpath(
            "//*[@id='root']/section/main/div/div[2]/form/div/div[3]/div/div[2]/div[2]/div"
            )
            .should("not.exist") 
        cy.xpath(
            "//*[@id='root']/section/main/div/div[2]/form/div/div[4]/div/div[2]/div[2]/div"
            )
            .should("not.exist")       
        cy.xpath(
            "//*[@id='root']/section/main/div/div[2]/form/div/div[5]/div/div[2]/div[2]/div"
            )
            .should("not.exist")   
        cy.xpath(
            "//*[@id='root']/section/main/div/div[2]/form/div/div[6]/div/div[2]/div[2]/div"
            )
            .should("not.exist")   
        cy.xpath(
            "//*[@id='root']/section/main/div/div[2]/form/div/div[8]/div/div[2]/div[2]/div"
            )
            .should("not.exist") 
        cy.xpath(
            "//*[@id='root']/section/main/div/div[2]/form/div/div[9]/div/div[2]/div[2]/div"
            )
            .should("not.exist") 
    });

});
