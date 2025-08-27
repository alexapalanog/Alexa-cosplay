import { useState, useEffect } from 'react'; // <-- FIX 1: 'React' import removed
import { createRoot } from 'react-dom/client';

const BackgroundAnimation = () => (
    <ul className="bg-animation">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
);

const SocialLinks = () => (
    <ul>
        <li><a href="https://www.facebook.com/alexa.medel.cute" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a></li>
        <li><a href="https://www.tiktok.com/@_alexchz?lang=en" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i className="fab fa-tiktok"></i></a></li>
        <li><a href="https://www.linkedin.com/in/alexandra-antonette-palanog/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a></li>
        <li><a href="https://www.instagram.com/_alexchi/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a></li>
    </ul>
);

// FIX 2: Define the types for the Sidebar's props
type SidebarProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

// Apply the SidebarProps type
const Sidebar = ({ isOpen, toggleMenu }: SidebarProps) => {
    return (
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
          <div className="sidebar-profile-pic">
              <img src="/images/Ai.jpg" alt="Illustrated portrait of Alexa" className="sidebar-profile-img"/>
            </div>
            <div className="author-content">
                <h4>⋆˚. Alexa ⭑˚⋆</h4>
                <span>Cosplayer & Programmer</span>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="#introduction" onClick={toggleMenu}>Introduction</a></li>
                    <li><a href="#favorites" onClick={toggleMenu}>Favorites</a></li>
                    <li><a href="#cosplays" onClick={toggleMenu}>Cosplays</a></li>
                    <li><a href="#events" onClick={toggleMenu}>Events</a></li>
                </ul>
            </nav>
            <div className="social-network">
                <SocialLinks />
            </div>
        </aside>
    );
};

const Introduction = () => (
    <section id="introduction" className="section">
        <div className="intro-container">
            <div className="intro-image-container">
                <span className="deco-icon i1">*ੈ✩</span>
                <span className="deco-icon i2">˚♡˚</span>
                <span className="deco-icon i4">˚₊‧⁺˖</span>
                <span className="deco-icon i5">( ˃ᴗ˂ )</span>
                <div className="intro-portrait-placeholder">
                        <img src="/images/Ai.jpg" alt="Illustrated portrait of Alexa" className="intro-portrait"/>
                </div>
            </div>
            <div className="intro-bubble">
                <h3>HI! I'M ALEXA~❤︎ </h3>
                <p className="intro-description">
                    A 21-year-old Pisces and a proud ambivert (INFP-T)!
                    When I'm not bringing characters to life, you can find me in student orgs, coding, editing contents, or just catching up on sleep ᶻ 𝗓 𐰁
                    I'm not much of a coffee drinker ₍^. .^₎⟆ but I'm full of creative energy!
                    I love meeting new people, so I'm super excited you're here. Let's be friends! Shall we? ♡
                </p>
                <div className="intro-socials">
                    <a href="https://www.facebook.com/alexa.medel.cute" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.tiktok.com/@_alexchz?lang=en" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
                    <a href="https://www.linkedin.com/in/alexandra-antonette-palanog-a8521a248" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/_alexchz/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </section>
);

