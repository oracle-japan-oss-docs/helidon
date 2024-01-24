<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.SZdWI" title="原文 : WebServer (webserver) Configuration">WebServer (webserver)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2BJq2n" title="原文 : Type: io.helidon.webserver.WebServer">タイプ: <a href="/apidocs/io.helidon.webserver/io/helidon/webserver/WebServer.html" target="_blank">io.helidon.webserver.WebServer</a></span></p>

<p><span class="merged" id="all.4BMnxa.1" title="原文 : This is a standalone configuration type, prefix from configuration root: server">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>server</code></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.80"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.76" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.83"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.83"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.83"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.83"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.rzOhf.1"  title="原文: backlog"><code>backlog</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.60"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.lhex8.3"  title="原文: 1024"><code>1024</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3nMQ0a.1" title="原文 : Accept backlog.">バックログの受入れ。</span></p>

<markup>@return backlog</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1AjA6I.1"  title="原文: connection-config"><code>connection-config</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4VLGSj.1" title="原文 : ConnectionConfig"><router-link to="/config/io_helidon_webserver_ConnectionConfig">ConnectionConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1MqSXN.1" title="原文 : Configuration of a connection (established from client against our server).">接続の構成(クライアントからサーバーに対して確立)。</span></p>

<markup>@return connection configuration</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2nITik.1"  title="原文: connection-options"><code>connection-options</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3wae7e.3" title="原文 : SocketOptions"><router-link to="/config/io_helidon_common_socket_SocketOptions">SocketOptions</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1kXy6u.1.spl1" title="原文 : Options for connections accepted by this listener.">このリスナーで受け入れられる接続のオプション。</span> <span class="merged" id="all.1kXy6u.1.spl2" title="原文 : This is not used to setup server connection.">サーバー接続の設定には使用されません。</span> </p>

<markup>@return socket options</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3Dzi1w.3"  title="原文: content-encoding"><code>content-encoding</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4OZ5CZ.3" title="原文 : ContentEncodingContext"><router-link to="/config/io_helidon_http_encoding_ContentEncodingContext">ContentEncodingContext</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4YVEkt.1.spl1" title="原文 : Configure the listener specific io.helidon.http.encoding.ContentEncodingContext.">リスナー固有のio.helidon.http.encoding.ContentEncodingContextを構成します。</span> <span class="merged" id="all.4YVEkt.1.spl2" title="原文 : This method discards all previously registered ContentEncodingContext.">このメソッドは、以前に登録されたすべてのContentEncodingContextを破棄します。</span> <span class="merged" id="all.4YVEkt.1.spl3" title="原文 : If no content encoding context is registered, content encoding context of the webserver would be used.">コンテンツ・エンコーディング・コンテキストが登録されていない場合は、webサーバーのコンテンツ・エンコーディング・コンテキストが使用されます。</span> </p>

<markup>@return content encoding context</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.45mnKE"  title="原文: features"><code>features</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.Q9eND" title="原文 : io.helidon.webserver.spi.ServerFeature[] (service provider interface)">io.helidon.webserver.spi.ServerFeature[] (サービス・プロバイダ・インタフェース)</span></p>

<p><span class="merged" id="all.ETeZ4.1"  title="原文:: Such as:">これには次のようなものがあります。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.39GTfy" title="原文 : observe (ObserveFeature)"><router-link to="/config/io_helidon_webserver_observe_ObserveFeature">observe (ObserveFeature)</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.ukyrv" title="原文 : context (ContextFeature)"><router-link to="/config/io_helidon_webserver_context_ContextFeature">context (ContextFeature)</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.31lkfX" title="原文 : cors (CorsFeature)"><router-link to="/config/io_helidon_webserver_cors_CorsFeature">cors (CorsFeature)</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1DmZnx" title="原文 : security (SecurityFeature)"><router-link to="/config/io_helidon_webserver_security_SecurityFeature">security (SecurityFeature)</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4GK5Qb" title="原文 : access-log (AccessLogFeature)"><router-link to="/config/io_helidon_webserver_accesslog_AccessLogFeature">access-log (AccessLogFeature)</router-link></span></p>

</li>
</ul>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2E0TLT" title="原文 : Server features allow customization of the server, listeners, or routings.">サーバー機能を使用すると、サーバー、リスナーまたはルーティングをカスタマイズできます。</span></p>

