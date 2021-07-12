<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.22" title="原文 : Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.i5Lq0" title="原文 : To enable JMS Connector add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">JMSコネクタを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.messaging.jms&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-messaging-jms&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_reactive_jms_connector"><span class="merged" id="all.2u6yav" title="原文 : Reactive JMS Connector">リアクティブJMSコネクタ</span></h2>
<div class="section">
<p><span class="merged" id="all.S3gdo" title="原文 : Connecting streams to JMS with Reactive Messaging couldn&rsquo;t be easier.">リアクティブ・メッセージングを使用したJMSへのストリームの接続はより簡単にはできないでしょう。</span></p>


<h3 id="_config"><span class="merged" id="all.3rjwSI.1"  title="原文:: Config">構成</span></h3>
<div class="section">
<p><span class="merged" id="all.3p7pyX" title="原文 : Connector name: helidon-jms">コネクタ名: <code>helidon-jms</code></span></p>

<div class="block-title"><span class="merged" id="all.x2f9G"  title="原文:: Attributes"><span>属性</span></span></div>
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
<td class=""><span class="merged" id="all.2FqwBE"  title="原文: username"><code>username</code></span></td>
<td class=""><span class="merged" id="all.29DJrS" title="原文 : User name used to connect JMS session">JMSセッションの接続に使用されるユーザー名</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.xgZgv"  title="原文: password"><code>password</code></span></td>
<td class=""><span class="merged" id="all.2q92j5" title="原文 : Password to connect JMS session">JMSセッションに接続するパスワード</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2SYAnU"  title="原文: type"><code>type</code></span></td>
<td class=""><span class="merged" id="all.HiD86" title="原文 : Possible values are: queue, topic">可能な値は次のとおりです: <code>queue</code>, <code>topic</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Cba7M"  title="原文: destination"><code>destination</code></span></td>
<td class=""><span class="merged" id="all.2DcbN5" title="原文 : Queue or topic name">キューまたはトピック名</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1SCUeZ"  title="原文: acknowledge-mode"><code>acknowledge-mode</code></span></td>
<td class=""><span class="merged" id="all.1huznr.spl1" title="原文 : Possible values are: AUTO_ACKNOWLEDGE- session automatically acknowledges a client&rsquo;s receipt of a message, CLIENT_ACKNOWLEDGE - receipt of a message is acknowledged only when Message.ack() is called manually, DUPS_OK_ACKNOWLEDGE - session lazily acknowledges the delivery of messages.">可能な値は次のとおりです: <code>AUTO_ACKNOWLEDGE</code> - セッションがメッセージのクライアント受信を自動的に確認する、<code>CLIENT_ACKNOWLEDGE</code> - メッセージの受信は、<code>Message.ack()</code>が手動でコールされた場合にのみ確認されます。<code>DUPS_OK_ACKNOWLEDGE</code> - sessionは、メッセージの配信を遅延確認します。</span> <span class="merged" id="all.1huznr.spl2" title="原文 : Default value: AUTO_ACKNOWLEDGE">デフォルト値: <code>AUTO_ACKNOWLEDGE</code></span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4aBMur"  title="原文: transacted"><code>transacted</code></span></td>
<td class=""><span class="merged" id="all.3B1tjp.spl1" title="原文 : Indicates whether the session will use a local transaction.">セッションがローカル・トランザクションを使用するかどうかを示します。</span> <span class="merged" id="all.3B1tjp.spl2"  title="原文:: Default value: false">デフォルト値: <code>false</code></span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.28rkos"  title="原文: message-selector"><code>message-selector</code></span></td>
<td class=""><span class="merged" id="all.3G8XH7.spl1" title="原文 : JMS API message selector expression based on a subset of the SQL92.">SQL92のサブセットに基づくJMS APIメッセージ・セレクタ式。</span> <span class="merged" id="all.3G8XH7.spl2" title="原文 : Expression can only access headers and properties, not the payload.">式はヘッダーおよびプロパティにのみアクセスでき、ペイロードにはアクセスできません。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.41Kf4l"  title="原文: client-id"><code>client-id</code></span></td>
<td class=""><span class="merged" id="all.19oJdx" title="原文 : Client identifier for JMS connection.">JMS接続のクライアント識別子。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3HodGX"  title="原文: durable"><code>durable</code></span></td>
<td class=""><span class="merged" id="all.22wasS.spl1" title="原文 : True for creating durable consumer (only for topic).">永続コンシューマを作成する場合はtrue (トピックの場合のみ)。</span> <span class="merged" id="all.22wasS.spl2"  title="原文:: Default value: false">デフォルト値: <code>false</code></span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4VYCo3"  title="原文: subscriber-name"><code>subscriber-name</code></span></td>
<td class=""><span class="merged" id="all.41Y8RL" title="原文 : Subscriber name for durable consumer used to identify subscription.">サブスクリプションの識別に使用される永続コンシューマのサブスクライバ名。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3fQfsR"  title="原文: non-local"><code>non-local</code></span></td>
<td class=""><span class="merged" id="all.3iA2Wc.spl1" title="原文 : If true then any messages published to the topic using this session&rsquo;s connection, or any other connection with the same client identifier, will not be added to the durable subscription.">trueの場合、このセッションの接続または同じクライアント識別子を持つ他の接続を使用してトピックにパブリッシュされたメッセージは、永続サブスクリプションに追加されません。</span> <span class="merged" id="all.3iA2Wc.spl2"  title="原文:: Default value: false">デフォルト値: <code>false</code></span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.12Z8gJ"  title="原文: named-factory"><code>named-factory</code></span></td>
<td class=""><span class="merged" id="all.7x8B5" title="原文 : Select in case factory is injected as a named bean or configured with name.">ファクトリが名前付きBeanとしてインジェクトされる場合、または名前で構成される場合に選択します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3RfDpa"  title="原文: poll-timeout"><code>poll-timeout</code></span></td>
<td class=""><span class="merged" id="all.1r0ZJ1.spl1" title="原文 : Timeout for polling for next message in every poll cycle in millis.">ポーリング・サイクルごとの次のメッセージのポーリングのタイムアウト(ミリ秒)。</span> <span class="merged" id="all.1r0ZJ1.spl2"  title="原文:: Default value: 50">デフォルト値: <code>50</code></span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.fKW4C"  title="原文: period-executions"><code>period-executions</code></span></td>
<td class=""><span class="merged" id="all.2qL5uF.spl1" title="原文 : Period for executing poll cycles in millis.">ポーリング・サイクルを実行する期間(ミリ秒)。</span> <span class="merged" id="all.2qL5uF.spl2"  title="原文:: Default value: 100">デフォルト値: <code>100</code></span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4UHAvl"  title="原文: session-group-id"><code>session-group-id</code></span></td>
<td class=""><span class="merged" id="all.2U6fIS" title="原文 : When multiple channels share same session-group-id, they share same JMS session and same JDBC connection as well.">複数のチャネルが同じ<code>session-group-id</code>を共有する場合は、同じJMSセッションおよび同じJDBC接続も共有します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.BlI0Q"  title="原文: jndi.jms-factory"><code>jndi.jms-factory</code></span></td>
<td class=""><span class="merged" id="all.15YTxB" title="原文 : JNDI name of JMS factory.">JMSファクトリのJNDI名。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3EnEdF"  title="原文: jndi.env-properties"><code>jndi.env-properties</code></span></td>
<td class=""><span class="merged" id="all.X1O1o" title="原文 : Environment properties used for creating initial context java.naming.factory.initial, java.naming.provider.url …​">初期コンテキスト<code>java.naming.factory.initial</code>、<code>java.naming.provider.url</code>の作成に使用される環境プロパティ…</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<h3 id="_configured_jms_factory"><span class="merged" id="all.3330aY" title="原文 : Configured JMS factory">構成済JMSファクトリ</span></h3>
<div class="section">
<p><span class="merged" id="all.4XghAF" title="原文 : The simplest possible usage is looking up JMS ConnectionFactory in the naming context.">最も簡単な使用方法は、ネーミング・コンテキストでJMS ConnectionFactoryをルックアップすることです。</span></p>

