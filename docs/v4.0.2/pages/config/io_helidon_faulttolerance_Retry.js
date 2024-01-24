<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3kCf26" title="原文 : Retry (faulttolerance) Configuration">Retry (faulttolerance)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2ANwYj" title="原文 : Type: io.helidon.faulttolerance.Retry">タイプ: <a href="/apidocs/io.helidon.faulttolerance/io/helidon/faulttolerance/Retry.html" target="_blank">io.helidon.faulttolerance.Retry</a></span></p>

<p><span class="merged" id="all.2CKEEx" title="原文 : This is a standalone configuration type, prefix from configuration root: fault-tolerance.retries">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>fault-tolerance.retries</code></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.18"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.18" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.19"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.19"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.19"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.19"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2aa1qA"  title="原文: calls"><code>calls</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.23"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.uYIZj"  title="原文: 3"><code>3</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.QKqPZ" title="原文 : Number of calls (first try + retries).">コール数(最初の試行+再試行)。</span></p>

<markup>@return number of desired calls, must be 1 (means no retries) or higher.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.lGKge.1"  title="原文: delay"><code>delay</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.6"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1zr2Gd"  title="原文: PT0.2S"><code>PT0.2S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2SLMkI.spl1" title="原文 : Base delay between try and retry.">試行と再試行の間のベース遅延。</span> <span class="merged" id="all.2SLMkI.spl2" title="原文 : Defaults to 200 ms.">デフォルトは<code>200 ms</code>です。</span> </p>

<markup>@return delay between retries (combines with retry policy)</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.14MbAO"  title="原文: delay-factor"><code>delay-factor</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.40Xztn"  title="原文:: double">double</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.26voHa"  title="原文: -1"><code>-1</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3S5iab.spl1" title="原文 : Delay retry policy factor.">遅延再試行ポリシー係数。</span> <span class="merged" id="all.3S5iab.spl2" title="原文 : If unspecified (value of -1), Jitter retry policy would be used, unless jitter is also unspecified.">指定しない場合(<code>-1</code>の値)、ジッターも指定されないかぎり、ジッター再試行ポリシーが使用されます。</span> </p>

<markup>Default when Retry.DelayingRetryPolicy is used is `2`.</markup>
<markup>@return delay factor for delaying retry policy</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.ukwxj"  title="原文: jitter"><code>jitter</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.7"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3SYTOn"  title="原文: PT-1S"><code>PT-1S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1PwdNk.spl1" title="原文 : Jitter for Retry.JitterRetryPolicy.">Retry.JitterRetryPolicyのジッター。</span> <span class="merged" id="all.1PwdNk.spl2" title="原文 : If unspecified (value of -1), delaying retry policy is used.">指定しない場合(<code>-1</code>の値)、遅延再試行ポリシーが使用されます。</span> <span class="merged" id="all.1PwdNk.spl3" title="原文 : If both this value, and #delayFactor() are specified, delaying retry policy would be used.">この値と#delayFactor()の両方が指定されている場合は、遅延再試行ポリシーが使用されます。</span> </p>

<markup>@return jitter</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Dw0Su"  title="原文: overall-timeout"><code>overall-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.8"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2MQRtH"  title="原文: PT1S"><code>PT1S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.ZToSd" title="原文 : Overall timeout of all retries combined.">すべての再試行の合計タイムアウト。</span></p>

<markup>@return overall timeout</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
