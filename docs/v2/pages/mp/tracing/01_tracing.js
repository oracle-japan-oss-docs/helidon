<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_configuring_tracing_with_helidon_mp"><span class="merged" id="all.2OXQ0T" title="原文 : Configuring Tracing with Helidon MP">Helidon MPでのトレースの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.1vRDWD" title="原文 : Tracing support is implemented for both for Helidon MP Server and for Jersey client.">トレース・サポートは、Helidon MP ServerとJerseyクライアントの両方に実装されています。</span></p>

<p><span class="merged" id="all.4JnU1V.7" title="原文 : Declare the following dependency in your project:">プロジェクトで次の依存性を宣言します:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.tracing&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-tracing&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.9kQHG" title="原文 : In addition you need to add one of the tracer implementations:">さらに、トレーサ実装のいずれかを追加する必要があります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2fozE5" title="原文 : Zipkin"><router-link @click.native="this.scrollFix('#tracing/02_zipkin.adoc')" to="#tracing/02_zipkin.adoc">Zipkin</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zOVhG" title="原文 : Jaeger"><router-link @click.native="this.scrollFix('#tracing/03_jaeger.adoc')" to="#tracing/03_jaeger.adoc">Jaeger</router-link></span></p>

</li>
</ul>
<p><span class="merged" id="all.1zl4hw.spl1" title="原文 : You can configure a custom service name using the tracing.service configuration property."><code>tracing.service</code>構成プロパティを使用して、カスタム・サービス名を構成できます。</span> <span class="merged" id="all.1zl4hw.spl2" title="原文 : If this property is undefined, name is created from JAX-RS Application name, or Helidon MP is used if no application is defined.">このプロパティが定義されていない場合、名前はJAX-RSアプリケーション名から作成されます。アプリケーションが定義されていない場合は、<code>Helidon MP</code>が使用されます。</span> </p>

<p><span class="merged" id="all.3bGyMM" title="原文 : All tracer specific configuration is expected in configuration under key tracing.">トレーサ固有のすべての構成は、キー<code>tracing</code>の下の構成に必要です。</span></p>

<markup
lang="properties"
title="カスタマイズされたサービス名を含む<code>microprofile-config.properties</code>の例。"
>tracing.service=event-service</markup>


<h3 id="Tracing-config"><span class="merged" id="all.3QbNDo" title="原文 : Configuration using Helidon Config">Helidon構成を使用した構成</span></h3>
<div class="section">
<p><span class="merged" id="all.RxvBf.spl1" title="原文 : There is a set of common configuration options that this section describes.">この項で説明する共通の構成オプションのセットがあります。</span> <span class="merged" id="all.RxvBf.spl2" title="原文 : In addition each tracer implementation may have additional configuration options - please see the documentation of each of them.">さらに、トレーサの実装ごとに追加の構成オプションがある場合があります - それぞれのドキュメントを参照してください。</span> </p>

<p><span class="merged" id="all.kUHyQ" title="原文 : Each implementation may provide defaults for these options.">各実装では、これらのオプションのデフォルトを提供できます。</span></p>

<p><span class="merged" id="all.1nQaK8" title="原文 : All common configuration options:">すべての共通構成オプション:</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.12"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.20ls8M.12"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.48AK3O"  title="原文:: service">service</span></td>
<td class=""><span class="merged" id="all.1QZRrp.spl1" title="原文 : Name of the service sending the tracing information.">トレース情報を送信するサービスの名前。</span> <span class="merged" id="all.1QZRrp.spl2" title="原文 : This is usually visible in the trace data to distinguish actors in a conversation (e.g. when multiple microservices are connected together)">これは通常、会話内のアクターを区別するためにトレース・データに表示されます(複数のマイクロサービスが接続されている場合など)</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3fw5zI"  title="原文:: protocol">protocol</span></td>
<td class=""><span class="merged" id="all.vqxwb" title="原文 : Protocol of the tracing collector (e.g. http, https)">トレース・コレクタのプロトコル(<code>http</code>、<code>https</code>など)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3nCbwD"  title="原文:: host">host</span></td>
<td class=""><span class="merged" id="all.hp2zg" title="原文 : Host of the tracing collector (e.g. localhost)">トレース・コレクタのホスト(<code>localhost</code>など)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1EiTCG"  title="原文:: port">port</span></td>
<td class=""><span class="merged" id="all.30xSoB" title="原文 : Port of the tracing collector (e.g. 9411)">トレース・コレクタのポート(<code>9411</code>など)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Crb5j"  title="原文:: path">path</span></td>
<td class=""><span class="merged" id="all.4g8Gta" title="原文 : Path of the tracing collector service that is used to send spans to">スパンの送信先として使用されるトレース・コレクタ・サービスのパス</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1TwJHw"  title="原文:: enabled">enabled</span></td>
<td class=""><span class="merged" id="all.36lP7" title="原文 : If set to false, tracing would be disabled">falseに設定すると、トレースは無効になります</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.22rkoQ"  title="原文:: tags">tags</span></td>
<td class=""><span class="merged" id="all.404R2H" title="原文 : String tags that are to be added to each span reported (object node of string-string pairs)">レポートされる各スパンに追加される文字列タグ(文字列と文字列のペアのオブジェクト・ノード)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.PmqUy" title="原文 : boolean-tags">boolean-tags</span></td>
<td class=""><span class="merged" id="all.2HCbnc" title="原文 : Boolean tags that are to be added to each span reported (object node of string-boolean pairs)">レポートされる各スパンに追加されるブール・タグ(文字列とブールのペアのオブジェクト・ノード)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2kPIb3" title="原文 : int-tags">int-tags</span></td>
<td class=""><span class="merged" id="all.KVnyV" title="原文 : Int tags that are to be added to each span reported (object node of string-int pairs)">報告された各スパンに追加されるIntタグ(文字列とintのペアのオブジェクト・ノード)</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<h2 id="_creating_custom_spans"><span class="merged" id="all.3PebJZ" title="原文 : Creating custom spans">カスタム・スパンの作成</span></h2>
<div class="section">
<p><span class="merged" id="all.aAAsL.spl1" title="原文 : Helidon MP fully supports MicroProfile OpenTracing.">Helidon MPは、MicroProfile OpenTracingを完全にサポートしています。</span> <span class="merged" id="all.aAAsL.spl2" title="原文 : You can add custom spans using @Traced annotation on methods of CDI beans.">CDI Beanのメソッドで<code>@Traced</code>注釈を使用してカスタム・スパンを追加できます。</span> </p>

