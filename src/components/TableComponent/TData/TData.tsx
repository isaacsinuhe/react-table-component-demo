import * as React from 'react';
import 'TData.css';

// tslint:disable-next-line:no-any
type dataType = { [i: string]: any };
type TDataProps = {
    forProp: string
    data?: dataType
    avatar?: string
};

export function TData (props: TDataProps) {
    let dataString: null | string = null;
    let avatar: null | string = null;

    if (props.data) {
        dataString = getDataFromDottedString(props.data, props.forProp);

        if (props.avatar) {
            avatar = 'http://oi66.tinypic.com/2a0n4ue.jpg';
            // avatar = getDataFromDottedString(props.data, props.avatar);
        }

    }

    console.log(props.avatar);
    return (
        <td>
            {avatar ? 
                <img className="avatar" src={avatar} alt={`imageFor-${dataString}`}/> :
                false
            }
            {dataString}
        </td>
    );
}

function getDataFromDottedString (source: dataType | string, dottedString: string) {
    let propsArray = dottedString.split('.');
    propsArray.forEach(value => {
        if (source) { source = source[value]; }
    });
    return source as string;
}