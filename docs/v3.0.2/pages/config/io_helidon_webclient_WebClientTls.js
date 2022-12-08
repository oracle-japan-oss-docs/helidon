<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3WUN6B" title="原文 : WebClientTls (webclient) Configuration">WebClientTls (webclient)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2L1VX1" title="原文 : Type: io.helidon.webclient.WebClientTls">タイプ: <a href="./apidocs/io.helidon.webclient/io/helidon/webclient/WebClientTls.html" target="_blank">io.helidon.webclient.WebClientTls</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.58"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.59" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.66"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.66"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.66"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.66"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4PUqA9"  title="原文: client.keystore"><code>client.keystore</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ZY5SK.1" title="原文 : KeyConfig"><router-link to="/config/io_helidon_common_pki_KeyConfig">KeyConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4J0DgN" title="原文 : Client key store which contains client private key and certificate">クライアントの秘密キーと証明書を含むクライアント・キー・ストア</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.46TTgA"  title="原文: server.cipher-suite"><code>server.cipher-suite</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.20"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1DYWiS.spl1" title="原文 : List of allowed ciphers.">許可される暗号のリスト。</span> <span class="merged" id="all.1DYWiS.spl2" title="原文 : If set, replaces those present by default">設定されている場合、デフォルトで存在するものを置き換えます</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.LbLpS"  title="原文: server.disable-hostname-verification"><code>server.disable-hostname-verification</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.92"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.34"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1UkhaT" title="原文 : Whether this client should perform hostname verification">このクライアントがホスト名検証を実行するかどうか</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.17Jn2Z"  title="原文: server.trust-all"><code>server.trust-all</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.93"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.35"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.28GrYL" title="原文 : Whether this client should trust all certificates">このクライアントがすべての証明書をトラストするかどうか</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.vBIl3"  title="原文: server.truststore"><code>server.truststore</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ZY5SK.2" title="原文 : KeyConfig"><router-link to="/config/io_helidon_common_pki_KeyConfig">KeyConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4VdXrl.spl1" title="原文 : Trust store which contains trusted certificates.">トラストできる証明書を含むトラスト・ストア。</span> <span class="merged" id="all.4VdXrl.spl2" title="原文 : If set, replaces those present by default">設定されている場合、デフォルトで存在するものを置き換えます</span> </p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
