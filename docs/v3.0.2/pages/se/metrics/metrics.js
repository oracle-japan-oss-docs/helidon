<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.54"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.52" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.38" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.34" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.20" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.31" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.36" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4Y979A" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#config-rest-request')" to="#config-rest-request">追加情報</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.68"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.3ACBDF.spl1" title="原文 : Helidon SE metrics is inspired by-​but does not fully implement-​the MicroProfile Metrics specification.">Helidon SEメトリクスは、MicroProfileメトリクス仕様でインスピレーションを受けますが、完全に実装されていません。</span> <span class="merged" id="all.3ACBDF.spl2" title="原文 : In particular, the Helidon metrics subsystem furnishes">特に、Helidonメトリクス・サブシステムには、</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.7qU83" title="原文 : a unified way for Helidon servers to export monitoring data-​telemetry-​to management agents, and">Helidonサーバーがモニタリング・データ(テレメトリ)を管理エージェントにエクスポートする統一された方法、および</span></p>

</li>
<li>
<p><span class="merged" id="all.2IXx6f.1" title="原文 : a unified Java API which all application programmers can use to register and update metrics to expose telemetry data from their services.">すべてのアプリケーション・プログラマがメトリクスを登録および更新して、サービスからテレメトリ・データを公開するために使用できる、統合Java APIです。</span></p>

</li>
</ul>

<p><span class="merged" id="all.JQrkQ.1" title="原文 : Learn more about the MicroProfile Metrics specification."><a href="https://github.com/eclipse/microprofile-metrics/releases/tag/4.0" target="_blank">「MicroProfileメトリクス仕様」</a>についてさらに学習します。</span></p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.48"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.1sbe4O.1" title="原文 : To enable metrics add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">メトリクスを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"
title="Packaging full-featured metrics"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.metrics&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-metrics&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.1xUkDk.1" title="原文 : Adding this dependency packages the full-featured metrics implementation with your service.">この依存関係を追加すると、フル機能のメトリクス実装がサービスにパッケージ化されます。</span></p>


<h3 id="_other_packaging_options"><span class="merged" id="all.c52dM.1" title="原文 : Other packaging options">その他のパッケージ・オプション</span></h3>
<div class="section">
<p><span class="merged" id="all.1z8rHe.spl1" title="原文 : Helidon gives you flexibility in how you make metrics available to your service.">Helidonは、サービスに対してメトリクスを使用できるようにするための柔軟性を提供します。</span> <span class="merged" id="all.1z8rHe.spl2" title="原文 : This document explains your options."><router-link to="/se/metrics/metrics-capable-components">「このドキュメント」</router-link>では、オプションについて説明します。</span> </p>

</div>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.51"  title="原文:: Usage">使用方法</span></h2>
<div class="section">

<h3 id="_instrumenting_your_service"><span class="merged" id="all.450nKW.1" title="原文 : Instrumenting Your Service">サービスの計測</span></h3>
<div class="section">
<p><span class="merged" id="all.2I7Xjp" title="原文 : You add metrics to your service by writing code which explicitly invokes the metrics API to register metrics, retrieve previously-registered metrics, and update metric values.">メトリクスAPIを明示的に起動してメトリクスを登録し、以前に登録したメトリクスを取得し、メトリック値を更新するコードを記述して、サービスにメトリクスを追加します。</span></p>

<p><span class="merged" id="all.daNPL" title="原文 : Later sections of this document describe how to do this.">このドキュメントの後のセクションでは、この方法について説明します。</span></p>

</div>


<h3 id="_categorizing_types_of_metrics"><span class="merged" id="all.4SfhBW.1" title="原文 : Categorizing Types of Metrics">メトリクスの分類</span></h3>
<div class="section">
<p><span class="merged" id="all.Da25n.1" title="原文 : Helidon distinguishes among three general types, or scopes, of metrics, as described in the MP metrics specification.">Helidonは、<a href="https://download.eclipse.org/microprofile/microprofile-metrics-4.0/microprofile-metrics-spec-4.0.html" target="_blank">「MPメトリクス仕様」</a>で説明されているように、メトリクスの3つの一般的な<em>「タイプ」</em>(スコープ)を区別します。</span></p>

<div class="block-title"><span class="merged" id="all.23sHaS.1" title="原文 : Types (scopes) of metrics"><span>メトリクスのタイプ(スコープ)</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1MzzvR.1" title="原文 : Type/scope">Type/scope</span></th>
<th><span class="merged" id="all.1LLqtP.1"  title="原文:: Typical Usage">一般的な用途</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3Wnhdh.1"  title="原文:: base">base</span></td>
<td class=""><span class="merged" id="all.19uVxy.1" title="原文 : Mandated by the MP metrics specification, such as OS or Java runtime measurements (available heap, disk space, etc.).">OSまたはJavaランタイムの測定(使用可能なヒープ、ディスク領域など)など、MPメトリクス仕様によって指定されます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4UKIas.1"  title="原文:: vendor">vendor</span></td>
<td class=""><span class="merged" id="all.10ebV9.1" title="原文 : Implemented by vendors, including the REST.request metrics and other key performance indicator measurements (described in later sections)."><code>REST.request</code>メトリクスおよびその他のキー・パフォーマンス・インジケータの測定を含むベンダーによって実装されます(後の項で説明します)。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.30c7Xt.1"  title="原文:: application">application</span></td>
<td class=""><span class="merged" id="all.exSkz.1" title="原文 : Declared via annotations or programmatically registered by your service code.">注釈またはサービス・コードによってプログラム的に登録された注釈によって宣言されます。</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.3XTDnU.1" title="原文 : When you add metrics annotations to your service code, Helidon registers the resulting metrics as type application.">メトリクス注釈をサービス・コードに追加すると、Helidonは結果のメトリクスをタイプ<code>application</code>として登録します。</span></p>

