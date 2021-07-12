<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.52" title="原文 : Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.3Sn5gg" title="原文 : To enable Kafka Connector add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">Kafka Connectorを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.messaging.kafka&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-messaging-kafka&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_reactive_kafka_connector"><span class="merged" id="all.3lIzjC.1" title="原文 : Reactive Kafka Connector">リアクティブKafkaコネクタ</span></h2>
<div class="section">
<p><span class="merged" id="all.1cnBxO.1" title="原文 : Connecting streams to Kafka with Reactive Messaging couldn&rsquo;t be easier.">リアクティブ・メッセージングを使用したKafkaへのストリームの接続はより簡単にはできないでしょう。</span></p>


<h3 id="_explicit_config_with_config_builder"><span class="merged" id="all.1KclVb" title="原文 : Explicit config with config builder">構成ビルダーによる明示的な構成</span></h3>
<div class="section">
<markup
lang="java"
title="Kafkaからの使用例:"
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
title="Kafkaへの生産の例:"
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

<h3 id="_implicit_helidon_config"><span class="merged" id="all.4UGZ7k" title="原文 : Implicit Helidon Config">暗黙的なHelidon構成</span></h3>
<div class="section">
<markup
lang="yaml"
title="コネクタ構成の例:"
>mp.messaging:

  incoming.from-kafka:
    connector: helidon-kafka
    topic: messaging-test-topic-1
    auto.offset.reset: latest
    enable.auto.commit: true
    group.id: example-group-id

  outgoing.to-kafka:
    connector: helidon-kafka
    topic: messaging-test-topic-1

  connector:
    helidon-kafka:
      bootstrap.servers: localhost:9092
      key.serializer: org.apache.kafka.common.serialization.StringSerializer
      value.serializer: org.apache.kafka.common.serialization.StringSerializer
      key.deserializer: org.apache.kafka.common.serialization.StringDeserializer
      value.deserializer: org.apache.kafka.common.serialization.StringDeserializer</markup>

<markup
lang="java"
title="Kafkaからの使用例:"
>Channel&lt;String&gt; fromKafka = Channel.create("from-kafka");

KafkaConnector kafkaConnector = KafkaConnector.create();<span class="conum" data-value="1" />

Messaging messaging = Messaging.builder()
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
title="Kafkaへの生産の例:"
>Channel&lt;String&gt; toKafka = Channel.create("to-kafka");

KafkaConnector kafkaConnector = KafkaConnector.create();<span class="conum" data-value="1" />

messaging = Messaging.builder()
        .publisher(toKafka, Multi.just("test1", "test2").map(Message::of))
        .connector(kafkaConnector)
        .build()
        .start();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2wxobH.4" title="原文 : Prepare Kafka connector, can be used by any channel">任意のチャネルで使用可能なKafkaコネクタの準備</span></li>
</ul>
<p><span class="merged" id="all.4Vi1Lz.1" title="原文 : Don&rsquo;t forget to check out the examples with pre-configured Kafka docker image, for easy testing:">簡単にテストできるように、Kafka dockerイメージが事前構成されている例を忘れずにチェックアウトしてください:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2Fzk8.1" title="原文 : https://github.com/oracle/helidon/tree/master/examples/messaging"><a href="https://github.com/oracle/helidon/tree/master/examples/messaging" id="" target="_blank" >https://github.com/oracle/helidon/tree/master/examples/messaging</a></span></p>

</li>
</ul>
</div>
</div>
</doc-view>
