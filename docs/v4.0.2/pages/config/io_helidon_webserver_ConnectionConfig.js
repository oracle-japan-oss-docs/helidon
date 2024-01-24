<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3o1Wi9" title="原文 : ConnectionConfig (webserver) Configuration">ConnectionConfig (webwebserver)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1gj2XS" title="原文 : Type: io.helidon.webserver.ConnectionConfig">タイプ: <a href="/apidocs/io.helidon.webserver/io/helidon/webserver/ConnectionConfig.html" target="_blank">io.helidon.webserver.ConnectionConfig</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.78"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.74" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.81"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.81"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.81"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.81"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3nD4yJ.4"  title="原文: connect-timeout"><code>connect-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.33"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2kRnHs.5"  title="原文: PT10S"><code>PT10S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3vhOGp.spl1"  title="原文:: Connect timeout.">接続タイムアウト</span> <span class="merged" id="all.3vhOGp.spl2" title="原文 : Default is DEFAULT_CONNECT_TIMEOUT_DURATION.">デフォルトは<code>DEFAULT_CONNECT_TIMEOUT_DURATION</code>です。</span> </p>

<markup>@return connect timeout</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4cLDv2.5"  title="原文: keep-alive"><code>keep-alive</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.126"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.65"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3Y9LgZ.1.spl1" title="原文 : Configure socket keep alive.">ソケット・キープアライブを構成します。</span> <span class="merged" id="all.3Y9LgZ.1.spl2"  title="原文:: Default is true.">デフォルトは<code>true</code>です。</span> </p>

<markup>@return keep alive
@see java.net.StandardSocketOptions#SO_KEEPALIVE</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3R6xIn.4"  title="原文: read-timeout"><code>read-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.34"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2goOVh.1"  title="原文: PT30S"><code>PT30S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3RA65m.spl1"  title="原文:: Read timeout.">読取りタイムアウト</span> <span class="merged" id="all.3RA65m.spl2" title="原文 : Default is DEFAULT_READ_TIMEOUT_DURATION">デフォルトは<code>DEFAULT_READ_TIMEOUT_DURATION</code>です</span> </p>

<markup>@return read timeout</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1ItLlm"  title="原文: receive-buffer-size"><code>receive-buffer-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.50"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2NqQU7.2"  title="原文: 32768"><code>32768</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.35MUGX.spl1" title="原文 : Socket receive buffer size.">ソケット受信バッファ・サイズ。</span> <span class="merged" id="all.35MUGX.spl2" title="原文 : Default is DEFAULT_SO_BUFFER_SIZE.">デフォルトは<code>DEFAULT_SO_BUFFER_SIZE</code>です。</span> </p>

<markup>@return buffer size, in bytes
@see java.net.StandardSocketOptions#SO_RCVBUF</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3EshYE"  title="原文: reuse-address"><code>reuse-address</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.127"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.66"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.aEHyV.1.spl1" title="原文 : Socket reuse address.">ソケットでアドレスを再利用。</span> <span class="merged" id="all.aEHyV.1.spl2"  title="原文:: Default is true.">デフォルトは<code>true</code>です。</span> </p>

<markup>@return whether to reuse address
@see java.net.StandardSocketOptions#SO_REUSEADDR</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3GmEBK"  title="原文: send-buffer-size"><code>send-buffer-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.51"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2NqQU7.3"  title="原文: 32768"><code>32768</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.228Rse.spl1" title="原文 : Socket send buffer size.">ソケット送信バッファ・サイズ。</span> <span class="merged" id="all.228Rse.spl2" title="原文 : Default is DEFAULT_SO_BUFFER_SIZE.">デフォルトは<code>DEFAULT_SO_BUFFER_SIZE</code>です。</span> </p>

<markup>@return buffer size, in bytes
@see java.net.StandardSocketOptions#SO_SNDBUF</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3xk1Vj.1"  title="原文: tcp-no-delay"><code>tcp-no-delay</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.128"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.46"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2jci3O.spl1" title="原文 : Disable Nagle’s algorithm by setting TCP_NODELAY to true.">TCP_NODELAYをtrueに設定して、Nagleのアルゴリズムを無効にします。</span> <span class="merged" id="all.2jci3O.spl2" title="原文 : This can result in better performance on Mac or newer linux kernels for some payload types.">これにより、一部のペイロード・タイプでは、Macまたは新しいlinuxカーネルでパフォーマンスが向上する可能性があります。</span> <span class="merged" id="all.2jci3O.spl3"  title="原文:: Default is false.">デフォルトは<code>false</code>です。</span> </p>

<markup>@return whether to use TCP_NODELAY, defaults to `false`
@see java.net.StandardSocketOptions#TCP_NODELAY</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