const Favorites = () => (
    <section id="favorites" className="section">
        <div className="section-heading">
            <h2>My Favorites</h2>
        </div>
        <div className="favorites-grid">
            <div className="favorite-card fc-1">
                <div className="image-placeholder"><img src="/images/dessert.png" alt="Dessert" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} /></div>
                <h4>Dessert</h4>
                <p>Blueberry Cheesecake & Ice cream</p>
            </div>
            <div className="favorite-card fc-2">
                <div className="image-placeholder"><img src="/images/colors.png" alt="Colors" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} /></div>
                <h4>Colors</h4>
                <p>Shell Pink, Cornflower Blue, Lavender</p>
            </div>
            <div className="favorite-card fc-3">
                <div className="image-placeholder"><img src="/images/anime.png" alt="Anime" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} /></div>
                <h4>Anime</h4>
                <p>One Piece, Black Clover, Kono Oto Mare, That Time I reincarnated as a Slime, Bocchi the rock!</p>
            </div>
            <div className="favorite-card fc-4">
                <div className="image-placeholder"><img src="/images/character.png" alt="Comfort Characters" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} /></div>
                <h4>Comfort Characters</h4>
                <p>Chopper, Inumaki, Charmy, Bocchi, Tsuki</p>
            </div>
             <div className="favorite-card fc-5">
                <div className="image-placeholder"><img src="/images/loona.png" alt="Dessert" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} /></div>
                <h4>K-Pop</h4>
                <p>Loona</p>
            </div>
             <div className="favorite-card fc-6">
                <div className="image-placeholder"><img src="/images/netflix.png" alt="Dessert" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} /></div>
                <h4>Netflix Series</h4>
                <p>Moving, Stranger Things & Umbrella Academy</p>
            </div>
             <div className="favorite-card fc-7">
                <div className="image-placeholder"><img src="/images/hobby.png" alt="Dessert" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} /></div>
                <h4>Hobbies</h4>
                <p>Editing, Designing, Coding, Sleeping</p>
            </div>
        </div>
    </section>
);

const Cosplays = () => (
    <section id="cosplays" className="section">
        <div className="section-heading">
            <h2>My Cosplays</h2>
        </div>
        <div className="cosplay-scroller">
            <div className="cosplay-card c1">
                <div className="image-placeholder">
                    <img src="/images/kurumi.jpg" alt="kurumi Cosplay" />
                </div>
                <h4>Kurumi Tokisaki</h4>
                <p>Date A Live</p>
            </div>   
            <div className="cosplay-card c2">
                <div className="image-placeholder">
                    <img src="/images/zoro.jpg" alt="Zoro Cosplay" />
                </div>
                <h4>Zoro</h4>
                <p>One Piece</p>
            </div>   
            <div className="cosplay-card c3">
                <div className="image-placeholder">
                    <img src="/images/robin.png" alt="Robin Cosplay" />
                </div>
                <h4>Robin</h4>
                <p>Honkai: Star Rail</p>
            </div>
            <div className="cosplay-card c4">
                 <div className="image-placeholder">
                    <img src="/images/yumeko.png" alt="Yumeko Cosplay" />
                </div>
                <h4>Yumeko Jabami</h4>
                <p>Kakegurui</p>
            </div>
            <div className="cosplay-card c5">
                 <div className="image-placeholder">
                    <img src="/images/ai-2.JPG" alt="Ai Hoshino Cosplay" />
                </div>
                <h4>Ai Hoshino</h4>
                <p>Oshi No Ko</p>
            </div>
            <div className="cosplay-card c6">
                 <div className="image-placeholder">
                    <img src="/images/Miwa.jpg" alt="Miwa Cosplay" />
                </div>
                <h4>Miwa Kasumi</h4>
                <p>Jujutsu Kaisen</p>
            </div>
            <div className="cosplay-card c1">
                <div className="image-placeholder">
                    <img src="/images/Nene.JPG" alt="Nene Cosplay" />
                </div>
                <h4>Nene Yashiro</h4>
                <p>Toilet-Bound Hanako-kun</p>
            </div>
            <div className="cosplay-card c3">
                <div className="image-placeholder">
                    <img src="/images/krul.jpg" alt="Krul Tepes Cosplay" />
                </div>
                <h4>Krul Tepes</h4>
                <p>Owari no Seraph</p>
            </div>
            <div className="cosplay-card c4">
                <div className="image-placeholder">
                    <img src="/images/misa.png" alt="Misa Cosplay" />
                </div>
                <h4>Misa Amane</h4>
                <p>Death Note</p>
            </div>
            <div className="cosplay-card c6">
                <div className="image-placeholder">
                    <img src="/images/albedo.jpg" alt="Albedo Cosplay" />
                </div>
                <h4>Albedo</h4>
                <p>Overlord</p>
            </div>
            <div className="cosplay-card c5">
                <div className="image-placeholder">
                    <img src="/images/nami.jpg" alt="Nami Cosplay" />
                </div>
                <h4>Nami</h4>
                <p>One Piece</p>
            </div>
            <div className="cosplay-card c1">
                <div className="image-placeholder">
                    <img src="/images/chika.png" alt="Chika Cosplay" />
                </div>
                <h4>Chika Fujiwara</h4>
                <p>Kaguya-sama: Love is War</p>
            </div>
            <div className="cosplay-card c3">
                <div className="image-placeholder">
                    <img src="/images/toga.png" alt="Toga Cosplay" />
                </div>
                <h4>Toga Himiko</h4>
                <p>My Hero Academia</p>
            </div>
            <div className="cosplay-card c6">
                <div className="image-placeholder">
                    <img src="/images/shinobu.jpg" alt="Shinobu Cosplay" />
                </div>
                <h4>Shinobu Kocho</h4>
                <p>Demon Slayer</p>
            </div>
            <div className="cosplay-card c5">
                <div className="image-placeholder">
                    <img src="/images/ochaco.jpg" alt="Ochaco Cosplay" />
                </div>
                <h4>Ochaco Uraraka</h4>
                <p>My Hero Academia</p>
            </div>
            <div className="cosplay-card c2">
                <div className="image-placeholder">
                    <img src="/images/shizuku.jpg" alt="Shizuku Cosplay" />
                </div>
                <h4>Shizuku Murasaki</h4>
                <p>Hunter x Hunter</p>
            </div>
        </div>
    </section>
);

