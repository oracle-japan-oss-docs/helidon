<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.70hKp.1" title="原文 : ScheduledThreadPoolSupplier (common.configurable) Configuration">ScheduledThreadPoolSupplier (common.configurable)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1AkwF4.1" title="原文 : Type: io.helidon.common.configurable.ScheduledThreadPoolSupplier">タイプ: <a href="/apidocs/io.helidon.common.configurable/io/helidon/common/configurable/ScheduledThreadPoolSupplier.html" target="_blank">io.helidon.common.configurable.ScheduledThreadPoolSupplier</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.4"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.4" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.4"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.4"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.4"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.4"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3E0woh.1"  title="原文: core-pool-size"><code>core-pool-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.3"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.wKiYo.1"  title="原文: 16"><code>16</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3fiYJZ.1.spl1" title="原文 : Core pool size of the thread pool executor.">スレッド・プール・エグゼキュータのコア・プール・サイズ。</span> <span class="merged" id="all.3fiYJZ.1.spl2" title="原文 : Defaults to DEFAULT_CORE_POOL_SIZE.">デフォルトは<code>DEFAULT_CORE_POOL_SIZE</code>です。</span> </p>

<markup>@return corePoolSize see java.util.concurrent.ThreadPoolExecutor#getCorePoolSize()</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.41ZKza.1"  title="原文: is-daemon"><code>is-daemon</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.5"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.2"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.X3kHF.1.spl1" title="原文 : Is daemon of the thread pool executor.">スレッド・プール・エグゼキュータのデーモンです。</span> <span class="merged" id="all.X3kHF.1.spl2" title="原文 : Defaults to DEFAULT_IS_DAEMON.">デフォルトは<code>DEFAULT_IS_DAEMON</code>です。</span> </p>

<markup>@return whether the threads are daemon threads</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3XLfmi.1"  title="原文: prestart"><code>prestart</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.6"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.2"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.BJr8f.1.spl1" title="原文 : Whether to prestart core threads in this thread pool executor.">このスレッド・プール・エグゼキュータでコア・スレッドをリスタートするかどうか。</span> <span class="merged" id="all.BJr8f.1.spl2" title="原文 : Defaults to DEFAULT_PRESTART.">デフォルトは<code>DEFAULT_PRESTART</code>です。</span> </p>

<markup>@return whether to prestart the threads</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3Xwwe9.1"  title="原文: thread-name-prefix"><code>thread-name-prefix</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.6"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2nQ3Ef.1"  title="原文: helidon-"><code>helidon-</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.cU31N.1.spl1" title="原文 : Name prefix for threads in this thread pool executor.">このスレッド・プール・エグゼキュータのスレッドの名前プレフィクス。</span> <span class="merged" id="all.cU31N.1.spl2" title="原文 : Defaults to DEFAULT_THREAD_NAME_PREFIX.">デフォルトは<code>DEFAULT_THREAD_NAME_PREFIX</code>です。</span> </p>

<markup>@return prefix of a thread name</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4CuDSU.1"  title="原文: virtual-threads"><code>virtual-threads</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.7"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2AV4B6.1" title="原文 : When configured to true, an unbounded virtual executor service (project Loom) will be used."><code>true</code>に構成すると、バインドされていない仮想エグゼキュータ・サービス(プロジェクト・ルーム)が使用されます。</span></p>

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
