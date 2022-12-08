<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3LjiKk" title="原文 : Helidon SE Metrics Guide">Helidon SEメトリクス・ガイド</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3WbQDW" title="原文 : This guide describes how to create a sample Helidon SE project that can be used to run some basic examples using both built-in and custom metrics with Helidon.">このガイドでは、Helidonを使用して組込みメトリクスとカスタム・メトリクスの両方を使用して、いくつかの基本的な例を実行するために使用できるサンプルHelidon SEプロジェクトを作成する方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_what_you_need"><span class="merged" id="all.27ZcMH.19"  title="原文:: What You Need">必要事項</span></h2>
<div class="section">
<p><span class="merged" id="all.4BUptU.2" title="原文 : For this 30 minute tutorial, you will need the following:">この30分のチュートリアルでは、次のものが必要です:</span></p>


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
<td class=""><span class="merged" id="all.3EWh8P" title="原文 : A Helidon SE Application">Helidon SEアプリケーション</span></td>
<td class=""><span class="merged" id="all.1JVqdx" title="原文 : You can use your own application or use the Helidon SE Quickstart to create a sample application.">独自のアプリケーションを使用するか、<a href="https://helidon.io/docs/v2/#/se/guides/02_quickstart" id="" target="_blank" >「Helidon SEクイックスタート」</a>を使用してサンプル・アプリケーションを作成できます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3UjXGj.18" title="原文 : Java&#160;SE&#160;11 (Open&#160;JDK&#160;11)"><a href="https://www.oracle.com/technetwork/java/javase/downloads" id="" target="_blank" >Java&#160;SE&#160;11</a> (<a href="http://jdk.java.net" id="" target="_blank" >Open&#160;JDK&#160;11</a>)</span></td>
<td class=""><span class="merged" id="all.3e6V0X.18" title="原文 : Helidon requires Java 11+.">HelidonにはJava 11以上が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1nyTbh.20" title="原文 : Maven 3.6.1+"><a href="https://maven.apache.org/download.cgi" id="" target="_blank" >Maven 3.6.1+</a></span></td>
<td class=""><span class="merged" id="all.3woDk0.18" title="原文 : Helidon requires Maven 3.6.1+.">Helidonには、Maven 3.6.1+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1HtX9I.19"  title="原文:: Docker 18.09+"><a href="https://docs.docker.com/install/" id="" target="_blank" >Docker 18.09+</a></span></td>
<td class=""><span class="merged" id="all.aX1BT.18" title="原文 : You need Docker if you want to build and deploy Docker containers.">Dockerコンテナをビルドおよびデプロイする場合は、Dockerが必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48aNQe.19"  title="原文:: Kubectl 1.16.5+"><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" id="" target="_blank" >Kubectl 1.16.5+</a></span></td>
<td class=""><span class="merged" id="all.1tjPJQ.18" title="原文 : If you want to deploy to Kubernetes, you need kubectl and a Kubernetes cluster (you can install one on your desktop).">Kubernetesにデプロイする場合は、<code>kubectl</code>およびKubernetesクラスタ(<router-link to="/about/05_kubernetes">「デスクトップにインストール」</router-link>も可)が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1E7KLE.1"  title="原文:: Helm"><a href="https://github.com/helm/helm" id="" target="_blank" >Helm</a></span></td>
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
export JAVA_HOME=`/usr/libexec/java_home -v 11`

# On Linux
# Use the appropriate path to your JDK
export JAVA_HOME=/usr/lib/jvm/jdk-11</markup>


<h3 id="_create_a_sample_helidon_se_project"><span class="merged" id="all.4L3FLA.1" title="原文 : Create a Sample Helidon SE Project">サンプルHelidon SEプロジェクトの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.36DQ1d.1" title="原文 : Use the Helidon SE Maven archetype to create a simple project that can be used for the examples in this guide.">Helidon SE Maven原型を使用して、このガイドの例で使用できる単純なプロジェクトを作成します。</span></p>

<markup
lang="bash"
title="Run the Maven archetype"
>mvn -U archetype:generate -DinteractiveMode=false \
    -DarchetypeGroupId=io.helidon.archetypes \
    -DarchetypeArtifactId=helidon-quickstart-se \
    -DarchetypeVersion=2.5.4 \
    -DgroupId=io.helidon.examples \
    -DartifactId=helidon-quickstart-se \
    -Dpackage=io.helidon.examples.quickstart.se</markup>

</div>

<h3 id="_using_the_built_in_metrics"><span class="merged" id="all.1Mhcwf.1" title="原文 : Using the Built-In Metrics">組込みメトリクスの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.3Kl5Gc.1.spl1" title="原文 : Helidon provides three scopes of metrics: base, vendor, and application.">Helidonには、3つのメトリクス・スコープが用意されています: ベース、ベンダーおよびアプリケーション。</span> <span class="merged" id="all.3Kl5Gc.1.spl2" title="原文 : Here are the metric endpoints:">メトリック・エンドポイントは次のとおりです:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.4HMomk.1" title="原文 : /metrics/base - Base metrics data as specified by the MicroProfile Metrics specification."><code>/metrics/base</code> - MicroProfileメトリクス仕様で指定されているベース・メトリクス・データ。</span>

</li>
<li>
<span class="merged" id="all.3CsSgu.1" title="原文 : /metrics/vendor - Helidon-specific metrics data."><code>/metrics/vendor</code> - Helidon固有のメトリクス・データ。</span>

</li>
<li>
<span class="merged" id="all.3A3wVX.1" title="原文 : /metrics/application - Application-specific metrics data."><code>/metrics/application</code> - アプリケーション固有のメトリクス・データ。</span>

</li>
</ol>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.4WGU6S.1" title="原文 : The /metrics endpoint will return data for all scopes."><code>/metrics</code>エンドポイントは、すべてのスコープのデータを返します。</span></p>
</div>
<p><span class="merged" id="all.1bpTFw.1" title="原文 : The built-in metrics fall into three categories:">組込みメトリクスは、次の3つのカテゴリに分類されます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2JOZYB.1" title="原文 : JVM behavior (in the base registry),">JVMの動作(ベース・レジストリ内)、</span>

</li>
<li>
<span class="merged" id="all.xSNp7.1" title="原文 : basic key performance indicators for request handling (in the vendor registry), and">リクエスト処理の基本キー・パフォーマンス・インジケータ(ベンダー・レジストリ内)、および</span>

</li>
<li>
<span class="merged" id="all.1R5RbV.1" title="原文 : thread pool utilization (also in the vendor registry).">スレッド・プール使用率(ベンダー・レジストリにもあります)。</span>

</li>
</ol>
<p><span class="merged" id="all.38CDVs.1" title="原文 : A later section describes the key performance indicator metrics in detail.">後のセクションでは、<router-link @click.native="this.scrollFix('#basic-and-extended-kpi')" to="#basic-and-extended-kpi">「キー・パフォーマンス・インジケータのメトリクス」</router-link>について詳しく説明します。</span></p>

<p><span class="merged" id="all.1cJqyY.spl1" title="原文 : The following example demonstrates how to use the other built-in metrics.">次の例では、その他の組込みメトリクスを使用する方法を示します。</span> <span class="merged" id="all.1cJqyY.spl2" title="原文 : All examples are executed from the root directory of your project (helidon-quickstart-se).">すべての例は、プロジェクトのルート・ディレクトリ(helidon-quickstart-se)から実行されます。</span> </p>

<p><span class="merged" id="all.zV4KR" title="原文 : The generated source code is already configured for both metrics and health checks, but the following example removes health checks.">生成されたソース・コードはメトリクスとヘルス・チェックの両方にすでに構成されていますが、次の例ではヘルス・チェックを削除します。</span></p>

<markup
lang="xml"
title="Notice that the metrics dependency is already in the project&#8217;s pom.xml file:"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.metrics&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-metrics&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<markup
lang="java"
title="Replace the <code>Main.createRouting</code> method with the following code:"
>    private static Routing createRouting(Config config) {

      GreetService greetService = new GreetService(config);

      return Routing.builder()
          .register(MetricsSupport.create()) <span class="conum" data-value="1" />
          .register("/greet", greetService)
          .build();
    }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.eiwOb" title="原文 : Register the built-in base and vendor metrics.">組込みのベース・メトリクスおよびベンダー・メトリクスを登録します。</span></li>
</ul>
<markup
lang="bash"
title="Build the application, skipping unit tests, then run it:"
>mvn package -DskipTests=true
java -jar target/helidon-quickstart-se.jar</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.sXpjM.1.spl1" title="原文 : Metrics can be returned in either text format (the default), or JSON.">メトリクスは、テキスト形式(デフォルト)またはJSONのいずれかで返すことができます。</span> <span class="merged" id="all.sXpjM.1.spl2" title="原文 : The text format uses OpenMetrics (Prometheus) Text Format, see https://prometheus.io/docs/instrumenting/exposition_formats/#text-format-details.">テキスト形式では、OpenMetrics (Prometheus)テキスト形式を使用します。<a href="https://prometheus.io/docs/instrumenting/exposition_formats/#text-format-details" id="" target="_blank" >https://prometheus.io/docs/instrumenting/exposition_formats/#text-format-details</a>を参照してください。</span> </p>
</div>
<markup
lang="bash"
title="Verify the metrics endpoint in a new terminal window:"
>curl http://localhost:8080/metrics</markup>

<markup
lang="text"
title="Text response:"
># TYPE base:classloader_current_loaded_class_count counter
# HELP base:classloader_current_loaded_class_count Displays the number of classes that are currently loaded in the Java virtual machine.
base:classloader_current_loaded_class_count 7511
# TYPE base:classloader_total_loaded_class_count counter
# HELP base:classloader_total_loaded_class_count Displays the total number of classes that have been loaded since the Java virtual machine has started execution.
base:classloader_total_loaded_class_count 7512
...</markup>

