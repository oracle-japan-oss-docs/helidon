<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_reactive_oracle_advanced_queueing_connector"><span class="merged" id="all.2GFOv0" title="原文 : Reactive Oracle Advanced Queueing Connector">リアクティブOracle Advanced Queueingコネクタ</span></h2>
<div class="section">
<p><span class="merged" id="all.1FQOGc.spl1" title="原文 : Connecting streams to Oracle AQ with Reactive Messaging couldn&rsquo;t be easier.">リアクティブ・メッセージングを使用したOracle AQへのストリームの接続はより簡単にはできないでしょう。</span> <span class="merged" id="all.1FQOGc.spl2" title="原文 : This connector extends Helidon&rsquo;s JMS connector with Oracle AQ&rsquo;s specific API.">このコネクタは、HelidonのJMSコネクタをOracle AQ固有のAPIで拡張します。</span> </p>

<markup
lang="xml"
title="必要な依存関係:"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.messaging&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-messaging&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.messaging.aq&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-messaging-aq&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>


<h3 id="_config"><span class="merged" id="all.3rjwSI.2"  title="原文:: Config">構成</span></h3>
<div class="section">
<p><span class="merged" id="all.QvAaL" title="原文 : Connector name: helidon-aq">コネクタ名: <code>helidon-aq</code></span></p>

