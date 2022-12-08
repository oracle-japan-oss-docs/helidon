<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.18"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.16" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.14" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.12" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.9" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.13" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.14" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.8" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.16"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.rl36k" title="原文 : Helidon MP metrics implements the MicroProfile Metrics specification, providing:">Helidon MPメトリクスは、MicroProfileメトリクス仕様を実装し、次を提供します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3kWMrg" title="原文 : a unified way for MicroProfile servers to export monitoring data-​telemetry-​to management agents, and">MicroProfileサーバーがモニタリング・データ(テレメトリ)を管理エージェントにエクスポートする統一された方法、および</span></p>

</li>
<li>
<p><span class="merged" id="all.2IXx6f" title="原文 : a unified Java API which all application programmers can use to register and update metrics to expose telemetry data from their services.">すべてのアプリケーション・プログラマがメトリクスを登録および更新して、サービスからテレメトリ・データを公開するために使用できる、統合Java APIです。</span></p>

</li>
<li>
<p><span class="merged" id="all.1HI3eY" title="原文 : support for metrics-related annotations.">メトリクス関連の注釈のサポート。</span></p>

</li>
</ul>

<p><span class="merged" id="all.JQrkQ" title="原文 : Learn more about the MicroProfile Metrics specification."><a href="https://github.com/eclipse/microprofile-metrics/releases/tag/4.0" target="_blank">「MicroProfileメトリクス仕様」</a>についてさらに学習します。</span></p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.16"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.1sbe4O" title="原文 : To enable metrics add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">メトリクスを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.metrics&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-metrics&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.1xUkDk" title="原文 : Adding this dependency packages the full-featured metrics implementation with your service.">この依存関係を追加すると、フル機能のメトリクス実装がサービスにパッケージ化されます。</span></p>


<h3 id="_other_packaging_options"><span class="merged" id="all.c52dM" title="原文 : Other packaging options">その他のパッケージ・オプション</span></h3>
<div class="section">
<p><span class="merged" id="all.d0yXv.spl1" title="原文 : Helidon gives you flexibility in how you make metrics available to your service.">Helidonは、サービスに対してメトリクスを使用できるようにするための柔軟性を提供します。</span> <span class="merged" id="all.d0yXv.spl2" title="原文 : This document explains your options."><router-link to="/mp/metrics/metrics-capable-components">「このドキュメント」</router-link>では、オプションについて説明します。</span> </p>

</div>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.12"  title="原文:: Usage">使用方法</span></h2>
<div class="section">

<h3 id="_instrumenting_your_service"><span class="merged" id="all.450nKW" title="原文 : Instrumenting Your Service">サービスの計測</span></h3>
<div class="section">
<p><span class="merged" id="all.16FDJ0" title="原文 : You add metrics to your service in these ways:">サービスにメトリクスを追加するには、次の方法があります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3hlD4i" title="原文 : Annotate bean methods-​typically your REST resource endpoint methods (the Java code that receives incoming REST requests); Helidon automatically registers these metrics and updates them when the annotated methods are invoked via CDI.">Beanメソッドに注釈を付けます。通常は、RESTリソース・エンドポイント・メソッド(受信RESTリクエストを受信するJavaコード)。Helidonでは、これらのメトリクスが自動的に登録され、注釈付きメソッドがCDIを介して呼び出されたときに更新されます。</span></p>

</li>
<li>
<p><span class="merged" id="all.ovxE9" title="原文 : Write code which explicitly invokes the metrics API to register metrics, retrieve previously-registered metrics, and update metric values.">メトリクスAPIを明示的に起動してメトリクスを登録し、以前に登録したメトリクスを取得し、メトリック値を更新するコードを記述します。</span></p>

</li>
<li>
<p><span class="merged" id="all.3DEbX8" title="原文 : Configure some simple REST.request metrics which Helidon automatically registers and updates for all REST resource endpoints.">HelidonがすべてのRESTリソース・エンドポイントを自動的に登録および更新する単純な<code>REST.request</code>メトリクスを構成します。</span></p>

</li>
</ul>

<p><span class="merged" id="all.1W0o8O" title="原文 : Later sections of this document describe how to do each of these.">このドキュメントの後のセクションでは、これらの各操作方法について説明します。</span></p>

</div>


<h3 id="_categorizing_types_of_metrics"><span class="merged" id="all.4SfhBW" title="原文 : Categorizing Types of Metrics">メトリクスの分類</span></h3>
<div class="section">
<p><span class="merged" id="all.Da25n" title="原文 : Helidon distinguishes among three general types, or scopes, of metrics, as described in the MP metrics specification.">Helidonは、<a href="https://download.eclipse.org/microprofile/microprofile-metrics-4.0/microprofile-metrics-spec-4.0.html" target="_blank">「MPメトリクス仕様」</a>で説明されているように、メトリクスの3つの一般的な<em>「タイプ」</em>(スコープ)を区別します。</span></p>

<div class="block-title"><span class="merged" id="all.23sHaS" title="原文 : Types (scopes) of metrics"><span>メトリクスのタイプ(スコープ)</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1MzzvR" title="原文 : Type/scope">Type/scope</span></th>
<th><span class="merged" id="all.1LLqtP"  title="原文:: Typical Usage">一般的な用途</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3Wnhdh"  title="原文:: base">base</span></td>
<td class=""><span class="merged" id="all.19uVxy" title="原文 : Mandated by the MP metrics specification, such as OS or Java runtime measurements (available heap, disk space, etc.).">OSまたはJavaランタイムの測定(使用可能なヒープ、ディスク領域など)など、MPメトリクス仕様によって指定されます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4UKIas"  title="原文:: vendor">vendor</span></td>
<td class=""><span class="merged" id="all.10ebV9" title="原文 : Implemented by vendors, including the REST.request metrics and other key performance indicator measurements (described in later sections)."><code>REST.request</code>メトリクスおよびその他のキー・パフォーマンス・インジケータの測定を含むベンダーによって実装されます(後の項で説明します)。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.30c7Xt"  title="原文:: application">application</span></td>
<td class=""><span class="merged" id="all.exSkz" title="原文 : Declared via annotations or programmatically registered by your service code.">注釈またはサービス・コードによってプログラム的に登録された注釈によって宣言されます。</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.3XTDnU" title="原文 : When you add metrics annotations to your service code, Helidon registers the resulting metrics as type application.">メトリクス注釈をサービス・コードに追加すると、Helidonは結果のメトリクスをタイプ<code>application</code>として登録します。</span></p>

</div>


