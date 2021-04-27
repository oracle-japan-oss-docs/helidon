<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3LjiKk" title="原文 : Helidon SE Metrics Guide">Helidon SEメトリック・ガイド</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1NBhHV" title="原文 : This guide describes how to create a sample Helidon SE project that can be used to run some basic examples using both built-in and custom metrics.">このガイドでは、組込みメトリックとカスタム・メトリックの両方を使用していくつかの基本的な例を実行するために使用できるサンプルHelidon SEプロジェクトの作成方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_what_you_need"><span class="merged" id="all.mQ2U1.10"  title="原文:: What you need">必要事項</span></h2>
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
<td class=""><span class="merged" id="all.wqDOs.6" title="原文 : About 30 minutes">約30分</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.27GIMH.16" title="原文 : Helidon Prerequisites"><router-link to="/about/03_prerequisites">Helidonの前提条件</router-link></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1E7KLE.1"  title="原文:: Helm"><a href="https://github.com/helm/helm" id="" target="_blank" >Helm</a></span></td>
</tr>
</tbody>
</table>
</div>

<h3 id="_create_a_sample_helidon_se_project"><span class="merged" id="all.2hM3y0.1" title="原文 : Create a sample Helidon SE project">サンプルHelidon SEプロジェクトの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.36DQ1d.1" title="原文 : Use the Helidon SE Maven archetype to create a simple project that can be used for the examples in this guide.">Helidon SE Maven原型を使用して、このガイドの例で使用できる単純なプロジェクトを作成します。</span></p>

<markup
lang="bash"
title="Maven原型の実行"
>mvn -U archetype:generate -DinteractiveMode=false \
    -DarchetypeGroupId=io.helidon.archetypes \
    -DarchetypeArtifactId=helidon-quickstart-se \
    -DarchetypeVersion=2.2.1-SNAPSHOT \
    -DgroupId=io.helidon.examples \
    -DartifactId=helidon-quickstart-se \
    -Dpackage=io.helidon.examples.quickstart.se</markup>

</div>

<h3 id="_using_the_built_in_metrics"><span class="merged" id="all.43ESSC.1" title="原文 : Using the built-in metrics">組込みメトリックの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.3Kl5Gc.spl1" title="原文 : Helidon provides three scopes of metrics: base, vendor, and application.">Helidonには、3つのメトリック・スコープが用意されています: ベース、ベンダーおよびアプリケーション。</span> <span class="merged" id="all.3Kl5Gc.spl2" title="原文 : Here are the metric endpoints:">メトリック・エンドポイントは次のとおりです:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.4HMomk.1" title="原文 : /metrics/base - Base metrics data as specified by the MicroProfile Metrics specification."><code>/metrics/base</code> - MicroProfileメトリック仕様で指定されているベース・メトリック・データ。</span>

</li>
<li>
<span class="merged" id="all.3CsSgu.1" title="原文 : /metrics/vendor - Helidon-specific metrics data."><code>/metrics/vendor</code> - Helidon固有のメトリック・データ。</span>

</li>
<li>
<span class="merged" id="all.3A3wVX.1" title="原文 : /metrics/application - Application-specific metrics data."><code>/metrics/application</code> - アプリケーション固有のメトリック・データ。</span>

</li>
</ol>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.4WGU6S.1" title="原文 : The /metrics endpoint will return data for all scopes."><code>/metrics</code>エンドポイントは、すべてのスコープのデータを返します。</span></p>
</div>
<p><span class="merged" id="all.5kIvs.spl1" title="原文 : The following example will demonstrate how to use the built-in metrics.">次の例では、組込みメトリックの使用方法を示します。</span> <span class="merged" id="all.5kIvs.spl2" title="原文 : All examples are executed from the root directory of your project (helidon-quickstart-se).">すべての例は、プロジェクトのルート・ディレクトリ(helidon-quickstart-se)から実行されます。</span> <span class="merged" id="all.5kIvs.spl3" title="原文 : The generated source code is already configured for both metrics and health-checks, but the following example removes health-checks.">生成されたソース・コードはメトリックとヘルス・チェックの両方に対してすでに構成されていますが、次の例ではヘルス・チェックを削除します。</span> </p>