<p><span class="merged" id="all.VV8rl.1" title="原文 : You can get the same data in JSON format.">同じデータをJSON形式で取得できます。</span></p>

<markup
lang="bash"
title="Verify the metrics endpoint with an HTTP accept header:"
>curl -H "Accept: application/json"  http://localhost:8080/metrics</markup>

<markup
lang="json"
title="JSON response:"
>{
  "base": {
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

<p><span class="merged" id="all.1kpSrZ.1" title="原文 : You can get a single metric by specifying the name in the URL path.">URLパスに名前を指定すると、単一のメトリックを取得できます。</span></p>

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
<p class="admonition-inline"><span class="merged" id="all.3osaGm.1.spl1" title="原文 : You cannot get the individual fields of a metric.">メトリックの個々のフィールドは取得できません。</span> <span class="merged" id="all.3osaGm.1.spl2" title="原文 : For example, you cannot target http://localhost:8080/metrics/vendor/requests.meter.count.">たとえば、<a href="http://localhost:8080/metrics/vendor/requests.meter.count" id="" target="_blank" >http://localhost:8080/metrics/vendor/requests.meter.count</a>はターゲットにできません。</span> </p>
</div>
<p><span class="merged" id="all.1HQTzl.1" title="原文 : The base metrics illustrated above provide some insight into the behavior of the JVM in which the server runs.">前述の<code>base</code>メトリクスでは、サーバーが実行されるJVMの動作について、いくつかの洞察が提供されます。</span></p>

<p><span class="merged" id="all.2N0k7N.1" title="原文 : The vendor metrics shown above appear in two groups:">前述の<code>vendor</code>メトリクスは、次の2つのグループに表示されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3cthqo.1" title="原文 : Helidon thread pools ">Helidonスレッド・プール<br></span></p>
<p><span class="merged" id="all.17eVw2.1.spl1" title="原文 : Helidon uses these thread pools for its own internal work, and your application can also use Helidon-managed thread pools if it needs to do work asynchronously.">Helidonは、独自の内部作業にこれらのスレッド・プールを使用し、非同期で作業する必要がある場合は、アプリケーションでHelidon-managedスレッド・プールを使用することもできます。</span> <span class="merged" id="all.17eVw2.1.spl2" title="原文 : (See this example.)">(<a href="https://github.com/oracle/helidon/tree/2.5.4/examples/webserver/threadpool" id="" target="_blank" >「この例」</a>を参照。)</span> <span class="merged" id="all.17eVw2.1.spl3" title="原文 : The metrics in this group show information about the thread pools which can help you assess how efficiently they are utilized.">このグループのメトリクスは、スレッド・プールに関する情報を表示します。スレッド・プールは、その使用効率を評価するのに役立ちます。</span> <span class="merged" id="all.17eVw2.1.spl4" title="原文 : Helidon uses tags to distinguish the metrics which describe different thread pools.">Helidonは、タグを使用して、様々なスレッド・プールを記述するメトリクスを区別します。</span> <span class="merged" id="all.17eVw2.1.spl5" title="原文 : In some cases the specific metrics exposed depend on the particular type of thread pool.">場合によっては、表示される特定のメトリクスは、特定のタイプのスレッド・プールによって異なります。</span> </p>

</li>
<li>
<p><span class="merged" id="all.2ATFij.1" title="原文 : basic key performance indicators ">基本的なキー・パフォーマンス・インジケータ<br></span></p>
<p><span class="merged" id="all.1M80SH.1.spl1" title="原文 : These metrics give an idea of the request traffic the server is handling.">これらのメトリクスは、サーバーが処理しているリクエスト・トラフィックを把握します。</span> <span class="merged" id="all.1M80SH.1.spl2" title="原文 : See the later section for more information on the basic and extended key performance indicator metrics.">基本および拡張キー・パフォーマンス・インジケータ・メトリクスの詳細は、<router-link @click.native="this.scrollFix('#basic-and-extended-kpi')" to="#basic-and-extended-kpi">「後続セクション」</router-link>を参照してください。</span> </p>

</li>
</ul>
</div>

<h3 id="_controlling_metrics_behavior"><span class="merged" id="all.3DSmdj.1" title="原文 : Controlling Metrics Behavior">メトリクス動作の制御</span></h3>
<div class="section">
<p><span class="merged" id="all.2VoBiI.1" title="原文 : By adding a metrics section to your application configuration you can control how the Helidon metrics subsystem behaves in any of several ways."><code>metrics</code>セクションをアプリケーション構成に追加することで、Helidonメトリクス・サブシステムの動作をいくつかの方法で制御できます。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3BoJia.1" title="原文 : Disable metrics subsystem entirely."><router-link @click.native="this.scrollFix('#disabling-entirely')" to="#disabling-entirely">「メトリクス・サブシステム全体を無効化」</router-link>。</span></p>

</li>
<li>
<p><span class="merged" id="all.3og0Gc.1" title="原文 : Identify groups of metrics to control:">制御するメトリクスのグループを識別します:</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.1crwmI.1" title="原文 : registered by a particular component, and"><router-link @click.native="this.scrollFix('#enabling-disabling-by-component')" to="#enabling-disabling-by-component">「特定のコンポーネントによって登録」</router-link>、および</span></p>

</li>
<li>
<p><span class="merged" id="all.1xztGt.1" title="原文 : by metric registry (application, vendor, and base) and within a registry by metric names which match patterns you provide."><router-link @click.native="this.scrollFix('#enabling-disabling-by-registry')" to="#enabling-disabling-by-registry">「メトリック・レジストリ別」</router-link> (アプリケーション、ベンダーおよびベース)および指定したパターンに一致するメトリック名によるレジストリ内。</span></p>

</li>
</ul>
</li>
<li>
<p><span class="merged" id="all.JOewh.1" title="原文 : Select whether to collect extended key performance indicator metrics."><router-link @click.native="this.scrollFix('#basic-and-extended-kpi')" to="#basic-and-extended-kpi">「拡張キー・パフォーマンス・インジケータ・メトリクス」</router-link>を収集するかどうかを選択します。</span></p>

</li>
</ul>
<p><span class="merged" id="all.XkNZM" title="原文 : Your Helidon SE application can also control metrics processing programmatically as described in the following sections.">Helidon SEアプリケーションは、次の項で説明するように、メトリクス処理をプログラムで制御することもできます。</span></p>


<h4 id="disabling-entirely"><span class="merged" id="all.1gSl1J.1" title="原文 : Disabling Metrics Subsystem Entirely">メトリクス・サブシステム全体の無効化</span></h4>
<div class="section">
<p><span class="merged" id="all.2sphAT.1.spl1" title="原文 : By default, if your application depends on the helidon-metrics Maven module then full-featured metrics are enabled.">デフォルトでは、アプリケーションが<code>helidon-metrics</code> Mavenモジュールに依存している場合、フル機能のメトリクスが有効になります。</span> <span class="merged" id="all.2sphAT.1.spl2" title="原文 : You can disable the metrics subsystem entirely using configuration:">構成を使用してメトリクス・サブシステムを完全に無効にできます:</span> </p>

<markup
lang="properties"
title="Configuration properties file disabling metrics"
>metrics.enabled=false</markup>

<p><span class="merged" id="all.2vnsLB" title="原文 : A Helidon SE application can disable metrics processing programmatically.">Helidon SEアプリケーションは、メトリクス処理をプログラムで無効にできます。</span></p>

<markup
lang="java"
title="Disable all metrics behavior"
>import io.helidon.metrics.api.MetricsSettings;
import io.helidon.metrics.serviceapi.MetricsSupport;
import io.helidon.metrics.api.RegistryFactory;
...

    MetricsSettings metricsSettings = MetricsSettings.builder()
            .enabled(false)
            .build(); <span class="conum" data-value="1" />

    MetricsSupport metricsSupport = MetricsSupport.create(metricsSettings); <span class="conum" data-value="2" />

    RegistryFactory registryFactory = RegistryFactory.getInstance(metricsSettings); <span class="conum" data-value="3" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.D1QW5" title="原文 : Create a MetricsSettings instance (via its Builder) with the metrics subsystem disabled.">メトリクス・サブシステムが無効になっている<a href="./apidocs/io.helidon.metrics.api/io/helidon/metrics/api/MetricsSettings.html" id="" target="_blank" ><code>MetricsSettings</a></code>インスタンス(<a href="./apidocs/io.helidon.metrics.api/io/helidon/metrics/api/MetricsSettings.Builder.html" id="" target="_blank" ><code>Builder</code></a>を介して)を作成します。</span></li>
<li data-value="2"><span class="merged" id="all.QCopt" title="原文 : Get a MetricsSupport service (usable in setting routing rules) that responds to the /metrics endpoint with 404 and an explanatory message."><code>404</code>および説明メッセージを含む<code>/metrics</code>エンドポイントに応答する<a href="./apidocs/io.helidon.metrics.serviceapi/io/helidon/metrics/serviceapi/MetricsSupport.html" id="" target="_blank" ><code>MetricsSupport</a></code>サービス(ルーティング・ルールの設定で使用可能)を取得します。</span></li>
<li data-value="3"><span class="merged" id="all.3glhGo" title="原文 : Get a RegistryFactory instance that provides MetricRegistry instances which register no-op metric objects (counters, timers, etc.).">no-opメトリック・オブジェクト(カウンタ、タイマーなど)を登録する<code>MetricRegistry</code>インスタンスを提供する<a href="./apidocs/io.helidon.metrics.api/io/helidon/metrics/api/RegistryFactory.html" id="" target="_blank" ><code>RegistryFactory</a></code>インスタンスを取得します。</span></li>
</ul>
<p><span class="merged" id="all.3tKYHN" title="原文 : These builders and interfaces also have methods which accept Config objects representing the metrics node from the application configuration.">これらのビルダーおよびインタフェースには、アプリケーション構成から<code>metrics</code>ノードを表す<code>Config</code>オブジェクトを受け入れるメソッドもあります。</span></p>

<p><span class="merged" id="all.jRt2q.1" title="原文 : With metrics processing disabled, Helidon never updates any metrics and the /metrics endpoints respond with 404 plus a message that the metrics subsystem is disabled.">メトリクス処理が無効な場合、Helidonはメトリクスを更新せず、<code>404</code>で応答する<code>/metrics</code>エンドポイントとメトリクス・サブシステムが無効であるというメッセージ。</span></p>

</div>

<h4 id="enabling-disabling-by-component"><span class="merged" id="all.UJW0H.1" title="原文 : Enabling and Disabling Metrics Usage by a Component">コンポーネントによるメトリクス使用の有効化と無効化</span></h4>
<div class="section">
<p><span class="merged" id="all.3c508h.1.spl1" title="原文 : Helidon contains several components and integrations which register and update metrics.">Helidonには、メトリクスを登録および更新する複数のコンポーネントおよび統合が含まれています。</span> <span class="merged" id="all.3c508h.1.spl2" title="原文 : Depending on how the component is written, you might be able to disable just that component&rsquo;s use of metrics:">コンポーネントの書込み方法によっては、そのコンポーネントのメトリクスの使用のみを無効にできる場合があります:</span> </p>

<markup
lang="properties"
title="Configuration properties file disabling a component&#8217;s use of metrics"
>some-component.metrics.enabled=false</markup>

<p><span class="merged" id="all.3lxyAC" title="原文 : Check the documentation for a specific component to find out whether that component uses metrics and whether it allows you to disable that use.">特定のコンポーネントのドキュメントをチェックして、そのコンポーネントがメトリクスを使用しているかどうか、およびその使用を無効にできるかどうかを確認します。</span></p>

<p><span class="merged" id="all.1w2QDO" title="原文 : Your Helidon SE application can disable a metrics-capable component&rsquo;s use of metrics programmatically.">Helidon SEアプリケーションは、メトリクス対応コンポーネントでのメトリクスの使用をプログラム的に無効にできます。</span></p>

<markup
lang="java"
title="Disable metrics use in a metrics-capable component"
>import io.helidon.metrics.api.ComponentMetricsSettings;
...

    ComponentMetricsSettings.Builder componentMetricsSettingsBuilder = ComponentMetricsSettings.builder()
            .enabled(false); <span class="conum" data-value="1" />

    SomeService someService = SomeService.builder()
            ...
            .componentMetricsSettings(componentMetricsSettingsBuilder)
            ...
            .build(); <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1yLx4A" title="原文 : Create a ComponentMetricsSettings instance (via its Builder) indicating that metrics usage should be disabled.">メトリクスの使用を無効にすることを示す<a href="./apidocs/io.helidon.metrics.api/io/helidon/metrics/api/ComponentMetricsSettings.html" id="" target="_blank" ><code>ComponentMetricsSettings</a></code>インスタンス(<a href="./apidocs/io.helidon.metrics.api/io/helidon/metrics/api/ComponentMetricsSettings.Builder.html" id="" target="_blank" ><code>Builder</code></a>を介して)を作成します。</span></li>
<li data-value="2"><span class="merged" id="all.1s2aJI" title="原文 : Create an instance of the service with its metrics usage disabled.">メトリクスの使用が無効になっているサービスのインスタンスを作成します。</span></li>
</ul>
<p><span class="merged" id="all.1txMYP.spl1" title="原文 : If you disable a component&rsquo;s use of metrics, Helidon does not register the component&rsquo;s metrics in the visible metrics registries nor do those metrics ever update their values.">コンポーネントのメトリクスの使用を無効にすると、Helidonは、コンポーネントのメトリクスを表示可能なメトリクス・レジストリに登録したり、これらのメトリクスで値を更新したりしません。</span> <span class="merged" id="all.1txMYP.spl2" title="原文 : The response from the /metrics endpoint excludes that component&rsquo;s metrics."><code>/metrics</code>エンドポイントからのレスポンスでは、そのコンポーネントのメトリクスを除外します。</span> </p>

<p><span class="merged" id="all.2bmtHS.1" title="原文 : Note that if you disable metrics processing entirely, no component updates its metrics regardless of any component-level metrics settings.">メトリクス処理を完全に無効にすると、コンポーネント・レベルのメトリクス設定に関係なく、コンポーネントはメトリクスを更新しません。</span></p>

</div>

<h4 id="enabling-disabling-by-registry"><span class="merged" id="all.7pZIX.1" title="原文 : Controlling Metrics By Registry Type and Metric Name">レジストリ・タイプおよびメトリック名別のメトリクスの制御</span></h4>
<div class="section">
<p><span class="merged" id="all.ggI93.1" title="原文 : You can control the collection and reporting of metrics by registry type and metric name within registry type.">レジストリ・タイプ内のレジストリ・タイプおよびメトリック名別にメトリクスの収集およびレポートを制御できます。</span></p>


<h5 id="_disabling_all_metrics_of_a_given_registry_type"><span class="merged" id="all.KfvCs.1" title="原文 : Disabling All Metrics of a Given Registry Type">指定されたレジストリ・タイプのすべてのメトリクスの無効化</span></h5>
<div class="section">
<p><span class="merged" id="all.2noh7R.1" title="原文 : To disable all metrics in a given registry type (application, vendor, or base), add one or more groups to the configuration:">特定のレジストリ・タイプ(アプリケーション、ベンダーまたはベース)内のすべてのメトリクスを無効にするには、構成に1つ以上のグループを追加します:</span></p>

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

<h5 id="_controlling_metrics_by_metric_name"><span class="merged" id="all.41vvPt.1" title="原文 : Controlling Metrics by Metric Name">メトリック名によるメトリクスの制御</span></h5>
<div class="section">
<p><span class="merged" id="all.3ZRsGn.1.spl1" title="原文 : You can be even more selective.">もっと選択的になることができます。</span> <span class="merged" id="all.3ZRsGn.1.spl2" title="原文 : Within a registry type you can configure up to two regular expression patterns:">レジストリ・タイプ内では、最大2つの正規表現パターンを構成できます:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1zsYLp.1" title="原文 : one matching metric names to exclude, and"><em>「除外」</em>に一致する1つのメトリック名、および</span></p>

</li>
<li>
<p><span class="merged" id="all.3Aies9.1" title="原文 : one matching metric names to include."><em>「含める」</em>一致する1つのメトリック名。</span></p>

</li>
</ul>
<p><span class="merged" id="all.1ZlNQz.1" title="原文 : Helidon updates and reports a metric only if two conditions hold:">Helidonは、2つの条件が保持されている場合にのみメトリックを更新およびレポートします:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4G7F05.1" title="原文 : the metric name does not match the exclude regex pattern (if you define one), and">メトリック名は、<code>exclude</code>正規表現パターン(定義した場合)と一致<em>「しません」</em>、および</span></p>

</li>
<li>
<p><span class="merged" id="all.2EEvyx.1"  title="原文:: either">また</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.3zYc4V.1" title="原文 : there is no include regex pattern, or"><code>include</code>正規表現パターンがないか、</span></p>

</li>
<li>
<p><span class="merged" id="all.2WKtx9.1" title="原文 : the metric name matches the include pattern.">メトリック名は<code>include</code>パターンと一致します。</span></p>

</li>
</ul>
</li>
</ul>
<div class="admonition caution">
<p class="admonition-textlabel"><span class="merged" id="all.4Pmf1N.1"  title="原文:: Caution">注意</span></p>
<p ><p><span class="merged" id="all.3RoVe3.1" title="原文 : Make sure any include regex pattern you specify matches all the metric names you want to capture.">指定した<code>include</code>正規表現パターンが、取得するメトリック名<em>「すべて」</em>と一致していることを確認します。</span></p>
</p>
</div>
<p><span class="merged" id="all.2vtS5v.1" title="原文 : Suppose your application creates and updates a group of metrics with names such as myapp.xxx.queries, myapp.xxx.creates, myapp.xxx.updates, and myapp.xxx.deletes where xxx can be either supplier or customer.">アプリケーションで、<code>myapp.xxx.queries</code>, <code>myapp.xxx.creates</code>, <code>myapp.xxx.updates</code>などの名前を持つメトリクスのグループを作成および更新し、<code>myapp.xxx.deletes</code> (<code>xxx</code>は<code>supplier</code>または<code>customer</code>のいずれか)を実行するとします。</span></p>

<p><span class="merged" id="all.19d2yt.1" title="原文 : The following example gathers all metrics except those from your application regarding suppliers:">次の例では、サプライヤに関するアプリケーションからのメトリクス<em>「除外」</em>するすべてを収集します:</span></p>

<markup
lang="properties"
title="Disabling metrics by name (properties format)"
>metrics.registries.0.type = application
metrics.registries.0.filter.exclude = myapp\.supplier\..*</markup>

<p><span class="merged" id="all.2koFPS.1" title="原文 : The following settings select the particular subset of the metrics created in your application code representing updates of customers and suppliers:">次の設定では、顧客およびサプライヤの更新を表すアプリケーション・コードで作成されたメトリクスの特定のサブセットを選択します:</span></p>

<markup
lang="properties"
title="Enabling metrics by name (properties format)"
>metrics.registries.0.type = application
metrics.registries.0.filter.include = myapp\..*\.updates</markup>

<p><span class="merged" id="all.124yK7.1" title="原文 : If you use the YAML configuration format, enclose the regex patterns in single-quote marks:">YAML構成形式を使用する場合は、正規表現パターンを単一引用符で囲みます:</span></p>

<markup
lang="yaml"
title="Enabling metrics by name (YAML format)"
>metrics:
  registries:
    - type: application
      filter:
        include: 'myapp\..*\.updates'</markup>

<p><span class="merged" id="all.2ChVNm.1" title="原文 : The next example selects only your application&rsquo;s metrics while excluding those which refer to deletions:">次の例では、削除を参照するメトリクスを除外しながら、アプリケーションのメトリクスのみを選択します:</span></p>

<markup
lang="properties"
title="Combining <code>include</code> and <code>exclude</code>"
>metrics.registries.0.type = application
metrics.registries.0.filter.include = myapp\..*
metrics.registries.0.filter.exclude = myapp\..*/deletes</markup>

<p><span class="merged" id="all.24Ai5B.1.spl1" title="原文 : Helidon would not update or report the metric myapp.supplier.queries, for example.">Helidonは、たとえばメトリック<code>myapp.supplier.queries</code>を更新またはレポートしません。</span> <span class="merged" id="all.24Ai5B.1.spl2" title="原文 : To include metrics from your application for both updates and queries (but not for other operations), you could change the settings in the previous example to this:">更新と問合せの両方に対してアプリケーションのメトリクスを含める(他の操作では含まない)には、前の例の設定を次のように変更できます:</span> </p>

<markup


>metrics.registries.0.type = application
metrics.registries.0.filter.include = myapp\..*\.updates|myapp\..*\.queries
metrics.registries.0.filter.exclude = myapp\..*/deletes</markup>

<p><span class="merged" id="all.2tUw1E" title="原文 : Your Helidon SE application can control the collection and reporting of metrics programmatically as well by preparing these settings objects:">Helidon SEアプリケーションは、これらの設定オブジェクトを準備することによって、プログラムによってメトリクスの収集およびレポートを制御できます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2USAwD" title="原文 : RegistryFilterSettings"><a href="./apidocs/io.helidon.metrics.api/io/helidon/metrics/api/RegistryFilterSettings.html" id="" target="_blank" ><code>RegistryFilterSettings</code></a></span></p>

</li>
<li>
<p><span class="merged" id="all.2aRmyr" title="原文 : RegistrySettings"><a href="./apidocs/io.helidon.metrics.api/io/helidon/metrics/api/RegistrySettings.html" id="" target="_blank" ><code>RegistrySettings</code></a></span></p>

</li>
<li>
<p><span class="merged" id="all.E1ZWv" title="原文 : MetricsSettings"><a href="./apidocs/io.helidon.metrics.api/io/helidon/metrics/api/MetricsSettings.html" id="" target="_blank" ><code>MetricsSettings</code></a></span></p>

</li>
</ul>
<p><span class="merged" id="all.46zrYU" title="原文 : and using the resulting MetricsSettings to retrieve a suitable RegistryFactory.">結果の<code>MetricsSettings</code>を使用して、適切な<a href="./apidocs/io.helidon.metrics.api/io/helidon/metrics/api/RegistryFactory.html" id="" target="_blank" ><code>RegistryFactory</code></a>を取得します。</span></p>

<markup
lang="java"
title="Control metrics by registry type and name"
>import io.helidon.metrics.api.RegistryFilterSettings;
import org.eclipse.microprofile.metrics.MetricRegistry;
...
    RegistryFilterSettings appFilterSettings = RegistryFilterSettings.builder()  <span class="conum" data-value="1" />
        .include("myapp\..*\.updates")
        .build();
    RegistrySettings registrySettings = RegistrySettings.builder() <span class="conum" data-value="2" />
        .filterSettings(appFilterSettings)
        .build();
    MetricsSettings metricsSettings = MetricsSettings.builder() <span class="conum" data-value="3" />
        .registrySettings(MetricRegistry.Type.APPLICATION, appFilterSettings)
        .build();
    RegistryFactory rf = RegistryFactory.getInstance(metricsSettings); <span class="conum" data-value="4" />
    MetricRegistry registry = rf.getRegistry(MetricRegistry.Type.APPLICATION); <span class="conum" data-value="5" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2SYSVo" title="原文 : Create the registry filter settings to include only those metrics with names indicating updates.">レジストリ・フィルタ設定を作成して、更新を示す名前を持つメトリクスのみを含めます。</span></li>
<li data-value="2"><span class="merged" id="all.nnWKc" title="原文 : Create the registry settings with that filter.">そのフィルタを使用してレジストリ設定を作成します。</span></li>
<li data-value="3"><span class="merged" id="all.CqChK" title="原文 : Create the metrics settings, associating the registry settings with the APPLICATION metric registry.">メトリクス設定を作成し、レジストリ設定を<code>APPLICATION</code>メトリック・レジストリに関連付けます。</span></li>
<li data-value="4"><span class="merged" id="all.4DIk9K" title="原文 : Set the overall metrics settings and retrieve a registry factory suitably initialized.">全体的なメトリクス設定を設定し、レジストリ・ファクトリを適切に初期化して取得します。</span></li>
<li data-value="5"><span class="merged" id="all.19Hcx6" title="原文 : Obtain a reference to the APPLICATION registry which is set up to create and report on only metrics with names starting with myapp.updates.."><code>myapp.updates.</code>で始まる名前のメトリクスのみを作成してレポートするように設定されている<code>APPLICATION</code>レジストリへの参照を取得します。</span></li>
</ul>
</div>
</div>

<h4 id="basic-and-extended-kpi"><span class="merged" id="all.1RbZUb.1" title="原文 : Collecting Basic and Extended Key Performance Indicator (KPI) Metrics">基本および拡張キー・パフォーマンス・インジケータ(KPI)メトリクスの収集</span></h4>
<div class="section">
<p><span class="merged" id="all.3sOZXl.1" title="原文 : Any time you include the Helidon metrics module in your application, Helidon tracks two basic performance indicator metrics:">アプリケーションにHelidonメトリクス・モジュールを含めるたびに、Helidonでは、次の2つの基本的なパフォーマンス・メトリクスが追跡されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3AcZDp.1" title="原文 : a Counter of all requests received (requests.count), and">受信したすべてのリクエストの<code>Counter</code> (<code>requests.count</code>)、および</span></p>

</li>
<li>
<p><span class="merged" id="all.153KWy.1" title="原文 : a Meter of all requests received (requests.meter).">受信したすべてのリクエストの<code>Meter</code> (<code>requests.meter</code>)。</span></p>

</li>
</ul>
<p><span class="merged" id="all.4b1RzM" title="原文 : Helidon SE also includes additional, extended KPI metrics which are disabled by default:">Helidon SEには、デフォルトでは無効になっている追加の拡張KPIメトリクスも含まれています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.JrarW.1" title="原文 : current number of requests in-flight - a ConcurrentGauge (requests.inFlight) of requests currently being processed">現在進行中のリクエスト数 - 現在処理中のリクエストの<code>ConcurrentGauge</code> (<code>requests.inFlight</code>)</span></p>

</li>
<li>
<p><span class="merged" id="all.2cyom6.1" title="原文 : long-running requests - a Meter (requests.longRunning) measuring the rate at which Helidon processes requests which take at least a given amount of time to complete; configurable, defaults to 10000 milliseconds (10 seconds)">長時間実行リクエスト - Helidonが完了までに少なくとも指定された時間を要するリクエストを処理する速度を測定する<code>Meter</code> (<code>requests.longRunning</code>)です。構成可能で、デフォルトは10000ミリ秒(10秒)です</span></p>

</li>
<li>
<p><span class="merged" id="all.2iOF4J.1" title="原文 : load - a Meter (requests.load) measuring the rate at which requests are worked on (as opposed to received)">load - リクエストの処理速度を測定する<code>Meter</code> (<code>requests.load</code>) (受信したものとは対照的)</span></p>

</li>
<li>
<p><span class="merged" id="all.1QFwn1.1" title="原文 : deferred - a Meter (requests.deferred) measuring the rate at which a request&rsquo;s processing is delayed after Helidon receives the request">延期 - Helidonがリクエストを受信した後にリクエスト処理が遅延する割合を測定する<code>Meter</code> (<code>requests.deferred</code>)</span></p>

</li>
</ul>
<p><span class="merged" id="all.oRutk.1" title="原文 : You can enable and control these metrics using configuration:">構成を使用して、次のメトリクスを有効化および制御できます:</span></p>

<markup
lang="properties"
title="Configuration properties file controlling extended KPI metrics"
>metrics.key-performance-indicators.extended = true
metrics.key-performance-indicators.long-running.threshold-ms = 2000</markup>

<p><span class="merged" id="all.9O4z2" title="原文 : Your Helidon SE application can also control the KPI settings programmatically.">Helidon SEアプリケーションは、KPI設定をプログラム的に制御することもできます。</span></p>

<markup
lang="java"
title="Assign KPI metrics behavior from code"
>import io.helidon.metrics.api.KeyPerformanceIndicatorMetricsSettings;
import io.helidon.metrics.api.MetricsSettings;
import io.helidon.metrics.serviceapi.MetricsSupport;
import io.helidon.metrics.api.RegistryFactory;
...

    KeyPerformanceIndicatorMetricsSettings.Builder kpiSettingsBuilder =
        KeyPerformanceIndicatorMetricsSettings.builder()
            .extended(true)
            .longRunningThresholdMs(2000); <span class="conum" data-value="1" />

    MetricsSettings metricsSettings = MetricsSettings.builder()
            .keyPerformanceIndicatorSettings(kpiSettingsBuilder)
            .build(); <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.ssNsC" title="原文 : Create a KeyPerformanceIndicatorMetricsSettings instance (via its Builder) with non-default values.">デフォルト以外の値を持つ<a href="./apidocs/io.helidon.metrics.api/io/helidon/metrics/api/KeyPerformanceIndicatorMetricsSettings.html" id="" target="_blank" ><code>KeyPerformanceIndicatorMetricsSettings</a></code>インスタンス(<a href="./apidocs/io.helidon.metrics.api/io/helidon/metrics/api/KeyPerformanceIndicatorMetricsSettings.Builder.html" id="" target="_blank" ><code>Builder</code></a>を介して)を作成します。</span></li>
<li data-value="2"><span class="merged" id="all.2psjv1" title="原文 : Create a MetricsSettings instance reflecting the KPI settings.">KPI設定を反映した<a href="./apidocs/io.helidon.metrics.api/io/helidon/metrics/api/MetricsSettings.html" id="" target="_blank" ><code>MetricsSettings</a></code>インスタンスを作成します。</span></li>
</ul>
</div>
</div>

<h3 id="_metrics_metadata"><span class="merged" id="all.2zUh1o.2" title="原文 : Metrics Metadata">メトリクスMetadata</span></h3>
<div class="section">
<p><span class="merged" id="all.43pYCx.2" title="原文 : Each metric has associated metadata that describes:">各メトリックには、次の内容を記述するメタデータが関連付けられています:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.3Z5ins.2" title="原文 : name: The name of the metric.">name: メトリックの名前。</span>

</li>
<li>
<span class="merged" id="all.24iVV9.2" title="原文 : units: The unit of the metric such as time (seconds, millisecond), size (bytes, megabytes), etc.">units: 時間(秒、ミリ秒)、サイズ(バイト、メガバイト)などのメトリックの単位。</span>

</li>
<li>
<span class="merged" id="all.2JdHdF.2" title="原文 : type: The type of metric: Counter, Timer, Meter, Histogram, SimpleTimer, or Gauge.">type: メトリックのタイプ: <code>Counter</code>, <code>Timer</code>, <code>Meter</code>, <code>Histogram</code>, <code>SimpleTimer</code>、または<code>Gauge</code>。</span>

</li>
</ol>
<p><span class="merged" id="all.2UzLic.2" title="原文 : You can get the metadata for any scope, such as /metrics/base, as shown below:">次に示すように、<code>/metrics/base</code>などの任意のスコープのメタデータを取得できます:</span></p>

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

<h3 id="_application_specific_metrics_data"><span class="merged" id="all.1cx8aG.1" title="原文 : Application-Specific Metrics Data">アプリケーション固有のメトリクス・データ</span></h3>
<div class="section">
<p><span class="merged" id="all.40hr0V.spl1" title="原文 : This section demonstrates how to use application-specific metrics and integrate them with Helidon.">この項では、アプリケーション固有のメトリクスを使用してHelidonと統合する方法について説明します。</span> <span class="merged" id="all.40hr0V.spl2" title="原文 : It is the application&rsquo;s responsibility to create and update the metrics at runtime.">実行時にメトリクスを作成および更新するのは、アプリケーションの役割です。</span> <span class="merged" id="all.40hr0V.spl3" title="原文 : The application has complete control over when and how each metric is used.">アプリケーションは、各メトリックの使用時期と使用方法を完全に制御します。</span> <span class="merged" id="all.40hr0V.spl4" title="原文 : For example, an application may use the same counter for multiple methods, or one counter per method.">たとえば、アプリケーションで複数のメソッドに同じカウンタを使用したり、メソッドごとに1つのカウンタを使用できます。</span> <span class="merged" id="all.40hr0V.spl5" title="原文 : Helidon maintains an application MetricRegistry which is used to manage all of the application metrics.">Helidonは、すべてのアプリケーション・メトリクスの管理に使用されるアプリケーション<code>MetricRegistry</code>を保持します。</span> <span class="merged" id="all.40hr0V.spl6" title="原文 : Helidon returns these metrics in response to a /metrics/application REST request.">Helidonは、<code>/metrics/application</code> RESTリクエストに応じてこれらのメトリクスを返します。</span> </p>

<p><span class="merged" id="all.3aWpy8.spl1" title="原文 : In all of these examples, the scope and lifetime of the metric is at the application-level.">これらすべての例で、メトリックの有効範囲と存続期間はアプリケーション・レベルです。</span> <span class="merged" id="all.3aWpy8.spl2" title="原文 : Each metric, except Gauge, is updated in response to a REST request and the contents of the metric is cumulative."><code>Gauge</code>を除く各メトリックは、RESTリクエストに応じて更新され、メトリックの内容は累積されます。</span> </p>


<h4 id="_counter_metric"><span class="merged" id="all.2OEEPy" title="原文 : Counter Metric">カウンタ・メトリック</span></h4>
<div class="section">
<p><span class="merged" id="all.2pzM0R.spl1" title="原文 : The Counter metric is a monotonically increasing or decreasing number."><code>Counter</code>メトリックは、単調に増加または減少する数値です。</span> <span class="merged" id="all.2pzM0R.spl2" title="原文 : The following example will demonstrate how to use a Counter to track the number of times the /cards endpoint is called.">次の例では、<code>Counter</code>を使用して<code>/cards</code>エンドポイントがコールされた回数を追跡する方法を示します。</span> </p>

<markup
lang="java"
title="Create a new class named <code>GreetingCards</code> with the following code:"
>package io.helidon.examples.quickstart.se;

import io.helidon.metrics.RegistryFactory;
import io.helidon.webserver.Routing;
import io.helidon.webserver.ServerRequest;
import io.helidon.webserver.ServerResponse;
import io.helidon.webserver.Service;
import java.util.Collections;
import javax.json.Json;
import javax.json.JsonBuilderFactory;
import javax.json.JsonObject;
import org.eclipse.microprofile.metrics.Counter;  <span class="conum" data-value="1" />
import org.eclipse.microprofile.metrics.MetricRegistry;

public class GreetingCards implements Service {

  private static final JsonBuilderFactory JSON = Json.createBuilderFactory(Collections.emptyMap());
  private final Counter cardCounter;   <span class="conum" data-value="2" />

  GreetingCards() {
    RegistryFactory metricsRegistry = RegistryFactory.getInstance();
    MetricRegistry appRegistry = metricsRegistry.getRegistry(MetricRegistry.Type.APPLICATION);
    cardCounter = appRegistry.counter("cardCount");  <span class="conum" data-value="3" />
  }

  @Override
  public void update(Routing.Rules rules) {
    rules.get("/", this::getDefaultMessageHandler);
  }

  private void getDefaultMessageHandler(ServerRequest request, ServerResponse response) {
    cardCounter.inc();   <span class="conum" data-value="4" />
    sendResponse(response, "Here are some cards ...");
  }

  private void sendResponse(ServerResponse response, String msg) {
    JsonObject returnObject = JSON.createObjectBuilder().add("message", msg).build();
    response.send(returnObject);
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3kHtgT" title="原文 : Import metrics classes.">メトリクス・クラスをインポートします。</span></li>
<li data-value="2"><span class="merged" id="all.3nMhnq" title="原文 : Declare a Counter member variable."><code>Counter</code>メンバー変数を宣言します。</span></li>
<li data-value="3"><span class="merged" id="all.4Fsdvx.spl1" title="原文 : Create and register the Counter metric in the MetricRegistry."><code>Counter</code>メトリックを作成し、<code>MetricRegistry</code>に登録します。</span> <span class="merged" id="all.4Fsdvx.spl2" title="原文 : This Counter will exist for the lifetime of the application.">この<code>Counter</code>は、アプリケーションの存続期間中存在します。</span> </li>
<li data-value="4"><span class="merged" id="all.27NfC3" title="原文 : Increment the count.">カウントを増分します。</span></li>
</ul>
<markup
lang="java"
title="Update the <code>Main.createRouting</code> method as follows:"
>    private static Routing createRouting(Config config) {

        MetricsSupport metrics = MetricsSupport.create();
        GreetService greetService = new GreetService(config);

        return Routing.builder()
                .register(JsonSupport.create())
                .register(metrics)
                .register("/greet", greetService)
                .register("/cards", new GreetingCards()) <span class="conum" data-value="1" />
            .build();
    }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1fPrhT.spl1" title="原文 : Add the GreetingCards service to the Routing.builder."><code>GreetingCards</code>サービスを<code>Routing.builder</code>に追加します。</span> <span class="merged" id="all.1fPrhT.spl2" title="原文 : Helidon will route any REST requests with the /cards root path to the GreetingCards service.">Helidonは、<code>/cards</code>ルート・パスを持つRESTリクエストを<code>GreetingCards</code>サービスにルーティングします。</span> </li>
</ul>
<markup
lang="bash"
title="Build and run the application, then invoke the endpoints below:"
>curl http://localhost:8080/cards
curl -H "Accept: application/json"  http://localhost:8080/metrics/application</markup>

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

<h4 id="_meter_metric"><span class="merged" id="all.FazPp" title="原文 : Meter Metric">メーター・メトリック</span></h4>
<div class="section">
<p><span class="merged" id="all.Xt9z6.spl1" title="原文 : The Meter metric is used to measure throughput, the number of times an event occurs within a certain time period."><code>Meter</code>メトリックは、一定期間内にイベントが発生した回数であるスループットの測定に使用されます。</span> <span class="merged" id="all.Xt9z6.spl2" title="原文 : When a Meter object is created, its internal clock starts running."><code>Meter</code>オブジェクトが作成されると、その内部クロックが実行を開始します。</span> <span class="merged" id="all.Xt9z6.spl3" title="原文 : That clock is used to calculate the various rates stored this metric.">このクロックは、このメトリックに格納されている様々な割合の計算に使用されます。</span> <span class="merged" id="all.Xt9z6.spl4" title="原文 : The Meter also includes the count field from the Counter metric."><code>Meter</code>には、<code>Counter</code>メトリックの<code>count</code>フィールドも含まれています。</span> <span class="merged" id="all.Xt9z6.spl5" title="原文 : When you mark an event, the count is incremented.">イベントをマークすると、カウントが増分されます。</span> </p>

<p><span class="merged" id="all.48t9jp" title="原文 : The following example marks an event each time the /cards endpoint is called.">次の例では、<code>/cards</code>エンドポイントがコールされるたびにイベントをマークします。</span></p>

<markup
lang="java"
title="Update the <code>GreetingCards</code> class with the following code:"
>package io.helidon.examples.quickstart.se;

import io.helidon.metrics.RegistryFactory;
import io.helidon.webserver.Routing;
import io.helidon.webserver.ServerRequest;
import io.helidon.webserver.ServerResponse;
import io.helidon.webserver.Service;
import java.util.Collections;
import javax.json.Json;
import javax.json.JsonBuilderFactory;
import javax.json.JsonObject;
import org.eclipse.microprofile.metrics.Meter; <span class="conum" data-value="1" />
import org.eclipse.microprofile.metrics.MetricRegistry; <span class="conum" data-value="1" />

public class GreetingCards implements Service {

  private static final JsonBuilderFactory JSON = Json.createBuilderFactory(Collections.emptyMap());
  private final Meter cardMeter; <span class="conum" data-value="2" />

  GreetingCards() {
    RegistryFactory metricsRegistry = RegistryFactory.getInstance();
    MetricRegistry appRegistry = metricsRegistry.getRegistry(MetricRegistry.Type.APPLICATION);
    cardMeter = appRegistry.meter("cardMeter"); <span class="conum" data-value="3" />
  }

  @Override
  public void update(Routing.Rules rules) {
    rules.get("/", this::getDefaultMessageHandler);
  }

  private void getDefaultMessageHandler(ServerRequest request, ServerResponse response) {
    cardMeter.mark(); <span class="conum" data-value="4" />
    sendResponse(response, "Here are some cards ...");
  }

  private void sendResponse(ServerResponse response, String msg) {
    JsonObject returnObject = JSON.createObjectBuilder().add("message", msg).build();
    response.send(returnObject);
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3kHtgT.1" title="原文 : Import metrics classes.">メトリクス・クラスをインポートします。</span></li>
<li data-value="2"><span class="merged" id="all.kkkk5" title="原文 : Declare a Meter member variable."><code>Meter</code>メンバー変数を宣言します。</span></li>
<li data-value="3"><span class="merged" id="all.2LVtVS" title="原文 : Create and register the Meter metric in the MetricRegistry."><code>Meter</code>メトリックを作成し、<code>MetricRegistry</code>に登録します。</span></li>
<li data-value="4"><span class="merged" id="all.37qHOb" title="原文 : Mark the occurrence of an event.">イベントの発生をマークします。</span></li>
</ul>
<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.1ElpIN" title="原文 : Note: you can specify a count parameter such as mark(100) to mark multiple events.">ノート: <code>mark(100)</code>などのカウント・パラメータを指定して、複数のイベントをマークできます。</span></p>
</div>
<markup
lang="bash"
title="Build and run the application, then invoke the endpoints below:"
>curl http://localhost:8080/cards
curl http://localhost:8080/cards
curl http://localhost:8080/cards
curl -H "Accept: application/json"  http://localhost:8080/metrics/application</markup>

<markup
lang="json"
title="JSON response:"
>{
  "cardMeter": { <span class="conum" data-value="1" />
    "count": 3, <span class="conum" data-value="2" />
    "meanRate": 0.17566568722974535,
    "oneMinRate": 0.04413761384322548,
    "fiveMinRate": 0.009753212003766951,
    "fifteenMinRate": 0.0033056752265846544
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2b7Qp" title="原文 : The Meter metric has a set of fields to show various rates, along with the count."><code>Meter</code>メトリックには、様々な率を表示する一連のフィールドと件数があります。</span></li>
<li data-value="2"><span class="merged" id="all.3gPgVc" title="原文 : The /cards endpoint was called three times."><code>/cards</code>エンドポイントが3回呼び出されました。</span></li>
</ul>
</div>

<h4 id="_timer_metric"><span class="merged" id="all.1QBqyD" title="原文 : Timer Metric">タイマー・メトリック</span></h4>
<div class="section">
<p><span class="merged" id="all.1qtpWk" title="原文 : (See also Simple timer metric.)">(<router-link @click.native="this.scrollFix('#simple_timer_metric')" to="#simple_timer_metric">「単純タイマー・メトリック」</router-link>も参照してください。)</span></p>

<p><span class="merged" id="all.1WCZZ7.spl1" title="原文 : The Timer metric aggregates durations, provides timing statistics, and includes throughput statistics using an internal Meter metric."><code>Timer</code>メトリックは、期間を集計し、タイミング統計を提供し、内部<code>Meter</code>メトリックを使用したスループット統計を含みます。</span> <span class="merged" id="all.1WCZZ7.spl2" title="原文 : The Timer measures duration in nanoseconds."><code>Timer</code>は、期間をナノ秒単位で測定します。</span> <span class="merged" id="all.1WCZZ7.spl3" title="原文 : In the following example, a Timer metric is used to measure the duration of a method&rsquo;s execution.">次の例では、<code>Timer</code>メトリックを使用してメソッドの実行期間を測定します。</span> <span class="merged" id="all.1WCZZ7.spl4" title="原文 : Whenever the REST /cards endpoint is called, the Timer will be updated with additional timing information.">REST <code>/cards</code>エンドポイントがコールされるたびに、<code>Timer</code>は追加のタイミング情報で更新されます。</span> </p>

<markup
lang="java"
title="Update the <code>GreetingCards</code> class with the following code:"
>package io.helidon.examples.quickstart.se;

import io.helidon.metrics.RegistryFactory;
import io.helidon.webserver.Routing;
import io.helidon.webserver.ServerRequest;
import io.helidon.webserver.ServerResponse;
import io.helidon.webserver.Service;
import java.util.Collections;
import javax.json.Json;
import javax.json.JsonBuilderFactory;
import javax.json.JsonObject;
import org.eclipse.microprofile.metrics.MetricRegistry; <span class="conum" data-value="1" />
import org.eclipse.microprofile.metrics.Timer;

public class GreetingCards implements Service {

  private static final JsonBuilderFactory JSON = Json.createBuilderFactory(Collections.emptyMap());
  private final Timer cardTimer; <span class="conum" data-value="2" />

  GreetingCards() {
    RegistryFactory metricsRegistry = RegistryFactory.getInstance();
    MetricRegistry appRegistry = metricsRegistry.getRegistry(MetricRegistry.Type.APPLICATION);
    cardTimer = appRegistry.timer("cardTimer"); <span class="conum" data-value="3" />
  }

  @Override
  public void update(Routing.Rules rules) {
    rules.get("/", this::getDefaultMessageHandler);
  }

  private void getDefaultMessageHandler(ServerRequest request, ServerResponse response) {
    Timer.Context timerContext = cardTimer.time(); <span class="conum" data-value="4" />
    sendResponse(response, "Here are some cards ...");
    response.whenSent().thenAccept(res -&gt; timerContext.stop()); <span class="conum" data-value="5" />
  }

  private void sendResponse(ServerResponse response, String msg) {
    JsonObject returnObject = JSON.createObjectBuilder().add("message", msg).build();
    response.send(returnObject);
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3kHtgT.2" title="原文 : Import metrics classes.">メトリクス・クラスをインポートします。</span></li>
<li data-value="2"><span class="merged" id="all.2qFvE0" title="原文 : Declare a Timer member variable."><code>Timer</code>メンバー変数を宣言します。</span></li>
<li data-value="3"><span class="merged" id="all.2fe4jn" title="原文 : Create and register the Timer metric in the MetricRegistry."><code>Timer</code>メトリックを作成し、<code>MetricRegistry</code>に登録します。</span></li>
<li data-value="4"><span class="merged" id="all.4DDsWO" title="原文 : Start the timer.">タイマーを開始します。</span></li>
<li data-value="5"><span class="merged" id="all.17KbZa" title="原文 : Stop the timer.">タイマーを停止します。</span></li>
</ul>
<markup
lang="bash"
title="Build and run the application, then invoke the endpoints below:"
>curl http://localhost:8080/cards
curl -H "Accept: application/json"  http://localhost:8080/metrics/application</markup>

<markup
lang="json"
title="JSON response:"
>{
  "cardTimer": {
    "count": 1,
    "meanRate": 0.03843465264149663, <span class="conum" data-value="1" />
    "oneMinRate": 0.014712537947741825,
    "fiveMinRate": 0.0032510706679223173,
    "fifteenMinRate": 0.0011018917421948848,
    "min": 40876527,  <span class="conum" data-value="2" />
    "max": 40876527,
    "mean": 40876527,
    "stddev": 0.0,
    "p50": 40876527,
    "p75": 40876527,
    "p95": 40876527,
    "p98": 40876527,
    "p99": 40876527,
    "p999": 40876527
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.KROBE" title="原文 : These are the same fields used by Meter.">これらは、<code>Meter</code>で使用されるものと同じフィールドです。</span></li>
<li data-value="2"><span class="merged" id="all.1x4GHK.spl1" title="原文 : These are the Timer fields that measure the duration of the getDefaultMessageHandler method.">これらは、<code>getDefaultMessageHandler</code>メソッドの期間を測定する<code>Timer</code>フィールドです。</span> <span class="merged" id="all.1x4GHK.spl2" title="原文 : Some of these values will change each time you invoke the /cards endpoint.">これらの値の一部は、<code>/cards</code>エンドポイントを呼び出すたびに変更されます。</span> </li>
</ul>
</div>

<h4 id="_histogram_metric"><span class="merged" id="all.1IKHTs" title="原文 : Histogram Metric">ヒストグラム・メトリック</span></h4>
<div class="section">
<p><span class="merged" id="all.3i1Gbr.spl1" title="原文 : The Histogram metric calculates the distribution of a set of values within ranges."><code>Histogram</code>メトリックは、範囲内の値のセットの分布を計算します。</span> <span class="merged" id="all.3i1Gbr.spl2" title="原文 : This metric does not relate to time at all.">このメトリックは、時間にはまったく関連しません。</span> <span class="merged" id="all.3i1Gbr.spl3" title="原文 : The following example will record a set of random numbers in a Histogram metric when the /cards endpoint is invoked.">次の例では、<code>/cards</code>エンドポイントの起動時に、<code>Histogram</code>メトリックに乱数のセットを記録します。</span> </p>

<markup
lang="java"
title="Update the <code>GreetingCards</code> class with the following code:"
>package io.helidon.examples.quickstart.se;

import io.helidon.metrics.RegistryFactory;
import io.helidon.webserver.Routing;
import io.helidon.webserver.ServerRequest;
import io.helidon.webserver.ServerResponse;
import io.helidon.webserver.Service;
import java.util.Collections;
import java.util.Random;
import javax.json.Json;
import javax.json.JsonBuilderFactory;
import javax.json.JsonObject;
import org.eclipse.microprofile.metrics.Histogram; <span class="conum" data-value="1" />
import org.eclipse.microprofile.metrics.MetricRegistry; <span class="conum" data-value="1" />

public class GreetingCards implements Service {

  private static final JsonBuilderFactory JSON = Json.createBuilderFactory(Collections.emptyMap());
  private final Histogram cardHistogram; <span class="conum" data-value="2" />

  GreetingCards() {
    RegistryFactory metricsRegistry = RegistryFactory.getInstance();
    MetricRegistry appRegistry = metricsRegistry.getRegistry(MetricRegistry.Type.APPLICATION);
    cardHistogram = appRegistry.histogram("cardHistogram"); <span class="conum" data-value="3" />
  }

  @Override
  public void update(Routing.Rules rules) {
    rules.get("/", this::getDefaultMessageHandler);
  }

  private void getDefaultMessageHandler(ServerRequest request, ServerResponse response) {

    Random r = new Random();
    for (int i = 0; i &lt; 1000; i++) {  <span class="conum" data-value="4" />
      cardHistogram.update(1 + r.nextInt(25)); <span class="conum" data-value="5" />
    }
    sendResponse(response, "Here are some cards ...");
  }

  private void sendResponse(ServerResponse response, String msg) {
    JsonObject returnObject = JSON.createObjectBuilder().add("message", msg).build();
    response.send(returnObject);
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3kHtgT.3" title="原文 : Import metrics classes.">メトリクス・クラスをインポートします。</span></li>
<li data-value="2"><span class="merged" id="all.3hX3i8" title="原文 : Declare a Histogram member variable."><code>Histogram</code>メンバー変数を宣言します。</span></li>
<li data-value="3"><span class="merged" id="all.3IcwD4" title="原文 : Create and register the Histogram metric in the MetricRegistry."><code>Histogram</code>メトリックを作成し、<code>MetricRegistry</code>に登録します。</span></li>
<li data-value="4"><span class="merged" id="all.1VHvmn" title="原文 : Update the Histogram metric with a random number."><code>Histogram</code>メトリックをランダムな数値で更新します。</span></li>
<li data-value="5"><span class="merged" id="all.1zsHtx" title="原文 : Loop, loading the histogram with numbers.">ループ。数値を使用してヒストグラムをロードします。</span></li>
</ul>
<markup
lang="bash"
title="Build and run the application, then invoke the endpoints below:"
>curl http://localhost:8080/cards
curl -H "Accept: application/json"  http://localhost:8080/metrics/application</markup>

<markup
lang="json"
title="JSON response:"
>{
  "cardHistogram": { <span class="conum" data-value="1" />
    "count": 1000,
    "min": 1,
    "max": 25,
    "mean": 12.743999999999915,
    "stddev": 7.308793607702962,
    "p50": 13.0,
    "p75": 19.0,
    "p95": 24.0,
    "p98": 25.0,
    "p99": 25.0,
    "p999": 25.0
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.tuj6O.spl1" title="原文 : This is the histogram data.">これはヒストグラム・データです。</span> <span class="merged" id="all.tuj6O.spl2" title="原文 : Some of these values will change each time you invoke the /cards endpoint.">これらの値の一部は、<code>/cards</code>エンドポイントを呼び出すたびに変更されます。</span> </li>
</ul>
</div>

<h4 id="_gauge_metric"><span class="merged" id="all.46RJ4W.1" title="原文 : Gauge Metric">ゲージ・メトリック</span></h4>
<div class="section">
<p><span class="merged" id="all.s5TgQ.spl1" title="原文 : The Gauge metric measures a discreet value at a point in time, such as a temperature."><code>Gauge</code>メトリックは、ある時点での温度などの区別値を測定します。</span> <span class="merged" id="all.s5TgQ.spl2" title="原文 : The metric is not normally tied to a REST endpoint, rather it should be registered during application startup.">通常、メトリックはRESTエンドポイントに関連付けられませんが、アプリケーションの起動時に登録する必要があります。</span> <span class="merged" id="all.s5TgQ.spl3" title="原文 : When the /metrics/application endpoint is invoked, Helidon will call the getValue method of each registered Gauge."><code>/metrics/application</code>エンドポイントが呼び出されると、Helidonは登録されている各<code>Gauge</code>の<code>getValue</code>メソッドを呼び出します。</span> <span class="merged" id="all.s5TgQ.spl4" title="原文 : The following example demonstrates how a Gauge is used to get the current temperature.">次の例では、<code>Gauge</code>を使用して現在の温度を取得する方法を示します。</span> </p>

<markup
lang="java"
title="Add new imports to <code>Main.java</code> and replace the <code>Main.createRouting</code> method with the following code:"
>import io.helidon.metrics.RegistryFactory;
import java.util.Random;
import org.eclipse.microprofile.metrics.Gauge;
import org.eclipse.microprofile.metrics.MetricRegistry;

...

    private static Routing createRouting(Config config) {

      MetricsSupport metrics = MetricsSupport.create();

      RegistryFactory metricsRegistry = RegistryFactory.getInstance();
      MetricRegistry appRegistry = metricsRegistry.getRegistry(MetricRegistry.Type.APPLICATION);
      appRegistry.register("temperature", (Gauge&lt;Integer&gt;)() -&gt;  new Random().nextInt(100)); <span class="conum" data-value="1" />

      GreetService greetService = new GreetService(config);
      return Routing.builder()
          .register(JsonSupport.create())
          .register(metrics)                  // Metrics at "/metrics"
          .register("/greet", greetService)
          .register("/cards", new GreetingCards())
          .build();
    }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1HjxiS" title="原文 : Register the Gauge, providing a lambda function that will return a random temperature.">ランダムな温度を返すラムダ関数を提供して、<code>Gauge</code>を登録します。</span></li>
</ul>
<markup
lang="java"
title="Update the <code>GreetingCards</code> class with the following code to use the <code>Counter</code> metric which will simplify the JSON output:"
>package io.helidon.examples.quickstart.se;

import io.helidon.metrics.RegistryFactory;
import io.helidon.webserver.Routing;
import io.helidon.webserver.ServerRequest;
import io.helidon.webserver.ServerResponse;
import io.helidon.webserver.Service;
import java.util.Collections;
import javax.json.Json;
import javax.json.JsonBuilderFactory;
import javax.json.JsonObject;
import org.eclipse.microprofile.metrics.Counter;
import org.eclipse.microprofile.metrics.MetricRegistry;

public class GreetingCards implements Service {

  private static final JsonBuilderFactory JSON = Json.createBuilderFactory(Collections.emptyMap());
  private final Counter cardCounter;

  GreetingCards() {
    RegistryFactory metricsRegistry = RegistryFactory.getInstance();
    MetricRegistry appRegistry = metricsRegistry.getRegistry(MetricRegistry.Type.APPLICATION);
    cardCounter = appRegistry.counter("cardCount");
  }

  @Override
  public void update(Routing.Rules rules) {
    rules.get("/", this::getDefaultMessageHandler);
  }

  private void getDefaultMessageHandler(ServerRequest request, ServerResponse response) {
    cardCounter.inc();   <span class="conum" data-value="4" />
    sendResponse(response, "Here are some cards ...");
  }

  private void sendResponse(ServerResponse response, String msg) {
    JsonObject returnObject = JSON.createObjectBuilder().add("message", msg).build();
    response.send(returnObject);
  }
}</markup>

<markup
lang="bash"
title="Build and run the application, then invoke the endpoints below:"
>curl http://localhost:8080/cards
curl -H "Accept: application/json"  http://localhost:8080/metrics/application</markup>

<markup
lang="json"
title="JSON response from <code>/metrics/application</code>:"
>{
  "cardCount": 1,
  "temperature": 11 <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1OI1D6.spl1" title="原文 : The current temperature is returned.">現在の温度が返されます。</span> <span class="merged" id="all.1OI1D6.spl2" title="原文 : Invoke the /metrics/application endpoint again and you should get a different value."><code>/metrics/application</code>エンドポイントを再度起動すると、別の値が表示されます。</span> </li>
</ul>
</div>

<h4 id="simple_timer_metric"><span class="merged" id="all.Dzp9c" title="原文 : Simple Timer Metric">簡易タイマー・メトリック</span></h4>
<div class="section">
<p><span class="merged" id="all.43FWjo.spl1" title="原文 : The SimpleTimer metric counts invocations and accumulates duration (in seconds)."><code>SimpleTimer</code>メトリックは、呼出しをカウントし、期間(秒単位)を累積します。</span> <span class="merged" id="all.43FWjo.spl2" title="原文 : In the following example, a SimpleTimer metric is used to count and measure the duration of a method&rsquo;s execution.">次の例では、<code>SimpleTimer</code>メトリックを使用して、メソッドの実行時間をカウントおよび測定します。</span> <span class="merged" id="all.43FWjo.spl3" title="原文 : Whenever the REST /cards endpoint is called, the SimpleTimer updates its count and total elapsed time.">REST <code>/cards</code>エンドポイントがコールされるたびに、<code>SimpleTimer</code>はその数と合計経過時間を更新します。</span> </p>

<markup
lang="java"
title="Update the <code>GreetingCards</code> class with the following code:"
>package io.helidon.examples.quickstart.se;

import io.helidon.metrics.RegistryFactory;
import io.helidon.webserver.Routing;
import io.helidon.webserver.ServerRequest;
import io.helidon.webserver.ServerResponse;
import io.helidon.webserver.Service;
import java.util.Collections;
import javax.json.Json;
import javax.json.JsonBuilderFactory;
import javax.json.JsonObject;
import org.eclipse.microprofile.metrics.MetricRegistry; <span class="conum" data-value="1" />
import org.eclipse.microprofile.metrics.SimpleTimer;

public class GreetingCards implements Service {

  private static final JsonBuilderFactory JSON = Json.createBuilderFactory(Collections.emptyMap());
  private final SimpleTimer cardTimer; <span class="conum" data-value="2" />

  GreetingCards() {
    RegistryFactory metricsRegistry = RegistryFactory.getInstance();
    MetricRegistry appRegistry = metricsRegistry.getRegistry(MetricRegistry.Type.APPLICATION);
    cardTimer = appRegistry.simpleTimer("cardSimpleTimer"); <span class="conum" data-value="3" />
  }

  @Override
  public void update(Routing.Rules rules) {
    rules.get("/", this::getDefaultMessageHandler);
  }

  private void getDefaultMessageHandler(ServerRequest request, ServerResponse response) {
    cardTimer.time(() -&gt; sendResponse(response, "Here are some cards ...")); <span class="conum" data-value="4" />
  }

  private void sendResponse(ServerResponse response, String msg) {
    JsonObject returnObject = JSON.createObjectBuilder().add("message", msg).build();
    response.send(returnObject);
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4S4AFH" title="原文 : Import metrics classes, particularly the SimpleTimer interface for this example.">メトリクス・クラス、特にこの例の<code>SimpleTimer</code>インタフェースをインポートします。</span></li>
<li data-value="2"><span class="merged" id="all.3irmfk" title="原文 : Declare a SimpleTimer member variable."><code>SimpleTimer</code>メンバー変数を宣言します。</span></li>
<li data-value="3"><span class="merged" id="all.3RH8we" title="原文 : Create and register the SimpleTimer metric in the MetricRegistry."><code>SimpleTimer</code>メトリックを作成し、<code>MetricRegistry</code>に登録します。</span></li>
<li data-value="4"><span class="merged" id="all.FwePW" title="原文 : Wrap the business logic in the simple timer&rsquo;s time method which updates the count and the total elapsed time.">カウントおよび合計経過時間を更新する単純なタイマーの<code>time</code>メソッドでビジネス・ロジックをラップします。</span></li>
</ul>
<markup
lang="bash"
title="Build and run the application, then invoke the endpoints below:"
>curl http://localhost:8080/cards
curl -H "Accept: application/json"  http://localhost:8080/metrics/application</markup>

<markup
lang="json"
title="JSON response:"
>{
  "cardSimpleTimer":
    {
      "count":1, <span class="conum" data-value="1" />
      "elapsedTime":0.034274025 <span class="conum" data-value="2" />
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.uefTf" title="原文 : How many times the getDefaultMessageHandler method ran."><code>getDefaultMessageHandler</code>メソッドの実行回数。</span></li>
<li data-value="2"><span class="merged" id="all.2QWdN2" title="原文 : Cumulative time spent in the getDefaultMessageHandler method during its executions.">実行中に<code>getDefaultMessageHandler</code>メソッドで費やされた累積時間。</span></li>
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
          image: helidon-metrics-se
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 8080</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3s9wLQ.7" title="原文 : A service of type NodePort that serves the default routes on port 8080.">ポート<code>8080</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
<li data-value="2"><span class="merged" id="all.BOd0W.2" title="原文 : An annotation that will allow Prometheus to discover and scrape the application pod.">Prometheusがアプリケーションポッドを検出してスクレイプできるようにする注釈。</span></li>
<li data-value="3"><span class="merged" id="all.1dhwFj.7" title="原文 : A deployment with one replica of a pod.">ポッドの1つのレプリカを持つデプロイメント。</span></li>
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
<li data-value="1"><span class="merged" id="all.3Q1f91.5" title="原文 : A service of type NodePort that serves the default routes on port 31143.">ポート<code>31143</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
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
<p><span class="merged" id="all.4Rq1WH.2.spl1" title="原文 : The metrics service that you just deployed into Kubernetes is already annotated with prometheus.io/scrape:.">Kubernetesにデプロイしたメトリクス・サービスには、すでに<code>prometheus.io/scrape:</code>の注釈が付いています。</span> <span class="merged" id="all.4Rq1WH.2.spl2" title="原文 : This will allow Prometheus to discover the service and scrape the metrics.">これにより、Prometheusはサービスを検出し、メトリクスをスクレイプできます。</span> <span class="merged" id="all.4Rq1WH.2.spl3" title="原文 : In this exercise, you will install Prometheus into Kubernetes, then verify that it discovered the Helidon metrics in your application.">この演習では、PrometheusをKubernetesにインストールし、アプリケーションでHelidonメトリクスが検出されたことを確認します。</span> </p>

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

<p><span class="merged" id="all.2jbZil.2.spl1" title="原文 : Now open your browser and navigate to http://localhost:7090/targets.">ブラウザを開き、<code><a href="http://localhost:7090/targets" id="" target="_blank" >http://localhost:7090/targets</a></code>に移動します。</span> <span class="merged" id="all.2jbZil.2.spl2" title="原文 : Search for helidon on the page and you will see your Helidon application as one of the Prometheus targets.">ページでhelidonを検索すると、Prometheusターゲットの一部としてHelidonアプリケーションが表示されます。</span> </p>

</div>

<h4 id="_final_cleanup"><span class="merged" id="all.1Bcn6e.2" title="原文 : Final Cleanup">最終クリーンアップ</span></h4>
<div class="section">
<p><span class="merged" id="all.HBnIV.5" title="原文 : You can now delete the Kubernetes resources that were just created during this example.">これで、この例で作成したKubernetesリソースを削除できます。</span></p>

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

<h3 id="_summary"><span class="merged" id="all.1nTCR.10"  title="原文:: Summary">サマリー</span></h3>
<div class="section">
<p><span class="merged" id="all.AGq8p" title="原文 : This guide demonstrated how to use metrics in a Helidon SE application using various combinations of metrics and scopes.">このガイドでは、メトリクスとスコープの様々な組合せを使用して、Helidon SEアプリケーションでメトリクスを使用する方法について説明しました。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3Mkxqz.1" title="原文 : Access metrics for all three scopes: base, vendor, and application">3つのスコープすべてのアクセス・メトリクス: ベース、ベンダーおよびアプリケーション</span></p>

</li>
<li>
<p><span class="merged" id="all.ZrEP5" title="原文 : Configure metrics that are updated by the application when an application REST endpoint is invoked">アプリケーションRESTエンドポイントの起動時にアプリケーションによって更新されるメトリクスを構成</span></p>

</li>
<li>
<p><span class="merged" id="all.491Nsz" title="原文 : Configure a Gauge metric"><code>Gauge</code>メトリックの構成</span></p>

</li>
<li>
<p><span class="merged" id="all.1cNgkv.1" title="原文 : Integrate Helidon metrics with Kubernetes and Prometheus">HelidonメトリクスとKubernetesおよびPrometheusの統合</span></p>

</li>
</ul>
<p><span class="merged" id="all.UfWha.6" title="原文 : Refer to the following references for additional information:">詳細は、次のリファレンスを参照してください:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.22JpPF" title="原文 : MicroProfile Metrics specification at https://github.com/eclipse/microprofile-metrics/releases/tag/1.1"><a href="https://github.com/eclipse/microprofile-metrics/releases/tag/1.1" id="" target="_blank" >https://github.com/eclipse/microprofile-metrics/releases/tag/1.1</a>のMicroProfileメトリクス仕様</span></p>

</li>
<li>
<p><span class="merged" id="all.1zpGk5" title="原文 : MicroProfile Metrics Javadoc at https://javadoc.io/doc/org.eclipse.microprofile.metrics/microprofile-metrics-api/1.1.1"><a href="https://javadoc.io/doc/org.eclipse.microprofile.metrics/microprofile-metrics-api/1.1.1" id="" target="_blank" >https://javadoc.io/doc/org.eclipse.microprofile.metrics/microprofile-metrics-api/1.1.1</a>のMicroProfileメトリクスJavadoc</span></p>

</li>
<li>
<p><span class="merged" id="all.1m3bP8.6" title="原文 : Helidon Javadoc at https://helidon.io/docs/latest/apidocs/index.html?overview-summary.html"><a href="https://helidon.io/docs/latest/apidocs/index.html?overview-summary.html" id="" target="_blank" >https://helidon.io/docs/latest/apidocs/index.html?overview-summary.html</a>のHelidon Javadoc</span></p>

</li>
</ul>
</div>
</div>
</doc-view>
