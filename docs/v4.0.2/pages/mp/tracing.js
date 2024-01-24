<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.38"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.37" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.30" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.26" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.25" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.24" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.15" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.1KNP9q" title="原文 : Jaeger Tracing"><router-link @click.native="this.scrollFix('#jaeger-tracing')" to="#jaeger-tracing">Jaegerトレース</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.muuG6" title="原文 : Zipkin Tracing"><router-link @click.native="this.scrollFix('#zipkin-tracing')" to="#zipkin-tracing">Zipkinトレース</router-link></span></p>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.18" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.53"  title="原文:: Overview">概要</span></h2>
<div class="section">
<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.Q0Y4B.spl1" title="原文 : The OpenTracing Specification that MP OpenTracing is based on is no longer maintained.">MP OpenTracingが基づいているOpenTracing仕様は維持されなくなりました。</span> <span class="merged" id="all.Q0Y4B.spl2" title="原文 : The MP OpenTracing specification is no longer required by MicroProfile.">MP OpenTracingの指定は、MicroProfileでは不要になりました。</span> <span class="merged" id="all.Q0Y4B.spl3" title="原文 : This feature is marked as @Deprecated in Helidon.">この機能は、Helidonで<code>@Deprecated</code>とマークされます。</span> <span class="merged" id="all.Q0Y4B.spl4" title="原文 : The specification is Superseded by MicroProfile Telemetry specification.">指定は<a href="https://github.com/eclipse/microprofile-telemetry" target="_blank">「MicroProfileテレメトリ仕様」</a>によって置き換えられます。</span> </p>
</div>

<p><span class="merged" id="all.1Vvp0P.spl1" title="原文 : Distributed tracing is a critical feature of micro-service based applications, since it traces workflow both within a service and across multiple services.">分散トレースは、サービス内と複数のサービス間の両方でワークフローをトレースするため、マイクロサービス・ベースのアプリケーションの重要な機能です。</span> <span class="merged" id="all.1Vvp0P.spl2" title="原文 : This provides insight to sequence and timing data for specific blocks of work, which helps you identify performance and operational issues.">これにより、特定の作業ブロックのデータを順序付けおよびタイミング化するための洞察が得られ、パフォーマンスおよび操作上の問題を識別するのに役立ちます。</span> <span class="merged" id="all.1Vvp0P.spl3" title="原文 : Helidon MP includes support for distributed tracing through the OpenTracing API.">Helidon MPには、<a href="https://opentracing.io" target="_blank">OpenTracing API</a>を介した分散トレースのサポートが含まれます。</span> <span class="merged" id="all.1Vvp0P.spl4" title="原文 : Tracing is integrated with WebServer and Security.">トレースは、WebServerおよびセキュリティと統合されています。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.34"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.1tEuHV" title="原文 : To enable MicroProfile Tracing either add a dependency on the helidon-microprofile bundle or add the following dependency to your project’s pom.xml (see Managing Dependencies).">MicroProfileトレースを有効にするには、<router-link to="/mp/introduction/microprofile">helidon-microprofile bundle</router-link>に依存関係を追加するか、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.tracing&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-tracing&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.33"  title="原文:: Usage">使用</span></h2>
<div class="section">
<p><span class="merged" id="all.3VvilM.1" title="原文 : This section explains a few concepts that you need to understand before you get started with tracing.">この項では、トレースを開始する前に理解しておく必要がある概念について説明します。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.34nTNg.1" title="原文 : In the context of this document, a service is synonymous with an application.">このドキュメントのコンテキストでは、<em>「サービス」</em>はアプリケーションと同義です。</span></p>

</li>
<li>
<p><span class="merged" id="all.CIY3X.1.spl1" title="原文 : A span is the basic unit of work done within a single service, on a single host."><em>「スパン」</em>は、単一のホスト上の単一のサービス内で実行される基本的な作業単位です。</span> <span class="merged" id="all.CIY3X.1.spl2" title="原文 : Every span has a name, starting timestamp, and duration.">すべてのスパンには、名前、開始タイムスタンプおよび期間があります。</span> <span class="merged" id="all.CIY3X.1.spl3" title="原文 : For example, the work done by a REST endpoint is a span.">たとえば、RESTエンドポイントによって実行される作業はスパンです。</span> <span class="merged" id="all.CIY3X.1.spl4" title="原文 : A span is associated to a single service, but its descendants can belong to different services and hosts.">スパンは単一のサービスに関連付けられますが、その子孫は異なるサービスおよびホストに属することができます。</span> </p>

