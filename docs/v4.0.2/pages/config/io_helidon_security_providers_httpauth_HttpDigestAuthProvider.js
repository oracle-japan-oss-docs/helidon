<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.47vK96" title="原文 : HttpDigestAuthProvider (security.providers.httpauth) Configuration">HttpDigestAuthProvider (security.providers.httpauth)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1EcjSa" title="原文 : Http digest authentication security provider">HTTPダイジェスト認証セキュリティ・プロバイダ</span></p>

<p><span class="merged" id="all.4VdmbS" title="原文 : Type: io.helidon.security.providers.httpauth.HttpDigestAuthProvider">タイプ: <a href="/apidocs/io.helidon.security.providers.httpauth/io/helidon/security/providers/httpauth/HttpDigestAuthProvider.html" target="_blank">io.helidon.security.providers.httpauth.HttpDigestAuthProvider</a></span></p>

<markup
lang="text"
title="Config key"
>http-digest-auth</markup>

<p><span class="merged" id="all.31kiUh.4" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.xEHEP.4"  title="原文: io.helidon.security.spi.SecurityProvider"><code>io.helidon.security.spi.SecurityProvider</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2t170n.3"  title="原文: io.helidon.security.spi.AuthenticationProvider"><code>io.helidon.security.spi.AuthenticationProvider</code></span></p>

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


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.51"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.49" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2ZwVVB.55"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.55"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.55"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2ZmMkv"  title="原文: algorithm"><code>algorithm</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4KK6QY" title="原文 : Algorithm (MD5)">アルゴリズム(MD5)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2wf8Kx"  title="原文: MD5"><code>MD5</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.gmI1l" title="原文 : Digest algorithm to use.">使用するダイジェスト・アルゴリズム。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3XEI1q"  title="原文: nonce-timeout-millis"><code>nonce-timeout-millis</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.20"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1nZ54j"  title="原文: 86400000"><code>86400000</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1c7fYH.spl1" title="原文 : How long will the nonce value be valid.">非ce値の有効期間。</span> <span class="merged" id="all.1c7fYH.spl2" title="原文 : When timed-out, browser will re-request username/password.">タイムアウトすると、ブラウザはユーザー名/パスワードを再リクエストします。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Zagyj.4"  title="原文: optional"><code>optional</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.63"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.15"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.10QIm6.1.spl1" title="原文 : Whether authentication is required.">認証が必須かどうか。</span> <span class="merged" id="all.10QIm6.1.spl2" title="原文 : By default, request will fail if the authentication cannot be verified.">デフォルトでは、認証を検証できない場合、リクエストは失敗します。</span> <span class="merged" id="all.10QIm6.1.spl3" title="原文 : If set to false, request will process and this provider will abstain.">falseに設定すると、リクエストは処理され、このプロバイダは中断します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4V6kvV.3"  title="原文: principal-type"><code>principal-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4F7kFa.2" title="原文 : SubjectType (USER, SERVICE)">SubjectType (ユーザー、サービス)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.26725z.3"  title="原文: USER"><code>USER</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ksLfL.2" title="原文 : Principal type this provider extracts (and also propagates).">このプロバイダが抽出するプリンシパル・タイプ(および伝播)。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3IKVQY"  title="原文: qop"><code>qop</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3X0pIo" title="原文 : Qop (NONE, AUTH)">Qop (NONE、AUTH)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.10P0gX.1"  title="原文: NONE"><code>NONE</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.463jpc.spl1" title="原文 : Only AUTH supported."><code>AUTH</code>のみがサポートされています。</span> <span class="merged" id="all.463jpc.spl2" title="原文 : If left empty, uses the legacy approach (older RFC version).">空のままにすると、従来のアプローチ(古いRFCバージョン)が使用されます。</span> <span class="merged" id="all.463jpc.spl3" title="原文 : AUTH-INT is not supported."><code>AUTH-INT</code>はサポートされていません。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.10Bdny.2"  title="原文: realm"><code>realm</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.97"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3v0ijR"  title="原文: Helidon"><code>Helidon</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.34xaYV.1" title="原文 : Set the realm to use when challenging users.">ユーザーのチャレンジ時に使用するレルムを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1h6f6M"  title="原文: server-secret"><code>server-secret</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.98"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ND4M3.spl1" title="原文 : The nonce is encrypted using this secret - to make sure the nonce we get back was generated by us and to make sure we can safely time-out nonce values.">nonceはこのシークレットを使用して暗号化されます - 戻される非CEが私たちによって生成されたことを確認し、非CE値を安全にタイムアウトすることができます。</span> <span class="merged" id="all.2ND4M3.spl2" title="原文 : This secret must be the same for all service instances (or all services that want to share the same authentication).">このシークレットは、すべてのサービス・インスタンス(または同じ認証を共有するすべてのサービス)で同じである必要があります。</span> <span class="merged" id="all.2ND4M3.spl3" title="原文 : Defaults to a random password - e.g. if deployed to multiple servers, the authentication WILL NOT WORK.">デフォルトはランダム・パスワードです - たとえば、複数のサーバーにデプロイされている場合、認証は機能しません。</span> <span class="merged" id="all.2ND4M3.spl4" title="原文 : You MUST provide your own password to work in a distributed environment with non-sticky load balancing.">非スティッキーなロード・バランシングを使用する分散環境で作業するには、独自のパスワードを指定する必要があります。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.sbmr.1"  title="原文: users"><code>users</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4YA7Ck.1" title="原文 : ConfigUser[]"><router-link to="/config/io_helidon_security_providers_httpauth_ConfigUserStore_ConfigUser">ConfigUser[]</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3Mogia" title="原文 : Set user store to obtain passwords and roles based on logins.">ログインに基づいてパスワードおよびロールを取得するようにユーザー・ストアを設定します。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
