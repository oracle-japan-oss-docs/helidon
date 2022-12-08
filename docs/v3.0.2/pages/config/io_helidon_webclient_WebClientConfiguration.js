<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3ERX0w" title="原文 : WebClientConfiguration (webclient) Configuration">WebClientConfiguration (webclient)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2Sjvs0" title="原文 : Configuration of the HTTP client">HTTPクライアントの構成</span></p>

<p><span class="merged" id="all.eoVIq" title="原文 : Type: io.helidon.webclient.WebClientConfiguration">タイプ: <a href="./apidocs/io.helidon.webclient/io/helidon/webclient/WebClientConfiguration.html" target="_blank">io.helidon.webclient.WebClientConfiguration</a></span></p>

<p><span class="merged" id="all.3fstMN" title="原文 : This is a standalone configuration type, prefix from configuration root: client">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>client</code></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.57"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.58" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.65"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.65"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.65"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.65"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3QxsGz"  title="原文: connect-timeout-millis"><code>connect-timeout-millis</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.19"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xzmO.1"  title="原文: 60000"><code>60000</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4FK4qc" title="原文 : Sets new connection timeout of the request.">リクエストの新しい接続タイムアウトを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1qqvlY"  title="原文: cookies.automatic-store-enabled"><code>cookies.automatic-store-enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.89"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1TfWdT" title="原文 : Whether to allow automatic cookie storing">cookieの自動格納を許可するかどうか</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.mROOo"  title="原文: cookies.default-cookies"><code>cookies.default-cookies</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.399TfH"  title="原文:: Map">マップ</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2gH13q.spl1" title="原文 : Default cookies to be used in each request.">各リクエストで使用されるデフォルトのcookie。</span> <span class="merged" id="all.2gH13q.spl2" title="原文 : Each list entry has to have &quot;name&quot; and &quot;value&quot; node">各リスト・エントリには「name」および「value」ノードが必要です</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.SV0kY"  title="原文: follow-redirects"><code>follow-redirects</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.90"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.32"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3rNAWb" title="原文 : Whether to follow any response redirections or not.">レスポンス方向に従うかどうか。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.VPmDa.1"  title="原文: headers"><code>headers</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.399TfH.1"  title="原文:: Map">マップ</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.39lP8L.spl1" title="原文 : Default headers to be used in each request.">各リクエストで使用されるデフォルト・ヘッダー。</span> <span class="merged" id="all.39lP8L.spl2" title="原文 : Each list entry has to have &quot;name&quot; and &quot;value&quot; node">各リスト・エントリには「name」および「value」ノードが必要です</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4MA6E0.2"  title="原文: max-redirects"><code>max-redirects</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.28"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4XADpA.3"  title="原文: 5"><code>5</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2sRpMV" title="原文 : Sets max number of followed redirects.">続くリダイレクトの最大数を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3DSTeZ"  title="原文: media-support"><code>media-support</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1SwiJp" title="原文 : MediaContext"><router-link to="/config/io_helidon_media_common_MediaContext">MediaContext</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1MC3Gg"  title="原文: proxy"><code>proxy</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2iwerL" title="原文 : Proxy"><router-link to="/config/io_helidon_webclient_Proxy">プロキシ</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4mOC6" title="原文 : Sets new request proxy.">新しいリクエスト・プロキシを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.jwl7Q"  title="原文: read-timeout-millis"><code>read-timeout-millis</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.20"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2xWSpi"  title="原文: 600000"><code>600000</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.oJM9I" title="原文 : Sets new read timeout of the response.">レスポンスの新しい読取りタイムアウトを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.CyX3F"  title="原文: relative-uris"><code>relative-uris</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.91"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.33"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.LdQgO" title="原文 : Can be set to true to force the use of relative URIs in all requests, regardless of the presence or absence of proxies or no-proxy lists.">プロキシまたは非プロキシ・リストが存在するかどうかに関係なく、すべてのリクエストで相対URIを強制的に使用するように<code>true</code>に設定できます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.49aL8q.1"  title="原文: tls"><code>tls</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1yF3lC" title="原文 : WebClientTls"><router-link to="/config/io_helidon_webclient_WebClientTls">WebClientTls</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3Kq4si" title="原文 : New TLS configuration.">新しいTLS構成。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2QKN54.1"  title="原文: uri"><code>uri</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.166"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1U5Qc9" title="原文 : Base uri for each request.">各リクエストのベースURI。</span></p>

<markup>@return updated builder instance</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1lbO0E"  title="原文: user-agent"><code>user-agent</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.167"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.eDNda" title="原文 : Name of the user agent which should be used.">使用するユーザー・エージェントの名前。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
