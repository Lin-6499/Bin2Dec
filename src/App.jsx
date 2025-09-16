import React from 'react';
class App extends React.Component {
    /**
     * 错误提示 二进制输入内容 倒叙二进制数组 十进制
     * @type {{errorMessage: string, binValue: string, binArray: [], decValue: string}}
     */
    state = {
        errorMessage:'  ',
        binValue:'',
        decValue:'',
        btnEnable:false
    }
    /**
     *检查二进制输入规范并更新状态
     * @param event
     */
    getBinText = (event)=>{
        console.log("@BinText:",event.target.value);
        let binText =event.target.value;
        if(/^[0-1]+$/.test(binText)||binText==='') {
            this.setState({
                errorMessage: '',
                binValue: event.target.value,
                btnEnable: false
            });
        }
        else
            this.setState({
                errorMessage:'请输入二进制数！！！',
                btnEnable:true,
                decValue: ''
            });
    }
    Converse = ()=>{
        let value = this.state.binValue;
        let array=value.split('').map(Number).reverse();
        let devNum=array.reduce((num,nextNum,index)=>
            num+nextNum*Math.pow(2,index)
        ,0)
        console.log("@BinArray-Reverse:",array);
        console.log("DecNumber:",devNum)
        this.setState({decValue:devNum});
    }

    render() {
        return (
            <>
                <span className={'worn'}>{this.state.errorMessage}</span>
                <br/>
                <div className={'main-part'}>
                    <input type={"text"} placeholder={"请输入二进制..."} onChange={this.getBinText}/>
                    <button onClick={this.Converse} disabled={this.state.btnEnable}>转换</button>
                    <br/>
                    <input type={"text"} readOnly={true} placeholder={"显示十进制"} value={this.state.decValue}/>
                </div>
            </>
        )
    }
}
export default App;