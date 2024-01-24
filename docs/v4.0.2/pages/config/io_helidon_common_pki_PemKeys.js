<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1d8OEs" title="原文 : PemKeys (common.pki) Configuration">PemKeys (common.pki)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.4eaO4H" title="原文 : Type: io.helidon.common.pki.PemKeys">タイプ: <a href="/apidocs/io.helidon.common.pki/io/helidon/common/pki/PemKeys.html" target="_blank">io.helidon.common.pki.PemKeys</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.9"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.9" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.10"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.10"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.10"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.10"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.45yO1L"  title="原文: cert-chain.resource"><code>cert-chain.resource</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.1" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2lMqvT" title="原文 : Load certificate chain from PEM resource.">PEMリソースから証明書チェーンをロードします。</span></p>

<markup>@return resource (e.g. classpath, file path, URL etc.)</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1OlzQs"  title="原文: certificates.resource"><code>certificates.resource</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.2" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.NLzaA.spl1" title="原文 : Read one or more certificates in PEM format from a resource definition.">リソース定義から1つ以上の証明書をPEM形式で読み取ります。</span> <span class="merged" id="all.NLzaA.spl2" title="原文 : Used eg: in a trust store.">使用例: トラスト・ストアで。</span> </p>

<markup>@return key resource (file, classpath, URL etc.)</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2XcTrh.1"  title="原文: key.passphrase"><code>key.passphrase</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.GZzYz.2"  title="原文:: char[]">char[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1Ma9cC.spl1" title="原文 : Passphrase for private key.">秘密キーのパスフレーズ。</span> <span class="merged" id="all.1Ma9cC.spl2" title="原文 : If the key is encrypted (and in PEM PKCS#8 format), this passphrase will be used to decrypt it.">鍵が暗号化されている場合(および「PEM PKCS#8」形式の場合)、このパスフレーズはそれを復号化するために使用されます。</span> </p>

<markup>@return passphrase used to encrypt the private key</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.FSQjI"  title="原文: key.resource"><code>key.resource</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.3" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2A3uOv" title="原文 : Read a private key from PEM format from a resource definition.">リソース定義からPEM形式の秘密キーを読み取ります。</span></p>

<markup>@return key resource (file, classpath, URL etc.)</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2KyOjs"  title="原文: public-key.resource"><code>public-key.resource</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.4" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.22OuwY" title="原文 : Read a public key from PEM format from a resource definition.">リソース定義からPEM形式から公開キーを読み取ります。</span></p>

<markup>@return public key resource (file, classpath, URL etc.)</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
