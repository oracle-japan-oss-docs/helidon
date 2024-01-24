<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.4D4RxM" title="原文 : AbacProvider (security.providers.abac) Configuration">AbacProvider (security.providers.abac)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.4bF52K" title="原文 : Attribute Based Access Control provider">属性ベースのアクセス制御プロバイダ</span></p>

<p><span class="merged" id="all.3zBAts" title="原文 : Type: io.helidon.security.providers.abac.AbacProvider">タイプ: <a href="/apidocs/io.helidon.security.providers.abac/io/helidon/security/providers/abac/AbacProvider.html" target="_blank">io.helidon.security.providers.abac.AbacProvider</a></span></p>

<markup
lang="text"
title="Config key"
>abac</markup>

<p><span class="merged" id="all.31kiUh" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.xEHEP"  title="原文: io.helidon.security.spi.SecurityProvider"><code>io.helidon.security.spi.SecurityProvider</code></span></p>

</li>
<li>
<p><span class="merged" id="all.1OWK4y"  title="原文: io.helidon.security.spi.AuthorizationProvider"><code>io.helidon.security.spi.AuthorizationProvider</code></span></p>

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


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.43"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.41" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.46"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.46"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.46"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.46"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.348v9l"  title="原文: fail-if-none-validated"><code>fail-if-none-validated</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.55"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.29"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.KK0T9" title="原文 : Whether to fail if NONE of the attributes is validated.">属性のNONEがバリデートされた場合、失敗するかどうか。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.dXhT6"  title="原文: fail-on-unvalidated"><code>fail-on-unvalidated</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.56"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.30"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1Q6ONQ" title="原文 : Whether to fail if any attribute is left unvalidated.">属性が未バリデートのままの場合、失敗するかどうか。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
