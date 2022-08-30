exports.getWeb = async (page) =>{
    await page.goto("https://friktion.fi/income");

for(let i = 0; i < 1; i++){
  await page.keyboard.down('PageDown');
  await page.waitForTimeout(50);
}
await page.waitForTimeout(3000); 

const cardBody = page.locator("div.Card09", {
  hasText: "scnSOL",
});

await cardBody.waitFor();

const innerCol = cardBody.locator("span.colorSpan",);

const coinValue = await innerCol.nth(0)
  .textContent();
  return coinValue;
}
