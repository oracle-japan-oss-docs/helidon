<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.76"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.74" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.54" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.51" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.41" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.30" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.1KNP9q.1" title="原文 : Jaeger Tracing"><router-link @click.native="this.scrollFix('#jaeger-tracing')" to="#jaeger-tracing">Jaegerトレース</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.muuG6.1" title="原文 : Zipkin Tracing"><router-link @click.native="this.scrollFix('#zipkin-tracing')" to="#zipkin-tracing">Zipkinトレース</router-link></span></p>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.27" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.98"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.3c2I1I.spl1" title="原文 : Distributed tracing is a critical feature of micro-service based applications, since it traces workflow both within a service and across multiple services.">分散トレースは、サービス内と複数のサービス間の両方でワークフローをトレースするため、マイクロサービス・ベースのアプリケーションの重要な機能です。</span> <span class="merged" id="all.3c2I1I.spl2" title="原文 : This provides insight to sequence and timing data for specific blocks of work, which helps you identify performance and operational issues.">これにより、特定の作業ブロックのデータを順序付けおよびタイミング化するための洞察が得られ、パフォーマンスおよび操作上の問題を識別するのに役立ちます。</span> <span class="merged" id="all.3c2I1I.spl3" title="原文 : Helidon includes support for distributed tracing through its own API, backed by either through the OpenTelemetry API, or by OpenTracing API.">Helidonには、<a href="https://opentelemetry.io/docs/instrumentation/js/api/tracing/" target="_blank">OpenTelemetry API</a>または<a href="https://opentracing.io" target="_blank">OpenTracing API</a>によってサポートされる、独自のAPIによる分散トレースのサポートが含まれています。</span> <span class="merged" id="all.3c2I1I.spl4" title="原文 : Tracing is integrated with WebServer and Security.">トレースは、WebServerおよびセキュリティと統合されています。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.68"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.3QL2Qr" title="原文 : To enable Helidon Tracing add the following dependency to your project’s pom.xml (see Managing Dependencies).">Helidonトレースを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing&lt;/artifactId&gt;    <span class="conum" data-value="1" />
&lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;io.helidon.webserver.observe&lt;/groupId&gt;
        &lt;artifactId&gt;helidon-webserver-observe-tracing&lt;/artifactId&gt; <span class="conum" data-value="2" />
    &lt;/dependency&gt;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.o3EYn.1" title="原文 : Helidon tracing dependency.">Helidonトレース依存関係。</span></li>
<li data-value="2"><span class="merged" id="all.3gUxYH.1" title="原文 : Observability dependencies for tracing.">トレースの可観測性の依存関係。</span></li>
</ul>

<p><span class="merged" id="all.3O4YKN.1" title="原文 : For further processing of the tracing data, different providers are used.">トレース・データをさらに処理するために、異なるプロバイダが使用されます。</span></p>

<p><span class="merged" id="all.Lz16Q.1" title="原文 : For Jaeger:">Jaegerの場合:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing-providers-jaeger&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.2jeFZa.1" title="原文 : For Zipkin:">Zipkinの場合:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing-providers-zipkin&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.1AG2Gq.1" title="原文 : For OpenTelemetry:">OpenTelemetryの場合:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing-providers-opentelemetry&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.2KYWX7.1" title="原文 : For OpenTracing:">OpenTracingの場合:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing-providers-opentracing&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.70"  title="原文:: Usage">使用</span></h2>
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
title="Configuring <code>Tracer</code>"
>Tracer tracer = TracerBuilder.create("helidon") <span class="conum" data-value="1" />
                .build();

WebServer.builder()
        .addFeature(ObserveFeature.builder()
                            .addObserver(TracingObserver.create(tracer)) <span class="conum" data-value="2" />
                            .build())
        ...
        .build()
        .start();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2NfzIC" title="原文 : Create a Tracer."><code>Tracer</code>を作成します。</span></li>
<li data-value="2"><span class="merged" id="all.3ElsAL.2" title="原文 : Add an observability feature using the created Tracer.">作成した<code>Tracer</code>を使用して、可観測性機能を追加します。</span></li>
</ul>

</div>


<h3 id="_creating_custom_spans"><span class="merged" id="all.1p5Kxx" title="原文 : Creating Custom Spans">カスタム・スパンの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.2lvkq2" title="原文 : To create a custom span from tracer:">トレーサからカスタム・スパンを作成するには:</span></p>

<markup
lang="java"

>Span span = tracer.spanBuilder("name")  <span class="conum" data-value="1" />
        .tag("key", "value")
        .start();

