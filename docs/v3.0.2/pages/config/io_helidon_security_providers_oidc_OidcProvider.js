<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3J62LK" title="原文 : OidcProvider (security.providers.oidc) Configuration">OidcProvider (security.providers.oidc)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.4YC6qf" title="原文 : Open ID Connect security provider">Open ID Connectセキュリティ・プロバイダ</span></p>

<p><span class="merged" id="all.V4NKy" title="原文 : Type: io.helidon.security.providers.oidc.OidcProvider">タイプ: <a href="./apidocs/io.helidon.security.providers.oidc/io/helidon/security/providers/oidc/OidcProvider.html" target="_blank">io.helidon.security.providers.oidc.OidcProvider</a></span></p>

<markup
lang="text"
title="Config key"
>oidc</markup>

<p><span class="merged" id="all.31kiUh.11" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2t170n.6"  title="原文: io.helidon.security.spi.AuthenticationProvider"><code>io.helidon.security.spi.AuthenticationProvider</code></span></p>

</li>
<li>
<p><span class="merged" id="all.xEHEP.8"  title="原文: io.helidon.security.spi.SecurityProvider"><code>io.helidon.security.spi.SecurityProvider</code></span></p>

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


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.47"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.48" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.55"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.55"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.55"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.55"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4WSwQo"  title="原文: audience"><code>audience</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.107"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1rk5GA" title="原文 : Audience of issued tokens.">発行されたトークンのオーディエンス。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2dGFWv"  title="原文: authorization-endpoint-uri"><code>authorization-endpoint-uri</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.LGnjn.1"  title="原文:: URI">URI</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4f8bIn" title="原文 : URI of an authorization endpoint used to redirect users to for logging-in.">ログイン用にユーザーをリダイレクトするために使用される認可エンドポイントのURI。</span></p>

