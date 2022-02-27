describe('Authentication Test', function()){

    it('POST', function()){
        cy.request({
            method: 'POST',
            url: 'localhost:3000/api/refresh_token',
        }).then(function(response)){
            expect(response.body).have.property('url');
        }

    }
}