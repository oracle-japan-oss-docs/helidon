<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.62"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.61" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.44" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.39" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.38" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.25" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.77"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.1akSk0.1.spl1" title="原文 : A meter typically reflects the usage of a single point in your service which processes multiple requests over time.">通常、メーターは、時間の経過とともに<em>「複数」</em>リクエストを処理するサービス内の<em>「単一」</em>ポイントの使用状況を反映します。</span> <span class="merged" id="all.1akSk0.1.spl2" title="原文 : A value such as the total time consumed by a given REST endpoint which can be invoked multiple times underscores the aggregate nature of meter values; Helidon accumulates the time from all requests in the total duration.">特定のRESTエンドポイントで消費された合計時間などの値(複数回起動可能)は、メーター値の集計特性を強調します。Helidonは、合計期間内のすべてのリクエストからの時間を累計します。</span> </p>

<p><span class="merged" id="all.SDLiX.1" title="原文 : Tracing, on the other hand, captures the usage of multiple parts of your code as your service responds to a single request.">一方、トレースでは、サービスが<em>「単一」</em>リクエストに応答するときに、コードの<em>「複数」</em>部分の使用が取得されます。</span></p>

<p><span class="merged" id="all.UunDQ.1" title="原文 : Metrics and tracing come together in Helidon’s support for exemplars.">メトリクスとトレースは、Helidonによる例のサポートにまとめられています。</span></p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.11"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.3WBKWP.1" title="原文 : exemplar - one that serves as a model or example"><a href="https://www.merriam-webster.com/dictionary/exemplar" target="_blank"><em>exemplar</em></a> - モデルまたは例として機能するもの</span></p>

<p><span class="merged" id="all.2RcUzW.1" title="原文 :  - Merriam-Webster Dictionary">-Merriam-Websterディクショナリ</span></p>
</p>
</div>

<p><span class="merged" id="all.3ZJYkV.1.spl1" title="原文 : In the context of metrics, an exemplar for a given meter is a specific sample which, in some sense, made a typical contribution to the meter’s value.">メトリクスのコンテキストでは、特定のメーターの<em>exemplar</em>は、ある意味でメーターの値に典型的な貢献をした特定のサンプルです。</span> <span class="merged" id="all.3ZJYkV.1.spl2" title="原文 : For example, an exemplar for a Counter might be the most recent sample which updated the counter.">たとえば、<code>Counter</code>の例が、カウンタを更新した最新のサンプルである場合があります。</span> <span class="merged" id="all.3ZJYkV.1.spl3" title="原文 : The metrics output identifies the exemplar sample using the span and trace IDs of the span and trace which triggered that sample.">メトリクス出力では、そのサンプルをトリガーしたスパンおよびトレースのスパンおよびトレースIDを使用して、サンプル・サンプルを識別します。</span> </p>

<p><span class="merged" id="all.3cAJfv.1.spl1" title="原文 : Exemplar support in Helidon relies on the exemplar support provided by the underlying metrics implementation.">Helidonでのサンプル・サポートは、基礎となるメトリクス実装によって提供されるサンプル・サポートに依存します。</span> <span class="merged" id="all.3cAJfv.1.spl2" title="原文 : Currently, Helidon’s Micrometer implementation supports exemplars as recorded by Micrometer’s Prometheus meter registry and exposed by the OpenMetrics output (media type application/openmetrics-text).">現在、HelidonのMicrometer実装は、MicrometerのPrometheusメーター・レジストリによって記録され、OpenMetrics出力(メディア・タイプ<code>application/openmetrics-text</code>)によって公開される例をサポートしています。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.54"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.1Vlo2b.1" title="原文 : To enable OpenMetrics exemplar support add the following dependency to your project’s pom.xml (see Managing Dependencies).">OpenMetrics例サポートを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.metrics&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-metrics-trace-exemplar&lt;/artifactId&gt;
    &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.27Xvp7" title="原文 : Also, include the Helidon integration module for a tracing implementation (such as Helidon Zipkin)">トレース実装用のHelidon統合モジュール(<router-link :to="{path: '/se/tracing', hash: '#zipkin-tracing'}">Helidon Zipkin</router-link>など)も含めます</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing-providers-zipkin&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.3cTsh1.1" title="原文 : Add the Helidon tracing component itself:">Helidonトレース・コンポーネント自体を追加します:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing&lt;/artifactId&gt;    <span class="conum" data-value="1" />
&lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;io.helidon.webserver.observe&lt;/groupId&gt;
        &lt;artifactId&gt;helidon-webserver-observe-tracing&lt;/artifactId&gt; <span class="conum" data-value="2" />
    &lt;/dependency&gt;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.o3EYn" title="原文 : Helidon tracing dependency.">Helidonトレース依存関係。</span></li>
<li data-value="2"><span class="merged" id="all.3gUxYH" title="原文 : Observability dependencies for tracing.">トレースの可観測性の依存関係。</span></li>
</ul>

<p><span class="merged" id="all.3O4YKN" title="原文 : For further processing of the tracing data, different providers are used.">トレース・データをさらに処理するために、異なるプロバイダが使用されます。</span></p>