<markup>If not defined, it is obtained from #oidcMetadata(Resource), if that is not defined
an attempt is made to use #identityUri(URI)/oauth2/v1/authorize.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2yeZYT"  title="原文: base-scopes"><code>base-scopes</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.108"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3UG2d9"  title="原文: openid"><code>openid</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2jtxrk.spl1" title="原文 : Configure base scopes.">ベース・スコープを構成します。</span> <span class="merged" id="all.2jtxrk.spl2" title="原文 : By default this is DEFAULT_BASE_SCOPES.">デフォルトでは、これは<code>DEFAULT_BASE_SCOPES</code>です。</span> <span class="merged" id="all.2jtxrk.spl3" title="原文 : If scope has a qualifier, it must be used here.">スコープに修飾子がある場合は、ここで使用する必要があります。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.41Kf4l.1"  title="原文: client-id"><code>client-id</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.109"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.7UCCr" title="原文 : Client ID as generated by OIDC server.">OIDCサーバーによって生成されたクライアントID。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2ahXIk"  title="原文: client-secret"><code>client-secret</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.110"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4JaO38.spl1" title="原文 : Client secret as generated by OIDC server.">OIDCサーバーによって生成されたクライアント・シークレット。</span> <span class="merged" id="all.4JaO38.spl2" title="原文 : Used to authenticate this application with the server when requesting JWT based on a code.">コードに基づいてJWTをリクエストするときにサーバーでこのアプリケーションを認証するために使用されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.CibQW"  title="原文: client-timeout-millis"><code>client-timeout-millis</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.6"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2n7Tym"  title="原文: 30000"><code>30000</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3XFAWx" title="原文 : Timeout of calls using web client.">webクライアントを使用したコールのタイムアウト。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3w8IzP"  title="原文: cookie-domain"><code>cookie-domain</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.111"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1UWDFB.spl1" title="原文 : Domain the cookie is valid for.">cookieが有効なドメイン。</span> <span class="merged" id="all.1UWDFB.spl2" title="原文 : Not used by default.">デフォルトでは使用されません。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3j6mTC"  title="原文: cookie-http-only"><code>cookie-http-only</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.59"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.29"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2pNR0y.spl1" title="原文 : When using cookie, if set to true, the HttpOnly attribute will be configured.">Cookieを使用する場合、trueに設定すると、HttpOnly属性が構成されます。</span> <span class="merged" id="all.2pNR0y.spl2" title="原文 : Defaults to OidcCookieHandler.Builder#DEFAULT_HTTP_ONLY.">デフォルトは<code>OidcCookieHandler.Builder#DEFAULT_HTTP_ONLY</code>です。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4F9l7D"  title="原文: cookie-max-age-seconds"><code>cookie-max-age-seconds</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.17"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1kfOfF.spl1" title="原文 : When using cookie, used to set MaxAge attribute of the cookie, defining how long the cookie is valid.">Cookieを使用する場合、CookieのMaxAge属性の設定に使用され、Cookieの有効期間を定義します。</span> <span class="merged" id="all.1kfOfF.spl2" title="原文 : Not used by default.">デフォルトでは使用されません。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.18IeUS"  title="原文: cookie-name"><code>cookie-name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.112"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4EFbwH"  title="原文: JSESSIONID"><code>JSESSIONID</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2TrnC2.spl1" title="原文 : Name of the cookie to use.">使用するcookieの名前。</span> <span class="merged" id="all.2TrnC2.spl2" title="原文 : Defaults to DEFAULT_COOKIE_NAME.">デフォルトは<code>DEFAULT_COOKIE_NAME</code>です。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1eF4as"  title="原文: cookie-path"><code>cookie-path</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.113"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.UUSmx"  title="原文: /"><code>/</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3tAfkz.spl1" title="原文 : Path the cookie is valid for.">Cookieが有効なパス。</span> <span class="merged" id="all.3tAfkz.spl2" title="原文 : Defaults to &quot;/&quot;.">デフォルトは"/"です。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.V6Z8i"  title="原文: cookie-same-site"><code>cookie-same-site</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1ZQKPE" title="原文 : SameSite (LAX, STRICT, NONE)">SameSite (LAX、STRICT、NONE)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1Qxz2u"  title="原文: LAX"><code>LAX</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.404409.spl1" title="原文 : When using cookie, used to set the SameSite cookie value.">Cookieを使用する場合、SameSite cookie値の設定に使用されます。</span> <span class="merged" id="all.404409.spl2" title="原文 : Can be &quot;Strict&quot; or &quot;Lax&quot;.">「Strict」または「Lax」を指定できます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4bbWxu"  title="原文: cookie-secure"><code>cookie-secure</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.60"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.21"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3QDDpw.spl1" title="原文 : When using cookie, if set to true, the Secure attribute will be configured.">Cookieを使用する場合、trueに設定すると、Secure属性が構成されます。</span> <span class="merged" id="all.3QDDpw.spl2"  title="原文:: Defaults to false.">デフォルトはfalseです。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3UkeuT"  title="原文: cookie-use"><code>cookie-use</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.61"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.30"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.29EziD.spl1" title="原文 : Whether to use cookie to store JWT between requests.">cookieを使用してリクエスト間でJWTを格納するかどうか。</span> <span class="merged" id="all.29EziD.spl2" title="原文 : Defaults to DEFAULT_COOKIE_USE.">デフォルトは<code>DEFAULT_COOKIE_USE</code>です。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3UsoFV.6"  title="原文: cors"><code>cors</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1Gn61H.6" title="原文 : CrossOriginConfig"><router-link to="/config/io_helidon_webserver_cors_CrossOriginConfig">CrossOriginConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2bk3Jg" title="原文 : Assign cross-origin resource sharing settings.">クロス・オリジンのリソース共有設定を割り当てます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.MOiXd"  title="原文: force-https-redirects"><code>force-https-redirects</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.62"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.22"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3SJ4A4.spl1" title="原文 : Force HTTPS for redirects to identity provider.">アイデンティティ・プロバイダへのリダイレクトのためにHTTPSを強制します。</span> <span class="merged" id="all.3SJ4A4.spl2"  title="原文:: Defaults to false.">デフォルトは<code>false</code>です。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.8tmrZ"  title="原文: frontend-uri"><code>frontend-uri</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.114"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Ip5hd.spl1" title="原文 : Full URI of this application that is visible from user browser.">ユーザー・ブラウザから表示されるこのアプリケーションの完全なURI。</span> <span class="merged" id="all.4Ip5hd.spl2" title="原文 : Used to redirect request back from identity server after successful login.">ログイン成功後にアイデンティティ・サーバーからリクエストをリダイレクトするために使用されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.216WIR"  title="原文: header-token"><code>header-token</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.XGoC5.6" title="原文 : TokenHandler"><router-link to="/config/io_helidon_security_util_TokenHandler">TokenHandler</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2OTnD4.spl1" title="原文 : A TokenHandler to process header containing a JWT.">JWTを含むヘッダーを処理するTokenHandler。</span> <span class="merged" id="all.2OTnD4.spl2" title="原文 : Default is &quot;Authorization&quot; header with a prefix &quot;bearer &quot;.">デフォルトは、プレフィクス「bearer」の「Authorization」ヘッダーです。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.32UGx6"  title="原文: header-use"><code>header-use</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.63"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.31"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3gHfOD" title="原文 : Whether to expect JWT in a header field.">ヘッダー・フィールドにJWTが必要かどうか。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1li9qS"  title="原文: identity-uri"><code>identity-uri</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.LGnjn.2"  title="原文:: URI">URI</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.fvU3g" title="原文 : URI of the identity server, base used to retrieve OIDC metadata.">アイデンティティ・サーバーのURIで、OIDCメタデータの取得に使用されるベースです。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1B7o3g"  title="原文: introspect-endpoint-uri"><code>introspect-endpoint-uri</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.LGnjn.3"  title="原文:: URI">URI</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3QwAQI.spl1" title="原文 : Endpoint to use to validate JWT.">JWTのバリデートに使用するエンドポイント。</span> <span class="merged" id="all.3QwAQI.spl2" title="原文 : Either use this or set #signJwk(JwkKeys) or #signJwk(Resource).">これを使用するか、#signJwk(JwkKeys)または#signJwk(Resource)を設定します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3AHuzZ"  title="原文: issuer"><code>issuer</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.115"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2HhI85" title="原文 : Issuer of issued tokens.">発行されたトークンの発行者。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4MA6E0"  title="原文: max-redirects"><code>max-redirects</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.19"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4XADpA.1"  title="原文: 5"><code>5</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Wqr1N" title="原文 : Configure maximal number of redirects when redirecting to an OIDC provider within a single authentication attempt.">1回の認証試行でOIDCプロバイダにリダイレクトするときにリダイレクトの最大数を構成します。</span></p>

