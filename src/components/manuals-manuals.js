import React from 'react';
import uuid from 'uuid';
import PDF from './pdf';

const MainManuals = ({data}) => {
    return (
        <React.Fragment>
            <div className="maindocs">
                {data.documents.easilyAccessedPDFs.map((document, index) => <PDF documentInfo={document} count={index} key={uuid.v4()}/>)}
            </div>
            {data.documents.segregatedPDFs.map(document => <div key={uuid.v4()} className="segregatedPDFs">{
                <React.Fragment>
                    <div className="title">{document.title}</div>
                    <div className="documents">{document.documents.map((doc, index) => <PDF documentInfo={doc} count={index} key={uuid.v4()}/>)}</div>
                </React.Fragment>
            }</div>)}
        </React.Fragment>
    )
}

export default MainManuals;