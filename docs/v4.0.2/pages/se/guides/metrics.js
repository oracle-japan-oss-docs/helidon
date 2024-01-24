<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3LjiKk" title="原文 : Helidon SE Metrics Guide">Helidon SEメトリクス・ガイド</span></dt>
<dd slot="desc"><p><span class="merged" id="all.35aWtv" title="原文 : This guide describes how to create a sample Helidon {h1-prefix} project that can be used to run some basic examples using both built-in and custom meters with Helidon.">このガイドでは、組込みメーターとカスタム・メーターの両方をHelidonとともに使用して、いくつかの基本的な例を実行するために使用できるサンプルHelidon {h1-prefix} プロジェクトを作成する方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_what_you_need"><span class="merged" id="all.27ZcMH.18"  title="原文:: What You Need">必要事項</span></h2>
<div class="section">
<p><span class="merged" id="all.4BUptU.3" title="原文 : For this 30 minute tutorial, you will need the following:">この30分のチュートリアルでは、次のものが必要です:</span></p>


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
<td class=""><span class="merged" id="all.3EWh8P.5" title="原文 : A Helidon SE Application">Helidon SEアプリケーション</span></td>
<td class=""><span class="merged" id="all.3f8L7i.5" title="原文 : You can use your own application or use the Helidon SE Quickstart to create a sample application.">独自のアプリケーションを使用するか、<router-link to="/se/guides/quickstart">「Helidon SEクイックスタート」</router-link>を使用してサンプル・アプリケーションを作成できます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.17vEm3.20" title="原文 : Java&#160;SE&#160;21 (Open&#160;JDK&#160;21)"><a href="https://www.oracle.com/technetwork/java/javase/downloads" target="_blank">Java SE 21</a> (<a href="http://jdk.java.net" target="_blank">JDK 21を開く</a>)</span></td>
<td class=""><span class="merged" id="all.3uVV7D.20" title="原文 : Helidon requires Java 21+.">HelidonにはJava 21+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.UWTyd.20" title="原文 : Maven 3.8+"><a href="https://maven.apache.org/download.cgi" target="_blank">Maven 3.8+</a></span></td>
<td class=""><span class="merged" id="all.47RJEf.20" title="原文 : Helidon requires Maven 3.8+.">HelidonにはMaven 3.8+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ND1mN.20"  title="原文:: Docker 18.09+"><a href="https://docs.docker.com/install/" target="_blank">Docker 18.09+</a></span></td>
<td class=""><span class="merged" id="all.aX1BT.20" title="原文 : You need Docker if you want to build and deploy Docker containers.">Dockerコンテナをビルドおよびデプロイする場合は、Dockerが必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Lo77h.20"  title="原文:: Kubectl 1.16.5+"><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" target="_blank">Kubectl 1.16.5+</a></span></td>
<td class=""><span class="merged" id="all.1JBSOB.20" title="原文 : If you want to deploy to Kubernetes, you need kubectl and a Kubernetes cluster (you can install one on your desktop.">Kubernetesにデプロイする場合は、<code>kubectl</code>およびKubernetesクラスタが必要です (<router-link to="/about/kubernetes">「デスクトップにインストール」</router-link>できます)。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4xrRR.1"  title="原文:: Helm"><a href="https://github.com/helm/helm" target="_blank">Helm</a></span></td>
<td class=""><span class="merged" id="all.3eENFM.1" title="原文 : To manage Kubernetes applications.">Kubernetesアプリケーションを管理する場合。</span></td>
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


<h3 id="_create_a_sample_helidon_se_project"><span class="merged" id="all.4L3FLA.1" title="原文 : Create a Sample Helidon SE Project">サンプルHelidon SEプロジェクトの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.36DQ1d.1" title="原文 : Use the Helidon SE Maven archetype to create a simple project that can be used for the examples in this guide.">Helidon SE Maven原型を使用して、このガイドの例で使用できる単純なプロジェクトを作成します。</span></p>

<markup
lang="bash"
title="Run the Maven archetype"
>mvn -U archetype:generate -DinteractiveMode=false \
    -DarchetypeGroupId=io.helidon.archetypes \
    -DarchetypeArtifactId=helidon-quickstart-se \
    -DarchetypeVersion=4.0.2 \
    -DgroupId=io.helidon.examples \
    -DartifactId=helidon-quickstart-se \
    -Dpackage=io.helidon.examples.quickstart.se</markup>

</div>


<h3 id="_using_the_built_in_meters"><span class="merged" id="all.4ET9q6" title="原文 : Using the Built-In Meters">組込みメーターの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.3EcAVG.1.spl1" title="原文 : Helidon provides three built-in scopes of metrics: base, vendor, and application.">Helidonは、メトリクスの3つの組込みスコープを提供: ベース、ベンダーおよびアプリケーション。</span> <span class="merged" id="all.3EcAVG.1.spl2" title="原文 : Here are the metric endpoints:">メトリック・エンドポイントは次のとおりです:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2WEbOo" title="原文 : /observe/metrics?scope=base - Base meters"><code>/observe/metrics?scope=base</code> - 基準メーター</span>

</li>
<li>
<span class="merged" id="all.1Nzhk6" title="原文 : /observe/metrics?scope=vendor - Helidon-specific meters"><code>/observe/metrics?scope=vendor</code> - Helidon固有のメーター</span>

</li>
<li>
<span class="merged" id="all.40FKCp" title="原文 : /observe/metrics?scope=application - Application-specific metrics data."><code>/observe/metrics?scope=application</code> - アプリケーション固有のメトリクス・データ。</span>

</li>
</ol>

<p><span class="merged" id="all.2u9tqh" title="原文 : Applications can add their own custom scopes as well simply by specifying a custom scope name when registering a meter.">アプリケーションは、メーターの登録時にカスタム・スコープ名を指定するだけで、独自のカスタム・スコープを追加できます。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1FZ00s" title="原文 : The /observe/metrics endpoint returns data for all scopes."><code>/observe/metrics</code>エンドポイントは、すべてのスコープのデータを返します。</span></p>
</div>

<p><span class="merged" id="all.2ufDSF" title="原文 : The built-in meters fall into these categories:">組込みメーターは、次のカテゴリに分類されます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.ozCa7.1" title="原文 : JVM behavior (in the base scope), and">JVMの動作(基本スコープ内)</span>

</li>
<li>
<span class="merged" id="all.3WeliT.1" title="原文 : basic key performance indicators for request handling (in the vendor scope).">リクエスト処理の基本的なキー・パフォーマンス・インジケータ(ベンダー・スコープ内)。</span>

</li>
</ol>

