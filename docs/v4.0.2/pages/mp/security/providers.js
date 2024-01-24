<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_implemented_security_providers"><span class="merged" id="all.3uNdHP" title="原文 : Implemented Security Providers">実装されたセキュリティ・プロバイダ</span></h2>
<div class="section">
<p><span class="merged" id="all.2pEZGc" title="原文 : Helidon provides the following security providers for endpoint protection:">Helidonには、エンドポイント保護のために次のセキュリティ・プロバイダが用意されています:</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 25%;">
<col style="width: 16.667%;">
<col style="width: 8.333%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1yHHYo"  title="原文:: Provider">プロバイダ</span></th>
<th><span class="merged" id="all.p0YxL.4"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.1cYUCu" title="原文 : Outbound supported">アウトバウンドのサポート</span></th>
<th><span class="merged" id="all.4JM9z7.27"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1o6Sqz" title="原文 : OIDC Provider"><router-link @click.native="this.scrollFix('#OIDC-Provider')" to="#OIDC-Provider">OIDCプロバイダ</router-link></span></td>
<td class=""><span class="merged" id="all.wpYVJ"  title="原文:: Authentication">認証</span></td>
<td class=""><span class="merged" id="all.5W6W2" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.DFw7y" title="原文 : Open ID Connect supporting JWT, Scopes, Groups and OIDC code flow">JWT、スコープ、グループおよびOIDCコード・フローをサポートするOpen ID Connect</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1UfZL9" title="原文 : HTTP Basic Authentication"><router-link @click.native="this.scrollFix('#_http_basic_authentication_provider')" to="#_http_basic_authentication_provider">HTTP Basic認証</router-link></span></td>
<td class=""><span class="merged" id="all.wpYVJ.1"  title="原文:: Authentication">認証</span></td>
<td class=""><span class="merged" id="all.5W6W2.1" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.1hsi93" title="原文 : HTTP Basic Authentication support">HTTP Basic認証のサポート</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3FPgoh" title="原文 : HTTP Digest Authentication"><router-link @click.native="this.scrollFix('#_http_digest_authentication_provider')" to="#_http_digest_authentication_provider">HTTPダイジェスト認証</router-link></span></td>
<td class=""><span class="merged" id="all.wpYVJ.2"  title="原文:: Authentication">認証</span></td>
<td class=""><span class="merged" id="all.EQUvU"  title="原文: &#128683;">&#128683;</span></td>
<td class=""><span class="merged" id="all.2tlg85" title="原文 : HTTP Digest Authentication support">HTTPダイジェスト認証のサポート</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1cz3Mg" title="原文 : Header Assertion"><router-link @click.native="this.scrollFix('#_header_authentication_provider')" to="#_header_authentication_provider">ヘッダー・アサーション</router-link></span></td>
<td class=""><span class="merged" id="all.wpYVJ.3"  title="原文:: Authentication">認証</span></td>
<td class=""><span class="merged" id="all.5W6W2.2" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.1UNZue" title="原文 : Asserting a user based on a header value">ヘッダー値に基づいたユーザーのアサート</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2TSs7A" title="原文 : HTTP Signatures"><router-link @click.native="this.scrollFix('#_http_signatures_provider')" to="#_http_signatures_provider">HTTPシグネチャ</router-link></span></td>
<td class=""><span class="merged" id="all.wpYVJ.4"  title="原文:: Authentication">認証</span></td>
<td class=""><span class="merged" id="all.5W6W2.3" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.4BD4U" title="原文 : Protecting service to service communication through signatures">シグネチャを介したサービス間通信の保護</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.UwlxB" title="原文 : IDCS Roles"><router-link @click.native="this.scrollFix('#_idcs_role_mapper')" to="#_idcs_role_mapper">IDCSロール</router-link></span></td>
<td class=""><span class="merged" id="all.1bjmEz"  title="原文:: Role Mapping">ロール・マッピング</span></td>
<td class=""><span class="merged" id="all.EQUvU.1"  title="原文: &#128683;">&#128683;</span></td>
<td class=""><span class="merged" id="all.2FJBLT" title="原文 : Retrieves roles from IDCS provider for authenticated user">認証済ユーザーのIDCSプロバイダからロールを取得</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.19PXqz" title="原文 : ABAC Authorization"><router-link @click.native="this.scrollFix('#_abac_provider')" to="#_abac_provider">ABAC認可</router-link></span></td>
<td class=""><span class="merged" id="all.3gIvIg"  title="原文:: Authorization">認可</span></td>
<td class=""><span class="merged" id="all.EQUvU.2"  title="原文: &#128683;">&#128683;</span></td>
<td class=""><span class="merged" id="all.4ELoWx" title="原文 : Attribute based access control authorization policies">属性ベースのアクセス制御認可ポリシー</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.1lzv1g" title="原文 : The following providers are no longer evolved:">次のプロバイダは進化しなくなりました:</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 25%;">
<col style="width: 16.667%;">
<col style="width: 8.333%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1yHHYo.1"  title="原文:: Provider">プロバイダ</span></th>
<th><span class="merged" id="all.p0YxL.5"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.1cYUCu.1" title="原文 : Outbound supported">アウトバウンドのサポート</span></th>
<th><span class="merged" id="all.4JM9z7.28"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1iC3WF" title="原文 : Google Login"><router-link @click.native="this.scrollFix('#_google_login_provider')" to="#_google_login_provider">Googleログイン</router-link></span></td>
<td class=""><span class="merged" id="all.wpYVJ.5"  title="原文:: Authentication">認証</span></td>
<td class=""><span class="merged" id="all.5W6W2.4" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.4P3RKa" title="原文 : Authenticates a token from request against Google servers">Googleサーバーに対するリクエストからのトークンを認証</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2r2fCG" title="原文 : JWT Provider"><router-link @click.native="this.scrollFix('#_jwt_provider')" to="#_jwt_provider">JWTプロバイダ</router-link></span></td>
<td class=""><span class="merged" id="all.wpYVJ.6"  title="原文:: Authentication">認証</span></td>
<td class=""><span class="merged" id="all.5W6W2.5" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.2wuVJ2" title="原文 : JWT tokens passed from frontend">フロントエンドから渡されたJWTトークン</span></td>
</tr>
</tbody>
</table>
</div>


<h3 id="OIDC-Provider"><span class="merged" id="all.33t7Mh" title="原文 : OIDC Provider">OIDCプロバイダ</span></h3>
<div class="section">
<p><span class="merged" id="all.1wfeSk" title="原文 : Open ID Connect security provider.">Open ID Connectセキュリティ・プロバイダ。</span></p>


<h4 id="_setup"><span class="merged" id="all.4BqnSO"  title="原文:: Setup">設定</span></h4>
<div class="section">
<markup
lang="xml"
title="Maven dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-oidc&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.4YC6qf.1" title="原文 : Open ID Connect security provider">Open ID Connectセキュリティ・プロバイダ</span></p>

<p><span class="merged" id="all.4HsETo.1" title="原文 : Type: io.helidon.security.providers.oidc.OidcProvider">タイプ: <a href="/apidocs/io.helidon.security.providers.oidc/io/helidon/security/providers/oidc/OidcProvider.html" target="_blank">io.helidon.security.providers.oidc.OidcProvider</a></span></p>

<markup
lang="text"
title="Config key"
>oidc</markup>

<p><span class="merged" id="all.31kiUh.29" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2t170n.7"  title="原文: io.helidon.security.spi.AuthenticationProvider"><code>io.helidon.security.spi.AuthenticationProvider</code></span></p>

</li>
<li>
<p><span class="merged" id="all.xEHEP.9"  title="原文: io.helidon.security.spi.SecurityProvider"><code>io.helidon.security.spi.SecurityProvider</code></span></p>

</li>
</ul>

</div>


<h4 id="_configuration_options"><span class="merged" id="all.3SKgM1.114"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.108" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.122"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.120"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.123"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.124"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4WSwQo.4"  title="原文: audience"><code>audience</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.261"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1rk5GA.4" title="原文 : Audience of issued tokens.">発行されたトークンのオーディエンス。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2dGFWv.4"  title="原文: authorization-endpoint-uri"><code>authorization-endpoint-uri</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.LGnjn.17"  title="原文:: URI">URI</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4f8bIn.4" title="原文 : URI of an authorization endpoint used to redirect users to for logging-in.">ログイン用にユーザーをリダイレクトするために使用される認可エンドポイントのURI。</span></p>

<markup>If not defined, it is obtained from #oidcMetadata(Resource), if that is not defined
an attempt is made to use #identityUri(URI)/oauth2/v1/authorize.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2yeZYT.4"  title="原文: base-scopes"><code>base-scopes</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.262"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3UG2d9.4"  title="原文: openid"><code>openid</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.491Ej4.4.spl1" title="原文 : Configure base scopes.">ベース・スコープを構成します。</span> <span class="merged" id="all.491Ej4.4.spl2" title="原文 : By default, this is DEFAULT_BASE_SCOPES.">デフォルトでは、これは<code>DEFAULT_BASE_SCOPES</code>です。</span> <span class="merged" id="all.491Ej4.4.spl3" title="原文 : If scope has a qualifier, it must be used here.">スコープに修飾子がある場合は、ここで使用する必要があります。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.36JO30.4"  title="原文: check-audience"><code>check-audience</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.178"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.59"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2EK1u.4" title="原文 : Configure audience claim check.">オーディエンス要求チェックを構成します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.41Kf4l.8"  title="原文: client-id"><code>client-id</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.263"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.7UCCr.4" title="原文 : Client ID as generated by OIDC server.">OIDCサーバーによって生成されたクライアントID。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2ahXIk.4"  title="原文: client-secret"><code>client-secret</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.264"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4JaO38.4.spl1" title="原文 : Client secret as generated by OIDC server.">OIDCサーバーによって生成されたクライアント・シークレット。</span> <span class="merged" id="all.4JaO38.4.spl2" title="原文 : Used to authenticate this application with the server when requesting JWT based on a code.">コードに基づいてJWTをリクエストするときにサーバーでこのアプリケーションを認証するために使用されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.CibQW.4"  title="原文: client-timeout-millis"><code>client-timeout-millis</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.43"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2n7Tym.4"  title="原文: 30000"><code>30000</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3XFAWx.4" title="原文 : Timeout of calls using web client.">webクライアントを使用したコールのタイムアウト。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3w8IzP.2"  title="原文: cookie-domain"><code>cookie-domain</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.265"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1UWDFB.2.spl1" title="原文 : Domain the cookie is valid for.">cookieが有効なドメイン。</span> <span class="merged" id="all.1UWDFB.2.spl2" title="原文 : Not used by default.">デフォルトでは使用されません。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3j6mTC.2"  title="原文: cookie-http-only"><code>cookie-http-only</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.179"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.91"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2pNR0y.2.spl1" title="原文 : When using cookie, if set to true, the HttpOnly attribute will be configured.">Cookieを使用する場合、trueに設定すると、HttpOnly属性が構成されます。</span> <span class="merged" id="all.2pNR0y.2.spl2" title="原文 : Defaults to OidcCookieHandler.Builder#DEFAULT_HTTP_ONLY.">デフォルトは<code>OidcCookieHandler.Builder#DEFAULT_HTTP_ONLY</code>です。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4F9l7D.2"  title="原文: cookie-max-age-seconds"><code>cookie-max-age-seconds</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.31"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1kfOfF.2.spl1" title="原文 : When using cookie, used to set MaxAge attribute of the cookie, defining how long the cookie is valid.">Cookieを使用する場合、CookieのMaxAge属性の設定に使用され、Cookieの有効期間を定義します。</span> <span class="merged" id="all.1kfOfF.2.spl2" title="原文 : Not used by default.">デフォルトでは使用されません。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.18IeUS.2"  title="原文: cookie-name"><code>cookie-name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.266"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4EFbwH.2"  title="原文: JSESSIONID"><code>JSESSIONID</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2TrnC2.2.spl1" title="原文 : Name of the cookie to use.">使用するcookieの名前。</span> <span class="merged" id="all.2TrnC2.2.spl2" title="原文 : Defaults to DEFAULT_COOKIE_NAME.">デフォルトは<code>DEFAULT_COOKIE_NAME</code>です。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.17Sy2N.2"  title="原文: cookie-name-tenant"><code>cookie-name-tenant</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.267"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3u8fdb.2"  title="原文: HELIDON_TENANT"><code>HELIDON_TENANT</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2Wf1SU.2.spl1" title="原文 : The name of the cookie to use for the tenant name.">テナント名に使用するcookieの名前。</span> <span class="merged" id="all.2Wf1SU.2.spl2" title="原文 : Defaults to DEFAULT_TENANT_COOKIE_NAME.">デフォルトは<code>DEFAULT_TENANT_COOKIE_NAME</code>です。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1eF4as.2"  title="原文: cookie-path"><code>cookie-path</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.268"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.UUSmx.2"  title="原文: /"><code>/</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3tAfkz.2.spl1" title="原文 : Path the cookie is valid for.">Cookieが有効なパス。</span> <span class="merged" id="all.3tAfkz.2.spl2" title="原文 : Defaults to &quot;/&quot;.">デフォルトは"/"です。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.V6Z8i.2"  title="原文: cookie-same-site"><code>cookie-same-site</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1ZQKPE.2" title="原文 : SameSite (LAX, STRICT, NONE)">SameSite (LAX、STRICT、NONE)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1Qxz2u.2"  title="原文: LAX"><code>LAX</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.404409.2.spl1" title="原文 : When using cookie, used to set the SameSite cookie value.">Cookieを使用する場合、SameSite cookie値の設定に使用されます。</span> <span class="merged" id="all.404409.2.spl2" title="原文 : Can be &quot;Strict&quot; or &quot;Lax&quot;.">「Strict」または「Lax」を指定できます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4bbWxu.2"  title="原文: cookie-secure"><code>cookie-secure</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.180"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.60"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3QDDpw.2.spl1" title="原文 : When using cookie, if set to true, the Secure attribute will be configured.">Cookieを使用する場合、trueに設定すると、Secure属性が構成されます。</span> <span class="merged" id="all.3QDDpw.2.spl2"  title="原文:: Defaults to false.">デフォルトはfalseです。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3UkeuT.2"  title="原文: cookie-use"><code>cookie-use</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.181"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.92"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.29EziD.2.spl1" title="原文 : Whether to use cookie to store JWT between requests.">cookieを使用してリクエスト間でJWTを格納するかどうか。</span> <span class="merged" id="all.29EziD.2.spl2" title="原文 : Defaults to DEFAULT_COOKIE_USE.">デフォルトは<code>DEFAULT_COOKIE_USE</code>です。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3UsoFV.6"  title="原文: cors"><code>cors</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2cqsnT.8" title="原文 : CrossOriginConfig"><router-link to="/config/io_helidon_cors_CrossOriginConfig">CrossOriginConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2bk3Jg.2" title="原文 : Assign cross-origin resource sharing settings.">クロス・オリジンのリソース共有設定を割り当てます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.MOiXd.2"  title="原文: force-https-redirects"><code>force-https-redirects</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.182"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.61"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3SJ4A4.2.spl1" title="原文 : Force HTTPS for redirects to identity provider.">アイデンティティ・プロバイダへのリダイレクトのためにHTTPSを強制します。</span> <span class="merged" id="all.3SJ4A4.2.spl2"  title="原文:: Defaults to false.">デフォルトは<code>false</code>です。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.8tmrZ.2"  title="原文: frontend-uri"><code>frontend-uri</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.269"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Ip5hd.2.spl1" title="原文 : Full URI of this application that is visible from user browser.">ユーザー・ブラウザから表示されるこのアプリケーションの完全なURI。</span> <span class="merged" id="all.4Ip5hd.2.spl2" title="原文 : Used to redirect request back from identity server after successful login.">ログイン成功後にアイデンティティ・サーバーからリクエストをリダイレクトするために使用されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.216WIR.2"  title="原文: header-token"><code>header-token</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.XGoC5.8" title="原文 : TokenHandler"><router-link to="/config/io_helidon_security_util_TokenHandler">TokenHandler</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2OTnD4.2.spl1" title="原文 : A TokenHandler to process header containing a JWT.">JWTを含むヘッダーを処理するTokenHandler。</span> <span class="merged" id="all.2OTnD4.2.spl2" title="原文 : Default is &quot;Authorization&quot; header with a prefix &quot;bearer &quot;.">デフォルトは、プレフィクス「bearer」の「Authorization」ヘッダーです。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.32UGx6.2"  title="原文: header-use"><code>header-use</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.183"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.93"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3gHfOD.2" title="原文 : Whether to expect JWT in a header field.">ヘッダー・フィールドにJWTが必要かどうか。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1li9qS.4"  title="原文: identity-uri"><code>identity-uri</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.LGnjn.18"  title="原文:: URI">URI</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.fvU3g.4" title="原文 : URI of the identity server, base used to retrieve OIDC metadata.">アイデンティティ・サーバーのURIで、OIDCメタデータの取得に使用されるベースです。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1B7o3g.4"  title="原文: introspect-endpoint-uri"><code>introspect-endpoint-uri</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.LGnjn.19"  title="原文:: URI">URI</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3QwAQI.4.spl1" title="原文 : Endpoint to use to validate JWT.">JWTのバリデートに使用するエンドポイント。</span> <span class="merged" id="all.3QwAQI.4.spl2" title="原文 : Either use this or set #signJwk(JwkKeys) or #signJwk(Resource).">これを使用するか、#signJwk(JwkKeys)または#signJwk(Resource)を設定します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3AHuzZ.4"  title="原文: issuer"><code>issuer</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.270"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2HhI85.4" title="原文 : Issuer of issued tokens.">発行されたトークンの発行者。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4MA6E0.5"  title="原文: max-redirects"><code>max-redirects</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.75"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4XADpA.4"  title="原文: 5"><code>5</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Wqr1N.2" title="原文 : Configure maximal number of redirects when redirecting to an OIDC provider within a single authentication attempt.">1回の認証試行でOIDCプロバイダにリダイレクトするときにリダイレクトの最大数を構成します。</span></p>

