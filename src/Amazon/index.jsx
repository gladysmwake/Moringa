import Navigation from "./navigation";
import SideBar from "./SideBar";
import MainSection from "./MainSection";

function AmazonPage(){
    return(
        <div className="app-shell">
            <div className="page-container">
                <Navigation />

                <header className="page-header">
                    <div>
                        <p className="eyebrow">Trusted marketplace</p>
                        <h1>Fitness gear for every goal</h1>
                        <p className="page-subtitle">Shop curated workout essentials, handpicked for your home gym and active lifestyle.</p>
                    </div>
                    <button type="button" className="cta-button">Explore new arrivals</button>
                </header>

                <div className="page-layout">
                    <SideBar />
                    <MainSection />
                </div>
            </div>
        </div>
    );
}

export default AmazonPage;