<p><span class="merged" id="all.3hFPmW.spl1" title="原文 : Note for invoking methods on same class: If you invoke a method on the same class, @Traced annotation would be ignored, as it is not invoked through a CDI proxy and as such cannot be intercepted."><strong>同じクラスでメソッドを起動する場合のノート:</strong> <em>同じクラスでメソッドを呼び出すと、CDIプロキシを介して呼び出されず、インターセプトできないため、<code>@Traced</code>注釈は無視されます。</span> <span class="merged" id="all.3hFPmW.spl2" title="原文 : To make sure @Traced is honored, use it on JAX-RS resource methods and on CDI bean methods used from other beans."><code>@Traced</code>が適用されるようにするには、JAX-RSリソース・メソッドおよび他のbeansから使用されるCDI beanメソッドで使用します。</em></span> </p>

</div>

<h2 id="_trace_propagation_across_services"><span class="merged" id="all.3GlBN" title="原文 : Trace propagation across services">サービス間の伝播のトレース</span></h2>
<div class="section">
<p><span class="merged" id="all.CoBLB" title="原文 : Automated trace propagation is supported currently only with Jersey client.">自動トレース伝播は、現在、Jerseyクライアントでのみサポートされています。</span></p>

<p><span class="merged" id="all.2qBZVy" title="原文 : Tracing propagation works automatically as long as you run within the scope of Helidon MP and use Helidon components to invoke external services.">トレース伝播は、Helidon MPのスコープ内で実行し、Helidonコンポーネントを使用して外部サービスを呼び出すかぎり、自動的に機能します。</span></p>


<h3 id="_manual_handling_of_traces_in_jersey_client"><span class="merged" id="all.2arhbn" title="原文 : Manual handling of traces in Jersey Client">Jersey Clientでのトレースの手動処理</span></h3>
<div class="section">
<p><span class="merged" id="all.1D3ABH" title="原文 : There is an option to provide SpanContext programmatically (such as when writing a command line application that starts the span manually)."><code>SpanContext</code>をプログラムで提供するオプションがあります(スパンを手動で開始するコマンドライン・アプリケーションを記述する場合など)。</span></p>

<p><span class="merged" id="all.2pztyu" title="原文 : You can either configure the span context as the active span, or explicitly define it as client property.">スパン・コンテキストは、アクティブ・スパンとして構成することも、クライアント・プロパティとして明示的に定義することもできます。</span></p>

<markup
lang="java"
title="Jerseyクライアントによる伝播のトレース"
>import static io.helidon.tracing.jersey.client.ClientTracingFilter.CURRENT_SPAN_CONTEXT_PROPERTY_NAME;
import static io.helidon.tracing.jersey.client.ClientTracingFilter.TRACER_PROPERTY_NAME;

// ...

Response response = client.target(serviceEndpoint)
    .request()
    // tracer should be provided unless available as GlobalTracer
    .property(TRACER_PROPERTY_NAME, tracer)
    .property(CURRENT_SPAN_CONTEXT_PROPERTY_NAME, spanContext)
    .get();</markup>

</div>
</div>
</doc-view>
