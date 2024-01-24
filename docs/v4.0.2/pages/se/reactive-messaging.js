<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.67"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.66" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.48" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.43" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.1XiKUa" title="原文 : Channel"><router-link @click.native="this.scrollFix('#_channel')" to="#_channel">チャネル</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.16P4Rc" title="原文 : Processor"><router-link @click.native="this.scrollFix('#_processor')" to="#_processor">プロセッサ</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.29NYvA.1" title="原文 : Message"><router-link @click.native="this.scrollFix('#_message')" to="#_message">Message</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3D3MQt" title="原文 : Connectors"><router-link @click.native="this.scrollFix('#_connectors')" to="#_connectors">コネクタ</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.3LfXQc" title="原文 : Kafka Connector"><router-link @click.native="this.scrollFix('#_kafka_connector')" to="#_kafka_connector">Kafka Connector</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3quO4d" title="原文 : JMS Connector"><router-link @click.native="this.scrollFix('#_jms_connector')" to="#_jms_connector">JMSコネクタ</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4adsf4" title="原文 : AQ Connector"><router-link @click.native="this.scrollFix('#_aq_connector')" to="#_aq_connector">AQコネクタ</router-link></span></p>

</li>
</ul>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.26FILD.39" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.22" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.82"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.MGw8Q.spl1" title="原文 : Asynchronous messaging is a commonly used form of communication in the world of microservices.">非同期メッセージングは、マイクロサービスの世界でよく使用される通信形式です。</span> <span class="merged" id="all.MGw8Q.spl2" title="原文 : While it is possible to start building your reactive streams directly by combining operators and connecting them to reactive APIs, with Helidon SE Reactive Messaging, you can now use prepared tools for repetitive use case scenarios .">オペレータを組み合せてリアクティブAPIに接続することでリアクティブ・ストリームを直接構築できますが、Helidon SEリアクティブ・メッセージングでは、プリペイド・ツールを使用して繰返しユース・ケース・シナリオを使用できます。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.59"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.1FhYR7" title="原文 : To enable Reactive Messaging add the following dependency to your project’s pom.xml (see Managing Dependencies).">リアクティブ・メッセージングを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.messaging&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-messaging&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.62"  title="原文:: Usage">使用</span></h2>
<div class="section">
<p><span class="merged" id="all.18wkAx" title="原文 : Connecting your streams to external services usually requires a lot of boiler-plate code for configuration handling, backpressure propagation, acknowledgement and more.">ストリームを外部サービスに接続するには、通常、構成処理、バック・プレッシャ伝播、確認などのボイラープレート・コードが必要です。</span></p>

<p><span class="merged" id="all.2kPwss.spl1" title="原文 : In Helidon there is a system of connectors, emitters and means to orchestrate these tasks called Reactive Messaging.">Helidonには、コネクタ、エミッタ、および<strong>「リアクティブ・メッセージング」</strong>と呼ばれるこれらのタスクを編成する手段のシステムがあります。</span> <span class="merged" id="all.2kPwss.spl2" title="原文 : It’s basically an API for connecting and configuring connectors and emitters with your reactive streams through Channels.">基本的には、<router-link @click.native="this.scrollFix('#_channel')" to="#_channel">Channels</router-link>を介して、リアクティブ・ストリームでコネクタおよびエミッタを接続および構成するためのAPIです。</span> </p>

<p><span class="merged" id="all.4EHZUl.spl1" title="原文 : Reactive Messaging relates to MicroProfile Reactive Messaging as the making of connectors and configuring them can be a repetitive task that ultimately leads to the same results.">リアクティブ・メッセージングは、コネクタの作成と<router-link to="/mp/reactivemessaging/introduction">「MicroProfileリアクティブ・メッセージング」</router-link>に関連し、それらを構成することは、最終的には同じ結果になる反復的なタスクです。</span> <span class="merged" id="all.4EHZUl.spl2" title="原文 : Helidon SE Reactive Messaging supports the very same configuration format for connectors as its MicroProfile counterpart does.">Helidon SEリアクティブ・メッセージングは、対応するMicroProfileと同じ構成形式をコネクタでサポートします。</span> <span class="merged" id="all.4EHZUl.spl3" title="原文 : Also, MP Connectors are reusable in Helidon SE Messaging with some limitations such as there is no CDI in Helidon SE.">また、MPコネクタはHelidon SEメッセージで再利用でき、Helidon SEにCDIがないなどの制限があります。</span> <span class="merged" id="all.4EHZUl.spl4" title="原文 : All Messaging connectors in Helidon are made to be universally usable by Helidon MP and SE.">Helidon内のすべての<router-link @click.native="this.scrollFix('#_messaging_connector')" to="#_messaging_connector">「メッセージング・コネクタ」</router-link>は、Helidon MPおよびSEで汎用的に使用可能になります。</span> </p>