<p><span class="merged" id="all.Lz16Q" title="原文 : For Jaeger:">Jaegerの場合:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing-providers-jaeger&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.2jeFZa" title="原文 : For Zipkin:">Zipkinの場合:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing-providers-zipkin&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.1AG2Gq" title="原文 : For OpenTelemetry:">OpenTelemetryの場合:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing-providers-opentelemetry&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.2KYWX7" title="原文 : For OpenTracing:">OpenTracingの場合:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing-providers-opentracing&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.57"  title="原文:: Usage">使用</span></h2>
<div class="section">
<p><span class="merged" id="all.2Ld9Ft.1.spl1" title="原文 : Once you add the appropriate dependencies to your project, exemplar support runs automatically as part of the Helidon metrics implementation using Micrometer.">適切な依存関係をプロジェクトに追加すると、Micrometerを使用して、Helidonメトリクス実装の一部として、サンプル・サポートが自動的に実行されます。</span> <span class="merged" id="all.2Ld9Ft.1.spl2" title="原文 : You do not need to change your application or configuration.">アプリケーションまたは構成を変更する必要はありません。</span> </p>


<h3 id="_interpreting_exemplars"><span class="merged" id="all.11BQho.1" title="原文 : Interpreting Exemplars">Exemplarの解釈</span></h3>
<div class="section">
<p><span class="merged" id="all.30rvLC.spl1" title="原文 : Each exemplar reflects a sample described by a label, a value, and a timestamp.">各例には、ラベル、値およびタイムスタンプで記述されたサンプルが反映されます。</span> <span class="merged" id="all.30rvLC.spl2" title="原文 : When a client accesses the /observe/metrics endpoint and specifies that it accepts the application/openmetrics-text media type, the label, value, and timestamp appear in the OpenMetrics response for meters that support exemplars.">クライアントが<code>/observe/metrics</code>エンドポイントにアクセスし、<code>application/openmetrics-text</code>メディア・タイプを受け入れることを指定すると、ラベル、値およびタイムスタンプは、サンプルをサポートするメーターのOpenMetricsレスポンスに表示されます。</span> </p>

<p><span class="merged" id="all.713U0.1" title="原文 : The exemplar information in the output describes a single, actual sample that is representative of the statistical value as recorded by the underlying Micrometer Prometheus meter registry.">出力内のサンプル情報は、基礎となるマイクロメーターのPrometheusメーター・レジストリによって記録された統計値の代表的な単一の実際のサンプルを示しています。</span></p>

</div>


<h3 id="_output_format"><span class="merged" id="all.30s0gR.1"  title="原文:: Output Format">出力形式</span></h3>
<div class="section">
<p><span class="merged" id="all.2Nu0x5.1" title="原文 : In the OpenMetrics output, an exemplar actually appears as a comment appended to the normal OpenMetrics output.">OpenMetrics出力では、エグザンプラは実際には通常のOpenMetrics出力に付加されたコメントとして表示されます。</span></p>

<markup

title="OpenMetrics format with exemplars"
><em>meter-identifier</em> <em>meter-value</em> # <em>exemplar-label</em> <em>sample-timestamp</em></markup>

<p><span class="merged" id="all.2VIwNx.1" title="原文 : Even downstream consumers of OpenMetrics output that do not recognize the exemplar format should continue to work correctly (as long as they do recognize comments).">形式を認識しないOpenMetrics出力の下流コンシューマでも、(コメントを認識して<em>いる</em>かぎり)正しく動作し続けます。</span></p>

<p><span class="merged" id="all.148UAW.1" title="原文 : But some consumers, such as trace collectors and their UIs, understand the exemplar format, and they allow you to browse meters and then navigate directly to the trace for the meter’s exemplar.">しかし、トレース・コレクタやUIなどの一部のコンシューマは、例示形式を理解しており、メーターを参照して、メーターの例のトレースに直接移動できます。</span></p>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.40"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.1qlSEP" title="原文 : Helidon includes an example application, based on the QuickStart application, which illustrates exemplar support.">Helidonには、QuickStartアプリケーションに基づく<a href="https://github.com/oracle/helidon/tree/4.0.2/examples/metrics/exemplar" target="_blank">「サンプル・アプリケーション」</a>が含まれており、これはexemplarのサポートを示しています。</span></p>

<p><span class="merged" id="all.4XaHHR.1" title="原文 : Once you enable exemplar support you can see the exemplars in the metrics output.">exemplarサポートを有効にすると、メトリクス出力に例を確認できます。</span></p>

<div class="listing">
<markup># TYPE counterForPersonalizedGreetings counter
# HELP counterForPersonalizedGreetings
counterForPersonalizedGreetings_total{scope="application"} 4.0 # {span_id="6b1fc9f9fd42fb0c",trace_id="6b1fc9f9fd42fb0c"} 1.0 1696889651.779</markup>
</div>

<p><span class="merged" id="all.1MODU1.1" title="原文 : The exemplar (the portion following the #) is a sample corresponding to an update to the counter, showing the span and trace identifiers, the amount by which the counter was updated (1.0), and the timestamp recording when the update occurred expressed as seconds in the UNIX epoch (1696889651.779).">例(<code>#</code>の後の部分)は、カウンタの更新に対応するサンプルで、スパン識別子とトレース識別子、カウンタが更新された量(<code>1.0</code>)、および更新がUNIXエポック(<code>1696889651.779</code>)で秒として表されたときに記録されたタイムスタンプを示します。</span></p>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.29"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">
<p><span class="merged" id="all.2J06hM.1" title="原文 : Brief discussion of exemplars in the OpenMetrics spec"><a href="https://github.com/OpenObservability/OpenMetrics/blob/main/specification/OpenMetrics.md#exemplars" target="_blank">「OpenMetricsスペック内の例」</a>の簡単な説明</span></p>

</div>

</doc-view>