</div>


<h3 id="_metric_registries"><span class="merged" id="all.38ZrBy.1" title="原文 : Metric Registries">メトリック・レジストリ</span></h3>
<div class="section">
<p><span class="merged" id="all.2bDFP6.1.spl1" title="原文 : A metric registry collects registered metrics of a given type."><em>「メトリック・レジストリ」</em>は、指定されたタイプの登録済メトリクスを収集します。</span> <span class="merged" id="all.2bDFP6.1.spl2" title="原文 : Helidon supports three registries, one for each of the three metrics types.">Helidonでは、3つのメトリクス・タイプのそれぞれに1つずつ、3つのレジストリがサポートされています。</span> </p>

<p><span class="merged" id="all.a7swe.1" title="原文 : When you add code to your service to create a metric programmatically, the code first locates the appropriate registry and then registers the metric with that registry.">サービスにコードを追加してメトリックをプログラムで作成すると、最初に適切なレジストリを検索し、そのレジストリにメトリックを登録します。</span></p>

</div>


<h3 id="_retrieving_metrics_reports_from_your_service"><span class="merged" id="all.1V1yfM.1" title="原文 : Retrieving Metrics Reports from your Service">サービスからのメトリクス・レポートの取得</span></h3>
<div class="section">
<p><span class="merged" id="all.2PYtwR.1" title="原文 : When you add the metrics dependency to your project, Helidon automatically provides a built-in REST endpoint /metrics which responds with a report of the registered metrics and their values.">プロジェクトにメトリクス依存関係を追加すると、Helidonでは、登録済メトリクスとその値のレポートに応答する組込みRESTエンドポイント<code>/metrics</code>が自動的に提供されます。</span></p>

<p><span class="merged" id="all.2BwURj.1" title="原文 : Clients can request a particular output format.">クライアントは特定の出力形式をリクエストできます。</span></p>

<div class="block-title"><span class="merged" id="all.4DrPvT.1" title="原文 : Formats for /metrics output"><span><code>/metrics</code>出力の形式</span></span></div>
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

<p><span class="merged" id="all.47I0lZ.1" title="原文 : Clients can also limit the report by appending the metric type to the path:">クライアントは、メトリック・タイプをパスに追加することによってレポートを制限することもできます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4bRzmh.1"  title="原文: /metrics/base"><code>/metrics/base</code></span></p>

</li>
<li>
<p><span class="merged" id="all.5dnJ6.1"  title="原文: /metrics/vendor"><code>/metrics/vendor</code></span></p>

</li>
<li>
<p><span class="merged" id="all.4Iyjn0.1"  title="原文: /metrics/application"><code>/metrics/application</code></span></p>

</li>
</ul>

<p><span class="merged" id="all.2YaHSK.1" title="原文 : Further, clients can narrow down to a specific metric name by adding the name as a subpath such as /metrics/application/myCount.">さらに、クライアントは、<code>/metrics/application/myCount</code>などのサブパスとして名前を追加することで、特定のメトリック名に絞り込むことができます。</span></p>

<markup
lang="bash"
title="Example Reporting: Prometheus format"
>curl -s -H 'Accept: text/plain' -X GET http://localhost:8080/metrics/</markup>

<div class="listing">
<markup># TYPE base:classloader_total_loaded_class_count counter
# HELP base:classloader_total_loaded_class_count Displays the total number of classes that have been loaded since the Java virtual machine has started execution.
base:classloader_total_loaded_class_count 3157</markup>
</div>

<markup
lang="bash"
title="Example Reporting: JSON format"
>curl -s -H 'Accept: application/json' -X GET http://localhost:8080/metrics/</markup>

<div class="listing">
<markup>{
   "base" : {
      "memory.maxHeap" : 3817865216,
      "memory.committedHeap" : 335544320,
    }
}</markup>
</div>

<p><span class="merged" id="all.31ILX3.1" title="原文 : In addition to your application metrics, the reports contain other metrics of interest such as system and VM information.">レポートには、アプリケーション・メトリクスに加えて、システム情報やVM情報、その他の関心のあるメトリクスが含まれます。</span></p>

</div>


