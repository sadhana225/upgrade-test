### Test Framework Used
I have chosen WebdriverIO with Moch as my test framework and Chai as for my assertion. For more information, please refer:

### Why was this chosen
WebdriverIO is:
- Lightweight, Scalable
- Does not depend on Selenium Stand-alone app
- Is scalable for mobile native apps 
- With a possibility to mock the test data using express library from NodeJS.
WebdriverIO uses the BDD style of writing the tests:
- The test script is readable and understandable.
- Anybody with basic programming skills can easily understand and pick up this testing framework.

## Install

After installing the above
1. Run `npm i` in the console, all the dependencies are installed for your project.


## To Run the Test(NodeJS and Java 8 Runtime required)
1. Run `npm run test:api` to run the API tests
2. Run `npm run test:ui` to run the UI tests
3. Run `npm run test` to run both API and UI tests together
