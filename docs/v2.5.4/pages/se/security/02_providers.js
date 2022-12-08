<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_implemented_security_providers"><span class="merged" id="all.3uNdHP.1" title="原文 : Implemented Security Providers">実装されたセキュリティ・プロバイダ</span></h2>
<div class="section">
<p><span class="merged" id="all.2pEZGc.1" title="原文 : Helidon provides the following security providers for endpoint protection:">Helidonには、エンドポイント保護のために次のセキュリティ・プロバイダが用意されています:</span></p>


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
<th><span class="merged" id="all.1yHHYo.2"  title="原文:: Provider">プロバイダ</span></th>
<th><span class="merged" id="all.p0YxL.6"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.1cYUCu.2" title="原文 : Outbound supported">アウトバウンドのサポート</span></th>
<th><span class="merged" id="all.4JM9z7.16"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.33Jt5X.1" title="原文 : OIDC Provider"><router-link @click.native="this.scrollFix('#_oidc_provider')" to="#_oidc_provider">OIDCプロバイダ</router-link></span></td>
<td class=""><span class="merged" id="all.wpYVJ.7"  title="原文:: Authentication">認証</span></td>
<td class=""><span class="merged" id="all.5W6W2.117" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.DFw7y.1" title="原文 : Open ID Connect supporting JWT, Scopes, Groups and OIDC code flow">JWT、スコープ、グループおよびOIDCコード・フローをサポートするOpen ID Connect</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1UfZL9.1" title="原文 : HTTP Basic Authentication"><router-link @click.native="this.scrollFix('#_http_basic_authentication_provider')" to="#_http_basic_authentication_provider">HTTP Basic認証</router-link></span></td>
<td class=""><span class="merged" id="all.wpYVJ.8"  title="原文:: Authentication">認証</span></td>
<td class=""><span class="merged" id="all.5W6W2.118" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.1hsi93.1" title="原文 : HTTP Basic Authentication support">HTTP Basic認証のサポート</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3FPgoh.1" title="原文 : HTTP Digest Authentication"><router-link @click.native="this.scrollFix('#_http_digest_authentication_provider')" to="#_http_digest_authentication_provider">HTTPダイジェスト認証</router-link></span></td>
<td class=""><span class="merged" id="all.wpYVJ.9"  title="原文:: Authentication">認証</span></td>
<td class=""><span class="merged" id="all.EQUvU.3"  title="原文: &#128683;">&#128683;</span></td>
<td class=""><span class="merged" id="all.2tlg85.1" title="原文 : HTTP Digest Authentication support">HTTPダイジェスト認証のサポート</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1cz3Mg.1" title="原文 : Header Assertion"><router-link @click.native="this.scrollFix('#_header_authentication_provider')" to="#_header_authentication_provider">ヘッダー・アサーション</router-link></span></td>
<td class=""><span class="merged" id="all.wpYVJ.10"  title="原文:: Authentication">認証</span></td>
<td class=""><span class="merged" id="all.5W6W2.119" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.1UNZue.1" title="原文 : Asserting a user based on a header value">ヘッダー値に基づいたユーザーのアサート</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2TSs7A.1" title="原文 : HTTP Signatures"><router-link @click.native="this.scrollFix('#_http_signatures_provider')" to="#_http_signatures_provider">HTTPシグネチャ</router-link></span></td>
<td class=""><span class="merged" id="all.wpYVJ.11"  title="原文:: Authentication">認証</span></td>
<td class=""><span class="merged" id="all.5W6W2.120" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.4BD4U.1" title="原文 : Protecting service to service communication through signatures">シグネチャを介したサービス間通信の保護</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.UwlxB.1" title="原文 : IDCS Roles"><router-link @click.native="this.scrollFix('#_idcs_role_mapper')" to="#_idcs_role_mapper">IDCSロール</router-link></span></td>
<td class=""><span class="merged" id="all.1bjmEz.1"  title="原文:: Role Mapping">ロール・マッピング</span></td>
<td class=""><span class="merged" id="all.EQUvU.4"  title="原文: &#128683;">&#128683;</span></td>
<td class=""><span class="merged" id="all.2FJBLT.1" title="原文 : Retrieves roles from IDCS provider for authenticated user">認証済ユーザーのIDCSプロバイダからロールを取得</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.19PXqz.1" title="原文 : ABAC Authorization"><router-link @click.native="this.scrollFix('#_abac_provider')" to="#_abac_provider">ABAC認可</router-link></span></td>
<td class=""><span class="merged" id="all.3gIvIg.1"  title="原文:: Authorization">認可</span></td>
<td class=""><span class="merged" id="all.EQUvU.5"  title="原文: &#128683;">&#128683;</span></td>
<td class=""><span class="merged" id="all.4ELoWx.1" title="原文 : Attribute based access control authorization policies">属性ベースのアクセス制御認可ポリシー</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.1lzv1g.1" title="原文 : The following providers are no longer evolved:">次のプロバイダは進化しなくなりました:</span></p>


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
<th><span class="merged" id="all.1yHHYo.3"  title="原文:: Provider">プロバイダ</span></th>
<th><span class="merged" id="all.p0YxL.7"  title="原文:: Type">タイプ</span></th>
<th><span class="merged" id="all.1cYUCu.3" title="原文 : Outbound supported">アウトバウンドのサポート</span></th>
<th><span class="merged" id="all.4JM9z7.17"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1iC3WF.1" title="原文 : Google Login"><router-link @click.native="this.scrollFix('#_google_login_provider')" to="#_google_login_provider">Googleログイン</router-link></span></td>
<td class=""><span class="merged" id="all.wpYVJ.12"  title="原文:: Authentication">認証</span></td>
<td class=""><span class="merged" id="all.5W6W2.121" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.4P3RKa.1" title="原文 : Authenticates a token from request against Google servers">Googleサーバーに対するリクエストからのトークンを認証</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2r2fCG.1" title="原文 : JWT Provider"><router-link @click.native="this.scrollFix('#_jwt_provider')" to="#_jwt_provider">JWTプロバイダ</router-link></span></td>
<td class=""><span class="merged" id="all.wpYVJ.13"  title="原文:: Authentication">認証</span></td>
<td class=""><span class="merged" id="all.5W6W2.122" title="原文 : ✅">✅</span></td>
<td class=""><span class="merged" id="all.2wuVJ2.1" title="原文 : JWT tokens passed from frontend">フロントエンドから渡されたJWTトークン</span></td>
</tr>
</tbody>
</table>
</div>

<h3 id="_oidc_provider"><span class="merged" id="all.33t7Mh.1" title="原文 : OIDC Provider">OIDCプロバイダ</span></h3>
<div class="section">
<p><span class="merged" id="all.1wfeSk.1" title="原文 : Open ID Connect security provider.">Open ID Connectセキュリティ・プロバイダ。</span></p>


<h4 id="_setup"><span class="merged" id="all.4BqnSO.9"  title="原文:: Setup">設定</span></h4>
<div class="section">
<markup
lang="xml"
title="Maven dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.security.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-security-providers-oidc&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.25dA3u.spl1" title="原文 : In Helidon SE, we need to register the redirection support with routing (in addition to WebSecurity that integrates with WebServer).">Helidon SEでは、(<code>WebServer</code>と統合される<code>WebSecurity</code>に加えて)リダイレクション・サポートをルーティングに登録する必要があります。</span> <span class="merged" id="all.25dA3u.spl2" title="原文 : This is not required when redirect is set to false.">これは、<code>redirect</code>がfalseに設定されている場合は必要ありません。</span> </p>

<markup
lang="java"
title="Adding support for OIDC redirects"
>Routing routing = Routing.builder()
        .register(WebSecurity.create(config.get("security")))
        .register(OidcSupport.create(config))
        ...
        .build();</markup>

<markup
lang="text"
title="Provider class name"
>io.helidon.security.providers.oidc.OidcProvider</markup>

<markup
lang="text"
title="Provider configuration key"
>oidc</markup>

</div>

<h4 id="_example_code"><span class="merged" id="all.mu2yS.9"  title="原文:: Example code">コード例</span></h4>
<div class="section">
<p><span class="merged" id="all.1V2gC.1" title="原文 : https://github.com/oracle/helidon/tree/master/examples/security/idcs-login"><a href="https://github.com/oracle/helidon/tree/master/examples/security/idcs-login" id="" target="_blank" >https://github.com/oracle/helidon/tree/master/examples/security/idcs-login</a></span></p>

<markup
lang="yaml"
title="Configuration example"
>security:
  config.require-encryption: false
security:
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

