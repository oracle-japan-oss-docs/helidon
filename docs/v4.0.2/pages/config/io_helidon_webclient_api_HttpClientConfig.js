<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2tcfW" title="原文 : HttpClientConfig (webclient.api) Configuration">HttpClientConfig (webclient.api)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.ja3QP" title="原文 : Type: io.helidon.webclient.api.HttpClientConfig">タイプ: <a href="/apidocs/io.helidon.webclient.api/io/helidon/webclient/api/HttpClientConfig.html" target="_blank">io.helidon.webclient.api.HttpClientConfig</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.69"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.65" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.72"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.72"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.72"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.72"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.CF3tT"  title="原文: base-uri"><code>base-uri</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.165"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2P597f" title="原文 : Base uri used by the client in all requests.">すべてのリクエストでクライアントが使用するベースURI。</span></p>

<markup>@return base uri of the client requests</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3nD4yJ.1"  title="原文: connect-timeout"><code>connect-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.23"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.19Zjbm"  title="原文:: Connect timeout.">接続タイムアウト</span></p>

<markup>@return connect timeout
@see io.helidon.common.socket.SocketOptions#connectTimeout()</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.pbmo"  title="原文: connection-cache-size"><code>connection-cache-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.38"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3mz6xH"  title="原文: 256"><code>256</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1FoH8I.spl1" title="原文 : Maximal size of the connection cache.">接続キャッシュの最大サイズ。</span> <span class="merged" id="all.1FoH8I.spl2" title="原文 : For most HTTP protocols, we may cache connections to various endpoints for keep alive (or stream reuse in case of HTTP/2).">ほとんどのHTTPプロトコルでは、キープアライブ(またはHTTP/2の場合はストリームの再利用)のために、様々なエンドポイントへの接続をキャッシュできます。</span> <span class="merged" id="all.1FoH8I.spl3" title="原文 : This option limits the size.">このオプションはサイズを制限します。</span> <span class="merged" id="all.1FoH8I.spl4" title="原文 : Setting this number lower than the &quot;usual&quot; number of target services will cause connections to be closed and reopened frequently.">この数値を「通常」のターゲット・サービス数より小さく設定すると、接続がクローズされ、頻繁に再オープンされます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3Dzi1w"  title="原文: content-encoding"><code>content-encoding</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4OZ5CZ" title="原文 : ContentEncodingContext"><router-link to="/config/io_helidon_http_encoding_ContentEncodingContext">ContentEncodingContext</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3ukj1R.spl1" title="原文 : Configure the listener specific io.helidon.http.encoding.ContentEncodingContext.">リスナー固有のio.helidon.http.encoding.ContentEncodingContextを構成します。</span> <span class="merged" id="all.3ukj1R.spl2" title="原文 : This method discards all previously registered ContentEncodingContext.">このメソッドは、以前に登録されたすべてのContentEncodingContextを破棄します。</span> <span class="merged" id="all.3ukj1R.spl3" title="原文 : If no content encoding context is registered, default encoding context is used.">コンテンツ・エンコーディング・コンテキストが登録されていない場合は、デフォルトのエンコーディング・コンテキストが使用されます。</span> </p>

<markup>@return content encoding context</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Us5Ei"  title="原文: cookie-manager"><code>cookie-manager</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4ALHvR" title="原文 : WebClientCookieManager"><router-link to="/config/io_helidon_webclient_api_WebClientCookieManager">WebClientCookieManager</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2GO0hC" title="原文 : WebClient cookie manager.">WebClient cookieマネージャ。</span></p>

<markup>@return cookie manager to use</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.zj79v"  title="原文: default-headers"><code>default-headers</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1WdJek.1" title="原文 : Map&lt;string, string&gt;">マップ&lt;string, string></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.40tSN" title="原文 : Default headers to be used in every request from configuration.">構成からのすべてのリクエストで使用されるデフォルトのヘッダー。</span></p>

<markup>@return default headers</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.SV0kY"  title="原文: follow-redirects"><code>follow-redirects</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.108"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.53"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.PWDBG" title="原文 : Whether to follow redirects.">リダイレクトを追跡するかどうか。</span></p>

