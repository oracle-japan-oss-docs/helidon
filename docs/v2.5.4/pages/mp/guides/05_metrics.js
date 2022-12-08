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

<h2 id="_what_you_need"><span class="merged" id="all.27ZcMH.5"  title="原文:: What You Need">必要事項</span></h2>
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
<td class=""><span class="merged" id="all.3J4a7U" title="原文 : A Helidon MP Application">Helidon MPアプリケーション</span></td>
<td class=""><span class="merged" id="all.WyQzF" title="原文 : You can use your own application or use the Helidon MP Quickstart to create a sample application.">独自のアプリケーションを使用するか、<a href="https://helidon.io/docs/v2/#/mp/guides/02_quickstart" id="" target="_blank" >「Helidon MPクイックスタート」</a>を使用してサンプル・アプリケーションを作成できます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3UjXGj.3" title="原文 : Java&#160;SE&#160;11 (Open&#160;JDK&#160;11)"><a href="https://www.oracle.com/technetwork/java/javase/downloads" id="" target="_blank" >Java&#160;SE&#160;11</a> (<a href="http://jdk.java.net" id="" target="_blank" >Open&#160;JDK&#160;11</a>)</span></td>
<td class=""><span class="merged" id="all.3e6V0X.3" title="原文 : Helidon requires Java 11+.">HelidonにはJava 11以上が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1nyTbh.5" title="原文 : Maven 3.6.1+"><a href="https://maven.apache.org/download.cgi" id="" target="_blank" >Maven 3.6.1+</a></span></td>
<td class=""><span class="merged" id="all.3woDk0.3" title="原文 : Helidon requires Maven 3.6.1+.">Helidonには、Maven 3.6.1+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1HtX9I.4"  title="原文:: Docker 18.09+"><a href="https://docs.docker.com/install/" id="" target="_blank" >Docker 18.09+</a></span></td>
<td class=""><span class="merged" id="all.aX1BT.3" title="原文 : You need Docker if you want to build and deploy Docker containers.">Dockerコンテナをビルドおよびデプロイする場合は、Dockerが必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48aNQe.4"  title="原文:: Kubectl 1.16.5+"><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" id="" target="_blank" >Kubectl 1.16.5+</a></span></td>
<td class=""><span class="merged" id="all.1tjPJQ.3" title="原文 : If you want to deploy to Kubernetes, you need kubectl and a Kubernetes cluster (you can install one on your desktop).">Kubernetesにデプロイする場合は、<code>kubectl</code>およびKubernetesクラスタ(<router-link to="/about/05_kubernetes">「デスクトップにインストール」</router-link>も可)が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1E7KLE"  title="原文:: Helm"><a href="https://github.com/helm/helm" id="" target="_blank" >Helm</a></span></td>
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
export JAVA_HOME=`/usr/libexec/java_home -v 11`

# On Linux
# Use the appropriate path to your JDK
export JAVA_HOME=/usr/lib/jvm/jdk-11</markup>


<h3 id="_create_a_sample_helidon_mp_project"><span class="merged" id="all.wmhRR.1" title="原文 : Create a Sample Helidon MP Project">サンプルHelidon MPプロジェクトの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.2oWHvo.1" title="原文 : Use the Helidon MP Maven archetype to create a simple project that can be used for the examples in this guide.">Helidon MP Maven原型を使用して、このガイドの例で使用できる単純なプロジェクトを作成します。</span></p>

<markup
lang="bash"
title="Run the Maven archetype"
>mvn -U archetype:generate -DinteractiveMode=false \
    -DarchetypeGroupId=io.helidon.archetypes \
    -DarchetypeArtifactId=helidon-quickstart-mp \
    -DarchetypeVersion=2.5.4 \
    -DgroupId=io.helidon.examples \
    -DartifactId=helidon-quickstart-mp \
    -Dpackage=io.helidon.examples.quickstart.mp</markup>

</div>

<h3 id="_using_the_built_in_metrics"><span class="merged" id="all.1Mhcwf" title="原文 : Using the Built-In Metrics">組込みメトリクスの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.3Kl5Gc.spl1" title="原文 : Helidon provides three scopes of metrics: base, vendor, and application.">Helidonには、3つのメトリクス・スコープが用意されています: ベース、ベンダーおよびアプリケーション。</span> <span class="merged" id="all.3Kl5Gc.spl2" title="原文 : Here are the metric endpoints:">メトリック・エンドポイントは次のとおりです:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.4HMomk" title="原文 : /metrics/base - Base metrics data as specified by the MicroProfile Metrics specification."><code>/metrics/base</code> - MicroProfileメトリクス仕様で指定されているベース・メトリクス・データ。</span>

</li>
<li>
<span class="merged" id="all.3CsSgu" title="原文 : /metrics/vendor - Helidon-specific metrics data."><code>/metrics/vendor</code> - Helidon固有のメトリクス・データ。</span>

</li>
<li>
<span class="merged" id="all.3A3wVX" title="原文 : /metrics/application - Application-specific metrics data."><code>/metrics/application</code> - アプリケーション固有のメトリクス・データ。</span>

</li>
</ol>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.4WGU6S" title="原文 : The /metrics endpoint will return data for all scopes."><code>/metrics</code>エンドポイントは、すべてのスコープのデータを返します。</span></p>
</div>
<p><span class="merged" id="all.1bpTFw" title="原文 : The built-in metrics fall into three categories:">組込みメトリクスは、次の3つのカテゴリに分類されます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2JOZYB" title="原文 : JVM behavior (in the base registry),">JVMの動作(ベース・レジストリ内)、</span>

</li>
<li>
<span class="merged" id="all.xSNp7" title="原文 : basic key performance indicators for request handling (in the vendor registry), and">リクエスト処理の基本キー・パフォーマンス・インジケータ(ベンダー・レジストリ内)、および</span>

</li>
<li>
<span class="merged" id="all.1R5RbV" title="原文 : thread pool utilization (also in the vendor registry).">スレッド・プール使用率(ベンダー・レジストリにもあります)。</span>

</li>
</ol>
<p><span class="merged" id="all.38CDVs" title="原文 : A later section describes the key performance indicator metrics in detail.">後のセクションでは、<router-link @click.native="this.scrollFix('#basic-and-extended-kpi')" to="#basic-and-extended-kpi">「キー・パフォーマンス・インジケータのメトリクス」</router-link>について詳しく説明します。</span></p>

<p><span class="merged" id="all.4RGbS9.spl1" title="原文 : The following example demonstrates how to use the other built-in metrics.">次の例では、その他の組込みメトリクスを使用する方法を示します。</span> <span class="merged" id="all.4RGbS9.spl2" title="原文 : All examples are executed from the root directory of your project (helidon-quickstart-mp).">すべての例は、プロジェクトのルート・ディレクトリ(helidon-quickstart-mp)から実行されます。</span> </p>

<markup
lang="bash"
title="Build the application, skipping unit tests, then run it:"
>mvn package -DskipTests=true
java -jar target/helidon-quickstart-mp.jar</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.sXpjM.spl1" title="原文 : Metrics can be returned in either text format (the default), or JSON.">メトリクスは、テキスト形式(デフォルト)またはJSONのいずれかで返すことができます。</span> <span class="merged" id="all.sXpjM.spl2" title="原文 : The text format uses OpenMetrics (Prometheus) Text Format, see https://prometheus.io/docs/instrumenting/exposition_formats/#text-format-details.">テキスト形式では、OpenMetrics (Prometheus)テキスト形式を使用します。<a href="https://prometheus.io/docs/instrumenting/exposition_formats/#text-format-details" id="" target="_blank" >https://prometheus.io/docs/instrumenting/exposition_formats/#text-format-details</a>を参照してください。</span> </p>
</div>
<markup
lang="bash"
title="Verify the metrics endpoint in a new terminal window:"
>curl http://localhost:8080/metrics</markup>

