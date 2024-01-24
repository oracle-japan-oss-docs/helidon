<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2QXWp" title="原文 : LogStreamConfig (webserver.observe.log) Configuration">LogStreamConfig (webserver.observe.log)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.43ZaoL" title="原文 : Type: io.helidon.webserver.observe.log.LogStreamConfig">タイプ: <a href="/apidocs/io.helidon.webserver.observe.log/io/helidon/webserver/observe/log/LogStreamConfig.html" target="_blank">io.helidon.webserver.observe.log.LogStreamConfig</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.95"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.90" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.97"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.97"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.97"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.97"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2MCVuy"  title="原文: content-type"><code>content-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.12u7n1"  title="原文: HttpMediaType">HttpMediaType</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.BnaZz"  title="原文: @io.helidon.http.HttpMediaTypes@.PLAINTEXT_UTF_8"><code>@io.helidon.http.HttpMediaTypes@.PLAINTEXT_UTF_8</code></span></td>
<td class=""><doc-view>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48UcwL.16"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.148"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.80"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1aeR9W" title="原文 : Whether stream is enabled.">ストリームが有効かどうか。</span></p>

<markup>@return whether to allow streaming of log statements</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3vvvHQ"  title="原文: idle-message-timeout"><code>idle-message-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.42"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.432omB.3"  title="原文: PT5S"><code>PT5S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1Dg0g0" title="原文 : How long to wait before we send the idle message, to make sure we keep the stream alive.">アイドル・メッセージを送信するまでの待機時間。ストリームが存続していることを確認します。</span></p>

<markup>@return if no messages appear within this duration, and idle message will be sent
@see #idleString()</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2LEBbm"  title="原文: idle-string"><code>idle-string</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.186"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4d3exi" title="原文 : `% `">`% `</span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3Ieftb" title="原文 : String sent when there are no log messages within the #idleMessageTimeout().">#idleMessageTimeout()内にログ・メッセージがない場合に送信される文字列。</span></p>

<markup>@return string to write over the network when no log messages are received</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3GCEeT"  title="原文: queue-size"><code>queue-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.72"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.368nYW.1"  title="原文: 100"><code>100</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3zovlY.spl1" title="原文 : Length of the in-memory queue that buffers log messages from loggers before sending them over the network.">ネットワーク経由でログ出力を送信する前にログ・メッセージをバッファリングするインメモリー・キューの長さ。</span> <span class="merged" id="all.3zovlY.spl2" title="原文 : If the messages are produced faster than we can send them to client, excess messages are DISCARDED, and will not be sent.">メッセージがクライアントに送信できる速度よりも速く生成された場合、余分なメッセージは破棄され、送信されません。</span> </p>

<markup>@return size of the in-memory queue for log messages</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