<h4 id="_configuration_options"><span class="merged" id="all.3SKgM1.10"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<p><span class="merged" id="all.QSLwf.9" title="原文 : The following table shows all configuration options of the provider and their default values">次の表に、プロバイダのすべての構成オプションとそのデフォルト値を示します</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 22.222%;">
<col style="width: 22.222%;">
<col style="width: 55.556%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.13"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.G3u1e.12"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.16"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4Zagyj.7"  title="原文: optional"><code>optional</code></span></td>
<td class=""><span class="merged" id="all.42DdBS.15"  title="原文: false"><code>false</code></span></td>
<td class=""><span class="merged" id="all.4KM3rs.7.spl1" title="原文 : If set to true, failure to authenticate will return ABSTAIN result instead of FAILURE."><code>true</code>に設定した場合、認証に失敗すると、<code>FAILURE</code>ではなく<code>ABSTAIN</code>の結果が返されます。</span> <span class="merged" id="all.4KM3rs.7.spl2" title="原文 : This is an important distinction when more than one provider is used">これは、複数のプロバイダを使用する場合の重要な違いです</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.41Kf4l.4"  title="原文: client-id"><code>client-id</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.E9qML.1" title="原文 : Client ID as generated by identity server">アイデンティティ・サーバーによって生成されたクライアントID</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2ahXIk.1"  title="原文: client-secret"><code>client-secret</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.4XJZr8.1" title="原文 : Client secret as generated by identity server">アイデンティティ・サーバーによって生成されたクライアント・シークレット</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1li9qS.1"  title="原文: identity-uri"><code>identity-uri</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.1aHJs3.1" title="原文 : URI of the identity server, base used to retrieve OIDC metadata">OIDCメタデータの取得に使用されるアイデンティティ・サーバーのURI</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.8tmrZ.1"  title="原文: frontend-uri"><code>frontend-uri</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.2dJWjS.1" title="原文 : Full URI of this service for redirects back from OIDC server">OIDCサーバーからのリダイレクト用のこのサービスの完全URI</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3AHuzZ.1"  title="原文: issuer"><code>issuer</code></span></td>
<td class=""><span class="merged" id="all.dKWNi.1" title="原文 : issuer from OIDC metadata">OIDCメタデータからの<code>issuer</code></span></td>
<td class=""><span class="merged" id="all.1wtIb3.1" title="原文 : Issuer of token - each JWT is validated to check the issuer">トークンの発行者 - 各JWTは、発行者をチェックするためにバリデートされます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4WSwQo.1"  title="原文: audience"><code>audience</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3aGKE2.1" title="原文 : Audience of a token - each JWT is validated to check the audience">トークンの対象者 - 各JWTは、オーディエンスをチェックするためにバリデートされます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3UsoFV.1"  title="原文: cors"><code>cors</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.25TDeJ.1" title="原文 : Cross-origin resource sharing settings (see below)">クロス・オリジンのリソース共有設定(下の<router-link @click.native="this.scrollFix('#cors')" to="#cors"></router-link>を参照)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1AyTFz.1"  title="原文: proxy-protocol"><code>proxy-protocol</code></span></td>
<td class=""><span class="merged" id="all.3Ur1dT.1"  title="原文: http"><code>http</code></span></td>
<td class=""><span class="merged" id="all.1JPdPx.1" title="原文 : Proxy protocol to use when proxy is used">プロキシの使用時に使用するプロキシ・プロトコル</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.37YgdV.2"  title="原文: proxy-host"><code>proxy-host</code></span></td>
<td class=""><span class="merged" id="all.2RbFN5.1"  title="原文: null"><code>null</code></span></td>
<td class=""><span class="merged" id="all.44doED.1.spl1" title="原文 : Proxy host to use.">使用するプロキシ・ホスト。</span> <span class="merged" id="all.44doED.1.spl2" title="原文 : When defined, triggers usage of proxy for HTTP requests">定義されている場合、HTTPリクエストに対するプロキシの使用をトリガー</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3687nw.2"  title="原文: proxy-port"><code>proxy-port</code></span></td>
<td class=""><span class="merged" id="all.1doYAE.2"  title="原文: 80"><code>80</code></span></td>
<td class=""><span class="merged" id="all.14AwP8.1" title="原文 : Port of the proxy server to use">使用するプロキシ・サーバーのポート</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.MTjac.1"  title="原文: redirect-uri"><code>redirect-uri</code></span></td>
<td class=""><span class="merged" id="all.Q9VmF.1"  title="原文: /oidc/redirect"><code>/oidc/redirect</code></span></td>
<td class=""><span class="merged" id="all.4fzTBd.1.spl1" title="原文 : URI to register web server component on, used by the OIDC server to redirect authorization requests to after a user logs in or approves scopes.">ユーザーがログインまたはスコープを承認した後に、OIDCサーバーが認可リクエストをリダイレクトするために使用する、webサーバー・コンポーネントを登録するURI。</span> <span class="merged" id="all.4fzTBd.1.spl2" title="原文 : Note that usually the redirect URI configured here must be the same one as configured on OIDC server.">通常、ここで構成するリダイレクトURIはOIDCサーバーで構成するものと同じである必要があります。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.kQ4h4.1"  title="原文: scope-audience"><code>scope-audience</code></span></td>
<td class=""><span class="merged" id="all.1ckgmC.1"  title="原文:: empty string">空の文字列</span></td>
<td class=""><span class="merged" id="all.JgxTC.1.spl1" title="原文 : Audience of the scope required by this application.">このアプリケーションで必要なスコープの対象読者。</span> <span class="merged" id="all.JgxTC.1.spl2" title="原文 : This is prefixed to the scope name when requesting scopes from the identity server.">これは、アイデンティティ・サーバーからスコープをリクエストするときにスコープ名のプレフィクスとして付加されます。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3UkeuT.1"  title="原文: cookie-use"><code>cookie-use</code></span></td>
<td class=""><span class="merged" id="all.xEiHU.17"  title="原文: true"><code>true</code></span></td>
<td class=""><span class="merged" id="all.1TUdv9.1.spl1" title="原文 : Whether to use cookie to store JWT.">JWTの格納にcookieを使用するかどうか。</span> <span class="merged" id="all.1TUdv9.1.spl2" title="原文 : If used, redirects happen only in case the user is not authenticated or has insufficient scopes">使用した場合、リダイレクトは、ユーザーが認証されていないか、スコープが不十分な場合にのみ発生</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.18IeUS.1"  title="原文: cookie-name"><code>cookie-name</code></span></td>
<td class=""><span class="merged" id="all.4EFbwH.1"  title="原文: JSESSIONID"><code>JSESSIONID</code></span></td>
<td class=""><span class="merged" id="all.2wbVDn.1"  title="原文: Name of the cookie">Cookieの名前</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3w8IzP.1"  title="原文: cookie-domain"><code>cookie-domain</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3AZkHx.1.spl1" title="原文 : Domain the cookie is valid for.">cookieが有効なドメイン。</span> <span class="merged" id="all.3AZkHx.1.spl2" title="原文 : Not used by default">デフォルトでは使用されない</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1eF4as.1"  title="原文: cookie-path"><code>cookie-path</code></span></td>
<td class=""><span class="merged" id="all.UUSmx.1"  title="原文: /"><code>/</code></span></td>
<td class=""><span class="merged" id="all.4CY9mn.1" title="原文 : Path the cookie is valid for.">Cookieが有効なパス。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4F9l7D.1"  title="原文: cookie-max-age-seconds"><code>cookie-max-age-seconds</code></span></td>
<td class=""><span class="merged" id="all.3cCtPy.1" title="原文 : {nsbp}">{nsbp}</span></td>
<td class=""><span class="merged" id="all.3CqW0I.1" title="原文 : When using cookie, used to set MaxAge attribute of the cookie, defining how long the cookie is valid.">Cookieを使用する場合、CookieのMaxAge属性の設定に使用され、Cookieの有効期間を定義します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3j6mTC.1"  title="原文: cookie-http-only"><code>cookie-http-only</code></span></td>
<td class=""><span class="merged" id="all.xEiHU.18"  title="原文: true"><code>true</code></span></td>
<td class=""><span class="merged" id="all.4YV41R.1" title="原文 : When using cookie, if set to true, the HttpOnly attribute will be configured.">Cookieを使用する場合、trueに設定すると、HttpOnly属性が構成されます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4bbWxu.1"  title="原文: cookie-secure"><code>cookie-secure</code></span></td>
<td class=""><span class="merged" id="all.42DdBS.16"  title="原文: false"><code>false</code></span></td>
<td class=""><span class="merged" id="all.3lQ6Qz.1" title="原文 : When using cookie, if set to true, the Secure attribute will be configured.">Cookieを使用する場合、trueに設定すると、Secure属性が構成されます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.V6Z8i.1"  title="原文: cookie-same-site"><code>cookie-same-site</code></span></td>
<td class=""><span class="merged" id="all.z9bV7.1"  title="原文: Lax"><code>Lax</code></span></td>
<td class=""><span class="merged" id="all.10cviP.1.spl1" title="原文 : When using cookie, used to set the SameSite cookie value.">Cookieを使用する場合、SameSite cookie値の設定に使用されます。</span> <span class="merged" id="all.10cviP.1.spl2" title="原文 : Can be &quot;Strict&quot; or &quot;Lax&quot;.">「Strict」または「Lax」を指定できます。</span> <span class="merged" id="all.10cviP.1.spl3" title="原文 : Setting this to &quot;Strict&quot; will result in infinite redirects when calling OIDC on a different host.">これを「Strict」に設定すると、別のホストでOIDCを呼び出すときに無限リダイレクトが発生します。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1NeAV7.1"  title="原文: query-param-use"><code>query-param-use</code></span></td>
<td class=""><span class="merged" id="all.42DdBS.17"  title="原文: false"><code>false</code></span></td>
<td class=""><span class="merged" id="all.12nKEA.1" title="原文 : Whether to expect JWT in a query parameter">問合せパラメータにJWTが必要かどうか</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3bHR3a.1"  title="原文: query-param-name"><code>query-param-name</code></span></td>
<td class=""><span class="merged" id="all.3mwpmn.1"  title="原文: accessToken"><code>accessToken</code></span></td>
<td class=""><span class="merged" id="all.Q0woX.1" title="原文 : Name of a query parameter that contains the JWT token when parameter is used.">パラメータの使用時にJWTトークンを含む問合せパラメータの名前。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.32UGx6.1"  title="原文: header-use"><code>header-use</code></span></td>
<td class=""><span class="merged" id="all.42DdBS.18"  title="原文: false"><code>false</code></span></td>
<td class=""><span class="merged" id="all.3gHfOD.1" title="原文 : Whether to expect JWT in a header field.">ヘッダー・フィールドにJWTが必要かどうか。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.216WIR.1"  title="原文: header-token"><code>header-token</code></span></td>
<td class=""><span class="merged" id="all.PepdE.1" title="原文 : Authorization header with prefix bearer">プレフィクス<code>bearer</code>が付いた<code>Authorization</code>ヘッダー</span></td>
<td class=""><span class="merged" id="all.42XtCB.1" title="原文 : A TokenHandler configuration to process header containing a JWT">JWTを含むヘッダーを処理するTokenHandler構成</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1BHaUO.1"  title="原文: oidc-metadata-well-known"><code>oidc-metadata-well-known</code></span></td>
<td class=""><span class="merged" id="all.xEiHU.19"  title="原文: true"><code>true</code></span></td>
<td class=""><span class="merged" id="all.1jU9hU.1.spl1" title="原文 : If set to true, metadata will be loaded from default (well known) location, unless it is explicitly defined using oidc-metadata-resource.">trueに設定すると、oidc-metadata-resourceを使用して明示的に定義されていないかぎり、メタデータはデフォルトの(既知の)ロケーションからロードされます。</span> <span class="merged" id="all.1jU9hU.1.spl2" title="原文 : If set to false, it would not be loaded even if oidc-metadata-resource is not defined.">falseに設定すると、oidc-metadata-resourceが定義されていない場合でもロードされません。</span> <span class="merged" id="all.1jU9hU.1.spl3" title="原文 : In such a case all URIs must be explicitly defined (e.g. token-endpoint-uri).">このような場合、すべてのURIを明示的に定義する必要があります(例: token-endpoint-uri)。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3r2hLi.1"  title="原文: oidc-metadata.resource"><code>oidc-metadata.resource</code></span></td>
<td class=""><span class="merged" id="all.Y01BO.1"  title="原文: identity-uri/.well-known/openid-configuration"><code>identity-uri/.well-known/openid-configuration</code></span></td>
<td class=""><span class="merged" id="all.1kRXba.1.spl1" title="原文 : Resource configuration for OIDC Metadata containing endpoints to various identity services, as well as information about the identity server.">様々なアイデンティティ・サービスへのエンドポイントおよびアイデンティティ・サーバーに関する情報を含むOIDCメタデータのリソース構成。</span> <span class="merged" id="all.1kRXba.1.spl2" title="原文 : See Resource.create(io.helidon.config.Config)">Resource.create(io.helidon.config.Config)を参照</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.NDgNA.1"  title="原文: token-endpoint-uri"><code>token-endpoint-uri</code></span></td>
<td class=""><span class="merged" id="all.3DWgAq.1" title="原文 : token_endpoint in OIDC metadata, or identity-url/oauth2/v1/token if not available">OIDCメタデータ内の<code>token_endpoint</code>、または<code>identity-url/oauth2/v1/token</code>(使用できない場合)</span></td>
<td class=""><span class="merged" id="all.1PaGB2.1" title="原文 : URI of a token endpoint used to obtain a JWT based on the authentication code.">認証コードに基づいてJWTを取得するために使用するトークン・エンドポイントのURI。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2dGFWv.1"  title="原文: authorization-endpoint-uri"><code>authorization-endpoint-uri</code></span></td>
<td class=""><span class="merged" id="all.9ge26.1" title="原文 : &quot;authorization_endpoint&quot; in OIDC metadata, or identity-uri/oauth2/v1/authorize if not available">OIDCメタデータの"authorization_endpoint"または<code>identity-uri/oauth2/v1/authorize</code>(使用できない場合)</span></td>
<td class=""><span class="merged" id="all.4f8bIn.1" title="原文 : URI of an authorization endpoint used to redirect users to for logging-in.">ログイン用にユーザーをリダイレクトするために使用される認可エンドポイントのURI。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.47mBmt.1"  title="原文: validate-with-jwk"><code>validate-with-jwk</code></span></td>
<td class=""><span class="merged" id="all.xEiHU.20"  title="原文: true"><code>true</code></span></td>
<td class=""><span class="merged" id="all.4bhk53.1" title="原文 : When true - validate against jwk defined by &quot;sign-jwk&quot;, when false validate JWT through OIDC Server endpoint &quot;validation-endpoint-uri&quot;">trueの場合 - "sign-jwk"で定義されたjwkに対してバリデートし、falseの場合はOIDCサーバー・エンドポイント"validation-endpoint-uri"を介してJWTをバリデート</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.8wfMM.1"  title="原文: sign-jwk.resource"><code>sign-jwk.resource</code></span></td>
<td class=""><span class="merged" id="all.fgGdF.1" title="原文 : &quot;jwks-uri&quot; in OIDC metadata, or identity-uri/admin/v1/SigningCert/jwk if not available, only needed when jwt validation is done by us">OIDCメタデータの"jwks-uri"、または使用できない場合は<code>identity-uri/admin/v1/SigningCert/jwk</code>(jwtバリデーションが行われる場合のみ必要)</span></td>
<td class=""><span class="merged" id="all.1YuYeB.1.spl1" title="原文 : A resource pointing to JWK with public keys of signing certificates used to validate JWT.">JWTのバリデートに使用される署名証明書の公開キーを持つJWKを指すリソース。</span> <span class="merged" id="all.1YuYeB.1.spl2" title="原文 : See Resource.create(io.helidon.config.Config)">Resource.create(io.helidon.config.Config)を参照</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1B7o3g.1"  title="原文: introspect-endpoint-uri"><code>introspect-endpoint-uri</code></span></td>
<td class=""><span class="merged" id="all.4Zcqk3.1" title="原文 : &quot;introspection_endpoint&quot; in OIDC metadata, or identity-uri/oauth2/v1/introspect">OIDCメタデータの"introspection_endpoint"または<code>identity-uri/oauth2/v1/introspect</code></span></td>
<td class=""><span class="merged" id="all.1dLDV7.1" title="原文 : When validate-with-jwk is set to &quot;false&quot;, this is the endpoint used">validate-with-jwkが"false"に設定されている場合、これが使用されるエンドポイントです</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2yeZYT.1"  title="原文: base-scopes"><code>base-scopes</code></span></td>
<td class=""><span class="merged" id="all.3UG2d9.1"  title="原文: openid"><code>openid</code></span></td>
<td class=""><span class="merged" id="all.6sMgp.1.spl1" title="原文 : Configure scopes to be requested by default.">デフォルトでリクエストされるスコープを構成します。</span> <span class="merged" id="all.6sMgp.1.spl2" title="原文 : If the scope has a qualifier, it must be included here">スコープに修飾子がある場合は、ここに含める必要があります</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.D9OII.1"  title="原文: redirect"><code>redirect</code></span></td>
<td class=""><span class="merged" id="all.xEiHU.21"  title="原文: true"><code>true</code></span></td>
<td class=""><span class="merged" id="all.2diwDM.1" title="原文 : Whether to redirect to identity server when authentication failed.">認証に失敗したときにアイデンティティ・サーバーにリダイレクトするかどうか。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.10Bdny.5"  title="原文: realm"><code>realm</code></span></td>
<td class=""><span class="merged" id="all.V69kn.5"  title="原文: helidon"><code>helidon</code></span></td>
<td class=""><span class="merged" id="all.Q5DMD.1" title="原文 : Realm returned in HTTP response if redirect is not enabled or possible.">リダイレクトが有効化されていないか可能でない場合、HTTPレスポンスでレルムが返されます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.11GdpG.1"  title="原文: redirect-attempt-param"><code>redirect-attempt-param</code></span></td>
<td class=""><span class="merged" id="all.3hfqRH.1"  title="原文: h_ra"><code>h_ra</code></span></td>
<td class=""><span class="merged" id="all.27eTeU.1.spl1" title="原文 : Query parameter holding the number of times we redirected to an identity server.">アイデンティティ・サーバーにリダイレクトされた回数を保持する問合せパラメータ。</span> <span class="merged" id="all.27eTeU.1.spl2" title="原文 : Customizable to prevent conflicts with application parameters">アプリケーション・パラメータとの競合を防ぐためにカスタマイズ可能</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4MA6E0.1"  title="原文: max-redirects"><code>max-redirects</code></span></td>
<td class=""><span class="merged" id="all.4XADpA.2"  title="原文: 5"><code>5</code></span></td>
<td class=""><span class="merged" id="all.145atY.1.spl1" title="原文 : Maximal number of times we can redirect to an identity server.">アイデンティティ・サーバーにリダイレクトできる最大回数。</span> <span class="merged" id="all.145atY.1.spl2" title="原文 : When the number is reached, no further redirects happen and the request finishes with an error (status 401)">この数に達すると、それ以上リダイレクトは行われず、リクエストはエラーで終了します(ステータス401)</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3EA4pr.1"  title="原文: server-type"><code>server-type</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.fmT6D.1.spl1" title="原文 : Type of identity server.">アイデンティティ・サーバーのタイプ。</span> <span class="merged" id="all.fmT6D.1.spl2" title="原文 : Currently supported is idcs or not configured (for default).">現在サポートされているのはidcsまたは未構成(デフォルト)です。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3SEgfv.3"  title="原文: propagate"><code>propagate</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.1Si0lm.1.spl1" title="原文 : Whether to propagate the token we have.">所有するトークンを伝播するかどうか。</span> <span class="merged" id="all.1Si0lm.1.spl2" title="原文 : Defaults to false unless an outbound configuration is defined">アウトバウンド構成が定義されていないかぎり、デフォルトは<code>false</code>です</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.46DWSr.5"  title="原文: outbound"><code>outbound</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3FFH7Q.5" title="原文 : A list of outbound configurations">アウトバウンド構成のリスト</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3sFPpq.5"  title="原文: outbound.*.name"><code>outbound.*.name</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3yQQtP.5" title="原文 : Required name of outbound configuration">アウトバウンド構成の必須名</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.HbvzU.5"  title="原文: outbound.*.transports"><code>outbound.*.transports</code></span></td>
<td class=""><span class="merged" id="all.1bmj05.5" title="原文 : any transport">任意のトランスポート</span></td>
<td class=""><span class="merged" id="all.1qX6pc.5" title="原文 : An array of transports this outbound configuration should be used for">このアウトバウンド構成を使用するトランスポートの配列</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.9leSv.5"  title="原文: outbound.*.hosts"><code>outbound.*.hosts</code></span></td>
<td class=""><span class="merged" id="all.2xFiA4.5" title="原文 : any host">任意のホスト</span></td>
<td class=""><span class="merged" id="all.HYSTm.5" title="原文 : An array of hosts this outbound configuration should be used for, can be a regular expression">このアウトバウンド構成を使用するホストの配列で、正規表現を使用できます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4YVRR3.5"  title="原文: outbound.*.paths"><code>outbound.*.paths</code></span></td>
<td class=""><span class="merged" id="all.1qm74s.5" title="原文 : any path">任意のパス</span></td>
<td class=""><span class="merged" id="all.akEQf.5" title="原文 : An array of paths this outbound configuration should be used for (such as /greet), can be a regular expression">このアウトバウンド構成を使用するパスの配列(<code>/greet</code>など)。正規表現を使用できます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.jL102.5"  title="原文: outbound.*.methods"><code>outbound.*.methods</code></span></td>
<td class=""><span class="merged" id="all.3zlSxu.5" title="原文 : any method">任意のメソッド</span></td>
<td class=""><span class="merged" id="all.4dCFqc.5" title="原文 : An array of HTTP methods this outbound configuration should be used for">このアウトバウンド構成を使用するHTTPメソッドの配列</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.33OyW8.3"  title="原文: outbound.*.outbound-token"><code>outbound.*.outbound-token</code></span></td>
<td class=""><span class="merged" id="all.4RlVWH.2" title="原文 : Authorization header with bearer prefix"><code>bearer</code>プレフィクス付きの<code>Authorization</code>ヘッダー</span></td>
<td class=""><span class="merged" id="all.4FdsjF.3" title="原文 : Configuration of outbound header used to propagate">伝播に使用されるアウトバウンド・ヘッダーの構成</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2zye5V.3"  title="原文: outbound.*.outbound-token.header"><code>outbound.*.outbound-token.header</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.y90Ow.3" title="原文 : Name of the header used to propagate the token">トークンの伝播に使用されるヘッダーの名前</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Vx0cs.3"  title="原文: outbound.*.outbound-token.prefix"><code>outbound.*.outbound-token.prefix</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3fwpGN.1" title="原文 : Prefix for the header value, such as &quot;bearer&quot; (only one of prefix, regexp and format should be defined, regexp wins over prefix, format wins over regexp)"><code>"bearer"</code>などのヘッダー値のプレフィクス(<code>prefix</code>、<code>regexp</code>および<code>format</code>のいずれか一方のみを定義し、<code>regexp</code>は<code>prefix</code>より優先し、<code>format</code>は<code>regexp</code>より優先します)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4ARd4Z.3"  title="原文: outbound.*.outbound-token.format"><code>outbound.*.outbound-token.format</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.27NQEi.1" title="原文 : String format with a single parameter to create the header value, such as &quot;bearer %1s&quot;"><code>"bearer %1s"</code>など、ヘッダー値を作成するための単一のパラメータを含む文字列書式</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.yVBV9.3"  title="原文: outbound.*.outbound-token.regexp"><code>outbound.*.outbound-token.regexp</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.33RL9M.1" title="原文 : Regular expression to create the header value, such as &quot;bearer (.*)&quot;"><code>"bearer (.*)"</code>などのヘッダー値を作成するための正規表現</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<h4 id="_how_does_it_work"><span class="merged" id="all.aWBLA.9"  title="原文: How does it work?"> 動作の仕組み</span></h4>
<div class="section">
<p><span class="merged" id="all.2xCZWJ.1" title="原文 : At Helidon startup, if OIDC provider is configured, the following will happen:">Helidonの起動時にOIDCプロバイダが構成されている場合、次のようになります:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.3wWz4X.1" title="原文 : client-id, client-secret, and identityUri are validated - these must provide values"><code>client-id</code>、<code>client-secret</code>および<code>identityUri</code>がバリデートされます - これらは値を指定する必要があります</span>

</li>
<li>
<span class="merged" id="all.42RlDc.1" title="原文 : Unless all resources are configured as local resources, the provider attempts to contact the oidc-metadata.resource endpoint to retrieve all endpoints">すべてのリソースがローカル・リソースとして構成されていないかぎり、プロバイダは<code>oidc-metadata.resource</code>エンドポイントに接続してすべてのエンドポイントを取得しようとします</span>

</li>
</ol>
<p><span class="merged" id="all.1PpqdO.1" title="原文 : At runtime, depending on configuration…​">実行時に、構成に応じて…</span></p>

<p><span class="merged" id="all.4OA5Jn.1" title="原文 : If a request comes without a token or with insufficient scopes:">トークンがないか、スコープが不十分なリクエストの場合:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.13pRTS.1.spl1" title="原文 : If redirect is set to true (default), request is redirected to the authorization endpoint of the identity server."><code>redirect</code>が<code>true</code> (デフォルト)に設定されている場合、リクエストはアイデンティティ・サーバーの認可エンドポイントにリダイレクトされます。</span> <span class="merged" id="all.13pRTS.1.spl2" title="原文 : If set to false, 401 is returned">falseに設定すると、<code>401</code>が返されます</span> 

</li>
<li>
<span class="merged" id="all.3ugm1p.1" title="原文 : User authenticates against the identity server">ユーザーがアイデンティティ・サーバーに対して認証</span>