<markup
lang="text"
title="Text response:"
># TYPE base_REST_request_total counter
# HELP base_REST_request_total The number of invocations and total response time of RESTful resource methods since the start of the server.
base_REST_request_total{class="io.helidon.examples.quickstart.mp.GreetResource",method="getDefaultMessage"} 0
# TYPE base_REST_request_elapsedTime_seconds gauge
base_REST_request_elapsedTime_seconds{class="io.helidon.examples.quickstart.mp.GreetResource",method="getDefaultMessage"} 0.0
base_REST_request_total{class="io.helidon.examples.quickstart.mp.GreetResource",method="getMessage_java.lang.String"} 0
base_REST_request_elapsedTime_seconds{class="io.helidon.examples.quickstart.mp.GreetResource",method="getMessage_java.lang.String"} 0.0
base_REST_request_total{class="io.helidon.examples.quickstart.mp.GreetResource",method="updateGreeting_javax.json.JsonObject"} 0
base_REST_request_elapsedTime_seconds{class="io.helidon.examples.quickstart.mp.GreetResource",method="updateGreeting_javax.json.JsonObject"} 0.0
# TYPE base:classloader_current_loaded_class_count counter
# HELP base:classloader_current_loaded_class_count Displays the number of classes that are currently loaded in the Java virtual machine.
base:classloader_current_loaded_class_count 7511
# TYPE base:classloader_total_loaded_class_count counter
# HELP base:classloader_total_loaded_class_count Displays the total number of classes that have been loaded since the Java virtual machine has started execution.
base:classloader_total_loaded_class_count 7512
...</markup>

<p><span class="merged" id="all.VV8rl" title="原文 : You can get the same data in JSON format.">同じデータをJSON形式で取得できます。</span></p>

<markup
lang="bash"
title="Verify the metrics endpoint with an HTTP accept header:"
>curl -H "Accept: application/json"  http://localhost:8080/metrics</markup>

<markup
lang="json"
title="JSON response:"
>{
  "base": {
    "REST.request":
      {
        "count;class=io.helidon.examples.quickstart.mp.GreetResource;method=getDefaultMessage":0,
        "elapsedTime;class=io.helidon.examples.quickstart.mp.GreetResource;method=getDefaultMessage":0.0,
        "count;class=io.helidon.examples.quickstart.mp.GreetResource;method=getMessage_java.lang.String":0,
        "elapsedTime;class=io.helidon.examples.quickstart.mp.GreetResource;method=getMessage_java.lang.String":0.0,
        "count;class=io.helidon.examples.quickstart.mp.GreetResource;method=updateGreeting_javax.json.JsonObject":0,
        "elapsedTime;class=io.helidon.examples.quickstart.mp.GreetResource;method=updateGreeting_javax.json.JsonObject":0.0
      },
    "classloader.currentLoadedClass.count": 7534,
    "classloader.totalLoadedClass.count": 7538,
    "classloader.totalUnloadedClass.count": 1,
    "cpu.availableProcessors": 4,
    "cpu.systemLoadAverage": 2.83349609375,
    "gc.PS MarkSweep.count": 2,
    "gc.PS MarkSweep.time": 77,
    "gc.PS Scavenge.count": 5,
    "gc.PS Scavenge.time": 37,
    "jvm.uptime": 727588,
    "memory.committedHeap": 284164096,
    "memory.maxHeap": 3817865216,
    "memory.usedHeap": 53283088,
    "thread.count": 44,
    "thread.daemon.count": 35,
    "thread.max.count": 44
  },
  "vendor": {
    "executor-service.active-count;poolIndex=0;supplierCategory=helidon-thread-pool-2;supplierIndex=0": 0,
    "executor-service.completed-task-count;poolIndex=0;supplierCategory=helidon-thread-pool-2;supplierIndex=0": 0,
    "executor-service.largest-pool-size;poolIndex=0;supplierCategory=helidon-thread-pool-2;supplierIndex=0": 5,
    "executor-service.pool-size;poolIndex=0;supplierCategory=helidon-thread-pool-2;supplierIndex=0": 5,
    "executor-service.queue.remaining-capacity;poolIndex=0;supplierCategory=helidon-thread-pool-2;supplierIndex=0": 10000,
    "executor-service.queue.size;poolIndex=0;supplierCategory=helidon-thread-pool-2;supplierIndex=0": 0,
    "executor-service.task-count;poolIndex=0;supplierCategory=helidon-thread-pool-2;supplierIndex=0": 0,
    "requests.count": 6,
    "requests.meter": {
      "count": 6,
      "meanRate": 0.008275992296704147,
      "oneMinRate": 0.01576418632772332,
      "fiveMinRate": 0.006695060022357365,
      "fifteenMinRate": 0.0036382699664488415
    }
  }
}</markup>

<p><span class="merged" id="all.1kpSrZ" title="原文 : You can get a single metric by specifying the name in the URL path.">URLパスに名前を指定すると、単一のメトリックを取得できます。</span></p>

<markup
lang="bash"
title="Get the Helidon <code>requests.meter</code> metric:"
>curl -H "Accept: application/json"  http://localhost:8080/metrics/vendor/requests.meter</markup>

<markup
lang="json"
title="JSON response:"
>{
  "requests.meter": {
    "count": 6,
    "meanRate": 0.008275992296704147,
    "oneMinRate": 0.01576418632772332,
    "fiveMinRate": 0.006695060022357365,
    "fifteenMinRate": 0.0036382699664488415
  }
}</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3osaGm.spl1" title="原文 : You cannot get the individual fields of a metric.">メトリックの個々のフィールドは取得できません。</span> <span class="merged" id="all.3osaGm.spl2" title="原文 : For example, you cannot target http://localhost:8080/metrics/vendor/requests.meter.count.">たとえば、<a href="http://localhost:8080/metrics/vendor/requests.meter.count" id="" target="_blank" >http://localhost:8080/metrics/vendor/requests.meter.count</a>はターゲットにできません。</span> </p>
</div>
<p><span class="merged" id="all.1HQTzl" title="原文 : The base metrics illustrated above provide some insight into the behavior of the JVM in which the server runs.">前述の<code>base</code>メトリクスでは、サーバーが実行されるJVMの動作について、いくつかの洞察が提供されます。</span></p>

<p><span class="merged" id="all.2N0k7N" title="原文 : The vendor metrics shown above appear in two groups:">前述の<code>vendor</code>メトリクスは、次の2つのグループに表示されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3cthqo" title="原文 : Helidon thread pools ">Helidonスレッド・プール<br></span></p>
<p><span class="merged" id="all.17eVw2.spl1" title="原文 : Helidon uses these thread pools for its own internal work, and your application can also use Helidon-managed thread pools if it needs to do work asynchronously.">Helidonは、独自の内部作業にこれらのスレッド・プールを使用し、非同期で作業する必要がある場合は、アプリケーションでHelidon-managedスレッド・プールを使用することもできます。</span> <span class="merged" id="all.17eVw2.spl2" title="原文 : (See this example.)">(<a href="https://github.com/oracle/helidon/tree/2.5.4/examples/webserver/threadpool" id="" target="_blank" >「この例」</a>を参照。)</span> <span class="merged" id="all.17eVw2.spl3" title="原文 : The metrics in this group show information about the thread pools which can help you assess how efficiently they are utilized.">このグループのメトリクスは、スレッド・プールに関する情報を表示します。スレッド・プールは、その使用効率を評価するのに役立ちます。</span> <span class="merged" id="all.17eVw2.spl4" title="原文 : Helidon uses tags to distinguish the metrics which describe different thread pools.">Helidonは、タグを使用して、様々なスレッド・プールを記述するメトリクスを区別します。</span> <span class="merged" id="all.17eVw2.spl5" title="原文 : In some cases the specific metrics exposed depend on the particular type of thread pool.">場合によっては、表示される特定のメトリクスは、特定のタイプのスレッド・プールによって異なります。</span> </p>

