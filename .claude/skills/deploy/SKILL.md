Deploy the app to staging by running these steps in order. Stop and report if any step fails.

## Steps

### 1. Run tests
Run `npm test` to execute the test suite. If no test script exists, run `npm run lint` instead as a minimum quality gate.

### 2. Build production bundle
Run `npm run build`. Confirm the `dist/` directory was produced.

### 3. Push to staging
Run `npm run deploy:staging` if that script exists in package.json. Otherwise, use the appropriate deployment command for this project (e.g. a git push to a staging remote, an rsync, or a cloud CLI upload). If no staging target is configured yet, report that and list what would need to be set up.

## Reporting
After all steps complete, summarize: which steps ran, whether each passed or failed, and the final deployment status.
