import React from "react";
import './NameList.css';

export default class NameList extends React.Component {
  // コンストラクタ
  constructor(props) {
    super(props); // 必ず書く
    this.state = {
      names: [],
      inputname: '',
    }; // 管理するデータ(state)と初期値
  }

  // テキスト入力時、inputnameに値を設定
  onInput = (e) =>{
    this.setState({
      inputname: e.target.value
    });
  }

  // 名前を追加する
  addName = () =>{
    const { names, inputname } = this.state;
    this.setState({
      names: [...names, inputname]
    }); // state更新→再描画される
  }

  // 名前を削除する
  deleteName = (index) => {
    const { names } = this.state;
    this.setState({
      names: [...names.slice(0, index), ...names.slice(index + 1)]
    }); // state更新→再描画される
  }

  // 描画
  render() {
    const { names } = this.state;
    return (<div>
      <input type="text" onInput={this.onInput} />
      <button onClick={this.addName} >名前を追加</button>
      <ul>
        {names.map((name, index) => <li key={index}>
          {name}
          <button class="innerbutton"
            onClick={() => {this.deleteName(index)}}>削除</button>
        </li>)}
      </ul>
    </div>);
  }

}