</li>
<li>
<p><span class="merged" id="all.2ATFij" title="原文 : basic key performance indicators ">基本的なキー・パフォーマンス・インジケータ<br></span></p>
<p><span class="merged" id="all.1M80SH.spl1" title="原文 : These metrics give an idea of the request traffic the server is handling.">これらのメトリクスは、サーバーが処理しているリクエスト・トラフィックを把握します。</span> <span class="merged" id="all.1M80SH.spl2" title="原文 : See the later section for more information on the basic and extended key performance indicator metrics.">基本および拡張キー・パフォーマンス・インジケータ・メトリクスの詳細は、<router-link @click.native="this.scrollFix('#basic-and-extended-kpi')" to="#basic-and-extended-kpi">「後続セクション」</router-link>を参照してください。</span> </p>

</li>
</ul>
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
<p><span class="merged" id="all.3og0Gc" title="原文 : Identify groups of metrics to control:">制御するメトリクスのグループを識別します:</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.1crwmI" title="原文 : registered by a particular component, and"><router-link @click.native="this.scrollFix('#enabling-disabling-by-component')" to="#enabling-disabling-by-component">「特定のコンポーネントによって登録」</router-link>、および</span></p>

</li>
<li>
<p><span class="merged" id="all.1xztGt" title="原文 : by metric registry (application, vendor, and base) and within a registry by metric names which match patterns you provide."><router-link @click.native="this.scrollFix('#enabling-disabling-by-registry')" to="#enabling-disabling-by-registry">「メトリック・レジストリ別」</router-link> (アプリケーション、ベンダーおよびベース)および指定したパターンに一致するメトリック名によるレジストリ内。</span></p>

</li>
</ul>
</li>
<li>
<p><span class="merged" id="all.JOewh" title="原文 : Select whether to collect extended key performance indicator metrics."><router-link @click.native="this.scrollFix('#basic-and-extended-kpi')" to="#basic-and-extended-kpi">「拡張キー・パフォーマンス・インジケータ・メトリクス」</router-link>を収集するかどうかを選択します。</span></p>

</li>
</ul>

<h4 id="disabling-entirely"><span class="merged" id="all.1gSl1J" title="原文 : Disabling Metrics Subsystem Entirely">メトリクス・サブシステム全体の無効化</span></h4>
<div class="section">
<p><span class="merged" id="all.2sphAT.spl1" title="原文 : By default, if your application depends on the helidon-metrics Maven module then full-featured metrics are enabled.">デフォルトでは、アプリケーションが<code>helidon-metrics</code> Mavenモジュールに依存している場合、フル機能のメトリクスが有効になります。</span> <span class="merged" id="all.2sphAT.spl2" title="原文 : You can disable the metrics subsystem entirely using configuration:">構成を使用してメトリクス・サブシステムを完全に無効にできます:</span> </p>

<markup
lang="properties"
title="Configuration properties file disabling metrics"
>metrics.enabled=false</markup>

<p><span class="merged" id="all.jRt2q" title="原文 : With metrics processing disabled, Helidon never updates any metrics and the /metrics endpoints respond with 404 plus a message that the metrics subsystem is disabled.">メトリクス処理が無効な場合、Helidonはメトリクスを更新せず、<code>404</code>で応答する<code>/metrics</code>エンドポイントとメトリクス・サブシステムが無効であるというメッセージ。</span></p>

</div>

<h4 id="controlling-rest-request-metrics"><span class="merged" id="all.47VLh1" title="原文 : Controlling REST.request Metrics"><code>REST.request</code>メトリクスの制御</span></h4>
<div class="section">
<p><span class="merged" id="all.1BUPZE.spl1" title="原文 : Helidon implements the optional family of metrics, all with the name REST.request, as described in the MicroProfile Metrics specification.">Helidonは、<a href="https://download.eclipse.org/microprofile/microprofile-metrics-2.3/microprofile-metrics-spec-2.3.html#_optional_rest" id="" target="_blank" >「MicroProfileメトリクス仕様」</a>で説明されているように、オプションのメトリクス・ファミリをすべて<code>REST.request</code>という名前で実装します。</span> <span class="merged" id="all.1BUPZE.spl2" title="原文 : Each instance is a SimpleTimer with tags class and method identifying exactly which REST endpoint Java method that instance measures.">各インスタンスは、インスタンスが測定するRESTエンドポイントJavaメソッドを正確に識別するタグ<code>class</code>および<code>method</code>を含む<code>SimpleTimer</code>です。</span> </p>

<p><span class="merged" id="all.2q6rwl.spl1" title="原文 : By default, Helidon MP does not enable this feature.">デフォルトでは、Helidon MPはこの機能を有効に<em>しません</em>。</span> <span class="merged" id="all.2q6rwl.spl2" title="原文 : Enable it by editing your application configuration to set metrics.rest-request.enabled to true.">これを有効にするには、アプリケーション構成を編集して<code>metrics.rest-request.enabled</code>を<code>true</code>に設定します。</span> </p>

<p><span class="merged" id="all.2EkcS4.spl1" title="原文 : Note that the applications you generate using the full Helidon archetype do enable this feature in the generated config file.">完全なHelidon原型を使用して生成したアプリケーションでは、生成された構成ファイルでこの機能を有効に<em>します</em>。</span> <span class="merged" id="all.2EkcS4.spl2" title="原文 : You can see the results in the sample output shown in earlier example runs.">結果は、前の実行例に示したサンプル出力で確認できます。</span> </p>

</div>

<h4 id="enabling-disabling-by-component"><span class="merged" id="all.UJW0H" title="原文 : Enabling and Disabling Metrics Usage by a Component">コンポーネントによるメトリクス使用の有効化と無効化</span></h4>
<div class="section">
<p><span class="merged" id="all.3c508h.spl1" title="原文 : Helidon contains several components and integrations which register and update metrics.">Helidonには、メトリクスを登録および更新する複数のコンポーネントおよび統合が含まれています。</span> <span class="merged" id="all.3c508h.spl2" title="原文 : Depending on how the component is written, you might be able to disable just that component&rsquo;s use of metrics:">コンポーネントの書込み方法によっては、そのコンポーネントのメトリクスの使用のみを無効にできる場合があります:</span> </p>

<markup
lang="properties"
title="Configuration properties file disabling a component&#8217;s use of metrics"
>some-component.metrics.enabled=false</markup>

<p><span class="merged" id="all.1h3TSt.spl1" title="原文 : Check the documentation for a specific component to find out whether that component uses metrics and whether it allows you to disable that use.">特定のコンポーネントのドキュメントをチェックして、そのコンポーネントがメトリクスを使用しているかどうか、およびその使用を無効にできるかどうかを確認します。</span> <span class="merged" id="all.1h3TSt.spl2" title="原文 : If you disable a component&rsquo;s use of metrics, Helidon does not register the component&rsquo;s metrics in the visible metrics registries nor do those metrics ever update their values.">コンポーネントのメトリクスの使用を無効にすると、Helidonは、コンポーネントのメトリクスを表示可能なメトリクス・レジストリに登録したり、これらのメトリクスで値を更新したりしません。</span> <span class="merged" id="all.1h3TSt.spl3" title="原文 : The response from the /metrics endpoint excludes that component&rsquo;s metrics."><code>/metrics</code>エンドポイントからのレスポンスでは、そのコンポーネントのメトリクスを除外します。</span> </p>

<p><span class="merged" id="all.2bmtHS" title="原文 : Note that if you disable metrics processing entirely, no component updates its metrics regardless of any component-level metrics settings.">メトリクス処理を完全に無効にすると、コンポーネント・レベルのメトリクス設定に関係なく、コンポーネントはメトリクスを更新しません。</span></p>

</div>

