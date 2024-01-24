<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.4Zt9J4" title="原文 : TenantConfig (security.providers.oidc.common) Configuration">TenantConfig (security.providers.oidc.common)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2GDHLi" title="原文 : Open ID Connect tenant configuration">オープンID接続テナント構成</span></p>

<p><span class="merged" id="all.3ng0y6" title="原文 : Type: io.helidon.security.providers.oidc.common.TenantConfig">タイプ: <a href="/apidocs/io.helidon.security.providers.oidc.common/io/helidon/security/providers/oidc/common/TenantConfig.html" target="_blank">io.helidon.security.providers.oidc.common.TenantConfig</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.62"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.1fCXjI.5" title="原文 : Required configuration options"><span>必要な構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.66"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.66"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.66"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.66"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.309fiz.4"  title="原文: name"><code>name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.153"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2tSlrn" title="原文 : Name of the tenant.">テナントの名前。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<div class="block-title"><span class="merged" id="all.271SGn.60" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.67"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.67"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.67"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.67"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4WSwQo.3"  title="原文: audience"><code>audience</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.154"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1rk5GA.3" title="原文 : Audience of issued tokens.">発行されたトークンのオーディエンス。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2dGFWv.3"  title="原文: authorization-endpoint-uri"><code>authorization-endpoint-uri</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.LGnjn.13"  title="原文:: URI">URI</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4f8bIn.3" title="原文 : URI of an authorization endpoint used to redirect users to for logging-in.">ログイン用にユーザーをリダイレクトするために使用される認可エンドポイントのURI。</span></p>

<markup>If not defined, it is obtained from #oidcMetadata(Resource), if that is not defined
an attempt is made to use #identityUri(URI)/oauth2/v1/authorize.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2yeZYT.3"  title="原文: base-scopes"><code>base-scopes</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.155"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3UG2d9.3"  title="原文: openid"><code>openid</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.491Ej4.3.spl1" title="原文 : Configure base scopes.">ベース・スコープを構成します。</span> <span class="merged" id="all.491Ej4.3.spl2" title="原文 : By default, this is DEFAULT_BASE_SCOPES.">デフォルトでは、これは<code>DEFAULT_BASE_SCOPES</code>です。</span> <span class="merged" id="all.491Ej4.3.spl3" title="原文 : If scope has a qualifier, it must be used here.">スコープに修飾子がある場合は、ここで使用する必要があります。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.36JO30.3"  title="原文: check-audience"><code>check-audience</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.104"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.38"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2EK1u.3" title="原文 : Configure audience claim check.">オーディエンス要求チェックを構成します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.41Kf4l.4"  title="原文: client-id"><code>client-id</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.156"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.7UCCr.3" title="原文 : Client ID as generated by OIDC server.">OIDCサーバーによって生成されたクライアントID。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2ahXIk.3"  title="原文: client-secret"><code>client-secret</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.157"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4JaO38.3.spl1" title="原文 : Client secret as generated by OIDC server.">OIDCサーバーによって生成されたクライアント・シークレット。</span> <span class="merged" id="all.4JaO38.3.spl2" title="原文 : Used to authenticate this application with the server when requesting JWT based on a code.">コードに基づいてJWTをリクエストするときにサーバーでこのアプリケーションを認証するために使用されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.CibQW.3"  title="原文: client-timeout-millis"><code>client-timeout-millis</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.18"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2n7Tym.3"  title="原文: 30000"><code>30000</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3XFAWx.3" title="原文 : Timeout of calls using web client.">webクライアントを使用したコールのタイムアウト。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1li9qS.3"  title="原文: identity-uri"><code>identity-uri</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.LGnjn.14"  title="原文:: URI">URI</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.fvU3g.3" title="原文 : URI of the identity server, base used to retrieve OIDC metadata.">アイデンティティ・サーバーのURIで、OIDCメタデータの取得に使用されるベースです。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1B7o3g.3"  title="原文: introspect-endpoint-uri"><code>introspect-endpoint-uri</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.LGnjn.15"  title="原文:: URI">URI</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3QwAQI.3.spl1" title="原文 : Endpoint to use to validate JWT.">JWTのバリデートに使用するエンドポイント。</span> <span class="merged" id="all.3QwAQI.3.spl2" title="原文 : Either use this or set #signJwk(JwkKeys) or #signJwk(Resource).">これを使用するか、#signJwk(JwkKeys)または#signJwk(Resource)を設定します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3AHuzZ.3"  title="原文: issuer"><code>issuer</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.158"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2HhI85.3" title="原文 : Issuer of issued tokens.">発行されたトークンの発行者。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1BHaUO.3"  title="原文: oidc-metadata-well-known"><code>oidc-metadata-well-known</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.105"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.51"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1jU9hU.3.spl1" title="原文 : If set to true, metadata will be loaded from default (well known) location, unless it is explicitly defined using oidc-metadata-resource.">trueに設定すると、oidc-metadata-resourceを使用して明示的に定義されていないかぎり、メタデータはデフォルトの(既知の)ロケーションからロードされます。</span> <span class="merged" id="all.1jU9hU.3.spl2" title="原文 : If set to false, it would not be loaded even if oidc-metadata-resource is not defined.">falseに設定すると、oidc-metadata-resourceが定義されていない場合でもロードされません。</span> <span class="merged" id="all.1jU9hU.3.spl3" title="原文 : In such a case all URIs must be explicitly defined (e.g. token-endpoint-uri).">このような場合、すべてのURIを明示的に定義する必要があります(例: token-endpoint-uri)。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3r2hLi.3"  title="原文: oidc-metadata.resource"><code>oidc-metadata.resource</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.15" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2r4soJ.3" title="原文 : Resource configuration for OIDC Metadata containing endpoints to various identity services, as well as information about the identity server.">様々なアイデンティティ・サービスへのエンドポイントおよびアイデンティティ・サーバーに関する情報を含むOIDCメタデータのリソース構成。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.SQea4.3"  title="原文: optional-audience"><code>optional-audience</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.106"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.39"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1nCC5o.3" title="原文 : Allow audience claim to be optional.">オーディエンス要求をオプションとして許可します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.kQ4h4.3"  title="原文: scope-audience"><code>scope-audience</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.159"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2wMEC4.3.spl1" title="原文 : Audience of the scope required by this application.">このアプリケーションで必要なスコープの対象読者。</span> <span class="merged" id="all.2wMEC4.3.spl2" title="原文 : This is prefixed to the scope name when requesting scopes from the identity server.">これは、アイデンティティ・サーバーからスコープをリクエストするときにスコープ名のプレフィクスとして付加されます。</span> <span class="merged" id="all.2wMEC4.3.spl3"  title="原文: Defaults to empty string.">デフォルトは空の文字列です。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3EA4pr.3"  title="原文: server-type"><code>server-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.160"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2gausp.3"  title="原文: @default"><code>@default</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2AuabR.3" title="原文 : Configure one of the supported types of identity servers.">サポートされているタイプのアイデンティティ・サーバーの1つを構成します。</span></p>

