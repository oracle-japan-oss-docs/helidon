<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2vjNPA" title="原文 : Http2ClientProtocolConfig (webclient.http2) Configuration">Http2ClientProtocolConfig (webclient.http2)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1jfUD2" title="原文 : Type: io.helidon.webclient.http2.Http2ClientProtocolConfig">タイプ: <a href="/apidocs/io.helidon.webclient.http2/io/helidon/webclient/http2/Http2ClientProtocolConfig.html" target="_blank">io.helidon.webclient.http2.Http2ClientProtocolConfig</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.75"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.71" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.78"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.78"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.78"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.78"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1vCcQg"  title="原文: flow-control-block-timeout"><code>flow-control-block-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.31"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1Y3D74.1"  title="原文: PT0.1S"><code>PT0.1S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.20FREc" title="原文 : Timeout for blocking between windows size check iterations.">ウィンドウ・サイズ・チェックの反復間のブロックのタイムアウト。</span></p>

<markup>@return timeout</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1GCnSE"  title="原文: initial-window-size"><code>initial-window-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.48"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4E2MiZ"  title="原文: 65535"><code>65535</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3mOCCS.spl1" title="原文 : Configure INITIAL_WINDOW_SIZE setting for new HTTP/2 connections.">新しいHTTP/2接続のINITIAL_WINDOW_SIZE設定を構成します。</span> <span class="merged" id="all.3mOCCS.spl2" title="原文 : Sends to the server the size of the largest frame payload client is willing to receive.">最大のフレーム・ペイロード・クライアントが受信できるサイズをサーバーに送信します。</span> <span class="merged" id="all.3mOCCS.spl3" title="原文 : Defaults to io.helidon.http.http2.WindowSize#DEFAULT_WIN_SIZE.">デフォルトは<code>io.helidon.http.http2.WindowSize#DEFAULT_WIN_SIZE</code>です。</span> </p>

<markup>@return units of octets</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1QmwKT"  title="原文: max-frame-size"><code>max-frame-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.49"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1K73Gb.1"  title="原文: 16384"><code>16384</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2a9BCG.spl1" title="原文 : Configure initial MAX_FRAME_SIZE setting for new HTTP/2 connections.">新しいHTTP/2接続の初期MAX_FRAME_SIZE設定を構成します。</span> <span class="merged" id="all.2a9BCG.spl2" title="原文 : Maximum size of data frames in bytes the client is prepared to accept from the server.">クライアントがサーバーから受け入れる準備が整っているデータ・フレームの最大サイズ(バイト単位)。</span> <span class="merged" id="all.2a9BCG.spl3" title="原文 : Default value is 2^14(16_384).">デフォルト値は2^14(16_384)です。</span> </p>

<markup>@return data frame size in bytes between 2^14(16_384) and 2^24-1(16_777_215)</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.ekcmL"  title="原文: max-header-list-size"><code>max-header-list-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.23"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.26voHa.1"  title="原文: -1"><code>-1</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4KS6EY.spl1" title="原文 : Configure initial MAX_HEADER_LIST_SIZE setting for new HTTP/2 connections.">新しいHTTP/2接続の初期MAX_HEADER_LIST_SIZE設定を構成します。</span> <span class="merged" id="all.4KS6EY.spl2" title="原文 : Sends to the server the maximum header field section size client is prepared to accept.">クライアントが受け入れる準備ができる最大ヘッダー・フィールド・セクション・サイズをサーバーに送信します。</span> <span class="merged" id="all.4KS6EY.spl3" title="原文 : Defaults to -1, which means &quot;unconfigured&quot;.">デフォルトは<code>-1</code>で、「未構成」を意味します。</span> </p>

<markup>@return units of octets</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.309fiz.6"  title="原文: name"><code>name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.171"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1wBsBV"  title="原文: h2"><code>h2</code></span></td>
<td class=""><doc-view>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.10V2xc"  title="原文: ping"><code>ping</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.124"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.44"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.X5ZWr.spl1" title="原文 : Check healthiness of cached connections with HTTP/2.0 ping frame.">HTTP/2.0 pingフレームでキャッシュされた接続のヘルスをチェックします。</span> <span class="merged" id="all.X5ZWr.spl2"  title="原文:: Defaults to false.">デフォルトは<code>false</code>です。</span> </p>

<markup>@return use ping if true</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.16viTN"  title="原文: ping-timeout"><code>ping-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.32"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.AjhSo"  title="原文: PT0.5S"><code>PT0.5S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2QSzdo.spl1" title="原文 : Timeout for ping probe used for checking healthiness of cached connections.">キャッシュされた接続のヘルスをチェックするために使用されるpingプローブのタイムアウト。</span> <span class="merged" id="all.2QSzdo.spl2" title="原文 : Defaults to PT0.5S, which means 500 milliseconds.">デフォルトは<code>PT0.5S</code>で、これは500ミリ秒を意味します。</span> </p>

<markup>@return timeout</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.42TAoD"  title="原文: prior-knowledge"><code>prior-knowledge</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.125"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.45"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1lJFmk.spl1" title="原文 : Prior knowledge of HTTP/2 capabilities of the server.">サーバーのHTTP/2機能に関する以前の知識。</span> <span class="merged" id="all.1lJFmk.spl2" title="原文 : If server we are connecting to does not support HTTP/2 and prior knowledge is set to false, only features supported by HTTP/1 will be available and attempts to use HTTP/2 specific will throw an UnsupportedOperationException. &lt;h4&gt;Plain text connection&lt;/h4&gt; If prior knowledge is set to true, we will not attempt an upgrade of connection and use prior knowledge.">接続先のサーバーがHTTP/2をサポートしておらず、以前のナレッジが<code>false</code>に設定されている場合、HTTP/1でサポートされている機能のみが使用可能になり、HTTP/2固有の使用を試行すると、UnsupportedOperationExceptionがスローされます。&lt;h4>Plainテキストconnection&lt;/h4>以前のナレッジが<code>true</code>に設定されている場合、接続のアップグレードは試行されず、以前のナレッジが使用されます。</span> <span class="merged" id="all.1lJFmk.spl3" title="原文 : If prior knowledge is set to false, we will initiate an HTTP/1 connection and upgrade it to HTTP/2, if supported by the server. plaintext connection (h2c). &lt;h4&gt;TLS protected connection&lt;/h4&gt; If prior knowledge is set to true, we will negotiate protocol using HTTP/2 only, failing if not supported. if prior knowledge is set to false, we will negotiate protocol using both HTTP/2 and HTTP/1, using the protocol supported by server.">以前の知識が<code>false</code>に設定されている場合、HTTP/1接続を開始し、サーバーでサポートされている場合はHTTP/2にアップグレードします。プレーンテキスト接続( <code>h2c</code>)。 &lt;h4>TLS protected connection&lt;/h4>以前の知識が設定されている場合<code>true</code>に、HTTP/2のみを使用してプロトコルをネゴシエートし、サポートされない場合は失敗します。事前の知識が<code>false</code>に設定されている場合は、サーバーでサポートされているプロトコルを使用して、HTTP/2とHTTP/1の両方を使用してプロトコルをネゴシエートします。</span> </p>

<markup>@return whether to use prior knowledge of HTTP/2</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