<h4 id="enabling-disabling-by-registry"><span class="merged" id="all.7pZIX" title="原文 : Controlling Metrics By Registry Type and Metric Name">レジストリ・タイプおよびメトリック名別のメトリクスの制御</span></h4>
<div class="section">
<p><span class="merged" id="all.ggI93" title="原文 : You can control the collection and reporting of metrics by registry type and metric name within registry type.">レジストリ・タイプ内のレジストリ・タイプおよびメトリック名別にメトリクスの収集およびレポートを制御できます。</span></p>


<h5 id="_disabling_all_metrics_of_a_given_registry_type"><span class="merged" id="all.KfvCs" title="原文 : Disabling All Metrics of a Given Registry Type">指定されたレジストリ・タイプのすべてのメトリクスの無効化</span></h5>
<div class="section">
<p><span class="merged" id="all.2noh7R" title="原文 : To disable all metrics in a given registry type (application, vendor, or base), add one or more groups to the configuration:">特定のレジストリ・タイプ(アプリケーション、ベンダーまたはベース)内のすべてのメトリクスを無効にするには、構成に1つ以上のグループを追加します:</span></p>

<markup
lang="properties"
title="Disabling <code>base</code> and <code>vendor</code> metrics (properties format)"
>metrics.registries.0.type = base
metrics.registries.0.enabled = false
metrics.registries.1.type = vendor
metrics.registries.1.enabled = false</markup>

<markup
lang="yaml"
title="Disabling <code>base</code> and <code>vendor</code> metrics (YAML format)"
>metrics:
  registries:
    - type: base
      enabled: false
    - type: vendor
      enables: false</markup>

</div>

<h5 id="_controlling_metrics_by_metric_name"><span class="merged" id="all.41vvPt" title="原文 : Controlling Metrics by Metric Name">メトリック名によるメトリクスの制御</span></h5>
<div class="section">
<p><span class="merged" id="all.3ZRsGn.spl1" title="原文 : You can be even more selective.">もっと選択的になることができます。</span> <span class="merged" id="all.3ZRsGn.spl2" title="原文 : Within a registry type you can configure up to two regular expression patterns:">レジストリ・タイプ内では、最大2つの正規表現パターンを構成できます:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1zsYLp" title="原文 : one matching metric names to exclude, and"><em>「除外」</em>に一致する1つのメトリック名、および</span></p>

</li>
<li>
<p><span class="merged" id="all.3Aies9" title="原文 : one matching metric names to include."><em>「含める」</em>一致する1つのメトリック名。</span></p>

</li>
</ul>
<p><span class="merged" id="all.1ZlNQz" title="原文 : Helidon updates and reports a metric only if two conditions hold:">Helidonは、2つの条件が保持されている場合にのみメトリックを更新およびレポートします:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4G7F05" title="原文 : the metric name does not match the exclude regex pattern (if you define one), and">メトリック名は、<code>exclude</code>正規表現パターン(定義した場合)と一致<em>「しません」</em>、および</span></p>

</li>
<li>
<p><span class="merged" id="all.2EEvyx"  title="原文:: either">また</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.3zYc4V" title="原文 : there is no include regex pattern, or"><code>include</code>正規表現パターンがないか、</span></p>

</li>
<li>
<p><span class="merged" id="all.2WKtx9" title="原文 : the metric name matches the include pattern.">メトリック名は<code>include</code>パターンと一致します。</span></p>

</li>
</ul>
</li>
</ul>
<div class="admonition caution">
<p class="admonition-textlabel"><span class="merged" id="all.4Pmf1N"  title="原文:: Caution">注意</span></p>
<p ><p><span class="merged" id="all.3RoVe3" title="原文 : Make sure any include regex pattern you specify matches all the metric names you want to capture.">指定した<code>include</code>正規表現パターンが、取得するメトリック名<em>「すべて」</em>と一致していることを確認します。</span></p>
</p>
</div>
<p><span class="merged" id="all.2vtS5v" title="原文 : Suppose your application creates and updates a group of metrics with names such as myapp.xxx.queries, myapp.xxx.creates, myapp.xxx.updates, and myapp.xxx.deletes where xxx can be either supplier or customer.">アプリケーションで、<code>myapp.xxx.queries</code>, <code>myapp.xxx.creates</code>, <code>myapp.xxx.updates</code>などの名前を持つメトリクスのグループを作成および更新し、<code>myapp.xxx.deletes</code> (<code>xxx</code>は<code>supplier</code>または<code>customer</code>のいずれか)を実行するとします。</span></p>

<p><span class="merged" id="all.19d2yt" title="原文 : The following example gathers all metrics except those from your application regarding suppliers:">次の例では、サプライヤに関するアプリケーションからのメトリクス<em>「除外」</em>するすべてを収集します:</span></p>

<markup
lang="properties"
title="Disabling metrics by name (properties format)"
>metrics.registries.0.type = application
metrics.registries.0.filter.exclude = myapp\.supplier\..*</markup>

<p><span class="merged" id="all.2koFPS" title="原文 : The following settings select the particular subset of the metrics created in your application code representing updates of customers and suppliers:">次の設定では、顧客およびサプライヤの更新を表すアプリケーション・コードで作成されたメトリクスの特定のサブセットを選択します:</span></p>

<markup
lang="properties"
title="Enabling metrics by name (properties format)"
>metrics.registries.0.type = application
metrics.registries.0.filter.include = myapp\..*\.updates</markup>

<p><span class="merged" id="all.124yK7" title="原文 : If you use the YAML configuration format, enclose the regex patterns in single-quote marks:">YAML構成形式を使用する場合は、正規表現パターンを単一引用符で囲みます:</span></p>

<markup
lang="yaml"
title="Enabling metrics by name (YAML format)"
>metrics:
  registries:
    - type: application
      filter:
        include: 'myapp\..*\.updates'</markup>

<p><span class="merged" id="all.2ChVNm" title="原文 : The next example selects only your application&rsquo;s metrics while excluding those which refer to deletions:">次の例では、削除を参照するメトリクスを除外しながら、アプリケーションのメトリクスのみを選択します:</span></p>

<markup
lang="properties"
title="Combining <code>include</code> and <code>exclude</code>"
>metrics.registries.0.type = application
metrics.registries.0.filter.include = myapp\..*
metrics.registries.0.filter.exclude = myapp\..*/deletes</markup>

<p><span class="merged" id="all.24Ai5B.spl1" title="原文 : Helidon would not update or report the metric myapp.supplier.queries, for example.">Helidonは、たとえばメトリック<code>myapp.supplier.queries</code>を更新またはレポートしません。</span> <span class="merged" id="all.24Ai5B.spl2" title="原文 : To include metrics from your application for both updates and queries (but not for other operations), you could change the settings in the previous example to this:">更新と問合せの両方に対してアプリケーションのメトリクスを含める(他の操作では含まない)には、前の例の設定を次のように変更できます:</span> </p>

<markup


>metrics.registries.0.type = application
metrics.registries.0.filter.include = myapp\..*\.updates|myapp\..*\.queries
metrics.registries.0.filter.exclude = myapp\..*/deletes</markup>

</div>
</div>

<h4 id="basic-and-extended-kpi"><span class="merged" id="all.1RbZUb" title="原文 : Collecting Basic and Extended Key Performance Indicator (KPI) Metrics">基本および拡張キー・パフォーマンス・インジケータ(KPI)メトリクスの収集</span></h4>
<div class="section">
<p><span class="merged" id="all.3sOZXl" title="原文 : Any time you include the Helidon metrics module in your application, Helidon tracks two basic performance indicator metrics:">アプリケーションにHelidonメトリクス・モジュールを含めるたびに、Helidonでは、次の2つの基本的なパフォーマンス・メトリクスが追跡されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3AcZDp" title="原文 : a Counter of all requests received (requests.count), and">受信したすべてのリクエストの<code>Counter</code> (<code>requests.count</code>)、および</span></p>

</li>
<li>
<p><span class="merged" id="all.153KWy" title="原文 : a Meter of all requests received (requests.meter).">受信したすべてのリクエストの<code>Meter</code> (<code>requests.meter</code>)。</span></p>