<markup>Defaults to `DEFAULT_MAX_REDIRECTS`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1BHaUO"  title="原文: oidc-metadata-well-known"><code>oidc-metadata-well-known</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.64"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.32"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1jU9hU.spl1" title="原文 : If set to true, metadata will be loaded from default (well known) location, unless it is explicitly defined using oidc-metadata-resource.">trueに設定すると、oidc-metadata-resourceを使用して明示的に定義されていないかぎり、メタデータはデフォルトの(既知の)ロケーションからロードされます。</span> <span class="merged" id="all.1jU9hU.spl2" title="原文 : If set to false, it would not be loaded even if oidc-metadata-resource is not defined.">falseに設定すると、oidc-metadata-resourceが定義されていない場合でもロードされません。</span> <span class="merged" id="all.1jU9hU.spl3" title="原文 : In such a case all URIs must be explicitly defined (e.g. token-endpoint-uri).">このような場合、すべてのURIを明示的に定義する必要があります(例: token-endpoint-uri)。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3r2hLi"  title="原文: oidc-metadata.resource"><code>oidc-metadata.resource</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.8" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">リソース</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2r4soJ" title="原文 : Resource configuration for OIDC Metadata containing endpoints to various identity services, as well as information about the identity server.">様々なアイデンティティ・サービスへのエンドポイントおよびアイデンティティ・サーバーに関する情報を含むOIDCメタデータのリソース構成。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Zagyj.7"  title="原文: optional"><code>optional</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.65"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.23"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.9FDbi.spl1" title="原文 : Whether authentication is required.">認証が必須かどうか。</span> <span class="merged" id="all.9FDbi.spl2" title="原文 : By default, request will fail if the authentication cannot be verified.">デフォルトでは、認証を検証できない場合、リクエストは失敗します。</span> <span class="merged" id="all.9FDbi.spl3" title="原文 : If set to true, request will process and this provider will abstain.">trueに設定すると、リクエストが処理され、このプロバイダは中断します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.46DWSr.5"  title="原文: outbound"><code>outbound</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2BE0hr.3" title="原文 : OutboundTarget[]"><router-link to="/config/io_helidon_security_providers_common_OutboundTarget">OutboundTarget[]</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1oU7gD.1" title="原文 : Add a new target configuration.">新しいターゲット構成を追加します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3SEgfv.3"  title="原文: propagate"><code>propagate</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.66"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.24"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.138iGd.2" title="原文 : Whether to propagate identity.">アイデンティティを伝播するかどうか。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.37YgdV.2"  title="原文: proxy-host"><code>proxy-host</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.116"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3PoKJ7.spl1" title="原文 : Proxy host to use.">使用するプロキシ・ホスト。</span> <span class="merged" id="all.3PoKJ7.spl2" title="原文 : When defined, triggers usage of proxy for HTTP requests.">定義すると、HTTPリクエストのプロキシの使用がトリガーされます。</span> <span class="merged" id="all.3PoKJ7.spl3" title="原文 : Setting to empty String has the same meaning as setting to null - disables proxy.">空の文字列への設定は、nullの設定と同じ意味を持ちます - プロキシを無効にします。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3687nw.2"  title="原文: proxy-port"><code>proxy-port</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.20"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1doYAE.1"  title="原文: 80"><code>80</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1c7Jkj.spl1"  title="原文:: Proxy port.">プロキシ・ポート。</span> <span class="merged" id="all.1c7Jkj.spl2" title="原文 : Defaults to DEFAULT_PROXY_PORT">デフォルトは<code>DEFAULT_PROXY_PORT</code>です</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1AyTFz"  title="原文: proxy-protocol"><code>proxy-protocol</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.117"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3Ur1dT"  title="原文: http"><code>http</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XUVWr.spl1" title="原文 : Proxy protocol to use when proxy is used.">プロキシが使用されるときに使用するプロキシ・プロトコル。</span> <span class="merged" id="all.2XUVWr.spl2" title="原文 : Defaults to DEFAULT_PROXY_PROTOCOL.">デフォルトは<code>DEFAULT_PROXY_PROTOCOL</code>です。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3bHR3a"  title="原文: query-param-name"><code>query-param-name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.118"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3mwpmn"  title="原文: accessToken"><code>accessToken</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.Q0woX" title="原文 : Name of a query parameter that contains the JWT token when parameter is used.">パラメータの使用時にJWTトークンを含む問合せパラメータの名前。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1NeAV7"  title="原文: query-param-use"><code>query-param-use</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.67"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.25"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3slWjd" title="原文 : Whether to use a query parameter to send JWT token from application to this server.">問合せパラメータを使用してJWTトークンをアプリケーションからこのサーバーに送信するかどうか。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.D9OII"  title="原文: redirect"><code>redirect</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.68"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.26"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3LwUVC.spl1" title="原文 : By default the client should redirect to the identity server for the user to log in.">デフォルトでは、クライアントはユーザーがログインできるようにアイデンティティ・サーバーにリダイレクトする必要があります。</span> <span class="merged" id="all.3LwUVC.spl2" title="原文 : This behavior can be overridden by setting redirect to false.">この動作は、リダイレクトをfalseに設定することでオーバーライドできます。</span> <span class="merged" id="all.3LwUVC.spl3" title="原文 : When token is not present in the request, the client will not redirect and just return appropriate error response code.">トークンがリクエストに存在しない場合、クライアントはリダイレクトされず、適切なエラー・レスポンス・コードを返します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.11GdpG"  title="原文: redirect-attempt-param"><code>redirect-attempt-param</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.119"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3hfqRH"  title="原文: h_ra"><code>h_ra</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4QkzgT" title="原文 : Configure the parameter used to store the number of attempts in redirect.">リダイレクトの試行回数の格納に使用するパラメータを構成します。</span></p>

