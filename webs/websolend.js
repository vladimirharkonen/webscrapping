exports.getWeb = async (page) =>{
    await page.goto("https://solend.fi/dashboard");

    const cardBody = page.locator(".ant-table-row[data-row-key='USDC']");
  
    await cardBody.waitFor();
  
    const innerCol = cardBody.locator("td").nth(5);
  
    const coinValue = await innerCol
      .locator("span[class*='Typography_primary']").textContent();
  
    const coinValue2 = await innerCol
      .locator("span[class*='Typography_secondary'] > span").textContent();
  
    const coinvaluefinal = (parseFloat(coinValue) - parseFloat(coinValue2)).toFixed(2);
  
    return coinvaluefinal+"%";
}