<h3 id="_channel"><span class="merged" id="all.2040HT"  title="原文:: Channel">チャネル</span></h3>
<div class="section">
<p><span class="merged" id="all.XsstT.spl1" title="原文 : A channel is a named pair of Publisher and Subscriber.">チャネルは、<code>Publisher</code>および<code>Subscriber</code>の名前付きペアです。</span> <span class="merged" id="all.XsstT.spl2" title="原文 : Channels can be connected together by processors.">チャネルは、<router-link @click.native="this.scrollFix('#_processor')" to="#_processor">processors</router-link>によって接続できます。</span> <span class="merged" id="all.XsstT.spl3" title="原文 : Registering a Publisher or Subscriber for a channel can be done by Messaging API, or configured implicitly using registered connectors to generate the Publisher or Subscriber.">チャネルへの<code>Publisher</code>または<code>Subscriber</code>の登録は、メッセージングAPIで実行するか、登録済の<router-link @click.native="this.scrollFix('#_connectors')" to="#_connectors">「コネクタ」</router-link>を使用して<code>Publisher</code>または<code>Subscriber</code>を生成するように暗黙的に構成できます。</span> </p>

<markup
lang="java"
title="Example of simple channel:"
>Channel&lt;String&gt; channel1 = Channel.create("channel1");

Messaging.builder()
        .publisher(channel1, Multi.just("message 1", "message 2")
                                  .map(Message::of))
        .listener(channel1, s -&gt; System.out.println("Intecepted message " + s))
        .build()
        .start();</markup>

</div>


<h3 id="_processor"><span class="merged" id="all.38NJTv"  title="原文:: Processor">プロセッサ</span></h3>
<div class="section">
<p><span class="merged" id="all.29ZuXH.spl1" title="原文 : Processor is a typical reactive processor acting as a Subscriber to upstream and as a Publisher to downstream.">プロセッサは、アップストリームへの<code>Subscriber</code>およびダウンストリームへの<code>Publisher</code>として機能する一般的なリアクティブ・プロセッサです。</span> <span class="merged" id="all.29ZuXH.spl2" title="原文 : In terms of reactive messaging, it is able to connect two channels to one reactive stream.">リアクティブ・メッセージングでは、2つの<router-link @click.native="this.scrollFix('#_channel')" to="#_channel">channels</router-link>を1つのリアクティブ・ストリームに接続できます。</span> </p>

<markup
lang="java"
title="Example of processor usage:"
>Channel&lt;String&gt; firstChannel = Channel.create("first-channel");
Channel&lt;String&gt; secondChannel = Channel.create("second-channel");

Messaging.builder()
        .publisher(secondChannel, ReactiveStreams.of("test1", "test2", "test3")
                .map(Message::of))
        .processor(secondChannel, firstChannel, ReactiveStreams.&lt;Message&lt;String&gt;&gt;builder()
                .map(Message::getPayload)
                .map(String::toUpperCase)
                .map(Message::of)
        )
        .subscriber(firstChannel, ReactiveStreams.&lt;Message&lt;String&gt;&gt;builder()
                .peek(Message::ack)
                .map(Message::getPayload)
                .forEach(s -&gt; System.out.println("Consuming message " + s)))
        .build()
        .start();

&gt;Consuming message TEST1
&gt;Consuming message TEST2
&gt;Consuming message TEST3</markup>

</div>


<h3 id="_message"><span class="merged" id="all.2DNrc3.1"  title="原文:: Message">メッセージ</span></h3>
<div class="section">
<p><span class="merged" id="all.3bJ5bE.spl1" title="原文 : Reactive Messaging in Helidon SE uses the same concept of message wrapping as MicroProfile messaging.">Helidon SEのリアクティブ・メッセージングでは、MicroProfileメッセージングと同じメッセージ・ラップの概念が使用されます。</span> <span class="merged" id="all.3bJ5bE.spl2" title="原文 : The only notable difference is that SE Messaging does almost no implicit or automatic acknowledgement due to no magic philosophy of Helidon SE.">唯一の大きな違いは、SEメッセージングでは、Helidon SEの<em>「マジックなし」</em>の理念により、暗黙的または自動的な確認応答がほとんど行われないことです。</span> </p>

<p><span class="merged" id="all.2lNEw8.spl1" title="原文 : The only exception to this are the variants of the methods Messaging.Builder#listener and Messaging.Builder#processor configured with consumer or function parameters which will conveniently unwrap the payload for you.">これ以外は、コンシューマ・パラメータまたはファンクション・パラメータで構成されたメソッド<code>Messaging.Builder#listener</code>および<code>Messaging.Builder#processor</code>のバリアントのみであり、ペイロードのラップを容易に解除できます。</span> <span class="merged" id="all.2lNEw8.spl2" title="原文 : Once the payload is automatically unwrapped, it is not possible to do a manual acknowledgement, therefore an implicit acknowledgement is executed before the callback.">ペイロードが自動的にアン・ラップされると、手動で確認を行うことはできないため、コールバックの前に暗黙的な確認が実行されます。</span> </p>

</div>