<markup>Defaults to `DEFAULT_MAX_REDIRECTS`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1BHaUO.4"  title="原文: oidc-metadata-well-known"><code>oidc-metadata-well-known</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.184"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.94"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1jU9hU.4.spl1" title="原文 : If set to true, metadata will be loaded from default (well known) location, unless it is explicitly defined using oidc-metadata-resource.">trueに設定すると、oidc-metadata-resourceを使用して明示的に定義されていないかぎり、メタデータはデフォルトの(既知の)ロケーションからロードされます。</span> <span class="merged" id="all.1jU9hU.4.spl2" title="原文 : If set to false, it would not be loaded even if oidc-metadata-resource is not defined.">falseに設定すると、oidc-metadata-resourceが定義されていない場合でもロードされません。</span> <span class="merged" id="all.1jU9hU.4.spl3" title="原文 : In such a case all URIs must be explicitly defined (e.g. token-endpoint-uri).">このような場合、すべてのURIを明示的に定義する必要があります(例: token-endpoint-uri)。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3r2hLi.4"  title="原文: oidc-metadata.resource"><code>oidc-metadata.resource</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.25" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2r4soJ.4" title="原文 : Resource configuration for OIDC Metadata containing endpoints to various identity services, as well as information about the identity server.">様々なアイデンティティ・サービスへのエンドポイントおよびアイデンティティ・サーバーに関する情報を含むOIDCメタデータのリソース構成。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Zagyj.9"  title="原文: optional"><code>optional</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.185"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.62"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.9FDbi.1.spl1" title="原文 : Whether authentication is required.">認証が必須かどうか。</span> <span class="merged" id="all.9FDbi.1.spl2" title="原文 : By default, request will fail if the authentication cannot be verified.">デフォルトでは、認証を検証できない場合、リクエストは失敗します。</span> <span class="merged" id="all.9FDbi.1.spl3" title="原文 : If set to true, request will process and this provider will abstain.">trueに設定すると、リクエストが処理され、このプロバイダは中断します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.SQea4.4"  title="原文: optional-audience"><code>optional-audience</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.186"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.63"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1nCC5o.4" title="原文 : Allow audience claim to be optional.">オーディエンス要求をオプションとして許可します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.46DWSr.6"  title="原文: outbound"><code>outbound</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2BE0hr.4" title="原文 : OutboundTarget[]"><router-link to="/config/io_helidon_security_providers_common_OutboundTarget">OutboundTarget[]</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1oU7gD.2" title="原文 : Add a new target configuration.">新しいターゲット構成を追加します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3SEgfv.5"  title="原文: propagate"><code>propagate</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.187"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.64"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.138iGd.3" title="原文 : Whether to propagate identity.">アイデンティティを伝播するかどうか。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.37YgdV.4"  title="原文: proxy-host"><code>proxy-host</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.271"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3PoKJ7.2.spl1" title="原文 : Proxy host to use.">使用するプロキシ・ホスト。</span> <span class="merged" id="all.3PoKJ7.2.spl2" title="原文 : When defined, triggers usage of proxy for HTTP requests.">定義すると、HTTPリクエストのプロキシの使用がトリガーされます。</span> <span class="merged" id="all.3PoKJ7.2.spl3" title="原文 : Setting to empty String has the same meaning as setting to null - disables proxy.">空の文字列への設定は、nullの設定と同じ意味を持ちます - プロキシを無効にします。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3687nw.4"  title="原文: proxy-port"><code>proxy-port</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.76"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1doYAE.4"  title="原文: 80"><code>80</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1c7Jkj.2.spl1"  title="原文:: Proxy port.">プロキシ・ポート。</span> <span class="merged" id="all.1c7Jkj.2.spl2" title="原文 : Defaults to DEFAULT_PROXY_PORT">デフォルトは<code>DEFAULT_PROXY_PORT</code>です</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1AyTFz.2"  title="原文: proxy-protocol"><code>proxy-protocol</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.272"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3Ur1dT.2"  title="原文: http"><code>http</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XUVWr.2.spl1" title="原文 : Proxy protocol to use when proxy is used.">プロキシが使用されるときに使用するプロキシ・プロトコル。</span> <span class="merged" id="all.2XUVWr.2.spl2" title="原文 : Defaults to DEFAULT_PROXY_PROTOCOL.">デフォルトは<code>DEFAULT_PROXY_PROTOCOL</code>です。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3bHR3a.2"  title="原文: query-param-name"><code>query-param-name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.273"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3mwpmn.2"  title="原文: accessToken"><code>accessToken</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.Q0woX.2" title="原文 : Name of a query parameter that contains the JWT token when parameter is used.">パラメータの使用時にJWTトークンを含む問合せパラメータの名前。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.11wE92.2"  title="原文: query-param-tenant-name"><code>query-param-tenant-name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.274"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3RrrWU.2"  title="原文: h_tenant"><code>h_tenant</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.ijkRo.2.spl1" title="原文 : Name of a query parameter that contains the tenant name when the parameter is used.">パラメータの使用時にテナント名を含む問合せパラメータの名前。</span> <span class="merged" id="all.ijkRo.2.spl2" title="原文 : Defaults to #DEFAULT_TENANT_PARAM_NAME.">デフォルトは#DEFAULT_TENANT_PARAM_NAMEです。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1NeAV7.2"  title="原文: query-param-use"><code>query-param-use</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.188"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.65"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3slWjd.2" title="原文 : Whether to use a query parameter to send JWT token from application to this server.">問合せパラメータを使用してJWTトークンをアプリケーションからこのサーバーに送信するかどうか。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.D9OII.2"  title="原文: redirect"><code>redirect</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.189"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.66"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4D6cT9.2.spl1" title="原文 : By default, the client should redirect to the identity server for the user to log in.">デフォルトでは、クライアントは、ユーザーがログインできるようにアイデンティティ・サーバーにリダイレクトする必要があります。</span> <span class="merged" id="all.4D6cT9.2.spl2" title="原文 : This behavior can be overridden by setting redirect to false.">この動作は、リダイレクトをfalseに設定することでオーバーライドできます。</span> <span class="merged" id="all.4D6cT9.2.spl3" title="原文 : When token is not present in the request, the client will not redirect and just return appropriate error response code.">トークンがリクエストに存在しない場合、クライアントはリダイレクトされず、適切なエラー・レスポンス・コードを返します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.11GdpG.2"  title="原文: redirect-attempt-param"><code>redirect-attempt-param</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.275"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3hfqRH.2"  title="原文: h_ra"><code>h_ra</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4QkzgT.2" title="原文 : Configure the parameter used to store the number of attempts in redirect.">リダイレクトの試行回数の格納に使用するパラメータを構成します。</span></p>

<markup>Defaults to `DEFAULT_ATTEMPT_PARAM`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.MTjac.2"  title="原文: redirect-uri"><code>redirect-uri</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.276"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.Q9VmF.2"  title="原文: /oidc/redirect"><code>/oidc/redirect</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4fzTBd.2.spl1" title="原文 : URI to register web server component on, used by the OIDC server to redirect authorization requests to after a user logs in or approves scopes.">ユーザーがログインまたはスコープを承認した後に、OIDCサーバーが認可リクエストをリダイレクトするために使用する、webサーバー・コンポーネントを登録するURI。</span> <span class="merged" id="all.4fzTBd.2.spl2" title="原文 : Note that usually the redirect URI configured here must be the same one as configured on OIDC server.">通常、ここで構成するリダイレクトURIはOIDCサーバーで構成するものと同じである必要があります。</span> </p>

<markup>Defaults to `DEFAULT_REDIRECT_URI`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.CyX3F.4"  title="原文: relative-uris"><code>relative-uris</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.190"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.67"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.e1ZPT.2.spl1" title="原文 : Can be set to true to force the use of relative URIs in all requests, regardless of the presence or absence of proxies or no-proxy lists.">プロキシまたは非プロキシ・リストが存在するかどうかに関係なく、すべてのリクエストで相対URIを強制的に使用するように<code>true</code>に設定できます。</span> <span class="merged" id="all.e1ZPT.2.spl2" title="原文 : By default, requests that use the Proxy will have absolute URIs.">デフォルトでは、プロキシを使用するリクエストは絶対URIを持ちます。</span> <span class="merged" id="all.e1ZPT.2.spl3" title="原文 : Set this flag to true if the host is unable to accept absolute URIs.">ホストが絶対URIを受け入れることができない場合は、このフラグを<code>true</code>に設定します。</span> <span class="merged" id="all.e1ZPT.2.spl4" title="原文 : Defaults to DEFAULT_RELATIVE_URIS.">デフォルトは<code>DEFAULT_RELATIVE_URIS</code>です。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.kQ4h4.4"  title="原文: scope-audience"><code>scope-audience</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.277"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2wMEC4.4.spl1" title="原文 : Audience of the scope required by this application.">このアプリケーションで必要なスコープの対象読者。</span> <span class="merged" id="all.2wMEC4.4.spl2" title="原文 : This is prefixed to the scope name when requesting scopes from the identity server.">これは、アイデンティティ・サーバーからスコープをリクエストするときにスコープ名のプレフィクスとして付加されます。</span> <span class="merged" id="all.2wMEC4.4.spl3"  title="原文: Defaults to empty string.">デフォルトは空の文字列です。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3EA4pr.4"  title="原文: server-type"><code>server-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.278"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2gausp.7"  title="原文: @default"><code>@default</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2AuabR.4" title="原文 : Configure one of the supported types of identity servers.">サポートされているタイプのアイデンティティ・サーバーの1つを構成します。</span></p>

<markup>If the type does not have an explicit mapping, a warning is logged and the default implementation is used.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.8wfMM.4"  title="原文: sign-jwk.resource"><code>sign-jwk.resource</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.26" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3GQxZq.4" title="原文 : A resource pointing to JWK with public keys of signing certificates used to validate JWT.">JWTのバリデートに使用される署名証明書の公開キーを持つJWKを指すリソース。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.468r3F.2"  title="原文: tenants"><code>tenants</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.H90Jp.2" title="原文 : TenantConfig"><router-link to="/config/io_helidon_security_providers_oidc_common_TenantConfig">TenantConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.LS2k2.2" title="原文 : Configurations of the tenants">テナントの構成</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2DEQ1H.4"  title="原文: token-endpoint-auth"><code>token-endpoint-auth</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1KoZ4D.4" title="原文 : ClientAuthentication (CLIENT_SECRET_BASIC, CLIENT_SECRET_POST, CLIENT_SECRET_JWT, PRIVATE_KEY_JWT, NONE)">ClientAuthentication (CLIENT_SECRET_BASIC、CLIENT_SECRET_POST、CLIENT_SECRET_JWT、PRIVATE_KEY_JWT、なし)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3KTL8M.4"  title="原文: CLIENT_SECRET_BASIC"><code>CLIENT_SECRET_BASIC</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3f6kjf.4.spl1" title="原文 : Type of authentication to use when invoking the token endpoint.">トークン・エンドポイントの起動時に使用する認証のタイプ。</span> <span class="merged" id="all.3f6kjf.4.spl2" title="原文 : Current supported options:">現在サポートされているオプション:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.eCxnW.4"  title="原文: io.helidon.security.providers.oidc.common.OidcConfig.ClientAuthentication#CLIENT_SECRET_BASIC">io.helidon.security.providers.oidc.common.OidcConfig.ClientAuthentication#CLIENT_SECRET_BASIC</span></p>

</li>
<li>
<p><span class="merged" id="all.oRP2j.4"  title="原文: io.helidon.security.providers.oidc.common.OidcConfig.ClientAuthentication#CLIENT_SECRET_POST">io.helidon.security.providers.oidc.common.OidcConfig.ClientAuthentication#CLIENT_SECRET_POST</span></p>

</li>
<li>
<p><span class="merged" id="all.3xsX8t.4"  title="原文: io.helidon.security.providers.oidc.common.OidcConfig.ClientAuthentication#NONE">io.helidon.security.providers.oidc.common.OidcConfig.ClientAuthentication#NONE</span></p>

</li>
</ul>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.NDgNA.4"  title="原文: token-endpoint-uri"><code>token-endpoint-uri</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.LGnjn.20"  title="原文:: URI">URI</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.WAsjK.4.spl1" title="原文 : URI of a token endpoint used to obtain a JWT based on the authentication code.">認証コードに基づいてJWTを取得するために使用するトークン・エンドポイントのURI。</span> <span class="merged" id="all.WAsjK.4.spl2" title="原文 : If not defined, it is obtained from #oidcMetadata(Resource), if that is not defined an attempt is made to use #identityUri(URI)/oauth2/v1/token.">定義されていない場合、#oidcMetadata(Resource)から取得されます。定義されていない場合は、#identityUri(URI)/oauth2/v1/tokenの使用が試行されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.22WMEh.2"  title="原文: use-jwt-groups"><code>use-jwt-groups</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.191"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.95"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.UUSmh.2" title="原文 : Claim groups from JWT will be used to automatically add groups to current subject (may be used with jakarta.annotation.security.RolesAllowed annotation).">JWTからの請求<code>groups</code>は、現在のサブジェクトにグループを自動的に追加するために使用されます(jakarta.annotation.security.RolesAllowed注釈とともに使用できます)。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2GiOns.4"  title="原文: validate-jwt-with-jwk"><code>validate-jwt-with-jwk</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.192"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.96"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2L1y3N.4.spl1" title="原文 : Use JWK (a set of keys to validate signatures of JWT) to validate tokens.">JWK (JWTのシグネチャをバリデートするための一連のキー)を使用して、トークンをバリデートします。</span> <span class="merged" id="all.2L1y3N.4.spl2" title="原文 : Use this method when you want to use default values for JWK or introspection endpoint URI.">このメソッドは、JWKまたはイントロスペクション・エンドポイントURIにデフォルト値を使用する場合に使用します。</span> </p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</div>


<h3 id="_example_code"><span class="merged" id="all.mu2yS"  title="原文:: Example code">コード例</span></h3>
<div class="section">
<p><span class="merged" id="all.2B7ILm" title="原文 : See the example on GitHub.">GitHubの<a href="https://github.com/oracle/helidon/tree/4.0.2/examples/security/idcs-login" target="_blank">example</a>を参照してください。</span></p>

<markup
lang="yaml"
title="Configuration example"
>security:
  providers:
  - oidc:
      client-id: "client-id-of-this-service"
      client-secret: "${CLEAR=client-secret-of-this-service}"
      identity-uri: "http://your-tenant.identity-server.com"
      frontend-uri: "http://my-service:8080"
      audience: "http://my-service"
      cors:
        allow-origins: ["http://foo.com", "http://there.com"]
        allow-methods: ["PUT", "DELETE"]
      outbound:
        - name: "internal-services"
          hosts: ["*.example.org"]
          outbound-token:
            header: "X-Internal-Auth"</markup>

</div>


<h3 id="oidc-workflow"><span class="merged" id="all.aWBLA"  title="原文: How does it work?"> 動作の仕組み</span></h3>
<div class="section">
<p><span class="merged" id="all.2xCZWJ" title="原文 : At Helidon startup, if OIDC provider is configured, the following will happen:">Helidonの起動時にOIDCプロバイダが構成されている場合、次のようになります:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.3wWz4X" title="原文 : client-id, client-secret, and identityUri are validated - these must provide values"><code>client-id</code>、<code>client-secret</code>および<code>identityUri</code>がバリデートされます - これらは値を指定する必要があります</span>

</li>
<li>
<span class="merged" id="all.42RlDc" title="原文 : Unless all resources are configured as local resources, the provider attempts to contact the oidc-metadata.resource endpoint to retrieve all endpoints">すべてのリソースがローカル・リソースとして構成されていないかぎり、プロバイダは<code>oidc-metadata.resource</code>エンドポイントに接続してすべてのエンドポイントを取得しようとします</span>

</li>
</ol>

<p><span class="merged" id="all.1PpqdO" title="原文 : At runtime, depending on configuration…​">実行時に、構成に応じて…</span></p>

<p><span class="merged" id="all.4OA5Jn" title="原文 : If a request comes without a token or with insufficient scopes:">トークンがないか、スコープが不十分なリクエストの場合:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.13pRTS.spl1" title="原文 : If redirect is set to true (default), request is redirected to the authorization endpoint of the identity server."><code>redirect</code>が<code>true</code> (デフォルト)に設定されている場合、リクエストはアイデンティティ・サーバーの認可エンドポイントにリダイレクトされます。</span> <span class="merged" id="all.13pRTS.spl2" title="原文 : If set to false, 401 is returned">falseに設定すると、<code>401</code>が返されます</span> 

</li>
<li>
<span class="merged" id="all.3ugm1p" title="原文 : User authenticates against the identity server">ユーザーがアイデンティティ・サーバーに対して認証</span>

</li>
<li>
<span class="merged" id="all.4UTMZ8" title="原文 : The identity server redirects back to Helidon service with a code">アイデンティティ・サーバーは、コードを使用してHelidonサービスにリダイレクト</span>

</li>
<li>
<span class="merged" id="all.dpxhL" title="原文 : Helidon service contacts the identity server’s token endpoint, to exchange the code for a JWT">Helidonサービスは、JWTのコードを交換するために、アイデンティティ・サーバーのトークン・エンドポイントに接続</span>

</li>
<li>
<span class="merged" id="all.2VKbKT" title="原文 : The JWT is stored in a cookie (if cookie support is enabled, which it is by default)">JWTはcookieに格納されます(cookieサポートが有効になっている場合、これはデフォルトです)</span>

</li>
<li>
<span class="merged" id="all.33AhKk" title="原文 : Helidon service redirects to original endpoint (on itself)">Helidonサービスは、元のエンドポイント(それ自体)にリダイレクト</span>

</li>
</ol>

<p><span class="merged" id="all.2O8kmI" title="原文 : Helidon obtains a token from request (from cookie, header, or query parameter):">Helidonは、リクエストから(cookie、ヘッダーまたは問合せパラメータから)トークンを取得します:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2LbP5W" title="原文 : Token is parsed as a singed JWT">トークンは単一JWTとして解析されます</span>