<p><span class="merged" id="all.2rXHZj" title="原文 : A later section describes the key performance indicator meters in detail.">後のセクションでは、<router-link @click.native="this.scrollFix('#basic-and-extended-kpi')" to="#basic-and-extended-kpi">「キー・パフォーマンス・インジケータ・メーター」</router-link>について詳しく説明します。</span></p>

<p><span class="merged" id="all.2jVUQf.spl1" title="原文 : The following example demonstrates how to use the other built-in meters.">次の例では、他の組込みメーターを使用する方法を示します。</span> <span class="merged" id="all.2jVUQf.spl2" title="原文 : All examples are executed from the root directory of your project (helidon-quickstart-se).">すべての例は、プロジェクトのルート・ディレクトリ(helidon-quickstart-se)から実行されます。</span> </p>

<p><span class="merged" id="all.zV4KR" title="原文 : The generated source code is already configured for both metrics and health checks, but the following example removes health checks.">生成されたソース・コードはメトリクスとヘルス・チェックの両方にすでに構成されていますが、次の例ではヘルス・チェックを削除します。</span></p>

<markup
lang="xml"
title="Metrics dependencies in the generated <code>pom.xml</code>:"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver.observe&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-observe-metrics&lt;/artifactId&gt; <span class="conum" data-value="1" />
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.metrics&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-metrics-system-meters&lt;/artifactId&gt;     <span class="conum" data-value="2" />
    &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.zpGFi" title="原文 : Includes the Helidon observability component for metrics and, as transitive dependencies, the Helidon neutral metrics API and a full-featured implementation of the API.">メトリクスのHelidon可観測性コンポーネントと、推移的な依存関係として、Helidonニュートラル・メトリクスAPIおよびAPIのフル機能の実装が含まれます。</span></li>
<li data-value="2"><span class="merged" id="all.4bV5Aq" title="原文 : Includes the built-in meters.">組込みメーターが含まれます。</span></li>
</ul>

<p><span class="merged" id="all.p1Wn9.spl1" title="原文 : With these dependencies in your project, Helidon’s auto-discovery of webserver features automatically finds and runs the metrics subsystem.">これらの依存関係がプロジェクトにある場合、Helidonのwebサーバー機能の自動検出では、メトリクス・サブシステムが自動的に検索および実行されます。</span> <span class="merged" id="all.p1Wn9.spl2" title="原文 : You do not need to change any of the generated source code.">生成されたソース・コードを変更する必要はありません。</span> </p>

<markup
lang="bash"
title="Build the application and then run it:"
>mvn package
java -jar target/helidon-quickstart-se.jar</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1uB0m6.1.spl1" title="原文 : Metrics output can be returned in either text format (the default), or JSON.">メトリクス出力は、テキスト形式(デフォルト)またはJSONのいずれかで返すことができます。</span> <span class="merged" id="all.1uB0m6.1.spl2" title="原文 : The text format uses OpenMetrics (Prometheus) Text Format, see https://prometheus.io/docs/instrumenting/exposition_formats/#text-format-details.">テキスト形式では、OpenMetrics (Prometheus)テキスト形式を使用します。<a class="bare" href="https://prometheus.io/docs/instrumenting/exposition_formats/#text-format-details" target="_blank">https://prometheus.io/docs/instrumenting/exposition_formats/#text-format-details</a>を参照してください。</span> </p>
</div>

<markup
lang="bash"
title="Verify the metrics endpoint in a new terminal window:"
>curl http://localhost:8080/observe/metrics</markup>

<markup
lang="text"
title="Text response:"
># TYPE base:classloader_current_loaded_class_count counter
# HELP base:classloader_current_loaded_class_count Displays the number of classes that are currently loaded in the Java virtual machine.
base:classloader_current_loaded_class_count 7511
# TYPE base:classloader_total_loaded_class_count counter
# HELP base:classloader_total_loaded_class_count Displays the total number of classes that have been loaded since the Java virtual machine has started execution.
base:classloader_total_loaded_class_count 7512</markup>

<p><span class="merged" id="all.VV8rl.1" title="原文 : You can get the same data in JSON format.">同じデータをJSON形式で取得できます。</span></p>

<markup
lang="bash"
title="Verify the metrics endpoint with an HTTP accept header:"
>curl -H "Accept: application/json"  http://localhost:8080/observe/metrics</markup>

<markup
lang="json"
title="JSON response:"
>{
  "base": {
    "gc.total;name=G1 Young Generation": 1,
    "cpu.systemLoadAverage": 4.451171875,
    "classloader.loadedClasses.count": 3582,
    "thread.count": 18,
    "classloader.unloadedClasses.total": 0,
    "jvm.uptime": 36.9478,
    "gc.time;name=G1 Young Generation": 0,
    "memory.committedHeap": 541065216,
    "thread.max.count": 19,
    "cpu.availableProcessors": 8,
    "classloader.loadedClasses.total": 3582,
    "thread.daemon.count": 16,
    "memory.maxHeap": 8589934592,
    "memory.usedHeap": 20491248
  },
  "vendor": {
    "requests.count": 3
  }
}</markup>

<p><span class="merged" id="all.4Cp7NM.1" title="原文 : You can get a single metric by specifying the scope and name as query parameters in the URL.">URLでスコープと名前を問合せパラメータとして指定することで、単一のメトリックを取得できます。</span></p>

<markup
lang="bash"
title="Get the Helidon <code>requests.count</code> meter:"
>curl -H "Accept: application/json"  'http://localhost:8080/observe/metrics?scope=vendor&amp;name=requests.count'</markup>

<markup
lang="json"
title="JSON response:"
>{
  "requests.count": 6
}</markup>

<p><span class="merged" id="all.2jhH57" title="原文 : The base meters illustrated above provide some insight into the behavior of the JVM in which the server runs.">前述の<code>base</code>メーターは、サーバーが実行されているJVMの動作に関するインサイトを提供します。</span></p>

<p><span class="merged" id="all.Or0j9.spl1" title="原文 : The vendor meter shown above gives an idea of the request traffic the server is handling.">前述の<code>vendor</code>メーターでは、サーバーが処理しているリクエスト・トラフィックがわかります。</span> <span class="merged" id="all.Or0j9.spl2" title="原文 : See the later section for more information on the basic and extended key performance indicator meters.">基本および拡張キー・パフォーマンス・インジケータ・メーターの詳細は、<router-link @click.native="this.scrollFix('#basic-and-extended-kpi')" to="#basic-and-extended-kpi">「後続セクション」</router-link>を参照してください。</span> </p>

</div>


