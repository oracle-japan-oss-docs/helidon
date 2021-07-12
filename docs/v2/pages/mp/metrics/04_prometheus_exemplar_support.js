<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.izAgh" title="原文 : Metrics Support for Exemplars">Exemplarsのメトリクス・サポート</span></dt>
<dd slot="desc"><p><span class="merged" id="all.jmALH" title="原文 : Add Helidon MP support for OpenMetrics (Prometheus) exemplars for histograms, counters, and simple timers to your application simply by adding dependencies to your project&rsquo;s pom.xml.">ヒストグラム、カウンタおよび単純なタイマーのHelidon MP support for <a href="https://github.com/OpenObservability/OpenMetrics/blob/main/specification/OpenMetrics.md#exemplars" id="" target="_blank" >OpenMetrics (Prometheus) exemplars</a>をアプリケーションに追加するには、プロジェクトの<code>pom.xml</code>に依存関係を追加するだけです。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_prerequisites"><span class="merged" id="all.2LZvWc.4"  title="原文:: Prerequisites">前提条件</span></h2>
<div class="section">
<p><span class="merged" id="all.4JnU1V.1" title="原文 : Declare the following dependency in your project:">プロジェクトで次の依存関係を宣言します:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.metrics&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-metrics-trace-exemplar&lt;/artifactId&gt;
    &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.3nJgrg" title="原文 : Also, include either Helidon Zipkin or Helidon Jaeger support:">また、<router-link to="/mp/tracing/02_zipkin">Helidon Zipkin</router-link>または<router-link to="/mp/tracing/03_jaeger">Helidon Jaeger</router-link>のいずれかのサポートを含めます:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing-zipkin&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.Xjurf"  title="原文:: or">または</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.tracing&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-tracing-jaeger&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.2ASuG3" title="原文 : Be sure Zipkin or Jaeger, whichever you chose, is running and accessible to your server.">選択したZipkinまたはJaegerのいずれかが実行中で、サーバーにアクセスできることを確認します。</span></p>

</div>

<h2 id="_interpreting_exemplars"><span class="merged" id="all.11BQho" title="原文 : Interpreting Exemplars">Exemplarの解釈</span></h2>
<div class="section">
<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.1RaU5T" title="原文 : exemplar - one that serves as a model or example"><a href="https://www.merriam-webster.com/dictionary/exemplar" id="" target="_blank" ><em>exemplar</em></a> - モデルまたは例として機能するもの</span></p>

<p><span class="merged" id="all.2RcUzW" title="原文 :  - Merriam-Webster Dictionary">-Merriam-Websterディクショナリ</span></p>
</p>
</div>
<p><span class="merged" id="all.3Ij7Vg.spl1" title="原文 : When you add the helidon-metrics-trace-exemplar dependency-​and one for either Zipkin or Jaeger-​to your application, Helidon automatically records a sample (label, value, and timestamp) with each update to a histogram, simple timer, or counter."><code>helidon-metrics-trace-exemplar</code>依存関係およびZipkinまたはJaeger用の依存関係をアプリケーションに追加すると、Helidonでは、ヒストグラム、単純タイマーまたはカウンタの更新ごとにサンプル(ラベル、値およびタイムスタンプ)が自動的に記録されます。</span> <span class="merged" id="all.3Ij7Vg.spl2" title="原文 : Helidon adds the label, value, and timestamp to the OpenMetrics output returned from the Helidon metrics endpoint (/metrics unless you set it up otherwise).">Helidonは、Helidonメトリクス・エンドポイントから返されたOpenMetrics出力にラベル、値およびタイムスタンプを追加します(特に設定しないかぎり、<code>/metrics</code>)。</span> </p>

<div class="listing">
<markup># TYPE application_getTimer_mean_seconds gauge
application_getTimer_mean_seconds 8.303030623354298E-4 # {trace_id="067632454fe4e8d1"} 1.14701E-4 1617723032.570000 <span class="conum" data-value="1" />

# TYPE application_getTimer_max_seconds gauge
application_getTimer_max_seconds 0.003952636 # {trace_id="fce183094e471633"} 0.003952636 1617723030.108000 <span class="conum" data-value="2" />

