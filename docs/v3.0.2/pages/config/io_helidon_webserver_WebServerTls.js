<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.38mNI6" title="原文 : WebServerTls (webserver) Configuration">WebServerTls (webserver)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2z5dMO" title="原文 : Type: io.helidon.webserver.WebServerTls">タイプ: <a href="./apidocs/io.helidon.webserver/io/helidon/webserver/WebServerTls.html" target="_blank">io.helidon.webserver.WebServerTls</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.62"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.1fCXjI.5" title="原文 : Required configuration options"><span>必要な構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.71"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.71"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.71"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.71"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3HVwVy"  title="原文: private-key"><code>private-key</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ZY5SK.3" title="原文 : KeyConfig"><router-link to="/config/io_helidon_common_pki_KeyConfig">KeyConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1Dxe3p" title="原文 : Configure private key to use for SSL context.">SSLコンテキストに使用する秘密キーを構成します。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<div class="block-title"><span class="merged" id="all.271SGn.63" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.72"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.72"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.72"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.72"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.yFryw"  title="原文: cipher-suite"><code>cipher-suite</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.21"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1ImMQU.spl1" title="原文 : Set allowed cipher suite.">許可される暗号スイートを設定します。</span> <span class="merged" id="all.1ImMQU.spl2" title="原文 : If an empty collection is set, an exception is thrown since it is required to support at least some ciphers.">空のコレクションが設定されている場合、少なくとも一部の暗号をサポートする必要があるため、例外がスローされます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Zwkgn"  title="原文: client-auth"><code>client-auth</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3uTQuQ" title="原文 : ClientAuthentication (REQUIRE, OPTIONAL, NONE)">ClientAuthentication (必須、オプション、なし)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2Qehz5"  title="原文: none"><code>none</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2CTK3J" title="原文 : Configures whether client authentication will be required or not.">クライアント認証が必要かどうかを構成します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48UcwL.12"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.98"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.48"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2FntKK" title="原文 : Can be used to disable TLS even if keys are configured.">キーが構成されている場合でもTLSを無効にできます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1xMi9h"  title="原文: session-cache-size"><code>session-cache-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.28"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3PC4d" title="原文 : Set the size of the cache used for storing SSL session objects. 0 to use the default value.">SSLセッション・オブジェクトの格納に使用されるキャッシュのサイズを設定します。デフォルト値を使用するには、<code>0</code>を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.cqnGh"  title="原文: session-timeout-seconds"><code>session-timeout-seconds</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.29"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3JLKYD" title="原文 : Set the timeout for the cached SSL session objects, in seconds. 0 to use the default value.">キャッシュされたSSLセッション・オブジェクトのタイムアウトを秒単位で設定します。デフォルト値を使用するには、<code>0</code>を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1m7hUC"  title="原文: trust"><code>trust</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ZY5SK.4" title="原文 : KeyConfig"><router-link to="/config/io_helidon_common_pki_KeyConfig">KeyConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1CjG5T" title="原文 : Set the trust key configuration to be used to validate certificates.">証明書のバリデートに使用するトラスト・キー構成を設定します。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