<markup
lang="xml"
title="メトリックの依存性がプロジェクトのpom.xmlファイルにすでに存在することを確認します:"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.metrics&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-metrics&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<markup
lang="java"
title="<code>Main.createRouting</code>メソッドを次のコードに置き換えます:"
>    private static Routing createRouting(Config config) {

      GreetService greetService = new GreetService(config);

      return Routing.builder()
          .register(MetricsSupport.create()) <span class="conum" data-value="1" />
          .register("/greet", greetService)
          .build();
    }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.eiwOb" title="原文 : Register the built-in base and vendor metrics.">組込みのベース・メトリックおよびベンダー・メトリックを登録します。</span></li>
</ul>
<markup
lang="bash"
title="ユニット・テストをスキップしてアプリケーションをビルドし、実行します:"
>mvn package -DskipTests=true
java -jar target/helidon-quickstart-se.jar</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.37bL9E.1.spl1" title="原文 : Metrics can be returned in either text format (the default), or JSON.">メトリックは、テキスト形式(デフォルト)またはJSONのいずれかで返すことができます。</span> <span class="merged" id="all.37bL9E.1.spl2" title="原文 : The text format uses Prometheus Text Format, see https://prometheus.io/docs/instrumenting/exposition_formats/#text-format-details.">テキスト形式ではPrometheus Text Formatが使用されます。<a href="https://prometheus.io/docs/instrumenting/exposition_formats/#text-format-details" id="" target="_blank" >https://prometheus.io/docs/instrumenting/exposition_formats/#text-format-details</a>を参照してください。</span> </p>
</div>
<markup
lang="bash"
title="新しいターミナル・ウィンドウでメトリック・エンドポイントを確認します:"
>curl http://localhost:8080/metrics</markup>

<markup
lang="text"
title="テキスト・レスポンス:"
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
title="HTTP acceptヘッダーを使用してメトリック・エンドポイントを確認します:"
>curl -H "Accept: application/json"  http://localhost:8080/metrics</markup>

<markup
lang="json"
title="JSONレスポンス:"
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
    "grpc.requests.count": 0,
    "grpc.requests.meter": {
      "count": 0,
      "meanRate": 0.0,
      "oneMinRate": 0.0,
      "fiveMinRate": 0.0,
      "fifteenMinRate": 0.0
    },
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
title="Helidon <code>requests.meter</code>メトリックを取得します:"
>curl -H "Accept: application/json"  http://localhost:8080/metrics/vendor/requests.meter</markup>

<markup
lang="json"
title="JSONレスポンス:"
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
</div>

<h3 id="_metrics_metadata"><span class="merged" id="all.1eMrtK.1" title="原文 : Metrics metadata">メトリック・メタデータ</span></h3>
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
<span class="merged" id="all.1KJjfe.1" title="原文 : type: The type of metric: Counter, Timer, Meter, Histogram, or Gauge.">type: メトリックのタイプ: <code>Counter</code>, <code>Timer</code>, <code>Meter</code>, <code>Histogram</code>、または<code>Gauge</code>。</span>

</li>
</ol>
<p><span class="merged" id="all.2UzLic.1" title="原文 : You can get the metadata for any scope, such as /metrics/base, as shown below:">次に示すように、<code>/metrics/base</code>などの任意のスコープのメタデータを取得できます:</span></p>

<markup
lang="bash"
title="HTTP OPTIONSメソッドを使用してメトリック・メタデータを取得します:"
> curl -X OPTIONS -H "Accept: application/json"  http://localhost:8080/metrics/base</markup>

<markup
lang="json"
title="JSONレスポンス(切捨て):"
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

