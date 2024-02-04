import PersonInfoCard from "../components/PersonInfoCard";

function Home() {
    return (
        <div style={{ width: "100%", height: "100px" }}>
            <PersonInfoCard user={{
                name: "",
                email: "",
                artistName: ""
            }} deletable={false} forceRerender={null}></PersonInfoCard>

        </div>
    );
}

export default Home;