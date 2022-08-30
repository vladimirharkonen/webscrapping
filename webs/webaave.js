exports.getWeb = async (page) =>{
    await page.goto("https://app.aave.com/markets/");

  const cardBody = page.locator(
    "div[data-cy='marketListItemListItem_USDC'] > .MuiBox-root:nth-child(3)"
  );

  await cardBody.waitFor();

  const coinValue = await cardBody
    .locator(".MuiBox-root > p.MuiTypography-root")
    .textContent();
    return coinValue;
}

