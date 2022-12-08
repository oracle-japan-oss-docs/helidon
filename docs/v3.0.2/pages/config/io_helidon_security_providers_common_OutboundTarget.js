<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3jUQOI" title="原文 : OutboundTarget (security.providers.common) Configuration">OutboundTarget (security.providers.common)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.29gpW4" title="原文 : Type: io.helidon.security.providers.common.OutboundTarget">タイプ: <a href="./apidocs/io.helidon.security.providers.common/io/helidon/security/providers/common/OutboundTarget.html" target="_blank">io.helidon.security.providers.common.OutboundTarget</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.35"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.1fCXjI.3" title="原文 : Required configuration options"><span>必要な構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.42"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.42"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.42"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.42"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.309fiz.5"  title="原文: name"><code>name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.88"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2rZAes" title="原文 : Configure the name of this outbound target.">このアウトバウンド・ターゲットの名前を構成します。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

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
<th><span class="merged" id="all.2XKMH3.43"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.43"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.43"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.43"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.22HCSo"  title="原文: hosts"><code>hosts</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.12"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.YQRM1.spl1" title="原文 : Add supported host for this target.">このターゲットでサポートされているホストを追加します。</span> <span class="merged" id="all.YQRM1.spl2" title="原文 : May be called more than once to add more hosts.">複数のホストを追加するには、複数回呼び出すことができます。</span> </p>

<markup>Valid examples:</markup>
<ul class="ulist">
<li>
<p><span class="merged" id="all.2uFqEd"  title="原文:: localhost">localhost</span></p>

</li>
<li>
<p><span class="merged" id="all.ZdgDB" title="原文 : www.google.com">www.google.com</span></p>

</li>
<li>
<p><span class="merged" id="all.3wvbEu"  title="原文: 127.0.0.1">127.0.0.1</span></p>

</li>
<li>
<p><span class="merged" id="all.4Ovpk9"  title="原文:: *.oracle.com">*.oracle.com</span></p>

</li>
<li>
<p><span class="merged" id="all.1kwQdo" title="原文 : 192.169..">192.169.<strong>.</strong></span></p>

</li>
<li>
<p><span class="merged" id="all.XLVlN" title="原文 : .google."><strong>.google.</strong></span></p>

</li>
</ul>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3gZuPm"  title="原文: methods"><code>methods</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.13"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3w4U7L.spl1" title="原文 : Add supported method for this target.">このターゲットでサポートされているメソッドを追加します。</span> <span class="merged" id="all.3w4U7L.spl2" title="原文 : May be called more than once to add more methods.">複数のメソッドを追加するために複数回呼び出すことができます。</span> <span class="merged" id="all.3w4U7L.spl3" title="原文 : The method is tested as is ignoring case against the used method.">このメソッドは、使用されたメソッドに対する大/小文字を無視するためテストされます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2v5SbC"  title="原文: paths"><code>paths</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.14"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.F1z3k.spl1" title="原文 : Add supported paths for this target.">このターゲットでサポートされているパスを追加します。</span> <span class="merged" id="all.F1z3k.spl2" title="原文 : May be called more than once to add more paths.">複数のパスを追加するために複数回呼び出すことができます。</span> <span class="merged" id="all.F1z3k.spl3" title="原文 : The path is tested as is against called path, and also tested as a regular expression.">パスは、呼び出されたパスに対してそのままテストされ、正規表現としてテストされます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1bfafF"  title="原文: transport"><code>transport</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.15"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.6ADV9.spl1" title="原文 : Add supported transports for this target.">このターゲットでサポートされているトランスポートを追加します。</span> <span class="merged" id="all.6ADV9.spl2" title="原文 : May be called more than once to add more transports.">トランスポートを追加するために複数回呼び出すことができます。</span> </p>

<markup>Valid examples:</markup>
<ul class="ulist">
<li>
<p><span class="merged" id="all.2lyjLO"  title="原文:: http">http</span></p>

</li>
<li>
<p><span class="merged" id="all.19UH3e"  title="原文:: https">https</span></p>

</li>
</ul>

<p><span class="merged" id="all.2nmbXL" title="原文 : There is no wildcard support">ワイルドカード・サポートはありません</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
