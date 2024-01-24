<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3Pmc8L" title="原文 : Keys (common.pki) Configuration">Keys (common.pki)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.u2Fv3" title="原文 : Type: io.helidon.common.pki.Keys">タイプ: <a href="/apidocs/io.helidon.common.pki/io/helidon/common/pki/Keys.html" target="_blank">io.helidon.common.pki.Keys</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.7"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.7" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.7"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.7"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.7"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.7"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3y5BBq"  title="原文: keystore"><code>keystore</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3JcGn2" title="原文 : KeystoreKeys"><router-link to="/config/io_helidon_common_pki_KeystoreKeys">KeystoreKeys</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4aDfl0.spl1" title="原文 : Configure keys from a keystore.">キーストアからキーを構成します。</span> <span class="merged" id="all.4aDfl0.spl2" title="原文 : Once the config object is built, this option will ALWAYS be empty.">構成オブジェクトが構築されると、このオプションは常に空になります。</span> <span class="merged" id="all.4aDfl0.spl3" title="原文 : All keys from the keystore will be populated to #privateKey(), #publicKey(), #publicCert() etc.">キーストアからのすべてのキーは、#privateKey()、#publicKey()、#publicCert()などに移入されます。</span> </p>

<markup>@return keystore configuration</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.qxQpc"  title="原文: pem"><code>pem</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2dHH5t" title="原文 : PemKeys"><router-link to="/config/io_helidon_common_pki_PemKeys">PemKeys</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4dkNLA.spl1" title="原文 : Configure keys from pem file(s).">pemファイルからキーを構成します。</span> <span class="merged" id="all.4dkNLA.spl2" title="原文 : Once the config object is built, this option will ALWAYS be empty.">構成オブジェクトが構築されると、このオプションは常に空になります。</span> <span class="merged" id="all.4dkNLA.spl3" title="原文 : All keys from the keystore will be populated to #privateKey(), #publicKey(), #publicCert() etc.">キーストアからのすべてのキーは、#privateKey()、#publicKey()、#publicCert()などに移入されます。</span> </p>

<markup>@return pem based definition</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
