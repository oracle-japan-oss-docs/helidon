<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.C8E73" title="原文 : Http1ClientProtocolConfig (webclient.http1) Configuration">Http1ClientProtocolConfig (webclient.http1)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1UCDJk" title="原文 : Type: io.helidon.webclient.http1.Http1ClientProtocolConfig">タイプ: <a href="/apidocs/io.helidon.webclient.http1/io/helidon/webclient/http1/Http1ClientProtocolConfig.html" target="_blank">io.helidon.webclient.http1.Http1ClientProtocolConfig</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.74"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.70" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.77"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.77"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.77"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.77"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.ItlYF"  title="原文: default-keep-alive"><code>default-keep-alive</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.121"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.63"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2HvjYq" title="原文 : Whether to use keep alive by default.">デフォルトでキープ・アライブを使用するかどうか。</span></p>

<markup>@return `true` for keeping connections alive and re-using them for multiple requests (default), `false`
 to create a new connection for each request</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2jcPLP"  title="原文: max-header-size"><code>max-header-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.46"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1K73Gb"  title="原文: 16384"><code>16384</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.447v4Y" title="原文 : Configure the maximum allowed header size of the response.">レスポンスの最大許容ヘッダー・サイズを構成します。</span></p>

<markup>@return  maximum header size</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.FYENv"  title="原文: max-status-line-length"><code>max-status-line-length</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.47"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3mz6xH.2"  title="原文: 256"><code>256</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3vFJzz" title="原文 : Configure the maximum allowed length of the status line from the response.">レスポンスからステータス明細の最大許容長を構成します。</span></p>

<markup>@return maximum status line length</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.309fiz.5"  title="原文: name"><code>name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.170"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2yUBkl"  title="原文: http_1_1"><code>http_1_1</code></span></td>
<td class=""><doc-view>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2WWdbj"  title="原文: validate-request-headers"><code>validate-request-headers</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.122"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.43"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ZR8h4" title="原文 : Sets whether the request header format is validated or not.">リクエスト・ヘッダー形式をバリデートするかどうかを設定します。</span></p>

<markup>Defaults to `false` as user has control on the header creation.</markup>
<markup>@return whether request header validation should be enabled</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1TRpsd"  title="原文: validate-response-headers"><code>validate-response-headers</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.123"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.64"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.14619U" title="原文 : Sets whether the response header format is validated or not.">レスポンス・ヘッダー形式をバリデートするかどうかを設定します。</span></p>

<markup>Defaults to `true`.</markup>
<markup>@return whether response header validation should be enabled</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