const Events = () => (
     <section id="events" className="section">
        <div className="section-heading">
            <h2>Events Gallery</h2>
        </div>
        <div className="event-banners-list">
            <div className="event-cute-banner">
                <h3>Fanfes 2022</h3>
                <p>Day 2 - Misa Amane</p>
            </div>
            <div className="event-cute-banner">
                <h3>Cosmania 2022</h3>
                <p>Day 1 - Kocho Shinobu & Day 2 - Chika Fujiwara</p>
            </div>
            <div className="event-cute-banner">
                <h3>Cosmatsuri 2023</h3>
                <p>Day 3 - Miwa Kasumi</p>
            </div>
            <div className="event-cute-banner">
                <h3>Ozine Fest 2022 & 2023</h3>
                <p>Day 2 - Krul Tepes</p>
            </div>
            <div className="event-cute-banner">
                <h3>Anime Fair 2023</h3>
                <p>Day 2 - Robin Honkai Star Rail</p>
            </div>
            <div className="event-cute-banner">
                <h3>Ozine: Anime Fair Circus 2024</h3>
                <p>Day 1 - Fem Zoro</p>
            </div>
        </div>
    </section>
);

const SocialsFooter = () => (
    <section id="socials" className="section">
        <div className="section-heading">
            <h2>Let's Connect!</h2>
        </div>
        <div className="socials-footer">
            <p className="socials-message">Follow my adventures and let's be friends on social media! ꒰ᐢ. .ᐢ꒱</p>
            <div className="icons">
                <a href="https://www.facebook.com/alexa.medel.cute" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.tiktok.com/@_alexchz?lang=en" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
                <a href="https://www.linkedin.com/in/alexandra-antonette-palanog-a8521a248" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/_alexchz/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
    </section>
);


const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isMenuOpen]);

    return (
        <div className={`app-container ${isMenuOpen ? 'menu-open' : ''}`}>
            <BackgroundAnimation />
            {isMenuOpen && <div className="backdrop" onClick={toggleMenu}></div>}
            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
                {isMenuOpen ? '✕' : '☰'}
            </button>
            <Sidebar isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <main className="main-content">
                <Introduction />
                <Favorites />
                <Cosplays />
                <Events />
                <SocialsFooter />
            </main>
        </div>
    );
};

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}