</li>
<li>
<span class="merged" id="all.4UTMZ8.1" title="原文 : The identity server redirects back to Helidon service with a code">アイデンティティ・サーバーは、コードを使用してHelidonサービスにリダイレクト</span>

</li>
<li>
<span class="merged" id="all.dpxhL.1" title="原文 : Helidon service contacts the identity server&rsquo;s token endpoint, to exchange the code for a JWT">Helidonサービスは、JWTのコードを交換するために、アイデンティティ・サーバーのトークン・エンドポイントに接続</span>

</li>
<li>
<span class="merged" id="all.2VKbKT.1" title="原文 : The JWT is stored in a cookie (if cookie support is enabled, which it is by default)">JWTはcookieに格納されます(cookieサポートが有効になっている場合、これはデフォルトです)</span>

</li>
<li>
<span class="merged" id="all.33AhKk.1" title="原文 : Helidon service redirects to original endpoint (on itself)">Helidonサービスは、元のエンドポイント(それ自体)にリダイレクト</span>

</li>
</ol>
<p><span class="merged" id="all.2O8kmI.1" title="原文 : Helidon obtains a token from request (from cookie, header, or query parameter):">Helidonは、リクエストから(cookie、ヘッダーまたは問合せパラメータから)トークンを取得します:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2LbP5W.1" title="原文 : Token is parsed as a singed JWT">トークンは単一JWTとして解析されます</span>

</li>
<li>
<span class="merged" id="all.4V3YQL.1" title="原文 : We validate the JWT signature either against local JWK or against the identity server&rsquo;s introspection endpoint depending on configuration">JWTシグネチャは、構成に応じて、ローカルJWKまたはアイデンティティ・サーバーのイントロスペクション・エンドポイントのいずれかに対してバリデートされます</span>

</li>
<li>
<span class="merged" id="all.3Rdm1A.1" title="原文 : We validate the issuer and audience of the token if it matches the configured values">トークンの発行者とオーディエンスが構成済の値と一致するかどうかをバリデート</span>

</li>
<li>
<span class="merged" id="all.1TkhcA.1" title="原文 : A subject is created from the JWT, including scopes from the token">JWTからサブジェクトが作成されます(トークンのスコープを含む)</span>

</li>
<li>
<span class="merged" id="all.4WPiBt.1" title="原文 : We validate that we have sufficient scopes to proceed, and return 403 if not">続行するのに十分なスコープがあることをバリデートし、ない場合は<code>403</code>を返します</span>

</li>
<li>
<span class="merged" id="all.6vQJg.1" title="原文 : Handling is returned to security to process other security providers">処理は、他のセキュリティ・プロバイダを処理するためにセキュリティに戻されます</span>

</li>
</ol>

<h5 id="cors"><span class="merged" id="all.3bUB5l.1" title="原文 : CORS Settings">CORS設定</span></h5>
<div class="section">
<p><span class="merged" id="all.1zhKsV.1" title="原文 : As an experimental feature, you can set up cross-origin handling for the redirect and logout endpoints in an optional cors block inside the oidc configuration.">実験的な機能として、<code>oidc</code>構成内のオプションの<code>cors</code>ブロックで、リダイレクトおよびログアウト・エンドポイントのクロス・オリジン処理を設定できます。</span></p>

<p><span class="merged" id="all.1rCp5c.2" title="原文 : The table below lists the configuration keys that identify the CORS characteristics.">次の表に、CORS特性を識別する構成キーを示します。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 33.333%;">
<col style="width: 33.333%;">
<col style="width: 33.333%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1Ov129.8"  title="原文:: Configuration Key">構成キー</span></th>
<th><span class="merged" id="all.oxso7.5"  title="原文:: Default">デフォルト</span></th>
<th><span class="merged" id="all.3zyV5O.4" title="原文 : CORS Header Name">CORSヘッダー名</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1nJYnr.3"  title="原文: allow-credentials"><code>allow-credentials</code></span></td>
<td class=""><span class="merged" id="all.42DdBS.19"  title="原文: false"><code>false</code></span></td>
<td class=""><span class="merged" id="all.4dF9U6.4"  title="原文: Access-Control-Allow-Credentials"><code>Access-Control-Allow-Credentials</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3CeDxm.3"  title="原文: allow-headers"><code>allow-headers</code></span></td>
<td class=""><span class="merged" id="all.3P5UfM.12"  title="原文: [&quot;*&quot;]"><code>["*"]</code></span></td>
<td class=""><span class="merged" id="all.RsjK1.4"  title="原文: Access-Control-Allow-Headers"><code>Access-Control-Allow-Headers</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2GrPoY.3"  title="原文: allow-methods"><code>allow-methods</code></span></td>
<td class=""><span class="merged" id="all.3P5UfM.13"  title="原文: [&quot;*&quot;]"><code>["*"]</code></span></td>
<td class=""><span class="merged" id="all.3hrvIH.4"  title="原文: Access-Control-Allow-Methods"><code>Access-Control-Allow-Methods</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3lELH6.3"  title="原文: allow-origins"><code>allow-origins</code></span></td>
<td class=""><span class="merged" id="all.3P5UfM.14"  title="原文: [&quot;*&quot;]"><code>["*"]</code></span></td>
<td class=""><span class="merged" id="all.2FjaSx.4"  title="原文: Access-Control-Allow-Origins"><code>Access-Control-Allow-Origins</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2uvwu1.3"  title="原文: expose-headers"><code>expose-headers</code></span></td>
<td class=""><span class="merged" id="all.2Qehz5.5"  title="原文: none"><code>none</code></span></td>
<td class=""><span class="merged" id="all.yr2OR.4"  title="原文: Access-Control-Expose-Headers"><code>Access-Control-Expose-Headers</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.znMla.3"  title="原文: max-age"><code>max-age</code></span></td>
<td class=""><span class="merged" id="all.3ukg0O.4"  title="原文: 3600"><code>3600</code></span></td>
<td class=""><span class="merged" id="all.4bPOg7.4"  title="原文: Access-Control-Max-Age"><code>Access-Control-Max-Age</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48UcwL.5"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><span class="merged" id="all.xEiHU.22"  title="原文: true"><code>true</code></span></td>
<td class=""><span class="merged" id="all.2jtIAF.10"  title="原文:: n/a">該当なし</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.226CVy.4" title="原文 : If the cross-origin configuration is disabled (enabled = false), then the Helidon CORS implementation ignores the cross-origin configuration entry.">クロス・オリジン構成が無効になっている場合(<code>enabled</code> = false)、Helidon CORS実装はクロス・オリジン構成エントリを無視します。</span></p>

<p><span class="merged" id="all.437duk.2" title="原文 : The following example of basic cross-origin configuration limits cross-origin resource sharing for PUT and DELETE operations to only foo.com and there.com:">次の基本的なクロス・オリジン構成の例では、<code>PUT</code>および<code>DELETE</code>操作のクロス・オリジン・リソース共有を<code>foo.com</code>および<code>there.com</code>のみに制限します:</span></p>

<markup
lang="hocon"

>...
  allow-origins: ["http://foo.com", "http://there.com"]
  allow-methods: ["PUT", "DELETE"]
...</markup>

</div>
</div>
</div>

<h3 id="_http_basic_authentication_provider"><span class="merged" id="all.cFhqf.1" title="原文 : HTTP Basic Authentication Provider">HTTP基本認証プロバイダ</span></h3>
<div class="section">
<p><span class="merged" id="all.3upSni.1" title="原文 : HTTP Basic authentication support">HTTP Basic認証のサポート</span></p>


<h4 id="_setup_2"><span class="merged" id="all.4BqnSO.10"  title="原文:: Setup">設定</span></h4>
<div class="section">
<markup
lang="xml"
title="Maven dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.security.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-security-providers-http-auth&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<markup
lang="text"
title="Provider class name"
>io.helidon.security.providers.httpauth.HttpBasicAuthProvider</markup>

<markup
lang="text"
title="Provider configuration key"
>http-basic-auth</markup>

</div>

<h4 id="_example_code_2"><span class="merged" id="all.mu2yS.10"  title="原文:: Example code">コード例</span></h4>
<div class="section">
<p><span class="merged" id="all.jO3hz.2" title="原文 : https://github.com/oracle/helidon/tree/master/examples/security/outbound-override"><a href="https://github.com/oracle/helidon/tree/master/examples/security/outbound-override" id="" target="_blank" >https://github.com/oracle/helidon/tree/master/examples/security/outbound-override</a></span></p>

<markup
lang="yaml"
title="Configuration example"
>security:
  config.require-encryption: false
security:
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

<h4 id="_configuration_options_2"><span class="merged" id="all.3SKgM1.11"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<p><span class="merged" id="all.QSLwf.10" title="原文 : The following table shows all configuration options of the provider and their default values">次の表に、プロバイダのすべての構成オプションとそのデフォルト値を示します</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 22.222%;">
<col style="width: 22.222%;">
<col style="width: 55.556%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.14"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.G3u1e.13"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.17"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4Zagyj.8"  title="原文: optional"><code>optional</code></span></td>
<td class=""><span class="merged" id="all.42DdBS.20"  title="原文: false"><code>false</code></span></td>
<td class=""><span class="merged" id="all.4KM3rs.8.spl1" title="原文 : If set to true, failure to authenticate will return ABSTAIN result instead of FAILURE."><code>true</code>に設定した場合、認証に失敗すると、<code>FAILURE</code>ではなく<code>ABSTAIN</code>の結果が返されます。</span> <span class="merged" id="all.4KM3rs.8.spl2" title="原文 : This is an important distinction when more than one provider is used">これは、複数のプロバイダを使用する場合の重要な違いです</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.10Bdny.6"  title="原文: realm"><code>realm</code></span></td>
<td class=""><span class="merged" id="all.V69kn.6"  title="原文: helidon"><code>helidon</code></span></td>
<td class=""><span class="merged" id="all.2x8NkE.2" title="原文 : The realm shown in challenge when user accesses a service without authentication">ユーザーが認証なしでサービスにアクセスしたときにチャレンジに表示されるレルム</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4V6kvV.4"  title="原文: principal-type"><code>principal-type</code></span></td>
<td class=""><span class="merged" id="all.26725z.5"  title="原文: USER"><code>USER</code></span></td>
<td class=""><span class="merged" id="all.2tuKGH.2" title="原文 : Type of authenticated entity - either USER or SERVICE, can be used in combination with other authentication mechanism to authenticate both the user (as in person sitting in front of a computer) and a service (as in the application requesting this service on user&rsquo;s behalf)">認証済エンティティのタイプ - <code>USER</code>または<code>SERVICE</code>のいずれかを他の認証メカニズムと組み合せて使用して、ユーザー(コンピュータの前面にいるユーザー)とサービス(ユーザーのかわりにこのサービスをリクエストするアプリケーションなど)の両方を認証できます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.sbmr.2"  title="原文: users"><code>users</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.45mDrY.2.spl1" title="原文 : List of users when using configuration based approach.">構成ベースのアプローチを使用する場合のユーザーのリスト。</span> <span class="merged" id="all.45mDrY.2.spl2" title="原文 : As an alternative, you can implement a java service (see below).">かわりに、javaサービスを実装することもできます(次を参照)。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.46DWSr.6"  title="原文: outbound"><code>outbound</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3FFH7Q.6" title="原文 : A list of outbound configurations">アウトバウンド構成のリスト</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3sFPpq.6"  title="原文: outbound.*.name"><code>outbound.*.name</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3yQQtP.6" title="原文 : Required name of outbound configuration">アウトバウンド構成の必須名</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.12LPbb.4"  title="原文: outbound.*.username"><code>outbound.*.username</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.4VTwdo.4" title="原文 : Optional username used for outbound security; if not provided, current identity is propagated">アウトバウンド・セキュリティに使用されるオプションのユーザー名。指定しない場合、現在のアイデンティティが伝播されます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2BDLFu.3"  title="原文: outbound.*.password"><code>outbound.*.password</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.1yq1kI.3" title="原文 : Optional password used for outbound security">アウトバウンド・セキュリティに使用されるオプションのパスワード</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.HbvzU.6"  title="原文: outbound.*.transports"><code>outbound.*.transports</code></span></td>
<td class=""><span class="merged" id="all.1bmj05.6" title="原文 : any transport">任意のトランスポート</span></td>
<td class=""><span class="merged" id="all.1qX6pc.6" title="原文 : An array of transports this outbound configuration should be used for">このアウトバウンド構成を使用するトランスポートの配列</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.9leSv.6"  title="原文: outbound.*.hosts"><code>outbound.*.hosts</code></span></td>
<td class=""><span class="merged" id="all.2xFiA4.6" title="原文 : any host">任意のホスト</span></td>
<td class=""><span class="merged" id="all.HYSTm.6" title="原文 : An array of hosts this outbound configuration should be used for, can be a regular expression">このアウトバウンド構成を使用するホストの配列で、正規表現を使用できます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4YVRR3.6"  title="原文: outbound.*.paths"><code>outbound.*.paths</code></span></td>
<td class=""><span class="merged" id="all.1qm74s.6" title="原文 : any path">任意のパス</span></td>
<td class=""><span class="merged" id="all.akEQf.6" title="原文 : An array of paths this outbound configuration should be used for (such as /greet), can be a regular expression">このアウトバウンド構成を使用するパスの配列(<code>/greet</code>など)。正規表現を使用できます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.jL102.6"  title="原文: outbound.*.methods"><code>outbound.*.methods</code></span></td>
<td class=""><span class="merged" id="all.3zlSxu.6" title="原文 : any method">任意のメソッド</span></td>
<td class=""><span class="merged" id="all.4dCFqc.6" title="原文 : An array of HTTP methods this outbound configuration should be used for">このアウトバウンド構成を使用するHTTPメソッドの配列</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.33OyW8.4"  title="原文: outbound.*.outbound-token"><code>outbound.*.outbound-token</code></span></td>
<td class=""><span class="merged" id="all.4A6j0j.1" title="原文 : Authorization header with basic prefix"><code>basic</code>プレフィクス付きの<code>Authorization</code>ヘッダー</span></td>
<td class=""><span class="merged" id="all.4FdsjF.4" title="原文 : Configuration of outbound header used to propagate">伝播に使用されるアウトバウンド・ヘッダーの構成</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2zye5V.4"  title="原文: outbound.*.outbound-token.header"><code>outbound.*.outbound-token.header</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.y90Ow.4" title="原文 : Name of the header used to propagate the token">トークンの伝播に使用されるヘッダーの名前</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Vx0cs.4"  title="原文: outbound.*.outbound-token.prefix"><code>outbound.*.outbound-token.prefix</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.1VvdNf.1" title="原文 : Prefix for the header value, such as &quot;basic &quot; (only one of prefix, regexp and format should be defined, regexp wins over prefix, format wins over regexp)"><code>"basic "</code>などのヘッダー値のプレフィクス(<code>prefix</code>、<code>regexp</code>および<code>format</code>のいずれか一方のみを定義し、<code>regexp</code>は<code>prefix</code>より優先し、<code>format</code>は<code>regexp</code>より優先します)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4ARd4Z.4"  title="原文: outbound.*.outbound-token.format"><code>outbound.*.outbound-token.format</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3T24ny.1" title="原文 : String format with a single parameter to create the header value, such as &quot;basic %1s&quot;"><code>"basic %1s"</code>など、ヘッダー値を作成するための単一のパラメータを含む文字列書式</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.yVBV9.4"  title="原文: outbound.*.outbound-token.regexp"><code>outbound.*.outbound-token.regexp</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.2Gt15g.1" title="原文 : Regular expression to create the header value, such as &quot;basic (.*)&quot;"><code>"basic (.*)"</code>などのヘッダー値を作成するための正規表現</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<h4 id="_how_does_it_work_2"><span class="merged" id="all.aWBLA.10"  title="原文: How does it work?"> 動作の仕組み</span></h4>
<div class="section">
<p><span class="merged" id="all.3ORkY4.1" title="原文 : See https://tools.ietf.org/html/rfc7617."><a href="https://tools.ietf.org/html/rfc7617" id="" target="_blank" >https://tools.ietf.org/html/rfc7617</a>を参照してください。</span></p>

<p><span class="merged" id="all.2hZ4X1.2" title="原文 : Authentication of request"><strong>リクエストの認証</strong></span></p>

<p><span class="merged" id="all.2pB05a.1" title="原文 : When a request is received without the Authorization: basic …​. header, a challenge is returned to provide such authentication."><code>Authorization: basic …​.</code>ヘッダーなしでリクエストを受信すると、このような認証を提供するチャレンジが返されます。</span></p>

<p><span class="merged" id="all.2MuSBK.1" title="原文 : When a request is received with the Authorization: basic …​. header, the username and password is validated against configured users (and users obtained from custom service if any provided)."><code>Authorization: basic …​.</code>ヘッダーを含むリクエストを受信すると、ユーザー名とパスワードが構成済ユーザー(および指定されている場合はカスタム・サービスから取得したユーザー)に対してバリデートされます。</span></p>

<p><span class="merged" id="all.4EiPav.2" title="原文 : Subject is created based on the username and roles provided by the user store.">サブジェクトは、ユーザー・ストアによって提供されるユーザー名とロールに基づいて作成されます。</span></p>