<h3 id="_enabling_the_metricssupport_rest_service"><span class="merged" id="all.7YxwG" title="原文 : Enabling the MetricsSupport REST Service"><code>MetricsSupport</code> RESTサービスの有効化</span></h3>
<div class="section">
<p><span class="merged" id="all.gLLIa" title="原文 : To enable the metrics REST endpoint:">メトリクスRESTエンドポイントを有効にするには:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.3xdgDl" title="原文 : Create an instance of MetricsSupport, either directly as shown below or using its Builder.">次に示すように直接、または<a href="./apidocs/io.helidon.metrics.serviceapi/MetricsSupport.Builder.html" target="_blank"><code>Builder</code></a>を使用して、<a href="./apidocs/io.helidon.metrics.serviceapi/MetricsSupport.html" target="_blank"><code>MetricsSupport</code></a>のインスタンスを作成します。</span>

</li>
<li>
<span class="merged" id="all.1nVqiD" title="原文 : Include the MetricsSupport instance in your application&rsquo;s routing.">アプリケーションのルーティングに<code>MetricsSupport</code>インスタンスを含めます。</span>

</li>
</ol>

<markup
lang="java"

>import io.helidon.metrics.serviceapi.MetricsSupport;

Routing.builder()
        .register(MetricsSupport.create())
        .register("/myapp", new MyService())
        .build();</markup>

</div>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.22"  title="原文:: API">API</span></h2>
<div class="section">
<p><span class="merged" id="all.3Ip4s0" title="原文 : To work with Helidon Metrics in your code, follow these steps:">コードでHelidonメトリクスを使用するには、次のステップに従います:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.SgBTd" title="原文 : Use a static method on the RegistryFactory to get a reference to the MetricRegistry instance you want to use."><a href="./apidocs/io.helidon.metrics.api/RegistryFactory.html" target="_blank"><code>RegistryFactory</code></a>で静的メソッドを使用して、使用する<a href="https://download.eclipse.org/microprofile/microprofile-metrics-4.0/apidocs/org/eclipse/microprofile/metrics/MetricRegistry.html" target="_blank"><code>MetricRegistry</code></a>インスタンスへの参照を取得します。</span>

</li>
<li>
<span class="merged" id="all.4CDiwQ" title="原文 : Use the MetricRegistry instance to register new metrics and look up previously-registered metrics."><code>MetricRegistry</code>インスタンスを使用して、新しいメトリクスを登録し、以前に登録したメトリクスを検索します。</span>

</li>
<li>
<span class="merged" id="all.2gyYGo" title="原文 : Use the metric reference returned from the MetricRegistry to update the metric or get its value."><code>MetricRegistry</code>から返されたメトリック参照を使用して、メトリックを更新するか、その値を取得します。</span>

</li>
</ol>

<p><span class="merged" id="all.BFCmV" title="原文 : You can also use the MetricRegistry to remove an existing metric."><code>MetricRegistry</code>を使用して既存のメトリックを削除することもできます。</span></p>


<h3 id="_helidon_metrics_api"><span class="merged" id="all.1DmFgE" title="原文 : Helidon Metrics API">HelidonメトリクスAPI</span></h3>
<div class="section">
<p><span class="merged" id="all.1z0xyU.spl1" title="原文 : The Helidon Metrics API is aligned with the MicroProfile Metrics API.">HelidonメトリクスAPIは、<a href="https://download.eclipse.org/microprofile/microprofile-metrics-4.0/apidocs" target="_blank">「MicroProfileメトリクスAPI」</a>と連携されています。</span> <span class="merged" id="all.1z0xyU.spl2" title="原文 : That API defines the classes and interfaces for metric types, metric registries, and other related items.">そのAPIは、メトリック・タイプ、メトリック登録およびその他の関連アイテムのクラスとインタフェースを定義します。</span> <span class="merged" id="all.1z0xyU.spl3" title="原文 : Helidon Metrics reuses that API for classes and interfaces (but not for annotations which Helidon SE does not support).">Helidonメトリクスは、クラスおよびインタフェースに対してそのAPIを再利用します(ただし、Helidon SEがサポートしない注釈には使用しません)。</span> </p>

<p><span class="merged" id="all.4SH9a0" title="原文 : The following table summarizes the metric types.">次の表に、メトリック・タイプの概要を示します。</span></p>