<h3 id="_controlling_metrics_behavior"><span class="merged" id="all.3DSmdj.1" title="原文 : Controlling Metrics Behavior">メトリクス動作の制御</span></h3>
<div class="section">
<p><span class="merged" id="all.2VoBiI.1" title="原文 : By adding a metrics section to your application configuration you can control how the Helidon metrics subsystem behaves in any of several ways."><code>metrics</code>セクションをアプリケーション構成に追加することで、Helidonメトリクス・サブシステムの動作をいくつかの方法で制御できます。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3BoJia.1" title="原文 : Disable metrics subsystem entirely."><router-link @click.native="this.scrollFix('#disabling-entirely')" to="#disabling-entirely">「メトリクス・サブシステム全体を無効化」</router-link>。</span></p>

</li>
<li>
<p><span class="merged" id="all.18v6fF" title="原文 : Select whether to collect extended key performance indicator meters."><router-link @click.native="this.scrollFix('#basic-and-extended-kpi')" to="#basic-and-extended-kpi">「拡張キー・パフォーマンス・インジケータ・メーター」</router-link>を収集するかどうかを選択します。</span></p>

</li>
</ul>

<p><span class="merged" id="all.XkNZM" title="原文 : Your Helidon SE application can also control metrics processing programmatically as described in the following sections.">Helidon SEアプリケーションは、次の項で説明するように、メトリクス処理をプログラムで制御することもできます。</span></p>


<h4 id="disabling-entirely"><span class="merged" id="all.1gSl1J.1" title="原文 : Disabling Metrics Subsystem Entirely">メトリクス・サブシステム全体の無効化</span></h4>
<div class="section">
<p><span class="merged" id="all.43Ovhs.1" title="原文 : You can disable the metrics subsystem entirely using configuration:">構成を使用してメトリクス・サブシステムを完全に無効にできます:</span></p>

<markup
lang="yaml"
title="Configuration properties file disabling metrics"
>server:
  features:
    observe:
      observers:
        metrics:
          enabled: false</markup>

<p><span class="merged" id="all.2vnsLB" title="原文 : A Helidon SE application can disable metrics processing programmatically.">Helidon SEアプリケーションは、メトリクス処理をプログラムで無効にできます。</span></p>

<markup
lang="java"
title="Disable all metrics behavior"
>    ObserveFeature observe = ObserveFeature.builder()   <span class="conum" data-value="1" />
        .addObserver(metricsObserer.builder()           <span class="conum" data-value="2" />
                .enabled(false)                         <span class="conum" data-value="3" />
                .build())                               <span class="conum" data-value="4" />
        .build();                                       <span class="conum" data-value="5" />

    WebServer server = WebServer.builder()              <span class="conum" data-value="6" />
        .config(Config.global().get("server"))
        .addFeature(observe)
        .routing(Main::routing)
        .build()
        .start();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3XgPmr" title="原文 : Begin preparing the ObserveFeature."><code>ObserveFeature</code>の準備を開始します。</span></li>
<li data-value="2"><span class="merged" id="all.17eovE" title="原文 : Begin preparing the MetricsObserver."><code>MetricsObserver</code>の準備を開始します。</span></li>
<li data-value="3"><span class="merged" id="all.TSEwG" title="原文 : Disable metrics.">メトリクスを無効にします。</span></li>
<li data-value="4"><span class="merged" id="all.3QfZUJ" title="原文 : Complete the MetricsObserver."><code>MetricsObserver</code>を完了します。</span></li>
<li data-value="5"><span class="merged" id="all.6ndBh" title="原文 : Complete the ObserveFeature."><code>ObserveFeature</code>を完了します。</span></li>
<li data-value="6"><span class="merged" id="all.3ZAPBY" title="原文 : Create and start the WebServer with the ObserveFeature (and other settings)."><code>ObserveFeature</code> (およびその他の設定)を使用して、<code>WebServer</code>を作成して起動します。</span></li>
</ul>

<p><span class="merged" id="all.3tKYHN" title="原文 : These builders and interfaces also have methods which accept Config objects representing the metrics node from the application configuration.">これらのビルダーおよびインタフェースには、アプリケーション構成から<code>metrics</code>ノードを表す<code>Config</code>オブジェクトを受け入れるメソッドもあります。</span></p>

<p><span class="merged" id="all.4EQAvM" title="原文 : With metrics processing disabled, Helidon never updates any meters and the /observe/metrics endpoints respond with 404.">メトリクス処理を無効にすると、Helidonはどのメーターも更新せず、<code>/observe/metrics</code>エンドポイントは<code>404</code>で応答します。</span></p>

</div>


<h4 id="basic-and-extended-kpi"><span class="merged" id="all.1RbZUb.2" title="原文 : Collecting Basic and Extended Key Performance Indicator (KPI) Metrics">基本および拡張キー・パフォーマンス・インジケータ(KPI)メトリクスの収集</span></h4>
<div class="section">
<p><span class="merged" id="all.20jING" title="原文 : Any time you include the Helidon metrics module in your application, Helidon tracks a basic performance indicator meter: a Counter of all requests received (requests.count).">Helidonメトリクス・モジュールをアプリケーションに含めると、Helidonは基本パフォーマンス・インジケータ・メーターを追跡: 受信したすべてのリクエストの<code>Counter</code> (<code>requests.count</code>)。</span></p>

<p><span class="merged" id="all.4b1RzM" title="原文 : Helidon SE also includes additional, extended KPI metrics which are disabled by default:">Helidon SEには、デフォルトでは無効になっている追加の拡張KPIメトリクスも含まれています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.NfwY6.2" title="原文 : current number of requests in-flight - a Gauge (requests.inFlight) of requests currently being processed">現在進行中のリクエスト数 - 現在処理中のリクエストの<code>Gauge</code> (<code>requests.inFlight</code>)</span></p>

</li>
<li>
<p><span class="merged" id="all.33WFic.2" title="原文 : long-running requests - a Counter (requests.longRunning) measuring the total number of requests which take at least a given amount of time to complete; configurable, defaults to 10000 milliseconds (10 seconds)">長時間実行リクエスト - <code>Counter</code> ( <code>requests.longRunning</code>)は、完了までに少なくとも所定の時間がかかるリクエストの合計数を測定します。構成可能で、デフォルトは10000ミリ秒(10秒)です</span></p>

</li>
<li>
<p><span class="merged" id="all.27RODF.2" title="原文 : load - a Counter (requests.load) measuring the number of requests worked on (as opposed to received)">load - (受信ではなく)処理されたリクエストの数を測定する<code>Counter</code> ( <code>requests.load</code>)</span></p>

