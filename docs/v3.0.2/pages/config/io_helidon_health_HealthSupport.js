<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.CGks7" title="原文 : HealthSupport (health) Configuration">HealthSupport (health)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.39zZxo" title="原文 : Type: io.helidon.health.HealthSupport">タイプ: <a href="./apidocs/io.helidon.health/io/helidon/health/HealthSupport.html" target="_blank">io.helidon.health.HealthSupport</a></span></p>

<p><span class="merged" id="all.4EFd1l" title="原文 : This is a standalone configuration type, prefix from configuration root: health">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>health</code></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.17"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.17" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.18"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.18"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.18"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.18"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3UsoFV"  title="原文: cors"><code>cors</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1Gn61H" title="原文 : CrossOriginConfig"><router-link to="/config/io_helidon_webserver_cors_CrossOriginConfig">CrossOriginConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4NniMS" title="原文 : Sets the cross-origin config builder for use in establishing CORS support for the service endpoints.">サービス・エンドポイントのCORSサポートの確立に使用するクロス・オリジン構成ビルダーを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48UcwL.1"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.16"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.10"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2yWGb2" title="原文 : HealthSupport can be disabled by invoking this method.">HealthSupportは、このメソッドを呼び出すことによって無効にできます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1NJ0vY"  title="原文: exclude"><code>exclude</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.kflpu.spl1" title="原文 : Add health checks to a black list.">ヘルス・チェックをブラック・リストに追加します。</span> <span class="merged" id="all.kflpu.spl2" title="原文 : Health check results that match by name with a blacklisted records will not be part of the result.">名前でブラックリスト・レコードと一致するヘルス・チェック結果は結果の一部になりません。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.43qXap"  title="原文: exclude-classes"><code>exclude-classes</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.26ZrAs" title="原文 : Class&lt;?&gt;[]">クラス&lt;?> []</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4G70D8.spl1" title="原文 : A class may be excluded from invoking health checks on it.">クラスは、それに対するヘルス・チェックの起動から除外できます。</span> <span class="merged" id="all.4G70D8.spl2" title="原文 : This allows configurable approach to disabling broken health-checks.">これにより、構成可能なアプローチで破損したヘルス・チェックを無効にすることができます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.29569K"  title="原文: include"><code>include</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.1"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.OjXeZ" title="原文 : Add health checks to a white list (in case #includeAll is set to false.">ヘルス・チェックをホワイト・リストに追加します(#includeAllが<code>false</code>に設定されている場合)。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2rpt0z"  title="原文: routing"><code>routing</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.22"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1n2NdZ" title="原文 : Sets the routing name to use for setting up the service&rsquo;s endpoint.">サービスのエンドポイントの設定に使用するルーティング名を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2kI2ET"  title="原文: timeout-millis"><code>timeout-millis</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.280ErD.2"  title="原文: 10000"><code>10000</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1lYeql" title="原文 : health endpoint timeout (ms)">ヘルス・エンドポイント・タイムアウト(ミリ秒)</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2C8nDO"  title="原文: web-context"><code>web-context</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.23"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3MWNIS" title="原文 : Sets the web context to use for the service&rsquo;s endpoint.">サービスのエンドポイントに使用するwebコンテキストを設定します。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
