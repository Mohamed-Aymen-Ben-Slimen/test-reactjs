import * as React from 'react';
import {Button, Card, Col, Container, Row, Form, Modal} from 'react-bootstrap';
import {useEffect, useState} from "react";

export default function UpdateProject({project, showUpdateModal, handleShowUpdateModal, handleCloseUpdateModal, updateProject, ...props}) {
    const [validated, setValidated] = useState(false);

    const [formData, setFormData] = useState({});

    useEffect(() => {
        setFormData({
            name: project.name,
            description: project.description,
            type: project.type,
            introId: project.introId,
            status: project.status
        });
    }, [project])

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
            updateProject(formData, project.id);
            handleCloseUpdateModal();
        }
    };

    return (
        <Modal
            show={showUpdateModal}
            onHide={handleCloseUpdateModal}
            backdrop="static"
            keyboard={false}
        >
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Update Project</Card.Title>
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
                                <Col>
                                    <Form.Label>Status</Form.Label>
                                    <Form.Select required aria-label="Select Status" value={formData.status} name="status" onChange={handleChange}>
                                        <option value="Active">Active</option>
                                        <option value="Archived">Archived</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">Status is required</Form.Control.Feedback>
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
                            <Container>
                                <Row>
                                    <Col>
                                        <Button type="submit" variant="primary">Update</Button>
                                    </Col>
                                    <Col>
                                        <Button variant="danger" onClick={handleCloseUpdateModal}>Discard</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Form>

                    </Container>
                </Card.Body>
            </Card>
        </Modal>
    );
}