</li>
</ul>
<p><span class="merged" id="all.2dm2kv" title="原文 : Helidon MP also includes additional, extended KPI metrics which are disabled by default:">Helidon MPには、デフォルトで無効になっている追加の拡張KPIメトリクスも含まれています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.JrarW" title="原文 : current number of requests in-flight - a ConcurrentGauge (requests.inFlight) of requests currently being processed">現在進行中のリクエスト数 - 現在処理中のリクエストの<code>ConcurrentGauge</code> (<code>requests.inFlight</code>)</span></p>

</li>
<li>
<p><span class="merged" id="all.2cyom6" title="原文 : long-running requests - a Meter (requests.longRunning) measuring the rate at which Helidon processes requests which take at least a given amount of time to complete; configurable, defaults to 10000 milliseconds (10 seconds)">長時間実行リクエスト - Helidonが完了までに少なくとも指定された時間を要するリクエストを処理する速度を測定する<code>Meter</code> (<code>requests.longRunning</code>)です。構成可能で、デフォルトは10000ミリ秒(10秒)です</span></p>

</li>
<li>
<p><span class="merged" id="all.2iOF4J" title="原文 : load - a Meter (requests.load) measuring the rate at which requests are worked on (as opposed to received)">load - リクエストの処理速度を測定する<code>Meter</code> (<code>requests.load</code>) (受信したものとは対照的)</span></p>

</li>
<li>
<p><span class="merged" id="all.1QFwn1" title="原文 : deferred - a Meter (requests.deferred) measuring the rate at which a request&rsquo;s processing is delayed after Helidon receives the request">延期 - Helidonがリクエストを受信した後にリクエスト処理が遅延する割合を測定する<code>Meter</code> (<code>requests.deferred</code>)</span></p>

</li>
</ul>
<p><span class="merged" id="all.oRutk" title="原文 : You can enable and control these metrics using configuration:">構成を使用して、次のメトリクスを有効化および制御できます:</span></p>

<markup
lang="properties"
title="Configuration properties file controlling extended KPI metrics"
>metrics.key-performance-indicators.extended = true
metrics.key-performance-indicators.long-running.threshold-ms = 2000</markup>

</div>
</div>

<h3 id="_metrics_metadata"><span class="merged" id="all.2zUh1o" title="原文 : Metrics Metadata">メトリクスMetadata</span></h3>
<div class="section">
<p><span class="merged" id="all.43pYCx" title="原文 : Each metric has associated metadata that describes:">各メトリックには、次の内容を記述するメタデータが関連付けられています:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.3Z5ins" title="原文 : name: The name of the metric.">name: メトリックの名前。</span>

</li>
<li>
<span class="merged" id="all.24iVV9" title="原文 : units: The unit of the metric such as time (seconds, millisecond), size (bytes, megabytes), etc.">units: 時間(秒、ミリ秒)、サイズ(バイト、メガバイト)などのメトリックの単位。</span>

</li>
<li>
<span class="merged" id="all.2JdHdF" title="原文 : type: The type of metric: Counter, Timer, Meter, Histogram, SimpleTimer, or Gauge.">type: メトリックのタイプ: <code>Counter</code>, <code>Timer</code>, <code>Meter</code>, <code>Histogram</code>, <code>SimpleTimer</code>、または<code>Gauge</code>。</span>

</li>
</ol>
<p><span class="merged" id="all.2UzLic" title="原文 : You can get the metadata for any scope, such as /metrics/base, as shown below:">次に示すように、<code>/metrics/base</code>などの任意のスコープのメタデータを取得できます:</span></p>

<markup
lang="bash"
title="Get the metrics metadata using HTTP OPTIONS method:"
> curl -X OPTIONS -H "Accept: application/json"  http://localhost:8080/metrics/base</markup>

<markup
lang="json"
title="JSON response (truncated):"
>{
  "classloader.currentLoadedClass.count": {
    "unit": "none",
    "type": "counter",
    "description": "Displays the number of classes that are currently loaded in the Java virtual machine.",
    "displayName": "Current Loaded Class Count"
  },
...
  "jvm.uptime": {
    "unit": "milliseconds",
    "type": "gauge",
    "description": "Displays the start time of the Java virtual machine in milliseconds. This attribute displays the approximate time when the Java virtual machine started.",
    "displayName": "JVM Uptime"
  },
...
  "memory.usedHeap": {
    "unit": "bytes",
    "type": "gauge",
    "description": "Displays the amount of used heap memory in bytes.",
    "displayName": "Used Heap Memory"
  }
}</markup>

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
    prometheus.io/scrape: 'true' <span class="conum" data-value="2" />
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
<p><span class="merged" id="all.4Rq1WH.spl1" title="原文 : The metrics service that you just deployed into Kubernetes is already annotated with prometheus.io/scrape:.">Kubernetesにデプロイしたメトリクス・サービスには、すでに<code>prometheus.io/scrape:</code>の注釈が付いています。</span> <span class="merged" id="all.4Rq1WH.spl2" title="原文 : This will allow Prometheus to discover the service and scrape the metrics.">これにより、Prometheusはサービスを検出し、メトリクスをスクレイプできます。</span> <span class="merged" id="all.4Rq1WH.spl3" title="原文 : In this exercise, you will install Prometheus into Kubernetes, then verify that it discovered the Helidon metrics in your application.">この演習では、PrometheusをKubernetesにインストールし、アプリケーションでHelidonメトリクスが検出されたことを確認します。</span> </p>

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

<p><span class="merged" id="all.2jbZil.spl1" title="原文 : Now open your browser and navigate to http://localhost:7090/targets.">ブラウザを開き、<code><a href="http://localhost:7090/targets" id="" target="_blank" >http://localhost:7090/targets</a></code>に移動します。</span> <span class="merged" id="all.2jbZil.spl2" title="原文 : Search for helidon on the page and you will see your Helidon application as one of the Prometheus targets.">ページでhelidonを検索すると、Prometheusターゲットの一部としてHelidonアプリケーションが表示されます。</span> </p>

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

<h3 id="_metrics_metadata_2"><span class="merged" id="all.2zUh1o.1" title="原文 : Metrics Metadata">メトリクスMetadata</span></h3>
<div class="section">
<p><span class="merged" id="all.43pYCx.1" title="原文 : Each metric has associated metadata that describes:">各メトリックには、次の内容を記述するメタデータが関連付けられています:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.3Z5ins.1" title="原文 : name: The name of the metric.">name: メトリックの名前。</span>

</li>
<li>
<span class="merged" id="all.24iVV9.1" title="原文 : units: The unit of the metric such as time (seconds, millisecond), size (bytes, megabytes), etc.">units: 時間(秒、ミリ秒)、サイズ(バイト、メガバイト)などのメトリックの単位。</span>

</li>
<li>
<span class="merged" id="all.2JdHdF.1" title="原文 : type: The type of metric: Counter, Timer, Meter, Histogram, SimpleTimer, or Gauge.">type: メトリックのタイプ: <code>Counter</code>, <code>Timer</code>, <code>Meter</code>, <code>Histogram</code>, <code>SimpleTimer</code>、または<code>Gauge</code>。</span>

</li>
</ol>
<p><span class="merged" id="all.2UzLic.1" title="原文 : You can get the metadata for any scope, such as /metrics/base, as shown below:">次に示すように、<code>/metrics/base</code>などの任意のスコープのメタデータを取得できます:</span></p>

<markup
lang="bash"
title="Get the metrics metadata using HTTP OPTIONS method:"
> curl -X OPTIONS -H "Accept: application/json"  http://localhost:8080/metrics/base</markup>

