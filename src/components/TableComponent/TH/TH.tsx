import * as React from 'react';

type THProps = {
    title: string
};
export function TH (props: THProps) {
    return (
        <th>{props.title}</th>
    );
}