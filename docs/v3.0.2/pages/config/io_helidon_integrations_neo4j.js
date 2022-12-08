<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>

<p><span class="merged" id="all.1b5TJL" title="原文 : MicroProfile configuration options:">MicroProfile構成オプション:</span></p>


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
<th><span class="merged" id="all.2XKMH3.20"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.20"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.20"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.20"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4a3VL7"  title="原文: mp.jwt.verify.publickey"><code>mp.jwt.verify.publickey</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.26"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.DDbiB" title="原文 : The property allows the Public Verification Key text itself to be supplied as a string.">このプロパティを使用すると、パブリック検証キーのテキスト自体を文字列として指定できます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1WXssY"  title="原文: authentication.username"><code>authentication.username</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.27"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.2A8v34" title="原文 : Neo4j authentication user name">Neo4j認証ユーザー名</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.WtOtD"  title="原文: authentication.password"><code>authentication.password</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.28"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.4Ga1DY" title="原文 : Neo4j authentication password">Neo4j認証パスワード</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2XPsCf"  title="原文: authentication.enabled"><code>authentication.enabled</code></span></td>
<td class=""><span class="merged" id="all.2XHIO8.17"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.3ixKUT"  title="原文:: TRUE">TRUE</span></td>
<td class=""><span class="merged" id="all.4FEXtF" title="原文 : If Neo4j authentication is enabled">Neo4j認証が有効な場合</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1TXjt2"  title="原文: encrypted"><code>encrypted</code></span></td>
<td class=""><span class="merged" id="all.2XHIO8.18"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.42TGIi"  title="原文:: FALSE">FALSE</span></td>
<td class=""><span class="merged" id="all.xu2eO" title="原文 : If Neo4j encryption is enabled">Neo4j暗号化が有効な場合</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3JhEzm"  title="原文: pool.metricsEnabled"><code>pool.metricsEnabled</code></span></td>
<td class=""><span class="merged" id="all.2XHIO8.19"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.42TGIi.1"  title="原文:: FALSE">FALSE</span></td>
<td class=""><span class="merged" id="all.3U5KeF" title="原文 : If Neo4J metrics is enabled">Neo4Jメトリクスが有効な場合</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Pp3Sd"  title="原文: pool.logLeakedSessions"><code>pool.logLeakedSessions</code></span></td>
<td class=""><span class="merged" id="all.2XHIO8.20"  title="原文:: boolean">boolean</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.8iRXq" title="原文 : Log leaking sessions">ログ漏洩セッション</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1awMji"  title="原文: pool.maxConnectionPoolSize"><code>pool.maxConnectionPoolSize</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.29"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.EXCjv"  title="原文:: Maximum connection pool size">最大接続プール・サイズ</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.IFbRP"  title="原文: pool.idleTimeBeforeConnectionTest"><code>pool.idleTimeBeforeConnectionTest</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.30"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.2zLhru" title="原文 : Idle time before connection test">接続テスト前のアイドル時間</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ruIFO"  title="原文: pool.maxConnectionLifetime"><code>pool.maxConnectionLifetime</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.31"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.20YsNB" title="原文 : Connection lifetime in seconds">接続存続期間(秒)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.fdY3y"  title="原文: pool.connectionAcquisitionTimeout"><code>pool.connectionAcquisitionTimeout</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.32"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.gkVi9" title="原文 : Connection Acquisition Timeout">接続取得タイムアウト</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4W99aG"  title="原文: trustsettings.trustStrategy"><code>trustsettings.trustStrategy</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.33"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.1Ia346" title="原文 : Trust Strategy: Trust All certificates, TRUST_ALL_CERTIFICATES, Trust custom certificates - TRUST_CUSTOM_CA_SIGNED_CERTIFICATES, Trust system CA - TRUST_SYSTEM_CA_SIGNED_CERTIFICATES">トラスト戦略: すべての証明書をトラストする、<code>TRUST_ALL_CERTIFICATES</code>、カスタム証明書をトラスト - <code>TRUST_CUSTOM_CA_SIGNED_CERTIFICATES</code>、トラスト・システムCA - <code>TRUST_SYSTEM_CA_SIGNED_CERTIFICATES</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3zNSlL"  title="原文: trustsettings.certificate"><code>trustsettings.certificate</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.34"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.1NJNei" title="原文 : Path to trusted certificate">トラストできる証明書へのパス</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.38j2vD"  title="原文: trustsettings.hostnameVerificationEnabled"><code>trustsettings.hostnameVerificationEnabled</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.35"  title="原文:: string">文字列</span></td>
<td class=""><span class="merged" id="all.42TGIi.2"  title="原文:: FALSE">FALSE</span></td>
<td class=""><span class="merged" id="all.1leFNQ" title="原文 : If hostname verification is enabled.">ホスト名検証が有効な場合。</span></td>
</tr>
</tbody>
</table>
</div>

</doc-view>
