import { GraphQLClient, gql } from 'graphql-request';
import fs from 'fs';
import path from 'path';

const datadir = path.join(__dirname, '../data');
const GRAPHQL_ENDPOINT = process.env.APP_GRAPHQL_ENDPOINT || 'http://localhost:8000/graphql/';
const pipelineType = process.env.PIPELINE_TYPE;

const client = new GraphQLClient(GRAPHQL_ENDPOINT);

const dummyData = {
    events: {
        results: [],
    },
    blogs: {
        results: [],
    },
    news: {
        results: [],
    },
    galleries:{
        results: [],
    },
    galleryItems:{
        results: [],
    },
    artWorks:{
        results: [],
    },
    teamMembers: {
        results: [],
    },
    jobVacancies: {
        results: [],
    },
    positions: {
        results: [],
    },
    youtubeVideos: {
        results: [],
    },
    voxpopEpisodes: {
        results: [],
    },
    changemakers: {
        results: [],
    },
    podcastEpisodes: {
        results: [],
    },
    reports:{
        results: [],
    },
};

const query = gql`
    query AllData {
        events(pagination: { limit: 10000 }) {
            results {
                id
                name
                description
                location
                startDate
                endDate
                thumbnail {
                    url
                    name
                }
            }
        }

        blogs(pagination: { limit: 10000 }) {
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

        changemakers(pagination: { limit: 10000 }) {
            results {
                description
                facebookLink
                id
                instagramLink
                isArchived
                linkdinLink
                websiteLink
                name
                logo {
                    name
                    size
                    url
                }
            }
        }

        news(pagination: { limit: 10000 }) {
            results {
                id
                title
                publishedDate
                coverImage {
                    url
                    name
                }
                description
                slug
            }
        }

        galleries(pagination: { limit: 10000 }) {
            results {
                description
                id
                isArchived
                name
            }
        }

        galleryItems(pagination: { limit: 10000 }) {
            results {
                caption
                id
                image {
                    name
                    url
                }
                gallery {
                    id
                    name
                    description
                }
                isArchived
            }
        }

        artWorks(pagination: { limit: 10000 }) {
            results {
                id
                image {
                    url
                    name
                }
                name
            }
        }

        teamMembers(pagination: { limit: 10000 }) {
            results {
                id
                firstName
                middleName
                lastName
                designation
                memberType
                bio
                memberOrder
                instagramLink
                linkedinLink
                memberPhoto {
                    url
                    name
                }
            }
        }

        jobVacancies(pagination: { limit: 10000 }) {
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

        positions(pagination: { limit: 10000 }) {
            results {
                id
                name
                description
                summary
            }
        }

        youtubeVideos(pagination: { limit: 10000 }) {
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

        voxpopEpisodes(pagination: { limit: 10000 }) {
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

        podcastEpisodes(pagination: { limit: 10000 }) {
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

        reports(pagination: { limit: 10000 }) {
            results {
                id
                title
                status
                publishedDate
                coverImage {
                    url
                    name
                }
                reportFile {
                    url
                    name
                }
            }
        }
    }
`;

async function fetchAndWriteData() {
    console.log('Fetching data from GraphQL endpoint from ', GRAPHQL_ENDPOINT);

    let data = {};
    if (pipelineType === 'ci') {
        data = dummyData;
    } else if (pipelineType === 'cd') {
        data = await client.request(query);
    } else {
        // fallback to local dev behavior
        data = await client.request(query);
    }

    // ensure the `data` directory exists
    if (!fs.existsSync(datadir)) {
        fs.mkdirSync(datadir, { recursive: true });
    }
    const outputPath = path.join(__dirname, '../data/staticData.json');
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    console.log(`Data written to ${outputPath}`);
    console.log(`Top-level keys: ${Object.keys(data ?? {}).join(', ')}`);
}

fetchAndWriteData();
