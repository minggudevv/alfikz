export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "VideoGame",
        "name": "Alfikz SMP",
        "description": "The ultimate medieval survival economy Minecraft server in Indonesia. Join now for a unique gaming experience!",
        "genre": ["Survival", "Economy", "RPG", "Medieval"],
        "playMode": "MultiPlayer",
        "gamePlatform": ["PC game", "Minecraft Java", "Minecraft Bedrock"],
        "url": "https://www.alfikz.my.id",
        "image": "https://www.alfikz.my.id/logo.jpg",
        "operatingSystem": "Windows, macOS, Linux, Android, iOS",
        "applicationCategory": "Game",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "IDR",
            "availability": "https://schema.org/InStock",
        },
        "author": {
            "@type": "Organization",
            "name": "Alfikz Team",
            "url": "https://www.alfikz.my.id"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
