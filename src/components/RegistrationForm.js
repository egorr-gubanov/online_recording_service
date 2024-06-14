import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegistrationForm.css';

const RegistrationForm = ({ show, handleClose, selectedDate, selectedTime }) => {
    const [formData, setFormData] = useState({
        lastName: '',
        firstName: '',
        middleName: '',
        email: '',
        phone: '',
        consent: false
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData({
            ...formData,
            [name]: checked
        });
    };

    const isFormValid = Object.values(formData).every(field => {    if (typeof field === 'boolean') {
        return field === true;
    }
        return field.trim() !== '';
    });

    const handleSubmit = () => {
        if (isFormValid) {
            handleClose();
            navigate('/confirmation');
        }
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    <div className="modal-header-content">
                        <div className="modal-icon">&#x1F4CD;</div>
                        <div>
                            <div className="modal-title">Дом Природы</div>
                            <div className="modal-subtitle">«От рыбинки к Рыбинке»</div>
                            <div className="modal-date">{`выбранная дата: ${selectedDate} июня, время: ${selectedTime}`}</div>
                        </div>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Введите информацию о вас:</h5>
                <Form>
                    <Form.Group controlId="formLastName">
                        <Form.Label>Фамилия</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Иванов"
                        />
                    </Form.Group>
                    <Form.Group controlId="formFirstName">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Иван"
                        />
                    </Form.Group>
                    <Form.Group controlId="formMiddleName">
                        <Form.Label>Отчество</Form.Label>
                        <Form.Control
                            type="text"
                            name="middleName"
                            value={formData.middleName}
                            onChange={handleChange}
                            placeholder="Иванович"
                        />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="ivanov123@gmail.com"
                        />
                    </Form.Group>
                    <Form.Group controlId="formPhone">
                        <Form.Label>Телефон</Form.Label>
                        <Form.Control
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+7(981)234-65-23"
                        />
                    </Form.Group>
                    <Form.Group controlId="formConsent">
                        <Form.Check
                            type="checkbox"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleCheckboxChange}
                            label="Согласие на обработку персональных данных"
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Закрыть</Button>
                <Button variant="primary" onClick={handleSubmit} disabled={!isFormValid}>Зарегистрироваться</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default RegistrationForm;