<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.4AoInZ" title="原文 : SocketOptions (common.socket) Configuration">SocketOptions (common.socket)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.AkJ2s" title="原文 : Type: io.helidon.common.socket.SocketOptions">タイプ: <a href="/apidocs/io.helidon.common.socket/io/helidon/common/socket/SocketOptions.html" target="_blank">io.helidon.common.socket.SocketOptions</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.10"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.10" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.11"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.11"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.11"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.11"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3nD4yJ"  title="原文: connect-timeout"><code>connect-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.2"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2kRnHs"  title="原文: PT10S"><code>PT10S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2UZrxq.spl1"  title="原文:: Socket connect timeout.">ソケット接続のタイムアウト。</span> <span class="merged" id="all.2UZrxq.spl2" title="原文 : Default is 10 seconds.">デフォルトは10秒です。</span> </p>

<markup>@return connect timeout duration</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3R6xIn"  title="原文: read-timeout"><code>read-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.3"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2goOVh"  title="原文: PT30S"><code>PT30S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3RTopF.spl1"  title="原文:: Socket read timeout.">ソケット読取りのタイムアウト。</span> <span class="merged" id="all.3RTopF.spl2"  title="原文:: Default is 30 seconds.">デフォルトは30秒です。</span> </p>

<markup>@return read timeout duration</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.pKqg1"  title="原文: socket-keep-alive"><code>socket-keep-alive</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.15"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.7"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3Y9LgZ.spl1" title="原文 : Configure socket keep alive.">ソケット・キープアライブを構成します。</span> <span class="merged" id="all.3Y9LgZ.spl2"  title="原文:: Default is true.">デフォルトは<code>true</code>です。</span> </p>

<markup>@return keep alive
@see java.net.StandardSocketOptions#SO_KEEPALIVE</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3or7NK"  title="原文: socket-receive-buffer-size"><code>socket-receive-buffer-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.14"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2NqQU7"  title="原文: 32768"><code>32768</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.414UO0" title="原文 : Socket receive buffer size.">ソケット受信バッファ・サイズ。</span></p>

<markup>@return buffer size, in bytes
@see java.net.StandardSocketOptions#SO_RCVBUF</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.SEot9"  title="原文: socket-reuse-address"><code>socket-reuse-address</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.16"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.8"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.aEHyV.spl1" title="原文 : Socket reuse address.">ソケットでアドレスを再利用。</span> <span class="merged" id="all.aEHyV.spl2"  title="原文:: Default is true.">デフォルトは<code>true</code>です。</span> </p>

<markup>@return whether to reuse address
@see java.net.StandardSocketOptions#SO_REUSEADDR</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2vL7Bu"  title="原文: socket-send-buffer-size"><code>socket-send-buffer-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.15"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2NqQU7.1"  title="原文: 32768"><code>32768</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2oPHCS" title="原文 : Socket send buffer size.">ソケット送信バッファ・サイズ。</span></p>

<markup>@return buffer size, in bytes
@see java.net.StandardSocketOptions#SO_SNDBUF</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3xk1Vj"  title="原文: tcp-no-delay"><code>tcp-no-delay</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.17"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.4"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.XWP0B.spl1" title="原文 : This option may improve performance on some systems.">このオプションは、一部のシステムのパフォーマンスを向上させる可能性があります。</span> <span class="merged" id="all.XWP0B.spl2"  title="原文:: Default is false.">デフォルトは<code>false</code>です。</span> </p>

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