</li>
<li>
<span class="merged" id="all.4V3YQL" title="原文 : We validate the JWT signature either against local JWK or against the identity server’s introspection endpoint depending on configuration">JWTシグネチャは、構成に応じて、ローカルJWKまたはアイデンティティ・サーバーのイントロスペクション・エンドポイントのいずれかに対してバリデートされます</span>

</li>
<li>
<span class="merged" id="all.3Rdm1A" title="原文 : We validate the issuer and audience of the token if it matches the configured values">トークンの発行者とオーディエンスが構成済の値と一致するかどうかをバリデート</span>

</li>
<li>
<span class="merged" id="all.1TkhcA" title="原文 : A subject is created from the JWT, including scopes from the token">JWTからサブジェクトが作成されます(トークンのスコープを含む)</span>

</li>
<li>
<span class="merged" id="all.4WPiBt" title="原文 : We validate that we have sufficient scopes to proceed, and return 403 if not">続行するのに十分なスコープがあることをバリデートし、ない場合は<code>403</code>を返します</span>

</li>
<li>
<span class="merged" id="all.6vQJg" title="原文 : Handling is returned to security to process other security providers">処理は、他のセキュリティ・プロバイダを処理するためにセキュリティに戻されます</span>

</li>
</ol>

</div>


<h3 id="tenant-enable"><span class="merged" id="all.1uEN7j" title="原文 : Multiple tenants">複数のテナント</span></h3>
<div class="section">
<p><span class="merged" id="all.2IB8uS.spl1" title="原文 : The OIDC provider also supports multiple tenants.">OIDCプロバイダは、複数のテナントもサポートしています。</span> <span class="merged" id="all.2IB8uS.spl2" title="原文 : To enable this feature, it is required to do several steps.">この機能を有効にするには、いくつかのステップを実行する必要があります。</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.MIpHe" title="原文 : To enable the default multi-tenant support, add the multi-tenant: true option to the OIDC provider configuration">デフォルトのマルチテナント・サポートを有効にするには、OIDCプロバイダ構成に<code>multi-tenant: true</code>オプションを追加</span>

</li>
<li>
<span class="merged" id="all.oxWQh.spl1" title="原文 : Specify the desired way to provide the tenant name.">テナント名の指定方法を指定します。</span> <span class="merged" id="all.oxWQh.spl2" title="原文 : This step is done over adding the tenant-id-style configuration option.">このステップでは、<code>tenant-id-style</code>構成オプションを追加します。</span> <span class="merged" id="all.oxWQh.spl3" title="原文 : For more information, see the table below">詳細は、次の表を参照してください</span> 

</li>
<li>
<span class="merged" id="all.kaQ0w" title="原文 : Add the tenants section to the OIDC provider configuration">テナント・セクションをOIDCプロバイダ構成に追加</span>

</li>
</ol>

<markup
lang="yaml"

>tenants:
   - name: "example-tenant"
     ... tenant configuration options</markup>

<p><span class="merged" id="all.3eIS44" title="原文 : There are four ways to provide the required tenant information to Helidon by default.">デフォルトで、必要なテナント情報をHelidonに提供するには、4つの方法があります。</span></p>

<div class="block-title"><span class="merged" id="all.3DL1NR" title="原文 : Possible tenant-id-style configuration options"><span>可能な<code>tenant-id-style</code>構成オプション</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 22.222%;">
<col style="width: 44.444%;">
<col style="width: 33.333%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.123"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.20ls8M.125"  title="原文:: description">説明</span></th>
<th><span class="merged" id="all.3cnEmN" title="原文 : additional config options">追加の構成オプション</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.14qPw"  title="原文: host-header"><code>host-header</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1PprqV" title="原文 : Tenant configuration will be selected based on your host present in the Host header value.">テナント構成は、<code>Host</code>ヘッダー値に存在するホストに基づいて選択されます。</span></p>

</doc-view>
</td>
<td class=""><doc-view>
<p>&#160;</p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4dWEIf"  title="原文: domain"><code>domain</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2CeQdd.spl1" title="原文 : Similar to the host-header style, but now the tenant name is identified just as a part of the host name."><code>host-header</code>スタイルと同様ですが、テナント名はホスト名の一部として識別されるようになりました。</span> <span class="merged" id="all.2CeQdd.spl2" title="原文 : By default, it selects the third domain level.">デフォルトでは、3番目のドメイン・レベルが選択されます。</span> </p>

<p><span class="merged" id="all.yk2pt" title="原文 : Example: Host header value from inbound request is my.helidon.com → domain level 3 is my, domain level 2 is helidon and domain level 1 is com.">例: インバウンド・リクエストからのホスト・ヘッダー値は<code>my.helidon.com</code>→ドメイン・レベル3は<code>my</code>、ドメイン・レベル2は<code>helidon</code>、ドメイン・レベル1は<code>com</code>です。</span></p>

</doc-view>
</td>
<td class=""><doc-view>
<markup
lang="yaml"

>tenant-id-domain-level: &lt;domain level&gt;</markup>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1q7W39"  title="原文: token-handler"><code>token-handler</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4U7ZiX" title="原文 : The tenant name information is expected to be provided through the configured custom header value.">テナント名情報は、構成されたカスタム・ヘッダー値を介して提供される必要があります。</span></p>

</doc-view>
</td>
<td class=""><doc-view>
<markup
lang="yaml"

>tenant-id-handler:
  header: "my-custom-header"</markup>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Qehz5"  title="原文: none"><code>none</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2Lq3Oj.spl1" title="原文 : No tenant name finding is used.">テナント名の検索は使用されません。</span> <span class="merged" id="all.2Lq3Oj.spl2" title="原文 : Default tenant name @default is used instead.">かわりに、デフォルトのテナント名<code>@default</code>が使用されます。</span> </p>

</doc-view>
</td>
<td class=""><doc-view>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.1ict9E.spl1" title="原文 : You can also implement a custom way of discovering the tenant name and tenant configuration.">テナント名とテナント構成を検出するカスタムの方法を実装することもできます。</span> <span class="merged" id="all.1ict9E.spl2" title="原文 : The custom tenant name discovery from request can be done by implementing SPI:">リクエストからのカスタム・テナント名の検出は、SPIを実装することで実行できます:</span> </p>

<p><span class="merged" id="all.3Io44Z"  title="原文: io.helidon.security.providers.oidc.common.spi.TenantIdProvider"><code>io.helidon.security.providers.oidc.common.spi.TenantIdProvider</code></span></p>

<p><span class="merged" id="all.3KARYL" title="原文 : and the custom tenant configuration discovery can be provided by implementing SPI:">また、SPIを実装することで、カスタム・テナント構成の検出を提供できます:</span></p>

<p><span class="merged" id="all.3Lpjrc"  title="原文: io.helidon.security.providers.oidc.common.spi.TenantConfigProvider"><code>io.helidon.security.providers.oidc.common.spi.TenantConfigProvider</code></span></p>


<h4 id="_available_tenant_config_options"><span class="merged" id="all.2DA92j" title="原文 : Available tenant config options">使用可能なテナント構成オプション</span></h4>
<div class="section">
<p><span class="merged" id="all.2GDHLi.1" title="原文 : Open ID Connect tenant configuration">オープンID接続テナント構成</span></p>

<p><span class="merged" id="all.3ng0y6.1" title="原文 : Type: io.helidon.security.providers.oidc.common.TenantConfig">タイプ: <a href="/apidocs/io.helidon.security.providers.oidc.common/io/helidon/security/providers/oidc/common/TenantConfig.html" target="_blank">io.helidon.security.providers.oidc.common.TenantConfig</a></span></p>


<h5 id="_configuration_options_2"><span class="merged" id="all.3SKgM1.115"  title="原文:: Configuration options">構成オプション</span></h5>
<div class="section">
<div class="block-title"><span class="merged" id="all.1fCXjI.6" title="原文 : Required configuration options"><span>必要な構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.124"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.121"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.124"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.126"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.309fiz.11"  title="原文: name"><code>name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.279"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2tSlrn.1" title="原文 : Name of the tenant.">テナントの名前。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<div class="block-title"><span class="merged" id="all.271SGn.109" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.125"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.122"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.125"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.127"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4WSwQo.5"  title="原文: audience"><code>audience</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.280"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1rk5GA.5" title="原文 : Audience of issued tokens.">発行されたトークンのオーディエンス。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2dGFWv.5"  title="原文: authorization-endpoint-uri"><code>authorization-endpoint-uri</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.LGnjn.21"  title="原文:: URI">URI</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4f8bIn.5" title="原文 : URI of an authorization endpoint used to redirect users to for logging-in.">ログイン用にユーザーをリダイレクトするために使用される認可エンドポイントのURI。</span></p>

<markup>If not defined, it is obtained from #oidcMetadata(Resource), if that is not defined
an attempt is made to use #identityUri(URI)/oauth2/v1/authorize.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2yeZYT.5"  title="原文: base-scopes"><code>base-scopes</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.281"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3UG2d9.5"  title="原文: openid"><code>openid</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.491Ej4.5.spl1" title="原文 : Configure base scopes.">ベース・スコープを構成します。</span> <span class="merged" id="all.491Ej4.5.spl2" title="原文 : By default, this is DEFAULT_BASE_SCOPES.">デフォルトでは、これは<code>DEFAULT_BASE_SCOPES</code>です。</span> <span class="merged" id="all.491Ej4.5.spl3" title="原文 : If scope has a qualifier, it must be used here.">スコープに修飾子がある場合は、ここで使用する必要があります。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.36JO30.5"  title="原文: check-audience"><code>check-audience</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.193"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.68"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2EK1u.5" title="原文 : Configure audience claim check.">オーディエンス要求チェックを構成します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.41Kf4l.9"  title="原文: client-id"><code>client-id</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.282"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.7UCCr.5" title="原文 : Client ID as generated by OIDC server.">OIDCサーバーによって生成されたクライアントID。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2ahXIk.5"  title="原文: client-secret"><code>client-secret</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.283"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4JaO38.5.spl1" title="原文 : Client secret as generated by OIDC server.">OIDCサーバーによって生成されたクライアント・シークレット。</span> <span class="merged" id="all.4JaO38.5.spl2" title="原文 : Used to authenticate this application with the server when requesting JWT based on a code.">コードに基づいてJWTをリクエストするときにサーバーでこのアプリケーションを認証するために使用されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.CibQW.5"  title="原文: client-timeout-millis"><code>client-timeout-millis</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.44"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2n7Tym.5"  title="原文: 30000"><code>30000</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3XFAWx.5" title="原文 : Timeout of calls using web client.">webクライアントを使用したコールのタイムアウト。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1li9qS.5"  title="原文: identity-uri"><code>identity-uri</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.LGnjn.22"  title="原文:: URI">URI</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.fvU3g.5" title="原文 : URI of the identity server, base used to retrieve OIDC metadata.">アイデンティティ・サーバーのURIで、OIDCメタデータの取得に使用されるベースです。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1B7o3g.5"  title="原文: introspect-endpoint-uri"><code>introspect-endpoint-uri</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.LGnjn.23"  title="原文:: URI">URI</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3QwAQI.5.spl1" title="原文 : Endpoint to use to validate JWT.">JWTのバリデートに使用するエンドポイント。</span> <span class="merged" id="all.3QwAQI.5.spl2" title="原文 : Either use this or set #signJwk(JwkKeys) or #signJwk(Resource).">これを使用するか、#signJwk(JwkKeys)または#signJwk(Resource)を設定します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3AHuzZ.5"  title="原文: issuer"><code>issuer</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.284"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2HhI85.5" title="原文 : Issuer of issued tokens.">発行されたトークンの発行者。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1BHaUO.5"  title="原文: oidc-metadata-well-known"><code>oidc-metadata-well-known</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.194"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.97"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1jU9hU.5.spl1" title="原文 : If set to true, metadata will be loaded from default (well known) location, unless it is explicitly defined using oidc-metadata-resource.">trueに設定すると、oidc-metadata-resourceを使用して明示的に定義されていないかぎり、メタデータはデフォルトの(既知の)ロケーションからロードされます。</span> <span class="merged" id="all.1jU9hU.5.spl2" title="原文 : If set to false, it would not be loaded even if oidc-metadata-resource is not defined.">falseに設定すると、oidc-metadata-resourceが定義されていない場合でもロードされません。</span> <span class="merged" id="all.1jU9hU.5.spl3" title="原文 : In such a case all URIs must be explicitly defined (e.g. token-endpoint-uri).">このような場合、すべてのURIを明示的に定義する必要があります(例: token-endpoint-uri)。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3r2hLi.5"  title="原文: oidc-metadata.resource"><code>oidc-metadata.resource</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.27" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2r4soJ.5" title="原文 : Resource configuration for OIDC Metadata containing endpoints to various identity services, as well as information about the identity server.">様々なアイデンティティ・サービスへのエンドポイントおよびアイデンティティ・サーバーに関する情報を含むOIDCメタデータのリソース構成。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.SQea4.5"  title="原文: optional-audience"><code>optional-audience</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.195"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.69"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1nCC5o.5" title="原文 : Allow audience claim to be optional.">オーディエンス要求をオプションとして許可します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.kQ4h4.5"  title="原文: scope-audience"><code>scope-audience</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.285"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2wMEC4.5.spl1" title="原文 : Audience of the scope required by this application.">このアプリケーションで必要なスコープの対象読者。</span> <span class="merged" id="all.2wMEC4.5.spl2" title="原文 : This is prefixed to the scope name when requesting scopes from the identity server.">これは、アイデンティティ・サーバーからスコープをリクエストするときにスコープ名のプレフィクスとして付加されます。</span> <span class="merged" id="all.2wMEC4.5.spl3"  title="原文: Defaults to empty string.">デフォルトは空の文字列です。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3EA4pr.5"  title="原文: server-type"><code>server-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.286"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2gausp.8"  title="原文: @default"><code>@default</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2AuabR.5" title="原文 : Configure one of the supported types of identity servers.">サポートされているタイプのアイデンティティ・サーバーの1つを構成します。</span></p>

<markup>If the type does not have an explicit mapping, a warning is logged and the default implementation is used.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.8wfMM.5"  title="原文: sign-jwk.resource"><code>sign-jwk.resource</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.28" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3GQxZq.5" title="原文 : A resource pointing to JWK with public keys of signing certificates used to validate JWT.">JWTのバリデートに使用される署名証明書の公開キーを持つJWKを指すリソース。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2DEQ1H.5"  title="原文: token-endpoint-auth"><code>token-endpoint-auth</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1KoZ4D.5" title="原文 : ClientAuthentication (CLIENT_SECRET_BASIC, CLIENT_SECRET_POST, CLIENT_SECRET_JWT, PRIVATE_KEY_JWT, NONE)">ClientAuthentication (CLIENT_SECRET_BASIC、CLIENT_SECRET_POST、CLIENT_SECRET_JWT、PRIVATE_KEY_JWT、なし)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3KTL8M.5"  title="原文: CLIENT_SECRET_BASIC"><code>CLIENT_SECRET_BASIC</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3f6kjf.5.spl1" title="原文 : Type of authentication to use when invoking the token endpoint.">トークン・エンドポイントの起動時に使用する認証のタイプ。</span> <span class="merged" id="all.3f6kjf.5.spl2" title="原文 : Current supported options:">現在サポートされているオプション:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.eCxnW.5"  title="原文: io.helidon.security.providers.oidc.common.OidcConfig.ClientAuthentication#CLIENT_SECRET_BASIC">io.helidon.security.providers.oidc.common.OidcConfig.ClientAuthentication#CLIENT_SECRET_BASIC</span></p>

</li>
<li>
<p><span class="merged" id="all.oRP2j.5"  title="原文: io.helidon.security.providers.oidc.common.OidcConfig.ClientAuthentication#CLIENT_SECRET_POST">io.helidon.security.providers.oidc.common.OidcConfig.ClientAuthentication#CLIENT_SECRET_POST</span></p>

</li>
<li>
<p><span class="merged" id="all.3xsX8t.5"  title="原文: io.helidon.security.providers.oidc.common.OidcConfig.ClientAuthentication#NONE">io.helidon.security.providers.oidc.common.OidcConfig.ClientAuthentication#NONE</span></p>

</li>
</ul>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.NDgNA.5"  title="原文: token-endpoint-uri"><code>token-endpoint-uri</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.LGnjn.24"  title="原文:: URI">URI</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.WAsjK.5.spl1" title="原文 : URI of a token endpoint used to obtain a JWT based on the authentication code.">認証コードに基づいてJWTを取得するために使用するトークン・エンドポイントのURI。</span> <span class="merged" id="all.WAsjK.5.spl2" title="原文 : If not defined, it is obtained from #oidcMetadata(Resource), if that is not defined an attempt is made to use #identityUri(URI)/oauth2/v1/token.">定義されていない場合、#oidcMetadata(Resource)から取得されます。定義されていない場合は、#identityUri(URI)/oauth2/v1/tokenの使用が試行されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2GiOns.5"  title="原文: validate-jwt-with-jwk"><code>validate-jwt-with-jwk</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.196"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.98"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2L1y3N.5.spl1" title="原文 : Use JWK (a set of keys to validate signatures of JWT) to validate tokens.">JWK (JWTのシグネチャをバリデートするための一連のキー)を使用して、トークンをバリデートします。</span> <span class="merged" id="all.2L1y3N.5.spl2" title="原文 : Use this method when you want to use default values for JWK or introspection endpoint URI.">このメソッドは、JWKまたはイントロスペクション・エンドポイントURIにデフォルト値を使用する場合に使用します。</span> </p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</div>


