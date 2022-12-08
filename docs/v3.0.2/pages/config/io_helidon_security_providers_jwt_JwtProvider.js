<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1Hro24" title="原文 : JwtProvider (security.providers.jwt) Configuration">JwtProvider (security.providers.jwt)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.4NSKji" title="原文 : JWT authentication provider">JWT認証プロバイダ</span></p>

<p><span class="merged" id="all.3mAzAF" title="原文 : Type: io.helidon.security.providers.jwt.JwtProvider">タイプ: <a href="./apidocs/io.helidon.security.providers.jwt/io/helidon/security/providers/jwt/JwtProvider.html" target="_blank">io.helidon.security.providers.jwt.JwtProvider</a></span></p>

<markup
lang="text"
title="Config key"
>jwt</markup>

<p><span class="merged" id="all.31kiUh.10" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.xEHEP.7"  title="原文: io.helidon.security.spi.SecurityProvider"><code>io.helidon.security.spi.SecurityProvider</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2t170n.5"  title="原文: io.helidon.security.spi.AuthenticationProvider"><code>io.helidon.security.spi.AuthenticationProvider</code></span></p>

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


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.46"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.47" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.54"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.54"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.54"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.54"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.33lhdA"  title="原文: allow-impersonation"><code>allow-impersonation</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.52"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.18"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2QwGax.spl1" title="原文 : Whether to allow impersonation by explicitly overriding username from outbound requests using #EP_PROPERTY_OUTBOUND_USER property.">#EP_PROPERTY_OUTBOUND_USERプロパティを使用してアウトバウンド・リクエストからユーザー名を明示的にオーバーライドすることによって偽装を許可するかどうか。</span> <span class="merged" id="all.2QwGax.spl2" title="原文 : By default this is not allowed and identity can only be propagated.">デフォルトでは、これは許可されず、アイデンティティのみを伝播できます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2XHgJT"  title="原文: allow-unsigned"><code>allow-unsigned</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.53"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.19"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4cu4dz.spl1" title="原文 : Configure support for unsigned JWT.">署名されていないJWTのサポートを構成します。</span> <span class="merged" id="all.4cu4dz.spl2" title="原文 : If this is set to true any JWT that has algorithm set to none and no kid defined will be accepted.">これが<code>true</code>に設定されている場合、アルゴリズムが<code>none</code>に設定され、<code>kid</code>が定義されていないJWTは受け入れられます。</span> <span class="merged" id="all.4cu4dz.spl3" title="原文 : Note that this has serious security impact - if JWT can be sent from a third party, this allows the third party to send ANY JWT and it would be accpted as valid.">これは重大なセキュリティの影響があることに注意してください - JWTをサード・パーティから送信できる場合、これによってサード・パーティは任意のJWTを送信でき、そのJWTは有効なものとして計上されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.y0cAd.1"  title="原文: atn-token.handler"><code>atn-token.handler</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.XGoC5.5" title="原文 : TokenHandler"><router-link to="/config/io_helidon_security_util_TokenHandler">TokenHandler</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3NoL9T.1" title="原文 : Token handler to extract username from request.">リクエストからユーザー名を抽出するトークン・ハンドラ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4QJKdb"  title="原文: atn-token.jwk.resource"><code>atn-token.jwk.resource</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.6" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">リソース</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ysZpH" title="原文 : JWK resource used to verify JWTs created by other parties.">他のパーティによって作成されたJWTの検証に使用されるJWKリソース。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2cNZqK.1"  title="原文: atn-token.jwt-audience"><code>atn-token.jwt-audience</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.105"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1x0Gw7" title="原文 : Audience expected in inbound JWTs.">インバウンドJWTに必要なオーディエンスです。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1RN5FE.1"  title="原文: atn-token.verify-signature"><code>atn-token.verify-signature</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.54"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.25"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.39O0BA.spl1" title="原文 : Configure whether to verify signatures.">シグネチャを検証するかどうかを構成します。</span> <span class="merged" id="all.39O0BA.spl2" title="原文 : Signatures verification is enabled by default.">シグネチャの検証はデフォルトで有効になっています。</span> <span class="merged" id="all.39O0BA.spl3" title="原文 : You can configure the provider not to verify signatures.">シグネチャを検証しないようにプロバイダを構成できます。</span> </p>

<markup>&lt;b&gt;Make sure your service is properly secured on network level and only
accessible from a secure endpoint that provides the JWTs when signature verification
is disabled. If signature verification is disabled, this service will accept &lt;i&gt;ANY&lt;/i&gt; JWT&lt;/b&gt;</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.24OC9j.2"  title="原文: authenticate"><code>authenticate</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.55"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.26"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1KwUDO.1" title="原文 : Whether to authenticate requests.">リクエストを認証するかどうか。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Zagyj.6"  title="原文: optional"><code>optional</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.56"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.20"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4YdVG5.1.spl1" title="原文 : Whether authentication is required.">認証が必須かどうか。</span> <span class="merged" id="all.4YdVG5.1.spl2" title="原文 : By default, request will fail if the username cannot be extracted.">デフォルトでは、ユーザー名を抽出できない場合、リクエストは失敗します。</span> <span class="merged" id="all.4YdVG5.1.spl3" title="原文 : If set to false, request will process and this provider will abstain.">falseに設定すると、リクエストは処理され、このプロバイダは中断します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4V6kvV.5"  title="原文: principal-type"><code>principal-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4F7kFa.4" title="原文 : SubjectType (USER, SERVICE)">SubjectType (ユーザー、サービス)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.26725z.6"  title="原文: USER"><code>USER</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ksLfL.3" title="原文 : Principal type this provider extracts (and also propagates).">このプロバイダが抽出するプリンシパル・タイプ(および伝播)。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3SEgfv.2"  title="原文: propagate"><code>propagate</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.57"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.27"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.138iGd.1" title="原文 : Whether to propagate identity.">アイデンティティを伝播するかどうか。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.21Q9we.1"  title="原文: sign-token"><code>sign-token</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4bsOHT.2" title="原文 : OutboundConfig"><router-link to="/config/io_helidon_security_providers_common_OutboundConfig">OutboundConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.n8gco" title="原文 : Configuration of outbound rules.">アウトバウンド・ルールの構成。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.xtSaw"  title="原文: sign-token.jwk.resource"><code>sign-token.jwk.resource</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.7" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">リソース</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2Yp4lz" title="原文 : JWK resource used to sign JWTs created by us.">作成されたJWTの署名に使用されるJWKリソース。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1jxKXY.1"  title="原文: sign-token.jwt-issuer"><code>sign-token.jwt-issuer</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.106"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1LV6Qd" title="原文 : Issuer used to create new JWTs.">新規JWTの作成に使用される発行者。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.22WMEh"  title="原文: use-jwt-groups"><code>use-jwt-groups</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.58"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.28"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.UUSmh" title="原文 : Claim groups from JWT will be used to automatically add groups to current subject (may be used with jakarta.annotation.security.RolesAllowed annotation).">JWTからの請求<code>groups</code>は、現在のサブジェクトにグループを自動的に追加するために使用されます(jakarta.annotation.security.RolesAllowed注釈とともに使用できます)。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
