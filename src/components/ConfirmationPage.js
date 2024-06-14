import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ConfirmationPage.css';

const ConfirmationPage = () => {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/');
    };

    return (
        <Modal show={true} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Регистрация завершена!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Спасибо за регистрацию. Мы ждем вас на нашем мероприятии.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmationPage;