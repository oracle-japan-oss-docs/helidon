<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3kCf26" title="原文 : Retry (faulttolerance) Configuration">Retry (faulttolerance)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.31GDTv" title="原文 : Type: io.helidon.faulttolerance.Retry">タイプ: <a href="./apidocs/io.helidon.faulttolerance/io/helidon/faulttolerance/Retry.html" target="_blank">io.helidon.faulttolerance.Retry</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.10"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.10" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.11"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.11"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.11"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.11"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1E2CUY.2"  title="原文: cancel-source"><code>cancel-source</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.10"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.7"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3V2lAt.spl1" title="原文 : Policy to cancel any source stage if the value return by Retry#invoke is cancelled.">再試行#invokeによって返される値が取り消された場合のソース・ステージを取り消すポリシー。</span> <span class="merged" id="all.3V2lAt.spl2" title="原文 : Default is true; mostly used by FT MP to change default.">デフォルトは<code>true</code>で、ほとんどがデフォルトを変更するためにFT MPで使用されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.309fiz.2"  title="原文: name"><code>name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.17"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2yMpYC"  title="原文: Retry-"><code>Retry-</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2Bdgu7.2" title="原文 : A name assigned for debugging, error reporting or configuration purposes.">デバッグ、エラー・レポートまたは構成の目的に割り当てられた名前。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Dw0Su"  title="原文: overall-timeout"><code>overall-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.1"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2MQRtH"  title="原文: PT1S"><code>PT1S</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1yZDm.spl1" title="原文 : Overall timeout.">全タイムアウト。</span> <span class="merged" id="all.1yZDm.spl2" title="原文 : When overall timeout is reached, execution terminates (even if the retry policy was not exhausted).">全体のタイムアウトに達すると、実行は終了します(再試行ポリシーが使い果たされていない場合でも)。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2aY4eh"  title="原文: retry-policy"><code>retry-policy</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2H6AOi" title="原文 : io.helidon.faulttolerance.Retry.RetryPolicy (service provider interface)">io.helidon.faulttolerance.Retry.RetryPolicy (サービス・プロバイダ・インタフェース)</span></p>

<p><span class="merged" id="all.ETeZ4"  title="原文:: Such as:">これには次のようなものがあります。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2YBebj" title="原文 : DelayingRetryPolicy"><router-link to="/config/io_helidon_faulttolerance_Retry_DelayingRetryPolicy">DelayingRetryPolicy</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.344Ylh" title="原文 : JitterRetryPolicy"><router-link to="/config/io_helidon_faulttolerance_Retry_JitterRetryPolicy">JitterRetryPolicy</router-link></span></p>

</li>
</ul>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1MOJht.spl1" title="原文 : Configure a retry policy to use to calculate delays between retries.">再試行間の遅延の計算に使用する再試行ポリシーを構成します。</span> <span class="merged" id="all.1MOJht.spl2" title="原文 : Defaults to a io.helidon.faulttolerance.Retry.JitterRetryPolicy with 4 calls (initial call + 3 retries), delay of 200 millis and a jitter of 50 millis.">デフォルトは、4コール(初期コール+3再試行)、200ミリの遅延および50ミリのジッタがあるio.helidon.faulttolerance.Retry.JitterRetryPolicyです。</span> </p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
