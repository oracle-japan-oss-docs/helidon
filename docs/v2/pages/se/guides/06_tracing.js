<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.49RZtM" title="原文 : Helidon SE Tracing Guide">Helidon SEトレース・ガイド</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3TWq6k" title="原文 : This guide describes how to create a sample Helidon SE project that can be used to run some basic examples using tracing with a Helidon SE application.">このガイドでは、Helidon SEアプリケーションでトレースを使用していくつかの基本的な例を実行するために使用できるサンプルHelidon SEプロジェクトの作成方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_what_you_need"><span class="merged" id="all.mQ2U1.12"  title="原文:: What you need">必要事項</span></h2>
<div class="section">

<div class="table__overflow elevation-1  flex sm7
">
<table class="datatable table">
<colgroup>
<col style="width: 100%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.wqDOs.7" title="原文 : About 30 minutes">約30分</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.27GIMH.18" title="原文 : Helidon Prerequisites"><router-link to="/about/03_prerequisites">Helidonの前提条件</router-link></span></td>
</tr>
</tbody>
</table>
</div>
</div>

<h2 id="_introduction"><span class="merged" id="all.4LJMHk.9"  title="原文:: Introduction">導入</span></h2>
<div class="section">
<p><span class="merged" id="all.WeFFD.spl1" title="原文 : Distributed tracing is a critical feature of micro-service based applications, since it traces workflow both within a service and across multiple services.">分散トレースは、サービス内と複数のサービス間の両方でワークフローをトレースするため、マイクロサービス・ベースのアプリケーションの重要な機能です。</span> <span class="merged" id="all.WeFFD.spl2" title="原文 : This provides insight to sequence and timing data for specific blocks of work, which helps you identify performance and operational issues.">これにより、特定の作業ブロックのデータを順序付けおよびタイミング化するための洞察が得られ、パフォーマンスおよび操作上の問題を識別するのに役立ちます。</span> <span class="merged" id="all.WeFFD.spl3" title="原文 : Helidon SE includes support for distributed tracing through the OpenTracing API.">Helidon SEでは、<a href="https://opentracing.io" id="" target="_blank" >OpenTracing API</a>を介した分散トレースがサポートされています。</span> <span class="merged" id="all.WeFFD.spl4" title="原文 : Tracing is integrated with WebServer, gRPC Server, and Security using either the Zipkin or Jaeger tracers.">トレースは、<a href="https://zipkin.io" id="" target="_blank" >Zipkin</a>または<a href="https://www.jaegertracing.io" id="" target="_blank" >Jaeger</a>トレーサを使用して、WebServer、gRPCサーバーおよびセキュリティと統合されます。</span> </p>


<h3 id="_tracing_concepts"><span class="merged" id="all.4OHzgd.1" title="原文 : Tracing concepts">トレースの概念</span></h3>
<div class="section">
<p><span class="merged" id="all.1c7j5r.1.spl1" title="原文 : This section explains a few concepts that you need to understand before you get started with tracing.">この項では、トレースを開始する前に理解しておく必要がある概念について説明します。</span> <span class="merged" id="all.1c7j5r.1.spl2" title="原文 : In the context of this document, a service is synonymous with an application.">このドキュメントでは、サービスはアプリケーションと同義です。</span> <span class="merged" id="all.1c7j5r.1.spl3" title="原文 : A span is the basic unit of work done within a single service, on a single host."><em>「スパン」</em>は、単一のホスト上の単一のサービス内で実行される基本的な作業単位です。</span> <span class="merged" id="all.1c7j5r.1.spl4" title="原文 : Every span has a name, starting timestamp, and duration.">すべてのスパンには、名前、開始タイムスタンプおよび期間があります。</span> <span class="merged" id="all.1c7j5r.1.spl5" title="原文 : For example, the work done by a REST endpoint is a span.">たとえば、RESTエンドポイントによって実行される作業はスパンです。</span> <span class="merged" id="all.1c7j5r.1.spl6" title="原文 : A span is associated to a single service, but its descendants can belong to different services and hosts.">スパンは単一のサービスに関連付けられますが、その子孫は異なるサービスおよびホストに属することができます。</span> <span class="merged" id="all.1c7j5r.1.spl7" title="原文 : A trace contains a collection of spans from one or more services, running on one or more hosts."><em>「トレース」</em>には、1つ以上のホストで実行されている、1つ以上のサービスからのスパンのコレクションが含まれています。</span> <span class="merged" id="all.1c7j5r.1.spl8" title="原文 : For example, if you trace a service endpoint that calls another service, then the trace would contain spans from both services.">たとえば、別のサービスを呼び出すサービス・エンドポイントをトレースする場合、トレースには両方のサービスのスパンが含まれます。</span> <span class="merged" id="all.1c7j5r.1.spl9" title="原文 : Within a trace, spans are organized as a directed acyclic graph (DAG) and can belong to multiple services, running on multiple hosts.">トレース内では、スパンはDirected Acyclic Graph (DAG)として編成され、複数のホストで実行されている複数のサービスに属することができます。</span> <span class="merged" id="all.1c7j5r.1.spl10" title="原文 : The OpenTracing Data Model describes the details at The OpenTracing Semantic Specification."><em>「OpenTracingデータ・モデル」</em>の詳細は、<a href="https://opentracing.io/specification" id="" target="_blank" >「OpenTracingセマンティック仕様」</a>を参照してください。</span> <span class="merged" id="all.1c7j5r.1.spl11" title="原文 : Spans are automatically created by Helidon as needed during execution of the REST request.">スパンは、RESTリクエストの実行時に、必要に応じてHelidonによって自動的に作成されます。</span> </p>

</div>
</div>

