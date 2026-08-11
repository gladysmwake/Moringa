import { useState, useEffect } from 'react';
import axios from 'axios';
import TopNav from './TopNav';
import InfoSection from './InfoSection';
import Card from './Card';
import styles from './GithubProject.module.css';

function GithubProject() {
    const [people, setPeople] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await axios({
                    method: 'GET',
                    url: 'https://api.github.com/users',
                });
                setPeople(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        getUserData();
    }, []);

    const handleSearchSubmit = () => {
        setQuery(search.trim());
    };

    const filteredPeople = people.filter((person) =>
        person.login.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className={styles.githubProject}>
            <h1 className={styles.githubTitle}>Github Project</h1>
            <TopNav
                search={search}
                onSearchChange={setSearch}
                onSearchSubmit={handleSearchSubmit}
            />
            <InfoSection people={filteredPeople} />
            <div className={styles.cardList}>
                {filteredPeople.map((person) => (
                    <Card key={person.id || person.login} person={person} />
                ))}
            </div>
        </div>
    );
}

export default GithubProject;