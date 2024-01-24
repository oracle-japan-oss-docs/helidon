<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1LHxcZ" title="原文 : Security (security) Configuration">Security (security)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2XZ1Xe" title="原文 : Configuration of security providers, integration and other security options">セキュリティ・プロバイダ、統合およびその他のセキュリティ・オプションの構成</span></p>

<p><span class="merged" id="all.4UJjlK" title="原文 : Type: io.helidon.security.Security">タイプ: <a href="/apidocs/io.helidon.security/io/helidon/security/Security.html" target="_blank">io.helidon.security.Security</a></span></p>

<p><span class="merged" id="all.1OCIxC" title="原文 : This is a standalone configuration type, prefix from configuration root: security">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>security</code></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.41"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.1fCXjI.3" title="原文 : Required configuration options"><span>必要な構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.43"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.43"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.43"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.43"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1EeDjd"  title="原文: providers"><code>providers</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4Q1lye" title="原文 : io.helidon.security.spi.SecurityProvider[] (service provider interface)">io.helidon.security.spi.SecurityProvider [] (サービス・プロバイダ・インタフェース)</span></p>

<p><span class="merged" id="all.ETeZ4"  title="原文:: Such as:">これには次のようなものがあります。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3XnzJi" title="原文 : idcs-role-mapper (IdcsRoleMapperProvider)"><router-link to="/config/io_helidon_security_providers_idcs_mapper_IdcsRoleMapperProvider">idcs-role-mapper (IdcsRoleMapperProvider)</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4Ofmk3" title="原文 : http-basic-auth (HttpBasicAuthProvider)"><router-link to="/config/io_helidon_security_providers_httpauth_HttpBasicAuthProvider">http-basic-auth (HttpBasicAuthProvider)</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4LrIb4" title="原文 : idcs-role-mapper (IdcsMtRoleMapperProvider)"><router-link to="/config/io_helidon_security_providers_idcs_mapper_IdcsMtRoleMapperProvider">idcs-role-mapper (IdcsMtRoleMapperProvider)</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1nmRgB" title="原文 : google-login (GoogleTokenProvider)"><router-link to="/config/io_helidon_security_providers_google_login_GoogleTokenProvider">google-login (GoogleTokenProvider)</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zPDuk" title="原文 : oidc (OidcProvider)"><router-link to="/config/io_helidon_security_providers_oidc_OidcProvider">oidc (OidcProvider)</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3qsa1C" title="原文 : http-digest-auth (HttpDigestAuthProvider)"><router-link to="/config/io_helidon_security_providers_httpauth_HttpDigestAuthProvider">http-digest-auth (HttpDigestAuthProvider)</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.GCwbB" title="原文 : jwt (JwtProvider)"><router-link to="/config/io_helidon_security_providers_jwt_JwtProvider">jwt (JwtProvider)</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1M1KzR" title="原文 : header-atn (HeaderAtnProvider)"><router-link to="/config/io_helidon_security_providers_header_HeaderAtnProvider">header-atn (HeaderAtnProvider)</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4Tx7VU" title="原文 : abac (AbacProvider)"><router-link to="/config/io_helidon_security_providers_abac_AbacProvider">abac (AbacProvider)</router-link></span></p>

</li>
</ul>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2Npc3I" title="原文 : Add a provider, works as #addProvider(io.helidon.security.spi.SecurityProvider, String), where the name is set to Class#getSimpleName().">プロバイダを追加します。#addProvider(io.helidon.security.spi.SecurityProvider, String)として機能します。ここで、名前は<code>Class#getSimpleName()</code>に設定されます。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<div class="block-title"><span class="merged" id="all.271SGn.39" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.44"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.44"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.44"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.44"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1Gu4EU"  title="原文: default-authentication-provider"><code>default-authentication-provider</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.16qVrC" title="原文 : string (service provider interface)">string (サービス・プロバイダ・インタフェース)</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4PNn6j" title="原文 : ID of the default authentication provider">デフォルト認証プロバイダのID</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3C0lPE"  title="原文: default-authorization-provider"><code>default-authorization-provider</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.87"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.39nweD" title="原文 : ID of the default authorization provider">デフォルトの認可プロバイダのID</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48UcwL.9"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.53"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.27"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4REUML.spl1" title="原文 : Security can be disabled using configuration, or explicitly.">セキュリティは、構成を使用して無効にすることも、明示的に無効にすることもできます。</span> <span class="merged" id="all.4REUML.spl2" title="原文 : By default, security instance is enabled.">デフォルトでは、セキュリティ・インスタンスは有効です。</span> <span class="merged" id="all.4REUML.spl3" title="原文 : Disabled security instance will not perform any checks and allow all requests.">無効なセキュリティ・インスタンスはチェックを実行せず、すべてのリクエストを許可します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1tGQxr"  title="原文: environment.server-time"><code>environment.server-time</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3xIIeb" title="原文 : SecurityTime"><router-link to="/config/io_helidon_security_SecurityTime">SecurityTime</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.WRQqG" title="原文 : Server time to use when evaluating security policies that depend on time.">時間に依存するセキュリティ・ポリシーを評価する際に使用するサーバー時間。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.SAk96"  title="原文: provider-policy.class-name"><code>provider-policy.class-name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.oZPHH"  title="原文:: Class">クラス</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3oqT4o" title="原文 : Provider selection policy class name, only used when type is set to CLASS">プロバイダ選択ポリシー・クラス名。タイプがCLASSに設定されている場合にのみ使用されます</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1VxsiJ"  title="原文: provider-policy.type"><code>provider-policy.type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.GmfLn" title="原文 : ProviderSelectionPolicyType (FIRST, COMPOSITE, CLASS)">ProviderSelectionPolicyType (最初、コンポジット、クラス)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1H3q6V"  title="原文: FIRST"><code>FIRST</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2qdyc6"  title="原文: Type of the policy.">ポリシーのタイプ。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4J7Xby"  title="原文: secrets"><code>secrets</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3N98WA" title="原文 : Map&lt;string, string&gt; (documented for specific cases)">マップ&lt;string, string>(特定のケースについてドキュメント化)</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.lM81I" title="原文 : Configured secrets">構成済シークレット</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2mJo8b"  title="原文: secrets.*.config"><code>secrets.*.config</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.HvyrO" title="原文 : io.helidon.security.SecretsProviderConfig (service provider interface)">io.helidon.security.SecretsProviderConfig (サービス・プロバイダ・インタフェース)</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.vpXt5" title="原文 : Configuration specific to the secret provider">シークレット・プロバイダに固有の構成</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3XUhXg"  title="原文: secrets.*.name"><code>secrets.*.name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.88"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2CSDyi" title="原文 : Name of the secret, used for lookup">参照に使用されるシークレットの名前</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.47UoWx"  title="原文: secrets.*.provider"><code>secrets.*.provider</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.89"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.G4bDx" title="原文 : Name of the secret provider">シークレット・プロバイダの名前</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4IgcQJ"  title="原文: tracing.enabled"><code>tracing.enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.54"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.28"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.40MFsA.spl1" title="原文 : Whether or not tracing should be enabled.">トレースを有効にするかどうか。</span> <span class="merged" id="all.40MFsA.spl2" title="原文 : If set to false, security tracer will be a no-op tracer.">falseに設定すると、セキュリティ・トレーサはno-opトレーサになります。</span> </p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
