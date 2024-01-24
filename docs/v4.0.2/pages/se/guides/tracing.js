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


<h2 id="_what_you_need"><span class="merged" id="all.27ZcMH.21"  title="原文:: What You Need">必要事項</span></h2>
<div class="section">
<p><span class="merged" id="all.4BUptU.4" title="原文 : For this 30 minute tutorial, you will need the following:">この30分のチュートリアルでは、次のものが必要です:</span></p>


<div class="table__overflow elevation-1  flex sm7
">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3EWh8P.8" title="原文 : A Helidon SE Application">Helidon SEアプリケーション</span></td>
<td class=""><span class="merged" id="all.3f8L7i.8" title="原文 : You can use your own application or use the Helidon SE Quickstart to create a sample application.">独自のアプリケーションを使用するか、<router-link to="/se/guides/quickstart">「Helidon SEクイックスタート」</router-link>を使用してサンプル・アプリケーションを作成できます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.17vEm3.23" title="原文 : Java&#160;SE&#160;21 (Open&#160;JDK&#160;21)"><a href="https://www.oracle.com/technetwork/java/javase/downloads" target="_blank">Java SE 21</a> (<a href="http://jdk.java.net" target="_blank">JDK 21を開く</a>)</span></td>
<td class=""><span class="merged" id="all.3uVV7D.23" title="原文 : Helidon requires Java 21+.">HelidonにはJava 21+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.UWTyd.23" title="原文 : Maven 3.8+"><a href="https://maven.apache.org/download.cgi" target="_blank">Maven 3.8+</a></span></td>
<td class=""><span class="merged" id="all.47RJEf.23" title="原文 : Helidon requires Maven 3.8+.">HelidonにはMaven 3.8+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ND1mN.23"  title="原文:: Docker 18.09+"><a href="https://docs.docker.com/install/" target="_blank">Docker 18.09+</a></span></td>
<td class=""><span class="merged" id="all.aX1BT.23" title="原文 : You need Docker if you want to build and deploy Docker containers.">Dockerコンテナをビルドおよびデプロイする場合は、Dockerが必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Lo77h.23"  title="原文:: Kubectl 1.16.5+"><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" target="_blank">Kubectl 1.16.5+</a></span></td>
<td class=""><span class="merged" id="all.1JBSOB.23" title="原文 : If you want to deploy to Kubernetes, you need kubectl and a Kubernetes cluster (you can install one on your desktop.">Kubernetesにデプロイする場合は、<code>kubectl</code>およびKubernetesクラスタが必要です (<router-link to="/about/kubernetes">「デスクトップにインストール」</router-link>できます)。</span></td>
</tr>
</tbody>
</table>
</div>

<markup
lang="bash"
title="Verify Prerequisites"
>java -version
mvn --version
docker --version
kubectl version --short</markup>

<markup
lang="bash"
title="Setting JAVA_HOME"
># On Mac
export JAVA_HOME=`/usr/libexec/java_home -v 21`

# On Linux
# Use the appropriate path to your JDK
export JAVA_HOME=/usr/lib/jvm/jdk-21</markup>

</div>


<h2 id="_introduction"><span class="merged" id="all.4LJMHk.18"  title="原文:: Introduction">導入</span></h2>
<div class="section">
<p><span class="merged" id="all.eueyM.spl1" title="原文 : Distributed tracing is a critical feature of microservice-based applications, since it traces workflow both within a service and across multiple services.">分散トレースは、サービス内と複数のサービスの両方でワークフローをトレースするため、マイクロサービス・ベースのアプリケーションの重要な機能です。</span> <span class="merged" id="all.eueyM.spl2" title="原文 : This provides insight to sequence and timing data for specific blocks of work, which helps you identify performance and operational issues.">これにより、特定の作業ブロックのデータを順序付けおよびタイミング化するための洞察が得られ、パフォーマンスおよび操作上の問題を識別するのに役立ちます。</span> <span class="merged" id="all.eueyM.spl3" title="原文 : Helidon includes support for distributed tracing through its own API, backed by either through the OpenTelemetry API, or by OpenTracing API.">Helidonには、<a href="https://opentelemetry.io/docs/instrumentation/js/api/tracing/" target="_blank">OpenTelemetry API</a>または<a href="https://opentracing.io" target="_blank">OpenTracing API</a>によってサポートされる、独自のAPIによる分散トレースのサポートが含まれています。</span> </p>


