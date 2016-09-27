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
    date: React.PropTypes.string.isRequired,
  },
  onClick(e) {
    this.setState({display: !this.state.display});
  },
  render: function() {
    var content = null;
    var src = "img/arrow_right.png";
    if (this.state.display) {
      content = <div className="OFS_content">
        <p>Created: {this.props.date}</p>
        {this.props.children}
      </div>;
      src = "img/arrow_down.png";
    }
    return (
      <div className="OFS_Content">
        <h2 className="OFS_title" onClick={this.onClick}>
          <img src={src}></img>
          {this.props.title}
        </h2>
        {content}
      </div>
    );
  }
});

OFS.Description = React.createClass({
  render: function() {
    return (
      <div className="OFS_Description">
        <OFS.Content title="Open Full Stackとは？" date="2016-09-26T12:20:56.390Z">
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
    var src="https://www.gravatar.com/avatar/b448a72e3f30e454f7a55ac06a67e448?rating=PG&size=30";
    return (
      <div className="OFS_User">
        <img src={src}></img>
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
    // 名前が設定されなければ、リンクのファイル名と同一にする
    var name = this.props.name;
    if (!name) {
      name = href.split("/");
      name = name[name.length - 1];
    }
    return (
      <div className="OFS_Anker">
        <a href={href} name={name}>{name}</a>
      </div>
    );
  }
});

OFS.Archives = React.createClass({
  render: function() {
    return (
      <div className="OFS_Archives">
        <OFS.Content title="過去アーカイブ" date="2016-09-27T13:27:02.025Z">
          今までお名前.comのVPSでサイトを運用していました。
          AWSのサーバレス運用の方が安いと考え、ドメイン含め移行しました。
          S3, Cloudfront, Route53, Certificate Manager, SESを利用して、
          たった一日でHTTPSのサーバレスサイト運用ができました。
          今後その話は記事にするとして、今回は過去のサイトをバックアップしたものと載せます。
          <br />
          以下のアーカイブはwgetでミラーしたもので、リンクは過去のドメインになってしまっています。
          なので、参照だけとなりますが、せっかく書いた記事がだせるだけでも十分ですよね。
          <ul>
            <li><OFS.Anker href="archive/1.html" name="過去ページ1" /></li>
            <li><OFS.Anker href="archive/2.html" name="過去ページ2" /></li>
            <li><OFS.Anker href="archive/3.html" name="過去ページ3(旧Openfullstackとは？)" /></li>
          </ul>
        </OFS.Content>
      </div>
    );
  }
});

OFS.Main = React.createClass({
  render: function() {
    return (
      <div className="OFS_Main">
        <OFS.Archives />
        <OFS.Description />
      </div>
    );
  }
});

ReactDOM.render(
  <OFS.Main />,
  document.getElementById('main')
);
