exports.getWeb = async (page) =>{
    await page.goto("https://vires.finance/");

  const cardBody = page.locator("tr.row.main" , {
    hasText: "USD Coin",
  });

  await cardBody.waitFor();

  const innerCol = cardBody.locator("td.cell.total.apy");

  const coinValue = await innerCol
    .locator("div").nth(0)
    .textContent();
    return coinValue;
}