<markup
lang="json"
title="JSON response (truncated):"
>{
  "classloader.currentLoadedClass.count": {
    "unit": "none",
    "type": "counter",
    "description": "Displays the number of classes that are currently loaded in the Java virtual machine.",
    "displayName": "Current Loaded Class Count"
  },
...
  "jvm.uptime": {
    "unit": "milliseconds",
    "type": "gauge",
    "description": "Displays the start time of the Java virtual machine in milliseconds. This attribute displays the approximate time when the Java virtual machine started.",
    "displayName": "JVM Uptime"
  },
...
  "memory.usedHeap": {
    "unit": "bytes",
    "type": "gauge",
    "description": "Displays the amount of used heap memory in bytes.",
    "displayName": "Used Heap Memory"
  }
}</markup>

</div>

<h3 id="_application_specific_metrics_data"><span class="merged" id="all.1cx8aG" title="原文 : Application-Specific Metrics Data">アプリケーション固有のメトリクス・データ</span></h3>
<div class="section">
<p><span class="merged" id="all.3xfFYk.spl1" title="原文 : You can create application-specific metrics and integrate them with Helidon using CDI.">CDIを使用して、アプリケーション固有のメトリクスを作成し、Helidonと統合できます。</span> <span class="merged" id="all.3xfFYk.spl2" title="原文 : To add a new metric, simply annotate the JAX-RS resource with one of the metric annotations.">新しいメトリックを追加するには、JAX-RSリソースにメトリック注釈のいずれかを付けます。</span> <span class="merged" id="all.3xfFYk.spl3" title="原文 : Metrics can be injected at the class, method, and field-levels.">メトリクスは、クラス、メソッドおよびフィールド・レベルでインジェクトできます。</span> <span class="merged" id="all.3xfFYk.spl4" title="原文 : This document shows examples of all three.">このドキュメントでは、3つすべての例を示します。</span> </p>

<p><span class="merged" id="all.1yHQZS.spl1" title="原文 : Helidon will automatically create and register annotated application metrics and store them in the application MetricRegistry, which also contains the metric metadata.">Helidonでは、注釈付きアプリケーション・メトリクスが自動的に作成および登録され、アプリケーション<code>MetricRegistry</code>に格納され、そこでメトリック・メタデータも含まれます。</span> <span class="merged" id="all.1yHQZS.spl2" title="原文 : The metrics will exist for the lifetime of the application.">メトリクスは、アプリケーションの存続期間中存在します。</span> <span class="merged" id="all.1yHQZS.spl3" title="原文 : Each metric annotation has mandatory and optional fields.">各メトリック注釈には、必須フィールドとオプション・フィールドがあります。</span> <span class="merged" id="all.1yHQZS.spl4" title="原文 : The name field, for example, is optional.">たとえば、名前フィールドはオプションです。</span> </p>


<h4 id="_method_level_metrics"><span class="merged" id="all.3OE9v2" title="原文 : Method Level Metrics">メソッド・レベル・メトリクス</span></h4>
<div class="section">
<p><span class="merged" id="all.ocHd6" title="原文 : There are four metrics that you can use by annotating a method:">メソッドに注釈を付けると、次の4つのメトリクスを使用できます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.oplvr" title="原文 : @Counted - Register a Counter metric"><code>@Counted</code> - <code>Counter</code>メトリックの登録</span>

</li>
<li>
<span class="merged" id="all.1Hy5eE" title="原文 : @Timed - Register a Timer metric"><code>@Timed</code> - <code>Timer</code>メトリックの登録</span>

</li>
<li>
<span class="merged" id="all.1V5wXp" title="原文 : @Metered - Register a Meter metric"><code>@Metered</code> - <code>Meter</code>メトリックの登録</span>

</li>
<li>
<span class="merged" id="all.3ItGc9" title="原文 : @SimplyTimed - Register a SimpleTimer metric"><code>@SimplyTimed</code> - <code>SimpleTimer</code>メトリックの登録</span>

</li>
</ol>
<p><span class="merged" id="all.1VCsx8" title="原文 : The following example will demonstrate how to use the @Counted annotation to track the number of times the /cards endpoint is called.">次の例では、<code>@Counted</code>注釈を使用して<code>/cards</code>エンドポイントがコールされた回数を追跡する方法を示します。</span></p>

<markup
lang="java"
title="Create a new class <code>GreetingCards</code> with the following code:"
>package io.helidon.examples.quickstart.mp;

import java.util.Collections;
import javax.enterprise.context.RequestScoped;
import javax.json.Json;
import javax.json.JsonBuilderFactory;
import javax.json.JsonObject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
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
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1wfpmQ.spl1" title="原文 : For Metrics 1.1, you must set monotonic field to true to force the count to increment when entering the method.">メトリクス1.1の場合、メソッドの入力時にカウントを強制的に増分するには、<code>monotonic</code>フィールドを<code>true</code>に設定する必要があります。</span> <span class="merged" id="all.1wfpmQ.spl2" title="原文 : The default behavior is to decrement when exiting the method.">デフォルトの動作では、メソッドの終了時に減少します。</span> <span class="merged" id="all.1wfpmQ.spl3" title="原文 : Here is an example: @Counted(name = &quot;any-card&quot;, monotonic = true).">次に例を示します: <code>@Counted(name = "any-card", monotonic = true)</code>。</span> </p>
</div>
<markup
lang="bash"
title="Build and run the application, then invoke the application endpoints below:"
>curl http://localhost:8080/cards
curl http://localhost:8080/cards
curl -H "Accept: application/json"  http://localhost:8080/metrics/application</markup>

<markup
lang="json"
title="JSON response:"
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
<p><span class="merged" id="all.1yJT5Q.spl1" title="原文 : The @Timed, @Metered, and @SimplyTimed annotations can also be used with a method.">メソッドでは、<code>@Timed</code>、<code>@Metered</code>および<code>@SimplyTimed</code>注釈も使用できます。</span> <span class="merged" id="all.1yJT5Q.spl2" title="原文 : For the following example. you can just annotate the same method with @Metered and @Timed.">次の例では、<code>@Metered</code>と<code>@Timed</code>で同じメソッドに注釈を付けることができます。</span> <span class="merged" id="all.1yJT5Q.spl3" title="原文 : These metrics collect significant information about the measured methods, but at a cost of some overhead and more complicated output.">これらのメトリクスは、測定されたメソッドに関する重要な情報を収集しますが、オーバーヘッドやより複雑な出力が発生します。</span> <span class="merged" id="all.1yJT5Q.spl4" title="原文 : Use @SimplyTimed in cases where capturing the invocation count and the total elapsed time spent in a block of code is sufficient.">呼出し数およびコード・ブロックで費やされた合計経過時間を取得するだけで十分な場合は、<code>@SimplyTimed</code>を使用します。</span> </p>

<p><span class="merged" id="all.3kX4nx" title="原文 : Note that when using multiple annotations on a method, you must give the metrics different names as shown below.">メソッドで複数の注釈を使用する場合は、次に示すようにメトリクスに異なる名前を付ける必要があります。</span></p>

<markup
lang="java"
title="Update the <code>GreetingCards</code> class with the following code:"
>package io.helidon.examples.quickstart.mp;

import java.util.Collections;
import javax.enterprise.context.RequestScoped;
import javax.json.Json;
import javax.json.JsonBuilderFactory;
import javax.json.JsonObject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import org.eclipse.microprofile.metrics.MetricUnits;
import org.eclipse.microprofile.metrics.annotation.Counted;
import org.eclipse.microprofile.metrics.annotation.Metered;
import org.eclipse.microprofile.metrics.annotation.Timed;

@Path("/cards")
@RequestScoped
public class GreetingCards {

  private static final JsonBuilderFactory JSON = Json.createBuilderFactory(Collections.emptyMap());

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  @Counted(name = "cardCount", absolute = true) <span class="conum" data-value="1" />
  @Metered(name = "cardMeter", absolute = true, unit = MetricUnits.MILLISECONDS) <span class="conum" data-value="2" />
  @Timed(name = "cardTimer", absolute = true, unit = MetricUnits.MILLISECONDS) <span class="conum" data-value="3" />
  public JsonObject anyCard() throws InterruptedException {
    return createResponse("Here are some random cards ...");
  }