<p><span class="merged" id="all.3bi6D6.2"  title="原文:: Identity propagation"><strong>ID伝播</strong></span></p>

<p><span class="merged" id="all.2LHMcp.1" title="原文 : When identity propagation is configured, there are several options for identifying username and password to propagate:">アイデンティティ伝播が構成されている場合、伝播するユーザー名とパスワードを識別するためのオプションがいくつかあります:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1IRANF.1" title="原文 : We propagate the current username and password (inbound request must be authenticated using basic authentication).">現在のユーザー名とパスワードを伝播します(インバウンド・リクエストは基本認証を使用して認証する必要があります)。</span>

</li>
<li>
<span class="merged" id="all.31YjIx.1" title="原文 : We use username and password from an explicitly configured property (See HttpBasicAuthProvider.EP_PROPERTY_OUTBOUND_USER and HttpBasicAuthProvider.EP_PROPERTY_OUTBOUND_PASSWORD)">明示的に構成されたプロパティのユーザー名とパスワードを使用します(<code>HttpBasicAuthProvider.EP_PROPERTY_OUTBOUND_USER</code>および<code>HttpBasicAuthProvider.EP_PROPERTY_OUTBOUND_PASSWORD</code>を参照)</span>

</li>
<li>
<span class="merged" id="all.Jqk8Z.1" title="原文 : We use username and password associated with an outbound target (see example configuration above)">アウトバウンド・ターゲットに関連付けられたユーザー名とパスワードを使用します(前述の構成例を参照)</span>

</li>
</ol>
<p><span class="merged" id="all.4bmnAv.1" title="原文 : Identity is propagated only if:">アイデンティティは、次の場合にのみ伝播されます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.3xUNp9.1" title="原文 : There is an outbound target configured for the endpoint">エンドポイントに構成されたアウトバウンド・ターゲットがあります</span>

</li>
<li>
<span class="merged" id="all.1LHu1w.1" title="原文 : Or there is an explicitly configured username/password for the current request (through request property)">または、現在のリクエストに対して明示的に構成されたユーザー名/パスワードがあります(リクエスト・プロパティを使用)</span>

</li>
</ol>
<p><span class="merged" id="all.4eG9bs.2" title="原文 : Custom user store"><strong>カスタム・ユーザー・ストア</strong></span></p>

<p><span class="merged" id="all.303dxT.2.spl1" title="原文 : Java service loader service io.helidon.security.providers.httpauth.spi.UserStoreService can be implemented to provide users to the provider, such as when validated against an internal database or LDAP server.">Javaサービス・ローダー・サービス<code>io.helidon.security.providers.httpauth.spi.UserStoreService</code>を実装すると、内部データベースやLDAPサーバーに対してバリデートされた場合など、プロバイダにユーザーを提供できます。</span> <span class="merged" id="all.303dxT.2.spl2" title="原文 : The user store is defined so you never need the clear text password of the user.">ユーザー・ストアはユーザーのクリア・テキスト・パスワードを必要としないように定義されています。</span> </p>

<p><span class="merged" id="all.15FyFi.1" title="原文 : Warning on security of HTTP Basic Authenticaton (or lack thereof)"><em>HTTP Basic認証のセキュリティに関する警告(またはその不足)</em></span></p>

<p><span class="merged" id="all.42Zgwm.1.spl1" title="原文 : Basic authentication uses base64 encoded username and password and passes it over the network.">Basic認証では、base64でエンコードされたユーザー名とパスワードが使用され、ネットワーク経由で渡されます。</span> <span class="merged" id="all.42Zgwm.1.spl2" title="原文 : Base64 is only encoding, not encryption - so anybody that gets hold of the header value can learn the actual username and password of the user.">Base64はエンコーディングのみで、暗号化ではありません - これにより、ヘッダー値を保持するユーザーは誰でも、そのユーザーの実際のユーザー名とパスワードを知ることができます。</span> <span class="merged" id="all.42Zgwm.1.spl3" title="原文 : This is a security risk and an attack vector that everybody should be aware of before using HTTP Basic Authentication.">これは、HTTP Basic認証を使用する前にすべてのユーザーが認識しておく必要があるセキュリティ・リスクおよび攻撃ベクターです。</span> <span class="merged" id="all.42Zgwm.1.spl4" title="原文 : We recommend using this approach only for testing and demo purposes.">このアプローチは、テストおよびデモ目的でのみ使用することをお薦めします。</span> </p>

</div>
</div>

<h3 id="_http_digest_authentication_provider"><span class="merged" id="all.3v3V7a.1" title="原文 : HTTP Digest Authentication Provider">HTTPダイジェスト認証プロバイダ</span></h3>
<div class="section">
<p><span class="merged" id="all.PsjX4.1" title="原文 : HTTP Digest authentication support">HTTPダイジェスト認証のサポート</span></p>


<h4 id="_setup_3"><span class="merged" id="all.4BqnSO.11"  title="原文:: Setup">設定</span></h4>
<div class="section">
<markup
lang="xml"
title="Maven dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.security.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-security-providers-http-auth&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<markup
lang="text"
title="Provider class name"
>io.helidon.security.providers.httpauth.HttpDigestAuthProvider</markup>

<markup
lang="text"
title="Provider configuration key"
>http-digest-auth</markup>

</div>

<h4 id="_example_code_3"><span class="merged" id="all.mu2yS.11"  title="原文:: Example code">コード例</span></h4>
<div class="section">
<markup
lang="yaml"
title="Configuration example"
>security:
  config.require-encryption: false
security:
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

<h4 id="_configuration_options_3"><span class="merged" id="all.3SKgM1.12"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<p><span class="merged" id="all.QSLwf.11" title="原文 : The following table shows all configuration options of the provider and their default values">次の表に、プロバイダのすべての構成オプションとそのデフォルト値を示します</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 22.222%;">
<col style="width: 22.222%;">
<col style="width: 55.556%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.15"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.G3u1e.14"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.18"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4Zagyj.9"  title="原文: optional"><code>optional</code></span></td>
<td class=""><span class="merged" id="all.42DdBS.21"  title="原文: false"><code>false</code></span></td>
<td class=""><span class="merged" id="all.4KM3rs.9.spl1" title="原文 : If set to true, failure to authenticate will return ABSTAIN result instead of FAILURE."><code>true</code>に設定した場合、認証に失敗すると、<code>FAILURE</code>ではなく<code>ABSTAIN</code>の結果が返されます。</span> <span class="merged" id="all.4KM3rs.9.spl2" title="原文 : This is an important distinction when more than one provider is used">これは、複数のプロバイダを使用する場合の重要な違いです</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.10Bdny.7"  title="原文: realm"><code>realm</code></span></td>
<td class=""><span class="merged" id="all.V69kn.7"  title="原文: helidon"><code>helidon</code></span></td>
<td class=""><span class="merged" id="all.2x8NkE.3" title="原文 : The realm shown in challenge when user accesses a service without authentication">ユーザーが認証なしでサービスにアクセスしたときにチャレンジに表示されるレルム</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4V6kvV.5"  title="原文: principal-type"><code>principal-type</code></span></td>
<td class=""><span class="merged" id="all.26725z.6"  title="原文: USER"><code>USER</code></span></td>
<td class=""><span class="merged" id="all.2tuKGH.3" title="原文 : Type of authenticated entity - either USER or SERVICE, can be used in combination with other authentication mechanism to authenticate both the user (as in person sitting in front of a computer) and a service (as in the application requesting this service on user&rsquo;s behalf)">認証済エンティティのタイプ - <code>USER</code>または<code>SERVICE</code>のいずれかを他の認証メカニズムと組み合せて使用して、ユーザー(コンピュータの前面にいるユーザー)とサービス(ユーザーのかわりにこのサービスをリクエストするアプリケーションなど)の両方を認証できます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.sbmr.3"  title="原文: users"><code>users</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.45mDrY.3.spl1" title="原文 : List of users when using configuration based approach.">構成ベースのアプローチを使用する場合のユーザーのリスト。</span> <span class="merged" id="all.45mDrY.3.spl2" title="原文 : As an alternative, you can implement a java service (see below).">かわりに、javaサービスを実装することもできます(次を参照)。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2ZmMkv.1"  title="原文: algorithm"><code>algorithm</code></span></td>
<td class=""><span class="merged" id="all.2wf8Kx.1"  title="原文: MD5"><code>MD5</code></span></td>
<td class=""><span class="merged" id="all.3oDj59.1" title="原文 : Only MD5 supported"><code>MD5</code>のみがサポートされます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3XEI1q.1"  title="原文: nonce-timeout-millis"><code>nonce-timeout-millis</code></span></td>
<td class=""><span class="merged" id="all.4772zH.2"  title="原文:: 1 day">1日</span></td>
<td class=""><span class="merged" id="all.QkQrg.1" title="原文 : Number of milliseconds for the nonce timeout">nonceタイムアウトのミリ秒数</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1h6f6M.1"  title="原文: server-secret"><code>server-secret</code></span></td>
<td class=""><span class="merged" id="all.PF9u9.1"  title="原文:: random">random</span></td>
<td class=""><span class="merged" id="all.1fXsZg.1.spl1" title="原文 : A string to use as a server secret - this is to use digest auth between multiple servers (e.g. when in a cluster).">サーバー・シークレットとして使用する文字列 - これは、複数のサーバー間でダイジェスト認証を使用するためです(クラスタ内の場合など)。</span> <span class="merged" id="all.1fXsZg.1.spl2" title="原文 : Used to encrypt nonce.">nonceの暗号化に使用されます。</span> <span class="merged" id="all.1fXsZg.1.spl3" title="原文 : This must not be known outside of this app, as others may create digest requests we would trust.">これは、他のユーザーが信頼するダイジェスト・リクエストを作成する可能性があるため、このアプリケーションの外部では認識されないようにする必要があります。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3IKVQY.1"  title="原文: qop"><code>qop</code></span></td>
<td class=""><span class="merged" id="all.10P0gX.1"  title="原文: NONE"><code>NONE</code></span></td>
<td class=""><span class="merged" id="all.1Ikeyt.1.spl1" title="原文 : only AUTH supported."><code>AUTH</code>のみがサポートされています。</span> <span class="merged" id="all.1Ikeyt.1.spl2" title="原文 : If left empty, uses the legacy approach (older RFC version).">空のままにすると、従来のアプローチ(古いRFCバージョン)が使用されます。</span> <span class="merged" id="all.1Ikeyt.1.spl3" title="原文 : AUTH-INT is not supported."><code>AUTH-INT</code>はサポートされていません。</span> </td>
</tr>
</tbody>
</table>
</div>
</div>

<h4 id="_how_does_it_work_3"><span class="merged" id="all.aWBLA.11"  title="原文: How does it work?"> 動作の仕組み</span></h4>
<div class="section">
<p><span class="merged" id="all.2jVNBW.1" title="原文 : See https://tools.ietf.org/html/rfc7616."><a href="https://tools.ietf.org/html/rfc7616" id="" target="_blank" >https://tools.ietf.org/html/rfc7616</a>を参照してください。</span></p>

<p><span class="merged" id="all.2hZ4X1.3" title="原文 : Authentication of request"><strong>リクエストの認証</strong></span></p>

<p><span class="merged" id="all.4DQNzX.1" title="原文 : When a request is received without the Authorization: digest …​. header, a challenge is returned to provide such authentication using WWW-Authenticate header."><code>Authorization: digest …​.</code>ヘッダーなしでリクエストを受信すると、チャレンジが返され、<code>WWW-Authenticate</code>ヘッダーを使用してこのような認証が提供されます。</span></p>

<p><span class="merged" id="all.1lWis3.1" title="原文 : When a request is received with the Authorization: digest …​. header, the request is validated against configured users (and users obtained from custom service if any provided)."><code>Authorization: digest …​.</code>ヘッダーを含むリクエストを受信すると、そのリクエストは構成済ユーザー(および指定されている場合はカスタム・サービスから取得したユーザー)に対してバリデートされます。</span></p>

<p><span class="merged" id="all.4EiPav.3" title="原文 : Subject is created based on the username and roles provided by the user store.">サブジェクトは、ユーザー・ストアによって提供されるユーザー名とロールに基づいて作成されます。</span></p>

<p><span class="merged" id="all.4eG9bs.3" title="原文 : Custom user store"><strong>カスタム・ユーザー・ストア</strong></span></p>

<p><span class="merged" id="all.303dxT.3.spl1" title="原文 : Java service loader service io.helidon.security.providers.httpauth.spi.UserStoreService can be implemented to provide users to the provider, such as when validated against an internal database or LDAP server.">Javaサービス・ローダー・サービス<code>io.helidon.security.providers.httpauth.spi.UserStoreService</code>を実装すると、内部データベースやLDAPサーバーに対してバリデートされた場合など、プロバイダにユーザーを提供できます。</span> <span class="merged" id="all.303dxT.3.spl2" title="原文 : The user store is defined so you never need the clear text password of the user.">ユーザー・ストアはユーザーのクリア・テキスト・パスワードを必要としないように定義されています。</span> </p>

<p><span class="merged" id="all.BisMl.1" title="原文 : Note on security of HTTP Digest Authenticaton"><em>HTTPダイジェスト認証のセキュリティに関するノート</em></span></p>

<p><span class="merged" id="all.3WR01b.1" title="原文 : These authentication schemes should be obsolete, though they provide a very easy way to test a protected resource.">これらの認証スキームは<em>「廃止」</em>である必要がありますが、保護されたリソースをテストする非常に簡単な方法を提供します。</span></p>

</div>
</div>

<h3 id="_header_authentication_provider"><span class="merged" id="all.3gFiST.1" title="原文 : Header Authentication Provider">ヘッダー認証プロバイダ</span></h3>
<div class="section">
<p><span class="merged" id="all.TbI9b.1" title="原文 : Asserts user or service identity based on a value of a header.">ヘッダーの値に基づいてユーザーまたはサービス・アイデンティティをアサートします。</span></p>


<h4 id="_setup_4"><span class="merged" id="all.4BqnSO.12"  title="原文:: Setup">設定</span></h4>
<div class="section">
<markup
lang="xml"
title="Maven dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.security.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-security-providers-header&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<markup
lang="text"
title="Provider class name"
>io.helidon.security.providers.header.HeaderAtnProvider</markup>

<markup
lang="text"
title="Provider configuration key"
>header-atn</markup>

</div>

<h4 id="_example_code_4"><span class="merged" id="all.mu2yS.12"  title="原文:: Example code">コード例</span></h4>
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

