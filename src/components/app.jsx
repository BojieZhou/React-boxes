import React, { Component } from 'react';
import Navbar from './navbar';
import Boxes from './boxes';

class App extends Component {   // 类组件，方便维护每一个状态
    state = { 
        boxes: [
            { id: 1, x: 0 },
            { id: 2, x: 1 },
            { id: 3, x: 2 },
            { id: 4, x: 3 },
        ]
    } 

    handleReset = () => {   // 实现在外部修改state的值，直接在组件内部修改state的值
        const boxes = this.state.boxes.map(b => {
            return {
                id: b.id,
                x: 0,
            }
        });
        this.setState({ boxes });
    }

    handleClickLeft = (box) => {
        const boxes = [...this.state.boxes];    // 浅拷贝，复制的是每一个对象的地址
        const k = boxes.indexOf(box); //第几个box
        boxes[k] = { ...boxes[k] }; 
        /*
        这里用到深拷贝的原因是setState是异步实现重新调用render的，也就是多线程，当setState执行完毕之后，
        state会更新到某个最新线程的更新状态，但是旧线程的state还没有更新，所以这时的state会在update()生命周期里面作为prevState传入，
        讲句人话就是，如果这里不用深拷贝，那么所有线程公用一份state，无论state怎么更新，在update()生命周期时所调用的prevState都是最新的，
        不能够区别未更新state和更新state
        */ 
        boxes[k].x--;
        this.setState({ boxes });
    }

    handleClickRight = (box) => {
        const boxes = [...this.state.boxes];    // 浅拷贝，复制的是每一个对象的地址
        const k = boxes.indexOf(box); //第几个box
        boxes[k] = { ...boxes[k] };
        boxes[k].x++;
        this.setState({ boxes });
    }
 
    handleDelete = (boxId) => {
        const boxes = this.state.boxes.filter(
            b => b.id !== boxId
        );
        this.setState({ boxes });   // 尽量只用setState函数修改值
    }
    render() { 
        return (
            <React.Fragment>
                <Navbar boxesCount={this.state.boxes.filter(b => b.x !== 0 ).length}  />
                <div className='container'>
                    <Boxes
                        boxes = {this.state.boxes}
                        onReset={this.handleReset}
                        onClickLeft={this.handleClickLeft}
                        onClickRight={this.handleClickRight}
                        onDelete={this.handleDelete}
                    />
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;