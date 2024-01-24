<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1QsayB" title="原文 : ConfigObserver (webserver.observe.config) Configuration">ConfigObserver (webserver.observe.config)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1bBu9I" title="原文 : Type: io.helidon.webserver.observe.config.ConfigObserver">タイプ: <a href="/apidocs/io.helidon.webserver.observe.config/io/helidon/webserver/observe/config/ConfigObserver.html" target="_blank">io.helidon.webserver.observe.config.ConfigObserver</a></span></p>

<p><span class="merged" id="all.31kiUh.19" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.26gZXx"  title="原文: io.helidon.webserver.observe.spi.ObserveProvider"><code>io.helidon.webserver.observe.spi.ObserveProvider</code></span></p>

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


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.91"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.86" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.93"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.93"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.93"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.93"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2QMdx0.1"  title="原文: endpoint"><code>endpoint</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.182"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4B7l3u"  title="原文: config"><code>config</code></span></td>
<td class=""><doc-view>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2r7Cat.2"  title="原文: permit-all"><code>permit-all</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.144"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.36ibeX" title="原文 : Permit all access, even when not authorized.">認可されていない場合でも、すべてのアクセスを許可します。</span></p>

<markup>@return whether to permit access for anybody</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4J7Xby.1"  title="原文: secrets"><code>secrets</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.29"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.Qbg6x"  title="原文: .*password, .*passphrase, .*secret"><code>.*password, .*passphrase, .*secret</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2aGzlb.spl1" title="原文 : Secret patterns (regular expressions) to exclude from output.">出力から除外するシークレット・パターン(正規表現)。</span> <span class="merged" id="all.2aGzlb.spl2" title="原文 : Any pattern that matches a key will cause the output to be obfuscated and not contain the value.">キーと一致するパターンはすべて、出力が不明瞭化され、値が含まれません。</span> </p>

<markup>Patterns always added:</markup>
<ul class="ulist">
<li>
<p><span class="merged" id="all.2GbO2k"  title="原文: .*password"><code>.*password</code></span></p>

</li>
<li>
<p><span class="merged" id="all.1XtGXd"  title="原文: .*passphrase"><code>.*passphrase</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3Z5y8C"  title="原文: .*secret"><code>.*secret</code></span></p>

</li>
</ul>

<p><span class="merged" id="all.2b8q5z" title="原文 : @return set of regular expression patterns for keys, where values should be excluded from output">キーの正規表現パターンの@returnセット。値は出力から除外する必要があります</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
