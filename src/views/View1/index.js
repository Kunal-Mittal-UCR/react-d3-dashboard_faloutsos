import React, { Component } from 'react';
import { Avatar } from 'antd';
import './view1.css';

export default class View1 extends Component {
    render() {
        let {fam} = this.props;
        if (fam === null) {
            fam = null
        }
        console.log(fam)
        return (
            <div id='view1' className='pane'>
                <div className='header'>User Profile</div>
                <div>
                    <div className={'avatar-view'}>
                        <Avatar shape="square" size={120} icon="user" />
                    </div>
                    <div className={'info-view'}>
                        <div>Family: {fam} </div>
                    </div>
                </div>
            </div>
        )
    }
}
