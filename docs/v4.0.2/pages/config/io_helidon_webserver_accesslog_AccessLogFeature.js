<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.I9TFx.1" title="原文 : AccessLogFeature (webserver.accesslog) Configuration">AccessLogFeature (webserver.accesslog)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2p0e71.1" title="原文 : Type: io.helidon.webserver.accesslog.AccessLogFeature">タイプ: <a href="/apidocs/io.helidon.webserver.accesslog/io/helidon/webserver/accesslog/AccessLogFeature.html" target="_blank">io.helidon.webserver.accesslog.AccessLogFeature</a></span></p>

<markup
lang="text"
title="Config key"
>access-log</markup>

<p><span class="merged" id="all.31kiUh.11" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1upsag.1"  title="原文: io.helidon.webserver.spi.ServerFeatureProvider"><code>io.helidon.webserver.spi.ServerFeatureProvider</code></span></p>

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


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.82"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.78" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.85"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.85"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.85"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.85"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.48UcwL.11"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.131"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.69"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1HO27M.1" title="原文 : Whether this feature will be enabled.">この機能を有効にするかどうか。</span></p>

<markup>@return whether enabled</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4L3INC.2"  title="原文: format"><code>format</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.179"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.20pzcR.1.spl1" title="原文 : The format for log entries (similar to the Apache LogFormat). &lt;table class=&quot;config&quot;&gt; &lt;caption&gt;Log format elements&lt;/caption&gt; &lt;tr&gt; &lt;td&gt;%h&lt;/td&gt; &lt;td&gt;IP address of the remote host&lt;/td&gt; &lt;td&gt;HostLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;%l&lt;/td&gt; &lt;td&gt;The client identity.">ログ・エントリの形式(Apache <code>LogFormat</code>と同様)。&lt;table class="config"> &lt;caption>Logは、リモートのhost&lt;/td> &lt;td>HostLogEntry&lt;/td> &lt;/tr> &lt;tr> &lt;td>%l&lt;/td> &lt;td>クライアント・アイデンティティの要素&lt;/caption> &lt;tr> &lt;td>%h&lt;/td> &lt;td>IPアドレスをフォーマットします。</span> <span class="merged" id="all.20pzcR.1.spl2" title="原文 : This is always undefined in Helidon.&lt;/td&gt; &lt;td&gt;UserIdLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;%u&lt;/td&gt; &lt;td&gt;User ID as asserted by Helidon Security.&lt;/td&gt; &lt;td&gt;UserLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;%t&lt;/td&gt; &lt;td&gt;The timestamp&lt;/td&gt; &lt;td&gt;TimestampLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;%r&lt;/td&gt; &lt;td&gt;The request line (&quot;GET /favicon.ico HTTP/1.0&quot;)&lt;/td&gt; &lt;td&gt;RequestLineLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;%s&lt;/td&gt; &lt;td&gt;The status code returned to the client&lt;/td&gt; &lt;td&gt;StatusLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;%b&lt;/td&gt; &lt;td&gt;The entity size in bytes&lt;/td&gt; &lt;td&gt;SizeLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;%D&lt;/td&gt; &lt;td&gt;The time taken in microseconds (start of request until last byte written)&lt;/td&gt; &lt;td&gt;TimeTakenLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;%T&lt;/td&gt; &lt;td&gt;The time taken in seconds (start of request until last byte written), integer&lt;/td&gt; &lt;td&gt;TimeTakenLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;%{header-name}i&lt;/td&gt; &lt;td&gt;Value of header header-name&lt;/td&gt; &lt;td&gt;HeaderLogEntry&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt;">これはHelidonで常に未定義です。&lt;/td> &lt;td>UserIdLogEntry&lt;/td> &lt;/tr> &lt;tr> &lt;td>%u&lt;/td> &lt;td>HeidonセキュリティによりユーザーIDとしてアサート。&lt;/td> &lt;td>UserLogEntry&lt;/td> &lt;/tr> &lt;tr> &lt;td>%t&lt;/td> &lt;td>The timestamp&lt;/td> &lt;td>TimestampLogEntry&lt;/td> &lt;/tr> &lt;tr> &lt;td>%r&lt;/td> &lt;td>要求行 (<code>"GET /favicon.ico HTTP/1.0"</code>)&lt;/td> &lt;td>RequestLineLogEntry&lt;/td> &lt;/tr> &lt;tr> &lt;td>%s&lt;/td> &lt;td>クライアントに戻されるステータス・コード。&lt;/td> &lt;td>StatusLogEntry&lt;/td> &lt;/tr> &lt;tr> &lt;td>%b&lt;/td> &lt;td>エンティティ・サイズ(バイト)&lt;/td> &lt;td>SizeLogEntry&lt;/td> &lt;/tr> &lt;tr> &lt;td>%D&lt;/td> &lt;td>時間 (マイクロ秒) (最後のバイト書込みまで要求の開始)&lt;/td> &lt;td>TimeTakenLogEntry&lt;/td> &lt;/tr> &lt;tr> &lt;td>%T&lt;/td> &lt;td>時間 (秒) (最後のバイト書込みまで要求の開始), integer&lt;/td> &lt;td>TimeTakenLogEntry&lt;/td> &lt;/tr> &lt;tr> &lt;td>%{header-name}i&lt;/td> &lt;td>ヘッダーの値 <code>header-name</code>&lt;/td> &lt;td>HeaderLogEntry&lt;/td> &lt;/tr> &lt;/table></span> </p>

