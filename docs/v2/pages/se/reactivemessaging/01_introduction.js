<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_reactive_messaging"><span class="merged" id="all.46TtuU.1" title="原文 : Reactive Messaging">リアクティブ・メッセージング</span></h2>
<div class="section">
<p><span class="merged" id="all.uuiVe.spl1" title="原文 : Asynchronous messaging is a commonly used form of communication in the world of microservices.">非同期メッセージングは、マイクロサービスの世界でよく使用される通信形式です。</span> <span class="merged" id="all.uuiVe.spl2" title="原文 : While its possible to start building your reactive streams directly by combining operators and connecting them to reactive APIs, with Helidon SE Reactive Messaging, you can now use prepared tools for repetitive use case scenarios .">Helidon SEリアクティブ・メッセージングを使用すると、オペレータを組み合せてリアクティブAPIに接続することで、リアクティブ・ストリームのビルドを直接開始できますが、反復的なユースケース・シナリオのための準備済ツールを使用できるようになりました。</span> </p>

<p><span class="merged" id="all.33f99F" title="原文 : For example connecting your streams to external services usually requires a lot of boiler-plate code for configuration handling, backpressure propagation, acknowledgement and more.">たとえば、ストリームを外部サービスに接続するには、通常、構成処理、バックプレッシャ伝播、確認などに多くのボイラープレート・コードが必要です。</span></p>

<p><span class="merged" id="all.1r3XHN.spl1" title="原文 : For such tasks there is a system of connectors, emitters and means to orchestrate them in Helidon, called Reactive Messaging.">このようなタスクには、コネクタとエミッタのシステムがあり、<strong>「リアクティブ・メッセージング」</strong>と呼ばれるHelidonでそれらを編成する手段があります。</span> <span class="merged" id="all.1r3XHN.spl2" title="原文 : It&rsquo;s basically an API for connecting and configuring Connectors and Emitters with your reactive streams thru so called Channels.">これは基本的に、<router-link @click.native="this.scrollFix('#_channel')" to="#_channel">Channels</router-link>と呼ばれるリアクティブ・ストリームにコネクタおよびエミッタを接続して構成するためのAPIです。</span> </p>

<p><span class="merged" id="all.3DWE8V.spl1" title="原文 : You may wonder how Reactive Messaging relates to MicroProfile Reactive Messaging."><strong>「リアクティブ・メッセージング」</strong>と<router-link to="/mp/reactivemessaging/01_introduction">「MicroProfileリアクティブ・メッセージング」</router-link>の関係はどうでしょうか。</span> <span class="merged" id="all.3DWE8V.spl2" title="原文 : As the making of connectors or even configuring them can be repetitive task leading to the same results, Helidon SE Reactive Messaging supports very same configuration format for connectors as its MicroProfile counterpart does.">コネクタの作成または構成は、同じ結果につながる繰返しタスクになる可能性があるため、Helidon SEリアクティブ・メッセージングでは、対応するMicroProfileと同じコネクタの構成形式がサポートされています。</span> <span class="merged" id="all.3DWE8V.spl3" title="原文 : Also, MP Connectors are reusable in Helidon SE Messaging with some limitation(there is no CDI in Helidon SE).">また、MPコネクタは、一部のlimitation(there is no CDI in Helidon SE)とともにHelidon SE Messagingで再利用できます。</span> <span class="merged" id="all.3DWE8V.spl4" title="原文 : All Messaging connectors in Helidon are made to be universally usable by Helidon MP and SE.">Helidonのすべてのメッセージング・コネクタは、Helidon MPおよびSEで汎用的に使用できるようになります。</span> </p>


<h3 id="_channel"><span class="merged" id="all.2040HT"  title="原文:: Channel">チャネル</span></h3>
<div class="section">
<p><span class="merged" id="all.2uMXuU.spl1" title="原文 : Channel is a named pair of Publisher and Subscriber.">チャネルは、<code>Publisher</code>と<code>Subscriber</code>の名前付きペアです。</span> <span class="merged" id="all.2uMXuU.spl2" title="原文 : Channels can be connected together by processors.">チャネルは、<router-link @click.native="this.scrollFix('#_processor')" to="#_processor">processors</router-link>によって接続できます。</span> <span class="merged" id="all.2uMXuU.spl3" title="原文 : Registering of Publisher or Subscriber for a channel can be done by Messaging API, or configured implicitly for using registered connector for generating such Publisher or Subscriber.">チャネルへの<code>Publisher</code>または<code>Subscriber</code>の登録は、メッセージングAPIを使用して行うことも、登録済の<router-link to="/se/reactivemessaging/03_connector">connector</router-link>を使用してこのような<code>Publisher</code>または<code>Subscriber</code>を生成するために暗黙的に構成することもできます。</span> </p>