  private JsonObject createResponse(String msg) {
    return JSON.createObjectBuilder().add("message", msg).build();
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.mOrhG" title="原文 : Specify a custom name for the Counter metric and set absolute=true to remove the path prefix from the name."><code>Counter</code>メトリックのカスタム名を指定し、<code>absolute=true</code>を設定して名前からパス・プレフィクスを削除します。</span></li>
<li data-value="2"><span class="merged" id="all.12ZCyS" title="原文 : Add the @Metered annotation to get a Meter metric."><code>@Metered</code>注釈を追加して、<code>Meter</code>メトリックを取得します。</span></li>
<li data-value="3"><span class="merged" id="all.SfnC7" title="原文 : Add the @Timed annotation to get a Timer metric."><code>@Timed</code>注釈を追加して、<code>Timer</code>メトリックを取得します。</span></li>
</ul>
<markup
lang="bash"
title="Build and run the application, then invoke the application endpoints below:"
>curl http://localhost:8080/cards
curl http://localhost:8080/cards
curl -H "Accept: application/json"  http://localhost:8080/metrics/application</markup>

<markup
lang="json"
title="JSON response:"
>{
  "cardCount": 2,
  "cardMeter": {  <span class="conum" data-value="1" />
    "count": 2,
    "meanRate": 0.3664337145491488,
    "oneMinRate": 0.4,
    "fiveMinRate": 0.4,
    "fifteenMinRate": 0.4
  },
  "cardTimer": { <span class="conum" data-value="2" />
    "count": 2,
    "meanRate": 0.36649792432150535,
    "oneMinRate": 0.4,
    "fiveMinRate": 0.4,
    "fifteenMinRate": 0.4,
    "min": 12944,
    "max": 2078856,
    "mean": 1045900.0,
    "stddev": 1032956.0,
    "p50": 2078856.0,
    "p75": 2078856.0,
    "p95": 2078856.0,
    "p98": 2078856.0,
    "p99": 2078856.0,
    "p999": 2078856.0
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.21ut0H" title="原文 : The Meter metric includes the count field (it is a superset of Counter)."><code>Meter</code>メトリックには、カウント・フィールド(<code>Counter</code>のスーパーセット)が含まれます。</span></li>
<li data-value="2"><span class="merged" id="all.41mzU4" title="原文 : The Timer metric includes the Meter fields (it is a superset of Meter)."><code>Timer</code>メトリックには、<code>Meter</code>フィールドが含まれます(<code>Meter</code>のスーパーセット)。</span></li>
</ul>
</div>

<h4 id="_reusing_metrics"><span class="merged" id="all.1c56RP" title="原文 : Reusing Metrics">メトリクスの再利用</span></h4>
<div class="section">
<p><span class="merged" id="all.4TB2Av" title="原文 : You can share a metric across multiple endpoints by specifying the reusable field in the metric annotation as demonstrated below.">次に示すように、メトリック注釈で再利用可能なフィールドを指定することで、複数のエンドポイント間でメトリックを共有できます。</span></p>

<markup
lang="java"
title="Update the <code>GreetingCards</code> class with the following code:"
>package io.helidon.examples.quickstart.mp;

import java.util.Collections;
import javax.enterprise.context.RequestScoped;
import javax.json.Json;
import javax.json.JsonBuilderFactory;
import javax.json.JsonObject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import org.eclipse.microprofile.metrics.annotation.Counted;

@Path("/cards")
@RequestScoped
public class GreetingCards {

  private static final JsonBuilderFactory JSON = Json.createBuilderFactory(Collections.emptyMap());

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  @Counted(name = "anyCard",absolute = true)
  public JsonObject anyCard() throws InterruptedException {
    return createResponse("Here are some cards ...");
  }

  @GET
  @Path("/birthday")
  @Produces(MediaType.APPLICATION_JSON)
  @Counted(name = "specialEventCard", absolute = true, reusable = true)  <span class="conum" data-value="1" />
  public JsonObject birthdayCard() throws InterruptedException {
    return createResponse("Here are some birthday cards ...");
  }

  @GET
  @Path("/wedding")
  @Produces(MediaType.APPLICATION_JSON)
  @Counted(name = "specialEventCard", absolute = true, reusable = true)  <span class="conum" data-value="2" />
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
curl -H "Accept: application/json"  http://localhost:8080/metrics/application</markup>

<markup
lang="json"
title="JSON response from <code>/metrics/application</code>:"
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
title="Update the <code>GreetingCards</code> class with the following code:"
>package io.helidon.examples.quickstart.mp;

import java.util.Collections;
import javax.enterprise.context.RequestScoped;
import javax.json.Json;
import javax.json.JsonBuilderFactory;
import javax.json.JsonObject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
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
curl -H "Accept: application/json"  http://localhost:8080/metrics/application</markup>

<markup
lang="json"
title="JSON response from <code>/metrics/application</code>:"
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
<p><span class="merged" id="all.3IwyWN.spl1" title="原文 : Field level metrics can be injected into managed objects, but they need to be updated by the application code.">フィールド・レベルのメトリクスは管理対象オブジェクトにインジェクトできますが、アプリケーション・コードで更新する必要があります。</span> <span class="merged" id="all.3IwyWN.spl2" title="原文 : This annotation can be used on fields of type Meter, Timer, Counter, and Histogram.">この注釈は、<code>Meter</code>, <code>Timer</code>, <code>Counter</code>および<code>Histogram</code>型のフィールドで使用できます。</span> </p>

<p><span class="merged" id="all.2uTiBQ" title="原文 : The following example shows how to use a field-level Counter metric to track cache hits.">次の例は、フィールドレベルの<code>Counter</code>メトリックを使用してキャッシュ・ヒットを追跡する方法を示しています。</span></p>

<markup
lang="java"
title="Update the <code>GreetingCards</code> class with the following code:"
>package io.helidon.examples.quickstart.mp;

import java.util.Collections;
import java.util.Random;
import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.json.Json;
import javax.json.JsonBuilderFactory;
import javax.json.JsonObject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
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
curl -H "Accept: application/json"  http://localhost:8080/metrics/application</markup>

<markup
lang="json"
title="JSON response from <code>/metrics/application</code>:"
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
<p><span class="merged" id="all.2TLOUS.spl1" title="原文 : The metrics you have tested so far are updated in response to an application REST request, i.e GET /cards.">これまでにテストしたメトリクスは、アプリケーションのRESTリクエスト(GET <code>/cards</code>)に応じて更新されます。</span> <span class="merged" id="all.2TLOUS.spl2" title="原文 : These metrics can be declared in a request scoped class and Helidon will store the metric in the MetricRegistry, so the value persists across requests.">これらのメトリクスはリクエスト・スコープのクラスで宣言でき、Helidonはメトリックを<code>MetricRegistry</code>に格納するため、値はリクエスト間で保持されます。</span> <span class="merged" id="all.2TLOUS.spl3" title="原文 : When GET /metrics/application is invoked, Helidon will return the current value of the metric stored in the MetricRegistry.">GET <code>/metrics/application</code>が起動されると、Helidonは<code>MetricRegistry</code>に格納されているメトリックの現在の値を返します。</span> <span class="merged" id="all.2TLOUS.spl4" title="原文 : The Gauge metric is different from all the other metrics."><code>Gauge</code>メトリックは、他のすべてのメトリクスとは異なります。</span> <span class="merged" id="all.2TLOUS.spl5" title="原文 : The application must provide a getter to return the gauge value in an application scoped class.">アプリケーションは、アプリケーション・スコープのクラスのゲージ値を返すgetterを提供する必要があります。</span> <span class="merged" id="all.2TLOUS.spl6" title="原文 : When GET /metrics/application is invoked, Helidon will call the Gauge getter, store that value in the MetricsRegistry, and return it as part of the metrics response payload.">GET <code>/metrics/application</code>が起動されると、Helidonは<code>Gauge</code> getterをコールし、その値を<code>MetricsRegistry</code>に格納して、メトリクス・レスポンス・ペイロードの一部として返します。</span> <span class="merged" id="all.2TLOUS.spl7" title="原文 : So, the Gauge metric value is updated real-time, in response to the get metrics request.">そのため、<code>Gauge</code>メトリック値は、メトリクス・リクエストの取得に応じてリアルタイムで更新されます。</span> </p>

<p><span class="merged" id="all.RMQte" title="原文 : The following example demonstrates how to use a Gauge to track application up-time.">次の例は、<code>Gauge</code>を使用してアプリケーションの稼働時間を追跡する方法を示しています。</span></p>

<markup
lang="java"
title="Create a new <code>GreetingCardsAppMetrics</code> class with the following code:"
>package io.helidon.examples.quickstart.mp;

import java.time.Duration;
import java.util.concurrent.atomic.AtomicLong;
import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.context.Initialized;
import javax.enterprise.event.Observes;
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
import javax.enterprise.context.RequestScoped;
import javax.json.Json;
import javax.json.JsonBuilderFactory;
import javax.json.JsonObject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
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

<h3 id="_integration_with_kubernetes_and_prometheus_2"><span class="merged" id="all.3Am6oP.1" title="原文 : Integration with Kubernetes and Prometheus">KubernetesおよびPrometheusとの統合</span></h3>
<div class="section">

<h4 id="_kubernetes_integration_2"><span class="merged" id="all.3Xx7O7.1" title="原文 : Kubernetes Integration">Kubernetes統合</span></h4>
<div class="section">
<p><span class="merged" id="all.HOIa7.1" title="原文 : The following example shows how to integrate the Helidon MP application with Kubernetes.">次の例は、Helidon MPアプリケーションをKubernetesと統合する方法を示しています。</span></p>

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
    prometheus.io/scrape: 'true' <span class="conum" data-value="2" />
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
<li data-value="1"><span class="merged" id="all.3s9wLQ.3" title="原文 : A service of type NodePort that serves the default routes on port 8080.">ポート<code>8080</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
<li data-value="2"><span class="merged" id="all.BOd0W.1" title="原文 : An annotation that will allow Prometheus to discover and scrape the application pod.">Prometheusがアプリケーションポッドを検出してスクレイプできるようにする注釈。</span></li>
<li data-value="3"><span class="merged" id="all.1dhwFj.3" title="原文 : A deployment with one replica of a pod.">ポッドの1つのレプリカを持つデプロイメント。</span></li>
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
<li data-value="1"><span class="merged" id="all.3Q1f91.2" title="原文 : A service of type NodePort that serves the default routes on port 31143.">ポート<code>31143</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
</ul>
<markup
lang="bash"
title="Verify the metrics endpoint using port <code>30116</code>, your port will likely be different:"
>curl http://localhost:31143/metrics</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.4tlHG.1" title="原文 : Leave the application running in Kubernetes since it will be used for Prometheus integration.">Prometheus統合に使用されるため、アプリケーションはKubernetesで実行したままにします。</span></p>
</div>
</div>

<h4 id="_prometheus_integration_2"><span class="merged" id="all.1IYRP6.1" title="原文 : Prometheus Integration">Prometheus統合</span></h4>
<div class="section">
<p><span class="merged" id="all.4Rq1WH.1.spl1" title="原文 : The metrics service that you just deployed into Kubernetes is already annotated with prometheus.io/scrape:.">Kubernetesにデプロイしたメトリクス・サービスには、すでに<code>prometheus.io/scrape:</code>の注釈が付いています。</span> <span class="merged" id="all.4Rq1WH.1.spl2" title="原文 : This will allow Prometheus to discover the service and scrape the metrics.">これにより、Prometheusはサービスを検出し、メトリクスをスクレイプできます。</span> <span class="merged" id="all.4Rq1WH.1.spl3" title="原文 : In this exercise, you will install Prometheus into Kubernetes, then verify that it discovered the Helidon metrics in your application.">この演習では、PrometheusをKubernetesにインストールし、アプリケーションでHelidonメトリクスが検出されたことを確認します。</span> </p>

<markup
lang="bash"
title="Install Prometheus and wait until the pod is ready:"
>helm install stable/prometheus --name metrics
export POD_NAME=$(kubectl get pods --namespace default -l "app=prometheus,component=server" -o jsonpath="{.items[0].metadata.name}")
kubectl get pod $POD_NAME</markup>

<p><span class="merged" id="all.1XStKB.1.spl1" title="原文 : You will see output similar to the following.">次のような出力が表示されます。</span> <span class="merged" id="all.1XStKB.1.spl2" title="原文 : Repeat the kubectl get pod command until you see 2/2 and Running."><code>2/2</code>および<code>Running</code>が表示されるまで、<code>kubectl get pod</code>コマンドを繰り返します。</span> <span class="merged" id="all.1XStKB.1.spl3" title="原文 : This may take up to one minute.">これには最大1分かかる場合があります。</span> </p>

<markup
lang="bash"

>metrics-prometheus-server-5fc5dc86cb-79lk4   2/2     Running   0          46s</markup>

<markup
lang="bash"
title="Create a port-forward so you can access the server URL:"
>kubectl --namespace default port-forward $POD_NAME 7090:9090</markup>

<p><span class="merged" id="all.2jbZil.1.spl1" title="原文 : Now open your browser and navigate to http://localhost:7090/targets.">ブラウザを開き、<code><a href="http://localhost:7090/targets" id="" target="_blank" >http://localhost:7090/targets</a></code>に移動します。</span> <span class="merged" id="all.2jbZil.1.spl2" title="原文 : Search for helidon on the page and you will see your Helidon application as one of the Prometheus targets.">ページでhelidonを検索すると、Prometheusターゲットの一部としてHelidonアプリケーションが表示されます。</span> </p>

</div>

<h4 id="_final_cleanup_2"><span class="merged" id="all.1Bcn6e.1" title="原文 : Final Cleanup">最終クリーンアップ</span></h4>
<div class="section">
<p><span class="merged" id="all.HBnIV.2" title="原文 : You can now delete the Kubernetes resources that were just created during this example.">これで、この例で作成したKubernetesリソースを削除できます。</span></p>

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

<h3 id="_summary"><span class="merged" id="all.1nTCR.2"  title="原文:: Summary">サマリー</span></h3>
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
<p><span class="merged" id="all.3X0Fd8" title="原文 : MicroProfile Metrics specification at https://github.com/eclipse/microprofile-metrics/releases/tag/2.0"><a href="https://github.com/eclipse/microprofile-metrics/releases/tag/2.0" id="" target="_blank" >https://github.com/eclipse/microprofile-metrics/releases/tag/2.0</a>のMicroProfileメトリクス仕様</span></p>

</li>
<li>
<p><span class="merged" id="all.3UdjFz" title="原文 : MicroProfile Metrics Javadoc at https://javadoc.io/doc/org.eclipse.microprofile.metrics/microprofile-metrics-api/2.0.0"><a href="https://javadoc.io/doc/org.eclipse.microprofile.metrics/microprofile-metrics-api/2.0.0" id="" target="_blank" >https://javadoc.io/doc/org.eclipse.microprofile.metrics/microprofile-metrics-api/2.0.0</a>のMicroProfileメトリクスJavadoc</span></p>

</li>
<li>
<p><span class="merged" id="all.1m3bP8.2" title="原文 : Helidon Javadoc at https://helidon.io/docs/latest/apidocs/index.html?overview-summary.html"><a href="https://helidon.io/docs/latest/apidocs/index.html?overview-summary.html" id="" target="_blank" >https://helidon.io/docs/latest/apidocs/index.html?overview-summary.html</a>のHelidon Javadoc</span></p>

</li>
</ul>
</div>
</div>
</doc-view>
