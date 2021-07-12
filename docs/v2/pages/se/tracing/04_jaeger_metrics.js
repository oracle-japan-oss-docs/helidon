<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.xOWgc.1" title="原文 : Metrics Support for Jaeger">Jaegerのメトリクス・サポート</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3WgDxR" title="原文 : Integrate the metrics from Jaeger tracing into your Helidon SE application simply by adding a dependency.">依存関係を追加するだけで、JaegerトレースのメトリクスをHelidon SEアプリケーションに統合できます。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_overview"><span class="merged" id="all.YrpRV.10"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.28Buoc" title="原文 : As the Helidon Jaeger Tracing document describes, you can use Jaeger tracing in your Helidon SE application."><router-link to="/se/tracing/03_jaeger">「Helidon Jaegerトレース」</router-link>ドキュメントで説明されているように、JaegerトレースはHelidon SEアプリケーションで使用できます。</span></p>

<p><span class="merged" id="all.2E7mCF.1.spl1" title="原文 : Jaeger maintains several metrics about its own activity (briefly outlined in the Jaeger client documentation).">Jaegerでは、独自のアクティビティに関する複数のメトリクスが保持されています(<a href="https://www.jaegertracing.io/docs/1.22/client-libraries/#metrics" id="" target="_blank" >「Jaegerクライアント・ドキュメント」</a>で簡単に説明されています)。</span> <span class="merged" id="all.2E7mCF.1.spl2" title="原文 : This document explains how you can integrate those Jaeger tracing metrics with Helidon&rsquo;s metrics.">このドキュメントでは、これらのJaegerトレース・メトリクスをHelidonのメトリクスと統合する方法について説明します。</span> </p>

</div>

<h2 id="_prerequisites"><span class="merged" id="all.2LZvWc.8"  title="原文:: Prerequisites">前提条件</span></h2>
<div class="section">
<p><span class="merged" id="all.4OtBAX.1" title="原文 : Your pom.xml file should already contain the dependency for Helidon-Jaeger tracing integration."><code>pom.xml</code>ファイルには、Helidon-Jaegerトレース統合の依存関係がすでに含まれています。</span></p>

<p><span class="merged" id="all.2SIMBM.1" title="原文 : To enable integration with Jaeger&rsquo;s metrics, add the following dependency:">Jaegerのメトリクスとの統合を有効にするには、次の依存関係を追加します:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.metrics&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-metrics-jaeger&lt;/artifactId&gt;
    &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.2ZWtHR.1.spl1" title="原文 : You can leave your application&rsquo;s Java code unchanged.">アプリケーションのJavaコードは変更しないでおくことができます。</span> <span class="merged" id="all.2ZWtHR.1.spl2" title="原文 : By adding this dependency, you instruct Helidon to monitor the Jaeger tracing metrics internally and to publish them using the Helidon metrics system.">この依存関係を追加することで、Jaegerトレース・メトリクスを内部的に監視し、Helidonメトリクス・システムを使用して公開するようにHelidonに指示します。</span> </p>

<p><span class="merged" id="all.SZVQ.1" title="原文 : Rebuild and start your application.">アプリケーションを再構築して起動します。</span></p>

</div>

<h2 id="_accessing_jaeger_tracing_metrics"><span class="merged" id="all.3LTkwn.1" title="原文 : Accessing Jaeger Tracing Metrics">Jaegerトレース・メトリクスへのアクセス</span></h2>
<div class="section">
<p><span class="merged" id="all.3RrSWD.1.spl1" title="原文 : Submit a few requests to your application&rsquo;s endpoints.">アプリケーションのエンドポイントにいくつかのリクエストを送信します。</span> <span class="merged" id="all.3RrSWD.1.spl2" title="原文 : This causes Jaeger to update its internal metrics.">これにより、Jaegerは内部メトリクスを更新します。</span> </p>

<p><span class="merged" id="all.2QgEkG.1" title="原文 : Then, when you access your application&rsquo;s metrics endpoint (/metrics by default), Helidon displays the updated Jaeger tracing metrics as part of the vendor metrics section.">その後、アプリケーションのメトリクス・エンドポイント(デフォルトでは<code>/metrics</code>)にアクセスすると、Helidonによって、更新されたJaegerトレース・メトリクスが<code>vendor</code>メトリクス・セクションの一部として表示されます。</span></p>

<markup
lang="bash"

>curl -H "Accept: application/json" -X GET http://localhost:8080/metrics/vendor</markup>

<markup
lang="json"
title="部分的なHelidonメトリクス<code>vendor</code> Jaegerメトリクスを示す出力"
> ... "jaeger_tracer_baggage_restrictions_updates;result=err": 0,
  "jaeger_tracer_baggage_restrictions_updates;result=ok": 0,
  "jaeger_tracer_baggage_truncations": 0,
  "jaeger_tracer_baggage_updates;result=err": 0,
  "jaeger_tracer_baggage_updates;result=ok": 0,
  "jaeger_tracer_finished_spans": 0,
  "jaeger_tracer_reporter_queue_length": 0,
  "jaeger_tracer_reporter_spans;result=dropped": 0,
  "jaeger_tracer_reporter_spans;result=err": 0,
  "jaeger_tracer_reporter_spans;result=ok": 0,
  "jaeger_tracer_sampler_queries;result=err": 1,
  "jaeger_tracer_sampler_queries;result=ok": 0,
  "jaeger_tracer_sampler_updates;result=err": 0,
  "jaeger_tracer_sampler_updates;result=ok": 0,
  "jaeger_tracer_span_context_decoding_errors": 0,
  "jaeger_tracer_started_spans;sampled=n": 15,
  "jaeger_tracer_started_spans;sampled=y": 0,
  "jaeger_tracer_traces;sampled=n;state=joined": 2,
  "jaeger_tracer_traces;sampled=n;state=started": 3,
  "jaeger_tracer_traces;sampled=y;state=joined": 0,
  "jaeger_tracer_traces;sampled=y;state=started": 0,
...</markup>

<p><span class="merged" id="all.2XnFJT.1" title="原文 : Helidon publishes whatever metrics Jaeger creates.">Helidonは、Jaegerが作成するメトリクスを公開します。</span></p>

</div>
</doc-view>
