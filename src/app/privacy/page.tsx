import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-background text-foreground py-20 px-4">
            <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h1 className="text-4xl font-bold mb-8 text-primary">Privacy Policy</h1>

                <div className="space-y-6 text-gray-300">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">1. Information We Collect</h2>
                        <p>
                            We may collect the following information:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Minecraft username and UUID.</li>
                            <li>IP address and connection logs.</li>
                            <li>Chat logs and in-game activity data.</li>
                            <li>Payment information (processed securely by third-party providers, we do not store credit card details).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Information</h2>
                        <p>
                            We use this information to:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Provide and improve our server services.</li>
                            <li>Enforce server rules and prevent abuse.</li>
                            <li>Process transactions and deliver purchased items.</li>
                            <li>Analyze server performance and player statistics.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">3. Data Sharing</h2>
                        <p>
                            We do not sell your personal information. We may share data with:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Service providers (e.g., hosting, payment processors) strictly for operational purposes.</li>
                            <li>Law enforcement if required by law.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">4. Third-Party Links</h2>
                        <p>
                            Our website may contain links to third-party sites (e.g., Discord, WhatsApp). We are not responsible for the privacy practices of these external sites.
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
