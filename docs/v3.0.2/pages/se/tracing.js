<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.65"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.62" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.47" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.43" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.36" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.25" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.p6HCt" title="原文 : Span Propagation"><router-link @click.native="this.scrollFix('#_span_propagation')" to="#_span_propagation">スパン伝播</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.muuG6.1" title="原文 : Zipkin Tracing"><router-link @click.native="this.scrollFix('#zipkin-tracing')" to="#zipkin-tracing">Zipkinトレース</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1KNP9q.1" title="原文 : Jaeger Tracing"><router-link @click.native="this.scrollFix('#jaeger-tracing')" to="#jaeger-tracing">Jaegerトレース</router-link></span></p>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.23" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.86"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.3ysatN.spl1" title="原文 : Distributed tracing is a critical feature of micro-service based applications, since it traces workflow both within a service and across multiple services.">分散トレースは、サービス内と複数のサービス間の両方でワークフローをトレースするため、マイクロサービス・ベースのアプリケーションの重要な機能です。</span> <span class="merged" id="all.3ysatN.spl2" title="原文 : This provides insight to sequence and timing data for specific blocks of work, which helps you identify performance and operational issues.">これにより、特定の作業ブロックのデータを順序付けおよびタイミング化するための洞察が得られ、パフォーマンスおよび操作上の問題を識別するのに役立ちます。</span> <span class="merged" id="all.3ysatN.spl3" title="原文 : Helidon includes support for distributed tracing through its own API, backed by either through the OpenTelemetry API, or by OpenTracing API.">Helidonには、<a href="https://opentelemetry.io/docs/instrumentation/js/api/tracing/" target="_blank">OpenTelemetry API</a>または<a href="https://opentracing.io" target="_blank">OpenTracing API</a>によってサポートされる、独自のAPIによる分散トレースのサポートが含まれています。</span> <span class="merged" id="all.3ysatN.spl4" title="原文 : Tracing is integrated with WebServer, gRPC Server, and Security.">トレースは、WebServer、gRPCサーバーおよびセキュリティと統合されています。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.59"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.3QL2Qr" title="原文 : To enable Helidon Tracing add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">Helidonトレースを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.63"  title="原文:: Usage">使用方法</span></h2>
<div class="section">
<p><span class="merged" id="all.3VvilM.2" title="原文 : This section explains a few concepts that you need to understand before you get started with tracing.">この項では、トレースを開始する前に理解しておく必要がある概念について説明します。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.34nTNg.2" title="原文 : In the context of this document, a service is synonymous with an application.">このドキュメントのコンテキストでは、<em>「サービス」</em>はアプリケーションと同義です。</span></p>

</li>
<li>
<p><span class="merged" id="all.CIY3X.2.spl1" title="原文 : A span is the basic unit of work done within a single service, on a single host."><em>「スパン」</em>は、単一のホスト上の単一のサービス内で実行される基本的な作業単位です。</span> <span class="merged" id="all.CIY3X.2.spl2" title="原文 : Every span has a name, starting timestamp, and duration.">すべてのスパンには、名前、開始タイムスタンプおよび期間があります。</span> <span class="merged" id="all.CIY3X.2.spl3" title="原文 : For example, the work done by a REST endpoint is a span.">たとえば、RESTエンドポイントによって実行される作業はスパンです。</span> <span class="merged" id="all.CIY3X.2.spl4" title="原文 : A span is associated to a single service, but its descendants can belong to different services and hosts.">スパンは単一のサービスに関連付けられますが、その子孫は異なるサービスおよびホストに属することができます。</span> </p>

</li>
<li>
<p><span class="merged" id="all.3rpyz1.spl1" title="原文 : A trace contains a collection of spans from one or more services, running on one or more hosts."><em>「トレース」</em>には、1つ以上のホストで実行されている、1つ以上のサービスからのスパンのコレクションが含まれています。</span> <span class="merged" id="all.3rpyz1.spl2" title="原文 : For example, if you trace a service endpoint that calls another service, then the trace would contain spans from both services.">たとえば、別のサービスを呼び出すサービス・エンドポイントをトレースする場合、トレースには両方のサービスのスパンが含まれます。</span> <span class="merged" id="all.3rpyz1.spl3" title="原文 : Within a trace, spans are organized as a directed acyclic graph (DAG) and can belong to multiple services, running on multiple hosts.">トレース内では、スパンはDirected Acyclic Graph (DAG)として編成され、複数のホストで実行されている複数のサービスに属することができます。</span> </p>

