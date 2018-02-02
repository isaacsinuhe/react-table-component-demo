import * as React from 'react';

type THeadProps = {
    children: JSX.Element | JSX.Element[]
};
export function THead (props: THeadProps) {
    return (
        <thead>
            <tr>
                {props.children}
            </tr>
        </thead>
    );
}