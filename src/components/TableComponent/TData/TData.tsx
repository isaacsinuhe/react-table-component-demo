import * as React from 'react';

import './TData.css'; 

// tslint:disable-next-line:no-any
type dataType = { [i: string]: any };
type TDataProps = {
    forProp: string
    data?: dataType
    avatar?: string
    linkTo?: string
};

export function TData (props: TDataProps) {
    let tdDataArray: Array<string> = [];
    let avatar: null | string = null;
    let linkTo: null | string = null;

    if (props.data) {
        if (props.forProp) {
            tdDataArray = getArrayFromForProps(props.data, props.forProp);
        }
        if (props.linkTo) {
            linkTo = `https://www.${getDataFromDottedString(props.data, props.linkTo)}`;
        }
        if (props.avatar) {
            avatar = getDataFromDottedString(props.data, props.avatar);
        }
    }
    
    return (
        <td className="TData">
            <div className="content">
                {
                    avatar ? 
                    <img className="avatar" src={avatar} alt={`imageFor-${tdDataArray}`}/> :
                    false
                }
                <div className="data">
                    {
                        tdDataArray.map((data, index) => 
                            linkTo ?
                                <a key={index} href={linkTo}>
                                {data}
                            </a> :
                            <span key={index}>
                                {data}
                            </span>
                        )
                    }
                </div>
            </div>
        </td>
    );
}

function getArrayFromForProps (source: dataType | string, forProp: string) {
    let arrayValue: Array<string> = [];
    let forPropAsArray = forProp.split(' ');
    if (forPropAsArray.length > 1) {
        arrayValue = forPropAsArray.map((value, index) => {
            return getDataFromDottedString(source, value);
        });
    } else if (typeof forProp === 'string') {
        arrayValue = [getDataFromDottedString(source, forProp)];
    }
    return arrayValue;
}

function getDataFromDottedString (
    source: dataType | string, 
    dottedString: string, 
    defaultValue: string = dottedString) {

    let propsArray = dottedString.split('.');
    propsArray.forEach(value => {
        if (source) { source = source[value]; }
    });
    if (!source) {
        return defaultValue;
    }
    return source as string;
}