</li>
</ul>

<p><span class="merged" id="all.2rTvX5.spl1" title="原文 : Support for specific tracers is abstracted.">特定のトレーサのサポートは抽象化されます。</span> <span class="merged" id="all.2rTvX5.spl2" title="原文 : Your application can depend on the Helidon abstraction layer and provide a specific tracer implementation as a Java ServiceLoader service.">アプリケーションはHelidon抽象化レイヤーに依存し、特定のトレーサ実装をJava <code>ServiceLoader</code>サービスとして提供できます。</span> <span class="merged" id="all.2rTvX5.spl3" title="原文 : Helidon provides such an implementation for:">Helidonでは、次のような実装が提供されます:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4VVcYf" title="原文 : OpenTracing tracers, either using the GlobalTracer, provider resolver approach, or explicitly using Zipkin tracer">OpenTracingトレーサ。<code>GlobalTracer</code>を使用するか、プロバイダ・リゾルバ・アプローチを使用するか、Zipkinトレーサを明示的に使用</span></p>

</li>
<li>
<p><span class="merged" id="all.4HRYKA" title="原文 : OpenTelemetry tracers, either using the global OpenTelemetry instance, or explicitly using Jaeger tracer">OpenTelemetryトレーサ。グローバルOpenTelemetryインスタンスを使用するか、またはJaegerトレーサを明示的に使用</span></p>

</li>
</ul>


<h3 id="_setup_webserver"><span class="merged" id="all.1LSBxi" title="原文 : Setup WebServer">WebServerの設定</span></h3>
<div class="section">
<markup
lang="java"
title="Configuring OpenTracing <code>Tracer</code>"
>WebServer.builder()
         .tracer(TracerBuilder.create("my-application")                    <span class="conum" data-value="1" />
                       .collectorUri(URI.create("http://10.0.0.18:9411"))  <span class="conum" data-value="2" />
                       .build())
         .build()</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.42p4Yc" title="原文 : The name of the application (service) to associate with the tracing events">トレース・イベントに関連付けるアプリケーション(サービス)の名前</span></li>
<li data-value="2"><span class="merged" id="all.26uiOi" title="原文 : The endpoint for tracing events, specific to the tracer used, usually loaded from Config">使用されるトレーサに固有のイベントをトレースするためのエンドポイント。通常はConfigからロードされます</span></li>
</ul>

</div>


<h3 id="_setup_grpc_server"><span class="merged" id="all.48C2cN" title="原文 : Setup gRPC Server">gRPCサーバーの設定</span></h3>
<div class="section">
<markup
lang="java"
title="Configuring <code>Tracer</code>"
>Tracer tracer = TracerBuilder.create("Server")
        .collectorUri(URI.create("http://10.0.0.18:9411"))   <span class="conum" data-value="1" />
        .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.TbXqi" title="原文 : If using zipkin tracing system, the endpoint would be: http://10.0.0.18:9411/api/v2/spans">zipkinトレース・システムを使用する場合、エンドポイントは次のようになります : <code><a class="bare" href="http://10.0.0.18:9411/api/v2/spans" target="_blank">http://10.0.0.18:9411/api/v2/spans</a></code></span></li>
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


<h3 id="_creating_custom_spans"><span class="merged" id="all.3PebJZ.1" title="原文 : Creating custom spans">カスタム・スパンの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.1zBA7B" title="原文 : To create a custom span that is a child of the WebServer request:">WebServerリクエストの子であるカスタム・スパンを作成するには:</span></p>

<markup
lang="java"

>Span span = request.tracer()
        .buildSpan("my-operation")
        .asChildOf(request.spanContext())
                         .start();</markup>

</div>


<h3 id="_helidon_spans"><span class="merged" id="all.2ishN9" title="原文 : Helidon Spans">Helidonスパン</span></h3>
<div class="section">

</div>

</div>


<h2 id="_traced_spans"><span class="merged" id="all.4WqKWr.1" title="原文 : Traced spans">トレース対象スパン</span></h2>
<div class="section">
<p><span class="merged" id="all.4tR6D.1" title="原文 : The following table lists all spans traced by Helidon components:">次の表に、Helidonコンポーネントによってトレースされるすべてのスパンを示します:</span></p>


