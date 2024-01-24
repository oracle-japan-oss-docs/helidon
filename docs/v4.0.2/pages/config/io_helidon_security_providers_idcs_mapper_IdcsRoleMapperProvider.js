<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.Edsfy" title="原文 : IdcsRoleMapperProvider (security.providers.idcs.mapper) Configuration">IdcsRoleMapperProvider (security.providers.idcs.mapper)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1Reqc5" title="原文 : IDCS role mapping provider">IDCSロール・マッピング・プロバイダ</span></p>

<p><span class="merged" id="all.1uhCQ0" title="原文 : Type: io.helidon.security.providers.idcs.mapper.IdcsRoleMapperProvider">タイプ: <a href="/apidocs/io.helidon.security.providers.idcs.mapper/io/helidon/security/providers/idcs/mapper/IdcsRoleMapperProvider.html" target="_blank">io.helidon.security.providers.idcs.mapper.IdcsRoleMapperProvider</a></span></p>

<markup
lang="text"
title="Config key"
>idcs-role-mapper</markup>

<p><span class="merged" id="all.31kiUh.7" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.xEHEP.6"  title="原文: io.helidon.security.spi.SecurityProvider"><code>io.helidon.security.spi.SecurityProvider</code></span></p>

</li>
<li>
<p><span class="merged" id="all.PsUPx.1"  title="原文: io.helidon.security.spi.SubjectMappingProvider"><code>io.helidon.security.spi.SubjectMappingProvider</code></span></p>

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


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.56"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.54" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.60"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.60"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.60"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.60"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.13yRix.1"  title="原文: cache-config"><code>cache-config</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1jdkVC.1" title="原文 : EvictableCache"><router-link to="/config/io_helidon_security_providers_common_EvictableCache">EvictableCache</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4MwfWq.1" title="原文 : Use explicit io.helidon.security.providers.common.EvictableCache for role caching.">ロール・キャッシングには明示的なio.helidon.security.providers.common.EvictableCacheを使用します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2IXvjO.1"  title="原文: default-idcs-subject-type"><code>default-idcs-subject-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.106"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3WzDhx.1"  title="原文: user"><code>user</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4TmZMT.1.spl1" title="原文 : Configure subject type to use when requesting roles from IDCS.">IDCSからロールをリクエストするときに使用するサブジェクト・タイプを構成します。</span> <span class="merged" id="all.4TmZMT.1.spl2" title="原文 : Can be either #IDCS_SUBJECT_TYPE_USER or #IDCS_SUBJECT_TYPE_CLIENT.">#IDCS_SUBJECT_TYPE_USERまたは#IDCS_SUBJECT_TYPE_CLIENTのいずれかです。</span> <span class="merged" id="all.4TmZMT.1.spl3" title="原文 : Defaults to #IDCS_SUBJECT_TYPE_USER.">デフォルトは#IDCS_SUBJECT_TYPE_USERです。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3iExOC.1"  title="原文: oidc-config"><code>oidc-config</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3RNpkT.1" title="原文 : OidcConfig"><router-link to="/config/io_helidon_security_providers_oidc_common_OidcConfig">OidcConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1ZeQ45.1" title="原文 : Use explicit io.helidon.security.providers.oidc.common.OidcConfig instance, e.g. when using it also for OIDC provider.">明示的なio.helidon.security.providers.oidc.common.OidcConfigインスタンスe.gを使用します。たとえば、OIDCプロバイダにも使用する場合。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3FHJq7.1"  title="原文: subject-types"><code>subject-types</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3DQ2UD.1" title="原文 : SubjectType[] (USER, SERVICE)">SubjectType[] (ユーザー、サービス)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.26725z.5"  title="原文: USER"><code>USER</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.42ZR2N.1.spl1" title="原文 : Add a supported subject type.">サポートされているサブジェクト・タイプを追加します。</span> <span class="merged" id="all.42ZR2N.1.spl2" title="原文 : If none added, io.helidon.security.SubjectType#USER is used.">追加されない場合は、io.helidon.security.SubjectType#USERが使用されます。</span> <span class="merged" id="all.42ZR2N.1.spl3" title="原文 : If any added, only the ones added will be used (e.g. if you want to use both io.helidon.security.SubjectType#USER and io.helidon.security.SubjectType#SERVICE, both need to be added.">追加した場合は、追加したもののみが使用されます(たとえば、io.helidon.security.SubjectType#USERとio.helidon.security.SubjectType#SERVICEの両方を使用する場合は、両方を追加する必要があります。</span> </p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
