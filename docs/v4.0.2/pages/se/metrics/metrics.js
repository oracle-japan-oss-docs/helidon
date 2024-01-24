<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.60"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.59" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.41" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.36" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.21" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.44LWg" title="原文 : Helidon Metrics API"><router-link @click.native="this.scrollFix('#_helidon_metrics_api')" to="#_helidon_metrics_api">HelidonメトリクスAPI</router-link></span></p>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.26FILD.34" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.36" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.2Za1yc" title="原文 : Example Application Code"><router-link @click.native="this.scrollFix('#_example_application_code')" to="#_example_application_code">アプリケーション・コードの例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3vbq4m.1" title="原文 : Example Configuration"><router-link @click.native="this.scrollFix('#example-configuration')" to="#example-configuration">構成例</router-link></span></p>

</li>
</ul>

</li>
<li>
<p><span class="merged" id="all.4Y979A" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#config-rest-request')" to="#config-rest-request">追加情報</router-link></span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.ibamp" title="原文 : Support for the Prometheus Metrics API"><router-link @click.native="this.scrollFix('#_support_for_the_prometheus_metrics_api')" to="#_support_for_the_prometheus_metrics_api">PrometheusメトリクスAPIのサポート</router-link></span></p>

</li>
</ul>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.75"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.1ORTAH" title="原文 : Helidon SE metrics is a neutral metrics API which provides">Helidon SEメトリクスは、次を提供する中立的なメトリクスAPIです</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.7qU83" title="原文 : a unified way for Helidon servers to export monitoring data-​telemetry-​to management agents, and">Helidonサーバーがモニタリング・データ(テレメトリ)を管理エージェントにエクスポートする統一された方法、および</span></p>

</li>
<li>
<p><span class="merged" id="all.2xgn2n" title="原文 : a unified Java API which all application programmers can use to register and update meters to expose telemetry data from their services.">すべてのアプリケーション・プログラマがメーターを登録および更新してサービスからテレメトリ・データを公開するために使用できる統合Java API。</span></p>

</li>
</ul>

<p><span class="merged" id="all.2mj6rd.1" title="原文 : Metrics is one of the Helidon observability features.">メトリクスは、Helidon可観測性機能の1つです。</span></p>


<h3 id="_a_word_about_terminology"><span class="merged" id="all.3gS4I5" title="原文 : A Word about Terminology">用語に関する一言</span></h3>
<div class="section">
<p><span class="merged" id="all.24lWy3.spl1" title="原文 : Helidon SE uses the term &quot;metrics&quot; to refer to the subsystem in Helidon which manages the registration of, updates to, and reporting of aggregate statistical measurements about the service.">Helidon SEでは、メトリクスという用語を使用して、サービスに関する集計統計測定の登録、更新およびレポートを管理するHelidonのサブシステムを参照します。</span> <span class="merged" id="all.24lWy3.spl2" title="原文 : The term &quot;meter&quot; refers to an entity which collects these measurements, such as a counter or a timer.">「メーター」という用語は、カウンタやタイマーなど、これらの測定を収集するエンティティを指します。</span> </p>

</div>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.51"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.1sbe4O.1" title="原文 : To enable metrics add the following dependency to your project’s pom.xml (see Managing Dependencies).">メトリクスを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"
title="Packaging the metrics API"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.metrics&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-metrics-api&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.1L1hxq.spl1" title="原文 : This dependency adds the metrics API and a no-op implementation of that API to your project.">この依存関係は、メトリクスAPIとそのAPIのno-op実装をプロジェクトに追加します。</span> <span class="merged" id="all.1L1hxq.spl2" title="原文 : The no-op implementation:">no-opの実装:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3FFrFX" title="原文 : does not register meters in a registry">レジストリにメーターを登録しません</span></p>

</li>
<li>
<p><span class="merged" id="all.1nYq3K" title="原文 : does not update meter values">メーター値を更新しません</span></p>

</li>
<li>
<p><span class="merged" id="all.2Jto1l" title="原文 : does not expose the metrics endpoint for reporting meter values.">、メーター値をレポートするためのメトリクス・エンドポイントを公開しません。</span></p>

</li>
</ul>

<p><span class="merged" id="all.ZwraV" title="原文 : To include the full-featured metrics implementation, add the following dependency to your project:">フル機能のメトリクス実装を含めるには、次の依存関係をプロジェクトに追加します:</span></p>

<markup
lang="xml"
title="Packaging a full-featured metrics implementation"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver.observe&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-observe-metrics&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.DrjGm" title="原文 : Adding this dependency packages the full-featured metrics implementation and support for the metrics endpoint with your service.">この依存関係を追加すると、フル機能のメトリクス実装およびサービスでのメトリクス・エンドポイントのサポートがパッケージ化されます。</span></p>

<p><span class="merged" id="all.19zZtM.spl1" title="原文 : You might notice the transitive dependency io.helidon.metrics.providers:helidon-metrics-providers-micrometer in your project.">プロジェクト内の推移的依存関係<code>io.helidon.metrics.providers:helidon-metrics-providers-micrometer</code>がわかる場合があります。</span> <span class="merged" id="all.19zZtM.spl2" title="原文 : This component contains an implementation of the Helidon metrics API that uses Micrometer as the underlying metrics technology.">このコンポーネントには、Micrometerを基礎となるメトリクス・テクノロジとして使用するHelidonメトリクスAPIの実装が含まれます。</span> </p>

