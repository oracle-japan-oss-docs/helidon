<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.SZdWI" title="原文 : WebServer (webserver) Configuration">WebServer (webserver)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1hCUkb" title="原文 : Configuration of the HTTP server.">HTTPサーバーの構成。</span></p>

<p><span class="merged" id="all.5fjNt" title="原文 : Type: io.helidon.webserver.WebServer">タイプ: <a href="./apidocs/io.helidon.webserver/io/helidon/webserver/WebServer.html" target="_blank">io.helidon.webserver.WebServer</a></span></p>

<p><span class="merged" id="all.4BMnxa.1" title="原文 : This is a standalone configuration type, prefix from configuration root: server">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>server</code></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.61"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.62" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.70"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.70"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.70"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.70"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.rzOhf.2"  title="原文: backlog"><code>backlog</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.41"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.lhex8.2"  title="原文: 1024"><code>1024</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ppdwn.2" title="原文 : Configures a maximum length of the queue of incoming connections on the server socket.">サーバー・ソケット上の受信接続のキューの最大長を構成します。</span></p>

<markup>Default value is #DEFAULT_BACKLOG_SIZE.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5GfIr.2" title="原文 : bind-address"><s><code>bind-address</code></s></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.173"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2a0Vgb.2.spl1" title="原文 : Deprecated Configures local address where the server listens on with the server socket."><strong>「非推奨」</strong>サーバーがサーバー・ソケットでリスニングするローカル・アドレスを構成します。</span> <span class="merged" id="all.2a0Vgb.2.spl2" title="原文 : If not configured, then listens an all local addresses.">構成されていない場合は、すべてのローカル・アドレスを一覧表示します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.38IOv4.2"  title="原文: enable-compression"><code>enable-compression</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.96"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.38"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1OIhFY.2.spl1" title="原文 : Enable negotiation for gzip/deflate content encodings.">gzip/deflateコンテンツ・エンコーディングのネゴシエーションを有効にします。</span> <span class="merged" id="all.1OIhFY.2.spl2" title="原文 : Clients can request compression using the &quot;Accept-Encoding&quot; header.">クライアントは「Accept-Encoding」ヘッダーを使用して圧縮をリクエストできます。</span> </p>

<markup>Default is `false`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1XagGR"  title="原文: features.print-details"><code>features.print-details</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.97"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.39"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4HCC9z" title="原文 : Set to true to print detailed feature information on startup.">起動時に機能の詳細情報を出力するには、<code>true</code>に設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2N9hZv.9"  title="原文: host"><code>host</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.174"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3cE2fa.2" title="原文 : A helper method that just calls #bindAddress(String).">#bindAddress(String)を呼び出すだけのヘルパー・メソッド。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2jcPLP.2"  title="原文: max-header-size"><code>max-header-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.42"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1K73Gb.2"  title="原文: 16384"><code>16384</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3RY8ot.2.spl1" title="原文 : Maximal number of bytes of all header values combined.">結合されるすべてのヘッダー値の最大バイト数。</span> <span class="merged" id="all.3RY8ot.2.spl2" title="原文 : When a bigger value is received, a io.helidon.common.http.Http.Status#BAD_REQUEST_400 is returned.">より大きい値が受信されると、io.helidon.common.http.Http.Status#BAD_REQUEST_400が返されます。</span> </p>

<markup>Default is `8192`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.hkMJV.2"  title="原文: max-initial-line-length"><code>max-initial-line-length</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.43"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2q9RcG.2"  title="原文: 4096"><code>4096</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.iVXAw.2" title="原文 : Maximal number of characters in the initial HTTP line.">最初のHTTP行の最大文字数。</span></p>

<markup>Default is `4096`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4JlmBT.2"  title="原文: max-payload-size"><code>max-payload-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.25"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3y8vQC.2.spl1" title="原文 : Set a maximum payload size for a client request.">クライアント・リクエストの最大ペイロード・サイズを設定します。</span> <span class="merged" id="all.3y8vQC.2.spl2" title="原文 : Can prevent DoS attacks.">DoS攻撃を防ぐことができます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4W5u6n.2"  title="原文: max-upgrade-content-length"><code>max-upgrade-content-length</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.44"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1uOVpQ.2"  title="原文: 65536"><code>65536</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4H6CoA.2" title="原文 : Set a maximum length of the content of an upgrade request.">アップグレード・リクエストの内容の最大長を設定します。</span></p>

<markup>Default is `64*1024`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4CKSkW"  title="原文: backpressure-buffer-size"><code>backpressure-buffer-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.26"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1xioaP"  title="原文: 5242880"><code>5242880</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3ol0yG.spl1" title="原文 : Set a maximum length of the unflushed response data sending buffer can keep without applying backpressure.">バック・プレスを適用せずに、フラッシュされていないレスポンス・データ送信バッファが保持できる最大長を設定します。</span> <span class="merged" id="all.3ol0yG.spl2" title="原文 : Depends on backpressure-policy what happens if max buffer size is reached.">最大バッファ・サイズに達した場合の処理は、<code>backpressure-policy</code>によって異なります。</span> </p>

