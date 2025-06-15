import { GraphQLClient, gql } from 'graphql-request';
import fs from 'fs';
import path from 'path';

const datadir = path.join(__dirname, '../data');
const GRAPHQL_ENDPOINT = process.env.APP_GRAPHQL_ENDPOINT || 'http://localhost:8000/graphql/';


const client = new GraphQLClient(GRAPHQL_ENDPOINT);

const query = gql`
query Events {
    events {
        results {
            startDate
            name
            location
            id
            endDate
            description
        }
        totalCount
    }
}
`;


async function fetchAndWriteData() {
    const data = await client.request(query);

    // ensure the `data` directory exists
    if (!fs.existsSync(datadir)) {
        fs.mkdirSync(datadir, { recursive: true });
    }
    fs.writeFileSync(path.join(__dirname, '../data/staticData.json'), JSON.stringify(data, null, 2));
}

fetchAndWriteData();
