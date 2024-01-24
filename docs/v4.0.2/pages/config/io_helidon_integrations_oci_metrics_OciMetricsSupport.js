<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.4SGnTi" title="原文 : OciMetricsSupport (integrations.oci.metrics) Configuration">OciMetricsSupport (integrations.oci.metrics)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.32GHy7" title="原文 : Type: io.helidon.integrations.oci.metrics.OciMetricsSupport">タイプ: <a href="/apidocs/io.helidon.integrations.oci.metrics/io/helidon/integrations/oci/metrics/OciMetricsSupport.html" target="_blank">io.helidon.integrations.oci.metrics.OciMetricsSupport</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.25"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.25" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.26"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.26"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.26"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.26"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.oNByw"  title="原文: batch-delay"><code>batch-delay</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.1"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.27cMqo.1"  title="原文: 1"><code>1</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.23S5Ww" title="原文 : Sets the delay interval if metrics are posted in batches (defaults to DEFAULT_BATCH_DELAY).">メトリクスがバッチでポストされる場合の遅延間隔を設定します(デフォルトは<code>DEFAULT_BATCH_DELAY</code>)。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.46OP4g"  title="原文: batch-size"><code>batch-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.25"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.35l5fR.2"  title="原文: 50"><code>50</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.r78x3" title="原文 : Sets the maximum no. of metrics to send in a batch (defaults to DEFAULT_BATCH_SIZE).">バッチで送信するメトリクスの最大数を設定します(デフォルトは<code>DEFAULT_BATCH_SIZE</code>)。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.134Dyf"  title="原文: compartment-id"><code>compartment-id</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.31"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.bDqPH" title="原文 : Sets the compartment ID.">コンパートメントIDを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.lGKge.2"  title="原文: delay"><code>delay</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.2"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2f7qIC.1"  title="原文: 60"><code>60</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4QM0Du" title="原文 : Sets the delay interval between metric posting (defaults to DEFAULT_SCHEDULER_DELAY).">メトリックのポスト間の遅延間隔を設定します(デフォルトは<code>DEFAULT_SCHEDULER_DELAY</code>)。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3MOqKP"  title="原文: description-enabled"><code>description-enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.35"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.17"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1KlPDy" title="原文 : Sets whether the description should be enabled or not.">説明を有効にするかどうかを設定します。</span></p>

<markup>Defaults to `true`.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48UcwL.3"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.36"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.18"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.ajgB9" title="原文 : Sets whether metrics transmission to OCI is enabled.">OCIへのメトリクス転送が有効かどうかを設定します。</span></p>

<markup>Defaults to `true`.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.QiGde"  title="原文: initial-delay"><code>initial-delay</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.3"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.27cMqo.2"  title="原文: 1"><code>1</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.mPnlh" title="原文 : Sets the initial delay before metrics are sent to OCI (defaults to DEFAULT_SCHEDULER_INITIAL_DELAY).">メトリクスがOCIに送信されるまでの初期遅延を設定します(デフォルトは<code>DEFAULT_SCHEDULER_INITIAL_DELAY</code>)。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3fCyV9"  title="原文: namespace"><code>namespace</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.32"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3I8Ir8" title="原文 : Sets the namespace.">ネームスペースを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3wO3Cb"  title="原文: resource-group"><code>resource-group</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.33"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3pVuFy" title="原文 : Sets the resource group.">リソース・グループを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.LrmtL"  title="原文: scheduling-time-unit"><code>scheduling-time-unit</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3W667G" title="原文 : TimeUnit (NANOSECONDS, MICROSECONDS, MILLISECONDS, SECONDS, MINUTES, HOURS, DAYS)">TimeUnit (NANOSECONDS, MICROSECONDS, MILLISECONDS, SECONDS, MINUTES, HOURS, DAYS)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.28SLKm"  title="原文: TimeUnit.SECONDS"><code>TimeUnit.SECONDS</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.gKp5p" title="原文 : Sets the time unit applied to the initial delay and delay values (defaults to TimeUnit.SECONDS).">初期遅延および遅延値に適用される時間単位を設定します(デフォルトは<code>TimeUnit.SECONDS</code>)。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2wa6Ol"  title="原文: scopes"><code>scopes</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3CCZLV"  title="原文:: String[]">String[]</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.YFl5y"  title="原文: All scopes"><code>All scopes</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2P69FI" title="原文 : Sets which metrics scopes (e.g., base, vendor, application) should be sent to OCI.">OCIに送信するメトリクス・スコープ(ベース、ベンダー、アプリケーションなど)を設定します。</span></p>

<markup>If this method is never invoked, defaults to all scopes.</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
