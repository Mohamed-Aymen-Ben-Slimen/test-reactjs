import * as React from 'react';
import styles from './accordion.styles.module.css';
import {Accordion, Button, Badge, Container, Row, Col, Modal} from 'react-bootstrap';
import {useState} from "react";
import UpdateProject from "../update-project/update-project";
import VideoPlayer from "../video-player/video-player";

export default function CustomAccordion({projects, addProject, deleteProjectById, updateProject, ...props}) {

    const [selectedProject, setSelectedProject] = useState(projects[0]);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);

    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowDeleteModal = () => setShowDeleteModal(true);

    const handleCloseUpdateModal = () => setShowUpdateModal(false);
    const handleShowUpdateModal = () => setShowUpdateModal(true);

    const deleteProject = (id) => {
        deleteProjectById(id);
        handleCloseDeleteModal();
    }

    const selectProject = (project) => {
        console.log(project);
        setSelectedProject(project);
    }

    return (
        <div>
            <VideoPlayer videoId={selectedProject.introId}/>
        <div className={styles.container}>
            <Accordion>
            {projects.map(
                (project, index) =>
                    <Accordion.Item key={index} eventKey={index} onClick={() => selectProject(project)}>
                        <Accordion.Header>
                            <div className={styles.header}>
                                <h4 className={styles.headerElement}>{project.name}</h4>
                                <h6 className={styles.headerElement}>{project.type}</h6>
                                <Button className={styles.headerElement} variant="primary">Watch intro</Button>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <Container>
                                <Row>
                                    <Col className={styles.badgecol}>
                                {
                                    project.status === 'Archived' ?
                                        <h5><Badge bg="secondary">Archived</Badge></h5>
                                                    :
                                        <h5><Badge bg="success">Active</Badge></h5>
                                }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {project.description}
                                    </Col>
                                </Row>
                                <Row className={styles.buttons}>
                                    <Col>
                                            <Button size="sm" variant="outline-primary" onClick={handleShowUpdateModal}>
                                                Update Project
                                            </Button>
                                            <UpdateProject project={selectedProject}
                                                           updateProject={updateProject}
                                                           showUpdateModal={showUpdateModal}
                                                           handleCloseUpdateModal={handleCloseUpdateModal}
                                                           handleShowUpdateModal={handleShowUpdateModal}/>

                                {
                                    project.status === 'Archived' &&
                                        <>
                                            <Button size="sm" variant="outline-danger" onClick={handleShowDeleteModal}>
                                                Delete Project
                                            </Button>

                                            <Modal
                                                show={showDeleteModal}
                                                onHide={handleCloseDeleteModal}
                                                backdrop="static"
                                                keyboard={false}
                                            >
                                                <Modal.Body>
                                                    Do you want to delete this project?
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="danger" onClick={() => deleteProject(index)}>Delete</Button>
                                                    <Button variant="secondary" onClick={handleCloseDeleteModal}>
                                                        Discard
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </>
                                }
                                    </Col>
                                </Row>

                            </Container>

                        </Accordion.Body>
                    </Accordion.Item>

            )}
            </Accordion>
        </div>
        </div>
    );
}
