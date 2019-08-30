//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
global.expect = chai.expect;
chai.Should();
chai.use(chaiHttp);

const stateJson = {  'states' : [ { 'label' : 'Alabama', 'abbreviation' : 'AL', 'minLoanAmount' : 1000.00, 'minAge' : 19  }, { 'label' : 'Alaska', 'abbreviation' : 'AK', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Arizona', 'abbreviation' : 'AZ', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Arkansas', 'abbreviation' : 'AR', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'California', 'abbreviation' : 'CA', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Connecticut', 'abbreviation' : 'CT', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Delaware', 'abbreviation' : 'DE', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'District of Columbia', 'abbreviation' : 'DC', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Florida', 'abbreviation' : 'FL', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Georgia', 'abbreviation' : 'GA', 'minLoanAmount' : 3005.00, 'minAge' : 18  }, { 'label' : 'Hawaii', 'abbreviation' : 'HI', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Idaho', 'abbreviation' : 'ID', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Illinois', 'abbreviation' : 'IL', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Indiana', 'abbreviation' : 'IN', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Kansas', 'abbreviation' : 'KS', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Kentucky', 'abbreviation' : 'KY', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Louisiana', 'abbreviation' : 'LA', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Maine', 'abbreviation' : 'ME', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Maryland', 'abbreviation' : 'MD', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Massachusetts', 'abbreviation' : 'MA', 'minLoanAmount' : 6400.00, 'minAge' : 18  }, { 'label' : 'Michigan', 'abbreviation' : 'MI', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Minnesota', 'abbreviation' : 'MN', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Mississippi', 'abbreviation' : 'MS', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Missouri', 'abbreviation' : 'MO', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Montana', 'abbreviation' : 'MT', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Nebraska', 'abbreviation' : 'NE', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Nevada', 'abbreviation' : 'NV', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'New Hampshire', 'abbreviation' : 'NH', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'New Jersey', 'abbreviation' : 'NJ', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'New Mexico', 'abbreviation' : 'NM', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'New York', 'abbreviation' : 'NY', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'North Carolina', 'abbreviation' : 'NC', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'North Dakota', 'abbreviation' : 'ND', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Ohio', 'abbreviation' : 'OH', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Oklahoma', 'abbreviation' : 'OK', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Oregon', 'abbreviation' : 'OR', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Pennsylvania', 'abbreviation' : 'PA', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Rhode Island', 'abbreviation' : 'RI', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'South Carolina', 'abbreviation' : 'SC', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'South Dakota', 'abbreviation' : 'SD', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Tennessee', 'abbreviation' : 'TN', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Texas', 'abbreviation' : 'TX', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Utah', 'abbreviation' : 'UT', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Vermont', 'abbreviation' : 'VT', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Virginia', 'abbreviation' : 'VA', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Washington', 'abbreviation' : 'WA', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Wisconsin', 'abbreviation' : 'WI', 'minLoanAmount' : 1000.00, 'minAge' : 18  }, { 'label' : 'Wyoming', 'abbreviation' : 'WY', 'minLoanAmount' : 1000.00, 'minAge' : 18  } ]};

//Our parent block
describe('Functioanl API Test for /:states endpoint', () => {
    describe('Validate when all states are fetched', () => {
        it('should return status code 200', (done) => {
            chai.request('https://credapi.credify.tech/api/loanapp/v1/states')
            .get('/')
            .set('Accept','application/json')
            .query(stateJson)
            .then(function(res){
                res.should.have.status(200);
            });
            done()
        });
        it('should return valid state names', (done) => {
            chai.request('https://credapi.credify.tech/api/loanapp/v1/states')
            .get('/')
            .set('Accept','application/json')
            .query(stateJson)
            .then(function(res){
                expect(res.body).to.deep.equal(stateJson);
            });
            done()
        });
        it('should contain 48 states', (done) => {
            chai.request('https://credapi.credify.tech/api/loanapp/v1/states')
            .get('/')
            .set('Accept','application/json')
            .query(stateJson)
            .then(function(res){
                expect(res.body.states).to.have.lengthOf(48);
            });
            done()
        });
    });
    describe('Validate only one state has a min age of 19', () => {
        it('should return only one state', (done) => {
            chai.request('https://credapi.credify.tech/api/loanapp/v1/states')
            .get('')
            .set('Accept','application/json')
            .query(stateJson)
            .then(function(res){
                res.body.states.forEach(function(obj) {
                    if(obj.minAge == 19) {
                        console.log('State with max minAge:' , obj);
                        expect([obj]).to.have.lengthOf(1);
                        expect(obj).to.deep.equal({
                            label : 'Alabama',
                            abbreviation: 'AL',
                            minLoanAmount: 1000.00,
                            minAge: 19
                    });
                    }
                });
            });
            done()
        });
    });
    describe('Validate that Georgia is the only state with min loan amount requirement of $3,005', () => {
        it('should return only one state', (done) => {
            chai.request('https://credapi.credify.tech/api/loanapp/v1/states')
            .get('')
            .set('Accept','application/json')
            .query(stateJson)
            .then(function(res){
                res.body.states.forEach(function(obj) {
                    if(obj.minLoanAmount == 3005) {
                        console.log('State with min loan amount requirement:' , obj);
                        expect([obj]).to.have.lengthOf(1);
                        expect(obj).to.deep.equal({
                            label : 'Georgia',
                            abbreviation: 'GA',
                            minLoanAmount: 3005.00,
                            minAge: 18
                    });
                    }
                });
            });
            done()
        });
    });
});