<markup>@return server features</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2N9hZv.3"  title="原文: host"><code>host</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.175"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.37vqK9.1"  title="原文: 0.0.0.0"><code>0.0.0.0</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.L7juc.1.spl1" title="原文 : Host of the default socket.">デフォルト・ソケットのホスト。</span> <span class="merged" id="all.L7juc.1.spl2" title="原文 : Defaults to all host addresses (0.0.0.0).">デフォルトは、すべてのホスト・アドレス(<code>0.0.0.0</code>)です。</span> </p>

<markup>@return host address to listen on (for the default socket)</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3cxtJM.1"  title="原文: idle-connection-period"><code>idle-connection-period</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.38"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3oUo0h.1"  title="原文: PT2M"><code>PT2M</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3QjCrs.1.spl1" title="原文 : How often should we check for #idleConnectionTimeout().">#idleConnectionTimeout()をチェックする頻度。</span> <span class="merged" id="all.3QjCrs.1.spl2" title="原文 : Defaults to PT2M (2 minutes).">デフォルトは<code>PT2M</code> (2分)です。</span> </p>

<markup>@return period of checking for idle connections</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.F19DI.1"  title="原文: idle-connection-timeout"><code>idle-connection-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.39"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3IZFLG.1"  title="原文: PT5M"><code>PT5M</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.S4DrB.1.spl1" title="原文 : How long should we wait before closing a connection that has no traffic on it.">トラフィックがない接続を閉じるまで待機する時間。</span> <span class="merged" id="all.S4DrB.1.spl2" title="原文 : Defaults to PT5M (5 minutes).">デフォルトは<code>PT5M</code> (5分)です。</span> <span class="merged" id="all.S4DrB.1.spl3" title="原文 : Note that the timestamp is refreshed max. once per second, so this setting would be useless if configured for shorter periods of time (also not a very good support for connection keep alive, if the connections are killed so soon anyway).">タイムスタンプは最大リフレッシュされます。1秒当たり1回であるため、この設定は、より短い期間(とにかく接続がすぐに強制終了された場合、接続キープ・アライブに対するサポートもあまり適切ではない)に構成されている場合、役に立たないことに注意してください。</span> </p>

<markup>@return timeout of idle connections</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.17bCiz.1"  title="原文: max-concurrent-requests"><code>max-concurrent-requests</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.61"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.26voHa.5"  title="原文: -1"><code>-1</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2AwEgl.1.spl1" title="原文 : Limits the number of requests that can be executed at the same time (the number of active virtual threads of requests).">同時に実行できるリクエストの数(リクエストのアクティブな仮想スレッドの数)を制限します。</span> <span class="merged" id="all.2AwEgl.1.spl2" title="原文 : Defaults to -1, meaning &quot;unlimited&quot; - what the system allows.">デフォルトは<code>-1</code>で、「無制限」を意味 - システムが許すもの。</span> <span class="merged" id="all.2AwEgl.1.spl3" title="原文 : Also make sure that this number is higher than the expected time it takes to handle a single request in your application, as otherwise you may stop in-progress requests.">また、進行中のリクエストを停止する場合もあるため、この数値がアプリケーション内の単一のリクエストの処理にかかる予想時間よりも大きいことを確認してください。</span> </p>

<markup>@return number of requests that can be processed on this listener, regardless of protocol</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3xrYOF.3"  title="原文: max-in-memory-entity"><code>max-in-memory-entity</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.62"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1Oslkg.3"  title="原文: 131072"><code>131072</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Ut8RG.1.spl1" title="原文 : If the entity is expected to be smaller that this number of bytes, it would be buffered in memory to optimize performance when writing it.">エンティティがこのバイト数より小さいと予想される場合は、書込み時のパフォーマンスを最適化するためにメモリーにバッファされます。</span> <span class="merged" id="all.4Ut8RG.1.spl2" title="原文 : If bigger, streaming will be used.">大きい場合はストリーミングが使用されます。</span> </p>

