<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.23"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.20" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.18" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.16" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.16" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.9" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.12" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.29"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.4e0NfI.spl1" title="原文 : Reactive messaging offers a new way of processing messages that is different from the older method of using message-driven beans.">リアクティブ・メッセージングは、メッセージドリブンBeanを使用する古いメソッドとは異なる新しいメッセージ処理方法を提供します。</span> <span class="merged" id="all.4e0NfI.spl2" title="原文 : One significant difference is that blocking is no longer the only way to apply backpressure to the message source.">重要な違いは、ブロックは、メッセージ・ソースにバック・プレッシャを適用する唯一の方法ではなくなったことです。</span> </p>

<p><span class="merged" id="all.ySDGD.spl1" title="原文 : Reactive messaging uses reactive streams as message channels so you can construct very effective pipelines for working with the messages or, if you prefer, you can continue to use older messaging methods.">リアクティブ・メッセージングでは、リアクティブ・ストリームがメッセージ・チャネルとして使用されるため、メッセージを操作するための非常に効果的なパイプラインを構築したり、必要に応じて、古いメッセージング・メソッドを引き続き使用できます。</span> <span class="merged" id="all.ySDGD.spl2" title="原文 : Like the message-driven beans, MicroProfile Reactive Messaging uses CDI beans to produce, consume or process messages over Reactive Streams.">メッセージドリブンbeansと同様に、<a href="https://download.eclipse.org/microprofile/microprofile-reactive-messaging-3.0-RC2/microprofile-reactive-messaging-spec-3.0-RC2.html" target="_blank">「MicroProfileリアクティブ・メッセージング」</a>はCDI beansを使用して、リアクティブ・ストリームを介してメッセージを生成、消費または処理します。</span> <span class="merged" id="all.ySDGD.spl3" title="原文 : These essaging beans are expected to be either ApplicationScoped or Dependent scoped.">これらのエッセンシングBeanは、<code>ApplicationScoped</code>または<code>Dependent</code>スコープである必要があります。</span> <span class="merged" id="all.ySDGD.spl4" title="原文 : Messages are managed by methods annotated by @Incoming and @Outgoing and the invocation is always driven by message core - either at assembly time, or for every message coming from the stream.">メッセージは、<code>@Incoming</code>および<code>@Outgoing</code>によって注釈が付けられたメソッドによって管理され、呼出しは常にメッセージ・コアによって駆動されます - アセンブリ時、またはストリームからのすべてのメッセージに対して。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.21"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.2F4QUy" title="原文 : To enable MicroProfile Reactive Messaging add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">MicroProfileリアクティブ・メッセージングを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
   &lt;groupId&gt;io.helidon.microprofile.messaging&lt;/groupId&gt;
   &lt;artifactId&gt;helidon-microprofile-messaging&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.ji3qN" title="原文 : To include health checks for Messaging add the following dependency:">メッセージングのヘルス・チェックを含めるには、次の依存関係を追加します:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
   &lt;groupId&gt;io.helidon.microprofile.messaging&lt;/groupId&gt;
   &lt;artifactId&gt;helidon-microprofile-messaging-health&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.20"  title="原文:: Usage">使用方法</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.OuUPv" title="原文 : Channels"><router-link @click.native="this.scrollFix('#_channels')" to="#_channels">Channels</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3wHaql" title="原文 : Emitter"><router-link @click.native="this.scrollFix('#_emitter')" to="#_emitter">エミッタ</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3HKqQx" title="原文 : Connector"><router-link @click.native="this.scrollFix('#_connector')" to="#_connector">コネクタ</router-link></span></p>

</li>
</ul>


<h3 id="_channels"><span class="merged" id="all.Bn2Zs"  title="原文:: Channels">チャネル</span></h3>
<div class="section">
<p><span class="merged" id="all.2Lt2eF.spl1" title="原文 : Reactive messaging uses named channels to connect one source (upstream) with one consumer (downstream).">リアクティブ・メッセージングでは、名前付きチャネルを使用して、1つのソース(アップストリーム)と1つのコンシューマ(ダウンストリーム)を接続します。</span> <span class="merged" id="all.2Lt2eF.spl2" title="原文 : Each channel needs to have both ends connected otherwise the container cannot successfully start.">各チャネルには、両方の終了が接続されている必要があります。接続されていない場合は、コンテナが正常に起動できません。</span> </p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="メッセージング・チャネル" src="./images/msg/channel.svg" /> </v-card-text> </v-card>


<p><span class="merged" id="all.RyGaH.spl1" title="原文 : Channels can be connected either to emitter (1), producing method (2) or connector (3) on the upstream side.">チャネルは、上流側で<router-link @click.native="this.scrollFix('#_emitter')" to="#_emitter">「エミッタ」</router-link> (1)、<router-link @click.native="this.scrollFix('#_producing_method')" to="#_producing_method">「作成メソッド」</router-link> (2)または<router-link @click.native="this.scrollFix('#_connector')" to="#_connector">connector</router-link> (3)のいずれかに接続できます。</span> <span class="merged" id="all.RyGaH.spl2" title="原文 : And injected publisher (4), consuming method (5) or connector (6) on the downstream.">また、ダウンストリームの<router-link @click.native="this.scrollFix('#_injected_publisher')" to="#_injected_publisher">「インジェクトされたパブリッシャ」</router-link> (4)、<router-link @click.native="this.scrollFix('#_consuming_method')" to="#_consuming_method">「消費メソッド」</router-link> (5)または<router-link @click.native="this.scrollFix('#_connector')" to="#_connector">connector</router-link> (6)です。</span> </p>


