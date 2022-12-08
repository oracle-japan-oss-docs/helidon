<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.63"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.1MisCI" title="原文 : To enable Tracing add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">トレースを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_tracing_support"><span class="merged" id="all.2zfxHj" title="原文 : Tracing Support">トレースのサポート</span></h2>
<div class="section">
<p><span class="merged" id="all.1n5s7W.spl1" title="原文 : Helidon includes support for tracing through the OpenTracing APIs.">Helidonには、<code><a href="https://opentracing.io/" id="" target="_blank" >OpenTracing</a></code> APIを介したトレースのサポートが含まれています。</span> <span class="merged" id="all.1n5s7W.spl2" title="原文 : Tracing is integrated with WebServer, gRPC Server, and Security.">トレースは、WebServer、gRPCサーバーおよびセキュリティと統合されています。</span> </p>

<p><span class="merged" id="all.2MPOiy.spl1" title="原文 : Support for specific tracers is abstracted.">特定のトレーサのサポートは抽象化されます。</span> <span class="merged" id="all.2MPOiy.spl2" title="原文 : Your application can depend on the abstraction layer and provide a specific tracer implementation as a Java ServiceLoader service.">アプリケーションは抽象化レイヤーに依存し、特定のトレーサ実装をJava <code>ServiceLoader</code>サービスとして提供できます。</span> </p>

</div>

<h2 id="_configuring_tracing_with_helidon_se"><span class="merged" id="all.15KpLN" title="原文 : Configuring Tracing with Helidon SE">Helidon SEでのトレースの構成</span></h2>
<div class="section">

<h3 id="_configuring_tracing_with_webserver"><span class="merged" id="all.4CbRaL" title="原文 : Configuring Tracing with WebServer">WebServerでのトレースの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.2Z417Z" title="原文 : To configure tracer with WebServer:">WebServerでトレーサを構成するには:</span></p>

<markup
lang="java"
title="Configuring OpenTracing <code>Tracer</code>"
>ServerConfiguration.builder()
                   .tracer(TracerBuilder.create("my-application")                    <span class="conum" data-value="1" />
                                 .collectorUri(URI.create("http://10.0.0.18:9411"))  <span class="conum" data-value="2" />
                                 .build())
                   .build()</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.42p4Yc" title="原文 : The name of the application (service) to associate with the tracing events">トレース・イベントに関連付けるアプリケーション(サービス)の名前</span></li>
<li data-value="2"><span class="merged" id="all.26uiOi" title="原文 : The endpoint for tracing events, specific to the tracer used, usually loaded from Config">使用されるトレーサに固有のイベントをトレースするためのエンドポイント。通常はConfigからロードされます</span></li>
</ul>
</div>

<h3 id="_configuring_tracing_with_grpc_server"><span class="merged" id="all.3Odhxu" title="原文 : Configuring Tracing with gRPC Server">gRPCサーバーでのトレースの構成</span></h3>
<div class="section">
<markup
lang="java"
title="Configuring OpenTracing <code>Tracer</code>"
>Tracer tracer = (Tracer) TracerBuilder.create("Server")
        .collectorUri(URI.create("http://10.0.0.18:9411"))   <span class="conum" data-value="1" />
        .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.qluXQ" title="原文 : If using zipkin tracing system, the endpoint would be: http://10.0.0.18:9411/api/v2/spans">zipkinトレース・システムを使用する場合、エンドポイントは次のようになります : <code><a href="http://10.0.0.18:9411/api/v2/spans" id="" target="_blank" >http://10.0.0.18:9411/api/v2/spans</a></code></span></li>
</ul>
<markup
lang="java"
title="Configuring Tracing Attributes"
>GrpcTracingConfig tracingConfig = new GrpcTracingConfig.Builder()
                .withStreaming()
                .withVerbosity()
                .withTracedAttributes(ServerRequestAttribute.CALL_ATTRIBUTES,
                     ServerRequestAttribute.HEADERS,
                     ServerRequestAttribute.METHOD_NAME)
                .build();</markup>

