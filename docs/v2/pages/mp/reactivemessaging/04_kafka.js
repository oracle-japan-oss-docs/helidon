<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.21" title="原文 : Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.LbJBP" title="原文 : To enable Reactive Kafka Connector add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">リアクティブKafkaコネクタを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.messaging.kafka&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-messaging-kafka&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_reactive_kafka_connector"><span class="merged" id="all.3lIzjC" title="原文 : Reactive Kafka Connector">リアクティブKafkaコネクタ</span></h2>
<div class="section">
<p><span class="merged" id="all.1cnBxO" title="原文 : Connecting streams to Kafka with Reactive Messaging couldn&rsquo;t be easier.">リアクティブ・メッセージングを使用したKafkaへのストリームの接続はより簡単にはできないでしょう。</span></p>

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
>@Incoming("from-kafka")
public void consumeKafka(String msg) {
    System.out.println("Kafka says: " + msg);
}</markup>

<markup
lang="java"
title="Kafkaへの生産の例:"
>@Outgoing("to-kafka")
public PublisherBuilder&lt;String&gt; produceToKafka() {
    return ReactiveStreams.of("test1", "test2");
}</markup>

<p><span class="merged" id="all.4Vi1Lz" title="原文 : Don&rsquo;t forget to check out the examples with pre-configured Kafka docker image, for easy testing:">簡単にテストできるように、Kafka dockerイメージが事前構成されている例を忘れずにチェックアウトしてください:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2Fzk8" title="原文 : https://github.com/oracle/helidon/tree/master/examples/messaging"><a href="https://github.com/oracle/helidon/tree/master/examples/messaging" id="" target="_blank" >https://github.com/oracle/helidon/tree/master/examples/messaging</a></span></p>

</li>
</ul>
</div>
</doc-view>
