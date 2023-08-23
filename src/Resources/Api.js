
const request = require('request-promise');

class Api {

    constructor() {
        this.host = 'https://apimgmt-dev-crisp.azure-api.net';
        this.request = request.defaults({
            headers: {
                'User-Agent': 'PostmanRuntime/7.32.2',
                'Content-Type': 'application/json'
            },
            json: true,
        });
    }


    getPatientId() {
        const path = '/patients/query/?Id=111';
        return this.request.get({
            url: `${this.host}${path}`
        });
    }

    getPatientName() {
        const path = '/patients/query/?Name=Jack';
        return this.request.get({
            url: `${this.host}${path}`
        });
    }

    getPatientByDob() {
        const path = '/patients/query/?DateOfBirth=1934-06-01';
        return this.request.get({
            url: `${this.host}${path}`
        });
    }

    patientNotFound() {
        const path = '/patients/query/?Id=999';
        return this.request.get({
            url: `${this.host}${path}`
        });
    }

    invalidQ() {
        const path = '/patients/query/?InvalidParam=123';
        return this.request.get({
            url: `${this.host}${path}`
        });
    }

    invalidDate() {
        const path = '/patients/query/?DateOfBirth=03-01-2000';
        return this.request.get({
            url: `${this.host}${path}`
        });
    }





} module.exports = Api;