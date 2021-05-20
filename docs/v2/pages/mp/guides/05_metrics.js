<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.8l1BP" title="原文 : Helidon MP Metrics Guide">Helidon MPメトリクス・ガイド</span></dt>
<dd slot="desc"><p><span class="merged" id="all.11MWoi" title="原文 : This guide describes how to create a sample MicroProfile (MP) project that can be used to run some basic examples using both built-in and custom metrics with Helidon MP.">このガイドでは、Helidon MPで組込みメトリクスとカスタム・メトリクスの両方を使用していくつかの基本的な例を実行するために使用できるサンプルMicroProfile (MP)プロジェクトの作成方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_what_you_need"><span class="merged" id="all.mQ2U1.3"  title="原文:: What you need">必要事項</span></h2>
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
<td class=""><span class="merged" id="all.wqDOs.1" title="原文 : About 30 minutes">約30分</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.27GIMH.4" title="原文 : Helidon Prerequisites"><router-link to="/about/03_prerequisites">Helidonの前提条件</router-link></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1E7KLE"  title="原文:: Helm"><a href="https://github.com/helm/helm" id="" target="_blank" >Helm</a></span></td>
</tr>
</tbody>
</table>
</div>

<h3 id="_create_a_sample_helidon_mp_project"><span class="merged" id="all.1OfUVV.1" title="原文 : Create a sample Helidon MP project">サンプルHelidon MPプロジェクトの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.2oWHvo.1" title="原文 : Use the Helidon MP Maven archetype to create a simple project that can be used for the examples in this guide.">Helidon MP Maven原型を使用して、このガイドの例で使用できる単純なプロジェクトを作成します。</span></p>

<markup
lang="bash"
title="Maven原型を実行します:"
>mvn -U archetype:generate -DinteractiveMode=false \
    -DarchetypeGroupId=io.helidon.archetypes \
    -DarchetypeArtifactId=helidon-quickstart-mp \
    -DarchetypeVersion=2.2.1-SNAPSHOT \
    -DgroupId=io.helidon.examples \
    -DartifactId=helidon-quickstart-mp \
    -Dpackage=io.helidon.examples.quickstart.mp</markup>

</div>

<h3 id="_using_the_built_in_metrics"><span class="merged" id="all.43ESSC" title="原文 : Using the built-in metrics">組込みメトリクスの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.lNNDM.spl1" title="原文 : Helidon provides three scopes of metrics: base, vendor, and application.">Helidonには、3つのメトリクス・スコープが用意されています: ベース、ベンダーおよびアプリケーション。</span> <span class="merged" id="all.lNNDM.spl2" title="原文 : Helidon automatically provides built-in base and vendor metrics.">Helidonには、基本メトリクスとベンダー・メトリクスが自動的に組み込まれています。</span> <span class="merged" id="all.lNNDM.spl3" title="原文 : Applications can use these metrics without additional configuration or code changes.">アプリケーションでは、追加の構成またはコードを変更せずに、これらのメトリクスを使用できます。</span> <span class="merged" id="all.lNNDM.spl4" title="原文 : Here are the metric endpoints:">メトリック・エンドポイントは次のとおりです:</span> </p>

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
<p><span class="merged" id="all.4c7fA5.spl1" title="原文 : The following example will demonstrate how to use the built-in metrics.">次の例では、組込みメトリクスの使用方法を示します。</span> <span class="merged" id="all.4c7fA5.spl2" title="原文 : All examples are executed from the root directory of your project (helidon-quickstart-mp).">すべての例は、プロジェクトのルート・ディレクトリ(helidon-quickstart-mp)から実行されます。</span> </p>

