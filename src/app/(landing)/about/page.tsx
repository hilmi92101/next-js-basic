import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About',
    description: 'Generated by Next.js',
}

// export const metadata: Metadata = {
//     title: {
//         absolute: 'About',
//     },
// }

const About = () => {
    return (
        <div>About page</div>
    )
}

export default About