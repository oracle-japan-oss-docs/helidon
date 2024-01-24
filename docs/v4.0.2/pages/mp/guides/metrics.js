<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.8l1BP" title="原文 : Helidon MP Metrics Guide">Helidon MPメトリクス・ガイド</span></dt>
<dd slot="desc"><p><span class="merged" id="all.eLrkQ" title="原文 : This guide describes how to create a sample Helidon MicroProfile (MP) project that can be used to run some basic examples using both built-in and custom metrics with Helidon.">このガイドでは、Helidonの組込みメトリクスとカスタム・メトリクスの両方を使用して、いくつかの基本的な例を実行するために使用できるサンプルのHelidon MicroProfile (MP)プロジェクトを作成する方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_what_you_need"><span class="merged" id="all.27ZcMH.7"  title="原文:: What You Need">必要事項</span></h2>
<div class="section">
<p><span class="merged" id="all.4BUptU" title="原文 : For this 30 minute tutorial, you will need the following:">この30分のチュートリアルでは、次のものが必要です:</span></p>


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
<td class=""><span class="merged" id="all.3J4a7U.5" title="原文 : A Helidon MP Application">Helidon MPアプリケーション</span></td>
<td class=""><span class="merged" id="all.13muNj.5" title="原文 : You can use your own application or use the Helidon MP Quickstart to create a sample application.">独自のアプリケーションを使用するか、<router-link to="/mp/guides/quickstart">「Helidon MPクイックスタート」</router-link>を使用してサンプル・アプリケーションを作成できます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.17vEm3.8" title="原文 : Java&#160;SE&#160;21 (Open&#160;JDK&#160;21)"><a href="https://www.oracle.com/technetwork/java/javase/downloads" target="_blank">Java SE 21</a> (<a href="http://jdk.java.net" target="_blank">JDK 21を開く</a>)</span></td>
<td class=""><span class="merged" id="all.3uVV7D.8" title="原文 : Helidon requires Java 21+.">HelidonにはJava 21+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.UWTyd.8" title="原文 : Maven 3.8+"><a href="https://maven.apache.org/download.cgi" target="_blank">Maven 3.8+</a></span></td>
<td class=""><span class="merged" id="all.47RJEf.8" title="原文 : Helidon requires Maven 3.8+.">HelidonにはMaven 3.8+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ND1mN.8"  title="原文:: Docker 18.09+"><a href="https://docs.docker.com/install/" target="_blank">Docker 18.09+</a></span></td>
<td class=""><span class="merged" id="all.aX1BT.8" title="原文 : You need Docker if you want to build and deploy Docker containers.">Dockerコンテナをビルドおよびデプロイする場合は、Dockerが必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Lo77h.8"  title="原文:: Kubectl 1.16.5+"><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" target="_blank">Kubectl 1.16.5+</a></span></td>
<td class=""><span class="merged" id="all.1JBSOB.8" title="原文 : If you want to deploy to Kubernetes, you need kubectl and a Kubernetes cluster (you can install one on your desktop.">Kubernetesにデプロイする場合は、<code>kubectl</code>およびKubernetesクラスタが必要です (<router-link to="/about/kubernetes">「デスクトップにインストール」</router-link>できます)。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4xrRR"  title="原文:: Helm"><a href="https://github.com/helm/helm" target="_blank">Helm</a></span></td>
<td class=""><span class="merged" id="all.3eENFM" title="原文 : To manage Kubernetes applications.">Kubernetesアプリケーションを管理する場合。</span></td>
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


<h3 id="_create_a_sample_helidon_mp_project"><span class="merged" id="all.wmhRR.1" title="原文 : Create a Sample Helidon MP Project">サンプルHelidon MPプロジェクトの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.2oWHvo.1" title="原文 : Use the Helidon MP Maven archetype to create a simple project that can be used for the examples in this guide.">Helidon MP Maven原型を使用して、このガイドの例で使用できる単純なプロジェクトを作成します。</span></p>

<markup
lang="bash"
title="Run the Maven archetype"
>mvn -U archetype:generate -DinteractiveMode=false \
    -DarchetypeGroupId=io.helidon.archetypes \
    -DarchetypeArtifactId=helidon-quickstart-mp \
    -DarchetypeVersion=4.0.2 \
    -DgroupId=io.helidon.examples \
    -DartifactId=helidon-quickstart-mp \
    -Dpackage=io.helidon.examples.quickstart.mp</markup>

</div>


<h3 id="_using_the_built_in_metrics"><span class="merged" id="all.1Mhcwf" title="原文 : Using the Built-In Metrics">組込みメトリクスの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.3EcAVG.spl1" title="原文 : Helidon provides three built-in scopes of metrics: base, vendor, and application.">Helidonは、メトリクスの3つの組込みスコープを提供: ベース、ベンダーおよびアプリケーション。</span> <span class="merged" id="all.3EcAVG.spl2" title="原文 : Here are the metric endpoints:">メトリック・エンドポイントは次のとおりです:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.390Ox3" title="原文 : /metrics?scope=base - Base metrics as specified by the MicroProfile Metrics specification"><code>/metrics?scope=base</code> - MicroProfileメトリクス仕様で指定されたベース・メトリクス</span>

</li>
<li>
<span class="merged" id="all.23M7xN" title="原文 : /metrics?scope=vendor - Helidon-specific metrics"><code>/metrics?scope=vendor</code> - Helidon固有のメトリクス</span>

</li>
<li>
<span class="merged" id="all.2D3baN" title="原文 : /metrics?scope=application - Application-specific metrics data."><code>/metrics?scope=application</code> - アプリケーション固有のメトリクス・データ。</span>

</li>
</ol>

<p><span class="merged" id="all.4Xunhu" title="原文 : Applications can add their own custom scopes as well simply by specifying a custom scope name when registering a metric.">アプリケーションは、メトリックの登録時にカスタム・スコープ名を指定するのみでなく、独自のカスタム・スコープを追加できます。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3PwnP" title="原文 : The /metrics endpoint returns data for all scopes."><code>/metrics</code>エンドポイントは、すべてのスコープのデータを返します。</span></p>
</div>

<p><span class="merged" id="all.Q6x8R" title="原文 : The built-in metrics fall into these categories:">組込みメトリクスは、次のカテゴリに分類されます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.ozCa7" title="原文 : JVM behavior (in the base scope), and">JVMの動作(基本スコープ内)</span>

</li>
<li>
<span class="merged" id="all.3WeliT" title="原文 : basic key performance indicators for request handling (in the vendor scope).">リクエスト処理の基本的なキー・パフォーマンス・インジケータ(ベンダー・スコープ内)。</span>

</li>
</ol>