<h3 id="_metric_registries"><span class="merged" id="all.38ZrBy" title="原文 : Metric Registries">メトリック・レジストリ</span></h3>
<div class="section">
<p><span class="merged" id="all.2bDFP6.spl1" title="原文 : A metric registry collects registered metrics of a given type."><em>「メトリック・レジストリ」</em>は、指定されたタイプの登録済メトリクスを収集します。</span> <span class="merged" id="all.2bDFP6.spl2" title="原文 : Helidon supports three registries, one for each of the three metrics types.">Helidonでは、3つのメトリクス・タイプのそれぞれに1つずつ、3つのレジストリがサポートされています。</span> </p>

<p><span class="merged" id="all.a7swe" title="原文 : When you add code to your service to create a metric programmatically, the code first locates the appropriate registry and then registers the metric with that registry.">サービスにコードを追加してメトリックをプログラムで作成すると、最初に適切なレジストリを検索し、そのレジストリにメトリックを登録します。</span></p>

</div>


<h3 id="_retrieving_metrics_reports_from_your_service"><span class="merged" id="all.1V1yfM" title="原文 : Retrieving Metrics Reports from your Service">サービスからのメトリクス・レポートの取得</span></h3>
<div class="section">
<p><span class="merged" id="all.2PYtwR" title="原文 : When you add the metrics dependency to your project, Helidon automatically provides a built-in REST endpoint /metrics which responds with a report of the registered metrics and their values.">プロジェクトにメトリクス依存関係を追加すると、Helidonでは、登録済メトリクスとその値のレポートに応答する組込みRESTエンドポイント<code>/metrics</code>が自動的に提供されます。</span></p>

<p><span class="merged" id="all.2BwURj" title="原文 : Clients can request a particular output format.">クライアントは特定の出力形式をリクエストできます。</span></p>

<div class="block-title"><span class="merged" id="all.4DrPvT" title="原文 : Formats for /metrics output"><span><code>/metrics</code>出力の形式</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.3yTzxp"  title="原文:: Format">書式</span></th>
<th><span class="merged" id="all.1kFsTA"  title="原文:: Requested by">依頼者</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1NF1vk" title="原文 : OpenMetrics (Prometheus)">OpenMetrics (Prometheus)</span></td>
<td class=""><span class="merged" id="all.2YOaun" title="原文 : default (text/plain)">デフォルト(<code>text/plain</code>)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1iF8uP"  title="原文:: JSON">JSON</span></td>
<td class=""><span class="merged" id="all.2GCWMy" title="原文 : Header Accept: application/json">ヘッダー<code>Accept: application/json</code></span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.47I0lZ" title="原文 : Clients can also limit the report by appending the metric type to the path:">クライアントは、メトリック・タイプをパスに追加することによってレポートを制限することもできます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4bRzmh"  title="原文: /metrics/base"><code>/metrics/base</code></span></p>

</li>
<li>
<p><span class="merged" id="all.5dnJ6"  title="原文: /metrics/vendor"><code>/metrics/vendor</code></span></p>

</li>
<li>
<p><span class="merged" id="all.4Iyjn0"  title="原文: /metrics/application"><code>/metrics/application</code></span></p>

</li>
</ul>

<p><span class="merged" id="all.2YaHSK" title="原文 : Further, clients can narrow down to a specific metric name by adding the name as a subpath such as /metrics/application/myCount.">さらに、クライアントは、<code>/metrics/application/myCount</code>などのサブパスとして名前を追加することで、特定のメトリック名に絞り込むことができます。</span></p>

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

<p><span class="merged" id="all.31ILX3" title="原文 : In addition to your application metrics, the reports contain other metrics of interest such as system and VM information.">レポートには、アプリケーション・メトリクスに加えて、システム情報やVM情報、その他の関心のあるメトリクスが含まれます。</span></p>

</div>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.9"  title="原文:: API">API</span></h2>
<div class="section">
<p><span class="merged" id="all.1JpzxY.spl1" title="原文 : The MicroProfile Metrics API prescribes all the standard interfaces related to metrics."><a href="https://download.eclipse.org/microprofile/microprofile-metrics-4.0/apidocs/org/eclipse/microprofile/metrics/package-summary.html" target="_blank">「MicroProfileメトリクスAPI」</a>は、メトリクスに関連するすべての標準インタフェースを規定します。</span> <span class="merged" id="all.1JpzxY.spl2" title="原文 : This section summarizes a few key points about using that API and explains some Helidon-specific interfaces.">この項では、そのAPIの使用に関するいくつかの重要なポイントの概要と、一部のHelidon-specificインタフェースについて説明します。</span> </p>


<h3 id="_metrics_annotations"><span class="merged" id="all.2fsC0h" title="原文 : Metrics Annotations">メトリクス注釈</span></h3>
<div class="section">
<p><span class="merged" id="all.2WPCqW" title="原文 : You can very easily instrument your service and refer to registered metrics by annotating methods to be measured and injecting metrics which your code needs to observe.">測定するメソッドに注釈を付け、コードを監視する必要があるメトリクスをインジェクトすることで、サービスを簡単に計測し、登録されているメトリクスを参照できます。</span></p>


<h4 id="_metric_defining_annotations"><span class="merged" id="all.2kehwE" title="原文 : Metric-defining Annotations">メトリック定義注釈</span></h4>
<div class="section">
<p><span class="merged" id="all.1y8Hpd" title="原文 : The MicroProfile Metrics specification describes several metric types you can create using annotations, summarized in the following table:">MicroProfileメトリクス仕様では、次の表に示す注釈を使用して作成できる複数のメトリック・タイプについて説明します:</span></p>