<p><span class="merged" id="all.2i55x8.spl1" title="原文 : Helidon provides several built-in meters in a separate artifact.">Helidonは、個別のアーティファクトにいくつかの組込みメーターを提供します。</span> <span class="merged" id="all.2i55x8.spl2" title="原文 : To include the build-in meters, add the following dependency to your project:">ビルド・イン・メーターを含めるには、次の依存関係をプロジェクトに追加します:</span> </p>

<markup
lang="xml"
title="Packaging the built-in meters"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.metrics&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-metrics-system-meters&lt;/artifactId&gt;
    &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.53"  title="原文:: Usage">使用</span></h2>
<div class="section">

<h3 id="_instrumenting_your_service"><span class="merged" id="all.450nKW.1" title="原文 : Instrumenting Your Service">サービスの計測</span></h3>
<div class="section">
<p><span class="merged" id="all.4961Lb" title="原文 : You add meters to your service by writing code which explicitly invokes the metrics API to register meters, retrieve previously-registered meters, and update meter values.">サービスにメーターを追加するには、メトリクスAPIを明示的に起動してメーターの登録、以前に登録されたメーターの取得、およびメーター値の更新を行うコードを記述します。</span></p>

<p><span class="merged" id="all.daNPL" title="原文 : Later sections of this document describe how to do this.">このドキュメントの後のセクションでは、この方法について説明します。</span></p>

</div>


<h3 id="_categorizing_types_of_meters"><span class="merged" id="all.3LddOe" title="原文 : Categorizing Types of Meters">メーターのタイプの分類</span></h3>
<div class="section">
<p><span class="merged" id="all.1Xepgb" title="原文 : Helidon distinguishes among scopes, or types, of meters.">Helidonは、メーターの<em>scopes</em>または型を区別します。</span></p>

<p><span class="merged" id="all.PuRd3.spl1" title="原文 : Helidon includes meters in the built-in scopes described below.">Helidonには、次に説明する組込みスコープ内のメーターが含まれます。</span> <span class="merged" id="all.PuRd3.spl2" title="原文 : Applications often register their own meters in the application scope but can create their own scopes and register meters within them.">アプリケーションは、多くの場合、独自のメーターを<code>application</code>スコープに登録しますが、独自のスコープを作成し、その中にメーターを登録できます。</span> </p>

<div class="block-title"><span class="merged" id="all.KJ6uV" title="原文 : Built-in meter scopes"><span>内蔵メーター・スコープ</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2xAeeu.1" title="原文 : Built-in Scope">組込みスコープ</span></th>
<th><span class="merged" id="all.1LLqtP.1"  title="原文:: Typical Usage">一般的な用途</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3lo4qT.1"  title="原文: base"><code>base</code></span></td>
<td class=""><span class="merged" id="all.1QBda8" title="原文 : OS or Java runtime measurements (available heap, disk space, etc.).">OSまたはJavaランタイム測定(使用可能なヒープ、ディスク領域など)。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4BWnvq.1"  title="原文: vendor"><code>vendor</code></span></td>
<td class=""><span class="merged" id="all.10ebV9.1" title="原文 : Implemented by vendors, including the REST.request metrics and other key performance indicator measurements (described in later sections)."><code>REST.request</code>メトリクスおよびその他のキー・パフォーマンス・インジケータの測定を含むベンダーによって実装されます(後の項で説明します)。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2zvFMg.2"  title="原文: application"><code>application</code></span></td>
<td class=""><span class="merged" id="all.exSkz.1" title="原文 : Declared via annotations or programmatically registered by your service code.">注釈またはサービス・コードによってプログラム的に登録された注釈によって宣言されます。</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.B2hz.spl1" title="原文 : When an application creates a new meter it can specify which scope the meter belongs to.">アプリケーションが新しいメーターを作成するときに、そのメーターが属するスコープを指定できます。</span> <span class="merged" id="all.B2hz.spl2" title="原文 : If the application does not specify a scope for a new meter, the default scope is application.">アプリケーションで新しいメーターのスコープを指定しない場合、デフォルトのスコープは<code>application</code>です。</span> </p>

</div>


<h3 id="_meter_registry"><span class="merged" id="all.LyMjq" title="原文 : Meter Registry">メーター・レジストリ</span></h3>
<div class="section">
<p><span class="merged" id="all.I0xVu.spl1" title="原文 : Helidon stores all meters in a meter registry.">Helidonは、すべてのメーターを<em>「メーター・レジストリ」</em>に格納します。</span> <span class="merged" id="all.I0xVu.spl2" title="原文 : Typically, applications use the global meter registry which is the registry where Helidon stores built-in meters.">通常、アプリケーションでは、Helidonが組込みメーターを格納するレジストリであるグローバル・メーター・レジストリが使用されます。</span> <span class="merged" id="all.I0xVu.spl3" title="原文 : Application code refers to the global registry using Metrics.globalRegistry().">アプリケーション・コードは、<code>Metrics.globalRegistry()</code>を使用してグローバル・レジストリを参照します。</span> </p>

</div>


