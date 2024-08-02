# Performance Testing with k6 - A Starter Project

This is a simple starter project which can be cloned to start performance testing with [k6](https://k6.io/). It is
currently based on [k6 v0.52.0](https://github.com/grafana/k6/releases).

## Setup

- Install node.js on the machine -> see [here](https://nodejs.org)
- Install k6 on the machine -> see [here](https://grafana.com/docs/k6/latest/set-up/install-k6/)
- Clone this repo

## How to run

1. Build the test.ts with: `npm run build`
2. Run the protocol test with: `npm run testp`
3. Run the browser test with: `npm run testb`

## Current issues ⚠️

Check the [issues page](https://github.com/simonberner/k6-starter/issues) to get an overview over the open issues I am currently struggling with, or are in the backlog for this project.

## Test APIs

- https://test-api.k6.io/

## Testing Essentials

### Test Types

- [Load test types](https://grafana.com/docs/k6/latest/testing-guides/test-types/#load-test-types)

### Test Levels

- [Protocol-Level Testing](https://grafana.com/docs/k6/latest/using-k6/http-requests/#http-requests)
- [Browser-Level Testing](https://grafana.com/docs/k6/latest/using-k6-browser/#use-case-for-browser-testing)

### Hybrid Testing

As browser based testing with a lot of virtual users is resource-intensive, it may make sense to combine testing on the
protocol (http/backend) level and on the browser (frontend) and go with a hybrid approach.
[Here](https://grafana.com/docs/k6/latest/using-k6-browser/recommended-practices/hybrid-approach-to-performance/#hybrid-performance-with-k6-browser)
is an example how this can be achieved.

## Resources

- [Official Website](https://k6.io/)
- [Documentation](https://grafana.com/docs/k6/latest/)
- [k6 browser testing](https://grafana.com/docs/k6/latest/using-k6-browser/)
- [k6 browser options](https://grafana.com/docs/k6/latest/using-k6-browser/options/)