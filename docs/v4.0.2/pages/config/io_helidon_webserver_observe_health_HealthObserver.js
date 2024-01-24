<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2M3j01" title="原文 : HealthObserver (webserver.observe.health) Configuration">HealthObserver (webserver.observe.health)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3Tirmk" title="原文 : Type: io.helidon.webserver.observe.health.HealthObserver">タイプ: <a href="/apidocs/io.helidon.webserver.observe.health/io/helidon/webserver/observe/health/HealthObserver.html" target="_blank">io.helidon.webserver.observe.health.HealthObserver</a></span></p>

<p><span class="merged" id="all.4EFd1l" title="原文 : This is a standalone configuration type, prefix from configuration root: health">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>health</code></span></p>

<p><span class="merged" id="all.31kiUh.20" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.26gZXx.1"  title="原文: io.helidon.webserver.observe.spi.ObserveProvider"><code>io.helidon.webserver.observe.spi.ObserveProvider</code></span></p>

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


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.92"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.87" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.94"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.94"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.94"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.94"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.37dtLI"  title="原文: details"><code>details</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.145"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.50"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3fRHYx.spl1" title="原文 : Whether details should be printed.">詳細を印刷するかどうか。</span> <span class="merged" id="all.3fRHYx.spl2" title="原文 : By default, health only returns a io.helidon.http.Status#NO_CONTENT_204 for success, io.helidon.http.Status#SERVICE_UNAVAILABLE_503 for health down, and io.helidon.http.Status#INTERNAL_SERVER_ERROR_500 in case of error with no entity.">デフォルトでは、ヘルスは、成功の場合はio.helidon.http.Status#NO_CONTENT_204、ヘルス終了の場合はio.helidon.http.Status#SERVICE_UNAVAILABLE_503、エンティティがないエラーの場合はio.helidon.http.Status#INTERNAL_SERVER_ERROR_500のみが戻されます。</span> <span class="merged" id="all.3fRHYx.spl3" title="原文 : When details are enabled, health returns io.helidon.http.Status#OK_200 for success, same codes otherwise and a JSON entity with detailed information about each health check executed.">詳細が有効な場合、ヘルスでは、成功の場合はio.helidon.http.Status#OK_200、それ以外の場合は同じコード、実行された各ヘルス・チェックに関する詳細情報を含むJSONエンティティが返されます。</span> </p>

<markup>@return set to `true` to enable details</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2QMdx0.2"  title="原文: endpoint"><code>endpoint</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.183"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4HLPu5"  title="原文: health"><code>health</code></span></td>
<td class=""><doc-view>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Ea3gI"  title="原文: use-system-services"><code>use-system-services</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.146"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.79"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2WvLJ5.spl1" title="原文 : Whether to use services discovered by java.util.ServiceLoader.">java.util.ServiceLoaderで検出されたサービスを使用するかどうか。</span> <span class="merged" id="all.2WvLJ5.spl2" title="原文 : By default, all io.helidon.health.spi.HealthCheckProvider based health checks are added.">デフォルトでは、すべてのio.helidon.health.spi.HealthCheckProviderベースのヘルス・チェックが追加されます。</span> </p>

<markup>@return set to `false` to disable discovery</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
