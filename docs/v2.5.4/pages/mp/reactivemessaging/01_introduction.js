<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.23"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.1RF9at" title="原文 : To enable MicroProfile Reactive Messaging add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">MicroProfileリアクティブ・メッセージングを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

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

<h2 id="_reactive_messaging"><span class="merged" id="all.46TtuU" title="原文 : Reactive Messaging">リアクティブ・メッセージング</span></h2>
<div class="section">
<p><span class="merged" id="all.304ygj.spl1" title="原文 : MicroProfile Reactive Messaging uses CDI beans to produce, consume or process messages over Reactive Streams."><a href="https://download.eclipse.org/microprofile/microprofile-reactive-messaging-1.0/microprofile-reactive-messaging-spec.html" id="" target="_blank" >「MicroProfileリアクティブ・メッセージング」</a>はCDI beanを使用して、リアクティブ・ストリームを介してメッセージを生産、消費または処理します。</span> <span class="merged" id="all.304ygj.spl2" title="原文 : Such messaging bean is expected to be either in ApplicationScoped or Dependent scope.">このようなメッセージングBeanは、<code>ApplicationScoped</code>スコープまたは<code>Dependent</code>スコープのいずれかである必要があります。</span> <span class="merged" id="all.304ygj.spl3" title="原文 : Messages are managed by methods annotated by @Incoming and @Outgoing and the invocation is always driven by message core - either at assembly time, or for every message coming from the stream.">メッセージは、<code>@Incoming</code>および<code>@Outgoing</code>によって注釈が付けられたメソッドによって管理され、呼出しは常にメッセージ・コアによって駆動されます - アセンブリ時、またはストリームからのすべてのメッセージに対して。</span> </p>

<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.2Ztql3" title="原文 : Messaging methods are not meant to be invoked directly!">メッセージング・メソッドは直接呼び出すことを意図していません。</span></p>
</div>
<div class="block-title"><span class="merged" id="all.igW9h" title="原文 : Terms definition"><span>条件定義</span></span></div>
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
<td class=""><span class="merged" id="all.3hL3Zp" title="原文 : messaging method"><a href="https://download.eclipse.org/microprofile/microprofile-reactive-messaging-1.0/microprofile-reactive-messaging-spec.html#_supported_method_signatures" id="" target="_blank" >メッセージ・メソッド</a></span></td>
<td class=""><span class="merged" id="all.3JqZlI" title="原文 : bean method invoked by messaging Specification">メッセージング仕様で呼び出されたBeanメソッド</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2lyLIv"  title="原文:: connector"><a href="https://download.eclipse.org/microprofile/microprofile-reactive-messaging-1.0/microprofile-reactive-messaging-spec.html#_connector" id="" target="_blank" >connector</a></span></td>
<td class=""><span class="merged" id="all.22hHjv" title="原文 : Reactive Messaging connector">リアクティブ・メッセージング・コネクタ</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1bWNmd"  title="原文:: channel"><a href="https://download.eclipse.org/microprofile/microprofile-reactive-messaging-1.0/microprofile-reactive-messaging-spec.html#_channel" id="" target="_blank" >channel</a></span></td>
<td class=""><span class="merged" id="all.1UPMXY" title="原文 : named pair of producer and consumer, both sides can be either messaging method or connector">プロデューサとコンシューマの名前付きペア(どちらの側もメッセージング・メソッドまたはコネクタのいずれか)</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.AGz1y" title="原文 : The bean can have methods annotated by @Incoming, @Outgoing or both.">Beanには、<a href="https://download.eclipse.org/microprofile/microprofile-reactive-messaging-1.0/microprofile-reactive-messaging-spec.html#_message_consumption_with_incoming" id="" target="_blank" ><code>@Incoming</code></a>、<a href="https://download.eclipse.org/microprofile/microprofile-reactive-messaging-1.0/microprofile-reactive-messaging-spec.html#_message_production_with_outgoing" id="" target="_blank" ><code>@Outgoing</code></a>またはその両方によって注釈が付けられたメソッドを含めることができます。</span></p>