<p><span class="merged" id="all.38CDVs" title="原文 : A later section describes the key performance indicator metrics in detail.">後のセクションでは、<router-link @click.native="this.scrollFix('#basic-and-extended-kpi')" to="#basic-and-extended-kpi">「キー・パフォーマンス・インジケータのメトリクス」</router-link>について詳しく説明します。</span></p>

<p><span class="merged" id="all.4RGbS9.spl1" title="原文 : The following example demonstrates how to use the other built-in metrics.">次の例では、その他の組込みメトリクスを使用する方法を示します。</span> <span class="merged" id="all.4RGbS9.spl2" title="原文 : All examples are executed from the root directory of your project (helidon-quickstart-mp).">すべての例は、プロジェクトのルート・ディレクトリ(helidon-quickstart-mp)から実行されます。</span> </p>

<markup
lang="bash"
title="Build the application and then run it:"
>mvn package
java -jar target/helidon-quickstart-mp.jar</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1uB0m6.spl1" title="原文 : Metrics output can be returned in either text format (the default), or JSON.">メトリクス出力は、テキスト形式(デフォルト)またはJSONのいずれかで返すことができます。</span> <span class="merged" id="all.1uB0m6.spl2" title="原文 : The text format uses OpenMetrics (Prometheus) Text Format, see https://prometheus.io/docs/instrumenting/exposition_formats/#text-format-details.">テキスト形式では、OpenMetrics (Prometheus)テキスト形式を使用します。<a class="bare" href="https://prometheus.io/docs/instrumenting/exposition_formats/#text-format-details" target="_blank">https://prometheus.io/docs/instrumenting/exposition_formats/#text-format-details</a>を参照してください。</span> </p>
</div>

<markup
lang="bash"
title="Verify the metrics endpoint in a new terminal window:"
>curl http://localhost:8080/metrics</markup>

<markup
lang="text"
title="Text response: (partial)"
># HELP classloader_loadedClasses_total Displays the total number of classes that have been loaded since the Java virtual machine has started execution.
# TYPE classloader_loadedClasses_total counter
classloader_loadedClasses_total{mp_scope="base",} 8146.0
# HELP requests_count_total Each request (regardless of HTTP method) will increase this counter
# TYPE requests_count_total counter
requests_count_total{mp_scope="vendor",} 1.0
# HELP jvm_uptime_seconds Displays the start time of the Java virtual machine in seconds. This attribute displays the approximate time when the Java virtual machine started.
# TYPE jvm_uptime_seconds gauge
jvm_uptime_seconds{mp_scope="base",} 7.3770</markup>

<p><span class="merged" id="all.VV8rl" title="原文 : You can get the same data in JSON format.">同じデータをJSON形式で取得できます。</span></p>

<markup
lang="bash"
title="Verify the metrics endpoint with an HTTP accept header:"
>curl -H "Accept: application/json"  http://localhost:8080/metrics</markup>

<markup
lang="json"
title="JSON response (partial):"
>{
  "application": {
    "personalizedGets": 0,
    "allGets": {
      "count": 0,
      "elapsedTime": 0,
      "max": 0,
      "mean": 0
    }
  },
  "vendor": {
    "requests.count": 2
  },
  "base": {
    "gc.total;name=G1 Concurrent GC": 2,
    "cpu.systemLoadAverage": 10.3388671875,
    "classloader.loadedClasses.count": 8224,
    "thread.count": 19,
    "classloader.unloadedClasses.total": 0,
    "jvm.uptime": 36.8224
  }
}</markup>

<p><span class="merged" id="all.4Cp7NM" title="原文 : You can get a single metric by specifying the scope and name as query parameters in the URL.">URLでスコープと名前を問合せパラメータとして指定することで、単一のメトリックを取得できます。</span></p>

<markup
lang="bash"
title="Get the Helidon <code>requests.count</code> metric:"
>curl -H "Accept: application/json"  'http://localhost:8080/metrics?scope=vendor&amp;name=requests.count'</markup>

<markup
lang="json"
title="JSON response:"
>{
  "requests.count": 6
}</markup>

<p><span class="merged" id="all.1HQTzl" title="原文 : The base metrics illustrated above provide some insight into the behavior of the JVM in which the server runs.">前述の<code>base</code>メトリクスでは、サーバーが実行されるJVMの動作について、いくつかの洞察が提供されます。</span></p>

<p><span class="merged" id="all.4xfc4.spl1" title="原文 : The vendor metric shown above gives an idea of the request traffic the server is handling.">前述の<code>vendor</code>メトリックは、サーバーが処理しているリクエスト・トラフィックを把握します。</span> <span class="merged" id="all.4xfc4.spl2" title="原文 : See the later section for more information on the basic and extended key performance indicator metrics.">基本および拡張キー・パフォーマンス・インジケータ・メトリクスの詳細は、<router-link @click.native="this.scrollFix('#basic-and-extended-kpi')" to="#basic-and-extended-kpi">「後続セクション」</router-link>を参照してください。</span> </p>

</div>


<h3 id="_controlling_metrics_behavior"><span class="merged" id="all.3DSmdj" title="原文 : Controlling Metrics Behavior">メトリクス動作の制御</span></h3>
<div class="section">
<p><span class="merged" id="all.2VoBiI" title="原文 : By adding a metrics section to your application configuration you can control how the Helidon metrics subsystem behaves in any of several ways."><code>metrics</code>セクションをアプリケーション構成に追加することで、Helidonメトリクス・サブシステムの動作をいくつかの方法で制御できます。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3BoJia" title="原文 : Disable metrics subsystem entirely."><router-link @click.native="this.scrollFix('#disabling-entirely')" to="#disabling-entirely">「メトリクス・サブシステム全体を無効化」</router-link>。</span></p>

</li>
<li>
<p><span class="merged" id="all.4XF2JN" title="原文 : Control REST.request metrics."><router-link @click.native="this.scrollFix('#controlling-rest-request-metrics')" to="#controlling-rest-request-metrics"><code>REST.request</code>メトリクスを制御します。</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.JOewh" title="原文 : Select whether to collect extended key performance indicator metrics."><router-link @click.native="this.scrollFix('#basic-and-extended-kpi')" to="#basic-and-extended-kpi">「拡張キー・パフォーマンス・インジケータ・メトリクス」</router-link>を収集するかどうかを選択します。</span></p>

</li>
</ul>


<h4 id="disabling-entirely"><span class="merged" id="all.1gSl1J" title="原文 : Disabling Metrics Subsystem Entirely">メトリクス・サブシステム全体の無効化</span></h4>
<div class="section">
<p><span class="merged" id="all.43Ovhs" title="原文 : You can disable the metrics subsystem entirely using configuration:">構成を使用してメトリクス・サブシステムを完全に無効にできます:</span></p>

