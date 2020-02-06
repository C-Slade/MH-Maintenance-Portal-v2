import React from 'react';
import uuid from 'uuid';
import PDF from './pdf';

const OasCards = ({data}) => {
    return (
        <div className="oas-cards">
            {data.documents.oasCards.map((doc, index) => <PDF documentInfo={doc} count={index} key={uuid.v4()}/>)}
        </div>
    )
}

export default OasCards;