<markup
lang="java"
title="Configuring gRPC Server"
>GrpcServerConfiguration serverConfig = GrpcServerConfiguration.builder().port(0)
                .tracer(tracer)
                .tracingConfig(tracingConfig)
                .build();</markup>

</div>

<h3 id="Tracing-config"><span class="merged" id="all.3QbNDo.1" title="原文 : Configuration using Helidon Config">Helidon構成を使用した構成</span></h3>
<div class="section">
<p><span class="merged" id="all.RxvBf.1.spl1" title="原文 : There is a set of common configuration options that this section describes.">この項で説明する共通の構成オプションのセットがあります。</span> <span class="merged" id="all.RxvBf.1.spl2" title="原文 : In addition each tracer implementation may have additional configuration options - please see the documentation of each of them.">さらに、トレーサの実装ごとに追加の構成オプションがある場合があります - それぞれのドキュメントを参照してください。</span> </p>

<p><span class="merged" id="all.kUHyQ.1" title="原文 : Each implementation may provide defaults for these options.">各実装では、これらのオプションのデフォルトを提供できます。</span></p>

<p><span class="merged" id="all.1nQaK8.1" title="原文 : All common configuration options:">すべての共通構成オプション:</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.22"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.20ls8M.25"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.48AK3O.3"  title="原文:: service">service</span></td>
<td class=""><span class="merged" id="all.1QZRrp.1.spl1" title="原文 : Name of the service sending the tracing information.">トレース情報を送信するサービスの名前。</span> <span class="merged" id="all.1QZRrp.1.spl2" title="原文 : This is usually visible in the trace data to distinguish actors in a conversation (e.g. when multiple microservices are connected together)">これは通常、会話内のアクターを区別するためにトレース・データに表示されます(複数のマイクロサービスが接続されている場合など)</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3fw5zI.3"  title="原文:: protocol">protocol</span></td>
<td class=""><span class="merged" id="all.vqxwb.1" title="原文 : Protocol of the tracing collector (e.g. http, https)">トレース・コレクタのプロトコル(<code>http</code>、<code>https</code>など)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3nCbwD.3"  title="原文:: host">host</span></td>
<td class=""><span class="merged" id="all.hp2zg.1" title="原文 : Host of the tracing collector (e.g. localhost)">トレース・コレクタのホスト(<code>localhost</code>など)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1EiTCG.3"  title="原文:: port">port</span></td>
<td class=""><span class="merged" id="all.30xSoB.1" title="原文 : Port of the tracing collector (e.g. 9411)">トレース・コレクタのポート(<code>9411</code>など)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Crb5j.3"  title="原文:: path">path</span></td>
<td class=""><span class="merged" id="all.4g8Gta.1" title="原文 : Path of the tracing collector service that is used to send spans to">スパンの送信先として使用されるトレース・コレクタ・サービスのパス</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1TwJHw.5"  title="原文:: enabled">enabled</span></td>
<td class=""><span class="merged" id="all.36lP7.3" title="原文 : If set to false, tracing would be disabled">falseに設定すると、トレースは無効になります</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.22rkoQ.3"  title="原文:: tags">tags</span></td>
<td class=""><span class="merged" id="all.404R2H.1" title="原文 : String tags that are to be added to each span reported (object node of string-string pairs)">レポートされる各スパンに追加される文字列タグ(文字列と文字列のペアのオブジェクト・ノード)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.PmqUy.3" title="原文 : boolean-tags">boolean-tags</span></td>
<td class=""><span class="merged" id="all.2HCbnc.1" title="原文 : Boolean tags that are to be added to each span reported (object node of string-boolean pairs)">レポートされる各スパンに追加されるブール・タグ(文字列とブールのペアのオブジェクト・ノード)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2kPIb3.3" title="原文 : int-tags">int-tags</span></td>
<td class=""><span class="merged" id="all.KVnyV.1" title="原文 : Int tags that are to be added to each span reported (object node of string-int pairs)">報告された各スパンに追加されるIntタグ(文字列とintのペアのオブジェクト・ノード)</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<h2 id="_creating_custom_spans"><span class="merged" id="all.3PebJZ.1" title="原文 : Creating custom spans">カスタム・スパンの作成</span></h2>
<div class="section">
<p><span class="merged" id="all.1zBA7B" title="原文 : To create a custom span that is a child of the WebServer request:">WebServerリクエストの子であるカスタム・スパンを作成するには:</span></p>

