<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.F8Gb4" title="原文 : Tracer (tracing) Configuration">Tracer (tracing)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2ssPDD" title="原文 : Jaeger tracer configuration.">Jaegerトレーサの構成。</span></p>

<p><span class="merged" id="all.1jilXd" title="原文 : Type: io.helidon.tracing.Tracer">タイプ: <a href="/apidocs/io.helidon.tracing/io/helidon/tracing/Tracer.html" target="_blank">io.helidon.tracing.Tracer</a></span></p>

<p><span class="merged" id="all.2QFPN" title="原文 : This is a standalone configuration type, prefix from configuration root: tracing">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>tracing</code></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.64"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.62" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.69"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.69"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.69"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.69"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1OA6Nx"  title="原文: client-cert-pem"><code>client-cert-pem</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.17" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4HtnV9" title="原文 : Certificate of client in PEM format.">PEM形式のクライアントの証明書。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.aCrpT"  title="原文: exporter-timeout"><code>exporter-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.19"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2kRnHs.3"  title="原文: PT10S"><code>PT10S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3DyZwu" title="原文 : Timeout of exporter requests.">エクスポート業者リクエストのタイムアウトです。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3xwTZs"  title="原文: max-export-batch-size"><code>max-export-batch-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.34"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4UoPlE"  title="原文: 512"><code>512</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N6DKI" title="原文 : Maximum Export Batch Size of exporter requests.">エクスポータ・リクエストの最大エクスポート・バッチ・サイズ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1g1XqJ"  title="原文: max-queue-size"><code>max-queue-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.35"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2lp3HC"  title="原文: 2048"><code>2048</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3fgwzo" title="原文 : Maximum Queue Size of exporter requests.">エクスポータ・リクエストの最大キュー・サイズ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4ALScM"  title="原文: private-key-pem"><code>private-key-pem</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.18" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.32EJFE" title="原文 : Private key in PEM format.">PEM形式の秘密キー。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.oqYOx"  title="原文: propagation"><code>propagation</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Rns1f" title="原文 : PropagationFormat[] (B3, B3_SINGLE, JAEGER, W3C)">PropagationFormat[] (B3, B3_SINGLE, JAEGER, W3C)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2aCowQ"  title="原文: JAEGER"><code>JAEGER</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.S1F0x" title="原文 : Add propagation format to use.">使用する伝播形式を追加します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3N9ohQ"  title="原文: sampler-param"><code>sampler-param</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ets8I"  title="原文:: Number">数値</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.27cMqo.3"  title="原文: 1"><code>1</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2sLEd8" title="原文 : The sampler parameter (number).">samplerパラメータ(数値)。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2immXP"  title="原文: sampler-type"><code>sampler-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4YAOnL" title="原文 : SamplerType (CONSTANT, RATIO)">SamplerType (定数、比率)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3JRsgA"  title="原文: CONSTANT"><code>CONSTANT</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3EzQ38" title="原文 : Sampler type.">サンプラのタイプ。</span></p>

<markup>See &lt;a href="https://www.jaegertracing.io/docs/latest/sampling/#client-sampling-configuration"&gt;Sampler types&lt;/a&gt;.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.38fsEi"  title="原文: schedule-delay"><code>schedule-delay</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.20"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.432omB.1"  title="原文: PT5S"><code>PT5S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3dGHek" title="原文 : Schedule Delay of exporter requests.">エクスポータ・リクエストのスケジュール遅延。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.DBcO6"  title="原文: span-processor-type"><code>span-processor-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.114j9D" title="原文 : SpanProcessorType (SIMPLE, BATCH)">SpanProcessorType (SIMPLE, BATCH)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42l5bd"  title="原文: batch"><code>batch</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1i4ElM" title="原文 : Span Processor type used.">使用されるスパン・プロセッサ・タイプ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1eW5Cx"  title="原文: trusted-cert-pem"><code>trusted-cert-pem</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.19" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1zWYYy" title="原文 : Trusted certificates in PEM format.">PEM形式のトラストできる証明書。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
