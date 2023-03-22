import { ICustomWorld } from '../support/custom-world';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I am on the Google search page', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto('https://www.google.es');
  await page.getByRole('button', { name: 'Aceptar todo' }).click();
});

When('I search for {string}', async function (this: ICustomWorld, query: string) {
  const page = this.page!;
  await page.fill('input[name="q"]', query);
  await page.keyboard.press('Enter');
  //await googlePage.search(query);
});

Then('I should see at least {int} results', async function (this: ICustomWorld, count: number) {
  //const resultCount = await googlePage.getResultsCount();
  const page = this.page!;
  const text = await page.innerText('#result-stats');
  const resultCount = parseInt(text.replace(/[^0-9]/g, ''), 10);

  expect(resultCount).toBeGreaterThanOrEqual(count);
});
