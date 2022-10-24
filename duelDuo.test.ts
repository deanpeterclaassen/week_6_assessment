
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})
test('Draw button displays the choices div', async () =>{
    const draw = await driver.findElement(By.id('draw'))

    await driver.sleep(2000)
    await draw.click()
    const choices = await driver.findElement(By.id('choices'))
    const choicesDisplayed = await choices.isDisplayed()
    expect(choicesDisplayed).toBe(true)

})

test('Add to duo button displays player duo', async () =>{
    const draw = await driver.findElement(By.id('draw'))

    await driver.sleep(2000)
    await draw.click()
    const add = await driver.findElement(By.className('bot-btn'))
    await add.click()
    const addDiv = await driver.findElement(By.id('player-duo'))
    const duoDisplayed = await addDiv.isDisplayed()
    expect(duoDisplayed).toBe(true)

})
