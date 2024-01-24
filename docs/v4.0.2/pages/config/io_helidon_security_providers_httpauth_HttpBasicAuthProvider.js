<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3yngCh" title="原文 : HttpBasicAuthProvider (security.providers.httpauth) Configuration">HttpBasicAuthProvider (security.providers.httpauth)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3y81r9" title="原文 : HTTP Basic Authentication provider">HTTP Basic認証プロバイダ</span></p>

<p><span class="merged" id="all.1EoGMD" title="原文 : Type: io.helidon.security.providers.httpauth.HttpBasicAuthProvider">タイプ: <a href="/apidocs/io.helidon.security.providers.httpauth/io/helidon/security/providers/httpauth/HttpBasicAuthProvider.html" target="_blank">io.helidon.security.providers.httpauth.HttpBasicAuthProvider</a></span></p>

<markup
lang="text"
title="Config key"
>http-basic-auth</markup>

<p><span class="merged" id="all.31kiUh.3" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.xEHEP.3"  title="原文: io.helidon.security.spi.SecurityProvider"><code>io.helidon.security.spi.SecurityProvider</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2t170n.2"  title="原文: io.helidon.security.spi.AuthenticationProvider"><code>io.helidon.security.spi.AuthenticationProvider</code></span></p>

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


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.50"  title="原文:: Configuration options">構成オプション</span></h2>
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
<th><span class="merged" id="all.2XKMH3.54"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.54"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.54"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.54"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4Zagyj.3"  title="原文: optional"><code>optional</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.62"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.14"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.10QIm6.spl1" title="原文 : Whether authentication is required.">認証が必須かどうか。</span> <span class="merged" id="all.10QIm6.spl2" title="原文 : By default, request will fail if the authentication cannot be verified.">デフォルトでは、認証を検証できない場合、リクエストは失敗します。</span> <span class="merged" id="all.10QIm6.spl3" title="原文 : If set to false, request will process and this provider will abstain.">falseに設定すると、リクエストは処理され、このプロバイダは中断します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.46DWSr.3"  title="原文: outbound"><code>outbound</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2BE0hr.2" title="原文 : OutboundTarget[]"><router-link to="/config/io_helidon_security_providers_common_OutboundTarget">OutboundTarget[]</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3GQhHU" title="原文 : Add a new outbound target to configure identity propagation or explicit username/password.">アイデンティティ伝播または明示的なユーザー名/パスワードを構成するには、新しいアウトバウンド・ターゲットを追加します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4V6kvV.2"  title="原文: principal-type"><code>principal-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4F7kFa.1" title="原文 : SubjectType (USER, SERVICE)">SubjectType (ユーザー、サービス)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.26725z.2"  title="原文: USER"><code>USER</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ksLfL.1" title="原文 : Principal type this provider extracts (and also propagates).">このプロバイダが抽出するプリンシパル・タイプ(および伝播)。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.10Bdny.1"  title="原文: realm"><code>realm</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.96"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.V69kn.1"  title="原文: helidon"><code>helidon</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.34xaYV" title="原文 : Set the realm to use when challenging users.">ユーザーのチャレンジ時に使用するレルムを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.sbmr"  title="原文: users"><code>users</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4YA7Ck" title="原文 : ConfigUser[]"><router-link to="/config/io_helidon_security_providers_httpauth_ConfigUserStore_ConfigUser">ConfigUser[]</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.jMkk3.spl1" title="原文 : Set user store to validate users.">ユーザーをバリデートするようにユーザー・ストアを設定します。</span> <span class="merged" id="all.jMkk3.spl2" title="原文 : Removes any other stores added through #addUserStore(SecureUserStore).">#addUserStore(SecureUserStore)を使用して追加された他のストアを削除します。</span> </p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
