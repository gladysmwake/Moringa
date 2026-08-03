import FilterList from "./filterList";

function SideBar(){
    return(
        <aside className="sidebar-panel">
            <div className="sidebar-header">
                <h2>Shop by category</h2>
                <p>Filter products by type, price, and brand.</p>
            </div>

            <div className="sidebar-menu-group">
                <span>Categories</span>
                <ul className="sidebar-menu">
                    <li>Fitness Accessories</li>
                    <li>Audio & Wearables</li>
                    <li>Footwear</li>
                    <li>Workout Gear</li>
                </ul>
            </div>
            <FilterList />
        </aside>
    );
}

export default SideBar;