<div class="block-title"><span class="merged" id="all.3Dp9nS" title="原文 : Metrics Annotations"><span>メトリクス注釈</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1mFIlG.3"  title="原文:: Annotation">注釈</span></th>
<th><span class="merged" id="all.JUOSC.13"  title="原文:: Usage">使用方法</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.36XL1I" title="原文 : @Counted"><a href="https://download.eclipse.org/microprofile/microprofile-metrics-4.0/apidocs/org/eclipse/microprofile/metrics/annotation/Counted.html" target="_blank"><code>@Counted</code></a></span></td>
<td class=""><span class="merged" id="all.jTrlz" title="原文 : Monotonically increasing count of events.">イベント数を単調に増やします。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1YD7t6" title="原文 : @ConcurrentGauge"><a href="https://download.eclipse.org/microprofile/microprofile-metrics-4.0/apidocs/org/eclipse/microprofile/metrics/annotationConcurrentGauge.html" target="_blank"><code>@ConcurrentGauge</code></a></span></td>
<td class=""><span class="merged" id="all.2W8hvR" title="原文 : Increasing and decreasing measurement of currently-executing blocks of code.">現在実行されているコード・ブロックの測定の増減。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3wXxPF" title="原文 : @Gauge"><a href="https://download.eclipse.org/microprofile/microprofile-metrics-4.0/apidocs/org/eclipse/microprofile/metrics/annotation/Gauge.html" target="_blank"><code>@Gauge</code></a></span></td>
<td class=""><span class="merged" id="all.1AhpmC" title="原文 : Access to a value managed by other code in the service.">サービス内の他のコードによって管理される値にアクセスします。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4NA3Q5" title="原文 : @Metered"><a href="https://download.eclipse.org/microprofile/microprofile-metrics-4.0/apidocs/org/eclipse/microprofile/metrics/annotation/Metered.html" target="_blank"><code>@Metered</code></a></span></td>
<td class=""><span class="merged" id="all.336lMv" title="原文 : Count of invocations and how frequently invocations have occurred.">呼出しの数および呼出しの頻度。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2TZWHJ" title="原文 : @SimplyTimed"><a href="https://download.eclipse.org/microprofile/microprofile-metrics-4.0/apidocs/org/eclipse/microprofile/metrics/annotation/SimplyTimed.html" target="_blank"><code>@SimplyTimed</code></a></span></td>
<td class=""><span class="merged" id="all.1JVqoN" title="原文 : Count of invocations and the total duration consumed by those invocations.">呼出しの数と、それらの呼出しによって消費された合計期間。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.11rhlL" title="原文 : @Timed"><a href="https://download.eclipse.org/microprofile/microprofile-metrics-4.0/apidocs/org/eclipse/microprofile/metrics/annotation/Timed.html" target="_blank"><code>@Timed</code></a></span></td>
<td class=""><span class="merged" id="all.4duRzo" title="原文 : Frequency of invocations and the distribution of how long the invocations take.">呼出しの頻度および呼出しの所要時間の分布。</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.9Kyco.spl1" title="原文 : Place annotations on constructors or methods to measure those specific executables.">コンストラクタまたはメソッドに注釈を付けて、これらの特定の実行可能ファイルを測定します。</span> <span class="merged" id="all.9Kyco.spl2" title="原文 : If you annotate the class instead, Helidon applies that annotation to all constructors and methods which the class declares.">かわりにクラスに注釈を付ける場合、Helidonは、クラスが宣言するすべてのコンストラクタおよびメソッドにその注釈を適用します。</span> </p>

</div>


<h4 id="_metric_referencing_annotations"><span class="merged" id="all.1D1K7L" title="原文 : Metric-referencing Annotations">メトリック参照注釈</span></h4>
<div class="section">
<p><span class="merged" id="all.7eOlw" title="原文 : To get a reference to a specific metric, use a metric-referencing annotation in any bean, including your REST resource classes.">特定のメトリックへの参照を取得するには、RESTリソース・クラスを含む任意のBeanでメトリック参照注釈を使用します。</span></p>

<p><span class="merged" id="all.2y2NLs.spl1" title="原文 : You can @Inject a field of the correct type.">正しいタイプのフィールドを<code>@Inject</code>できます。</span> <span class="merged" id="all.2y2NLs.spl2" title="原文 : Helidon uses the MicroProfile Metrics naming conventions to select which specific metric to inject.">Helidonは、MicroProfileメトリクスのネーミング規則を使用して、インジェクトする特定のメトリックを選択します。</span> <span class="merged" id="all.2y2NLs.spl3" title="原文 : Use the @Metric annotation to control that selection."><a href="https://download.eclipse.org/microprofile/microprofile-metrics-4.0/apidocs/org/eclipse/microprofile/metrics/annotation/Metric.html" target="_blank"><code>@Metric</code></a>注釈を使用して、その選択を制御します。</span> </p>

<p><span class="merged" id="all.3JZ3oW" title="原文 : You can also add @Metric on a constructor or method parameter to trigger injection there.">コンストラクタまたはメソッド・パラメータに<code>@Metric</code>を追加して、インジェクションをトリガーすることもできます。</span></p>

<p><span class="merged" id="all.1BDApg.spl1" title="原文 : Helidon automatically looks up the metric referenced from any injection site and provides a reference to the metric.">Helidonは、任意のインジェクション・サイトから参照されるメトリックを自動的に検索し、メトリックへの参照を提供します。</span> <span class="merged" id="all.1BDApg.spl2" title="原文 : Your code then simply invokes methods on the injected metric.">その後、コードがインジェクトされたメトリックのメソッドを呼び出します。</span> </p>

</div>

</div>


<h3 id="_the_metricregistry_api"><span class="merged" id="all.1a4P1u" title="原文 : The MetricRegistry API">The <code>MetricRegistry</code> API</span></h3>
<div class="section">
<p><span class="merged" id="all.3Yy91S" title="原文 : To register or look up metrics programmatically, your service code uses one of the three MetricRegistry instances (base, vendor, and application) which Helidon furnishes automatically.">メトリクスをプログラムに登録または検索するには、サービス・コードで3つの<a href="https://download.eclipse.org/microprofile/microprofile-metrics-4.0/apidocs/org/eclipse/microprofile/metrics/MetricRegistry.html" target="_blank"><code>MetricRegistry</code></a>インスタンス(ベース、ベンダーおよびアプリケーション)のうちの1つを使用して、Helidonが自動的に設定されます。</span></p>

<p><span class="merged" id="all.28wLHv" title="原文 : To get a MetricRegistry reference"><code>MetricRegistry</code>参照を取得するには</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.JNbTC" title="原文 : @Inject the metric registry you want, perhaps also using the @RegistryType annotation to select the registry type, or"><code>@Inject</code>必要なメトリック・レジストリ(<a href="https://download.eclipse.org/microprofile/microprofile-metrics-4.0/apidocs/org/eclipse/microprofile/metrics/annotation/RegistryType.html" target="_blank"><code>@RegistryType</code></a>注釈を使用してレジストリ・タイプを選択するなど)</span></p>

</li>
<li>
<p><span class="merged" id="all.rNyD6" title="原文 : Get a Helidon RegistryFactory; either">Helidon <a href="./apidocs/io.helidon.metrics.api/RegistryFactory.html" target="_blank"><code>RegistryFactory</code></a>を取得</span></p>
<div><ul class="ulist">
<li>
<p><span class="merged" id="all.2jzxYC" title="原文 : @Inject RegistryFactory or"><code>@Inject</code> <code>RegistryFactory</code>または</span></p>

