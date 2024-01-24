<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2kqsMI" title="原文 : Http2Config (webserver.http2) Configuration">Http2Config (webserver.http2)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.aGbZV" title="原文 : Type: io.helidon.webserver.http2.Http2Config">タイプ: <a href="/apidocs/io.helidon.webserver.http2/io/helidon/webserver/http2/Http2Config.html" target="_blank">io.helidon.webserver.http2.Http2Config</a></span></p>

<p><span class="merged" id="all.31kiUh.17" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3LdeaA.2"  title="原文: io.helidon.webserver.spi.ProtocolConfig"><code>io.helidon.webserver.spi.ProtocolConfig</code></span></p>

</li>
</ul>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.88"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.83" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.90"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.90"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.90"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.90"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4H54B5"  title="原文: flow-control-timeout"><code>flow-control-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.41"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1Y3D74.2"  title="原文: PT0.1S"><code>PT0.1S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.20Gp8m.spl1" title="原文 : Outbound flow control blocking timeout configured as java.time.Duration or text in ISO-8601 format.">java.time.DurationまたはISO-8601形式のテキストとして構成されたアウトバウンド・フロー制御ブロッキング・タイムアウト。</span> <span class="merged" id="all.20Gp8m.spl2" title="原文 : Blocking timeout defines an interval to wait for the outbound window size changes(incoming window updates) before the next blocking iteration.">ブロック・タイムアウトは、次のブロック反復の前にアウトバウンド・ウィンドウ・サイズchanges(incoming window updates)を待機する間隔を定義します。</span> <span class="merged" id="all.20Gp8m.spl3" title="原文 : Default value is PT0.1S.">デフォルト値は<code>PT0.1S</code>です。</span> </p>

<markup>&lt;table&gt;
    &lt;caption&gt;&lt;b&gt;ISO_8601 format examples:&lt;/b&gt;&lt;/caption&gt;
    &lt;tr&gt;&lt;th&gt;PT0.1S&lt;/th&gt;&lt;th&gt;100 milliseconds&lt;/th&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;th&gt;PT0.5S&lt;/th&gt;&lt;th&gt;500 milliseconds&lt;/th&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;th&gt;PT2S&lt;/th&gt;&lt;th&gt;2 seconds&lt;/th&gt;&lt;/tr&gt;
&lt;/table&gt;</markup>
<markup>@return duration
@see &lt;a href="https://en.wikipedia.org/wiki/ISO_8601#Durations"&gt;ISO_8601 Durations&lt;/a&gt;</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1GCnSE.1"  title="原文: initial-window-size"><code>initial-window-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.70"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.W5etn"  title="原文: 1048576"><code>1048576</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.YbTQa.spl1" title="原文 : This setting indicates the sender’s maximum window size in bytes for stream-level flow control.">この設定は、ストリーム・レベルのフロー制御の送信者の最大ウィンドウ・サイズ(バイト)を示します。</span> <span class="merged" id="all.YbTQa.spl2" title="原文 : Default and maximum value is 2&lt;sup&gt;31&lt;/sup&gt;-1 = 2147483647 bytes.">デフォルト値および最大値は2&lt;sup>31&lt;/sup>-1= 2147483647bytesです。</span> <span class="merged" id="all.YbTQa.spl3" title="原文 : This setting affects the window size of HTTP/2 connection.">この設定は、HTTP/2接続のウィンドウ・サイズに影響します。</span> <span class="merged" id="all.YbTQa.spl4" title="原文 : Any value greater than 2147483647 causes an error.">2147483647より大きい値を指定すると、エラーが発生します。</span> <span class="merged" id="all.YbTQa.spl5" title="原文 : Any value smaller than initial window size causes an error.">初期ウィンドウ・サイズより小さい値を指定すると、エラーが発生します。</span> <span class="merged" id="all.YbTQa.spl6" title="原文 : See RFC 9113 section 6.9.1 for details.">詳細は、RFC 9113の項6.9.1を参照してください。</span> </p>

