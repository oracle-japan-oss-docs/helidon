<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.56"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.54" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.40" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.36" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.38" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.23" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.70"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.9HWm.1.spl1" title="原文 : A metric typically reflects the usage of a single point in your service processing multiple requests over time.">通常、メトリックは、一定期間におけるサービス処理の<em>「複数」</em>リクエストにおける<em>「単一」</em>ポイントの使用状況を反映します。</span> <span class="merged" id="all.9HWm.1.spl2" title="原文 : A value such as the total time consumed by a given REST endpoint underscores the aggregate nature of metric values; Helidon accumulates the time from all requests in the total duration.">特定のRESTエンドポイントによって消費された合計時間などの値は、メトリック値の集計の性質を下げます。Helidonは、合計期間内のすべてのリクエストからの時間を累計します。</span> </p>

<p><span class="merged" id="all.SDLiX.1" title="原文 : Tracing, on the other hand, captures the usage of multiple parts of your code as your service responds to a single request.">一方、トレースでは、サービスが<em>「単一」</em>リクエストに応答するときに、コードの<em>「複数」</em>部分の使用が取得されます。</span></p>

<p><span class="merged" id="all.2v1qBS.1" title="原文 : Metrics and tracing come together in Helidon&rsquo;s support for examplars.">メトリクスおよびトレースは、Helidonの試験に対するサポートでまとめられています。</span></p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.6"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.3WBKWP.1" title="原文 : exemplar - one that serves as a model or example"><a href="https://www.merriam-webster.com/dictionary/exemplar" target="_blank"><em>exemplar</em></a> - モデルまたは例として機能するもの</span></p>

<p><span class="merged" id="all.2RcUzW.1" title="原文 :  - Merriam-Webster Dictionary">-Merriam-Websterディクショナリ</span></p>
</p>
</div>

<p><span class="merged" id="all.3mBrNk.1.spl1" title="原文 : In the context of metrics, an exemplar for a given metric is a specific sample which, in some sense, made a typical contribution to the metric&rsquo;s value.">メトリクスのコンテキストでは、特定のメトリックの<em>「イグザンプラ」</em>は特定のサンプルであり、ある意味でメトリックの値に一般的な貢献をしました。</span> <span class="merged" id="all.3mBrNk.1.spl2" title="原文 : For example, an exemplar for a SimpleTimer might be a sample in which the duration it contributed to the value of a SimpleTimer is near the mean of the durations over all samples.">たとえば、<code>SimpleTimer</code>の例は、<code>SimpleTimer</code>の値に寄与した期間が、すべてのサンプルに対する期間平均に近いサンプルです。</span> <span class="merged" id="all.3mBrNk.1.spl3" title="原文 : The metrics output identifies the exemplar sample using the trace ID of the trace which triggered that sample.">メトリクス出力は、そのサンプルをトリガーしたトレースのトレースIDを使用して、サンプルを識別します。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.51"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.1Vlo2b.1" title="原文 : To enable OpenMetrics exemplar support add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">OpenMetrics例サポートを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

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
    &lt;groupId&gt;io.helidon.tracing&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing-zipkin&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.3cTsh1.1" title="原文 : Add the Helidon tracing component itself:">Helidonトレース・コンポーネント自体を追加します:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.55"  title="原文:: Usage">使用方法</span></h2>
<div class="section">
<p><span class="merged" id="all.226pDu.1.spl1" title="原文 : Once you add the appropriate dependencies to your project, exemplar support runs automatically as part of Helidon metrics.">プロジェクトに適切な依存関係を追加すると、Helidonメトリクスの一部として、exemplarサポートが自動的に実行されます。</span> <span class="merged" id="all.226pDu.1.spl2" title="原文 : You do not need to change your application or configuration.">アプリケーションまたは構成を変更する必要はありません。</span> </p>


<h3 id="_interpreting_exemplars"><span class="merged" id="all.11BQho.1" title="原文 : Interpreting Exemplars">Exemplarの解釈</span></h3>
<div class="section">
<p><span class="merged" id="all.9kchV.1.spl1" title="原文 : Helidon automatically records a sample (label, value, and timestamp) with each update to a histogram, simple timer, or counter.">Helidonでは、サンプル(ラベル、値およびタイムスタンプ)がヒストグラム、単純なタイマーまたはカウンタに更新されるたびに自動的に記録されます。</span> <span class="merged" id="all.9kchV.1.spl2" title="原文 : When a client accesses the /metrics endpoint, Helidon adds the label, value, and timestamp to the OpenMetrics response.">クライアントが<code>/metrics</code>エンドポイントにアクセスすると、Helidonによってラベル、値およびタイムスタンプがOpenMetricsレスポンスに追加されます。</span> </p>

