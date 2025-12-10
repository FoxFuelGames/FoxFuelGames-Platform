import React from 'react';
import './Home.css';


export default function Home(){
return (
<div className="container" role="main">
<header className="header">
<div className="brand-row">
<div className="logo-placeholder" aria-hidden>
🦊
</div>
<div>
<h1>FoxFuel Games</h1>
<p className="subtitle">Fueling Your Passion — TCG, Comics &amp; Collectibles. Shop our drops, track values, and build your collection.</p>
<div className="cta-row" role="navigation" aria-label="Primary actions">
<a className="button" href="https://www.ebay.com/sch/i.html?_nkw=foxfuel+games" target="_blank" rel="noopener noreferrer">Shop eBay</a>
<a className="button secondary" href="https://www.mercari.com/search/?keyword=foxfuel" target="_blank" rel="noopener noreferrer">Shop Mercari</a>
<a className="button secondary" href="#posts">View Posts</a>
</div>
</div>
</div>
</header>


<div className="grid">
<main className="main" aria-labelledby="about-title">
<section className="about card" aria-labelledby="about-title">
<h2 id="about-title" className="section-title">About</h2>
<p>
FoxFuel Games is a West Virginia-based reseller focused on accessibility, fun, and community. We curate TCG, comics, and collectibles — sharing our love for the hunt and helping fellow collectors grow their passion.
</p>
</section>


<section id="posts" className="card" aria-labelledby="posts-title" style={{marginTop:20}}>
<h2 id="posts-title" className="section-title">Posts</h2>
<p style={{color:'var(--muted)',marginTop:6}}>Latest updates and short posts from FoxFuel Games — click a post to read more.</p>
<div className="posts-list" style={{marginTop:12}}>
<article className="post" tabIndex={0} aria-label="Post: New TCG drop this weekend">
<h4>New TCG Drop — This Weekend</h4>
<p>Rare booster boxes and singles hit eBay Friday evening. Sign up to get notified.</p>
</article>


<article className="post" tabIndex={0} aria-label="Post: Value Watch - Top 5 Movers">
<h4>Value Watch: Top 5 Movers</h4>
<p>We tracked price changes across platforms — here’s what rose the most this month.</p>
</article>


<article className="post" tabIndex={0} aria-label="Post: Comic spotlight">
<h4>Comic Spotlight: Indie Finds</h4>
<p>Small-run comics with big stories — curated picks from our latest haul.</p>
</article>
</div>
</section>
</main>


<aside className="card" aria-labelledby="contact-title">
<h3 id="contact-title" className="section-title">Contact</h3>
<ul className="contact-list">
<li><strong>Name:</strong> Brae Smith</li>
<li><strong>Email:</strong> <a href="mailto:foxfuelgames@gmail.com">foxfuelgames@gmail.com</a></li>
<li><strong>Facebook:</strong> <a href="https://facebook.com/FoxFuelGames" target="_blank" rel="noopener noreferrer">facebook.com/FoxFuelGames</a></li>
<li><strong>Instagram:</strong> <a href="https://instagram.com/foxfuelgames" target="_blank" rel="noopener noreferrer">instagram.com/foxfuelgames</a></li>
</ul>


<div className="footer">
<p>Based in West Virginia • Community-driven • Accessibility-forward</p>
</div>
</aside>
</div>
</div>
);
}