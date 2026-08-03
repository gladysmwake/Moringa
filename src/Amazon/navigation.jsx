import logo from '../assets/logo.png';

function Navigation(){
    return(
        <nav className="nav">
            <div className="nav-brand">
                <img src={logo} width="60" alt="Logo" />
                <div>
                    <strong>ShopBay</strong>
                    <span>Everyday essentials</span>
                </div>
            </div>
            <div className="nav-actions">
                <input placeholder="Search products, gear, brand..." />
                <button type="button">Sign in</button>
            </div>
        </nav>
    );
}

export default Navigation;