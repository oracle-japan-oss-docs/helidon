<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.4LL0ot.11"  title="原文:: Metrics">メトリクス</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3Y16jc" title="原文 : Helidon SE provides the following to support metrics:">Helidon SEには、メトリクスをサポートするために次のものが用意されています:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2FcBik" title="原文 : The endpoint /metrics: A configurable endpoint that exposes metrics information in JSON format (as specified by the MicroProfile Metrics specification) or in plain text (for Prometheus metrics).">エンドポイント<code>/metrics</code>: メトリクス情報をJSON形式(MicroProfileメトリクス仕様で指定)またはプレーン・テキスト(Prometheusメトリクス)で公開する構成可能なエンドポイント。</span>

</li>
<li>
<span class="merged" id="all.2Of2Dj" title="原文 : A base set of metrics, available at /metrics/base, as specified by the MicroProfile Metrics specification.">MicroProfile Metrics仕様で指定されている、<code>/metrics/base</code>で使用可能なメトリクスのベース・セット。</span>

</li>
<li>
<span class="merged" id="all.hVaiW" title="原文 : A set of Helidon-specific metrics, available at /metrics/vendor"><code>/metrics/vendor</code>で使用可能なHelidon固有のメトリクスのセット</span>

</li>
</ol></dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_prerequisites"><span class="merged" id="all.2LZvWc.9"  title="原文:: Prerequisites">前提条件</span></h2>
<div class="section">
<p><span class="merged" id="all.4JnU1V.10" title="原文 : Declare the following dependency in your project:">プロジェクトで次の依存性を宣言します:</span></p>

<markup
lang="xml"

>    &lt;dependency&gt;
        &lt;groupId&gt;io.helidon.metrics&lt;/groupId&gt;
        &lt;artifactId&gt;helidon-metrics&lt;/artifactId&gt;
    &lt;/dependency&gt;</markup>

</div>

<h2 id="_using_metrics_in_your_application"><span class="merged" id="all.1O2l6m" title="原文 : Using Metrics in Your Application">アプリケーションでのメトリクスの使用</span></h2>
<div class="section">
<p><span class="merged" id="all.1NkucO" title="原文 : To enable Metrics, register it with the WebServer.">メトリクスを有効にするには、WebServerに登録します。</span></p>

<markup
lang="java"

>import io.helidon.metrics.MetricsSupport;
//...

Routing.builder()
                .register(MetricsSupport.create())
                .register("/myapp", new MyService())
                .build();</markup>

<p><span class="merged" id="all.2B0UWu" title="原文 : Then you can use metrics in your service.">その後、サービスでメトリクスを使用できます。</span></p>

<markup
lang="java"
title="メトリクス・カウンタの定義および使用"
>import io.helidon.metrics.RegistryFactory;
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
<li data-value="1"><span class="merged" id="all.15k0g6" title="原文 : Get the application metrics registry">アプリケーション・メトリクス・レジストリを取得</span></li>
<li data-value="2"><span class="merged" id="all.3BpLe1" title="原文 : Create a counter in that registry">レジストリにカウンタを作成</span></li>
<li data-value="3"><span class="merged" id="all.eVxQm" title="原文 : Increment the counter for every request">リクエストごとにカウンタを増やす</span></li>
</ul>
</div>

<h2 id="_accessing_metrics_endpoint"><span class="merged" id="all.4Jorei" title="原文 : Accessing Metrics Endpoint">メトリクス・エンドポイントへのアクセス</span></h2>
<div class="section">
<p><span class="merged" id="all.3Uv2Hf.spl1" title="原文 : Access metrics data via the /metrics endpoint."><code>/metrics</code>エンドポイント経由でメトリクス・データにアクセスします。</span> <span class="merged" id="all.3Uv2Hf.spl2" title="原文 : Two reporting formats are supported.">2つのレポート形式がサポートされています。</span> <span class="merged" id="all.3Uv2Hf.spl3" title="原文 : The HTTP Accept header sent by the client determines the reporting format:">クライアントによって送信されるHTTP Acceptヘッダーによって、レポート形式が決まります:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.3DZaYs" title="原文 : JSON format - used when the HTTP Accept header matches application/json">JSON形式 - HTTP Acceptヘッダーが<code>application/json</code>と一致する場合に使用されます</span>

</li>
<li>
<span class="merged" id="all.3NPOEK" title="原文 : Prometheus text format - used when the HTTP Accept header is text/plain or otherwise does not match application/json">Prometheusテキスト形式 - HTTP Acceptヘッダーが<code>text/plain</code>の場合、または<code>application/json</code>と一致しない場合に使用されます</span>

</li>
</ol>
<markup
lang="bash"
title="レポートの例: プロメテウス形式"
>curl -s -H 'Accept: text/plain' -X GET http://localhost:8080/metrics/
# TYPE base:classloader_total_loaded_class_count counter
# HELP base:classloader_total_loaded_class_count Displays the total number of classes that have been loaded since the Java virtual machine has started execution.
base:classloader_total_loaded_class_count 3157
#...</markup>

<markup
lang="bash"
title="レポートの例: JSON形式"
>curl -s -H 'Accept: application/json' -X GET http://localhost:8080/metrics/ | json_pp
{
   "base" : {
      "memory.maxHeap" : 3817865216,
      "memory.committedHeap" : 335544320,
#...</markup>

<p><span class="merged" id="all.XxsLk" title="原文 : In addition to your application metrics the reports contain other metrics of interest such as system and VM information.">レポートには、アプリケーション・メトリクスに加えて、システムやVMの情報など、関心のある他のメトリクスも含まれます。</span></p>

<p><span class="merged" id="all.oeOi7" title="原文 : For full details see the MicroProfile Metrics specification.">詳細は、<a href="https://github.com/eclipse/microprofile-metrics/releases" id="" target="_blank" >「MicroProfileメトリクス」</a>仕様を参照してください。</span></p>

<p><span class="merged" id="all.36k31i" title="原文 : The Metrics component in Helidon SE is the core for the Helidon MP implementation of the MicroProfile Metrics specification.">Helidon SEのメトリクス・コンポーネントは、MicroProfileメトリクス仕様のHelidon MP実装のコアです。</span></p>

</div>
</doc-view>
