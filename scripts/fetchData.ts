import { GraphQLClient, gql } from 'graphql-request';
import fs from 'fs';
import path from 'path';

const datadir = path.join(__dirname, '../data');
const GRAPHQL_ENDPOINT = process.env.APP_GRAPHQL_ENDPOINT || 'http://localhost:8000/graphql/';


const client = new GraphQLClient(GRAPHQL_ENDPOINT);

const query = gql`
    query AllData {
        events {
            results {
                id
                name
                description
                location
                startDate
                endDate
            }
        }

        blogs {
            results {
                id
                title
                publishedDate
                featured
                content
                author {
                    id
                    name
                    image {
                        url
                        name
                    }
                }
                coverImage {
                    url
                    name
                }
            }
        }

        teamMembers {
            results {
                id
                firstName
                middleName
                lastName
                designation
                memberType
                memberPhoto {
                    url
                    name
                }
            }
        }

        jobVacancies {
            results {
                id
                numberOfVacancies
                deadline
                description
                position {
                    pk
                }
            }
        }

        positions {
            results {
                id
                name
                summary
            }
        }

        youtubeVideos {
            results {
                id
                videoUrl
                releaseDate
                title
                thumbnail {
                    url
                    name
                }
            }
        }

        voxpopEpisodes {
            results {
                id
                episodeNumber
                title
                videoUrl
                thumbnail {
                    url
                    name
                }
            }
        }
        podcastEpisodes {
            results {
                id
                episodeNumber
                title
                videoUrl
                thumbnail {
                    url
                    name
                }
            }
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
