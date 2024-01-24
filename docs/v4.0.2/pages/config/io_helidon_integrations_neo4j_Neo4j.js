<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.ReaaZ" title="原文 : Neo4j (integrations.neo4j) Configuration">Neo4j (integrations.neo4j)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.354gkb" title="原文 : Type: io.helidon.integrations.neo4j.Neo4j">タイプ: <a href="/apidocs/io.helidon.integrations.neo4j/io/helidon/integrations/neo4j/Neo4j.html" target="_blank">io.helidon.integrations.neo4j.Neo4j</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.24"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.24" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.25"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.25"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.25"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.25"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2qxCLQ"  title="原文: authentication-enabled"><code>authentication-enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.30"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.16"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3Tac6a"  title="原文:: Enable authentication.">認証の有効化</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3JcTSK"  title="原文: certificate"><code>certificate</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.38biMr.1"  title="原文:: Path">パス</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3gPtUl" title="原文 : Set certificate path.">証明書のパスを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Qa5kT"  title="原文: connection-acquisition-timeout"><code>connection-acquisition-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.10"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2mWW0Y"  title="原文: PT1MS"><code>PT1MS</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1ZOd3P" title="原文 : Set connection acquisition timeout.">接続取得タイムアウトを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1TXjt2"  title="原文: encrypted"><code>encrypted</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.31"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4T2Jrx" title="原文 : Enable encrypted field.">暗号化フィールドを有効にします。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2kqJW4"  title="原文: hostname-verification-enabled"><code>hostname-verification-enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.32"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4O3qJ3" title="原文 : Enable hostname verification.">ホスト名の検証を有効にします。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4FAcSk"  title="原文: idle-time-before-connection-test"><code>idle-time-before-connection-test</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.11"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4QWX4U"  title="原文: PT-1MS"><code>PT-1MS</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2Pm6f4" title="原文 : Set idle time.">アイドル時間を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3YUpbm"  title="原文: log-leaked-sessions"><code>log-leaked-sessions</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.33"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.11ahNt" title="原文 : Enable log leaked sessions.">ログ・リーク・セッションを有効にします。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3v6m4b"  title="原文: max-connection-lifetime"><code>max-connection-lifetime</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.12"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4d1iFq"  title="原文: PT5H"><code>PT5H</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1z3MLg" title="原文 : Set max life time.">最大ライフ時間を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.RaFSy"  title="原文: max-connection-pool-size"><code>max-connection-pool-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.24"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.368nYW"  title="原文: 100"><code>100</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1wkc9Q" title="原文 : Set pool size.">プール・サイズを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Pwvoe"  title="原文: metrics-enabled"><code>metrics-enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.34"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3bJTCI" title="原文 : Enable metrics.">メトリクスの有効化。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.xgZgv"  title="原文: password"><code>password</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.28"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3gHdSJ"  title="原文:: Create password.">パスワードの作成</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1W86Ak"  title="原文: trust-strategy"><code>trust-strategy</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.zUFLM" title="原文 : TrustStrategy (TRUST_ALL_CERTIFICATES, TRUST_CUSTOM_CA_SIGNED_CERTIFICATES, TRUST_SYSTEM_CA_SIGNED_CERTIFICATES)">TrustStrategy (TRUST_ALL_CERTIFICATES, TRUST_CUSTOM_CA_SIGNED_CERTIFICATES, TRUST_SYSTEM_CA_SIGNED_CERTIFICATES)</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1lPXDv" title="原文 : Set trust strategy.">トラスト戦略を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2QKN54.1"  title="原文: uri"><code>uri</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.29"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.18zW4T" title="原文 : Create uri.">URIを作成します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2FqwBE"  title="原文: username"><code>username</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.30"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4PkXxz" title="原文 : Create username.">ユーザー名を作成します。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
