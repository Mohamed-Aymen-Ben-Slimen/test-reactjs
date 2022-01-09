import * as React from 'react';
import {Navbar, Container, Nav} from "react-bootstrap";
import { Link } from 'react-router-dom';
import styles from './nav-bar.styles.module.css';

export default function CustomNavBar() {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Link to="/" className={styles.link}>Projects</Link>
                    <Link to="/new-project" className={styles.link}>New project</Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
