<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2CcikL" title="原文 : Cron (scheduling) Configuration">Cron (scheduling)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.4GQohA" title="原文 : Type: io.helidon.scheduling.Cron">タイプ: <a href="/apidocs/io.helidon.scheduling/io/helidon/scheduling/Cron.html" target="_blank">io.helidon.scheduling.Cron</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.38"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.1fCXjI.1" title="原文 : Required configuration options"><span>必要な構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.39"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.39"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.39"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.39"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2zTAfI"  title="原文: expression"><code>expression</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.86"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2mXp3n" title="原文 : Cron expression for specifying period of execution.">実行期間を指定するCron式。</span></p>

<markup>&lt;b&gt;Examples:&lt;/b&gt;</markup>
<ul class="ulist">
<li>
<p><span class="merged" id="all.1RIqT5" title="原文 : 0/2 * * * * ? * - Every 2 seconds"><code>0/2 * * * * ? *</code> - 2秒間隔</span></p>

</li>
<li>
<p><span class="merged" id="all.1uzG2d" title="原文 : 0 45 9 ? * * - Every day at 9:45"><code>0 45 9 ? * *</code> - 毎日、9:45</span></p>

</li>
<li>
<p><span class="merged" id="all.4YtTOV" title="原文 : 0 15 8 ? * MON-FRI - Every workday at 8:15"><code>0 15 8 ? * MON-FRI</code> - 全稼働日の8:15</span></p>

</li>
</ul>

<p><span class="merged" id="all.2L1fCz" title="原文 : @return cron expression">@return cron式</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<div class="block-title"><span class="merged" id="all.271SGn.37" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.40"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.40"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.40"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.40"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1E8ebo"  title="原文: concurrent"><code>concurrent</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.52"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.26"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1lqxHv.spl1" title="原文 : Allow concurrent execution if previous task didn’t finish before next execution.">前のタスクが次回の実行前に終了しなかった場合、同時実行を許可します。</span> <span class="merged" id="all.1lqxHv.spl2"  title="原文: Default value is true.">デフォルト値は<code>true</code>です。</span> </p>

<markup>@return true for allow concurrent execution.</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
