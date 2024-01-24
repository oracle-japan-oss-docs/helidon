<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.27"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.25" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.20" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3SdlJ5" title="原文 : Config Example"><router-link @click.native="this.scrollFix('#_config_example')" to="#_config_example">構成の例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.113gu4" title="原文 : NACK Strategy"><router-link @click.native="this.scrollFix('#_nack_strategy')" to="#_nack_strategy">NACK戦略</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.17" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.34"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.1wegTd.spl1" title="原文 : Connecting streams to Kafka with Reactive Messaging is easy to do.">リアクティブ・メッセージングでストリームをKafkaに接続するのは簡単です。</span> <span class="merged" id="all.1wegTd.spl2" title="原文 : There is a standard Kafka client behind the scenes, all the producer and consumer configs can be propagated through messaging config.">バックグラウンドには標準のKafkaクライアントがあり、すべての<a href="https://kafka.apache.org/28/documentation.html#producerconfigs" target="_blank">「生産者」</a>および<a href="https://kafka.apache.org/28/documentation.html#consumerconfigs" target="_blank">「消費者」</a>構成をメッセージング構成で伝播できます。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.23"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.2ToW8R" title="原文 : To enable Reactive Kafka Connector add the following dependency to your project’s pom.xml (see Managing Dependencies).">リアクティブKafkaコネクタを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.messaging.kafka&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-messaging-kafka&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_config_example"><span class="merged" id="all.1z1Ls7" title="原文 : Config Example">構成の例</span></h2>
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
<li data-value="1"><span class="merged" id="all.4e457X" title="原文 : Kafka client consumer’s property auto.offset.reset configuration for from-kafka channel only"><code>from-kafka</code>チャネルのKafkaクライアント・コンシューマのプロパティauto.offset.reset構成のみ</span></li>
<li data-value="2"><span class="merged" id="all.2t0BTW" title="原文 : Kafka client’s property bootstrap.servers configuration for all channels using the connector">コネクタを使用するすべてのチャネルのKafkaクライアントのプロパティ<a href="https://kafka.apache.org/28/documentation.html#consumerconfigs_bootstrap.servers" target="_blank">bootstrap.servers</a>構成</span></li>
</ul>

<markup
lang="java"
title="Example of consuming from Kafka:"
>@Incoming("from-kafka")
public void consumeKafka(String msg) {
    System.out.println("Kafka says: " + msg);
}</markup>

<markup
lang="java"
title="Example of producing to Kafka:"
>@Outgoing("to-kafka")
public PublisherBuilder&lt;String&gt; produceToKafka() {
    return ReactiveStreams.of("test1", "test2");
}</markup>

</div>


<h2 id="_nack_strategy"><span class="merged" id="all.3WtiHO" title="原文 : NACK Strategy">NACK戦略</span></h2>
<div class="section">

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
<td class=""><span class="merged" id="all.4LIyIl.1"  title="原文:: Strategy">戦略</span></td>
<td class=""><span class="merged" id="all.4JM9z7.17"  title="原文:: Description">説明</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.33Pd1h" title="原文 : Kill channel">Killチャネル</span></td>
<td class=""><span class="merged" id="all.2KgeMP" title="原文 : Nacked message sends error signal and causes channel failure so Messaging Health check can report it as DOWN">Nacked messageはエラー・シグナルを送信し、チャネル障害を引き起こすため、Messaging HealthチェックでDOWNとしてレポートできます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3fac7B"  title="原文:: DLQ">DLQ</span></td>
<td class=""><span class="merged" id="all.1pZDGO" title="原文 : Nacked messages are sent to specified dead-letter-queue">不足しているメッセージは指定されたデッド・レター・キューに送信されます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.26s7SP" title="原文 : Log only">ログのみ</span></td>
<td class=""><span class="merged" id="all.2UY3dL" title="原文 : Nacked message is logged and channel continues normally">欠けているメッセージが記録され、チャネルは通常どおり続きます</span></td>
</tr>
</tbody>
</table>
</div>


