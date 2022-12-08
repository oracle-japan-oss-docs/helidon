<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3hJKO2" title="原文 : SocketConfiguration (webserver) Configuration">SocketConfiguration (webserver)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.7y4yD" title="原文 : Type: io.helidon.webserver.SocketConfiguration">タイプ: <a href="./apidocs/io.helidon.webserver/io/helidon/webserver/SocketConfiguration.html" target="_blank">io.helidon.webserver.SocketConfiguration</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.59"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.1fCXjI.4" title="原文 : Required configuration options"><span>必要な構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.67"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.67"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.67"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.67"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.309fiz.6"  title="原文: name"><code>name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.168"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3xTvVG" title="原文 : Configure a socket name, to bind named routings to.">名前付きルーティングをバインドするソケット名を構成します。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<div class="block-title"><span class="merged" id="all.271SGn.60" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.68"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.68"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.68"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.68"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.rzOhf"  title="原文: backlog"><code>backlog</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.29"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.lhex8"  title="原文: 1024"><code>1024</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ppdwn" title="原文 : Configures a maximum length of the queue of incoming connections on the server socket.">サーバー・ソケット上の受信接続のキューの最大長を構成します。</span></p>

<markup>Default value is #DEFAULT_BACKLOG_SIZE.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5GfIr" title="原文 : bind-address"><s><code>bind-address</code></s></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.169"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2a0Vgb.spl1" title="原文 : Deprecated Configures local address where the server listens on with the server socket."><strong>「非推奨」</strong>サーバーがサーバー・ソケットでリスニングするローカル・アドレスを構成します。</span> <span class="merged" id="all.2a0Vgb.spl2" title="原文 : If not configured, then listens an all local addresses.">構成されていない場合は、すべてのローカル・アドレスを一覧表示します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.38IOv4"  title="原文: enable-compression"><code>enable-compression</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.94"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.36"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1OIhFY.spl1" title="原文 : Enable negotiation for gzip/deflate content encodings.">gzip/deflateコンテンツ・エンコーディングのネゴシエーションを有効にします。</span> <span class="merged" id="all.1OIhFY.spl2" title="原文 : Clients can request compression using the &quot;Accept-Encoding&quot; header.">クライアントは「Accept-Encoding」ヘッダーを使用して圧縮をリクエストできます。</span> </p>

<markup>Default is `false`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2N9hZv.7"  title="原文: host"><code>host</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.170"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3cE2fa" title="原文 : A helper method that just calls #bindAddress(String).">#bindAddress(String)を呼び出すだけのヘルパー・メソッド。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2jcPLP"  title="原文: max-header-size"><code>max-header-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.30"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1K73Gb"  title="原文: 16384"><code>16384</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3RY8ot.spl1" title="原文 : Maximal number of bytes of all header values combined.">結合されるすべてのヘッダー値の最大バイト数。</span> <span class="merged" id="all.3RY8ot.spl2" title="原文 : When a bigger value is received, a io.helidon.common.http.Http.Status#BAD_REQUEST_400 is returned.">より大きい値が受信されると、io.helidon.common.http.Http.Status#BAD_REQUEST_400が返されます。</span> </p>

<markup>Default is `8192`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.hkMJV"  title="原文: max-initial-line-length"><code>max-initial-line-length</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.31"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2q9RcG"  title="原文: 4096"><code>4096</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.iVXAw" title="原文 : Maximal number of characters in the initial HTTP line.">最初のHTTP行の最大文字数。</span></p>

<markup>Default is `4096`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4JlmBT"  title="原文: max-payload-size"><code>max-payload-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.21"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3y8vQC.spl1" title="原文 : Set a maximum payload size for a client request.">クライアント・リクエストの最大ペイロード・サイズを設定します。</span> <span class="merged" id="all.3y8vQC.spl2" title="原文 : Can prevent DoS attacks.">DoS攻撃を防ぐことができます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4W5u6n"  title="原文: max-upgrade-content-length"><code>max-upgrade-content-length</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.32"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1uOVpQ"  title="原文: 65536"><code>65536</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4H6CoA" title="原文 : Set a maximum length of the content of an upgrade request.">アップグレード・リクエストの内容の最大長を設定します。</span></p>

<markup>Default is `64*1024`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OXzp4.8"  title="原文: port"><code>port</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.33"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3V9g7Q.1"  title="原文: 0"><code>0</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3Oucwf.spl1" title="原文 : Configures a server port to listen on with the server socket.">サーバー・ソケットでリスニングするようにサーバー・ポートを構成します。</span> <span class="merged" id="all.3Oucwf.spl2" title="原文 : If port is 0 then any available ephemeral port will be used.">ポートが<code>0</code>の場合、使用可能なエフェメラル・ポートが使用されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1ItLlm"  title="原文: receive-buffer-size"><code>receive-buffer-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.34"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.ttbiK" title="原文 : Configures proposed value of the TCP receive window that is advertised to the remote peer on the server socket.">サーバー・ソケット上のリモート・ピアにアドバタイズされるTCP受信ウィンドウの提案値を構成します。</span></p>

<markup>If `0` then use implementation default.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2kI2ET.1"  title="原文: timeout-millis"><code>timeout-millis</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.22"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3V9g7Q.2"  title="原文: 0"><code>0</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1JHIrv" title="原文 : Socket timeout in milliseconds">ソケットのタイムアウト(ミリ秒)</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.49aL8q.2"  title="原文: tls"><code>tls</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3teVO3" title="原文 : WebServerTls"><router-link to="/config/io_helidon_webserver_WebServerTls">WebServerTls</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3b3Qwr.spl1" title="原文 : Configures SSL for this socket.">このソケットのSSLを構成します。</span> <span class="merged" id="all.3b3Qwr.spl2" title="原文 : When configured, the server enforces SSL configuration.">構成されている場合、サーバーはSSL構成を適用します。</span> <span class="merged" id="all.3b3Qwr.spl3" title="原文 : If this method is called, any other method except for #tls(java.util.function.Supplier)¨ and repeated invocation of this method would be ignored.">このメソッドが呼び出されると、#tls(java.util.function.Supplier)以外のメソッドやこのメソッドを繰返し呼び出すことは無視されます。</span> </p>

<markup>If this method is called again, the previous configuration would be ignored.</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
