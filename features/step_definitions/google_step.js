// var {defineSupportCode} = require('cucumber');
//
// module.exports = function() {
//     this.Given(/^I open the Modus Create home page$/, function(callback) {
//         this
//             .url(this.launch_url)
//             .waitForElementVisible('body', 1000)
//
//
//         callback(null, 'pending');
//     })
//
//
//     this.Then(/^the title is "([^"]*)"$/, function(title, callback) {
//         this.assert.title(title);
//         callback(null, 'pending');
//     })
//
//
//     this.Then(/^the About Page link exists$/, function(callback) {
//         this.assert.elementPresent('a[href="/about"]')
//         callback(null, 'pending');
//     })
// }
//
// defineSupportCode(function ({And, But, Given, Then, When}) {
//     When(/^I hit browser$/, function (callback) {
//         callback.pending();
//     });
//     When(/^Google opens$/, function (callback) {
//         callback.pending();
//     });
//     Then(/^Search by text$/, function (callback) {
//         callback.pending();
//     });
// });


var {defineSupportCode} = require('cucumber');
const { client } = require('nightwatch-cucumber')

defineSupportCode(function ({And, But, Given, Then, When}) {
    Given(/^I open the Modus Create home page$/, function () {
        return client
            .url('http://google.com')
            .waitForElementVisible('body', 1000)
        //console.log("hello")
       // callback.pending();
    });
    And(/^the title is "Modus Create \- HTML5 Application Development & Training"$/, function (arg1, callback) {
        callback.pending();
    });
    Then(/^the About Page link exists$/, function (callback) {
        callback.pending();
    });
});