<h3 id="_kill_channel"><span class="merged" id="all.33Pd1h.1" title="原文 : Kill channel">Killチャネル</span></h3>
<div class="section">
<p><span class="merged" id="all.1Gg3qJ.spl1" title="原文 : Default NACK strategy for Kafka connector.">KafkaコネクタのデフォルトのNACK戦略。</span> <span class="merged" id="all.1Gg3qJ.spl2"  title="原文:: When">操作時</span> </p>

</div>


<h3 id="_dead_letter_queue"><span class="merged" id="all.2zKYzy"  title="原文:: Dead Letter Queue"> 配信不能キュー</span></h3>
<div class="section">
<p><span class="merged" id="all.1O8fJC" title="原文 : Sends nacked messages to error topic, DLQ is well known pattern for dealing with unprocessed messages.">ナック・メッセージをエラー・トピックに送信します。<a href="https://en.wikipedia.org/wiki/Dead_letter_queue" target="_blank">DLQ</a>は、未処理メッセージを処理するためのよく知られたパターンです。</span></p>

<p><span class="merged" id="all.3id9Xl.spl1" title="原文 : Helidon can derive connection settings for DLQ topic automatically if the error topic is present on the same Kafka cluster.">Helidonは、エラー・トピックが同じKafkaクラスタに存在する場合、DLQトピックの接続設定を自動的に導出できます。</span> <span class="merged" id="all.3id9Xl.spl2" title="原文 : Serializers are derived from deserializers used for consumption org.apache.kafka.common.serialization.StringDeserializer &gt; org.apache.kafka.common.serialization.StringSerializer.">シリアライザは、消費<code>org.apache.kafka.common.serialization.StringDeserializer</code> > <code>org.apache.kafka.common.serialization.StringSerializer</code>に使用されるデ・シリアライザから導出されます。</span> <span class="merged" id="all.3id9Xl.spl3" title="原文 : Note that the name of the error topic is needed only in this case.">この場合は、エラー・トピックの名前のみが必要であることに注意してください。</span> </p>

<markup
lang="yaml"
title="Example of derived DLQ config:"
>mp.messaging:
  incoming:
    my-channel:
      nack-dlq: dql_topic_name</markup>

<p><span class="merged" id="all.40AmSQ" title="原文 : If a custom connection is needed, then use the &apos;nack-dlq&apos; key for all of the producer configuration.">カスタム接続が必要な場合は、すべてのプロデューサ構成に'nack-dlq'キーを使用します。</span></p>

<markup
lang="yaml"
title="Example of custom DLQ config:"
>mp.messaging:
  incoming:
    my-channel:
      nack-dlq:
        topic: dql_topic_name
        bootstrap.servers: localhost:9092
        key.serializer: org.apache.kafka.common.serialization.StringSerializer
        value.serializer: org.apache.kafka.common.serialization.StringSerializer</markup>

</div>


<h3 id="_log_only"><span class="merged" id="all.26s7SP.1" title="原文 : Log only">ログのみ</span></h3>
<div class="section">
<p><span class="merged" id="all.1iDRlg" title="原文 : Only logs nacked messages and throws them away, offset is committed and channel continues normally consuming subsequent messages.">ナックされたメッセージのみがログに記録され、スローされ、オフセットがコミットされ、チャネルは通常後続のメッセージを消費し続けます。</span></p>

<markup
lang="yaml"
title="Example of log only enabled nack strategy"
>mp.messaging:
  incoming:
    my-channel:
      nack-log-only: true</markup>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.19"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.4Vi1Lz" title="原文 : Don’t forget to check out the examples with pre-configured Kafka docker image, for easy testing:">簡単にテストできるように、Kafka dockerイメージが事前構成されている例を忘れずにチェックアウトしてください:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1xEwTx"  title="原文: https://github.com/oracle/helidon/tree/4.0.2/examples/messaging"><a class="bare" href="https://github.com/oracle/helidon/tree/4.0.2/examples/messaging" target="_blank">https://github.com/oracle/helidon/tree/4.0.2/examples/messaging</a></span></p>

</li>
</ul>

</div>

</doc-view>