<h2 id="_getting_started_with_tracing"><span class="merged" id="all.2EOdc8.1" title="原文 : Getting started with tracing">トレースの開始</span></h2>
<div class="section">
<p><span class="merged" id="all.49zFE1.1.spl1" title="原文 : The examples in this guide demonstrate how to integrate tracing with helidon, how to view traces, how to trace across multiple services, and how to integrate with tracing with Kubernetes.">このガイドの例では、トレースをhelidonと統合する方法、トレースを表示する方法、複数のサービスにわたってトレースする方法、およびトレースをKubernetesと統合する方法を示します。</span> <span class="merged" id="all.49zFE1.1.spl2" title="原文 : All examples use Zipkin and traces will be viewed using both the Zipkin API and UI.">すべての例でZipkinを使用し、トレースはZipkin APIとUIの両方を使用して表示されます。</span> </p>


<h3 id="_create_a_sample_helidon_se_project"><span class="merged" id="all.2hM3y0.2" title="原文 : Create a sample Helidon SE project">サンプルHelidon SEプロジェクトの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.36DQ1d.2" title="原文 : Use the Helidon SE Maven archetype to create a simple project that can be used for the examples in this guide.">Helidon SE Maven原型を使用して、このガイドの例で使用できる単純なプロジェクトを作成します。</span></p>

<markup
lang="bash"
title="Maven原型を実行します:"
>mvn -U archetype:generate -DinteractiveMode=false \
    -DarchetypeGroupId=io.helidon.archetypes \
    -DarchetypeArtifactId=helidon-quickstart-se \
    -DarchetypeVersion=2.2.1-SNAPSHOT \
    -DgroupId=io.helidon.examples \
    -DartifactId=helidon-quickstart-se \
    -Dpackage=io.helidon.examples.quickstart.se</markup>

<markup
lang="bash"
title="プロジェクトは、<code>helidon-quickstart-se</code>ディレクトリからビルドおよび実行されます:"
>cd helidon-quickstart-se</markup>

</div>

<h3 id="_setup_zipkin"><span class="merged" id="all.1A3ja8.1" title="原文 : Setup Zipkin">Zipkinの設定</span></h3>
<div class="section">
<p><span class="merged" id="all.1fdUgq.1.spl1" title="原文 : First, you need to run the Zipkin tracer.">まず、Zipkinトレーサを実行する必要があります。</span> <span class="merged" id="all.1fdUgq.1.spl2" title="原文 : Helidon will communicate with this tracer at runtime.">Helidonは、実行時にこのトレーサと通信します。</span> </p>

