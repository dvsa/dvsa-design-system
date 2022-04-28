async function setupPage (emulate) {
  let page = await global.browser.newPage()

  if (emulate) {
    await page.emulate(emulate)
  }

  // Capture JavaScript errors.
  page.on('pageerror', error => {
    throw error
  })

  return page
}

module.exports = {
  setupPage
}