<markup
lang="properties"
title="Configuration properties file disabling metrics"
>metrics.enabled=false</markup>

<p><span class="merged" id="all.1cjI4F" title="原文 : With metrics processing disabled, Helidon never updates any metrics and the /metrics endpoints respond with 404.">メトリクス処理を無効にすると、Helidonはメトリクスを更新せず、<code>/metrics</code>エンドポイントは<code>404</code>で応答します。</span></p>

</div>


<h4 id="basic-and-extended-kpi"><span class="merged" id="all.1RbZUb" title="原文 : Collecting Basic and Extended Key Performance Indicator (KPI) Metrics">基本および拡張キー・パフォーマンス・インジケータ(KPI)メトリクスの収集</span></h4>
<div class="section">
<p><span class="merged" id="all.3hztst" title="原文 : Any time you include the Helidon metrics module in your application, Helidon tracks a basic performance indicator metric: a Counter of all requests received (requests.count).">Helidonメトリクス・モジュールをアプリケーションに含めると、Helidonは基本パフォーマンス・インジケータ・メトリックを追跡: 受信したすべてのリクエストの<code>Counter</code> (<code>requests.count</code>)。</span></p>

<p><span class="merged" id="all.2dm2kv" title="原文 : Helidon MP also includes additional, extended KPI metrics which are disabled by default:">Helidon MPには、デフォルトで無効になっている追加の拡張KPIメトリクスも含まれています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.NfwY6" title="原文 : current number of requests in-flight - a Gauge (requests.inFlight) of requests currently being processed">現在進行中のリクエスト数 - 現在処理中のリクエストの<code>Gauge</code> (<code>requests.inFlight</code>)</span></p>

</li>
<li>
<p><span class="merged" id="all.33WFic" title="原文 : long-running requests - a Counter (requests.longRunning) measuring the total number of requests which take at least a given amount of time to complete; configurable, defaults to 10000 milliseconds (10 seconds)">長時間実行リクエスト - <code>Counter</code> ( <code>requests.longRunning</code>)は、完了までに少なくとも所定の時間がかかるリクエストの合計数を測定します。構成可能で、デフォルトは10000ミリ秒(10秒)です</span></p>

</li>
<li>
<p><span class="merged" id="all.27RODF" title="原文 : load - a Counter (requests.load) measuring the number of requests worked on (as opposed to received)">load - (受信ではなく)処理されたリクエストの数を測定する<code>Counter</code> ( <code>requests.load</code>)</span></p>

</li>
<li>
<p><span class="merged" id="all.3l0O54" title="原文 : deferred - a Gauge (requests.deferred) measuring delayed request processing (work on a request was delayed after Helidon received the request)">延期 - 遅延リクエスト処理を測定する<code>Gauge</code> (<code>requests.deferred</code>) (Helidonがリクエストを受信した後にリクエストの処理が遅延した)</span></p>

</li>
</ul>

<p><span class="merged" id="all.oRutk" title="原文 : You can enable and control these metrics using configuration:">構成を使用して、次のメトリクスを有効化および制御できます:</span></p>

<markup
lang="properties"
title="Configuration properties file controlling extended KPI metrics"
>metrics.key-performance-indicators.extended = true
metrics.key-performance-indicators.long-running.threshold-ms = 2000</markup>

</div>


<h4 id="controlling-rest-request-metrics"><span class="merged" id="all.47VLh1" title="原文 : Controlling REST.request Metrics"><code>REST.request</code>メトリクスの制御</span></h4>
<div class="section">
<p><span class="merged" id="all.19dEsh.spl1" title="原文 : Helidon MP implements the optional family of metrics, all with the name REST.request, as described in the MicroProfile Metrics specification.">Helidon MPは、<a href="https://download.eclipse.org/microprofile/microprofile-metrics-5.0.1/microprofile-metrics-spec-5.0.1.html#_optional_rest" target="_blank">「MicroProfileメトリクス仕様」</a>で説明するように、オプションのメトリクス・ファミリ(すべて<code>REST.request</code>という名前)を実装します。</span> <span class="merged" id="all.19dEsh.spl2" title="原文 : Each instance is a Timer with tags class and method identifying exactly which REST endpoint Java method that instance measures.">各インスタンスは、インスタンスが測定するRESTエンドポイントJavaメソッドを正確に識別するタグ<code>class</code>および<code>method</code>を含む<code>Timer</code>です。</span> </p>

<p><span class="merged" id="all.2q6rwl.spl1" title="原文 : By default, Helidon MP does not enable this feature.">デフォルトでは、Helidon MPはこの機能を有効に<em>しません</em>。</span> <span class="merged" id="all.2q6rwl.spl2" title="原文 : Enable it by editing your application configuration to set metrics.rest-request.enabled to true.">これを有効にするには、アプリケーション構成を編集して<code>metrics.rest-request.enabled</code>を<code>true</code>に設定します。</span> </p>

<p><span class="merged" id="all.2EkcS4.spl1" title="原文 : Note that the applications you generate using the full Helidon archetype do enable this feature in the generated config file.">完全なHelidon原型を使用して生成したアプリケーションでは、生成された構成ファイルでこの機能を有効に<em>します</em>。</span> <span class="merged" id="all.2EkcS4.spl2" title="原文 : You can see the results in the sample output shown in earlier example runs.">結果は、前の実行例に示したサンプル出力で確認できます。</span> </p>

</div>

</div>


<h3 id="_metrics_metadata"><span class="merged" id="all.2zUh1o" title="原文 : Metrics Metadata">メトリクスMetadata</span></h3>
<div class="section">
<p><span class="merged" id="all.2y2NSk" title="原文 : Each metric has associated metadata that includes:">各メトリックには、次のものを含む関連メタデータがあります:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.3Z5ins" title="原文 : name: The name of the metric.">name: メトリックの名前。</span>

</li>
<li>
<span class="merged" id="all.2vJ3RV" title="原文 : units: The unit of the metric such as time (seconds, milliseconds), size (bytes, megabytes), etc.">units: 時間(秒、ミリ秒)、サイズ(バイト、メガバイト)などのメトリックの単位。</span>

</li>
<li>
<span class="merged" id="all.NgMf" title="原文 : a description of the metric.">メトリックの説明。</span>

</li>
</ol>

<p><span class="merged" id="all.qiSau" title="原文 : You can get the metadata for any scope, such as /metrics?scope=base, as shown below:">次に示すように、<code>/metrics?scope=base</code>などの任意のスコープのメタデータを取得できます:</span></p>