<p><span class="merged" id="all.2AMn2L.1.spl1" title="原文 : Helidon adds an exemplar to the output for each statistical value-​such as minimum, maximum, mean, and quantiles-​for histograms, timers, simple times, and for counters.">Helidonでは、各統計値(最小値、最大値、平均値、分位数など)の出力に、ヒストグラム、タイマー、単純時間およびカウンタのexemplarが追加されます。</span> <span class="merged" id="all.2AMn2L.1.spl2" title="原文 : The exemplar information in the output describes a single, actual sample that is representative of the statistical value.">出力に含まれるexemplar情報は、統計値の代表である単一の実際のサンプルを示します。</span> <span class="merged" id="all.2AMn2L.1.spl3" title="原文 : Helidon chooses the representative examplar for each value using information that is already recorded for each type of metric:">Helidonは、各タイプのメトリックについてすでに記録されている情報を使用して、各値の代表的な例を選択します:</span> </p>

<div class="block-title"><span class="merged" id="all.2nWypz.1" title="原文 : Selection of exemplars for types of metrics"><span>メトリクス・タイプの例の選択</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 33.333%;">
<col style="width: 33.333%;">
<col style="width: 33.333%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1B11AA.1"  title="原文:: Metric Value Type">メトリック値タイプ</span></th>
<th><span class="merged" id="all.2xA7W7.3"  title="原文:: Example">例</span></th>
<th><span class="merged" id="all.3mkffq.1" title="原文 : Sample Selected as Exemplar">サンプルはExemplarとして選択</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3UI3qA.1" title="原文 : corresponds directly to a specific sample">特定のサンプルに直接対応</span></td>
<td class=""><span class="merged" id="all.2mGG0.1" title="原文 : minimum or maximum of a value">値の最小または最大</span></td>
<td class=""><span class="merged" id="all.1dlegD.1" title="原文 : any sample with that exact value">その正確な値を持つ任意のサンプル</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Euylz.1" title="原文 : collects samples into bins (quantiles)">サンプルをビンに収集します(quantiles)</span></td>
<td class=""><span class="merged" id="all.3LlaT7.1" title="原文 : histogram (as with timers)">ヒストグラム(タイマーと同様)</span></td>
<td class=""><span class="merged" id="all.27Z8gI.1" title="原文 : any sample from the bin">保管棚からの任意のサンプル</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3Ql6a4.1" title="原文 : maintains running statistics">実行中の統計が維持されます</span></td>
<td class=""><span class="merged" id="all.3f3Vub.1" title="原文 : counts, totals">件数、合計</span></td>
<td class=""><span class="merged" id="all.3vec8p.1" title="原文 : most recent sample">最新サンプル</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.49ddt1.1" title="原文 : computes its value from multiple samples">複数のサンプルから値を計算</span></td>
<td class=""><span class="merged" id="all.24GkMa.1"  title="原文:: mean">mean</span></td>
<td class=""><span class="merged" id="all.1IyTvQ.1" title="原文 : sample for which its value is at least as close as other samples to the statistical calculation">その値が統計計算の他のサンプルと同じくらい近いサンプル</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.2mEU5d.1" title="原文 : In cases with multiple representative samples (for example, two samples&apos; values are equally close to the mean), Helidon chooses one of them arbitrarily.">複数の代表的なサンプルがある場合(たとえば、2つのサンプル値が平均に等しく近い場合)、Helidonはそれらのいずれかを任意に選択します。</span></p>

</div>


<h3 id="_output_format"><span class="merged" id="all.30s0gR.1"  title="原文:: Output Format">出力形式</span></h3>
<div class="section">
<p><span class="merged" id="all.2Nu0x5.1" title="原文 : In the OpenMetrics output, an exemplar actually appears as a comment appended to the normal OpenMetrics output.">OpenMetrics出力では、エグザンプラは実際には通常のOpenMetrics出力に付加されたコメントとして表示されます。</span></p>

