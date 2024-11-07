const {test, expect} = require('@playwright/test');

 test('@playwright own method', async({page})=>{
    const Day = "16";
    const Month = "6";
    const Year = "2017"
    page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');

    //click in date picker
    await page.locator('.react-date-picker__calendar-button__icon').click();
    // double click in year icon
    await page.locator('.react-calendar__navigation__label').click();
    await page.locator('.react-calendar__navigation__label').click();
    const Year1 = await page.locator('label.react-calendar__decade-view__years__year').first().textContent();
    console.log(Math.abs(Number(Year1)-Number(Year)));
    console.log(Year1);
    if (Math.abs(Number(Year1)-Number(Year)) < 100) {
        if ((Number(Year1)-Number(Year)) > 0){
            await page.locator('.react-calendar__navigation__prev-button').click()
            await page.locator('.react-calendar__decade-view__years__year').getByText(Year).click();
        
        }
        else if ((Number(Year1)-Number(Year)) < -9){
            await page.locator('.react-calendar__navigation__next-button').click()
            await page.locator('.react-calendar__decade-view__years__year').getByText(Year).click();
        
        }
        else {
            
            await page.locator('.react-calendar__decade-view__years__year').getByText(Year).click();
        
        }
    }

    await page.locator('.react-calendar__year-view__months__month').nth(Number(Month)-1).click();
    await page.locator('button.react-calendar__month-view__days__day').getByText(Day).click();

 })