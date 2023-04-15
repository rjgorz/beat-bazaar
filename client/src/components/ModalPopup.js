import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

function ModalPopup({ open, setOpen, video }) {

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button content='Listen!' icon='play' floated='right' color='black' />}
        >
            <Modal.Content>
                <Modal.Description>
                    <iframe
                        width="858" height="470" src={video} title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <br />
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
            <Button
                content="Close Window"
                labelPosition='right'
                icon='close'
                onClick={() => setOpen(false)}
                positive
                color='black'
            />
            </Modal.Actions>
        </Modal>
    );
}

export default ModalPopup;