<div class="block-title"><span class="merged" id="all.x2f9G.1"  title="原文:: Attributes"><span>属性</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.YSZN5"  title="原文: datasource"><code>datasource</code></span></td>
<td class=""><span class="merged" id="all.2HX7s1" title="原文 : name of the datasource bean used to connect Oracle DB with AQ">Oracle DBとAQの接続に使用されるデータソースBeanの名前</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3kDdAI"  title="原文: url"><code>url</code></span></td>
<td class=""><span class="merged" id="all.4Ep4FA" title="原文 : jdbc connection string used to connect Oracle DB with AQ (forbidden when datasource is specified)">AQとのOracle DBの接続に使用されるJDBC接続文字列(<code>datasource</code>が指定されている場合は禁止)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2FqwBE.1"  title="原文: username"><code>username</code></span></td>
<td class=""><span class="merged" id="all.2AfdZV" title="原文 : User name used to connect Oracle DB with AQ (forbidden when datasource is specified)">AQとのOracle DBの接続に使用されるユーザー名(<code>datasource</code>が指定されている場合は禁止)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.xgZgv.1"  title="原文: password"><code>password</code></span></td>
<td class=""><span class="merged" id="all.1eQPB6" title="原文 : Password to connect Oracle DB with AQ (forbidden when datasource is specified)">AQでOracle DBに接続するためのパスワード(<code>datasource</code>が指定されている場合は禁止)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2SYAnU.1"  title="原文: type"><code>type</code></span></td>
<td class=""><span class="merged" id="all.HiD86.1" title="原文 : Possible values are: queue, topic">可能な値は次のとおりです: <code>queue</code>, <code>topic</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Cba7M.1"  title="原文: destination"><code>destination</code></span></td>
<td class=""><span class="merged" id="all.2DcbN5.1" title="原文 : Queue or topic name">キューまたはトピック名</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1SCUeZ.1"  title="原文: acknowledge-mode"><code>acknowledge-mode</code></span></td>
<td class=""><span class="merged" id="all.2FTDkj.spl1" title="原文 : Possible values are: AUTO_ACKNOWLEDGE- session automatically acknowledges a client&rsquo;s receipt of a message, CLIENT_ACKNOWLEDGE - receipt of a message is acknowledged only when Message.ack() is called manually, DUPS_OK_ACKNOWLEDGE - session lazily acknowledges the delivery of messages.">可能な値は次のとおりです: <code>AUTO_ACKNOWLEDGE</code> - セッションがメッセージのクライアント受信を自動的に確認する、<code>CLIENT_ACKNOWLEDGE</code> - メッセージの受信は、<code>Message.ack()</code>が手動でコールされた場合にのみ確認されます。<code>DUPS_OK_ACKNOWLEDGE</code> - sessionは、メッセージの配信を遅延確認します。</span> <span class="merged" id="all.2FTDkj.spl2" title="原文 : Default value: AUTO_ACKNOWLEDGE">デフォルト値: <code>AUTO_ACKNOWLEDGE</code></span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4aBMur.1"  title="原文: transacted"><code>transacted</code></span></td>
<td class=""><span class="merged" id="all.3B1tjp.1.spl1" title="原文 : Indicates whether the session will use a local transaction.">セッションがローカル・トランザクションを使用するかどうかを示します。</span> <span class="merged" id="all.3B1tjp.1.spl2"  title="原文:: Default value: false">デフォルト値: <code>false</code></span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.28rkos.1"  title="原文: message-selector"><code>message-selector</code></span></td>
<td class=""><span class="merged" id="all.3G8XH7.1.spl1" title="原文 : JMS API message selector expression based on a subset of the SQL92.">SQL92のサブセットに基づくJMS APIメッセージ・セレクタ式。</span> <span class="merged" id="all.3G8XH7.1.spl2" title="原文 : Expression can only access headers and properties, not the payload.">式はヘッダーおよびプロパティにのみアクセスでき、ペイロードにはアクセスできません。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.12Z8gJ.1"  title="原文: named-factory"><code>named-factory</code></span></td>
<td class=""><span class="merged" id="all.7x8B5.1" title="原文 : Select in case factory is injected as a named bean or configured with name.">ファクトリが名前付きBeanとしてインジェクトされる場合、または名前で構成される場合に選択します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3RfDpa.1"  title="原文: poll-timeout"><code>poll-timeout</code></span></td>
<td class=""><span class="merged" id="all.1r0ZJ1.1.spl1" title="原文 : Timeout for polling for next message in every poll cycle in millis.">ポーリング・サイクルごとの次のメッセージのポーリングのタイムアウト(ミリ秒)。</span> <span class="merged" id="all.1r0ZJ1.1.spl2"  title="原文:: Default value: 50">デフォルト値: <code>50</code></span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.fKW4C.1"  title="原文: period-executions"><code>period-executions</code></span></td>
<td class=""><span class="merged" id="all.2qL5uF.1.spl1" title="原文 : Period for executing poll cycles in millis.">ポーリング・サイクルを実行する期間(ミリ秒)。</span> <span class="merged" id="all.2qL5uF.1.spl2"  title="原文:: Default value: 100">デフォルト値: <code>100</code></span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4UHAvl.1"  title="原文: session-group-id"><code>session-group-id</code></span></td>
<td class=""><span class="merged" id="all.2U6fIS.1" title="原文 : When multiple channels share same session-group-id, they share same JMS session and same JDBC connection as well.">複数のチャネルが同じ<code>session-group-id</code>を共有する場合は、同じJMSセッションおよび同じJDBC接続も共有します。</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<h3 id="_configured_jms_factory"><span class="merged" id="all.3330aY.1" title="原文 : Configured JMS factory">構成済JMSファクトリ</span></h3>
<div class="section">
<p><span class="merged" id="all.2GAzNO" title="原文 : The simplest possible usage is leaving construction of AQjmsConnectionFactory to the connector.">可能なかぎり最も簡単な使用方法は、AQjmsConnectionFactoryの構成をコネクタに残すことです。</span></p>

<markup
lang="yaml"
title="コネクタ構成の例:"
>mp:
  messaging:

    connector:
      helidon-aq:
        transacted: false
        acknowledge-mode: CLIENT_ACKNOWLEDGE
        url: jdbc:oracle:thin:@(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(Host=192.168.0.123)(Port=1521))(CONNECT_DATA=(SID=TESTSID)))
        user: gandalf
        password: mellon

    outgoing.to-aq:
      connector: helidon-aq
      destination: TESTQUEUE
      type: queue

    incoming.from-aq:
      connector: helidon-aq
      destination: TESTQUEUE
      type: queue</markup>

