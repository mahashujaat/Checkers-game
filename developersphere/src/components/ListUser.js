// ListUser.js
import axios from "axios";
import { useEffect, useState } from "react";
import "./ListUser.css";
import pics from './listuser.jpg';

function ListUser() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost:80/api/users/').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    return (
        <div>
            <div className="imgcont" style={{ backgroundImage: `url(${pics})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}>
                {/* Adjust height as needed */}
            </div>

            <div className="hireus">
                <div className="intro">
                    <h1>Our Clients</h1>
                    <p>
                        Let's Grab some attention of yours to our clients, who trusted us for their work. These clients saw us worthy for tasks and services that are mentioned below.
                    </p>
                </div>
                <div>
                <table className="user-table">
                <thead>
                    <tr>
                        <th>Client Id</th>
                        <th>Name</th>
                        <th>Service</th>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) => (
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.service}</td>
                            <td>{user.task}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            </div>
        </div>
    );
}

export default ListUser;
