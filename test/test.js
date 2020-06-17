//import {assert} from 'chai';

// describe('Test Progress Monitor first page', () => {
//
//     it('should have the right title', () => {
//         browser.url('https://likejean.github.io/homework-5/');
//         const actualTitle = browser.getTitle();
//         const expectedTitle = 'Complex Counter App';
//         //expect(actualTitle).toEqual(expectedTitle);
//         assert.equal(actualTitle,expectedTitle);
//     });
//     it('should have the header is present',function () {
//     $('h1').isDisplayed()
//     } )
//     it('should Header says Counter', function () {
//         const el = $('.header').getText();
//     });
//     it('should Have total result', function () {
//         $('h3').isDisplayed();
//     });
//     it('should total result', function () {
//         const totalText = $('h3').getText();
//         assert.equal(totalText,'Total: 0',)
//     });
//     it("Counter Name is Present", function () {
//         $('[data-testid="counter-name-input"]')
//     });
//
//     it("Enter Counter Title text", function () {
//     const labelArr = $$('label');
//     const labelArr1 = labelArr[1].getText();
//         labelArr[1].isDisplayed();
//         expect(labelArr1).toEqual("Enter Counter Title:");
//     });
//     it('Should display text Counter Name in add name field', function () {
//         $('[name="name"]').isDisplayed();
//         $('[name="name"]').isClickable();
//         const addName = $('[name="name"]').getValue();
//         assert.equal(addName, "Counter Name");
//     })
//     it('Should display and click new counter default value field', function () {
//         $('[data-testid="counter-value-input"]').isDisplayed();
//         $('[data-testid="counter-value-input"]').isClickable();
//
//     });
// }); 
// describe('register button ', () => {
//     it('should click on register button', function () {
//         browser.url('https://stage.pasv.us/')
//         $('[qa="register-link"]').click()
//
//     });
//     describe('register button ', () => {
//         it('should click on register button', function () {
//             browser.url('https://stage.pasv.us/')
//             $('[qa="register-link"]').click()
//             $('[name="firstName"]').click()
//             $('[name="firstName"]').setValue('garry')
//
//         });
//
//
//     });

    // describe('verify that user can register on PASV', () => {
    //     it('should click on register button', function () {
    //         browser.url('https://stage.pasv.us/')
    //       $('[qa="register-link"]').click();
    //         $('[name="firstName"]').click();
    //         $('[name="firstName"]').setValue('Dmitry');
    //         $('[name="lastName"]').click();
    //         $('[name="lastName"]').setValue('Chuprys');
    //         $('[name="email"]').click();
    //         $('[name="email"]').setValue('chuprysd@yahoo.com');
    //         $('[name="password"]').click();
    //         $('[name="password"]').setValue('Qwerty')
    //         $('[type="submit"]').click();
    //         //$('[qa="login-link"]').click();
    //        //$('[class="notification-title"]').getText();
    //        // $('[class="invalid-feedback w-auto ml-2"]').isDisplayed();
    //         const element =  $('[class="notification-title"]');
    //         const text = element.getText();
    //         const expected = 'User with this e-mail existsss';
    //         expect(text).toEqual(expected);
    //         //browser.pause(5000);
    //
    //
    //         browser.pause(5000)
    //     });
    // });

