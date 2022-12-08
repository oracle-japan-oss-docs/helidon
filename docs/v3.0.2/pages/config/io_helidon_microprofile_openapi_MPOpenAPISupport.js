<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.4UmJbh" title="原文 : MPOpenAPISupport (microprofile.openapi) Configuration">MPOpenAPISupport (microprofile.openapi)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1o4uIe" title="原文 : Type: io.helidon.microprofile.openapi.MPOpenAPISupport">タイプ: <a href="./apidocs/io.helidon.microprofile.openapi/io/helidon/microprofile/openapi/MPOpenAPISupport.html" target="_blank">io.helidon.microprofile.openapi.MPOpenAPISupport</a></span></p>

<markup
lang="text"
title="Config key"
>mp.openapi</markup>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.27"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.27" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.32"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.32"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.32"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.32"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.MsfaM"  title="原文: application-path-disable"><code>application-path-disable</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.36"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.9"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2xeBsu" title="原文 : Sets whether the app path search should be disabled.">アプリケーション・パス検索を無効にするかどうかを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3UsoFV.3"  title="原文: cors"><code>cors</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1Gn61H.3" title="原文 : CrossOriginConfig"><router-link to="/config/io_helidon_webserver_cors_CrossOriginConfig">CrossOriginConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1cPuUR" title="原文 : Assigns the CORS settings for the OpenAPI endpoint.">OpenAPIエンドポイントのCORS設定を割り当てます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2XAGpa"  title="原文: custom-schema-registry-class"><code>custom-schema-registry-class</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.70"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1DeBJS" title="原文 : Sets the custom schema registry class.">カスタム・スキーマ・レジストリ・クラスを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3VN3Pe.1"  title="原文: filter"><code>filter</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.71"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4b4jzJ" title="原文 : Sets the developer-provided OpenAPI filter class name.">開発者が指定したOpenAPIフィルタ・クラス名を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1VPBo8"  title="原文: model.reader"><code>model.reader</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.72"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2G1baF" title="原文 : Sets the developer-provided OpenAPI model reader class name.">開発者が指定したOpenAPIモデル・リーダー・クラス名を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1CHYnh"  title="原文: scan.classes"><code>scan.classes</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.2"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1BGNbK" title="原文 : Specify the list of classes to scan.">スキャンするクラスのリストを指定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Ppeba"  title="原文: scan.disable"><code>scan.disable</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.37"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.10"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1E9ccN" title="原文 : Disable annotation scanning.">注釈スキャンを無効にします。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2Wxd2J"  title="原文: scan.exclude.classes"><code>scan.exclude.classes</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.3"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3PUd1q" title="原文 : Specify the list of classes to exclude from scans.">スキャンから除外するクラスのリストを指定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.32dBGg"  title="原文: scan.exclude.packages"><code>scan.exclude.packages</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.4"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.6Wv6k" title="原文 : Specify the list of packages to exclude from scans.">スキャンから除外するパッケージのリストを指定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2aVVc6"  title="原文: scan.packages"><code>scan.packages</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.5"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.oy6dI" title="原文 : Specify the list of packages to scan.">スキャンするパッケージのリストを指定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2bpkMT"  title="原文: schema.*"><code>schema.*</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.73"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1mQwvR.spl1" title="原文 : Sets the schema for the indicated fully-qualified class name (represented here by &apos;*&apos;); value is the schema in JSON format.">指定された完全修飾クラス名のスキーマを設定します(ここで'*'で表します)。値はJSON形式のスキーマです。</span> <span class="merged" id="all.1mQwvR.spl2" title="原文 : Repeat for multiple classes.">複数のクラスについて繰り返します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3V8KGr"  title="原文: servers"><code>servers</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.6"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ghIBJ" title="原文 : Sets servers.">サーバーを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4IOFYs"  title="原文: servers.operation.*"><code>servers.operation.*</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.7"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1Fws7b.spl1" title="原文 : Sets alternative servers to service the indicated operation (represented here by &apos;*&apos;).">指定された操作をサービスする代替サーバーを設定します(ここで'*'で示されています)。</span> <span class="merged" id="all.1Fws7b.spl2" title="原文 : Repeat for multiple operations.">複数の操作について繰り返します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2XqCZQ"  title="原文: servers.path.*"><code>servers.path.*</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.8"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.gWeIV.spl1" title="原文 : Sets alternative servers to service all operations at the indicated path (represented here by &apos;*&apos;).">指定されたパスですべての操作を処理するための代替サーバーを設定します(ここで*で示されています)。</span> <span class="merged" id="all.gWeIV.spl2" title="原文 : Repeat for multiple paths.">複数のパスについて繰り返します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2v1sWP"  title="原文: static-file"><code>static-file</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.74"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2pWotd"  title="原文: META-INF/openapi.*"><code>META-INF/openapi.*</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2DjgLa.spl1" title="原文 : Sets the file system path of the static OpenAPI document file.">静的OpenAPIドキュメント・ファイルのファイル・システム・パスを設定します。</span> <span class="merged" id="all.2DjgLa.spl2" title="原文 : Default types are json, yaml, and yml.">デフォルト・タイプは、<code>json</code>、<code>yaml</code>および<code>yml</code>です。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2C8nDO.3"  title="原文: web-context"><code>web-context</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.75"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.6CBWQ"  title="原文: /openapi"><code>/openapi</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ncWNj" title="原文 : Sets the web context path for the OpenAPI endpoint.">OpenAPIエンドポイントのwebコンテキスト・パスを設定します。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