<markup
lang="java"

>Span span = request.tracer()
        .buildSpan("my-operation")
        .asChildOf(request.spanContext())
                         .start();</markup>

</div>

<h2 id="_trace_propagation_across_services"><span class="merged" id="all.3GlBN.1" title="原文 : Trace propagation across services">サービス間の伝播のトレース</span></h2>
<div class="section">
<p><span class="merged" id="all.CoBLB.1" title="原文 : Automated trace propagation is supported currently only with Jersey client.">自動トレース伝播は、現在、Jerseyクライアントでのみサポートされています。</span></p>

<markup
lang="java"
title="Tracing propagation with Jersey client"
>Response response = client.target(serviceEndpoint)
    .request()
    .get();</markup>

</div>

<h2 id="_traced_spans"><span class="merged" id="all.4WqKWr.1" title="原文 : Traced spans">トレース対象スパン</span></h2>
<div class="section">
<p><span class="merged" id="all.4tR6D.1" title="原文 : The following table lists all spans traced by Helidon components:">次の表に、Helidonコンポーネントによってトレースされるすべてのスパンを示します:</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 33.333%;">
<col style="width: 33.333%;">
<col style="width: 33.333%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1M0t9D.1"  title="原文:: component">コンポーネント</span></th>
<th><span class="merged" id="all.df84B.3" title="原文 : span name">スパン名</span></th>
<th><span class="merged" id="all.20ls8M.26"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1PNGMG.3"  title="原文: web-server"><code>web-server</code></span></td>
<td class=""><span class="merged" id="all.Qb5FB.7"  title="原文: HTTP Request"><code>HTTP Request</code></span></td>
<td class=""><span class="merged" id="all.2Mq2G6.1" title="原文 : The overall span of the Web Server from request intitiation until response Note that in Zipkin the name is replaced with jax-rs span name if jax-rs tracing is used.">リクエストの開始からレスポンスまでのWebサーバーの全体的なスパン。<code>jax-rs</code>トレースが使用されている場合、<code>Zipkin</code>では名前が<code>jax-rs</code>スパン名に置き換えられることに注意してください。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1PNGMG.4"  title="原文: web-server"><code>web-server</code></span></td>
<td class=""><span class="merged" id="all.dgolt.2"  title="原文: content-read"><code>content-read</code></span></td>
<td class=""><span class="merged" id="all.2lHDQn.1" title="原文 : Span for reading the request entity">リクエスト・エンティティの読取り用スパン</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1PNGMG.5"  title="原文: web-server"><code>web-server</code></span></td>
<td class=""><span class="merged" id="all.8DrtF.2"  title="原文: content-write"><code>content-write</code></span></td>
<td class=""><span class="merged" id="all.3H7dde.1" title="原文 : Span for writing the response entity">レスポンス・エンティティの書込み用スパン</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2d2KCa.8"  title="原文: security"><code>security</code></span></td>
<td class=""><span class="merged" id="all.2d2KCa.9"  title="原文: security"><code>security</code></span></td>
<td class=""><span class="merged" id="all.253mTV.1" title="原文 : Processing of request security">リクエスト・セキュリティの処理</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2d2KCa.10"  title="原文: security"><code>security</code></span></td>
<td class=""><span class="merged" id="all.9wBkt.4"  title="原文: security:atn"><code>security:atn</code></span></td>
<td class=""><span class="merged" id="all.2MQnH5.1" title="原文 : Span for request authentication">リクエスト認証用スパン</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2d2KCa.11"  title="原文: security"><code>security</code></span></td>
<td class=""><span class="merged" id="all.4Oidt8.2"  title="原文: security:atz"><code>security:atz</code></span></td>
<td class=""><span class="merged" id="all.2Udo2s.1" title="原文 : Span for request authorization">リクエスト認可のスパン</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2d2KCa.12"  title="原文: security"><code>security</code></span></td>
<td class=""><span class="merged" id="all.4cGZav.1"  title="原文: security:response"><code>security:response</code></span></td>
<td class=""><span class="merged" id="all.6Jz0K.1" title="原文 : Processing of response security">レスポンス・セキュリティの処理</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2d2KCa.13"  title="原文: security"><code>security</code></span></td>
<td class=""><span class="merged" id="all.4QVVuw.2"  title="原文: security:outbound"><code>security:outbound</code></span></td>
<td class=""><span class="merged" id="all.FX1je.1" title="原文 : Processing of outbound security">アウトバウンド・セキュリティの処理</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Hn1RS.2"  title="原文: jax-rs"><code>jax-rs</code></span></td>
<td class=""><span class="merged" id="all.2qnf0q.1" title="原文 : A generated name">生成された名前</span></td>
<td class=""><span class="merged" id="all.2s8Gok.1" title="原文 : Span for the resource method invocation, name is generated from class and method name">リソース・メソッド呼出しのスパン。名前はクラスおよびメソッド名から生成されます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Hn1RS.3"  title="原文: jax-rs"><code>jax-rs</code></span></td>
<td class=""><span class="merged" id="all.1H2Fyj.4"  title="原文: jersey-client-call"><code>jersey-client-call</code></span></td>
<td class=""><span class="merged" id="all.409psL.1" title="原文 : Span for outbound client call">アウトバウンド・クライアント・コールのスパン</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.4BMY7L.1.spl1" title="原文 : Some of these spans log to the span.">これらの中には、スパンまで<code>log</code>にまたがるものがあります。</span> <span class="merged" id="all.4BMY7L.1.spl2" title="原文 : These log events can be (in most cases) configured:">次のログ・イベントを(ほとんどの場合に)構成できます:</span> </p>


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
<th><span class="merged" id="all.df84B.4" title="原文 : span name">スパン名</span></th>
<th><span class="merged" id="all.xxjaf.1"  title="原文:: log name">ログ名</span></th>
<th><span class="merged" id="all.1nmObm.1"  title="原文:: configurable">構成可</span></th>
<th><span class="merged" id="all.17KgId.1" title="原文 : enabled by default">デフォルトで有効</span></th>
<th><span class="merged" id="all.20ls8M.27"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.Qb5FB.8"  title="原文: HTTP Request"><code>HTTP Request</code></span></td>
<td class=""><span class="merged" id="all.3m12Vt.1"  title="原文: handler.class"><code>handler.class</code></span></td>
<td class=""><span class="merged" id="all.4A1VAZ.12"  title="原文:: YES">YES</span></td>
<td class=""><span class="merged" id="all.4A1VAZ.13"  title="原文:: YES">YES</span></td>
<td class=""><span class="merged" id="all.1f0ctr.1" title="原文 : Each handler has its class and event logged">各ハンドラのクラスとイベントがログに記録されます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2d2KCa.14"  title="原文: security"><code>security</code></span></td>
<td class=""><span class="merged" id="all.rRvWD.4"  title="原文: status"><code>status</code></span></td>
<td class=""><span class="merged" id="all.4A1VAZ.14"  title="原文:: YES">YES</span></td>
<td class=""><span class="merged" id="all.4A1VAZ.15"  title="原文:: YES">YES</span></td>
<td class=""><span class="merged" id="all.NVGn4.1" title="原文 : Logs either &quot;status: PROCEED&quot; or &quot;status: DENY&quot;">いずれをログに記録します: "status: PROCEED"または"status: DENY"</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.9wBkt.5"  title="原文: security:atn"><code>security:atn</code></span></td>
<td class=""><span class="merged" id="all.3rCNRd.1"  title="原文: security.user"><code>security.user</code></span></td>
<td class=""><span class="merged" id="all.4A1VAZ.16"  title="原文:: YES">YES</span></td>
<td class=""><span class="merged" id="all.3gV8fV.2"  title="原文:: NO">NO</span></td>
<td class=""><span class="merged" id="all.3I5cqB.1" title="原文 : The username of the user if logged in">ユーザーのユーザー名(ログインしている場合)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.9wBkt.6"  title="原文: security:atn"><code>security:atn</code></span></td>
<td class=""><span class="merged" id="all.4dSGRQ.1"  title="原文: security.service"><code>security.service</code></span></td>
<td class=""><span class="merged" id="all.4A1VAZ.17"  title="原文:: YES">YES</span></td>
<td class=""><span class="merged" id="all.3gV8fV.3"  title="原文:: NO">NO</span></td>
<td class=""><span class="merged" id="all.3TQJ16.1" title="原文 : The name of the service if logged in">ログインしている場合のサービスの名前</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.9wBkt.7"  title="原文: security:atn"><code>security:atn</code></span></td>
<td class=""><span class="merged" id="all.rRvWD.5"  title="原文: status"><code>status</code></span></td>
<td class=""><span class="merged" id="all.4A1VAZ.18"  title="原文:: YES">YES</span></td>
<td class=""><span class="merged" id="all.4A1VAZ.19"  title="原文:: YES">YES</span></td>
<td class=""><span class="merged" id="all.159rPS.3" title="原文 : Logs the status of security response (such as SUCCESS)">セキュリティ・レスポンスのステータスをログに記録します(<code>SUCCESS</code>など)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Oidt8.3"  title="原文: security:atz"><code>security:atz</code></span></td>
<td class=""><span class="merged" id="all.rRvWD.6"  title="原文: status"><code>status</code></span></td>
<td class=""><span class="merged" id="all.4A1VAZ.20"  title="原文:: YES">YES</span></td>
<td class=""><span class="merged" id="all.4A1VAZ.21"  title="原文:: YES">YES</span></td>
<td class=""><span class="merged" id="all.159rPS.4" title="原文 : Logs the status of security response (such as SUCCESS)">セキュリティ・レスポンスのステータスをログに記録します(<code>SUCCESS</code>など)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4QVVuw.3"  title="原文: security:outbound"><code>security:outbound</code></span></td>
<td class=""><span class="merged" id="all.rRvWD.7"  title="原文: status"><code>status</code></span></td>
<td class=""><span class="merged" id="all.4A1VAZ.22"  title="原文:: YES">YES</span></td>
<td class=""><span class="merged" id="all.4A1VAZ.23"  title="原文:: YES">YES</span></td>
<td class=""><span class="merged" id="all.159rPS.5" title="原文 : Logs the status of security response (such as SUCCESS)">セキュリティ・レスポンスのステータスをログに記録します(<code>SUCCESS</code>など)</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.25dLC6.1.spl1" title="原文 : There are also tags that are set by Helidon components.">Helidonコンポーネントによって設定されるタグもあります。</span> <span class="merged" id="all.25dLC6.1.spl2" title="原文 : These are not configurable.">これらは構成できません。</span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 33.333%;">
<col style="width: 33.333%;">
<col style="width: 33.333%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.df84B.5" title="原文 : span name">スパン名</span></th>
<th><span class="merged" id="all.3jGKII.1"  title="原文:: tag name">タグ名</span></th>
<th><span class="merged" id="all.20ls8M.28"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.Qb5FB.9"  title="原文: HTTP Request"><code>HTTP Request</code></span></td>
<td class=""><span class="merged" id="all.11lv4o.1"  title="原文: component"><code>component</code></span></td>
<td class=""><span class="merged" id="all.4cMdoV.1" title="原文 : name of the component - helidon-webserver, or jaxrs when using MP">コンポーネントの名前 - MP使用時の<code>helidon-webserver</code>または<code>jaxrs</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Qb5FB.10"  title="原文: HTTP Request"><code>HTTP Request</code></span></td>
<td class=""><span class="merged" id="all.1jJemi.2"  title="原文: http.method"><code>http.method</code></span></td>
<td class=""><span class="merged" id="all.4VnwpJ.1" title="原文 : HTTP method of the request, such as GET, POST">リクエストのHTTPメソッド(<code>GET</code>、<code>POST</code>など)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Qb5FB.11"  title="原文: HTTP Request"><code>HTTP Request</code></span></td>
<td class=""><span class="merged" id="all.ZQIYg.2"  title="原文: http.status_code"><code>http.status_code</code></span></td>
<td class=""><span class="merged" id="all.3A9IwG.1" title="原文 : HTTP status code of the response">レスポンスのHTTPステータス・コード</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Qb5FB.12"  title="原文: HTTP Request"><code>HTTP Request</code></span></td>
<td class=""><span class="merged" id="all.3LuH6T.2"  title="原文: http.url"><code>http.url</code></span></td>
<td class=""><span class="merged" id="all.3apl7E.1" title="原文 : The path of the request (for SE without protocol, host and port)">リクエストのパス(プロトコル、ホストおよびポートのないSEの場合)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Qb5FB.13"  title="原文: HTTP Request"><code>HTTP Request</code></span></td>
<td class=""><span class="merged" id="all.2nkbFM.1"  title="原文: error"><code>error</code></span></td>
<td class=""><span class="merged" id="all.2uJFly.1" title="原文 : If the request ends in error, this tag is set to true, usually accompanied by logs with details">リクエストがエラーで終了した場合、このタグは<code>true</code>に設定され、通常は詳細とともにログが表示されます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.dgolt.3"  title="原文: content-read"><code>content-read</code></span></td>
<td class=""><span class="merged" id="all.3rUh3Y.1"  title="原文: requested.type"><code>requested.type</code></span></td>
<td class=""><span class="merged" id="all.2a0F4Q.1" title="原文 : Type (class) of the requested entity (if entity is read)">リクエストされたエンティティのタイプ(クラス)(エンティティが読み取られた場合)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.8DrtF.3"  title="原文: content-write"><code>content-write</code></span></td>
<td class=""><span class="merged" id="all.N84gA.1"  title="原文: response.type"><code>response.type</code></span></td>
<td class=""><span class="merged" id="all.1XdKuN.1" title="原文 : Type (class) of the entity being sent (if enitty is sent)">送信されるエンティティのタイプ(クラス) (enittyが送信される場合)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2d2KCa.15"  title="原文: security"><code>security</code></span></td>
<td class=""><span class="merged" id="all.1Fq4bz.1"  title="原文: security.id"><code>security.id</code></span></td>
<td class=""><span class="merged" id="all.1UHUoL.1" title="原文 : ID of the security context created for this request (if security is used)">このリクエストに対して作成されたセキュリティ・コンテキストのID (セキュリティが使用されている場合)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1H2Fyj.5"  title="原文: jersey-client-call"><code>jersey-client-call</code></span></td>
<td class=""><span class="merged" id="all.1jJemi.3"  title="原文: http.method"><code>http.method</code></span></td>
<td class=""><span class="merged" id="all.1UW370.1" title="原文 : HTTP method of the client request">クライアント・リクエストのHTTPメソッド</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1H2Fyj.6"  title="原文: jersey-client-call"><code>jersey-client-call</code></span></td>
<td class=""><span class="merged" id="all.ZQIYg.3"  title="原文: http.status_code"><code>http.status_code</code></span></td>
<td class=""><span class="merged" id="all.1RxHfD.1" title="原文 : HTTP status code of client response">クライアント・レスポンスのHTTPステータス・コード</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1H2Fyj.7"  title="原文: jersey-client-call"><code>jersey-client-call</code></span></td>
<td class=""><span class="merged" id="all.3LuH6T.3"  title="原文: http.url"><code>http.url</code></span></td>
<td class=""><span class="merged" id="all.29fXsu.1" title="原文 : Full URL of the request (such as http://localhost:8080/greet)">リクエストの完全なURL (<code><a href="http://localhost:8080/greet" id="" target="_blank" >http://localhost:8080/greet</a></code>など)</span></td>
</tr>
</tbody>
</table>
</div>

<h3 id="_traced_spans_configuration"><span class="merged" id="all.4LsH0B" title="原文 : Traced spans configuration">トレースされたスパン構成</span></h3>
<div class="section">
<p><span class="merged" id="all.29EKhI.spl1" title="原文 : Each component and its spans can be configured using Config.">各コンポーネントとそのスパンは、Configを使用して構成できます。</span> <span class="merged" id="all.29EKhI.spl2" title="原文 : The traced configuration has the following layers:">トレースされる構成には、次のレイヤーがあります:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2yOt2E" title="原文 : TracingConfig - the overall configuration of traced components of Helidon"><code>TracingConfig</code> - Helidonのトレース対象コンポーネントの全体的な構成</span></p>

</li>
<li>
<p><span class="merged" id="all.3Lv4jb" title="原文 : ComponentTracingConfig - a component of Helidon that traces spans (such as web-server, security, jax-rs)"><code>ComponentTracingConfig</code> - スパンをトレースするHelidonのコンポーネント(<code>web-server</code>, <code>security</code>, <code>jax-rs</code>など)</span></p>

</li>
<li>
<p><span class="merged" id="all.2TzpmC" title="原文 : SpanTracingConfig - a single traced span within a component (such as security:atn)"><code>SpanTracingConfig</code> - コンポーネント内でトレースされる単一のスパン(<code>security:atn</code>など)</span></p>

</li>
<li>
<p><span class="merged" id="all.1v5W8k" title="原文 : SpanLogTracingConfig - a single log event on a span (such as security.user in span security:atn)"><code>SpanLogTracingConfig</code> - スパン上の単一のログ・イベント(span <code>security:atn</code>内の<code>security.user</code>など)</span></p>

</li>
</ul>
<p><span class="merged" id="all.3WXQ1E.spl1" title="原文 : The components using tracing configuration use the TracingConfigUtil.">トレース構成を使用するコンポーネントは、<code>TracingConfigUtil</code>を使用します。</span> <span class="merged" id="all.3WXQ1E.spl2" title="原文 : This uses the io.helidon.common.Context to retrieve current configuration.">これは、<code>io.helidon.common.Context</code>を使用して現在の構成を取得します。</span> </p>


<h4 id="_configuration_using_builder"><span class="merged" id="all.3q8CRD" title="原文 : Configuration using builder">ビルダーを使用した構成</span></h4>
<div class="section">
<p><span class="merged" id="all.FjFG9" title="原文 : Builder approach, example that disables a single span log event:">ビルダー・アプローチ、単一のスパン・ログ・イベントを無効にする例:</span></p>

<markup
lang="java"
title="Configure tracing using a builder"
>TracingConfig.builder()
     .addComponent(ComponentTracingConfig.builder("web-server")
             .addSpan(SpanTracingConfig.builder("HTTP Request")
                     .addSpanLog(SpanLogTracingConfig.builder("content-write").enabled(false).build())
                     .build())
             .build())
     .build()</markup>

</div>

<h4 id="_configuration_using_helidon_config"><span class="merged" id="all.3QbNDo.2" title="原文 : Configuration using Helidon Config">Helidon構成を使用した構成</span></h4>
<div class="section">
<p><span class="merged" id="all.yzxC0" title="原文 : Tracing configuration can be defined in a config file.">トレース構成は、構成ファイルで定義できます。</span></p>

<markup
lang="yaml"
title="Tracing configuration"
>tracing:
    components:
      web-server:
        spans:
          - name: "HTTP Request"
            logs:
              - name: "content-write"
                enabled: false</markup>

<markup
lang="java"
title="Use the configuration in web server"
>routing.register(WebTracingConfig.create(config.get("tracing")));</markup>

</div>

<h4 id="_path_based_configuration_in_helidon_web_server"><span class="merged" id="all.2iVpNZ.1" title="原文 : Path based configuration in Helidon Web Server">Helidon Webサーバーのパス・ベースの構成</span></h4>
<div class="section">
<p><span class="merged" id="all.3iUj94.1" title="原文 : For Web Server we have a path based support for configuring tracing, in addition to the configuration described above.">Webサーバーの場合、前述の構成に加えて、トレースの構成に対するパス・ベースのサポートがあります。</span></p>

<p><span class="merged" id="all.WmtAQ.1.spl1" title="原文 : Configuration of path can use any path string supported by the Web Server.">pathの構成では、Webサーバーでサポートされている任意のパス文字列を使用できます。</span> <span class="merged" id="all.WmtAQ.1.spl2" title="原文 : The configuration itself has the same possibilities as traced configuration described above.">構成自体には、前述のトレース対象の構成と同じ可能性があります。</span> <span class="merged" id="all.WmtAQ.1.spl3" title="原文 : The path specific configuration will be merged with global configuration (path is the &quot;newer&quot; configuration, global is the &quot;older&quot;)">パス固有の構成はグローバル構成とマージされます(パスは新しい構成、グローバルは古い構成)</span> </p>

<markup
lang="yaml"
title="Configuration in YAML"
>tracing:
  paths:
    - path: "/favicon.ico"
      enabled: false
    - path: "/metrics"
      enabled: false
    - path: "/health"
      enabled: false
    - path: "/greet"
      components:
        web-server:
          spans:
          - name: "content-read"
            new-name: "read"
            enabled: false</markup>

<markup
lang="java"
title="Configuration with Web Server"
>routingBuilder.register(WebTracingConfig.create(config.get("tracing"));</markup>

<markup
lang="java"
title="Configuration with Web Server using a builder"
>routingBuilder.register(WebTracingConfig.builder()
    .addPathConfig(PathTracingConfig.builder()
        .path("/metrics")
        .tracingConfig(TracingConfig.DISABLED)
        .build();
    .build());</markup>

</div>

<h4 id="_renaming_top_level_span_using_request_properties"><span class="merged" id="all.43maJP.1" title="原文 : Renaming top level span using request properties">リクエスト・プロパティを使用したトップ・レベル・スパンの名前変更</span></h4>
<div class="section">
<p><span class="merged" id="all.2pVzs9.1" title="原文 : To have a nicer overview in search pane of a tracer, you can customize the top-level span name using configuration.">トレーサの検索ペインの概要をよく理解するために、構成を使用してトップレベルのスパン名をカスタマイズできます。</span></p>

<p><span class="merged" id="all.2apT5L.6"  title="原文:: Example:">例:</span></p>

<markup
lang="yaml"
title="Configuration in YAML"
>tracing:
  components:
    web-server:
      spans:
      - name: "HTTP Request"
        new-name: "HTTP %1$s %2$s"</markup>

<p><span class="merged" id="all.2V5xJi.1" title="原文 : This is supported ONLY for the span named &quot;HTTP Request&quot; on component &quot;web-server&quot;.">これは、コンポーネント"web-server"の"HTTP Request"という名前のスパンでのみサポートされます。</span></p>

<p><span class="merged" id="all.9iX98.1" title="原文 : Parameters provided:">指定されたパラメータ:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1a7cSx.1" title="原文 : Method - HTTP method">メソッド - HTTPメソッド</span>

</li>
<li>
<span class="merged" id="all.2tHLMG.1" title="原文 : Path - path of the request (such as &apos;/greet&apos;)">パス - リクエストのパス('/greet'など)</span>

</li>
<li>
<span class="merged" id="all.3O0QND.1" title="原文 : Query - query of the request (may be null)">問合せ - リクエストの問合せ(nullの可能性があります)</span>

</li>
</ol>
</div>
</div>
</div>
</doc-view>
