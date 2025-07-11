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
                    id
                    name
                    employmentType
                    description
                    summary
                }
            }
        }

        positions {
            results {
                id
                name
                description
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
                releaseDate
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
                releaseDate
                title
                videoUrl
                thumbnail {
                    url
                    name
                }
            }
        }

        reports {
            results {
                id
                title
                status
                publishedDate
                reportFile {
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

function writeDummyData() {
    const dummy =
    {
        events: {
            results: []
        },
        blogs: {
            results: []
        },
        teamMembers: {
            results: []
        },
        jobVacancies: {
            results: []
        },
        positions: {
            results: []
        },
        youtubeVideos: {
            results: []
        },
        voxpopEpisodes: {
            results: []
        },
        podcastEpisodes: {
            results: []
        }
    };

    if (!fs.existsSync(datadir)) {
        fs.mkdirSync(datadir, { recursive: true });
    }
    fs.writeFileSync(path.join(__dirname, '../data/staticData.json'), JSON.stringify(dummy, null, 2));
}

if (process.env.GITHUB_WORKFLOW) {
    writeDummyData();
} else {
    fetchAndWriteData();
}
