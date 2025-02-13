//Using fixture file
const dataJson = require("../../fixtures/createUsers.json");

describe("Post user Request", () => {
    //This test case is having hardcoded values which may fails
    let accessToken =
        "1bcbe327ff1c4085cf1874ec9445831a12bb215369061f354affdc5de2cebcc7";
    let randomText = "";
    let testEmail = "";
    it.skip("Craete user Test", () => {
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v1/users",
            headers: {
                Authorization: "Bearer " + accessToken,
            },
            body: {
                name: "Bhaasvan Khanna",
                gender: "male",
                email: "cypresstesting3@gmail.com",
                status: "active",
            },
        }).then((res) => {
            cy.log(JSON.stringify(res));
            expect(res.status).to.eq(201);
            expect(res.body.data).has.property("name", "Bhaasvan Khanna");
            expect(res.body.data).has.property("gender", "male");
            expect(res.body.data).has.property("email", "cypresstesting3@gmail.com");
            expect(res.body.data).has.property("status", "active");
            // expect(res.body.name).to.eq('Bhaasvan Khanna');
        });
    });
    it.skip("Craete user Test using random email", () => {
        //This test case is having dynamic values which will pass always
        var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 10; i++) {
            randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
            testEmail = randomText + "@gmail.com";
        }
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v1/users",
            headers: {
                Authorization: "Bearer " + accessToken,
            },
            body: {
                name: "Bhaasvan Khanna",
                gender: "male",
                email: testEmail,
                status: "active",
            },
        }).then((res) => {
            cy.log(JSON.stringify(res));
            expect(res.status).to.eq(201);
            expect(res.body.data).has.property("name", "Bhaasvan Khanna");
            expect(res.body.data).has.property("gender", "male");
            expect(res.body.data).has.property("email", testEmail);
            expect(res.body.data).has.property("status", "active");
            // expect(res.body.name).to.eq('Bhaasvan Khanna');
        });
    });
    it.skip("Craete user Test using fixture file", () => {
        //This test case is having hardcoded values on fixture file which may fails
        var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 10; i++) {
            randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
            testEmail = randomText + "@gmail.com";
        }
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v1/users",
            headers: {
                Authorization: "Bearer " + accessToken,
            },
            body: {
                name: dataJson.name,
                gender: dataJson.gender,
                email: dataJson.email,
                status: dataJson.status,
            },
        }).then((res) => {
            cy.log(JSON.stringify(res));
            expect(res.status).to.eq(201);
            expect(res.body.data).has.property("name", dataJson.name);
            expect(res.body.data).has.property("gender", dataJson.gender);
            expect(res.body.data).has.property("email", dataJson.email);
            expect(res.body.data).has.property("status", dataJson.status);
            // expect(res.body.name).to.eq(dataJson.name);
        });
    });
    it("Craete user Test using random email with chaining concept", () => {
        //This test case is having dynamic values which will pass always
        var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 10; i++) {
            randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
            testEmail = randomText + "@gmail.com";
        }
        // Create User (POST)
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v1/users",
            headers: {
                Authorization: "Bearer " + accessToken,
            },
            body: {
                name: "Bhaasvan Khanna",
                gender: "male",
                email: testEmail,
                status: "active",
            },
        }).then((res) => {
            cy.log(JSON.stringify(res));
            expect(res.status).to.eq(201);
            expect(res.body.data).has.property("name", "Bhaasvan Khanna");
            expect(res.body.data).has.property("gender", "male");
            expect(res.body.data).has.property("email", testEmail);
            expect(res.body.data).has.property("status", "active");
            
            const userId = res.body.data.id; //Store the ID of the created user
            cy.log("User ID: " + userId);
            //Perform further actions with the user ID, if needed

            // Get user (GET)
            cy.request({
                method: "GET",
                url: `https://gorest.co.in/public/v1/users/${userId}`,
                headers: {
                    Authorization: "Bearer " + accessToken,
                },
            }).then((res) => {
                cy.log(JSON.stringify(res));
                expect(res.status).to.eq(200);
            });
        });
    });
});
