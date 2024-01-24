<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.ah8bw" title="原文 : Timeout (faulttolerance) Configuration">Timeout (faulttolerance)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3cJwrg" title="原文 : Type: io.helidon.faulttolerance.Timeout">タイプ: <a href="/apidocs/io.helidon.faulttolerance/io/helidon/faulttolerance/Timeout.html" target="_blank">io.helidon.faulttolerance.Timeout</a></span></p>

<p><span class="merged" id="all.13wScT" title="原文 : This is a standalone configuration type, prefix from configuration root: fault-tolerance.timeouts">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>fault-tolerance.timeouts</code></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.19"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.19" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.20"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.20"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.20"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.20"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4P7eO9"  title="原文: current-thread"><code>current-thread</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.27"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.8"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.sCdmq.spl1" title="原文 : Flag to indicate that code must be executed in current thread instead of in an executor’s thread.">エグゼキュータのスレッドではなく現在のスレッドでコードを実行する必要があることを示すフラグ。</span> <span class="merged" id="all.sCdmq.spl2" title="原文 : This flag is false by default.">このフラグはデフォルトで<code>false</code>です。</span> </p>

<markup>@return  whether to execute on current thread (`true`), or in an executor service (`false`})</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.23XSIS"  title="原文: timeout"><code>timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.9"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2kRnHs.1"  title="原文: PT10S"><code>PT10S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1exaDg.spl1" title="原文 : Duration to wait before timing out.">タイムアウトするまで待機する期間。</span> <span class="merged" id="all.1exaDg.spl2" title="原文 : Defaults to 10 seconds.">デフォルトは<code>10 seconds</code>です。</span> </p>

<markup>@return timeout</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>