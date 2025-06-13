import fs from 'fs';
import path from 'path';

const dataDir = path.join(__dirname, '../data');

async function fetchAndWriteData() {
    /*
    const query = `{
        events {
            id
            title
            date
            description
            eventDescription
        }
    }`;

    const data = await request('https://your-api/graphql', query);
    */
    const data = { random: 12 };

    // Ensure the `data` directory exists
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(path.join(__dirname, '../data/staticData.json'), JSON.stringify(data, null, 2));
}

fetchAndWriteData();