<h3 id="_consuming_methods_with_incoming_annotation"><span class="merged" id="all.qKhh" title="原文 : Consuming methods with @Incoming annotation"><code>@Incoming</code>注釈によるメソッドの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.3iEnDh" title="原文 : The annotation has one required attribute value that defines the channel name.">注釈には、チャネル名を定義する必須属性<code>value</code>があります。</span></p>

<p><span class="merged" id="all.R0115" title="原文 : Such annotated messaging method can function in two ways:">このような注釈付き<router-link @click.native="this.scrollFix('#terms')" to="#terms">「メッセージ・メソッド」</router-link>は、次の2つの方法で機能できます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3QhFJ5" title="原文 : consume every message coming from the stream connected to the channel"><router-link @click.native="this.scrollFix('#terms')" to="#terms">channel</router-link>に接続されたストリームからのすべてのメッセージを消費</span></p>

</li>
<li>
<p><span class="merged" id="all.1iiCYk" title="原文 : prepare reactive stream&rsquo;s subscriber and connect it to the channel">リアクティブ・ストリームのサブスクライバの準備とチャネルへの接続</span></p>

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

<h3 id="_producing_methods_with_outgoing_annotation"><span class="merged" id="all.2xIsq" title="原文 : Producing methods with @Outgoing annotation"><code>@Outgoing</code>注釈付きのメソッドの生産</span></h3>
<div class="section">
<p><span class="merged" id="all.47Hpw0" title="原文 : The annotation has one required attribute value that defines the channel name.">注釈には、<a href="https://download.eclipse.org/microprofile/microprofile-reactive-messaging-1.0/microprofile-reactive-messaging-spec.html#_channel" id="" target="_blank" >channel</a>名を定義する必須属性<code>value</code>があります。</span></p>

<p><span class="merged" id="all.R0115.1" title="原文 : Such annotated messaging method can function in two ways:">このような注釈付き<router-link @click.native="this.scrollFix('#terms')" to="#terms">「メッセージ・メソッド」</router-link>は、次の2つの方法で機能できます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3g7Zdf" title="原文 : produce exactly one message to the stream connected to the channel"><a href="https://download.eclipse.org/microprofile/microprofile-reactive-messaging-1.0/microprofile-reactive-messaging-spec.html#_channel" id="" target="_blank" >channel</a>に接続されたストリームにメッセージを生産</span></p>

</li>
<li>
<p><span class="merged" id="all.psX5Q" title="原文 : prepare reactive stream&rsquo;s publisher and connect it to the channel">リアクティブ・ストリームのパブリッシャを準備して<a href="https://download.eclipse.org/microprofile/microprofile-reactive-messaging-1.0/microprofile-reactive-messaging-spec.html#_channel" id="" target="_blank" >channel</a>に接続</span></p>

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

</div>

<h3 id="_processing_methods_with_incoming_and_outgoing_annotation"><span class="merged" id="all.1Pgmh1" title="原文 : Processing methods with @Incoming and @Outgoing annotation"><code>@Incoming</code>および<code>@Outgoing</code>注釈を使用したメソッドの処理</span></h3>
<div class="section">
<p><span class="merged" id="all.3nlGTs" title="原文 : Such methods acts as processors, consuming messages from one channel and producing to another.">このような<a href="https://download.eclipse.org/microprofile/microprofile-reactive-messaging-1.0/microprofile-reactive-messaging-spec.html#_method_consuming_and_producing" id="" target="_blank" >methods</a>はプロセッサとして機能し、あるチャネルから別のチャネルにメッセージをコンシュームし、別のチャネルにメッセージを生産します。</span></p>

<p><span class="merged" id="all.e1WdV" title="原文 : Such annotated messaging method can function in multiple ways:">このような注釈付き<router-link @click.native="this.scrollFix('#terms')" to="#terms">「メッセージ・メソッド」</router-link>は、複数の方法で機能できます:</span></p>

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

</div>
</div>
</doc-view>
