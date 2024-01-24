<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1t2buw" title="原文 : OpenApiFeature (openapi) Configuration">OpenApiFeature (openapi)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.27PCaX" title="原文 : Type: io.helidon.openapi.OpenApiFeature">タイプ: <a href="/apidocs/io.helidon.openapi/io/helidon/openapi/OpenApiFeature.html" target="_blank">io.helidon.openapi.OpenApiFeature</a></span></p>

<p><span class="merged" id="all.47ilzK" title="原文 : This is a standalone configuration type, prefix from configuration root: openapi">これはスタンドアロン構成タイプであり、構成ルートからのプレフィクスです: <code>openapi</code></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.37"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.36" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.38"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.38"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.38"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.38"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3UsoFV"  title="原文: cors"><code>cors</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2cqsnT.1" title="原文 : CrossOriginConfig"><router-link to="/config/io_helidon_cors_CrossOriginConfig">CrossOriginConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3RWcza" title="原文 : CORS config.">CORS構成。</span></p>

<markup>@return CORS config</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48UcwL.8"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.50"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.25"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3dVctH" title="原文 : Sets whether the feature should be enabled.">機能を有効にするかどうかを設定します。</span></p>

<markup>@return `true` if enabled, `false` otherwise</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1h51IP.1"  title="原文: manager"><code>manager</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4aPgis" title="原文 : io.helidon.openapi.OpenApiManager (service provider interface)">io.helidon.openapi.OpenApiManager (サービス・プロバイダ・インタフェース)</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1h5tQt" title="原文 : OpenAPI manager.">OpenAPIマネージャ。</span></p>

<markup>@return the OpenAPI manager</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2r7Cat.1"  title="原文: permit-all"><code>permit-all</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.51"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4AwWXP.1" title="原文 : Whether to allow anybody to access the endpoint.">エンドポイントへのアクセスを許可するかどうか。</span></p>

<markup>@return whether to permit access to metrics endpoint to anybody, defaults to `true`
@see #roles()</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Atrrs.1"  title="原文: roles"><code>roles</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.13"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3np7Uf.1" title="原文 : Hints for role names the user is expected to be in.">ユーザーが想定されるロール名のヒント。</span></p>

<markup>@return list of hints</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.bZKKF"  title="原文: services"><code>services</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1YRmoI" title="原文 : io.helidon.openapi.OpenApiService[] (service provider interface)">io.helidon.openapi.OpenApiService[] (サービス・プロバイダ・インタフェース)</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3yiCWz" title="原文 : OpenAPI services.">OpenAPIサービス。</span></p>

<markup>@return the OpenAPI services</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2v1sWP"  title="原文: static-file"><code>static-file</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.84"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.uIt6i.spl1" title="原文 : Path of the static OpenAPI document file.">静的OpenAPIドキュメント・ファイルのパス。</span> <span class="merged" id="all.uIt6i.spl2" title="原文 : Default types are json, yaml, and yml.">デフォルト・タイプは、<code>json</code>、<code>yaml</code>および<code>yml</code>です。</span> </p>

<markup>@return location of the static OpenAPI document file</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2C8nDO.2"  title="原文: web-context"><code>web-context</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.85"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.6CBWQ"  title="原文: /openapi"><code>/openapi</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.28rAhM" title="原文 : Web context path for the OpenAPI endpoint.">OpenAPIエンドポイントのWebコンテキスト・パス。</span></p>

<markup>@return webContext to use</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