<markup>Note that for some entity types we cannot use streaming, as they are already fully in memory (String, byte[]), for such
cases, this option is ignored.</markup>
<markup>Default is 128Kb.</markup>
<markup>@return maximal number of bytes to buffer in memory for supported writers</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4JlmBT.1"  title="原文: max-payload-size"><code>max-payload-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.25"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.26voHa.6"  title="原文: -1"><code>-1</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2NrKcV.1.spl1" title="原文 : Maximal number of bytes an entity may have.">エンティティに保持できる最大バイト数。</span> <span class="merged" id="all.2NrKcV.1.spl2" title="原文 : If io.helidon.http.HeaderNames#CONTENT_LENGTH is used, this is checked immediately, if io.helidon.http.HeaderValues#TRANSFER_ENCODING_CHUNKED is used, we will fail when the number of bytes read would exceed the max payload size.">io.helidon.http.HeaderNames#CONTENT_LENGTHが使用されている場合、これはただちにチェックされます。io.helidon.http.HeaderValues#TRANSFER_ENCODING_CHUNKEDが使用されている場合、読取りバイト数が最大ペイロード・サイズを超えると失敗します。</span> <span class="merged" id="all.2NrKcV.1.spl3" title="原文 : Defaults to unlimited (-1).">デフォルトは無制限( <code>-1</code>)です。</span> </p>

<markup>@return maximal number of bytes of entity</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2WTA3q.1"  title="原文: max-tcp-connections"><code>max-tcp-connections</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.63"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.26voHa.7"  title="原文: -1"><code>-1</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1ivt1t.1.spl1" title="原文 : Limits the number of connections that can be opened at a single point in time.">1つの時点でオープンできる接続の数を制限します。</span> <span class="merged" id="all.1ivt1t.1.spl2" title="原文 : Defaults to -1, meaning &quot;unlimited&quot; - what the system allows.">デフォルトは<code>-1</code>で、「無制限」を意味 - システムが許すもの。</span> </p>

<markup>@return number of TCP connections that can be opened to this listener, regardless of protocol</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2eL0SG.3"  title="原文: media-context"><code>media-context</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3UN167.4" title="原文 : MediaContext"><router-link to="/config/io_helidon_http_media_MediaContext">MediaContext</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2kRzka.1.spl1" title="原文 : Configure the listener specific io.helidon.http.media.MediaContext.">リスナー固有のio.helidon.http.media.MediaContextを構成します。</span> <span class="merged" id="all.2kRzka.1.spl2" title="原文 : This method discards all previously registered MediaContext.">このメソッドは、以前に登録されたすべてのMediaContextを破棄します。</span> <span class="merged" id="all.2kRzka.1.spl3" title="原文 : If no media context is registered, media context of the webserver would be used.">メディア・コンテキストが登録されていない場合は、webサーバーのメディア・コンテキストが使用されます。</span> </p>

<markup>@return media context</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.309fiz.9"  title="原文: name"><code>name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.176"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2gausp.5"  title="原文: @default"><code>@default</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3ehLh0.1.spl1" title="原文 : Name of this socket.">このソケットの名前。</span> <span class="merged" id="all.3ehLh0.1.spl2" title="原文 : Defaults to @default.">デフォルトは<code>@default</code>です。</span> <span class="merged" id="all.3ehLh0.1.spl3" title="原文 : Must be defined if more than one socket is needed.">複数のソケットが必要な場合は定義する必要があります。</span> </p>

<markup>@return name of the socket</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OXzp4.3"  title="原文: port"><code>port</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.64"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3V9g7Q.6"  title="原文: 0"><code>0</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3z4VwF.1.spl1" title="原文 : Port of the default socket.">デフォルト・ソケットのポート。</span> <span class="merged" id="all.3z4VwF.1.spl2" title="原文 : If configured to 0 (the default), server starts on a random port."><code>0</code> (デフォルト)に構成されている場合、サーバーはランダムなポートで起動します。</span> </p>

<markup>@return port to listen on (for the default socket)</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2lQacV.2"  title="原文: protocols"><code>protocols</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.O1GlW.1" title="原文 : io.helidon.webserver.spi.ProtocolConfig[] (service provider interface)">io.helidon.webserver.spi.ProtocolConfig[] (サービス・プロバイダ・インタフェース)</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1h03HZ.1.spl1" title="原文 : Configuration of protocols.">プロトコルの構成。</span> <span class="merged" id="all.1h03HZ.1.spl2" title="原文 : This may be either protocol selectors, or protocol upgraders from HTTP/1.1.">これは、プロトコル・セレクタか、HTTP/1.1からのプロトコル・アップグレードのいずれかです。</span> <span class="merged" id="all.1h03HZ.1.spl3" title="原文 : As the order is not important (providers are ordered by weight by default), we can use a configuration as an object, such as: &lt;pre&gt; protocols: providers: http_1_1: max-prologue-length: 8192 http_2: max-frame-size: 4096 websocket: …​. &lt;/pre&gt;">順序は重要ではないため(プロバイダはデフォルトで重み順に並べられます)、次のような構成をオブジェクトとして使用できます: &lt;pre>プロトコル: プロバイダ: http_1_1: max-prologue-length: 8192 http_2: max-frame-size: 4096ソケット: …​. &lt;/pre></span> </p>