<markup
lang="bash"
title="ユニット・テストをスキップしてアプリケーションをビルドし、実行します:"
>mvn package -DskipTests=true
java -jar target/helidon-quickstart-mp.jar</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.37bL9E.spl1" title="原文 : Metrics can be returned in either text format (the default), or JSON.">メトリクスは、テキスト形式(デフォルト)またはJSONのいずれかで返すことができます。</span> <span class="merged" id="all.37bL9E.spl2" title="原文 : The text format uses Prometheus Text Format, see https://prometheus.io/docs/instrumenting/exposition_formats/#text-format-details.">テキスト形式ではPrometheus Text Formatが使用されます。<a href="https://prometheus.io/docs/instrumenting/exposition_formats/#text-format-details" id="" target="_blank" >https://prometheus.io/docs/instrumenting/exposition_formats/#text-format-details</a>を参照してください。</span> </p>
</div>
<markup
lang="bash"
title="新しいターミナル・ウィンドウでメトリクス・エンドポイントを確認します:"
>curl http://localhost:8080/metrics</markup>

<markup
lang="text"
title="テキスト・レスポンス:"
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
title="HTTP acceptヘッダーを使用してメトリクス・エンドポイントを確認します:"
>curl -H "Accept: application/json"  http://localhost:8080/metrics</markup>

<markup
lang="json"
title="JSONレスポンス:"
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
<p class="admonition-inline"><span class="merged" id="all.3osaGm.spl1" title="原文 : You cannot get the individual fields of a metric.">メトリックの個々のフィールドは取得できません。</span> <span class="merged" id="all.3osaGm.spl2" title="原文 : For example, you cannot target http://localhost:8080/metrics/vendor/requests.meter.count.">たとえば、<a href="http://localhost:8080/metrics/vendor/requests.meter.count" id="" target="_blank" >http://localhost:8080/metrics/vendor/requests.meter.count</a>はターゲットにできません。</span> </p>
</div>

<h4 id="_controlling_rest_request_metrics"><span class="merged" id="all.r28S3" title="原文 : Controlling REST.request metrics"><code>REST.request</code>メトリクスの制御</span></h4>
<div class="section">
<p><span class="merged" id="all.1BUPZE.spl1" title="原文 : Helidon implements the optional family of metrics, all with the name REST.request, as described in the MicroProfile Metrics specification.">Helidonは、<a href="https://download.eclipse.org/microprofile/microprofile-metrics-2.3/microprofile-metrics-spec-2.3.html#_optional_rest" id="" target="_blank" >「MicroProfileメトリクス仕様」</a>で説明されているように、オプションのメトリクス・ファミリをすべて<code>REST.request</code>という名前で実装します。</span> <span class="merged" id="all.1BUPZE.spl2" title="原文 : Each instance is a SimpleTimer with tags class and method identifying exactly which REST endpoint Java method that instance measures.">各インスタンスは、インスタンスが測定するRESTエンドポイントJavaメソッドを正確に識別するタグ<code>class</code>および<code>method</code>を含む<code>SimpleTimer</code>です。</span> </p>

<p><span class="merged" id="all.2q6rwl.spl1" title="原文 : By default, Helidon MP does not enable this feature.">デフォルトでは、Helidon MPはこの機能を有効に<em>しません</em>。</span> <span class="merged" id="all.2q6rwl.spl2" title="原文 : Enable it by editing your application configuration to set metrics.rest-request.enabled to true.">これを有効にするには、アプリケーション構成を編集して<code>metrics.rest-request.enabled</code>を<code>true</code>に設定します。</span> </p>

<p><span class="merged" id="all.2EkcS4.spl1" title="原文 : Note that the applications you generate using the full Helidon archetype do enable this feature in the generated config file.">完全なHelidon原型を使用して生成したアプリケーションでは、生成された構成ファイルでこの機能を有効に<em>します</em>。</span> <span class="merged" id="all.2EkcS4.spl2" title="原文 : You can see the results in the sample output shown in earlier example runs.">結果は、前の実行例に示したサンプル出力で確認できます。</span> </p>

</div>
</div>

<h3 id="_metrics_metadata"><span class="merged" id="all.1eMrtK" title="原文 : Metrics metadata">メトリクス・メタデータ</span></h3>
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
<span class="merged" id="all.1KJjfe" title="原文 : type: The type of metric: Counter, Timer, Meter, Histogram, or Gauge.">type: メトリックのタイプ: <code>Counter</code>, <code>Timer</code>, <code>Meter</code>, <code>Histogram</code>、または<code>Gauge</code>。</span>

