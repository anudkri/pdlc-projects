module.exports = {
  use: {
    headless: true,
    baseURL: 'https://noteease.app',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
      }
    },
    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
      }
    },
    {
      name: 'webkit',
      use: {
        browserName: 'webkit',
      }
    }
  ],
  testDir: 'tests',
  retries: 2
};