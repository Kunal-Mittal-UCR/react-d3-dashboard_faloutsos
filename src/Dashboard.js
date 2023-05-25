import React, { Component } from 'react';
import data from './data';
import { Layout } from 'antd';
import View1 from './views/View1';
import View2 from './views/View2';
import View3 from './views/View3';
import View4 from './views/View4';
import View5 from './views/View5';
import View6 from './views/View6';
import './dashboard.css';

const { Sider, Content, Footer } = Layout;

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            C2_Family: "Mirai",
            C2_Country: "China",
            C2_Date : 2010, 
        }
    }

    changeC2Family = value => {
        this.setState({
            C2_Family: value
        })
    }

    changeC2Country = value => {
        this.setState({
            C2_Country: value
        })
    }

    changeDate = value => {
        this.setState({
            C2_Date: value
        })
    }

    render() {
        const {C2_Family, C2_Country, C2_Date} = this.state;
        const c2_family_objects= data.filter(user=>C2_Family===user['C2 Family'])
        const c2_date_objects= data.filter(user=>C2_Date===user.Date)
        return (
            <div>
                <Layout style={{ height: 920 }}>
                    <Sider width={500} style={{backgroundColor:'#eee'}}>
                        <Content style={{ height: 200 }}>
                            <View1 fam={C2_Family}/>
                        </Content>
                         
                        
                        <Content style={{ height: 300 }}>
                            <View2 data={c2_family_objects}/>
                        </Content>
                        {/*
                        <Content style={{ height: 400 }}>
                            <View3 
                                changeC2Country={this.changeC2Country}
                                changeDate={this.changeDate}
                            />
                        </Content>*/}
                    </Sider>
                    <Layout>
                    {/*
                        <Content style={{ height: 300 }}>
                            <View4 user={C2_Object}/>
                        </Content>
                    */}
                        <Layout style={{ height: 600 }}>
                            <Content>
                                <View5 data={c2_date_objects}/>
                            </Content>
                        {/*
                            <Sider width={300} style={{backgroundColor:'#eee'}}>
                                <View6 data={filteredData} changeC2Family={this.changeSelectUser}/>
                            </Sider>
                */}
                        </Layout>
                    </Layout>
                </Layout>
                <Layout>
                    <Footer style={{ height: 20 }}>
                        <div style={{marginTop: -10}}>
                            Source Code <a href='https://github.com/sdq/react-d3-dashboard'>https://github.com/sdq/react-d3-dashboard</a>;
                            Author <a href='https://sdq.ai'>sdq</a>;
                        </div>
                    </Footer>
                </Layout>
            </div>
        )
    }
}
