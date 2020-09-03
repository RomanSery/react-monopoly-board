import React from "react";
import { NyThemeData } from "../NyTheme";
import { ColorBar } from "./ColorBar";

interface Props {
    id: number;
}

export const PropertyDisplay: React.FC<Props> = ({ id }) => {

    const txt: string | undefined = NyThemeData.get(id)?.name;

    return (
        <React.Fragment>
            <ColorBar id={id} />
            <div className="square-name">{txt}</div>
        </React.Fragment>
    );

};