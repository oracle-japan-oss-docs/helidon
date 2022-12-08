<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.kVwil" title="原文 : GrpcTlsDescriptor (grpc.core) Configuration">GrpcTlsDescriptor (grpc.core)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1OogWp" title="原文 : Type: io.helidon.grpc.core.GrpcTlsDescriptor">タイプ: <a href="./apidocs/io.helidon.grpc.core/io/helidon/grpc/core/GrpcTlsDescriptor.html" target="_blank">io.helidon.grpc.core.GrpcTlsDescriptor</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.15"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.15" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.16"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.16"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.16"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.16"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.48UcwL"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.13"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.9"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.fx3jQ.spl1" title="原文 : Enable or disable TLS.">TLSを有効または無効にします。</span> <span class="merged" id="all.fx3jQ.spl2" title="原文 : If enabled is false, then the rest of the TLS configuration properties are ignored.">有効がfalseの場合、残りのTLS構成プロパティは無視されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4XneaQ"  title="原文: jdk-ssl"><code>jdk-ssl</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.14"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.4"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1oq2j7" title="原文 : Sets the type of SSL implementation to be used.">使用するSSL実装のタイプを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.V55FM"  title="原文: tls-ca-cert"><code>tls-ca-cert</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.3" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">リソース</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3kg1au" title="原文 : Set the CA (certificate authority) certificate path.">CA (認証局)証明書パスを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.36vT8q"  title="原文: tls-cert"><code>tls-cert</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.4" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">リソース</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1yl1au.spl1" title="原文 : Set the client tlsCert path.">クライアントのtlsCertパスを設定します。</span> <span class="merged" id="all.1yl1au.spl2" title="原文 : Required only if mutual auth is desired.">相互認証が必要な場合にのみ必要です。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.40cKmH"  title="原文: tls-key"><code>tls-key</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.5" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">リソース</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1Y0LW5.spl1" title="原文 : Set the client private key path.">クライアントの秘密キー・パスを設定します。</span> <span class="merged" id="all.1Y0LW5.spl2" title="原文 : Required only if mutual auth is desired.">相互認証が必要な場合にのみ必要です。</span> </p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
