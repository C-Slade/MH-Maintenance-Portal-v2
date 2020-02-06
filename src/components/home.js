import React from 'react';
import uuid from "uuid"
import PDF from './pdf';


const Home = ({data}) => {
    return (
        <div className="Home documentsHolder">
        <div className="additionalLinks">
            <div className="links">
                <a target="_Blank" rel="noopener noreferrer" href={data.links[0].link}>{data.links[0].name}</a>
                <a target="_Blank" rel="noopener noreferrer" href={data.links[1].link}>{data.links[1].name}</a>
            </div>
        </div>
            <div className="maindocs">
                {data.documents.easilyAccessedPDFs.map((document, index) => <PDF documentInfo={document} count={index} key={uuid.v4()}/>)}
            </div>
            {data.documents.segregatedPDFs.map(document => <div key={uuid.v4()} className="segregatedPDFs">{
                <React.Fragment>
                    <div className="title">{document.title}</div>
                    <div className="documents">{document.documents.map((doc, index) => <PDF documentInfo={doc} count={index} key={uuid.v4()}/>)}</div>
                </React.Fragment>
            }</div>)}
        </div>
    )
}

export default Home;