<p><span class="merged" id="all.1HzYno" title="原文 : Its also possible and preferable to refer to configured datasource, in our example Oracle UCP datasource:">また、<router-link to="/mp/guides/07_datasource">構成済データソース</router-link>を参照することもでき、推奨されます(この例では<router-link to="/mp/extensions/02_cdi_datasource-ucp">Oracle UCPデータソース</router-link>):</span></p>

<markup
lang="yaml"
title="Oracle UCPデータソースを使用したコネクタ構成の例:"
>javax:
  sql:
    DataSource:
      aq-test-ds:
        connectionFactoryClassName: oracle.jdbc.pool.OracleDataSource
        URL: jdbc:oracle:thin:@exampledb_high?TNS_ADMIN=/home/gandalf/wallets/Wallet_EXAMPLEDB
        user: gandalf
        password: SuperSecretPassword1234

mp:
  messaging:
    connector:
      helidon-aq:
        transacted: false
        acknowledge-mode: CLIENT_ACKNOWLEDGE
        data-source: aq-test-ds
    outgoing.toJms:
      connector: helidon-aq
      destination: TESTQUEUE
      type: queue
    incoming.fromJms:
      connector: helidon-aq
      destination: TESTQUEUE
      type: queue</markup>

</div>

<h3 id="_injected_jms_factory"><span class="merged" id="all.2SpKP9.1" title="原文 : Injected JMS factory">インジェクトされたJMSファクトリ</span></h3>
<div class="section">
<p><span class="merged" id="all.32olin" title="原文 : In case you need more advanced setup, connector can work with injected AQjmsConnectionFactory">より高度な設定が必要な場合、コネクタはインジェクトされたAQjmsConnectionFactoryと連携できます</span></p>

<markup
lang="java"
title="インジェクト:"
>    @Produces
    @ApplicationScoped
    @Named("aq-orderdb-factory")
    public AQjmsConnectionFactory connectionFactory() throws JMSException {
        AQjmsQueueConnectionFactory fact = new AQjmsQueueConnectionFactory();
        fact.setJdbcURL(config.get("jdbc.url").asString().get());
        fact.setUsername(config.get("jdbc.user").asString().get());
        fact.setPassword(config.get("jdbc.pass").asString().get());
        return fact;
    }</markup>

<markup
lang="yaml"
title="構成:"
>jdbc:
  url: jdbc:oracle:thin:@(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(Host=192.168.0.123)(Port=1521))(CONNECT_DATA=(SID=TESTSID)))
  user: gandalf
  pass: mellon

mp:
  messaging:
    connector:
      helidon-aq:
        named-factory: aq-orderdb-factory

    outgoing.to-aq:
      connector: helidon-aq
      session-group-id: order-connection-1
      destination: TESTQUEUE
      type: queue

    incoming.from-aq:
      connector: helidon-aq
      session-group-id: order-connection-1
      destination: TESTQUEUE
      type: queue</markup>

</div>

<h3 id="_consuming"><span class="merged" id="all.3gRT7Y.1" title="原文 : Consuming">消費</span></h3>
<div class="section">
<markup
lang="java"
title="ラップされていない1つの値による消費:"
>@Incoming("from-aq")
public void consumeAq(String msg) {
    System.out.println("Oracle AQ says: " + msg);
}</markup>

<markup
lang="java"
title="1つずつ消費、手動確認:"
>@Incoming("from-aq")
@Acknowledgment(Acknowledgment.Strategy.MANUAL)
public CompletionStage&lt;?&gt; consumeAq(AqMessage&lt;String&gt; msg) {
    // direct commit
    //msg.getDbConnection().commit();
    System.out.println("Oracle AQ says: " + msg.getPayload());
    // ack commits only in non-transacted mode
    return msg.ack();
}</markup>

</div>

<h3 id="_producing"><span class="merged" id="all.4AZ8Ti.1" title="原文 : Producing">生産</span></h3>
<div class="section">
<markup
lang="java"
title="AQへの生産:"
>@Outgoing("to-aq")
public PublisherBuilder&lt;String&gt; produceToAq() {
    return ReactiveStreams.of("test1", "test2");
}</markup>

</div>
</div>
</doc-view>