<markup>@return whether to follow redirects</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4cLDv2.2"  title="原文: keep-alive"><code>keep-alive</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.109"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.54"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1W33Q1" title="原文 : Determines if connection keep alive is enabled (NOT socket keep alive, but HTTP connection keep alive, to re-use the same connection for multiple requests).">複数のリクエストに対して同じ接続を再利用するために、接続キープ・アライブが有効かどうかを決定します(ソケット・キープ・アライブではなく、HTTP接続のキープ・アライブ)。</span></p>

<markup>@return keep alive for this connection
@see io.helidon.common.socket.SocketOptions#socketKeepAlive()</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3xrYOF"  title="原文: max-in-memory-entity"><code>max-in-memory-entity</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.39"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1Oslkg"  title="原文: 131072"><code>131072</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1GCDDQ.spl1" title="原文 : If the entity is expected to be smaller that this number of bytes, it would be buffered in memory to optimize performance.">エンティティがこのバイト数より小さいと予想される場合は、パフォーマンスを最適化するためにメモリーにバッファされます。</span> <span class="merged" id="all.1GCDDQ.spl2" title="原文 : If bigger, streaming will be used.">大きい場合はストリーミングが使用されます。</span> </p>

<markup>Note that for some entity types we cannot use streaming, as they are already fully in memory (String, byte[]), for such
cases, this option is ignored. Default is 128Kb.</markup>
<markup>@return maximal number of bytes to buffer in memory for supported writers</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4MA6E0.2"  title="原文: max-redirects"><code>max-redirects</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.40"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4UFA6L.5"  title="原文: 10"><code>10</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2Ao3gH.spl1" title="原文 : Max number of followed redirects.">追跡リダイレクトの最大数。</span> <span class="merged" id="all.2Ao3gH.spl2" title="原文 : This is ignored if #followRedirects() option is false.">#followRedirects()オプションが<code>false</code>の場合、これは無視されます。</span> </p>

<markup>@return max number of followed redirects</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2eL0SG"  title="原文: media-context"><code>media-context</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3UN167.1" title="原文 : MediaContext"><router-link to="/config/io_helidon_http_media_MediaContext">MediaContext</router-link></span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1YBy4O"  title="原文: create()"><code>create()</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2VEoqW.spl1" title="原文 : Configure the listener specific io.helidon.http.media.MediaContext.">リスナー固有のio.helidon.http.media.MediaContextを構成します。</span> <span class="merged" id="all.2VEoqW.spl2" title="原文 : This method discards all previously registered MediaContext.">このメソッドは、以前に登録されたすべてのMediaContextを破棄します。</span> <span class="merged" id="all.2VEoqW.spl3" title="原文 : If no media context is registered, default media context is used.">メディア・コンテキストが登録されていない場合は、デフォルトのメディア・コンテキストが使用されます。</span> </p>

<markup>@return media context</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Zfdmv"  title="原文: media-type-parser-mode"><code>media-type-parser-mode</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2X1paD" title="原文 : ParserMode (STRICT, RELAXED)">ParserMode (STRICT, RELAXED)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.76GD0"  title="原文: STRICT"><code>STRICT</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.44myiS" title="原文 : Configure media type parsing mode for HTTP Content-Type header.">HTTP <code>Content-Type</code>ヘッダーのメディア・タイプ解析モードを構成します。</span></p>

<markup>@return media type parsing mode</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2RiS66"  title="原文: properties"><code>properties</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1WdJek.2" title="原文 : Map&lt;string, string&gt;">マップ&lt;string, string></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4aBDnq.spl1" title="原文 : Properties configured for this client.">このクライアント用に構成されたプロパティ。</span> <span class="merged" id="all.4aBDnq.spl2" title="原文 : These properties are propagated through client request, to be used by services (and possibly for other purposes).">これらのプロパティは、クライアント・リクエストを介して伝播され、サービスによって使用されます(場合によってはその他の目的で使用されます)。</span> </p>

<markup>@return map of client properties</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1MC3Gg"  title="原文: proxy"><code>proxy</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4PZW4v" title="原文 : Proxy"><router-link to="/config/io_helidon_webclient_api_Proxy">プロキシ</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.lHTI8" title="原文 : Proxy configuration to be used for requests.">リクエストに使用されるプロキシ構成。</span></p>

