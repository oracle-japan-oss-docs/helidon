<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1ZwuyN" title="原文 : HeadersConfig (security.providers.httpsign.SignedHeadersConfig) Configuration">HeadersConfig (security.providers.httpsign.SignedHeadersConfig)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2GcF8t" title="原文 : Type: io.helidon.security.providers.httpsign.SignedHeadersConfig.HeadersConfig">タイプ: <a href="./apidocs/io.helidon.security.providers.httpsign.SignedHeadersConfig/io/helidon/security/providers/httpsign/SignedHeadersConfig/HeadersConfig.html" target="_blank">io.helidon.security.providers.httpsign.SignedHeadersConfig.HeadersConfig</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.43"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.44" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.51"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.51"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.51"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.51"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2eGKxm"  title="原文: always"><code>always</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.17"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1wx3Mb" title="原文 : Headers that must be signed (and signature validation or creation should fail if not signed or present)">シグネチャが必要なヘッダー(およびシグネチャがないか、存在しない場合、シグネチャ・バリデーションまたは作成に失敗)</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.36NfB1"  title="原文: if-present"><code>if-present</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.18"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1EXuP" title="原文 : Headers that must be signed if present in request.">リクエストに存在する場合は署名する必要があるヘッダー。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1gN38U"  title="原文: method"><code>method</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.102"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1z2Ic.spl1" title="原文 : HTTP method this header configuration is bound to.">このヘッダー構成がバインドされているHTTPメソッド。</span> <span class="merged" id="all.1z2Ic.spl2" title="原文 : If not present, it is considered default header configuration.">存在しない場合は、デフォルトのヘッダー構成とみなされます。</span> </p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
