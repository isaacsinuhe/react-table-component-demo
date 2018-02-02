import * as React from 'react';

type TRowsProps = {
    data: Object[] | null
    children: JSX.Element[]
};
export function TRows (props: TRowsProps) {    
    return (
        <tbody>
            {
                props.data != null &&
                props.data.map((datum, sourceIndex) => (
                    <tr key={sourceIndex}>{
                        props.children.map((child, arrayIndex) => (
                            <child.type
                                key={arrayIndex}
                                data={datum}
                                {...props.children[arrayIndex].props}
                            />
                        ))
                    }
                    </tr>
                ))
            }
        </tbody>
    );
}
