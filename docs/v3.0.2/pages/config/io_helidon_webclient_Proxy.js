<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.JE13O" title="原文 : Proxy (webclient) Configuration">Proxy (webclient)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1n4gUj" title="原文 : Type: io.helidon.webclient.Proxy">タイプ: <a href="./apidocs/io.helidon.webclient/io/helidon/webclient/Proxy.html" target="_blank">io.helidon.webclient.Proxy</a></span></p>
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
<div class="block-title"><span class="merged" id="all.271SGn.57" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.64"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.64"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.64"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.64"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2N9hZv.6"  title="原文: host"><code>host</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.163"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4a1rui" title="原文 : Sets a new host value.">新しいホスト値を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3pVVNM"  title="原文: no-proxy"><code>no-proxy</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.19"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2rb0Sb" title="原文 : Configure a host pattern that is not going through a proxy.">プロキシを通過しないホスト・パターンを構成します。</span></p>

<markup>Options are:</markup>
<ul class="ulist">
<li>
<p><span class="merged" id="all.2U6uN3" title="原文 : IP Address, such as 192.168.1.1">IPアドレス(<code>192.168.1.1</code>など)</span></p>

</li>
<li>
<p><span class="merged" id="all.3VMLXa" title="原文 : IP V6 Address, such as [2001:db8:85a3:8d3:1319:8a2e:370:7348]">IP V6アドレス(<code>[2001:db8:85a3:8d3:1319:8a2e:370:7348]</code>など)</span></p>

</li>
<li>
<p><span class="merged" id="all.3QrHmM" title="原文 : Hostname, such as localhost">ホスト名(<code>localhost</code>など)</span></p>

</li>
<li>
<p><span class="merged" id="all.3AH0oS" title="原文 : Domain name, such as helidon.io">ドメイン名(<code>helidon.io</code>など)</span></p>

</li>
<li>
<p><span class="merged" id="all.4JRtj8" title="原文 : Domain name and all sub-domains, such as .helidon.io (leading dot)">ドメイン名およびすべてのサブドメイン(<code>.helidon.io</code> (先頭のドット)など)</span></p>

</li>
<li>
<p><span class="merged" id="all.4WDHhY" title="原文 : Combination of all options from above with a port, such as .helidon.io:80">上記のすべてのオプションをポート(<code>.helidon.io:80</code>など)と組み合わせます</span></p>

</li>
</ul>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.xgZgv.1"  title="原文: password"><code>password</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.164"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3uy2h9" title="原文 : Sets a new password for the proxy.">プロキシの新しいパスワードを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OXzp4.7"  title="原文: port"><code>port</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.27"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4dX5Fa" title="原文 : Sets a port value.">ポート値を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2SYAnU.1"  title="原文: type"><code>type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3buTGS" title="原文 : ProxyType (NONE, SYSTEM, HTTP, SOCKS_4, SOCKS_5)">ProxyType (なし、システム、HTTP、SOCKS_4、SOCKS_5)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.ERQXh"  title="原文: HTTP"><code>HTTP</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2QVbyA" title="原文 : Sets a new proxy type.">新しいプロキシ・タイプを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.9Q5iT"  title="原文: use-system-selector"><code>use-system-selector</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.88"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.31"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2g3C74" title="原文 : Configure proxy from environment variables and system properties.">環境変数およびシステム・プロパティからプロキシを構成します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2FqwBE"  title="原文: username"><code>username</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.165"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3Pb38o" title="原文 : Sets a new username for the proxy.">プロキシの新しいユーザー名を設定します。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