<markup>@return format string, such as `%h %l %u %t %r %b %{Referer`i}</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Z8Q9s.1"  title="原文: logger-name"><code>logger-name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.180"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2aJUwu.1"  title="原文: io.helidon.webserver.AccessLog"><code>io.helidon.webserver.AccessLog</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1k8TO9.1.spl1" title="原文 : Name of the logger used to obtain access log logger from System#getLogger(String).">System#getLogger(String)からアクセス・ログ・ロガーを取得するために使用するロガーの名前。</span> <span class="merged" id="all.1k8TO9.1.spl2" title="原文 : Defaults to AccessLogFeature#DEFAULT_LOGGER_NAME.">デフォルトは<code>AccessLogFeature#DEFAULT_LOGGER_NAME</code>です。</span> </p>

<markup>@return name of the logger to use</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5HZ82.2"  title="原文: sockets"><code>sockets</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.24"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.11F0ik.1.spl1" title="原文 : List of sockets to register this feature on.">この機能を登録するソケットのリスト。</span> <span class="merged" id="all.11F0ik.1.spl2" title="原文 : If empty, it would get registered on all sockets.">空の場合は、すべてのソケットに登録されます。</span> <span class="merged" id="all.11F0ik.1.spl3" title="原文 : The logger used will have the expected logger with a suffix of the socket name.">使用するロガーには、ソケット名のサフィクスを持つ予期されるロガーが含まれます。</span> </p>

<markup>@return socket names to register on, defaults to empty (all available sockets)</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1d5M0z.1"  title="原文: weight"><code>weight</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.40Xztn.2"  title="原文:: double">double</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3NqvMr.1"  title="原文: 1000.0"><code>1000.0</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.5laEM.1.spl1" title="原文 : Weight of the access log feature.">アクセス・ログ機能の重み。</span> <span class="merged" id="all.5laEM.1.spl2" title="原文 : We need to log access for anything happening on the server, so weight is high: io.helidon.webserver.accesslog.AccessLogFeature#WEIGHT.">サーバーで何が起こってもアクセスを記録する必要があるため、重みが高くなります: <code>io.helidon.webserver.accesslog.AccessLogFeature#WEIGHT</code>。</span> </p>

<markup>@return weight of the feature</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