<h3 id="_retrieving_metrics_reports_from_your_service"><span class="merged" id="all.1V1yfM.1" title="原文 : Retrieving Metrics Reports from your Service">サービスからのメトリクス・レポートの取得</span></h3>
<div class="section">
<p><span class="merged" id="all.3eqMHA" title="原文 : When you add the helidon-webserver-observe-metrics dependency to your project, Helidon automatically provides a built-in REST endpoint /observe/metrics which responds with a report of the registered meters and their values."><code>helidon-webserver-observe-metrics</code>依存関係をプロジェクトに追加すると、Helidonは、登録されたメーターとその値のレポートで応答する組込みRESTエンドポイント<code>/observe/metrics</code>を自動的に提供します。</span></p>

<p><span class="merged" id="all.2BwURj.1" title="原文 : Clients can request a particular output format.">クライアントは特定の出力形式をリクエストできます。</span></p>

<div class="block-title"><span class="merged" id="all.Eh4P6" title="原文 : Formats for /observe/metrics output"><span><code>/observe/metrics</code>出力の形式</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.3yTzxp.1"  title="原文:: Format">書式</span></th>
<th><span class="merged" id="all.1kFsTA.1"  title="原文:: Requested by">依頼者</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1NF1vk.1" title="原文 : OpenMetrics (Prometheus)">OpenMetrics (Prometheus)</span></td>
<td class=""><span class="merged" id="all.2YOaun.1" title="原文 : default (text/plain)">デフォルト(<code>text/plain</code>)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1iF8uP.1"  title="原文:: JSON">JSON</span></td>
<td class=""><span class="merged" id="all.2GCWMy.1" title="原文 : Header Accept: application/json">ヘッダー<code>Accept: application/json</code></span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.2wfEdZ.1" title="原文 : Clients can also limit the report by specifying the scope as a query parameter in the request URL:">クライアントは、リクエストURLでスコープを問合せパラメータとして指定することで、レポートを制限することもできます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4YsIO7"  title="原文: /observe/metrics?scope=base"><code>/observe/metrics?scope=base</code></span></p>

</li>
<li>
<p><span class="merged" id="all.e1Pqo"  title="原文: /observe/metrics?scope=vendor"><code>/observe/metrics?scope=vendor</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2sSeU3"  title="原文: /observe/metrics?scope=application"><code>/observe/metrics?scope=application</code></span></p>

</li>
</ul>

<p><span class="merged" id="all.3CT06v" title="原文 : Further, clients can narrow down to a specific metric name by adding the name as another query parameter, such as /observe/metrics?scope=application&amp;name=myCount.">さらに、クライアントは、名前を別の問合せパラメータ(<code>/observe/metrics?scope=application&amp;name=myCount</code>など)として追加することで、特定のメトリック名に絞り込むことができます。</span></p>

<markup
lang="bash"
title="Example Reporting: Prometheus format"
>curl -s -H 'Accept: text/plain' -X GET http://localhost:8080/observe/metrics</markup>

<div class="listing">
<markup># TYPE base:classloader_total_loaded_class_count counter
# HELP base:classloader_total_loaded_class_count Displays the total number of classes that have been loaded since the Java virtual machine has started execution.
base:classloader_total_loaded_class_count 3157</markup>
</div>

<markup
lang="bash"
title="Example Reporting: JSON format"
>curl -s -H 'Accept: application/json' -X GET http://localhost:8080/observe/metrics</markup>

<div class="listing">
<markup>{
   "base" : {
      "memory.maxHeap" : 3817865216,
      "memory.committedHeap" : 335544320,
    }
}</markup>
</div>

<p><span class="merged" id="all.sMOve" title="原文 : In addition to your application meters, the reports contain other meters of interest such as system and VM information.">レポートには、アプリケーション・メーターに加えて、システムやVM情報など、関心のあるその他のメーターが含まれています。</span></p>

</div>


<h3 id="_enabling_the_metrics_rest_service"><span class="merged" id="all.1KODOl" title="原文 : Enabling the Metrics REST Service">メトリクスRESTサービスの有効化</span></h3>
<div class="section">
<p><span class="merged" id="all.16BUW7" title="原文 : If you add the dependencies described above, your service automatically supports the metrics REST endpoint as long as the WebServer is configured to discover features automatically.">前述の依存関係を追加すると、<code>WebServer</code>が機能を自動的に検出するように構成されていれば、サービスによってメトリクスRESTエンドポイントが自動的にサポートされます。</span></p>

<p><span class="merged" id="all.2DvXhJ" title="原文 : If you disable auto-discovery, you can add the metrics observer explicitly.">自動検出を無効にすると、メトリクス・オブザーバを明示的に追加できます。</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.4JMtv6" title="原文 : Create an instance of MetricsObserver, either directly as shown below or using its builder.">次に示すように直接、またはそのビルダーを使用して、<code>MetricsObserver</code>のインスタンスを作成します。</span>

</li>
<li>
<span class="merged" id="all.4Wug7E" title="原文 : Include the MetricsObserver instance in your application’s ObserveFeature."><code>MetricsObserver</code>インスタンスをアプリケーションの<code>ObserveFeature</code>に含めます。</span>

</li>
<li>
<span class="merged" id="all.2wlc6z" title="原文 : Register your ObserveFeature with your WebServer."><code>ObserveFeature</code>を<code>WebServer</code>に登録します。</span>

