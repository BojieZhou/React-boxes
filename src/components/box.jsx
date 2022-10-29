import React, { Component } from 'react';

class Box extends Component {
    // state = { // React内容改变很多时候用数据来改变
    //     x: this.props.x,   // 将某些值存到局部变量里，有些标签需要存数据
    // };

    componentWillUnmount() {
        console.log("Box - Unmounted");
    }

    render() {  // 用来返回当前组件最后用来渲染的html结构
        return (    // style标签里有一个对象，对象用大括号括起来
            <React.Fragment>
                <div style={this.getStyles()}>{this.toString()}</div>  
                <button onClick={this.props.onClickLeft} className="btn btn-primary m-2">left</button>
                <button onClick={this.props.onClickRight} className='btn btn-success m-2'>right</button>
                <button onClick={() => this.props.onDelete(this.props.box.id)} className='btn btn-danger m-2'>delete</button>
            </React.Fragment>
        );
    }

    getStyles() {
        let styles = {
            width: "50px",
            height: "50px",
            backgroundColor: "lightblue", // 所有用减号连接的值改为驼峰命名法
            color: "white",
            textAlign: "center",
            lineHeight: "50px",
            borderRadius: "5px",
            marginLeft: this.props.box.x,
        };

        if (this.props.box.x === 0) {
            styles.backgroundColor = 'orange';
        }

        return styles;
    }

    toString() {
        const { x } = this.props.box;
        return `x: ${x}`;
    }
}
 
export default Box;