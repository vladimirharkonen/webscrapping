exports.getWeb = async (page) =>{
    await page.goto("https://www.socean.fi/en/");

const body = page.locator(".chakra-ui-dark");
await body.click()

for(let i = 0; i < 20; i++){
  await page.keyboard.down('PageDown');
  await page.waitForTimeout(50);
}

const cardBody = page.locator(
  ".chakra-stack", 
  {
    has: page.locator(
      "p.chakra-text", 
      {
        hasText: "Socean's APY"
      }
    )
  }
);

const count = await cardBody.count();

await cardBody.nth(count-1).waitFor();

const innerCol = cardBody.locator(".chakra-text", {
  hasText: "%",
});

const coinValue = await innerCol.nth(0)
  .textContent();
  return coinValue;
}