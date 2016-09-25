/**
Copyright 2016 kajiiiro

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/** template
OFS. = React.createClass({
  render: function() {
    return (
      <div className="OFS_">
    );
  }
});
*/

var OFS = OFS || {};

// Contentはタイトルのクリックで表示/非表示が切り替わる
OFS.Content = React.createClass({
  getInitialState() {
    return {display: false};
  },
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },
  onClick(e) {
    this.setState({display: !this.state.display});
  },
  render: function() {
    if (this.state.display) {
      return (
        <div className="OFS_Content">
          <h2 className="OFS_title" onClick={this.onClick}>{this.props.title}</h2>
          <div className="OFS_content">
            {this.props.children}
          </div>
        </div>
      );
    }
    return (
      <div className="OFS_Content" onClick={this.onClick}>
        <h2 className="OFS_title">{this.props.title}</h2>
      </div>
    );
  }
});

OFS.Description = React.createClass({
  render: function() {
    return (
      <div className="OFS_Description">
        <OFS.Content title="Open Full Stackとは？">
          Open Full Stackの目的は私が経験した技術的な内容を記録することにあります。
          これは以下の考え方に基づいています。
          <ul>
            <li>記憶は曖昧である</li>
            <li>一度行ったことは二度行うことを意識する</li>
          </ul>
          まあ、単なる備忘録になります。
          <br />
          Open Full Stackという名前の意味はフルスタックエンジニアから取っています。
          私はソフトウェア関連企業で元々アプリ開発(webフロントエンドからバックエンドのアプリ等)を行っていました。
          ですが人手不足でインフラ開発に関わるようになりvyosといったルータやL2SW等に触れていったのです。
          入社当時はなにも知らなかったのでプログラムをすごい勉強しました。
          2週間でオライリーのc++実践入門を詰め込んだりしました。
          それがインフラ開発になってからはさらに勉強しました。
          3ヶ月間家近くのタリーズに缶詰(コーヒー一杯で6時間。吐きそうになるので真似しないでください)になり、
          H26のネットワークスペシャリスト情報処理試験にギリギリ合格しました。
          あと組み込みも経験できればフルスタックエンジニアになれる…いや、なりたい！と思い、
          Open Full Stackという名前にしました。
          <br />
          今まではwordpressで運用していました。
          DOS攻撃の踏み台サーバにされたり、
          各国から攻撃を受けてすごい重くなった管理できなかったりと
          苦い経験を踏んで、wordpressはやめました。
          現在はS3,Cloudfrontのサーバレスでどこまで安く公開できるかを考えています。
        </OFS.Content>
      </div>
    );
  }
});

OFS.User = React.createClass({
  propTypes: {
    user: React.PropTypes.string.isRequired,
  },
  render: function() {
    // TODO: create gravatar url
    var src="https://www.gravatar.com/avatar/b448a72e3f30e454f7a55ac06a67e448?rating=PG&size=50";
    return (
      <div className="OFS_User">
        <img src={src} ></img>
        <p>{this.props.user}</p>
      </div>
    );
  }
});

OFS.Anker = React.createClass({
  propTypes: {
    href: React.PropTypes.string.isRequired,
  },
  render: function() {
    var href = this.props.href;
    var name = href.split("/");
    name = name[name.length - 1];
    return (
      <div className="OFS_Anker">
        <a href={href} name={name}>{name}</a>
      </div>
    );
  }
});

OFS.Contents = React.createClass({
  render: function() {
    return (
      <div className="OFS_Contents">
        {this.props.data}
      </div>
    );
  }
});

OFS.Main = React.createClass({
  render: function() {
    return (
      <div className="OFS_Main">
        <OFS.Description />
        <OFS.Anker href="/js/main.js" />
        <OFS.User user="kajiiiro" />
      </div>
    );
  }
});

ReactDOM.render(
  <OFS.Main />,
  document.getElementById('main')
);
