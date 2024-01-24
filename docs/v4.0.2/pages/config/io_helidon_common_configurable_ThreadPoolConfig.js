<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.4Tk0x2" title="原文 : ThreadPoolSupplier (common.configurable) Configuration">ThreadPoolSupplier (common.configurable)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2Kfocg" title="原文 : Type: io.helidon.common.configurable.ThreadPoolSupplier">タイプ: <a href="/apidocs/io.helidon.common.configurable/io/helidon/common/configurable/ThreadPoolSupplier.html" target="_blank">io.helidon.common.configurable.ThreadPoolSupplier</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.5"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.5" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.5"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.5"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.5"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.5"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3E0woh.2"  title="原文: core-pool-size"><code>core-pool-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.4"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4UFA6L"  title="原文: 10"><code>10</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3fiYJZ.2.spl1" title="原文 : Core pool size of the thread pool executor.">スレッド・プール・エグゼキュータのコア・プール・サイズ。</span> <span class="merged" id="all.3fiYJZ.2.spl2" title="原文 : Defaults to DEFAULT_CORE_POOL_SIZE.">デフォルトは<code>DEFAULT_CORE_POOL_SIZE</code>です。</span> </p>

<markup>@return corePoolSize see java.util.concurrent.ThreadPoolExecutor#getCorePoolSize()</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.vk2H"  title="原文: growth-rate"><code>growth-rate</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.5"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3V9g7Q"  title="原文: 0"><code>0</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2I2SoF.spl1" title="原文 : The percentage of task submissions that should result in adding threads, expressed as a value from 1 to 100.">1から100の値として表される、スレッドを追加することになるタスク送信の割合。</span> <span class="merged" id="all.2I2SoF.spl2" title="原文 : The rate applies only when all of the following are true:">レートは、次のすべてに該当する場合にのみ適用されます:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.EUGYP" title="原文 : the pool size is below the maximum, and">プール・サイズが最大を下回っています</span></p>

</li>
<li>
<p><span class="merged" id="all.zeHpu" title="原文 : there are no idle threads, and">アイドル・スレッドはありません</span></p>

</li>
<li>
<p><span class="merged" id="all.2voMac" title="原文 : the number of tasks in the queue exceeds the growthThreshold">キュー内のタスクの数が<code>growthThreshold</code>を超えています</span></p>

</li>
</ul>

<p><span class="merged" id="all.n0r7W" title="原文 : For example, a rate of 20 means that while these conditions are met one thread will be added for every 5 submitted tasks.">たとえば、レートが20の場合、これらの条件は満たされますが、5つの発行済タスクごとに1つのスレッドが追加されます。</span></p>

<markup>Defaults to `DEFAULT_GROWTH_RATE`</markup>
<markup>@return the growth rate</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2fOGKV"  title="原文: growth-threshold"><code>growth-threshold</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.6"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2MBPS2"  title="原文: 1000"><code>1000</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.Xluby.spl1" title="原文 : The queue size above which pool growth will be considered if the pool is not fixed size.">プールが固定サイズでない場合にプールの増加が考慮されるキュー・サイズ。</span> <span class="merged" id="all.Xluby.spl2" title="原文 : Defaults to DEFAULT_GROWTH_THRESHOLD.">デフォルトは<code>DEFAULT_GROWTH_THRESHOLD</code>です。</span> </p>

<markup>@return the growth threshold</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.41ZKza.2"  title="原文: is-daemon"><code>is-daemon</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.8"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.3"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.X3kHF.2.spl1" title="原文 : Is daemon of the thread pool executor.">スレッド・プール・エグゼキュータのデーモンです。</span> <span class="merged" id="all.X3kHF.2.spl2" title="原文 : Defaults to DEFAULT_IS_DAEMON.">デフォルトは<code>DEFAULT_IS_DAEMON</code>です。</span> </p>

<markup>@return whether the threads are daemon threads</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4cLDv2"  title="原文: keep-alive"><code>keep-alive</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3eALku"  title="原文: PT3M"><code>PT3M</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2eyxHM.spl1" title="原文 : Keep alive of the thread pool executor.">スレッド・プール・エグゼキュータを存続させます。</span> <span class="merged" id="all.2eyxHM.spl2" title="原文 : Defaults to DEFAULT_KEEP_ALIVE.">デフォルトは<code>DEFAULT_KEEP_ALIVE</code>です。</span> </p>

<markup>@return keep alive see java.util.concurrent.ThreadPoolExecutor#getKeepAliveTime(java.util.concurrent.TimeUnit)</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.vhIjV"  title="原文: max-pool-size"><code>max-pool-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.7"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.35l5fR"  title="原文: 50"><code>50</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15cAGK.spl1" title="原文 : Max pool size of the thread pool executor.">スレッド・プール・エグゼキュータの最大プール・サイズ。</span> <span class="merged" id="all.15cAGK.spl2" title="原文 : Defaults to DEFAULT_MAX_POOL_SIZE.">デフォルトは<code>DEFAULT_MAX_POOL_SIZE</code>です。</span> </p>

<markup>@return maxPoolSize see java.util.concurrent.ThreadPoolExecutor#getMaximumPoolSize()</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.309fiz"  title="原文: name"><code>name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.7"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4ew3By" title="原文 : Name of this thread pool executor.">このスレッド・プール・エグゼキュータの名前。</span></p>

<markup>@return the pool name</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2ItSZG"  title="原文: queue-capacity"><code>queue-capacity</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.8"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.280ErD.1"  title="原文: 10000"><code>10000</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.6wztX.spl1" title="原文 : Queue capacity of the thread pool executor.">スレッド・プール・エグゼキュータのキュー容量。</span> <span class="merged" id="all.6wztX.spl2" title="原文 : Defaults to DEFAULT_QUEUE_CAPACITY.">デフォルトは<code>DEFAULT_QUEUE_CAPACITY</code>です。</span> </p>

<markup>@return capacity of the queue backing the executor</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4ekE6w"  title="原文: should-prestart"><code>should-prestart</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.9"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.4"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.BJr8f.2.spl1" title="原文 : Whether to prestart core threads in this thread pool executor.">このスレッド・プール・エグゼキュータでコア・スレッドをリスタートするかどうか。</span> <span class="merged" id="all.BJr8f.2.spl2" title="原文 : Defaults to DEFAULT_PRESTART.">デフォルトは<code>DEFAULT_PRESTART</code>です。</span> </p>

<markup>@return whether to prestart the threads</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3Xwwe9.2"  title="原文: thread-name-prefix"><code>thread-name-prefix</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.8"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.cU31N.2.spl1" title="原文 : Name prefix for threads in this thread pool executor.">このスレッド・プール・エグゼキュータのスレッドの名前プレフィクス。</span> <span class="merged" id="all.cU31N.2.spl2" title="原文 : Defaults to DEFAULT_THREAD_NAME_PREFIX.">デフォルトは<code>DEFAULT_THREAD_NAME_PREFIX</code>です。</span> </p>

<markup>@return prefix of a thread name</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4CuDSU.2"  title="原文: virtual-threads"><code>virtual-threads</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.10"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2AV4B6.2" title="原文 : When configured to true, an unbounded virtual executor service (project Loom) will be used."><code>true</code>に構成すると、バインドされていない仮想エグゼキュータ・サービス(プロジェクト・ルーム)が使用されます。</span></p>

<markup>If enabled, all other configuration options of this executor service are ignored!</markup>
<markup>@return whether to use virtual threads or not, defaults to `false`</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
