<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2nNc0I" title="原文 : HttpConfigBase (webclient.api) Configuration">HttpConfigBase (webclient.api)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2PCguf" title="原文 : Type: io.helidon.webclient.api.HttpConfigBase">タイプ: <a href="/apidocs/io.helidon.webclient.api/io/helidon/webclient/api/HttpConfigBase.html" target="_blank">io.helidon.webclient.api.HttpConfigBase</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.70"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.66" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.73"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.73"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.73"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.73"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3nD4yJ.2"  title="原文: connect-timeout"><code>connect-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.26"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.19Zjbm.1"  title="原文:: Connect timeout.">接続タイムアウト</span></p>

<markup>@return connect timeout
@see io.helidon.common.socket.SocketOptions#connectTimeout()</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.SV0kY.1"  title="原文: follow-redirects"><code>follow-redirects</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.113"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.57"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.PWDBG.1" title="原文 : Whether to follow redirects.">リダイレクトを追跡するかどうか。</span></p>

<markup>@return whether to follow redirects</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4cLDv2.3"  title="原文: keep-alive"><code>keep-alive</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.114"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.58"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1W33Q1.1" title="原文 : Determines if connection keep alive is enabled (NOT socket keep alive, but HTTP connection keep alive, to re-use the same connection for multiple requests).">複数のリクエストに対して同じ接続を再利用するために、接続キープ・アライブが有効かどうかを決定します(ソケット・キープ・アライブではなく、HTTP接続のキープ・アライブ)。</span></p>

<markup>@return keep alive for this connection
@see io.helidon.common.socket.SocketOptions#socketKeepAlive()</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4MA6E0.3"  title="原文: max-redirects"><code>max-redirects</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.41"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4UFA6L.6"  title="原文: 10"><code>10</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2Ao3gH.1.spl1" title="原文 : Max number of followed redirects.">追跡リダイレクトの最大数。</span> <span class="merged" id="all.2Ao3gH.1.spl2" title="原文 : This is ignored if #followRedirects() option is false.">#followRedirects()オプションが<code>false</code>の場合、これは無視されます。</span> </p>

<markup>@return max number of followed redirects</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2RiS66.1"  title="原文: properties"><code>properties</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1WdJek.3" title="原文 : Map&lt;string, string&gt;">マップ&lt;string, string></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4aBDnq.1.spl1" title="原文 : Properties configured for this client.">このクライアント用に構成されたプロパティ。</span> <span class="merged" id="all.4aBDnq.1.spl2" title="原文 : These properties are propagated through client request, to be used by services (and possibly for other purposes).">これらのプロパティは、クライアント・リクエストを介して伝播され、サービスによって使用されます(場合によってはその他の目的で使用されます)。</span> </p>

<markup>@return map of client properties</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1MC3Gg.1"  title="原文: proxy"><code>proxy</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4PZW4v.1" title="原文 : Proxy"><router-link to="/config/io_helidon_webclient_api_Proxy">プロキシ</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.lHTI8.1" title="原文 : Proxy configuration to be used for requests.">リクエストに使用されるプロキシ構成。</span></p>

<markup>@return proxy to use, defaults to Proxy#noProxy()</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3R6xIn.2"  title="原文: read-timeout"><code>read-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.27"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1ueweF.1"  title="原文:: Read timeout.">読取りタイムアウト</span></p>

<markup>@return read timeout
@see io.helidon.common.socket.SocketOptions#readTimeout()</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.49aL8q.1"  title="原文: tls"><code>tls</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2x5x4s.1" title="原文 : Tls"><router-link to="/config/io_helidon_common_tls_Tls">Tls</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3fm9rs.1.spl1" title="原文 : TLS configuration for any TLS request from this client.">このクライアントからの任意のTLSリクエストのTLS構成。</span> <span class="merged" id="all.3fm9rs.1.spl2" title="原文 : TLS can also be configured per request.">TLSはリクエストごとに構成することもできます。</span> <span class="merged" id="all.3fm9rs.1.spl3" title="原文 : TLS is used when the protocol is set to https.">TLSは、プロトコルが<code>https</code>に設定されている場合に使用されます。</span> </p>

<markup>@return TLS configuration to use</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
