import React from "react";
import { Card } from "react-bootstrap";

function Explain() {
    return (
        <div className="container">
            <Card>
                <Card.Header>Lunar Society</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                        The 18th century was a time of change and revolution across the world. Intellectuals and ordinary men alike would gather to discuss anything and everything, from the social order problems of the day, to the latest scientific advances, and the intertwining political and philosophical issues. Clubs were formed in order to allow members the pleasure of enjoying the finest food and wine whilst debating these issues with other like-minded individuals.

The Lunar Society, or Lunar Circle as it was first called, was one such club. It met in and around Birmingham, England between 1765 and 1813. It was the members of this club however, that would set it apart from any other. They cheerfully referred to themselves as the ‘lunatics’, but this could not have been much further from the truth, as the revolutionaries involved would change the face of the world forever.

{' '}
                        </p>
                        <footer className="blockquote-footer">
                            by Ben Johnson<cite title="Source Title"></cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    )

}

export default Explain