</li>
</ol>
<p><span class="merged" id="all.2UzLic" title="原文 : You can get the metadata for any scope, such as /metrics/base, as shown below:">次に示すように、<code>/metrics/base</code>などの任意のスコープのメタデータを取得できます:</span></p>

<markup
lang="bash"
title="HTTP OPTIONSメソッドを使用してメトリクス・メタデータを取得します:"
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

<h3 id="_application_specific_metrics_data"><span class="merged" id="all.2BGaic" title="原文 : Application-specific metrics data">アプリケーション固有のメトリクス・データ</span></h3>
<div class="section">
<p><span class="merged" id="all.3xfFYk.spl1" title="原文 : You can create application-specific metrics and integrate them with Helidon using CDI.">CDIを使用して、アプリケーション固有のメトリクスを作成し、Helidonと統合できます。</span> <span class="merged" id="all.3xfFYk.spl2" title="原文 : To add a new metric, simply annotate the JAX-RS resource with one of the metric annotations.">新しいメトリックを追加するには、JAX-RSリソースにメトリック注釈のいずれかを付けます。</span> <span class="merged" id="all.3xfFYk.spl3" title="原文 : Metrics can be injected at the class, method, and field-levels.">メトリクスは、クラス、メソッドおよびフィールド・レベルでインジェクトできます。</span> <span class="merged" id="all.3xfFYk.spl4" title="原文 : This document shows examples of all three.">このドキュメントでは、3つすべての例を示します。</span> </p>

<p><span class="merged" id="all.1yHQZS.spl1" title="原文 : Helidon will automatically create and register annotated application metrics and store them in the application MetricRegistry, which also contains the metric metadata.">Helidonでは、注釈付きアプリケーション・メトリクスが自動的に作成および登録され、アプリケーション<code>MetricRegistry</code>に格納され、そこでメトリック・メタデータも含まれます。</span> <span class="merged" id="all.1yHQZS.spl2" title="原文 : The metrics will exist for the lifetime of the application.">メトリクスは、アプリケーションの存続期間中存在します。</span> <span class="merged" id="all.1yHQZS.spl3" title="原文 : Each metric annotation has mandatory and optional fields.">各メトリック注釈には、必須フィールドとオプション・フィールドがあります。</span> <span class="merged" id="all.1yHQZS.spl4" title="原文 : The name field, for example, is optional.">たとえば、名前フィールドはオプションです。</span> </p>


<h4 id="_method_level_metrics"><span class="merged" id="all.3cgkpB" title="原文 : Method level metrics">メソッド・レベルのメトリクス</span></h4>
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
title="次のコードを使用して、新しいクラス<code>GreetingCards</code>を作成します:"
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
title="アプリケーションをビルドして実行し、次のアプリケーション・エンドポイントを呼び出します:"
>curl http://localhost:8080/cards
curl http://localhost:8080/cards
curl -H "Accept: application/json"  http://localhost:8080/metrics/application</markup>

<markup
lang="json"
title="JSONレスポンス:"
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

<h4 id="_additional_method_level_metrics"><span class="merged" id="all.2Lc6Pb" title="原文 : Additional method-level metrics">追加のメソッド・レベル・メトリクス</span></h4>
<div class="section">
<p><span class="merged" id="all.1yJT5Q.spl1" title="原文 : The @Timed, @Metered, and @SimplyTimed annotations can also be used with a method.">メソッドでは、<code>@Timed</code>、<code>@Metered</code>および<code>@SimplyTimed</code>注釈も使用できます。</span> <span class="merged" id="all.1yJT5Q.spl2" title="原文 : For the following example. you can just annotate the same method with @Metered and @Timed.">次の例では、<code>@Metered</code>と<code>@Timed</code>で同じメソッドに注釈を付けることができます。</span> <span class="merged" id="all.1yJT5Q.spl3" title="原文 : These metrics collect significant information about the measured methods, but at a cost of some overhead and more complicated output.">これらのメトリクスは、測定されたメソッドに関する重要な情報を収集しますが、オーバーヘッドやより複雑な出力が発生します。</span> <span class="merged" id="all.1yJT5Q.spl4" title="原文 : Use @SimplyTimed in cases where capturing the invocation count and the total elapsed time spent in a block of code is sufficient.">呼出し数およびコード・ブロックで費やされた合計経過時間を取得するだけで十分な場合は、<code>@SimplyTimed</code>を使用します。</span> </p>