<h4 id="_consuming_method"><span class="merged" id="all.44kzTI" title="原文 : Consuming Method">消費メソッド</span></h4>
<div class="section">
<p><span class="merged" id="all.Lwd6H.spl1" title="原文 : Consuming methods can be connected to the channel&rsquo;s downstream to consume the message coming through the channel.">コンシューマ・メソッドは、チャネルのダウンストリームに接続して、チャネルを介して送信されるメッセージを消費できます。</span> <span class="merged" id="all.Lwd6H.spl2" title="原文 : The incoming annotation has one required attribute value that defines the channel name.">受信注釈には、チャネル名を定義する1つの必須属性<code>value</code>があります。</span> </p>

<p><span class="merged" id="all.3aMMmU" title="原文 : Consuming method can function in two ways:">コンシューマ・メソッドは、次の2つの方法で機能します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1xpTst" title="原文 : consume every message coming from the stream connected to the channels - invoked per each message"><router-link @click.native="this.scrollFix('#_channels')" to="#_channels">channels</router-link>に接続されたストリームからのすべてのメッセージを消費 - 各メッセージで起動</span></p>

</li>
<li>
<p><span class="merged" id="all.1uTJRf" title="原文 : prepare reactive stream&rsquo;s subscriber and connect it to the channel - invoked only once during the channel construction">リアクティブ・ストリーム・サブスクライバを準備し、チャネルに接続 - チャネル構築中に1回のみ起動</span></p>

</li>
</ul>

<markup
lang="java"
title="Example consuming every message from channel <code>example-channel-2</code>:"
>@Incoming("example-channel-2")
public void printMessage(String msg) {
    System.out.println("Just received message: " + msg);
}</markup>

<markup
lang="java"
title="Example preparing reactive stream subscriber for channel <code>example-channel-1</code>:"
>@Incoming("example-channel-2")
public Subscriber&lt;String&gt; printMessage() {
    return ReactiveStreams.&lt;String&gt;builder()
                .forEach(msg -&gt; System.out.println("Just received message: " + msg))
                .build();
}</markup>

</div>


<h4 id="_injected_publisher"><span class="merged" id="all.3dEdrm" title="原文 : Injected Publisher">インジェクトされたパブリッシャ</span></h4>
<div class="section">
<p><span class="merged" id="all.oEK1E" title="原文 : Directly injected publisher can be connected as a channel downstream, you can consume the data from the channel by subscribing to it.">直接インジェクトされたパブリッシャはチャネル・ダウンストリームとして接続でき、チャネルにサブスクライブすることでチャネルからデータを消費できます。</span></p>

<p><span class="merged" id="all.4eFC1k" title="原文 : Helidon can inject following types of publishers:">Helidonは、次のタイプのパブリッシャをインジェクトできます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1LnspH" title="原文 : Publisher&lt;PAYLOAD&gt; - Reactive streams publisher with unwrapped payload"><code>Publisher&lt;PAYLOAD></code> - ラップされていないペイロードを持つリアクティブ・ストリーム・パブリッシャ</span></p>

</li>
<li>
<p><span class="merged" id="all.PW45m" title="原文 : Publisher&lt;Message&lt;PAYLOAD&gt;&gt; - Reactive streams publisher with whole message"><code>Publisher&lt;Message&lt;PAYLOAD>></code> - メッセージ全体を含むリアクティブ・ストリーム・パブリッシャ</span></p>

</li>
<li>
<p><span class="merged" id="all.105qEZ" title="原文 : PublisherBuilder&lt;PAYLOAD&gt; - MP Reactive streams operators publisher builder with unwrapped payload"><code>PublisherBuilder&lt;PAYLOAD></code> - MPリアクティブ・ストリーム・オペレータ・パブリッシャ・ビルダー(アン・ラップ・ペイロードあり)</span></p>

</li>
<li>
<p><span class="merged" id="all.4gJRez" title="原文 : PublisherBuilder&lt;Message&lt;PAYLOAD&gt;&gt; - MP Reactive streams operators publisher builder with whole message"><code>PublisherBuilder&lt;Message&lt;PAYLOAD>></code> - MPリアクティブ・ストリーム・オペレータ・パブリッシャ・ビルダー(全メッセージあり)</span></p>

</li>
<li>
<p><span class="merged" id="all.lNRJn" title="原文 : Flow.Publisher&lt;PAYLOAD&gt; - JDK&rsquo;s flow publisher with unwrapped payload"><code>Flow.Publisher&lt;PAYLOAD></code> - ラップされていないペイロードを持つJDKフロー・パブリッシャ</span></p>

</li>
<li>
<p><span class="merged" id="all.1liNE6" title="原文 : Flow.Publisher&lt;Message&lt;PAYLOAD&gt;&gt; - JDK&rsquo;s flow publisher with whole message"><code>Flow.Publisher&lt;Message&lt;PAYLOAD>></code> - メッセージ全体を含むJDKフロー・パブリッシャ</span></p>

