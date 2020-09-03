import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'

interface Props {
    id: number;
}

export const ChanceDisplay: React.FC<Props> = ({ id }) => {

    return (
        <React.Fragment>
            <div className="blank"></div>
            <div className="icon">
                <FontAwesomeIcon icon={faQuestion} size="3x" color="orange" />
            </div>
            <div className="square-name"> CHANCE</div>
        </React.Fragment>
    );

};