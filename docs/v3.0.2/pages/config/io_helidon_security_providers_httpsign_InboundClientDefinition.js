<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.nfQsL" title="原文 : InboundClientDefinition (security.providers.httpsign) Configuration">InboundClientDefinition (security.providers.httpsign)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1sXmfZ" title="原文 : Type: io.helidon.security.providers.httpsign.InboundClientDefinition">タイプ: <a href="./apidocs/io.helidon.security.providers.httpsign/io/helidon/security/providers/httpsign/InboundClientDefinition.html" target="_blank">io.helidon.security.providers.httpsign.InboundClientDefinition</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.42"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.43" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.50"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.50"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.50"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.50"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2ZmMkv.1"  title="原文: algorithm"><code>algorithm</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.98"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3y91mV.spl1" title="原文 : Algorithm of signature used by this client.">このクライアントによって使用されるシグネチャのアルゴリズム。</span> <span class="merged" id="all.3y91mV.spl2" title="原文 : Currently supported:">現在サポートされています:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4THozh" title="原文 : rsa-sha256 - asymmetric based on public/private keys">rsa-sha256 - 公開鍵/秘密鍵に基づく非対称性</span></p>

</li>
<li>
<p><span class="merged" id="all.3IHg0B" title="原文 : hmac-sha256 - symmetric based on a shared secret">hmac-sha256 - 共有シークレットに基づく対称</span></p>

</li>
</ul>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4PsYcG"  title="原文: hmac.secret"><code>hmac.secret</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.99"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4L2Ip0.spl1" title="原文 : Helper method to configure a password-like secret (instead of byte based #hmacSecret(byte[]).">(バイト・ベースの#hmacSecret(byte[])ではなく)パスワードのようなシークレットを構成するヘルパー・メソッド。</span> <span class="merged" id="all.4L2Ip0.spl2" title="原文 : The password is transformed to bytes with StandardCharsets#UTF_8 charset.">パスワードは、StandardCharsets#UTF_8文字セットを使用してバイトに変換されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1552Lm"  title="原文: key-id"><code>key-id</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.100"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1QaIjF" title="原文 : The key id of this client to map to this signature validation configuration.">このシグネチャ・バリデーション構成にマップするこのクライアントのキーID。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3oinA0"  title="原文: principal-name"><code>principal-name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.101"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1ggWLx" title="原文 : The principal name of the client, defaults to keyId if not configured.">クライアントのプリンシパル名。構成されていない場合、デフォルトでkeyIdに設定されます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4V6kvV.4"  title="原文: principal-type"><code>principal-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4F7kFa.3" title="原文 : SubjectType (USER, SERVICE)">SubjectType (ユーザー、サービス)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.23B7v0"  title="原文: SERVICE"><code>SERVICE</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.bXF9T" title="原文 : The type of principal we have authenticated (either user or service, defaults to service).">認証したプリンシパルのタイプ(ユーザーまたはサービス、デフォルトでサービス)。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1XINsk"  title="原文: public-key"><code>public-key</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ZY5SK" title="原文 : KeyConfig"><router-link to="/config/io_helidon_common_pki_KeyConfig">KeyConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.28Ih51" title="原文 : For algorithms based on public/private key (such as rsa-sha256), this provides access to the public key of the client.">公開鍵/非公開鍵(rsa-sha256など)に基づくアルゴリズムの場合、これはクライアントの公開鍵へのアクセスを提供します。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