<h3 id="_connectors"><span class="merged" id="all.4ejdlh"  title="原文:: Connectors">コネクタ</span></h3>
<div class="section">
<p><span class="merged" id="all.3ENzLQ.spl1" title="原文 : Connectors are used to connect channels to external sources.">コネクタは、<router-link @click.native="this.scrollFix('#_channel')" to="#_channel">channels</router-link>を外部ソースに接続するために使用されます。</span> <span class="merged" id="all.3ENzLQ.spl2" title="原文 : To make the creation and usage of connectors as easy and versatile as possible, Helidon SE Messaging uses the same API for connectors that MicroProfile Reactive Messaging does."><router-link @click.native="this.scrollFix('#_messaging_connector')" to="#_messaging_connector">「コネクタの作成および使用」</router-link>を可能なかぎり簡単かつ汎用的にするために、Helidon SE Messagingは<router-link to="/mp/reactivemessaging/introduction">「MicroProfileリアクティブ・メッセージング」</router-link>が実行するコネクタに同じAPIを使用します。</span> <span class="merged" id="all.3ENzLQ.spl3" title="原文 : This allows connectors to be used in both flavors of Helidon with one limitation which is that the connector has to be able to work without CDI.">これにより、コネクタはHelidonの両方のフレーバで使用でき、1つの制限があります。これは、コネクタがCDIなしで動作できる必要があることを意味します。</span> </p>

<p><span class="merged" id="all.1YL7e" title="原文 : Examples of versatile connectors in Helidon include the following:">Helidonの汎用コネクタの例を次に示します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3INmPm" title="原文 : Kafka connector"><router-link @click.native="this.scrollFix('#_kafka_connector')" to="#_kafka_connector">Kafkaコネクタ</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3onl0J" title="原文 : JMS connector"><router-link @click.native="this.scrollFix('#_jms_connector')" to="#_jms_connector">JMSコネクタ</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4adsf4.1" title="原文 : AQ Connector"><router-link @click.native="this.scrollFix('#_aq_connector')" to="#_aq_connector">AQコネクタ</router-link></span></p>

</li>
</ul>


<h4 id="_messaging_connector"><span class="merged" id="all.2JgL2f" title="原文 : Messaging Connector">メッセージング・コネクタ</span></h4>
<div class="section">
<p><span class="merged" id="all.1fV53y.spl1" title="原文 : A connector for Reactive Messaging is a factory that produces Publishers and Subscribers for Channels in Reactive Messaging.">リアクティブ・メッセージングのコネクタは、リアクティブ・メッセージングでチャネルのパブリッシャおよびサブスクライバを生成するファクトリです。</span> <span class="merged" id="all.1fV53y.spl2" title="原文 : Messaging connector is just an implementation of IncomingConnectorFactory, OutgoingConnectorFactory or both.">メッセージング・コネクタは、<code>IncomingConnectorFactory</code>、<code>OutgoingConnectorFactory</code>またはその両方の単なる実装です。</span> </p>

<markup
lang="java"
title="Example connector <code>example-connector</code>:"
>@Connector("example-connector")
public class ExampleConnector implements IncomingConnectorFactory, OutgoingConnectorFactory {

   @Override
   public PublisherBuilder&lt;? extends Message&lt;?&gt;&gt; getPublisherBuilder(Config config) {
       return ReactiveStreams.of("foo", "bar")
               .map(Message::of);
   }

   @Override
   public SubscriberBuilder&lt;? extends Message&lt;?&gt;, Void&gt; getSubscriberBuilder(Config config) {
       return ReactiveStreams.&lt;Message&lt;?&gt;&gt;builder()
               .map(Message::getPayload)
               .forEach(o -&gt; System.out.println("Connector says: " + o));
   }
}</markup>

<markup
lang="yaml"
title="Example of channel to connector mapping config:"
>mp.messaging.outgoing.to-connector-channel.connector: example-connector
mp.messaging.incoming.from-connector-channel.connector: example-connector</markup>

<markup
lang="java"
title="Example producing to connector:"
>Config config = Config.create();

Messaging.builder()
         .config(config)
         .connector(new ExampleConnector())
         .publisher(Channel.create("to-connector-channel"),
                ReactiveStreams.of("fee", "fie")
                    .map(Message::of)
         )
         .build()
         .start();

&gt; Connector says: fee
&gt; Connector says: fie</markup>

<markup
lang="java"
title="Example consuming from connector:"
>Messaging.builder()
        .connector(new ExampleConnector())
        .subscriber(Channel.create("from-connector-channel"),
                ReactiveStreams.&lt;Message&lt;String&gt;&gt;builder()
                    .peek(Message::ack)
                    .map(Message::getPayload)
                    .forEach(s -&gt; System.out.println("Consuming: " + s))
        )
        .build()
        .start();

&gt; Consuming: foo
&gt; Consuming: bar</markup>


<h5 id="_configuration_for_messaging_connector"><span class="merged" id="all.ee6d2" title="原文 : Configuration for Messaging Connector">メッセージ・コネクタの構成</span></h5>
<div class="section">
<p><span class="merged" id="all.4LiDgB" title="原文 : A messaging connector in Helidon SE can be configured explicitly by API or implicitly by config following the notation of MicroProfile Reactive Messaging.">Helidon SEのメッセージング・コネクタは、APIによって明示的に構成することも、<a href="https://download.eclipse.org/microprofile/microprofile-reactive-messaging-1.0/microprofile-reactive-messaging-spec.html#_configuration" target="_blank">「MicroProfileリアクティブ・メッセージング」</a>の表記に従って構成によって暗黙的に構成することもできます。</span></p>