<markup>@return maximum window size in bytes</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3y1YhS"  title="原文: max-concurrent-streams"><code>max-concurrent-streams</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.26"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4aewGZ"  title="原文: 8192"><code>8192</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.yBZLN.spl1" title="原文 : Maximum number of concurrent streams that the server will allow.">サーバーが許可する同時ストリームの最大数。</span> <span class="merged" id="all.yBZLN.spl2"  title="原文:: Defaults to 8192.">デフォルトは<code>8192</code>です。</span> <span class="merged" id="all.yBZLN.spl3" title="原文 : This limit is directional: it applies to the number of streams that the sender permits the receiver to create.">この制限は方向: これは、送信者がレシーバの作成を許可するストリームの数に適用されます。</span> <span class="merged" id="all.yBZLN.spl4" title="原文 : It is recommended that this value be no smaller than 100 to not unnecessarily limit parallelism See RFC 9113 section 6.5.2 for details.">不必要に並列度を制限しないようにするには、この値を100以下にすることをお薦めします。詳細は、RFC 9113の項6.5.2を参照してください。</span> </p>

<markup>@return maximal number of concurrent streams</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1QmwKT.1"  title="原文: max-frame-size"><code>max-frame-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.71"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1K73Gb.3"  title="原文: 16384"><code>16384</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2wQXmy.spl1" title="原文 : The size of the largest frame payload that the sender is willing to receive in bytes.">送信者が受信できる最大フレーム・ペイロードのサイズ(バイト単位)。</span> <span class="merged" id="all.2wQXmy.spl2" title="原文 : Default value is 16384 and maximum value is 2&lt;sup&gt;24&lt;/sup&gt;-1 = 16777215 bytes.">デフォルト値は<code>16384</code>で、最大値は2&lt;sup>24&lt;/sup>-1= 16777215bytesです。</span> <span class="merged" id="all.2wQXmy.spl3" title="原文 : See RFC 9113 section 6.5.2 for details.">詳細は、RFC 9113の項6.5.2を参照してください。</span> </p>

<markup>@return maximal frame size</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.ekcmL.1"  title="原文: max-header-list-size"><code>max-header-list-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.27"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4aewGZ.1"  title="原文: 8192"><code>8192</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.gabiR.spl1" title="原文 : The maximum field section size that the sender is prepared to accept in bytes.">送信者が受け入れる準備が整っているフィールド・セクションの最大サイズ(バイト単位)。</span> <span class="merged" id="all.gabiR.spl2" title="原文 : See RFC 9113 section 6.5.2 for details.">詳細は、RFC 9113の項6.5.2を参照してください。</span> <span class="merged" id="all.gabiR.spl3" title="原文 : Default is 8192.">デフォルトは8192です。</span> </p>

<markup>@return maximal header list size in bytes</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2WJZ8L.1"  title="原文: requested-uri-discovery"><code>requested-uri-discovery</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.14c053.1" title="原文 : RequestedUriDiscoveryContext"><router-link to="/config/io_helidon_http_RequestedUriDiscoveryContext">RequestedUriDiscoveryContext</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.lEZEE.1" title="原文 : Requested URI discovery settings.">リクエストされたURI検出設定。</span></p>

<markup>@return settings for computing the requested URI</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Dcg4K"  title="原文: send-error-details"><code>send-error-details</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.140"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.49"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2O97GG.spl1" title="原文 : Whether to send error message over HTTP to client.">HTTP経由でクライアントにエラー・メッセージを送信するかどうか。</span> <span class="merged" id="all.2O97GG.spl2" title="原文 : Defaults to false, as exception message may contain internal information that could be used as an attack vector.">例外メッセージには攻撃ベクトルとして使用できる内部情報が含まれている可能性があるため、デフォルトは<code>false</code>です。</span> <span class="merged" id="all.2O97GG.spl3" title="原文 : Use with care and in cases where both server and clients are under your full control (such as for testing).">サーバーとクライアントの両方が完全に制御されている場合(テストなど)は、注意して使用してください。</span> </p>

<markup>@return whether to send error messages over the network</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1EolUU.1"  title="原文: validate-path"><code>validate-path</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.141"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.76"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2RB9Qm.1" title="原文 : If set to false, any path is accepted (even containing illegal characters).">falseに設定すると、パスは受け入れられます(不正な文字も含みます)。</span></p>

<markup>@return whether to validate path</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
