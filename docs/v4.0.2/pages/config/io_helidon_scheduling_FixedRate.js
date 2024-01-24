<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3bbEsR" title="原文 : FixedRate (scheduling) Configuration">FixedRate (scheduling)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.kIQL3" title="原文 : Type: io.helidon.scheduling.FixedRate">タイプ: <a href="/apidocs/io.helidon.scheduling/io/helidon/scheduling/FixedRate.html" target="_blank">io.helidon.scheduling.FixedRate</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.39"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.1fCXjI.2" title="原文 : Required configuration options"><span>必要な構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.41"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.41"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.41"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.41"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.lGKge.3"  title="原文: delay"><code>delay</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.4"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3Fj2e1.spl1" title="原文 : Fixed rate delay between each invocation.">各呼出し間の固定レート遅延。</span> <span class="merged" id="all.3Fj2e1.spl2" title="原文 : Time unit is by default java.util.concurrent.TimeUnit#SECONDS, can be specified with io.helidon.scheduling.Scheduling.FixedRateBuilder#timeUnit(java.util.concurrent.TimeUnit).">時間単位は、デフォルトではjava.util.concurrent.TimeUnit#SECONDSで、io.helidon.scheduling.Scheduling.FixedRateBuilder#timeUnit(java.util.concurrent.TimeUnit)で指定できます。</span> </p>

<markup>@return delay between each invocation</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<div class="block-title"><span class="merged" id="all.271SGn.38" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.42"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.42"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.42"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.42"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.DEUw2"  title="原文: delay-type"><code>delay-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.165MJP" title="原文 : DelayType (SINCE_PREVIOUS_START, SINCE_PREVIOUS_END)">DelayType (SINCE_PREVIOUS_START, SINCE_PREVIOUS_END)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2v39hN"  title="原文: @io.helidon.scheduling.FixedRate.DelayType@.SINCE_PREVIOUS_START"><code>@io.helidon.scheduling.FixedRate.DelayType@.SINCE_PREVIOUS_START</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2gIoHu.spl1" title="原文 : Configure whether the delay between the invocations should be calculated from the time when previous task started or ended.">前のタスクが開始または終了した時点から呼出し間の遅延を計算するかどうかを構成します。</span> <span class="merged" id="all.2gIoHu.spl2" title="原文 : Delay type is by default FixedRate.DelayType#SINCE_PREVIOUS_START.">遅延タイプは、デフォルトではFixedRate.DelayType#SINCE_PREVIOUS_STARTです。</span> </p>

<markup>@return delay type</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.QiGde.1"  title="原文: initial-delay"><code>initial-delay</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.5"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3V9g7Q.2"  title="原文: 0"><code>0</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.Yo3p.spl1" title="原文 : Initial delay of the first invocation.">最初の呼出しの初期遅延。</span> <span class="merged" id="all.Yo3p.spl2" title="原文 : Time unit is by default java.util.concurrent.TimeUnit#SECONDS, can be specified with io.helidon.scheduling.Scheduling.FixedRateBuilder#timeUnit(java.util.concurrent.TimeUnit) timeUnit().">時間単位は、デフォルトではjava.util.concurrent.TimeUnit#SECONDSで、io.helidon.scheduling.Scheduling.FixedRateBuilder#timeUnit(java.util.concurrent.TimeUnit) timeUnit()で指定できます。</span> </p>

<markup>@return initial delay value</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1qqzP6"  title="原文: time-unit"><code>time-unit</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3W667G.1" title="原文 : TimeUnit (NANOSECONDS, MICROSECONDS, MILLISECONDS, SECONDS, MINUTES, HOURS, DAYS)">TimeUnit (NANOSECONDS, MICROSECONDS, MILLISECONDS, SECONDS, MINUTES, HOURS, DAYS)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.28SLKm.1"  title="原文: TimeUnit.SECONDS"><code>TimeUnit.SECONDS</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2t6SVm" title="原文 : java.util.concurrent.TimeUnit TimeUnit used for interpretation of values provided with io.helidon.scheduling.Scheduling.FixedRateBuilder#delay(long) and io.helidon.scheduling.Scheduling.FixedRateBuilder#initialDelay(long).">java.util.concurrent.TimeUnit TimeUnitは、io.helidon.scheduling.Scheduling.FixedRateBuilder#delay(long)およびio.helidon.scheduling.Scheduling.FixedRateBuilder#initialDelay(long)で提供される値の解釈に使用されます。</span></p>

<markup>@return time unit for interpreting values
        in io.helidon.scheduling.Scheduling.FixedRateBuilder#delay(long)
        and io.helidon.scheduling.Scheduling.FixedRateBuilder#initialDelay(long)</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