</li>
</ol>

<markup
lang="java"

>Config config = Config.create();
Config.global(config);

ObserveFeature observe = ObserveFeature.builder()
        .config(config.get("server.features.observe"))
        .addObserver(MetricsObserver.create())
        .build();

WebServer server = WebServer.builder()
                .config(Config.global().get("server"))
                .featuresDiscoverServices(false)
                .addFeature(observe)
                .routing(Main::routing)
                .build()
                .start();</markup>

</div>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.23"  title="原文:: API">API</span></h2>
<div class="section">
<p><span class="merged" id="all.3Ip4s0" title="原文 : To work with Helidon Metrics in your code, follow these steps:">コードでHelidonメトリクスを使用するには、次のステップに従います:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1aqrMr" title="原文 : Use the static globalRegistry method on the Metrics interface to get a reference to the global MeterRegistry instance.">グローバル<a href="/apidocs/io.helidon.metrics.api/MeterRegistry.html" target="_blank"><code>MeterRegistry</code></a>インスタンスへの参照を取得するには、<a href="/apidocs/io.helidon.metrics.api/Metrics.html" target="_blank"><code>Metrics</code></a>インタフェースで静的<code>globalRegistry</code>メソッドを使用します。</span>

</li>
<li>
<span class="merged" id="all.2aamb8" title="原文 : Use the MeterRegistry instance to register new meters and look up previously-registered meters."><code>MeterRegistry</code>インスタンスを使用して、新しいメーターを登録し、以前に登録されたメーターを検索します。</span>

</li>
<li>
<span class="merged" id="all.3Je0SW" title="原文 : Use the meter reference returned from the MeterRegistry to update the meter or get its value."><code>MeterRegistry</code>から返されたメーター参照を使用して、メーターを更新するか、その値を取得します。</span>

</li>
</ol>

<p><span class="merged" id="all.1dhx6p" title="原文 : You can also use the MeterRegistry to remove an existing meter."><code>MeterRegistry</code>を使用して、既存のメーターを削除することもできます。</span></p>


<h3 id="_helidon_metrics_api"><span class="merged" id="all.1DmFgE" title="原文 : Helidon Metrics API">HelidonメトリクスAPI</span></h3>
<div class="section">
<p><span class="merged" id="all.1Rbqlf" title="原文 : The Helidon Metrics API defines the classes and interfaces for meter types and other related items.">HelidonメトリクスAPIは、メーター・タイプおよびその他の関連項目のクラスおよびインタフェースを定義します。</span></p>

<p><span class="merged" id="all.2ClLhU" title="原文 : The following table summarizes the meter types.">次の表に、メーター・タイプの要約を示します。</span></p>

<div class="block-title"><span class="merged" id="all.dNp3j"  title="原文:: Meter Types"><span>メーター・タイプ</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.4CD4Ma"  title="原文:: Meter Type">メータータイプ</span></th>
<th><span class="merged" id="all.JUOSC.54"  title="原文:: Usage">使用</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.iqPVb" title="原文 : Counter"><a href="/apidocs/io.helidon.metrics.api/Counter.html" target="_blank"><code>Counter</code></a></span></td>
<td class=""><span class="merged" id="all.jTrlz.1" title="原文 : Monotonically increasing count of events.">イベント数を単調に増やします。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2wKQ06" title="原文 : Gauge"><a href="/apidocs/io.helidon.metrics.api/Gauge.html" target="_blank"><code>Gauge</code></a></span></td>
<td class=""><span class="merged" id="all.1AhpmC.1" title="原文 : Access to a value managed by other code in the service.">サービス内の他のコードによって管理される値にアクセスします。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.33w5HX" title="原文 : DistributionSummary"><a href="/apidocs/io.helidon.metrics.api/DistributionSummary.html" target="_blank"><code>DistributionSummary</code></a></span></td>
<td class=""><span class="merged" id="all.1NPQCU" title="原文 : Calculates the distribution of a value.">値の分布を計算します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2WB46d"  title="原文:: Timer"><a href="/apidocs/io.helidon.metrics.api/Timer.html" target="_blank"><code>Timer</code></a></span></td>
<td class=""><span class="merged" id="all.4duRzo.1" title="原文 : Frequency of invocations and the distribution of how long the invocations take.">呼出しの頻度および呼出しの所要時間の分布。</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.1UOK3O" title="原文 : Each meter type has its own set of methods for updating and retrieving the metric’s value.">各メーター・タイプには、メトリックの値を更新および取得するための独自のメソッド・セットがあります。</span></p>

</div>


<h3 id="_the_meterregistry_api"><span class="merged" id="all.1OMWkN" title="原文 : The MeterRegistry API">The <code>MeterRegistry</code> API</span></h3>
<div class="section">
<p><span class="merged" id="all.1jjWOC.spl1" title="原文 : To register or look up meters programmatically, your service code uses the global MeterRegistry.">メーターをプログラムで登録または検索するには、サービス・コードでグローバル<code>MeterRegistry</code>を使用します。</span> <span class="merged" id="all.1jjWOC.spl2" title="原文 : Simply invoke Metrics.globalRegistry() to get a reference to the global meter registry."><code>Metrics.globalRegistry()</code>を起動して、グローバル・メーター・レジストリへの参照を取得するだけです。</span> </p>

