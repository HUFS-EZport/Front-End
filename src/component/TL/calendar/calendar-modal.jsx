import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';

export default function CalendarModal(props) {

    let dateMatchSchedule = props.test;

    let content = []

    for(let i=0; i<dateMatchSchedule.length; i++) {
        content.push(
            <div>
                <Link key={ dateMatchSchedule[i].id } href={ `/match/${dateMatchSchedule[i].id}` }>
                    {dateMatchSchedule[i].title}
                </Link>
            </div>
        )
    }
    return (
        <Modal
            { ...props }
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    전제 경기 일정
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {content}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={ props.onHide }>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}