</li>
<li>
<p><span class="merged" id="all.4fxWb3" title="原文 : Multi&lt;PAYLOAD&gt; - Helidon flow reactive operators with unwrapped payload"><code>Multi&lt;PAYLOAD></code> - Helidonフロー・リアクティブ・オペレータ(アン・ラップ・ペイロードあり)</span></p>

</li>
<li>
<p><span class="merged" id="all.OjA9K" title="原文 : Multi&lt;Message&lt;PAYLOAD&gt;&gt; - Helidon flow reactive operators with whole message"><code>Multi&lt;Message&lt;PAYLOAD>></code> - Helidonフロー・リアクティブ・オペレータ(メッセージ全体を含む)</span></p>

</li>
</ul>

<markup
lang="java"
title="Example of consuming payloads from channel <code>example-channel-1</code> with injected publisher:"
>@Inject
public MyBean(@Channel("example-channel-1") Multi&lt;String&gt; multiChannel) {
    multiChannel
            .map(String::toUpperCase)
            .forEach(s -&gt; System.out.println("Received " + s));
}</markup>

</div>


<h4 id="_producing_method"><span class="merged" id="all.3CmT0j" title="原文 : Producing Method">作成メソッド</span></h4>
<div class="section">
<p><span class="merged" id="all.2Or6Ky" title="原文 : The annotation has one required attribute value that defines the channel name.">注釈には、<a href="https://download.eclipse.org/microprofile/microprofile-reactive-messaging-3.0-RC2/microprofile-reactive-messaging-spec-3.0-RC2.html#_channel" target="_blank">channel</a>名を定義する必須属性<code>value</code>があります。</span></p>

<p><span class="merged" id="all.210ELN" title="原文 : The annotated messaging method can function in two ways:">注釈付き<router-link @click.native="this.scrollFix('#terms')" to="#terms">「メッセージ・メソッド」</router-link>は、次の2つの方法で機能します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.cj4oZ" title="原文 : produce exactly one message to the stream connected to the channel"><a href="https://download.eclipse.org/microprofile/microprofile-reactive-messaging-3.0-RC2/microprofile-reactive-messaging-spec-3.0-RC2.html#_channel" target="_blank">channel</a>に接続されたストリームにメッセージを生産</span></p>

</li>
<li>
<p><span class="merged" id="all.3r4xoG" title="原文 : prepare reactive stream&rsquo;s publisher and connect it to the channel">リアクティブ・ストリームのパブリッシャを準備して<a href="https://download.eclipse.org/microprofile/microprofile-reactive-messaging-3.0-RC2/microprofile-reactive-messaging-spec-3.0-RC2.html#_channel" target="_blank">channel</a>に接続</span></p>

</li>
</ul>

<markup
lang="java"
title="Example producing exactly one message to channel <code>example-channel-1</code>:"
>@Outgoing("example-channel-1")
public String produceMessage() {
    return "foo";
}</markup>

<markup
lang="java"
title="Example preparing reactive stream publisher publishing three messages to the channel <code>example-channel-1</code>:"
>@Outgoing("example-channel-1")
public Publisher&lt;String&gt; printMessage() {
    return ReactiveStreams.of("foo", "bar", "baz").buildRs();
}</markup>

<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.2Ztql3" title="原文 : Messaging methods are not meant to be invoked directly!">メッセージング・メソッドは直接呼び出すことを意図していません。</span></p>
</div>

</div>

</div>


<h3 id="_emitter"><span class="merged" id="all.3PPqYv" title="原文 : Emitter">エミッタ</span></h3>
<div class="section">
<p><span class="merged" id="all.XUcIS.spl1" title="原文 : To send messages from imperative code, you can inject a special channel source called an emitter.">必須コードからメッセージを送信するには、エミッタと呼ばれる特殊なチャネル・ソースをインジェクトできます。</span> <span class="merged" id="all.XUcIS.spl2" title="原文 : Emitter can serve only as an upstream, source of the messages, for messaging channel.">Emitterは、メッセージング・チャネルのアップストリーム・メッセージ・ソースとしてのみ機能します。</span> </p>

<markup
lang="java"
title="Example of sending message from JAX-RS method to channel <code>example-channel-1</code>"
>@Inject
@Channel("example-channel-1")
private Emitter&lt;String&gt; emitter;

@PUT
@Path("/sendMessage")
@Consumes(MediaType.TEXT_PLAIN)
public Response sendMessage(final String payload) {
  emitter.send(payload);
}</markup>

<p><span class="merged" id="all.1MdQzl.spl1" title="原文 : Emitters, as a source of messages for reactive channels, need to address possible backpressure from the downstream side of the channel.">リアクティブ・チャネルのメッセージ・ソースとして、エミッタはチャネルの下流側から考えられるバック・プレッシャに対処する必要があります。</span> <span class="merged" id="all.1MdQzl.spl2" title="原文 : In case there is not enough demand from the downstream, you can configure a buffer size strategy using the @OnOverflow annotation.">ダウンストリームからの需要が十分でない場合は、<code>@OnOverflow</code>注釈を使用してバッファ・サイズ戦略を構成できます。</span> <span class="merged" id="all.1MdQzl.spl3" title="原文 : Additional overflow strategies are described below.">次に、追加のオーバーフロー戦略について説明します。</span> </p>