<div class="table__overflow elevation-1  flex sm10
">
<table class="datatable table">
<colgroup>
<col style="width: 25%;">
<col style="width: 25%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1M0t9D.1"  title="原文:: component">コンポーネント</span></th>
<th><span class="merged" id="all.df84B.3" title="原文 : span name">スパン名</span></th>
<th><span class="merged" id="all.20ls8M.133"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1PNGMG.3"  title="原文: web-server"><code>web-server</code></span></td>
<td class=""><span class="merged" id="all.Qb5FB.7"  title="原文: HTTP Request"><code>HTTP Request</code></span></td>
<td class=""><span class="merged" id="all.43xq2r.1" title="原文 : The overall span of the Web Server from request initiation until response Note that in Zipkin the name is replaced with jax-rs span name if jax-rs tracing is used.">リクエストの開始からレスポンスまでのWebサーバーの全体のスパン。<code>Zipkin</code>では、<code>jax-rs</code>トレースが使用されている場合、名前は<code>jax-rs</code>スパン名に置き換えられます。</span></td>
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


<div class="table__overflow elevation-1  flex sm10
">
<table class="datatable table">
<colgroup>
<col style="width: 16.667%;">
<col style="width: 16.667%;">
<col style="width: 16.667%;">
<col style="width: 16.667%;">
<col style="width: 33.334%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.df84B.4" title="原文 : span name">スパン名</span></th>
<th><span class="merged" id="all.xxjaf.1"  title="原文:: log name">ログ名</span></th>
<th><span class="merged" id="all.1nmObm.1"  title="原文:: configurable">構成可</span></th>
<th><span class="merged" id="all.17KgId.1" title="原文 : enabled by default">デフォルトで有効</span></th>
<th><span class="merged" id="all.20ls8M.134"  title="原文:: description">説明</span></th>
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