<h4 id="_how_does_that_work"><span class="merged" id="all.1hViuM" title="原文 : How does that work?">その機能</span></h4>
<div class="section">
<p><span class="merged" id="all.1vbOfU.spl1" title="原文 : Multitenant support requires to obtain tenant name from the incoming request.">マルチテナント・サポートでは、受信リクエストからテナント名を取得する必要があります。</span> <span class="merged" id="all.1vbOfU.spl2" title="原文 : OIDC configuration is selected based on the received tenant name.">OIDC構成は、受信したテナント名に基づいて選択されます。</span> <span class="merged" id="all.1vbOfU.spl3" title="原文 : The way this tenant name has to be provided is configured via tenant-id-style configuration.">このテナント名を指定する方法は、<code>tenant-id-style</code>構成を使用して構成します。</span> <span class="merged" id="all.1vbOfU.spl4" title="原文 : See How to enable tenants for more information.">詳細は、<router-link @click.native="this.scrollFix('#tenant-enable')" to="#tenant-enable">「テナントを有効にする方法」</router-link>を参照してください。</span> <span class="merged" id="all.1vbOfU.spl5" title="原文 : After matching tenant configuration with the received name, the rest of the OIDC flow if exactly the same as in How does OIDC work.">テナント構成を受信した名前と照合した後、残りのOIDCフローは、<router-link @click.native="this.scrollFix('#oidc-workflow')" to="#oidc-workflow">「OIDCはどのように機能しますか」</router-link>と同じです。</span> </p>

<p><span class="merged" id="all.vOWKz.spl1" title="原文 : Base OIDC configuration is treated as a default tenant, which is used, if no tenant name is provided.">ベースOIDC構成は、テナント名が指定されていない場合に使用されるデフォルトのテナントとして扱われます。</span> <span class="merged" id="all.vOWKz.spl2" title="原文 : This default tenant is having @default name specified.">このデフォルトのテナントには、<code>@default</code>名が指定されています。</span> </p>

<p><span class="merged" id="all.u9Sbg" title="原文 : It is also important to note, that each tenant configuration is based on the default tenant configuration (base OIDC configuration), and therefore its configuration do not need to change all the properties, if they do not differ from the base OIDC configuration.">また、各テナント構成はデフォルトのテナント構成(ベースOIDC構成)に基づいているため、ベースOIDC構成と異なる場合、すべてのプロパティを変更する必要はありません。</span></p>

</div>

</div>

</div>


<h2 id="cors"><span class="merged" id="all.3bUB5l" title="原文 : CORS Settings">CORS設定</span></h2>
<div class="section">
<p><span class="merged" id="all.1zhKsV" title="原文 : As an experimental feature, you can set up cross-origin handling for the redirect and logout endpoints in an optional cors block inside the oidc configuration.">実験的な機能として、<code>oidc</code>構成内のオプションの<code>cors</code>ブロックで、リダイレクトおよびログアウト・エンドポイントのクロス・オリジン処理を設定できます。</span></p>

<p><span class="merged" id="all.1rCp5c" title="原文 : The table below lists the configuration keys that identify the CORS characteristics.">次の表に、CORS特性を識別する構成キーを示します。</span></p>

<p id="config-key-table"><span class="merged" id="all.3QKNaZ" title="原文 : include::[tag=cors-config-table]">include::[tag=cors-config-table]</span></p>

<p><span class="merged" id="all.437duk" title="原文 : The following example of basic cross-origin configuration limits cross-origin resource sharing for PUT and DELETE operations to only foo.com and there.com:">次の基本的なクロス・オリジン構成の例では、<code>PUT</code>および<code>DELETE</code>操作のクロス・オリジン・リソース共有を<code>foo.com</code>および<code>there.com</code>のみに制限します:</span></p>

<markup
lang="yaml"

>allow-origins: ["http://foo.com", "http://there.com"]
allow-methods: ["PUT", "DELETE"]</markup>


<h3 id="_http_basic_authentication_provider"><span class="merged" id="all.cFhqf" title="原文 : HTTP Basic Authentication Provider">HTTP基本認証プロバイダ</span></h3>
<div class="section">
<p><span class="merged" id="all.3upSni" title="原文 : HTTP Basic authentication support">HTTP Basic認証のサポート</span></p>


<h4 id="_setup_2"><span class="merged" id="all.4BqnSO.1"  title="原文:: Setup">設定</span></h4>
<div class="section">
<markup
lang="xml"
title="Maven dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.security.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-security-providers-http-auth&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h4 id="_overview"><span class="merged" id="all.YrpRV.42"  title="原文:: Overview">概要</span></h4>
<div class="section">
<p><span class="merged" id="all.3y81r9.1" title="原文 : HTTP Basic Authentication provider">HTTP Basic認証プロバイダ</span></p>

<p><span class="merged" id="all.1EoGMD.1" title="原文 : Type: io.helidon.security.providers.httpauth.HttpBasicAuthProvider">タイプ: <a href="/apidocs/io.helidon.security.providers.httpauth/io/helidon/security/providers/httpauth/HttpBasicAuthProvider.html" target="_blank">io.helidon.security.providers.httpauth.HttpBasicAuthProvider</a></span></p>

<markup
lang="text"
title="Config key"
>http-basic-auth</markup>

<p><span class="merged" id="all.31kiUh.30" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.xEHEP.10"  title="原文: io.helidon.security.spi.SecurityProvider"><code>io.helidon.security.spi.SecurityProvider</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2t170n.8"  title="原文: io.helidon.security.spi.AuthenticationProvider"><code>io.helidon.security.spi.AuthenticationProvider</code></span></p>

</li>
</ul>

</div>


<h4 id="_configuration_options_3"><span class="merged" id="all.3SKgM1.116"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.110" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.126"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.123"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.126"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.128"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4Zagyj.10"  title="原文: optional"><code>optional</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.197"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.70"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.10QIm6.2.spl1" title="原文 : Whether authentication is required.">認証が必須かどうか。</span> <span class="merged" id="all.10QIm6.2.spl2" title="原文 : By default, request will fail if the authentication cannot be verified.">デフォルトでは、認証を検証できない場合、リクエストは失敗します。</span> <span class="merged" id="all.10QIm6.2.spl3" title="原文 : If set to false, request will process and this provider will abstain.">falseに設定すると、リクエストは処理され、このプロバイダは中断します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.46DWSr.7"  title="原文: outbound"><code>outbound</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2BE0hr.5" title="原文 : OutboundTarget[]"><router-link to="/config/io_helidon_security_providers_common_OutboundTarget">OutboundTarget[]</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3GQhHU.1" title="原文 : Add a new outbound target to configure identity propagation or explicit username/password.">アイデンティティ伝播または明示的なユーザー名/パスワードを構成するには、新しいアウトバウンド・ターゲットを追加します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4V6kvV.7"  title="原文: principal-type"><code>principal-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4F7kFa.5" title="原文 : SubjectType (USER, SERVICE)">SubjectType (ユーザー、サービス)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.26725z.9"  title="原文: USER"><code>USER</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ksLfL.4" title="原文 : Principal type this provider extracts (and also propagates).">このプロバイダが抽出するプリンシパル・タイプ(および伝播)。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.10Bdny.4"  title="原文: realm"><code>realm</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.287"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.V69kn.3"  title="原文: helidon"><code>helidon</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.34xaYV.2" title="原文 : Set the realm to use when challenging users.">ユーザーのチャレンジ時に使用するレルムを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.sbmr.2"  title="原文: users"><code>users</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4YA7Ck.2" title="原文 : ConfigUser[]"><router-link to="/config/io_helidon_security_providers_httpauth_ConfigUserStore_ConfigUser">ConfigUser[]</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.jMkk3.1.spl1" title="原文 : Set user store to validate users.">ユーザーをバリデートするようにユーザー・ストアを設定します。</span> <span class="merged" id="all.jMkk3.1.spl2" title="原文 : Removes any other stores added through #addUserStore(SecureUserStore).">#addUserStore(SecureUserStore)を使用して追加された他のストアを削除します。</span> </p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>


<h4 id="_example_code_2"><span class="merged" id="all.mu2yS.1"  title="原文:: Example code">コード例</span></h4>
<div class="section">
<p><span class="merged" id="all.1FLvP5" title="原文 : See the example on GitHub.">GitHubの<a href="https://github.com/oracle/helidon/tree/4.0.2/examples/security/outbound-override" target="_blank">example</a>を参照してください。</span></p>

<markup
lang="yaml"
title="Configuration example"
>security:
  providers:
  - http-basic-auth:
      realm: "helidon"
      users:
      - login: "john"
        password: "${CLEAR=password}"
        roles: ["admin"]
      - login: "jack"
        password: "password"
        roles: ["user", "admin"]
      outbound:
        - name: "internal-services"
          hosts: ["*.example.org"]
          # Propagates current user's identity or identity from request property
          outbound-token:
            header: "X-Internal-Auth"
        - name: "partner-service"
          hosts: ["*.partner.org"]
          # Uses this username and password
          username: "partner-user-1"
          password: "${CLEAR=password}"</markup>

</div>


<h4 id="_how_does_it_work"><span class="merged" id="all.aWBLA.1"  title="原文: How does it work?"> 動作の仕組み</span></h4>
<div class="section">
<p><span class="merged" id="all.3BPO0H" title="原文 : See https://tools.ietf.org/html/rfc7617."><a class="bare" href="https://tools.ietf.org/html/rfc7617" target="_blank">https://tools.ietf.org/html/rfc7617</a>を参照してください。</span></p>

<p><span class="merged" id="all.2hZ4X1" title="原文 : Authentication of request"><strong>リクエストの認証</strong></span></p>

<p><span class="merged" id="all.2pB05a" title="原文 : When a request is received without the Authorization: basic …​. header, a challenge is returned to provide such authentication."><code>Authorization: basic …​.</code>ヘッダーなしでリクエストを受信すると、このような認証を提供するチャレンジが返されます。</span></p>

<p><span class="merged" id="all.2MuSBK" title="原文 : When a request is received with the Authorization: basic …​. header, the username and password is validated against configured users (and users obtained from custom service if any provided)."><code>Authorization: basic …​.</code>ヘッダーを含むリクエストを受信すると、ユーザー名とパスワードが構成済ユーザー(および指定されている場合はカスタム・サービスから取得したユーザー)に対してバリデートされます。</span></p>

<p><span class="merged" id="all.4EiPav" title="原文 : Subject is created based on the username and roles provided by the user store.">サブジェクトは、ユーザー・ストアによって提供されるユーザー名とロールに基づいて作成されます。</span></p>

<p><span class="merged" id="all.3bi6D6"  title="原文:: Identity propagation"><strong>ID伝播</strong></span></p>

<p><span class="merged" id="all.2LHMcp" title="原文 : When identity propagation is configured, there are several options for identifying username and password to propagate:">アイデンティティ伝播が構成されている場合、伝播するユーザー名とパスワードを識別するためのオプションがいくつかあります:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1IRANF" title="原文 : We propagate the current username and password (inbound request must be authenticated using basic authentication).">現在のユーザー名とパスワードを伝播します(インバウンド・リクエストは基本認証を使用して認証する必要があります)。</span>

</li>
<li>
<span class="merged" id="all.4btYq7" title="原文 : We use username and password from an explicitly configured property (See EndpointConfig.PROPERTY_OUTBOUND_ID and EndpointConfig.PROPERTY_OUTBOUND_SECRET)">明示的に構成されたプロパティのユーザー名とパスワードを使用します(<code>EndpointConfig.PROPERTY_OUTBOUND_ID</code>および<code>EndpointConfig.PROPERTY_OUTBOUND_SECRET</code>を参照)</span>

</li>
<li>
<span class="merged" id="all.Jqk8Z" title="原文 : We use username and password associated with an outbound target (see example configuration above)">アウトバウンド・ターゲットに関連付けられたユーザー名とパスワードを使用します(前述の構成例を参照)</span>

</li>
</ol>

<p><span class="merged" id="all.4bmnAv" title="原文 : Identity is propagated only if:">アイデンティティは、次の場合にのみ伝播されます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.3xUNp9" title="原文 : There is an outbound target configured for the endpoint">エンドポイントに構成されたアウトバウンド・ターゲットがあります</span>

</li>
<li>
<span class="merged" id="all.1LHu1w" title="原文 : Or there is an explicitly configured username/password for the current request (through request property)">または、現在のリクエストに対して明示的に構成されたユーザー名/パスワードがあります(リクエスト・プロパティを使用)</span>

</li>
</ol>

<p><span class="merged" id="all.4eG9bs" title="原文 : Custom user store"><strong>カスタム・ユーザー・ストア</strong></span></p>

<p><span class="merged" id="all.303dxT.spl1" title="原文 : Java service loader service io.helidon.security.providers.httpauth.spi.UserStoreService can be implemented to provide users to the provider, such as when validated against an internal database or LDAP server.">Javaサービス・ローダー・サービス<code>io.helidon.security.providers.httpauth.spi.UserStoreService</code>を実装すると、内部データベースやLDAPサーバーに対してバリデートされた場合など、プロバイダにユーザーを提供できます。</span> <span class="merged" id="all.303dxT.spl2" title="原文 : The user store is defined so you never need the clear text password of the user.">ユーザー・ストアはユーザーのクリア・テキスト・パスワードを必要としないように定義されています。</span> </p>

<p><span class="merged" id="all.c0Sk9" title="原文 : Warning on security of HTTP Basic Authentication (or lack thereof)"><em>HTTP Basic認証のセキュリティに関する警告(またはその欠如)</em></span></p>

<p><span class="merged" id="all.42Zgwm.spl1" title="原文 : Basic authentication uses base64 encoded username and password and passes it over the network.">Basic認証では、base64でエンコードされたユーザー名とパスワードが使用され、ネットワーク経由で渡されます。</span> <span class="merged" id="all.42Zgwm.spl2" title="原文 : Base64 is only encoding, not encryption - so anybody that gets hold of the header value can learn the actual username and password of the user.">Base64はエンコーディングのみで、暗号化ではありません - これにより、ヘッダー値を保持するユーザーは誰でも、そのユーザーの実際のユーザー名とパスワードを知ることができます。</span> <span class="merged" id="all.42Zgwm.spl3" title="原文 : This is a security risk and an attack vector that everybody should be aware of before using HTTP Basic Authentication.">これは、HTTP Basic認証を使用する前にすべてのユーザーが認識しておく必要があるセキュリティ・リスクおよび攻撃ベクターです。</span> <span class="merged" id="all.42Zgwm.spl4" title="原文 : We recommend using this approach only for testing and demo purposes.">このアプローチは、テストおよびデモ目的でのみ使用することをお薦めします。</span> </p>

</div>

</div>


<h3 id="_http_digest_authentication_provider"><span class="merged" id="all.3v3V7a" title="原文 : HTTP Digest Authentication Provider">HTTPダイジェスト認証プロバイダ</span></h3>
<div class="section">
<p><span class="merged" id="all.PsjX4" title="原文 : HTTP Digest authentication support">HTTPダイジェスト認証のサポート</span></p>


<h4 id="_setup_3"><span class="merged" id="all.4BqnSO.2"  title="原文:: Setup">設定</span></h4>
<div class="section">
<markup
lang="xml"
title="Maven dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.security.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-security-providers-http-auth&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h4 id="_overview_2"><span class="merged" id="all.YrpRV.43"  title="原文:: Overview">概要</span></h4>
<div class="section">
<p><span class="merged" id="all.1EcjSa.1" title="原文 : Http digest authentication security provider">HTTPダイジェスト認証セキュリティ・プロバイダ</span></p>

<p><span class="merged" id="all.4VdmbS.1" title="原文 : Type: io.helidon.security.providers.httpauth.HttpDigestAuthProvider">タイプ: <a href="/apidocs/io.helidon.security.providers.httpauth/io/helidon/security/providers/httpauth/HttpDigestAuthProvider.html" target="_blank">io.helidon.security.providers.httpauth.HttpDigestAuthProvider</a></span></p>

<markup
lang="text"
title="Config key"
>http-digest-auth</markup>

<p><span class="merged" id="all.31kiUh.31" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.xEHEP.11"  title="原文: io.helidon.security.spi.SecurityProvider"><code>io.helidon.security.spi.SecurityProvider</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2t170n.9"  title="原文: io.helidon.security.spi.AuthenticationProvider"><code>io.helidon.security.spi.AuthenticationProvider</code></span></p>

</li>
</ul>

</div>