<div class="block-title"><span class="merged" id="all.rkeae"  title="原文:: Metric Types"><span>メトリック・タイプ</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1jKf4T"  title="原文:: Metric Type">メトリック・タイプ</span></th>
<th><span class="merged" id="all.JUOSC.52"  title="原文:: Usage">使用方法</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1btHpi"  title="原文:: Counter"><a href="https://download.eclipse.org/microprofile/microprofile-metrics-4.0/apidocs/org/eclipse/microprofile/metrics/Counter.html" target="_blank"><code>Counter</code></a></span></td>
<td class=""><span class="merged" id="all.jTrlz.1" title="原文 : Monotonically increasing count of events.">イベント数を単調に増やします。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.YQT94" title="原文 : ConcurrentGauge"><a href="https://download.eclipse.org/microprofile/microprofile-metrics-4.0/apidocs/org/eclipse/microprofile/metricsConcurrentGauge.html" target="_blank"><code>ConcurrentGauge</code></a></span></td>
<td class=""><span class="merged" id="all.2W8hvR.1" title="原文 : Increasing and decreasing measurement of currently-executing blocks of code.">現在実行されているコード・ブロックの測定の増減。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1uvEZt"  title="原文:: Gauge"><a href="https://download.eclipse.org/microprofile/microprofile-metrics-4.0/apidocs/org/eclipse/microprofile/metrics/Gauge.html" target="_blank"><code>ゲージ</code></a></span></td>
<td class=""><span class="merged" id="all.1AhpmC.1" title="原文 : Access to a value managed by other code in the service.">サービス内の他のコードによって管理される値にアクセスします。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.tcKi0"  title="原文:: Meter"><a href="https://download.eclipse.org/microprofile/microprofile-metrics-4.0/apidocs/org/eclipse/microprofile/metrics/Meter.html" target="_blank"><code>メーター</code></a></span></td>
<td class=""><span class="merged" id="all.336lMv.1" title="原文 : Count of invocations and how frequently invocations have occurred.">呼出しの数および呼出しの頻度。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3pfNri" title="原文 : SimpleTimer"><a href="https://download.eclipse.org/microprofile/microprofile-metrics-4.0/apidocs/org/eclipse/microprofile/metrics/SimpleTimer.html" target="_blank"><code>SimpleTimer</code></a></span></td>
<td class=""><span class="merged" id="all.1JVqoN.1" title="原文 : Count of invocations and the total duration consumed by those invocations.">呼出しの数と、それらの呼出しによって消費された合計期間。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1CXEOS"  title="原文:: Timer"><a href="https://download.eclipse.org/microprofile/microprofile-metrics-4.0/apidocs/org/eclipse/microprofile/metrics/Timer.html" target="_blank"><code>Timer</code></a></span></td>
<td class=""><span class="merged" id="all.4duRzo.1" title="原文 : Frequency of invocations and the distribution of how long the invocations take.">呼出しの頻度および呼出しの所要時間の分布。</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.4Oinux" title="原文 : Each metric type has its own set of methods for updating and retrieving the metric&rsquo;s value.">各メトリック・タイプには、メトリックの値を更新および取得するための独自のメソッド・セットがあります。</span></p>

</div>


<h3 id="_the_metricregistry_api"><span class="merged" id="all.1a4P1u.1" title="原文 : The MetricRegistry API">The <code>MetricRegistry</code> API</span></h3>
<div class="section">
<p><span class="merged" id="all.3Yy91S.1" title="原文 : To register or look up metrics programmatically, your service code uses one of the three MetricRegistry instances (base, vendor, and application) which Helidon furnishes automatically.">メトリクスをプログラムに登録または検索するには、サービス・コードで3つの<a href="https://download.eclipse.org/microprofile/microprofile-metrics-4.0/apidocs/org/eclipse/microprofile/metrics/MetricRegistry.html" target="_blank"><code>MetricRegistry</code></a>インスタンス(ベース、ベンダーおよびアプリケーション)のうちの1つを使用して、Helidonが自動的に設定されます。</span></p>

<p><span class="merged" id="all.4MzsbO.spl1" title="原文 : To get a MetricRegistry reference, first get a Helidon RegistryFactory."><code>MetricRegistry</code>参照を取得するには、最初にHelidon <a href="./apidocs/io.helidon.metrics.api/RegistryFactory.html" target="_blank"><code>RegistryFactory</code></a>を取得します。</span> <span class="merged" id="all.4MzsbO.spl2" title="原文 : Then invoke getRegistry on the RegistryFactory instance.">次に、<code>RegistryFactory</code>インスタンスで<code>getRegistry</code>を起動します。</span> </p>

<p><span class="merged" id="all.22sun3.1" title="原文 : The MetricRegistry allows your code to register new metrics, look up previously-registered metrics, and remove metrics."><code>MetricRegistry</code>を使用すると、コードで新しいメトリクスを登録し、以前に登録したメトリクスを検索し、メトリクスを削除できます。</span></p>

</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.37"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.46xH0p" title="原文 : To control how the Helidon metrics subsystem behaves, add a metrics section to your configuration file, such as application.yaml.">Helidonメトリクス・サブシステムの動作を制御するには、<code>application.yaml</code>などの構成ファイルに<code>metrics</code>セクションを追加します。</span></p>

<p><span class="merged" id="all.42weEL.2" title="原文 : Type: io.helidon.metrics.serviceapi.MetricsSupport">タイプ: <a href="./apidocs/io.helidon.metrics.serviceapi/io/helidon/metrics/serviceapi/MetricsSupport.html" target="_blank">io.helidon.metrics.serviceapi.MetricsSupport</a></span></p>