<markup
lang="bash"
title="dockerコンテナ内でZipkinを実行し、Zipkinサーバーのヘルスを確認します:"
>docker run -d --name zipkin -p 9411:9411 openzipkin/zipkin  <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2ok6wA.1" title="原文 : Run the Zipkin docker image named openzipkin/zipkin."><code>openzipkin/zipkin</code>という名前のZipkin dockerイメージを実行します。</span></li>
</ul>
<markup
lang="bash"
title="Zipkinサーバーのヘルスを確認します:"
>curl http://localhost:9411/health <span class="conum" data-value="1" />
...
{
  "status": "UP", <span class="conum" data-value="2" />
  "zipkin": {
    "status": "UP",
    "details": {
      "InMemoryStorage{}": {
        "status": "UP"
      }
    }
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.26DrsA.1" title="原文 : Invoke the Zipkin REST API to check the Zipkin server health.">Zipkin REST APIを起動して、Zipkinサーバーのヘルスを確認します。</span></li>
<li data-value="2"><span class="merged" id="all.2piMv8.1" title="原文 : All status fields should be UP.">すべての<code>status</code>フィールドは<code>UP</code>である必要があります。</span></li>
</ul>
</div>

<h3 id="_enable_tracing_in_your_helidon_application"><span class="merged" id="all.4cHlba.1" title="原文 : Enable Tracing in your Helidon application">Helidonアプリケーションでのトレースの有効化</span></h3>
<div class="section">
<p><span class="merged" id="all.4QXcLZ.1.spl1" title="原文 : Update the pom.xml file and add the following Zipkin dependency to the &lt;dependencies&gt; section (not &lt;dependencyManagement&gt;).">pom.xmlファイルを更新し、次のZipkin依存関係を(<code>&lt;dependencyManagement></code>ではなく)<code>&lt;dependencies></code>セクションに追加します。</span> <span class="merged" id="all.4QXcLZ.1.spl2" title="原文 : This will enable Helidon to use Zipkin at the default host and port, localhost:9411.">これにより、Helidonはデフォルトのホストおよびポートである<code>localhost:9411</code>でZipkinを使用できるようになります。</span> </p>

<markup
lang="xml"
title="次の依存性を<code>pom.xml</code>に追加します:"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing-zipkin&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.G1FbY.1.spl1" title="原文 : All spans sent by Helidon to Zipkin need to be associated with a service.">HelidonからZipkinに送信されるスパンはすべて、サービスに関連付ける必要があります。</span> <span class="merged" id="all.G1FbY.1.spl2" title="原文 : Specify the service name below.">次のサービス名を指定します。</span> </p>

<markup
lang="bash"
title="次の行を<code>resources/application.yaml</code>に追加します:"
>tracing:
  service: helidon-se-1</markup>

<markup
lang="java"
title="<code>Main</code>クラスの更新、WebServerビルダーへのトレーサの追加"
>import io.helidon.tracing.TracerBuilder; <span class="conum" data-value="1" />
...
WebServer server = WebServer.builder(createRouting(config))
                .config(config.get("server"))
                .tracer(TracerBuilder.create(config.get("tracing")).build()) <span class="conum" data-value="2" />
                .addMediaSupport(JsonpSupport.create())
                .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.348lZH" title="原文 : Add a new import statement.">新しいimport文を追加します。</span></li>
<li data-value="2"><span class="merged" id="all.4QGvva" title="原文 : Build and register a Tracer object using the tracing configuration.">トレース構成を使用して<code>Tracer</code>オブジェクトをビルドおよび登録します。</span></li>
</ul>
<markup
lang="java"
title="<code>GreetService</code>クラスを更新します。1)新しいインポートを追加し、2) <code>getDefaultMessageHandler</code>メソッドを置き換えます:"
>import io.opentracing.Span; <span class="conum" data-value="1" />
...
    private void getDefaultMessageHandler(ServerRequest request,
                                   ServerResponse response) {

        var spanBuilder = request.tracer()  <span class="conum" data-value="2" />
                .buildSpan("getDefaultMessageHandler");  <span class="conum" data-value="3" />
        request.spanContext().ifPresent(spanBuilder::asChildOf);  <span class="conum" data-value="4" />
        Span span = spanBuilder.start();  <span class="conum" data-value="5" />

        try {
            sendResponse(response, "World");
        } finally {
            span.finish();  <span class="conum" data-value="6" />
        }
    }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3a5iel.1" title="原文 : Add new import statement.">新しいimport文を追加します。</span></li>
<li data-value="2"><span class="merged" id="all.ayv22" title="原文 : Get the Tracer object from the request.">リクエストから<code>Tracer</code>オブジェクトを取得します。</span></li>
<li data-value="3"><span class="merged" id="all.3AQwUt" title="原文 : Build a new span named getDefaultMessageHandler."><code>getDefaultMessageHandler</code>という名前の新しいスパンをビルドします。</span></li>
<li data-value="4"><span class="merged" id="all.3M2wWl" title="原文 : Make the new span a child of the current span.">新しいスパンを現在のスパンの子にします。</span></li>
<li data-value="5"><span class="merged" id="all.4FIYRo.spl1" title="原文 : Start the span.">スパンを開始します。</span> <span class="merged" id="all.4FIYRo.spl2" title="原文 : The current timestamp is used as the starting time for the span.">現在のタイムスタンプがスパンの開始時間として使用されます。</span> </li>
<li data-value="6"><span class="merged" id="all.wPZRY.spl1" title="原文 : Finish the span.">スパンを終了します。</span> <span class="merged" id="all.wPZRY.spl2" title="原文 : The current timestamp is used as the ending time for the span.">現在のタイムスタンプがスパンの終了時間として使用されます。</span> </li>
</ul>
<markup
lang="bash"
title="ユニット・テストをスキップしてアプリケーションをビルドし、実行します:"
>mvn package -DskipTests=true
java -jar target/helidon-quickstart-se.jar</markup>

<markup
lang="bash"
title="新しいターミナル・ウィンドウでcurlコマンドを実行し、レスポンスを確認します:"
>curl http://localhost:8080/greet
...
{
  "message": "Hello World!"
}</markup>

</div>

<h3 id="_viewing_tracing_using_zipkin_rest_api"><span class="merged" id="all.FwCgY.1" title="原文 : Viewing tracing using Zipkin REST API">Zipkin REST APIを使用したトレースの表示</span></h3>
<div class="section">
<p><span class="merged" id="all.4TffEX.1.spl1" title="原文 : Because you had tracing enabled, the previous /greet endpoint invocation resulted in a new trace being created.">トレースが有効になっていたため、以前の<code>/greet</code>エンドポイント呼出しによって新しいトレースが作成されました。</span> <span class="merged" id="all.4TffEX.1.spl2" title="原文 : Let&rsquo;s get the trace data that was generated using the Zipkin API.">Zipkin APIを使用して生成されたトレース・データを取得します。</span> <span class="merged" id="all.4TffEX.1.spl3" title="原文 : First, get the service information.">まず、サービス情報を取得します。</span> </p>

<markup
lang="bash"
title="curlコマンドを実行し、レスポンスを確認します:"
>curl http://localhost:9411/api/v2/services
...
["helidon-se-1"] <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4fYlV3" title="原文 : This is the tracing service name specified in resources/application.yaml.">これは、<code>resources/application.yaml</code>で指定されたトレース・サービス名です。</span></li>
</ul>
<p><span class="merged" id="all.12De36.1.spl1" title="原文 : Each span used by a service has a name, which is unique within a trace.">サービスで使用される各スパンには、トレース内で一意の名前が付けられます。</span> <span class="merged" id="all.12De36.1.spl2" title="原文 : If you invoke the /greet endpoint multiple times, you will still get the same set of names."><code>/greet</code>エンドポイントを複数回起動しても、同じ名前のセットが取得されます。</span> </p>

<markup
lang="bash"
title="次のエンドポイントを呼び出し、レスポンスを確認します:"
><span class="conum" data-value="1" />
curl -X GET "http://localhost:9411/api/v2/spans?serviceName=helidon-se-1" -H "accept: application/json"
...
[ <span class="conum" data-value="2" />
  "content-write",
  "getdefaultmessagehandler",
  "http request"
]</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3ZYEjF" title="原文 : Get the span names for the helidon-se-1 service."><code>helidon-se-1</code>サービスのスパン名を取得します。</span></li>
<li data-value="2"><span class="merged" id="all.2iYV00.1.spl1" title="原文 : These are the span names.">スパン名です。</span> <span class="merged" id="all.2iYV00.1.spl2" title="原文 : If you invoke the /greet endpoint again, then invoke the /spans endpoint, you will get the same response."><code>/greet</code>エンドポイントを再度呼び出してから<code>/spans</code>エンドポイントを呼び出すと、同じレスポンスが返されます。</span> </li>
</ul>
<p><span class="merged" id="all.49XJJb" title="原文 : Next, get the spans in the trace as shown below.">次に、次に示すように、トレース内のスパンを取得します。</span></p>

<markup
lang="bash"
title="次のエンドポイントを呼び出し、レスポンスを確認します:"
><span class="conum" data-value="1" />
curl -X GET "http://localhost:9411/api/v2/traces?serviceName=helidon-se-1&amp;limit=1" -H "accept: application/json"
...
[
  [ <span class="conum" data-value="2" />
    {
      "traceId": "f193adb3f2bab3b3",
      "parentId": "f193adb3f2bab3b3", <span class="conum" data-value="3" />
      "id": "1536021daf3845e1",
      "kind": "SERVER",
      "name": "content-write",
      "timestamp": 1568245972222815,
      "duration": 527,
      "localEndpoint": {
        "serviceName": "helidon-se-1",
        "ipv4": "192.168.1.115"
      },
      "tags": {
        "response.type": "org.glassfish.json.JsonObjectBuilderImpl$JsonObjectImpl"
      }
    },
...
(truncated)
]</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2gOy8X.1.spl1" title="原文 : Get the newest trace only, using the limit=1 query param."><code>limit=1</code>問合せパラメータを使用して、最新のトレースのみを取得します。</span> <span class="merged" id="all.2gOy8X.1.spl2" title="原文 : There are other query params that let you restrict results to a specific time window.">結果を特定の時間ウィンドウに制限できる他の問合せパラメータがあります。</span> </li>
<li data-value="2"><span class="merged" id="all.zALtW" title="原文 : The request will return 3 spans, one for each name.">リクエストでは、名前ごとに1つずつ3つのスパンが返されます。</span></li>
<li data-value="3"><span class="merged" id="all.aUT9J" title="原文 : Each span has a parentId field, except the http request span, which is the root.">各スパンには<code>parentId</code>フィールドがありますが、<code>http request</code>スパンはルートです。</span></li>
</ul>
</div>

<h3 id="_viewing_tracing_using_zipkin_ui"><span class="merged" id="all.1kEq1N.1" title="原文 : Viewing tracing using Zipkin UI">Zipkin UIを使用したトレースの表示</span></h3>
<div class="section">
<p><span class="merged" id="all.3QQdrU.spl1" title="原文 : The tracing output data is verbose and can be difficult to interpret using the REST API, especially since it represents a structure of spans.">トレース出力データは冗長であり、特にスパンの構造を表すため、REST APIを使用した解釈が困難な場合があります。</span> <span class="merged" id="all.3QQdrU.spl2" title="原文 : Zipkin provides a web-based UI at http://localhost:9411/zipkin, where you can see a visual representation of the same data and the relationship between spans within a trace.">Zipkinは、<a href="http://localhost:9411/zipkin" id="" target="_blank" >http://localhost:9411/zipkin</a>でwebベースのUIを提供します。このUIを使用すると、同じデータおよびトレース内のスパン間の関係を視覚的に表示できます。</span> </p>

<p><span class="merged" id="all.1nDzBB.1.spl1" title="原文 : Click on the UI refresh button (the search icon) as shown in the image below.">次の図に示すように、UIリフレッシュ・ボタン(検索アイコン)をクリックします。</span> <span class="merged" id="all.1nDzBB.1.spl2" title="原文 : Notice that you can change the look-back time to restrict the trace list.">ルック・バック時間を変更してトレース・リストを制限できることに注意してください。</span> </p>


<div class="block-title"><span class="merged" id="all.47wpfs.1" title="原文 : Trace refresh"><span>トレース・リフレッシュ</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden"> <img alt="リフレッシュのトレース" src="./images/guides/12_tracing_se_refresh.png" /> </v-card-text> </v-card>

<p><span class="merged" id="all.1nGM01.1.spl1" title="原文 : The image below shows the trace summary, including start time and duration of each trace.">次の図は、各トレースの開始時間および継続時間を含むトレース・サマリーを示しています。</span> <span class="merged" id="all.1nGM01.1.spl2" title="原文 : There are two traces, each one generated in response to a curl http://localhost:8080/greet invocation.">2つのトレースがあり、それぞれが<code>curl <a href="http://localhost:8080/greet" id="" target="_blank" >http://localhost:8080/greet</a></code>呼出しにレスポンスして生成されます。</span> <span class="merged" id="all.1nGM01.1.spl3" title="原文 : The oldest trace will have a much longer duration since there is one-time initialization that occurs.">1回限りの初期化が行われるため、最も古いトレースの継続時間が大幅に長くなります。</span> </p>


<div class="block-title"><span class="merged" id="all.SxAZs.1" title="原文 : Tracing list view"><span>トレース・リスト・ビュー</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden"> <img alt="トレース" src="./images/guides/12_tracing_se_top.png" /> </v-card-text> </v-card>

<p><span class="merged" id="all.1E1EsL.1.spl1" title="原文 : Click on a trace and you will see the trace detail page where the spans are listed.">トレースをクリックすると、スパンがリストされたトレース詳細ページが表示されます。</span> <span class="merged" id="all.1E1EsL.1.spl2" title="原文 : You can clearly see the root span and the relationship among all the spans in the trace, along with timing information.">ルート・スパンおよびトレース内のすべてのスパン間の関係をタイミング情報とともに明確に確認できます。</span> </p>


<div class="block-title"><span class="merged" id="all.3R0m3q.1" title="原文 : Trace detail page"><span>トレース詳細ページ</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden"> <img alt="トレース詳細" src="./images/guides/12_tracing_se_detail.png" /> </v-card-text> </v-card>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3uBtit.spl1" title="原文 : A parent span might not depend on the result of the child.">親スパンは、子の結果に依存しない場合があります。</span> <span class="merged" id="all.3uBtit.spl2" title="原文 : This is called a FollowsFrom reference, see Open Tracing Semantic Spec.">これは<code>FollowsFrom</code>参照と呼ばれます。<a href="https://github.com/opentracing/specification/blob/master/specification.md" id="" target="_blank" >「トレース・セマンティクス仕様のオープン」</a>を参照してください。</span> </p>
</div>
<p><span class="merged" id="all.pmgGA.spl1" title="原文 : You can examine span details by clicking on the span row.">スパン行をクリックすると、スパンの詳細を確認できます。</span> <span class="merged" id="all.pmgGA.spl2" title="原文 : Refer to the image below, which shows the span details, including timing information.">次の図を参照してください。ここには、時間情報を含むスパンの詳細が表示されています。</span> <span class="merged" id="all.pmgGA.spl3" title="原文 : You can see times for each space relative to the root span.">ルート・スパンに対して相対的な各スペースの時間を表示できます。</span> <span class="merged" id="all.pmgGA.spl4" title="原文 : These rows are annotated with Server Start and Server Finish, as shown in the third column.">これらの行には、3番目の列に示すように、<code>Server Start</code>および<code>Server Finish</code>の注釈が付けられます。</span> </p>


<div class="block-title"><span class="merged" id="all.3Rgo5C.1" title="原文 : Span detail page"><span>スパン詳細ページ</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden"> <img alt="スパン詳細" src="./images/guides/12_tracing_se_span_detail.png" /> </v-card-text> </v-card>

</div>

<h3 id="_tracing_across_services"><span class="merged" id="all.31eJFj.1" title="原文 : Tracing across services">サービス間のトレース</span></h3>
<div class="section">
<p><span class="merged" id="all.2YZq4W.1.spl1" title="原文 : Helidon automatically traces across services, providing that the services use the same tracer, for example, the same instance of Zipkin.">Helidonは、サービス間で自動的にトレースを行い、サービスが同じトレーサ(Zipkinの同じインスタンスなど)を使用するようにします。</span> <span class="merged" id="all.2YZq4W.1.spl2" title="原文 : This means a single trace can include spans from multiple services and hosts.">つまり、単一のトレースに複数のサービスおよびホストからのスパンを含めることができます。</span> <span class="merged" id="all.2YZq4W.1.spl3" title="原文 : OpenTracing uses a SpanContext to propagate tracing information across process boundaries.">OpenTracingは、<code>SpanContext</code>を使用して、プロセス境界を越えてトレース情報を伝播します。</span> <span class="merged" id="all.2YZq4W.1.spl4" title="原文 : When you make client API calls, Helidon will internally call OpenTracing APIs to propagate the SpanContext.">クライアントAPIコールを行うと、Helidonは内部的にOpenTracing APIをコールして<code>SpanContext</code>を伝播します。</span> <span class="merged" id="all.2YZq4W.1.spl5" title="原文 : There is nothing you need to do in your application to make this work.">これを機能させるためにアプリケーションで行う必要があることはありません。</span> </p>

<p><span class="merged" id="all.4NkwkZ.1.spl1" title="原文 : To demonstrate distributed tracing, you will need to create a second project, where the server listens on port 8081.">分散トレースを示すには、サーバーがポート8081でリスニングする別のプロジェクトを作成する必要があります。</span> <span class="merged" id="all.4NkwkZ.1.spl2" title="原文 : Create a new root directory to hold this new project, then do the following steps, similar to what you did at the start of this guide:">この新しいプロジェクトを格納する新しいルート・ディレクトリを作成し、このガイドの冒頭で行ったステップと同様に次のステップを実行します:</span> </p>

</div>

<h3 id="_create_the_second_service"><span class="merged" id="all.7IrYU" title="原文 : Create the second service">2つ目のサービスの作成</span></h3>
<div class="section">
<markup
lang="bash"
title="Maven原型を実行します:"
>mvn -U archetype:generate -DinteractiveMode=false \
    -DarchetypeGroupId=io.helidon.archetypes \
    -DarchetypeArtifactId=helidon-quickstart-se \
    -DarchetypeVersion=2.2.1-SNAPSHOT \
    -DgroupId=io.helidon.examples \
    -DartifactId=helidon-quickstart-se-2 \
    -Dpackage=io.helidon.examples.quickstart.se</markup>

<markup
lang="bash"
title="プロジェクトは、<code>helidon-quickstart-se</code>ディレクトリからビルドおよび実行されます:"
>cd helidon-quickstart-se-2</markup>

<markup
lang="xml"
title="次の依存性を<code>pom.xml</code>に追加します:"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing-zipkin&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<markup
lang="bash"
title="<code>resources/application.yaml</code>を次のように置き換えます:"
>app:
  greeting: "Hello From SE-2"

tracing:
  service: "helidon-se-2"

server:
  port: 8081
  host: 0.0.0.0</markup>

<markup
lang="java"
title="<code>Main</code>クラスの更新、WebServerビルダーへのトレーサの追加"
>import io.helidon.tracing.TracerBuilder;
...
WebServer server = WebServer.builder(createRouting(config))
                .config(config.get("server"))
                .tracer(TracerBuilder.create(config.get("tracing")).build())
                .addMediaSupport(JsonpSupport.create())
                .build();</markup>

<markup
lang="java"
title="<code>GreetService</code>クラスを更新します。1)新規インポートを追加し、2) <code>getDefaultMessageHandler</code>メソッドを置換します:"
>import io.opentracing.Span;
...
    private void getDefaultMessageHandler(ServerRequest request,
                                   ServerResponse response) {

        var spanBuilder = request.tracer()
                .buildSpan("getDefaultMessageHandler");
        request.spanContext().ifPresent(spanBuilder::asChildOf);
        Span span = spanBuilder.start();

        try {
            sendResponse(response, "World");
        } finally {
            span.finish();
        }
    }</markup>

<markup
lang="bash"
title="ユニット・テストをスキップしてアプリケーションをビルドし、実行します:"
>mvn package -DskipTests=true
java -jar target/helidon-quickstart-se-2.jar</markup>

<markup
lang="bash"
title="新しいターミナル・ウィンドウでcurlコマンドを実行し、レスポンスを確認します(<strong>ポートが8081であることに注意</strong>) :"
>curl http://localhost:8081/greet
...
{
  "message": "Hello From SE-2 World!"
}</markup>

</div>

<h3 id="_modify_the_first_service"><span class="merged" id="all.tF0GP.1" title="原文 : Modify the first service">最初のサービスの変更</span></h3>
<div class="section">
<p><span class="merged" id="all.4Yeqrw.1" title="原文 : Once you have validated that the second service is running correctly, you need to modify the original application to call it.">2つ目のサービスが正しく実行されていることを確認したら、元のアプリケーションを変更してコールする必要があります。</span></p>

<markup
lang="xml"
title="次の依存性を<code>pom.xml</code>に追加します:"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.security.integration&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-security-integration-jersey&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing-jersey-client&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.glassfish.jersey.core&lt;/groupId&gt;
    &lt;artifactId&gt;jersey-client&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.glassfish.jersey.inject&lt;/groupId&gt;
    &lt;artifactId&gt;jersey-hk2&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<markup
lang="java"
title="<code>GreetService</code>クラスを次のコードに置き換えます:"
>package io.helidon.examples.quickstart.se;

import io.helidon.common.http.Http;
import io.helidon.config.Config;
import io.helidon.tracing.jersey.client.ClientTracingFilter;
import io.helidon.webserver.Routing;
import io.helidon.webserver.ServerRequest;
import io.helidon.webserver.ServerResponse;
import io.helidon.webserver.Service;
import io.opentracing.Span;
import java.util.Collections;
import java.util.concurrent.atomic.AtomicReference;
import javax.json.Json;
import javax.json.JsonBuilderFactory;
import javax.json.JsonObject;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.client.WebTarget;

public class GreetService implements Service {

  private final AtomicReference&lt;String&gt; greeting = new AtomicReference&lt;&gt;();
  private WebTarget webTarget;
  private static final JsonBuilderFactory JSON = Json.createBuilderFactory(Collections.emptyMap());

  GreetService(Config config) {
    greeting.set(config.get("app.greeting").asString().orElse("Ciao"));

    Client jaxRsClient = ClientBuilder.newBuilder().build();

    webTarget = jaxRsClient.target("http://localhost:8081/greet");
  }

  @Override
  public void update(Routing.Rules rules) {
    rules
        .get("/", this::getDefaultMessageHandler)
        .get("/outbound", this::outboundMessageHandler) <span class="conum" data-value="1" />
        .put("/greeting", this::updateGreetingHandler);
  }

  private void getDefaultMessageHandler(ServerRequest request, ServerResponse response) {

    var spanBuilder = request.tracer()
                .buildSpan("getDefaultMessageHandler");
    request.spanContext().ifPresent(spanBuilder::asChildOf);
    Span span = spanBuilder.start();

    try {
      sendResponse(response, "World");
    } finally {
      span.finish();
    }
  }

  private void sendResponse(ServerResponse response, String name) {
    String msg = String.format("%s %s!", greeting.get(), name);

    JsonObject returnObject = JSON.createObjectBuilder().add("message", msg).build();
    response.send(returnObject);
  }

  private void updateGreetingFromJson(JsonObject jo, ServerResponse response) {

    if (!jo.containsKey("greeting")) {
      JsonObject jsonErrorObject =
          JSON.createObjectBuilder().add("error", "No greeting provided").build();
      response.status(Http.Status.BAD_REQUEST_400).send(jsonErrorObject);
      return;
    }

    greeting.set(jo.getString("greeting"));
    response.status(Http.Status.NO_CONTENT_204).send();
  }

  private void outboundMessageHandler(ServerRequest request, ServerResponse response) {
    Invocation.Builder requestBuilder = webTarget.request();

    <span class="conum" data-value="2" />
    var spanBuilder = request.tracer()
                .buildSpan("outboundMessageHandler");
    request.spanContext().ifPresent(spanBuilder::asChildOf);
    Span span = spanBuilder.start();

    try {
      requestBuilder.property(
          ClientTracingFilter.CURRENT_SPAN_CONTEXT_PROPERTY_NAME, request.spanContext());  <span class="conum" data-value="3" />

      requestBuilder   <span class="conum" data-value="4" />
          .rx()
          .get(String.class)
          .thenAccept(response::send)
          .exceptionally(
              throwable -&gt; {
                // process exception
                response.status(Http.Status.INTERNAL_SERVER_ERROR_500);
                response.send("Failed with: " + throwable);
                return null;
              });
    } finally {
      span.finish();   <span class="conum" data-value="5" />
    }
  }

  private void updateGreetingHandler(ServerRequest request, ServerResponse response) {
    request.content().as(JsonObject.class).thenAccept(jo -&gt; updateGreetingFromJson(jo, response));
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2ujO3r" title="原文 : Add outboundMessageHandler to the routing rules."><code>outboundMessageHandler</code>をルーティング・ルールに追加します。</span></li>
<li data-value="2"><span class="merged" id="all.3Y27sf" title="原文 : Create and start a span that is a child of the current span.">現在のスパンの子であるスパンを作成して開始します。</span></li>
<li data-value="3"><span class="merged" id="all.2Y45Y9" title="原文 : Set a property with the SpanContext."><code>SpanContext</code>を使用してプロパティを設定します。</span></li>
<li data-value="4"><span class="merged" id="all.2oaHTK" title="原文 : Invoke the second service.">2つ目のサービスを呼び出します。</span></li>
<li data-value="5"><span class="merged" id="all.3oyVeC" title="原文 : Stop the span.">スパンを停止します。</span></li>
</ul>
<markup
lang="bash"
title="アプリケーションをビルドして実行し、エンドポイントを呼び出してレスポンスを確認します:"
>curl -i http://localhost:8080/greet/outbound <span class="conum" data-value="1" />
...
{
  "message": "Hello From SE-2 World!" <span class="conum" data-value="2" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.RxuwD.1" title="原文 : The request went to the service on 8080, which then invoked the service at 8081 to get the greeting.">リクエストは<code>8080</code>のサービスに送信され、そこで応答メッセージを取得するために<code>8081</code>のサービスが呼び出されました。</span></li>
<li data-value="2"><span class="merged" id="all.3MDSsa.1" title="原文 : Notice the greeting came from the second service.">グリーティングは2番目のサービスから発信されたものです。</span></li>
</ul>
<p><span class="merged" id="all.46IPZq.1" title="原文 : Refresh the Zipkin UI trace listing page and notice that there is a trace across two services.">Zipkin UIのトレース・リスト・ページをリフレッシュして、2つのサービス間にトレースがあることを確認します。</span></p>


<div class="block-title"><span class="merged" id="all.1binQH.1" title="原文 : Tracing multiple service list view"><span>複数のサービス・リスト・ビューのトレース</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden"> <img alt="トレース" src="./images/guides/12_tracing_se_top_2_services.png" /> </v-card-text> </v-card>

<p><span class="merged" id="all.2hcsHl.1" title="原文 : Click on the trace with two services to see the detail view.">2つのサービスがあるトレースをクリックすると、詳細ビューが表示されます。</span></p>


<div class="block-title"><span class="merged" id="all.4KFGiL.1" title="原文 : Tracing across multiple services detail view"><span>複数のサービスの詳細ビューにわたるトレース</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden"> <img alt="トレース" src="./images/guides/12_tracing_se_detail_2_services.png" /> </v-card-text> </v-card>

<p><span class="merged" id="all.2tC87V.1.spl1" title="原文 : In the image above, you can see that the trace includes spans from two services.">上の図では、トレースに2つのサービスのスパンが含まれていることがわかります。</span> <span class="merged" id="all.2tC87V.1.spl2" title="原文 : You will notice there is a gap before the sixth span, which is a get operation.">6つ目のスパン(<code>get</code>操作)の前にギャップがあります。</span> <span class="merged" id="all.2tC87V.1.spl3" title="原文 : This is a one-time client initialization delay.">これは、ワンタイム・クライアント初期化の遅延です。</span> <span class="merged" id="all.2tC87V.1.spl4" title="原文 : Run the /outbound curl command again and look at the new trace to see that the delay no longer exists."><code>/outbound</code> curlコマンドを再度実行し、新しいトレースを調べて遅延が存在しないことを確認します。</span> </p>

<p><span class="merged" id="all.46D0a4" title="原文 : You can now stop your second service, it is not longer used in this guide.">これで、2つ目のサービスを停止できます。このガイドでは使用しません。</span></p>

</div>
</div>

<h2 id="_integration_with_kubernetes"><span class="merged" id="all.4PhaKc.3" title="原文 : Integration with Kubernetes">Kubernetesとの統合</span></h2>
<div class="section">
<p><span class="merged" id="all.1kg8xe.1" title="原文 : The following example demonstrate how to use Zipkin from a Helidon application running in Kubernetes.">次の例では、Kubernetesで実行されているHelidonアプリケーションからZipkinを使用する方法を示します。</span></p>

<markup
lang="bash"
title="<code>resources/application.yaml</code>のトレース構成を次のものに置き換えます:"
><span class="conum" data-value="1" />
tracing:
  service: helidon-se-1
  host: zipkin</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1Wg1Kg" title="原文 : Helidon service helidon-se-1 will connect to the Zipkin server at host name zipkin.">Helidonサービス<code>helidon-se-1</code>は、ホスト名<code>zipkin</code>でZipkinサーバーに接続します。</span></li>
</ul>
<markup
lang="bash"
title="アプリケーションを停止し、アプリケーションのdockerイメージをビルドします:"
>docker build -t helidon-tracing-se .</markup>


<h3 id="_deploy_zipkin_into_kubernetes"><span class="merged" id="all.34vc5y.1" title="原文 : Deploy Zipkin into Kubernetes">KubernetesへのZipkinのデプロイ</span></h3>
<div class="section">
<markup
lang="yaml"
title="次の内容で、<code>zipkin.yaml</code>という名前のKubernetes YAML仕様を作成します:"
>apiVersion: v1
kind: Service
metadata:
  name: zipkin
spec:
  ports:
    - port: 9411
      protocol: TCP
  selector:
    app: zipkin
---
kind: Pod
apiVersion: v1
metadata:
  name: zipkin
  labels:
    app: zipkin
spec:
  containers:
    - name: zipkin
      image: openzipkin/zipkin
      imagePullPolicy: IfNotPresent
      ports:
        - containerPort: 9411</markup>

<markup
lang="bash"
title="ZipkinポッドおよびClusterIPサービスを作成します:"
>kubectl apply -f ./zipkin.yaml</markup>

<markup
lang="bash"
title="Zipkin外部サーバーを作成してUIを表示し、ポート9142で公開します:"
>kubectl expose pod  zipkin --name=zipkin-external --port=9412 --target-port=9411 --type=LoadBalancer</markup>

<p><span class="merged" id="all.2FDwiI.1.spl1" title="原文 : Navigate to http://localhost:9412/zipkin to validate that you can access Zipkin running in Kubernetes."><a href="http://localhost:9412/zipkin" id="" target="_blank" >http://localhost:9412/zipkin</a>に移動して、Kubernetesで実行されているZipkinにアクセスできることを確認します。</span> <span class="merged" id="all.2FDwiI.1.spl2" title="原文 : It may take a few seconds before it is ready.">準備ができるまで数秒かかる場合があります。</span> </p>

</div>

<h3 id="_deploy_your_helidon_application_into_kubernetes"><span class="merged" id="all.4BsCDY.1" title="原文 : Deploy your Helidon application into Kubernetes">KubernetesへのHelidonアプリケーションのデプロイ</span></h3>
<div class="section">
<markup
lang="yaml"
title="次の内容で、<code>tracing.yaml</code>という名前のKubernetes YAML仕様を作成します:"
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
apiVersion: extensions/v1beta1
metadata:
  name: helidon-tracing
spec:
  replicas: 1 <span class="conum" data-value="2" />
  template:
    metadata:
      labels:
        app: helidon-tracing
        version: v1
    spec:
      containers:
        - name: helidon-tracing
          image: helidon-tracing-se
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 8080</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3s9wLQ.7" title="原文 : A service of type NodePort that serves the default routes on port 8080.">ポート<code>8080</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
<li data-value="2"><span class="merged" id="all.1dhwFj.7" title="原文 : A deployment with one replica of a pod.">ポッドの1つのレプリカを持つデプロイメント。</span></li>
</ul>
<markup
lang="bash"
title="アプリケーションを作成し、Kubernetesにデプロイします:"
>kubectl apply -f ./tracing.yaml</markup>

</div>

<h3 id="_access_your_application_and_the_zipkin_trace"><span class="merged" id="all.2jukVs.1" title="原文 : Access your application and the Zipkin trace">アプリケーションおよびZipkinトレースへのアクセス</span></h3>
<div class="section">
<markup
lang="bash"
title="アプリケーション・サービス情報を取得します:"
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
title="ポート<code>31143</code>を使用してトレース・エンドポイントを検証します。実際のポートは異なる可能性があります:"
>curl http://localhost:31143/greet
...
{
  "message": "Hello World!"
}</markup>

<p><span class="merged" id="all.3Lj0G9.1" title="原文 : Access the Zipkin UI at http://localhost:9412/zipkin and click on the refresh icon to see the trace that was just created."><a href="http://localhost:9412/zipkin" id="" target="_blank" >http://localhost:9412/zipkin</a>でZipkin UIにアクセスし、リフレッシュ・アイコンをクリックすると、作成されたトレースが表示されます。</span></p>

</div>

<h3 id="_cleanup"><span class="merged" id="all.6lMSz.1"  title="原文:: Cleanup">クリーンアップ</span></h3>
<div class="section">
<p><span class="merged" id="all.HBnIV.5" title="原文 : You can now delete the Kubernetes resources that were just created during this example.">これで、この例で作成したKubernetesリソースを削除できます。</span></p>

<markup
lang="bash"
title="Kubernetesリソースを削除します:"
>kubectl delete -f ./zipkin.yaml
kubectl delete -f ./tracing.yaml
kubectl delete service zipkin-external
docker rm -f zipkin</markup>

</div>
</div>

<h2 id="_summary"><span class="merged" id="all.1nTCR.8"  title="原文:: Summary">サマリー</span></h2>
<div class="section">
<p><span class="merged" id="all.3tyPuM.spl1" title="原文 : This guide has demonstrated how to use the Helidon SE tracing feature with Zipkin.">このガイドでは、ZipkinでHelidon SEトレース機能を使用する方法について説明しました。</span> <span class="merged" id="all.3tyPuM.spl2" title="原文 : You have learned to do the following:">次のことを学習しました:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4BVMNe.1" title="原文 : Enable tracing within a service">サービス内でのトレースの有効化</span></p>

</li>
<li>
<p><span class="merged" id="all.2JYmSj" title="原文 : Use tracing with JAX-RS">JAX-RSでのトレースの使用</span></p>

</li>
<li>
<p><span class="merged" id="all.3JBgiY.1" title="原文 : Use the Zipkin REST API and UI">Zipkin REST APIおよびUIの使用</span></p>

</li>
<li>
<p><span class="merged" id="all.4CqrM5.1" title="原文 : Use tracing across multiple services">複数のサービスにわたるトレースの使用</span></p>

</li>
<li>
<p><span class="merged" id="all.1csFZR.1" title="原文 : Integrate tracing with Kubernetes">トレースとKubernetesの統合</span></p>

</li>
</ul>
<p><span class="merged" id="all.UfWha.5" title="原文 : Refer to the following references for additional information:">詳細は、次のリファレンスを参照してください:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4WrehP.1" title="原文 : MicroProfile OpenTracing specification at https://github.com/eclipse/microprofile-opentracing/releases/tag/1.3">MicroProfile OpenTracing仕様(<a href="https://github.com/eclipse/microprofile-opentracing/releases/tag/1.3" id="" target="_blank" >https://github.com/eclipse/microprofile-opentracing/releases/tag/ 1.3</a>)</span></p>

</li>
<li>
<p><span class="merged" id="all.1m3bP8.7" title="原文 : Helidon Javadoc at https://helidon.io/docs/latest/apidocs/index.html?overview-summary.html"><a href="https://helidon.io/docs/latest/apidocs/index.html?overview-summary.html" id="" target="_blank" >https://helidon.io/docs/latest/apidocs/index.html?overview-summary.html</a>のHelidon Javadoc</span></p>

</li>
</ul>
</div>
</doc-view>
