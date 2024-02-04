import {memo, useState } from "react";
import { User } from "../Types/User";
import FormItem from "./FormItem";
import { PORT } from "../Types/Port";

interface props {
    user: User
    deletable: boolean
    forceRerender: (() => void) | null
}

function PersonInfoCard(props: props) {
    const [email, setEmail] = useState(props.user.email);
    const [name, setName] = useState(props.user.name);
    const [artistName, setArtistName] = useState(props.user.artistName);
    function handleSubmit(): void {
        const newUser: User = {
            name: name,
            email: email,
            artistName: artistName
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': `http://localhost:${PORT}`,

            },
            body: JSON.stringify(newUser)
        };
        fetch(`https://localhost:${PORT}/User`, requestOptions)
            .then(response => response.json())
            .then(() => alert("Bruger oprettet.")).catch(() => alert("Brugeren blev ikke oprettet."))
    }

    function handleDelete(): void {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': `http://localhost:${PORT}`,

            },
        };
        fetch(`https://localhost:${PORT}/User?_email=` + email, requestOptions)
            .then(response => response.json())
            .then(() => {
                alert("Bruger blev slettet.");
                if (props.forceRerender) {
                    props.forceRerender()
                }
            }).catch(() => alert("Brugeren blev ikke slettet."));

    }
    function handleUpdate(): void {

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': `http://localhost:${PORT}`,

            },
        };
        fetch(`https://localhost:${PORT}/User?_email=${email}&_newName=${name}`, requestOptions)
            .then(response => response.json())
            .then(() => {
                alert("Bruger opdateret.");
                if (props.forceRerender) {
                    props.forceRerender()
                }}).catch(() => alert("Brugeren blev ikke oprettet"));
    }

    return (
        <div style={{ width: "300px", height: "150px", padding: "10px", backgroundColor: "grey", margin:"20px" }}>
            <FormItem disabled={props.deletable ? true : false} label="Email" setState={setEmail} value={email}></FormItem>
            <FormItem disabled={false} label="Navn" setState={setName} value={name}></FormItem>
            <FormItem disabled={props.deletable ? true : false} label="Kunstnernavn" setState={setArtistName} value={artistName}></FormItem>
            {props.deletable ? (<div><button style={{ marginBottom: "5px", marginTop: "5px" }} onClick={ handleUpdate }>Opdater bruger</button><button onClick={handleDelete }>Slet bruger</button></div>) : <button disabled={email == "" || name == ""} onClick={handleSubmit}>Opret bruger</button>}
        </div>
  );
}

export default memo(PersonInfoCard);
