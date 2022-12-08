<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1PVpa3" title="原文 : MetricsSettings (metrics.api) Configuration">MetricsSettings (metrics.api)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.HrahY" title="原文 : Type: io.helidon.metrics.api.MetricsSettings">タイプ: <a href="./apidocs/io.helidon.metrics.api/io/helidon/metrics/api/MetricsSettings.html" target="_blank">io.helidon.metrics.api.MetricsSettings</a></span></p>

<markup
lang="text"
title="Config key"
>metrics</markup>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.23"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.23" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2ZwVVB.26"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.26"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.26"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.rUljB"  title="原文: appName"><code>appName</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.36"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3k7wSR" title="原文 : Sets the value for the _app tag to be applied to all metrics.">すべてのメトリクスに適用される<code>_app</code>タグの値を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3lo4qT"  title="原文: base"><code>base</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3zC5Y4" title="原文 : BaseMetricsSettings"><router-link to="/config/io_helidon_metrics_api_BaseMetricsSettings">BaseMetricsSettings</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.16IQfa" title="原文 : Set the base metrics settings.">ベース・メトリクス設定を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48UcwL.4"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.28"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.41X411" title="原文 : Sets whether metrics should be enabled.">メトリクスを有効にするかどうかを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Gz6OP"  title="原文: key-performance-indicators"><code>key-performance-indicators</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2Y8Giy" title="原文 : KeyPerformanceIndicatorMetricsSettings"><router-link to="/config/io_helidon_metrics_api_KeyPerformanceIndicatorMetricsSettings">KeyPerformanceIndicatorMetricsSettings</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4SC7W9" title="原文 : Set the KPI metrics settings.">KPIメトリクス設定を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1jGmWf"  title="原文: registries"><code>registries</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4HJlou" title="原文 : Map&lt;string, RegistrySettings&gt;"><router-link to="/config/io_helidon_metrics_api_RegistrySettings">マップ&lt;string, RegistrySettings></router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3i3kSz" title="原文 : Sets the registry settings for the specified registry type.">指定されたレジストリ・タイプのレジストリ設定を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3WNvqu"  title="原文: tags"><code>tags</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1WdJek" title="原文 : Map&lt;string, string&gt;">マップ&lt;string, string></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1f8BSc" title="原文 : Sets the global tags to be applied to all metrics.">すべてのメトリクスに適用されるグローバル・タグを設定します。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
