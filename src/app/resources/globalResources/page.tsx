'use client';

import { useState } from 'react';
import {
    IoDocumentTextOutline,
    IoSearchOutline,
} from 'react-icons/io5';

import Banner from '#components/Banner';
import Button from '#components/Button';
import Heading from '#components/Heading';
import Page from '#components/Page';
import SearchInput from '#components/SearchInput';
import Section from '#components/Section';

import styles from './page.module.css';

// dummy data
const researchLinks = [
    {
        url: 'https://www.researchgate.net/publication/283555271_The_State_of_Statelessness_Research_A_Human_Rights_Imperative',
        title: 'The State of Statelessness Research',
    },
    {
        url: 'https://www.onlinelibrary.iihl.org/wp-content/uploads/2020/05/Statelessness-protection-and-equality.pdf',
        title: 'Statelessness Protection and Equality',
    },
    {
        url: 'https://example.com/research-paper.pdf',
        title: 'Sample Research Paper',
    },
];

export default function Reports() {
    const [query, setQuery] = useState('');
    const [filteredLinks, setFilteredLinks] = useState(researchLinks);

    const handleSearch = () => {
        const lowerQuery = query.toLowerCase();
        const results = researchLinks.filter(
            (link) => link.title.toLowerCase().includes(lowerQuery),
        );
        setFilteredLinks(results);
    };

    return (
        <Page className={styles.global}>
            <Banner
                withoutBackground
                heading={(
                    <>
                        Explore Global Research on
                        <br />
                        <span>Citizenship Inclusion</span>
                    </>
                )}
            />
            <Section>
                <Heading
                    className={styles.heading}
                    font="normal"
                    size="small"
                >
                    Search and explore a wide range of research studies focused on citizenship
                    <br />
                    and the experiences of people without recognized nationality.
                </Heading>
            </Section>
            <Section className={styles.section}>
                <div className={styles.searchWrapper}>
                    <SearchInput
                        icon={<IoSearchOutline />}
                        placeholder="Search research papers by title..."
                        value={query}
                        onChange={(
                            e: React.ChangeEvent<HTMLInputElement>,
                        ) => setQuery(e.target.value)}
                    />
                    <Button
                        variant="primary"
                        onClick={handleSearch}
                    >
                        Search
                    </Button>
                </div>
            </Section>
            <Section className={styles.section}>
                <div className={styles.sectionWrapper}>
                    <Heading>
                        Research papers
                    </Heading>
                    <div className={styles.linkList}>
                        {filteredLinks.map((item) => (
                            <li className={styles.linkItem} key={item.url}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    <IoDocumentTextOutline />
                                    <span>
                                        {item.url}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </div>

                </div>
            </Section>
        </Page>
    );
}