<p><span class="merged" id="all.3pCtNc" title="原文 : To locate an existing meter or register a new one, your code:">既存のメーターを検索したり、新しいメーターを登録するには、次のコードを使用します:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.46X6B4" title="原文 : Creates a builder of the appropriate type of meter, setting the name and possibly other characteristics of the meter.">メーターの名前およびその他の特性を設定して、適切なタイプのメーターのビルダーを作成します。</span>

</li>
<li>
<span class="merged" id="all.x8ahi" title="原文 : Invokes the MeterRegistry.getOrCreate method, passing the builder."><code>MeterRegistry.getOrCreate</code>メソッドを起動し、ビルダーを渡します。</span>

</li>
</ol>

<p><span class="merged" id="all.2nrchZ.spl1" title="原文 : The meter registry returns a reference to a previously-registered meter with the specified name and tags or, if none exists, a newly-registered meter.">メーター・レジストリは、指定された名前とタグを持つ以前に登録されたメーターへの参照、または存在しない場合は新規登録されたメーターへの参照を返します。</span> <span class="merged" id="all.2nrchZ.spl2" title="原文 : Your code can then operate on the returned meter as needed to record new measurements or retrieve existing data.">コードは、必要に応じて返されたメーターを操作して、新しい測定を記録したり、既存のデータを取得できます。</span> </p>

<p><span class="merged" id="all.3oSCBu" title="原文 : The example code in the Examples section below illustrates how to register, retrieve, and update meters.">次の<router-link @click.native="this.scrollFix('#_examples')" to="#_examples">「例」</router-link>セクションのサンプル・コードは、メーターの登録、取得および更新方法を示しています。</span></p>

</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.39"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.46xH0p" title="原文 : To control how the Helidon metrics subsystem behaves, add a metrics section to your configuration file, such as application.yaml.">Helidonメトリクス・サブシステムの動作を制御するには、<code>application.yaml</code>などの構成ファイルに<code>metrics</code>セクションを追加します。</span></p>

<p><span class="merged" id="all.1FFupb.2" title="原文 : Type: io.helidon.webserver.observe.metrics.MetricsObserver">タイプ: <a href="/apidocs/io.helidon.webserver.observe.metrics/io/helidon/webserver/observe/metrics/MetricsObserver.html" target="_blank">io.helidon.webserver.observe.metrics.MetricsObserver</a></span></p>

<p><span class="merged" id="all.4QYKo2.3" title="原文 : This is a standalone configuration type, prefix from configuration root: metrics">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>metrics</code></span></p>

<p><span class="merged" id="all.31kiUh.40" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.26gZXx.8"  title="原文: io.helidon.webserver.observe.spi.ObserveProvider"><code>io.helidon.webserver.observe.spi.ObserveProvider</code></span></p>

</li>
</ul>


<h3 id="_configuration_options"><span class="merged" id="all.3SKgM1.132"  title="原文:: Configuration options">構成オプション</span></h3>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.125" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.144"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.139"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.144"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.150"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.qt5gh.3"  title="原文: app-name"><code>app-name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.305"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3vBRBA.3" title="原文 : Value for the application tag to be added to each meter ID.">各メーターIDに追加するアプリケーション・タグの値。</span></p>

<markup>@return application tag value</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4G4Hoe.3"  title="原文: app-tag-name"><code>app-tag-name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.306"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2FJBFA.3" title="原文 : Name for the application tag to be added to each meter ID.">各メーターIDに追加するアプリケーション・タグの名前。</span></p>

<markup>@return application tag name</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48UcwL.27"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.223"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.113"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.49tbuX.3" title="原文 : Whether metrics functionality is enabled.">メトリクス機能が有効かどうか。</span></p>

<markup>@return if metrics are configured to be enabled</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2QMdx0.8"  title="原文: endpoint"><code>endpoint</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.307"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4KU3uR.4"  title="原文: metrics"><code>metrics</code></span></td>
<td class=""><doc-view>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Gz6OP.3"  title="原文: key-performance-indicators"><code>key-performance-indicators</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.r2Ryw.3" title="原文 : KeyPerformanceIndicatorMetricsConfig"><router-link to="/config/io_helidon_metrics_api_KeyPerformanceIndicatorMetricsConfig">KeyPerformanceIndicatorMetricsConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3ncMJD.3" title="原文 : Key performance indicator metrics settings.">キー・パフォーマンス・インジケータのメトリクス設定。</span></p>

<markup>@return key performance indicator metrics settings</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2r7Cat.7"  title="原文: permit-all"><code>permit-all</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.224"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4AwWXP.5" title="原文 : Whether to allow anybody to access the endpoint.">エンドポイントへのアクセスを許可するかどうか。</span></p>

<markup>@return whether to permit access to metrics endpoint to anybody, defaults to `true`
@see #roles()</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3mr21Q.3"  title="原文: rest-request-enabled"><code>rest-request-enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.225"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.47YgmC.3" title="原文 : Whether automatic REST request metrics should be measured.">自動RESTリクエスト・メトリクスを測定するかどうか。</span></p>

