<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1Yav8j" title="原文 : Bulkhead (faulttolerance) Configuration">Bulkhead (faulttolerance)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.pnmtL" title="原文 : Type: io.helidon.faulttolerance.Bulkhead">タイプ: <a href="./apidocs/io.helidon.faulttolerance/io/helidon/faulttolerance/Bulkhead.html" target="_blank">io.helidon.faulttolerance.Bulkhead</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.8"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.8" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.9"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.9"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.9"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.9"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1E2CUY"  title="原文: cancel-source"><code>cancel-source</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.8"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.5"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.zOaAg.spl1" title="原文 : Policy to cancel any source stage if the value return by Bulkhead#invoke is cancelled.">Bulkhead#invokeによって返される値が取り消された場合にソース・ステージを取り消すポリシー。</span> <span class="merged" id="all.zOaAg.spl2" title="原文 : Default is true; mostly used by FT MP to change default.">デフォルトは<code>true</code>で、ほとんどがデフォルトを変更するためにFT MPで使用されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4IR5vm"  title="原文: limit"><code>limit</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.7"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4UFA6L.1"  title="原文: 10"><code>10</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3a6xrR.spl1" title="原文 : Maximal number of parallel requests going through this bulkhead.">このバルクヘッドを通過するパラレル・リクエストの最大数。</span> <span class="merged" id="all.3a6xrR.spl2" title="原文 : When the limit is reached, additional requests are enqueued.">制限に達すると、追加のリクエストがエンキューされます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.309fiz"  title="原文: name"><code>name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.15"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4LxmHe"  title="原文: Bulkhead-"><code>Bulkhead-</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2Bdgu7" title="原文 : A name assigned for debugging, error reporting or configuration purposes.">デバッグ、エラー・レポートまたは構成の目的に割り当てられた名前。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2kyWMX"  title="原文: queue-length"><code>queue-length</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.8"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4UFA6L.2"  title="原文: 10"><code>10</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.30bAIS.spl1" title="原文 : Maximal number of enqueued requests waiting for processing.">処理を待機しているエンキュー済リクエストの最大数。</span> <span class="merged" id="all.30bAIS.spl2" title="原文 : When the limit is reached, additional attempts to invoke a request will receive a io.helidon.faulttolerance.BulkheadException.">制限に達すると、リクエストを起動する追加の試行はio.helidon.faulttolerance.BulkheadExceptionを受け取ります。</span> </p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
