<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3VIX1N" title="原文 : Resource (common.configurable) Configuration">Resource (common.configurable)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1xjJ3S" title="原文 : Type: io.helidon.common.configurable.Resource">タイプ: <a href="/apidocs/io.helidon.common.configurable/io/helidon/common/configurable/Resource.html" target="_blank">io.helidon.common.configurable.Resource</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.2"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.2" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.2"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.2"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.2"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.2"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4RTh5L"  title="原文: content"><code>content</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1PWT41" title="原文 : Binary content of the resource (base64 encoded).">リソースのバイナリ・コンテンツ(base64エンコード)。</span></p>

<markup>@return binary content</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2rDPxr"  title="原文: content-plain"><code>content-plain</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.1"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1ZGZJb" title="原文 : Plain content of the resource (text).">リソースのプレーン・コンテンツ(テキスト)。</span></p>

<markup>@return plain content</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1iF0uN"  title="原文: description"><code>description</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.2"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2DxfoN" title="原文 : Description of this resource when configured through plain text or binary.">プレーン・テキストまたはバイナリを使用して構成した場合のこのリソースの説明。</span></p>

<markup>@return description</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3acZhn"  title="原文: path"><code>path</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.38biMr"  title="原文:: Path">パス</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3ZW8B6" title="原文 : Resource is located on filesystem.">リソースはファイルシステム上にあります。</span></p>

<markup>@return path of the resource</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.37YgdV"  title="原文: proxy-host"><code>proxy-host</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.3"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2Vp52a" title="原文 : Host of the proxy when using URI.">URI使用時のプロキシのホスト。</span></p>

<markup>@return proxy host</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3687nw"  title="原文: proxy-port"><code>proxy-port</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.1"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1doYAE"  title="原文: 80"><code>80</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.vqtyY" title="原文 : Port of the proxy when using URI.">URI使用時のプロキシのポート。</span></p>

<markup>@return proxy port</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2S2zFI"  title="原文: resource-path"><code>resource-path</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.4"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2QFnk9" title="原文 : Resource is located on classpath.">リソースはクラスパスにあります。</span></p>

<markup>@return classpath location of the resource</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2QKN54"  title="原文: uri"><code>uri</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.LGnjn"  title="原文:: URI">URI</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3ZeBaP" title="原文 : Resource is available on a java.net.URI.">リソースは、java.net.URIで使用できます。</span></p>

<markup>@return of the resource
@see #proxy()
@see #useProxy()</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2CiR6C"  title="原文: use-proxy"><code>use-proxy</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.1"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.216zTu.spl1" title="原文 : Whether to use proxy.">プロキシを使用するかどうか。</span> <span class="merged" id="all.216zTu.spl2" title="原文 : If set to false, proxy will not be used even if configured."><code>false</code>に設定すると、構成されていてもプロキシは使用されません。</span> <span class="merged" id="all.216zTu.spl3" title="原文 : When set to true (default), proxy will be used if configured."><code>true</code> (デフォルト)に設定すると、構成されている場合はプロキシが使用されます。</span> </p>

<markup>@return whether to use proxy if configured</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