</li>
<li>
<p><span class="merged" id="all.3l0O54.2" title="原文 : deferred - a Gauge (requests.deferred) measuring delayed request processing (work on a request was delayed after Helidon received the request)">延期 - 遅延リクエスト処理を測定する<code>Gauge</code> (<code>requests.deferred</code>) (Helidonがリクエストを受信した後にリクエストの処理が遅延した)</span></p>

</li>
</ul>

<p><span class="merged" id="all.328puX" title="原文 : You can enable and control these meters using configuration:">次の構成を使用して、これらのメーターを有効化および制御できます:</span></p>

<markup
lang="yaml"

>server:
  features:
    observe:
      observers:
        metrics:
          key-performance-indicators:
            extended: true
            long-running:
              threshold-ms: 2000</markup>

<p><span class="merged" id="all.9O4z2" title="原文 : Your Helidon SE application can also control the KPI settings programmatically.">Helidon SEアプリケーションは、KPI設定をプログラム的に制御することもできます。</span></p>

<markup
lang="java"
title="Assign KPI metrics behavior from code"
>    KeyPerformanceIndicatorMetricsConfig kpiConfig =
        KeyPerformanceIndicatorMetricsConfig.builder()              <span class="conum" data-value="1" />
                .extended(true)                                     <span class="conum" data-value="2" />
                .longRunningRequestThreshold(Duration.ofSeconds(4)) <span class="conum" data-value="3" />
                .build();

    MetricsObserver metrics = MetricsObserver.builder()
                .metricsConfig(MetricsConfig.builder()              <span class="conum" data-value="4" />
                                       .keyPerformanceIndicatorMetricsConfig(kpiConfig)) <span class="conum" data-value="5" />
                .build();

    ObserveFeature observe = ObserveFeature.builder()
        .config(config.get("server.features.observe"))
        .addObserver(metrics)                                       <span class="conum" data-value="6" />
        .build();

    WebServer server = WebServer.builder()                          <span class="conum" data-value="7" />
        .config(Config.global().get("server"))
        .addFeature(observe)
        .routing(Main::routing)
        .build()
        .start();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4LBqE3" title="原文 : Create a KeyPerformanceIndicatorMetricsConfig instance (via its Builder) with non-default values.">デフォルト以外の値を持つ<a href="/apidocs/io.helidon.metrics.api/io/helidon/metrics/api/KeyPerformanceIndicatorMetricsConfig.html" target="_blank"><code>KeyPerformanceIndicatorMetricsConfig</a></code>インスタンス(<a href="/apidocs/io.helidon.metrics.api/io/helidon/metrics/api/KeyPerformanceIndicatorMetricsConfig.Builder.html" target="_blank"><code>Builder</code></a>を介して)を作成します。</span></li>
<li data-value="2"><span class="merged" id="all.GcwYq" title="原文 : Enabled extended KPI meters.">拡張KPIメーターを使用可能にしました。</span></li>
<li data-value="3"><span class="merged" id="all.3fKQ2Y" title="原文 : Set the long-running request threshold.">長時間実行リクエストしきい値を設定します。</span></li>
<li data-value="4"><span class="merged" id="all.2rXU7m" title="原文 : Prepare the metrics observer’s builder.">メトリクス・オブザーバのビルダーを準備します。</span></li>
<li data-value="5"><span class="merged" id="all.4fMiR0" title="原文 : Update the metrics observer’s builder using the just-prepared KPI metrics config.">準備済のKPIメトリクス構成を使用して、メトリクス・オブザーバのビルダーを更新します。</span></li>
<li data-value="6"><span class="merged" id="all.11YWWl" title="原文 : Add the metrics observer to the ObserveFeature.">メトリクス・オブザーバを<code>ObserveFeature</code>に追加します。</span></li>
<li data-value="7"><span class="merged" id="all.4JbywP" title="原文 : Add the ObserveFeature to the WebServer."><code>ObserveFeature</code>を<code>WebServer</code>に追加します。</span></li>
</ul>

</div>

</div>


<h3 id="_metrics_metadata"><span class="merged" id="all.2zUh1o.1" title="原文 : Metrics Metadata">メトリクスMetadata</span></h3>
<div class="section">
<p><span class="merged" id="all.2R2iRe" title="原文 : Each meter has associated metadata that includes:">各メーターには、次のものを含むメタデータが関連付けられています:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.3zJpkk" title="原文 : name: The name of the meter.">名前: メーターの名前。</span>

</li>
<li>
<span class="merged" id="all.2G8Qka" title="原文 : units: The unit of the meter such as time (seconds, milliseconds), size (bytes, megabytes), etc.">units: 時間(秒、ミリ秒)、サイズ(バイト、メガバイト)などのメーターの単位。</span>

</li>
<li>
<span class="merged" id="all.4805DG" title="原文 : a description of the meter.">メーターの摘要。</span>

</li>
</ol>

<p><span class="merged" id="all.eIsgO" title="原文 : You can get the metadata for any scope, such as /observe/metrics?scope=base, as shown below:">次に示すように、<code>/observe/metrics?scope=base</code>などの任意のスコープのメタデータを取得できます:</span></p>

<markup
lang="bash"
title="Get the metrics metadata using HTTP OPTIONS method:"
> curl -X OPTIONS -H "Accept: application/json"  'http://localhost:8080/observe/metrics?scope=base'</markup>

<markup
lang="json"
title="JSON response (truncated):"
>{
   "classloader.loadedClasses.count": {
      "type": "gauge",
      "description": "Displays the number of classes that are currently loaded in the Java virtual machine."
    },
   "jvm.uptime": {
      "type": "gauge",
      "unit": "seconds",
      "description": "Displays the start time of the Java virtual machine in milliseconds. This attribute displays the approximate time when the Java virtual machine started."
    },
   "memory.usedHeap": {
      "type": "gauge",
      "unit": "bytes",
      "description": "Displays the amount of used heap memory in bytes."
    }
}</markup>

</div>


<h3 id="_application_specific_metrics_data"><span class="merged" id="all.1cx8aG.1" title="原文 : Application-Specific Metrics Data">アプリケーション固有のメトリクス・データ</span></h3>
<div class="section">
<p><span class="merged" id="all.2ZtJel" title="原文 : This section demonstrates how to use application-specific meters and integrate them with Helidon, starting from a Helidon SE QuickStart application.">この項では、アプリケーション固有のメーターを使用し、Helidon SE QuickStartアプリケーションから開始してHelidonと統合する方法を示します。</span></p>

