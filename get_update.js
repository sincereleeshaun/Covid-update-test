const Apify = require('apify');

// Set API token
Apify.client.setOptions({ token: '<YOUR_API_TOKEN>' });

// Prepare actor input
const input = {};

// Run the actor
const run = await Apify.call('tugkan/covid-sg', input);

// Print actor output (if any)
console.log('Output');
console.dir(run.output);

// Fetch and print actor results from the run's dataset (if any)
console.log('Results from dataset');
const dataset = await Apify.openDataset(run.defaultDatasetId);
await dataset.forEach(async (item, index) => {
    console.log(JSON.stringify(item));
});