<h3 id="_configuration_options"><span class="merged" id="all.3SKgM1.89"  title="原文:: Configuration options">構成オプション</span></h3>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.90" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.112"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.108"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.113"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.118"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.rUljB.3"  title="原文: appName"><code>appName</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.302"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3k7wSR.3" title="原文 : Sets the value for the _app tag to be applied to all metrics.">すべてのメトリクスに適用される<code>_app</code>タグの値を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3lo4qT.3"  title="原文: base"><code>base</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3zC5Y4.3" title="原文 : BaseMetricsSettings"><router-link to="/config/io_helidon_metrics_api_BaseMetricsSettings">BaseMetricsSettings</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.16IQfa.3" title="原文 : Set the base metrics settings.">ベース・メトリクス設定を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3UsoFV.15"  title="原文: cors"><code>cors</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1Gn61H.15" title="原文 : CrossOriginConfig"><router-link to="/config/io_helidon_webserver_cors_CrossOriginConfig">CrossOriginConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4NniMS.8" title="原文 : Sets the cross-origin config builder for use in establishing CORS support for the service endpoints.">サービス・エンドポイントのCORSサポートの確立に使用するクロス・オリジン構成ビルダーを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48UcwL.25"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.171"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.41X411.3" title="原文 : Sets whether metrics should be enabled.">メトリクスを有効にするかどうかを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Gz6OP.3"  title="原文: key-performance-indicators"><code>key-performance-indicators</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2Y8Giy.3" title="原文 : KeyPerformanceIndicatorMetricsSettings"><router-link to="/config/io_helidon_metrics_api_KeyPerformanceIndicatorMetricsSettings">KeyPerformanceIndicatorMetricsSettings</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4SC7W9.3" title="原文 : Set the KPI metrics settings.">KPIメトリクス設定を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1jGmWf.3"  title="原文: registries"><code>registries</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4HJlou.3" title="原文 : Map&lt;string, RegistrySettings&gt;"><router-link to="/config/io_helidon_metrics_api_RegistrySettings">マップ&lt;string, RegistrySettings></router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3i3kSz.3" title="原文 : Sets the registry settings for the specified registry type.">指定されたレジストリ・タイプのレジストリ設定を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2rpt0z.8"  title="原文: routing"><code>routing</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.303"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1n2NdZ.8" title="原文 : Sets the routing name to use for setting up the service&rsquo;s endpoint.">サービスのエンドポイントの設定に使用するルーティング名を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3WNvqu.10"  title="原文: tags"><code>tags</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1WdJek.10" title="原文 : Map&lt;string, string&gt;">マップ&lt;string, string></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1f8BSc.3" title="原文 : Sets the global tags to be applied to all metrics.">すべてのメトリクスに適用されるグローバル・タグを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2C8nDO.12"  title="原文: web-context"><code>web-context</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.304"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3MWNIS.8" title="原文 : Sets the web context to use for the service&rsquo;s endpoint.">サービスのエンドポイントに使用するwebコンテキストを設定します。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.39"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.FdExe" title="原文 : Helidon SE includes several prewritten example applications illustrating aspects of metrics:">Helidon SEには、メトリクスの側面を示すいくつかの事前記述されたサンプル・アプリケーションが含まれています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3J7OGA" title="原文 : Enabling/disabling metrics using MetricsSettings"><code>MetricsSettings</code>を使用した<a href="https://github.com/oracle/helidon/tree/master/examples/metrics/filtering/se" target="_blank">「メトリクスの有効化/無効化」</a></span></p>

</li>
<li>
<p><span class="merged" id="all.113Nmi" title="原文 : Controlling key performance indicator metrics using configuration and KeyPerformanceIndicatorMetricsSettings.">構成および<code>KeyPerformanceIndicatorMetricsSettings</code>を使用する<a href="https://github.com/oracle/helidon/tree/master/examples/metrics/kpi" target="_blank">「キー・パフォーマンス・インジケータ・メトリクスの制御」</a>。</span></p>

</li>
</ul>

<p><span class="merged" id="all.KTAi4" title="原文 : The rest of this section shows how to add a metric to your code and how to configure the Helidon metrics subsystem.">このセクションの残りの部分では、メトリックをコードに追加する方法と、Helidonメトリクス・サブシステムを構成する方法を示します。</span></p>


<h3 id="_example_application_code"><span class="merged" id="all.168mON.1" title="原文 : Example Application Code">アプリケーション・コードの例</span></h3>
<div class="section">
<p><span class="merged" id="all.QsWG4" title="原文 : The following example illustrates registering and updating a new Counter in application code.">次の例は、アプリケーション・コード内の新しい<code>Counter</code>の登録および更新を示しています。</span></p>

<markup
lang="java"
title="Define and use a <code>Counter</code>"
>import io.helidon.metrics.api.RegistryFactory;
import org.eclipse.microprofile.metrics.Counter;
import org.eclipse.microprofile.metrics.MetricRegistry;
//...

public class MyService implements Service {

    private final MetricRegistry registry = RegistryFactory.getInstance()
        .getRegistry(MetricRegistry.Type.APPLICATION); <span class="conum" data-value="1" />
    private final Counter accessCtr = registry.counter("accessctr"); <span class="conum" data-value="2" />

    @Override
    public void update(Routing.Rules rules) {
        rules
             .any(this::countAccess)
             .get("/", this::myGet);
    }

