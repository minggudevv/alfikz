import React from 'react';
import Link from 'next/link';

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-background text-foreground py-20 px-4">
            <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h1 className="text-4xl font-bold mb-8 text-primary">Terms of Service</h1>

                <div className="space-y-6 text-gray-300">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using Alfikz SMP services, including our Minecraft server and website, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">2. Server Rules</h2>
                        <p>
                            Users must adhere to our server rules, which include but are not limited to:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>No griefing or stealing (unless allowed by specific game modes).</li>
                            <li>No cheating, hacking, or exploiting bugs.</li>
                            <li>Respect other players and staff.</li>
                            <li>No hate speech, harassment, or inappropriate content.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">3. Purchases and Refunds</h2>
                        <p>
                            <strong>All purchases are final.</strong> By purchasing a rank or item, you acknowledge that:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>You are purchasing a virtual license to use digital items/perks.</li>
                            <li>There are <strong>NO REFUNDS</strong> under any circumstances, including server bans or shutdowns.</li>
                            <li>We reserve the right to change rank perks or prices at any time without prior notice.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">4. Account Security</h2>
                        <p>
                            You are responsible for maintaining the security of your Minecraft account. We are not liable for any loss or damage arising from your failure to protect your account.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">5. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these terms at any time. Continued use of the server constitutes acceptance of the new terms.
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
