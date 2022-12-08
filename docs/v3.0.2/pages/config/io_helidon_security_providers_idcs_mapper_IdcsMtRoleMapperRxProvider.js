<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1TswGe" title="原文 : IdcsMtRoleMapperRxProvider (security.providers.idcs.mapper) Configuration">IdcsMtRoleMapperRxProvider (security.providers.idcs.mapper)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.4LUQ25" title="原文 : Multitenant IDCS role mapping provider">マルチテナントIDCSロール・マッピング・プロバイダ</span></p>

<p><span class="merged" id="all.33m7XK" title="原文 : Type: io.helidon.security.providers.idcs.mapper.IdcsMtRoleMapperRxProvider">タイプ: <a href="./apidocs/io.helidon.security.providers.idcs.mapper/io/helidon/security/providers/idcs/mapper/IdcsMtRoleMapperRxProvider.html" target="_blank">io.helidon.security.providers.idcs.mapper.IdcsMtRoleMapperRxProvider</a></span></p>

<markup
lang="text"
title="Config key"
>idcs-role-mapper</markup>

<p><span class="merged" id="all.31kiUh.8" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.xEHEP.5"  title="原文: io.helidon.security.spi.SecurityProvider"><code>io.helidon.security.spi.SecurityProvider</code></span></p>

</li>
<li>
<p><span class="merged" id="all.PsUPx"  title="原文: io.helidon.security.spi.SubjectMappingProvider"><code>io.helidon.security.spi.SubjectMappingProvider</code></span></p>

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


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.44"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.45" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.52"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.52"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.52"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.52"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.13yRix"  title="原文: cache-config"><code>cache-config</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1jdkVC" title="原文 : EvictableCache"><router-link to="/config/io_helidon_security_providers_common_EvictableCache">EvictableCache</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4MwfWq" title="原文 : Use explicit io.helidon.security.providers.common.EvictableCache for role caching.">ロール・キャッシングには明示的なio.helidon.security.providers.common.EvictableCacheを使用します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2IXvjO"  title="原文: default-idcs-subject-type"><code>default-idcs-subject-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.103"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3WzDhx"  title="原文: user"><code>user</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4TmZMT.spl1" title="原文 : Configure subject type to use when requesting roles from IDCS.">IDCSからロールをリクエストするときに使用するサブジェクト・タイプを構成します。</span> <span class="merged" id="all.4TmZMT.spl2" title="原文 : Can be either #IDCS_SUBJECT_TYPE_USER or #IDCS_SUBJECT_TYPE_CLIENT.">#IDCS_SUBJECT_TYPE_USERまたは#IDCS_SUBJECT_TYPE_CLIENTのいずれかです。</span> <span class="merged" id="all.4TmZMT.spl3" title="原文 : Defaults to #IDCS_SUBJECT_TYPE_USER.">デフォルトは#IDCS_SUBJECT_TYPE_USERです。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.255V8t"  title="原文: idcs-app-name-handler"><code>idcs-app-name-handler</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.XGoC5.3" title="原文 : TokenHandler"><router-link to="/config/io_helidon_security_util_TokenHandler">TokenHandler</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1ItWlZ.spl1" title="原文 : Configure token handler for IDCS Application name.">IDCSアプリケーション名のトークン・ハンドラを構成します。</span> <span class="merged" id="all.1ItWlZ.spl2" title="原文 : By default the header IdcsMtRoleMapperRxProvider#IDCS_APP_HEADER is used.">デフォルトでは、ヘッダー<code>IdcsMtRoleMapperRxProvider#IDCS_APP_HEADER</code>が使用されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1AH7uN"  title="原文: idcs-tenant-handler"><code>idcs-tenant-handler</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.XGoC5.4" title="原文 : TokenHandler"><router-link to="/config/io_helidon_security_util_TokenHandler">TokenHandler</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4HQAaT.spl1" title="原文 : Configure token handler for IDCS Tenant ID.">IDCSテナントIDのトークン・ハンドラを構成します。</span> <span class="merged" id="all.4HQAaT.spl2" title="原文 : By default the header IdcsMtRoleMapperRxProvider#IDCS_TENANT_HEADER is used.">デフォルトでは、ヘッダー<code>IdcsMtRoleMapperRxProvider#IDCS_TENANT_HEADER</code>が使用されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3iExOC"  title="原文: oidc-config"><code>oidc-config</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3RNpkT" title="原文 : OidcConfig"><router-link to="/config/io_helidon_security_providers_oidc_common_OidcConfig">OidcConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1ZeQ45" title="原文 : Use explicit io.helidon.security.providers.oidc.common.OidcConfig instance, e.g. when using it also for OIDC provider.">明示的なio.helidon.security.providers.oidc.common.OidcConfigインスタンスe.gを使用します。たとえば、OIDCプロバイダにも使用する場合。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3FHJq7"  title="原文: subject-types"><code>subject-types</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3DQ2UD" title="原文 : SubjectType[] (USER, SERVICE)">SubjectType[] (ユーザー、サービス)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.26725z.4"  title="原文: USER"><code>USER</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.42ZR2N.spl1" title="原文 : Add a supported subject type.">サポートされているサブジェクト・タイプを追加します。</span> <span class="merged" id="all.42ZR2N.spl2" title="原文 : If none added, io.helidon.security.SubjectType#USER is used.">追加されない場合は、io.helidon.security.SubjectType#USERが使用されます。</span> <span class="merged" id="all.42ZR2N.spl3" title="原文 : If any added, only the ones added will be used (e.g. if you want to use both io.helidon.security.SubjectType#USER and io.helidon.security.SubjectType#SERVICE, both need to be added.">追加した場合は、追加したもののみが使用されます(たとえば、io.helidon.security.SubjectType#USERとio.helidon.security.SubjectType#SERVICEの両方を使用する場合は、両方を追加する必要があります。</span> </p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
