"use client";

import '../globals.css';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from 'react'

const navLinks = [
    { name: "Template Teting Page 1", href: "/template-testing/page-1" },
    { name: "Template Teting Page 2", href: "/template-testing/page-2" },
    { name: "Back", href: "/template-testing" },
];

// export const metadata = {
//     title: 'Next.js',
//     description: 'Generated by Next.js',
// }

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const pathname = usePathname();
    const [input, setInput] = useState('');

    return (
        
        <>
            <header style={headerStyle}>HEADER</header>

            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <br />

            <div>
                {navLinks.map((link, index) => (


                    <div key={index}>
                        <Link
                            className={pathname.startsWith(link.href) ? 'text-green-500 font-bold mr-4' : 'text-blue-500 mr-4'}
                            href={link.href}
                        >
                            <h1>{link.name}</h1>
                        </Link>
                    </div>
                ))}
            </div>

            {children}

            <footer style={footerStyle}>FOOTER</footer>

        </>

    )
}

const headerStyle: React.CSSProperties = {
    backgroundColor: '#a83246',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
};

const footerStyle: React.CSSProperties = {
    backgroundColor: '#a83246',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
};