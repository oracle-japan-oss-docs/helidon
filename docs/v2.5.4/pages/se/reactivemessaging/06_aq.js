<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.58"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.2z6RGq.1" title="原文 : To enable AQ Connector add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">AQコネクタを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.messaging.aq&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-messaging-aq&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_reactive_oracle_aq_connector"><span class="merged" id="all.4eUebl" title="原文 : Reactive Oracle AQ Connector">リアクティブOracle AQコネクタ</span></h2>
<div class="section">

<h3 id="_sending_and_receiving"><span class="merged" id="all.c23dW" title="原文 : Sending and receiving">送受信</span></h3>
<div class="section">
<markup
lang="java"
title="Example of producing to and consuming from Oracle AQ:"
>PoolDataSource pds = PoolDataSourceFactory.getPoolDataSource();<span class="conum" data-value="1" />
pds.setConnectionFactoryClassName("oracle.jdbc.pool.OracleDataSource");
pds.setURL("jdbc:oracle:thin:@(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(Host=192.168.0.123)(Port=1521))(CONNECT_DATA=(SID=XE)))");
pds.setUser("frank");
pds.setPassword("frank");

AqConnector seConn = AqConnector.builder()<span class="conum" data-value="2" />
    .dataSource("test-ds", pds)
    .build();

Channel&lt;String&gt; toAq = Channel.&lt;String&gt;builder()<span class="conum" data-value="3" />
    .name("toAq")
    .subscriberConfig(AqConnector.configBuilder()
        .queue("example_queue_1")
        .dataSource("test-ds")
        .build())
    .build();

Channel&lt;String&gt; fromAq = Channel.&lt;String&gt;builder()<span class="conum" data-value="4" />
    .name("fromAq")
    .publisherConfig(AqConnector.configBuilder()
        .queue("example_queue_1")
        .dataSource("test-ds")
        .build())
    .build();

Messaging.builder()<span class="conum" data-value="5" />
    .connector(seConn)
    .publisher(toAq, Multi.just("Hello", "world", "from", "Oracle", "DB!").map(Message::of))<span class="conum" data-value="6" />
    .listener(fromAq, s -&gt; System.out.pritln("Message received: "+s))<span class="conum" data-value="7" />
    .build()
    .start();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3NX7pD" title="原文 : Prepare Oracle UCP">Oracle UCPの準備</span></li>
<li data-value="2"><span class="merged" id="all.3apkUB" title="原文 : Setup AQ connector and provide datasource with an identifier test-ds">AQコネクタを設定し、データソースに識別子<code>test-ds</code>を指定</span></li>
<li data-value="3"><span class="merged" id="all.4QhnF7" title="原文 : Setup channel for sending messages to queue example_queue_1 with datasource test-ds">データソース<code>test-ds</code>を使用してキュー<code>example_queue_1</code>にメッセージを送信するための設定チャネル</span></li>
<li data-value="4"><span class="merged" id="all.1RIKpf" title="原文 : Setup channel for receiving messages from queue example_queue_1 with datasource test-ds">データソース<code>test-ds</code>でキュー<code>example_queue_1</code>からメッセージを受信するための設定チャネル</span></li>
<li data-value="5"><span class="merged" id="all.3sAzm1" title="原文 : Register connector and channels">コネクタおよびチャネルの登録</span></li>
<li data-value="6"><span class="merged" id="all.12Tkd5" title="原文 : Add a publisher for several test messages to publish them to example_queue_1 immediately">複数のテスト・メッセージのパブリッシャを追加して、<code>example_queue_1</code>にすぐに公開</span></li>
<li data-value="7"><span class="merged" id="all.4JsvY5" title="原文 : Subscribe callback for any message coming from example_queue_1"><code>example_queue_1</code>からのメッセージのサブスクライブ・コールバック</span></li>
</ul>
</div>
</div>
</doc-view>
