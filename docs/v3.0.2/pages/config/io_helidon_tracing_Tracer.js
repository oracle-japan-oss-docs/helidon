<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.F8Gb4" title="原文 : Tracer (tracing) Configuration">トレーサ(トレース)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2ssPDD" title="原文 : Jaeger tracer configuration.">Jaegerトレーサの構成。</span></p>

<p><span class="merged" id="all.3Mi88u" title="原文 : Type: io.helidon.tracing.Tracer">タイプ: <a href="./apidocs/io.helidon.tracing/io/helidon/tracing/Tracer.html" target="_blank">io.helidon.tracing.Tracer</a></span></p>

<p><span class="merged" id="all.2QFPN" title="原文 : This is a standalone configuration type, prefix from configuration root: tracing">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>tracing</code></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.52"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.53" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.60"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.60"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.60"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.60"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.41AQbY"  title="原文: boolean-tags"><code>boolean-tags</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1c6c4Z" title="原文 : Map&lt;string, boolean&gt;">マップ&lt;string, boolean></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Onevj" title="原文 : Tracer level tags that get added to all reported spans.">すべてのレポート済スパンに追加されるトレーサ・レベル・タグ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1OA6Nx"  title="原文: client-cert-pem"><code>client-cert-pem</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.12" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">リソース</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4HtnV9" title="原文 : Certificate of client in PEM format.">PEM形式のクライアントの証明書。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48UcwL.8"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.80"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.40"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1UDpl2.spl1" title="原文 : When enabled, tracing will be sent.">有効にすると、トレースが送信されます。</span> <span class="merged" id="all.1UDpl2.spl2" title="原文 : If enabled is false, tracing should use a no-op tracer.">有効がfalseの場合、トレースではno-opトレーサを使用する必要があります。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3JKP4o"  title="原文: exporter-timeout-millis"><code>exporter-timeout-millis</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.8"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.280ErD.5"  title="原文: 10000"><code>10000</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3DyZwu" title="原文 : Timeout of exporter requests.">エクスポート業者リクエストのタイムアウトです。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Iof5A"  title="原文: global"><code>global</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.81"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.41"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1cswWo" title="原文 : When enabled, the created instance is also registered as a global tracer.">有効にすると、作成されたインスタンスはグローバル・トレーサとしても登録されます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2N9hZv.2"  title="原文: host"><code>host</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.147"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3GgJrr.spl1" title="原文 : Host to use to connect to tracing collector.">トレース・コレクタへの接続に使用するホスト。</span> <span class="merged" id="all.3GgJrr.spl2" title="原文 : Default is defined by each tracing integration.">デフォルトは、各トレース統合によって定義されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4NZGcd"  title="原文: int-tags"><code>int-tags</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1wOT4o" title="原文 : Map&lt;string, int&gt;">マップ&lt;string, int></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Onevj.1" title="原文 : Tracer level tags that get added to all reported spans.">すべてのレポート済スパンに追加されるトレーサ・レベル・タグ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3acZhn.1"  title="原文: path"><code>path</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.148"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.14knaE.spl1" title="原文 : Path on the collector host to use when sending data to tracing collector.">データをトレース・コレクタに送信するときに使用するコレクタ・ホストのパス。</span> <span class="merged" id="all.14knaE.spl2" title="原文 : Default is defined by each tracing integration.">デフォルトは、各トレース統合によって定義されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OXzp4.3"  title="原文: port"><code>port</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.23"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.D5fZx.spl1" title="原文 : Port to use to connect to tracing collector.">トレース・コレクタに接続するために使用するポート。</span> <span class="merged" id="all.D5fZx.spl2" title="原文 : Default is defined by each tracing integration.">デフォルトは、各トレース統合によって定義されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4ALScM"  title="原文: private-key-pem"><code>private-key-pem</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.13" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">リソース</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.32EJFE" title="原文 : Private key in PEM format.">PEM形式の秘密キー。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4T3cXD"  title="原文: protocol"><code>protocol</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.149"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3ySz9b.spl1" title="原文 : Protocol to use (such as http or https) to connect to tracing collector.">トレース・コレクタに接続するために使用するプロトコル(<code>http</code>や<code>https</code>など)。</span> <span class="merged" id="all.3ySz9b.spl2" title="原文 : Default is defined by each tracing integration.">デフォルトは、各トレース統合によって定義されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3N9ohQ"  title="原文: sampler-param"><code>sampler-param</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ets8I"  title="原文:: Number">数値</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.27cMqo.2"  title="原文: 1"><code>1</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2sLEd8" title="原文 : The sampler parameter (number).">samplerパラメータ(数値)。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2immXP"  title="原文: sampler-type"><code>sampler-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4YAOnL" title="原文 : SamplerType (CONSTANT, RATIO)">SamplerType (定数、比率)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3JRsgA"  title="原文: CONSTANT"><code>CONSTANT</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3EzQ38" title="原文 : Sampler type.">サンプラのタイプ。</span></p>

<markup>See &lt;a href="https://www.jaegertracing.io/docs/latest/sampling/#client-sampling-configuration"&gt;Sampler types&lt;/a&gt;.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.30hFTR"  title="原文: service"><code>service</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.150"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.qgBvz" title="原文 : Service name of the traced service.">トレースされたサービスのサービス名。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3WNvqu.2"  title="原文: tags"><code>tags</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1WdJek.2" title="原文 : Map&lt;string, string&gt;">マップ&lt;string, string></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Onevj.2" title="原文 : Tracer level tags that get added to all reported spans.">すべてのレポート済スパンに追加されるトレーサ・レベル・タグ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1eW5Cx"  title="原文: trusted-cert-pem"><code>trusted-cert-pem</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.14" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">リソース</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1zWYYy" title="原文 : Trusted certificates in PEM format.">PEM形式のトラストできる証明書。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