<p><span class="merged" id="all.2d3DBi" title="原文 : Configuration that is supplied to connector by the Messaging implementation must include two mandatory attributes:">Messaging実装によってコネクタに提供される構成には、2つの必須属性が含まれている必要があります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3oECOj" title="原文 : channel-name which is the name of the channel that has the connector configured as Publisher or Subscriber, or Channel.create(&apos;name-of-channel&apos;) in case of explicit configuration or mp.messaging.incoming.name-of-channel.connector: connector-name in case of implicit config"><code>channel-name</code>は、コネクタがパブリッシャまたはサブスクライバとして構成されているチャネルの名前、または明示的な構成の場合は<code>Channel.create('name-of-channel')</code>、暗黙的な構成の場合は<code>mp.messaging.incoming.name-of-channel.connector: connector-name</code>です</span></p>

</li>
<li>
<p><span class="merged" id="all.5vEVi" title="原文 : connector name of the connector @Connector(&quot;connector-name&quot;)">コネクタ<code>@Connector("connector-name")</code>の<code>connector</code>名</span></p>

</li>
</ul>

<markup
lang="java"
title="Example connector accessing configuration:"
>@Connector("example-connector")
public class ExampleConnector implements IncomingConnectorFactory {

    @Override
    public PublisherBuilder&lt;? extends Message&lt;?&gt;&gt; getPublisherBuilder(final Config config) {

        String firstPropValue = config.getValue("first-test-prop", String.class);<span class="conum" data-value="1" />
        String secondPropValue = config.getValue("second-test-prop", String.class);

        return ReactiveStreams.of(firstPropValue, secondPropValue)
                .map(Message::of);
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.CfCS5.1" title="原文 : Config context is merged from channel and connector contexts">構成コンテキストはチャネルおよびコネクタ・コンテキストからマージされます</span></li>
</ul>


<h6 id="_explicit_config_for_messaging_connector"><span class="merged" id="all.4A6YXl" title="原文 : Explicit Config for Messaging Connector">メッセージング・コネクタの明示的構成</span></h6>
<div class="section">
<p><span class="merged" id="all.4QZOW6.spl1" title="原文 : An explicit config for channel’s publisher is possible with Channel.Builder#publisherConfig(Config config) and for a subscriber with the Channel.Builder#subscriberConfig(Config config)."><code>Channel.Builder#publisherConfig(Config config)</code>および<code>Channel.Builder#subscriberConfig(Config config)</code>を持つサブスクライバに対して、チャネルのパブリッシャの明示的な構成が可能です。</span> <span class="merged" id="all.4QZOW6.spl2" title="原文 : The supplied Helidon Config is merged with the mandatory attributes and any implicit configuration found.">指定された<router-link to="/se/config/introduction">「Helidon構成」</router-link>は、必須属性および見つかった暗黙的な構成とマージされます。</span> <span class="merged" id="all.4QZOW6.spl3" title="原文 : The resulting configuration is then served to the Connector.">結果の構成はコネクタに提供されます。</span> </p>

<markup
lang="java"
title="Example consuming from Kafka connector with explicit config:"
>String kafkaServer = config.get("app.kafka.bootstrap.servers").asString().get();
String topic = config.get("app.kafka.topic").asString().get();

Channel&lt;String&gt; fromKafka = Channel.&lt;String&gt;builder()<span class="conum" data-value="1" /><span class="conum" data-value="2" />
        .name("from-kafka")
        .publisherConfig(KafkaConnector.configBuilder()
                .bootstrapServers(kafkaServer)
                .groupId("example-group-" + session.getId())
                .topic(topic)
                .autoOffsetReset(KafkaConfigBuilder.AutoOffsetReset.LATEST)
                .enableAutoCommit(true)
                .keyDeserializer(StringDeserializer.class)
                .valueDeserializer(StringDeserializer.class)
                .build()
        )
        .build();

KafkaConnector kafkaConnector = KafkaConnector.create();<span class="conum" data-value="3" />

Messaging messaging = Messaging.builder()
        .connector(kafkaConnector)
        .listener(fromKafka, payload -&gt; {
            System.out.println("Kafka says: " + payload);
        })
        .build()
        .start();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4gR3IZ" title="原文 : Prepare channel for connecting kafka connector with specific publisher configuration → listener,">kafkaコネクタを特定のパブリッシャ構成→リスナーに接続するためのチャネルを準備</span></li>
<li data-value="2"><span class="merged" id="all.4Wn8as" title="原文 : Channel → connector mapping is automatic when using KafkaConnector.configBuilder()"><code>KafkaConnector.configBuilder()</code>を使用する場合、チャネル→コネクタ・マッピングは自動的に行われます</span></li>
<li data-value="3"><span class="merged" id="all.2wxobH" title="原文 : Prepare Kafka connector, can be used by any channel">任意のチャネルで使用可能なKafkaコネクタの準備</span></li>
</ul>

</div>


<h6 id="_implicit_config_for_messaging_connector"><span class="merged" id="all.2CdCEp" title="原文 : Implicit Config for Messaging Connector">メッセージング・コネクタの暗黙的な構成</span></h6>
<div class="section">
<p><span class="merged" id="all.45CcfK" title="原文 : Implicit config without any hard-coding is possible with Helidon Config following notation of MicroProfile Reactive Messaging.">ハードコードを使用しない暗黙的な構成は、<a href="https://download.eclipse.org/microprofile/microprofile-reactive-messaging-1.0/microprofile-reactive-messaging-spec.html#_configuration" target="_blank">「MicroProfileリアクティブ・メッセージング」</a>の表記に従った<router-link to="/se/config/introduction">「Helidon構成」</router-link>で可能です。</span></p>

<markup
lang="yaml"
title="Example of channel to connector mapping config with custom properties:"
>mp.messaging.incoming.from-connector-channel.connector: example-connector<span class="conum" data-value="1" />
mp.messaging.incoming.from-connector-channel.first-test-prop: foo<span class="conum" data-value="2" />
mp.messaging.connector.example-connector.second-test-prop: bar<span class="conum" data-value="3" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1tidli.1" title="原文 : Channel → Connector mapping">チャネル→コネクタ・マッピング</span></li>
<li data-value="2"><span class="merged" id="all.4SOFYq.1" title="原文 : Channel configuration properties">チャネル構成プロパティ</span></li>
<li data-value="3"><span class="merged" id="all.418ira.1" title="原文 : Connector configuration properties">コネクタ構成プロパティ</span></li>
</ul>

<markup
lang="java"
title="Example consuming from connector:"
>Config config = Config.create();

Messaging.builder()
        .config(config)
        .connector(new ExampleConnector())
        .listener(Channel.create("from-connector-channel"),
                    s -&gt; System.out.println("Consuming: " + s))
        .build()
        .start();

&gt; Consuming: foo
&gt; Consuming: bar</markup>

</div>

</div>

</div>


<h4 id="_reusability_in_mp_messaging"><span class="merged" id="all.nyXQh" title="原文 : Reusability in MP Messaging">MPメッセージングの再利用性</span></h4>
<div class="section">
<p><span class="merged" id="all.3xYPXh.spl1" title="原文 : As the API is the same for MicroProfile Reactive Messaging connectors, all that is needed to make connector work in both ways is annotating it with @ApplicationScoped.">APIは<router-link to="/mp/reactivemessaging/introduction">「MicroProfileリアクティブ・メッセージング」</router-link>コネクタと同じであるため、コネクタを両方の方法で動作させるために必要なのは、<code>@ApplicationScoped</code>による注釈付けのみです。</span> <span class="merged" id="all.3xYPXh.spl2" title="原文 : Such connector is treated as a bean in Helidon MP.">このようなコネクタは、Helidon MPではBeanとして扱われます。</span> </p>

<p><span class="merged" id="all.KQU1A" title="原文 : For specific information about creating messaging connectors for Helidon MP visit MicroProfile Reactive Messaging.">Helidon MPのメッセージング・コネクタの作成の詳細は、<router-link to="/mp/reactivemessaging/introduction">「MicroProfileリアクティブ・メッセージング」</router-link>を参照してください。</span></p>

</div>


<h4 id="_kafka_connector"><span class="merged" id="all.2YaEvl" title="原文 : Kafka Connector">Kafkaコネクタ</span></h4>
<div class="section">
<markup
lang="xml"
title="Maven dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.messaging.kafka&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-messaging-kafka&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>


<h5 id="_reactive_kafka_connector"><span class="merged" id="all.3lIzjC" title="原文 : Reactive Kafka Connector">リアクティブKafkaコネクタ</span></h5>
<div class="section">
<p><span class="merged" id="all.1cnBxO" title="原文 : Connecting streams to Kafka with Reactive Messaging couldn’t be easier.">リアクティブ・メッセージングを使用したKafkaへのストリームの接続はより簡単にはできないでしょう。</span></p>

</div>


<h5 id="_explicit_config_with_config_builder_for_kafka_connector"><span class="merged" id="all.YdxKy" title="原文 : Explicit Config with Config Builder for Kafka Connector">Kafkaコネクタの構成ビルダーによる明示的な構成</span></h5>
<div class="section">
<markup
lang="java"
title="Example of consuming from Kafka:"
>String kafkaServer = config.get("app.kafka.bootstrap.servers").asString().get();
String topic = config.get("app.kafka.topic").asString().get();

Channel&lt;String&gt; fromKafka = Channel.&lt;String&gt;builder()<span class="conum" data-value="1" /><span class="conum" data-value="2" />
        .name("from-kafka")
        .publisherConfig(KafkaConnector.configBuilder()
                .bootstrapServers(kafkaServer)
                .groupId("example-group-" + session.getId())
                .topic(topic)
                .autoOffsetReset(KafkaConfigBuilder.AutoOffsetReset.LATEST)
                .enableAutoCommit(true)
                .keyDeserializer(StringDeserializer.class)
                .valueDeserializer(StringDeserializer.class)
                .build()
        )
        .build();

KafkaConnector kafkaConnector = KafkaConnector.create();<span class="conum" data-value="3" />

Messaging messaging = Messaging.builder()
        .connector(kafkaConnector)
        .listener(fromKafka, payload -&gt; {
            System.out.println("Kafka says: " + payload);
        })
        .build()
        .start();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3vFITe" title="原文 : Prepare a channel for connecting kafka connector with specific publisher configuration → listener">kafkaコネクタを特定のパブリッシャ構成→リスナーに接続するためのチャネルを準備</span></li>
<li data-value="2"><span class="merged" id="all.3400KF" title="原文 : Channel → connector mapping is automatic when using KafkaConnector.configBuilder()">KafkaConnector.configBuilder()を使用する場合、チャネル→コネクタ・マッピングは自動的に行われます</span></li>
<li data-value="3"><span class="merged" id="all.2wxobH.1" title="原文 : Prepare Kafka connector, can be used by any channel">任意のチャネルで使用可能なKafkaコネクタの準備</span></li>
</ul>

<markup
lang="java"
title="Example of producing to Kafka:"
>String kafkaServer = config.get("app.kafka.bootstrap.servers").asString().get();
String topic = config.get("app.kafka.topic").asString().get();

Channel&lt;String&gt; toKafka = Channel.&lt;String&gt;builder()<span class="conum" data-value="1" /><span class="conum" data-value="2" />
        .subscriberConfig(KafkaConnector.configBuilder()
                .bootstrapServers(kafkaServer)
                .topic(topic)
                .keySerializer(StringSerializer.class)
                .valueSerializer(StringSerializer.class)
                .build()
        ).build();

KafkaConnector kafkaConnector = KafkaConnector.create();<span class="conum" data-value="3" />

messaging = Messaging.builder()
        .publisher(toKafka, Multi.just("test1", "test2").map(Message::of))
        .connector(kafkaConnector)
        .build()
        .start();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3vFITe.1" title="原文 : Prepare a channel for connecting kafka connector with specific publisher configuration → listener">kafkaコネクタを特定のパブリッシャ構成→リスナーに接続するためのチャネルを準備</span></li>
<li data-value="2"><span class="merged" id="all.3400KF.1" title="原文 : Channel → connector mapping is automatic when using KafkaConnector.configBuilder()">KafkaConnector.configBuilder()を使用する場合、チャネル→コネクタ・マッピングは自動的に行われます</span></li>
<li data-value="3"><span class="merged" id="all.2wxobH.2" title="原文 : Prepare Kafka connector, can be used by any channel">任意のチャネルで使用可能なKafkaコネクタの準備</span></li>
</ul>

</div>


<h5 id="_implicit_helidon_config_for_kafka_connector"><span class="merged" id="all.1hKSVO" title="原文 : Implicit Helidon Config for Kafka Connector">Kafkaコネクタの暗黙的なHelidon構成</span></h5>
<div class="section">
<markup
lang="yaml"
title="Example of connector config:"
>mp.messaging:

  incoming.from-kafka:
    connector: helidon-kafka
    topic: messaging-test-topic-1
    auto.offset.reset: latest <span class="conum" data-value="1" />
    enable.auto.commit: true
    group.id: example-group-id

  outgoing.to-kafka:
    connector: helidon-kafka
    topic: messaging-test-topic-1

  connector:
    helidon-kafka:
      bootstrap.servers: localhost:9092 <span class="conum" data-value="2" />
      key.serializer: org.apache.kafka.common.serialization.StringSerializer
      value.serializer: org.apache.kafka.common.serialization.StringSerializer
      key.deserializer: org.apache.kafka.common.serialization.StringDeserializer
      value.deserializer: org.apache.kafka.common.serialization.StringDeserializer</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4e457X.1" title="原文 : Kafka client consumer’s property auto.offset.reset configuration for from-kafka channel only"><code>from-kafka</code>チャネルのKafkaクライアント・コンシューマのプロパティauto.offset.reset構成のみ</span></li>
<li data-value="2"><span class="merged" id="all.2t0BTW.1" title="原文 : Kafka client’s property bootstrap.servers configuration for all channels using the connector">コネクタを使用するすべてのチャネルのKafkaクライアントのプロパティ<a href="https://kafka.apache.org/28/documentation.html#consumerconfigs_bootstrap.servers" target="_blank">bootstrap.servers</a>構成</span></li>
</ul>

<markup
lang="java"
title="Example of consuming from Kafka:"
>Config config = Config.create();

Channel&lt;String&gt; fromKafka = Channel.create("from-kafka");

KafkaConnector kafkaConnector = KafkaConnector.create();<span class="conum" data-value="1" />

Messaging messaging = Messaging.builder()
        .config(config)
        .connector(kafkaConnector)
        .listener(fromKafka, payload -&gt; {
            System.out.println("Kafka says: " + payload);
        })
        .build()
        .start();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2wxobH.3" title="原文 : Prepare Kafka connector, can be used by any channel">任意のチャネルで使用可能なKafkaコネクタの準備</span></li>
</ul>

<markup
lang="java"
title="Example of producing to Kafka:"
>Config config = Config.create();

Channel&lt;String&gt; toKafka = Channel.create("to-kafka");

KafkaConnector kafkaConnector = KafkaConnector.create();<span class="conum" data-value="1" />

messaging = Messaging.builder()
        .config(config)
        .publisher(toKafka, Multi.just("test1", "test2").map(Message::of))
        .connector(kafkaConnector)
        .build()
        .start();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2wxobH.4" title="原文 : Prepare Kafka connector, can be used by any channel">任意のチャネルで使用可能なKafkaコネクタの準備</span></li>
</ul>

<p><span class="merged" id="all.4Vi1Lz.1" title="原文 : Don’t forget to check out the examples with pre-configured Kafka docker image, for easy testing:">簡単にテストできるように、Kafka dockerイメージが事前構成されている例を忘れずにチェックアウトしてください:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.44DzRK" title="原文 : https://github.com/oracle/helidon/tree/master/examples/messaging"><a class="bare" href="https://github.com/oracle/helidon/tree/master/examples/messaging" target="_blank">https://github.com/oracle/helidon/tree/master/examples/messaging</a></span></p>

</li>
</ul>

</div>

</div>


<h4 id="_jms_connector"><span class="merged" id="all.4Xiim7" title="原文 : JMS Connector">JMSコネクタ</span></h4>
<div class="section">
<markup
lang="xml"
title="Maven dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.messaging.jms&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-messaging-jms&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>


<h5 id="_reactive_jms_connector"><span class="merged" id="all.2u6yav" title="原文 : Reactive JMS Connector">リアクティブJMSコネクタ</span></h5>
<div class="section">
<p><span class="merged" id="all.S3gdo.1" title="原文 : Connecting streams to JMS with Reactive Messaging couldn’t be easier.">リアクティブ・メッセージングを使用したJMSへのストリームの接続はより簡単にはできないでしょう。</span></p>

</div>


<h5 id="_explicit_config_with_config_builder_for_jms_connector"><span class="merged" id="all.3aw2IO" title="原文 : Explicit Config with Config Builder for JMS Connector">JMSコネクタ用の構成ビルダーによる明示的な構成</span></h5>
<div class="section">
<markup
lang="java"
title="Example of consuming from JMS:"
>Channel&lt;String&gt; fromJms = Channel.&lt;String&gt;builder()<span class="conum" data-value="1" /><span class="conum" data-value="2" />
        .name("from-jms")
        .publisherConfig(JmsConnector.configBuilder()
                .jndiInitialFactory(ActiveMQInitialContextFactory.class)
                .jndiProviderUrl("tcp://127.0.0.1:61616")
                .type(JmsConfigBuilder.Type.QUEUE)
                .destination("se-example-queue-1")
                .build()
        )
        .build();

JmsConnector jmsConnector = JmsConnector.create();<span class="conum" data-value="3" />

Messaging messaging = Messaging.builder()
        .connector(jmsConnector)
        .listener(fromJms, payload -&gt; {
            System.out.println("Jms says: " + payload);
        })
        .build()
        .start();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.48L0tw" title="原文 : Prepare a channel for connecting jms connector with specific publisher configuration → listener">jmsコネクタを特定のパブリッシャ構成→リスナーに接続するためのチャネルを準備</span></li>
<li data-value="2"><span class="merged" id="all.3Q4kAI" title="原文 : Channel → connector mapping is automatic when using JmsConnector.configBuilder()">JmsConnector.configBuilder()を使用する場合、チャネル→コネクタ・マッピングは自動的に行われます</span></li>
<li data-value="3"><span class="merged" id="all.2GKdce" title="原文 : Prepare JMS connector, can be used by any channel">JMSコネクタを準備します。任意のチャネルで使用できます</span></li>
</ul>

<markup
lang="java"
title="Example of producing to JMS:"
>Channel&lt;String&gt; toJms = Channel.&lt;String&gt;builder()<span class="conum" data-value="1" /><span class="conum" data-value="2" />
        .subscriberConfig(JmsConnector.configBuilder()
                .jndiInitialFactory(ActiveMQInitialContextFactory.class)
                .jndiProviderUrl("tcp://127.0.0.1:61616")
                .type(JmsConfigBuilder.Type.QUEUE)
                .destination("se-example-queue-1")
                .build()
        ).build();

JmsConnector jmsConnector = JmsConnector.create();<span class="conum" data-value="3" />

messaging = Messaging.builder()
        .publisher(toJms, Multi.just("test1", "test2").map(Message::of))
        .connector(jmsConnector)
        .build()
        .start();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.48L0tw.1" title="原文 : Prepare a channel for connecting jms connector with specific publisher configuration → listener">jmsコネクタを特定のパブリッシャ構成→リスナーに接続するためのチャネルを準備</span></li>
<li data-value="2"><span class="merged" id="all.3Q4kAI.1" title="原文 : Channel → connector mapping is automatic when using JmsConnector.configBuilder()">JmsConnector.configBuilder()を使用する場合、チャネル→コネクタ・マッピングは自動的に行われます</span></li>
<li data-value="3"><span class="merged" id="all.2GKdce.1" title="原文 : Prepare JMS connector, can be used by any channel">JMSコネクタを準備します。任意のチャネルで使用できます</span></li>
</ul>

</div>


<h5 id="_implicit_helidon_config_for_jms_connector"><span class="merged" id="all.3LeUJP" title="原文 : Implicit Helidon Config for JMS Connector">JMSコネクタの暗黙的なHelidon構成</span></h5>
<div class="section">
<markup
lang="yaml"
title="Example of connector config:"
>mp.messaging:

  incoming.from-jms:
    connector: helidon-jms
    destination: se-example-queue-1
    session-group-id: session-group-1
    type: queue

  outgoing.to-jms:
    connector: helidon-jms
      destination: se-example-queue-1
      type: queue

  connector:
    helidon-jms:
      jndi:
        jms-factory: ConnectionFactory
        env-properties:
          java.naming.factory.initial: org.apache.activemq.jndi.ActiveMQInitialContextFactory
          java.naming.provider.url: tcp://127.0.0.1:61616</markup>

<markup
lang="java"
title="Example of consuming from JMS:"
>Config config = Config.create();

Channel&lt;String&gt; fromJms = Channel.create("from-jms");

JmsConnector jmsConnector = JmsConnector.create();<span class="conum" data-value="1" />

Messaging messaging = Messaging.builder()
        .config(config)
        .connector(jmsConnector)
        .listener(fromJms, payload -&gt; {
            System.out.println("Jms says: " + payload);
        })
        .build()
        .start();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2GKdce.2" title="原文 : Prepare JMS connector, can be used by any channel">JMSコネクタを準備します。任意のチャネルで使用できます</span></li>
</ul>

<markup
lang="java"
title="Example of producing to JMS:"
>Config config = Config.create();

Channel&lt;String&gt; toJms = Channel.create("to-jms");

JmsConnector jmsConnector = JmsConnector.create();<span class="conum" data-value="1" />

messaging = Messaging.builder()
        .config(config)
        .publisher(toJms, Multi.just("test1", "test2").map(Message::of))
        .connector(jmsConnector)
        .build()
        .start();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2GKdce.3" title="原文 : Prepare JMS connector, can be used by any channel">JMSコネクタを準備します。任意のチャネルで使用できます</span></li>
</ul>

<p><span class="merged" id="all.3dx5ug" title="原文 : Don’t forget to check out the examples with pre-configured ActiveMQ docker image, for easy testing:">簡単にテストできるように、ActiveMQ dockerイメージが事前構成されている例を忘れずにチェックアウトしてください:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.44DzRK.1" title="原文 : https://github.com/oracle/helidon/tree/master/examples/messaging"><a class="bare" href="https://github.com/oracle/helidon/tree/master/examples/messaging" target="_blank">https://github.com/oracle/helidon/tree/master/examples/messaging</a></span></p>

</li>
</ul>

</div>

</div>


<h4 id="_aq_connector"><span class="merged" id="all.1Zh1C3" title="原文 : AQ Connector">AQコネクタ</span></h4>
<div class="section">
<markup
lang="xml"
title="Maven dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.messaging.aq&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-messaging-aq&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>


<h5 id="_reactive_oracle_aq_connector"><span class="merged" id="all.4eUebl" title="原文 : Reactive Oracle AQ Connector">リアクティブOracle AQコネクタ</span></h5>
<div class="section">

</div>


<h5 id="_sending_and_receiving"><span class="merged" id="all.2zhjMD" title="原文 : Sending and Receiving">送信および受入</span></h5>
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

</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.45"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1jID6e" title="原文 : Configuration for Messaging Connector"><router-link @click.native="this.scrollFix('#_configuration_for_messaging_connector')" to="#_configuration_for_messaging_connector">メッセージ・コネクタの構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4c59Xh" title="原文 : Explicit Configuration with Config Builder for Kafka Connector"><router-link @click.native="this.scrollFix('#_explicit_config_with_config_builder_for_kafka_connector')" to="#_explicit_config_with_config_builder_for_kafka_connector">Kafkaコネクタの構成ビルダーによる明示的な構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1VlxQq" title="原文 : Implicit Helidon Configuration for Kafka Connector"><router-link @click.native="this.scrollFix('#_implicit_helidon_config_for_kafka_connector')" to="#_implicit_helidon_config_for_kafka_connector">Kafkaコネクタの暗黙的なHelidon構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1Zb1hm" title="原文 : Explicit Configuration with Config Builder for JMS Connector"><router-link @click.native="this.scrollFix('#_explicit_config_with_config_builder_for_jms_connector')" to="#_explicit_config_with_config_builder_for_jms_connector">JMSコネクタ用の構成ビルダーによる明示的な構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1hqQfx" title="原文 : Implicit Helidon Configuration for JMS Connector"><router-link @click.native="this.scrollFix('#_implicit_helidon_config_for_jms_connector')" to="#_implicit_helidon_config_for_jms_connector">JMSコネクタの暗黙的なHelidon構成</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.22"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.3moJW9.1" title="原文 : MicroProfile Reactive Messaging Specification"><a href="https://download.eclipse.org/microprofile/microprofile-reactive-messaging-3.0/microprofile-reactive-messaging-spec-3.0.html" target="_blank">MicroProfileリアクティブ・メッセージング仕様</a></span></p>

</li>
<li>
<p><span class="merged" id="all.4NkrlK.1" title="原文 : MicroProfile Reactive Messaging on GitHub"><a href="https://github.com/eclipse/microprofile-reactive-messaging" target="_blank">GitHubでのMicroProfileリアクティブ・メッセージング</a></span></p>

</li>
<li>
<p><span class="merged" id="all.3UukKO" title="原文 : Helidon Messaging Examples"><a href="https://github.com/oracle/helidon/tree/4.0.2/examples/messaging" target="_blank">Helidonメッセージングの例</a></span></p>

</li>
</ul>

</div>

</doc-view>