<h4 id="_configuration_options_4"><span class="merged" id="all.3SKgM1.117"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.111" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.127"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.124"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.127"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.129"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2ZmMkv.2"  title="原文: algorithm"><code>algorithm</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4KK6QY.1" title="原文 : Algorithm (MD5)">アルゴリズム(MD5)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2wf8Kx.1"  title="原文: MD5"><code>MD5</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.gmI1l.1" title="原文 : Digest algorithm to use.">使用するダイジェスト・アルゴリズム。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3XEI1q.1"  title="原文: nonce-timeout-millis"><code>nonce-timeout-millis</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.32"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1nZ54j.1"  title="原文: 86400000"><code>86400000</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1c7fYH.1.spl1" title="原文 : How long will the nonce value be valid.">非ce値の有効期間。</span> <span class="merged" id="all.1c7fYH.1.spl2" title="原文 : When timed-out, browser will re-request username/password.">タイムアウトすると、ブラウザはユーザー名/パスワードを再リクエストします。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Zagyj.11"  title="原文: optional"><code>optional</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.198"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.71"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.10QIm6.3.spl1" title="原文 : Whether authentication is required.">認証が必須かどうか。</span> <span class="merged" id="all.10QIm6.3.spl2" title="原文 : By default, request will fail if the authentication cannot be verified.">デフォルトでは、認証を検証できない場合、リクエストは失敗します。</span> <span class="merged" id="all.10QIm6.3.spl3" title="原文 : If set to false, request will process and this provider will abstain.">falseに設定すると、リクエストは処理され、このプロバイダは中断します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4V6kvV.8"  title="原文: principal-type"><code>principal-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4F7kFa.6" title="原文 : SubjectType (USER, SERVICE)">SubjectType (ユーザー、サービス)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.26725z.10"  title="原文: USER"><code>USER</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ksLfL.5" title="原文 : Principal type this provider extracts (and also propagates).">このプロバイダが抽出するプリンシパル・タイプ(および伝播)。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3IKVQY.1"  title="原文: qop"><code>qop</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3X0pIo.1" title="原文 : Qop (NONE, AUTH)">Qop (NONE、AUTH)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.10P0gX.3"  title="原文: NONE"><code>NONE</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.463jpc.1.spl1" title="原文 : Only AUTH supported."><code>AUTH</code>のみがサポートされています。</span> <span class="merged" id="all.463jpc.1.spl2" title="原文 : If left empty, uses the legacy approach (older RFC version).">空のままにすると、従来のアプローチ(古いRFCバージョン)が使用されます。</span> <span class="merged" id="all.463jpc.1.spl3" title="原文 : AUTH-INT is not supported."><code>AUTH-INT</code>はサポートされていません。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.10Bdny.5"  title="原文: realm"><code>realm</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.288"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3v0ijR.1"  title="原文: Helidon"><code>Helidon</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.34xaYV.3" title="原文 : Set the realm to use when challenging users.">ユーザーのチャレンジ時に使用するレルムを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1h6f6M.1"  title="原文: server-secret"><code>server-secret</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.289"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ND4M3.1.spl1" title="原文 : The nonce is encrypted using this secret - to make sure the nonce we get back was generated by us and to make sure we can safely time-out nonce values.">nonceはこのシークレットを使用して暗号化されます - 戻される非CEが私たちによって生成されたことを確認し、非CE値を安全にタイムアウトすることができます。</span> <span class="merged" id="all.2ND4M3.1.spl2" title="原文 : This secret must be the same for all service instances (or all services that want to share the same authentication).">このシークレットは、すべてのサービス・インスタンス(または同じ認証を共有するすべてのサービス)で同じである必要があります。</span> <span class="merged" id="all.2ND4M3.1.spl3" title="原文 : Defaults to a random password - e.g. if deployed to multiple servers, the authentication WILL NOT WORK.">デフォルトはランダム・パスワードです - たとえば、複数のサーバーにデプロイされている場合、認証は機能しません。</span> <span class="merged" id="all.2ND4M3.1.spl4" title="原文 : You MUST provide your own password to work in a distributed environment with non-sticky load balancing.">非スティッキーなロード・バランシングを使用する分散環境で作業するには、独自のパスワードを指定する必要があります。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.sbmr.3"  title="原文: users"><code>users</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4YA7Ck.3" title="原文 : ConfigUser[]"><router-link to="/config/io_helidon_security_providers_httpauth_ConfigUserStore_ConfigUser">ConfigUser[]</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3Mogia.1" title="原文 : Set user store to obtain passwords and roles based on logins.">ログインに基づいてパスワードおよびロールを取得するようにユーザー・ストアを設定します。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>


<h4 id="_example_code_3"><span class="merged" id="all.mu2yS.2"  title="原文:: Example code">コード例</span></h4>
<div class="section">
<markup
lang="yaml"
title="Configuration example"
>security:
  providers:
  - http-digest-auth:
      realm: "helidon"
      server-secret: "${CLEAR=service-wide-secret-not-known-outside}"
      users:
      - login: "john"
        password: "${CLEAR=password}"
        roles: ["admin"]
      - login: "jack"
        password: "password"
        roles: ["user", "admin"]</markup>

</div>


<h4 id="_how_does_it_work_2"><span class="merged" id="all.aWBLA.2"  title="原文: How does it work?"> 動作の仕組み</span></h4>
<div class="section">
<p><span class="merged" id="all.HwPGf" title="原文 : See https://tools.ietf.org/html/rfc7616."><a class="bare" href="https://tools.ietf.org/html/rfc7616" target="_blank">https://tools.ietf.org/html/rfc7616</a>を参照してください。</span></p>

<p><span class="merged" id="all.2hZ4X1.1" title="原文 : Authentication of request"><strong>リクエストの認証</strong></span></p>

<p><span class="merged" id="all.4DQNzX" title="原文 : When a request is received without the Authorization: digest …​. header, a challenge is returned to provide such authentication using WWW-Authenticate header."><code>Authorization: digest …​.</code>ヘッダーなしでリクエストを受信すると、チャレンジが返され、<code>WWW-Authenticate</code>ヘッダーを使用してこのような認証が提供されます。</span></p>

<p><span class="merged" id="all.1lWis3" title="原文 : When a request is received with the Authorization: digest …​. header, the request is validated against configured users (and users obtained from custom service if any provided)."><code>Authorization: digest …​.</code>ヘッダーを含むリクエストを受信すると、そのリクエストは構成済ユーザー(および指定されている場合はカスタム・サービスから取得したユーザー)に対してバリデートされます。</span></p>

<p><span class="merged" id="all.4EiPav.1" title="原文 : Subject is created based on the username and roles provided by the user store.">サブジェクトは、ユーザー・ストアによって提供されるユーザー名とロールに基づいて作成されます。</span></p>

<p><span class="merged" id="all.4eG9bs.1" title="原文 : Custom user store"><strong>カスタム・ユーザー・ストア</strong></span></p>

<p><span class="merged" id="all.303dxT.1.spl1" title="原文 : Java service loader service io.helidon.security.providers.httpauth.spi.UserStoreService can be implemented to provide users to the provider, such as when validated against an internal database or LDAP server.">Javaサービス・ローダー・サービス<code>io.helidon.security.providers.httpauth.spi.UserStoreService</code>を実装すると、内部データベースやLDAPサーバーに対してバリデートされた場合など、プロバイダにユーザーを提供できます。</span> <span class="merged" id="all.303dxT.1.spl2" title="原文 : The user store is defined so you never need the clear text password of the user.">ユーザー・ストアはユーザーのクリア・テキスト・パスワードを必要としないように定義されています。</span> </p>

<p><span class="merged" id="all.19xAc2" title="原文 : Note on security of HTTP Digest Authentication"><em>HTTP Digest認証のセキュリティに関するノート</em></span></p>

<p><span class="merged" id="all.3WR01b" title="原文 : These authentication schemes should be obsolete, though they provide a very easy way to test a protected resource.">これらの認証スキームは<em>「廃止」</em>である必要がありますが、保護されたリソースをテストする非常に簡単な方法を提供します。</span></p>

</div>

</div>


<h3 id="_header_authentication_provider"><span class="merged" id="all.3gFiST" title="原文 : Header Authentication Provider">ヘッダー認証プロバイダ</span></h3>
<div class="section">
<p><span class="merged" id="all.TbI9b" title="原文 : Asserts user or service identity based on a value of a header.">ヘッダーの値に基づいてユーザーまたはサービス・アイデンティティをアサートします。</span></p>


<h4 id="_setup_4"><span class="merged" id="all.4BqnSO.3"  title="原文:: Setup">設定</span></h4>
<div class="section">
<markup
lang="xml"
title="Maven dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.security.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-security-providers-header&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h4 id="_overview_3"><span class="merged" id="all.YrpRV.44"  title="原文:: Overview">概要</span></h4>
<div class="section">
<p><span class="merged" id="all.1t6zQD.1" title="原文 : Security provider that extracts a username (or service name) from a header.">ヘッダーからユーザー名(またはサービス名)を抽出するセキュリティ・プロバイダ。</span></p>

<p><span class="merged" id="all.gZT4l.1" title="原文 : Type: io.helidon.security.providers.header.HeaderAtnProvider">タイプ: <a href="/apidocs/io.helidon.security.providers.header/io/helidon/security/providers/header/HeaderAtnProvider.html" target="_blank">io.helidon.security.providers.header.HeaderAtnProvider</a></span></p>

<markup
lang="text"
title="Config key"
>header-atn</markup>

<p><span class="merged" id="all.31kiUh.32" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.xEHEP.12"  title="原文: io.helidon.security.spi.SecurityProvider"><code>io.helidon.security.spi.SecurityProvider</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2t170n.10"  title="原文: io.helidon.security.spi.AuthenticationProvider"><code>io.helidon.security.spi.AuthenticationProvider</code></span></p>

</li>
</ul>

</div>


<h4 id="_configuration_options_5"><span class="merged" id="all.3SKgM1.118"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.112" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.128"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.125"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.128"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.130"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3zlnZ9.3"  title="原文: atn-token"><code>atn-token</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.XGoC5.9" title="原文 : TokenHandler"><router-link to="/config/io_helidon_security_util_TokenHandler">TokenHandler</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3NoL9T.2" title="原文 : Token handler to extract username from request.">リクエストからユーザー名を抽出するトークン・ハンドラ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.24OC9j.6"  title="原文: authenticate"><code>authenticate</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.199"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.99"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1KwUDO.2" title="原文 : Whether to authenticate requests.">リクエストを認証するかどうか。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Zagyj.12"  title="原文: optional"><code>optional</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.200"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.72"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4YdVG5.2.spl1" title="原文 : Whether authentication is required.">認証が必須かどうか。</span> <span class="merged" id="all.4YdVG5.2.spl2" title="原文 : By default, request will fail if the username cannot be extracted.">デフォルトでは、ユーザー名を抽出できない場合、リクエストは失敗します。</span> <span class="merged" id="all.4YdVG5.2.spl3" title="原文 : If set to false, request will process and this provider will abstain.">falseに設定すると、リクエストは処理され、このプロバイダは中断します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.46DWSr.8"  title="原文: outbound"><code>outbound</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2BE0hr.6" title="原文 : OutboundTarget[]"><router-link to="/config/io_helidon_security_providers_common_OutboundTarget">OutboundTarget[]</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2v0hHA.1" title="原文 : Configure outbound target for identity propagation.">アイデンティティ伝播のアウトバウンド・ターゲットを構成します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.6xOUk.1"  title="原文: outbound-token"><code>outbound-token</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.XGoC5.10" title="原文 : TokenHandler"><router-link to="/config/io_helidon_security_util_TokenHandler">TokenHandler</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1HgwRF.1.spl1" title="原文 : Token handler to create outbound headers to propagate identity.">アイデンティティを伝播するアウトバウンド・ヘッダーを作成するトークン・ハンドラ。</span> <span class="merged" id="all.1HgwRF.1.spl2" title="原文 : If not defined, #atnTokenHandler will be used.">定義されていない場合、#atnTokenHandlerが使用されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4V6kvV.9"  title="原文: principal-type"><code>principal-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4F7kFa.7" title="原文 : SubjectType (USER, SERVICE)">SubjectType (ユーザー、サービス)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.26725z.11"  title="原文: USER"><code>USER</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ksLfL.6" title="原文 : Principal type this provider extracts (and also propagates).">このプロバイダが抽出するプリンシパル・タイプ(および伝播)。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3SEgfv.6"  title="原文: propagate"><code>propagate</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.201"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.73"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.138iGd.4" title="原文 : Whether to propagate identity.">アイデンティティを伝播するかどうか。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>


<h4 id="_example_code_4"><span class="merged" id="all.mu2yS.3"  title="原文:: Example code">コード例</span></h4>
<div class="section">
<markup
lang="yaml"
title="Configuration example"
>security:
  providers:
    header-atn:
      atn-token:
        header: "X-AUTH-USER"
      outbound:
        - name: "internal-services"
          hosts: ["*.example.org"]
          # propagates the current user or service id using the same header as authentication
        - name: "partner-service"
          hosts: ["*.partner.org"]
          # propagates an explicit username in a custom header
          username: "service-27"
          outbound-token:
            header: "X-Service-Auth"</markup>

</div>


<h4 id="_how_does_it_work_3"><span class="merged" id="all.aWBLA.3"  title="原文: How does it work?"> 動作の仕組み</span></h4>
<div class="section">
<p><span class="merged" id="all.4dZPdg" title="原文 : This provider inspects a specified request header and extracts the username/service name from it and asserts it as current subject’s principal.">このプロバイダは、指定されたリクエスト・ヘッダーを検査し、そこからユーザー名/サービス名を抽出して、現在のサブジェクトのプリンシパルとしてアサートします。</span></p>

<p><span class="merged" id="all.2Np0u1" title="原文 : This can be used when we use perimeter authentication (e.g. there is a gateway that takes care of authentication and propagates the user in a header).">これは、境界認証を使用する場合に使用できます(たとえば、認証を行い、ユーザーをヘッダーに伝播するゲートウェイがあります)。</span></p>

<p><span class="merged" id="all.3bi6D6.1"  title="原文:: Identity propagation"><strong>ID伝播</strong></span></p>

<p><span class="merged" id="all.17BC7n" title="原文 : Identity is propagated only if an outbound target matches the target service.">アイデンティティは、アウトバウンド・ターゲットがターゲット・サービスと一致する場合にのみ伝播されます。</span></p>

<p><span class="merged" id="all.1JFBvc.spl1" title="原文 : The following options exist when propagating identity: 1.">アイデンティティを伝播する場合、次のオプションが存在します: 1.</span> <span class="merged" id="all.1JFBvc.spl2" title="原文 : We propagate the current username using the configured header 2.">構成されたヘッダー2を使用して、現在のユーザー名を伝播します。</span> <span class="merged" id="all.1JFBvc.spl3" title="原文 : We use username associated with an outbound target (see example configuration above)">アウトバウンド・ターゲットに関連付けられたユーザー名を使用します(前述の構成例を参照)</span> </p>

<p><span class="merged" id="all.4e2XUI"  title="原文:: Caution"><strong>注意</strong></span></p>

<p><span class="merged" id="all.11qadM.spl1" title="原文 : When using this provider, you must be sure the header cannot be explicitly configured by a user or another service.">このプロバイダを使用する場合は、ユーザーまたは別のサービスがヘッダーを明示的に構成できないことを確認する必要があります。</span> <span class="merged" id="all.11qadM.spl2" title="原文 : All requests should go through a gateway that removes this header from inbound traffic, and only configures it for authenticated users/services.">すべてのリクエストは、インバウンド・トラフィックからこのヘッダーを削除するゲートウェイを経由し、認証されたユーザー/サービスに対してのみ構成する必要があります。</span> <span class="merged" id="all.11qadM.spl3" title="原文 : Another option is to use this with fully trusted parties (such as services within a single company, on a single protected network not accessible to any users), and of course for testing and demo purposes.">別の方法として、これを完全に信頼できるパーティ(単一の会社内のサービス、どのユーザーもアクセスできない単一の保護されたネットワーク上のサービスなど)とともに使用し、テストやデモの目的で使用することもできます。</span> </p>

</div>

</div>


<h3 id="_http_signatures_provider"><span class="merged" id="all.3Kx00x" title="原文 : HTTP Signatures Provider">HTTPシグネチャ・プロバイダ</span></h3>
<div class="section">
<p><span class="merged" id="all.53P9v" title="原文 : Support for HTTP Signatures.">HTTPシグネチャのサポート。</span></p>


<h4 id="_setup_5"><span class="merged" id="all.4BqnSO.4"  title="原文:: Setup">設定</span></h4>
<div class="section">
<markup
lang="xml"
title="Maven dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.security.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-security-providers-http-sign&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h4 id="_overview_4"><span class="merged" id="all.YrpRV.45"  title="原文:: Overview">概要</span></h4>
<div class="section">
<p><span class="merged" id="all.3P1sPy.1" title="原文 : HTTP header signature provider.">HTTPヘッダー・シグネチャ・プロバイダ。</span></p>

<p><span class="merged" id="all.47KQ2m.1" title="原文 : Type: io.helidon.security.providers.httpsign.HttpSignProvider">タイプ: <a href="/apidocs/io.helidon.security.providers.httpsign/io/helidon/security/providers/httpsign/HttpSignProvider.html" target="_blank">io.helidon.security.providers.httpsign.HttpSignProvider</a></span></p>

<markup
lang="text"
title="Config key"
>http-signatures</markup>

<p><span class="merged" id="all.31kiUh.33" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2t170n.11"  title="原文: io.helidon.security.spi.AuthenticationProvider"><code>io.helidon.security.spi.AuthenticationProvider</code></span></p>

</li>
</ul>

</div>


<h4 id="_configuration_options_6"><span class="merged" id="all.3SKgM1.119"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.113" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.129"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.126"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.129"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.131"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2gtzhY.1"  title="原文: backward-compatible-eol"><code>backward-compatible-eol</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.202"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.74"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.JXxLz.1" title="原文 : Enable support for Helidon versions before 3.0.0 (exclusive).">3.0.0より前のHelidonバージョンのサポートを有効にします(除外)。</span></p>

<markup>Until version 3.0.0 (exclusive) there was a trailing end of line added to the signed
data.
To be able to communicate cross versions, we must configure this when talking to older versions of Helidon.
Default value is `false`. In Helidon 2.x, this switch exists as well and the default is `true`, to
allow communication between versions as needed.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.VPmDa.1"  title="原文: headers"><code>headers</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.47gITV.1" title="原文 : HttpSignHeader[] (SIGNATURE, AUTHORIZATION, CUSTOM)">HttpSignHeader[] (署名、認可、カスタム)</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3KBbIr.1.spl1" title="原文 : Add a header that is validated on inbound requests.">インバウンド・リクエストでバリデートされたヘッダーを追加します。</span> <span class="merged" id="all.3KBbIr.1.spl2" title="原文 : Provider may support more than one header to validate.">プロバイダは、バリデートする複数のヘッダーをサポートできます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.37W3Ww.1"  title="原文: inbound.keys"><code>inbound.keys</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KfiJs.1" title="原文 : InboundClientDefinition[]"><router-link to="/config/io_helidon_security_providers_httpsign_InboundClientDefinition">InboundClientDefinition[]</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.zvGrY.1.spl1" title="原文 : Add inbound configuration.">インバウンド構成を追加します。</span> <span class="merged" id="all.zvGrY.1.spl2" title="原文 : This is used to validate signature and authenticate the party.">これは、シグネチャをバリデートし、パーティを認証するために使用されます。</span> </p>

