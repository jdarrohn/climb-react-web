import React, { useState } from 'react'
import { MessagesConsumer } from './messagesContext'
import { Alert, Container, Row, Col } from 'reactstrap'

export const Messages = () => {
    const [visible, setVisible] = useState(true);

    const onDismiss = () => {
        setVisible(false);
    }

    return (
        <MessagesConsumer>
            {({message, type}) => (
                message && visible &&
                    <Container className="py-5">
                    <Row>
                        <Col lg="8" className="mx-lg-auto">
                            <Alert isOpen={visible} toggle={onDismiss} color={type}>
                                { message }
                            </Alert>
                        </Col>
                    </Row>
                    </Container>
            )}
        </MessagesConsumer>
    )
}

export default Messages