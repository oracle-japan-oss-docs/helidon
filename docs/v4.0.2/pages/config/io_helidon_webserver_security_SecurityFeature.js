<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.kPf2J" title="原文 : SecurityFeature (webserver.security) Configuration">SecurityFeature (webserver.security)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3LdfXe" title="原文 : Type: io.helidon.webserver.security.SecurityFeature">タイプ: <a href="/apidocs/io.helidon.webserver.security/io/helidon/webserver/security/SecurityFeature.html" target="_blank">io.helidon.webserver.security.SecurityFeature</a></span></p>

<markup
lang="text"
title="Config key"
>security</markup>

<p><span class="merged" id="all.31kiUh.25" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1upsag.6"  title="原文: io.helidon.webserver.spi.ServerFeatureProvider"><code>io.helidon.webserver.spi.ServerFeatureProvider</code></span></p>

</li>
</ul>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.99"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.94" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.101"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.101"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.101"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.101"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.Vtcak"  title="原文: defaults"><code>defaults</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.43LTgG" title="原文 : SecurityHandler"><router-link to="/config/io_helidon_webserver_security_SecurityHandler">SecurityHandler</router-link></span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2QFuMf"  title="原文: SecurityHandler.create()"><code>SecurityHandler.create()</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.47CrkJ" title="原文 : The default security handler.">デフォルト・セキュリティ・ハンドラ。</span></p>

<markup>@return security handler defaults</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2v5SbC.1"  title="原文: paths"><code>paths</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.Gns2b" title="原文 : PathsConfig[]"><router-link to="/config/io_helidon_webserver_security_PathsConfig">PathsConfig[]</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4EDT7T" title="原文 : Configuration for webserver paths.">webサーバー・パスの構成。</span></p>

<markup>@return path configuration</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2d2KCa"  title="原文: security"><code>security</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4I6tjC" title="原文 : Security"><router-link to="/config/io_helidon_security_Security">Security</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4bFBtO.spl1" title="原文 : Security associated with this feature.">この機能に関連付けられたセキュリティ。</span> <span class="merged" id="all.4bFBtO.spl2" title="原文 : If not specified here, the feature uses security registered with io.helidon.common.context.Contexts#globalContext(), if not found, it creates a new instance from root of configuration (using security key).">ここで指定しない場合、この機能はio.helidon.common.context.Contexts#globalContext()に登録されているセキュリティを使用します(見つからない場合は、構成のルートから(<code>security</code>キーを使用して)新しいインスタンスを作成します)。</span> </p>

<markup>This configuration allows usage of a different security instance for a specific security feature setup.</markup>
<markup>@return security instance to be used to handle security in this feature configuration</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1d5M0z.7"  title="原文: weight"><code>weight</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.40Xztn.8"  title="原文:: double">double</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2b7wQT"  title="原文: 800.0"><code>800.0</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3RN4WU.spl1" title="原文 : Weight of the security feature.">セキュリティ機能の重み。</span> <span class="merged" id="all.3RN4WU.spl2" title="原文 : Value is: io.helidon.webserver.security.SecurityFeature#WEIGHT.">値は: <code>io.helidon.webserver.security.SecurityFeature#WEIGHT</code>。</span> </p>

<markup>@return weight of the feature</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