<markup>The same can be done through configuration:
&lt;pre&gt;
{
 name = "http-signatures"
 class = "HttpSignProvider"
 http-signatures {
     inbound {
         # This configures the InboundClientDefinition
         keys: [
         {
             key-id = "service1"
             hmac.secret = "${CLEAR=password}"
         }]
     }
 }
}
&lt;/pre&gt;</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Zagyj.13"  title="原文: optional"><code>optional</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.203"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.100"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.pj5S.1.spl1" title="原文 : Set whether the signature is optional.">シグネチャがオプションかどうかを設定します。</span> <span class="merged" id="all.pj5S.1.spl2" title="原文 : If set to true (default), this provider will SecurityResponse.SecurityStatus#ABSTAIN from this request if signature is not present.">true (デフォルト)に設定すると、シグネチャが存在しない場合、このプロバイダはこのリクエストからSecurityResponse.SecurityStatus#ABSTAINになります。</span> <span class="merged" id="all.pj5S.1.spl3" title="原文 : If set to false, this provider will SecurityResponse.SecurityStatus#FAILURE fail if signature is not present.">falseに設定すると、シグネチャが存在しない場合、このプロバイダはSecurityResponse.SecurityStatus#FAILUREに失敗します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.46DWSr.9"  title="原文: outbound"><code>outbound</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4bsOHT.3" title="原文 : OutboundConfig"><router-link to="/config/io_helidon_security_providers_common_OutboundConfig">OutboundConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3bBauz.1.spl1" title="原文 : Add outbound targets to this builder.">このビルダーにアウトバウンド・ターゲットを追加します。</span> <span class="merged" id="all.3bBauz.1.spl2" title="原文 : The targets are used to chose what to do for outbound communication.">ターゲットは、アウトバウンド通信の処理を選択するために使用されます。</span> <span class="merged" id="all.3bBauz.1.spl3" title="原文 : The targets should have OutboundTargetDefinition attached through OutboundTarget.Builder#customObject(Class, Object) to tell us how to sign the request.">リクエストの署名方法を指示するには、ターゲットにOutboundTarget.Builder#customObject(Class, Object)を介してOutboundTargetDefinitionがアタッチされている必要があります。</span> </p>

<markup>The same can be done through configuration:
&lt;pre&gt;
{
 name = "http-signatures"
 class = "HttpSignProvider"
 http-signatures {
     targets: [
     {
         name = "service2"
         hosts = ["localhost"]
         paths = ["/service2/.*"]</markup>
<markup>         # This configures the OutboundTargetDefinition
         signature {
             key-id = "service1"
             hmac.secret = "${CLEAR=password}"
         }
     }]
 }
}
&lt;/pre&gt;</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.10Bdny.6"  title="原文: realm"><code>realm</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.290"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.V69kn.4"  title="原文: helidon"><code>helidon</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1u4U4Y.1" title="原文 : Realm to use for challenging inbound requests that do not have &quot;Authorization&quot; header in case header is HttpSignHeader#AUTHORIZATION and singatures are not optional.">ヘッダーがHttpSignHeader#AUTHORIZATIONで、シンガチャはオプションではない場合に、"Authorization"ヘッダーを持たない困難なインバウンド・リクエストに使用するレルム。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Kg8s9.1"  title="原文: sign-headers"><code>sign-headers</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2b1kVF.1" title="原文 : HeadersConfig[]"><router-link to="/config/io_helidon_security_providers_httpsign_SignedHeadersConfig_HeadersConfig">HeadersConfig[]</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1HqCHn.1" title="原文 : Override the default inbound required headers (e.g. headers that MUST be signed and headers that MUST be signed IF present).">デフォルトのインバウンド必須ヘッダーを上書きします (たとえば、署名する必要があるヘッダーおよび署名が必要なヘッダー)。</span></p>