</li>
<li>
<p><span class="merged" id="all.4af0aU" title="原文 : Invoke one of the static getInstance methods on RegistryFactory"><code>RegistryFactory</code>で静的<code>getInstance</code>メソッドの1つを起動</span></p>

</li>
</ul>
</div>

<p><span class="merged" id="all.45sM6x" title="原文 : Then invoke getRegistry on the RegistryFactory instance.">次に、<code>RegistryFactory</code>インスタンスで<code>getRegistry</code>を起動します。</span></p>

</li>
</ul>

<p><span class="merged" id="all.22sun3" title="原文 : The MetricRegistry allows your code to register new metrics, look up previously-registered metrics, and remove metrics."><code>MetricRegistry</code>を使用すると、コードで新しいメトリクスを登録し、以前に登録したメトリクスを検索し、メトリクスを削除できます。</span></p>

</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.14"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.3LiNzF" title="原文 : To control how the Helidon metrics subsystem behaves, add a metrics section to your META-INF/microprofile-config.properties file.">Helidonメトリクス・サブシステムの動作を制御するには、<code>META-INF/microprofile-config.properties</code>ファイルに<code>metrics</code>セクションを追加します。</span></p>

<p><span class="merged" id="all.42weEL.1" title="原文 : Type: io.helidon.metrics.serviceapi.MetricsSupport">タイプ: <a href="./apidocs/io.helidon.metrics.serviceapi/io/helidon/metrics/serviceapi/MetricsSupport.html" target="_blank">io.helidon.metrics.serviceapi.MetricsSupport</a></span></p>


<h3 id="_configuration_options"><span class="merged" id="all.3SKgM1.70"  title="原文:: Configuration options">構成オプション</span></h3>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.71" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.86"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.84"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.86"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.87"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.rUljB.2"  title="原文: appName"><code>appName</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.224"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3k7wSR.2" title="原文 : Sets the value for the _app tag to be applied to all metrics.">すべてのメトリクスに適用される<code>_app</code>タグの値を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3lo4qT.2"  title="原文: base"><code>base</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3zC5Y4.2" title="原文 : BaseMetricsSettings"><router-link to="/config/io_helidon_metrics_api_BaseMetricsSettings">BaseMetricsSettings</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.16IQfa.2" title="原文 : Set the base metrics settings.">ベース・メトリクス設定を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3UsoFV.11"  title="原文: cors"><code>cors</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1Gn61H.11" title="原文 : CrossOriginConfig"><router-link to="/config/io_helidon_webserver_cors_CrossOriginConfig">CrossOriginConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4NniMS.6" title="原文 : Sets the cross-origin config builder for use in establishing CORS support for the service endpoints.">サービス・エンドポイントのCORSサポートの確立に使用するクロス・オリジン構成ビルダーを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48UcwL.18"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.117"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.41X411.2" title="原文 : Sets whether metrics should be enabled.">メトリクスを有効にするかどうかを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Gz6OP.2"  title="原文: key-performance-indicators"><code>key-performance-indicators</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2Y8Giy.2" title="原文 : KeyPerformanceIndicatorMetricsSettings"><router-link to="/config/io_helidon_metrics_api_KeyPerformanceIndicatorMetricsSettings">KeyPerformanceIndicatorMetricsSettings</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4SC7W9.2" title="原文 : Set the KPI metrics settings.">KPIメトリクス設定を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1jGmWf.2"  title="原文: registries"><code>registries</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4HJlou.2" title="原文 : Map&lt;string, RegistrySettings&gt;"><router-link to="/config/io_helidon_metrics_api_RegistrySettings">マップ&lt;string, RegistrySettings></router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3i3kSz.2" title="原文 : Sets the registry settings for the specified registry type.">指定されたレジストリ・タイプのレジストリ設定を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2rpt0z.6"  title="原文: routing"><code>routing</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.225"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1n2NdZ.6" title="原文 : Sets the routing name to use for setting up the service&rsquo;s endpoint.">サービスのエンドポイントの設定に使用するルーティング名を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3WNvqu.6"  title="原文: tags"><code>tags</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1WdJek.6" title="原文 : Map&lt;string, string&gt;">マップ&lt;string, string></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1f8BSc.2" title="原文 : Sets the global tags to be applied to all metrics.">すべてのメトリクスに適用されるグローバル・タグを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2C8nDO.9"  title="原文: web-context"><code>web-context</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.226"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3MWNIS.6" title="原文 : Sets the web context to use for the service&rsquo;s endpoint.">サービスのエンドポイントに使用するwebコンテキストを設定します。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.14"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.4Akem0" title="原文 : Helidon MP includes a prewritten example application illustrating enabling/disabling metrics using configuration.">Helidon MPには、構成を使用した<a href="https://github.com/oracle/helidon/tree/master/examples/metrics/filtering/mp" target="_blank">「メトリクスの有効化/無効化」</a>を示す事前記述されたサンプル・アプリケーションが含まれています。</span></p>

<p><span class="merged" id="all.3Gz4Pl" title="原文 : The rest of this section contains other examples of working with metrics:">この項の残りの部分には、メトリクスの操作に関するその他の例が含まれています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1Z5rK3" title="原文 : Example Application Code"><router-link @click.native="this.scrollFix('#example-application-code')" to="#example-application-code">アプリケーション・コードの例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3vbq4m" title="原文 : Example Configuration"><router-link @click.native="this.scrollFix('#example-configuration')" to="#example-configuration">構成例</router-link></span></p>

</li>
</ul>


<h3 id="example-application-code"><span class="merged" id="all.168mON" title="原文 : Example Application Code">アプリケーション・コードの例</span></h3>
<div class="section">

