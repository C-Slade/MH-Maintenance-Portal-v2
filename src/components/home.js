import React from 'react';
import uuid from "uuid"
import PDF from './pdf';


const Home = ({data}) => {

    let count = 0;

    const returnPDF = (document) => {
        count++;
        return (
            <PDF documentInfo={document} count={count} key={uuid.v4()}/>
        )
    }
    return (
        <div className="Home documentsHolder">
        <div className="additionalLinks">
            <div className="links">
                <a target="_Blank" rel="noopener noreferrer" href={data.links[0].link}>{data.links[0].name}</a>
                <a target="_Blank" rel="noopener noreferrer" href={data.links[1].link}>{data.links[1].name}</a>
            </div>
        </div>
            <div className="maindocs">
                {data.documents.easilyAccessedPDFs.map((document, index) => returnPDF(document))}
            </div>
            {data.documents.segregatedPDFs.map(document => <div key={uuid.v4()} className="segregatedPDFs">{
                <React.Fragment>
                    <div className="title">{document.title}</div>
                    <div className="documents">{document.documents.map((doc) => returnPDF(doc))}</div>
                </React.Fragment>
            }</div>)}
        </div>
    )
}

export default Home;