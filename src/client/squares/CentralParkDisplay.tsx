import React from "react";

interface Props {
    id: number;
}

export const CentralParkDisplay: React.FC<Props> = ({ id }) => {

    return (
        <React.Fragment>
            <div className="icon"></div>
            <div className="square-name"> central park</div>
        </React.Fragment>
    );

};