<h3 id="_tracing_concepts"><span class="merged" id="all.PijGb.1" title="原文 : Tracing Concepts">トレースの概念</span></h3>
<div class="section">
<p><span class="merged" id="all.30xPV6.spl1" title="原文 : This section explains a few concepts that you need to understand before you get started with tracing.">この項では、トレースを開始する前に理解しておく必要がある概念について説明します。</span> <span class="merged" id="all.30xPV6.spl2" title="原文 : In the context of this document, a service is synonymous with an application.">このドキュメントでは、サービスはアプリケーションと同義です。</span> <span class="merged" id="all.30xPV6.spl3" title="原文 : A span is the basic unit of work done within a single service, on a single host."><em>「スパン」</em>は、単一のホスト上の単一のサービス内で実行される基本的な作業単位です。</span> <span class="merged" id="all.30xPV6.spl4" title="原文 : Every span has a name, starting timestamp, and duration.">すべてのスパンには、名前、開始タイムスタンプおよび期間があります。</span> <span class="merged" id="all.30xPV6.spl5" title="原文 : For example, the work done by a REST endpoint is a span.">たとえば、RESTエンドポイントによって実行される作業はスパンです。</span> <span class="merged" id="all.30xPV6.spl6" title="原文 : A span is associated to a single service, but its descendants can belong to different services and hosts.">スパンは単一のサービスに関連付けられますが、その子孫は異なるサービスおよびホストに属することができます。</span> <span class="merged" id="all.30xPV6.spl7" title="原文 : A trace contains a collection of spans from one or more services, running on one or more hosts."><em>「トレース」</em>には、1つ以上のホストで実行されている、1つ以上のサービスからのスパンのコレクションが含まれています。</span> <span class="merged" id="all.30xPV6.spl8" title="原文 : For example, if you trace a service endpoint that calls another service, then the trace would contain spans from both services.">たとえば、別のサービスを呼び出すサービス・エンドポイントをトレースする場合、トレースには両方のサービスのスパンが含まれます。</span> <span class="merged" id="all.30xPV6.spl9" title="原文 : Within a trace, spans are organized as a directed acyclic graph (DAG) and can belong to multiple services, running on multiple hosts.">トレース内では、スパンはDirected Acyclic Graph (DAG)として編成され、複数のホストで実行されている複数のサービスに属することができます。</span> <span class="merged" id="all.30xPV6.spl10" title="原文 : Spans are automatically created by Helidon as needed during execution of the REST request.">スパンは、RESTリクエストの実行時に、必要に応じてHelidonによって自動的に作成されます。</span> </p>

</div>

</div>


<h2 id="_getting_started_with_tracing"><span class="merged" id="all.3A1SV5.1" title="原文 : Getting Started with Tracing">トレースの開始</span></h2>
<div class="section">
<p><span class="merged" id="all.8AilZ.spl1" title="原文 : The examples in this guide demonstrate how to integrate tracing with Helidon, how to view traces, how to trace across multiple services, and how to integrate with tracing with Kubernetes.">このガイドの例では、トレースをHelidonと統合する方法、トレースを表示する方法、複数のサービス間でトレースする方法、およびトレースをKubernetesと統合する方法について説明しています。</span> <span class="merged" id="all.8AilZ.spl2" title="原文 : All examples use Jaeger and traces will be viewed using the Jaeger UI.">すべての例はJaegerを使用し、トレースはJaeger UIを使用して表示されます。</span> </p>


<h3 id="_create_a_sample_helidon_se_project"><span class="merged" id="all.4L3FLA.2" title="原文 : Create a Sample Helidon SE Project">サンプルHelidon SEプロジェクトの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.36DQ1d.2" title="原文 : Use the Helidon SE Maven archetype to create a simple project that can be used for the examples in this guide.">Helidon SE Maven原型を使用して、このガイドの例で使用できる単純なプロジェクトを作成します。</span></p>

<markup
lang="bash"
title="Run the Maven archetype:"
>mvn -U archetype:generate -DinteractiveMode=false \
    -DarchetypeGroupId=io.helidon.archetypes \
    -DarchetypeArtifactId=helidon-quickstart-se \
    -DarchetypeVersion=4.0.2 \
    -DgroupId=io.helidon.examples \
    -DartifactId=helidon-quickstart-se \
    -Dpackage=io.helidon.examples.quickstart.se</markup>

<markup
lang="bash"
title="The project will be built and run from the <code>helidon-quickstart-se</code> directory:"
>cd helidon-quickstart-se</markup>

</div>


<h3 id="_set_up_jaeger"><span class="merged" id="all.19I6pn.2" title="原文 : Set up Jaeger">Jaegerの設定</span></h3>
<div class="section">
<p><span class="merged" id="all.3bTUZi.2.spl1" title="原文 : First, you need to run the Jaeger tracer.">まず、Jaegerトレーサを実行する必要があります。</span> <span class="merged" id="all.3bTUZi.2.spl2" title="原文 : Helidon will communicate with this tracer at runtime.">Helidonは、実行時にこのトレーサと通信します。</span> </p>

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
<li data-value="1"><span class="merged" id="all.3uWfHi.2" title="原文 : Run the Jaeger docker image.">Jaeger dockerイメージを実行します。</span></li>
</ul>

</div>


