<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_messaging_connector"><span class="merged" id="all.2JgL2f" title="原文 : Messaging Connector">メッセージング・コネクタ</span></h2>
<div class="section">
<p><span class="merged" id="all.ZUfwt.spl1" title="原文 : Connector for Reactive Messaging is a factory producing Publishers and Subscribers for Channels in Reactive Messaging.">リアクティブ・メッセージング用のコネクタは、リアクティブ・メッセージングでチャネルのパブリッシャおよびサブスクライバを生産するファクトリです。</span> <span class="merged" id="all.ZUfwt.spl2" title="原文 : Messaging connector is just an implementation of IncomingConnectorFactory, OutgoingConnectorFactory or both.">メッセージング・コネクタは、<code>IncomingConnectorFactory</code>、<code>OutgoingConnectorFactory</code>またはその両方の単なる実装です。</span> </p>

<markup
lang="java"
title="コネクタ<code>example-connector</code>の例:"
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
title="チャネルからコネクタへのマッピング構成の例:"
>mp.messaging.outgoing.to-connector-channel.connector: example-connector
mp.messaging.incoming.from-connector-channel.connector: example-connector</markup>

<markup
lang="java"
title="コネクタへの生産例:"
>Messaging.builder()
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
title="コネクタからの使用例:"
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


<h3 id="_configuration"><span class="merged" id="all.Pfqvy.4"  title="原文:: Configuration">構成</span></h3>
<div class="section">
<p><span class="merged" id="all.U2pV6" title="原文 : Messaging connector in Helidon SE can be configured explicitly by API or implicitly by config following notation of MicroProfile Reactive Messaging.">Helidon SEのメッセージング・コネクタは、APIによって明示的に構成することも、<a href="https://download.eclipse.org/microprofile/microprofile-reactive-messaging-1.0/microprofile-reactive-messaging-spec.html#_configuration" id="" target="_blank" >「MicroProfileリアクティブ・メッセージング」</a>の表記法に従って構成することによって暗黙的に構成することもできます。</span></p>

<p><span class="merged" id="all.1XgHfS" title="原文 : Configuration is being supplied to connector by Messaging implementation, two mandatory attributes are always present:">メッセージング実装によってコネクタに構成が提供されています。次の2つの必須属性が常に存在します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1ldeC1" title="原文 : channel-name name of the channel which has this connector configured as Publisher or Subscriber, Channel.create(&apos;name-of-channel&apos;) in case of explicit configuration or mp.messaging.incoming.name-of-channel.connector: connector-name in case of implicit config">このコネクタがパブリッシャまたはサブスクライバとして構成されているチャネルの<code>channel-name</code>名(明示的な構成の場合は<code>Channel.create('name-of-channel')</code>、暗黙的な構成の場合は<code>mp.messaging.incoming.name-of-channel.connector: connector-name</code>)</span></p>

</li>
<li>
<p><span class="merged" id="all.5vEVi" title="原文 : connector name of the connector @Connector(&quot;connector-name&quot;)">コネクタ<code>@Connector("connector-name")</code>の<code>connector</code>名</span></p>

</li>
</ul>
<markup
lang="java"
title="構成にアクセスするコネクタの例:"
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

<h4 id="_explicit_config"><span class="merged" id="all.5flUv" title="原文 : Explicit Config">明示的な構成</span></h4>
<div class="section">
<p><span class="merged" id="all.3rg5y1.spl1" title="原文 : An explicit config for channel&rsquo;s publisher is possible with Channel.Builder#publisherConfig(Config config) and for subscriber with Channel.Builder#subscriberConfig(Config config).">チャネルのパブリッシャの明示的な構成は、<code>Channel.Builder#publisherConfig(Config config)</code>および<code>Channel.Builder#subscriberConfig(Config config)</code>のサブスクライバで可能です。</span> <span class="merged" id="all.3rg5y1.spl2" title="原文 : Supplied Helidon Config is merged with mandatory attributes and any implicit config found.">指定された<router-link to="/se/config/01_introduction">「Helidon構成」</router-link>は、必須属性および検出された暗黙的構成とマージされます。</span> <span class="merged" id="all.3rg5y1.spl3" title="原文 : Resulting config is served to Connector.">結果の構成はコネクタに提供されます。</span> </p>

<markup
lang="java"
title="明示的な構成を使用したKafkaコネクタからの使用例:"
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

<h4 id="_implicit_config"><span class="merged" id="all.2zC5xM" title="原文 : Implicit Config">暗黙的な構成</span></h4>
<div class="section">
<p><span class="merged" id="all.2hu9ks" title="原文 : Implicit config without any hard-coding is possible with Helidon Config following notation of MicroProfile Reactive Messaging.">ハードコードを使用しない暗黙的な構成は、<a href="https://download.eclipse.org/microprofile/microprofile-reactive-messaging-1.0/microprofile-reactive-messaging-spec.html#_configuration" id="" target="_blank" >「MicroProfileリアクティブ・メッセージング」</a>の表記に従った<router-link to="/se/config/01_introduction">「Helidon構成」</router-link>で可能です。</span></p>

<markup
lang="yaml"
title="カスタム・プロパティを含むチャネルからコネクタへのマッピング構成の例:"
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
title="コネクタからの使用例:"
>Messaging.builder()
        .connector(new ExampleConnector())
        .listener(Channel.create("from-connector-channel"),
                    s -&gt; System.out.println("Consuming: " + s))
        .build()
        .start();

&gt; Consuming: foo
&gt; Consuming: bar</markup>

</div>
</div>

<h3 id="_reusability_in_mp_messaging"><span class="merged" id="all.nyXQh" title="原文 : Reusability in MP Messaging">MPメッセージングの再利用性</span></h3>
<div class="section">
<p><span class="merged" id="all.2YRG8f.spl1" title="原文 : As the API is the same for MicroProfile Reactive Messaging connectors, all that is needed to make connector work in both ways is annotating it with @ApplicationScoped.">APIは<router-link to="/mp/reactivemessaging/01_introduction">「MicroProfileリアクティブ・メッセージング」</router-link>コネクタと同じであるため、コネクタを両方の方法で動作させるために必要なのは、<code>@ApplicationScoped</code>による注釈付けのみです。</span> <span class="merged" id="all.2YRG8f.spl2" title="原文 : Such connector is treated as a bean in Helidon MP.">このようなコネクタは、Helidon MPではBeanとして扱われます。</span> </p>

<p><span class="merged" id="all.2d27CA" title="原文 : For specific informations about creating messaging connectors for Helidon MP visit Messaging Connector Bean.">Helidon MP用のメッセージング・コネクタの作成の詳細は、<router-link to="/mp/reactivemessaging/03_connector">「メッセージング・コネクタBean」</router-link>を参照してください。</span></p>

</div>
</div>
</doc-view>