<p><span class="merged" id="all.1hdJCv.spl1" title="原文 : It is the application’s responsibility to create and update the meters at runtime.">実行時にメーターを作成および更新するのは、アプリケーションの責任です。</span> <span class="merged" id="all.1hdJCv.spl2" title="原文 : The application has complete control over when and how each meter is used.">アプリケーションでは、各メーターがいつどのように使用されるかを完全に制御できます。</span> <span class="merged" id="all.1hdJCv.spl3" title="原文 : For example, an application may use the same counter for multiple methods, or one counter per method.">たとえば、アプリケーションで複数のメソッドに同じカウンタを使用したり、メソッドごとに1つのカウンタを使用できます。</span> <span class="merged" id="all.1hdJCv.spl4" title="原文 : Helidon maintains a single meter registry which holds all meters.">Helidonは、すべてのメーターを保持する単一のメーター・レジストリを保持します。</span> </p>

<p><span class="merged" id="all.3v8iBJ" title="原文 : In all of these examples, the code uses a meter builder specific to the type of meter needed to register a new meter or locate a previous-registered meter.">これらのすべての例で、コードでは、新しいメーターの登録または以前の登録済メーターの検索に必要なメーターのタイプに固有のメーター・ビルダーを使用します。</span></p>


<h4 id="_counter_meter"><span class="merged" id="all.62zH7" title="原文 : Counter Meter">カウンタ・メーター</span></h4>
<div class="section">
<p><span class="merged" id="all.4av7Pi.spl1" title="原文 : The Counter meter is a monotonically increasing number."><code>Counter</code>メーターは単調に増加する数です。</span> <span class="merged" id="all.4av7Pi.spl2" title="原文 : The following example demonstrates how to use a Counter to track the number of times the /cards endpoint is called.">次の例は、<code>Counter</code>を使用して、<code>/cards</code>エンドポイントがコールされた回数を追跡する方法を示しています。</span> </p>

<markup
lang="java"
title="Create a new class named <code>GreetingCards</code> with the following code:"
>package io.helidon.examples.quickstart.se;

import java.util.Collections;

import io.helidon.metrics.api.Counter;                      <span class="conum" data-value="1" />
import io.helidon.metrics.api.Metrics;
import io.helidon.webserver.http.HttpRules;
import io.helidon.webserver.http.HttpService;
import io.helidon.webserver.http.ServerRequest;
import io.helidon.webserver.http.ServerResponse;

import jakarta.json.Json;
import jakarta.json.JsonBuilderFactory;
import jakarta.json.JsonObject;

public class GreetingCards implements HttpService {

    private static final JsonBuilderFactory JSON = Json.createBuilderFactory(Collections.emptyMap());

    private final Counter cardCounter;                      <span class="conum" data-value="2" />

    GreetingCards() {
        cardCounter = Metrics.globalRegistry()
                .getOrCreate(Counter.builder("cardCount")
                        .description("Counts card retrievals")); <span class="conum" data-value="3" />
    }

    @Override
    public void routing(HttpRules rules) {
        rules.get("/", this::getDefaultMessageHandler);
    }

    private void getDefaultMessageHandler(ServerRequest request, ServerResponse response) {
        cardCounter.increment();                            <span class="conum" data-value="4" />
        sendResponse(response, "Here are some cards ...");
    }