<div class="block-title"><span class="merged" id="all.11qrlP" title="原文 : Overflow strategies"><span>オーバーフロー戦略</span></span></div>
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
<td class=""><span class="merged" id="all.4LIyIl"  title="原文:: Strategy">戦略</span></td>
<td class=""><span class="merged" id="all.4JM9z7.12"  title="原文:: Description">説明</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3Xqw20"  title="原文:: BUFFER">BUFFER</span></td>
<td class=""><span class="merged" id="all.jasZZ.spl1" title="原文 : Buffer unconsumed values until configured bufferSize is reached, when reached calling Emitter.emit throws IllegalStateException.">構成されたbufferSizeに達するまで、未消費の値をバッファリングします。<code>Emitter.emit</code>をコールすると、<code>IllegalStateException</code>がスローされます。</span> <span class="merged" id="all.jasZZ.spl2" title="原文 : Buffer size can be configured with @OnOverflow or with config key mp.messaging.emitter.default-buffer-size.">バッファ・サイズは、<code>@OnOverflow</code>または構成キー<code>mp.messaging.emitter.default-buffer-size</code>で構成できます。</span> <span class="merged" id="all.jasZZ.spl3"  title="原文:: Default value is 128.">デフォルト値は<code>128</code>です。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1uejLg" title="原文 : UNBOUNDED_BUFFER">UNBOUNDED_BUFFER</span></td>
<td class=""><span class="merged" id="all.3pS9qn" title="原文 : Buffer unconsumed values until application runs out of memory.">アプリケーションがメモリー不足になるまで、消費されていない値をバッファリングします。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1R3SNA" title="原文 : THROW_EXCEPTION">THROW_EXCEPTION</span></td>
<td class=""><span class="merged" id="all.1mHqs2" title="原文 : Calling Emitter.emit throws IllegalStateException if there is not enough items requested by downstream."><code>Emitter.emit</code>をコールすると、ダウンストリームでリクエストされるアイテムが十分にない場合に<code>IllegalStateException</code>がスローされます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1I38AY"  title="原文:: DROP">DROP</span></td>
<td class=""><span class="merged" id="all.10J4XZ" title="原文 : If there is not enough items requested by downstream, emitted message is silently dropped.">下流でリクエストされたアイテムが十分でない場合、送信されたメッセージは暗黙的に削除されます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3EclWn"  title="原文:: FAIL">FAIL</span></td>
<td class=""><span class="merged" id="all.2Piybc.spl1" title="原文 : If there is not enough items requested by downstream, emitting message causes error signal being send to downstream.">ダウンストリームがリクエストするアイテムが不足している場合、メッセージを発行すると、エラー・シグナルがダウンストリームに送信されます。</span> <span class="merged" id="all.2Piybc.spl2" title="原文 : Whole channel is terminated.">チャネル全体が終了しました。</span> <span class="merged" id="all.2Piybc.spl3" title="原文 : No other messages can be sent.">他のメッセージは送信できません。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1or1Ef"  title="原文:: LATEST">LATEST</span></td>
<td class=""><span class="merged" id="all.1LprBy.spl1" title="原文 : Keeps only the latest item.">最新のアイテムのみを保持します。</span> <span class="merged" id="all.1LprBy.spl2" title="原文 : Any previous unconsumed message is silently dropped.">これまでの未消費メッセージは、暗黙的に削除されます。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1KuV2Z"  title="原文:: NONE">NONE</span></td>
<td class=""><span class="merged" id="all.3ieuN7.spl1" title="原文 : Messages are sent to downstream even if there is no demand.">要求がない場合でも、メッセージはダウンストリームに送信されます。</span> <span class="merged" id="all.3ieuN7.spl2" title="原文 : Backpressure is effectively ignored.">バック・プレッシャは事実上無視されます。</span> </td>
</tr>
</tbody>
</table>
</div>


<h4 id="_processing_method"><span class="merged" id="all.1imPNe"  title="原文:: Processing Method">処理方法</span></h4>
<div class="section">
<p><span class="merged" id="all.DezIe" title="原文 : Such methods acts as processors, consuming messages from one channel and producing to another.">このような<a href="https://download.eclipse.org/microprofile/microprofile-reactive-messaging-3.0-RC2/microprofile-reactive-messaging-spec-3.0-RC2.html#_method_consuming_and_producing" target="_blank">methods</a>はプロセッサとして機能し、あるチャネルから別のチャネルにメッセージをコンシュームし、別のチャネルにメッセージを生産します。</span></p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="2つのチャネルをまとめて接続するプロセッサ・メソッド" src="./images/msg/processor.svg" /> </v-card-text> </v-card>


<p><span class="merged" id="all.5cbdF" title="原文 : Diagram shows how processing method (2) serves as a downstream to the my-channel (1) and an upstream to the other-channel (3), connecting them together.">この図は、処理メソッド(2)が<code>my-channel</code> (1)のダウンストリームとして機能し、<code>other-channel</code> (3)のアップストリームとして機能し、それらを結び付ける方法を示しています。</span></p>

