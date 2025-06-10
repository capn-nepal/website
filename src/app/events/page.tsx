import React from 'react';

import Banner from '#components/Banner';
import Card from '#components/Card';
import Page from '#components/Page';
import Section from '#components/Section';
import AboutUsImage from '#public/aboutUsImage.jpg';

import EventsSection, { type EventType } from '../home/EventsSection';

import styles from './page.module.css';

export const events: EventType[] = [
    {
        id: '1',
        title: 'Spring Tech Fest',
        date: '2025-05-10',
        description: 'A gathering of tech enthusiasts and innovators.',
        eventDescription: `Join us for the annual Spring Tech Fest, where technology meets creativity. 
Discover cutting-edge innovations, attend workshops by industry leaders, and network with fellow enthusiasts.

This event is perfect for developers, designers, and entrepreneurs looking to stay ahead of the curve. 
Don't miss the exciting demos and product launches happening throughout the day.`,
    },
    {
        id: '2',
        title: 'Startup Pitch Day',
        date: '2025-05-15',
        description: 'Where early-stage startups showcase their vision.',
        eventDescription: `Startup Pitch Day brings together emerging startups and potential investors. 
Each team will have 5 minutes to pitch followed by a Q&A session.

Whether you're a founder looking to raise funds or an investor scouting your next opportunity, this event is designed for you.`,
    },
    {
        id: '3',
        title: 'Health & Wellness Expo',
        date: '2025-05-20',
        description: 'A showcase of health-focused innovations and services.',
        eventDescription: `The Health & Wellness Expo features exhibits from wellness brands, healthcare startups, and fitness experts. 
Attend sessions on mental health, nutrition, and physical well-being.

From healthy food tastings to live fitness classes, it’s a day to inspire a healthier lifestyle.`,
    },
    {
        id: '4',
        title: 'Designers Meetup',
        date: '2025-05-25',
        description: 'An event for creative professionals and UX/UI enthusiasts.',
        eventDescription: `Connect with fellow designers and learn from top creatives in the field. 
Expect talks on design systems, accessibility, and the future of digital experiences.

Bring your portfolio for feedback, and enjoy interactive workshops on Figma and motion design.`,
    },
    {
        id: '5',
        title: 'AI & Future Conference',
        date: '2025-05-30',
        description: 'Exploring the impact of AI on the future of work and society.',
        eventDescription: `Delve into the world of artificial intelligence and its real-world applications. 
Keynotes will cover AI ethics, LLM integration, and automation trends.

With demos from leading AI startups and academic presentations, this is a must-attend for anyone curious about where tech is headed.`,
    },
];

export default function Events() {
    return (
        <Page contentClassName={styles.events}>
            <Banner
                // NOTE: We need to replace with the real image as mentioned in figma
                bannerImageSrc={AboutUsImage}
                eyebrowHeading="Our Events"
                heading={(
                    <>
                        Foundations of Our Advocacy
                        <br />
                        <span>Our Events</span>
                    </>
                )}
            />
            <EventsSection
                events={events}
            />
            <Section
                heading="CAPN's Recent Works & Events"
                headingSize="extraLarge"
            >
                <div className={styles.pastEvents}>
                    {events?.map((item) => (
                        <Card
                            key={item.id}
                            className={styles.card}
                            image={AboutUsImage}
                            title={item.title}
                            date={item.date}
                            description={item.description}
                            link={`/events/${item.id}`}
                        />
                    ))}
                </div>
            </Section>
        </Page>
    );
}