<h3 id="_application_specific_metrics_data"><span class="merged" id="all.2BGaic.1" title="原文 : Application-specific metrics data">アプリケーション固有のメトリック・データ</span></h3>
<div class="section">
<p><span class="merged" id="all.40hr0V.spl1" title="原文 : This section demonstrates how to use application-specific metrics and integrate them with Helidon.">この項では、アプリケーション固有のメトリックを使用してHelidonと統合する方法について説明します。</span> <span class="merged" id="all.40hr0V.spl2" title="原文 : It is the application&rsquo;s responsibility to create and update the metrics at runtime.">実行時にメトリックを作成および更新するのは、アプリケーションの役割です。</span> <span class="merged" id="all.40hr0V.spl3" title="原文 : The application has complete control over when and how each metric is used.">アプリケーションは、各メトリックの使用時期と使用方法を完全に制御します。</span> <span class="merged" id="all.40hr0V.spl4" title="原文 : For example, an application may use the same counter for multiple methods, or one counter per method.">たとえば、アプリケーションで複数のメソッドに同じカウンタを使用したり、メソッドごとに1つのカウンタを使用できます。</span> <span class="merged" id="all.40hr0V.spl5" title="原文 : Helidon maintains an application MetricRegistry which is used to manage all of the application metrics.">Helidonは、すべてのアプリケーション・メトリックの管理に使用されるアプリケーション<code>MetricRegistry</code>を保持します。</span> <span class="merged" id="all.40hr0V.spl6" title="原文 : Helidon returns these metrics in response to a /metrics/application REST request.">Helidonは、<code>/metrics/application</code> RESTリクエストに応じてこれらのメトリックを返します。</span> </p>

<p><span class="merged" id="all.3aWpy8.spl1" title="原文 : In all of these examples, the scope and lifetime of the metric is at the application-level.">これらすべての例で、メトリックの有効範囲と存続期間はアプリケーション・レベルです。</span> <span class="merged" id="all.3aWpy8.spl2" title="原文 : Each metric, except Gauge, is updated in response to a REST request and the contents of the metric is cumulative."><code>Gauge</code>を除く各メトリックは、RESTリクエストに応じて更新され、メトリックの内容は累積されます。</span> </p>


<h4 id="_counter_metric"><span class="merged" id="all.2R9itw" title="原文 : Counter metric">カウンタ・メトリック</span></h4>
<div class="section">
<p><span class="merged" id="all.2pzM0R.spl1" title="原文 : The Counter metric is a monotonically increasing or decreasing number."><code>Counter</code>メトリックは、単調に増加または減少する数値です。</span> <span class="merged" id="all.2pzM0R.spl2" title="原文 : The following example will demonstrate how to use a Counter to track the number of times the /cards endpoint is called.">次の例では、<code>Counter</code>を使用して<code>/cards</code>エンドポイントがコールされた回数を追跡する方法を示します。</span> </p>

<markup
lang="java"
title="次のコードを使用して、<code>GreetingCards</code>という名前の新しいクラスを作成します:"
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
<li data-value="1"><span class="merged" id="all.3kHtgT" title="原文 : Import metrics classes.">メトリック・クラスをインポートします。</span></li>
<li data-value="2"><span class="merged" id="all.3nMhnq" title="原文 : Declare a Counter member variable."><code>Counter</code>メンバー変数を宣言します。</span></li>
<li data-value="3"><span class="merged" id="all.4Fsdvx.spl1" title="原文 : Create and register the Counter metric in the MetricRegistry."><code>Counter</code>メトリックを作成し、<code>MetricRegistry</code>に登録します。</span> <span class="merged" id="all.4Fsdvx.spl2" title="原文 : This Counter will exist for the lifetime of the application.">この<code>Counter</code>は、アプリケーションの存続期間中存在します。</span> </li>
<li data-value="4"><span class="merged" id="all.27NfC3" title="原文 : Increment the count.">カウントを増分します。</span></li>
</ul>
<markup
lang="java"
title="<code>Main.createRouting</code>メソッドを次のように更新します:"
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
title="アプリケーションをビルドして実行し、次のエンドポイントを呼び出します:"
>curl http://localhost:8080/cards
curl -H "Accept: application/json"  http://localhost:8080/metrics/application</markup>

