const Api = require('../../src/Resources/Api');

let api = new Api();

describe('HAPPY SCENARIO: Get Patient Information Test Suite', async() => {
    
    it('Retrieve Jenn D. by using their ID.', async() => {

        const response = await api.getPatientId();

        console.log(response);

    })

    it('Retrieve patient Jack by using their name.', async() => {

        const response = await api.getPatientName();

        console.log(response);
    })

    it('Retrieve patient Jenn D by using their Date of Birth', async() => {

        const response = await api.getPatientByDob();

        console.log(response);
    })

});

describe('UNHAPPY SCENARIO: Get Patient Information Test Suite', async() => {

    it('Attempt to retrieve a patient using an invalid ID.', async() => {

        const response = await api.patientNotFound();

        console.log(response);
    })

    it('Send a request with a invalid query parameter.', async() => {

        const response = await api.invalidQ();

        console.log(response);
    })

    it('Send a request with an invalid date format.', async() => {

        const response = await api.invalidDate();

        console.log(response);
    })

});