import {assert} from 'chai';
const expect = require('chai').expect;
describe('Test Complex Counter. General', () => {
    it('should have the right title', () => {
        browser.url('https://likejean.github.io/homework-5/');
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Complex Counter App';
        //expect(actualTitle).toEqual(expectedTitle);
        assert.equal(actualTitle,expectedTitle);
    });
    it(' Verify  that the header is present', ()=> {
        const header = $('[class="header"]').isDisplayed()
        expect(header).equal(true)
    })
    it('verify that the header says counters', ()=> {
        const headerText = $('.header').getText();
        assert.equal('Counters',headerText);
    });
    it('verify that total result is present', function () {
        const totalRes =  $('h3').isDisplayed();
        expect(totalRes).equal(true)
    });
    it('verify total result says Total: ', function () {
        const totalText = $('h3').getText();
        assert.equal('Total: 0' ,totalText );
    });
    it('verify that Enter Counter Title is present', function () {
        const totalCounterTitle =  $('[name="name"]').isDisplayed()
        expect(totalCounterTitle).equal(true)
    });
    it('verify that the Enter Counter Title text is Enter Counter Title:', function () {
        const labelArr = $$('label');
        const labelArr1 = labelArr[1].getText()
        labelArr[1].isDisplayed()
        expect(labelArr1).equal('Enter Counter Title:')
    });
    it('verify that the Add Name Field button text is "Counter Name" ', function () {
        const addNameText = $('[name="name"]').getValue();
        $('[name="name"]').isDisplayed();
        assert.equal(addNameText, 'Counter Name')
    });
    it('verify that the New Counter Default Value Field is present ', function () {
        const defaultValue = $('[data-testid="counter-value-input"]').isDisplayed();
        expect(defaultValue).equal(true)
    });
    it('verify that Enter Initial Count text = 50 by default', function () {
        const enterInitialCount =  $$('label')[2].isDisplayed();
        expect(enterInitialCount).equal(true)
    });
    it('verify that Enter Initial Count text = 50 by default', function () {
        const textField = $('[name="value"]').getValue()
        assert.equal(textField,'50')
    });
    it('should display text Enter Initial Count', function () {
        const labelArr = $$('label');
        const labelArr2 = labelArr[2].getText();
        assert.equal(labelArr2 , 'Enter Initial Count:');
    });
    it('verify that the Add Counter Button is present ', function () {
        const addCounterButton = $(".btn-success.btn").isDisplayed()
        expect(addCounterButton).equal(true)
    });
    it('verify that Add Count Button Text ia "Add Counter" ', function () {
        const addCountButton = $(".btn-success.btn").getText()
        expect(addCountButton).equal('ADD COUNTER')
    });
    it('Verify that the LF1 is present', function () { 
        const lF1 = $$('.btn-info.btn-outline-info.btn.Ripple-parent')[0].getText() 
        expect(lF1).equal('CHANGE STEP OPTIONS?'); 
    }); 
    it('Verify that the LF1 is present', function () { 
        $$('.btn-info.btn-outline-info.btn.Ripple-parent')[0].click() 
        const lF1 = $('[name="lower"]').getValue() 
        expect(lF1).equal('1'); 
    });
    it('Verify that LF1 is present', function () {
        const limitField1 = $$('.btn-info.btn-outline-info.btn.Ripple-parent')[0].isDisplayed();
        expect(limitField1).equal(true);
    });
     it('Verify that LF2 is present', function () {

        browser.url('https://likejean.github.io/homework-5/');
        const limitField2 = $$('.btn-info.btn-outline-info.btn.Ripple-parent')[1].isDisplayed();
        expect(limitField2).equal(true);
    });
    it('Verify that if default counter is deleted, the user  will see  Total: 0, Header \'Counters\',' +
        ' \'\'ADD COUNTER button\'\' and two fields : \'\'Add Name Field\'\' and "Default Value Field" ', function () {
        browser.url('https://likejean.github.io/homework-5/');
        $('.btn-danger.btn.Ripple-parent.delete').click()
        const total = $('[class="total-count"]').getText()
        const counters = $('[class="header"]').getText()
        expect($('[class="btn-success btn Ripple-parent add col-6"]').isDisplayed()).true
        expect($$('label')[0].isDisplayed()).true
        expect($$('label')[1].isDisplayed()).true
        expect(total).equal('Total: 0');
        expect(counters).equal('Counters')
    });
    it('Verify that user can delete text (counter name) "Default counter" from Edit counter title  ', function () {
        browser.refresh()
        const nameEdit = $('[name="edit"]')
        nameEdit.clearValue()
        nameEdit.setValue(' ')
        const defCounter = $$('h3')[1].getText()
        expect(defCounter).equal('1.')
    });
    // it('should ', function () {
    //     browser.url('')
    //     let stepArr = [];
    //     const arrBut = $$('//*[@id="root"]/div/div/div[1]/div[2]/button[@step]').length;
    //     for(let i = 0; i < arrBut; i++)
    //     {
    //         stepArr.push($$('//*[@id="root"]/div/div/div[1]/div[2]/button[@step]')[i].getAttribute('step'));
    //     }
    //     const disBut = stepArr.filter(el => el.includes('-')).length;
    //     const incBut = stepArr.filter(el => !el.includes('-')).length;
    //     expect(arrBut).eq(6);
    //     expect(disBut).eq(incBut);
    // });

    it('"Verify that user can ADD second counter by default.\n' +
        'Preconditions:\n' +
        '1. 1. Default Counter -> Count Value 0 TOTAL: 0\n' +
        '2. Enter Counter Title ->  \'Counter Name\', Initial Count -> 50 (by default)\n' +
        '3. Click ADD COUNTER\n' +
        'Expected Result:  2 counters ot the page TOTAL: 50;\n' +
        '                              New counter appears with name \'2. Counter Name\'\n' +
        '                              Count Value 50\n' +
        '                              Other fields on the default state" ', function () {
        browser.url('https://likejean.github.io/homework-5/')
    });
    it('"Verify that user can ADD second counter by default.\n' +
        'Preconditions:\n' +
        '1. 1. Default Counter -> Count Value 0 TOTAL: 0\n' +
        '2. Enter Counter Title ->  \'Counter Name\', Initial Count -> 50 (by default)\n' +
        '3. Click ADD COUNTER\n' +
        'Expected Result:  2 counters ot the page TOTAL: 50;\n' +
        '                              New counter appears with name \'2. Counter Name\'\n' +
        '                              Count Value 50\n' +
        '                              Other fields on the default state" ', function () {
        browser.url('https://likejean.github.io/homework-5/');
        $$('[class="btn-black btn Ripple-parent"]')[1].click();
        browser.pause(1000);
        $$('[class="btn-black btn Ripple-parent"]')[5].click();
        const countValue = $('[class="badge primary badge-primary"]').getText();
        const total = $('[class="total-count"]').getText().match( /\d+/g)[0];
        expect(countValue).equal(total);


    });
    it('should ', function () {
        browser.url('https://likejean.github.io/homework-5/');
        $('[class="btn-success btn Ripple-parent add col-6"]').click();
        $$('[class="btn-black btn Ripple-parent"]')[2].click();
        const counterFirst = $$('[class="badge primary badge-primary"]')[0].getText();
        const counterSecond = $$('[class="badge primary badge-primary"]')[1].getText();
        const sumOfCounters = +counterFirst + +counterSecond;
        const total = +$('[class="total-count"]').getText().match(/\d+/g)[0];
        expect(total).eq(sumOfCounters);
    });


});