try (...){                              <span class="conum" data-value="2" />
    //do some work
    span.end();
} catch (Throwable t) {                 <span class="conum" data-value="3" />
    span.end(t);
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4BsAnt" title="原文 : Create span from tracer.">トレーサからスパンを作成します。</span></li>
<li data-value="2"><span class="merged" id="all.1u5v0b" title="原文 : Do some work and end span.">仕事をして、終盤。</span></li>
<li data-value="3"><span class="merged" id="all.2UrA3C" title="原文 : End span with exception.">例外付きでスパンを終了します。</span></li>
</ul>

</div>

</div>


<h2 id="_helidon_spans"><span class="merged" id="all.2ishN9" title="原文 : Helidon Spans">Helidonスパン</span></h2>
<div class="section">

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
<th><span class="merged" id="all.20ls8M.173"  title="原文:: description">説明</span></th>
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
<td class=""><span class="merged" id="all.dgolt.1"  title="原文: content-read"><code>content-read</code></span></td>
<td class=""><span class="merged" id="all.2lHDQn.1" title="原文 : Span for reading the request entity">リクエスト・エンティティの読取り用スパン</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1PNGMG.5"  title="原文: web-server"><code>web-server</code></span></td>
<td class=""><span class="merged" id="all.8DrtF.1"  title="原文: content-write"><code>content-write</code></span></td>
<td class=""><span class="merged" id="all.3H7dde.1" title="原文 : Span for writing the response entity">レスポンス・エンティティの書込み用スパン</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2d2KCa.9"  title="原文: security"><code>security</code></span></td>
<td class=""><span class="merged" id="all.2d2KCa.10"  title="原文: security"><code>security</code></span></td>
<td class=""><span class="merged" id="all.253mTV.1" title="原文 : Processing of request security">リクエスト・セキュリティの処理</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2d2KCa.11"  title="原文: security"><code>security</code></span></td>
<td class=""><span class="merged" id="all.9wBkt.4"  title="原文: security:atn"><code>security:atn</code></span></td>
<td class=""><span class="merged" id="all.2MQnH5.1" title="原文 : Span for request authentication">リクエスト認証用スパン</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2d2KCa.12"  title="原文: security"><code>security</code></span></td>
<td class=""><span class="merged" id="all.4Oidt8.2"  title="原文: security:atz"><code>security:atz</code></span></td>
<td class=""><span class="merged" id="all.2Udo2s.1" title="原文 : Span for request authorization">リクエスト認可のスパン</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2d2KCa.13"  title="原文: security"><code>security</code></span></td>
<td class=""><span class="merged" id="all.4cGZav.1"  title="原文: security:response"><code>security:response</code></span></td>
<td class=""><span class="merged" id="all.6Jz0K.1" title="原文 : Processing of response security">レスポンス・セキュリティの処理</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2d2KCa.14"  title="原文: security"><code>security</code></span></td>
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
<col style="width: 14.286%;">
<col style="width: 14.286%;">
<col style="width: 7.143%;">
<col style="width: 7.143%;">
<col style="width: 57.143%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.df84B.4" title="原文 : span name">スパン名</span></th>
<th><span class="merged" id="all.xxjaf.1"  title="原文:: log name">ログ名</span></th>
<th><span class="merged" id="all.1nmObm.1"  title="原文:: configurable">構成可</span></th>
<th><span class="merged" id="all.17KgId.1" title="原文 : enabled by default">デフォルトで有効</span></th>
<th><span class="merged" id="all.20ls8M.174"  title="原文:: description">説明</span></th>
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
<td class=""><span class="merged" id="all.2d2KCa.15"  title="原文: security"><code>security</code></span></td>
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
<th><span class="merged" id="all.20ls8M.175"  title="原文:: description">説明</span></th>
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
<td class=""><span class="merged" id="all.2d2KCa.16"  title="原文: security"><code>security</code></span></td>
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


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.47"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.1Ijzw5" title="原文 : The following configuration should be supported by all tracer implementations (if feasible)">次の構成は、すべてのトレーサ実装でサポートする必要があります(可能な場合)</span></p>

<p><span class="merged" id="all.2ssPDD.4" title="原文 : Jaeger tracer configuration.">Jaegerトレーサの構成。</span></p>

<p><span class="merged" id="all.1jilXd.4" title="原文 : Type: io.helidon.tracing.Tracer">タイプ: <a href="/apidocs/io.helidon.tracing/io/helidon/tracing/Tracer.html" target="_blank">io.helidon.tracing.Tracer</a></span></p>

<p><span class="merged" id="all.2QFPN.7" title="原文 : This is a standalone configuration type, prefix from configuration root: tracing">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>tracing</code></span></p>

</div>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.150"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.142" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.166"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.159"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.166"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.176"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1OA6Nx.4"  title="原文: client-cert-pem"><code>client-cert-pem</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.43" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4HtnV9.4" title="原文 : Certificate of client in PEM format.">PEM形式のクライアントの証明書。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.aCrpT.4"  title="原文: exporter-timeout"><code>exporter-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.57"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2kRnHs.8"  title="原文: PT10S"><code>PT10S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3DyZwu.4" title="原文 : Timeout of exporter requests.">エクスポート業者リクエストのタイムアウトです。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3xwTZs.4"  title="原文: max-export-batch-size"><code>max-export-batch-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.94"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4UoPlE.7"  title="原文: 512"><code>512</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N6DKI.4" title="原文 : Maximum Export Batch Size of exporter requests.">エクスポータ・リクエストの最大エクスポート・バッチ・サイズ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1g1XqJ.4"  title="原文: max-queue-size"><code>max-queue-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.95"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2lp3HC.5"  title="原文: 2048"><code>2048</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3fgwzo.4" title="原文 : Maximum Queue Size of exporter requests.">エクスポータ・リクエストの最大キュー・サイズ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4ALScM.4"  title="原文: private-key-pem"><code>private-key-pem</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.44" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.32EJFE.4" title="原文 : Private key in PEM format.">PEM形式の秘密キー。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.oqYOx.4"  title="原文: propagation"><code>propagation</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Rns1f.4" title="原文 : PropagationFormat[] (B3, B3_SINGLE, JAEGER, W3C)">PropagationFormat[] (B3, B3_SINGLE, JAEGER, W3C)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2aCowQ.4"  title="原文: JAEGER"><code>JAEGER</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.S1F0x.4" title="原文 : Add propagation format to use.">使用する伝播形式を追加します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3N9ohQ.4"  title="原文: sampler-param"><code>sampler-param</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ets8I.4"  title="原文:: Number">数値</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.27cMqo.7"  title="原文: 1"><code>1</code></span></td>
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
<td class=""><span class="merged" id="all.38fsEi.4"  title="原文: schedule-delay"><code>schedule-delay</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.58"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.432omB.6"  title="原文: PT5S"><code>PT5S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3dGHek.4" title="原文 : Schedule Delay of exporter requests.">エクスポータ・リクエストのスケジュール遅延。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.DBcO6.4"  title="原文: span-processor-type"><code>span-processor-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.114j9D.4" title="原文 : SpanProcessorType (SIMPLE, BATCH)">SpanProcessorType (SIMPLE, BATCH)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42l5bd.4"  title="原文: batch"><code>batch</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1i4ElM.4" title="原文 : Span Processor type used.">使用されるスパン・プロセッサ・タイプ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1eW5Cx.4"  title="原文: trusted-cert-pem"><code>trusted-cert-pem</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.45" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></p>

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


<h3 id="_traced_spans_configuration"><span class="merged" id="all.2Ca090" title="原文 : Traced Spans Configuration">トレース・スパン構成</span></h3>
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


<h4 id="_configuration_using_builder"><span class="merged" id="all.3AxQ58" title="原文 : Configuration Using Builder">Builderを使用した構成</span></h4>
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
>Tracer tracer = TracerBuilder.create(config.get("tracing")).build();    <span class="conum" data-value="1" />

server.addFeature(ObserveFeature.builder()
                            .addObserver(TracingObserver.create(tracer)) <span class="conum" data-value="2" />
                            .build())</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4e33Lr" title="原文 : Create Tracer using TracerBuilder from configuration.">構成から<code>TracerBuilder</code>を使用して<code>Tracer</code>を作成します。</span></li>
<li data-value="2"><span class="merged" id="all.1MxkTn" title="原文 : Add the Tracer as an observability feature.">可観測性機能として<code>Tracer</code>を追加します。</span></li>
</ul>

</div>


<h4 id="_path_based_configuration_in_helidon_webserver"><span class="merged" id="all.Kl7Wo" title="原文 : Path-based Configuration in Helidon WebServer">Helidon WebServerのパスベースの構成</span></h4>
<div class="section">
<p><span class="merged" id="all.3ZdAyS" title="原文 : For Web Server we have path-based support for configuring tracing, in addition to the configuration described above.">Webサーバーでは、前述の構成に加えて、トレースを構成するためのパスベースのサポートがあります。</span></p>

<p><span class="merged" id="all.gdDrn.spl1" title="原文 : Configuration of path can use any path string supported by the WebServer.">パスの構成では、WebServerでサポートされている任意のパス文字列を使用できます。</span> <span class="merged" id="all.gdDrn.spl2" title="原文 : The configuration itself has the same possibilities as traced configuration described above.">構成自体には、前述のトレース対象の構成と同じ可能性があります。</span> <span class="merged" id="all.gdDrn.spl3" title="原文 : The path-specific configuration will be merged with global configuration (path is the &quot;newer&quot; configuration, global is the &quot;older&quot;)">パス固有の構成は、グローバル構成とマージされます(パスは「新しい」構成、グローバルは「古い」構成)</span> </p>

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
>Tracer tracer = TracerBuilder.create(config.get("tracing")).build();    <span class="conum" data-value="1" />

server.addFeature(ObserveFeature.builder()
                            .addObserver(TracingObserver.create(tracer)) <span class="conum" data-value="2" />
                            .build())</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4e33Lr.1" title="原文 : Create Tracer using TracerBuilder from configuration.">構成から<code>TracerBuilder</code>を使用して<code>Tracer</code>を作成します。</span></li>
<li data-value="2"><span class="merged" id="all.1MxkTn.1" title="原文 : Add the Tracer as an observability feature.">可観測性機能として<code>Tracer</code>を追加します。</span></li>
</ul>

</div>


<h4 id="_renaming_top_level_span_using_request_properties"><span class="merged" id="all.43maJP.1" title="原文 : Renaming top level span using request properties">リクエスト・プロパティを使用したトップ・レベル・スパンの名前変更</span></h4>
<div class="section">
<p><span class="merged" id="all.2pVzs9.1" title="原文 : To have a nicer overview in search pane of a tracer, you can customize the top-level span name using configuration.">トレーサの検索ペインの概要をよく理解するために、構成を使用してトップレベルのスパン名をカスタマイズできます。</span></p>

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


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.34"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">

<h3 id="_webclient_span_propagation"><span class="merged" id="all.2uqWUT" title="原文 : WebClient Span Propagation">WebClientスパン伝播</span></h3>
<div class="section">
<p><span class="merged" id="all.4bumSi.spl1" title="原文 : Span propagation is supported with Helidon WebClient.">スパン伝播は、Helidon WebClientでサポートされています。</span> <span class="merged" id="all.4bumSi.spl2" title="原文 : Tracing propagation is automatic as long as the current span context is available in Helidon Context (which is automatic when running within a WebServer request).">Helidonコンテキストで現在のスパン・コンテキストが使用可能なかぎり、トレース伝播は自動的に行われます(これは、WebServerリクエスト内で実行するときに自動です)。</span> </p>

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

String response = client.get()
    .uri(uri)
    .request(String.class);</markup>

</div>


<h3 id="jaeger-tracing"><span class="merged" id="all.15pDPD.1"  title="原文:: Jaeger Tracing">Jaegerトレース</span></h3>
<div class="section">
<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing-providers-jaeger&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

</div>


<h2 id="_configuring_jaeger"><span class="merged" id="all.4Q7AwN.1" title="原文 : Configuring Jaeger">Jaegerの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.2ssPDD.5" title="原文 : Jaeger tracer configuration.">Jaegerトレーサの構成。</span></p>

<p><span class="merged" id="all.1jilXd.5" title="原文 : Type: io.helidon.tracing.Tracer">タイプ: <a href="/apidocs/io.helidon.tracing/io/helidon/tracing/Tracer.html" target="_blank">io.helidon.tracing.Tracer</a></span></p>

<p><span class="merged" id="all.2QFPN.8" title="原文 : This is a standalone configuration type, prefix from configuration root: tracing">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>tracing</code></span></p>

</div>


<h2 id="_configuration_options_2"><span class="merged" id="all.3SKgM1.151"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.143" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.167"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.160"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.167"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.177"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1OA6Nx.5"  title="原文: client-cert-pem"><code>client-cert-pem</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.46" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4HtnV9.5" title="原文 : Certificate of client in PEM format.">PEM形式のクライアントの証明書。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.aCrpT.5"  title="原文: exporter-timeout"><code>exporter-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.59"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2kRnHs.9"  title="原文: PT10S"><code>PT10S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3DyZwu.5" title="原文 : Timeout of exporter requests.">エクスポート業者リクエストのタイムアウトです。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3xwTZs.5"  title="原文: max-export-batch-size"><code>max-export-batch-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.96"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4UoPlE.8"  title="原文: 512"><code>512</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N6DKI.5" title="原文 : Maximum Export Batch Size of exporter requests.">エクスポータ・リクエストの最大エクスポート・バッチ・サイズ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1g1XqJ.5"  title="原文: max-queue-size"><code>max-queue-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.97"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2lp3HC.6"  title="原文: 2048"><code>2048</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3fgwzo.5" title="原文 : Maximum Queue Size of exporter requests.">エクスポータ・リクエストの最大キュー・サイズ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4ALScM.5"  title="原文: private-key-pem"><code>private-key-pem</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.47" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.32EJFE.5" title="原文 : Private key in PEM format.">PEM形式の秘密キー。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.oqYOx.5"  title="原文: propagation"><code>propagation</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Rns1f.5" title="原文 : PropagationFormat[] (B3, B3_SINGLE, JAEGER, W3C)">PropagationFormat[] (B3, B3_SINGLE, JAEGER, W3C)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2aCowQ.5"  title="原文: JAEGER"><code>JAEGER</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.S1F0x.5" title="原文 : Add propagation format to use.">使用する伝播形式を追加します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3N9ohQ.5"  title="原文: sampler-param"><code>sampler-param</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ets8I.5"  title="原文:: Number">数値</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.27cMqo.8"  title="原文: 1"><code>1</code></span></td>
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
<td class=""><span class="merged" id="all.38fsEi.5"  title="原文: schedule-delay"><code>schedule-delay</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.60"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.432omB.7"  title="原文: PT5S"><code>PT5S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3dGHek.5" title="原文 : Schedule Delay of exporter requests.">エクスポータ・リクエストのスケジュール遅延。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.DBcO6.5"  title="原文: span-processor-type"><code>span-processor-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.114j9D.5" title="原文 : SpanProcessorType (SIMPLE, BATCH)">SpanProcessorType (SIMPLE, BATCH)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42l5bd.5"  title="原文: batch"><code>batch</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1i4ElM.5" title="原文 : Span Processor type used.">使用されるスパン・プロセッサ・タイプ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1eW5Cx.5"  title="原文: trusted-cert-pem"><code>trusted-cert-pem</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.48" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></p>

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


<h3 id="zipkin-tracing"><span class="merged" id="all.3gf1D4.1" title="原文 : Zipkin Tracing">Zipkinトレース</span></h3>
<div class="section">
<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing-providers-zipkin&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

</div>


<h2 id="_configuring_zipkin"><span class="merged" id="all.NQtxT.1" title="原文 : Configuring Zipkin">Zipkinの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.3AC9OM.3" title="原文 : Zipkin tracer configuration">Zipkinトレーサ構成</span></p>

<p><span class="merged" id="all.30kkWx.3" title="原文 : Type: io.opentracing.Tracer">タイプ: io.opentracing.Tracer</span></p>

<p><span class="merged" id="all.2QFPN.9" title="原文 : This is a standalone configuration type, prefix from configuration root: tracing">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>tracing</code></span></p>

</div>


<h2 id="_configuration_options_3"><span class="merged" id="all.3SKgM1.152"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.144" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.168"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.161"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.168"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.178"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.lFQ35.3"  title="原文: api-version"><code>api-version</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4XHmdW.3" title="原文 : Version (V1, V2)">バージョン(V1、V2)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2cXfib.3"  title="原文: V2"><code>V2</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3dRcyx.3.spl1" title="原文 : Version of Zipkin API to use.">使用するZipkin APIのバージョン。</span> <span class="merged" id="all.3dRcyx.3.spl2" title="原文 : Defaults to Version#V2.">デフォルトはVersion#V2です。</span> </p>

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



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="Zipkinの例" src="images/webserver/zipkin.png" /> </v-card-text> </v-card>


</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.28"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1IRPV1.1" title="原文 : Opentracing Project"><a href="https://opentracing.io/" target="_blank">オープン・トレーシング・プロジェクト</a></span></p>

</li>
<li>
<p><span class="merged" id="all.1GiraL.1" title="原文 : OpenTelemetry API"><a href="https://opentelemetry.io/docs/instrumentation/js/api/tracing/" target="_blank">OpenTelemetry API</a></span></p>

</li>
<li>
<p><span class="merged" id="all.1GiraL.2" title="原文 : OpenTelemetry API"><a href="https://opentelemetry.io/docs/instrumentation/js/api/tracing/" target="_blank">OpenTelemetry API</a></span></p>

</li>
</ul>

</div>

</doc-view>
