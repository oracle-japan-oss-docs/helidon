<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.Kbm53" title="原文 : TracingObserver (webserver.observe.tracing) Configuration">TracingObserver (webserver.observe.tracing)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2FDY0f" title="原文 : Type: io.helidon.webserver.observe.tracing.TracingObserver">タイプ: <a href="/apidocs/io.helidon.webserver.observe.tracing/io/helidon/webserver/observe/tracing/TracingObserver.html" target="_blank">io.helidon.webserver.observe.tracing.TracingObserver</a></span></p>

<p><span class="merged" id="all.31kiUh.24" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.26gZXx.5"  title="原文: io.helidon.webserver.observe.spi.ObserveProvider"><code>io.helidon.webserver.observe.spi.ObserveProvider</code></span></p>

</li>
</ul>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.97"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.92" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.99"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.99"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.99"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.99"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.N02CJ"  title="原文: env-config"><code>env-config</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3SUIe9"  title="原文: TracingConfig">TracingConfig</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.y7wwb"  title="原文: TracingConfig.ENABLED"><code>TracingConfig.ENABLED</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3IzuuG" title="原文 : Use the provided configuration as a default for any request.">指定された構成を任意のリクエストのデフォルトとして使用します。</span></p>

<markup>@return default web server tracing configuration</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1KHeYA"  title="原文: path-configs"><code>path-configs</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.gW8SM"  title="原文: PathTracingConfig[]">PathTracingConfig[]</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2t2pid"  title="原文: new @java.util.ArrayList@(@java.util.List@.of(PathTracingConfig.builder() .path(&quot;/metrics/&quot;) .tracingConfig(TracingConfig.DISABLED) .build(), PathTracingConfig.builder() .path(&quot;/health/&quot;) .tracingConfig(TracingConfig.DISABLED) .build(), PathTracingConfig.builder() .path(&quot;/openapi/*&quot;) .tracingConfig(TracingConfig.DISABLED) .build()))"><code>new @java.util.ArrayList@(@java.util.List@.of(PathTracingConfig.builder() .path("/metrics/<strong>") .tracingConfig(TracingConfig.DISABLED) .build(), PathTracingConfig.builder() .path("/health/</strong>") .tracingConfig(TracingConfig.DISABLED) .build(), PathTracingConfig.builder() .path("/openapi/*") .tracingConfig(TracingConfig.DISABLED) .build()))</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2zvb5h" title="原文 : Path specific configuration of tracing.">トレースのパス固有の構成。</span></p>

<markup>@return configuration of tracing for specific paths</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1d5M0z.6"  title="原文: weight"><code>weight</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.40Xztn.7"  title="原文:: double">double</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.PJdqQ"  title="原文: 900.0"><code>900.0</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4AJ0UF.spl1" title="原文 : Weight of the feature registered with WebServer.">WebServerに登録されている機能の重み。</span> <span class="merged" id="all.4AJ0UF.spl2" title="原文 : Changing weight may cause tracing to be executed at a different time (such as after security, or even after all routes).">重みを変更すると、異なる時間(セキュリティの後、またはすべてのルートの後など)にトレースが実行される場合があります。</span> <span class="merged" id="all.4AJ0UF.spl3" title="原文 : Please understand feature weights before changing this order.">この順序を変更する前に、機能の重みを理解してください。</span> </p>

<markup>@return weight of tracing feature</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
