describe('get api user test', () => {
    let accessToken = '1bcbe327ff1c4085cf1874ec9445831a12bb215369061f354affdc5de2cebcc7';
    it('get users', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            headers:{
                Authorization: 'Bearer ' + accessToken
            }
        }).then((res) => {
            expect(res.status).to.eq(200);
        });
    });
    it('get user by id test', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/6990701',
            headers:{
                Authorization: 'Bearer ' + accessToken
            }
        }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.name).to.eq('Bhaasvan Khanna')
        });
    });
});