<p><span class="merged" id="all.3kX4nx" title="原文 : Note that when using multiple annotations on a method, you must give the metrics different names as shown below.">メソッドで複数の注釈を使用する場合は、次に示すようにメトリクスに異なる名前を付ける必要があります。</span></p>

<markup
lang="java"
title="次のコードで<code>GreetingCards</code>クラスを更新します:"
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
title="アプリケーションをビルドして実行し、次のアプリケーション・エンドポイントを呼び出します:"
>curl http://localhost:8080/cards
curl http://localhost:8080/cards
curl -H "Accept: application/json"  http://localhost:8080/metrics/application</markup>

<markup
lang="json"
title="JSONレスポンス:"
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

<h4 id="_reusing_metrics"><span class="merged" id="all.2m7b4x" title="原文 : Reusing metrics">メトリクスの再利用</span></h4>
<div class="section">
<p><span class="merged" id="all.4TB2Av" title="原文 : You can share a metric across multiple endpoints by specifying the reusable field in the metric annotation as demonstrated below.">次に示すように、メトリック注釈で再利用可能なフィールドを指定することで、複数のエンドポイント間でメトリックを共有できます。</span></p>

<markup
lang="java"
title="次のコードで<code>GreetingCards</code>クラスを更新します:"
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
title="アプリケーションをビルドして実行し、次のエンドポイントを呼び出します:"
>curl  http://localhost:8080/cards/wedding
curl  http://localhost:8080/cards/birthday
curl  http://localhost:8080/cards
curl -H "Accept: application/json"  http://localhost:8080/metrics/application</markup>

