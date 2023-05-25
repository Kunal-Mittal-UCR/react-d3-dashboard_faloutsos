import React, { Component } from 'react';
import BarChart from '../../charts/BarChart';
import './view5.css';

export default class View5 extends Component {
    render() {
        const {data} = this.props;
        let year_count = {}
        for(let i = 0; i < data.length; ++i){
            if(year_count[data[i]["Date"]] === undefined){
                year_count[data[i]["Date"]] = 0;
            }
            year_count[data[i]["Date"]]++;
        }

        return (
            <div id='view5' className='pane'>
                <div className='header'>Age</div>
                <div style={{ overflowX: 'scroll',overflowY:'hidden' }}>
                <BarChart data={year_count} width={1000} height={550}/>
                </div>                
            </div>
        )
    }
}