<markup
lang="bash"
title="Get the metrics metadata using HTTP OPTIONS method:"
> curl -X OPTIONS -H "Accept: application/json"  'http://localhost:8080/metrics?scope=base'</markup>

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


<h3 id="_application_specific_metrics_data"><span class="merged" id="all.1cx8aG" title="原文 : Application-Specific Metrics Data">アプリケーション固有のメトリクス・データ</span></h3>
<div class="section">
<p><span class="merged" id="all.3xfFYk.spl1" title="原文 : You can create application-specific metrics and integrate them with Helidon using CDI.">CDIを使用して、アプリケーション固有のメトリクスを作成し、Helidonと統合できます。</span> <span class="merged" id="all.3xfFYk.spl2" title="原文 : To add a new metric, simply annotate the JAX-RS resource with one of the metric annotations.">新しいメトリックを追加するには、JAX-RSリソースにメトリック注釈のいずれかを付けます。</span> <span class="merged" id="all.3xfFYk.spl3" title="原文 : Metrics can be injected at the class, method, and field-levels.">メトリクスは、クラス、メソッドおよびフィールド・レベルでインジェクトできます。</span> <span class="merged" id="all.3xfFYk.spl4" title="原文 : This document shows examples of all three.">このドキュメントでは、3つすべての例を示します。</span> </p>

<p><span class="merged" id="all.1yHQZS.spl1" title="原文 : Helidon will automatically create and register annotated application metrics and store them in the application MetricRegistry, which also contains the metric metadata.">Helidonでは、注釈付きアプリケーション・メトリクスが自動的に作成および登録され、アプリケーション<code>MetricRegistry</code>に格納され、そこでメトリック・メタデータも含まれます。</span> <span class="merged" id="all.1yHQZS.spl2" title="原文 : The metrics will exist for the lifetime of the application.">メトリクスは、アプリケーションの存続期間中存在します。</span> <span class="merged" id="all.1yHQZS.spl3" title="原文 : Each metric annotation has mandatory and optional fields.">各メトリック注釈には、必須フィールドとオプション・フィールドがあります。</span> <span class="merged" id="all.1yHQZS.spl4" title="原文 : The name field, for example, is optional.">たとえば、名前フィールドはオプションです。</span> </p>


<h4 id="_method_level_metrics"><span class="merged" id="all.3OE9v2" title="原文 : Method Level Metrics">メソッド・レベル・メトリクス</span></h4>
<div class="section">
<p><span class="merged" id="all.4PP8R2" title="原文 : There are two metrics that you can use by annotating a method:">メソッドに注釈を付けると、次の2つのメトリクスを使用できます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.oplvr" title="原文 : @Counted - Register a Counter metric"><code>@Counted</code> - <code>Counter</code>メトリックの登録</span>

</li>
<li>
<span class="merged" id="all.1Hy5eE" title="原文 : @Timed - Register a Timer metric"><code>@Timed</code> - <code>Timer</code>メトリックの登録</span>

</li>
</ol>

<p><span class="merged" id="all.1VCsx8" title="原文 : The following example will demonstrate how to use the @Counted annotation to track the number of times the /cards endpoint is called.">次の例では、<code>@Counted</code>注釈を使用して<code>/cards</code>エンドポイントがコールされた回数を追跡する方法を示します。</span></p>

<markup
lang="java"
title="Create a new class <code>GreetingCards</code> with the following code:"
>package io.helidon.examples.quickstart.mp;

import java.util.Collections;
import jakarta.enterprise.context.RequestScoped;
import jakarta.json.Json;
import jakarta.json.JsonBuilderFactory;
import jakarta.json.JsonObject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import org.eclipse.microprofile.metrics.annotation.Counted;

@Path("/cards") <span class="conum" data-value="1" />
@RequestScoped <span class="conum" data-value="2" />
public class GreetingCards {

  private static final JsonBuilderFactory JSON = Json.createBuilderFactory(Collections.emptyMap());

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  @Counted(name = "any-card")  <span class="conum" data-value="3" />
  public JsonObject anyCard() throws InterruptedException {
    return createResponse("Here are some random cards ...");
  }