<h4 id="_configuration_options_4"><span class="merged" id="all.3SKgM1.13"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<p><span class="merged" id="all.QSLwf.12" title="原文 : The following table shows all configuration options of the provider and their default values">次の表に、プロバイダのすべての構成オプションとそのデフォルト値を示します</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 22.222%;">
<col style="width: 22.222%;">
<col style="width: 55.556%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.16"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.G3u1e.15"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.19"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4Zagyj.10"  title="原文: optional"><code>optional</code></span></td>
<td class=""><span class="merged" id="all.42DdBS.22"  title="原文: false"><code>false</code></span></td>
<td class=""><span class="merged" id="all.4KM3rs.10.spl1" title="原文 : If set to true, failure to authenticate will return ABSTAIN result instead of FAILURE."><code>true</code>に設定した場合、認証に失敗すると、<code>FAILURE</code>ではなく<code>ABSTAIN</code>の結果が返されます。</span> <span class="merged" id="all.4KM3rs.10.spl2" title="原文 : This is an important distinction when more than one provider is used">これは、複数のプロバイダを使用する場合の重要な違いです</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.24OC9j.2"  title="原文: authenticate"><code>authenticate</code></span></td>
<td class=""><span class="merged" id="all.xEiHU.23"  title="原文: true"><code>true</code></span></td>
<td class=""><span class="merged" id="all.32EyLu.1" title="原文 : If set to false, authentication will not be attempted (outbound security can still be used)"><code>false</code>に設定した場合、認証は試行されません(アウトバウンド・セキュリティは引き続き使用できます)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3SEgfv.4"  title="原文: propagate"><code>propagate</code></span></td>
<td class=""><span class="merged" id="all.42DdBS.23"  title="原文: false"><code>false</code></span></td>
<td class=""><span class="merged" id="all.4HMfSJ.1.spl1" title="原文 : If explicitly set to false, identity propagation will not be done.">明示的に<code>false</code>に設定した場合、アイデンティティ伝播は行われません。</span> <span class="merged" id="all.4HMfSJ.1.spl2" title="原文 : Otherwise it is done if an outbound section is configured">それ以外の場合は、<code>outbound</code>セクションが構成されている場合に実行されます</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4V6kvV.6"  title="原文: principal-type"><code>principal-type</code></span></td>
<td class=""><span class="merged" id="all.26725z.7"  title="原文: USER"><code>USER</code></span></td>
<td class=""><span class="merged" id="all.1HbPmt.1" title="原文 : Can be USER or SERVICE"><code>USER</code>または<code>SERVICE</code>を使用できます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3zlnZ9.2"  title="原文: atn-token"><code>atn-token</code></span></td>
<td class=""><span class="merged" id="all.2Qehz5.6"  title="原文: none"><code>none</code></span></td>
<td class=""><span class="merged" id="all.29s4AT.1" title="原文 : Token extraction and propagation, you can define which header to use and how to extract it">トークンの抽出および伝播では、使用するヘッダーとその抽出方法を定義できます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.46DWSr.7"  title="原文: outbound"><code>outbound</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3FFH7Q.7" title="原文 : A list of outbound configurations">アウトバウンド構成のリスト</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3sFPpq.7"  title="原文: outbound.*.name"><code>outbound.*.name</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3yQQtP.7" title="原文 : Required name of outbound configuration">アウトバウンド構成の必須名</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.12LPbb.5"  title="原文: outbound.*.username"><code>outbound.*.username</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.4VTwdo.5" title="原文 : Optional username used for outbound security; if not provided, current identity is propagated">アウトバウンド・セキュリティに使用されるオプションのユーザー名。指定しない場合、現在のアイデンティティが伝播されます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.HbvzU.7"  title="原文: outbound.*.transports"><code>outbound.*.transports</code></span></td>
<td class=""><span class="merged" id="all.1bmj05.7" title="原文 : any transport">任意のトランスポート</span></td>
<td class=""><span class="merged" id="all.1qX6pc.7" title="原文 : An array of transports this outbound configuration should be used for">このアウトバウンド構成を使用するトランスポートの配列</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.9leSv.7"  title="原文: outbound.*.hosts"><code>outbound.*.hosts</code></span></td>
<td class=""><span class="merged" id="all.2xFiA4.7" title="原文 : any host">任意のホスト</span></td>
<td class=""><span class="merged" id="all.HYSTm.7" title="原文 : An array of hosts this outbound configuration should be used for, can be a regular expression">このアウトバウンド構成を使用するホストの配列で、正規表現を使用できます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4YVRR3.7"  title="原文: outbound.*.paths"><code>outbound.*.paths</code></span></td>
<td class=""><span class="merged" id="all.1qm74s.7" title="原文 : any path">任意のパス</span></td>
<td class=""><span class="merged" id="all.akEQf.7" title="原文 : An array of paths this outbound configuration should be used for (such as /greet), can be a regular expression">このアウトバウンド構成を使用するパスの配列(<code>/greet</code>など)。正規表現を使用できます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.jL102.7"  title="原文: outbound.*.methods"><code>outbound.*.methods</code></span></td>
<td class=""><span class="merged" id="all.3zlSxu.7" title="原文 : any method">任意のメソッド</span></td>
<td class=""><span class="merged" id="all.4dCFqc.7" title="原文 : An array of HTTP methods this outbound configuration should be used for">このアウトバウンド構成を使用するHTTPメソッドの配列</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.33OyW8.5"  title="原文: outbound.*.outbound-token"><code>outbound.*.outbound-token</code></span></td>
<td class=""><span class="merged" id="all.46jadD.1" title="原文 : same as atn-token"><code>atn-token</code>と同じ</span></td>
<td class=""><span class="merged" id="all.4FdsjF.5" title="原文 : Configuration of outbound header used to propagate">伝播に使用されるアウトバウンド・ヘッダーの構成</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2zye5V.5"  title="原文: outbound.*.outbound-token.header"><code>outbound.*.outbound-token.header</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.y90Ow.5" title="原文 : Name of the header used to propagate the token">トークンの伝播に使用されるヘッダーの名前</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Vx0cs.5"  title="原文: outbound.*.outbound-token.prefix"><code>outbound.*.outbound-token.prefix</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.4SUeLL.1" title="原文 : Prefix for the header value, such as &quot;username &quot; (only one of prefix, regexp and format should be defined, regexp wins over prefix, format wins over regexp)"><code>"username "</code>などのヘッダー値のプレフィクス(<code>prefix</code>、<code>regexp</code>および<code>format</code>のいずれか一方のみを定義し、<code>regexp</code>は<code>prefix</code>より優先し、<code>format</code>は<code>regexp</code>より優先します)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4ARd4Z.5"  title="原文: outbound.*.outbound-token.format"><code>outbound.*.outbound-token.format</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.1bIwsH.1" title="原文 : String format with a single parameter to create the header value, such as &quot;username %1s&quot;"><code>"username %1s"</code>など、ヘッダー値を作成するための単一のパラメータを含む文字列書式</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.yVBV9.5"  title="原文: outbound.*.outbound-token.regexp"><code>outbound.*.outbound-token.regexp</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.2xQypn.1" title="原文 : Regular expression to create the header value, such as &quot;username (.*)&quot;"><code>"username (.*)"</code>などのヘッダー値を作成するための正規表現</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<h4 id="_how_does_it_work_4"><span class="merged" id="all.aWBLA.12"  title="原文: How does it work?"> 動作の仕組み</span></h4>
<div class="section">
<p><span class="merged" id="all.4dZPdg.1" title="原文 : This provider inspects a specified request header and extracts the username/service name from it and asserts it as current subject&rsquo;s principal.">このプロバイダは、指定されたリクエスト・ヘッダーを検査し、そこからユーザー名/サービス名を抽出して、現在のサブジェクトのプリンシパルとしてアサートします。</span></p>

<p><span class="merged" id="all.2Np0u1.1" title="原文 : This can be used when we use perimeter authentication (e.g. there is a gateway that takes care of authentication and propagates the user in a header).">これは、境界認証を使用する場合に使用できます(たとえば、認証を行い、ユーザーをヘッダーに伝播するゲートウェイがあります)。</span></p>

<p><span class="merged" id="all.3bi6D6.3"  title="原文:: Identity propagation"><strong>ID伝播</strong></span></p>

<p><span class="merged" id="all.17BC7n.1" title="原文 : Identity is propagated only if an outbound target matches the target service.">アイデンティティは、アウトバウンド・ターゲットがターゲット・サービスと一致する場合にのみ伝播されます。</span></p>

<p><span class="merged" id="all.1JFBvc.1.spl1" title="原文 : The following options exist when propagating identity: 1.">アイデンティティを伝播する場合、次のオプションが存在します: 1.</span> <span class="merged" id="all.1JFBvc.1.spl2" title="原文 : We propagate the current username using the configured header 2.">構成されたヘッダー2を使用して、現在のユーザー名を伝播します。</span> <span class="merged" id="all.1JFBvc.1.spl3" title="原文 : We use username associated with an outbound target (see example configuration above)">アウトバウンド・ターゲットに関連付けられたユーザー名を使用します(前述の構成例を参照)</span> </p>

<p><span class="merged" id="all.4e2XUI.1"  title="原文:: Caution"><strong>注意</strong></span></p>

<p><span class="merged" id="all.11qadM.1.spl1" title="原文 : When using this provider, you must be sure the header cannot be explicitly configured by a user or another service.">このプロバイダを使用する場合は、ユーザーまたは別のサービスがヘッダーを明示的に構成できないことを確認する必要があります。</span> <span class="merged" id="all.11qadM.1.spl2" title="原文 : All requests should go through a gateway that removes this header from inbound traffic, and only configures it for authenticated users/services.">すべてのリクエストは、インバウンド・トラフィックからこのヘッダーを削除するゲートウェイを経由し、認証されたユーザー/サービスに対してのみ構成する必要があります。</span> <span class="merged" id="all.11qadM.1.spl3" title="原文 : Another option is to use this with fully trusted parties (such as services within a single company, on a single protected network not accessible to any users), and of course for testing and demo purposes.">別の方法として、これを完全に信頼できるパーティ(単一の会社内のサービス、どのユーザーもアクセスできない単一の保護されたネットワーク上のサービスなど)とともに使用し、テストやデモの目的で使用することもできます。</span> </p>

</div>
</div>

<h3 id="_http_signatures_provider"><span class="merged" id="all.3Kx00x.1" title="原文 : HTTP Signatures Provider">HTTPシグネチャ・プロバイダ</span></h3>
<div class="section">
<p><span class="merged" id="all.53P9v.1" title="原文 : Support for HTTP Signatures.">HTTPシグネチャのサポート。</span></p>


<h4 id="_setup_5"><span class="merged" id="all.4BqnSO.13"  title="原文:: Setup">設定</span></h4>
<div class="section">
<markup
lang="xml"
title="Maven dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.security.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-security-providers-http-sign&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<markup
lang="text"
title="Provider class name"
>io.helidon.security.providers.httpsign.HttpSignProvider</markup>

<markup
lang="text"
title="Provider configuration key"
>http-signatures</markup>

</div>

<h4 id="_example_code_5"><span class="merged" id="all.mu2yS.13"  title="原文:: Example code">コード例</span></h4>
<div class="section">
<p><span class="merged" id="all.WOrD2.1" title="原文 : https://github.com/oracle/helidon/tree/master/examples/security/webserver-signatures"><a href="https://github.com/oracle/helidon/tree/master/examples/security/webserver-signatures" id="" target="_blank" >https://github.com/oracle/helidon/tree/master/examples/security/webserver-signatures</a></span></p>

<markup
lang="yaml"
title="Configuration example"
>security:
  config.require-encryption: false
security:
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

<h4 id="_configuration_options_5"><span class="merged" id="all.3SKgM1.14"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<p><span class="merged" id="all.QSLwf.13" title="原文 : The following table shows all configuration options of the provider and their default values">次の表に、プロバイダのすべての構成オプションとそのデフォルト値を示します</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 22.222%;">
<col style="width: 22.222%;">
<col style="width: 55.556%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.17"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.G3u1e.16"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.20"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4Zagyj.11"  title="原文: optional"><code>optional</code></span></td>
<td class=""><span class="merged" id="all.42DdBS.24"  title="原文: false"><code>false</code></span></td>
<td class=""><span class="merged" id="all.4KM3rs.11.spl1" title="原文 : If set to true, failure to authenticate will return ABSTAIN result instead of FAILURE."><code>true</code>に設定した場合、認証に失敗すると、<code>FAILURE</code>ではなく<code>ABSTAIN</code>の結果が返されます。</span> <span class="merged" id="all.4KM3rs.11.spl2" title="原文 : This is an important distinction when more than one provider is used">これは、複数のプロバイダを使用する場合の重要な違いです</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.10Bdny.8"  title="原文: realm"><code>realm</code></span></td>
<td class=""><span class="merged" id="all.V69kn.8"  title="原文: helidon"><code>helidon</code></span></td>
<td class=""><span class="merged" id="all.2pQgYi.1" title="原文 : Realm used for challenge when request does not have a signature">リクエストにシグネチャがない場合にチャレンジに使用されるレルム</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.VPmDa.1"  title="原文: headers"><code>headers</code></span></td>
<td class=""><span class="merged" id="all.m7sMH.2"  title="原文: [SIGNATURE,AUTHORIZATION,CUSTOM]"><code>[SIGNATURE,AUTHORIZATION,CUSTOM]</code></span></td>
<td class=""><span class="merged" id="all.2Qa1iS.1.spl1" title="原文 : Headers to look for inbound signatures and to store outbound signatures.">インバウンド・シグネチャを検索し、アウトバウンド・シグネチャを格納するヘッダー。</span> <span class="merged" id="all.2Qa1iS.1.spl2" title="原文 : CUSTOM is provided using io.helidon.security.util.TokenHandler"><code>CUSTOM</code> は、<code>io.helidon.security.util.TokenHandler</code>を使用して提供されます</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Kg8s9.1"  title="原文: sign-headers"><code>sign-headers</code></span></td>
<td class=""><span class="merged" id="all.1TdNeg.1"  title="原文: always = [&quot;date&quot;]"><code>always = ["date"]</code></span></td>
<td class=""><span class="merged" id="all.LvwLs.1" title="原文 : Headers to be signed">署名されるヘッダー</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3bG4YB.1"  title="原文: sign-headers.*.method"><code>sign-headers.*.method</code></span></td>
<td class=""><span class="merged" id="all.3IbIc2.1" title="原文 : default for all methods">すべてのメソッドのデフォルト</span></td>
<td class=""><span class="merged" id="all.3ysyRx.1" title="原文 : Method this configuration is valid for">この構成が有効なメソッド</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.I2HxH.1"  title="原文: sign-headers.*.always"><code>sign-headers.*.always</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.Tk8rj.1" title="原文 : Array of headers to be always required in the request signature">リクエスト・シグネチャで常に必要なヘッダーの配列</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ldGRJ.1"  title="原文: sign-headers.*.if-present"><code>sign-headers.*.if-present</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.295nYe.1" title="原文 : Array of headers to be part of the signatures if present in the request">シグネチャに含まれるヘッダーの配列(リクエストに存在する場合)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.rJv1I.1"  title="原文: inbound"><code>inbound</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.4eYp6N.1" title="原文 : Configuration of inbound traffic for authenticating incoming requests">受信リクエストを認証するためのインバウンド・トラフィックの構成</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.37W3Ww.1"  title="原文: inbound.keys"><code>inbound.keys</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.4dKrYl.1" title="原文 : Configuration of signature keys to verify incoming requests">受信リクエストを検証するためのシグネチャ・キーの構成</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1F99Su.1"  title="原文: inbound.keys.*.key-id"><code>inbound.keys.*.key-id</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.2XGBy3.1" title="原文 : Key id as used in inbound signature to find the correct certificate/hmac configuration to verify the signature">署名を検証するために正しい証明書/hmac構成を検索するためにインバウンド・シグネチャで使用されるキーID</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Ypbfo.1"  title="原文: inbound.keys.*.principal-name"><code>inbound.keys.*.principal-name</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.9ozEC.1" title="原文 : The principal name (or user name) asserted when the signature is valid">シグネチャが有効な場合にアサートされるプリンシパル名(またはユーザー名)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.14zzfl.1"  title="原文: inbound.keys.*.principal-type"><code>inbound.keys.*.principal-type</code></span></td>
<td class=""><span class="merged" id="all.23B7v0.1"  title="原文: SERVICE"><code>SERVICE</code></span></td>
<td class=""><span class="merged" id="all.3BEkVn.1" title="原文 : The type of principal to assert (can be USER)">アサートするプリンシパルのタイプ(<code>USER</code>の可能性があります)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.ZYDcw.1"  title="原文: inbound.keys.*.algorithm"><code>inbound.keys.*.algorithm</code></span></td>
<td class=""><span class="merged" id="all.4FoJoc.1" title="原文 : according to other configuration">他の構成に従う</span></td>
<td class=""><span class="merged" id="all.fq60i.1" title="原文 : hmac-sha256 or rsa-sha256 is assumed if other configuration options for that type are set">そのタイプの他の構成オプションが設定されている場合は、<code>hmac-sha256</code>または<code>rsa-sha256</code>が想定されます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1KF5nA.1"  title="原文: inbound.keys.*.hmac.secret"><code>inbound.keys.*.hmac.secret</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.2EFZJz.1" title="原文 : Secret shared by the service that signed the request and this service for hmac-sha256 algorithm"><code>hmac-sha256</code>アルゴリズムのリクエストおよびこのサービスに署名したサービスによって共有されるシークレット</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1zqa7s.1"  title="原文: inbound.keys.*.public-key"><code>inbound.keys.*.public-key</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.4YVtCE.1" title="原文 : Public key configuration, implies rsa-sha256 algorithm">公開キーの構成(<code>rsa-sha256</code>アルゴリズムを含む)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Q5bOs.1"  title="原文: inbound.keys.*.public-key.keystore"><code>inbound.keys.*.public-key.keystore</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.1VYni.1" title="原文 : Keystore configuration for public key - full configuration as defined by KeyStore class">公開キーのキーストア構成 - <code>KeyStore</code>クラスで定義された完全な構成</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.46DWSr.8"  title="原文: outbound"><code>outbound</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3FFH7Q.8" title="原文 : A list of outbound configurations">アウトバウンド構成のリスト</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3sFPpq.8"  title="原文: outbound.*.name"><code>outbound.*.name</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3yQQtP.8" title="原文 : Required name of outbound configuration">アウトバウンド構成の必須名</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.12LPbb.6"  title="原文: outbound.*.username"><code>outbound.*.username</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.4VTwdo.6" title="原文 : Optional username used for outbound security; if not provided, current identity is propagated">アウトバウンド・セキュリティに使用されるオプションのユーザー名。指定しない場合、現在のアイデンティティが伝播されます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2BDLFu.4"  title="原文: outbound.*.password"><code>outbound.*.password</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.1yq1kI.4" title="原文 : Optional password used for outbound security">アウトバウンド・セキュリティに使用されるオプションのパスワード</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.HbvzU.8"  title="原文: outbound.*.transports"><code>outbound.*.transports</code></span></td>
<td class=""><span class="merged" id="all.1bmj05.8" title="原文 : any transport">任意のトランスポート</span></td>
<td class=""><span class="merged" id="all.1qX6pc.8" title="原文 : An array of transports this outbound configuration should be used for">このアウトバウンド構成を使用するトランスポートの配列</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.9leSv.8"  title="原文: outbound.*.hosts"><code>outbound.*.hosts</code></span></td>
<td class=""><span class="merged" id="all.2xFiA4.8" title="原文 : any host">任意のホスト</span></td>
<td class=""><span class="merged" id="all.HYSTm.8" title="原文 : An array of hosts this outbound configuration should be used for, can be a regular expression">このアウトバウンド構成を使用するホストの配列で、正規表現を使用できます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4YVRR3.8"  title="原文: outbound.*.paths"><code>outbound.*.paths</code></span></td>
<td class=""><span class="merged" id="all.1qm74s.8" title="原文 : any path">任意のパス</span></td>
<td class=""><span class="merged" id="all.akEQf.8" title="原文 : An array of paths this outbound configuration should be used for (such as /greet), can be a regular expression">このアウトバウンド構成を使用するパスの配列(<code>/greet</code>など)。正規表現を使用できます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.jL102.8"  title="原文: outbound.*.methods"><code>outbound.*.methods</code></span></td>
<td class=""><span class="merged" id="all.3zlSxu.8" title="原文 : any method">任意のメソッド</span></td>
<td class=""><span class="merged" id="all.4dCFqc.8" title="原文 : An array of HTTP methods this outbound configuration should be used for">このアウトバウンド構成を使用するHTTPメソッドの配列</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3j9vzD.1"  title="原文: outbound.*.signature"><code>outbound.*.signature</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3r02yt.1" title="原文 : Configuration related to outbound signature configuration">アウトバウンド・シグネチャ構成に関連する構成</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3KCBDU.1"  title="原文: outbound.*.signature.key-id"><code>outbound.*.signature.key-id</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3XBpgn.1" title="原文 : Key id to use in the outbound signature (to map to appropriate public key in target service&rsquo;s configuration)">アウトバウンド・シグネチャで使用するキーID (ターゲット・サービスの構成内の適切な公開キーにマップするため)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.cn4Qk.1"  title="原文: outbound.*.signature.header"><code>outbound.*.signature.header</code></span></td>
<td class=""><span class="merged" id="all.m7sMH.3"  title="原文: [SIGNATURE,AUTHORIZATION,CUSTOM]"><code>[SIGNATURE,AUTHORIZATION,CUSTOM]</code></span></td>
<td class=""><span class="merged" id="all.K3eYa.1.spl1" title="原文 : Headers supported by HTTP Signature.">HTTPシグネチャでサポートされているヘッダー。</span> <span class="merged" id="all.K3eYa.1.spl2" title="原文 : CUSTOM is provided using io.helidon.security.util.TokenHandler"><code>CUSTOM</code> は、<code>io.helidon.security.util.TokenHandler</code>を使用して提供されます</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3CGCXT.1"  title="原文: outbound.*.signature.hmac.secret"><code>outbound.*.signature.hmac.secret</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.fa25i.1" title="原文 : Shared secret for hmac">hmacの共有シークレット</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4KcHMn.1"  title="原文: outbound.*.signature.private-key"><code>outbound.*.signature.private-key</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.61pNt.1" title="原文 : Private key configuration for rsa based signatures">RSAベースのシグネチャの秘密キー構成</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2L6nDH.1"  title="原文: outbound.*.signature.private-key.keystore"><code>outbound.*.signature.private-key.keystore</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3Sn39k.1" title="原文 : Keystore configuration for private key - full configuration as defined by KeyStore class">秘密キーのキーストア構成 - <code>KeyStore</code>クラスで定義された完全な構成</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<h4 id="_signature_basics"><span class="merged" id="all.SBQbx.1" title="原文 : Signature basics">シグネチャの基本</span></h4>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.SaCsK.1" title="原文 : standard: based on https://tools.ietf.org/html/draft-cavage-http-signatures-03">standard : <a href="https://tools.ietf.org/html/draft-cavage-http-signatures-03" id="" target="_blank" >https://tools.ietf.org/html/draft-cavage-http-signatures-03</a>に基づく</span></p>