<markup>@return all defined protocol configurations, loaded from service loader by default</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1ItLlm.2"  title="原文: receive-buffer-size"><code>receive-buffer-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.65"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1VYRoC.1" title="原文 : Listener receive buffer size.">リスナー受信バッファ・サイズ。</span></p>

<markup>@return buffer size in bytes</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.25oMqW.1"  title="原文: shutdown-grace-period"><code>shutdown-grace-period</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.40"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.AjhSo.2"  title="原文: PT0.5S"><code>PT0.5S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.yXQtR.1.spl1" title="原文 : Grace period in ISO 8601 duration format to allow running tasks to complete before listener’s shutdown.">ISO 8601期間形式の猶予期間。リスナーの停止前に実行中のタスクを完了できます。</span> <span class="merged" id="all.yXQtR.1.spl2" title="原文 : Default is 500 milliseconds.">デフォルトは<code>500</code>ミリ秒です。</span> <span class="merged" id="all.yXQtR.1.spl3" title="原文 : Configuration file values example: PT0.5S, PT2S.">構成ファイルの値の例: <code>PT0.5S</code>, <code>PT2S</code>.</span> </p>

<markup>@return grace period</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3O8SGv"  title="原文: shutdown-hook"><code>shutdown-hook</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.129"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.67"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4dVg2u" title="原文 : When true the webserver registers a shutdown hook with the JVM Runtime.">trueの場合、webサーバーはJVMランタイムに停止フックを登録します。</span></p>

<markup>Defaults to true. Set this to false such that a shutdown hook is not registered.</markup>
<markup>@return whether to register a shutdown hook</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5HZ82"  title="原文: sockets"><code>sockets</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3HMyMI" title="原文 : Map&lt;string, ListenerConfig&gt;"><router-link to="/config/io_helidon_webserver_ListenerConfig">Map&lt;string, ListenerConfig></router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3f5XDN.spl1" title="原文 : Socket configurations.">ソケット構成。</span> <span class="merged" id="all.3f5XDN.spl2" title="原文 : Note that socket named WebServer#DEFAULT_SOCKET_NAME cannot be used, configure the values on the server directly."><code>WebServer#DEFAULT_SOCKET_NAME</code>という名前のソケットは使用できないことに注意してください。サーバー上で値を直接構成してください。</span> </p>

<markup>@return map of listener configurations, except for the default one</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.49aL8q.4"  title="原文: tls"><code>tls</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2x5x4s.4" title="原文 : Tls"><router-link to="/config/io_helidon_common_tls_Tls">Tls</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1yGSZS.1" title="原文 : Listener TLS configuration.">リスナーTLS構成。</span></p>

<markup>@return tls of this configuration</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3mhMxT.1"  title="原文: write-buffer-size"><code>write-buffer-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.66"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4UoPlE.3"  title="原文: 512"><code>512</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3BEMIm.1.spl1" title="原文 : Initial buffer size in bytes of java.io.BufferedOutputStream created internally to write data to a socket connection.">ソケット接続にデータを書き込むために内部的に作成されたjava.io.BufferedOutputStreamの初期バッファ・サイズ(バイト単位)。</span> <span class="merged" id="all.3BEMIm.1.spl2"  title="原文:: Default is 512.">デフォルトは<code>512</code>です。</span> </p>

<markup>@return initial buffer size used for writing</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.32vcwz.1"  title="原文: write-queue-length"><code>write-queue-length</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.67"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3V9g7Q.7"  title="原文: 0"><code>0</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.mPAOi.1" title="原文 : Number of buffers queued for write operations.">書込み操作のためにキューに入れられたバッファの数。</span></p>

<markup>@return maximal number of queued writes, defaults to 0</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
