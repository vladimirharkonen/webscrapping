exports.getWeb = async (page) =>{
  await page.goto("https://lido.fi/");

  const cardBody = page.locator('//*[@id="networks"]/div[1]/div/div[2]/div[1]/div[1]/span'
  );

  await cardBody.waitFor();

  const coinValue = await cardBody
    .textContent();
    return coinValue;
  }