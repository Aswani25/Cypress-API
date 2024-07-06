describe('', () => {
    let accessToken =
        "1bcbe327ff1c4085cf1874ec9445831a12bb215369061f354affdc5de2cebcc7";
    let randomText = "";
    let testEmail = "";
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
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: "Bearer " + accessToken,
            },
            body: {
                name: "Bhaasvan Khanna",
                gender: "male",
                email: testEmail,
                status: "active",
            }
        }).then((res) => {
            cy.log(JSON.stringify(res));
            expect(res.status).to.eq(201);
            expect(res.body).has.property("name", "Bhaasvan Khanna");
            expect(res.body).has.property("gender", "male");
            expect(res.body).has.property("email", testEmail);
            expect(res.body).has.property("status", "active");

            const userId = res.body.id; //Store the ID of the created user
            cy.log("User ID: " + userId);
            //Perform further actions with the user ID, if needed

            // update user (PUT)
            cy.request({
                method: "PUT",
                url: `https://gorest.co.in/public/v2/users/${userId}`,
                headers: {
                    Authorization: "Bearer " + accessToken,
                },
                body: {
                    name: "Bhaasvan Khanna Test",
                    gender: "male",
                    email: testEmail,
                    status: "inactive",
                }
            }).then((res) => {
                cy.log(JSON.stringify(res));
                expect(res.status).to.eq(200);
                expect(res.body).has.property("name", "Bhaasvan Khanna Test");
                expect(res.body).has.property("gender", "male");
                expect(res.body).has.property("email", testEmail);
                expect(res.body).has.property("status", "inactive");
            }).then((res) => {
                // Get user (GET)
                cy.request({
                    method: "GET",
                    url: `https://gorest.co.in/public/v2/users/${userId}`,
                    headers: {
                        Authorization: "Bearer " + accessToken,
                    }
                }).then((res) => {
                    cy.log(JSON.stringify(res));
                    expect(res.status).to.eq(200);
                    expect(res.body).has.property("name", "Bhaasvan Khanna Test");
                    expect(res.body).has.property("gender", "male");
                    expect(res.body).has.property("email", testEmail);
                    expect(res.body).has.property("status", "inactive");
                })
            })
        });
    });
});