<h4 id="_adding_method_level_annotations"><span class="merged" id="all.p8uDE" title="原文 : Adding Method-level Annotations">メソッド・レベルの注釈の追加</span></h4>
<div class="section">
<p><span class="merged" id="all.mPtCN.spl1" title="原文 : The following example adds a new resource class, GreetingCards, to the Helidon MP QuickStart example.">次の例では、新しいリソース・クラス<code>GreetingCards</code>をHelidon MP QuickStartの例に追加します。</span> <span class="merged" id="all.mPtCN.spl2" title="原文 : It shows how to use the @Counted annotation to track the number of times the /cards endpoint is called."><code>@Counted</code>注釈を使用して、<code>/cards</code>エンドポイントがコールされる回数を追跡する方法を示します。</span> </p>

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
<li data-value="1"><span class="merged" id="all.3Hzzja.1" title="原文 : This class is annotated with Path which sets the path for this resource as /cards.">このクラスには、このリソースのパスを<code>/cards</code>として設定する<code>Path</code>の注釈が付けられます。</span></li>
<li data-value="2"><span class="merged" id="all.a2euG.1.spl1" title="原文 : The @RequestScoped annotation defines that this bean is request scoped."><code>@RequestScoped</code>注釈は、このBeanがリクエスト・スコープであることを定義します。</span> <span class="merged" id="all.a2euG.1.spl2" title="原文 : The request scope is active only for the duration of one web service invocation and it is destroyed at the end of that invocation.">リクエスト・スコープは、1つのwebサービス呼出しの間のみアクティブになり、その呼出しの最後に破棄されます。</span> </li>
<li data-value="3"><span class="merged" id="all.2Thtk.1.spl1" title="原文 : The annotation @Counted will register a Counter metric for this method, creating it if needed.">注釈<code>@Counted</code>は、このメソッドの<code>Counter</code>メトリックを登録し、必要に応じて作成します。</span> <span class="merged" id="all.2Thtk.1.spl2" title="原文 : The counter is incremented each time the anyCards method is called.">カウンタは、anyCardsメソッドが呼び出されるたびに増分されます。</span> <span class="merged" id="all.2Thtk.1.spl3" title="原文 : The name attribute is optional."><code>name</code>属性はオプションです。</span> </li>
</ul>

<markup
lang="bash"
title="Build and run the application"
>mvn package
java -jar target/helidon-quickstart-mp.jar</markup>

<markup
lang="base"
title="Access the application endpoints"
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
<li data-value="1"><span class="merged" id="all.43vFDp.1" title="原文 : The any-card count is two, since you invoked the endpoint twice.">エンドポイントを2回呼び出したため、any-cardカウントは2つです。</span></li>
</ul>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1TyE4V.spl1" title="原文 : Notice the counter name is fully qualified with the class and method names.">カウンタ名は、クラス名とメソッド名で完全修飾されています。</span> <span class="merged" id="all.1TyE4V.spl2" title="原文 : You can remove the prefix by using the absolute=true field in the @Counted annotation.">プレフィクスを削除するには、<code>@Counted</code>注釈の<code>absolute=true</code>フィールドを使用します。</span> <span class="merged" id="all.1TyE4V.spl3" title="原文 : You must use absolute=false (the default) for class-level annotations.">クラス・レベルの注釈には、<code>absolute=false</code> (デフォルト)を使用する必要があります。</span> </p>
</div>

</div>