<markup
lang="json"
title="JSONレスポンス:"
>{
  "cardCount": 1 <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.b7ySf" title="原文 : The count value is one since the method was called once.">count値は、メソッドが一度呼び出されてからの値です。</span></li>
</ul>
</div>

<h4 id="_meter_metric"><span class="merged" id="all.BQVFr" title="原文 : Meter metric">メーター・メトリック</span></h4>
<div class="section">
<p><span class="merged" id="all.Xt9z6.spl1" title="原文 : The Meter metric is used to measure throughput, the number of times an event occurs within a certain time period."><code>Meter</code>メトリックは、一定期間内にイベントが発生した回数であるスループットの測定に使用されます。</span> <span class="merged" id="all.Xt9z6.spl2" title="原文 : When a Meter object is created, its internal clock starts running."><code>Meter</code>オブジェクトが作成されると、その内部クロックが実行を開始します。</span> <span class="merged" id="all.Xt9z6.spl3" title="原文 : That clock is used to calculate the various rates stored this metric.">このクロックは、このメトリックに格納されている様々な割合の計算に使用されます。</span> <span class="merged" id="all.Xt9z6.spl4" title="原文 : The Meter also includes the count field from the Counter metric."><code>Meter</code>には、<code>Counter</code>メトリックの<code>count</code>フィールドも含まれています。</span> <span class="merged" id="all.Xt9z6.spl5" title="原文 : When you mark an event, the count is incremented.">イベントをマークすると、カウントが増分されます。</span> </p>

<p><span class="merged" id="all.48t9jp" title="原文 : The following example marks an event each time the /cards endpoint is called.">次の例では、<code>/cards</code>エンドポイントがコールされるたびにイベントをマークします。</span></p>

<markup
lang="java"
title="次のコードで<code>GreetingCards</code>クラスを更新します:"
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
<li data-value="1"><span class="merged" id="all.3kHtgT.1" title="原文 : Import metrics classes.">メトリック・クラスをインポートします。</span></li>
<li data-value="2"><span class="merged" id="all.kkkk5" title="原文 : Declare a Meter member variable."><code>Meter</code>メンバー変数を宣言します。</span></li>
<li data-value="3"><span class="merged" id="all.2LVtVS" title="原文 : Create and register the Meter metric in the MetricRegistry."><code>Meter</code>メトリックを作成し、<code>MetricRegistry</code>に登録します。</span></li>
<li data-value="4"><span class="merged" id="all.37qHOb" title="原文 : Mark the occurrence of an event.">イベントの発生をマークします。</span></li>
</ul>
<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.1ElpIN" title="原文 : Note: you can specify a count parameter such as mark(100) to mark multiple events.">ノート: <code>mark(100)</code>などのカウント・パラメータを指定して、複数のイベントをマークできます。</span></p>
</div>
<markup
lang="bash"
title="アプリケーションをビルドして実行し、次のエンドポイントを呼び出します:"
>curl http://localhost:8080/cards
curl http://localhost:8080/cards
curl http://localhost:8080/cards
curl -H "Accept: application/json"  http://localhost:8080/metrics/application</markup>

<markup
lang="json"
title="JSONレスポンス:"
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

<h4 id="_timer_metric"><span class="merged" id="all.1M1ND1" title="原文 : Timer metric">タイマー・メトリック</span></h4>
<div class="section">
<p><span class="merged" id="all.1qtpWk" title="原文 : (See also Simple timer metric.)">(<router-link @click.native="this.scrollFix('#simple_timer_metric')" to="#simple_timer_metric">「単純タイマー・メトリック」</router-link>も参照してください。)</span></p>

<p><span class="merged" id="all.1WCZZ7.spl1" title="原文 : The Timer metric aggregates durations, provides timing statistics, and includes throughput statistics using an internal Meter metric."><code>Timer</code>メトリックは、期間を集計し、タイミング統計を提供し、内部<code>Meter</code>メトリックを使用したスループット統計を含みます。</span> <span class="merged" id="all.1WCZZ7.spl2" title="原文 : The Timer measures duration in nanoseconds."><code>Timer</code>は、期間をナノ秒単位で測定します。</span> <span class="merged" id="all.1WCZZ7.spl3" title="原文 : In the following example, a Timer metric is used to measure the duration of a method&rsquo;s execution.">次の例では、<code>Timer</code>メトリックを使用してメソッドの実行期間を測定します。</span> <span class="merged" id="all.1WCZZ7.spl4" title="原文 : Whenever the REST /cards endpoint is called, the Timer will be updated with additional timing information.">REST <code>/cards</code>エンドポイントがコールされるたびに、<code>Timer</code>は追加のタイミング情報で更新されます。</span> </p>

<markup
lang="java"
title="次のコードで<code>GreetingCards</code>クラスを更新します:"
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
<li data-value="1"><span class="merged" id="all.3kHtgT.2" title="原文 : Import metrics classes.">メトリック・クラスをインポートします。</span></li>
<li data-value="2"><span class="merged" id="all.2qFvE0" title="原文 : Declare a Timer member variable."><code>Timer</code>メンバー変数を宣言します。</span></li>
<li data-value="3"><span class="merged" id="all.2fe4jn" title="原文 : Create and register the Timer metric in the MetricRegistry."><code>Timer</code>メトリックを作成し、<code>MetricRegistry</code>に登録します。</span></li>
<li data-value="4"><span class="merged" id="all.4DDsWO" title="原文 : Start the timer.">タイマーを開始します。</span></li>
<li data-value="5"><span class="merged" id="all.17KbZa" title="原文 : Stop the timer.">タイマーを停止します。</span></li>
</ul>
<markup
lang="bash"
title="アプリケーションをビルドして実行し、次のエンドポイントを呼び出します:"
>curl http://localhost:8080/cards
curl -H "Accept: application/json"  http://localhost:8080/metrics/application</markup>

<markup
lang="json"
title="JSONレスポンス:"
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

<h4 id="_histogram_metric"><span class="merged" id="all.1Bt0GU" title="原文 : Histogram metric">ヒストグラム・メトリック</span></h4>
<div class="section">
<p><span class="merged" id="all.3i1Gbr.spl1" title="原文 : The Histogram metric calculates the distribution of a set of values within ranges."><code>Histogram</code>メトリックは、範囲内の値のセットの分布を計算します。</span> <span class="merged" id="all.3i1Gbr.spl2" title="原文 : This metric does not relate to time at all.">このメトリックは、時間にはまったく関連しません。</span> <span class="merged" id="all.3i1Gbr.spl3" title="原文 : The following example will record a set of random numbers in a Histogram metric when the /cards endpoint is invoked.">次の例では、<code>/cards</code>エンドポイントの起動時に、<code>Histogram</code>メトリックに乱数のセットを記録します。</span> </p>

<markup
lang="java"
title="次のコードで<code>GreetingCards</code>クラスを更新します:"
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
<li data-value="1"><span class="merged" id="all.3kHtgT.3" title="原文 : Import metrics classes.">メトリック・クラスをインポートします。</span></li>
<li data-value="2"><span class="merged" id="all.3hX3i8" title="原文 : Declare a Histogram member variable."><code>Histogram</code>メンバー変数を宣言します。</span></li>
<li data-value="3"><span class="merged" id="all.3IcwD4" title="原文 : Create and register the Histogram metric in the MetricRegistry."><code>Histogram</code>メトリックを作成し、<code>MetricRegistry</code>に登録します。</span></li>
<li data-value="4"><span class="merged" id="all.1VHvmn" title="原文 : Update the Histogram metric with a random number."><code>Histogram</code>メトリックをランダムな数値で更新します。</span></li>
<li data-value="5"><span class="merged" id="all.1zsHtx" title="原文 : Loop, loading the histogram with numbers.">ループ。数値を使用してヒストグラムをロードします。</span></li>
</ul>
<markup
lang="bash"
title="アプリケーションをビルドして実行し、次のエンドポイントを呼び出します:"
>curl http://localhost:8080/cards
curl -H "Accept: application/json"  http://localhost:8080/metrics/application</markup>

<markup
lang="json"
title="JSONレスポンス:"
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

<h4 id="_gauge_metric"><span class="merged" id="all.4F4y8g.1" title="原文 : Gauge metric">ゲージ・メトリック</span></h4>
<div class="section">
<p><span class="merged" id="all.s5TgQ.spl1" title="原文 : The Gauge metric measures a discreet value at a point in time, such as a temperature."><code>Gauge</code>メトリックは、ある時点での温度などの区別値を測定します。</span> <span class="merged" id="all.s5TgQ.spl2" title="原文 : The metric is not normally tied to a REST endpoint, rather it should be registered during application startup.">通常、メトリックはRESTエンドポイントに関連付けられませんが、アプリケーションの起動時に登録する必要があります。</span> <span class="merged" id="all.s5TgQ.spl3" title="原文 : When the /metrics/application endpoint is invoked, Helidon will call the getValue method of each registered Gauge."><code>/metrics/application</code>エンドポイントが呼び出されると、Helidonは登録されている各<code>Gauge</code>の<code>getValue</code>メソッドを呼び出します。</span> <span class="merged" id="all.s5TgQ.spl4" title="原文 : The following example demonstrates how a Gauge is used to get the current temperature.">次の例では、<code>Gauge</code>を使用して現在の温度を取得する方法を示します。</span> </p>

<markup
lang="java"
title="<code>Main.java</code>に新しいインポートを追加し、<code>Main.createRouting</code>メソッドを次のコードに置き換えます:"
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
title="JSON出力を簡略化する<code>Counter</code>メトリックを使用するように、次のコードで<code>GreetingCards</code>クラスを更新します:"
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
title="アプリケーションをビルドして実行し、次のエンドポイントを呼び出します:"
>curl http://localhost:8080/cards
curl -H "Accept: application/json"  http://localhost:8080/metrics/application</markup>

<markup
lang="json"
title="<code>/metrics/application</code>からのJSONレスポンス:"
>{
  "cardCount": 1,
  "temperature": 11 <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1OI1D6.spl1" title="原文 : The current temperature is returned.">現在の温度が返されます。</span> <span class="merged" id="all.1OI1D6.spl2" title="原文 : Invoke the /metrics/application endpoint again and you should get a different value."><code>/metrics/application</code>エンドポイントを再度起動すると、別の値が表示されます。</span> </li>
</ul>
</div>

<h4 id="simple_timer_metric"><span class="merged" id="all.MUDCw" title="原文 : Simple timer metric">単純タイマー・メトリック</span></h4>
<div class="section">
<p><span class="merged" id="all.43FWjo.spl1" title="原文 : The SimpleTimer metric counts invocations and accumulates duration (in seconds)."><code>SimpleTimer</code>メトリックは、呼出しをカウントし、期間(秒単位)を累積します。</span> <span class="merged" id="all.43FWjo.spl2" title="原文 : In the following example, a SimpleTimer metric is used to count and measure the duration of a method&rsquo;s execution.">次の例では、<code>SimpleTimer</code>メトリックを使用して、メソッドの実行時間をカウントおよび測定します。</span> <span class="merged" id="all.43FWjo.spl3" title="原文 : Whenever the REST /cards endpoint is called, the SimpleTimer updates its count and total elapsed time.">REST <code>/cards</code>エンドポイントがコールされるたびに、<code>SimpleTimer</code>はその数と合計経過時間を更新します。</span> </p>

<markup
lang="java"
title="次のコードで<code>GreetingCards</code>クラスを更新します:"
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
<li data-value="1"><span class="merged" id="all.4S4AFH" title="原文 : Import metrics classes, particularly the SimpleTimer interface for this example.">メトリック・クラス、特にこの例の<code>SimpleTimer</code>インタフェースをインポートします。</span></li>
<li data-value="2"><span class="merged" id="all.3irmfk" title="原文 : Declare a SimpleTimer member variable."><code>SimpleTimer</code>メンバー変数を宣言します。</span></li>
<li data-value="3"><span class="merged" id="all.3RH8we" title="原文 : Create and register the SimpleTimer metric in the MetricRegistry."><code>SimpleTimer</code>メトリックを作成し、<code>MetricRegistry</code>に登録します。</span></li>
<li data-value="4"><span class="merged" id="all.FwePW" title="原文 : Wrap the business logic in the simple timer&rsquo;s time method which updates the count and the total elapsed time.">カウントおよび合計経過時間を更新する単純なタイマーの<code>time</code>メソッドでビジネス・ロジックをラップします。</span></li>
</ul>
<markup
lang="bash"
title="アプリケーションをビルドして実行し、次のエンドポイントを呼び出します:"
>curl http://localhost:8080/cards
curl -H "Accept: application/json"  http://localhost:8080/metrics/application</markup>

<markup
lang="json"
title="JSONレスポンス:"
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

<h3 id="_integration_with_kubernetes_and_prometheus"><span class="merged" id="all.3Am6oP.1" title="原文 : Integration with Kubernetes and Prometheus">KubernetesおよびPrometheusとの統合</span></h3>
<div class="section">
<p><span class="merged" id="all.F74DL" title="原文 : The following example shows how to integrate the Helidon SE application with Kubernetes.">次の例は、Helidon SEアプリケーションをKubernetesと統合する方法を示しています。</span></p>

<markup
lang="bash"
title="アプリケーションを停止し、dockerイメージをビルドします:"
>docker build -t helidon-metrics-se .</markup>

<markup
lang="yaml"
title="次の内容で、<code>metrics.yaml</code>という名前のKubernetes YAML仕様を作成します:"
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
apiVersion: extensions/v1beta1
metadata:
  name: helidon-metrics
spec:
  replicas: 1 <span class="conum" data-value="3" />
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
<li data-value="1"><span class="merged" id="all.3s9wLQ.6" title="原文 : A service of type NodePort that serves the default routes on port 8080.">ポート<code>8080</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
<li data-value="2"><span class="merged" id="all.BOd0W.1" title="原文 : An annotation that will allow Prometheus to discover and scrape the application pod.">Prometheusがアプリケーションポッドを検出してスクレイプできるようにする注釈。</span></li>
<li data-value="3"><span class="merged" id="all.1dhwFj.6" title="原文 : A deployment with one replica of a pod.">ポッドの1つのレプリカを持つデプロイメント。</span></li>
</ul>
<markup
lang="bash"
title="アプリケーションを作成し、Kubernetesにデプロイします:"
>kubectl apply -f ./metrics.yaml</markup>

<markup
lang="bash"
title="サービス情報を取得します:"
>kubectl get service/helidon-metrics</markup>

<markup
lang="bash"

>NAME             TYPE       CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
helidon-metrics   NodePort   10.99.159.2   &lt;none&gt;        8080:31143/TCP   8s <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1nRLIq" title="原文 : A service of type NodePort that serves the default routes on port 31143">ポート<code>31143</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス</span></li>
</ul>
<markup
lang="bash"
title="ポート<code>31143</code>を使用してメトリック・エンドポイントを検証します。実際のポートは異なる可能性があります:"
>curl http://localhost:31143/metrics</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.4tlHG.1" title="原文 : Leave the application running in Kubernetes since it will be used for Prometheus integration.">Prometheus統合に使用されるため、アプリケーションはKubernetesで実行したままにします。</span></p>
</div>

<h4 id="_prometheus_integration"><span class="merged" id="all.3WUGFL.1" title="原文 : Prometheus integration">Prometheus統合</span></h4>
<div class="section">
<p><span class="merged" id="all.4Rq1WH.1.spl1" title="原文 : The metrics service that you just deployed into Kubernetes is already annotated with prometheus.io/scrape:.">Kubernetesにデプロイしたメトリック・サービスには、すでに<code>prometheus.io/scrape:</code>の注釈が付いています。</span> <span class="merged" id="all.4Rq1WH.1.spl2" title="原文 : This will allow Prometheus to discover the service and scrape the metrics.">これにより、Prometheusはサービスを検出し、メトリックをスクレイプできます。</span> <span class="merged" id="all.4Rq1WH.1.spl3" title="原文 : In this exercise, you will install Prometheus into Kubernetes, then verify that it discovered the Helidon metrics in your application.">この演習では、PrometheusをKubernetesにインストールし、アプリケーションでHelidonメトリックが検出されたことを確認します。</span> </p>

<markup
lang="bash"
title="Prometheusをインストールし、ポッドの準備ができるまで待ちます:"
>helm install stable/prometheus --name metrics
export POD_NAME=$(kubectl get pods --namespace default -l "app=prometheus,component=server" -o jsonpath="{.items[0].metadata.name}")
kubectl get pod $POD_NAME</markup>

<p><span class="merged" id="all.1XStKB.1.spl1" title="原文 : You will see output similar to the following.">次のような出力が表示されます。</span> <span class="merged" id="all.1XStKB.1.spl2" title="原文 : Repeat the kubectl get pod command until you see 2/2 and Running."><code>2/2</code>および<code>Running</code>が表示されるまで、<code>kubectl get pod</code>コマンドを繰り返します。</span> <span class="merged" id="all.1XStKB.1.spl3" title="原文 : This may take up to one minute.">これには最大1分かかる場合があります。</span> </p>

<markup
lang="bash"

>metrics-prometheus-server-5fc5dc86cb-79lk4   2/2     Running   0          46s</markup>

<markup
lang="bash"
title="サーバーURLにアクセスできるようにポート転送を作成します:"
>kubectl --namespace default port-forward $POD_NAME 7090:9090</markup>

<p><span class="merged" id="all.2jbZil.1.spl1" title="原文 : Now open your browser and navigate to http://localhost:7090/targets.">ブラウザを開き、<code><a href="http://localhost:7090/targets" id="" target="_blank" >http://localhost:7090/targets</a></code>に移動します。</span> <span class="merged" id="all.2jbZil.1.spl2" title="原文 : Search for helidon on the page and you will see your Helidon application as one of the Prometheus targets.">ページでhelidonを検索すると、Prometheusターゲットの一部としてHelidonアプリケーションが表示されます。</span> </p>

</div>

<h4 id="_final_cleanup"><span class="merged" id="all.2coSI0.1" title="原文 : Final cleanup">最終クリーンアップ</span></h4>
<div class="section">
<p><span class="merged" id="all.HBnIV.4" title="原文 : You can now delete the Kubernetes resources that were just created during this example.">これで、この例で作成したKubernetesリソースを削除できます。</span></p>

<markup
lang="bash"
title="Prometheus Kubernetesリソースを削除します:"
>helm delete --purge metrics</markup>

<markup
lang="bash"
title="アプリケーションKubernetesリソースを削除します:"
>kubectl delete -f ./metrics.yaml</markup>

</div>
</div>

<h3 id="_summary"><span class="merged" id="all.1nTCR.7"  title="原文:: Summary">サマリー</span></h3>
<div class="section">
<p><span class="merged" id="all.AGq8p" title="原文 : This guide demonstrated how to use metrics in a Helidon SE application using various combinations of metrics and scopes.">このガイドでは、メトリックとスコープの様々な組合せを使用して、Helidon SEアプリケーションでメトリックを使用する方法について説明しました。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3Mkxqz.1" title="原文 : Access metrics for all three scopes: base, vendor, and application">3つのスコープすべてのアクセス・メトリック: ベース、ベンダーおよびアプリケーション</span></p>

</li>
<li>
<p><span class="merged" id="all.ZrEP5" title="原文 : Configure metrics that are updated by the application when an application REST endpoint is invoked">アプリケーションRESTエンドポイントの起動時にアプリケーションによって更新されるメトリックを構成</span></p>

</li>
<li>
<p><span class="merged" id="all.491Nsz" title="原文 : Configure a Gauge metric"><code>Gauge</code>メトリックの構成</span></p>

</li>
<li>
<p><span class="merged" id="all.1cNgkv.1" title="原文 : Integrate Helidon metrics with Kubernetes and Prometheus">HelidonメトリックとKubernetesおよびPrometheusの統合</span></p>

</li>
</ul>
<p><span class="merged" id="all.UfWha.4" title="原文 : Refer to the following references for additional information:">詳細は、次のリファレンスを参照してください:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.22JpPF" title="原文 : MicroProfile Metrics specification at https://github.com/eclipse/microprofile-metrics/releases/tag/1.1"><a href="https://github.com/eclipse/microprofile-metrics/releases/tag/1.1" id="" target="_blank" >https://github.com/eclipse/microprofile-metrics/releases/tag/ 1.1</a>のMicroProfileメトリック仕様</span></p>

</li>
<li>
<p><span class="merged" id="all.1zpGk5" title="原文 : MicroProfile Metrics Javadoc at https://javadoc.io/doc/org.eclipse.microprofile.metrics/microprofile-metrics-api/1.1.1"><a href="https://javadoc.io/doc/org.eclipse.microprofile.metrics/microprofile-metrics-api/1.1.1" id="" target="_blank" >https://javadoc.io/doc/org.eclipse.microprofile.metrics/microprofile-metrics-api/ 1.1.1</a>のMicroProfileメトリックJavadoc</span></p>

</li>
<li>
<p><span class="merged" id="all.1m3bP8.6" title="原文 : Helidon Javadoc at https://helidon.io/docs/latest/apidocs/index.html?overview-summary.html"><a href="https://helidon.io/docs/latest/apidocs/index.html?overview-summary.html" id="" target="_blank" >https://helidon.io/docs/latest/apidocs/index.html?overview-summary.html</a>のHelidon Javadoc</span></p>

</li>
</ul>
</div>
</div>
</doc-view>