<markup>@return true/false</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Atrrs.6"  title="原文: roles"><code>roles</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.40"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3np7Uf.5" title="原文 : Hints for role names the user is expected to be in.">ユーザーが想定されるロール名のヒント。</span></p>

<markup>@return list of hints</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3llf19.3"  title="原文: scoping"><code>scoping</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1D7zta.3" title="原文 : ScopingConfig"><router-link to="/config/io_helidon_metrics_api_ScopingConfig">ScopingConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4T7kc8.3" title="原文 : Settings related to scoping management.">スコープ管理に関連する設定。</span></p>

<markup>@return scoping settings</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3WNvqu.3"  title="原文: tags"><code>tags</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.20ZAmf.3" title="原文 : Tag[]"><router-link to="/config/io_helidon_metrics_api_Tag">Tag[]</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2Fc6ey.3" title="原文 : Global tags.">グローバル・タグ。</span></p>

<markup>@return name/value pairs for global tags</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.38"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.FdExe" title="原文 : Helidon SE includes several prewritten example applications illustrating aspects of metrics:">Helidon SEには、メトリクスの側面を示すいくつかの事前記述されたサンプル・アプリケーションが含まれています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.XoItI" title="原文 : Enabling/disabling meters using MetricsObserver and MetricsConfig"><code>MetricsObserver</code>および<code>MetricsConfig</code>を使用した<a href="https://github.com/oracle/helidon/tree/4.0.2/examples/metrics/filtering/se" target="_blank">「メーターの有効化/無効化」</a></span></p>

</li>
<li>
<p><span class="merged" id="all.2qIMpx" title="原文 : Controlling key performance indicator metrics using configuration and KeyPerformanceIndicatorMetricsSettings.">構成および<code>KeyPerformanceIndicatorMetricsSettings</code>を使用する<a href="https://github.com/oracle/helidon/tree/4.0.2/examples/metrics/kpi" target="_blank">「キー・パフォーマンス・インジケータ・メトリクスの制御」</a>。</span></p>

</li>
</ul>

<p><span class="merged" id="all.4FGFjL" title="原文 : The rest of this section shows how to add a custom meter to your code and how to configure the Helidon metrics subsystem.">この項の残りの部分では、カスタム・メーターをコードに追加する方法と、Helidonメトリクス・サブシステムを構成する方法を示します。</span></p>


<h3 id="_example_application_code"><span class="merged" id="all.168mON.1" title="原文 : Example Application Code">アプリケーション・コードの例</span></h3>
<div class="section">
<p><span class="merged" id="all.1pyIXt.spl1" title="原文 : The following example, based on the Helidon SE QuickStart application, shows how to register and update a new Counter in application code.">次の例は、Helidon SE QuickStartアプリケーションに基づいて、アプリケーション・コード内の新しい<code>Counter</code>を登録および更新する方法を示します。</span> <span class="merged" id="all.1pyIXt.spl2" title="原文 : The counter tracks the number of times any of the service endpoints is accessed.">カウンタは、いずれかのサービス・エンドポイントがアクセスされた回数を追跡します。</span> </p>

<markup
lang="java"
title="Define and use a <code>Counter</code>"
>import io.helidon.metrics.api.Counter;
//...

public class GreetService implements HttpService {

    private final Counter accessCtr = Metrics.globalRegistry() <span class="conum" data-value="1" />
            .getOrCreate(Counter.builder("accessctr"));        <span class="conum" data-value="2" />

    @Override
    public void routing(HttpRules rules) {
        rules
            .any(this::countAccess)                            <span class="conum" data-value="3" />
            .get("/", this::getDefaultMessageHandler)
            .get("/{name}", this::getMessageHandler)
            .put("/greeting", this::updateGreetingHandler)

    }

