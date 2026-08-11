import styles from './TopNav.module.css';

function TopNav({ search, onSearchChange, onSearchSubmit }) {
    return (
        <div className={styles.topnav}>
            <img
                className={styles.logo}
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub logo"
            />
            <input
                className={styles.searchInput}
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
            />
            <button className={styles.searchButton} type="button" onClick={onSearchSubmit}>
                Search
            </button>
        </div>
    );
}

export default TopNav;