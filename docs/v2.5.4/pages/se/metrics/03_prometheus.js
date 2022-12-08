<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1thneg" title="原文 : Prometheus Metrics">Prometheusメトリクス</span></dt>
<dd slot="desc"><p><span class="merged" id="all.TRt8r" title="原文 : Helidon WebServer can serve Prometheus metrics.">Helidon WebServerはPrometheusメトリクスを提供できます。</span></p>

<p><span class="merged" id="all.1KfMIH.spl1" title="原文 : This document describes how to register Prometheus support with WebServer and how to customize the configuration.">このドキュメントでは、PrometheusサポートをWebServerに登録する方法および構成をカスタマイズする方法について説明します。</span> <span class="merged" id="all.1KfMIH.spl2" title="原文 : For information about using Prometheus, see the Prometheus documentation: https://prometheus.io/docs/introduction/overview/.">Prometheusの使用の詳細は、Prometheusのドキュメントを参照してください : <a href="https://prometheus.io/docs/introduction/overview/" id="" target="_blank" >https://prometheus.io/docs/introduction/overview/</a>。</span> </p>

<p><span class="merged" id="all.1DRKmk.spl1" title="原文 : Note that Helidon has an in-built metrics implementation.">Helidonには組込みメトリクス実装があることに注意してください。</span> <span class="merged" id="all.1DRKmk.spl2" title="原文 : See Helidon Metrics."><router-link @click.native="this.scrollFix('#metrics/01_metrics.adoc')" to="#metrics/01_metrics.adoc">「Helidonメトリクス」</router-link>を参照してください。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.50"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.1zdqbq" title="原文 : To enable Prometheus Metrics add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">Prometheus Metricsを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>    &lt;dependency&gt;
        &lt;groupId&gt;io.helidon.metrics&lt;/groupId&gt;
        &lt;artifactId&gt;helidon-metrics-prometheus&lt;/artifactId&gt;
    &lt;/dependency&gt;</markup>

</div>

<h2 id="_using_prometheus_metrics_in_your_application"><span class="merged" id="all.GtiEo" title="原文 : Using Prometheus metrics in your application">アプリケーションでのPrometheusメトリクスの使用</span></h2>
<div class="section">
<p><span class="merged" id="all.2BhWcL" title="原文 : To enable Prometheus metrics, register it with the web server.">Prometheusメトリクスを有効にするには、webサーバーに登録します。</span></p>

<markup
lang="java"

>import io.helidon.metrics.prometheus.PrometheusSupport;
//...

Routing.builder()
                .register(PrometheusSupport.create())
                .register("/myapp", new MyService())
                .build();</markup>

<p><span class="merged" id="all.4V5jWt.spl1" title="原文 : This example uses the default CollectorRegistry and exposes an endpoint /metrics.">この例では、デフォルトの<code>CollectorRegistry</code>を使用して、エンドポイント<code>/metrics</code>を公開します。</span> <span class="merged" id="all.4V5jWt.spl2" title="原文 : You can use fluent API builder obtained by PrometheusSupport.builder() to configure a different CollectorRegistry or a different path."><code>PrometheusSupport.builder()</code>によって取得されたfluent APIビルダーを使用して、別の<code>CollectorRegistry</code>または別のパスを構成できます。</span> </p>

</div>
</doc-view>