<markup>If the type does not have an explicit mapping, a warning is logged and the default implementation is used.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.8wfMM.3"  title="原文: sign-jwk.resource"><code>sign-jwk.resource</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.21ZylF.16" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3GQxZq.3" title="原文 : A resource pointing to JWK with public keys of signing certificates used to validate JWT.">JWTのバリデートに使用される署名証明書の公開キーを持つJWKを指すリソース。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2DEQ1H.3"  title="原文: token-endpoint-auth"><code>token-endpoint-auth</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1KoZ4D.3" title="原文 : ClientAuthentication (CLIENT_SECRET_BASIC, CLIENT_SECRET_POST, CLIENT_SECRET_JWT, PRIVATE_KEY_JWT, NONE)">ClientAuthentication (CLIENT_SECRET_BASIC、CLIENT_SECRET_POST、CLIENT_SECRET_JWT、PRIVATE_KEY_JWT、なし)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3KTL8M.3"  title="原文: CLIENT_SECRET_BASIC"><code>CLIENT_SECRET_BASIC</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3f6kjf.3.spl1" title="原文 : Type of authentication to use when invoking the token endpoint.">トークン・エンドポイントの起動時に使用する認証のタイプ。</span> <span class="merged" id="all.3f6kjf.3.spl2" title="原文 : Current supported options:">現在サポートされているオプション:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.eCxnW.3"  title="原文: io.helidon.security.providers.oidc.common.OidcConfig.ClientAuthentication#CLIENT_SECRET_BASIC">io.helidon.security.providers.oidc.common.OidcConfig.ClientAuthentication#CLIENT_SECRET_BASIC</span></p>

</li>
<li>
<p><span class="merged" id="all.oRP2j.3"  title="原文: io.helidon.security.providers.oidc.common.OidcConfig.ClientAuthentication#CLIENT_SECRET_POST">io.helidon.security.providers.oidc.common.OidcConfig.ClientAuthentication#CLIENT_SECRET_POST</span></p>

</li>
<li>
<p><span class="merged" id="all.3xsX8t.3"  title="原文: io.helidon.security.providers.oidc.common.OidcConfig.ClientAuthentication#NONE">io.helidon.security.providers.oidc.common.OidcConfig.ClientAuthentication#NONE</span></p>

</li>
</ul>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.NDgNA.3"  title="原文: token-endpoint-uri"><code>token-endpoint-uri</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.LGnjn.16"  title="原文:: URI">URI</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.WAsjK.3.spl1" title="原文 : URI of a token endpoint used to obtain a JWT based on the authentication code.">認証コードに基づいてJWTを取得するために使用するトークン・エンドポイントのURI。</span> <span class="merged" id="all.WAsjK.3.spl2" title="原文 : If not defined, it is obtained from #oidcMetadata(Resource), if that is not defined an attempt is made to use #identityUri(URI)/oauth2/v1/token.">定義されていない場合、#oidcMetadata(Resource)から取得されます。定義されていない場合は、#identityUri(URI)/oauth2/v1/tokenの使用が試行されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2GiOns.3"  title="原文: validate-jwt-with-jwk"><code>validate-jwt-with-jwk</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.107"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.52"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2L1y3N.3.spl1" title="原文 : Use JWK (a set of keys to validate signatures of JWT) to validate tokens.">JWK (JWTのシグネチャをバリデートするための一連のキー)を使用して、トークンをバリデートします。</span> <span class="merged" id="all.2L1y3N.3.spl2" title="原文 : Use this method when you want to use default values for JWK or introspection endpoint URI.">このメソッドは、JWKまたはイントロスペクション・エンドポイントURIにデフォルト値を使用する場合に使用します。</span> </p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
