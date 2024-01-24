<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1hDCNA" title="原文 : MetricsObserver (webserver.observe.metrics) Configuration">MetricsObserver (webserver.observe.metrics)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1FFupb" title="原文 : Type: io.helidon.webserver.observe.metrics.MetricsObserver">タイプ: <a href="/apidocs/io.helidon.webserver.observe.metrics/io/helidon/webserver/observe/metrics/MetricsObserver.html" target="_blank">io.helidon.webserver.observe.metrics.MetricsObserver</a></span></p>

<p><span class="merged" id="all.4QYKo2.1" title="原文 : This is a standalone configuration type, prefix from configuration root: metrics">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>metrics</code></span></p>

<p><span class="merged" id="all.31kiUh.23" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.26gZXx.4"  title="原文: io.helidon.webserver.observe.spi.ObserveProvider"><code>io.helidon.webserver.observe.spi.ObserveProvider</code></span></p>

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


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.96"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.91" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.98"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.98"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.98"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.98"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.qt5gh.1"  title="原文: app-name"><code>app-name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.187"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3vBRBA.1" title="原文 : Value for the application tag to be added to each meter ID.">各メーターIDに追加するアプリケーション・タグの値。</span></p>

<markup>@return application tag value</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4G4Hoe.1"  title="原文: app-tag-name"><code>app-tag-name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.188"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2FJBFA.1" title="原文 : Name for the application tag to be added to each meter ID.">各メーターIDに追加するアプリケーション・タグの名前。</span></p>

<markup>@return application tag name</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48UcwL.17"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.149"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.81"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.49tbuX.1" title="原文 : Whether metrics functionality is enabled.">メトリクス機能が有効かどうか。</span></p>

<markup>@return if metrics are configured to be enabled</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2QMdx0.5"  title="原文: endpoint"><code>endpoint</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.189"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4KU3uR"  title="原文: metrics"><code>metrics</code></span></td>
<td class=""><doc-view>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Gz6OP.1"  title="原文: key-performance-indicators"><code>key-performance-indicators</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.r2Ryw.1" title="原文 : KeyPerformanceIndicatorMetricsConfig"><router-link to="/config/io_helidon_metrics_api_KeyPerformanceIndicatorMetricsConfig">KeyPerformanceIndicatorMetricsConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3ncMJD.1" title="原文 : Key performance indicator metrics settings.">キー・パフォーマンス・インジケータのメトリクス設定。</span></p>

<markup>@return key performance indicator metrics settings</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2r7Cat.4"  title="原文: permit-all"><code>permit-all</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.150"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4AwWXP.2" title="原文 : Whether to allow anybody to access the endpoint.">エンドポイントへのアクセスを許可するかどうか。</span></p>

<markup>@return whether to permit access to metrics endpoint to anybody, defaults to `true`
@see #roles()</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3mr21Q.1"  title="原文: rest-request-enabled"><code>rest-request-enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.151"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.47YgmC.1" title="原文 : Whether automatic REST request metrics should be measured.">自動RESTリクエスト・メトリクスを測定するかどうか。</span></p>

<markup>@return true/false</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Atrrs.3"  title="原文: roles"><code>roles</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.30"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3np7Uf.2" title="原文 : Hints for role names the user is expected to be in.">ユーザーが想定されるロール名のヒント。</span></p>

<markup>@return list of hints</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3llf19.1"  title="原文: scoping"><code>scoping</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1D7zta.1" title="原文 : ScopingConfig"><router-link to="/config/io_helidon_metrics_api_ScopingConfig">ScopingConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4T7kc8.1" title="原文 : Settings related to scoping management.">スコープ管理に関連する設定。</span></p>

<markup>@return scoping settings</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3WNvqu.1"  title="原文: tags"><code>tags</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.20ZAmf.1" title="原文 : Tag[]"><router-link to="/config/io_helidon_metrics_api_Tag">Tag[]</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2Fc6ey.1" title="原文 : Global tags.">グローバル・タグ。</span></p>

<markup>@return name/value pairs for global tags</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>