    private void countAccess(ServerRequest request,
                             ServerResponse response) {
            accessCtr.inc();                                   <span class="conum" data-value="4" />
            request.next();
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1I4P1Y" title="原文 : Get the global meter registry.">グローバル・メーター・レジストリを取得します。</span></li>
<li data-value="2"><span class="merged" id="all.1SRuaJ" title="原文 : Create (or find) a counter named &quot;accessctr&quot; in the global registry.">グローバル・レジストリに"accessctr"という名前のカウンタを作成(または検索)します。</span></li>
<li data-value="3"><span class="merged" id="all.40gVyS" title="原文 : Route every request to the countAccess method.">すべてのリクエストを<code>countAccess</code>メソッドにルーティングします。</span></li>
<li data-value="4"><span class="merged" id="all.2V0xgB" title="原文 : Increment the access counter for every request.">リクエストごとにアクセス・カウンタを増やします。</span></li>
</ul>

<p><span class="merged" id="all.2eoFTU" title="原文 : Perform the following steps to see the new counter in action.">新しいカウンタの動作を確認するには、次のステップを実行します。</span></p>

<markup
lang="bash"
title="Build and run the application"
>mvn package
java -jar target/helidon-quickstart-se.jar</markup>

<markup

title="Retrieve <code>application</code> metrics"
>curl 'http://localhost:8080/observe/metrics?scope=application' <span class="conum" data-value="1" />

# HELP accessctr_total
# TYPE accessctr_total counter
accessctr_total{scope="application",} 0.0 <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4Lq8B8" title="原文 : Access the metrics endpoint, selecting only application meters.">アプリケーション・メーターのみを選択して、メトリクス・エンドポイントにアクセスします。</span></li>
<li data-value="2"><span class="merged" id="all.29GlBs" title="原文 : Note the counter is zero; we have not accessed a service endpoint yet.">カウンタがゼロであることに注意してください。まだサービス・エンドポイントにアクセスしていません。</span></li>
</ul>

<markup
lang="bash"
title="Access a service endpoint to retrieve a greeting"
>curl http://localhost:8080/greet

{"message":"Hello World"}</markup>

<markup
lang="bash"
title="Retrieve <code>application</code> metrics again"
>curl 'http://localhost:8080/observe/metrics?scope=application'

# HELP accessctr_total
# TYPE accessctr_total counter
accessctr_total{scope="application",} 1.0 <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.OdObT" title="原文 : The counter now reports 1, reflecting our earlier access to the /greet endpoint.">カウンタは、<code>/greet</code>エンドポイントへの以前のアクセスを反映して1を報告するようになりました。</span></li>
</ul>

</div>


<h3 id="example-configuration"><span class="merged" id="all.2sU9aQ.1"  title="原文:: Example Configuration">構成例</span></h3>
<div class="section">
<p><span class="merged" id="all.456Bvv.1.spl1" title="原文 : Metrics configuration is quite extensive and powerful and, therefore, a bit complicated.">メトリクス構成は非常に広範囲で強力であるため、少し複雑です。</span> <span class="merged" id="all.456Bvv.1.spl2" title="原文 : The rest of this section illustrates some of the most common scenarios:">このセクションの残りの部分では、最も一般的なシナリオについて説明します:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2zp6OD.1" title="原文 : Disable metrics entirely."><router-link @click.native="this.scrollFix('#config-disable')" to="#config-disable">メトリクスを完全に無効にします。</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.10uvht.1" title="原文 : Choose whether to collect extended key performance indicator metrics."><router-link @click.native="this.scrollFix('#config-kpi')" to="#config-kpi">拡張キー・パフォーマンス・インジケータ・メトリクスを収集するかどうかを選択します。</router-link></span></p>

</li>
</ul>


<h4 id="config-disable"><span class="merged" id="all.3i33fB.1" title="原文 : Disable Metrics Subsystem">メトリクス・サブシステムの無効化</span></h4>
<div class="section">
<markup
lang="yaml"
title="Disabling metrics entirely"
>server:
  features:
    observe:
      observers:
        metrics:
          enabled: false</markup>

<p><span class="merged" id="all.xqZX0" title="原文 : Helidon does not update metrics, and the /observe/metrics endpoints respond with 404..">Helidonはメトリクスを更新せず、<code>/observe/metrics</code>エンドポイントは<code>404</code>で応答します。</span></p>

</div>


<h4 id="config-kpi"><span class="merged" id="all.1Pr9O0" title="原文 : Collecting Basic and Extended Key Performance Indicator (KPI) Meters">基本および拡張キー・パフォーマンス・インジケータ(KPI)メーターの収集</span></h4>
<div class="section">
<p><span class="merged" id="all.9Zv37" title="原文 : Any time you include the Helidon metrics module in your application, Helidon tracks a basic performance indicator meter: a Counter of all requests received (requests.count)">Helidonメトリクス・モジュールをアプリケーションに含めると、Helidonは基本パフォーマンス・インジケータ・メーターを追跡: 受信したすべてのリクエストの<code>Counter</code> (<code>requests.count</code>)</span></p>

<p><span class="merged" id="all.LzpgS" title="原文 : Helidon SE also includes additional, extended KPI meters which are disabled by default:">Helidon SEには、デフォルトで無効になっている追加の拡張KPIメーターも含まれています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.NfwY6.3" title="原文 : current number of requests in-flight - a Gauge (requests.inFlight) of requests currently being processed">現在進行中のリクエスト数 - 現在処理中のリクエストの<code>Gauge</code> (<code>requests.inFlight</code>)</span></p>

</li>
<li>
<p><span class="merged" id="all.33WFic.3" title="原文 : long-running requests - a Counter (requests.longRunning) measuring the total number of requests which take at least a given amount of time to complete; configurable, defaults to 10000 milliseconds (10 seconds)">長時間実行リクエスト - <code>Counter</code> ( <code>requests.longRunning</code>)は、完了までに少なくとも所定の時間がかかるリクエストの合計数を測定します。構成可能で、デフォルトは10000ミリ秒(10秒)です</span></p>

</li>
<li>
<p><span class="merged" id="all.27RODF.3" title="原文 : load - a Counter (requests.load) measuring the number of requests worked on (as opposed to received)">load - (受信ではなく)処理されたリクエストの数を測定する<code>Counter</code> ( <code>requests.load</code>)</span></p>

</li>
<li>
<p><span class="merged" id="all.3l0O54.3" title="原文 : deferred - a Gauge (requests.deferred) measuring delayed request processing (work on a request was delayed after Helidon received the request)">延期 - 遅延リクエスト処理を測定する<code>Gauge</code> (<code>requests.deferred</code>) (Helidonがリクエストを受信した後にリクエストの処理が遅延した)</span></p>

</li>
</ul>

<p><span class="merged" id="all.328puX.1" title="原文 : You can enable and control these meters using configuration:">次の構成を使用して、これらのメーターを有効化および制御できます:</span></p>

<markup
lang="yaml"
title="Controlling extended KPI meters"
>server:
  features:
    observe:
      observers:
        metrics:
          key-performance-indicators:
            extended: true
            long-running:
              threshold-ms: 2000</markup>

</div>

</div>

</div>


<h2 id="config-rest-request"><span class="merged" id="all.1BotSu.27"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">

<h3 id="_support_for_the_prometheus_metrics_api"><span class="merged" id="all.3RBxf4" title="原文 : Support for the Prometheus Metrics API">PrometheusメトリクスAPIのサポート</span></h3>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1N6U52.42" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.37" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.22" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
</ul>

<p><span class="merged" id="all.lqISh" title="原文 : Helidon provides optional support for the Prometheus metrics API.">Helidonは、PrometheusメトリクスAPIのオプション・サポートを提供します。</span></p>

<p><span class="merged" id="all.dyT8P.spl1" title="原文 : To use it, your service registers Prometheus support with your routing set-up.">これを使用するには、サービスがルーティング設定にPrometheusサポートを登録します。</span> <span class="merged" id="all.dyT8P.spl2" title="原文 : You can customize its configuration.">構成をカスタマイズできます。</span> <span class="merged" id="all.dyT8P.spl3" title="原文 : For information about using Prometheus, see the Prometheus documentation: https://prometheus.io/docs/introduction/overview/.">Prometheusの使用の詳細は、Prometheusのドキュメントを参照してください : <a class="bare" href="https://prometheus.io/docs/introduction/overview/" target="_blank">https://prometheus.io/docs/introduction/overview/</a>。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.Bx4eY.spl1" title="原文 : Helidon’s fully-functional, built-in metrics implementation supports Prometheus (OpenMetrics) output.">Helidonの完全に機能する組込みメトリクス実装では、Prometheus (OpenMetrics)出力がサポートされます。</span> <span class="merged" id="all.Bx4eY.spl2" title="原文 : Use the optional support described in this section only if you want to use the Prometheus API from your application code."><em>「これ」</em>セクションで説明されているオプションのサポートは、アプリケーション・コードからPrometheus <em>API</em>を使用する場合のみ使用します。</span> </p>
</div>


<h4 id="prom-maven-coordinates"><span class="merged" id="all.317oeS.52"  title="原文:: Maven Coordinates">Maven連携</span></h4>
<div class="section">
<markup
lang="xml"
title="Dependency for Helidon Prometheus API support"
>    &lt;dependency&gt;
        &lt;groupId&gt;io.helidon.metrics&lt;/groupId&gt;
        &lt;artifactId&gt;helidon-metrics-prometheus&lt;/artifactId&gt;
    &lt;/dependency&gt;</markup>

</div>


<h4 id="prom-usage"><span class="merged" id="all.JUOSC.55"  title="原文:: Usage">使用</span></h4>
<div class="section">
<p><span class="merged" id="all.mEweb.spl1" title="原文 : Your application code uses the Prometheus API to manage metrics.">アプリケーション・コードでは、Prometheus APIを使用してメトリクスを管理します。</span> <span class="merged" id="all.mEweb.spl2" title="原文 : To expose those metrics to clients via a REST endpoint, your code uses the PrometheusSupport interface which Helidon provides.">これらのメトリクスをRESTエンドポイント経由でクライアントに公開するには、Helidonが提供する<code>PrometheusSupport</code>インタフェースを使用します。</span> </p>

</div>


<h4 id="prom-api"><span class="merged" id="all.15i2uT.24"  title="原文:: API">API</span></h4>
<div class="section">
<p><span class="merged" id="all.1E15hS" title="原文 : Your code creates a PrometheusSupport object either using a static factory method (shown in the following example) or by using its Builder.">コードは、静的ファクトリ・メソッド(次の例を参照)を使用するか、<a href="/apidocs/io.helidon.metrics.prometheus/PrometheusSupport.Builder.html" target="_blank"><code>Builder</code></a>を使用して<a href="/apidocs/io.helidon.metrics.prometheus/PrometheusSupport.html" target="_blank"><code>PrometheusSupport</code></a>オブジェクトを作成します。</span></p>

<markup
lang="java"

>import io.helidon.metrics.prometheus.PrometheusSupport;

routing
            .register(PrometheusSupport.create())
            .register("/myapp", new MyService());</markup>

<p><span class="merged" id="all.3NEmM7.spl1" title="原文 : This example uses the default Prometheus CollectorRegistry.">この例では、デフォルトのPrometheus <code>CollectorRegistry</code>を使用します。</span> <span class="merged" id="all.3NEmM7.spl2" title="原文 : By default, the PrometheusSupport and exposes its REST endpoint at the path /metrics.">デフォルトでは、<code>PrometheusSupport</code>はパス<code>/metrics</code>でRESTエンドポイントを公開します。</span> <span class="merged" id="all.3NEmM7.spl3" title="原文 : Use the builder obtained by PrometheusSupport.builder() to configure a different CollectorRegistry or a different path."><code>PrometheusSupport.builder()</code>によって取得されたビルダーを使用して、別の<code>CollectorRegistry</code>または別のパスを構成します。</span> </p>

</div>

</div>

</div>

</doc-view>