</li>
<li>
<p><span class="merged" id="all.1LhMNY.1.spl1" title="原文 : key-id: an arbitrary string used to locate signature configuration - when a request is received the provider locates validation configuration based on this id (e.g. HMAC shared secret or RSA public key).">key-id: シグネチャ構成の検索に使用される任意の文字列 - リクエストを受信すると、プロバイダはこのID (HMAC共有シークレットやRSA公開キーなど)に基づいてバリデーション構成を検索します。</span> <span class="merged" id="all.1LhMNY.1.spl2" title="原文 : Commonly used meanings are: key fingerprint (RSA); API Key">よく使用される意味は次のとおりです: キー・フィンガープリント(RSA)、APIキー</span> </p>

</li>
</ul>
</div>

<h4 id="_how_does_it_work_5"><span class="merged" id="all.aWBLA.13"  title="原文: How does it work?"> 動作の仕組み</span></h4>
<div class="section">
<p><span class="merged" id="all.1S55jT.1.spl1" title="原文 : Inbound Signatures We act as a server and another party is calling us with a signed HTTP request."><strong>「インバウンド・シグネチャ」</strong>はサーバーとして動作し、別のパーティが署名付きHTTPリクエストを使用してコールしています。</span> <span class="merged" id="all.1S55jT.1.spl2" title="原文 : We validate the signature and assume identity of the caller.">シグネチャをバリデートし、呼出し側のアイデンティティを想定します。</span> </p>

<p><span class="merged" id="all.2S4FPl.1.spl1" title="原文 : Outbound Signatures We act as a client and we sign our outgoing requests."><strong>「アウトバウンド・シグネチャ」</strong>クライアントとして動作し、送信リクエストに署名します。</span> <span class="merged" id="all.2S4FPl.1.spl2" title="原文 : If there is a matching outbound target specified in configuration, its configuration will be applied for signing the outgoing request, otherwise there is no signature added">構成に一致する<code>outbound</code>ターゲットが指定されている場合、その構成が送信リクエストのシグネチャに適用されます。それ以外の場合、シグネチャは追加されません</span> </p>

</div>
</div>

<h3 id="_idcs_role_mapper"><span class="merged" id="all.3B59U8.1" title="原文 : IDCS Role Mapper">IDCSロール・マッパー</span></h3>
<div class="section">
<p><span class="merged" id="all.1lTJ7n.1" title="原文 : A role mapper to retrieve roles from Oracle IDCS.">Oracle IDCSからロールを取得するロール・マッパー。</span></p>


<h4 id="_setup_6"><span class="merged" id="all.4BqnSO.14"  title="原文:: Setup">設定</span></h4>
<div class="section">
<markup
lang="xml"
title="Maven dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.security.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-security-providers-idcs-mapper&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<markup
lang="text"
title="Provider class name"
>io.helidon.security.providers.idcs.mapper.IdcsRoleMapperProvider</markup>

<markup
lang="text"
title="Provider configuration key"
>idcs-role-mapper</markup>

</div>

<h4 id="_example_code_6"><span class="merged" id="all.mu2yS.14"  title="原文:: Example code">コード例</span></h4>
<div class="section">
<p><span class="merged" id="all.1QVg2A.1" title="原文 : https://github.com/oracle/helidon/tree/master/examples/security/idcs-login/"><a href="https://github.com/oracle/helidon/tree/master/examples/security/idcs-login/" id="" target="_blank" >https://github.com/oracle/helidon/tree/master/examples/security/idcs-login/</a></span></p>

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

<h4 id="_configuration_options_6"><span class="merged" id="all.3SKgM1.15"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<p><span class="merged" id="all.QSLwf.14" title="原文 : The following table shows all configuration options of the provider and their default values">次の表に、プロバイダのすべての構成オプションとそのデフォルト値を示します</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 22.222%;">
<col style="width: 22.222%;">
<col style="width: 55.556%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.18"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.G3u1e.17"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.21"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4NL38u.1"  title="原文: multitenant"><code>multitenant</code></span></td>
<td class=""><span class="merged" id="all.xEiHU.24"  title="原文: true"><code>true</code></span></td>
<td class=""><span class="merged" id="all.3yy1Zo.1" title="原文 : Whether to support multi-tenancy with this provider">このプロバイダでマルチテナンシをサポートするかどうか</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1AH7uN.1"  title="原文: idcs-tenant-handler"><code>idcs-tenant-handler</code></span></td>
<td class=""><span class="merged" id="all.4uTGq.1" title="原文 : Header X-USER-IDENTITY-SERVICE-GUID">ヘッダー<code>X-USER-IDENTITY-SERVICE-GUID</code></span></td>
<td class=""><span class="merged" id="all.2Z0ZXK.1" title="原文 : Multi-tenant specific TokenHandler configuration to retrieve the tenant id">テナントIDを取得するためのマルチテナント固有の<code>TokenHandler</code>構成</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.255V8t.1"  title="原文: idcs-app-name-handler"><code>idcs-app-name-handler</code></span></td>
<td class=""><span class="merged" id="all.lWi5I.1" title="原文 : Header X-RESOURCE-SERVICE-INSTANCE-IDENTITY-APPNAME">ヘッダー<code>X-RESOURCE-SERVICE-INSTANCE-IDENTITY-APPNAME</code></span></td>
<td class=""><span class="merged" id="all.ghhpF.1" title="原文 : Multi-tenant specific TokenHandler configuration to retrieve the application name">アプリケーション名を取得するためのマルチテナント固有の<code>TokenHandler</code>構成</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.13yRix.1"  title="原文: cache-config"><code>cache-config</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.2CIxKS.1" title="原文 : Configuration of cache of roles for subjects">サブジェクトのロールのキャッシュの構成</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.mgjV.1"  title="原文: cache-config.cache-enabled"><code>cache-config.cache-enabled</code></span></td>
<td class=""><span class="merged" id="all.xEiHU.25"  title="原文: true"><code>true</code></span></td>
<td class=""><span class="merged" id="all.Ck2DH.1" title="原文 : Possibility to disable the cache altogether">キャッシュを完全に無効にする可能性</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48JoGm.1"  title="原文: cache-config.max-size"><code>cache-config.max-size</code></span></td>
<td class=""><span class="merged" id="all.dEMBp.1"  title="原文: 100_000"><code>100_000</code></span></td>
<td class=""><span class="merged" id="all.32lYed.1" title="原文 : Maximal number of records in the cache">キャッシュ内のレコードの最大数</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2CRZsC.1"  title="原文: cache-config.cache-timeout-millis"><code>cache-config.cache-timeout-millis</code></span></td>
<td class=""><span class="merged" id="all.4MnCxh.1"  title="原文:: 1 hour">1 hour</span></td>
<td class=""><span class="merged" id="all.4JjnKU.1" title="原文 : Cache timeout in milliseconds">キャッシュ・タイムアウト(ミリ秒)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3BT3dQ.1"  title="原文: cache-config.cache-evict-delay-millis"><code>cache-config.cache-evict-delay-millis</code></span></td>
<td class=""><span class="merged" id="all.17E848.1"  title="原文:: 1 minute">1 minute</span></td>
<td class=""><span class="merged" id="all.3tYWPC.1" title="原文 : How long to wait before starting the first eviction process">最初の削除プロセスを開始するまでの待機時間</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.10n581.1"  title="原文: cache-config.cache-evict-period-millis"><code>cache-config.cache-evict-period-millis</code></span></td>
<td class=""><span class="merged" id="all.1ISq7M.1"  title="原文:: 5 minutes">5分</span></td>
<td class=""><span class="merged" id="all.Eml2d.1" title="原文 : Period of running the eviction process">削除プロセスの実行期間</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.xSljY.1"  title="原文: cache-config.parallelism-threshold"><code>cache-config.parallelism-threshold</code></span></td>
<td class=""><span class="merged" id="all.aJyXg.1"  title="原文: 10_000"><code>10_000</code></span></td>
<td class=""><span class="merged" id="all.4EwLsB.1" title="原文 : Threshold as used by ConcurrentHashMap.forEachKey"><code>ConcurrentHashMap.forEachKey</code>で使用されるしきい値</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3G5XKI.1"  title="原文: cache-config.evictor-class"><code>cache-config.evictor-class</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.1hQ6vS.1.spl1" title="原文 : Implementation of BiFunction that receives key and value, and returns true for records that should be removed from the cache.">キーと値を受け取り、キャッシュから削除する必要があるレコードの<code>true</code>を返す<code>BiFunction</code>の実装。</span> <span class="merged" id="all.1hQ6vS.1.spl2" title="原文 : Eviction mechanism should be fast, as it is called within methods of ConcurrentHashMap">削除メカニズムは、<code>ConcurrentHashMap</code>のメソッド内でコールされるため、高速である必要があります</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3FHJq7.1"  title="原文: subject-types"><code>subject-types</code></span></td>
<td class=""><span class="merged" id="all.26725z.8"  title="原文: USER"><code>USER</code></span></td>
<td class=""><span class="merged" id="all.4XptwT.1" title="原文 : Can use USER and/or SERVICE"><code>USER</code>または<code>SERVICE</code>、あるいはその両方を使用できます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2IXvjO.1"  title="原文: default-idcs-subject-type"><code>default-idcs-subject-type</code></span></td>
<td class=""><span class="merged" id="all.3WzDhx.1"  title="原文: user"><code>user</code></span></td>
<td class=""><span class="merged" id="all.4f7FBh.1" title="原文 : Default subject type to use when requesting roles, can be user or client">ロールのリクエスト時に使用するデフォルトのサブジェクト・タイプは、<code>user</code>または<code>client</code>です</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3iExOC.1"  title="原文: oidc-config"><code>oidc-config</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.1J7aTu.1" title="原文 : OidcConfig configuration, except validate-with-jwk is set to false, and server-type is set to idcs"><code>validate-with-jwk</code>を除く<code>OidcConfig</code>構成が<code>false</code>に設定され、<code>server-type</code>が<code>idcs</code>に設定されている</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<h4 id="_how_does_it_work_6"><span class="merged" id="all.aWBLA.14"  title="原文: How does it work?"> 動作の仕組み</span></h4>
<div class="section">
<p><span class="merged" id="all.38p0IC.1.spl1" title="原文 : The provider asks the IDCS server to provide list of roles for the currently authenticated user.">プロバイダはIDCSサーバーに、現在認証されているユーザーのロールのリストを提供するように依頼します。</span> <span class="merged" id="all.38p0IC.1.spl2" title="原文 : The result is cached for a certain period of time (see cache-config above).">結果は一定期間キャッシュされます(前述の<code>cache-config</code>を参照)。</span> </p>

</div>
</div>

<h3 id="_abac_provider"><span class="merged" id="all.1hilxP.1" title="原文 : ABAC Provider">ABACプロバイダ</span></h3>
<div class="section">
<p><span class="merged" id="all.1PMuwh.1" title="原文 : Attribute based access control authorization provider.">属性ベースのアクセス制御認可プロバイダ。</span></p>


<h4 id="_setup_7"><span class="merged" id="all.4BqnSO.15"  title="原文:: Setup">設定</span></h4>
<div class="section">
<markup
lang="xml"
title="Maven dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.security.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-security-providers-abac&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<markup
lang="text"
title="Provider class name"
>io.helidon.security.providers.abac.AbacProvider</markup>

<markup
lang="text"
title="Provider configuration key"
>abac</markup>

</div>

<h4 id="_example_code_7"><span class="merged" id="all.mu2yS.15"  title="原文:: Example code">コード例</span></h4>
<div class="section">
<p><span class="merged" id="all.4D28hJ.1" title="原文 : https://github.com/oracle/helidon/tree/master/examples/security/attribute-based-access-control"><a href="https://github.com/oracle/helidon/tree/master/examples/security/attribute-based-access-control" id="" target="_blank" >https://github.com/oracle/helidon/tree/master/examples/security/attribute-based-access-control</a></span></p>

<markup
lang="yaml"
title="Configuration example"
>security:
  providers:
    - abac:</markup>

</div>

<h4 id="_configuration_options_7"><span class="merged" id="all.3SKgM1.16"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<p><span class="merged" id="all.QSLwf.15" title="原文 : The following table shows all configuration options of the provider and their default values">次の表に、プロバイダのすべての構成オプションとそのデフォルト値を示します</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 22.222%;">
<col style="width: 22.222%;">
<col style="width: 55.556%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.19"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.G3u1e.18"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.22"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.dXhT6.1"  title="原文: fail-on-unvalidated"><code>fail-on-unvalidated</code></span></td>
<td class=""><span class="merged" id="all.xEiHU.26"  title="原文: true"><code>true</code></span></td>
<td class=""><span class="merged" id="all.PuOzo.1" title="原文 : &quot;Unvalidated&quot; means: an attribute is defined, but there is no validator available for it">「未バリデート」とは、: 属性が定義されていますが、使用可能なバリデータがありません</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.348v9l.1"  title="原文: fail-if-none-validated"><code>fail-if-none-validated</code></span></td>
<td class=""><span class="merged" id="all.xEiHU.27"  title="原文: true"><code>true</code></span></td>
<td class=""><span class="merged" id="all.2kIejh.1" title="原文 : &quot;None validated&quot; means: there was not a single attribute that was validated">「バリデートなし」は、: バリデートされた単一の属性がありませんでした</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<h4 id="_how_does_it_work_7"><span class="merged" id="all.aWBLA.15"  title="原文: How does it work?"> 動作の仕組み</span></h4>
<div class="section">
<p><span class="merged" id="all.nxxf6.1" title="原文 : ABAC uses available validators and validates them against attributes of the authenticated user.">ABACは、使用可能なバリデータを使用して、認証されたユーザーの属性に対してバリデートします。</span></p>

