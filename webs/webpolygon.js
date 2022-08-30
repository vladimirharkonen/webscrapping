exports.getWeb = async (page) =>{
await page.goto("https://polygon.staderlabs.com/liquid-staking/maticx");

const cardBody = page.locator(
  '//*[@id="__next"]/div/div[3]/div/div/div/div[2]/div[3]/p'
    );

await cardBody.waitFor();

const coinValue = await cardBody
  .textContent();
  finalcoinValue = coinValue.slice(0, 4)+"%";
  return finalcoinValue;
}