<markup
lang="yaml"
title="コネクタ構成の例:"
>mp.messaging:

  incoming.from-jms:
    connector: helidon-jms
    destination: messaging-test-queue-1
    type: queue

  outgoing.to-jms:
    connector: helidon-jms
    destination: messaging-test-queue-1
    type: queue

  connector:
    helidon-jms:
      user: Gandalf
      password: mellon
      jndi:
        jms-factory: ConnectionFactory
        env-properties:
          java.naming:
            factory.initial: org.apache.activemq.jndi.ActiveMQInitialContextFactory
            provider.url: tcp://localhost:61616</markup>

</div>

<h3 id="_injected_jms_factory"><span class="merged" id="all.2SpKP9" title="原文 : Injected JMS factory">インジェクトされたJMSファクトリ</span></h3>
<div class="section">
<p><span class="merged" id="all.1bYckN" title="原文 : In case you need more advanced setup, connector can work with injected factory instance.">より高度な設定が必要な場合、コネクタはインジェクトされたファクトリ・インスタンスと連携できます。</span></p>

<markup
lang="java"
title="インジェクト:"
>    @Produces
    @ApplicationScoped
    @Named("active-mq-factory")
    public ConnectionFactory connectionFactory() {
        return new ActiveMQConnectionFactory(config.get("jms.url").asString().get());
    }</markup>