<markup>@return proxy to use, defaults to Proxy#noProxy()</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3gmkJK"  title="原文: read-continue-timeout"><code>read-continue-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.24"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2MQRtH.1"  title="原文: PT1S"><code>PT1S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Kpps2.spl1" title="原文 : Socket 100-Continue read timeout.">Socket 100-読取りタイムアウトを続行します。</span> <span class="merged" id="all.4Kpps2.spl2"  title="原文:: Default is 1 second.">デフォルトは1秒です。</span> <span class="merged" id="all.4Kpps2.spl3" title="原文 : This read timeout is used when 100-Continue is sent by the client, before it sends an entity.">この読取りタイムアウトは、100-Continueがエンティティを送信する前にクライアントによって送信されるときに使用されます。</span> </p>

<markup>@return read 100-Continue timeout duration</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3R6xIn.1"  title="原文: read-timeout"><code>read-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.25"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1ueweF"  title="原文:: Read timeout.">読取りタイムアウト</span></p>

<markup>@return read timeout
@see io.helidon.common.socket.SocketOptions#readTimeout()</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.CyX3F.2"  title="原文: relative-uris"><code>relative-uris</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.110"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.40"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.LdQgO" title="原文 : Can be set to true to force the use of relative URIs in all requests, regardless of the presence or absence of proxies or no-proxy lists.">プロキシまたは非プロキシ・リストが存在するかどうかに関係なく、すべてのリクエストで相対URIを強制的に使用するように<code>true</code>に設定できます。</span></p>

<markup>@return relative URIs flag</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3FNeSd"  title="原文: send-expect-continue"><code>send-expect-continue</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.111"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.55"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3S6jHE" title="原文 : Whether Expect-100-Continue header is sent to verify server availability before sending an entity.">エンティティを送信する前にサーバーの可用性を検証するためにExpect-100-Continueヘッダーが送信されるかどうか。</span></p>

<markup>Defaults to `true`.</markup>
<markup>@return whether Expect:100-Continue header should be sent on streamed transfers</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.bZKKF.1"  title="原文: services"><code>services</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Mjizz" title="原文 : io.helidon.webclient.spi.WebClientService[] (service provider interface)">io.helidon.webclient.spi.WebClientService[] (サービス・プロバイダ・インタフェース)</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1JRig1" title="原文 : WebClient services.">WebClientサービス。</span></p>

<markup>@return services to use with this web client</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ZyTLO"  title="原文: share-connection-cache"><code>share-connection-cache</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.112"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.56"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.Lel26" title="原文 : Whether to share connection cache between all the WebClient instances in JVM.">JVM内のすべてのWebClientインスタンス間で接続キャッシュを共有するかどうか。</span></p>

<markup>@return true if connection cache is shared</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3CAuw0"  title="原文: socket-options"><code>socket-options</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3wae7e" title="原文 : SocketOptions"><router-link to="/config/io_helidon_common_socket_SocketOptions">SocketOptions</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.dKr9B.spl1" title="原文 : Socket options for connections opened by this client.">このクライアントによってオープンされた接続のソケット・オプション。</span> <span class="merged" id="all.dKr9B.spl2" title="原文 : If there is a value explicitly configured on this type and on the socket options, the one configured on this type’s builder will win:">このタイプおよびソケット・オプションに明示的に構成された値がある場合、このタイプのビルダーで構成された値が優先されます:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.TygD1"  title="原文: #readTimeout()">#readTimeout()</span></p>

</li>
<li>
<p><span class="merged" id="all.446TP0"  title="原文: #connectTimeout()">#connectTimeout()</span></p>

</li>
</ul>

<p><span class="merged" id="all.2WyM6d" title="原文 : @return socket options">@returnソケット・オプション</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.49aL8q"  title="原文: tls"><code>tls</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2x5x4s" title="原文 : Tls"><router-link to="/config/io_helidon_common_tls_Tls">Tls</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3fm9rs.spl1" title="原文 : TLS configuration for any TLS request from this client.">このクライアントからの任意のTLSリクエストのTLS構成。</span> <span class="merged" id="all.3fm9rs.spl2" title="原文 : TLS can also be configured per request.">TLSはリクエストごとに構成することもできます。</span> <span class="merged" id="all.3fm9rs.spl3" title="原文 : TLS is used when the protocol is set to https.">TLSは、プロトコルが<code>https</code>に設定されている場合に使用されます。</span> </p>

<markup>@return TLS configuration to use</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