# TYPE application_getTimer_min_seconds gauge
application_getTimer_min_seconds 5.5254E-5 # {trace_id="0b1a4bf22b4e47fd"} 5.5254E-5 1617723033.311000</markup>
</div>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.kQHJk" title="原文 : This exemplar is a sample with value at least as close to the mean as any other sample.">このexemplarは、少なくとも他のサンプルと同じ平均値を持つサンプルです。</span></li>
<li data-value="2"><span class="merged" id="all.lov6r" title="原文 : This exemplar is for an exact sample with value the same as the maximum value the timer has observed.">このexemplarは、タイマーが観測した最大値と同じ値を持つ正確なサンプル用です。</span></li>
</ul>
<div class="listing">
<markup># TYPE application_globalRequestTracker_total counter
# HELP application_globalRequestTracker_total
application_globalRequestTracker_total 4 # {trace_id="daf26fe35fee9917"} 0.001183992 1617725180.234000 <span class="conum" data-value="1" />

# TYPE application_globalRequestTracker_elapsedTime_seconds gauge
application_globalRequestTracker_elapsedTime_seconds 0.030309068 # {trace_id="daf26fe35fee9917"} 0.001183992 1617725180.234000 <span class="conum" data-value="1" /></markup>
</div>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2kLBgU" title="原文 : The exemplar for a SimpleTimer is the same for the total and the elapsedTime submetrics: always the most recent sample which updated the SimpleTimer."><code>SimpleTimer</code>のexemplarは、<code>total</code>と<code>elapsedTime</code>のサブ・メトリクスで同じです: 常に、<code>SimpleTimer</code>を更新した最新のサンプルです。</span></li>
</ul>
<p><span class="merged" id="all.4evGdz.spl1" title="原文 : Helidon adds an exemplar to the output for each statistical value-​such as minimum, maximum, mean, and quantiles-​for histograms, timers, simple times, and for counters.">Helidonでは、各統計値(最小値、最大値、平均値、分位数など)の出力に、ヒストグラム、タイマー、単純時間およびカウンタのexemplarが追加されます。</span> <span class="merged" id="all.4evGdz.spl2" title="原文 : The exemplar information describes a single, actual sample that is representative of the statistical value.">exemplar情報は、統計値を表す単一の実際のサンプルを示しています。</span> <span class="merged" id="all.4evGdz.spl3" title="原文 : Helidon chooses the representative examplar for each value using information that is already recorded for each type of metric:">Helidonは、各タイプのメトリックについてすでに記録されている情報を使用して、各値の代表的な例を選択します:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1sKYro" title="原文 : If a metric necessarily corresponds to a specific sample-​for example a minimum or maximum-​Helidon associates a sample that has that exact value as the exemmplar for the metric.">メトリックが特定のサンプリングに必ずしも対応している場合(たとえば、最小値または最大値)、Helidonは、メトリックのexemplarとしてその正確な値を持つサンプルを関連付けます。</span>

</li>
<li>
<span class="merged" id="all.kb64M" title="原文 : If a metric collects samples into bins (quantiles), Helidon associates a sample from that bin with the bin&rsquo;s output.">メトリックがサンプルをビン(分位数)に収集する場合、Helidonはそのビンのサンプルをビンの出力に関連付けます。</span>

</li>
<li>
<span class="merged" id="all.2lzCsU" title="原文 : If a metric maintains running statistics (counts, totals), Helidon associates the most recent sample for that metric.">メトリックが実行中の統計(件数、合計)を保持している場合、Helidonはそのメトリックの最新のサンプルを関連付けます。</span>

</li>
<li>
<span class="merged" id="all.4OLX2Z" title="原文 : If Helidon computes a metric&rsquo;s value from a number of samples-​for example, mean-​Helidon associates a sample for which its value is at least as close as other samples to the statistical calculation.">Helidonで多数のサンプリングからメトリックの値を計算する場合(例: Helidonでは、その値が少なくとも統計計算に近いサンプルが関連付けられます)。</span>

</li>
</ol>
<p><span class="merged" id="all.2mEU5d" title="原文 : In cases with multiple representative samples (for example, two samples&apos; values are equally close to the mean), Helidon chooses one of them arbitrarily.">複数の代表的なサンプルがある場合(たとえば、2つのサンプル値が平均に等しく近い場合)、Helidonはそれらのいずれかを任意に選択します。</span></p>

</div>
</doc-view>