<markup>Defaults:</markup>
<ul class="ulist">
<li>
<p><span class="merged" id="all.2g2VRF.1" title="原文 : get, head, delete methods: date, (request-target), host are mandatory; authorization if present (unless we are creating/validating the HttpSignHeader#AUTHORIZATION ourselves">get、head、deleteメソッド: 日付、 (request-target)ホストは必須です。存在する場合は認可します(HttpSignHeader#AUTHORIZATION自体を作成/検証する場合を除く)</span></p>

</li>
<li>
<p><span class="merged" id="all.2C55p2.1" title="原文 : put, post: same as above, with addition of: content-length, content-type and digest if present">put、post: 上記と同じ、追加: content-length、content-typeおよびダイジェスト(存在する場合)</span></p>

</li>
<li>
<p><span class="merged" id="all.31cgqt.1" title="原文 : for other methods: date, (request-target)">他のメソッド用: date, (request-target)</span></p>

</li>
</ul>

<p><span class="merged" id="all.1Ov2in.1" title="原文 : Note that this provider DOES NOT validate the &quot;Digest&quot; HTTP header, only the signature.">このプロバイダは、「ダイジェスト」HTTPヘッダーをバリデートせず、シグネチャのみがバリデートされることに注意してください。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>


<h4 id="_example_code_5"><span class="merged" id="all.mu2yS.4"  title="原文:: Example code">コード例</span></h4>
<div class="section">
<p><span class="merged" id="all.10lfsp" title="原文 : See the example on GitHub.">GitHubの<a href="https://github.com/oracle/helidon/tree/4.0.2/examples/security/webserver-signatures" target="_blank">example</a>を参照してください。</span></p>

<markup
lang="yaml"
title="Configuration example"
>security:
  providers:
    - http-signatures:
        inbound:
          keys:
            - key-id: "service1-hmac"
              principal-name: "Service1 - HMAC signature"
              hmac.secret: "${CLEAR=somePasswordForHmacShouldBeEncrypted}"
            - key-id: "service1-rsa"
              principal-name: "Service1 - RSA signature"
              public-key:
                keystore:
                  resource.path: "src/main/resources/keystore.p12"
                  passphrase: "password"
                  cert.alias: "service_cert"
        outbound:
          - name: "service2-hmac"
            hosts: ["localhost"]
            paths: ["/service2"]
            signature:
              key-id: "service1-hmac"
              hmac.secret: "${CLEAR=somePasswordForHmacShouldBeEncrypted}"
          - name: "service2-rsa"
            hosts: ["localhost"]
            paths: ["/service2-rsa.*"]
            signature:
              key-id: "service1-rsa"
              private-key:
                keystore:
                  resource.path: "src/main/resources/keystore.p12"
                  passphrase: "password"
                  key.alias: "myPrivateKey"</markup>

</div>


<h4 id="_signature_basics"><span class="merged" id="all.SBQbx" title="原文 : Signature basics">シグネチャの基本</span></h4>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.LP0D0" title="原文 : standard: based on https://tools.ietf.org/html/draft-cavage-http-signatures-03">standard : <a class="bare" href="https://tools.ietf.org/html/draft-cavage-http-signatures-03" target="_blank">https://tools.ietf.org/html/draft-cavage-http-signatures-03</a>に基づく</span></p>

</li>
<li>
<p><span class="merged" id="all.1LhMNY.spl1" title="原文 : key-id: an arbitrary string used to locate signature configuration - when a request is received the provider locates validation configuration based on this id (e.g. HMAC shared secret or RSA public key).">key-id: シグネチャ構成の検索に使用される任意の文字列 - リクエストを受信すると、プロバイダはこのID (HMAC共有シークレットやRSA公開キーなど)に基づいてバリデーション構成を検索します。</span> <span class="merged" id="all.1LhMNY.spl2" title="原文 : Commonly used meanings are: key fingerprint (RSA); API Key">よく使用される意味は次のとおりです: キー・フィンガープリント(RSA)、APIキー</span> </p>

</li>
</ul>

</div>


<h4 id="_how_does_it_work_4"><span class="merged" id="all.aWBLA.4"  title="原文: How does it work?"> 動作の仕組み</span></h4>
<div class="section">
<p><span class="merged" id="all.1S55jT.spl1" title="原文 : Inbound Signatures We act as a server and another party is calling us with a signed HTTP request."><strong>「インバウンド・シグネチャ」</strong>はサーバーとして動作し、別のパーティが署名付きHTTPリクエストを使用してコールしています。</span> <span class="merged" id="all.1S55jT.spl2" title="原文 : We validate the signature and assume identity of the caller.">シグネチャをバリデートし、呼出し側のアイデンティティを想定します。</span> </p>

<p><span class="merged" id="all.2S4FPl.spl1" title="原文 : Outbound Signatures We act as a client and we sign our outgoing requests."><strong>「アウトバウンド・シグネチャ」</strong>クライアントとして動作し、送信リクエストに署名します。</span> <span class="merged" id="all.2S4FPl.spl2" title="原文 : If there is a matching outbound target specified in configuration, its configuration will be applied for signing the outgoing request, otherwise there is no signature added">構成に一致する<code>outbound</code>ターゲットが指定されている場合、その構成が送信リクエストのシグネチャに適用されます。それ以外の場合、シグネチャは追加されません</span> </p>

</div>

</div>


<h3 id="_idcs_role_mapper"><span class="merged" id="all.3B59U8" title="原文 : IDCS Role Mapper">IDCSロール・マッパー</span></h3>
<div class="section">
<p><span class="merged" id="all.1lTJ7n" title="原文 : A role mapper to retrieve roles from Oracle IDCS.">Oracle IDCSからロールを取得するロール・マッパー。</span></p>


<h4 id="_setup_6"><span class="merged" id="all.4BqnSO.5"  title="原文:: Setup">設定</span></h4>
<div class="section">
<markup
lang="xml"
title="Maven dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.security.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-security-providers-idcs-mapper&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h4 id="_single_tenant_idcs_role_mapper"><span class="merged" id="all.4294gf" title="原文 : Single-tenant IDCS Role Mapper">シングル・テナントIDCSロール・マッパー</span></h4>
<div class="section">
<p><span class="merged" id="all.1Reqc5.1" title="原文 : IDCS role mapping provider">IDCSロール・マッピング・プロバイダ</span></p>

<p><span class="merged" id="all.1uhCQ0.1" title="原文 : Type: io.helidon.security.providers.idcs.mapper.IdcsRoleMapperProvider">タイプ: <a href="/apidocs/io.helidon.security.providers.idcs.mapper/io/helidon/security/providers/idcs/mapper/IdcsRoleMapperProvider.html" target="_blank">io.helidon.security.providers.idcs.mapper.IdcsRoleMapperProvider</a></span></p>

<markup
lang="text"
title="Config key"
>idcs-role-mapper</markup>

<p><span class="merged" id="all.31kiUh.34" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.xEHEP.13"  title="原文: io.helidon.security.spi.SecurityProvider"><code>io.helidon.security.spi.SecurityProvider</code></span></p>

</li>
<li>
<p><span class="merged" id="all.PsUPx.2"  title="原文: io.helidon.security.spi.SubjectMappingProvider"><code>io.helidon.security.spi.SubjectMappingProvider</code></span></p>

</li>
</ul>

</div>


<h4 id="_configuration_options_7"><span class="merged" id="all.3SKgM1.120"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.114" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.130"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.127"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.130"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.132"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.13yRix.2"  title="原文: cache-config"><code>cache-config</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1jdkVC.2" title="原文 : EvictableCache"><router-link to="/config/io_helidon_security_providers_common_EvictableCache">EvictableCache</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4MwfWq.2" title="原文 : Use explicit io.helidon.security.providers.common.EvictableCache for role caching.">ロール・キャッシングには明示的なio.helidon.security.providers.common.EvictableCacheを使用します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2IXvjO.3"  title="原文: default-idcs-subject-type"><code>default-idcs-subject-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.291"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3WzDhx.3"  title="原文: user"><code>user</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4TmZMT.3.spl1" title="原文 : Configure subject type to use when requesting roles from IDCS.">IDCSからロールをリクエストするときに使用するサブジェクト・タイプを構成します。</span> <span class="merged" id="all.4TmZMT.3.spl2" title="原文 : Can be either #IDCS_SUBJECT_TYPE_USER or #IDCS_SUBJECT_TYPE_CLIENT.">#IDCS_SUBJECT_TYPE_USERまたは#IDCS_SUBJECT_TYPE_CLIENTのいずれかです。</span> <span class="merged" id="all.4TmZMT.3.spl3" title="原文 : Defaults to #IDCS_SUBJECT_TYPE_USER.">デフォルトは#IDCS_SUBJECT_TYPE_USERです。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3iExOC.3"  title="原文: oidc-config"><code>oidc-config</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3RNpkT.3" title="原文 : OidcConfig"><router-link to="/config/io_helidon_security_providers_oidc_common_OidcConfig">OidcConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1ZeQ45.3" title="原文 : Use explicit io.helidon.security.providers.oidc.common.OidcConfig instance, e.g. when using it also for OIDC provider.">明示的なio.helidon.security.providers.oidc.common.OidcConfigインスタンスe.gを使用します。たとえば、OIDCプロバイダにも使用する場合。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3FHJq7.3"  title="原文: subject-types"><code>subject-types</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3DQ2UD.3" title="原文 : SubjectType[] (USER, SERVICE)">SubjectType[] (ユーザー、サービス)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.26725z.12"  title="原文: USER"><code>USER</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.42ZR2N.3.spl1" title="原文 : Add a supported subject type.">サポートされているサブジェクト・タイプを追加します。</span> <span class="merged" id="all.42ZR2N.3.spl2" title="原文 : If none added, io.helidon.security.SubjectType#USER is used.">追加されない場合は、io.helidon.security.SubjectType#USERが使用されます。</span> <span class="merged" id="all.42ZR2N.3.spl3" title="原文 : If any added, only the ones added will be used (e.g. if you want to use both io.helidon.security.SubjectType#USER and io.helidon.security.SubjectType#SERVICE, both need to be added.">追加した場合は、追加したもののみが使用されます(たとえば、io.helidon.security.SubjectType#USERとio.helidon.security.SubjectType#SERVICEの両方を使用する場合は、両方を追加する必要があります。</span> </p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>


<h4 id="_multi_tenant_idcs_role_mapper"><span class="merged" id="all.11XjyL" title="原文 : Multi-tenant IDCS Role Mapper">マルチテナントIDCSロール・マッパー</span></h4>
<div class="section">
<p><span class="merged" id="all.4LUQ25.1" title="原文 : Multitenant IDCS role mapping provider">マルチテナントIDCSロール・マッピング・プロバイダ</span></p>

<p><span class="merged" id="all.piari.1" title="原文 : Type: io.helidon.security.providers.idcs.mapper.IdcsMtRoleMapperProvider">タイプ: <a href="/apidocs/io.helidon.security.providers.idcs.mapper/io/helidon/security/providers/idcs/mapper/IdcsMtRoleMapperProvider.html" target="_blank">io.helidon.security.providers.idcs.mapper.IdcsMtRoleMapperProvider</a></span></p>

<markup
lang="text"
title="Config key"
>idcs-role-mapper</markup>

<p><span class="merged" id="all.31kiUh.35" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.xEHEP.14"  title="原文: io.helidon.security.spi.SecurityProvider"><code>io.helidon.security.spi.SecurityProvider</code></span></p>

</li>
<li>
<p><span class="merged" id="all.PsUPx.3"  title="原文: io.helidon.security.spi.SubjectMappingProvider"><code>io.helidon.security.spi.SubjectMappingProvider</code></span></p>

</li>
</ul>

</div>


<h4 id="_configuration_options_8"><span class="merged" id="all.3SKgM1.121"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.115" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.131"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.128"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.131"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.133"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.13yRix.3"  title="原文: cache-config"><code>cache-config</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1jdkVC.3" title="原文 : EvictableCache"><router-link to="/config/io_helidon_security_providers_common_EvictableCache">EvictableCache</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4MwfWq.3" title="原文 : Use explicit io.helidon.security.providers.common.EvictableCache for role caching.">ロール・キャッシングには明示的なio.helidon.security.providers.common.EvictableCacheを使用します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2IXvjO.4"  title="原文: default-idcs-subject-type"><code>default-idcs-subject-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.292"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3WzDhx.4"  title="原文: user"><code>user</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4TmZMT.4.spl1" title="原文 : Configure subject type to use when requesting roles from IDCS.">IDCSからロールをリクエストするときに使用するサブジェクト・タイプを構成します。</span> <span class="merged" id="all.4TmZMT.4.spl2" title="原文 : Can be either #IDCS_SUBJECT_TYPE_USER or #IDCS_SUBJECT_TYPE_CLIENT.">#IDCS_SUBJECT_TYPE_USERまたは#IDCS_SUBJECT_TYPE_CLIENTのいずれかです。</span> <span class="merged" id="all.4TmZMT.4.spl3" title="原文 : Defaults to #IDCS_SUBJECT_TYPE_USER.">デフォルトは#IDCS_SUBJECT_TYPE_USERです。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.255V8t.1"  title="原文: idcs-app-name-handler"><code>idcs-app-name-handler</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.XGoC5.11" title="原文 : TokenHandler"><router-link to="/config/io_helidon_security_util_TokenHandler">TokenHandler</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.d3OFQ.1.spl1" title="原文 : Configure token handler for IDCS Application name.">IDCSアプリケーション名のトークン・ハンドラを構成します。</span> <span class="merged" id="all.d3OFQ.1.spl2" title="原文 : By default the header IdcsMtRoleMapperProvider#IDCS_APP_HEADER is used.">デフォルトでは、ヘッダー<code>IdcsMtRoleMapperProvider#IDCS_APP_HEADER</code>が使用されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1AH7uN.1"  title="原文: idcs-tenant-handler"><code>idcs-tenant-handler</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.XGoC5.12" title="原文 : TokenHandler"><router-link to="/config/io_helidon_security_util_TokenHandler">TokenHandler</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.23oLhn.1.spl1" title="原文 : Configure token handler for IDCS Tenant ID.">IDCSテナントIDのトークン・ハンドラを構成します。</span> <span class="merged" id="all.23oLhn.1.spl2" title="原文 : By default the header IdcsMtRoleMapperProvider#IDCS_TENANT_HEADER is used.">デフォルトでは、ヘッダー<code>IdcsMtRoleMapperProvider#IDCS_TENANT_HEADER</code>が使用されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3iExOC.4"  title="原文: oidc-config"><code>oidc-config</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3RNpkT.4" title="原文 : OidcConfig"><router-link to="/config/io_helidon_security_providers_oidc_common_OidcConfig">OidcConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1ZeQ45.4" title="原文 : Use explicit io.helidon.security.providers.oidc.common.OidcConfig instance, e.g. when using it also for OIDC provider.">明示的なio.helidon.security.providers.oidc.common.OidcConfigインスタンスe.gを使用します。たとえば、OIDCプロバイダにも使用する場合。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3FHJq7.4"  title="原文: subject-types"><code>subject-types</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3DQ2UD.4" title="原文 : SubjectType[] (USER, SERVICE)">SubjectType[] (ユーザー、サービス)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.26725z.13"  title="原文: USER"><code>USER</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.42ZR2N.4.spl1" title="原文 : Add a supported subject type.">サポートされているサブジェクト・タイプを追加します。</span> <span class="merged" id="all.42ZR2N.4.spl2" title="原文 : If none added, io.helidon.security.SubjectType#USER is used.">追加されない場合は、io.helidon.security.SubjectType#USERが使用されます。</span> <span class="merged" id="all.42ZR2N.4.spl3" title="原文 : If any added, only the ones added will be used (e.g. if you want to use both io.helidon.security.SubjectType#USER and io.helidon.security.SubjectType#SERVICE, both need to be added.">追加した場合は、追加したもののみが使用されます(たとえば、io.helidon.security.SubjectType#USERとio.helidon.security.SubjectType#SERVICEの両方を使用する場合は、両方を追加する必要があります。</span> </p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>


<h4 id="_example_code_6"><span class="merged" id="all.mu2yS.5"  title="原文:: Example code">コード例</span></h4>
<div class="section">
<p><span class="merged" id="all.22fBmE" title="原文 : See the example on GitHub.">GitHubの<a href="https://github.com/oracle/helidon/tree/4.0.2/examples/security/idcs-login/" target="_blank">example</a>を参照してください。</span></p>

<markup
lang="yaml"
title="Configuration example"
>security:
  providers:
    - idcs-role-mapper:
        multitenant: false
        oidc-config:
            client-id: "client-id"
            client-secret: "client-secret"
            identity-uri: "IDCS identity server address"</markup>

</div>


<h4 id="_how_does_it_work_5"><span class="merged" id="all.aWBLA.5"  title="原文: How does it work?"> 動作の仕組み</span></h4>
<div class="section">
<p><span class="merged" id="all.38p0IC.spl1" title="原文 : The provider asks the IDCS server to provide list of roles for the currently authenticated user.">プロバイダはIDCSサーバーに、現在認証されているユーザーのロールのリストを提供するように依頼します。</span> <span class="merged" id="all.38p0IC.spl2" title="原文 : The result is cached for a certain period of time (see cache-config above).">結果は一定期間キャッシュされます(前述の<code>cache-config</code>を参照)。</span> </p>

</div>

</div>


<h3 id="_abac_provider"><span class="merged" id="all.1hilxP" title="原文 : ABAC Provider">ABACプロバイダ</span></h3>
<div class="section">
<p><span class="merged" id="all.1PMuwh" title="原文 : Attribute based access control authorization provider.">属性ベースのアクセス制御認可プロバイダ。</span></p>


<h4 id="_setup_7"><span class="merged" id="all.4BqnSO.6"  title="原文:: Setup">設定</span></h4>
<div class="section">
<markup
lang="xml"
title="Maven dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.security.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-security-providers-abac&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h4 id="_overview_5"><span class="merged" id="all.YrpRV.46"  title="原文:: Overview">概要</span></h4>
<div class="section">
<p><span class="merged" id="all.4bF52K.1" title="原文 : Attribute Based Access Control provider">属性ベースのアクセス制御プロバイダ</span></p>

<p><span class="merged" id="all.3zBAts.1" title="原文 : Type: io.helidon.security.providers.abac.AbacProvider">タイプ: <a href="/apidocs/io.helidon.security.providers.abac/io/helidon/security/providers/abac/AbacProvider.html" target="_blank">io.helidon.security.providers.abac.AbacProvider</a></span></p>

<markup
lang="text"
title="Config key"
>abac</markup>

<p><span class="merged" id="all.31kiUh.36" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.xEHEP.15"  title="原文: io.helidon.security.spi.SecurityProvider"><code>io.helidon.security.spi.SecurityProvider</code></span></p>

</li>
<li>
<p><span class="merged" id="all.1OWK4y.1"  title="原文: io.helidon.security.spi.AuthorizationProvider"><code>io.helidon.security.spi.AuthorizationProvider</code></span></p>

</li>
</ul>

</div>


<h4 id="_configuration_options_9"><span class="merged" id="all.3SKgM1.122"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.116" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.132"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.129"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.132"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.134"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.348v9l.1"  title="原文: fail-if-none-validated"><code>fail-if-none-validated</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.204"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.101"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.KK0T9.1" title="原文 : Whether to fail if NONE of the attributes is validated.">属性のNONEがバリデートされた場合、失敗するかどうか。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.dXhT6.1"  title="原文: fail-on-unvalidated"><code>fail-on-unvalidated</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.205"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.102"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1Q6ONQ.1" title="原文 : Whether to fail if any attribute is left unvalidated.">属性が未バリデートのままの場合、失敗するかどうか。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>


<h4 id="_example_code_7"><span class="merged" id="all.mu2yS.6"  title="原文:: Example code">コード例</span></h4>
<div class="section">
<p><span class="merged" id="all.3B3qRv" title="原文 : See the example on GitHub.">GitHubの<a href="https://github.com/oracle/helidon/tree/4.0.2/examples/security/attribute-based-access-control" target="_blank">example</a>を参照してください。</span></p>

<markup
lang="yaml"
title="Configuration example"
>security:
  providers:
    - abac:</markup>

</div>


<h4 id="_configuration_options_10"><span class="merged" id="all.3SKgM1.123"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<p><span class="merged" id="all.QSLwf" title="原文 : The following table shows all configuration options of the provider and their default values">次の表に、プロバイダのすべての構成オプションとそのデフォルト値を示します</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 22.222%;">
<col style="width: 22.222%;">
<col style="width: 55.556%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.133"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.G3u1e.133"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.135"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.dXhT6.2"  title="原文: fail-on-unvalidated"><code>fail-on-unvalidated</code></span></td>
<td class=""><span class="merged" id="all.xEiHU.103"  title="原文: true"><code>true</code></span></td>
<td class=""><span class="merged" id="all.PuOzo" title="原文 : &quot;Unvalidated&quot; means: an attribute is defined, but there is no validator available for it">「未バリデート」とは、: 属性が定義されていますが、使用可能なバリデータがありません</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.348v9l.2"  title="原文: fail-if-none-validated"><code>fail-if-none-validated</code></span></td>
<td class=""><span class="merged" id="all.xEiHU.104"  title="原文: true"><code>true</code></span></td>
<td class=""><span class="merged" id="all.2kIejh" title="原文 : &quot;None validated&quot; means: there was not a single attribute that was validated">「バリデートなし」は、: バリデートされた単一の属性がありませんでした</span></td>
</tr>
</tbody>
</table>
</div>

</div>


<h4 id="_how_does_it_work_6"><span class="merged" id="all.aWBLA.6"  title="原文: How does it work?"> 動作の仕組み</span></h4>
<div class="section">
<p><span class="merged" id="all.nxxf6" title="原文 : ABAC uses available validators and validates them against attributes of the authenticated user.">ABACは、使用可能なバリデータを使用して、認証されたユーザーの属性に対してバリデートします。</span></p>

<p><span class="merged" id="all.2wVCt5" title="原文 : Combinations of fail-on-unvalidated and fail-if-none-validated:"><code>fail-on-unvalidated</code>と<code>fail-if-none-validated</code>の組合せ:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.VE4Of" title="原文 : true &amp; true: Will fail if any attribute is not validated and if any has failed validation"><code>true</code> &amp; <code>true</code>: バリデートされていない属性がある場合、およびバリデーションに失敗した属性がある場合は失敗</span>

</li>
<li>
<span class="merged" id="all.2UuR0f" title="原文 : false &amp; true: Will fail if there is one or more attributes present and NONE of them is validated or if any has failed validation, Will NOT fail if there is at least one validated attribute and any number of not validated attributes (and NONE failed)"><code>false</code> &amp; <code>true</code>: 1つ以上の属性が存在し、そのいずれかがバリデートされなかった場合、またはバリデーションに失敗した場合は失敗します。バリデートされた属性が1つ以上あり、バリデートされなかった属性の数(およびNONEが失敗した場合)は失敗しません</span>

</li>
<li>
<span class="merged" id="all.49BjyI" title="原文 : false &amp; false: Will fail if there is any attribute that failed validation, Will NOT fail if there are no failed validation or if there are NONE validated"><code>false</code> &amp; <code>false</code>: バリデーションに失敗した属性がある場合は失敗し、バリデートに失敗しなかった場合またはNONEがバリデートされている場合は失敗しません</span>

</li>
</ol>

<p><span class="merged" id="all.2RvWEE" title="原文 : Any attribute of the following objects can be used:">次のオブジェクトの任意の属性を使用できます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.uGxGY" title="原文 : environment (such as time of request) - e.g. env.time.year">環境(リクエストの時間など) - たとえばenv.time.year</span></p>

</li>
<li>
<p><span class="merged" id="all.IIRGe" title="原文 : subject (user) - e.g. subject.principal.id">サブジェクト (ユーザー) - たとえばsubject.principal.id</span></p>

</li>
<li>
<p><span class="merged" id="all.c9pH0" title="原文 : subject (service) - e.g. service.principal.id">サブジェクト (サービス) - たとえばservice.principal.id</span></p>

</li>
<li>
<p><span class="merged" id="all.4Zx5TX" title="原文 : object (must be explicitly invoked by developer in code, as object cannot be automatically added to security context) - e.g. object.owner">オブジェクト (オブジェクトはセキュリティ・コンテキストに自動的に追加できないため、コードで開発者が明示的に呼び出す必要があります) - たとえばobject.owner</span></p>

</li>
</ul>

<p><span class="merged" id="all.11tgoV.spl1" title="原文 : This provider checks that all defined ABAC validators are validated.">このプロバイダは、定義されているすべてのABACバリデータがバリデートされていることを確認します。</span> <span class="merged" id="all.11tgoV.spl2" title="原文 : If there is a definition for a validator that is not checked, the request is denied (depending on configuration as mentioned above).">チェックされていないバリデータの定義がある場合、(前述の構成に応じて)リクエストは拒否されます。</span> </p>

<p><span class="merged" id="all.t7VTR.spl1" title="原文 : ABAC provider also allows an object to be used in authorization process, such as when evaluating if an object’s owner is the current user.">ABACプロバイダを使用すると、オブジェクトの所有者が現在のユーザーかどうかを評価する場合など、認可プロセスでオブジェクトを使用することもできます。</span> <span class="merged" id="all.t7VTR.spl2" title="原文 : The following example uses the Expression language validator to demonstrate the point in a JAX-RS resource:">次の例では、式言語バリデータを使用してJAX-RSリソースのポイントを示します:</span> </p>

<markup
lang="java"
title="Example of using an object"
>@Authenticated
@Path("/abac")
public class AbacResource {
  @GET
  @Authorized(explicit = true)
  @PolicyStatement("${env.time.year &gt;= 2017 &amp;&amp; object.owner == subject.principal.id}")
  public Response process(@Context SecurityContext context) {
      // probably looked up from a database
      SomeResource res = new SomeResource("user");
      AuthorizationResponse atzResponse = context.authorize(res);

      if (atzResponse.isPermitted()) {
          //do the update
          return Response.ok().entity("fine, sir").build();
      } else {
          return Response.status(Response.Status.FORBIDDEN)
                  .entity(atzResponse.description().orElse("Access not granted"))
                  .build();
      }
  }
}</markup>

<p><span class="merged" id="all.3JVvgQ" title="原文 : The following validators are implemented:"><strong>次のバリデータが実装されています:</strong></span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4di8OF" title="原文 : Roles"><router-link @click.native="this.scrollFix('#_role_validator')" to="#_role_validator">Roles</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1Vn5S" title="原文 : Scopes"><router-link @click.native="this.scrollFix('#_scope_validator')" to="#_scope_validator">スコープ</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2Rke7i" title="原文 : EL Policy"><router-link @click.native="this.scrollFix('#_expression_language_policy_validator')" to="#_expression_language_policy_validator">ELポリシー</router-link></span></p>

</li>
</ul>

</div>


<h4 id="_role_validator"><span class="merged" id="all.4AJMJ0" title="原文 : Role Validator">ロール検証プログラム</span></h4>
<div class="section">
<p><span class="merged" id="all.4VscT8" title="原文 : Checks whether user/service is in either of the required role(s).">ユーザー/サービスが必要なロールのいずれかであるかどうかを確認します。</span></p>

<p><span class="merged" id="all.2PDbIZ" title="原文 : Configuration Key: role-validator">構成キー: <code>role-validator</code></span></p>

<p><span class="merged" id="all.1XmBMN" title="原文 : Annotations: @RolesAllowed, @RoleValidator.Roles">注釈: <code>@RolesAllowed</code>, <code>@RoleValidator.Roles</code></span></p>

<markup
lang="yaml"
title="Configuration example for <code>WebServer</code>"
>security:
  web-server.paths:
    - path: "/user[/{*}]"
      roles-allowed: ["user"]</markup>

<markup
lang="java"
title="JAX-RS example"
>@RolesAllowed("user")
@RoleValidator.Roles(value = "service_role", subjectType = SubjectType.SERVICE)
@Authenticated
@Path("/abac")
public class AbacResource {
}</markup>


<h5 id="_interaction_with_jax_rs_sub_resource_locators"><span class="merged" id="all.131Q2q" title="原文 : Interaction with JAX-RS sub-resource locators">JAX-RSサブリソース・ロケータとの相互作用</span></h5>
<div class="section">
<p><span class="merged" id="all.3kSRU9" title="原文 : When using sub-resource locators in JAX-RS, the roles allowed are collected from each &quot;level&quot; of execution: - Application class annotations - Resource class annotations + resource method annotations - Sub-resource class annotations + sub-resource method annotations - Sub-resource class annotations + sub-resource method annotations (for every sub-resource on the path)">JAX-RSでサブリソース・ロケータを使用する場合、許可されるロールは実行の各レベルから収集されます: - アプリケーション・クラスの注釈 - リソース・クラス注釈+リソース・メソッド注釈 - サブリソース・クラスの注釈+サブリソース・メソッドの注釈 - サブリソース・クラス注釈+サブリソース・メソッド注釈(パス上のすべてのサブリソース)</span></p>

<p><span class="merged" id="all.3Tx25s" title="原文 : The RolesAllowed or Roles annotation to be used is the last one in the path as defined above.">使用する<code>RolesAllowed</code>または<code>Roles</code>注釈は、前述のようにパスの最後の注釈です。</span></p>

<p><span class="merged" id="all.3cN7I7.spl1" title="原文 : Example 1: There is a RolesAllowed(&quot;admin&quot;) defined on a sub-resource locator resource class."><em>例1:</em> サブリソース・ロケータ・リソース・クラスに<code>RolesAllowed("admin")</code>が定義されています。</span> <span class="merged" id="all.3cN7I7.spl2" title="原文 : In this case the required role is admin.">この場合、必要なロールは<code>admin</code>です。</span> </p>

<p><span class="merged" id="all.1Ayd2p.spl1" title="原文 : Example 2: There is a RolesAllowed(&quot;admin&quot;) defined on a sub-resource locator resource class and a RolesAllowed(&quot;user&quot;) defined on the method of the sub-resource that provides the response."><em>例2:</em> サブリソース・ロケータ・リソース・クラスで定義された<code>RolesAllowed("admin")</code>と、レスポンスを提供するサブリソースのメソッドで定義された<code>RolesAllowed("user")</code>があります。</span> <span class="merged" id="all.1Ayd2p.spl2" title="原文 : In this case the required role is user.">この場合、必要なロールは<code>user</code>です。</span> </p>

</div>

</div>


<h4 id="_scope_validator"><span class="merged" id="all.1HDtcM" title="原文 : Scope Validator">Scope Validator</span></h4>
<div class="section">
<p><span class="merged" id="all.42tE1G" title="原文 : Checks whether user has all the required scopes.">ユーザーが必要なスコープをすべて持っているかどうかを確認します。</span></p>

<p><span class="merged" id="all.247XRq" title="原文 : Configuration Key: scope-validator">構成キー: <code>scope-validator</code></span></p>

<p><span class="merged" id="all.1korAz" title="原文 : Annotations: @Scope">注釈: <code>@Scope</code></span></p>

<markup
lang="yaml"
title="Configuration example for <code>WebServer</code>"
>security:
  web-server.paths:
    - path: "/user[/{*}]"
      abac.scopes:
        ["calendar_read", "calendar_edit"]</markup>

<markup
lang="java"
title="JAX-RS example"
>@Scope("calendar_read")
@Scope("calendar_edit")
@Authenticated
@Path("/abac")
public class AbacResource {
}</markup>

</div>


<h4 id="_expression_language_policy_validator"><span class="merged" id="all.136O34" title="原文 : Expression Language Policy Validator">式言語ポリシー・バリデータ</span></h4>
<div class="section">
<p><span class="merged" id="all.a6Ni6" title="原文 : Policy executor using Java EE policy expression language (EL)">Java EE Policy Expression Language (EL)を使用するポリシー・エグゼキュータ</span></p>

<p><span class="merged" id="all.3MQfyr" title="原文 : Configuration Key: policy-javax-el">構成キー: <code>policy-javax-el</code></span></p>

<p><span class="merged" id="all.3ispWp" title="原文 : Annotations: @PolicyStatement">注釈: <code>@PolicyStatement</code></span></p>

<p><span class="merged" id="all.IlSpT" title="原文 : Example of a policy statement: ${env.time.year &gt;= 2017}">ポリシー・ステートメントの例: <code>${env.time.year >= 2017}</code></span></p>

<markup
lang="yaml"
title="Configuration example for <code>WebServer</code>"
>security:
  web-server.paths:
    - path: "/user[/{*}]"
      policy:
        statement: "hasScopes('calendar_read','calendar_edit') AND timeOfDayBetween('8:15', '17:30')"</markup>

<markup
lang="java"
title="JAX-RS example"
>@PolicyStatement("${env.time.year &gt;= 2017}")
@Authenticated
@Path("/abac")
public class AbacResource {
}</markup>

</div>

</div>


<h3 id="_google_login_provider"><span class="merged" id="all.4aXokY" title="原文 : Google Login Provider">Googleログイン・プロバイダ</span></h3>
<div class="section">
<p><span class="merged" id="all.2yrmuj" title="原文 : Authenticates a token from request against Google identity provider">Googleアイデンティティ・プロバイダに対するリクエストからのトークンを認証</span></p>


<h4 id="_setup_8"><span class="merged" id="all.4BqnSO.7"  title="原文:: Setup">設定</span></h4>
<div class="section">
<markup
lang="xml"
title="Maven dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.security.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-security-providers-google-login&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h4 id="_overview_6"><span class="merged" id="all.YrpRV.47"  title="原文:: Overview">概要</span></h4>
<div class="section">
<p><span class="merged" id="all.1M4tHs.1" title="原文 : Google Authentication provider">Google認証プロバイダ</span></p>

<p><span class="merged" id="all.3t4JwA.1" title="原文 : Type: io.helidon.security.providers.google.login.GoogleTokenProvider">タイプ: <a href="/apidocs/io.helidon.security.providers.google.login/io/helidon/security/providers/google/login/GoogleTokenProvider.html" target="_blank">io.helidon.security.providers.google.login.GoogleTokenProvider</a></span></p>

<markup
lang="text"
title="Config key"
>google-login</markup>

<p><span class="merged" id="all.31kiUh.37" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.xEHEP.16"  title="原文: io.helidon.security.spi.SecurityProvider"><code>io.helidon.security.spi.SecurityProvider</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2t170n.12"  title="原文: io.helidon.security.spi.AuthenticationProvider"><code>io.helidon.security.spi.AuthenticationProvider</code></span></p>

</li>
</ul>

</div>


<h4 id="_configuration_options_11"><span class="merged" id="all.3SKgM1.124"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.117" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.134"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.130"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.134"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.136"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.41Kf4l.10"  title="原文: client-id"><code>client-id</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.293"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.e9e0u.1" title="原文 : Google application client id, to validate that the token was generated by Google for us.">トークンがGoogleによって生成されたことをバリデートするためのGoogleアプリケーション・クライアントID。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Zagyj.14"  title="原文: optional"><code>optional</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.206"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.75"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.TmbKe.1" title="原文 : If set to true, this provider will return io.helidon.security.SecurityResponse.SecurityStatus#ABSTAIN instead of failing in case of invalid request.">trueに設定すると、無効なリクエストが発生した場合に、このプロバイダは失敗するかわりにio.helidon.security.SecurityResponse.SecurityStatus#ABSTAINを返します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.46DWSr.10"  title="原文: outbound"><code>outbound</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4bsOHT.4" title="原文 : OutboundConfig"><router-link to="/config/io_helidon_security_providers_common_OutboundConfig">OutboundConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.43dOT7.1" title="原文 : Outbound configuration - a set of outbound targets that will have the token propagated.">アウトバウンド構成 - トークンが伝播されるアウトバウンド・ターゲットのセット。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.37YgdV.5"  title="原文: proxy-host"><code>proxy-host</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.294"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.23PQ2F.1" title="原文 : Set proxy host when talking to Google.">Googleと通信するときにプロキシ・ホストを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3687nw.5"  title="原文: proxy-port"><code>proxy-port</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.77"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1doYAE.5"  title="原文: 80"><code>80</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2NR8Lc.1" title="原文 : Set proxy port when talking to Google.">Googleと通信するときにプロキシ・ポートを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.10Bdny.7"  title="原文: realm"><code>realm</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.295"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.V69kn.5"  title="原文: helidon"><code>helidon</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3MBRUW.1" title="原文 : Set the authentication realm to build challenge, defaults to &quot;helidon&quot;.">認証レルムを設定してチャレンジを構築します。デフォルトは「helidon」です。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.GIClf.1"  title="原文: token"><code>token</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.XGoC5.13" title="原文 : TokenHandler"><router-link to="/config/io_helidon_security_util_TokenHandler">TokenHandler</router-link></span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.BSOdO.1"  title="原文: `Authorization` header with `bearer` prefix"><code>`Authorization` header with `bearer` prefix</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2aQOcj.1" title="原文 : Token provider to extract Google access token from request, defaults to &quot;Authorization&quot; header with a &quot;bearer &quot; prefix.">リクエストからGoogleアクセス・トークンを抽出するトークン・プロバイダ。デフォルトで"bearer"プレフィクス付きの"Authorization"ヘッダーに設定されます。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>


<h4 id="_example_code_8"><span class="merged" id="all.mu2yS.7"  title="原文:: Example code">コード例</span></h4>
<div class="section">
<p><span class="merged" id="all.1oEZtt" title="原文 : See the example on GitHub.">GitHubの<a href="https://github.com/oracle/helidon/tree/4.0.2/examples/security/google-login" target="_blank">example</a>を参照してください。</span></p>

<markup
lang="yaml"
title="Configuration example"
>security:
  providers:
    - provider:
        client-id: "Google client id"</markup>

</div>


<h4 id="_how_does_it_work_7"><span class="merged" id="all.aWBLA.7"  title="原文: How does it work?"> 動作の仕組み</span></h4>
<div class="section">
<p><span class="merged" id="all.2tDQSL.spl1" title="原文 : We expect to receive a token (with sufficient scopes) from the inbound request, such as when using the Google login button on a page.">ページのGoogleログイン・ボタンを使用する場合など、インバウンド・リクエストから(十分なスコープの)トークンを受信する必要があります。</span> <span class="merged" id="all.2tDQSL.spl2" title="原文 : The page has access to the token in javascript and can send it to backend with every request in a header field (Authorization with `bearer ` prefix is assumed by default).">ページにはjavascriptのトークンへのアクセス権があり、ヘッダー・フィールドのすべてのリクエストとともにバックエンドに送信できます(デフォルトでは`bearer`プレフィクスの付いた<code>Authorization</code>)。</span> </p>

<p><span class="merged" id="all.1KvOUO" title="原文 : Once we receive the token in Helidon, we parse it and:">Helidonでトークンを受信したら、それを解析して次のことを行います:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1XFk0r" title="原文 : Validate if it timed out locally">ローカルでタイムアウトしたかどうかをバリデート</span>

</li>
<li>
<span class="merged" id="all.3qxYb4" title="原文 : Return a cached response (see EvictableCache with default values)">キャッシュされたレスポンスを返します(デフォルト値は<code>EvictableCache</code>を参照)</span>

</li>
<li>
<span class="merged" id="all.1GLxTO" title="原文 : Otherwise verify using Google API - GoogleIdTokenVerifier">それ以外の場合は、Google APIを使用して検証してください - <code>GoogleIdTokenVerifier</code></span>

</li>
</ol>

<p><span class="merged" id="all.xZFpD" title="原文 : We build a subject from the Google token with the following attributes filled (if in token):">次の属性が入力されたGoogleトークン(トークン内にある場合)からサブジェクトをビルドします:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1qLg6u"  title="原文: userId">userId</span></p>

</li>
<li>
<p><span class="merged" id="all.4EvdcC"  title="原文:: email">email</span></p>

</li>
<li>
<p><span class="merged" id="all.1isw0k"  title="原文:: name">name</span></p>

</li>
<li>
<p><span class="merged" id="all.1AMMJx"  title="原文: emailVerified">emailVerified</span></p>

</li>
<li>
<p><span class="merged" id="all.1CN7Iu"  title="原文:: locale">locale</span></p>

</li>
<li>
<p><span class="merged" id="all.m3wcU"  title="原文:: family_name">family_name</span></p>

</li>
<li>
<p><span class="merged" id="all.1pekIR"  title="原文:: given_name">given_name</span></p>

</li>
<li>
<p><span class="merged" id="all.3WkBkf" title="原文 : picture (URL)">picture (URL)</span></p>

</li>
</ul>

<p><span class="merged" id="all.4BC9qZ" title="原文 : Outbound security The token will be propagated to outbound calls if an outbound target exists that matches the invoked endpoint (see outbound configuration above)."><strong>「アウトバウンド・セキュリティ」</strong>呼出したエンドポイントに一致するアウトバウンド・ターゲットが存在する場合、トークンはアウトバウンド呼出しに伝播されます(前述の<code>outbound</code>の構成を参照)。</span></p>

</div>

</div>


<h3 id="_jwt_provider"><span class="merged" id="all.3kJ5cx" title="原文 : JWT Provider">JWTプロバイダ</span></h3>
<div class="section">
<p><span class="merged" id="all.JzQLt" title="原文 : JWT token authentication and outbound security provider.">JWTトークン認証およびアウトバウンド・セキュリティ・プロバイダ。</span></p>


<h4 id="_setup_9"><span class="merged" id="all.4BqnSO.8"  title="原文:: Setup">設定</span></h4>
<div class="section">
<markup
lang="xml"
title="Maven dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.security.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-security-providers-jwt&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h4 id="_overview_7"><span class="merged" id="all.YrpRV.48"  title="原文:: Overview">概要</span></h4>
<div class="section">
<p><span class="merged" id="all.4NSKji.1" title="原文 : JWT authentication provider">JWT認証プロバイダ</span></p>

<p><span class="merged" id="all.4JwVsP.1" title="原文 : Type: io.helidon.security.providers.jwt.JwtProvider">タイプ: <a href="/apidocs/io.helidon.security.providers.jwt/io/helidon/security/providers/jwt/JwtProvider.html" target="_blank">io.helidon.security.providers.jwt.JwtProvider</a></span></p>

<markup
lang="text"
title="Config key"
>jwt</markup>

<p><span class="merged" id="all.31kiUh.38" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.xEHEP.17"  title="原文: io.helidon.security.spi.SecurityProvider"><code>io.helidon.security.spi.SecurityProvider</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2t170n.13"  title="原文: io.helidon.security.spi.AuthenticationProvider"><code>io.helidon.security.spi.AuthenticationProvider</code></span></p>

</li>
</ul>

</div>


<h4 id="_configuration_options_12"><span class="merged" id="all.3SKgM1.125"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.118" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.135"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.131"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.135"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.137"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.33lhdA.1"  title="原文: allow-impersonation"><code>allow-impersonation</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.207"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.76"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2u6pc3.1.spl1" title="原文 : Whether to allow impersonation by explicitly overriding username from outbound requests using io.helidon.security.EndpointConfig#PROPERTY_OUTBOUND_ID property.">io.helidon.security.EndpointConfig#PROPERTY_OUTBOUND_IDプロパティを使用して、アウトバウンド・リクエストからユーザー名を明示的にオーバーライドして偽装を許可するかどうか。</span> <span class="merged" id="all.2u6pc3.1.spl2" title="原文 : By default this is not allowed and identity can only be propagated.">デフォルトでは、これは許可されず、アイデンティティのみを伝播できます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2XHgJT.1"  title="原文: allow-unsigned"><code>allow-unsigned</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.208"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.77"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4cu4dz.1.spl1" title="原文 : Configure support for unsigned JWT.">署名されていないJWTのサポートを構成します。</span> <span class="merged" id="all.4cu4dz.1.spl2" title="原文 : If this is set to true any JWT that has algorithm set to none and no kid defined will be accepted.">これが<code>true</code>に設定されている場合、アルゴリズムが<code>none</code>に設定され、<code>kid</code>が定義されていないJWTは受け入れられます。</span> <span class="merged" id="all.4cu4dz.1.spl3" title="原文 : Note that this has serious security impact - if JWT can be sent from a third party, this allows the third party to send ANY JWT and it would be accpted as valid.">これは重大なセキュリティの影響があることに注意してください - JWTをサード・パーティから送信できる場合、これによってサード・パーティは任意のJWTを送信でき、そのJWTは有効なものとして計上されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.y0cAd.3"  title="原文: atn-token.handler"><code>atn-token.handler</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.XGoC5.14" title="原文 : TokenHandler"><router-link to="/config/io_helidon_security_util_TokenHandler">TokenHandler</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3NoL9T.3" title="原文 : Token handler to extract username from request.">リクエストからユーザー名を抽出するトークン・ハンドラ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4QJKdb.3"  title="原文: atn-token.jwk.resource"><code>atn-token.jwk.resource</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.29" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ysZpH.1" title="原文 : JWK resource used to verify JWTs created by other parties.">他のパーティによって作成されたJWTの検証に使用されるJWKリソース。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2cNZqK.3"  title="原文: atn-token.jwt-audience"><code>atn-token.jwt-audience</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.296"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1x0Gw7.1" title="原文 : Audience expected in inbound JWTs.">インバウンドJWTに必要なオーディエンスです。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1RN5FE.3"  title="原文: atn-token.verify-signature"><code>atn-token.verify-signature</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.209"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.105"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.39O0BA.1.spl1" title="原文 : Configure whether to verify signatures.">シグネチャを検証するかどうかを構成します。</span> <span class="merged" id="all.39O0BA.1.spl2" title="原文 : Signatures verification is enabled by default.">シグネチャの検証はデフォルトで有効になっています。</span> <span class="merged" id="all.39O0BA.1.spl3" title="原文 : You can configure the provider not to verify signatures.">シグネチャを検証しないようにプロバイダを構成できます。</span> </p>

<markup>&lt;b&gt;Make sure your service is properly secured on network level and only
accessible from a secure endpoint that provides the JWTs when signature verification
is disabled. If signature verification is disabled, this service will accept &lt;i&gt;ANY&lt;/i&gt; JWT&lt;/b&gt;</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.24OC9j.7"  title="原文: authenticate"><code>authenticate</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.210"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.106"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1KwUDO.3" title="原文 : Whether to authenticate requests.">リクエストを認証するかどうか。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Zagyj.15"  title="原文: optional"><code>optional</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.211"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.78"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4YdVG5.3.spl1" title="原文 : Whether authentication is required.">認証が必須かどうか。</span> <span class="merged" id="all.4YdVG5.3.spl2" title="原文 : By default, request will fail if the username cannot be extracted.">デフォルトでは、ユーザー名を抽出できない場合、リクエストは失敗します。</span> <span class="merged" id="all.4YdVG5.3.spl3" title="原文 : If set to false, request will process and this provider will abstain.">falseに設定すると、リクエストは処理され、このプロバイダは中断します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4V6kvV.10"  title="原文: principal-type"><code>principal-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4F7kFa.8" title="原文 : SubjectType (USER, SERVICE)">SubjectType (ユーザー、サービス)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.26725z.14"  title="原文: USER"><code>USER</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ksLfL.7" title="原文 : Principal type this provider extracts (and also propagates).">このプロバイダが抽出するプリンシパル・タイプ(および伝播)。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3SEgfv.7"  title="原文: propagate"><code>propagate</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.212"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.107"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.138iGd.5" title="原文 : Whether to propagate identity.">アイデンティティを伝播するかどうか。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.21Q9we.3"  title="原文: sign-token"><code>sign-token</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4bsOHT.5" title="原文 : OutboundConfig"><router-link to="/config/io_helidon_security_providers_common_OutboundConfig">OutboundConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.n8gco.1" title="原文 : Configuration of outbound rules.">アウトバウンド・ルールの構成。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.xtSaw.3"  title="原文: sign-token.jwk.resource"><code>sign-token.jwk.resource</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.30" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2Yp4lz.1" title="原文 : JWK resource used to sign JWTs created by us.">作成されたJWTの署名に使用されるJWKリソース。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1jxKXY.3"  title="原文: sign-token.jwt-issuer"><code>sign-token.jwt-issuer</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.297"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1LV6Qd.1" title="原文 : Issuer used to create new JWTs.">新規JWTの作成に使用される発行者。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.22WMEh.3"  title="原文: use-jwt-groups"><code>use-jwt-groups</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.213"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.108"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.UUSmh.3" title="原文 : Claim groups from JWT will be used to automatically add groups to current subject (may be used with jakarta.annotation.security.RolesAllowed annotation).">JWTからの請求<code>groups</code>は、現在のサブジェクトにグループを自動的に追加するために使用されます(jakarta.annotation.security.RolesAllowed注釈とともに使用できます)。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>


<h4 id="_example_code_9"><span class="merged" id="all.mu2yS.8"  title="原文:: Example code">コード例</span></h4>
<div class="section">
<p><span class="merged" id="all.1FLvP5.1" title="原文 : See the example on GitHub.">GitHubの<a href="https://github.com/oracle/helidon/tree/4.0.2/examples/security/outbound-override" target="_blank">example</a>を参照してください。</span></p>

<markup
lang="yaml"
title="Configuration example"
>security:
  providers:
    - provider:
        atn-token:
          jwk.resource.resource-path: "verifying-jwk.json"
          jwt-audience: "http://my.service"
        sign-token:
          jwk.resource.resource-path: "signing-jwk.json"
          jwt-issuer: "http://my.server/identity"
          outbound:
          - name: "propagate-token"
            hosts: ["*.internal.org"]
          - name: "generate-token"
            hosts: ["1.partner-service"]
            jwk-kid: "partner-1"
            jwt-kid: "helidon"
            jwt-audience: "http://1.partner-service"</markup>

</div>


<h4 id="_how_does_it_work_8"><span class="merged" id="all.aWBLA.8"  title="原文: How does it work?"> 動作の仕組み</span></h4>
<div class="section">
<p><span class="merged" id="all.2DqKzG" title="原文 : JSON Web Token (JWT) provider has support for authentication and outbound security.">JSON Web Token (JWT)プロバイダは、認証およびアウトバウンド・セキュリティをサポートしています。</span></p>

<p><span class="merged" id="all.29dA20" title="原文 : Authentication is based on validating the token (signature, valid before etc.) and on asserting the subject of the JWT subject claim.">認証は、トークン(シグネチャ、前に有効など)の検証およびJWTサブジェクト要求のサブジェクトのアサートに基づきます。</span></p>

<p><span class="merged" id="all.2ZHPKp" title="原文 : For outbound, we support either token propagation (e.g. the token from request is propagated further) or support for generating a brand new token based on configuration of this provider.">アウトバウンドの場合、トークンの伝播(リクエストからのトークンがさらに伝播されるなど)またはこのプロバイダの構成に基づいた新しいトークンの生成のサポートがサポートされます。</span></p>

</div>

</div>

</div>

</doc-view>
