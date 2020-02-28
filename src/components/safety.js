import React from 'react';
import uuid from "uuid"
import PDF from './pdf';
import AdditionalLinksButton from './additionalLinks';

const Safety = ({data}) => {
    return (
        <div className="Safety documentsHolder">
            <AdditionalLinksButton links={data.links}/>
            <div className="additionalLinks">
                <div className="links">
                    <a target="_Blank" rel="noopener noreferrer" href={data.links[0].link}>{data.links[0].name}</a>
                </div>
            </div>
            <div className="maindocs">
                {data.documents.easilyAccessedPDFs.map((document, index) => <PDF documentInfo={document} count={index} key={uuid.v4()}/>)}
            </div>
            {data.documents.segregatedPDFs.map(document => <div key={uuid.v4()} className="segregatedPDFs">{
                <>
                    <div className="title">{document.title}</div>
                    <div className="documents">{document.documents.map((doc, index) => <PDF documentInfo={doc} count={index} key={uuid.v4()}/>)}</div>
                </>
            }</div>)}
        </div>
    )
}

export default Safety;