<h4 id="_additional_method_level_metrics"><span class="merged" id="all.1Z4X9Q" title="原文 : Additional Method-level Metrics">追加メソッド・レベル・メトリクス</span></h4>
<div class="section">
<p><span class="merged" id="all.3lFdhA.spl1" title="原文 : The @ConcurrentGauge, @Timed`, @Metered, and @SimplyTimed annotations can also be used with a method."><code>@ConcurrentGauge</code>、@Timed`、<code>@Metered</code>および<code>@SimplyTimed</code>注釈をメソッドとともに使用することもできます。</span> <span class="merged" id="all.3lFdhA.spl2" title="原文 : For the following example. you can just annotate the same method with @Metered and @Timed.">次の例では、<code>@Metered</code>と<code>@Timed</code>で同じメソッドに注釈を付けることができます。</span> <span class="merged" id="all.3lFdhA.spl3" title="原文 : These metrics collect significant information about the measured methods, but at a cost of some overhead and more complicated output.">これらのメトリクスは、測定されたメソッドに関する重要な情報を収集しますが、オーバーヘッドやより複雑な出力が発生します。</span> <span class="merged" id="all.3lFdhA.spl4" title="原文 : Use @SimplyTimed in cases where capturing the invocation count and the total elapsed time spent in a block of code is sufficient.">呼出し数およびコード・ブロックで費やされた合計経過時間を取得するだけで十分な場合は、<code>@SimplyTimed</code>を使用します。</span> </p>

<p><span class="merged" id="all.2B6a3Y" title="原文 : Note that when using multiple annotations on a method, you must give the metrics different names as shown below (although they do not have to be absolute).">メソッドで複数の注釈を使用する場合は、次に示すようにメトリクスに異なる名前を付ける必要があります(ただし、絶対値である必要はありません)。</span></p>

<markup
lang="java"
title="Update the <code>GreetingCards</code> class with the following code:"
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
  public JsonObject anyCard() {
    return createResponse("Here are some random cards ...");
  }

  private JsonObject createResponse(String msg) {
    return JSON.createObjectBuilder().add("message", msg).build();
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.mOrhG.1" title="原文 : Specify a custom name for the Counter metric and set absolute=true to remove the path prefix from the name."><code>Counter</code>メトリックのカスタム名を指定し、<code>absolute=true</code>を設定して名前からパス・プレフィクスを削除します。</span></li>
<li data-value="2"><span class="merged" id="all.12ZCyS.1" title="原文 : Add the @Metered annotation to get a Meter metric."><code>@Metered</code>注釈を追加して、<code>Meter</code>メトリックを取得します。</span></li>
<li data-value="3"><span class="merged" id="all.SfnC7.1" title="原文 : Add the @Timed annotation to get a Timer metric."><code>@Timed</code>注釈を追加して、<code>Timer</code>メトリックを取得します。</span></li>
</ul>

<markup
lang="bash"
title="Build and run the application"
>mvn package
java -jar target/helidon-quickstart-mp.jar</markup>

<markup
lang="base"
title="Access the application endpoints"
>curl http://localhost:8080/cards
curl http://localhost:8080/cards
curl -H "Accept: application/json"  http://localhost:8080/metrics/application</markup>

<markup
lang="json"
title="JSON response:"
>{
  "cardCount": 2,
  "cardMeter": { <span class="conum" data-value="1" />
    "count": 2,
    "meanRate": 0.15653506570241812,
    "oneMinRate": 0,
    "fiveMinRate": 0,
    "fifteenMinRate": 0
  },
  "cardTimer": { <span class="conum" data-value="2" />
    "count": 2,
    "elapsedTime": 2,
    "meanRate": 0.15651866263362785,
    "oneMinRate": 0,
    "fiveMinRate": 0,
    "fifteenMinRate": 0,
    "min": 0,
    "max": 2,
    "mean": 1.0506565,
    "stddev": 1.0405735,
    "p50": 2.09123,
    "p75": 2.09123,
    "p95": 2.09123,
    "p98": 2.09123,
    "p99": 2.09123,
    "p999": 2.09123
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.21ut0H.1" title="原文 : The Meter metric includes the count field (it is a superset of Counter)."><code>Meter</code>メトリックには、カウント・フィールド(<code>Counter</code>のスーパーセット)が含まれます。</span></li>
<li data-value="2"><span class="merged" id="all.41mzU4.1" title="原文 : The Timer metric includes the Meter fields (it is a superset of Meter)."><code>Timer</code>メトリックには、<code>Meter</code>フィールドが含まれます(<code>Meter</code>のスーパーセット)。</span></li>
</ul>

</div>


<h4 id="_class_level_metrics"><span class="merged" id="all.2l4xwM" title="原文 : Class-level Metrics">クラス・レベルのメトリクス</span></h4>
<div class="section">
<p><span class="merged" id="all.3PPnOX.1.spl1" title="原文 : You can collect metrics at the class-level to aggregate data from all methods in that class using the same metric.">クラス・レベルでメトリクスを収集し、同じメトリックを使用してそのクラスのすべてのメソッドからデータを集計できます。</span> <span class="merged" id="all.3PPnOX.1.spl2" title="原文 : The following example introduces a metric to count all card queries.">次の例では、すべてのカード問合せをカウントするメトリックを導入します。</span> <span class="merged" id="all.3PPnOX.1.spl3" title="原文 : In the following example, the method-level metrics are not needed to aggregate the counts, but they are left in the example to demonstrate the combined output of all three metrics.">次の例では、カウントの集計にメソッド・レベル・メトリクスは必要ありませんが、3つのメトリクスすべての結合された出力を示すために例に残されています。</span> </p>

<markup
lang="java"
title="Update the <code>GreetingCards</code> class with the following code:"
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
<li data-value="1"><span class="merged" id="all.13GuSk.1" title="原文 : This class is annotated with @Counted, which aggregates count data from all the method that have a Count annotation.">このクラスには、<code>Count</code>注釈を持つすべてのメソッドからカウント・データを集計する<code>@Counted</code>の注釈が付けられます。</span></li>
<li data-value="2"><span class="merged" id="all.2VxWry.1" title="原文 : Use absolute=true to remove path prefix for method-level annotations."><code>absolute=true</code>を使用して、メソッド・レベルの注釈のパス・プレフィクスを削除します。</span></li>
<li data-value="3"><span class="merged" id="all.1nElqm.1" title="原文 : Add a method with a Counter metric to get birthday cards.">誕生日カードを取得するメソッドを<code>Counter</code>メトリックとともに追加します。</span></li>
</ul>

<markup
lang="bash"
title="Build and run the application"
>mvn package
java -jar target/helidon-quickstart-mp.jar</markup>

<markup
lang="bash"
title="Access the application endpoints"
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
<li data-value="1"><span class="merged" id="all.1PZkzO.1.spl1" title="原文 : The totalCards count is a total of all the method-level Counter metrics."><code>totalCards</code>数は、すべてのメソッド・レベルの<code>Counter</code>メトリクスの合計です。</span> <span class="merged" id="all.1PZkzO.1.spl2" title="原文 : Class level metric names are always fully qualified.">クラス・レベル・メトリック名は常に完全修飾されます。</span> </li>
</ul>

</div>


<h4 id="_field_level_metrics"><span class="merged" id="all.2a5cWZ.1" title="原文 : Field Level Metrics">フィールド・レベル・メトリクス</span></h4>
<div class="section">
<p><span class="merged" id="all.3IwyWN.1.spl1" title="原文 : Field level metrics can be injected into managed objects, but they need to be updated by the application code.">フィールド・レベルのメトリクスは管理対象オブジェクトにインジェクトできますが、アプリケーション・コードで更新する必要があります。</span> <span class="merged" id="all.3IwyWN.1.spl2" title="原文 : This annotation can be used on fields of type Meter, Timer, Counter, and Histogram.">この注釈は、<code>Meter</code>, <code>Timer</code>, <code>Counter</code>および<code>Histogram</code>型のフィールドで使用できます。</span> </p>

<p><span class="merged" id="all.2uTiBQ.1" title="原文 : The following example shows how to use a field-level Counter metric to track cache hits.">次の例は、フィールドレベルの<code>Counter</code>メトリックを使用してキャッシュ・ヒットを追跡する方法を示しています。</span></p>

<markup
lang="java"
title="Update the <code>GreetingCards</code> class with the following code:"
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
<li data-value="1"><span class="merged" id="all.VBcUI.1" title="原文 : A Counter metric field, cacheHits, is automatically injected by Helidon."><code>Counter</code>メトリック・フィールド<code>cacheHits</code>は、Helidonによって自動的にインジェクトされます。</span></li>
<li data-value="2"><span class="merged" id="all.11bvPF.2" title="原文 : Call updateStats() to update the cache hits."><code>updateStats()</code>をコールして、キャッシュ・ヒットを更新します。</span></li>
<li data-value="3"><span class="merged" id="all.11bvPF.3" title="原文 : Call updateStats() to update the cache hits."><code>updateStats()</code>をコールして、キャッシュ・ヒットを更新します。</span></li>
<li data-value="4"><span class="merged" id="all.ATusR.1" title="原文 : Randomly increment the cacheHits counter."><code>cacheHits</code>カウンタをランダムに増分します。</span></li>
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
<li data-value="1"><span class="merged" id="all.2pydFR.1" title="原文 : The cache was hit two times out of five queries.">キャッシュは5つの問合せのうち2回ヒットしました。</span></li>
</ul>

</div>


<h4 id="_gauge_metric"><span class="merged" id="all.46RJ4W.1" title="原文 : Gauge Metric">ゲージ・メトリック</span></h4>
<div class="section">
<p><span class="merged" id="all.2TLOUS.1.spl1" title="原文 : The metrics you have tested so far are updated in response to an application REST request, i.e GET /cards.">これまでにテストしたメトリクスは、アプリケーションのRESTリクエスト(GET <code>/cards</code>)に応じて更新されます。</span> <span class="merged" id="all.2TLOUS.1.spl2" title="原文 : These metrics can be declared in a request scoped class and Helidon will store the metric in the MetricRegistry, so the value persists across requests.">これらのメトリクスはリクエスト・スコープのクラスで宣言でき、Helidonはメトリックを<code>MetricRegistry</code>に格納するため、値はリクエスト間で保持されます。</span> <span class="merged" id="all.2TLOUS.1.spl3" title="原文 : When GET /metrics/application is invoked, Helidon will return the current value of the metric stored in the MetricRegistry.">GET <code>/metrics/application</code>が起動されると、Helidonは<code>MetricRegistry</code>に格納されているメトリックの現在の値を返します。</span> <span class="merged" id="all.2TLOUS.1.spl4" title="原文 : The Gauge metric is different from all the other metrics."><code>Gauge</code>メトリックは、他のすべてのメトリクスとは異なります。</span> <span class="merged" id="all.2TLOUS.1.spl5" title="原文 : The application must provide a getter to return the gauge value in an application scoped class.">アプリケーションは、アプリケーション・スコープのクラスのゲージ値を返すgetterを提供する必要があります。</span> <span class="merged" id="all.2TLOUS.1.spl6" title="原文 : When GET /metrics/application is invoked, Helidon will call the Gauge getter, store that value in the MetricsRegistry, and return it as part of the metrics response payload.">GET <code>/metrics/application</code>が起動されると、Helidonは<code>Gauge</code> getterをコールし、その値を<code>MetricsRegistry</code>に格納して、メトリクス・レスポンス・ペイロードの一部として返します。</span> <span class="merged" id="all.2TLOUS.1.spl7" title="原文 : So, the Gauge metric value is updated real-time, in response to the get metrics request.">そのため、<code>Gauge</code>メトリック値は、メトリクス・リクエストの取得に応じてリアルタイムで更新されます。</span> </p>

<p><span class="merged" id="all.RMQte.1" title="原文 : The following example demonstrates how to use a Gauge to track application up-time.">次の例は、<code>Gauge</code>を使用してアプリケーションの稼働時間を追跡する方法を示しています。</span></p>

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
<li data-value="1"><span class="merged" id="all.1hdvii.1" title="原文 : This managed object must be application scoped to properly register and use the Gauge metric."><code>Gauge</code>メトリックを正しく登録して使用するには、この管理対象オブジェクトがアプリケーション・スコープである必要があります。</span></li>
<li data-value="2"><span class="merged" id="all.2iVdwx.1" title="原文 : Declare an AtomicLong field to hold the start time of the application.">アプリケーションの開始時間を保持する<code>AtomicLong</code>フィールドを宣言します。</span></li>
<li data-value="3"><span class="merged" id="all.1GqOhr.1" title="原文 : Initialize the application start time.">アプリケーションの起動時間を初期化します。</span></li>
<li data-value="4"><span class="merged" id="all.38FnMS.1" title="原文 : Return the application appUpTimeSeconds metric, which will be included in the application metrics.">アプリケーション・メトリクスに含まれるアプリケーション<code>appUpTimeSeconds</code>メトリックを返します。</span></li>
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
<li data-value="1"><span class="merged" id="all.4fyT7r.1" title="原文 : The application has been running for 6 seconds.">アプリケーションは6秒間実行されています。</span></li>
</ul>

</div>

</div>


<h3 id="example-configuration"><span class="merged" id="all.2sU9aQ"  title="原文:: Example Configuration">構成例</span></h3>
<div class="section">
<p><span class="merged" id="all.456Bvv.spl1" title="原文 : Metrics configuration is quite extensive and powerful and, therefore, a bit complicated.">メトリクス構成は非常に広範囲で強力であるため、少し複雑です。</span> <span class="merged" id="all.456Bvv.spl2" title="原文 : The rest of this section illustrates some of the most common scenarios:">このセクションの残りの部分では、最も一般的なシナリオについて説明します:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2zp6OD" title="原文 : Disable metrics entirely."><router-link @click.native="this.scrollFix('#config-disable')" to="#config-disable">メトリクスを完全に無効にします。</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.45LNWT" title="原文 : Selectively enable or disable metrics by metric registry type and, within type, by name."><router-link @click.native="this.scrollFix('#config-selective')" to="#config-selective">メトリック・レジストリ・タイプ別およびタイプ内のメトリクスを名前別に選択的に有効または無効にします。</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.10uvht" title="原文 : Choose whether to collect extended key performance indicator metrics."><router-link @click.native="this.scrollFix('#config-kpi')" to="#config-kpi">拡張キー・パフォーマンス・インジケータ・メトリクスを収集するかどうかを選択します。</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.ByiKQ" title="原文 : Control REST.request metrics collection."><router-link @click.native="this.scrollFix('#config-rest-request')" to="#config-rest-request"><code>REST.request</code>メトリクス収集を制御します。</router-link></span></p>

</li>
</ul>


<h4 id="config-disable"><span class="merged" id="all.3i33fB" title="原文 : Disable Metrics Subsystem">メトリクス・サブシステムの無効化</span></h4>
<div class="section">
<markup
lang="properties"
title="Disabling metrics entirely"
>metrics.enabled=false</markup>

<p><span class="merged" id="all.HCXIB" title="原文 : Helidon does not update metrics, and the /metrics endpoints respond with 404 plus a message that the metrics subsystem is disabled.">Helidonはメトリクスを更新せず、<code>/metrics</code>エンドポイントは<code>404</code>とメトリクス・サブシステムが無効であるというメッセージで応答します。</span></p>

</div>


<h4 id="config-selective"><span class="merged" id="all.2lChgi" title="原文 : Disable Selected Metrics">選択したメトリクスの無効化</span></h4>
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

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.1"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.3RoVe3.1" title="原文 : Make sure any include regex pattern you specify matches all the metric names you want to capture.">指定した<code>include</code>正規表現パターンが、取得するメトリック名<em>「すべて」</em>と一致していることを確認します。</span></p>
</p>
</div>

<p><span class="merged" id="all.2vtS5v.1" title="原文 : Suppose your application creates and updates a group of metrics with names such as myapp.xxx.queries, myapp.xxx.creates, myapp.xxx.updates, and myapp.xxx.deletes where xxx can be either supplier or customer.">アプリケーションで、<code>myapp.xxx.queries</code>, <code>myapp.xxx.creates</code>, <code>myapp.xxx.updates</code>などの名前を持つメトリクスのグループを作成および更新し、<code>myapp.xxx.deletes</code> (<code>xxx</code>は<code>supplier</code>または<code>customer</code>のいずれか)を実行するとします。</span></p>

<p><span class="merged" id="all.3JbypL" title="原文 : The following example gathers all metrics except those from your application regarding suppliers although supplier updates are included:">次の例では、サプライヤ更新が<em>「含まれて」</em><em>「いるが」</em>サプライヤに関するアプリケーションからのメトリクス<em>「以外」</em>のすべてのメトリクスを収集します:</span></p>

<markup
lang="properties"
title="Disabling and enabling metrics by name"
>metrics.registries.0.type=application
metrics.registries.0.application.filter.exclude=myapp\.supplier\..*
metrics.registries.0.application.filter.include=myapp\.supplier\.updates</markup>

<p><span class="merged" id="all.2CBVSA.spl1" title="原文 : This setting excludes metrics with names starting with myapp.supplier except for the metric myapp.supplier.updates.">この設定では、メトリック<code>myapp.supplier.updates</code><em>「以外」</em>の<code>myapp.supplier</code>で始まる名前のメトリクスを除外します。</span> <span class="merged" id="all.2CBVSA.spl2" title="原文 : The exclude and include values are regular expressions."><code>exclude</code>および<code>include</code>値は正規表現です。</span> </p>

</div>


<h4 id="config-kpi"><span class="merged" id="all.1RbZUb.1" title="原文 : Collecting Basic and Extended Key Performance Indicator (KPI) Metrics">基本および拡張キー・パフォーマンス・インジケータ(KPI)メトリクスの収集</span></h4>
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

<p><span class="merged" id="all.2dm2kv.1" title="原文 : Helidon MP also includes additional, extended KPI metrics which are disabled by default:">Helidon MPには、デフォルトで無効になっている追加の拡張KPIメトリクスも含まれています:</span></p>

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
title="Controlling extended KPI metrics"
>metrics.key-performance-indicators.extended = true
metrics.key-performance-indicators.long-running.threshold-ms = 2000</markup>

</div>


<h4 id="config-rest-request"><span class="merged" id="all.OBxq4" title="原文 : Enable REST.request Metrics"><code>REST.request</code>メトリクスの有効化</span></h4>
<div class="section">
<markup
lang="properties"
title="Controlling REST request metrics"
>metrics.rest-request-enabled=true</markup>

<p><span class="merged" id="all.BfNDD" title="原文 : Helidon automatically registers and updates SimpleTimer metrics for every REST endpoint in your service.">Helidonは、サービス内のすべてのRESTエンドポイントの<code>SimpleTimer</code>メトリクスを自動的に登録および更新します。</span></p>

</div>

</div>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.10"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">

<h3 id="_integration_with_kubernetes_and_prometheus"><span class="merged" id="all.3Am6oP.1" title="原文 : Integration with Kubernetes and Prometheus">KubernetesおよびPrometheusとの統合</span></h3>
<div class="section">

<h4 id="_kubernetes_integration"><span class="merged" id="all.3Xx7O7.1" title="原文 : Kubernetes Integration">Kubernetes統合</span></h4>
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
<li data-value="1"><span class="merged" id="all.3s9wLQ.4" title="原文 : A service of type NodePort that serves the default routes on port 8080.">ポート<code>8080</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
<li data-value="2"><span class="merged" id="all.BOd0W.1" title="原文 : An annotation that will allow Prometheus to discover and scrape the application pod.">Prometheusがアプリケーションポッドを検出してスクレイプできるようにする注釈。</span></li>
<li data-value="3"><span class="merged" id="all.1dhwFj.4" title="原文 : A deployment with one replica of a pod.">ポッドの1つのレプリカを持つデプロイメント。</span></li>
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
<li data-value="1"><span class="merged" id="all.3Q1f91.3" title="原文 : A service of type NodePort that serves the default routes on port 31143.">ポート<code>31143</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
</ul>

<markup
lang="bash"
title="Verify the metrics endpoint using port <code>30116</code>, your port will likely be different:"
>curl http://localhost:31143/metrics</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.4tlHG.1" title="原文 : Leave the application running in Kubernetes since it will be used for Prometheus integration.">Prometheus統合に使用されるため、アプリケーションはKubernetesで実行したままにします。</span></p>
</div>

</div>


<h4 id="_prometheus_integration"><span class="merged" id="all.1IYRP6.1" title="原文 : Prometheus Integration">Prometheus統合</span></h4>
<div class="section">
<p><span class="merged" id="all.2HBarG.1.spl1" title="原文 : The metrics service that you just deployed into Kubernetes is already annotated with prometheus.io/scrape:.">Kubernetesにデプロイしたメトリクス・サービスには、すでに<code>prometheus.io/scrape:</code>の注釈が付いています。</span> <span class="merged" id="all.2HBarG.1.spl2" title="原文 : This will allow Prometheus to discover the service and scrape the metrics.">これにより、Prometheusはサービスを検出し、メトリクスをスクレイプできます。</span> <span class="merged" id="all.2HBarG.1.spl3" title="原文 : This example shows how to install Prometheus into Kubernetes, then verify that it discovered the Helidon metrics in your application.">この例では、PrometheusをKubernetesにインストールし、アプリケーションでHelidonメトリクスが検出されたことを確認する方法を示します。</span> </p>

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

<p><span class="merged" id="all.4cNwrw.1.spl1" title="原文 : Now open your browser and navigate to http://localhost:7090/targets.">ブラウザを開き、<code><a class="bare" href="http://localhost:7090/targets" target="_blank">http://localhost:7090/targets</a></code>に移動します。</span> <span class="merged" id="all.4cNwrw.1.spl2" title="原文 : Search for helidon on the page and you will see your Helidon application as one of the Prometheus targets.">ページでhelidonを検索すると、Prometheusターゲットの一部としてHelidonアプリケーションが表示されます。</span> </p>

</div>


<h4 id="_final_cleanup"><span class="merged" id="all.1Bcn6e.1" title="原文 : Final Cleanup">最終クリーンアップ</span></h4>
<div class="section">
<p><span class="merged" id="all.HBnIV.3" title="原文 : You can now delete the Kubernetes resources that were just created during this example.">これで、この例で作成したKubernetesリソースを削除できます。</span></p>

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


<h3 id="_references"><span class="merged" id="all.3oSja0.6"  title="原文:: References">参照</span></h3>
<div class="section">
<p><span class="merged" id="all.Bbpbc.1" title="原文 : MicroProfile Metrics specification"><a href="https://download.eclipse.org/microprofile/microprofile-metrics-4.0/microprofile-metrics-spec-4.0.html" target="_blank">MicroProfileメトリクス仕様</a></span></p>

<p><span class="merged" id="all.2AGfHq" title="原文 : MicroProfile Metrics API"><a href="https://download.eclipse.org/microprofile/microprofile-metrics-4.0/apidocs/org/eclipse/microprofile/metrics/package-info.html" target="_blank">MicroProfileメトリクスAPI</a></span></p>

</div>

</div>

</doc-view>