  private JsonObject createResponse(String msg) {
    return JSON.createObjectBuilder().add("message", msg).build();
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3Hzzja" title="原文 : This class is annotated with Path which sets the path for this resource as /cards.">このクラスには、このリソースのパスを<code>/cards</code>として設定する<code>Path</code>の注釈が付けられます。</span></li>
<li data-value="2"><span class="merged" id="all.a2euG.spl1" title="原文 : The @RequestScoped annotation defines that this bean is request scoped."><code>@RequestScoped</code>注釈は、このBeanがリクエスト・スコープであることを定義します。</span> <span class="merged" id="all.a2euG.spl2" title="原文 : The request scope is active only for the duration of one web service invocation and it is destroyed at the end of that invocation.">リクエスト・スコープは、1つのwebサービス呼出しの間のみアクティブになり、その呼出しの最後に破棄されます。</span> </li>
<li data-value="3"><span class="merged" id="all.2Thtk.spl1" title="原文 : The annotation @Counted will register a Counter metric for this method, creating it if needed.">注釈<code>@Counted</code>は、このメソッドの<code>Counter</code>メトリックを登録し、必要に応じて作成します。</span> <span class="merged" id="all.2Thtk.spl2" title="原文 : The counter is incremented each time the anyCards method is called.">カウンタは、anyCardsメソッドが呼び出されるたびに増分されます。</span> <span class="merged" id="all.2Thtk.spl3" title="原文 : The name attribute is optional."><code>name</code>属性はオプションです。</span> </li>
</ul>

<markup
lang="bash"
title="Build and run the application, then invoke the application endpoints below:"
>curl http://localhost:8080/cards
curl http://localhost:8080/cards
curl -H "Accept: application/json"  'http://localhost:8080/metrics?scope=application'</markup>

<markup
lang="json"
title="JSON response (partial):"
>{
  "io.helidon.examples.quickstart.mp.GreetingCards.any-card":2 <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.43vFDp" title="原文 : The any-card count is two, since you invoked the endpoint twice.">エンドポイントを2回呼び出したため、any-cardカウントは2つです。</span></li>
</ul>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.U3nEs.spl1" title="原文 : Notice the counter is fully qualified.">カウンタが完全修飾されていることに注意してください。</span> <span class="merged" id="all.U3nEs.spl2" title="原文 : You can remove the package prefix by using the absolute=true field in the @Counted annotation."><code>@Counted</code>注釈の<code>absolute=true</code>フィールドを使用して、パッケージ・プレフィクスを削除できます。</span> <span class="merged" id="all.U3nEs.spl3" title="原文 : You must use absolute=false for class-level annotations.">クラス・レベルの注釈には<code>absolute=false</code>を使用する必要があります。</span> </p>
</div>

</div>


<h4 id="_additional_method_level_metrics"><span class="merged" id="all.1V4zA2" title="原文 : Additional Method Level Metrics">追加メソッド・レベル・メトリクス</span></h4>
<div class="section">
<p><span class="merged" id="all.3qvEou.spl1" title="原文 : The @Timed annotation can also be used with a method."><code>@Timed</code>注釈は、メソッドとともに使用することもできます。</span> <span class="merged" id="all.3qvEou.spl2" title="原文 : For the following example. you can just annotate the same method with @Timed.">次の例では、同じメソッドに<code>@Timed</code>で注釈を付けることができます。</span> <span class="merged" id="all.3qvEou.spl3" title="原文 : These metrics collect significant information about the measured methods, but at a cost of some overhead and more complicated output.">これらのメトリクスは、測定されたメソッドに関する重要な情報を収集しますが、オーバーヘッドやより複雑な出力が発生します。</span> </p>

<p><span class="merged" id="all.3kX4nx" title="原文 : Note that when using multiple annotations on a method, you must give the metrics different names as shown below.">メソッドで複数の注釈を使用する場合は、次に示すようにメトリクスに異なる名前を付ける必要があります。</span></p>

<markup
lang="java"
title="Replace the <code>GreetingCards</code> class with the following code:"
>package io.helidon.examples.quickstart.mp;

import java.util.Collections;
import jakarta.enterprise.context.RequestScoped;
import jakarta.json.Json;
import jakarta.json.JsonBuilderFactory;
import jakarta.json.JsonObject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import org.eclipse.microprofile.metrics.MetricUnits;
import org.eclipse.microprofile.metrics.annotation.Counted;
import org.eclipse.microprofile.metrics.annotation.Timed;

@Path("/cards")
@RequestScoped
public class GreetingCards {

  private static final JsonBuilderFactory JSON = Json.createBuilderFactory(Collections.emptyMap());

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  @Counted(name = "cardCount", absolute = true) <span class="conum" data-value="1" />
  @Timed(name = "cardTimer", absolute = true, unit = MetricUnits.MILLISECONDS) <span class="conum" data-value="2" />
  public JsonObject anyCard() {
    return createResponse("Here are some random cards ...");
  }

  private JsonObject createResponse(String msg) {
    return JSON.createObjectBuilder().add("message", msg).build();
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.mOrhG" title="原文 : Specify a custom name for the Counter metric and set absolute=true to remove the path prefix from the name."><code>Counter</code>メトリックのカスタム名を指定し、<code>absolute=true</code>を設定して名前からパス・プレフィクスを削除します。</span></li>
<li data-value="2"><span class="merged" id="all.SfnC7" title="原文 : Add the @Timed annotation to get a Timer metric."><code>@Timed</code>注釈を追加して、<code>Timer</code>メトリックを取得します。</span></li>
</ul>

<markup
lang="bash"
title="Build and run the application, then invoke the application endpoints below:"
>curl http://localhost:8080/cards
curl http://localhost:8080/cards
curl -H "Accept: application/json"  'http://localhost:8080/metrics?scope=application'</markup>

<markup
lang="json"
title="JSON response (partial):"
>{
  "cardTimer": {
    "count": 2,
    "max": 0.002921992,
    "mean": 0.0014682555,
    "elapsedTime": 0.002936511,
    "p0.5": 1.4336e-05,
    "p0.75": 0.003014144,
    "p0.95": 0.003014144,
    "p0.98": 0.003014144,
    "p0.99": 0.003014144,
    "p0.999": 0.003014144
  }
  "cardCount": 2
}</markup>

</div>


<h4 id="_reusing_metrics"><span class="merged" id="all.1c56RP" title="原文 : Reusing Metrics">メトリクスの再利用</span></h4>
<div class="section">
<p><span class="merged" id="all.4gcMKG" title="原文 : You can share a metric across multiple endpoints simply by specifying the same metric annotation as demonstrated below.">次に示すのと同じメトリック注釈を指定するだけで、複数のエンドポイント間でメトリックを共有できます。</span></p>

<markup
lang="java"
title="Replace the <code>GreetingCards</code> class with the following code:"
>package io.helidon.examples.quickstart.mp;

import java.util.Collections;
import jakarta.enterprise.context.RequestScoped;
import jakarta.json.Json;
import jakarta.json.JsonBuilderFactory;
import jakarta.json.JsonObject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import org.eclipse.microprofile.metrics.annotation.Counted;

@Path("/cards")
@RequestScoped
public class GreetingCards {

  private static final JsonBuilderFactory JSON = Json.createBuilderFactory(Collections.emptyMap());

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  @Counted(name = "anyCard", absolute = true)
  public JsonObject anyCard() throws InterruptedException {
    return createResponse("Here are some cards ...");
  }

  @GET
  @Path("/birthday")
  @Produces(MediaType.APPLICATION_JSON)
  @Counted(name = "specialEventCard", absolute = true)  <span class="conum" data-value="1" />
  public JsonObject birthdayCard() throws InterruptedException {
    return createResponse("Here are some birthday cards ...");
  }

  @GET
  @Path("/wedding")
  @Produces(MediaType.APPLICATION_JSON)
  @Counted(name = "specialEventCard", absolute = true)  <span class="conum" data-value="2" />
  public JsonObject weddingCard() throws InterruptedException {
    return createResponse("Here are some wedding cards ...");
  }

  private JsonObject createResponse(String msg) {
    return JSON.createObjectBuilder().add("message", msg).build();
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2teiLI" title="原文 : The /birthday endpoint uses a Counter metric, named specialEventCard."><code>/birthday</code>エンドポイントは、<code>specialEventCard</code>という名前の<code>Counter</code>メトリックを使用します。</span></li>
<li data-value="2"><span class="merged" id="all.3ZfX2c" title="原文 : The /wedding endpoint uses the same Counter metric, named specialEventCard."><code>/wedding</code>エンドポイントは、<code>specialEventCard</code>という名前の同じ<code>Counter</code>メトリックを使用します。</span></li>
</ul>

<markup
lang="bash"
title="Build and run the application, then invoke the following endpoints:"
>curl  http://localhost:8080/cards/wedding
curl  http://localhost:8080/cards/birthday
curl  http://localhost:8080/cards
curl -H "Accept: application/json"  'http://localhost:8080/metrics?scope=application'</markup>

<markup
lang="json"
title="JSON response (partial)`:"
>{
  "anyCard": 1,
  "specialEventCard": 2  <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2XHAF4" title="原文 : Notice that specialEventCard count is two, since you accessed /cards/wedding and /cards/birthday."><code>/cards/wedding</code>および<code>/cards/birthday</code>にアクセスしたため、<code>specialEventCard</code>数は2つであることに注意してください。</span></li>
</ul>

</div>


<h4 id="_class_level_metrics"><span class="merged" id="all.2fx92O" title="原文 : Class Level Metrics">クラス・レベル・メトリクス</span></h4>
<div class="section">
<p><span class="merged" id="all.3PPnOX.spl1" title="原文 : You can collect metrics at the class-level to aggregate data from all methods in that class using the same metric.">クラス・レベルでメトリクスを収集し、同じメトリックを使用してそのクラスのすべてのメソッドからデータを集計できます。</span> <span class="merged" id="all.3PPnOX.spl2" title="原文 : The following example introduces a metric to count all card queries.">次の例では、すべてのカード問合せをカウントするメトリックを導入します。</span> <span class="merged" id="all.3PPnOX.spl3" title="原文 : In the following example, the method-level metrics are not needed to aggregate the counts, but they are left in the example to demonstrate the combined output of all three metrics.">次の例では、カウントの集計にメソッド・レベル・メトリクスは必要ありませんが、3つのメトリクスすべての結合された出力を示すために例に残されています。</span> </p>

<markup
lang="java"
title="Replace the <code>GreetingCards</code> class with the following code:"
>package io.helidon.examples.quickstart.mp;

import java.util.Collections;
import jakarta.enterprise.context.RequestScoped;
import jakarta.json.Json;
import jakarta.json.JsonBuilderFactory;
import jakarta.json.JsonObject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import org.eclipse.microprofile.metrics.annotation.Counted;

@Path("/cards")
@RequestScoped
@Counted(name = "totalCards") <span class="conum" data-value="1" />
public class GreetingCards {

  private static final JsonBuilderFactory JSON = Json.createBuilderFactory(Collections.emptyMap());

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  @Counted(absolute = true) <span class="conum" data-value="2" />
  public JsonObject anyCard() throws InterruptedException {
    return createResponse("Here are some random cards ...");
  }

  @Path("/birthday")
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  @Counted(absolute = true) <span class="conum" data-value="3" />
  public JsonObject birthdayCard() throws InterruptedException {
    return createResponse("Here are some birthday cards ...");
  }

  private JsonObject createResponse(String msg) {
    return JSON.createObjectBuilder().add("message", msg).build();
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.13GuSk" title="原文 : This class is annotated with @Counted, which aggregates count data from all the method that have a Count annotation.">このクラスには、<code>Count</code>注釈を持つすべてのメソッドからカウント・データを集計する<code>@Counted</code>の注釈が付けられます。</span></li>
<li data-value="2"><span class="merged" id="all.2VxWry" title="原文 : Use absolute=true to remove path prefix for method-level annotations."><code>absolute=true</code>を使用して、メソッド・レベルの注釈のパス・プレフィクスを削除します。</span></li>
<li data-value="3"><span class="merged" id="all.1nElqm" title="原文 : Add a method with a Counter metric to get birthday cards.">誕生日カードを取得するメソッドを<code>Counter</code>メトリックとともに追加します。</span></li>
</ul>

<markup
lang="bash"
title="Build and run the application, then invoke the following endpoints:"
>curl http://localhost:8080/cards
curl http://localhost:8080/cards/birthday
curl -H "Accept: application/json"  'http://localhost:8080/metrics?scope=application'</markup>

<markup
lang="json"
title="JSON response (partial):"
>{
  "anyCard": 1,
  "birthdayCard": 1,
  "io.helidon.examples.quickstart.mp.totalCards.GreetingCards": 2  <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1PZkzO.spl1" title="原文 : The totalCards count is a total of all the method-level Counter metrics."><code>totalCards</code>数は、すべてのメソッド・レベルの<code>Counter</code>メトリクスの合計です。</span> <span class="merged" id="all.1PZkzO.spl2" title="原文 : Class level metric names are always fully qualified.">クラス・レベル・メトリック名は常に完全修飾されます。</span> </li>
</ul>

</div>


<h4 id="_field_level_metrics"><span class="merged" id="all.2a5cWZ" title="原文 : Field Level Metrics">フィールド・レベル・メトリクス</span></h4>
<div class="section">
<p><span class="merged" id="all.4Nq8dE.spl1" title="原文 : Field level metrics can be injected into managed objects, but they need to be updated by the application code.">フィールド・レベルのメトリクスは管理対象オブジェクトにインジェクトできますが、アプリケーション・コードで更新する必要があります。</span> <span class="merged" id="all.4Nq8dE.spl2" title="原文 : This annotation can be used on fields of type Timer, Counter, and Histogram.">この注釈は、<code>Timer</code>、<code>Counter</code>および<code>Histogram</code>型のフィールドで使用できます。</span> </p>

<p><span class="merged" id="all.2uTiBQ" title="原文 : The following example shows how to use a field-level Counter metric to track cache hits.">次の例は、フィールドレベルの<code>Counter</code>メトリックを使用してキャッシュ・ヒットを追跡する方法を示しています。</span></p>

<markup
lang="java"
title="Replace the <code>GreetingCards</code> class with the following code:"
>package io.helidon.examples.quickstart.mp;

import java.util.Collections;
import java.util.Random;
import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.json.Json;
import jakarta.json.JsonBuilderFactory;
import jakarta.json.JsonObject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import org.eclipse.microprofile.metrics.Counter;
import org.eclipse.microprofile.metrics.annotation.Counted;
import org.eclipse.microprofile.metrics.annotation.Metric;

@Path("/cards")
@RequestScoped
@Counted(name = "totalCards")
public class GreetingCards {

  private static final JsonBuilderFactory JSON = Json.createBuilderFactory(Collections.emptyMap());

  @Inject
  @Metric(name = "cacheHits", absolute = true) <span class="conum" data-value="1" />
  private Counter cacheHits;

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  @Counted(absolute = true)
  public JsonObject anyCard() throws InterruptedException {
    updateStats(); <span class="conum" data-value="2" />
    return createResponse("Here are some random cards ...");
  }

  @Path("/birthday")
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  @Counted(absolute = true)
  public JsonObject birthdayCard() throws InterruptedException {
    updateStats();  <span class="conum" data-value="3" />
    return createResponse("Here are some birthday cards ...");
  }

  private JsonObject createResponse(String msg) {
    return JSON.createObjectBuilder().add("message", msg).build();
  }

  private void updateStats() {
    if (new Random().nextInt(3) == 1) {
      cacheHits.inc(); <span class="conum" data-value="4" />
    }
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.VBcUI" title="原文 : A Counter metric field, cacheHits, is automatically injected by Helidon."><code>Counter</code>メトリック・フィールド<code>cacheHits</code>は、Helidonによって自動的にインジェクトされます。</span></li>
<li data-value="2"><span class="merged" id="all.11bvPF" title="原文 : Call updateStats() to update the cache hits."><code>updateStats()</code>をコールして、キャッシュ・ヒットを更新します。</span></li>
<li data-value="3"><span class="merged" id="all.11bvPF.1" title="原文 : Call updateStats() to update the cache hits."><code>updateStats()</code>をコールして、キャッシュ・ヒットを更新します。</span></li>
<li data-value="4"><span class="merged" id="all.ATusR" title="原文 : Randomly increment the cacheHits counter."><code>cacheHits</code>カウンタをランダムに増分します。</span></li>
</ul>

<markup
lang="bash"
title="Build and run the application, then invoke the following endpoints:"
>curl http://localhost:8080/cards
curl http://localhost:8080/cards
curl http://localhost:8080/cards/birthday
curl http://localhost:8080/cards/birthday
curl http://localhost:8080/cards/birthday
curl -H "Accept: application/json"  'http://localhost:8080/metrics?scope=application'</markup>

<markup
lang="json"
title="JSON response (partial):"
>{
  "anyCard": 2,
  "birthdayCard": 3,
  "cacheHits": 2, <span class="conum" data-value="1" />
  "io.helidon.examples.quickstart.mp.totalCards.GreetingCards": 5
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2pydFR" title="原文 : The cache was hit two times out of five queries.">キャッシュは5つの問合せのうち2回ヒットしました。</span></li>
</ul>

</div>


<h4 id="_gauge_metric"><span class="merged" id="all.46RJ4W" title="原文 : Gauge Metric">ゲージ・メトリック</span></h4>
<div class="section">
<p><span class="merged" id="all.SQ2fb.spl1" title="原文 : The Gauge metric measures a value that is maintained by code outside the metrics subsystem."><code>Gauge</code>メトリックは、メトリクス・サブシステムの外部のコードによって保持される値を測定します。</span> <span class="merged" id="all.SQ2fb.spl2" title="原文 : As with other metrics, the application explicitly registers a gauge.">他のメトリクスと同様に、アプリケーションはゲージを明示的に登録します。</span> <span class="merged" id="all.SQ2fb.spl3" title="原文 : When the /metrics endpoint is invoked, Helidon retrieves the value of each registered Gauge."><code>/metrics</code>エンドポイントが呼び出されると、Helidonは登録された各<code>Gauge</code>の値を取得します。</span> </p>

<p><span class="merged" id="all.RMQte" title="原文 : The following example demonstrates how to use a Gauge to track application up-time.">次の例は、<code>Gauge</code>を使用してアプリケーションの稼働時間を追跡する方法を示しています。</span></p>

<markup
lang="java"
title="Create a new <code>GreetingCardsAppMetrics</code> class with the following code:"
>package io.helidon.examples.quickstart.mp;

import java.time.Duration;
import java.util.concurrent.atomic.AtomicLong;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.context.Initialized;
import jakarta.enterprise.event.Observes;
import org.eclipse.microprofile.metrics.annotation.Gauge;

@ApplicationScoped <span class="conum" data-value="1" />
public class GreetingCardsAppMetrics {

  private AtomicLong startTime = new AtomicLong(0); <span class="conum" data-value="2" />

  public void onStartUp(@Observes @Initialized(ApplicationScoped.class) Object init) {
    startTime = new AtomicLong(System.currentTimeMillis()); <span class="conum" data-value="3" />
  }

  @Gauge(unit = "TimeSeconds")
  public long appUpTimeSeconds() {
    return Duration.ofMillis(System.currentTimeMillis() - startTime.get()).getSeconds();  <span class="conum" data-value="4" />
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1hdvii" title="原文 : This managed object must be application scoped to properly register and use the Gauge metric."><code>Gauge</code>メトリックを正しく登録して使用するには、この管理対象オブジェクトがアプリケーション・スコープである必要があります。</span></li>
<li data-value="2"><span class="merged" id="all.2iVdwx" title="原文 : Declare an AtomicLong field to hold the start time of the application.">アプリケーションの開始時間を保持する<code>AtomicLong</code>フィールドを宣言します。</span></li>
<li data-value="3"><span class="merged" id="all.1GqOhr" title="原文 : Initialize the application start time.">アプリケーションの起動時間を初期化します。</span></li>
<li data-value="4"><span class="merged" id="all.38FnMS" title="原文 : Return the application appUpTimeSeconds metric, which will be included in the application metrics.">アプリケーション・メトリクスに含まれるアプリケーション<code>appUpTimeSeconds</code>メトリックを返します。</span></li>
</ul>

<markup
lang="java"
title="Update the <code>GreetingCards</code> class with the following code to simplify the metrics output:"
>package io.helidon.examples.quickstart.mp;

import java.util.Collections;
import jakarta.enterprise.context.RequestScoped;
import jakarta.json.Json;
import jakarta.json.JsonBuilderFactory;
import jakarta.json.JsonObject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import org.eclipse.microprofile.metrics.annotation.Counted;

@Path("/cards")
@RequestScoped
public class GreetingCards {

  private static final JsonBuilderFactory JSON = Json.createBuilderFactory(Collections.emptyMap());

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  @Counted(name = "cardCount", absolute = true)
  public JsonObject anyCard() throws InterruptedException {
    return createResponse("Here are some random cards ...");
  }

  private JsonObject createResponse(String msg) {
    return JSON.createObjectBuilder().add("message", msg).build();
  }
}</markup>

<markup
lang="bash"
title="Build and run the application, then invoke the application metrics endpoint:"
>curl -H "Accept: application/json"  http://localhost:8080/metrics/application</markup>

<markup
lang="json"
title="JSON response from <code>/metrics/application</code>:"
>{
  "cardCount": 0,
  "io.helidon.examples.quickstart.mp.GreetingCardsAppMetrics.appUpTimeSeconds": 6 <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4fyT7r" title="原文 : The application has been running for 6 seconds.">アプリケーションは6秒間実行されています。</span></li>
</ul>

</div>

</div>


<h3 id="_integration_with_kubernetes_and_prometheus"><span class="merged" id="all.3Am6oP" title="原文 : Integration with Kubernetes and Prometheus">KubernetesおよびPrometheusとの統合</span></h3>
<div class="section">

<h4 id="_kubernetes_integration"><span class="merged" id="all.3Xx7O7" title="原文 : Kubernetes Integration">Kubernetes統合</span></h4>
<div class="section">
<p><span class="merged" id="all.HOIa7" title="原文 : The following example shows how to integrate the Helidon MP application with Kubernetes.">次の例は、Helidon MPアプリケーションをKubernetesと統合する方法を示しています。</span></p>

<markup
lang="bash"
title="Stop the application and build the docker image:"
>docker build -t helidon-metrics-mp .</markup>

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
          image: helidon-metrics-mp
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 8080</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3s9wLQ.2" title="原文 : A service of type NodePort that serves the default routes on port 8080.">ポート<code>8080</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
<li data-value="2"><span class="merged" id="all.BOd0W" title="原文 : An annotation that will allow Prometheus to discover and scrape the application pod.">Prometheusがアプリケーションポッドを検出してスクレイプできるようにする注釈。</span></li>
<li data-value="3"><span class="merged" id="all.1dhwFj.2" title="原文 : A deployment with one replica of a pod.">ポッドの1つのレプリカを持つデプロイメント。</span></li>
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
<li data-value="1"><span class="merged" id="all.3Q1f91.1" title="原文 : A service of type NodePort that serves the default routes on port 31143.">ポート<code>31143</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
</ul>

<markup
lang="bash"
title="Verify the metrics endpoint using port <code>30116</code>, your port will likely be different:"
>curl http://localhost:31143/metrics</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.4tlHG" title="原文 : Leave the application running in Kubernetes since it will be used for Prometheus integration.">Prometheus統合に使用されるため、アプリケーションはKubernetesで実行したままにします。</span></p>
</div>

</div>


<h4 id="_prometheus_integration"><span class="merged" id="all.1IYRP6" title="原文 : Prometheus Integration">Prometheus統合</span></h4>
<div class="section">
<p><span class="merged" id="all.2HBarG.spl1" title="原文 : The metrics service that you just deployed into Kubernetes is already annotated with prometheus.io/scrape:.">Kubernetesにデプロイしたメトリクス・サービスには、すでに<code>prometheus.io/scrape:</code>の注釈が付いています。</span> <span class="merged" id="all.2HBarG.spl2" title="原文 : This will allow Prometheus to discover the service and scrape the metrics.">これにより、Prometheusはサービスを検出し、メトリクスをスクレイプできます。</span> <span class="merged" id="all.2HBarG.spl3" title="原文 : This example shows how to install Prometheus into Kubernetes, then verify that it discovered the Helidon metrics in your application.">この例では、PrometheusをKubernetesにインストールし、アプリケーションでHelidonメトリクスが検出されたことを確認する方法を示します。</span> </p>

<markup
lang="bash"
title="Install Prometheus and wait until the pod is ready:"
>helm install stable/prometheus --name metrics
export POD_NAME=$(kubectl get pods --namespace default -l "app=prometheus,component=server" -o jsonpath="{.items[0].metadata.name}")
kubectl get pod $POD_NAME</markup>

<p><span class="merged" id="all.1XStKB.spl1" title="原文 : You will see output similar to the following.">次のような出力が表示されます。</span> <span class="merged" id="all.1XStKB.spl2" title="原文 : Repeat the kubectl get pod command until you see 2/2 and Running."><code>2/2</code>および<code>Running</code>が表示されるまで、<code>kubectl get pod</code>コマンドを繰り返します。</span> <span class="merged" id="all.1XStKB.spl3" title="原文 : This may take up to one minute.">これには最大1分かかる場合があります。</span> </p>

<markup
lang="bash"

>metrics-prometheus-server-5fc5dc86cb-79lk4   2/2     Running   0          46s</markup>

<markup
lang="bash"
title="Create a port-forward so you can access the server URL:"
>kubectl --namespace default port-forward $POD_NAME 7090:9090</markup>

<p><span class="merged" id="all.4cNwrw.spl1" title="原文 : Now open your browser and navigate to http://localhost:7090/targets.">ブラウザを開き、<code><a class="bare" href="http://localhost:7090/targets" target="_blank">http://localhost:7090/targets</a></code>に移動します。</span> <span class="merged" id="all.4cNwrw.spl2" title="原文 : Search for helidon on the page and you will see your Helidon application as one of the Prometheus targets.">ページでhelidonを検索すると、Prometheusターゲットの一部としてHelidonアプリケーションが表示されます。</span> </p>

</div>


<h4 id="_final_cleanup"><span class="merged" id="all.1Bcn6e" title="原文 : Final Cleanup">最終クリーンアップ</span></h4>
<div class="section">
<p><span class="merged" id="all.HBnIV.1" title="原文 : You can now delete the Kubernetes resources that were just created during this example.">これで、この例で作成したKubernetesリソースを削除できます。</span></p>

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


<h3 id="_summary"><span class="merged" id="all.1nTCR.3"  title="原文:: Summary">サマリー</span></h3>
<div class="section">
<p><span class="merged" id="all.1pN5mg" title="原文 : This guide demonstrated how to use metrics in a Helidon MP application using various combinations of metrics and scopes.">このガイドでは、メトリクスとスコープの様々な組合せを使用して、Helidon MPアプリケーションでメトリクスを使用する方法について説明しました。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3Mkxqz" title="原文 : Access metrics for all three scopes: base, vendor, and application">3つのスコープすべてのアクセス・メトリクス: ベース、ベンダーおよびアプリケーション</span></p>

</li>
<li>
<p><span class="merged" id="all.2uQ0mO" title="原文 : Configure application metrics at the class, method, and field-level">クラス・レベル、メソッド・レベルおよびフィールド・レベルでのアプリケーション・メトリクスの構成</span></p>

</li>
<li>
<p><span class="merged" id="all.1cNgkv" title="原文 : Integrate Helidon metrics with Kubernetes and Prometheus">HelidonメトリクスとKubernetesおよびPrometheusの統合</span></p>

</li>
</ul>

<p><span class="merged" id="all.UfWha.2" title="原文 : Refer to the following references for additional information:">詳細は、次のリファレンスを参照してください:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.36m5KA" title="原文 : MicroProfile Metrics specification"><a href="https://download.eclipse.org/microprofile/microprofile-metrics-5.0.1/microprofile-metrics-spec-5.0.1.html" target="_blank">MicroProfileメトリクス仕様</a></span></p>

</li>
<li>
<p><span class="merged" id="all.RJG4k" title="原文 : MicroProfile Metrics Javadoc"><a href="https://download.eclipse.org/microprofile/microprofile-metrics-5.0.1/apidocs" target="_blank">MicroProfileメトリクスのJavadoc</a></span></p>

</li>
<li>
<p><span class="merged" id="all.1tOk9K" title="原文 : Helidon Javadoc at /apidocs/index.html?overview-summary.html">Helidon Javadoc at /apidocs/index.html?overview-summary.html</span></p>

</li>
</ul>

</div>

</div>

</doc-view>
