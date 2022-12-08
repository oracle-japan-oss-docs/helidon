<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2t655C" title="原文 : CircuitBreaker (faulttolerance) Configuration">CircuitBreaker (faulttolerance)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3wEAT3" title="原文 : Type: io.helidon.faulttolerance.CircuitBreaker">タイプ: <a href="./apidocs/io.helidon.faulttolerance/io/helidon/faulttolerance/CircuitBreaker.html" target="_blank">io.helidon.faulttolerance.CircuitBreaker</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.9"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.9" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.10"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.10"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.10"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.10"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1E2CUY.1"  title="原文: cancel-source"><code>cancel-source</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.9"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.6"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.30IBRH.spl1" title="原文 : Policy to cancel any source stage if the value return by CircuitBreaker#invoke is cancelled.">CircuitBreaker#invokeによって返される値が取り消された場合のソース・ステージを取り消すポリシー。</span> <span class="merged" id="all.30IBRH.spl2" title="原文 : Default is true; mostly used by FT MP to change default.">デフォルトは<code>true</code>で、ほとんどがデフォルトを変更するためにFT MPで使用されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.lGKge"  title="原文: delay"><code>delay</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.432omB"  title="原文: PT5S"><code>PT5S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1FvpJw" title="原文 : How long to wait before transitioning from open to half-open state.">オープン状態からハーフ・オープン状態に移行するまでの待機時間。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1QLipe"  title="原文: error-ratio"><code>error-ratio</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.9"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2f7qIC"  title="原文: 60"><code>60</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3rP6Ia.spl1" title="原文 : How many failures out of 100 will trigger the circuit to open.">100件のうち何件の失敗が原因で、回線が開くことがトリガーされます。</span> <span class="merged" id="all.3rP6Ia.spl2" title="原文 : This is adapted to the #volume(int) used to handle the window of requests.">これは、リクエストのウィンドウの処理に使用される#volume(int)に適応します。</span> <span class="merged" id="all.3rP6Ia.spl3" title="原文 : If errorRatio is 40, and volume is 10, 4 failed requests will open the circuit.">errorRatioが40で、ボリュームが10の場合、4つの失敗したリクエストは回路をオープンします。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.309fiz.1"  title="原文: name"><code>name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.16"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3HYGY3"  title="原文: CircuitBreaker-"><code>CircuitBreaker-</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2Bdgu7.1" title="原文 : A name assigned for debugging, error reporting or configuration purposes.">デバッグ、エラー・レポートまたは構成の目的に割り当てられた名前。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3aMHXF"  title="原文: success-threshold"><code>success-threshold</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.10"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.27cMqo.1"  title="原文: 1"><code>1</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.22t1de.spl1" title="原文 : How many successful calls will close a half-open circuit.">ハーフ・オープン回路をクローズする成功コールの数。</span> <span class="merged" id="all.22t1de.spl2" title="原文 : Nevertheless the first failed call will open the circuit again.">ただし、最初の失敗したコールは回路を再度開きます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3d0WZg"  title="原文: volume"><code>volume</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.11"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4UFA6L.3"  title="原文: 10"><code>10</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.10GUwc" title="原文 : Rolling window size used to calculate ratio of failed requests.">失敗したリクエストの比率を計算するために使用されるローリング・ウィンドウ・サイズ。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
