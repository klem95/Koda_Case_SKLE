import { Link } from 'react-router-dom'

export const NavMenu = () => {
    return (
        <nav>
            <div style={{ padding: "20px", borderColor: "white", borderWidth:"2" }}>
                <ul style={{}}>
                    <li style={{ listStyle: "none" }}>
                        <Link to="/">Home</Link>
                    </li>
                    <li style={{ listStyle: "none" }}>
                        <Link to="/brugerAdmin">Brugeradministration</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}