<markup>Defaults to `DEFAULT_ATTEMPT_PARAM`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.MTjac"  title="原文: redirect-uri"><code>redirect-uri</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.120"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.Q9VmF"  title="原文: /oidc/redirect"><code>/oidc/redirect</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4fzTBd.spl1" title="原文 : URI to register web server component on, used by the OIDC server to redirect authorization requests to after a user logs in or approves scopes.">ユーザーがログインまたはスコープを承認した後に、OIDCサーバーが認可リクエストをリダイレクトするために使用する、webサーバー・コンポーネントを登録するURI。</span> <span class="merged" id="all.4fzTBd.spl2" title="原文 : Note that usually the redirect URI configured here must be the same one as configured on OIDC server.">通常、ここで構成するリダイレクトURIはOIDCサーバーで構成するものと同じである必要があります。</span> </p>

<markup>Defaults to `DEFAULT_REDIRECT_URI`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.kQ4h4"  title="原文: scope-audience"><code>scope-audience</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.121"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2wMEC4.spl1" title="原文 : Audience of the scope required by this application.">このアプリケーションで必要なスコープの対象読者。</span> <span class="merged" id="all.2wMEC4.spl2" title="原文 : This is prefixed to the scope name when requesting scopes from the identity server.">これは、アイデンティティ・サーバーからスコープをリクエストするときにスコープ名のプレフィクスとして付加されます。</span> <span class="merged" id="all.2wMEC4.spl3"  title="原文: Defaults to empty string.">デフォルトは空の文字列です。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3EA4pr"  title="原文: server-type"><code>server-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.122"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2gausp"  title="原文: @default"><code>@default</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2AuabR" title="原文 : Configure one of the supported types of identity servers.">サポートされているタイプのアイデンティティ・サーバーの1つを構成します。</span></p>

