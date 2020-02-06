import React from 'react';
import uuid from 'uuid';
import PDF from './pdf';

const Calm = ({data, abbreviated}) => {
    return (
        <React.Fragment>
            {data.documents.segregatedPDFs.map(document => <div className="segregatedPDFs" key={uuid.v4()}>{
                <React.Fragment>
                    <div className="title">{document.title}</div>
                    <div className="documents">{document.documents.map((doc, index) => <PDF documentInfo={doc} 
                                                                                            count={index} 
                                                                                            key={uuid.v4()} 
                                                                                            onCalm={true} 
                                                                                            abbreviatedlink={abbreviated}/>)}</div>
                </React.Fragment>
            }</div>)}
        </React.Fragment>
    )
}

export default Calm;