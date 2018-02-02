import * as React from 'react';
// import { Column } from './Column';

type  TableProps = {};
type TableState = {};

export class Table extends React.Component<TableProps, TableState> {

    render () {
        return (
            <table>
                {this.props.children}
            </table>
        );
    }
}