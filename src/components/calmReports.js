import React from 'react';
import uuid from 'uuid';
import PDF from './pdf';

const Calm = ({data, abbreviated}) => {
    let count = 0;

    const returnPDF = (document) => {
        count++;
        return (
            <PDF documentInfo={document} count={count} key={uuid.v4()} onCalm={true} abbreviatedlink={abbreviated}/>
        )
    }

    return (
        <React.Fragment>
            {data.documents.segregatedPDFs.map(document => <div className="segregatedPDFs" key={uuid.v4()}>{
                <React.Fragment>
                    <div className="title">{document.title}</div>
                    <div className="documents">{document.documents.map((doc) => returnPDF(doc))}</div>
                </React.Fragment>
            }</div>)}
        </React.Fragment>
    )
}

export default Calm;