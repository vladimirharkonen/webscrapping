exports.getWeb = async (page) =>{
await page.goto("https://www.hedge.so/borrow");

const cardBody = page.locator(".mb-4.col-xl-4.col-lg-6", {
  hasText: "cUSDC",
});

await cardBody.waitFor();

const innerCol = cardBody.locator(".text-center.col", {
  hasText: "Interest",
});

const coinValue = await innerCol
  .locator(".h4.fw-bold.text-light")
  .textContent();

return coinValue;
}