<p><span class="merged" id="all.2wVCt5.1" title="原文 : Combinations of fail-on-unvalidated and fail-if-none-validated:"><code>fail-on-unvalidated</code>と<code>fail-if-none-validated</code>の組合せ:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.VE4Of.1" title="原文 : true &amp; true: Will fail if any attribute is not validated and if any has failed validation"><code>true</code> &amp; <code>true</code>: バリデートされていない属性がある場合、およびバリデーションに失敗した属性がある場合は失敗</span>

</li>
<li>
<span class="merged" id="all.2UuR0f.1" title="原文 : false &amp; true: Will fail if there is one or more attributes present and NONE of them is validated or if any has failed validation, Will NOT fail if there is at least one validated attribute and any number of not validated attributes (and NONE failed)"><code>false</code> &amp; <code>true</code>: 1つ以上の属性が存在し、そのいずれかがバリデートされなかった場合、またはバリデーションに失敗した場合は失敗します。バリデートされた属性が1つ以上あり、バリデートされなかった属性の数(およびNONEが失敗した場合)は失敗しません</span>

</li>
<li>
<span class="merged" id="all.49BjyI.1" title="原文 : false &amp; false: Will fail if there is any attribute that failed validation, Will NOT fail if there are no failed validation or if there are NONE validated"><code>false</code> &amp; <code>false</code>: バリデーションに失敗した属性がある場合は失敗し、バリデートに失敗しなかった場合またはNONEがバリデートされている場合は失敗しません</span>

</li>
</ol>
<p><span class="merged" id="all.2RvWEE.1" title="原文 : Any attribute of the following objects can be used:">次のオブジェクトの任意の属性を使用できます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.uGxGY.1" title="原文 : environment (such as time of request) - e.g. env.time.year">環境(リクエストの時間など) - たとえばenv.time.year</span></p>

</li>
<li>
<p><span class="merged" id="all.IIRGe.1" title="原文 : subject (user) - e.g. subject.principal.id">サブジェクト (ユーザー) - たとえばsubject.principal.id</span></p>

</li>
<li>
<p><span class="merged" id="all.c9pH0.1" title="原文 : subject (service) - e.g. service.principal.id">サブジェクト (サービス) - たとえばservice.principal.id</span></p>

</li>
<li>
<p><span class="merged" id="all.4Zx5TX.1" title="原文 : object (must be explicitly invoked by developer in code, as object cannot be automatically added to security context) - e.g. object.owner">オブジェクト (オブジェクトはセキュリティ・コンテキストに自動的に追加できないため、コードで開発者が明示的に呼び出す必要があります) - たとえばobject.owner</span></p>

</li>
</ul>
<p><span class="merged" id="all.11tgoV.1.spl1" title="原文 : This provider checks that all defined ABAC validators are validated.">このプロバイダは、定義されているすべてのABACバリデータがバリデートされていることを確認します。</span> <span class="merged" id="all.11tgoV.1.spl2" title="原文 : If there is a definition for a validator that is not checked, the request is denied (depending on configuration as mentioned above).">チェックされていないバリデータの定義がある場合、(前述の構成に応じて)リクエストは拒否されます。</span> </p>

<p><span class="merged" id="all.t7VTR.1.spl1" title="原文 : ABAC provider also allows an object to be used in authorization process, such as when evaluating if an object&rsquo;s owner is the current user.">ABACプロバイダを使用すると、オブジェクトの所有者が現在のユーザーかどうかを評価する場合など、認可プロセスでオブジェクトを使用することもできます。</span> <span class="merged" id="all.t7VTR.1.spl2" title="原文 : The following example uses the Expression language validator to demonstrate the point in a JAX-RS resource:">次の例では、式言語バリデータを使用してJAX-RSリソースのポイントを示します:</span> </p>

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
                  .entity(atzResponse.getDescription().orElse("Access not granted"))
                  .build();
      }
  }
}</markup>

<p><span class="merged" id="all.3JVvgQ.1" title="原文 : The following validators are implemented:"><strong>次のバリデータが実装されています:</strong></span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4di8OF.1" title="原文 : Roles"><router-link @click.native="this.scrollFix('#_role_validator')" to="#_role_validator">Roles</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1Vn5S.1" title="原文 : Scopes"><router-link @click.native="this.scrollFix('#_scope_validator')" to="#_scope_validator">スコープ</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2Rke7i.1" title="原文 : EL Policy"><router-link @click.native="this.scrollFix('#_expression_language_policy_validator')" to="#_expression_language_policy_validator">ELポリシー</router-link></span></p>

</li>
</ul>
</div>

<h4 id="_role_validator"><span class="merged" id="all.4AJMJ0.1" title="原文 : Role Validator">ロール検証プログラム</span></h4>
<div class="section">
<p><span class="merged" id="all.4VscT8.1" title="原文 : Checks whether user/service is in either of the required role(s).">ユーザー/サービスが必要なロールのいずれかであるかどうかを確認します。</span></p>

<p><span class="merged" id="all.2PDbIZ.1" title="原文 : Configuration Key: role-validator">構成キー: <code>role-validator</code></span></p>

<p><span class="merged" id="all.1XmBMN.1" title="原文 : Annotations: @RolesAllowed, @RoleValidator.Roles">注釈: <code>@RolesAllowed</code>, <code>@RoleValidator.Roles</code></span></p>

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


<h5 id="_interaction_with_jax_rs_sub_resource_locators"><span class="merged" id="all.131Q2q.1" title="原文 : Interaction with JAX-RS sub-resource locators">JAX-RSサブリソース・ロケータとの相互作用</span></h5>
<div class="section">
<p><span class="merged" id="all.3kSRU9.1" title="原文 : When using sub-resource locators in JAX-RS, the roles allowed are collected from each &quot;level&quot; of execution: - Application class annotations - Resource class annotations + resource method annotations - Sub-resource class annotations + sub-resource method annotations - Sub-resource class annotations + sub-resource method annotations (for every sub-resource on the path)">JAX-RSでサブリソース・ロケータを使用する場合、許可されるロールは実行の各レベルから収集されます: - アプリケーション・クラスの注釈 - リソース・クラス注釈+リソース・メソッド注釈 - サブリソース・クラスの注釈+サブリソース・メソッドの注釈 - サブリソース・クラス注釈+サブリソース・メソッド注釈(パス上のすべてのサブリソース)</span></p>

<p><span class="merged" id="all.3Tx25s.1" title="原文 : The RolesAllowed or Roles annotation to be used is the last one in the path as defined above.">使用する<code>RolesAllowed</code>または<code>Roles</code>注釈は、前述のようにパスの最後の注釈です。</span></p>

<p><span class="merged" id="all.3cN7I7.1.spl1" title="原文 : Example 1: There is a RolesAllowed(&quot;admin&quot;) defined on a sub-resource locator resource class."><em>例1:</em> サブリソース・ロケータ・リソース・クラスに<code>RolesAllowed("admin")</code>が定義されています。</span> <span class="merged" id="all.3cN7I7.1.spl2" title="原文 : In this case the required role is admin.">この場合、必要なロールは<code>admin</code>です。</span> </p>

<p><span class="merged" id="all.1Ayd2p.1.spl1" title="原文 : Example 2: There is a RolesAllowed(&quot;admin&quot;) defined on a sub-resource locator resource class and a RolesAllowed(&quot;user&quot;) defined on the method of the sub-resource that provides the response."><em>例2:</em> サブリソース・ロケータ・リソース・クラスで定義された<code>RolesAllowed("admin")</code>と、レスポンスを提供するサブリソースのメソッドで定義された<code>RolesAllowed("user")</code>があります。</span> <span class="merged" id="all.1Ayd2p.1.spl2" title="原文 : In this case the required role is user.">この場合、必要なロールは<code>user</code>です。</span> </p>

</div>
</div>

<h4 id="_scope_validator"><span class="merged" id="all.1HDtcM.1" title="原文 : Scope Validator">Scope Validator</span></h4>
<div class="section">
<p><span class="merged" id="all.42tE1G.1" title="原文 : Checks whether user has all the required scopes.">ユーザーが必要なスコープをすべて持っているかどうかを確認します。</span></p>

<p><span class="merged" id="all.247XRq.1" title="原文 : Configuration Key: scope-validator">構成キー: <code>scope-validator</code></span></p>

<p><span class="merged" id="all.1korAz.1" title="原文 : Annotations: @Scope">注釈: <code>@Scope</code></span></p>

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

<h4 id="_expression_language_policy_validator"><span class="merged" id="all.136O34.1" title="原文 : Expression Language Policy Validator">式言語ポリシー・バリデータ</span></h4>
<div class="section">
<p><span class="merged" id="all.a6Ni6.1" title="原文 : Policy executor using Java EE policy expression language (EL)">Java EE Policy Expression Language (EL)を使用するポリシー・エグゼキュータ</span></p>

<p><span class="merged" id="all.3MQfyr.1" title="原文 : Configuration Key: policy-javax-el">構成キー: <code>policy-javax-el</code></span></p>

<p><span class="merged" id="all.3ispWp.1" title="原文 : Annotations: @PolicyStatement">注釈: <code>@PolicyStatement</code></span></p>

<p><span class="merged" id="all.IlSpT.1" title="原文 : Example of a policy statement: ${env.time.year &gt;= 2017}">ポリシー・ステートメントの例: <code>${env.time.year >= 2017}</code></span></p>

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

<h3 id="_google_login_provider"><span class="merged" id="all.4aXokY.1" title="原文 : Google Login Provider">Googleログイン・プロバイダ</span></h3>
<div class="section">
<p><span class="merged" id="all.2yrmuj.1" title="原文 : Authenticates a token from request against Google identity provider">Googleアイデンティティ・プロバイダに対するリクエストからのトークンを認証</span></p>


<h4 id="_setup_8"><span class="merged" id="all.4BqnSO.16"  title="原文:: Setup">設定</span></h4>
<div class="section">
<markup
lang="xml"
title="Maven dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.security.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-security-providers-google-login&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<markup
lang="text"
title="Provider class name"
>io.helidon.security.providers.google.login.GoogleTokenProvider</markup>

<markup
lang="text"
title="Provider configuration key"
>google-login</markup>

</div>

<h4 id="_example_code_8"><span class="merged" id="all.mu2yS.16"  title="原文:: Example code">コード例</span></h4>
<div class="section">
<p><span class="merged" id="all.25Gkhy.1" title="原文 : https://github.com/oracle/helidon/tree/master/examples/security/google-login"><a href="https://github.com/oracle/helidon/tree/master/examples/security/google-login" id="" target="_blank" >https://github.com/oracle/helidon/tree/master/examples/security/google-login</a></span></p>

<markup
lang="yaml"
title="Configuration example"
>security:
  providers:
    - provider:
        client-id: "Google client id"</markup>

</div>

