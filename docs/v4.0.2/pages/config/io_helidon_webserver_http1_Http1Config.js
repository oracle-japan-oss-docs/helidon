<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1yoAjP" title="原文 : Http1Config (webserver.http1) Configuration">Http1Config (webserver.http1)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2ogP8H" title="原文 : Type: io.helidon.webserver.http1.Http1Config">タイプ: <a href="/apidocs/io.helidon.webserver.http1/io/helidon/webserver/http1/Http1Config.html" target="_blank">io.helidon.webserver.http1.Http1Config</a></span></p>

<p><span class="merged" id="all.31kiUh.16" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3LdeaA.1"  title="原文: io.helidon.webserver.spi.ProtocolConfig"><code>io.helidon.webserver.spi.ProtocolConfig</code></span></p>

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


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.87"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.82" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.89"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.89"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.89"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.89"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.Bl22q"  title="原文: continue-immediately"><code>continue-immediately</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.134"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.47"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3oCD8J" title="原文 : When true WebServer answers to expect continue with 100 continue immediately, not waiting for user to actually request the data.">trueの場合、WebServerは100が継続するとすぐに応答し、ユーザーが実際にデータをリクエストするのを待機しません。</span></p>

<markup>@return if `true` answer with 100 continue immediately after expect continue</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3k4KKn"  title="原文: max-headers-size"><code>max-headers-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.68"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1K73Gb.2"  title="原文: 16384"><code>16384</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3NOoVq" title="原文 : Maximal size of received headers in bytes.">受信ヘッダーの最大サイズ(バイト単位)。</span></p>

<markup>@return maximal header size</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2LJZH3"  title="原文: max-prologue-length"><code>max-prologue-length</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.69"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2lp3HC.2"  title="原文: 2048"><code>2048</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4IMEpC" title="原文 : Maximal size of received HTTP prologue (GET /path HTTP/1.1).">受信したHTTPプロローグの最大サイズ(GET /path HTTP/1.1)。</span></p>

<markup>@return maximal size in bytes</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.CkHix"  title="原文: recv-log"><code>recv-log</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.135"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.72"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2RoK3S.spl1" title="原文 : Logging of received packets.">受信パケットのロギング。</span> <span class="merged" id="all.2RoK3S.spl2" title="原文 : Uses trace and debug levels on logger of Http1LoggingConnectionListener with suffix of .recv`.">Http1LoggingConnectionListenerのロガーのトレース・レベルおよびデバッグ・レベルを使用し、サフィクスは<code>.recv`</code>です。</span> </p>

<markup>@return `true` if logging should be enabled for received packets, `false` if no logging should be done</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2WJZ8L"  title="原文: requested-uri-discovery"><code>requested-uri-discovery</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.14c053" title="原文 : RequestedUriDiscoveryContext"><router-link to="/config/io_helidon_http_RequestedUriDiscoveryContext">RequestedUriDiscoveryContext</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.lEZEE" title="原文 : Requested URI discovery settings.">リクエストされたURI検出設定。</span></p>

<markup>@return settings for computing the requested URI</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Okjuk"  title="原文: send-log"><code>send-log</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.136"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.73"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3Q4vlJ.spl1" title="原文 : Logging of sent packets.">送信パケットのロギング。</span> <span class="merged" id="all.3Q4vlJ.spl2" title="原文 : Uses trace and debug levels on logger of Http1LoggingConnectionListener with suffix of .send`.">Http1LoggingConnectionListenerのロガーのトレース・レベルおよびデバッグ・レベルを使用し、サフィクスは<code>.send`</code>です。</span> </p>

<markup>@return `true` if logging should be enabled for sent packets, `false` if no logging should be done</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1EolUU"  title="原文: validate-path"><code>validate-path</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.137"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.74"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2RB9Qm" title="原文 : If set to false, any path is accepted (even containing illegal characters).">falseに設定すると、パスは受け入れられます(不正な文字も含みます)。</span></p>

<markup>@return whether to validate path</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2WWdbj.1"  title="原文: validate-request-headers"><code>validate-request-headers</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.138"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.75"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.5d19N.spl1" title="原文 : Whether to validate headers.">ヘッダーをバリデートするかどうか。</span> <span class="merged" id="all.5d19N.spl2" title="原文 : If set to false, any value is accepted, otherwise validates headers + known headers are validated by format (content length is always validated as it is part of protocol processing (other headers may be validated if features use them)).">falseに設定すると、任意の値が受け入れられ、それ以外の場合はヘッダーをバリデートし、既知のヘッダーはフォーマットでバリデートされます(コンテンツの長さは、プロトコル処理の一部として常にバリデートされます(機能で使用する場合は他のヘッダーがバリデートされます)。</span> </p>

<markup>Defaults to `true`.</markup>
<markup>@return whether to validate headers</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1TRpsd.1"  title="原文: validate-response-headers"><code>validate-response-headers</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.139"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.48"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.5d19N.1.spl1" title="原文 : Whether to validate headers.">ヘッダーをバリデートするかどうか。</span> <span class="merged" id="all.5d19N.1.spl2" title="原文 : If set to false, any value is accepted, otherwise validates headers + known headers are validated by format (content length is always validated as it is part of protocol processing (other headers may be validated if features use them)).">falseに設定すると、任意の値が受け入れられ、それ以外の場合はヘッダーをバリデートし、既知のヘッダーはフォーマットでバリデートされます(コンテンツの長さは、プロトコル処理の一部として常にバリデートされます(機能で使用する場合は他のヘッダーがバリデートされます)。</span> </p>

<markup>Defaults to `false` as user has control on the header creation.</markup>
<markup>@return whether to validate headers</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