<h3 id="_enable_tracing_in_the_helidon_application"><span class="merged" id="all.4QlQk3.1" title="原文 : Enable Tracing in the Helidon Application">Helidonアプリケーションでのトレースの有効化</span></h3>
<div class="section">
<p><span class="merged" id="all.3zaPSv.1.spl1" title="原文 : Update the pom.xml file and add the following Jaeger dependency to the &lt;dependencies&gt; section (not &lt;dependencyManagement&gt;).">pom.xmlファイルを更新し、次のJaeger依存関係を<code>&lt;dependencies></code>セクション(<code>&lt;dependencyManagement></code>ではなく)に追加します。</span> <span class="merged" id="all.3zaPSv.1.spl2" title="原文 : This will enable Helidon to use Jaeger at the default host and port, localhost:14250.">これにより、Helidonがデフォルトのホストおよびポート<code>localhost:14250</code>でJaegerを使用できるようになります。</span> </p>

<markup
lang="xml"
title="Add the following dependencies to <code>pom.xml</code>:"
> &lt;dependency&gt;
     &lt;groupId&gt;io.helidon.tracing&lt;/groupId&gt;
     &lt;artifactId&gt;helidon-tracing&lt;/artifactId&gt;   <span class="conum" data-value="1" />
 &lt;/dependency&gt;
 &lt;dependency&gt;
     &lt;groupId&gt;io.helidon.webserver.observe&lt;/groupId&gt;
     &lt;artifactId&gt;helidon-webserver-observe-tracing&lt;/artifactId&gt; <span class="conum" data-value="2" />
 &lt;/dependency&gt;
 &lt;dependency&gt;
     &lt;groupId&gt;io.helidon.tracing.providers&lt;/groupId&gt;
     &lt;artifactId&gt;helidon-tracing-providers-jaeger&lt;/artifactId&gt;  <span class="conum" data-value="3" />
 &lt;/dependency&gt;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4VNn3L" title="原文 : Helidon Tracing dependencies.">Helidon依存関係のトレース。</span></li>
<li data-value="2"><span class="merged" id="all.1AsB1D" title="原文 : Observability features for tracing.">トレースの可観測性機能。</span></li>
<li data-value="3"><span class="merged" id="all.226oZg" title="原文 : Jaeger tracing provider.">Jaegerトレーシング・プロバイダ。</span></li>
</ul>

<p><span class="merged" id="all.43hod.1.spl1" title="原文 : All spans sent by Helidon to Jaeger need to be associated with a service.">HelidonによってJaegerに送信されるすべてのスパンをサービスに関連付ける必要があります。</span> <span class="merged" id="all.43hod.1.spl2" title="原文 : Specify the service name below.">次のサービス名を指定します。</span> </p>

<markup
lang="bash"
title="Add the following lines to <code>resources/application.yaml</code>:"
>tracing:
  service: helidon-se-1
  protocol: http
  port: 14250
  path: /api/traces
  tags:
    env: development
  enabled: true
  sampler-type: "const"
  sampler-param: 1
  log-spans: true
  propagation: b3</markup>

<markup
lang="java"
title="Update the <code>Main</code> class. Add Tracer to the WebServer builder"
>import io.helidon.tracing.TracerBuilder;
...

Tracer tracer = TracerBuilder.create("helidon") <span class="conum" data-value="1" />
                .build();

WebServer server = WebServer.builder(createRouting(config))
                .config(config.get("server"))
                .addFeature(ObserveFeature.builder()
                            .addObserver(TracingObserver.create(tracer)) <span class="conum" data-value="2" />
                            .build())
                .addMediaSupport(JsonpSupport.create())
                .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3pvjXW" title="原文 : Create the Tracer object."><code>Tracer</code>オブジェクトを作成します。</span></li>
<li data-value="2"><span class="merged" id="all.3ElsAL" title="原文 : Add an observability feature using the created Tracer.">作成した<code>Tracer</code>を使用して、可観測性機能を追加します。</span></li>
</ul>