<p><span class="merged" id="all.dotsl" title="原文 : Processing method can function in multiple ways:">処理メソッドは、複数の方法で機能します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1syyRd" title="原文 : process every message">すべてのメッセージを処理</span></p>

</li>
<li>
<p><span class="merged" id="all.iIKXH" title="原文 : prepare reactive stream&rsquo;s processor and connect it between the channels">リアクティブ・ストリームのプロセッサを準備し、チャネル間で接続</span></p>

</li>
<li>
<p><span class="merged" id="all.4O3c2Q" title="原文 : on every message prepare new publisher(equivalent to flatMap operator)">メッセージごとに新しいパブリッシャ (<code>flatMap</code>オペレータと同等)を準備</span></p>

</li>
</ul>

<markup
lang="java"
title="Example processing every message from channel <code>example-channel-1</code> to channel <code>example-channel-2</code>:"
>@Incoming("example-channel-1")
@Outgoing("example-channel-2")
public String processMessage(String msg) {
    return msg.toUpperCase();
}</markup>

<markup
lang="java"
title="Example preparing processor stream to be connected between channels <code>example-channel-1</code> and <code>example-channel-2</code>:"
>@Incoming("example-channel-1")
@Outgoing("example-channel-2")
public Processor&lt;String, String&gt; processMessage() {
    return ReactiveStreams.&lt;String&gt;builder()
                .map(String::toUpperCase)
                .buildRs();
}</markup>

<markup
lang="java"
title="Example processing every message from channel <code>example-channel-1`as stream to be flattened to channel `example-channel-2</code>:"
>@Incoming("example-channel-1")
@Outgoing("example-channel-2")
public String processMessage(String msg) {
    return ReactiveStreams.of(msg.toUpperCase(), msg.toLowerCase()).buildRs();
}</markup>

</div>

</div>


<h3 id="_connector"><span class="merged" id="all.2kruSj"  title="原文:: Connector">コネクタ</span></h3>
<div class="section">
<p><span class="merged" id="all.2JAhH5" title="原文 : Messaging connector is an application-scoped bean that implements one or both of following interfaces:">メッセージング・コネクタは、次のインタフェースのいずれかまたは両方を実装するアプリケーション・スコープBeanです:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3i61gf" title="原文 : IncomingConnectorFactory - connector can create an upstream publisher to produce messages to a channel"><code>IncomingConnectorFactory</code> - コネクタはアップストリーム・パブリッシャを作成してチャネルにメッセージを生成できます</span></p>

</li>
<li>
<p><span class="merged" id="all.2JAjOj" title="原文 : OutgoingConnectorFactory - connector can create a downstream subscriber to consume messages from a channel"><code>OutgoingConnectorFactory</code> - コネクタは、チャネルからメッセージを消費するダウンストリーム・サブスクライバを作成できます</span></p>

</li>
</ul>

<markup
lang="java"
title="Example connector <code>example-connector</code>:"
>@ApplicationScoped
@Connector("example-connector")
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

</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.21"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.3lfXfU" title="原文 : The channel must be configured to use connector as its upstream or downstream.">チャネルは、コネクタをアップストリームまたはダウンストリームとして使用するように構成する必要があります。</span></p>

<markup
lang="yaml"
title="Example of channel to connector mapping config:"
>mp.messaging.outgoing.to-connector-channel.connector: example-connector <span class="conum" data-value="1" />
mp.messaging.incoming.from-connector-channel.connector: example-connector <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2Huurb" title="原文 : Use connector example-connector as a downstream for channel to-connector-channel to consume the messages from the channel">チャネル<code>to-connector-channel</code>のダウンストリームとしてコネクタ<code>example-connector</code>を使用して、チャネルからメッセージを消費</span></li>
<li data-value="2"><span class="merged" id="all.20Nul5" title="原文 : Use connector example-connector as an upstream for channel to-connector-channel to produce messages to the channel">チャネル<code>to-connector-channel</code>のアップストリームとしてコネクタ<code>example-connector</code>を使用して、チャネルにメッセージを生成</span></li>
</ul>

<markup
lang="java"
title="Example producing to connector:"
>@Outgoing("to-connector-channel")
public Publisher&lt;String&gt; produce() {
   return Flowable.just("fee", "fie");
}

&gt; Connector says: fee
&gt; Connector says: fie</markup>

<markup
lang="java"
title="Example consuming from connector:"
>@Incoming("from-connector-channel")
public void consume(String value) {
   System.out.println("Consuming: " + value);
}

&gt; Consuming: foo
&gt; Consuming: bar</markup>

<p><span class="merged" id="all.33eWkg" title="原文 : When the connector constructs a publisher or subscriber for a given channel, it can access general connector configuration and channel-specific properties merged together with special synthetic property channel-name.">コネクタは、特定のチャネルのパブリッシャまたはサブスクライバを構成するときに、特別な合成プロパティ<code>channel-name</code>とマージされた一般的なコネクタ構成およびチャネル固有のプロパティにアクセスできます。</span></p>



