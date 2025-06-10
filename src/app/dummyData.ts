import { type EventType } from './home/EventsSection';

interface UpdateType {
    title: string;
    slug: string;
    author: {
        name: string;
        image: string;
    };
    publishedDate: string;
    content: string;
    coverImage: string;
    featured: boolean;
}

export const updates: UpdateType[] = [
    {
        title: 'Launching Our New AI Assistant',
        slug: 'launching-our-new-ai-assistant',
        publishedDate: '2025-06-01',
        author: {
            name: 'Subi Shrestha',
            image: 'https://i.pravatar.cc/150?img=32',
        },
        content: `
            ## Meet Your New Assistant

            We’re thrilled to introduce our new AI Assistant, designed to help streamline your workflow and provide faster access to critical information.

            ### Features:
            - Natural language understanding
            - Seamless integration with internal tools
            - 24/7 availability

            Try it out and let us know what you think!`,
        coverImage: 'https://doodleipsum.com/700x525/flat?i=ab35c7076496f3a1b9895105769c3fc4',
        featured: true,
    },
    {
        title: 'May Recap: Product Updates & Improvements',
        slug: 'may-recap-product-updates-improvements',
        publishedDate: '2025-06-03',
        author: {
            name: 'Rabin Maharjan',
            image: 'https://i.pravatar.cc/150?img=14',
        },
        content: `
        ## What's New in May?

        We focused on stability, speed, and smoother UI transitions.

        ### Highlights:
        - Improved performance on low bandwidth
        - New grid layout for dashboard
        - Fixed 12 bugs based on user reports

        Stay tuned for more enhancements in June.`,
        coverImage: 'https://doodleipsum.com/700x525/flat?i=ab35c7076496f3a1b9895105769c3fc4',
        featured: false,
    },
    {
        title: 'Behind the Scenes: How We Build Humanitarian Tools',
        slug: 'behind-the-scenes-how-we-build-humanitarian-tools',
        publishedDate: '2025-06-05',
        author: {
            name: 'Srijana Tamang',
            image: 'https://i.pravatar.cc/150?img=47',
        },
        content: `
            ## Why It Matters

            Our tools are used by agencies like IFRC, UNHCR, and IDMC to make real-time decisions during crises.

            ### What We Focus On:
            - Accessibility in low-connectivity areas
            - Rapid data visualization
            - Human-centered design

            We’re proud to build for impact.`,
        coverImage: 'https://doodleipsum.com/700x525/flat?i=ab35c7076496f3a1b9895105769c3fc4',
        featured: true,
    },
    {
        title: 'Tips for Managing a Remote Tech Team',
        slug: 'tips-for-managing-a-remote-tech-team',
        publishedDate: '2025-06-07',
        author: {
            name: 'Aashish Khadka',
            image: 'https://i.pravatar.cc/150?img=20',
        },
        content: `
            ## Managing Remotely, Effectively

            Working with a remote tech team of 25+ comes with its challenges. Here are some of our top tips:

            - Use async tools wisely
            - Encourage over-communication
            - Track progress transparently

            These tips have helped us grow while staying lean.`,
        coverImage: 'https://doodleipsum.com/700x525/flat?i=ab35c7076496f3a1b9895105769c3fc4',
        featured: false,
    },
    {
        title: 'Sneak Peek: Upcoming CMS Dashboard Redesign',
        slug: 'sneak-peek-upcoming-cms-dashboard-redesign',
        publishedDate: '2025-06-10',
        author: {
            name: 'Niraj Karki',
            image: 'https://i.pravatar.cc/150?img=53',
        },
        content: `
            ## Cleaner, Faster, More Intuitive

            We’re overhauling our CMS dashboard based on user feedback.

            ### Coming Soon:
            - Light/dark mode toggle
            - Drag-and-drop content blocks
            - Real-time preview

            Launching later this month!`,
        coverImage: 'https://doodleipsum.com/700x525/flat?i=ab35c7076496f3a1b9895105769c3fc4',
        featured: true,
    },
];

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
