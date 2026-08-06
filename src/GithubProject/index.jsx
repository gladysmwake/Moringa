import { useState, useEffect } from 'react';
import axios from 'axios';

function GithubProject() {
    const [people, setPeople] = useState([]);

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

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <div>
            <h1>Github Project</h1>
           
        </div>
    );
}

export default GithubProject;