# Performance Testing with k6 - A Starter Project

This project is currently based on [k6 v0.52.0](https://github.com/grafana/k6/releases)

## Setup

- Install node.js on the machine -> see [here](https://nodejs.org)
- Install k6 on the machine -> see [here](https://grafana.com/docs/k6/latest/set-up/install-k6/)
- Clone this repo

## How to run

1. Build the test.ts with: `npm run build`
2. Run the protocol test with: `npm run testp`
3. Run the browser test with: `npm run testb`

## Test APIs

- https://test-api.k6.io/

## Testing Essentials

### Test Types

- [Load test types](https://grafana.com/docs/k6/latest/testing-guides/test-types/#load-test-types)

### Test Levels

- [Protocol-Level Testing](https://grafana.com/docs/k6/latest/using-k6/http-requests/#http-requests)
- [Browser-Level Testing](https://grafana.com/docs/k6/latest/using-k6-browser/#use-case-for-browser-testing)

## Resources

- [Official Website](https://k6.io/)
- [Documentation](https://grafana.com/docs/k6/latest/)
- [k6 browser testing](https://grafana.com/docs/k6/latest/using-k6-browser/)