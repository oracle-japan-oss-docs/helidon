<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2Q1lVH" title="原文 : JitterRetryPolicy (faulttolerance.Retry) Configuration">JitterRetryPolicy (faulttolerance.Retry)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.MEJtx" title="原文 : Type: io.helidon.faulttolerance.Retry.JitterRetryPolicy">タイプ: <a href="./apidocs/io.helidon.faulttolerance.Retry/io/helidon/faulttolerance/Retry/JitterRetryPolicy.html" target="_blank">io.helidon.faulttolerance.Retry.JitterRetryPolicy</a></span></p>

<p><span class="merged" id="all.31kiUh.1" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.41Klgr.1"  title="原文: io.helidon.faulttolerance.Retry.RetryPolicy"><code>io.helidon.faulttolerance.Retry.RetryPolicy</code></span></p>

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


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.12"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.12" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.13"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.13"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.13"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.13"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2aa1qA.1"  title="原文: calls"><code>calls</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.13"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.uYIZj.2"  title="原文: 3"><code>3</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.20QBC5.1" title="原文 : Total number of calls (first + retries).">コールの合計数(最初の再試行+再試行)。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.lGKge.2"  title="原文: delay"><code>delay</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.3"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1zr2Gd.1"  title="原文: PT0.2S"><code>PT0.2S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1xNdkg.1" title="原文 : Base delay between the invocations.">起動間のベース遅延。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.ukwxj"  title="原文: jitter"><code>jitter</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.4"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3vJ2By"  title="原文: PT0.05S"><code>PT0.05S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.XeBfk.spl1" title="原文 : Random part of the delay.">遅延のランダムな部分。</span> <span class="merged" id="all.XeBfk.spl2" title="原文 : A number between [-jitter,+jitter] is applied to delay each time delay is calculated.">遅延が計算されるたびに、<code>[-jitter,+jitter]</code>の間の数値が遅延に適用されます。</span> </p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