<markup
lang="json"
title="<code>/metrics/application</code>からのJSONレスポンス:"
>{
"anyCard": 1,
"specialEventCard": 2  <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2XHAF4" title="原文 : Notice that specialEventCard count is two, since you accessed /cards/wedding and /cards/birthday."><code>/cards/wedding</code>および<code>/cards/birthday</code>にアクセスしたため、<code>specialEventCard</code>数は2つであることに注意してください。</span></li>
</ul>
</div>

<h4 id="_class_level_metrics"><span class="merged" id="all.1d7jHO" title="原文 : Class-level metrics">クラス・レベル・メトリクス</span></h4>
<div class="section">
<p><span class="merged" id="all.3PPnOX.spl1" title="原文 : You can collect metrics at the class-level to aggregate data from all methods in that class using the same metric.">クラス・レベルでメトリクスを収集し、同じメトリックを使用してそのクラスのすべてのメソッドからデータを集計できます。</span> <span class="merged" id="all.3PPnOX.spl2" title="原文 : The following example introduces a metric to count all card queries.">次の例では、すべてのカード問合せをカウントするメトリックを導入します。</span> <span class="merged" id="all.3PPnOX.spl3" title="原文 : In the following example, the method-level metrics are not needed to aggregate the counts, but they are left in the example to demonstrate the combined output of all three metrics.">次の例では、カウントの集計にメソッド・レベル・メトリクスは必要ありませんが、3つのメトリクスすべての結合された出力を示すために例に残されています。</span> </p>

<markup
lang="java"
title="次のコードで<code>GreetingCards</code>クラスを更新します:"
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
title="アプリケーションをビルドして実行し、次のエンドポイントを呼び出します:"
>curl http://localhost:8080/cards
curl http://localhost:8080/cards/birthday
curl -H "Accept: application/json"  http://localhost:8080/metrics/application</markup>

<markup
lang="json"
title="<code>/metrics/application</code>からのJSONレスポンス:"
>{
  "anyCard": 1,
  "birthdayCard": 1,
  "io.helidon.examples.quickstart.mp.totalCards.GreetingCards": 2  <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1PZkzO.spl1" title="原文 : The totalCards count is a total of all the method-level Counter metrics."><code>totalCards</code>数は、すべてのメソッド・レベルの<code>Counter</code>メトリクスの合計です。</span> <span class="merged" id="all.1PZkzO.spl2" title="原文 : Class level metric names are always fully qualified.">クラス・レベル・メトリック名は常に完全修飾されます。</span> </li>
</ul>
</div>

<h4 id="_field_level_metrics"><span class="merged" id="all.1JUeht" title="原文 : Field-level metrics">フィールド・レベルのメトリクス</span></h4>
<div class="section">
<p><span class="merged" id="all.3IwyWN.spl1" title="原文 : Field level metrics can be injected into managed objects, but they need to be updated by the application code.">フィールド・レベルのメトリクスは管理対象オブジェクトにインジェクトできますが、アプリケーション・コードで更新する必要があります。</span> <span class="merged" id="all.3IwyWN.spl2" title="原文 : This annotation can be used on fields of type Meter, Timer, Counter, and Histogram.">この注釈は、<code>Meter</code>, <code>Timer</code>, <code>Counter</code>および<code>Histogram</code>型のフィールドで使用できます。</span> </p>

<p><span class="merged" id="all.2uTiBQ" title="原文 : The following example shows how to use a field-level Counter metric to track cache hits.">次の例は、フィールドレベルの<code>Counter</code>メトリックを使用してキャッシュ・ヒットを追跡する方法を示しています。</span></p>

<markup
lang="java"
title="次のコードで<code>GreetingCards</code>クラスを更新します:"
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
<li data-value="1"><span class="merged" id="all.VBcUI" title="原文 : A Counter metric field, cacheHits, is automatically injected by Helidon."><code>Counter</code>メトリック・フィールド<code>cacheHits</code>は、Helidonによって自動的に挿入されます。</span></li>
<li data-value="2"><span class="merged" id="all.11bvPF" title="原文 : Call updateStats() to update the cache hits."><code>updateStats()</code>をコールして、キャッシュ・ヒットを更新します。</span></li>
<li data-value="3"><span class="merged" id="all.11bvPF.1" title="原文 : Call updateStats() to update the cache hits."><code>updateStats()</code>をコールして、キャッシュ・ヒットを更新します。</span></li>
<li data-value="4"><span class="merged" id="all.ATusR" title="原文 : Randomly increment the cacheHits counter."><code>cacheHits</code>カウンタをランダムに増分します。</span></li>
</ul>
<markup
lang="bash"
title="アプリケーションをビルドして実行し、次のエンドポイントを呼び出します:"
>curl http://localhost:8080/cards
curl http://localhost:8080/cards
curl http://localhost:8080/cards/birthday
curl http://localhost:8080/cards/birthday
curl http://localhost:8080/cards/birthday
curl -H "Accept: application/json"  http://localhost:8080/metrics/application</markup>

<markup
lang="json"
title="<code>/metrics/application</code>からのJSONレスポンス:"
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

<h4 id="_gauge_metric"><span class="merged" id="all.4F4y8g" title="原文 : Gauge metric">ゲージ・メトリック</span></h4>
<div class="section">
<p><span class="merged" id="all.2TLOUS.spl1" title="原文 : The metrics you have tested so far are updated in response to an application REST request, i.e GET /cards.">これまでにテストしたメトリクスは、アプリケーションのRESTリクエスト(GET <code>/cards</code>)に応じて更新されます。</span> <span class="merged" id="all.2TLOUS.spl2" title="原文 : These metrics can be declared in a request scoped class and Helidon will store the metric in the MetricRegistry, so the value persists across requests.">これらのメトリクスはリクエスト・スコープのクラスで宣言でき、Helidonはメトリックを<code>MetricRegistry</code>に格納するため、値はリクエスト間で保持されます。</span> <span class="merged" id="all.2TLOUS.spl3" title="原文 : When GET /metrics/application is invoked, Helidon will return the current value of the metric stored in the MetricRegistry.">GET <code>/metrics/application</code>が起動されると、Helidonは<code>MetricRegistry</code>に格納されているメトリックの現在の値を返します。</span> <span class="merged" id="all.2TLOUS.spl4" title="原文 : The Gauge metric is different from all the other metrics."><code>Gauge</code>メトリックは、他のすべてのメトリクスとは異なります。</span> <span class="merged" id="all.2TLOUS.spl5" title="原文 : The application must provide a getter to return the gauge value in an application scoped class.">アプリケーションは、アプリケーション・スコープのクラスのゲージ値を返すgetterを提供する必要があります。</span> <span class="merged" id="all.2TLOUS.spl6" title="原文 : When GET /metrics/application is invoked, Helidon will call the Gauge getter, store that value in the MetricsRegistry, and return it as part of the metrics response payload.">GET <code>/metrics/application</code>が起動されると、Helidonは<code>Gauge</code> getterをコールし、その値を<code>MetricsRegistry</code>に格納して、メトリクス・レスポンス・ペイロードの一部として返します。</span> <span class="merged" id="all.2TLOUS.spl7" title="原文 : So, the Gauge metric value is updated real-time, in response to the get metrics request.">そのため、<code>Gauge</code>メトリック値は、メトリクス・リクエストの取得に応じてリアルタイムで更新されます。</span> </p>

<p><span class="merged" id="all.RMQte" title="原文 : The following example demonstrates how to use a Gauge to track application up-time.">次の例は、<code>Gauge</code>を使用してアプリケーションの稼働時間を追跡する方法を示しています。</span></p>

<markup
lang="java"
title="次のコードを使用して新しい<code>GreetingCardsAppMetrics</code>クラスを作成します:"
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
title="次のコードを使用して<code>GreetingCards</code>クラスを更新し、メトリクス出力を簡略化します:"
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
title="アプリケーションをビルドして実行し、アプリケーション・メトリクス・エンドポイントを起動します:"
>curl -H "Accept: application/json"  http://localhost:8080/metrics/application</markup>

<markup
lang="json"
title="<code>/metrics/application</code>からのJSONレスポンス:"
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
<p><span class="merged" id="all.HOIa7" title="原文 : The following example shows how to integrate the Helidon MP application with Kubernetes.">次の例は、Helidon MPアプリケーションをKubernetesと統合する方法を示しています。</span></p>

<markup
lang="bash"
title="アプリケーションを停止し、dockerイメージをビルドします:"
>docker build -t helidon-metrics-mp .</markup>

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
<li data-value="1"><span class="merged" id="all.3Q1f91.1" title="原文 : A service of type NodePort that serves the default routes on port 31143.">ポート<code>31143</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
</ul>
<markup
lang="bash"
title="ポート<code>30116</code>を使用してメトリクス・エンドポイントを検証します。実際のポートは異なる可能性があります:"
>curl http://localhost:31143/metrics</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.4tlHG" title="原文 : Leave the application running in Kubernetes since it will be used for Prometheus integration.">Prometheus統合に使用されるため、アプリケーションはKubernetesで実行したままにします。</span></p>
</div>

<h4 id="_prometheus_integration"><span class="merged" id="all.3WUGFL" title="原文 : Prometheus integration">Prometheus統合</span></h4>
<div class="section">
<p><span class="merged" id="all.4Rq1WH.spl1" title="原文 : The metrics service that you just deployed into Kubernetes is already annotated with prometheus.io/scrape:.">Kubernetesにデプロイしたメトリクス・サービスには、すでに<code>prometheus.io/scrape:</code>の注釈が付いています。</span> <span class="merged" id="all.4Rq1WH.spl2" title="原文 : This will allow Prometheus to discover the service and scrape the metrics.">これにより、Prometheusはサービスを検出し、メトリクスをスクレイプできます。</span> <span class="merged" id="all.4Rq1WH.spl3" title="原文 : In this exercise, you will install Prometheus into Kubernetes, then verify that it discovered the Helidon metrics in your application.">この演習では、PrometheusをKubernetesにインストールし、アプリケーションでHelidonメトリクスが検出されたことを確認します。</span> </p>

<markup
lang="bash"
title="Prometheusをインストールし、ポッドの準備ができるまで待ちます:"
>helm install stable/prometheus --name metrics
export POD_NAME=$(kubectl get pods --namespace default -l "app=prometheus,component=server" -o jsonpath="{.items[0].metadata.name}")
kubectl get pod $POD_NAME</markup>

<p><span class="merged" id="all.1XStKB.spl1" title="原文 : You will see output similar to the following.">次のような出力が表示されます。</span> <span class="merged" id="all.1XStKB.spl2" title="原文 : Repeat the kubectl get pod command until you see 2/2 and Running."><code>2/2</code>および<code>Running</code>が表示されるまで、<code>kubectl get pod</code>コマンドを繰り返します。</span> <span class="merged" id="all.1XStKB.spl3" title="原文 : This may take up to one minute.">これには最大1分かかる場合があります。</span> </p>

<markup
lang="bash"

>metrics-prometheus-server-5fc5dc86cb-79lk4   2/2     Running   0          46s</markup>

<markup
lang="bash"
title="サーバーURLにアクセスできるようにポート転送を作成します:"
>kubectl --namespace default port-forward $POD_NAME 7090:9090</markup>

<p><span class="merged" id="all.2jbZil.spl1" title="原文 : Now open your browser and navigate to http://localhost:7090/targets.">ブラウザを開き、<code><a href="http://localhost:7090/targets" id="" target="_blank" >http://localhost:7090/targets</a></code>に移動します。</span> <span class="merged" id="all.2jbZil.spl2" title="原文 : Search for helidon on the page and you will see your Helidon application as one of the Prometheus targets.">ページでhelidonを検索すると、Prometheusターゲットの一部としてHelidonアプリケーションが表示されます。</span> </p>

</div>

<h4 id="_final_cleanup"><span class="merged" id="all.2coSI0" title="原文 : Final cleanup">最終クリーンアップ</span></h4>
<div class="section">
<p><span class="merged" id="all.HBnIV.1" title="原文 : You can now delete the Kubernetes resources that were just created during this example.">これで、この例で作成したKubernetesリソースを削除できます。</span></p>

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
<p><span class="merged" id="all.UfWha.1" title="原文 : Refer to the following references for additional information:">詳細は、次のリファレンスを参照してください:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3X0Fd8" title="原文 : MicroProfile Metrics specification at https://github.com/eclipse/microprofile-metrics/releases/tag/2.0"><a href="https://github.com/eclipse/microprofile-metrics/releases/tag/2.0" id="" target="_blank" >https://github.com/eclipse/microprofile-metrics/releases/tag/ 2.0</a>のMicroProfileメトリクス仕様</span></p>

</li>
<li>
<p><span class="merged" id="all.3UdjFz" title="原文 : MicroProfile Metrics Javadoc at https://javadoc.io/doc/org.eclipse.microprofile.metrics/microprofile-metrics-api/2.0.0"><a href="https://javadoc.io/doc/org.eclipse.microprofile.metrics/microprofile-metrics-api/2.0.0" id="" target="_blank" >https://javadoc.io/doc/org.eclipse.microprofile.metrics/microprofile-metrics-api/ 2.0.0</a>のMicroProfileメトリクスJavadoc</span></p>

</li>
<li>
<p><span class="merged" id="all.1m3bP8.2" title="原文 : Helidon Javadoc at https://helidon.io/docs/latest/apidocs/index.html?overview-summary.html"><a href="https://helidon.io/docs/latest/apidocs/index.html?overview-summary.html" id="" target="_blank" >https://helidon.io/docs/latest/apidocs/index.html?overview-summary.html</a>のHelidon Javadoc</span></p>

</li>
</ul>
</div>
</div>
</doc-view>