<div class="table__overflow elevation-1  flex sm10
">
<table class="datatable table">
<colgroup>
<col style="width: 25%;">
<col style="width: 25%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.df84B.5" title="原文 : span name">スパン名</span></th>
<th><span class="merged" id="all.3jGKII.1"  title="原文:: tag name">タグ名</span></th>
<th><span class="merged" id="all.20ls8M.135"  title="原文:: description">説明</span></th>
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
<td class=""><span class="merged" id="all.yunUH.1" title="原文 : Type (class) of the entity being sent (if entity is sent)">送信されるエンティティのタイプ(クラス) (エンティティが送信される場合)</span></td>
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
<td class=""><span class="merged" id="all.sncEX.1" title="原文 : Full URL of the request (such as http://localhost:8080/greet)">リクエストの完全なURL (<code><a class="bare" href="http://localhost:8080/greet" target="_blank">http://localhost:8080/greet</a></code>など)</span></td>
</tr>
</tbody>
</table>
</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.42"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.1Ijzw5" title="原文 : The following configuration should be supported by all tracer implementations (if feasible)">次の構成は、すべてのトレーサ実装でサポートする必要があります(可能な場合)</span></p>

<p><span class="merged" id="all.2ssPDD.4" title="原文 : Jaeger tracer configuration.">Jaegerトレーサの構成。</span></p>

<p><span class="merged" id="all.3Mi88u.4" title="原文 : Type: io.helidon.tracing.Tracer">タイプ: <a href="./apidocs/io.helidon.tracing/io/helidon/tracing/Tracer.html" target="_blank">io.helidon.tracing.Tracer</a></span></p>

<p><span class="merged" id="all.2QFPN.6" title="原文 : This is a standalone configuration type, prefix from configuration root: tracing">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>tracing</code></span></p>

</div>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.102"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.103" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 23.077%;">
<col style="width: 23.077%;">
<col style="width: 15.385%;">
<col style="width: 38.462%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.126"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.121"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.128"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.136"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.41AQbY.7"  title="原文: boolean-tags"><code>boolean-tags</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1c6c4Z.7" title="原文 : Map&lt;string, boolean&gt;">マップ&lt;string, boolean></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Onevj.21" title="原文 : Tracer level tags that get added to all reported spans.">すべてのレポート済スパンに追加されるトレーサ・レベル・タグ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1OA6Nx.4"  title="原文: client-cert-pem"><code>client-cert-pem</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.35" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">リソース</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4HtnV9.4" title="原文 : Certificate of client in PEM format.">PEM形式のクライアントの証明書。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48UcwL.26"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.202"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.96"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1UDpl2.7.spl1" title="原文 : When enabled, tracing will be sent.">有効にすると、トレースが送信されます。</span> <span class="merged" id="all.1UDpl2.7.spl2" title="原文 : If enabled is false, tracing should use a no-op tracer.">有効がfalseの場合、トレースではno-opトレーサを使用する必要があります。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3JKP4o.4"  title="原文: exporter-timeout-millis"><code>exporter-timeout-millis</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.20"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.280ErD.10"  title="原文: 10000"><code>10000</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3DyZwu.4" title="原文 : Timeout of exporter requests.">エクスポート業者リクエストのタイムアウトです。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Iof5A.7"  title="原文: global"><code>global</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.203"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.97"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1cswWo.7" title="原文 : When enabled, the created instance is also registered as a global tracer.">有効にすると、作成されたインスタンスはグローバル・トレーサとしても登録されます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2N9hZv.16"  title="原文: host"><code>host</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.340"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3GgJrr.7.spl1" title="原文 : Host to use to connect to tracing collector.">トレース・コレクタへの接続に使用するホスト。</span> <span class="merged" id="all.3GgJrr.7.spl2" title="原文 : Default is defined by each tracing integration.">デフォルトは、各トレース統合によって定義されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4NZGcd.7"  title="原文: int-tags"><code>int-tags</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1wOT4o.7" title="原文 : Map&lt;string, int&gt;">マップ&lt;string, int></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Onevj.22" title="原文 : Tracer level tags that get added to all reported spans.">すべてのレポート済スパンに追加されるトレーサ・レベル・タグ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3acZhn.8"  title="原文: path"><code>path</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.341"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.14knaE.7.spl1" title="原文 : Path on the collector host to use when sending data to tracing collector.">データをトレース・コレクタに送信するときに使用するコレクタ・ホストのパス。</span> <span class="merged" id="all.14knaE.7.spl2" title="原文 : Default is defined by each tracing integration.">デフォルトは、各トレース統合によって定義されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OXzp4.19"  title="原文: port"><code>port</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.77"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.D5fZx.7.spl1" title="原文 : Port to use to connect to tracing collector.">トレース・コレクタに接続するために使用するポート。</span> <span class="merged" id="all.D5fZx.7.spl2" title="原文 : Default is defined by each tracing integration.">デフォルトは、各トレース統合によって定義されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4ALScM.4"  title="原文: private-key-pem"><code>private-key-pem</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.36" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">リソース</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.32EJFE.4" title="原文 : Private key in PEM format.">PEM形式の秘密キー。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4T3cXD.7"  title="原文: protocol"><code>protocol</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.342"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3ySz9b.7.spl1" title="原文 : Protocol to use (such as http or https) to connect to tracing collector.">トレース・コレクタに接続するために使用するプロトコル(<code>http</code>や<code>https</code>など)。</span> <span class="merged" id="all.3ySz9b.7.spl2" title="原文 : Default is defined by each tracing integration.">デフォルトは、各トレース統合によって定義されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3N9ohQ.4"  title="原文: sampler-param"><code>sampler-param</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ets8I.4"  title="原文:: Number">数値</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.27cMqo.6"  title="原文: 1"><code>1</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2sLEd8.4" title="原文 : The sampler parameter (number).">samplerパラメータ(数値)。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2immXP.4"  title="原文: sampler-type"><code>sampler-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4YAOnL.4" title="原文 : SamplerType (CONSTANT, RATIO)">SamplerType (定数、比率)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3JRsgA.4"  title="原文: CONSTANT"><code>CONSTANT</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3EzQ38.4" title="原文 : Sampler type.">サンプラのタイプ。</span></p>

<markup>See &lt;a href="https://www.jaegertracing.io/docs/latest/sampling/#client-sampling-configuration"&gt;Sampler types&lt;/a&gt;.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.30hFTR.7"  title="原文: service"><code>service</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.343"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.qgBvz.7" title="原文 : Service name of the traced service.">トレースされたサービスのサービス名。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3WNvqu.11"  title="原文: tags"><code>tags</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1WdJek.11" title="原文 : Map&lt;string, string&gt;">マップ&lt;string, string></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Onevj.23" title="原文 : Tracer level tags that get added to all reported spans.">すべてのレポート済スパンに追加されるトレーサ・レベル・タグ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1eW5Cx.4"  title="原文: trusted-cert-pem"><code>trusted-cert-pem</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.37" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">リソース</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1zWYYy.4" title="原文 : Trusted certificates in PEM format.">PEM形式のトラストできる証明書。</span></p>

</doc-view>
</td>
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


<h4 id="_configuration_using_helidon_config"><span class="merged" id="all.3QbNDo" title="原文 : Configuration using Helidon Config">Helidon構成を使用した構成</span></h4>
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


<h4 id="_path_based_configuration_in_helidon_web_server"><span class="merged" id="all.2iVpNZ" title="原文 : Path based configuration in Helidon Web Server">Helidon Webサーバーのパス・ベースの構成</span></h4>
<div class="section">
<p><span class="merged" id="all.3iUj94" title="原文 : For Web Server we have a path based support for configuring tracing, in addition to the configuration described above.">Webサーバーの場合、前述の構成に加えて、トレースの構成に対するパス・ベースのサポートがあります。</span></p>

<p><span class="merged" id="all.WmtAQ.spl1" title="原文 : Configuration of path can use any path string supported by the Web Server.">pathの構成では、Webサーバーでサポートされている任意のパス文字列を使用できます。</span> <span class="merged" id="all.WmtAQ.spl2" title="原文 : The configuration itself has the same possibilities as traced configuration described above.">構成自体には、前述のトレース対象の構成と同じ可能性があります。</span> <span class="merged" id="all.WmtAQ.spl3" title="原文 : The path specific configuration will be merged with global configuration (path is the &quot;newer&quot; configuration, global is the &quot;older&quot;)">パス固有の構成はグローバル構成とマージされます(パスは新しい構成、グローバルは古い構成)</span> </p>

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
<p><span class="merged" id="all.2pVzs9" title="原文 : To have a nicer overview in search pane of a tracer, you can customize the top-level span name using configuration.">トレーサの検索ペインの概要をよく理解するために、構成を使用してトップレベルのスパン名をカスタマイズできます。</span></p>

<p><span class="merged" id="all.2apT5L.3"  title="原文:: Example:">例:</span></p>

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


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.29"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">

<h3 id="_span_propagation"><span class="merged" id="all.fI5YF" title="原文 : Span Propagation">スパン伝播</span></h3>
<div class="section">
<p><span class="merged" id="all.374sUt.spl1" title="原文 : Span propagation is supported with Helidon WebClient (and with Jersey client, though it is blocking and not suitable for reactive implementations).">スパン伝播は、Helidon WebClient (およびJerseyクライアントでは、ブロックされており、リアクティブ実装には適していません)でサポートされています。</span> <span class="merged" id="all.374sUt.spl2" title="原文 : Tracing propagation is automatic as long as the current span context is available in Helidon Context (which is automatic when running within a WebServer request).">Helidonコンテキストで現在のスパン・コンテキストが使用可能なかぎり、トレース伝播は自動的に行われます(これは、WebServerリクエスト内で実行するときに自動です)。</span> </p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webclient&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webclient&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webclient&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webclient-tracing&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<markup
lang="java"
title="Tracing propagation with Helidon WebClient"
>WebClient client = WebClient.builder()
    .addService(WebClientTracing.create())
    .build();

Single&lt;String&gt; response = client.get()
    .uri(uri)
    .request(String.class);</markup>

</div>


<h3 id="zipkin-tracing"><span class="merged" id="all.3gf1D4.1" title="原文 : Zipkin Tracing">Zipkinトレース</span></h3>
<div class="section">
<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing-zipkin&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

</div>


<h2 id="_configuring_zipkin"><span class="merged" id="all.NQtxT.1" title="原文 : Configuring Zipkin">Zipkinの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.3AC9OM.2" title="原文 : Zipkin tracer configuration">Zipkinトレーサ構成</span></p>

<p><span class="merged" id="all.30kkWx.2" title="原文 : Type: io.opentracing.Tracer">タイプ: io.opentracing.Tracer</span></p>

<p><span class="merged" id="all.2QFPN.7" title="原文 : This is a standalone configuration type, prefix from configuration root: tracing">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>tracing</code></span></p>

</div>


<h2 id="_configuration_options_2"><span class="merged" id="all.3SKgM1.103"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.104" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 23.077%;">
<col style="width: 23.077%;">
<col style="width: 15.385%;">
<col style="width: 38.462%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.127"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.122"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.129"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.137"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.lFQ35.2"  title="原文: api-version"><code>api-version</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4XHmdW.2" title="原文 : Version (V1, V2)">バージョン(V1、V2)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2cXfib.2"  title="原文: V2"><code>V2</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3dRcyx.2.spl1" title="原文 : Version of Zipkin API to use.">使用するZipkin APIのバージョン。</span> <span class="merged" id="all.3dRcyx.2.spl2" title="原文 : Defaults to Version#V2.">デフォルトはVersion#V2です。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.41AQbY.8"  title="原文: boolean-tags"><code>boolean-tags</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1c6c4Z.8" title="原文 : Map&lt;string, boolean&gt;">マップ&lt;string, boolean></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Onevj.24" title="原文 : Tracer level tags that get added to all reported spans.">すべてのレポート済スパンに追加されるトレーサ・レベル・タグ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48UcwL.27"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.204"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.98"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1UDpl2.8.spl1" title="原文 : When enabled, tracing will be sent.">有効にすると、トレースが送信されます。</span> <span class="merged" id="all.1UDpl2.8.spl2" title="原文 : If enabled is false, tracing should use a no-op tracer.">有効がfalseの場合、トレースではno-opトレーサを使用する必要があります。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Iof5A.8"  title="原文: global"><code>global</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.205"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.99"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1cswWo.8" title="原文 : When enabled, the created instance is also registered as a global tracer.">有効にすると、作成されたインスタンスはグローバル・トレーサとしても登録されます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2N9hZv.17"  title="原文: host"><code>host</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.344"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3GgJrr.8.spl1" title="原文 : Host to use to connect to tracing collector.">トレース・コレクタへの接続に使用するホスト。</span> <span class="merged" id="all.3GgJrr.8.spl2" title="原文 : Default is defined by each tracing integration.">デフォルトは、各トレース統合によって定義されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4NZGcd.8"  title="原文: int-tags"><code>int-tags</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1wOT4o.8" title="原文 : Map&lt;string, int&gt;">マップ&lt;string, int></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Onevj.25" title="原文 : Tracer level tags that get added to all reported spans.">すべてのレポート済スパンに追加されるトレーサ・レベル・タグ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3acZhn.9"  title="原文: path"><code>path</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.345"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.14knaE.8.spl1" title="原文 : Path on the collector host to use when sending data to tracing collector.">データをトレース・コレクタに送信するときに使用するコレクタ・ホストのパス。</span> <span class="merged" id="all.14knaE.8.spl2" title="原文 : Default is defined by each tracing integration.">デフォルトは、各トレース統合によって定義されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OXzp4.20"  title="原文: port"><code>port</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.78"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.D5fZx.8.spl1" title="原文 : Port to use to connect to tracing collector.">トレース・コレクタに接続するために使用するポート。</span> <span class="merged" id="all.D5fZx.8.spl2" title="原文 : Default is defined by each tracing integration.">デフォルトは、各トレース統合によって定義されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4T3cXD.8"  title="原文: protocol"><code>protocol</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.346"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3ySz9b.8.spl1" title="原文 : Protocol to use (such as http or https) to connect to tracing collector.">トレース・コレクタに接続するために使用するプロトコル(<code>http</code>や<code>https</code>など)。</span> <span class="merged" id="all.3ySz9b.8.spl2" title="原文 : Default is defined by each tracing integration.">デフォルトは、各トレース統合によって定義されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.30hFTR.8"  title="原文: service"><code>service</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.347"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.qgBvz.8" title="原文 : Service name of the traced service.">トレースされたサービスのサービス名。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3WNvqu.12"  title="原文: tags"><code>tags</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1WdJek.12" title="原文 : Map&lt;string, string&gt;">マップ&lt;string, string></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Onevj.26" title="原文 : Tracer level tags that get added to all reported spans.">すべてのレポート済スパンに追加されるトレーサ・レベル・タグ。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.4YAMMG.1" title="原文 : The following is an example of a Zipkin configuration, specified in the YAML format.">YAML形式で指定されたZipkin構成の例を次に示します。</span></p>

<markup
lang="yaml"

>tracing:
  zipkin:
    service: "helidon-service"
    protocol: "https"
    host: "zipkin"
    port: 9987
    api-version: 1
    # this is the default path for API version 2
    path: "/api/v2/spans"
    tags:
      tag1: "tag1-value"
      tag2: "tag2-value"
    boolean-tags:
      tag3: true
      tag4: false
    int-tags:
      tag5: 145
      tag6: 741</markup>

<p><span class="merged" id="all.lg6Si.1" title="原文 : Example of Zipkin trace:">Zipkinトレースの例:</span></p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="Zipkinの例" src="./images/webserver/zipkin.png" /> </v-card-text> </v-card>



<h3 id="jaeger-tracing"><span class="merged" id="all.15pDPD.1"  title="原文:: Jaeger Tracing">Jaegerトレース</span></h3>
<div class="section">
<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing-jaeger&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

</div>


<h2 id="_configuring_jaeger"><span class="merged" id="all.4Q7AwN.1" title="原文 : Configuring Jaeger">Jaegerの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.2ssPDD.5" title="原文 : Jaeger tracer configuration.">Jaegerトレーサの構成。</span></p>

<p><span class="merged" id="all.3Mi88u.5" title="原文 : Type: io.helidon.tracing.Tracer">タイプ: <a href="./apidocs/io.helidon.tracing/io/helidon/tracing/Tracer.html" target="_blank">io.helidon.tracing.Tracer</a></span></p>

<p><span class="merged" id="all.2QFPN.8" title="原文 : This is a standalone configuration type, prefix from configuration root: tracing">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>tracing</code></span></p>

</div>


<h2 id="_configuration_options_3"><span class="merged" id="all.3SKgM1.104"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.105" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 23.077%;">
<col style="width: 23.077%;">
<col style="width: 15.385%;">
<col style="width: 38.462%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.128"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.123"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.130"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.138"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.41AQbY.9"  title="原文: boolean-tags"><code>boolean-tags</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1c6c4Z.9" title="原文 : Map&lt;string, boolean&gt;">マップ&lt;string, boolean></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Onevj.27" title="原文 : Tracer level tags that get added to all reported spans.">すべてのレポート済スパンに追加されるトレーサ・レベル・タグ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1OA6Nx.5"  title="原文: client-cert-pem"><code>client-cert-pem</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.38" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">リソース</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4HtnV9.5" title="原文 : Certificate of client in PEM format.">PEM形式のクライアントの証明書。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48UcwL.28"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.206"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.100"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1UDpl2.9.spl1" title="原文 : When enabled, tracing will be sent.">有効にすると、トレースが送信されます。</span> <span class="merged" id="all.1UDpl2.9.spl2" title="原文 : If enabled is false, tracing should use a no-op tracer.">有効がfalseの場合、トレースではno-opトレーサを使用する必要があります。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3JKP4o.5"  title="原文: exporter-timeout-millis"><code>exporter-timeout-millis</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.21"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.280ErD.11"  title="原文: 10000"><code>10000</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3DyZwu.5" title="原文 : Timeout of exporter requests.">エクスポート業者リクエストのタイムアウトです。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Iof5A.9"  title="原文: global"><code>global</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.207"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.101"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1cswWo.9" title="原文 : When enabled, the created instance is also registered as a global tracer.">有効にすると、作成されたインスタンスはグローバル・トレーサとしても登録されます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2N9hZv.18"  title="原文: host"><code>host</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.348"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3GgJrr.9.spl1" title="原文 : Host to use to connect to tracing collector.">トレース・コレクタへの接続に使用するホスト。</span> <span class="merged" id="all.3GgJrr.9.spl2" title="原文 : Default is defined by each tracing integration.">デフォルトは、各トレース統合によって定義されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4NZGcd.9"  title="原文: int-tags"><code>int-tags</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1wOT4o.9" title="原文 : Map&lt;string, int&gt;">マップ&lt;string, int></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Onevj.28" title="原文 : Tracer level tags that get added to all reported spans.">すべてのレポート済スパンに追加されるトレーサ・レベル・タグ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3acZhn.10"  title="原文: path"><code>path</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.349"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.14knaE.9.spl1" title="原文 : Path on the collector host to use when sending data to tracing collector.">データをトレース・コレクタに送信するときに使用するコレクタ・ホストのパス。</span> <span class="merged" id="all.14knaE.9.spl2" title="原文 : Default is defined by each tracing integration.">デフォルトは、各トレース統合によって定義されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OXzp4.21"  title="原文: port"><code>port</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.79"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.D5fZx.9.spl1" title="原文 : Port to use to connect to tracing collector.">トレース・コレクタに接続するために使用するポート。</span> <span class="merged" id="all.D5fZx.9.spl2" title="原文 : Default is defined by each tracing integration.">デフォルトは、各トレース統合によって定義されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4ALScM.5"  title="原文: private-key-pem"><code>private-key-pem</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.39" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">リソース</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.32EJFE.5" title="原文 : Private key in PEM format.">PEM形式の秘密キー。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4T3cXD.9"  title="原文: protocol"><code>protocol</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.350"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3ySz9b.9.spl1" title="原文 : Protocol to use (such as http or https) to connect to tracing collector.">トレース・コレクタに接続するために使用するプロトコル(<code>http</code>や<code>https</code>など)。</span> <span class="merged" id="all.3ySz9b.9.spl2" title="原文 : Default is defined by each tracing integration.">デフォルトは、各トレース統合によって定義されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3N9ohQ.5"  title="原文: sampler-param"><code>sampler-param</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ets8I.5"  title="原文:: Number">数値</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.27cMqo.7"  title="原文: 1"><code>1</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2sLEd8.5" title="原文 : The sampler parameter (number).">samplerパラメータ(数値)。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2immXP.5"  title="原文: sampler-type"><code>sampler-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4YAOnL.5" title="原文 : SamplerType (CONSTANT, RATIO)">SamplerType (定数、比率)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3JRsgA.5"  title="原文: CONSTANT"><code>CONSTANT</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3EzQ38.5" title="原文 : Sampler type.">サンプラのタイプ。</span></p>

<markup>See &lt;a href="https://www.jaegertracing.io/docs/latest/sampling/#client-sampling-configuration"&gt;Sampler types&lt;/a&gt;.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.30hFTR.9"  title="原文: service"><code>service</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.351"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.qgBvz.9" title="原文 : Service name of the traced service.">トレースされたサービスのサービス名。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3WNvqu.13"  title="原文: tags"><code>tags</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1WdJek.13" title="原文 : Map&lt;string, string&gt;">マップ&lt;string, string></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Onevj.29" title="原文 : Tracer level tags that get added to all reported spans.">すべてのレポート済スパンに追加されるトレーサ・レベル・タグ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1eW5Cx.5"  title="原文: trusted-cert-pem"><code>trusted-cert-pem</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.40" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">リソース</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1zWYYy.5" title="原文 : Trusted certificates in PEM format.">PEM形式のトラストできる証明書。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.4NI3k5.1" title="原文 : The following is an example of a Jaeger configuration, specified in the YAML format.">YAML形式で指定されたJaeger構成の例を次に示します。</span></p>

<markup
lang="yaml"

>tracing:
    service: "helidon-full-http"
    protocol: "https"
    host: "jaeger"
    port: 14240</markup>


<h3 id="jaeger-tracing-metrics"><span class="merged" id="all.1jl2Qr.1" title="原文 : Jaeger Tracing Metrics">Jaegerトレース・メトリクス</span></h3>
<div class="section">
<p><span class="merged" id="all.1XX8HD.1" title="原文 : As the Jaeger Tracing section describes, you can use Jaeger tracing in your Helidon application."><router-link @click.native="this.scrollFix('#jaeger-tracing')" to="#jaeger-tracing">「Jaegerトレース」</router-link>セクションで説明するように、HelidonアプリケーションでJaegerトレースを使用できます。</span></p>

</div>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.24"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1IRPV1.1" title="原文 : Opentracing Project"><a href="https://opentracing.io/" target="_blank">オープン・トレーシング・プロジェクト</a></span></p>

</li>
<li>
<p><span class="merged" id="all.1GiraL" title="原文 : OpenTelemetry API"><a href="https://opentelemetry.io/docs/instrumentation/js/api/tracing/" target="_blank">OpenTelemetry API</a></span></p>

</li>
</ul>

</div>

</doc-view>
