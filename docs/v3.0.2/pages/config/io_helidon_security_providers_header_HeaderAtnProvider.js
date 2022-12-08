<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1foLni" title="原文 : HeaderAtnProvider (security.providers.header) Configuration">HeaderAtnProvider (security.providers.header)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1t6zQD" title="原文 : Security provider that extracts a username (or service name) from a header.">ヘッダーからユーザー名(またはサービス名)を抽出するセキュリティ・プロバイダ。</span></p>

<p><span class="merged" id="all.48Ozlr" title="原文 : Type: io.helidon.security.providers.header.HeaderAtnProvider">タイプ: <a href="./apidocs/io.helidon.security.providers.header/io/helidon/security/providers/header/HeaderAtnProvider.html" target="_blank">io.helidon.security.providers.header.HeaderAtnProvider</a></span></p>

<markup
lang="text"
title="Config key"
>header-atn</markup>

<p><span class="merged" id="all.31kiUh.4" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.xEHEP.2"  title="原文: io.helidon.security.spi.SecurityProvider"><code>io.helidon.security.spi.SecurityProvider</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2t170n.1"  title="原文: io.helidon.security.spi.AuthenticationProvider"><code>io.helidon.security.spi.AuthenticationProvider</code></span></p>

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


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.37"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.38" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.45"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.45"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.45"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.45"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3zlnZ9.1"  title="原文: atn-token"><code>atn-token</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.XGoC5.1" title="原文 : TokenHandler"><router-link to="/config/io_helidon_security_util_TokenHandler">TokenHandler</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3NoL9T" title="原文 : Token handler to extract username from request.">リクエストからユーザー名を抽出するトークン・ハンドラ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.24OC9j.1"  title="原文: authenticate"><code>authenticate</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.45"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.23"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1KwUDO" title="原文 : Whether to authenticate requests.">リクエストを認証するかどうか。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Zagyj.2"  title="原文: optional"><code>optional</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.46"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.13"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4YdVG5.spl1" title="原文 : Whether authentication is required.">認証が必須かどうか。</span> <span class="merged" id="all.4YdVG5.spl2" title="原文 : By default, request will fail if the username cannot be extracted.">デフォルトでは、ユーザー名を抽出できない場合、リクエストは失敗します。</span> <span class="merged" id="all.4YdVG5.spl3" title="原文 : If set to false, request will process and this provider will abstain.">falseに設定すると、リクエストは処理され、このプロバイダは中断します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.46DWSr.2"  title="原文: outbound"><code>outbound</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2BE0hr.1" title="原文 : OutboundTarget[]"><router-link to="/config/io_helidon_security_providers_common_OutboundTarget">OutboundTarget[]</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2v0hHA" title="原文 : Configure outbound target for identity propagation.">アイデンティティ伝播のアウトバウンド・ターゲットを構成します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.6xOUk"  title="原文: outbound-token"><code>outbound-token</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.XGoC5.2" title="原文 : TokenHandler"><router-link to="/config/io_helidon_security_util_TokenHandler">TokenHandler</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1HgwRF.spl1" title="原文 : Token handler to create outbound headers to propagate identity.">アイデンティティを伝播するアウトバウンド・ヘッダーを作成するトークン・ハンドラ。</span> <span class="merged" id="all.1HgwRF.spl2" title="原文 : If not defined, #atnTokenHandler will be used.">定義されていない場合、#atnTokenHandlerが使用されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4V6kvV.1"  title="原文: principal-type"><code>principal-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4F7kFa" title="原文 : SubjectType (USER, SERVICE)">SubjectType (ユーザー、サービス)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.26725z.1"  title="原文: USER"><code>USER</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ksLfL" title="原文 : Principal type this provider extracts (and also propagates).">このプロバイダが抽出するプリンシパル・タイプ(および伝播)。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3SEgfv.1"  title="原文: propagate"><code>propagate</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.47"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.14"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.138iGd" title="原文 : Whether to propagate identity.">アイデンティティを伝播するかどうか。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
