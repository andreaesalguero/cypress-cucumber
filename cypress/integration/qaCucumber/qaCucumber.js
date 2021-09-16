import{ Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import QaCucumber from './qaCucumberPage'

Given ('I am a guest', () => {
    QaCucumber.visit()
})

When ('I submit my ML user', () => {
    QaCucumber.enterUSer()
})

And ('I add my country', ()=> {
    QaCucumber.addCountry()
})

Then ('I click on submit and verify the response', ()=> {
    QaCucumber.submitButton()
})