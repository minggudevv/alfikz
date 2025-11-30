import React from 'react';
import Link from 'next/link';

export default function CookiePolicy() {
    return (
        <div className="min-h-screen bg-background text-foreground py-20 px-4">
            <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h1 className="text-4xl font-bold mb-8 text-primary">Cookie Policy</h1>

                <div className="space-y-6 text-gray-300">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">1. What Are Cookies?</h2>
                        <p>
                            Cookies are small text files stored on your device when you visit a website. They help the website function properly and improve your user experience.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Cookies</h2>
                        <p>
                            We use cookies for:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><strong>Essential Functions:</strong> To make the website work (e.g., remembering your session).</li>
                            <li><strong>Analytics:</strong> To understand how visitors use our site (e.g., page views, navigation paths).</li>
                            <li><strong>Preferences:</strong> To remember your settings (e.g., language, theme).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">3. Managing Cookies</h2>
                        <p>
                            You can control or delete cookies through your browser settings. However, disabling cookies may affect the functionality of this website.
                        </p>
                    </section>

                    <div className="pt-8 border-t border-white/10">
                        <Link href="/" className="text-primary hover:text-primary-dark transition-colors">
                            &larr; Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