<markup
lang="java"
title="Update the <code>GreetService</code> class: replace the <code>getDefaultMessageHandler</code> method:"
>private void getDefaultMessageHandler(ServerRequest request,
                                      ServerResponse response) {
    var spanBuilder = Tracer.global().spanBuilder("mychildSpan"); <span class="conum" data-value="1" />
    request.context().get(SpanContext.class).ifPresent(sc -&gt; sc.asParent(spanBuilder)); <span class="conum" data-value="2" />
    var span = spanBuilder.start(); <span class="conum" data-value="3" />

    try {
        sendResponse(response, "World");
        span.end(); <span class="conum" data-value="4" />
    } catch (Throwable t) {
        span.end(t);    <span class="conum" data-value="5" />
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.6DdJd" title="原文 : Create a new Span using the global tracer.">グローバル・トレーサを使用して、新しい<code>Span</code>を作成します。</span></li>
<li data-value="2"><span class="merged" id="all.XjU2s" title="原文 : Set the parent of the new span to the span from the Request if available.">使用可能な場合は、新しいスパンの親を<code>Request</code>のスパンに設定します。</span></li>
<li data-value="3"><span class="merged" id="all.1xIVe6" title="原文 : Start the span.">スパンを開始します。</span></li>
<li data-value="4"><span class="merged" id="all.3KIYwV" title="原文 : End the span normally after the response is sent.">レスポンスの送信後にスパンを正常に終了します。</span></li>
<li data-value="5"><span class="merged" id="all.3HAhA5" title="原文 : End the span with an exception if one was thrown.">スパンがスローされた場合は、例外で終了します。</span></li>
</ul>

<markup
lang="bash"
title="Build the application, skipping unit tests, then run it:"
>mvn package -DskipTests=true
java -jar target/helidon-quickstart-se.jar</markup>

<markup
lang="bash"
title="Run the curl command in a new terminal window and check the response:"
>curl http://localhost:8080/greet
...
{
  "message": "Hello World!"
}</markup>

</div>


<h3 id="_viewing_tracing_using_jaeger_ui"><span class="merged" id="all.10mEnD" title="原文 : Viewing Tracing Using Jaeger UI">Jaeger UIを使用したトレースの表示</span></h3>
<div class="section">
<p><span class="merged" id="all.29fc7q.spl1" title="原文 : The tracing output data is verbose and can be challenging to interpret using the REST API, especially since it represents a structure of spans.">トレース出力データは冗長であり、特にスパンの構造を表すため、REST APIを使用した解釈が困難な場合があります。</span> <span class="merged" id="all.29fc7q.spl2" title="原文 : Jaeger provides a web-based UI at http://localhost:16686/search, where you can see a visual representation of the same data and the relationship between spans within a trace.">Jaegerは、<a class="bare" href="http://localhost:16686/search" target="_blank">http://localhost:16686/search</a>でwebベースのUIを提供します。このUIでは、同じデータの視覚的な表現と、トレース内のスパン間の関係を確認できます。</span> </p>

<p><span class="merged" id="all.4AiOHF.spl1" title="原文 : Click on the UI Find traces button (the search icon) as shown in the image below.">次のイメージに示すように、UIの「トレースの検索」ボタン(検索アイコン)をクリックします。</span> <span class="merged" id="all.4AiOHF.spl2" title="原文 : Notice that you can change the look-back time to restrict the trace list.">ルック・バック時間を変更してトレース・リストを制限できることに注意してください。</span> </p>


<div class="block-title"><span class="merged" id="all.4YE75N.1"  title="原文:: Jaeger UI"><span>Jaeger UI</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden"> <img alt="リフレッシュのトレース" src="images/guides/12_tracing_se_refresh.png" /> </v-card-text> </v-card>


<p><span class="merged" id="all.1Gl7Mn.spl1" title="原文 : The image below shows the trace summary, including start time and duration of each trace.">次の図は、各トレースの開始時間および継続時間を含むトレース・サマリーを示しています。</span> <span class="merged" id="all.1Gl7Mn.spl2" title="原文 : There are two traces, each one generated in response to a curl http://localhost:8080/greet invocation.">2つのトレースがあり、それぞれが<code>curl <a class="bare" href="http://localhost:8080/greet" target="_blank">http://localhost:8080/greet</a></code>呼出しにレスポンスして生成されます。</span> <span class="merged" id="all.1Gl7Mn.spl3" title="原文 : The oldest trace will have a much longer duration since there is one-time initialization that occurs.">1回限りの初期化が行われるため、最も古いトレースの継続時間が大幅に長くなります。</span> </p>


<div class="block-title"><span class="merged" id="all.SxAZs.1" title="原文 : Tracing list view"><span>トレース・リスト・ビュー</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden"> <img alt="トレース" src="images/guides/12_tracing_se_top.png" /> </v-card-text> </v-card>


<p><span class="merged" id="all.23ah0o.spl1" title="原文 : Click on a trace, and you will see the trace detail page where the spans are listed.">トレースをクリックすると、スパンがリストされたトレース詳細ページが表示されます。</span> <span class="merged" id="all.23ah0o.spl2" title="原文 : You can clearly see the root span and the relationship among all the spans in the trace, along with timing information.">ルート・スパンおよびトレース内のすべてのスパン間の関係をタイミング情報とともに明確に確認できます。</span> </p>


<div class="block-title"><span class="merged" id="all.3R0m3q.1" title="原文 : Trace detail page"><span>トレース詳細ページ</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden"> <img alt="トレース詳細" src="images/guides/12_tracing_se_detail.png" /> </v-card-text> </v-card>


<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.B6ecX.spl1" title="原文 : For OpenTracing, a parent span might not depend on the result of the child.">OpenTracingの場合、親スパンが子の結果に依存しないことがあります。</span> <span class="merged" id="all.B6ecX.spl2" title="原文 : This is called a FollowsFrom reference, see Open Tracing Semantic Spec.">これは<code>FollowsFrom</code>参照と呼ばれます。<a href="https://github.com/opentracing/specification/blob/master/specification.md" target="_blank">「トレース・セマンティクス仕様のオープン」</a>を参照してください。</span> </p>
</div>

<p><span class="merged" id="all.pmgGA.spl1" title="原文 : You can examine span details by clicking on the span row.">スパン行をクリックすると、スパンの詳細を確認できます。</span> <span class="merged" id="all.pmgGA.spl2" title="原文 : Refer to the image below, which shows the span details, including timing information.">次の図を参照してください。ここには、時間情報を含むスパンの詳細が表示されています。</span> <span class="merged" id="all.pmgGA.spl3" title="原文 : You can see times for each space relative to the root span.">ルート・スパンに対して相対的な各スペースの時間を表示できます。</span> <span class="merged" id="all.pmgGA.spl4" title="原文 : These rows are annotated with Server Start and Server Finish, as shown in the third column.">これらの行には、3番目の列に示すように、<code>Server Start</code>および<code>Server Finish</code>の注釈が付けられます。</span> </p>


<div class="block-title"><span class="merged" id="all.3Rgo5C" title="原文 : Span detail page"><span>スパン詳細ページ</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden"> <img alt="スパン詳細" src="images/guides/12_tracing_span_detail.png" /> </v-card-text> </v-card>


</div>


<h3 id="_tracing_across_services"><span class="merged" id="all.3tnVsh" title="原文 : Tracing Across Services">サービス間のトレース</span></h3>
<div class="section">
<p><span class="merged" id="all.1mVdvr.spl1" title="原文 : Helidon automatically traces across services if the services use the same tracer, for example, the same instance of Jaeger.">サービスで同じトレーサ(Jaegerの同じインスタンスなど)が使用されている場合、Helidonはサービス間で自動的にトレースします。</span> <span class="merged" id="all.1mVdvr.spl2" title="原文 : This means a single trace can include spans from multiple services and hosts.">つまり、単一のトレースに複数のサービスおよびホストからのスパンを含めることができます。</span> <span class="merged" id="all.1mVdvr.spl3" title="原文 : Helidon uses a SpanContext to propagate tracing information across process boundaries.">Helidonは、<code>SpanContext</code>を使用して、プロセス境界を越えてトレース情報を伝播します。</span> <span class="merged" id="all.1mVdvr.spl4" title="原文 : When you make client API calls, Helidon will internally call OpenTelemetry APIs or OpenTracing APIs to propagate the SpanContext.">クライアントAPIコールを行うと、HelidonはOpenTelemetry APIまたはOpenTracing APIを内部的にコールして<code>SpanContext</code>を伝播します。</span> <span class="merged" id="all.1mVdvr.spl5" title="原文 : There is nothing you need to do in your application to make this work.">これを機能させるためにアプリケーションで行う必要があることはありません。</span> </p>

<p><span class="merged" id="all.HddjH.spl1" title="原文 : To demonstrate distributed tracing, you will need to create a second project, where the server listens to on port 8081.">分散トレースを示すには、サーバーがポート8081で待機する2番目のプロジェクトを作成する必要があります。</span> <span class="merged" id="all.HddjH.spl2" title="原文 : Create a new root directory to hold this new project, then do the following steps, similar to what you did at the start of this guide:">この新しいプロジェクトを格納する新しいルート・ディレクトリを作成し、このガイドの冒頭で行ったステップと同様に次のステップを実行します:</span> </p>

</div>


<h3 id="_create_the_second_service"><span class="merged" id="all.5M4uA" title="原文 : Create the Second Service">2番目のサービスの作成</span></h3>
<div class="section">
<markup
lang="bash"
title="Run the Maven archetype:"
>mvn -U archetype:generate -DinteractiveMode=false \
    -DarchetypeGroupId=io.helidon.archetypes \
    -DarchetypeArtifactId=helidon-quickstart-se \
    -DarchetypeVersion=4.0.2 \
    -DgroupId=io.helidon.examples \
    -DartifactId=helidon-quickstart-se-2 \
    -Dpackage=io.helidon.examples.quickstart.se</markup>

<markup
lang="bash"
title="The project will be built and run from the <code>helidon-quickstart-se</code> directory:"
>cd helidon-quickstart-se-2</markup>

<markup
lang="xml"
title="Add the following dependencies to <code>pom.xml</code>:"
> &lt;dependency&gt;
     &lt;groupId&gt;io.helidon.tracing&lt;/groupId&gt;
     &lt;artifactId&gt;helidon-tracing&lt;/artifactId&gt;   <span class="conum" data-value="1" />
 &lt;/dependency&gt;
 &lt;dependency&gt;
     &lt;groupId&gt;io.helidon.webserver.observe&lt;/groupId&gt;
     &lt;artifactId&gt;helidon-webserver-observe-tracing&lt;/artifactId&gt; <span class="conum" data-value="2" />
 &lt;/dependency&gt;
 &lt;dependency&gt;
     &lt;groupId&gt;io.helidon.tracing.providers&lt;/groupId&gt;
     &lt;artifactId&gt;helidon-tracing-providers-jaeger&lt;/artifactId&gt;  <span class="conum" data-value="3" />
 &lt;/dependency&gt;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.31Hmn9" title="原文 : Helidon Tracing API.">HelidonトレースAPI。</span></li>
<li data-value="2"><span class="merged" id="all.1AsB1D.1" title="原文 : Observability features for tracing.">トレースの可観測性機能。</span></li>
<li data-value="3"><span class="merged" id="all.226oZg.1" title="原文 : Jaeger tracing provider.">Jaegerトレーシング・プロバイダ。</span></li>
</ul>

<markup
lang="bash"
title="Replace <code>resources/application.yaml</code> with the following:"
>app:
  greeting: "Hello From SE-2"

tracing:
  service: helidon-se-2
  protocol: http
  port: 14250
  path: /api/traces
  tags:
    env: development
  enabled: true
  sampler-type: "const"
  sampler-param: 1
  log-spans: true
  propagation: b3

server:
  port: 8081
  host: 0.0.0.0</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1Oc7YQ.spl1" title="原文 : The settings above are for development and experimental purposes only.">上記の設定は、開発および実験のみを目的としています。</span> <span class="merged" id="all.1Oc7YQ.spl2" title="原文 : For production environment, please see the Tracing documentation.">本番環境については、<a href="../tracing.adoc" target="_blank">「トレース・ドキュメント」</a>を参照してください。</span> </p>
</div>

<markup
lang="java"
title="Update the <code>Main</code> class; Add Tracer to the WebServer builder"
>Tracer tracer = TracerBuilder.create("helidon") <span class="conum" data-value="1" />
                .build();

WebServer server = WebServer.builder(createRouting(config))
                .config(config.get("server"))
                .addFeature(ObserveFeature.builder()
                            .addObserver(TracingObserver.create(tracer)) <span class="conum" data-value="2" />
                            .build())
                .addMediaSupport(JsonpSupport.create())
                .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3pvjXW.1" title="原文 : Create the Tracer object."><code>Tracer</code>オブジェクトを作成します。</span></li>
<li data-value="2"><span class="merged" id="all.3ElsAL.1" title="原文 : Add an observability feature using the created Tracer.">作成した<code>Tracer</code>を使用して、可観測性機能を追加します。</span></li>
</ul>

<markup
lang="java"
title="Update the <code>GreetService</code> class. Replace the <code>getDefaultMessageHandler</code> method:"
>private void getDefaultMessageHandler(ServerRequest request,
                               ServerResponse response) {

    var spanBuilder = request.tracer()
            .buildSpan("getDefaultMessageHandler");
    request.spanContext().ifPresent(spanBuilder::asChildOf);
    Span span = spanBuilder.start();

    try {
        sendResponse(response, "World");
    } catch (Throwable t) {
        span.end(t);
    }
}</markup>

<markup
lang="bash"
title="Build the application, skipping unit tests, then run it:"
>mvn package -DskipTests=true
java -jar target/helidon-quickstart-se-2.jar</markup>

<markup
lang="bash"
title="Run the curl command in a new terminal window and check the response (<strong>notice the port is 8081</strong>) :"
>curl http://localhost:8081/greet
...
{
  "message": "Hello From SE-2 World!"
}</markup>

</div>


<h3 id="_modify_the_first_service"><span class="merged" id="all.1OjbCa" title="原文 : Modify the First Service">最初のサービスの変更</span></h3>
<div class="section">
<p><span class="merged" id="all.4Yeqrw.2" title="原文 : Once you have validated that the second service is running correctly, you need to modify the original application to call it.">2つ目のサービスが正しく実行されていることをバリデートしたら、元のアプリケーションを変更してコールする必要があります。</span></p>

<markup
lang="xml"
title="Add the following dependency to <code>pom.xml</code>:"
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
title="Replace the <code>GreetService</code> class with the following code:"
>public class GreetService implements HttpService {

  private final AtomicReference&lt;String&gt; greeting = new AtomicReference&lt;&gt;();
  private WebTarget webTarget;
  private static final JsonBuilderFactory JSON = Json.createBuilderFactory(Collections.emptyMap());

  GreetService(Config config) {
    greeting.set(config.get("app.greeting").asString().orElse("Ciao"));

    Client jaxRsClient = ClientBuilder.newBuilder().build();

    webTarget = jaxRsClient.target("http://localhost:8081/greet");
  }

  @Override
  public void routing(HttpRules rules) {
    rules
        .get("/", this::getDefaultMessageHandler)
        .get("/outbound", this::outboundMessageHandler) <span class="conum" data-value="1" />
        .put("/greeting", this::updateGreetingHandler);
  }

  private void getDefaultMessageHandler(ServerRequest request, ServerResponse response) {
    var spanBuilder = Tracer.global().spanBuilder("getDefaultMessageHandler");
    request.context().get(SpanContext.class).ifPresent(sc -&gt; sc.asParent(spanBuilder));
    var span = spanBuilder.start();

    try {
        sendResponse(response, "World");
        span.end();
    } catch (Throwable t) {
        span.end(t);
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

    var spanBuilder = Tracer.global().spanBuilder("outboundMessageHandler");
    request.context().get(SpanContext.class).ifPresent(sc -&gt; sc.asParent(spanBuilder));
    var span = spanBuilder.start();     <span class="conum" data-value="2" />

    try {
      requestBuilder.property(
          ClientTracingFilter.CURRENT_SPAN_CONTEXT_PROPERTY_NAME, span.context());  <span class="conum" data-value="3" />

      String result = requestBuilder   <span class="conum" data-value="4" />
          .get(String.class);
      response.send(result);
      span.end();
    } catch (Throwable t) {
      span.end(t);   <span class="conum" data-value="5" />
    }
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
title="Build and run the application, then invoke the endpoint and check the response:"
>curl -i http://localhost:8080/greet/outbound <span class="conum" data-value="1" />
...
{
  "message": "Hello From SE-2 World!" <span class="conum" data-value="2" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.RxuwD.2" title="原文 : The request went to the service on 8080, which then invoked the service at 8081 to get the greeting.">リクエストは<code>8080</code>のサービスに送信され、そこで応答メッセージを取得するために<code>8081</code>のサービスが呼び出されました。</span></li>
<li data-value="2"><span class="merged" id="all.3MDSsa.2" title="原文 : Notice the greeting came from the second service.">グリーティングは2番目のサービスから発信されたものです。</span></li>
</ul>

<p><span class="merged" id="all.4Tkex9.2" title="原文 : Refresh the Jaeger UI trace listing page and notice that there is a trace across two services.">Jaeger UIトレース・リスト・ページをリフレッシュし、2つのサービスにトレースがあることを確認します。</span></p>


<div class="block-title"><span class="merged" id="all.4KFGiL.2" title="原文 : Tracing across multiple services detail view"><span>複数のサービスの詳細ビューにわたるトレース</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden"> <img alt="トレース" src="images/guides/12_tracing_se_detail_2_services.png" /> </v-card-text> </v-card>


<p><span class="merged" id="all.2tC87V.2.spl1" title="原文 : In the image above, you can see that the trace includes spans from two services.">上の図では、トレースに2つのサービスのスパンが含まれていることがわかります。</span> <span class="merged" id="all.2tC87V.2.spl2" title="原文 : You will notice there is a gap before the sixth span, which is a get operation.">6つ目のスパン(<code>get</code>操作)の前にギャップがあります。</span> <span class="merged" id="all.2tC87V.2.spl3" title="原文 : This is a one-time client initialization delay.">これは、ワンタイム・クライアント初期化の遅延です。</span> <span class="merged" id="all.2tC87V.2.spl4" title="原文 : Run the /outbound curl command again and look at the new trace to see that the delay no longer exists."><code>/outbound</code> curlコマンドを再度実行し、新しいトレースを調べて遅延が存在しないことを確認します。</span> </p>

<p><span class="merged" id="all.OvnG0.2" title="原文 : You can now stop your second service, it is no longer used in this guide.">これで、2つ目のサービスを停止できます。このガイドでは使用しません。</span></p>

</div>

</div>


<h2 id="_integration_with_kubernetes"><span class="merged" id="all.4PhaKc.4" title="原文 : Integration with Kubernetes">Kubernetesとの統合</span></h2>
<div class="section">
<p><span class="merged" id="all.3CBQyg.1" title="原文 : The following example demonstrates how to use Jaeger from a Helidon application running in Kubernetes.">次の例は、Kubernetesで実行されているHelidonアプリケーションからJaegerを使用する方法を示しています。</span></p>

<markup
lang="bash"
title="Replace the tracing configuration in <code>resources/application.yaml</code> with the following:"
><span class="conum" data-value="1" />
tracing:
  service: helidon-se-1
  host: jaeger</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4RjfCG" title="原文 : Helidon service helidon-se-1 will connect to the Jaeger server at host name jaeger.">Helidonサービス<code>helidon-se-1</code>は、ホスト名<code>jaeger</code>のJaegerサーバーに接続します。</span></li>
</ul>

<markup
lang="bash"
title="Stop the application and build the docker image for your application:"
>docker build -t helidon-tracing-se .</markup>


<h3 id="_deploy_jaeger_into_kubernetes"><span class="merged" id="all.2ejwi6.2" title="原文 : Deploy Jaeger into Kubernetes">JaegerをKubernetesにデプロイ</span></h3>
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
title="Create a Jaeger external server to view the UI and expose it on port 9142:"
>kubectl expose pod  jaeger --name=jaeger-external --port=16687 --target-port=16686 --type=LoadBalancer</markup>

<p><span class="merged" id="all.3Od21M.spl1" title="原文 : Navigate to http://localhost:16687/jaeger to validate that you can access Jaeger running in Kubernetes."><a class="bare" href="http://localhost:16687/jaeger" target="_blank">http://localhost:16687/jaeger</a>にナビゲートして、Kubernetesで実行されているJaegerにアクセスできることをバリデートします。</span> <span class="merged" id="all.3Od21M.spl2" title="原文 : It may take a few seconds before it is ready.">準備ができるまで数秒かかる場合があります。</span> </p>

</div>


<h3 id="_deploy_your_helidon_application_into_kubernetes"><span class="merged" id="all.1xATXz.2" title="原文 : Deploy Your Helidon Application into Kubernetes">HelidonアプリケーションのKubernetesへのデプロイ</span></h3>
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
          image: helidon-tracing-se
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 8080</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3s9wLQ.9" title="原文 : A service of type NodePort that serves the default routes on port 8080.">ポート<code>8080</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
<li data-value="2"><span class="merged" id="all.1dhwFj.9" title="原文 : A deployment with one replica of a pod.">ポッドの1つのレプリカを持つデプロイメント。</span></li>
</ul>

<markup
lang="bash"
title="Create and deploy the application into Kubernetes:"
>kubectl apply -f ./tracing.yaml</markup>

</div>


<h3 id="_access_your_application_and_the_jaeger_trace"><span class="merged" id="all.3jiNmC.2" title="原文 : Access Your Application and the Jaeger Trace">アプリケーションおよびJaegerトレースへのアクセス</span></h3>
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
<li data-value="1"><span class="merged" id="all.3Q1f91.7" title="原文 : A service of type NodePort that serves the default routes on port 31143.">ポート<code>31143</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
</ul>

<markup
lang="bash"
title="Verify the tracing endpoint using port <code>31143</code>, your port will likely be different:"
>curl http://localhost:31143/greet
...
{
  "message": "Hello World!"
}</markup>

<p><span class="merged" id="all.c3nKf" title="原文 : Access the Jaeger UI at http://localhost:9412/jaeger and click on the refresh icon to see the trace that was just created."><a class="bare" href="http://localhost:9412/jaeger" target="_blank">http://localhost:9412/jaeger</a>のJaeger UIにアクセスし、リフレッシュ・アイコンをクリックして、作成したトレースを表示します。</span></p>

</div>


<h3 id="_cleanup"><span class="merged" id="all.6lMSz.2"  title="原文:: Cleanup">クリーンアップ</span></h3>
<div class="section">
<p><span class="merged" id="all.4Bq2FT" title="原文 : You can now delete the Kubernetes resources just created during this example.">この例で作成したKubernetesリソースを削除できるようになりました。</span></p>

<markup
lang="bash"
title="Delete the Kubernetes resources:"
>kubectl delete -f ./jaeger.yaml
kubectl delete -f ./tracing.yaml
kubectl delete service jaeger-external
docker rm -f jaeger</markup>

</div>

</div>


<h2 id="_summary"><span class="merged" id="all.1nTCR.12"  title="原文:: Summary">サマリー</span></h2>
<div class="section">
<p><span class="merged" id="all.3hG2EX.spl1" title="原文 : This guide has demonstrated how to use the Helidon SE tracing feature with Jaeger.">このガイドでは、JaegerでHelidon SEトレース機能を使用する方法をデモンストレーションしています。</span> <span class="merged" id="all.3hG2EX.spl2" title="原文 : You have learned to do the following:">次のことを学習しました:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4BVMNe.1" title="原文 : Enable tracing within a service">サービス内でのトレースの有効化</span></p>

</li>
<li>
<p><span class="merged" id="all.2JYmSj" title="原文 : Use tracing with JAX-RS">JAX-RSでのトレースの使用</span></p>

</li>
<li>
<p><span class="merged" id="all.2agtPC" title="原文 : Use the Jaeger REST API and UI">Jaeger REST APIおよびUIの使用</span></p>

</li>
<li>
<p><span class="merged" id="all.4CqrM5.1" title="原文 : Use tracing across multiple services">複数のサービスにわたるトレースの使用</span></p>

</li>
<li>
<p><span class="merged" id="all.1csFZR.1" title="原文 : Integrate tracing with Kubernetes">トレースとKubernetesの統合</span></p>

</li>
</ul>

<p><span class="merged" id="all.UfWha.7" title="原文 : Refer to the following references for additional information:">詳細は、次のリファレンスを参照してください:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4cFOIZ.1" title="原文 : MicroProfile OpenTracing specification"><a href="https://download.eclipse.org/microprofile/microprofile-opentracing-3.0/microprofile-opentracing-spec-3.0.html" target="_blank">MicroProfile OpenTracing仕様</a></span></p>

</li>
<li>
<p><span class="merged" id="all.3LIPX2.1" title="原文 : MicroProfile OpenTracing Javadoc"><a href="https://download.eclipse.org/microprofile/microprofile-opentracing-3.0/apidocs" target="_blank">MicroProfile OpenTracing Javadoc</a></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.1GiraL" title="原文 : OpenTelemetry API"><a href="https://opentelemetry.io/docs/instrumentation/js/api/tracing/" target="_blank">OpenTelemetry API</a></span></p>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.2mjhzP.6" title="原文 : Helidon Javadoc"><a href="/apidocs/index.html?overview-summary.html" target="_blank">Helidon Javadoc</a></span></p>

</li>
</ul>

</div>

</doc-view>
