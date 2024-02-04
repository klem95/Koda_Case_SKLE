import { useCallback, useEffect, useState } from "react";
import { User } from "../Types/User";
import PersonInfoCard from "../components/PersonInfoCard";
import { PORT } from "../Types/Port";

function UserAdmin() {

    const [users, setUsers] = useState<User[]>([])

    const memoGetUsers = useCallback(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': `http://localhost:${PORT}`,

            },
        };
        fetch(`https://localhost:${PORT}/User`, requestOptions)
            .then(response => response.json())
            .then(data => setUsers([...data as User[]])).catch(() => alert("Brugere kunne ikke hentes."))
    }, [])

    useEffect(() => {
        memoGetUsers()
    }, [])


    const renderUserCards = () => {
        if (users.length > 0)
            return (
                users.map((u) => {
                    return <PersonInfoCard key={u.email} user={{
                    name: u.name,
                    email: u.email,
                    artistName: u.artistName
                }} deletable={true} forceRerender={memoGetUsers}></PersonInfoCard>
                })
            )
        else return <></>
    }

    return (<div style={{ height: "100vh", width: "100vh" }}>{renderUserCards()}</div>
    )
}

export default UserAdmin;