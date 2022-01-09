import * as React from 'react';
import {Button, Card, Col, Container, Row, Form} from 'react-bootstrap';
import styles from './new-project.styles.module.css';
import {useState} from "react";
import { useNavigate } from "react-router-dom";


export default function NewProject({addProject, ...props}) {
    const navigate = useNavigate();

    const [validated, setValidated] = useState(false);

    const [formData, setFormData] = useState(
        {
            name: '',
            description: '',
            type: 'Automatic editing',
            introId: ''
        }
    );

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(oldFormData => ({...oldFormData, [name]: value}))
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === false) {
            setValidated(true);
        } else {
            const projectData = {
                status: 'Active',
                ...formData
            };
            addProject(projectData);
            navigateToProjectsPage();
        }
    };

    const navigateToProjectsPage = () => {
        navigate('/');
    }

    return (
        <div className={styles.container}>
        <Card className="text-center">
            <Card.Body>
                <Card.Title>Create New Project</Card.Title>
                <Card.Text>
                    Enter project's details.
                </Card.Text>
                <Container>

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Project Name</Form.Label>
                                    <Form.Control required type="text" placeholder="Project Name" name="name" value={formData.name} onChange={handleChange}/>
                                    <Form.Control.Feedback type="invalid">Project name is required</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="type">
                                    <Form.Label>Editing Type</Form.Label>
                                    <Form.Select required aria-label="Select Type" value={formData.type} name="type" onChange={handleChange}>
                                        <option value="Automatic editing">Automatic editing</option>
                                        <option value="Editing with engine">Editing with engine</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">Project type is required</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="videoId">
                                    <Form.Label>Intro Youtube ID</Form.Label>
                                    <Form.Control required type="text" placeholder="Intro Youtube ID" name="introId" value={formData.introId} onChange={handleChange}/>
                                    <Form.Control.Feedback type="invalid">Intro Youtube ID is required</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="description">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control required type="text" as="textarea" name="description" rows={3} value={formData.description} onChange={handleChange}/>
                                    <Form.Control.Feedback type="invalid">Description is required</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Container className={styles.buttons}>
                            <Row>
                                <Col>
                                    <Button type="submit" variant="primary">Create</Button>
                                </Col>
                                <Col>
                                    <Button variant="danger" onClick={navigateToProjectsPage}>Discard</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Form>

                </Container>
            </Card.Body>
        </Card>
        </div>
    );
}