</li>
<li>
<p><span class="merged" id="all.13wB3I.spl1" title="原文 : A trace contains a collection of spans from one or more services, running on one or more hosts."><em>「トレース」</em>には、1つ以上のホストで実行されている、1つ以上のサービスからのスパンのコレクションが含まれています。</span> <span class="merged" id="all.13wB3I.spl2" title="原文 : For example, if you trace a service endpoint that calls another service, then the trace would contain spans from both services.">たとえば、別のサービスを呼び出すサービス・エンドポイントをトレースする場合、トレースには両方のサービスのスパンが含まれます。</span> <span class="merged" id="all.13wB3I.spl3" title="原文 : Within a trace, spans are organized as a directed acyclic graph (DAG) and can belong to multiple services, running on multiple hosts.">トレース内では、スパンはDirected Acyclic Graph (DAG)として編成され、複数のホストで実行されている複数のサービスに属することができます。</span> <span class="merged" id="all.13wB3I.spl4" title="原文 : The OpenTracing Data Model describes the details at The OpenTracing Semantic Specification."><em>「OpenTracingデータ・モデル」</em>の詳細は、<a href="https://opentracing.io/specification" target="_blank">「OpenTracingセマンティック仕様」</a>を参照してください。</span> <span class="merged" id="all.13wB3I.spl5" title="原文 : Spans are automatically created by Helidon as needed during execution of the REST request.">スパンは、RESTリクエストの実行時に、必要に応じてHelidonによって自動的に作成されます。</span> <span class="merged" id="all.13wB3I.spl6" title="原文 : Additional spans can be added through MP annotation @Traced or through OpenTracing APIs.">追加のスパンは、MP注釈<code>@Traced</code>またはOpenTracing APIを使用して追加できます。</span> </p>

</li>
</ul>

</div>


