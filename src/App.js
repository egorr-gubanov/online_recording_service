import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Nav, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import ConfirmationPage from './components/ConfirmationPage';

// Importing images from Assets folder
import logo from './Assets/logo.png';
import museumIcon from './Assets/museumIcon.svg';
import heartIcon from './Assets/heartIcon.svg';
import calendarIcon from './Assets/calendarIcon.svg';
import dollarIcon from './Assets/dollarIcon.svg';
import infoIcon from './Assets/infoIcon.svg';
import userIcon from './Assets/userIcon.svg';
import eyeIcon from './Assets/eyeIcon.svg';
import phoneIcon from './Assets/phoneIcon.svg';
import searchIcon from './Assets/searchIcon.svg';
import barsIcon from './Assets/barsIcon.svg';
import photo1 from './Assets/photo1.png';
import photo2 from './Assets/photo2.png';
import photo3 from './Assets/photo3.png';

const HomePage = () => {
    const [showModal, setShowModal] = useState(false);
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const navigate = useNavigate();

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleNext = () => {
        if (selectedDate && selectedTime) {
            setShowModal(false);
            setShowRegistrationForm(true);
        }
    };

    const handleRegistrationClose = () => setShowRegistrationForm(false);

    const dates = [10, 11, 12, 13, 14, 15, 16];
    const times = {
        10: ['10:00', '12:00', '14:00', '16:00'],
        11: ['10:00', '12:00', '14:00', '16:00'],
        12: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
        13: ['10:00', '12:00', '14:00', '16:00'],
        14: ['10:00', '12:00', '14:00', '16:00'],
        15: ['10:00', '12:00', '14:00', '16:00'],
        16: ['10:00', '12:00', '14:00', '16:00'],
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
        setSelectedTime(null); // Reset selected time when date changes
    };

    const handleTimeClick = (time) => {
        setSelectedTime(time);
    };

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={1} className="sidebar">
                        <Nav className="flex-column">
                            <Nav.Item className="logo-container">
                                <img src={logo} alt="Логотип музея" className="logo" />
                            </Nav.Item>
                            <Nav className="flex-column">
                                <Nav.Link href="#home"><img src={museumIcon} alt="Museum Icon" className="museum-icon" /></Nav.Link>
                                <Nav.Link href="#link"><img src={heartIcon} alt="Heart Icon" className="heart-icon" /></Nav.Link>
                                <Nav.Link href="#link"><img src={calendarIcon} alt="Calendar Icon" className="calendar-icon" /></Nav.Link>
                                <Nav.Link href="#link"><img src={dollarIcon} alt="Dollar Icon" className="dollar-icon" /></Nav.Link>
                                <Nav.Link href="#link"><img src={infoIcon} alt="Info Icon" className="info-icon" /></Nav.Link>
                                <Nav.Link href="#link"><img src={userIcon} alt="User Icon" className="user-icon" /></Nav.Link>
                                <Nav.Link href="#link" className="spaced-icon"><img src={eyeIcon} alt="Eye Icon" className="eye-icon" /></Nav.Link>
                                <Nav.Link href="#link"><img src={phoneIcon} alt="Phone Icon" className="phone-icon" /></Nav.Link>
                                <Nav.Link href="#link" className="spaced-icon"><img src={searchIcon} alt="Search Icon" className="search-icon" /></Nav.Link>
                                <Nav.Link href="#link"><img src={barsIcon} alt="Bars Icon" className="bars-icon" /></Nav.Link>
                            </Nav>
                        </Nav>
                    </Col>
                    <Col xs={11} className="content">
                        <Row>
                            <Col md={6}>
                                <h1>ДОМ ПРИРОДЫ</h1>
                                <p className="lead">Музейный экологический центр с богатой историей и ценными коллекциями.</p>
                                <p>Природоведческие коллекции в Череповце начали собираться более 100 лет назад.
                                    В 1920 году из губернского музея были переданы коллекции
                                    естественнонаучного и промышленного отделов, и на их базе был открыт Музей местной природы имени А.И. Герцена. С тех пор музей несколько раз менял здания, объединялся с другими отделами и вновь становился самостоятельным. На протяжении всего этого времени музейное собрание пополнялось чучелами, образцами минералов и палеонтологическими насекомых и гербариями. Многие из них
                                    представляют большую научную ценность.
                                </p>
                                <p>В марте 2024 года Дом природы открылся по новому адресу - Коммунистов, 42,
                                    представляя обновленные коллекции, собранные более чем за столетнюю историю музея природы.
                                </p>
                                <p>В экспозиции «От рыбинки к Рыбинке» оборудованы 9 панорамных бассейнов общей длиной 14 метров, в которых уже обитает полсотни рыб: стерлядь, форель, щуки, налимы, караси, ерши и карпы. Позже подселят сазанов, судаков, язей. Для особей местных пород созданы все необходимые условия: низкая температура воды, качественная фильтрация, освещение с режимом «ночного питания для хищников». Ухаживать за ними будет специалист по аквакультуре.
                                </p>
                                <p>Основная экспозиция «Город и река» находится на первом этаже. В семи больших диорамах показаны экосистемы, показывающие разнообразие флоры и фауны местного края: болота, смешанный лес, сосновый бор, городское пространство. В каждой диораме представлены чучела животных - медведи, рыси, волки, лоси, птицы и др. Отдельные экспозиционные пространства покажут особенности речных и лесных промыслов - как человек использует природные богатства.
                                </p>
                                <p>По старому адресу (пр. Луначарского, 32) временно размещается экспозиция
                                    «Музей здоровья». Посетить занятия, посвященные здоровью, можно по предварительной записи.
                                </p>
                                <p>Музей природы — определённо, то место, куда стоит прийти семьёй. Здесь стараются сделать семейный визит максимально ярким и запоминающимся. И судя по тому, какой популярностью пользуются семейно-развлекательные программы (Дни леса, птиц, болот и другие квесты), им это удаётся.
                                </p>
                                <p>Заведующий: Яшина Ольга Вадимовна</p>
                                <p>Посещение по Пушкинской карте</p>
                                <p>Посещение Музея здоровья по Пушкинской карте</p>
                                <Button variant="primary" className="mt-3" onClick={() => alert('Функция заказа билета временно недоступна')}>Заказать билет</Button>
                                <Button variant="primary" className="mt-3" onClick={handleShow}>Забронировать</Button>
                            </Col>
                            <Col md={6} className="image-column">
                                <div className="image-collage">
                                    <img src={photo1} alt="Image 1" className="img-fluid collage-image" />
                                    <img src={photo2} alt="Image 2" className="img-fluid collage-image" />
                                    <img src={photo3} alt="Image 3" className="img-fluid collage-image" />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className="modal-header-content">
                            <div className="modal-icon">&#x1F4CD;</div>
                            <div>
                                <div className="modal-title">ДОМ ПРИРОДЫ</div>
                                <div className="modal-subtitle">«От рыбинки к Рыбинке»</div>
                            </div>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-content">
                        <h5>выберите дату:</h5>
                        <div className="date-picker">
                            <div className="days">
                                <span>пн</span>
                                <span>вт</span>
                                <span>ср</span>
                                <span>чт</span>
                                <span>пт</span>
                                <span>сб</span>
                                <span>вс</span>
                            </div>
                            <div className="dates">
                                {dates.map((date) => (
                                    <span
                                        key={date}
                                        className={`date-item ${selectedDate === date ? 'selected' : ''}`}
                                        onClick={() => handleDateClick(date)}
                                    >
                                        {date}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <h5>выберите время:</h5>
                        <div className="time-picker">
                            {selectedDate && times[selectedDate].map((time) => (
                                <Button
                                    key={time}
                                    variant="outline-secondary"
                                    className={`time-btn ${selectedTime === time ? 'selected' : ''}`}
                                    onClick={() => handleTimeClick(time)}
                                >
                                    {time}
                                </Button>
                            ))}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Закрыть</Button>
                    <Button variant="primary" onClick={handleNext} disabled={!selectedTime}>Далее</Button>
                </Modal.Footer>
            </Modal>

            <RegistrationForm
                show={showRegistrationForm}
                handleClose={handleRegistrationClose}
                selectedDate={selectedDate}
                selectedTime={selectedTime}
            />
        </div>
    );
};

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
    </Router>
);

export default App;