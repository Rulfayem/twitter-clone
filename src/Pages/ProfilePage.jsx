import { Navbar, Container, Button, Row } from "react-bootstrap";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import ProfileSidebar from "../Components/ProfileSidebar";
import ProfileMidBody from "../Components/ProfileMidBody";
import { getAuth } from "firebase/auth";
import { AuthContext } from "../Components/AuthProvider";



export default function ProfilePage() {
    const auth = getAuth();
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        if (!currentUser) {
            navigate("/login");
        }
    }, [currentUser, navigate]);

    const handleLogout = () => {
        auth.signOut();
    };

    return (
        <>
            <Container>
                <Row>
                    <ProfileSidebar handleLogout={handleLogout} />
                    <ProfileMidBody />
                </Row>
            </Container>
        </>
    );
}