<h2 id="_traced_spans"><span class="merged" id="all.4WqKWr" title="原文 : Traced spans">トレース対象スパン</span></h2>
<div class="section">
<p><span class="merged" id="all.4tR6D" title="原文 : The following table lists all spans traced by Helidon components:">次の表に、Helidonコンポーネントによってトレースされるすべてのスパンを示します:</span></p>


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
<th><span class="merged" id="all.1M0t9D"  title="原文:: component">コンポーネント</span></th>
<th><span class="merged" id="all.df84B" title="原文 : span name">スパン名</span></th>
<th><span class="merged" id="all.20ls8M.140"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1PNGMG"  title="原文: web-server"><code>web-server</code></span></td>
<td class=""><span class="merged" id="all.Qb5FB"  title="原文: HTTP Request"><code>HTTP Request</code></span></td>
<td class=""><span class="merged" id="all.43xq2r" title="原文 : The overall span of the Web Server from request initiation until response Note that in Zipkin the name is replaced with jax-rs span name if jax-rs tracing is used.">リクエストの開始からレスポンスまでのWebサーバーの全体のスパン。<code>Zipkin</code>では、<code>jax-rs</code>トレースが使用されている場合、名前は<code>jax-rs</code>スパン名に置き換えられます。</span></td>
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
<td class=""><span class="merged" id="all.2d2KCa.1"  title="原文: security"><code>security</code></span></td>
<td class=""><span class="merged" id="all.2d2KCa.2"  title="原文: security"><code>security</code></span></td>
<td class=""><span class="merged" id="all.253mTV" title="原文 : Processing of request security">リクエスト・セキュリティの処理</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2d2KCa.3"  title="原文: security"><code>security</code></span></td>
<td class=""><span class="merged" id="all.9wBkt"  title="原文: security:atn"><code>security:atn</code></span></td>
<td class=""><span class="merged" id="all.2MQnH5" title="原文 : Span for request authentication">リクエスト認証用スパン</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2d2KCa.4"  title="原文: security"><code>security</code></span></td>
<td class=""><span class="merged" id="all.4Oidt8"  title="原文: security:atz"><code>security:atz</code></span></td>
<td class=""><span class="merged" id="all.2Udo2s" title="原文 : Span for request authorization">リクエスト認可のスパン</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2d2KCa.5"  title="原文: security"><code>security</code></span></td>
<td class=""><span class="merged" id="all.4cGZav"  title="原文: security:response"><code>security:response</code></span></td>
<td class=""><span class="merged" id="all.6Jz0K" title="原文 : Processing of response security">レスポンス・セキュリティの処理</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2d2KCa.6"  title="原文: security"><code>security</code></span></td>
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
<th><span class="merged" id="all.df84B.1" title="原文 : span name">スパン名</span></th>
<th><span class="merged" id="all.xxjaf"  title="原文:: log name">ログ名</span></th>
<th><span class="merged" id="all.1nmObm"  title="原文:: configurable">構成可</span></th>
<th><span class="merged" id="all.17KgId" title="原文 : enabled by default">デフォルトで有効</span></th>
<th><span class="merged" id="all.20ls8M.141"  title="原文:: description">説明</span></th>
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
<td class=""><span class="merged" id="all.2d2KCa.7"  title="原文: security"><code>security</code></span></td>
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
<th><span class="merged" id="all.df84B.2" title="原文 : span name">スパン名</span></th>
<th><span class="merged" id="all.3jGKII"  title="原文:: tag name">タグ名</span></th>
<th><span class="merged" id="all.20ls8M.142"  title="原文:: description">説明</span></th>
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
<td class=""><span class="merged" id="all.2d2KCa.8"  title="原文: security"><code>security</code></span></td>
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
<td class=""><span class="merged" id="all.sncEX" title="原文 : Full URL of the request (such as http://localhost:8080/greet)">リクエストの完全なURL (<code><a class="bare" href="http://localhost:8080/greet" target="_blank">http://localhost:8080/greet</a></code>など)</span></td>
</tr>
</tbody>
</table>
</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.29"  title="原文:: Configuration">構成</span></h2>
<div class="section">

<h3 id="_enabling_and_disabling_tracing"><span class="merged" id="all.4Ik9Fq" title="原文 : Enabling and Disabling Tracing">トレースの有効化と無効化</span></h3>
<div class="section">
<p><span class="merged" id="all.1zl4hw.spl1" title="原文 : You can configure a custom service name using the tracing.service configuration property."><code>tracing.service</code>構成プロパティを使用して、カスタム・サービス名を構成できます。</span> <span class="merged" id="all.1zl4hw.spl2" title="原文 : If this property is undefined, name is created from JAX-RS Application name, or Helidon MP is used if no application is defined.">このプロパティが定義されていない場合、名前はJAX-RSアプリケーション名から作成されます。アプリケーションが定義されていない場合は、<code>Helidon MP</code>が使用されます。</span> </p>

<p><span class="merged" id="all.2ssPDD.2" title="原文 : Jaeger tracer configuration.">Jaegerトレーサの構成。</span></p>

<p><span class="merged" id="all.1jilXd.2" title="原文 : Type: io.helidon.tracing.Tracer">タイプ: <a href="/apidocs/io.helidon.tracing/io/helidon/tracing/Tracer.html" target="_blank">io.helidon.tracing.Tracer</a></span></p>

<p><span class="merged" id="all.2QFPN.4" title="原文 : This is a standalone configuration type, prefix from configuration root: tracing">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>tracing</code></span></p>

</div>

</div>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.128"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.121" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.138"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.134"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.138"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.143"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1OA6Nx.2"  title="原文: client-cert-pem"><code>client-cert-pem</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.31" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4HtnV9.2" title="原文 : Certificate of client in PEM format.">PEM形式のクライアントの証明書。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.aCrpT.2"  title="原文: exporter-timeout"><code>exporter-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.48"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2kRnHs.6"  title="原文: PT10S"><code>PT10S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3DyZwu.2" title="原文 : Timeout of exporter requests.">エクスポート業者リクエストのタイムアウトです。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3xwTZs.2"  title="原文: max-export-batch-size"><code>max-export-batch-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.86"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4UoPlE.5"  title="原文: 512"><code>512</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N6DKI.2" title="原文 : Maximum Export Batch Size of exporter requests.">エクスポータ・リクエストの最大エクスポート・バッチ・サイズ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1g1XqJ.2"  title="原文: max-queue-size"><code>max-queue-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.87"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2lp3HC.3"  title="原文: 2048"><code>2048</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3fgwzo.2" title="原文 : Maximum Queue Size of exporter requests.">エクスポータ・リクエストの最大キュー・サイズ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4ALScM.2"  title="原文: private-key-pem"><code>private-key-pem</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.32" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.32EJFE.2" title="原文 : Private key in PEM format.">PEM形式の秘密キー。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.oqYOx.2"  title="原文: propagation"><code>propagation</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Rns1f.2" title="原文 : PropagationFormat[] (B3, B3_SINGLE, JAEGER, W3C)">PropagationFormat[] (B3, B3_SINGLE, JAEGER, W3C)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2aCowQ.2"  title="原文: JAEGER"><code>JAEGER</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.S1F0x.2" title="原文 : Add propagation format to use.">使用する伝播形式を追加します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3N9ohQ.2"  title="原文: sampler-param"><code>sampler-param</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ets8I.2"  title="原文:: Number">数値</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.27cMqo.5"  title="原文: 1"><code>1</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2sLEd8.2" title="原文 : The sampler parameter (number).">samplerパラメータ(数値)。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2immXP.2"  title="原文: sampler-type"><code>sampler-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4YAOnL.2" title="原文 : SamplerType (CONSTANT, RATIO)">SamplerType (定数、比率)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3JRsgA.2"  title="原文: CONSTANT"><code>CONSTANT</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3EzQ38.2" title="原文 : Sampler type.">サンプラのタイプ。</span></p>

<markup>See &lt;a href="https://www.jaegertracing.io/docs/latest/sampling/#client-sampling-configuration"&gt;Sampler types&lt;/a&gt;.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.38fsEi.2"  title="原文: schedule-delay"><code>schedule-delay</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.49"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.432omB.4"  title="原文: PT5S"><code>PT5S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3dGHek.2" title="原文 : Schedule Delay of exporter requests.">エクスポータ・リクエストのスケジュール遅延。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.DBcO6.2"  title="原文: span-processor-type"><code>span-processor-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.114j9D.2" title="原文 : SpanProcessorType (SIMPLE, BATCH)">SpanProcessorType (SIMPLE, BATCH)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42l5bd.2"  title="原文: batch"><code>batch</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1i4ElM.2" title="原文 : Span Processor type used.">使用されるスパン・プロセッサ・タイプ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1eW5Cx.2"  title="原文: trusted-cert-pem"><code>trusted-cert-pem</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.33" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1zWYYy.2" title="原文 : Trusted certificates in PEM format.">PEM形式のトラストできる証明書。</span></p>

</doc-view>
</td>
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

<p><span class="merged" id="all.4F0j4g" title="原文 : Tracing configuration can be defined in application.yaml file.">トレース構成は、<code>application.yaml</code>ファイルで定義できます。</span></p>

<markup
lang="yaml"
title="Tracing configuration example"
>tracing:
  paths:
    - path: "/favicon.ico"
      enabled: false
    - path: "/metrics"
      enabled: false
    - path: "/health"
      enabled: false
  components:
    web-server:
      spans:
        - name: "HTTP Request"
          logs:
            - name: "content-write"
              enabled: false</markup>


<h3 id="_controlling_tracing_output"><span class="merged" id="all.2DKxPZ" title="原文 : Controlling Tracing Output">トレース出力の制御</span></h3>
<div class="section">
<p><span class="merged" id="all.3iUj94" title="原文 : For Web Server we have a path based support for configuring tracing, in addition to the configuration described above.">Webサーバーの場合、前述の構成に加えて、トレースの構成に対するパス・ベースのサポートがあります。</span></p>

<p><span class="merged" id="all.WmtAQ.spl1" title="原文 : Configuration of path can use any path string supported by the Web Server.">pathの構成では、Webサーバーでサポートされている任意のパス文字列を使用できます。</span> <span class="merged" id="all.WmtAQ.spl2" title="原文 : The configuration itself has the same possibilities as traced configuration described above.">構成自体には、前述のトレース対象の構成と同じ可能性があります。</span> <span class="merged" id="all.WmtAQ.spl3" title="原文 : The path specific configuration will be merged with global configuration (path is the &quot;newer&quot; configuration, global is the &quot;older&quot;)">パス固有の構成はグローバル構成とマージされます(パスは新しい構成、グローバルは古い構成)</span> </p>


<h4 id="_renaming_top_level_span_using_request_properties"><span class="merged" id="all.43maJP" title="原文 : Renaming top level span using request properties">リクエスト・プロパティを使用したトップ・レベル・スパンの名前変更</span></h4>
<div class="section">
<p><span class="merged" id="all.2pVzs9" title="原文 : To have a nicer overview in search pane of a tracer, you can customize the top-level span name using configuration.">トレーサの検索ペインの概要をよく理解するために、構成を使用してトップレベルのスパン名をカスタマイズできます。</span></p>

<p><span class="merged" id="all.2apT5L.1"  title="原文:: Example:">例:</span></p>

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

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.26"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.3xilbL.spl1" title="原文 : The examples in this guide demonstrate how to integrate tracing with Helidon, how to view traces, how to trace across multiple services, and how to integrate tracing with Kubernetes.">このガイドの例では、トレースをHelidonと統合する方法、トレースを表示する方法、複数のサービス間でトレースする方法、およびトレースをKubernetesと統合する方法を示します。</span> <span class="merged" id="all.3xilbL.spl2" title="原文 : All examples use Jaeger and traces will be viewed using both the Jaeger UI.">すべての例はJaegerを使用し、トレースはJaeger UIの両方を使用して表示されます。</span> </p>


<h3 id="_set_up_jaeger"><span class="merged" id="all.19I6pn.1" title="原文 : Set up Jaeger">Jaegerの設定</span></h3>
<div class="section">
<p><span class="merged" id="all.3bTUZi.1.spl1" title="原文 : First, you need to run the Jaeger tracer.">まず、Jaegerトレーサを実行する必要があります。</span> <span class="merged" id="all.3bTUZi.1.spl2" title="原文 : Helidon will communicate with this tracer at runtime.">Helidonは、実行時にこのトレーサと通信します。</span> </p>

<markup
lang="bash"
title="Run Jaeger within a docker container, then check the Jaeger server working:"
>docker run -d --name jaeger \                  <span class="conum" data-value="1" />
  -e COLLECTOR_OTLP_ENABLED=true \
  -p 6831:6831/udp \
  -p 6832:6832/udp \
  -p 5778:5778 \
  -p 16686:16686 \
  -p 4317:4317 \
  -p 4318:4318 \
  -p 14250:14250 \
  -p 14268:14268 \
  -p 14269:14269 \
  -p 9411:9411 \
  jaegertracing/all-in-one:1.50</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3uWfHi.1" title="原文 : Run the Jaeger docker image.">Jaeger dockerイメージを実行します。</span></li>
</ul>

<markup
lang="bash"
title="Check the Jaeger server by opening in browser:"
>http://localhost:16686/search</markup>

</div>


<h3 id="_trace_across_services"><span class="merged" id="all.42BMvF.1" title="原文 : Trace Across Services">サービス間のトレース</span></h3>
<div class="section">
<p><span class="merged" id="all.1FX3Hw.1.spl1" title="原文 : Helidon automatically traces across services as long as the services use the same tracer, for example, the same instance of Jaeger.">Helidonは、サービスで同じトレーサ(たとえば、Jaegerの同じインスタンス)が使用されているかぎり、サービス全体のトレースを自動的に実行します。</span> <span class="merged" id="all.1FX3Hw.1.spl2" title="原文 : This means a single trace can include spans from multiple services and hosts.">つまり、単一のトレースに複数のサービスおよびホストからのスパンを含めることができます。</span> <span class="merged" id="all.1FX3Hw.1.spl3" title="原文 : OpenTracing uses a SpanContext to propagate tracing information across process boundaries.">OpenTracingは、<code>SpanContext</code>を使用して、プロセス境界を越えてトレース情報を伝播します。</span> <span class="merged" id="all.1FX3Hw.1.spl4" title="原文 : When you make client API calls, Helidon will internally call OpenTracing APIs to propagate the SpanContext.">クライアントAPIコールを行うと、Helidonは内部的にOpenTracing APIをコールして<code>SpanContext</code>を伝播します。</span> <span class="merged" id="all.1FX3Hw.1.spl5" title="原文 : There is nothing you need to do in your application to make this work.">これを機能させるためにアプリケーションで行う必要があることはありません。</span> </p>

<p><span class="merged" id="all.4NkwkZ.1.spl1" title="原文 : To demonstrate distributed tracing, you will need to create a second project, where the server listens on port 8081.">分散トレースを示すには、サーバーがポート8081でリスニングする別のプロジェクトを作成する必要があります。</span> <span class="merged" id="all.4NkwkZ.1.spl2" title="原文 : Create a new root directory to hold this new project, then do the following steps, similar to what you did at the start of this guide:">この新しいプロジェクトを格納する新しいルート・ディレクトリを作成し、このガイドの冒頭で行ったステップと同様に次のステップを実行します:</span> </p>


<h4 id="_create_a_second_service"><span class="merged" id="all.2f2tMU.1" title="原文 : Create a second service">2つ目のサービスの作成</span></h4>
<div class="section">
<markup
lang="bash"
title="Run the Maven archetype:"
>mvn -U archetype:generate -DinteractiveMode=false \
    -DarchetypeGroupId=io.helidon.archetypes \
    -DarchetypeArtifactId=helidon-quickstart-mp \
    -DarchetypeVersion=4.0.2 \
    -DgroupId=io.helidon.examples \
    -DartifactId=helidon-quickstart-mp-2 \
    -Dpackage=io.helidon.examples.quickstart.mp</markup>

<markup
lang="bash"
title="The project will be built and run from the <code>helidon-quickstart-mp</code> directory:"
>cd helidon-quickstart-mp-2</markup>

<markup
lang="xml"
title="Add the following dependency to <code>pom.xml</code>:"
>&lt;dependency&gt;
  &lt;groupId&gt;io.helidon.tracing.providers&lt;/groupId&gt;
  &lt;artifactId&gt;helidon-tracing-providers-jaeger&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<markup
lang="bash"
title="Replace <code>META-INF/microprofile-config.properties</code> with the following:"
>app.greeting=Hello From MP-2
tracing.service=helidon-mp-2

# Microprofile server properties
server.port=8081</markup>

<markup
lang="bash"
title="Build the application, skipping unit tests, then run it:"
>mvn package -DskipTests=true
java -jar target/helidon-quickstart-mp-2.jar</markup>

<markup
lang="bash"
title="Run the curl command in a new terminal window and check the response (<strong>notice the port is 8081</strong>) :"
>curl http://localhost:8081/greet</markup>

<markup
lang="json"
title="Response body"
>{
  "message": "Hello From MP-2 World!"
}</markup>

</div>


<h4 id="_modify_the_first_service"><span class="merged" id="all.tF0GP.1" title="原文 : Modify the first service">最初のサービスの変更</span></h4>
<div class="section">
<p><span class="merged" id="all.4Yeqrw.1" title="原文 : Once you have validated that the second service is running correctly, you need to modify the original application to call it.">2つ目のサービスが正しく実行されていることをバリデートしたら、元のアプリケーションを変更してコールする必要があります。</span></p>

<markup
lang="java"
title="Replace the <code>GreetResource</code> class with the following code:"
>package io.helidon.examples.quickstart.mp;

import java.util.Collections;
import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.json.Json;
import jakarta.json.JsonBuilderFactory;
import jakarta.json.JsonObject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.client.WebTarget;
import jakarta.ws.rs.core.MediaType;
import org.glassfish.jersey.server.Uri;

@Path("/greet")
@RequestScoped
public class GreetResource {

  @Uri("http://localhost:8081/greet")
  private WebTarget target; <span class="conum" data-value="1" />

  private static final JsonBuilderFactory JSON = Json.createBuilderFactory(Collections.emptyMap());
  private final GreetingProvider greetingProvider;

  @Inject
  public GreetResource(GreetingProvider greetingConfig) {
    this.greetingProvider = greetingConfig;
  }

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public JsonObject getDefaultMessage() {
    return createResponse("World");
  }

  @GET
  @Path("/outbound") <span class="conum" data-value="2" />
  public JsonObject outbound() {
    return target.request().accept(MediaType.APPLICATION_JSON_TYPE).get(JsonObject.class);
  }

  private JsonObject createResponse(String who) {
    String msg = String.format("%s %s!", greetingProvider.getMessage(), who);

    return JSON.createObjectBuilder().add("message", msg).build();
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.tQLtt.1" title="原文 : This is the WebTarget needed to send a request to the second service at port 8081.">これは、ポート<code>8081</code>で別のサービスにリクエストを送信するために必要な<code>WebTarget</code>です。</span></li>
<li data-value="2"><span class="merged" id="all.1sm130.1" title="原文 : This is the new endpoint that will call the second service.">これは、2つ目のサービスを呼び出す新しいエンドポイントです。</span></li>
</ul>

<markup
lang="bash"
title="Build and run the application, then invoke the endpoint and check the response:"
>curl -i http://localhost:8080/greet/outbound <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.RxuwD.1" title="原文 : The request went to the service on 8080, which then invoked the service at 8081 to get the greeting.">リクエストは<code>8080</code>のサービスに送信され、そこで応答メッセージを取得するために<code>8081</code>のサービスが呼び出されました。</span></li>
</ul>

<markup
lang="json"
title="Response body"
>{
  "message": "Hello From MP-2 World!" <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3MDSsa.1" title="原文 : Notice the greeting came from the second service.">グリーティングは2番目のサービスから発信されたものです。</span></li>
</ul>

<p><span class="merged" id="all.4Tkex9.1" title="原文 : Refresh the Jaeger UI trace listing page and notice that there is a trace across two services.">Jaeger UIトレース・リスト・ページをリフレッシュし、2つのサービスにトレースがあることを確認します。</span></p>


<div class="block-title"><span class="merged" id="all.4KFGiL.1" title="原文 : Tracing across multiple services detail view"><span>複数のサービスの詳細ビューにわたるトレース</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden"> <img alt="トレース" src="images/guides/12_tracing_detail_2_services.png" /> </v-card-text> </v-card>


<p><span class="merged" id="all.2tC87V.1.spl1" title="原文 : In the image above, you can see that the trace includes spans from two services.">上の図では、トレースに2つのサービスのスパンが含まれていることがわかります。</span> <span class="merged" id="all.2tC87V.1.spl2" title="原文 : You will notice there is a gap before the sixth span, which is a get operation.">6つ目のスパン(<code>get</code>操作)の前にギャップがあります。</span> <span class="merged" id="all.2tC87V.1.spl3" title="原文 : This is a one-time client initialization delay.">これは、ワンタイム・クライアント初期化の遅延です。</span> <span class="merged" id="all.2tC87V.1.spl4" title="原文 : Run the /outbound curl command again and look at the new trace to see that the delay no longer exists."><code>/outbound</code> curlコマンドを再度実行し、新しいトレースを調べて遅延が存在しないことを確認します。</span> </p>

<p><span class="merged" id="all.OvnG0.1" title="原文 : You can now stop your second service, it is no longer used in this guide.">これで、2つ目のサービスを停止できます。このガイドでは使用しません。</span></p>

</div>

</div>

</div>


<h2 id="_integration_with_kubernetes"><span class="merged" id="all.4PhaKc.2" title="原文 : Integration with Kubernetes">Kubernetesとの統合</span></h2>
<div class="section">
<p><span class="merged" id="all.3CBQyg" title="原文 : The following example demonstrates how to use Jaeger from a Helidon application running in Kubernetes.">次の例は、Kubernetesで実行されているHelidonアプリケーションからJaegerを使用する方法を示しています。</span></p>

<markup
lang="bash"
title="Update <code>application.yaml</code>:"
>tracing:
  host: "jaeger"</markup>

<markup
lang="bash"
title="Stop the application and build the docker image for your application:"
>docker build -t helidon-tracing-mp .</markup>


<h3 id="_deploy_jaeger_into_kubernetes"><span class="merged" id="all.2ejwi6.1" title="原文 : Deploy Jaeger into Kubernetes">JaegerをKubernetesにデプロイ</span></h3>
<div class="section">
<markup
lang="yaml"
title="Create the Kubernetes YAML specification, named <code>jaeger.yaml</code>, with the following contents:"
>apiVersion: v1
kind: Service
metadata:
  name: jaeger
spec:
  ports:
    - port: 16686
      protocol: TCP
  selector:
    app: jaeger
---
kind: Pod
apiVersion: v1
metadata:
  name: jaeger
  labels:
    app: jaeger
spec:
  containers:
    - name: jaeger
      image: jaegertracing/all-in-one
      imagePullPolicy: IfNotPresent
      ports:
        - containerPort: 16686</markup>

<markup
lang="bash"
title="Create the Jaeger pod and ClusterIP service:"
>kubectl apply -f ./jaeger.yaml</markup>

<markup
lang="bash"
title="Create a Jaeger external server and expose it on port 9142:"
>kubectl expose pod jaeger --name=jaeger-external --port=16687 --target-port=16686 --type=LoadBalancer <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2o5vKM.1" title="原文 : Create a service so that you can access the Jaeger UI.">Jaeger UIにアクセスできるようにサービスを作成します。</span></li>
</ul>

<p><span class="merged" id="all.3cxOeb.1.spl1" title="原文 : Navigate to http://localhost:16687/search to validate that you can access Jaeger running in Kubernetes."><a class="bare" href="http://localhost:16687/search" target="_blank">http://localhost:16687/search</a>にナビゲートして、Kubernetesで実行されているJaegerにアクセスできることをバリデートします。</span> <span class="merged" id="all.3cxOeb.1.spl2" title="原文 : It may take a few seconds before it is ready.">準備ができるまで数秒かかる場合があります。</span> </p>

</div>


<h3 id="_deploy_your_helidon_application_into_kubernetes"><span class="merged" id="all.1xATXz.1" title="原文 : Deploy Your Helidon Application into Kubernetes">HelidonアプリケーションのKubernetesへのデプロイ</span></h3>
<div class="section">
<markup
lang="yaml"
title="Create the Kubernetes YAML specification, named <code>tracing.yaml</code>, with the following contents:"
>kind: Service
apiVersion: v1
metadata:
  name: helidon-tracing <span class="conum" data-value="1" />
  labels:
    app: helidon-tracing
spec:
  type: NodePort
  selector:
    app: helidon-tracing
  ports:
    - port: 8080
      targetPort: 8080
      name: http
---
kind: Deployment
apiVersion: apps/v1
metadata:
  name: helidon-tracing
spec:
  replicas: 1 <span class="conum" data-value="2" />
  selector:
    matchLabels:
      app: helidon-tracing
  template:
    metadata:
      labels:
        app: helidon-tracing
        version: v1
    spec:
      containers:
        - name: helidon-tracing
          image: helidon-tracing-mp
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 8080</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3s9wLQ.5" title="原文 : A service of type NodePort that serves the default routes on port 8080.">ポート<code>8080</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
<li data-value="2"><span class="merged" id="all.1dhwFj.5" title="原文 : A deployment with one replica of a pod.">ポッドの1つのレプリカを持つデプロイメント。</span></li>
</ul>

<markup
lang="bash"
title="Create and deploy the application into Kubernetes:"
>kubectl apply -f ./tracing.yaml</markup>

</div>


<h3 id="_access_your_application_and_the_jaeger_trace"><span class="merged" id="all.3jiNmC.1" title="原文 : Access Your Application and the Jaeger Trace">アプリケーションおよびJaegerトレースへのアクセス</span></h3>
<div class="section">
<markup
lang="bash"
title="Get the application service information:"
>kubectl get service/helidon-tracing</markup>

<markup
lang="bash"

>NAME             TYPE       CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
helidon-tracing   NodePort   10.99.159.2   &lt;none&gt;        8080:31143/TCP   8s <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3Q1f91.4" title="原文 : A service of type NodePort that serves the default routes on port 31143.">ポート<code>31143</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
</ul>

<markup
lang="bash"
title="Verify the tracing endpoint using port <code>31143</code>, your port will likely be different:"
>curl http://localhost:31143/greet</markup>

<markup
lang="json"

>{
  "message": "Hello World!"
}</markup>

<p><span class="merged" id="all.2Z9PEu.1" title="原文 : Access the Jaeger UI at http://localhost:16687/search and click on the refresh icon to see the trace that was just created."><a class="bare" href="http://localhost:16687/search" target="_blank">http://localhost:16687/search</a>のJaeger UIにアクセスし、リフレッシュ・アイコンをクリックして、作成したトレースを表示します。</span></p>

</div>


<h3 id="_cleanup"><span class="merged" id="all.6lMSz.1"  title="原文:: Cleanup">クリーンアップ</span></h3>
<div class="section">
<p><span class="merged" id="all.HBnIV.4" title="原文 : You can now delete the Kubernetes resources that were just created during this example.">これで、この例で作成したKubernetesリソースを削除できます。</span></p>

<markup
lang="bash"
title="Delete the Kubernetes resources:"
>kubectl delete -f ./jaeger.yaml
kubectl delete -f ./tracing.yaml
kubectl delete service jaeger-external
docker rm -f jaeger</markup>

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

Response response = client.target(serviceEndpoint)
    .request()
    // tracer should be provided unless available as GlobalTracer
    .property(TRACER_PROPERTY_NAME, tracer)
    .property(CURRENT_SPAN_CONTEXT_PROPERTY_NAME, spanContext)
    .get();</markup>

</div>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.17"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">

<h3 id="jaeger-tracing"><span class="merged" id="all.15pDPD"  title="原文:: Jaeger Tracing">Jaegerトレース</span></h3>
<div class="section">
<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing-providers-jaeger&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

</div>


<h2 id="_configuring_jaeger"><span class="merged" id="all.4Q7AwN" title="原文 : Configuring Jaeger">Jaegerの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.2ssPDD.3" title="原文 : Jaeger tracer configuration.">Jaegerトレーサの構成。</span></p>

<p><span class="merged" id="all.1jilXd.3" title="原文 : Type: io.helidon.tracing.Tracer">タイプ: <a href="/apidocs/io.helidon.tracing/io/helidon/tracing/Tracer.html" target="_blank">io.helidon.tracing.Tracer</a></span></p>

<p><span class="merged" id="all.2QFPN.5" title="原文 : This is a standalone configuration type, prefix from configuration root: tracing">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>tracing</code></span></p>

</div>


<h2 id="_configuration_options_2"><span class="merged" id="all.3SKgM1.129"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.122" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.139"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.135"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.139"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.144"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1OA6Nx.3"  title="原文: client-cert-pem"><code>client-cert-pem</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.34" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4HtnV9.3" title="原文 : Certificate of client in PEM format.">PEM形式のクライアントの証明書。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.aCrpT.3"  title="原文: exporter-timeout"><code>exporter-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.50"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2kRnHs.7"  title="原文: PT10S"><code>PT10S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3DyZwu.3" title="原文 : Timeout of exporter requests.">エクスポート業者リクエストのタイムアウトです。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3xwTZs.3"  title="原文: max-export-batch-size"><code>max-export-batch-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.88"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4UoPlE.6"  title="原文: 512"><code>512</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N6DKI.3" title="原文 : Maximum Export Batch Size of exporter requests.">エクスポータ・リクエストの最大エクスポート・バッチ・サイズ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1g1XqJ.3"  title="原文: max-queue-size"><code>max-queue-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.89"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2lp3HC.4"  title="原文: 2048"><code>2048</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3fgwzo.3" title="原文 : Maximum Queue Size of exporter requests.">エクスポータ・リクエストの最大キュー・サイズ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4ALScM.3"  title="原文: private-key-pem"><code>private-key-pem</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.35" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.32EJFE.3" title="原文 : Private key in PEM format.">PEM形式の秘密キー。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.oqYOx.3"  title="原文: propagation"><code>propagation</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Rns1f.3" title="原文 : PropagationFormat[] (B3, B3_SINGLE, JAEGER, W3C)">PropagationFormat[] (B3, B3_SINGLE, JAEGER, W3C)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2aCowQ.3"  title="原文: JAEGER"><code>JAEGER</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.S1F0x.3" title="原文 : Add propagation format to use.">使用する伝播形式を追加します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3N9ohQ.3"  title="原文: sampler-param"><code>sampler-param</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ets8I.3"  title="原文:: Number">数値</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.27cMqo.6"  title="原文: 1"><code>1</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2sLEd8.3" title="原文 : The sampler parameter (number).">samplerパラメータ(数値)。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2immXP.3"  title="原文: sampler-type"><code>sampler-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4YAOnL.3" title="原文 : SamplerType (CONSTANT, RATIO)">SamplerType (定数、比率)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3JRsgA.3"  title="原文: CONSTANT"><code>CONSTANT</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3EzQ38.3" title="原文 : Sampler type.">サンプラのタイプ。</span></p>

<markup>See &lt;a href="https://www.jaegertracing.io/docs/latest/sampling/#client-sampling-configuration"&gt;Sampler types&lt;/a&gt;.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.38fsEi.3"  title="原文: schedule-delay"><code>schedule-delay</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.51"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.432omB.5"  title="原文: PT5S"><code>PT5S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3dGHek.3" title="原文 : Schedule Delay of exporter requests.">エクスポータ・リクエストのスケジュール遅延。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.DBcO6.3"  title="原文: span-processor-type"><code>span-processor-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.114j9D.3" title="原文 : SpanProcessorType (SIMPLE, BATCH)">SpanProcessorType (SIMPLE, BATCH)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42l5bd.3"  title="原文: batch"><code>batch</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1i4ElM.3" title="原文 : Span Processor type used.">使用されるスパン・プロセッサ・タイプ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1eW5Cx.3"  title="原文: trusted-cert-pem"><code>trusted-cert-pem</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.36" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1zWYYy.3" title="原文 : Trusted certificates in PEM format.">PEM形式のトラストできる証明書。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.4NI3k5" title="原文 : The following is an example of a Jaeger configuration, specified in the YAML format.">YAML形式で指定されたJaeger構成の例を次に示します。</span></p>

<markup
lang="yaml"

>tracing:
    service: "helidon-full-http"
    protocol: "https"
    host: "jaeger"
    port: 14240</markup>


<h3 id="jaeger-tracing-metrics"><span class="merged" id="all.1jl2Qr" title="原文 : Jaeger Tracing Metrics">Jaegerトレース・メトリクス</span></h3>
<div class="section">
<p><span class="merged" id="all.1XX8HD" title="原文 : As the Jaeger Tracing section describes, you can use Jaeger tracing in your Helidon application."><router-link @click.native="this.scrollFix('#jaeger-tracing')" to="#jaeger-tracing">「Jaegerトレース」</router-link>セクションで説明するように、HelidonアプリケーションでJaegerトレースを使用できます。</span></p>

</div>


<h3 id="zipkin-tracing"><span class="merged" id="all.3gf1D4" title="原文 : Zipkin Tracing">Zipkinトレース</span></h3>
<div class="section">
<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing-providers-zipkin&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

</div>


<h2 id="_configuring_zipkin"><span class="merged" id="all.NQtxT" title="原文 : Configuring Zipkin">Zipkinの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.3AC9OM.2" title="原文 : Zipkin tracer configuration">Zipkinトレーサ構成</span></p>

<p><span class="merged" id="all.30kkWx.2" title="原文 : Type: io.opentracing.Tracer">タイプ: io.opentracing.Tracer</span></p>

<p><span class="merged" id="all.2QFPN.6" title="原文 : This is a standalone configuration type, prefix from configuration root: tracing">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>tracing</code></span></p>

</div>


<h2 id="_configuration_options_3"><span class="merged" id="all.3SKgM1.130"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.123" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.140"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.136"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.140"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.145"  title="原文:: description">説明</span></th>
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
</tbody>
</table>
</div>

<p><span class="merged" id="all.4YAMMG" title="原文 : The following is an example of a Zipkin configuration, specified in the YAML format.">YAML形式で指定されたZipkin構成の例を次に示します。</span></p>

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

<p><span class="merged" id="all.lg6Si" title="原文 : Example of Zipkin trace:">Zipkinトレースの例:</span></p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="Zipkinの例" src="images/webserver/zipkin.png" /> </v-card-text> </v-card>


</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.18"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1nujxp" title="原文 : MicroProfile Opentracing Specification"><a href="https://download.eclipse.org/microprofile/microprofile-opentracing-3.0/microprofile-opentracing-spec-3.0.html" target="_blank">MicroProfileトラッキング仕様</a></span></p>

</li>
<li>
<p><span class="merged" id="all.1IRPV1" title="原文 : Opentracing Project"><a href="https://opentracing.io/" target="_blank">オープン・トレーシング・プロジェクト</a></span></p>

</li>
</ul>

</div>

</doc-view>