<v-card> <v-card-text class="overflow-y-hidden"> <img alt="コネクタ構成" src="./images/msg/connector-config.svg" /> </v-card-text> </v-card>


<p><span class="merged" id="all.10Dg7N" title="原文 : Connector specific config (1) merged together with global connector config (2).">グローバル・コネクタ構成(2)とマージされたコネクタ固有の構成(1)。</span></p>

<markup
lang="java"
title="Example connector accessing configuration:"
>@ApplicationScoped
@Connector("example-connector")
public class ExampleConnector implements IncomingConnectorFactory {

    @Override
    public PublisherBuilder&lt;? extends Message&lt;?&gt;&gt; getPublisherBuilder(final Config config) {

        String firstPropValue = config.getValue("channel-specific-prop", String.class); <span class="conum" data-value="1" />
        String secondPropValue = config.getValue("connector-specific-prop", String.class);
        String secondPropValue = config.getValue("channel-name", String.class); <span class="conum" data-value="2" />

        return ReactiveStreams.of(firstPropValue, secondPropValue)
                .map(Message::of);
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.CfCS5" title="原文 : Config context is merged from channel and connector contexts">構成コンテキストはチャネルおよびコネクタ・コンテキストからマージされます</span></li>
<li data-value="2"><span class="merged" id="all.3SGLBg" title="原文 : Name of the channel requesting publisher as it&rsquo;s upstream from this connector">このコネクタからアップストリームであるため、パブリッシャをリクエストしているチャネルの名前</span></li>
</ul>

<markup
lang="yaml"
title="Example of channel to connector mapping config with custom properties:"
>mp.messaging.incoming.from-connector-channel.connector: example-connector<span class="conum" data-value="1" />
mp.messaging.incoming.from-connector-channel.channel-specific-prop: foo<span class="conum" data-value="2" />
mp.messaging.connector.example-connector.connector-specific-prop: bar<span class="conum" data-value="3" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1tidli" title="原文 : Channel → Connector mapping">チャネル→コネクタ・マッピング</span></li>
<li data-value="2"><span class="merged" id="all.4SOFYq" title="原文 : Channel configuration properties">チャネル構成プロパティ</span></li>
<li data-value="3"><span class="merged" id="all.418ira" title="原文 : Connector configuration properties">コネクタ構成プロパティ</span></li>
</ul>

<markup
lang="java"
title="Example consuming from connector:"
>@Incoming("from-connector-channel")
public void consume(String value) {
   System.out.println("Consuming: " + value);
}

&gt; Consuming: foo
&gt; Consuming: bar</markup>


<h3 id="_message"><span class="merged" id="all.2DNrc3"  title="原文:: Message">メッセージ</span></h3>
<div class="section">
<p><span class="merged" id="all.48l6Hi.spl1" title="原文 : The Reactive Messaging Message class can be used to wrap or unwrap data items between methods and connectors.">リアクティブ・メッセージング<a href="https://download.eclipse.org/microprofile/microprofile-reactive-messaging-3.0-RC2/microprofile-reactive-messaging-spec-3.0-RC2.html#_message" target="_blank">Message</a>クラスを使用して、メソッドとコネクタ間のデータ・アイテムをラップまたはアン・ラップできます。</span> <span class="merged" id="all.48l6Hi.spl2" title="原文 : The message wrapping and unwrapping can be performed explicitly by using org.eclipse.microprofile.reactive.messaging.Message#of(T) or implicitly through the messaging core.">メッセージのラップおよびアン・ラップは、<code>org.eclipse.microprofile.reactive.messaging.Message#of(T)</code>を使用して明示的に実行することも、メッセージング・コアを介して暗黙的に実行することもできます。</span> </p>

<markup
lang="java"
title="Example of explicit and implicit wrapping and unwrapping"
>@Outgoing("publisher-payload")
public PublisherBuilder&lt;Integer&gt; streamOfMessages() {
    return ReactiveStreams.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
}

@Incoming("publisher-payload")
@Outgoing("wrapped-message")
public Message&lt;String&gt; rewrapMessageManually(Message&lt;Integer&gt; message) {
    return Message.of(Integer.toString(message.getPayload()));
}

@Incoming("wrapped-message")
public void consumeImplicitlyUnwrappedMessage(String value) {
    System.out.println("Consuming message: " + value);
}</markup>

</div>


<h3 id="_acknowledgement"><span class="merged" id="all.2o4NbP"  title="原文:: Acknowledgement">通知</span></h3>
<div class="section">
<p><span class="merged" id="all.1YMflb.spl1" title="原文 : Messages carry a callback for reception acknowledgement (ack) and negative acknowledgement (nack).">メッセージには、受信確認(ack)および否定応答(nack)のコールバックがあります。</span> <span class="merged" id="all.1YMflb.spl2" title="原文 : An acknowledgement in messaging methods is possible manually by org.eclipse.microprofile.reactive.messaging.Message#ack or automatically according explicit or implicit acknowledgement strategy by the messaging core.">メッセージング・メソッドでの確認は、<code>org.eclipse.microprofile.reactive.messaging.Message#ack</code>で手動で行うことも、メッセージ・コアによって明示的または暗黙的な確認戦略に従って自動的に行うこともできます。</span> <span class="merged" id="all.1YMflb.spl3" title="原文 : Explicit strategy configuration is possible with @Acknowledgment annotation which has one required attribute value that expects the strategy type from enum org.eclipse.microprofile.reactive.messaging.Acknowledgment.Strategy.">明示的な戦略構成は、列挙<code>org.eclipse.microprofile.reactive.messaging.Acknowledgment.Strategy</code>からの戦略タイプを必要とする必須属性<code>value</code>を持つ<code>@Acknowledgment</code>注釈を使用して可能です。</span> <span class="merged" id="all.1YMflb.spl4" title="原文 : More information about supported signatures and implicit automatic acknowledgement can be found in specification Message acknowledgement.">サポートされているシグネチャおよび暗黙的な自動確認の詳細は、仕様<a href="https://download.eclipse.org/microprofile/microprofile-reactive-messaging-3.0-RC2/microprofile-reactive-messaging-spec-3.0-RC2.html#_message_acknowledgement" target="_blank">「メッセージ確認」</a>を参照してください。</span> </p>

<div class="block-title"><span class="merged" id="all.1Wcw9I" title="原文 : Acknowledgement strategies"><span>確認戦略</span></span></div>
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
<td class=""><span class="merged" id="all.47veVG"  title="原文: @Acknowledgment(Acknowledgment.Strategy.NONE)"><code>@Acknowledgment(Acknowledgment.Strategy.NONE)</code></span></td>
<td class=""><span class="merged" id="all.1xCRa0" title="原文 : No acknowledgment">確認なし</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1ohnn6"  title="原文: @Acknowledgment(Acknowledgment.Strategy.MANUAL)"><code>@Acknowledgment(Acknowledgment.Strategy.MANUAL)</code></span></td>
<td class=""><span class="merged" id="all.1nzmW" title="原文 : No automatic acknowledgment">自動確認なし</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1xD2qo"  title="原文: @Acknowledgment(Acknowledgment.Strategy.PRE_PROCESSING)"><code>@Acknowledgment(Acknowledgment.Strategy.PRE_PROCESSING)</code></span></td>
<td class=""><span class="merged" id="all.4TWqSV" title="原文 : Ack automatically before method invocation or processing">メソッドの起動または処理の前に自動的に確認</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.z6BlM"  title="原文: @Acknowledgment(Acknowledgment.Strategy.POST_PROCESSING)"><code>@Acknowledgment(Acknowledgment.Strategy.POST_PROCESSING)</code></span></td>
<td class=""><span class="merged" id="all.XwTmc" title="原文 : Ack automatically after method invocation or processing">メソッドの起動または処理後に自動的に確認</span></td>
</tr>
</tbody>
</table>
</div>

<markup
lang="java"
title="Example of manual acknowledgment"
>@Outgoing("consume-and-ack")
public PublisherBuilder&lt;Integer&gt; streamOfMessages() {
    return ReactiveStreams.of(Message.of("This is Payload", () -&gt; {
            System.out.println("This particular message was acked!");
            return CompletableFuture.completedFuture(null);
        })).buildRs();
}

@Incoming("consume-and-ack")
@Acknowledgment(Acknowledgment.Strategy.MANUAL)
public CompletionStage&lt;Void&gt; receiveAndAckMessage(Message&lt;String&gt; msg) {
    return msg.ack(); <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1kfCJO" title="原文 : Calling ack() will print &quot;This particular message was acked!&quot; to System.out">ack()をコールすると、"This particular message was acked!"がSystem.outに出力されます</span></li>
</ul>

<markup
lang="java"
title="Example of manual acknowledgment"
>@Outgoing("consume-and-ack")
public PublisherBuilder&lt;Integer&gt; streamOfMessages() {
    return ReactiveStreams.of(Message.of("This is Payload", () -&gt; {
            System.out.println("This particular message was acked!");
            return CompletableFuture.completedFuture(null);
        })).buildRs();
}

@Incoming("consume-and-ack")
@Acknowledgment(Acknowledgment.Strategy.MANUAL)
public CompletionStage&lt;Void&gt; receiveAndAckMessage(Message&lt;String&gt; msg) {
    return msg.ack(); <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1kfCJO.1" title="原文 : Calling ack() will print &quot;This particular message was acked!&quot; to System.out">ack()をコールすると、"This particular message was acked!"がSystem.outに出力されます</span></li>
</ul>

<markup
lang="java"
title="Example of explicit pre-process acknowledgment"
>@Outgoing("consume-and-ack")
public PublisherBuilder&lt;Integer&gt; streamOfMessages() {
    return ReactiveStreams.of(Message.of("This is Payload", () -&gt; {
            System.out.println("This particular message was acked!");
            return CompletableFuture.completedFuture(null);
        })).buildRs();
}

/**
* Prints to the console:
* &gt; This particular message was acked!
* &gt; Method invocation!
*/
@Incoming("consume-and-ack")
@Acknowledgment(Acknowledgment.Strategy.PRE_PROCESSING)
public CompletionStage&lt;Void&gt; receiveAndAckMessage(Message&lt;String&gt; msg) {
    System.out.println("Method invocation!");
    return CompletableFuture.completedFuture(null);
}</markup>

<markup
lang="java"
title="Example of explicit post-process acknowledgment"
>@Outgoing("consume-and-ack")
public PublisherBuilder&lt;Integer&gt; streamOfMessages() {
    return ReactiveStreams.of(Message.of("This is Payload", () -&gt; {
            System.out.println("This particular message was acked!");
            return CompletableFuture.completedFuture(null);
        })).buildRs();
}

/**
* Prints to the console:
* &gt; Method invocation!
* &gt; This particular message was acked!
*/
@Incoming("consume-and-ack")
@Acknowledgment(Acknowledgment.Strategy.POST_PROCESSING)
public CompletionStage&lt;Void&gt; receiveAndAckMessage(Message&lt;String&gt; msg) {
    System.out.println("Method invocation!");
    return CompletableFuture.completedFuture(null);
}</markup>

</div>


<h3 id="_health_check"><span class="merged" id="all.2R32ij"  title="原文:: Health check">ヘルス・チェック</span></h3>
<div class="section">
<p><span class="merged" id="all.3z2DoT.spl1" title="原文 : Messaging in Helidon has built in health probes for liveness and readiness.">Helidonのメッセージングには、リブネスおよびレディネスのためのヘルス・プローブが組み込まれています。</span> <span class="merged" id="all.3z2DoT.spl2" title="原文 : To activate it add the health check dependency.">アクティブ化するには、<router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">「ヘルス・チェックの依存関係」</router-link>を追加します。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4bYXki" title="原文 : Liveness - channel is considered UP until cancel or onError signal is intercepted on it.">リブネス - チャネルは、<code>cancel</code>または<code>onError</code>シグナルがインターセプトされるまでUPとみなされます。</span></p>

</li>
<li>
<p><span class="merged" id="all.3FCZfg" title="原文 : Readiness - channel is considered DOWN until onSubscribe signal is intercepted on it.">レディネス - チャネルは、<code>onSubscribe</code>シグナルがインターセプトされるまで停止中とみなされます。</span></p>

</li>
</ul>

<p><span class="merged" id="all.4HxAnM" title="原文 : If you check your health endpoints /health/live and /health/ready you will discover every messaging channel to have its own probe.">ヘルス・エンドポイントの<code>/health/live</code>および<code>/health/ready</code>をチェックすると、独自のプローブを持つすべてのメッセージング・チャネルが検出されます。</span></p>

<markup
lang="json"

>{
    "name": "messaging",
    "state": "UP",
    "status": "UP",
    "data": {
        "my-channel-1": "UP",
        "my-channel-2": "UP"
    }
}</markup>

<p><span class="merged" id="all.1r3DuL" title="原文 : Caution: Due to the nack support are exceptions thrown in messaging methods NOT translated to error and cancel signals implicitly anymore">警告: ナック・サポートが原因で、メッセージ・メソッドでスローされる例外は、エラーに変換されず、暗黙的にシグナルを取り消します</span></p>

</div>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.9"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.Pv20s" title="原文 : Helidon MicroProfile Reactive Messaging"><a href="https://helidon.io/docs/v2/apidocs/io.helidon.microprofile.messaging/module-summary.html" target="_blank">Helidon MicroProfileリアクティブ・メッセージング</a></span></p>

</li>
<li>
<p><span class="merged" id="all.3VuTnQ" title="原文 : MicroProfile Reactive Messaging Specification"><a href="https://download.eclipse.org/microprofile/microprofile-reactive-messaging-3.0-RC2/microprofile-reactive-messaging-spec-3.0-RC2.html" target="_blank">MicroProfileリアクティブ・メッセージング仕様</a></span></p>

</li>
<li>
<p><span class="merged" id="all.4NkrlK" title="原文 : MicroProfile Reactive Messaging on GitHub"><a href="https://github.com/eclipse/microprofile-reactive-messaging" target="_blank">GitHubでのMicroProfileリアクティブ・メッセージング</a></span></p>

</li>
</ul>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.14"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">

<h3 id="_upgrading_to_messaging_3_0"><span class="merged" id="all.30b7M2" title="原文 : Upgrading to Messaging 3.0">メッセージング3.0へのアップグレード</span></h3>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.Fujs6" title="原文 : Exceptions thrown in messaging methods are not propagated as error or cancel signals to the stream(use mp.messaging.helidon.propagate-errors=true for backward compatible mode) - errors are propagated only to the upstream by nack functionality.">メッセージング・メソッドでスローされた例外は、エラーとして伝播されないか、stream(use <code>mp.messaging.helidon.propagate-errors=true</code> for backward compatible mode)へのシグナルを取り消します - エラーは、<code>nack</code>機能によってアップストリームにのみ伝播されます。</span></p>

</li>
<li>
<p><span class="merged" id="all.2R9G1r" title="原文 : Default acknowledgement strategies changed for selected signatures(all with Message as a parameter or return type) - See the specification issue #97">選択したsignatures(all with Message as a parameter or return type)のデフォルトの確認戦略が変更されました - 指定の問題を参照してください<a href="{https://github.com/eclipse/microprofile-reactive-messaging/pull/97}" target="_blank">#97</a></span></p>

</li>
</ul>

</div>

</div>

</doc-view>
