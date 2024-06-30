describe('get api user test', () => {
    it('get users', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public-api/users',
            headers:{
                Authorization: 'Bearer 9f2ac5962fe57ddcb885af09b96c846c2d165ddb6cb2cebba61e91aa98400bc7'
            }
        }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.meta.pagination.limit).to.eq(10)
        });
    });
});