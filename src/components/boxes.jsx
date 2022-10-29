import React, { Component } from 'react';
import Box from './box';

class Boxes extends Component { //利于维护局部变量
    render() { 
        return (
            <React.Fragment>
                <button onClick={this.props.onReset}
                    style={{ marginBottom: "15px" }} className='btn btn-info'>Reset</button>
                {this.props.boxes.map(box => (
                    <Box
                        key={box.id}    // 在这个标签里写给组件传的值
                        box={box}
                        onDelete={this.props.onDelete}    // 传方法
                        onClickLeft={() => this.props.onClickLeft(box)}   //均为传引用，不是传值
                        onClickRight={() => this.props.onClickRight(box)}
                     />
                ))}
            </React.Fragment>
        );
    }
}
 
export default Boxes;