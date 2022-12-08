<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.33"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.7jmra" title="原文 : To enable MicroProfile Tracing either add a dependency on the helidon-microprofile bundle or add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">MicroProfileトレースを有効にするには、<router-link to="/mp/introduction/02_microprofile">helidon-microprofile bundle</router-link>に依存関係を追加するか、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.tracing&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-tracing&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_configuring_tracing_with_helidon_mp"><span class="merged" id="all.2OXQ0T" title="原文 : Configuring Tracing with Helidon MP">Helidon MPでのトレースの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.3RMwRC.spl1" title="原文 : Tracing support is implemented for both for Helidon MP Server and for Jersey client.">トレース・サポートは、Helidon MP ServerとJerseyクライアントの両方に実装されています。</span> <span class="merged" id="all.3RMwRC.spl2" title="原文 : In addition, you need to add one of the tracer implementations:">また、トレーサ実装のいずれかを追加する必要があります:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.jFgxP" title="原文 : Zipkin"><router-link to="/mp/tracing/02_zipkin">Zipkin</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3xGiyn" title="原文 : Jaeger"><router-link to="/mp/tracing/03_jaeger">Jaeger</router-link></span></p>

</li>
</ul>
<p><span class="merged" id="all.1zl4hw.spl1" title="原文 : You can configure a custom service name using the tracing.service configuration property."><code>tracing.service</code>構成プロパティを使用して、カスタム・サービス名を構成できます。</span> <span class="merged" id="all.1zl4hw.spl2" title="原文 : If this property is undefined, name is created from JAX-RS Application name, or Helidon MP is used if no application is defined.">このプロパティが定義されていない場合、名前はJAX-RSアプリケーション名から作成されます。アプリケーションが定義されていない場合は、<code>Helidon MP</code>が使用されます。</span> </p>

<p><span class="merged" id="all.3bGyMM" title="原文 : All tracer specific configuration is expected in configuration under key tracing.">トレーサ固有のすべての構成は、キー<code>tracing</code>の下の構成に必要です。</span></p>

<markup
lang="properties"
title="Example <code>microprofile-config.properties</code> with customized service name."
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
<p><span class="merged" id="all.43Amb8" title="原文 : To disable Helidon tracing for web server and security:">webサーバーとセキュリティのHelidonトレースを無効にするには:</span></p>

<markup
lang="properties"

>tracing.components.web-server.enabled=false
tracing.components.security.enabled=false</markup>

<p><span class="merged" id="all.ntbGM" title="原文 : To disables MP Tracing as by specification:">指定どおりにMPトレースを無効にするには:</span></p>

<markup
lang="properties"

>mp.opentracing.server.skip-pattern=.*</markup>

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
title="Tracing propagation with Jersey client"
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

