<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2ZSqgl" title="原文 : io.opentracing.Tracer Configuration">io.opentracing.Tracer構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3AC9OM" title="原文 : Zipkin tracer configuration">Zipkinトレーサ構成</span></p>

<p><span class="merged" id="all.30kkWx" title="原文 : Type: io.opentracing.Tracer">タイプ: io.opentracing.Tracer</span></p>

<p><span class="merged" id="all.2QFPN.2" title="原文 : This is a standalone configuration type, prefix from configuration root: tracing">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>tracing</code></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.55"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.56" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.63"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.63"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.63"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.63"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.lFQ35"  title="原文: api-version"><code>api-version</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4XHmdW" title="原文 : Version (V1, V2)">バージョン(V1、V2)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2cXfib"  title="原文: V2"><code>V2</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3dRcyx.spl1" title="原文 : Version of Zipkin API to use.">使用するZipkin APIのバージョン。</span> <span class="merged" id="all.3dRcyx.spl2" title="原文 : Defaults to Version#V2.">デフォルトはVersion#V2です。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.41AQbY.3"  title="原文: boolean-tags"><code>boolean-tags</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1c6c4Z.3" title="原文 : Map&lt;string, boolean&gt;">マップ&lt;string, boolean></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Onevj.9" title="原文 : Tracer level tags that get added to all reported spans.">すべてのレポート済スパンに追加されるトレーサ・レベル・タグ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48UcwL.11"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.86"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.46"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1UDpl2.3.spl1" title="原文 : When enabled, tracing will be sent.">有効にすると、トレースが送信されます。</span> <span class="merged" id="all.1UDpl2.3.spl2" title="原文 : If enabled is false, tracing should use a no-op tracer.">有効がfalseの場合、トレースではno-opトレーサを使用する必要があります。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Iof5A.3"  title="原文: global"><code>global</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.87"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.47"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1cswWo.3" title="原文 : When enabled, the created instance is also registered as a global tracer.">有効にすると、作成されたインスタンスはグローバル・トレーサとしても登録されます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2N9hZv.5"  title="原文: host"><code>host</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.159"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3GgJrr.3.spl1" title="原文 : Host to use to connect to tracing collector.">トレース・コレクタへの接続に使用するホスト。</span> <span class="merged" id="all.3GgJrr.3.spl2" title="原文 : Default is defined by each tracing integration.">デフォルトは、各トレース統合によって定義されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4NZGcd.3"  title="原文: int-tags"><code>int-tags</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1wOT4o.3" title="原文 : Map&lt;string, int&gt;">マップ&lt;string, int></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Onevj.10" title="原文 : Tracer level tags that get added to all reported spans.">すべてのレポート済スパンに追加されるトレーサ・レベル・タグ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3acZhn.4"  title="原文: path"><code>path</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.160"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.14knaE.3.spl1" title="原文 : Path on the collector host to use when sending data to tracing collector.">データをトレース・コレクタに送信するときに使用するコレクタ・ホストのパス。</span> <span class="merged" id="all.14knaE.3.spl2" title="原文 : Default is defined by each tracing integration.">デフォルトは、各トレース統合によって定義されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OXzp4.6"  title="原文: port"><code>port</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.26"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.D5fZx.3.spl1" title="原文 : Port to use to connect to tracing collector.">トレース・コレクタに接続するために使用するポート。</span> <span class="merged" id="all.D5fZx.3.spl2" title="原文 : Default is defined by each tracing integration.">デフォルトは、各トレース統合によって定義されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4T3cXD.3"  title="原文: protocol"><code>protocol</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.161"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3ySz9b.3.spl1" title="原文 : Protocol to use (such as http or https) to connect to tracing collector.">トレース・コレクタに接続するために使用するプロトコル(<code>http</code>や<code>https</code>など)。</span> <span class="merged" id="all.3ySz9b.3.spl2" title="原文 : Default is defined by each tracing integration.">デフォルトは、各トレース統合によって定義されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.30hFTR.3"  title="原文: service"><code>service</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.162"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.qgBvz.3" title="原文 : Service name of the traced service.">トレースされたサービスのサービス名。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3WNvqu.5"  title="原文: tags"><code>tags</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1WdJek.5" title="原文 : Map&lt;string, string&gt;">マップ&lt;string, string></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Onevj.11" title="原文 : Tracer level tags that get added to all reported spans.">すべてのレポート済スパンに追加されるトレーサ・レベル・タグ。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
