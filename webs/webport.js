exports.getWeb = async (page) =>{
 await page.goto("https://mainnet.port.finance/#/lendingMarket/HUYp9prDMdnQMfBYp9KQANTqCHW3R7fzQfjm89eeRpft/markets");

  await page.waitForTimeout(1000);
  const cardBody = page.locator("tr.port-design-table-row", { hasText: "USH"});

  await cardBody.waitFor();

  const innerCol = cardBody.locator("td").nth(2);

  const coinValue = await innerCol
    .locator("span").textContent();

    return coinValue;
}