    private void countAccess(ServerRequest request, ServerResponse response) {
            accessCtr.inc(); <span class="conum" data-value="3" />
            request.next();
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1NO5KQ" title="原文 : Get the application metric registry.">アプリケーション・メトリック・レジストリを取得します。</span></li>
<li data-value="2"><span class="merged" id="all.3R4ilH" title="原文 : Create a counter in that registry.">そのレジストリにカウンタを作成します。</span></li>
<li data-value="3"><span class="merged" id="all.3HZLRk" title="原文 : Increment the counter for every request.">すべてのリクエストのカウンタを増分します。</span></li>
</ul>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3tKLqw.spl1" title="原文 : Helidon-provided endpoints for /metrics do their work synchronously, using the same thread on which the request arrived via Netty."><code>/metrics</code>のHelidon-providedエンドポイントは、リクエストがNetty経由で到着したスレッドと同じスレッドを使用して、同期的に作業を行います。</span> <span class="merged" id="all.3tKLqw.spl2" title="原文 : To prevent performance degradation, avoid including long-running code that can be invoked by these handlers while Helidon is responding to the metric.">パフォーマンスの低下を防ぐため、Helidonがメトリックに応答している間に、これらのハンドラによって起動できる長時間実行コードを含めないでください。</span> <span class="merged" id="all.3tKLqw.spl3" title="原文 : For example, if you implement your own application-specific metric types, you will write logic to format the JSON and OpenMetrics output for those metric types.">たとえば、独自のアプリケーション固有のメトリック・タイプを実装する場合、それらのメトリック・タイプのJSONおよびOpenMetrics出力をフォーマットするロジックを記述します。</span> <span class="merged" id="all.3tKLqw.spl4" title="原文 : Helidon invokes this formatting logic whenever a client accesses the /metrics endpoints, so make that formatting code as efficient as possible.">Helidonは、クライアントが /metricsエンドポイントにアクセスすると常にこの書式設定ロジックを起動するため、可能なかぎり書式設定コードを効率的にします。</span> </p>
</div>

</div>


<h3 id="example-configuration"><span class="merged" id="all.2sU9aQ.1"  title="原文:: Example Configuration">構成例</span></h3>
<div class="section">
<p><span class="merged" id="all.456Bvv.1.spl1" title="原文 : Metrics configuration is quite extensive and powerful and, therefore, a bit complicated.">メトリクス構成は非常に広範囲で強力であるため、少し複雑です。</span> <span class="merged" id="all.456Bvv.1.spl2" title="原文 : The rest of this section illustrates some of the most common scenarios:">このセクションの残りの部分では、最も一般的なシナリオについて説明します:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2zp6OD.1" title="原文 : Disable metrics entirely."><router-link @click.native="this.scrollFix('#config-disable')" to="#config-disable">メトリクスを完全に無効にします。</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.45LNWT.1" title="原文 : Selectively enable or disable metrics by metric registry type and, within type, by name."><router-link @click.native="this.scrollFix('#config-selective')" to="#config-selective">メトリック・レジストリ・タイプ別およびタイプ内のメトリクスを名前別に選択的に有効または無効にします。</router-link></span></p>

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
>metrics:
  enabled: false</markup>

<p><span class="merged" id="all.HCXIB.1" title="原文 : Helidon does not update metrics, and the /metrics endpoints respond with 404 plus a message that the metrics subsystem is disabled.">Helidonはメトリクスを更新せず、<code>/metrics</code>エンドポイントは<code>404</code>とメトリクス・サブシステムが無効であるというメッセージで応答します。</span></p>

</div>


<h4 id="config-selective"><span class="merged" id="all.2lChgi.1" title="原文 : Disable Selected Metrics">選択したメトリクスの無効化</span></h4>
<div class="section">
<p><span class="merged" id="all.3ZRsGn.3.spl1" title="原文 : You can be even more selective.">もっと選択的になることができます。</span> <span class="merged" id="all.3ZRsGn.3.spl2" title="原文 : Within a registry type you can configure up to two regular expression patterns:">レジストリ・タイプ内では、最大2つの正規表現パターンを構成できます:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1zsYLp.3" title="原文 : one matching metric names to exclude, and"><em>「除外」</em>に一致する1つのメトリック名、および</span></p>

</li>
<li>
<p><span class="merged" id="all.3Aies9.3" title="原文 : one matching metric names to include."><em>「含める」</em>一致する1つのメトリック名。</span></p>

</li>
</ul>

<p><span class="merged" id="all.1ZlNQz.3" title="原文 : Helidon updates and reports a metric only if two conditions hold:">Helidonは、2つの条件が保持されている場合にのみメトリックを更新およびレポートします:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4G7F05.3" title="原文 : the metric name does not match the exclude regex pattern (if you define one), and">メトリック名は、<code>exclude</code>正規表現パターン(定義した場合)と一致<em>「しません」</em>、および</span></p>

</li>
<li>
<p><span class="merged" id="all.2EEvyx.3"  title="原文:: either">また</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.3zYc4V.3" title="原文 : there is no include regex pattern, or"><code>include</code>正規表現パターンがないか、</span></p>

</li>
<li>
<p><span class="merged" id="all.2WKtx9.3" title="原文 : the metric name matches the include pattern.">メトリック名は<code>include</code>パターンと一致します。</span></p>

</li>
</ul>

</li>
</ul>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.5"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.3RoVe3.3" title="原文 : Make sure any include regex pattern you specify matches all the metric names you want to capture.">指定した<code>include</code>正規表現パターンが、取得するメトリック名<em>「すべて」</em>と一致していることを確認します。</span></p>
</p>
</div>

<p><span class="merged" id="all.2vtS5v.3" title="原文 : Suppose your application creates and updates a group of metrics with names such as myapp.xxx.queries, myapp.xxx.creates, myapp.xxx.updates, and myapp.xxx.deletes where xxx can be either supplier or customer.">アプリケーションで、<code>myapp.xxx.queries</code>, <code>myapp.xxx.creates</code>, <code>myapp.xxx.updates</code>などの名前を持つメトリクスのグループを作成および更新し、<code>myapp.xxx.deletes</code> (<code>xxx</code>は<code>supplier</code>または<code>customer</code>のいずれか)を実行するとします。</span></p>

<p><span class="merged" id="all.3JbypL.1" title="原文 : The following example gathers all metrics except those from your application regarding suppliers although supplier updates are included:">次の例では、サプライヤ更新が<em>「含まれて」</em><em>「いるが」</em>サプライヤに関するアプリケーションからのメトリクス<em>「以外」</em>のすべてのメトリクスを収集します:</span></p>

<markup
lang="yaml"
title="Disabling and enabling metrics by name"
>metrics:
  registries:
    - type: application
      filter:
        exclude: "myapp\.supplier\..*"
        include: "myapp\.supplier\.updates"</markup>

<p><span class="merged" id="all.2CBVSA.1.spl1" title="原文 : This setting excludes metrics with names starting with myapp.supplier except for the metric myapp.supplier.updates.">この設定では、メトリック<code>myapp.supplier.updates</code><em>「以外」</em>の<code>myapp.supplier</code>で始まる名前のメトリクスを除外します。</span> <span class="merged" id="all.2CBVSA.1.spl2" title="原文 : The exclude and include values are regular expressions."><code>exclude</code>および<code>include</code>値は正規表現です。</span> </p>

</div>


<h4 id="config-kpi"><span class="merged" id="all.1RbZUb.3" title="原文 : Collecting Basic and Extended Key Performance Indicator (KPI) Metrics">基本および拡張キー・パフォーマンス・インジケータ(KPI)メトリクスの収集</span></h4>
<div class="section">
<p><span class="merged" id="all.3sOZXl.3" title="原文 : Any time you include the Helidon metrics module in your application, Helidon tracks two basic performance indicator metrics:">アプリケーションにHelidonメトリクス・モジュールを含めるたびに、Helidonでは、次の2つの基本的なパフォーマンス・メトリクスが追跡されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3AcZDp.3" title="原文 : a Counter of all requests received (requests.count), and">受信したすべてのリクエストの<code>Counter</code> (<code>requests.count</code>)、および</span></p>

</li>
<li>
<p><span class="merged" id="all.153KWy.3" title="原文 : a Meter of all requests received (requests.meter).">受信したすべてのリクエストの<code>Meter</code> (<code>requests.meter</code>)。</span></p>

</li>
</ul>

<p><span class="merged" id="all.4b1RzM.1" title="原文 : Helidon SE also includes additional, extended KPI metrics which are disabled by default:">Helidon SEには、デフォルトでは無効になっている追加の拡張KPIメトリクスも含まれています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.JrarW.3" title="原文 : current number of requests in-flight - a ConcurrentGauge (requests.inFlight) of requests currently being processed">現在進行中のリクエスト数 - 現在処理中のリクエストの<code>ConcurrentGauge</code> (<code>requests.inFlight</code>)</span></p>

</li>
<li>
<p><span class="merged" id="all.2cyom6.3" title="原文 : long-running requests - a Meter (requests.longRunning) measuring the rate at which Helidon processes requests which take at least a given amount of time to complete; configurable, defaults to 10000 milliseconds (10 seconds)">長時間実行リクエスト - Helidonが完了までに少なくとも指定された時間を要するリクエストを処理する速度を測定する<code>Meter</code> (<code>requests.longRunning</code>)です。構成可能で、デフォルトは10000ミリ秒(10秒)です</span></p>

</li>
<li>
<p><span class="merged" id="all.2iOF4J.3" title="原文 : load - a Meter (requests.load) measuring the rate at which requests are worked on (as opposed to received)">load - リクエストの処理速度を測定する<code>Meter</code> (<code>requests.load</code>) (受信したものとは対照的)</span></p>

</li>
<li>
<p><span class="merged" id="all.1QFwn1.3" title="原文 : deferred - a Meter (requests.deferred) measuring the rate at which a request&rsquo;s processing is delayed after Helidon receives the request">延期 - Helidonがリクエストを受信した後にリクエスト処理が遅延する割合を測定する<code>Meter</code> (<code>requests.deferred</code>)</span></p>

</li>
</ul>

<p><span class="merged" id="all.oRutk.3" title="原文 : You can enable and control these metrics using configuration:">構成を使用して、次のメトリクスを有効化および制御できます:</span></p>

<markup
lang="yaml"
title="Controlling extended KPI metrics"
>metrics:
  key-performance-indicators:
    extended: true
    long-running:
      threshold-ms: 2000</markup>

</div>

</div>

</div>


<h2 id="config-rest-request"><span class="merged" id="all.1BotSu.25"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">

<h3 id="_support_for_the_prometheus_metrics_api"><span class="merged" id="all.3RBxf4" title="原文 : Support for the Prometheus Metrics API">PrometheusメトリクスAPIのサポート</span></h3>
<div class="section">
<p><span class="merged" id="all.lqISh" title="原文 : Helidon provides optional support for the Prometheus metrics API.">Helidonは、PrometheusメトリクスAPIのオプション・サポートを提供します。</span></p>

<p><span class="merged" id="all.dyT8P.spl1" title="原文 : To use it, your service registers Prometheus support with your routing set-up.">これを使用するには、サービスがルーティング設定にPrometheusサポートを登録します。</span> <span class="merged" id="all.dyT8P.spl2" title="原文 : You can customize its configuration.">構成をカスタマイズできます。</span> <span class="merged" id="all.dyT8P.spl3" title="原文 : For information about using Prometheus, see the Prometheus documentation: https://prometheus.io/docs/introduction/overview/.">Prometheusの使用の詳細は、Prometheusのドキュメントを参照してください : <a class="bare" href="https://prometheus.io/docs/introduction/overview/" target="_blank">https://prometheus.io/docs/introduction/overview/</a>。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.Bx4eY.spl1" title="原文 : Helidon&rsquo;s fully-functional, built-in metrics implementation supports Prometheus (OpenMetrics) output.">Helidonの完全に機能する組込みメトリクス実装では、Prometheus (OpenMetrics)出力がサポートされます。</span> <span class="merged" id="all.Bx4eY.spl2" title="原文 : Use the optional support described in this section only if you want to use the Prometheus API from your application code."><em>「これ」</em>セクションで説明されているオプションのサポートは、アプリケーション・コードからPrometheus <em>API</em>を使用する場合のみ使用します。</span> </p>
</div>


<h4 id="prom-maven-coordinates"><span class="merged" id="all.317oeS.49"  title="原文:: Maven Coordinates">Maven連携</span></h4>
<div class="section">
<markup
lang="xml"
title="Dependency for Helidon Prometheus API support"
>    &lt;dependency&gt;
        &lt;groupId&gt;io.helidon.metrics&lt;/groupId&gt;
        &lt;artifactId&gt;helidon-metrics-prometheus&lt;/artifactId&gt;
    &lt;/dependency&gt;</markup>

</div>


<h4 id="prom-usage"><span class="merged" id="all.JUOSC.53"  title="原文:: Usage">使用方法</span></h4>
<div class="section">
<p><span class="merged" id="all.mEweb.spl1" title="原文 : Your application code uses the Prometheus API to manage metrics.">アプリケーション・コードでは、Prometheus APIを使用してメトリクスを管理します。</span> <span class="merged" id="all.mEweb.spl2" title="原文 : To expose those metrics to clients via a REST endpoint, your code uses the PrometheusSupport interface which Helidon provides.">これらのメトリクスをRESTエンドポイント経由でクライアントに公開するには、Helidonが提供する<code>PrometheusSupport</code>インタフェースを使用します。</span> </p>

</div>


<h4 id="prom-api"><span class="merged" id="all.15i2uT.23"  title="原文:: API">API</span></h4>
<div class="section">
<p><span class="merged" id="all.S6qxS" title="原文 : Your code creates a PrometheusSupport object either using a static factory method (shown in the following example) or by using its Builder.">コードは、静的ファクトリ・メソッド(次の例を参照)を使用するか、<a href="./apidocs/io.helidon.metrics.prometheus/PrometheusSupport.Builder.html" target="_blank"><code>Builder</code></a>を使用して<a href="./apidocs/io.helidon.metrics.prometheus/PrometheusSupport.html" target="_blank"><code>PrometheusSupport</code></a>オブジェクトを作成します。</span></p>

<markup
lang="java"

>import io.helidon.metrics.prometheus.PrometheusSupport;

Routing.builder()
                .register(PrometheusSupport.create())
                .register("/myapp", new MyService())
                .build();</markup>

<p><span class="merged" id="all.3NEmM7.spl1" title="原文 : This example uses the default Prometheus CollectorRegistry.">この例では、デフォルトのPrometheus <code>CollectorRegistry</code>を使用します。</span> <span class="merged" id="all.3NEmM7.spl2" title="原文 : By default, the PrometheusSupport and exposes its REST endpoint at the path /metrics.">デフォルトでは、<code>PrometheusSupport</code>はパス<code>/metrics</code>でRESTエンドポイントを公開します。</span> <span class="merged" id="all.3NEmM7.spl3" title="原文 : Use the builder obtained by PrometheusSupport.builder() to configure a different CollectorRegistry or a different path."><code>PrometheusSupport.builder()</code>によって取得されたビルダーを使用して、別の<code>CollectorRegistry</code>または別のパスを構成します。</span> </p>

</div>

</div>

</div>

</doc-view>