<markup
lang="yaml"
title="構成:"
>jms:
  url: tcp://127.0.0.1:61616

mp:
  messaging:
    connector:
      helidon-jms:
        named-factory: active-mq-factory

    outgoing.to-jms:
      connector: helidon-jms
      session-group-id: order-connection-1
      destination: TESTQUEUE
      type: queue

    incoming.from-jms:
      connector: helidon-jms
      session-group-id: order-connection-1
      destination: TESTQUEUE
      type: queue</markup>

</div>

<h3 id="_consuming"><span class="merged" id="all.3gRT7Y" title="原文 : Consuming">消費</span></h3>
<div class="section">
<markup
lang="java"
title="ラップされていない1つの値による消費:"
>@Incoming("from-jms")
public void consumeJms(String msg) {
    System.out.println("JMS says: " + msg);
}</markup>

<markup
lang="java"
title="1つずつ消費、手動確認:"
>@Incoming("from-jms")
@Acknowledgment(Acknowledgment.Strategy.MANUAL)
public CompletionStage&lt;?&gt; consumeJms(JmsMessage&lt;String&gt; msg) {
    System.out.println("JMS says: " + msg.getPayload());
    return msg.ack();
}</markup>

</div>

<h3 id="_producing"><span class="merged" id="all.4AZ8Ti" title="原文 : Producing">生産</span></h3>
<div class="section">
<markup
lang="java"
title="JMSへの生産の例:"
>@Outgoing("to-jms")
public PublisherBuilder&lt;String&gt; produceToJms() {
    return ReactiveStreams.of("test1", "test2");
}</markup>

<markup
lang="java"
title="JMSへのより高度な生産の例:"
>@Outgoing("to-jms")
public PublisherBuilder&lt;String&gt; produceToJms() {
    return ReactiveStreams.of("test1", "test2")
                .map(s -&gt; JmsMessage.builder(s)
                              .correlationId(UUID.randomUUID().toString())
                              .property("stringProp", "cool property")
                              .property("byteProp", 4)
                              .property("intProp", 5)
                              .onAck(() -&gt; System.out.println("Acked!"))
                              .build());
}</markup>

<markup
lang="java"
title="カスタム・マッパーを使用したJMSへのより高度な生産の例:"
>@Outgoing("to-jms")
public PublisherBuilder&lt;String&gt; produceToJms() {
    return ReactiveStreams.of("test1", "test2")
                .map(s -&gt; JmsMessage.builder(s)
                            .customMapper((p, session) -&gt; {
                                TextMessage textMessage = session.createTextMessage(p);
                                textMessage.setStringProperty("custom-mapped-property", "XXX" + p);
                                return textMessage;
                            })
                            .build()
                    );
}</markup>

</div>
</div>
</doc-view>
