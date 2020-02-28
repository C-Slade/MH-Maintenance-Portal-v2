import React from 'react';
import uuid from "uuid"
import PDF from './pdf';

const Memos = ({data}) => {
    return (
        <div className="Safety documentsHolder">
            {data.documents.segregatedPDFs.map(document => <div key={uuid.v4()} className="segregatedPDFs">{
                <>
                    <div className="title">{document.title}</div>
                    <div className="documents">{document.documents.map((doc, index) => <PDF documentInfo={doc} count={index} key={uuid.v4()}/>)}</div>
                </>
            }</div>)}
        </div>
    )
}

export default Memos;