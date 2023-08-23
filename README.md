# CRISP_2023
CRISP API Assesment

Steps to Run Test

1. Clone the Repository

2. Install Node.js and npm

3. Install Project dependencies

4. To run test run "npm run test" (This command will execute the test suite located in the "test" directory)

5. Results will be displayed in the terminal

** If you want to run each test individually add .only after "it" block
    - ex. 
    
    it.only('Retrieve Jenn D. by using their ID.', async() => {

        const response = await api.getPatientId();

        console.log(response);

    })