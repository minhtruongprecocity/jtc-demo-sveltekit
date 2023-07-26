import { SiteClient } from 'datocms-client';
import fs from 'fs';

const client = new SiteClient('api-key');
const dataFilePath = './mock_companies.json';

async function importCompanies(companies) {
	for (let company of companies) {
		await client.items.create({
			...company,
			itemType: '2092482'
		});
	}
}

// Read the file asynchronously.
fs.readFile(dataFilePath, (err, data) => {
	// Check for errors.
	if (err) {
		console.log(err);
		return;
	}

	// Parse the JSON data.
	const jsonData = JSON.parse(data);

	importCompanies(jsonData);
});
