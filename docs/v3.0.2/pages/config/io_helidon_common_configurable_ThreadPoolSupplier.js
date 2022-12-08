<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.4Tk0x2" title="原文 : ThreadPoolSupplier (common.configurable) Configuration">ThreadPoolSupplier (common.configurable)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2bLyUo" title="原文 : Type: io.helidon.common.configurable.ThreadPoolSupplier">タイプ: <a href="./apidocs/io.helidon.common.configurable/io/helidon/common/configurable/ThreadPoolSupplier.html" target="_blank">io.helidon.common.configurable.ThreadPoolSupplier</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.3"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.3" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.3"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.3"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.3"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.3"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3E0woh.1"  title="原文: core-pool-size"><code>core-pool-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.3"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4UFA6L"  title="原文: 10"><code>10</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.40bmfE.1" title="原文 : Core pool size of the thread pool executor.">スレッド・プール・エグゼキュータのコア・プール・サイズ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.41ZKza.1"  title="原文: is-daemon"><code>is-daemon</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.3"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.3"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.qgX6G.1" title="原文 : Is daemon of the thread pool executor.">スレッド・プール・エグゼキュータのデーモンです。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Nscmh"  title="原文: keep-alive-minutes"><code>keep-alive-minutes</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.4"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.uYIZj"  title="原文: 3"><code>3</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3RiswG" title="原文 : Keep alive minutes of the thread pool executor.">スレッド・プール・エグゼキュータの稼働時間を数分間保持します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.vhIjV"  title="原文: max-pool-size"><code>max-pool-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.5"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.35l5fR"  title="原文: 50"><code>50</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.17dyyQ" title="原文 : Max pool size of the thread pool executor.">スレッド・プール・エグゼキュータの最大プール・サイズ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2ItSZG"  title="原文: queue-capacity"><code>queue-capacity</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.6"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.280ErD.1"  title="原文: 10000"><code>10000</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3jtMt4" title="原文 : Queue capacity of the thread pool executor.">スレッド・プール・エグゼキュータのキュー容量。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4ekE6w.1"  title="原文: should-prestart"><code>should-prestart</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.4"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.4"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1EWU0t.1" title="原文 : Whether to prestart core threads in this thread pool executor.">このスレッド・プール・エグゼキュータでコア・スレッドをリスタートするかどうか。</span></p>

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
<p><span class="merged" id="all.464OKE.1" title="原文 : Name prefix for threads in this thread pool executor.">このスレッド・プール・エグゼキュータのスレッドの名前プレフィクス。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.23npqh"  title="原文: virtual-enforced"><code>virtual-enforced</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.5"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3GvOO2" title="原文 : Experimental When configured to true, virtual thread executor service must be available, otherwise the built executor would fail to start."><strong>「試験段階」</strong> <code>true</code>に構成されている場合、仮想スレッド・エグゼキュータ・サービスが使用可能である必要があります。使用できない場合、組込みエグゼキュータの起動に失敗します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4CuDSU"  title="原文: virtual-threads"><code>virtual-threads</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.6"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.1"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.sNq6H.spl1" title="原文 : Experimental When configured to true, an unbounded virtual executor service (project Loom) will be used if available."><strong>「試験段階」</strong> <code>true</code>に構成すると、バインドされていない仮想エグゼキュータ・サービス(プロジェクト・ルーム)が使用できるようになります(使用可能な場合)。</span> <span class="merged" id="all.sNq6H.spl2"  title="原文:: This is an experimental feature.">これはテスト用の機能です</span> </p>

<markup>If enabled and available, all other configuration options of this executor service are ignored!</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
