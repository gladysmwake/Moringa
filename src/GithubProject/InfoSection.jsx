import styles from './GithubProject.module.css';

function InfoSection({ people = [] }) {
    return (
        <div className={styles.infoSection}>
            <b className={styles.count}>{people.length}</b>
            <span className={styles.label}>User Results</span>
        </div>
    );
}

export default InfoSection;