<h4 id="_configuration_options_8"><span class="merged" id="all.3SKgM1.17"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<p><span class="merged" id="all.QSLwf.16" title="原文 : The following table shows all configuration options of the provider and their default values">次の表に、プロバイダのすべての構成オプションとそのデフォルト値を示します</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 22.222%;">
<col style="width: 22.222%;">
<col style="width: 55.556%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.20"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.G3u1e.19"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.23"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.41Kf4l.5"  title="原文: client-id"><code>client-id</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.12Mych.1.spl1" title="原文 : Client id of an application.">アプリケーションのクライアントID。</span> <span class="merged" id="all.12Mych.1.spl2" title="原文 : To create an application, use the Google developer console (https://developers.google.com/identity/sign-in/web/sign-in)">アプリケーションを作成するには、Google開発者コンソール(<a href="https://developers.google.com/identity/sign-in/web/sign-in" id="" target="_blank" >https://developers.google.com/identity/sign-in/web/sign-in</a>)を使用</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Zagyj.12"  title="原文: optional"><code>optional</code></span></td>
<td class=""><span class="merged" id="all.42DdBS.25"  title="原文: false"><code>false</code></span></td>
<td class=""><span class="merged" id="all.4KM3rs.12.spl1" title="原文 : If set to true, failure to authenticate will return ABSTAIN result instead of FAILURE."><code>true</code>に設定した場合、認証に失敗すると、<code>FAILURE</code>ではなく<code>ABSTAIN</code>の結果が返されます。</span> <span class="merged" id="all.4KM3rs.12.spl2" title="原文 : This is an important distinction when more than one provider is used">これは、複数のプロバイダを使用する場合の重要な違いです</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.10Bdny.9"  title="原文: realm"><code>realm</code></span></td>
<td class=""><span class="merged" id="all.V69kn.9"  title="原文: helidon"><code>helidon</code></span></td>
<td class=""><span class="merged" id="all.36MdfH.1" title="原文 : Realm used in the challenge when authentication is not provided and it is required">認証が指定されておらず、必要な場合にチャレンジで使用されるレルム</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.37YgdV.3"  title="原文: proxy-host"><code>proxy-host</code></span></td>
<td class=""><span class="merged" id="all.2KppAl.1"  title="原文:: none">なし</span></td>
<td class=""><span class="merged" id="all.4DIwmt.1" title="原文 : Configuration of a proxy host to use when authenticating the user">ユーザーの認証時に使用するプロキシ・ホストの構成</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3687nw.3"  title="原文: proxy-port"><code>proxy-port</code></span></td>
<td class=""><span class="merged" id="all.1doYAE.3"  title="原文: 80"><code>80</code></span></td>
<td class=""><span class="merged" id="all.43lsip.1"  title="原文:: Proxy port">プロキシ・ポート</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.GIClf.1"  title="原文: token"><code>token</code></span></td>
<td class=""><span class="merged" id="all.4RlVWH.3" title="原文 : Authorization header with bearer prefix"><code>bearer</code>プレフィクス付きの<code>Authorization</code>ヘッダー</span></td>
<td class=""><span class="merged" id="all.3NDX2C.1" title="原文 : Configuration of the location of the token (see TokenHandler)">トークンのロケーションの構成(<code>TokenHandler</code>を参照)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.46DWSr.9"  title="原文: outbound"><code>outbound</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3FFH7Q.9" title="原文 : A list of outbound configurations">アウトバウンド構成のリスト</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3sFPpq.9"  title="原文: outbound.*.name"><code>outbound.*.name</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3yQQtP.9" title="原文 : Required name of outbound configuration">アウトバウンド構成の必須名</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.12LPbb.7"  title="原文: outbound.*.username"><code>outbound.*.username</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.4VTwdo.7" title="原文 : Optional username used for outbound security; if not provided, current identity is propagated">アウトバウンド・セキュリティに使用されるオプションのユーザー名。指定しない場合、現在のアイデンティティが伝播されます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2BDLFu.5"  title="原文: outbound.*.password"><code>outbound.*.password</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.1yq1kI.5" title="原文 : Optional password used for outbound security">アウトバウンド・セキュリティに使用されるオプションのパスワード</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.HbvzU.9"  title="原文: outbound.*.transports"><code>outbound.*.transports</code></span></td>
<td class=""><span class="merged" id="all.1bmj05.9" title="原文 : any transport">任意のトランスポート</span></td>
<td class=""><span class="merged" id="all.1qX6pc.9" title="原文 : An array of transports this outbound configuration should be used for">このアウトバウンド構成を使用するトランスポートの配列</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.9leSv.9"  title="原文: outbound.*.hosts"><code>outbound.*.hosts</code></span></td>
<td class=""><span class="merged" id="all.2xFiA4.9" title="原文 : any host">任意のホスト</span></td>
<td class=""><span class="merged" id="all.HYSTm.9" title="原文 : An array of hosts this outbound configuration should be used for, can be a regular expression">このアウトバウンド構成を使用するホストの配列で、正規表現を使用できます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4YVRR3.9"  title="原文: outbound.*.paths"><code>outbound.*.paths</code></span></td>
<td class=""><span class="merged" id="all.1qm74s.9" title="原文 : any path">任意のパス</span></td>
<td class=""><span class="merged" id="all.akEQf.9" title="原文 : An array of paths this outbound configuration should be used for (such as /greet), can be a regular expression">このアウトバウンド構成を使用するパスの配列(<code>/greet</code>など)。正規表現を使用できます</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.jL102.9"  title="原文: outbound.*.methods"><code>outbound.*.methods</code></span></td>
<td class=""><span class="merged" id="all.3zlSxu.9" title="原文 : any method">任意のメソッド</span></td>
<td class=""><span class="merged" id="all.4dCFqc.9" title="原文 : An array of HTTP methods this outbound configuration should be used for">このアウトバウンド構成を使用するHTTPメソッドの配列</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<h4 id="_how_does_it_work_8"><span class="merged" id="all.aWBLA.16"  title="原文: How does it work?"> 動作の仕組み</span></h4>
<div class="section">
<p><span class="merged" id="all.2tDQSL.1.spl1" title="原文 : We expect to receive a token (with sufficient scopes) from the inbound request, such as when using the Google login button on a page.">ページのGoogleログイン・ボタンを使用する場合など、インバウンド・リクエストから(十分なスコープの)トークンを受信する必要があります。</span> <span class="merged" id="all.2tDQSL.1.spl2" title="原文 : The page has access to the token in javascript and can send it to backend with every request in a header field (Authorization with `bearer ` prefix is assumed by default).">ページにはjavascriptのトークンへのアクセス権があり、ヘッダー・フィールドのすべてのリクエストとともにバックエンドに送信できます(デフォルトでは`bearer`プレフィクスの付いた<code>Authorization</code>)。</span> </p>

<p><span class="merged" id="all.1KvOUO.1" title="原文 : Once we receive the token in Helidon, we parse it and:">Helidonでトークンを受信したら、それを解析して次のことを行います:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1XFk0r.1" title="原文 : Validate if it timed out locally">ローカルでタイムアウトしたかどうかをバリデート</span>

</li>
<li>
<span class="merged" id="all.3qxYb4.1" title="原文 : Return a cached response (see EvictableCache with default values)">キャッシュされたレスポンスを返します(デフォルト値は<code>EvictableCache</code>を参照)</span>

</li>
<li>
<span class="merged" id="all.1GLxTO.1" title="原文 : Otherwise verify using Google API - GoogleIdTokenVerifier">それ以外の場合は、Google APIを使用して検証してください - <code>GoogleIdTokenVerifier</code></span>

</li>
</ol>
<p><span class="merged" id="all.xZFpD.1" title="原文 : We build a subject from the Google token with the following attributes filled (if in token):">次の属性が入力されたGoogleトークン(トークン内にある場合)からサブジェクトをビルドします:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1qLg6u.1"  title="原文: userId">userId</span></p>

</li>
<li>
<p><span class="merged" id="all.4EvdcC.1"  title="原文:: email">email</span></p>

</li>
<li>
<p><span class="merged" id="all.1isw0k.1"  title="原文:: name">name</span></p>

</li>
<li>
<p><span class="merged" id="all.1AMMJx.1"  title="原文: emailVerified">emailVerified</span></p>

</li>
<li>
<p><span class="merged" id="all.1CN7Iu.1"  title="原文:: locale">locale</span></p>

</li>
<li>
<p><span class="merged" id="all.m3wcU.1"  title="原文:: family_name">family_name</span></p>

</li>
<li>
<p><span class="merged" id="all.1pekIR.1"  title="原文:: given_name">given_name</span></p>

</li>
<li>
<p><span class="merged" id="all.3WkBkf.1" title="原文 : picture (URL)">picture (URL)</span></p>

</li>
</ul>
<p><span class="merged" id="all.4BC9qZ.1" title="原文 : Outbound security The token will be propagated to outbound calls if an outbound target exists that matches the invoked endpoint (see outbound configuration above)."><strong>「アウトバウンド・セキュリティ」</strong>呼出したエンドポイントに一致するアウトバウンド・ターゲットが存在する場合、トークンはアウトバウンド呼出しに伝播されます(前述の<code>outbound</code>の構成を参照)。</span></p>

</div>
</div>

<h3 id="_jwt_provider"><span class="merged" id="all.3kJ5cx.1" title="原文 : JWT Provider">JWTプロバイダ</span></h3>
<div class="section">
<p><span class="merged" id="all.JzQLt.1" title="原文 : JWT token authentication and outbound security provider.">JWTトークン認証およびアウトバウンド・セキュリティ・プロバイダ。</span></p>


<h4 id="_setup_9"><span class="merged" id="all.4BqnSO.17"  title="原文:: Setup">設定</span></h4>
<div class="section">
<markup
lang="xml"
title="Maven dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.security.providers&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-security-providers-jwt&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<markup
lang="text"
title="Provider class name"
>io.helidon.security.providers.jwt.JwtProvider</markup>

<markup
lang="text"
title="Provider configuration key"
>jwt</markup>

</div>

<h4 id="_example_code_9"><span class="merged" id="all.mu2yS.17"  title="原文:: Example code">コード例</span></h4>
<div class="section">
<p><span class="merged" id="all.jO3hz.3" title="原文 : https://github.com/oracle/helidon/tree/master/examples/security/outbound-override"><a href="https://github.com/oracle/helidon/tree/master/examples/security/outbound-override" id="" target="_blank" >https://github.com/oracle/helidon/tree/master/examples/security/outbound-override</a></span></p>

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

<h4 id="_configuration_options_9"><span class="merged" id="all.3SKgM1.18"  title="原文:: Configuration options">構成オプション</span></h4>
<div class="section">
<p><span class="merged" id="all.QSLwf.17" title="原文 : The following table shows all configuration options of the provider and their default values">次の表に、プロバイダのすべての構成オプションとそのデフォルト値を示します</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 22.222%;">
<col style="width: 22.222%;">
<col style="width: 55.556%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.21"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.G3u1e.20"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.24"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4Zagyj.13"  title="原文: optional"><code>optional</code></span></td>
<td class=""><span class="merged" id="all.42DdBS.26"  title="原文: false"><code>false</code></span></td>
<td class=""><span class="merged" id="all.4KM3rs.13.spl1" title="原文 : If set to true, failure to authenticate will return ABSTAIN result instead of FAILURE."><code>true</code>に設定した場合、認証に失敗すると、<code>FAILURE</code>ではなく<code>ABSTAIN</code>の結果が返されます。</span> <span class="merged" id="all.4KM3rs.13.spl2" title="原文 : This is an important distinction when more than one provider is used">これは、複数のプロバイダを使用する場合の重要な違いです</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.24OC9j.3"  title="原文: authenticate"><code>authenticate</code></span></td>
<td class=""><span class="merged" id="all.xEiHU.28"  title="原文: true"><code>true</code></span></td>
<td class=""><span class="merged" id="all.3BPlzk.1" title="原文 : Whether to attempt authentication">認証を試行するかどうか</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3SEgfv.5"  title="原文: propagate"><code>propagate</code></span></td>
<td class=""><span class="merged" id="all.xEiHU.29"  title="原文: true"><code>true</code></span></td>
<td class=""><span class="merged" id="all.4G3ZuY.1" title="原文 : Whether to attempt identity propagation/JWT creation">アイデンティティ伝播/JWT作成を試行するかどうか</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4V6kvV.7"  title="原文: principal-type"><code>principal-type</code></span></td>
<td class=""><span class="merged" id="all.26725z.9"  title="原文: USER"><code>USER</code></span></td>
<td class=""><span class="merged" id="all.2E1iLT.1" title="原文 : Whether we authenticate a user or a service (other option is SERVICE)">ユーザーとサービスのどちらを認証するか(その他のオプションはSERVICE)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3zlnZ9.3"  title="原文: atn-token"><code>atn-token</code></span></td>

<td class=""><span class="merged" id="all.2EkZiB.1" title="原文 : A group for configuring authentication of the request">リクエストの認証を構成するためのグループ</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1RN5FE.1"  title="原文: atn-token.verify-signature"><code>atn-token.verify-signature</code></span></td>
<td class=""><span class="merged" id="all.xEiHU.30"  title="原文: true"><code>true</code></span></td>
<td class=""><span class="merged" id="all.3ocDX2.1.spl1" title="原文 : Whether to verify signature in incoming JWT.">受信JWTのシグネチャを検証するかどうか。</span> <span class="merged" id="all.3ocDX2.1.spl2" title="原文 : If disabled, ANY JWT will be accepted">無効にすると、<em>どの</em>JWTも受け入れられます</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2cNZqK.1"  title="原文: atn-token.jwt-audience"><code>atn-token.jwt-audience</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.4IVsQ5.1.spl1" title="原文 : Expected audience of the JWT.">JWTの対象読者が必要です。</span> <span class="merged" id="all.4IVsQ5.1.spl2" title="原文 : If not defined, any audience is accepted (and we may accept JWT not inteded for us)">定義されていない場合、オーディエンスは受け入れられます(JWTは受け入れられません)</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.436rIa.1"  title="原文: atn-token.jwk.resource.*"><code>atn-token.jwk.resource.*</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.2IbXDf.1.spl1" title="原文 : Configuration of the JWK to obtain key(s) to validate signatures of inbound token.">インバウンド・トークンのシグネチャをバリデートするキーを取得するためのJWKの構成。</span> <span class="merged" id="all.2IbXDf.1.spl2" title="原文 : The JWK should contain public keys.">JWKには公開キーを含める必要があります。</span> <span class="merged" id="all.2IbXDf.1.spl3" title="原文 : This may be: jwk.resource.path, jwk.resource.resource-path, jwk.resource.url, jwk.resource.content-plain (actual JSON string), jwk.resource.content (base64)">次のようになります: jwk.resource.path、jwk.resource.resource-path、jwk.resource.url、jwk.resource.content-plan (実際のJSON文字列)、jwk.resource.content (base64)</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.y0cAd.1"  title="原文: atn-token.handler"><code>atn-token.handler</code></span></td>
<td class=""><span class="merged" id="all.44Sjoc.2" title="原文 : Authorization header with `bearer ` prefix">プレフィクスが`bearer`の<code>Authorization</code>ヘッダー</span></td>
<td class=""><span class="merged" id="all.3rn7VN.1" title="原文 : A handler configuration for inbound token - e.g. how to extract it">インバウンド・トークンのハンドラ構成 - 例:抽出方法</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.YrCkz.1"  title="原文: atn-token.handler.header"><code>atn-token.handler.header</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.1ZIPQ0.1" title="原文 : Name of a header the token is expected in">トークンが必要なヘッダーの名前</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1ODTDS.1"  title="原文: atn-token.handler.prefix"><code>atn-token.handler.prefix</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.1oAqAQ.1" title="原文 : Prefix before the token value (optional)">トークン値の前のプレフィクス(オプション)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2UeouR.1"  title="原文: atn-token.handler.regexp"><code>atn-token.handler.regexp</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.YBnak.1" title="原文 : Regular expression to obtain the token, first matching group is used (optional)">トークンを取得する正規表現。最初に一致したグループが使用されます(オプション)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.21Q9we.1"  title="原文: sign-token"><code>sign-token</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.4ZPrAG.1" title="原文 : A group for configuring outbound security">アウトバウンド・セキュリティを構成するためのグループ</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.P749k.1"  title="原文: sign-token.jwk.resource.*"><code>sign-token.jwk.resource.*</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3fJnl5.1" title="原文 : Configuration of the JWK to use when generating tokens (follows same rules as atn-token.jwk above), this JWK must contain private keys when using asymmetric ciphers">トークンの生成時に使用するJWKの構成(前述のatn-token.jwkと同じルールに従う)。非対称暗号を使用する場合、このJWKには秘密キーを含める必要があります</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1jxKXY.1"  title="原文: sign-token.jwt-issuer"><code>sign-token.jwt-issuer</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.212d4a.1" title="原文 : When we issue a new token, this is the issuer to be placed into it (validated by target service)">新しいトークンを発行すると、これがそこに配置される発行者になります(ターゲット・サービスによってバリデートされます)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3uVxDq.1"  title="原文: sign-token.outbound"><code>sign-token.outbound</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.sEyEG.1" title="原文 : A group for configuring outbound rules (based on transport, host and.or path)">アウトバウンド・ルールを構成するためのグループ(トランスポート、ホストand.orパスに基づく)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.34USCk.1"  title="原文: sign-token.outbound.*.name"><code>sign-token.outbound.*.name</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3jJ4Ga.1" title="原文 : A short descriptive name for configured target service(s)">構成されたターゲット・サービスの短い説明的な名前</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.FNfFZ.1"  title="原文: sign-token.outbound.*.transports"><code>sign-token.outbound.*.transports</code></span></td>
<td class=""><span class="merged" id="all.1qcdPQ.3"  title="原文:: any">any</span></td>
<td class=""><span class="merged" id="all.3Um51M.1" title="原文 : An array of transports this outbound matches (e.g. https)">このアウトバウンドが一致するトランスポートの配列(httpsなど)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1WkbJ.1"  title="原文: sign-token.outbound.*.hosts"><code>sign-token.outbound.*.hosts</code></span></td>
<td class=""><span class="merged" id="all.1qcdPQ.4"  title="原文:: any">any</span></td>
<td class=""><span class="merged" id="all.3kTSgs.1" title="原文 : An array of hosts this outbound matches, may use * as a wild-card (e.g. *.oracle.com)">このアウトバウンド一致するホストの配列。ワイルドカードとして*を使用できます(*.oracle.comなど)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4PiPNZ.1"  title="原文: sign-token.outbound.*.paths"><code>sign-token.outbound.*.paths</code></span></td>
<td class=""><span class="merged" id="all.1qcdPQ.5"  title="原文:: any">any</span></td>
<td class=""><span class="merged" id="all.VgyuB.1" title="原文 : An array of paths on the host this outbound matches, may use * as a wild-card (e.g. /some/path/*)">このアウトバウンドが一致するホスト上のパスの配列。ワイルドカードとして*を使用できます(例: /some/path/*))</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2bBss7.1"  title="原文: sign-token.outbound.*.outbound-token"><code>sign-token.outbound.*.outbound-token</code></span></td>
<td class=""><span class="merged" id="all.44Sjoc.3" title="原文 : Authorization header with `bearer ` prefix">プレフィクスが`bearer`の<code>Authorization</code>ヘッダー</span></td>
<td class=""><span class="merged" id="all.3ypsU4.1" title="原文 : Configuration of outbound token handler (same as atn-token.handler)">アウトバウンド・トークン・ハンドラの構成(atn-token.handlerと同じ)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4OwxVe.1"  title="原文: sign-token.outbound.*.outbound-token.format"><code>sign-token.outbound.*.outbound-token.format</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.1Rp6yY.1" title="原文 : Java text format for generating the value of outbound token header (e.g. &quot;bearer %1$s&quot;)">アウトバウンド・トークン・ヘッダーの値を生成するためのJavaテキスト形式(例: "bearer %1$s ")</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.7XoZr.1"  title="原文: sign-token.outbound.*.jwk-kid"><code>sign-token.outbound.*.jwk-kid</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.1uzqQ0.1.spl1" title="原文 : If this key is defined, we are generating a new token, otherwise we propagate existing.">このキーが定義されている場合は新しいトークンを生成し、定義されていない場合は既存のトークンを伝播します。</span> <span class="merged" id="all.1uzqQ0.1.spl2" title="原文 : Defines the key id of a key definition in the JWK file to use for signing the outbound token">アウトバウンド・トークンの署名に使用するJWKファイルのキー定義のキーIDを定義</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2CQmrC.1"  title="原文: sign-token.outbound.*.jwt-kid"><code>sign-token.outbound.*.jwt-kid</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.2nxcps.1" title="原文 : A key to use in the generated JWT - this is for the other service to locate the verification key in their JWK">生成されたJWTで使用するキー - これは、他のサービスがJWKで検証キーを検索するためのものです</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2TS7AT.1"  title="原文: sign-token.outbound.*.jwt-audience"><code>sign-token.outbound.*.jwt-audience</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.2X9JJW.1" title="原文 : Audience this key is generated for (e.g. http://www.example.org/api/myService) - validated by the other service">このキーが生成されるオーディエンス(<a href="http://www.example.org/api/myService" id="" target="_blank" >http://www.example.org/api/myService</a>など) - 他のサービスによってバリデートされました</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.EfDmi.1"  title="原文: sign-token.outbound.*.jwt-not-before-seconds"><code>sign-token.outbound.*.jwt-not-before-seconds</code></span></td>
<td class=""><span class="merged" id="all.4XADpA.3"  title="原文: 5"><code>5</code></span></td>
<td class=""><span class="merged" id="all.25NfJc.1.spl1" title="原文 : Makes this key valid this amount of seconds into the past.">このキーを過去のこの秒数だけ有効にします。</span> <span class="merged" id="all.25NfJc.1.spl2" title="原文 : Allows a certain time-skew for the generated token to be valid before current time (e.g. when we expect a certain misalignment of clocks)">生成されたトークンが現在の時間より前に有効になるように特定の時間誤差を許可します(たとえば、クロックの特定の境界整列が誤っていると予想される場合)</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2LBnXR.1"  title="原文: sign-token.outbound.*.jwt-validity-seconds"><code>sign-token.outbound.*.jwt-validity-seconds</code></span></td>
<td class=""><span class="merged" id="all.4772zH.3"  title="原文:: 1 day">1日</span></td>
<td class=""><span class="merged" id="all.37MjZB.1" title="原文 : Token validity in seconds">トークンの有効期間(秒)</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<h4 id="_how_does_it_work_9"><span class="merged" id="all.aWBLA.17"  title="原文: How does it work?"> 動作の仕組み</span></h4>
<div class="section">
<p><span class="merged" id="all.2DqKzG.1" title="原文 : JSON Web Token (JWT) provider has support for authentication and outbound security.">JSON Web Token (JWT)プロバイダは、認証およびアウトバウンド・セキュリティをサポートしています。</span></p>

<p><span class="merged" id="all.29dA20.1" title="原文 : Authentication is based on validating the token (signature, valid before etc.) and on asserting the subject of the JWT subject claim.">認証は、トークン(シグネチャ、前に有効など)の検証およびJWTサブジェクト要求のサブジェクトのアサートに基づきます。</span></p>

<p><span class="merged" id="all.2ZHPKp.1" title="原文 : For outbound, we support either token propagation (e.g. the token from request is propagated further) or support for generating a brand new token based on configuration of this provider.">アウトバウンドの場合、トークンの伝播(リクエストからのトークンがさらに伝播されるなど)またはこのプロバイダの構成に基づいた新しいトークンの生成のサポートがサポートされます。</span></p>

</div>
</div>
</div>
</doc-view>