<markup

title="OpenMetrics format with exemplars"
><em>metric-identifier</em> <em>metric-value</em> # <em>exemplar-label</em> <em>sample-timestamp</em></markup>

<p><span class="merged" id="all.2VIwNx.1" title="原文 : Even downstream consumers of OpenMetrics output that do not recognize the exemplar format should continue to work correctly (as long as they do recognize comments).">形式を認識しないOpenMetrics出力の下流コンシューマでも、(コメントを認識して<em>いる</em>かぎり)正しく動作し続けます。</span></p>

<p><span class="merged" id="all.1l2QJx.1" title="原文 : But some consumers, such as trace collectors and their U/Is, understand the exemplar format, and they allow you to browse metrics and then navigate directly to the trace for the metric&rsquo;s exemplar.">ただし、トレース・コレクタやそのU/Isなどの一部のコンシューマは、exemplar形式を理解し、メトリクスを参照してから、メトリックのexemplarのトレースに直接ナビゲートできます。</span></p>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.41"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.1OkPjp" title="原文 : Helidon includes an example application, based on the QuickStart application, which illustrates exemplar support.">Helidonには、QuickStartアプリケーションに基づく<a href="https://github.com/oracle/helidon/tree/master/examples/metrics/exemplar" target="_blank">「サンプル・アプリケーション」</a>が含まれており、これはexemplarのサポートを示しています。</span></p>

<p><span class="merged" id="all.4XaHHR.1" title="原文 : Once you enable exemplar support you can see the exemplars in the metrics output.">exemplarサポートを有効にすると、メトリクス出力に例を確認できます。</span></p>

<div class="listing">
<markup># TYPE application_getTimer_mean_seconds gauge
application_getTimer_mean_seconds 8.303030623354298E-4 <strong># {trace_id="067632454fe4e8d1"} 1.14701E-4 1617723032.570000</strong>

# TYPE application_getTimer_max_seconds gauge
application_getTimer_max_seconds 0.003952636 <strong># {trace_id="fce183094e471633"} 0.003952636 1617723030.108000</strong>

# TYPE application_getTimer_min_seconds gauge
application_getTimer_min_seconds 5.5254E-5 <strong># {trace_id="0b1a4bf22b4e47fd"} 5.5254E-5 1617723033.311000</strong></markup>
</div>

<p><span class="merged" id="all.2Lsk16.1" title="原文 : The first exemplar is a sample with value at least as close to the mean for that timer as any other sample.">最初のexemplarは、他のサンプルとして、少なくともそのタイマーの平均に近い値を持つサンプルです。</span></p>

<p><span class="merged" id="all.3duFcy.1" title="原文 : This second exemplar is for an exact sample with value the same as the maximum value the timer has observed.">この2番目の指数は、タイマーが観測した最大値と同じ値を持つ正確なサンプル用です。</span></p>

<div class="listing">
<markup># TYPE application_globalRequestTracker_total counter
# HELP application_globalRequestTracker_total
application_globalRequestTracker_total 4 <strong># {trace_id="daf26fe35fee9917"} 0.001183992 1617725180.234000</strong>

# TYPE application_globalRequestTracker_elapsedTime_seconds gauge
application_globalRequestTracker_elapsedTime_seconds 0.030309068 <strong># {trace_id="daf26fe35fee9917"} 0.001183992 1617725180.234000</strong></markup>
</div>

<p><span class="merged" id="all.3z5xRr.1" title="原文 : The exemplar for a SimpleTimer is the same for the total and the elapsedTime sub metrics: always the most recent sample which updated the SimpleTimer."><code>SimpleTimer</code>の例は、<code>total</code>および<code>elapsedTime</code>サブ・メトリクスで同じです: 常に、<code>SimpleTimer</code>を更新した最新のサンプルです。</span></p>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.27"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">
<p><span class="merged" id="all.2J06hM.1" title="原文 : Brief discussion of exemplars in the OpenMetrics spec"><a href="https://github.com/OpenObservability/OpenMetrics/blob/main/specification/OpenMetrics.md#exemplars" target="_blank">「OpenMetricsスペック内の例」</a>の簡単な説明</span></p>

</div>

</doc-view>
