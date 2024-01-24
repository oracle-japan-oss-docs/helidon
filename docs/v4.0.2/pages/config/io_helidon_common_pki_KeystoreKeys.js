<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.rn7hU" title="原文 : KeystoreKeys (common.pki) Configuration">KeystoreKeys (common.pki)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1VMwpM" title="原文 : Type: io.helidon.common.pki.KeystoreKeys">タイプ: <a href="/apidocs/io.helidon.common.pki/io/helidon/common/pki/KeystoreKeys.html" target="_blank">io.helidon.common.pki.KeystoreKeys</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.8"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.1fCXjI" title="原文 : Required configuration options"><span>必要な構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.8"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.8"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.8"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.8"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.24tG0B"  title="原文: resource"><code>resource</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Fhb9P" title="原文 : Keystore resource definition.">キーストア・リソース定義。</span></p>

<markup>@return keystore resource, from file path, classpath, URL etc.</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<div class="block-title"><span class="merged" id="all.271SGn.8" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.9"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.9"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.9"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.9"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.o6Xdz"  title="原文: cert-chain.alias"><code>cert-chain.alias</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.11"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1bXlQE" title="原文 : Alias of an X.509 chain.">X.509チェーンの別名。</span></p>

<markup>@return alias of certificate chain in the keystore</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Lvuz8"  title="原文: cert.alias"><code>cert.alias</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.12"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4QHW1p.spl1" title="原文 : Alias of X.509 certificate of public key.">公開キーのX.509証明書の別名。</span> <span class="merged" id="all.4QHW1p.spl2" title="原文 : Used to load both the certificate and public key.">証明書と公開鍵の両方をロードするために使用されます。</span> </p>

<markup>@return alias under which the certificate is stored in the keystore</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.44SXIm"  title="原文: key.alias"><code>key.alias</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.13"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.ZPZz8" title="原文 : Alias of the private key in the keystore.">キーストアの秘密キーの別名。</span></p>

<markup>@return alias of the key in the keystore</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2XcTrh"  title="原文: key.passphrase"><code>key.passphrase</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.GZzYz"  title="原文:: char[]">char[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4XdnKC.spl1" title="原文 : Pass-phrase of the key in the keystore (used for private keys).">キーストア内の鍵のパスフレーズ(秘密鍵に使用)。</span> <span class="merged" id="all.4XdnKC.spl2" title="原文 : This is (by default) the same as keystore passphrase - only configure if it differs from keystore passphrase.">これは、キーストアのパスフレーズと同じ(デフォルトで)です - キーストアのパスフレーズと異なる場合にのみ構成します。</span> </p>

<markup>@return pass-phrase of the key</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4ECGKw"  title="原文: passphrase"><code>passphrase</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.GZzYz.1"  title="原文:: char[]">char[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2hKlHg" title="原文 : Pass-phrase of the keystore (supported with JKS and PKCS12 keystores).">キーストアのパスフレーズ(JKSおよびPKCS12キーストアでサポート)。</span></p>

<markup>@return keystore password to use</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.39wMcQ"  title="原文: trust-store"><code>trust-store</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.14"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.3"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3ZyCQj" title="原文 : If you want to build a trust store, call this method to add all certificates present in the keystore to certificate list.">トラスト・ストアを構築する場合は、このメソッドをコールして、キーストアに存在するすべての証明書を証明書リストに追加します。</span></p>

<markup>@return whether this is a trust store</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2SYAnU"  title="原文: type"><code>type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.14"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1VFsQa"  title="原文: PKCS12"><code>PKCS12</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1cHZc.spl1" title="原文 : Set type of keystore.">キーストアのタイプを設定します。</span> <span class="merged" id="all.1cHZc.spl2" title="原文 : Defaults to DEFAULT_KEYSTORE_TYPE, expected are other keystore types supported by java then can store keys under aliases.">デフォルトは<code>DEFAULT_KEYSTORE_TYPE</code>で、javaでサポートされている他のキーストア・タイプで、別名の下にキーを格納できます。</span> </p>

<markup>@return keystore type to load the key</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