<markup>Default is `5*1024*1024` - 5Mb</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Z9rIk"  title="原文: backpressure-policy"><code>backpressure-policy</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2nneiF"  title="原文:: String">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1Ur2JU"  title="原文: LINEAR"><code>LINEAR</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.49aFgZ" title="原文 : Sets the strategy for applying backpressure to the reactive stream of response data.">レスポンス・データのリアクティブ・ストリームにバックプレッシャを適用するための戦略を設定します。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1XlbLL" title="原文 : LINEAR - Data chunks are requested one-by-one after previous data chunk has been written to Netty&rsquo;s buffer, when backpressure-buffer-size watermark is reached, new chunks are not requested until buffer size decrease under the watermark value.">線形 - データ・チャンクは、以前のデータ・チャンクがNettyバッファに書き込まれた後に1回ずつリクエストされ、<code>backpressure-buffer-size</code>ウォーターマークに達すると、ウォーターマーク値でバッファ・サイズが減少するまで新しいチャンクはリクエストされません。</span></p>

</li>
<li>
<p><span class="merged" id="all.483227" title="原文 : PREFETCH - After first data chunk arrives, expected number of chunks needed to fill the buffer up to watermark is calculated and requested.">プリフェッチ - 最初のデータ・チャンクが到着すると、バッファをウォーターマークまで埋めるために必要なチャンクの数が計算され、リクエストされます。</span></p>

</li>
<li>
<p><span class="merged" id="all.3bEg0x" title="原文 : AUTO_FLUSH - Data are requested one-by-one, in case buffer reaches watermark, no other data is requested and extra flush is initiated.">AUTO_FLUSH - データは1つずつリクエストされます。バッファがウォーターマークに達した場合、他のデータはリクエストされず、余分なフラッシュが開始されます。</span></p>

</li>
<li>
<p><span class="merged" id="all.3iu9Oz" title="原文 : UNBOUNDED - No backpressure is applied, Long.MAX_VALUE(unbounded) is requested from upstream.">バインドなし - バック・プレッシャは適用されず、Long.MAX_VALUE(unbounded)はアップストリームからリクエストされます。</span></p>
<markup>Default is `LINEAR`</markup>
</li>
</ul>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OXzp4.10"  title="原文: port"><code>port</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.45"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3V9g7Q.5"  title="原文: 0"><code>0</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3Oucwf.2.spl1" title="原文 : Configures a server port to listen on with the server socket.">サーバー・ソケットでリスニングするようにサーバー・ポートを構成します。</span> <span class="merged" id="all.3Oucwf.2.spl2" title="原文 : If port is 0 then any available ephemeral port will be used.">ポートが<code>0</code>の場合、使用可能なエフェメラル・ポートが使用されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1ItLlm.2"  title="原文: receive-buffer-size"><code>receive-buffer-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.46"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.ttbiK.2" title="原文 : Configures proposed value of the TCP receive window that is advertised to the remote peer on the server socket.">サーバー・ソケット上のリモート・ピアにアドバタイズされるTCP受信ウィンドウの提案値を構成します。</span></p>

<markup>If `0` then use implementation default.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5HZ82"  title="原文: sockets"><code>sockets</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1PxXg3" title="原文 : SocketConfiguration[]"><router-link to="/config/io_helidon_webserver_SocketConfiguration">SocketConfiguration[]</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.RAmBx.spl1" title="原文 : Adds an additional named server socket configuration.">追加の名前付きサーバー・ソケット構成を追加します。</span> <span class="merged" id="all.RAmBx.spl2" title="原文 : As a result, the server will listen on multiple ports.">その結果、サーバーは複数のポートで待機します。</span> </p>

<markup>An additional named server socket may have a dedicated Routing configured
through io.helidon.webserver.WebServer.Builder#addNamedRouting(String, Routing).</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2kI2ET.3"  title="原文: timeout-millis"><code>timeout-millis</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.27"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3V9g7Q.6"  title="原文: 0"><code>0</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1JHIrv.2" title="原文 : Socket timeout in milliseconds">ソケットのタイムアウト(ミリ秒)</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.49aL8q.4"  title="原文: tls"><code>tls</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3teVO3.2" title="原文 : WebServerTls"><router-link to="/config/io_helidon_webserver_WebServerTls">WebServerTls</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3b3Qwr.2.spl1" title="原文 : Configures SSL for this socket.">このソケットのSSLを構成します。</span> <span class="merged" id="all.3b3Qwr.2.spl2" title="原文 : When configured, the server enforces SSL configuration.">構成されている場合、サーバーはSSL構成を適用します。</span> <span class="merged" id="all.3b3Qwr.2.spl3" title="原文 : If this method is called, any other method except for #tls(java.util.function.Supplier)¨ and repeated invocation of this method would be ignored.">このメソッドが呼び出されると、#tls(java.util.function.Supplier)以外のメソッドやこのメソッドを繰返し呼び出すことは無視されます。</span> </p>

<markup>If this method is called again, the previous configuration would be ignored.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3fmzI9"  title="原文: worker-count"><code>worker-count</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.47"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XV1dm.1.spl1" title="原文 : Sets a count of threads in pool used to process HTTP requests.">HTTPリクエストの処理に使用されるプール内のスレッド数を設定します。</span> <span class="merged" id="all.2XV1dm.1.spl2" title="原文 : Default value is CPU_COUNT * 2.">デフォルト値は<code>CPU_COUNT * 2</code>です。</span> </p>

<markup>Configuration key: `workers`</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
