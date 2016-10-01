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

OFS.Archives = React.createClass({
  render: function() {
    return (
      <div className="OFS_Archives">
        <OFS.Content title="過去アーカイブ" date="2016-09-27T13:27:02.025Z">
          今までお名前.comのVPSでサイトを運用していました。
          AWSのサーバレス運用の方が安いと考え、ドメイン含め移行しました。
          S3, Cloudfront, Route53, Certificate Manager, SESを利用して、
          たった一日でHTTPSのサーバレスサイト運用ができました。
          今後その話は記事にするとして、今回は過去サイトのバックアップを載せます。
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

/** template for article
 * set date by "new Date().toISOString()"
OFS.ArticleXXX = React.createClass({
  render: function() {
    var title = "[XXX]abc";
    var date = "YYYY-MM-DDThh:mm:ss.sssZ";
    return (
      <div className="OFS_Article">
        <OFS.Content title={title} date={date}>
        </OFS.Content>
      </div>
    );
  }
});
*/
OFS.Article001 = React.createClass({
  render: function() {
    var src = "img/site_architecture.png";
    var title = "[001]激安！本サイトのAWS構成";
    var date = "2016-10-01T16:31:31.845Z";
    return (
      <div className="OFS_Article">
        <OFS.Content title={title} date={date}>
          本サイトはAWSで公開しています。その構成を以下に示します。
          <img src={src}></img>
          <br />
          上記構成は以下の要件・方針を満たすように作りました。
          <ul>
            <li>独自ドメインで公開</li>
            <li>とにかく安く運用</li>
            <li>HTTPSで公開</li>
          </ul>
          まず、「独自ドメインで公開」ですが、
          一応ブログサイトとしては自分のドメインで運用したいですよね。
          ここではRoute 53を利用しています。
          ですが別のDNSサービス(お名前.com等)でも可能と思われ、
          とにかくCNAMEレコードが設定できればOKかと思います。
          しかし他のAWSサービスとの連携を考えた場合に、
          Route 53でドメインを取るほうが圧倒的に楽です。
          ドメインを取得するのも簡単でボタンをポチポチおして、
          ドメイン所有者情報を入力していくだけです。
          本サイトのTLD「.net」系ドメインを
          Route 53では$11/年で購入できました。
          <br />
          <br />
          次に「とにかく安く運用」です。
          前のサイトはお名前.comのVPSサービスを利用していて、
          ¥1000/月程かかっていました。
          VPSではwordpressでサイトを公開していたのですが、
          世界中から攻撃にあって、iptablesを色々設定したりして凌いでいました。
          その中でwordpressのxmlrpc機構の脆弱性を攻撃され、
          あえなく撃沈します。
          この攻撃では別サイトにRPC(リモートプロシージャコール)しようとする部分を利用して、
          応答受信後全く情報を返さないタイムアウト専用サーバにアクセスさせようとします。
          そうするとwordpressは応答を待ち続け、
          メインのブログのサービス提供を放棄します。
          2ヶ月我慢しましたが、こう悟ったのです。
          <p><em><strong>
            たかだか1コア1ギガメモリのサーバに月々1000円払ってやりたかったことは、
            負けない！と息巻いて日本のグローバルIP調べてちまちまiptables設定することかと。
            その時点で負けてるし、だれと勝負しているのかと。
          </strong></em></p>
          この問題を回避するシンプルの解は一つで、
          そもそもサーバの管理をやめてしまうという方法です。
          つまりサーバレスの運用を考えはじめました。
          それを実現してくれるのがAWSです。
          ちなみにIaasのEC2ではt2.microであっても¥1000/月かかりますし、
          そもそもお名前.comと同様の問題は回避できません。
          そこでSaasのS3です。
          S3では静的ファイルであればサーバなんか借りなくても公開可能です。
          その際にファイル容量、インターネット通信量などが費用として発生します。
          ですがEC2のCPU/メモリの専有費用と比較しても圧倒的に安いんです。
          実際に9月26日〜9月末までの数日間で、ファイル容量：$0.05、
          インターネット通信量：$0.03しかかかっていません。
          これが一日の費用だとしても
          計算では$0.08 * 30日間 = $2.4の費用しか発生しません。
          このように遠足のおやつ代程度でサイトが公開できるのです。
          <br />
          <br />
          最後に「HTTPSで公開」です。
          HTTPSで公開する理由も必要性も特にありませんが、
          最近はHTTPSを必須しようとする流れもあり、
          乗っておくかという軽い感じでHTTPSにしました。
          これが要件にある場合構成は大きく変わります。
          S3ではAWSの仕様によりHTTPSで公開することができません。
          そのため、CloudFrontを利用する必要があります。
          CloudFrontはCDNサービスで、
          コンテンツのオリジンをS3に設定できます。
          その時に必要なのはS3のバケットポリシーに
          CloudFrontからのアクセスを許可することです。
          一点だけ注意が必要なのが、S3のファイルを更新しても
          その更新内容が反映されない点です。
          そのため、CloudFrontの「Invalidations」から
          キャッシュの消し込みが必要となります。
          HTTPSで公開するためには証明書も必要となります。
          通常証明書は安くても¥3000/年程度します。
          ですが証明書はCertificate Managerから無料で発行できます。
          そのために必要なのはadmin@ドメイン等のメールが受信できることです。
          ドメインは独自のものをとっているので、MXレコード設定して
          一時的にEC2借りてもいいんですが、SESを利用しました。
          Route 53でドメインをとっているので、
          ボタンポチポチしてドメインをVerifyします。
          あとはS3へメールを保存する設定にし、
          Certificate Managerからドメインの証明書を発行します。
          メール設定したS3を見ると受信していると思いますので、
          リンクをクリックして証明書を発行となります。
          ちなみに証明書発行といってもダウンロードできるわけではありません。
          ELBとCloudFrontで利用できるようになっただけです。
          また、もうメールは不要なので、
          ルールを無効にして受信できないようにしておくといいかと思います。
          あとはRoute 53でCloudFrontの「XXXX.cloudfront.net」というURLを
          CNAMEの値に設定したレコードで公開できます。
          <br />
          <br />
          ここで手順がごちゃごちゃになったので整理します。
          AWSでの作業順序は以下になります。
          <ul>
            <li>Route 53でドメイン購入依頼(購入までに少し時間かかります)</li>
            <li>SESを設定してドメインのメールが受信できるように設定</li>
            <li>Certificate Managerにて証明書発行依頼</li>
            <li>受信メールのURLを踏んで証明書発行</li>
            <li>SESが不要であればルールを無効化</li>
            <li>S3でバケットを作成</li>
            <li>バケットにファイルを格納(S3での公開設定は不要)</li>
            <li>CloudFrontのディストリビューションを作成</li>
            <li>S3のバケットにCloudFrontからのアクセス許可ポリシーを設定</li>
            <li>Route 53にてCloudFrontのURLをCNAMEレコードに設定</li>
          </ul>
          最終的な9月26〜9月末間の費用(税抜)は以下となります。
          <ul>
            <li>ドメイン購入(初回のみ): $11/年</li>
            <li>CloudFront: $0.10</li>
            <li>インターネット通信費: $0.03</li>
            <li>Route 53: $0.51(内$0.50はDNSレコードがあると毎月発生する金額)</li>
            <li>S3: $0.05</li>
          </ul>
          上記をもとに計算した10月の想定費用は$2.3となります。
          <br />
          <br />
          ここまでで構成を説明してきましたが、デメリットももちろんあります。
          それはアプリケーションではないということです。
          サーバレスであるため、DBを見に行ったりということはできません。
          ですので、ログイン機能を実装するといったことは難しいのです。
          ですが不可能ではないと思います。
          その方法は未検証ですがAPI GatewayとLambdaサービスです。
          今後検証していこうと思います。
          また、サイトのデザインを自分で作成しないといけないのも、
          意外と時間がかかります。
          私の場合、React, Sassを利用していて
          基本的に全て手作業でデザインしています。
          こちらに関してもまた別途記事にしたいと思います。
          <br />
          <br />
          最後にこの構成にしてからまだ運用期間が短いです。
          今後見つかるであろうメリット・デメリット含めて記事にしていこうと思います。
        </OFS.Content>
      </div>
    );
  }
});

OFS.Main = React.createClass({
  render: function() {
    return (
      <div className="OFS_Main">
        <OFS.Article001 />
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
