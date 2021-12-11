import React from "react";

// 関数コンポーネント
// export default function Hello(props) {
//   return <div>こんにちは {props.name} さん！！</div>
// }

// クラスコンポーネント
export default class Hello extends React.Component {
  render() {
    return <div>こんにちは {this.props.name} さん！！<br />
    これはクラスコンポーネントです</div>
  }
}