<markup>If the type does not have an explicit mapping, a warning is logged and the default implementation is used.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.8wfMM"  title="原文: sign-jwk.resource"><code>sign-jwk.resource</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.9" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">リソース</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3GQxZq" title="原文 : A resource pointing to JWK with public keys of signing certificates used to validate JWT.">JWTのバリデートに使用される署名証明書の公開キーを持つJWKを指すリソース。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2DEQ1H"  title="原文: token-endpoint-auth"><code>token-endpoint-auth</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1KoZ4D" title="原文 : ClientAuthentication (CLIENT_SECRET_BASIC, CLIENT_SECRET_POST, CLIENT_SECRET_JWT, PRIVATE_KEY_JWT, NONE)">ClientAuthentication (CLIENT_SECRET_BASIC、CLIENT_SECRET_POST、CLIENT_SECRET_JWT、PRIVATE_KEY_JWT、なし)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3KTL8M"  title="原文: CLIENT_SECRET_BASIC"><code>CLIENT_SECRET_BASIC</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3f6kjf.spl1" title="原文 : Type of authentication to use when invoking the token endpoint.">トークン・エンドポイントの起動時に使用する認証のタイプ。</span> <span class="merged" id="all.3f6kjf.spl2" title="原文 : Current supported options:">現在サポートされているオプション:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.eCxnW"  title="原文: io.helidon.security.providers.oidc.common.OidcConfig.ClientAuthentication#CLIENT_SECRET_BASIC">io.helidon.security.providers.oidc.common.OidcConfig.ClientAuthentication#CLIENT_SECRET_BASIC</span></p>

</li>
<li>
<p><span class="merged" id="all.oRP2j"  title="原文: io.helidon.security.providers.oidc.common.OidcConfig.ClientAuthentication#CLIENT_SECRET_POST">io.helidon.security.providers.oidc.common.OidcConfig.ClientAuthentication#CLIENT_SECRET_POST</span></p>

</li>
<li>
<p><span class="merged" id="all.3xsX8t"  title="原文: io.helidon.security.providers.oidc.common.OidcConfig.ClientAuthentication#NONE">io.helidon.security.providers.oidc.common.OidcConfig.ClientAuthentication#NONE</span></p>

</li>
</ul>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.NDgNA"  title="原文: token-endpoint-uri"><code>token-endpoint-uri</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.LGnjn.4"  title="原文:: URI">URI</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.WAsjK.spl1" title="原文 : URI of a token endpoint used to obtain a JWT based on the authentication code.">認証コードに基づいてJWTを取得するために使用するトークン・エンドポイントのURI。</span> <span class="merged" id="all.WAsjK.spl2" title="原文 : If not defined, it is obtained from #oidcMetadata(Resource), if that is not defined an attempt is made to use #identityUri(URI)/oauth2/v1/token.">定義されていない場合、#oidcMetadata(Resource)から取得されます。定義されていない場合は、#identityUri(URI)/oauth2/v1/tokenの使用が試行されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.22WMEh.1"  title="原文: use-jwt-groups"><code>use-jwt-groups</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.69"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.33"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.UUSmh.1" title="原文 : Claim groups from JWT will be used to automatically add groups to current subject (may be used with jakarta.annotation.security.RolesAllowed annotation).">JWTからの請求<code>groups</code>は、現在のサブジェクトにグループを自動的に追加するために使用されます(jakarta.annotation.security.RolesAllowed注釈とともに使用できます)。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2GiOns"  title="原文: validate-jwt-with-jwk"><code>validate-jwt-with-jwk</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.70"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.34"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2L1y3N.spl1" title="原文 : Use JWK (a set of keys to validate signatures of JWT) to validate tokens.">JWK (JWTのシグネチャをバリデートするための一連のキー)を使用して、トークンをバリデートします。</span> <span class="merged" id="all.2L1y3N.spl2" title="原文 : Use this method when you want to use default values for JWK or introspection endpoint URI.">このメソッドは、JWKまたはイントロスペクション・エンドポイントURIにデフォルト値を使用する場合に使用します。</span> </p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
