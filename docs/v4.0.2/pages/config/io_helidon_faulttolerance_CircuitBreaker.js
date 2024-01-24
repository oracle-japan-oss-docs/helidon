<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2t655C" title="原文 : CircuitBreaker (faulttolerance) Configuration">CircuitBreaker (faulttolerance)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.17SPCb" title="原文 : Type: io.helidon.faulttolerance.CircuitBreaker">タイプ: <a href="/apidocs/io.helidon.faulttolerance/io/helidon/faulttolerance/CircuitBreaker.html" target="_blank">io.helidon.faulttolerance.CircuitBreaker</a></span></p>

<p><span class="merged" id="all.ZF2KB" title="原文 : This is a standalone configuration type, prefix from configuration root: fault-tolerance.circuit-breakers">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>fault-tolerance.circuit-breakers</code></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.17"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.17" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.18"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.18"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.18"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.18"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.lGKge"  title="原文: delay"><code>delay</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.5"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.432omB"  title="原文: PT5S"><code>PT5S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1FvpJw" title="原文 : How long to wait before transitioning from open to half-open state.">オープン状態からハーフ・オープン状態に移行するまでの待機時間。</span></p>

<markup>@return delay</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1QLipe"  title="原文: error-ratio"><code>error-ratio</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.20"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2f7qIC"  title="原文: 60"><code>60</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.8meLh.spl1" title="原文 : How many failures out of 100 will trigger the circuit to open.">100件のうち何件の失敗が原因で、回線が開くことがトリガーされます。</span> <span class="merged" id="all.8meLh.spl2" title="原文 : This is adapted to the #volume() used to handle the window of requests.">これは、リクエストのウィンドウの処理に使用される#volume()に適応します。</span> <span class="merged" id="all.8meLh.spl3" title="原文 : If errorRatio is 40, and volume is 10, 4 failed requests will open the circuit.">errorRatioが40で、ボリュームが10の場合、4つの失敗したリクエストは回路をオープンします。</span> <span class="merged" id="all.8meLh.spl4" title="原文 : Default is DEFAULT_ERROR_RATIO.">デフォルトは<code>DEFAULT_ERROR_RATIO</code>です。</span> </p>

<markup>@return percent of failure that trigger the circuit to open
@see #volume()</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3aMHXF"  title="原文: success-threshold"><code>success-threshold</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.21"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.27cMqo"  title="原文: 1"><code>1</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.45LNfj.spl1" title="原文 : How many successful calls will close a half-open circuit.">ハーフ・オープン回路をクローズする成功コールの数。</span> <span class="merged" id="all.45LNfj.spl2" title="原文 : Nevertheless, the first failed call will open the circuit again.">しかし、最初の失敗したコールは再び回路を開きます。</span> <span class="merged" id="all.45LNfj.spl3" title="原文 : Default is DEFAULT_SUCCESS_THRESHOLD.">デフォルトは<code>DEFAULT_SUCCESS_THRESHOLD</code>です。</span> </p>

<markup>@return number of calls</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3d0WZg"  title="原文: volume"><code>volume</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.22"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4UFA6L.4"  title="原文: 10"><code>10</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1UKBLH.spl1" title="原文 : Rolling window size used to calculate ratio of failed requests.">失敗したリクエストの比率を計算するために使用されるローリング・ウィンドウ・サイズ。</span> <span class="merged" id="all.1UKBLH.spl2" title="原文 : Default is DEFAULT_VOLUME.">デフォルトは<code>DEFAULT_VOLUME</code>です。</span> </p>

<markup>@return how big a window is used to calculate error errorRatio
@see #errorRatio()</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
