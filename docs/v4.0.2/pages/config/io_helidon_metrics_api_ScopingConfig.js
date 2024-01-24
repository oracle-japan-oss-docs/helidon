<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2zr4MA" title="原文 : ScopingConfig (metrics.api) Configuration">ScopingConfig (metrics.api)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1gWgFO" title="原文 : Type: io.helidon.metrics.api.ScopingConfig">タイプ: <a href="/apidocs/io.helidon.metrics.api/io/helidon/metrics/api/ScopingConfig.html" target="_blank">io.helidon.metrics.api.ScopingConfig</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.32"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.32" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.33"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.33"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.33"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.33"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2J1mbY"  title="原文: default"><code>default</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.47"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2zvFMg"  title="原文: application"><code>application</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3TKVqi" title="原文 : Default scope value to associate with meters that are registered without an explicit setting; no setting means meters are assigned scope io.helidon.metrics.api.Meter.Scope#DEFAULT.">明示的な設定なしで登録されたメーターに関連付けるデフォルトのスコープ値。設定なしの場合、メーターはスコープ<code>io.helidon.metrics.api.Meter.Scope#DEFAULT</code>に割り当てられます。</span></p>

<markup>@return default scope value</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2wa6Ol.1"  title="原文: scopes"><code>scopes</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3CpNNi" title="原文 : Map&lt;string, ScopeConfig&gt;"><router-link to="/config/io_helidon_metrics_api_ScopeConfig">Map&lt;string, ScopeConfig></router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.E2VcE" title="原文 : Settings for individual scopes.">個々のスコープの設定。</span></p>

<markup>@return scope settings</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1yJA6B"  title="原文: tag-name"><code>tag-name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.48"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3YKQSX"  title="原文: scope"><code>scope</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.26EJku" title="原文 : Tag name for storing meter scope values in the underlying implementation meter registry.">基礎となる実装メーター・レジストリにメーター・スコープ値を格納するためのタグ名。</span></p>

<markup>@return tag name for storing scope values</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
