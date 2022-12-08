<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.6xE8J" title="原文 : io.smallrye.openapi.api.OpenApiConfig Configuration">io.smallrye.openapi.api.OpenApiConfig構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.xGZK0" title="原文 : Type: io.smallrye.openapi.api.OpenApiConfig">タイプ: io.smallrye.openapi.api.OpenApiConfig</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.64"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.65" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.74"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.74"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.74"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.74"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.MsfaM.2"  title="原文: application-path-disable"><code>application-path-disable</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.101"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.41"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2xeBsu.2" title="原文 : Sets whether the app path search should be disabled.">アプリケーション・パス検索を無効にするかどうかを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2XAGpa.2"  title="原文: custom-schema-registry-class"><code>custom-schema-registry-class</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.176"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1DeBJS.2" title="原文 : Sets the custom schema registry class.">カスタム・スキーマ・レジストリ・クラスを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3VN3Pe.3"  title="原文: filter"><code>filter</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.177"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4b4jzJ.2" title="原文 : Sets the developer-provided OpenAPI filter class name.">開発者が指定したOpenAPIフィルタ・クラス名を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1VPBo8.2"  title="原文: model.reader"><code>model.reader</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.178"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2G1baF.2" title="原文 : Sets the developer-provided OpenAPI model reader class name.">開発者が指定したOpenAPIモデル・リーダー・クラス名を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2bpkMT.2"  title="原文: schema.*"><code>schema.*</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.179"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1mQwvR.2.spl1" title="原文 : Sets the schema for the indicated fully-qualified class name (represented here by &apos;*&apos;); value is the schema in JSON format.">指定された完全修飾クラス名のスキーマを設定します(ここで'*'で表します)。値はJSON形式のスキーマです。</span> <span class="merged" id="all.1mQwvR.2.spl2" title="原文 : Repeat for multiple classes.">複数のクラスについて繰り返します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3V8KGr.2"  title="原文: servers"><code>servers</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.26"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ghIBJ.2" title="原文 : Sets servers.">サーバーを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4IOFYs.2"  title="原文: servers.operation.*"><code>servers.operation.*</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.27"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1Fws7b.2.spl1" title="原文 : Sets alternative servers to service the indicated operation (represented here by &apos;*&apos;).">指定された操作をサービスする代替サーバーを設定します(ここで'*'で示されています)。</span> <span class="merged" id="all.1Fws7b.2.spl2" title="原文 : Repeat for multiple operations.">複数の操作について繰り返します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2XqCZQ.2"  title="原文: servers.path.*"><code>servers.path.*</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.28"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.gWeIV.2.spl1" title="原文 : Sets alternative servers to service all operations at the indicated path (represented here by &apos;*&apos;).">指定されたパスですべての操作を処理するための代替サーバーを設定します(ここで*で示されています)。</span> <span class="merged" id="all.gWeIV.2.spl2" title="原文 : Repeat for multiple paths.">複数のパスについて繰り返します。</span> </p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