<h2 id="_traced_spans"><span class="merged" id="all.4WqKWr" title="原文 : Traced spans">トレース対象スパン</span></h2>
<div class="section">
<p><span class="merged" id="all.4tR6D" title="原文 : The following table lists all spans traced by Helidon components:">次の表に、Helidonコンポーネントによってトレースされるすべてのスパンを示します:</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 33.333%;">
<col style="width: 33.333%;">
<col style="width: 33.333%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1M0t9D"  title="原文:: component">コンポーネント</span></th>
<th><span class="merged" id="all.df84B" title="原文 : span name">スパン名</span></th>
<th><span class="merged" id="all.20ls8M.13"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1PNGMG"  title="原文: web-server"><code>web-server</code></span></td>
<td class=""><span class="merged" id="all.Qb5FB"  title="原文: HTTP Request"><code>HTTP Request</code></span></td>
<td class=""><span class="merged" id="all.2Mq2G6" title="原文 : The overall span of the Web Server from request intitiation until response Note that in Zipkin the name is replaced with jax-rs span name if jax-rs tracing is used.">リクエストの開始からレスポンスまでのWebサーバーの全体的なスパン。<code>jax-rs</code>トレースが使用されている場合、<code>Zipkin</code>では名前が<code>jax-rs</code>スパン名に置き換えられることに注意してください。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1PNGMG.1"  title="原文: web-server"><code>web-server</code></span></td>
<td class=""><span class="merged" id="all.dgolt"  title="原文: content-read"><code>content-read</code></span></td>
<td class=""><span class="merged" id="all.2lHDQn" title="原文 : Span for reading the request entity">リクエスト・エンティティの読取り用スパン</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1PNGMG.2"  title="原文: web-server"><code>web-server</code></span></td>
<td class=""><span class="merged" id="all.8DrtF"  title="原文: content-write"><code>content-write</code></span></td>
<td class=""><span class="merged" id="all.3H7dde" title="原文 : Span for writing the response entity">レスポンス・エンティティの書込み用スパン</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2d2KCa"  title="原文: security"><code>security</code></span></td>
<td class=""><span class="merged" id="all.2d2KCa.1"  title="原文: security"><code>security</code></span></td>
<td class=""><span class="merged" id="all.253mTV" title="原文 : Processing of request security">リクエスト・セキュリティの処理</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2d2KCa.2"  title="原文: security"><code>security</code></span></td>
<td class=""><span class="merged" id="all.9wBkt"  title="原文: security:atn"><code>security:atn</code></span></td>
<td class=""><span class="merged" id="all.2MQnH5" title="原文 : Span for request authentication">リクエスト認証用スパン</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2d2KCa.3"  title="原文: security"><code>security</code></span></td>
<td class=""><span class="merged" id="all.4Oidt8"  title="原文: security:atz"><code>security:atz</code></span></td>
<td class=""><span class="merged" id="all.2Udo2s" title="原文 : Span for request authorization">リクエスト認可のスパン</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2d2KCa.4"  title="原文: security"><code>security</code></span></td>
<td class=""><span class="merged" id="all.4cGZav"  title="原文: security:response"><code>security:response</code></span></td>
<td class=""><span class="merged" id="all.6Jz0K" title="原文 : Processing of response security">レスポンス・セキュリティの処理</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2d2KCa.5"  title="原文: security"><code>security</code></span></td>
<td class=""><span class="merged" id="all.4QVVuw"  title="原文: security:outbound"><code>security:outbound</code></span></td>
<td class=""><span class="merged" id="all.FX1je" title="原文 : Processing of outbound security">アウトバウンド・セキュリティの処理</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Hn1RS"  title="原文: jax-rs"><code>jax-rs</code></span></td>
<td class=""><span class="merged" id="all.2qnf0q" title="原文 : A generated name">生成された名前</span></td>
<td class=""><span class="merged" id="all.2s8Gok" title="原文 : Span for the resource method invocation, name is generated from class and method name">リソース・メソッド呼出しのスパン。名前はクラスおよびメソッド名から生成されます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Hn1RS.1"  title="原文: jax-rs"><code>jax-rs</code></span></td>
<td class=""><span class="merged" id="all.1H2Fyj"  title="原文: jersey-client-call"><code>jersey-client-call</code></span></td>
<td class=""><span class="merged" id="all.409psL" title="原文 : Span for outbound client call">アウトバウンド・クライアント・コールのスパン</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.4BMY7L.spl1" title="原文 : Some of these spans log to the span.">これらの中には、スパンまで<code>log</code>にまたがるものがあります。</span> <span class="merged" id="all.4BMY7L.spl2" title="原文 : These log events can be (in most cases) configured:">次のログ・イベントを(ほとんどの場合に)構成できます:</span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 20%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.df84B.1" title="原文 : span name">スパン名</span></th>
<th><span class="merged" id="all.xxjaf"  title="原文:: log name">ログ名</span></th>
<th><span class="merged" id="all.1nmObm"  title="原文:: configurable">構成可</span></th>
<th><span class="merged" id="all.17KgId" title="原文 : enabled by default">デフォルトで有効</span></th>
<th><span class="merged" id="all.20ls8M.14"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.Qb5FB.1"  title="原文: HTTP Request"><code>HTTP Request</code></span></td>
<td class=""><span class="merged" id="all.3m12Vt"  title="原文: handler.class"><code>handler.class</code></span></td>
<td class=""><span class="merged" id="all.4A1VAZ"  title="原文:: YES">YES</span></td>
<td class=""><span class="merged" id="all.4A1VAZ.1"  title="原文:: YES">YES</span></td>
<td class=""><span class="merged" id="all.1f0ctr" title="原文 : Each handler has its class and event logged">各ハンドラのクラスとイベントがログに記録されます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2d2KCa.6"  title="原文: security"><code>security</code></span></td>
<td class=""><span class="merged" id="all.rRvWD"  title="原文: status"><code>status</code></span></td>
<td class=""><span class="merged" id="all.4A1VAZ.2"  title="原文:: YES">YES</span></td>
<td class=""><span class="merged" id="all.4A1VAZ.3"  title="原文:: YES">YES</span></td>
<td class=""><span class="merged" id="all.NVGn4" title="原文 : Logs either &quot;status: PROCEED&quot; or &quot;status: DENY&quot;">いずれをログに記録します: "status: PROCEED"または"status: DENY"</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.9wBkt.1"  title="原文: security:atn"><code>security:atn</code></span></td>
<td class=""><span class="merged" id="all.3rCNRd"  title="原文: security.user"><code>security.user</code></span></td>
<td class=""><span class="merged" id="all.4A1VAZ.4"  title="原文:: YES">YES</span></td>
<td class=""><span class="merged" id="all.3gV8fV"  title="原文:: NO">NO</span></td>
<td class=""><span class="merged" id="all.3I5cqB" title="原文 : The username of the user if logged in">ユーザーのユーザー名(ログインしている場合)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.9wBkt.2"  title="原文: security:atn"><code>security:atn</code></span></td>
<td class=""><span class="merged" id="all.4dSGRQ"  title="原文: security.service"><code>security.service</code></span></td>
<td class=""><span class="merged" id="all.4A1VAZ.5"  title="原文:: YES">YES</span></td>
<td class=""><span class="merged" id="all.3gV8fV.1"  title="原文:: NO">NO</span></td>
<td class=""><span class="merged" id="all.3TQJ16" title="原文 : The name of the service if logged in">ログインしている場合のサービスの名前</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.9wBkt.3"  title="原文: security:atn"><code>security:atn</code></span></td>
<td class=""><span class="merged" id="all.rRvWD.1"  title="原文: status"><code>status</code></span></td>
<td class=""><span class="merged" id="all.4A1VAZ.6"  title="原文:: YES">YES</span></td>
<td class=""><span class="merged" id="all.4A1VAZ.7"  title="原文:: YES">YES</span></td>
<td class=""><span class="merged" id="all.159rPS" title="原文 : Logs the status of security response (such as SUCCESS)">セキュリティ・レスポンスのステータスをログに記録します(<code>SUCCESS</code>など)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Oidt8.1"  title="原文: security:atz"><code>security:atz</code></span></td>
<td class=""><span class="merged" id="all.rRvWD.2"  title="原文: status"><code>status</code></span></td>
<td class=""><span class="merged" id="all.4A1VAZ.8"  title="原文:: YES">YES</span></td>
<td class=""><span class="merged" id="all.4A1VAZ.9"  title="原文:: YES">YES</span></td>
<td class=""><span class="merged" id="all.159rPS.1" title="原文 : Logs the status of security response (such as SUCCESS)">セキュリティ・レスポンスのステータスをログに記録します(<code>SUCCESS</code>など)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4QVVuw.1"  title="原文: security:outbound"><code>security:outbound</code></span></td>
<td class=""><span class="merged" id="all.rRvWD.3"  title="原文: status"><code>status</code></span></td>
<td class=""><span class="merged" id="all.4A1VAZ.10"  title="原文:: YES">YES</span></td>
<td class=""><span class="merged" id="all.4A1VAZ.11"  title="原文:: YES">YES</span></td>
<td class=""><span class="merged" id="all.159rPS.2" title="原文 : Logs the status of security response (such as SUCCESS)">セキュリティ・レスポンスのステータスをログに記録します(<code>SUCCESS</code>など)</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.25dLC6.spl1" title="原文 : There are also tags that are set by Helidon components.">Helidonコンポーネントによって設定されるタグもあります。</span> <span class="merged" id="all.25dLC6.spl2" title="原文 : These are not configurable.">これらは構成できません。</span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 33.333%;">
<col style="width: 33.333%;">
<col style="width: 33.333%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.df84B.2" title="原文 : span name">スパン名</span></th>
<th><span class="merged" id="all.3jGKII"  title="原文:: tag name">タグ名</span></th>
<th><span class="merged" id="all.20ls8M.15"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.Qb5FB.2"  title="原文: HTTP Request"><code>HTTP Request</code></span></td>
<td class=""><span class="merged" id="all.11lv4o"  title="原文: component"><code>component</code></span></td>
<td class=""><span class="merged" id="all.4cMdoV" title="原文 : name of the component - helidon-webserver, or jaxrs when using MP">コンポーネントの名前 - MP使用時の<code>helidon-webserver</code>または<code>jaxrs</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Qb5FB.3"  title="原文: HTTP Request"><code>HTTP Request</code></span></td>
<td class=""><span class="merged" id="all.1jJemi"  title="原文: http.method"><code>http.method</code></span></td>
<td class=""><span class="merged" id="all.4VnwpJ" title="原文 : HTTP method of the request, such as GET, POST">リクエストのHTTPメソッド(<code>GET</code>、<code>POST</code>など)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Qb5FB.4"  title="原文: HTTP Request"><code>HTTP Request</code></span></td>
<td class=""><span class="merged" id="all.ZQIYg"  title="原文: http.status_code"><code>http.status_code</code></span></td>
<td class=""><span class="merged" id="all.3A9IwG" title="原文 : HTTP status code of the response">レスポンスのHTTPステータス・コード</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Qb5FB.5"  title="原文: HTTP Request"><code>HTTP Request</code></span></td>
<td class=""><span class="merged" id="all.3LuH6T"  title="原文: http.url"><code>http.url</code></span></td>
<td class=""><span class="merged" id="all.3apl7E" title="原文 : The path of the request (for SE without protocol, host and port)">リクエストのパス(プロトコル、ホストおよびポートのないSEの場合)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Qb5FB.6"  title="原文: HTTP Request"><code>HTTP Request</code></span></td>
<td class=""><span class="merged" id="all.2nkbFM"  title="原文: error"><code>error</code></span></td>
<td class=""><span class="merged" id="all.2uJFly" title="原文 : If the request ends in error, this tag is set to true, usually accompanied by logs with details">リクエストがエラーで終了した場合、このタグは<code>true</code>に設定され、通常は詳細とともにログが表示されます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.dgolt.1"  title="原文: content-read"><code>content-read</code></span></td>
<td class=""><span class="merged" id="all.3rUh3Y"  title="原文: requested.type"><code>requested.type</code></span></td>
<td class=""><span class="merged" id="all.2a0F4Q" title="原文 : Type (class) of the requested entity (if entity is read)">リクエストされたエンティティのタイプ(クラス)(エンティティが読み取られた場合)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.8DrtF.1"  title="原文: content-write"><code>content-write</code></span></td>
<td class=""><span class="merged" id="all.N84gA"  title="原文: response.type"><code>response.type</code></span></td>
<td class=""><span class="merged" id="all.1XdKuN" title="原文 : Type (class) of the entity being sent (if enitty is sent)">送信されるエンティティのタイプ(クラス) (enittyが送信される場合)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2d2KCa.7"  title="原文: security"><code>security</code></span></td>
<td class=""><span class="merged" id="all.1Fq4bz"  title="原文: security.id"><code>security.id</code></span></td>
<td class=""><span class="merged" id="all.1UHUoL" title="原文 : ID of the security context created for this request (if security is used)">このリクエストに対して作成されたセキュリティ・コンテキストのID (セキュリティが使用されている場合)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1H2Fyj.1"  title="原文: jersey-client-call"><code>jersey-client-call</code></span></td>
<td class=""><span class="merged" id="all.1jJemi.1"  title="原文: http.method"><code>http.method</code></span></td>
<td class=""><span class="merged" id="all.1UW370" title="原文 : HTTP method of the client request">クライアント・リクエストのHTTPメソッド</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1H2Fyj.2"  title="原文: jersey-client-call"><code>jersey-client-call</code></span></td>
<td class=""><span class="merged" id="all.ZQIYg.1"  title="原文: http.status_code"><code>http.status_code</code></span></td>
<td class=""><span class="merged" id="all.1RxHfD" title="原文 : HTTP status code of client response">クライアント・レスポンスのHTTPステータス・コード</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1H2Fyj.3"  title="原文: jersey-client-call"><code>jersey-client-call</code></span></td>
<td class=""><span class="merged" id="all.3LuH6T.1"  title="原文: http.url"><code>http.url</code></span></td>
<td class=""><span class="merged" id="all.29fXsu" title="原文 : Full URL of the request (such as http://localhost:8080/greet)">リクエストの完全なURL (<code><a href="http://localhost:8080/greet" id="" target="_blank" >http://localhost:8080/greet</a></code>など)</span></td>
</tr>
</tbody>
</table>
</div>

<h4 id="_configuration_using_mp_config"><span class="merged" id="all.1gCmLu" title="原文 : Configuration using MP Config">MP構成を使用した構成</span></h4>
<div class="section">
<p><span class="merged" id="all.23SHrd" title="原文 : Tracing configuration can be defined in microprofile-config.properties file.">トレース構成は、<code>microprofile-config.properties</code>ファイルで定義できます。</span></p>

<markup
lang="properties"
title="Tracing configuration"
>tracing.components.web-server.spans.0.name="HTTP Request"
tracing.components.web-server.spans.0.logs.0.name="content-write"
tracing.components.web-server.spans.0.logs.0.enabled=false</markup>

</div>

<h4 id="_path_based_configuration_in_helidon_web_server"><span class="merged" id="all.2iVpNZ" title="原文 : Path based configuration in Helidon Web Server">Helidon Webサーバーのパス・ベースの構成</span></h4>
<div class="section">
<p><span class="merged" id="all.3iUj94" title="原文 : For Web Server we have a path based support for configuring tracing, in addition to the configuration described above.">Webサーバーの場合、前述の構成に加えて、トレースの構成に対するパス・ベースのサポートがあります。</span></p>

<p><span class="merged" id="all.WmtAQ.spl1" title="原文 : Configuration of path can use any path string supported by the Web Server.">pathの構成では、Webサーバーでサポートされている任意のパス文字列を使用できます。</span> <span class="merged" id="all.WmtAQ.spl2" title="原文 : The configuration itself has the same possibilities as traced configuration described above.">構成自体には、前述のトレース対象の構成と同じ可能性があります。</span> <span class="merged" id="all.WmtAQ.spl3" title="原文 : The path specific configuration will be merged with global configuration (path is the &quot;newer&quot; configuration, global is the &quot;older&quot;)">パス固有の構成はグローバル構成とマージされます(パスは新しい構成、グローバルは古い構成)</span> </p>

<markup
lang="properties"
title="Configuration properties"
>tracing.paths.0.path="/favicon.ico"
tracing.paths.0.enabled=false
tracing.paths.1.path="/metrics"
tracing.paths.1.enabled=false
tracing.paths.2.path="/health"
tracing.paths.2.enabled=false</markup>

</div>

<h4 id="_renaming_top_level_span_using_request_properties"><span class="merged" id="all.43maJP" title="原文 : Renaming top level span using request properties">リクエスト・プロパティを使用したトップ・レベル・スパンの名前変更</span></h4>
<div class="section">
<p><span class="merged" id="all.2pVzs9" title="原文 : To have a nicer overview in search pane of a tracer, you can customize the top-level span name using configuration.">トレーサの検索ペインの概要をよく理解するために、構成を使用してトップレベルのスパン名をカスタマイズできます。</span></p>

<p><span class="merged" id="all.2apT5L.4"  title="原文:: Example:">例:</span></p>

<markup
lang="properties"
title="Configuration properties"
>tracing.components.web-server.spans.0.name="HTTP Request"
tracing.components.web-server.spans.0.new-name: "HTTP %1$s %2$s"</markup>

<p><span class="merged" id="all.2V5xJi" title="原文 : This is supported ONLY for the span named &quot;HTTP Request&quot; on component &quot;web-server&quot;.">これは、コンポーネント"web-server"の"HTTP Request"という名前のスパンでのみサポートされます。</span></p>

<p><span class="merged" id="all.9iX98" title="原文 : Parameters provided:">指定されたパラメータ:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1a7cSx" title="原文 : Method - HTTP method">メソッド - HTTPメソッド</span>

</li>
<li>
<span class="merged" id="all.2tHLMG" title="原文 : Path - path of the request (such as &apos;/greet&apos;)">パス - リクエストのパス('/greet'など)</span>

</li>
<li>
<span class="merged" id="all.3O0QND" title="原文 : Query - query of the request (may be null)">問合せ - リクエストの問合せ(nullの可能性があります)</span>

</li>
</ol>
</div>
</div>
</doc-view>