<markup
lang="java"
title="単純なチャネルの例:"
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
<p><span class="merged" id="all.1SomHH.spl1" title="原文 : Processor is a typical reactive processor acting as a Subscriber to upstream and as a Publisher to downstream.">プロセッサは、アップストリームへの<code>Subscriber</code>およびダウンストリームへの<code>Publisher</code>として機能する一般的なリアクティブ・プロセッサです。</span> <span class="merged" id="all.1SomHH.spl2" title="原文 : In terms of reactive messaging it is able to connect two channels to one reactive stream.">リアクティブ・メッセージングの観点から、2つの<router-link @click.native="this.scrollFix('#_channel')" to="#_channel">channels</router-link>を1つのリアクティブ・ストリームに接続できます。</span> </p>

<markup
lang="java"
title="プロセッサの使用例:"
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
<p><span class="merged" id="all.NBlJ6.spl1" title="原文 : Reactive Messaging in Helidon SE uses the same concept of message wrapping as MicroProfile messaging.">Helidon SEのリアクティブ・メッセージングでは、MicroProfileメッセージングと同じ概念の<router-link to="/mp/reactivemessaging/02_message">「メッセージ・ラッピング」</router-link>が使用されます。</span> <span class="merged" id="all.NBlJ6.spl2" title="原文 : The only notable difference is that SE Messaging does almost no implicit or automatic acknowledgement due to no magic philosophy of Helidon SE.">唯一の大きな違いは、SEメッセージングでは、Helidon SEの<em>「マジックなし」</em>の理念により、暗黙的または自動的な確認応答がほとんど行われないことです。</span> </p>

<p><span class="merged" id="all.3OLhOi.spl1" title="原文 : Only exception to this are variants of methods Messaging.Builder#listener and Messaging.Builder#processor with consumer or function params, conveniently unwrapping payload for you.">例外は、コンシューマ・パラメータまたは関数パラメータを持つメソッド<code>Messaging.Builder#listener</code>および<code>Messaging.Builder#processor</code>のバリアントのみで、ペイロードのラップを簡単に解除できます。</span> <span class="merged" id="all.3OLhOi.spl2" title="原文 : After such implicit unwrapping is not possible to do a manual acknowledgement, therefore implicit ack before callback is executed is necessary.">このような暗黙的なアン・ラップの後は、手動の確認応答を行うことができないため、コールバックが実行される前に暗黙的な確認が必要です。</span> </p>

</div>

<h3 id="_connector"><span class="merged" id="all.2kruSj"  title="原文:: Connector">コネクタ</span></h3>
<div class="section">
<p><span class="merged" id="all.1BZOCV.spl1" title="原文 : Connector concept is a way for connecting channels to external sources.">コネクタ概念は、<router-link @click.native="this.scrollFix('#_channel')" to="#_channel">channels</router-link>を外部ソースに接続する方法です。</span> <span class="merged" id="all.1BZOCV.spl2" title="原文 : To make creation and usage of connectors as easy and versatile as possible, Helidon SE Messaging uses same API for connectors like MicroProfile Reactive Messaging does."><router-link to="/se/reactivemessaging/03_connector">「コネクタの作成および使用」</router-link>をできるだけ簡単かつ汎用的にするために、Helidon SE Messagingでは、<router-link to="/mp/reactivemessaging/01_introduction">「MicroProfileリアクティブ・メッセージング」</router-link>などのコネクタに同じAPIを使用します。</span> <span class="merged" id="all.1BZOCV.spl3" title="原文 : This allows connectors to be usable in both flavors of Helidon with one limitation which is that connector has to be able to work without CDI.">これにより、CDIなしでコネクタを動作させることができるという制限付きで、Helidonの両方のフレーバでコネクタを使用できるようになります。</span> </p>

<p><span class="merged" id="all.7Z3r3" title="原文 : Example of such a versatile connectors in Helidon:">Helidonでのこのような汎用コネクタの例:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.260lE0" title="原文 : Kafka connector"><router-link to="/se/reactivemessaging/04_kafka">Kafkaコネクタ</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.Mouui" title="原文 : JMS connector"><router-link to="/se/reactivemessaging/05_jms">JMSコネクタ</router-link></span></p>

</li>
</ul>
</div>

<h3 id="_dependency"><span class="merged" id="all.1l1QyT.4"  title="原文:: Dependency">依存性</span></h3>
<div class="section">
<p><span class="merged" id="all.4JnU1V.12" title="原文 : Declare the following dependency in your project:">プロジェクトで次の依存性を宣言します:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.messaging&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-messaging&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>
</div>
</doc-view>