    private void sendResponse(ServerResponse response, String msg) {
        JsonObject returnObject = JSON.createObjectBuilder().add("message", msg).build();
        response.send(returnObject);
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1e5IpK" title="原文 : Import metrics types.">メトリクス・タイプのインポート。</span></li>
<li data-value="2"><span class="merged" id="all.1xz08B" title="原文 : Declare a Counter member field."><code>Counter</code>メンバー・フィールドを宣言します。</span></li>
<li data-value="3"><span class="merged" id="all.23G6iK.spl1" title="原文 : Create and register the Counter meter in the global meter registry`.">グローバル・メーター・レジストリに<code>Counter</code>メーターを作成して登録します。</span> <span class="merged" id="all.23G6iK.spl2" title="原文 : This Counter will exist for the lifetime of the application.">この<code>Counter</code>は、アプリケーションの存続期間中存在します。</span> </li>
<li data-value="4"><span class="merged" id="all.27NfC3" title="原文 : Increment the count.">カウントを増分します。</span></li>
</ul>

<markup
lang="java"
title="Update the <code>Main.routing</code> method as follows:"
>    static void routing(HttpRouting.Builder routing) {
            Config config = Config.global();

            routing
                   .register("/greet", new GreetService())
                   .register("/cards", new GreetingCards())                     <span class="conum" data-value="1" />
                   .get("/simple-greet", (req, res) -&gt; res.send("Hello World!"));
        }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.156i3A.spl1" title="原文 : Add the GreetingCards service to the routing."><code>GreetingCards</code>サービスをルーティングに追加します。</span> <span class="merged" id="all.156i3A.spl2" title="原文 : Helidon routes any REST requests with the /cards root path to the GreetingCards service.">Helidonは、<code>/cards</code>ルート・パスを持つRESTリクエストを<code>GreetingCards</code>サービスにルーティングします。</span> </li>
</ul>

<markup
lang="bash"
title="Build and run the application, then invoke the endpoints below:"
>curl http://localhost:8080/cards
curl -H "Accept: application/json" 'http://localhost:8080/observe/metrics?scope=application'</markup>

<markup
lang="json"
title="JSON response:"
>{
  "cardCount": 1 <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.b7ySf" title="原文 : The count value is one since the method was called once.">count値は、メソッドが一度呼び出されてからの値です。</span></li>
</ul>

</div>


<h4 id="_timer_meter"><span class="merged" id="all.2u1EWl" title="原文 : Timer Meter">タイマー・メーター</span></h4>
<div class="section">
<p><span class="merged" id="all.2RlcWO" title="原文 : The Timer meter aggregates durations."><code>Timer</code>メーターは、期間を集計します。</span></p>

<p><span class="merged" id="all.2L9sMU.spl1" title="原文 : In the following example, a Timer meter measures the duration of a method’s execution.">次の例では、<code>Timer</code>メーターがメソッドの実行期間を測定します。</span> <span class="merged" id="all.2L9sMU.spl2" title="原文 : Whenever the REST /cards endpoint is called, the code updates the Timer with additional timing information.">REST <code>/cards</code>エンドポイントがコールされるたびに、コードは追加のタイミング情報で<code>Timer</code>を更新します。</span> </p>

<markup
lang="java"
title="Replace the <code>GreetingCards</code> class with the following code:"
>package io.helidon.examples.quickstart.se;

import java.util.Collections;

import io.helidon.metrics.api.Metrics;                      <span class="conum" data-value="1" />
import io.helidon.metrics.api.Timer;
import io.helidon.webserver.http.HttpRules;
import io.helidon.webserver.http.HttpService;
import io.helidon.webserver.http.ServerRequest;
import io.helidon.webserver.http.ServerResponse;

import jakarta.json.Json;
import jakarta.json.JsonBuilderFactory;
import jakarta.json.JsonObject;

public class GreetingCards implements HttpService {

    private static final JsonBuilderFactory JSON = Json.createBuilderFactory(Collections.emptyMap());
    private final Timer cardTimer;                          <span class="conum" data-value="2" />

    GreetingCards() {
        cardTimer = Metrics.globalRegistry()
                .getOrCreate(Timer.builder("cardTimer")     <span class="conum" data-value="3" />
                                     .description("Times card retrievals"));
    }

    @Override
    public void routing(HttpRules rules) {
        rules.get("/", this::getDefaultMessageHandler);
    }

    private void getDefaultMessageHandler(ServerRequest request, ServerResponse response) {
        Timer.Sample timerSample = Timer.start();           <span class="conum" data-value="4" />
        sendResponse(response, "Here are some cards ...");
        response.whenSent(() -&gt; timerSample.stop(cardTimer)); <span class="conum" data-value="5" />
    }

    private void sendResponse(ServerResponse response, String msg) {
        JsonObject returnObject = JSON.createObjectBuilder().add("message", msg).build();
        response.send(returnObject);
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.43c1zm" title="原文 : Import relevant metrics classes.">関連するメトリクス・クラスをインポートします。</span></li>
<li data-value="2"><span class="merged" id="all.2U6t6J" title="原文 : Declare a Timer member field."><code>Timer</code>メンバー・フィールドを宣言します。</span></li>
<li data-value="3"><span class="merged" id="all.WyCPF" title="原文 : Create and register the Timer metric in the global meter registry.">グローバル・メーター・レジストリに<code>Timer</code>メトリックを作成して登録します。</span></li>
<li data-value="4"><span class="merged" id="all.QMETH" title="原文 : Create a timer sample which, among other things, automatically records the starting time.">タイマー・サンプルを作成し、開始時間を自動的に記録します。</span></li>
<li data-value="5"><span class="merged" id="all.4VWBKI" title="原文 : Arrange for the timer sample to be stopped and applied to the cardTimer once Helidon sends the response to the client.">Helidonがレスポンスをクライアントに送信したら、タイマー・サンプルを停止して<code>cardTimer</code>に適用するように調整します。</span></li>
</ul>

<markup
lang="bash"
title="Build and run the application, then invoke the endpoints below:"
>curl http://localhost:8080/cards
curl http://localhost:8080/cards
curl -H "Accept: application/json"  'http://localhost:8080/observe/metrics?scope=application'</markup>

<markup
lang="json"
title="JSON response:"
>{
  "cardTimer": {
    "count": 2,
    "max": 0.01439681,
    "mean": 0.0073397075,
    "elapsedTime": 0.014679415,
    "p0.5": 0.000278528,
    "p0.75": 0.01466368,
    "p0.95": 0.01466368,
    "p0.98": 0.01466368,
    "p0.99": 0.01466368,
    "p0.999": 0.01466368
  }
}</markup>

<p><span class="merged" id="all.1XNyDV" title="原文 : Helidon updated the timer statistics for each of the two accesses to the /cards endpoint.">Helidonは、<code>/cards</code>エンドポイントへの2つのアクセスのそれぞれについてタイマー統計を更新しました。</span></p>

</div>


<h4 id="_distribution_summary_meters"><span class="merged" id="all.2luMFm" title="原文 : Distribution Summary Meters">分散サマリー・メーター</span></h4>
<div class="section">
<p><span class="merged" id="all.29Exe1.spl1" title="原文 : The DistributionSummary meter calculates the distribution of a set of values within ranges."><code>DistributionSummary</code>メーターは、範囲内の値のセットの分布を計算します。</span> <span class="merged" id="all.29Exe1.spl2" title="原文 : This meter does not relate to time at all.">このメーターは時間とはまったく関係ありません。</span> <span class="merged" id="all.29Exe1.spl3" title="原文 : The following example records a set of random numbers in a DistributionSummary meter when the /cards endpoint is invoked.">次の例では、<code>/cards</code>エンドポイントが呼び出されたときに、一連の乱数を<code>DistributionSummary</code>メーターに記録します。</span> </p>

<markup
lang="java"
title="Replace the <code>GreetingCards</code> class with the following code:"
>package io.helidon.examples.quickstart.se;

import java.util.Collections;
import java.util.Random;

import io.helidon.metrics.api.DistributionSummary;          <span class="conum" data-value="1" />
import io.helidon.metrics.api.Metrics;
import io.helidon.webserver.http.HttpRules;
import io.helidon.webserver.http.HttpService;
import io.helidon.webserver.http.ServerRequest;
import io.helidon.webserver.http.ServerResponse;

import jakarta.json.Json;
import jakarta.json.JsonBuilderFactory;
import jakarta.json.JsonObject;

public class GreetingCards implements HttpService {

    private static final JsonBuilderFactory JSON = Json.createBuilderFactory(Collections.emptyMap());
    private final DistributionSummary cardSummary;          <span class="conum" data-value="2" />

    GreetingCards() {
        cardSummary = Metrics.globalRegistry()
                .getOrCreate(DistributionSummary.builder("cardDist")
                                     .description("random card distribution")); <span class="conum" data-value="3" />
    }

    @Override
    public void routing(HttpRules rules) {
        rules.get("/", this::getDefaultMessageHandler);
    }

    private void getDefaultMessageHandler(ServerRequest request, ServerResponse response) {
        Random r = new Random();                            <span class="conum" data-value="4" />
        for (int i = 0; i &lt; 1000; i++) {
            cardSummary.record(1 + r.nextDouble());
        }
        sendResponse(response, "Here are some cards ...");

    }

    private void sendResponse(ServerResponse response, String msg) {
        JsonObject returnObject = JSON.createObjectBuilder().add("message", msg).build();
        response.send(returnObject);
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.43c1zm.1" title="原文 : Import relevant metrics classes.">関連するメトリクス・クラスをインポートします。</span></li>
<li data-value="2"><span class="merged" id="all.12Jbvp" title="原文 : Declare a DistributionSummary member field."><code>DistributionSummary</code>メンバー・フィールドを宣言します。</span></li>
<li data-value="3"><span class="merged" id="all.2uIMxW" title="原文 : Create and register the DistributionSummary meter in the global meter registry">グローバル・メーター・レジストリに<code>DistributionSummary</code>メーターを作成して登録</span></li>
<li data-value="4"><span class="merged" id="all.4cYxKN" title="原文 : Update the distribution summary with a random number multiple times for each request.">リクエストごとに分散サマリーを乱数で複数回更新します。</span></li>
</ul>

<markup
lang="bash"
title="Build and run the application, then invoke the endpoints below:"
>curl http://localhost:8080/cards
curl -H "Accept: application/json"  'http://localhost:8080/observe/metrics?scope=application'</markup>

<markup
lang="json"
title="JSON response:"
>{
  "cardDist": {
    "count": 1000,
    "max": 1.999805150914427,
    "mean": 1.4971440362723523,
    "total": 1497.1440362723522,
    "p0.5": 1.4375,
    "p0.75": 1.6875,
    "p0.95": 1.9375,
    "p0.98": 1.9375,
    "p0.99": 1.9375,
    "p0.999": 1.9375
  }
}</markup>

<p><span class="merged" id="all.45Erqh" title="原文 : The DistributionSummary.Builder allows your code to configure other aspects of the summary, such as bucket boundaries and percentiles to track."><code>DistributionSummary.Builder</code>を使用すると、コードで、追跡するバケット境界やパーセンタイルなど、サマリーの他の側面を構成できます。</span></p>

</div>


<h4 id="_gauge_metric"><span class="merged" id="all.46RJ4W.2" title="原文 : Gauge Metric">ゲージ・メトリック</span></h4>
<div class="section">
<p><span class="merged" id="all.Ko03H.spl1" title="原文 : The Gauge meter measures a value that is maintained by code outside the metrics subsystem."><code>Gauge</code>メーターは、メトリクス・サブシステムの外部のコードによって保持される値を測定します。</span> <span class="merged" id="all.Ko03H.spl2" title="原文 : As with other meters, the application explicitly registers a gauge.">他のメーターと同様に、アプリケーションはゲージを明示的に登録します。</span> <span class="merged" id="all.Ko03H.spl3" title="原文 : When the /observe/metrics endpoint is invoked, Helidon retrieves the value of each registered Gauge."><code>/observe/metrics</code>エンドポイントが呼び出されると、Helidonは登録された各<code>Gauge</code>の値を取得します。</span> <span class="merged" id="all.Ko03H.spl4" title="原文 : The following example demonstrates how a Gauge is used to get the current temperature.">次の例では、<code>Gauge</code>を使用して現在の温度を取得する方法を示します。</span> </p>

<markup
lang="java"
title="Replace the <code>GreetingCards</code> class with the following code:"
>package io.helidon.examples.quickstart.se;

import java.util.Collections;
import java.util.Random;

import io.helidon.metrics.api.Gauge;
import io.helidon.metrics.api.Metrics;
import io.helidon.webserver.http.HttpRules;
import io.helidon.webserver.http.HttpService;
import io.helidon.webserver.http.ServerRequest;
import io.helidon.webserver.http.ServerResponse;

import jakarta.json.Json;
import jakarta.json.JsonBuilderFactory;
import jakarta.json.JsonObject;

public class GreetingCards implements HttpService {

    private static final JsonBuilderFactory JSON = Json.createBuilderFactory(Collections.emptyMap());

    GreetingCards() {
        Random r = new Random();
        Metrics.globalRegistry()
                .getOrCreate(Gauge.builder("temperature",
                                           () -&gt; r.nextDouble(100.0))
                                     .description("Ambient temperature"));      <span class="conum" data-value="1" />
    }

    @Override
    public void routing(HttpRules rules) {
        rules.get("/", this::getDefaultMessageHandler);
    }

    private void getDefaultMessageHandler(ServerRequest request, ServerResponse response) {
        sendResponse(response, "Here are some cards ...");
    }

    private void sendResponse(ServerResponse response, String msg) {
        JsonObject returnObject = JSON.createObjectBuilder().add("message", msg).build();
        response.send(returnObject);
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2F9MJP" title="原文 : Register the Gauge, passing a Supplier&lt;Double&gt; which furnishes a random temperature from 0 to 100.0 each time the metrics system interrogates the gauge."><code>Gauge</code>を登録し、メトリクス・システムがゲージを問い合せるたびに、0から100.0までのランダムな温度を提供する<code>Supplier&lt;Double></code>を渡します。</span></li>
</ul>

<markup
lang="bash"
title="Build and run the application, then invoke the endpoint below:"
>curl -H "Accept: application/json"  'http://localhost:8080/observe/metrics?scope=application</markup>

<markup
lang="json"
title="JSON response:"
>{
  "temperature": 46.582132737739066        <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2UMeU1.spl1" title="原文 : The current (random) temperature.">現在の(ランダムな)温度。</span> <span class="merged" id="all.2UMeU1.spl2" title="原文 : Accessing the endpoint again returns a different value.">エンドポイントに再度アクセスすると、別の値が返されます。</span> </li>
</ul>

</div>

</div>


<h3 id="_integration_with_kubernetes_and_prometheus"><span class="merged" id="all.3Am6oP.2" title="原文 : Integration with Kubernetes and Prometheus">KubernetesおよびPrometheusとの統合</span></h3>
<div class="section">

<h4 id="_kubernetes_integration"><span class="merged" id="all.3Xx7O7.2" title="原文 : Kubernetes Integration">Kubernetes統合</span></h4>
<div class="section">
<p><span class="merged" id="all.F74DL" title="原文 : The following example shows how to integrate the Helidon SE application with Kubernetes.">次の例は、Helidon SEアプリケーションをKubernetesと統合する方法を示しています。</span></p>

<markup
lang="bash"
title="Stop the application and build the docker image:"
>docker build -t helidon-metrics-se .</markup>

<markup
lang="yaml"
title="Create the Kubernetes YAML specification, named <code>metrics.yaml</code>, with the following content:"
>kind: Service
apiVersion: v1
metadata:
  name: helidon-metrics <span class="conum" data-value="1" />
  labels:
    app: helidon-metrics
  annotations:
    prometheus.io/scrape: true <span class="conum" data-value="2" />
spec:
  type: NodePort
  selector:
    app: helidon-metrics
  ports:
    - port: 8080
      targetPort: 8080
      name: http
---
kind: Deployment
apiVersion: apps/v1
metadata:
  name: helidon-metrics
spec:
  replicas: 1 <span class="conum" data-value="3" />
  selector:
    matchLabels:
      app: helidon-metrics
  template:
    metadata:
      labels:
        app: helidon-metrics
        version: v1
    spec:
      containers:
        - name: helidon-metrics
          image: helidon-metrics-se
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 8080</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3s9wLQ.8" title="原文 : A service of type NodePort that serves the default routes on port 8080.">ポート<code>8080</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
<li data-value="2"><span class="merged" id="all.BOd0W.2" title="原文 : An annotation that will allow Prometheus to discover and scrape the application pod.">Prometheusがアプリケーションポッドを検出してスクレイプできるようにする注釈。</span></li>
<li data-value="3"><span class="merged" id="all.1dhwFj.8" title="原文 : A deployment with one replica of a pod.">ポッドの1つのレプリカを持つデプロイメント。</span></li>
</ul>

<markup
lang="bash"
title="Create and deploy the application into Kubernetes:"
>kubectl apply -f ./metrics.yaml</markup>

<markup
lang="bash"
title="Get the service information:"
>kubectl get service/helidon-metrics</markup>

<markup
lang="bash"

>NAME             TYPE       CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
helidon-metrics   NodePort   10.99.159.2   &lt;none&gt;        8080:31143/TCP   8s <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3Q1f91.6" title="原文 : A service of type NodePort that serves the default routes on port 31143.">ポート<code>31143</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
</ul>

<markup
lang="bash"
title="Verify the metrics endpoint using port <code>30116</code>, your port will likely be different:"
>curl http://localhost:31143/metrics</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.4tlHG.2" title="原文 : Leave the application running in Kubernetes since it will be used for Prometheus integration.">Prometheus統合に使用されるため、アプリケーションはKubernetesで実行したままにします。</span></p>
</div>

</div>


<h4 id="_prometheus_integration"><span class="merged" id="all.1IYRP6.2" title="原文 : Prometheus Integration">Prometheus統合</span></h4>
<div class="section">
<p><span class="merged" id="all.2HBarG.2.spl1" title="原文 : The metrics service that you just deployed into Kubernetes is already annotated with prometheus.io/scrape:.">Kubernetesにデプロイしたメトリクス・サービスには、すでに<code>prometheus.io/scrape:</code>の注釈が付いています。</span> <span class="merged" id="all.2HBarG.2.spl2" title="原文 : This will allow Prometheus to discover the service and scrape the metrics.">これにより、Prometheusはサービスを検出し、メトリクスをスクレイプできます。</span> <span class="merged" id="all.2HBarG.2.spl3" title="原文 : This example shows how to install Prometheus into Kubernetes, then verify that it discovered the Helidon metrics in your application.">この例では、PrometheusをKubernetesにインストールし、アプリケーションでHelidonメトリクスが検出されたことを確認する方法を示します。</span> </p>

<markup
lang="bash"
title="Install Prometheus and wait until the pod is ready:"
>helm install stable/prometheus --name metrics
export POD_NAME=$(kubectl get pods --namespace default -l "app=prometheus,component=server" -o jsonpath="{.items[0].metadata.name}")
kubectl get pod $POD_NAME</markup>

<p><span class="merged" id="all.1XStKB.2.spl1" title="原文 : You will see output similar to the following.">次のような出力が表示されます。</span> <span class="merged" id="all.1XStKB.2.spl2" title="原文 : Repeat the kubectl get pod command until you see 2/2 and Running."><code>2/2</code>および<code>Running</code>が表示されるまで、<code>kubectl get pod</code>コマンドを繰り返します。</span> <span class="merged" id="all.1XStKB.2.spl3" title="原文 : This may take up to one minute.">これには最大1分かかる場合があります。</span> </p>

<markup
lang="bash"

>metrics-prometheus-server-5fc5dc86cb-79lk4   2/2     Running   0          46s</markup>

<markup
lang="bash"
title="Create a port-forward so you can access the server URL:"
>kubectl --namespace default port-forward $POD_NAME 7090:9090</markup>

<p><span class="merged" id="all.4cNwrw.2.spl1" title="原文 : Now open your browser and navigate to http://localhost:7090/targets.">ブラウザを開き、<code><a class="bare" href="http://localhost:7090/targets" target="_blank">http://localhost:7090/targets</a></code>に移動します。</span> <span class="merged" id="all.4cNwrw.2.spl2" title="原文 : Search for helidon on the page and you will see your Helidon application as one of the Prometheus targets.">ページでhelidonを検索すると、Prometheusターゲットの一部としてHelidonアプリケーションが表示されます。</span> </p>

</div>


<h4 id="_final_cleanup"><span class="merged" id="all.1Bcn6e.2" title="原文 : Final Cleanup">最終クリーンアップ</span></h4>
<div class="section">
<p><span class="merged" id="all.HBnIV.6" title="原文 : You can now delete the Kubernetes resources that were just created during this example.">これで、この例で作成したKubernetesリソースを削除できます。</span></p>

<markup
lang="bash"
title="Delete the Prometheus Kubernetes resources:"
>helm delete --purge metrics</markup>

<markup
lang="bash"
title="Delete the application Kubernetes resources:"
>kubectl delete -f ./metrics.yaml</markup>

</div>

</div>


<h3 id="_summary"><span class="merged" id="all.1nTCR.11"  title="原文:: Summary">サマリー</span></h3>
<div class="section">
<p><span class="merged" id="all.37GmHp" title="原文 : This guide demonstrated how to use metrics in a Helidon SE application using various combinations of meters and scopes.">このガイドでは、メーターとスコープの様々な組合せを使用して、Helidon SEアプリケーションでメトリクスを使用する方法をデモンストレーションしました。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1d3UHc" title="原文 : Access meters for all three built-in scopes: base, vendor, and application">3つすべての組込みスコープのメーターへのアクセス: ベース、ベンダーおよびアプリケーション</span></p>

</li>
<li>
<p><span class="merged" id="all.3h797e" title="原文 : Configure meters that are updated by the application when an application REST endpoint is invoked">アプリケーションRESTエンドポイントの起動時にアプリケーションによって更新されるメーターを構成</span></p>

</li>
<li>
<p><span class="merged" id="all.1sGpYk" title="原文 : Configure a Gauge meter"><code>Gauge</code>メーターの構成</span></p>

</li>
<li>
<p><span class="merged" id="all.1cNgkv.1" title="原文 : Integrate Helidon metrics with Kubernetes and Prometheus">HelidonメトリクスとKubernetesおよびPrometheusの統合</span></p>

</li>
</ul>

<p><span class="merged" id="all.UfWha.6" title="原文 : Refer to the following references for additional information:">詳細は、次のリファレンスを参照してください:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2mjhzP.5" title="原文 : Helidon Javadoc"><a href="/apidocs/index.html?overview-summary.html" target="_blank">Helidon Javadoc</a></span></p>

</li>
</ul>

</div>

</div>

</doc-view>
