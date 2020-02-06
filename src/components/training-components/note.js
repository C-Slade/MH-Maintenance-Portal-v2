import React from 'react';
import { Spring } from 'react-spring/renderprops';

const Note = ({noteInfo, count}) => {
    const ifLink = () => {
        if (noteInfo.link) {
            return (
                <Spring
                    from={{opacity: 0}}
                    to={{opacity: 1}}
                    config={{delay: `${count * 150}`, duration: 650}}
                >
                    {props => (
                        <div className="noteLink note" style={props}>
                            <p className="linkMessage" style={{textDecoration: 'underline', cursor: 'pointer'}}>{noteInfo.message}</p>
                        </div>
                    )}
                </Spring>
            )
        } else {
            return (
                <Spring
                    from={{opacity: 0}}
                    to={{opacity: 1}}
                    config={{delay: `${count * 150}`, duration: 650}}
                >
                    {props => (
                        <div className="noteLink note" style={props}>
                            <p>{noteInfo.message}</p>
                        </div>
                    )}
                </Spring>
            )
        }
    }
    return (
        <>
            {ifLink()}
        </>
    )
}

export default Note;