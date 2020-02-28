import React from 'react';
import uuid from 'uuid';
import PDF from './pdf';

const CalmReports = ({data, abbreviated}) => {
    return (
        <>
            {data.documents.segregatedPDFs.map(document => <div className="segregatedPDFs" key={uuid.v4()}>{
                <>
                    <div className="title">{document.title}</div>
                    <div className="documents">{document.documents.map((doc, index) => <PDF documentInfo={doc} 
                                                                                            count={index} 
                                                                                            key={uuid.v4()} 
                                                                                            onCalmReports={true} 
                                                                                            abbreviatedlink={abbreviated}/>)}</div>
                </>
            }</div>)}
        </>
    )
}

export default CalmReports;