<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1vYFeS" title="原文 : AllowList (common.configurable) Configuration">AllowList (common.configurable)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3uPsKh" title="原文 : Type: io.helidon.common.configurable.AllowList">タイプ: <a href="/apidocs/io.helidon.common.configurable/io/helidon/common/configurable/AllowList.html" target="_blank">io.helidon.common.configurable.AllowList</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4Tg91e"  title="原文: allow.all"><code>allow.all</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3AtYEa.spl1" title="原文 : Allows all strings to match (subject to &quot;deny&quot; conditions).">すべての文字列が一致することを許可します(「拒否」条件に従う)。</span> <span class="merged" id="all.3AtYEa.spl2" title="原文 : An allow.all setting of false does not deny all strings but rather represents the absence of a universal match, meaning that other allow and deny settings determine the matching outcomes."><code>false</code>の<code>allow.all</code>設定は、すべての文字列を拒否するのではなく、ユニバーサル一致がないことを表します。つまり、他の許可設定と拒否設定によって一致する結果が決定されます。</span> </p>

<markup>@return whether to allow all strings to match (subject to "deny" conditions)</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.111Xlr"  title="原文: allow.exact"><code>allow.exact</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1FivvR" title="原文 : Exact strings to allow.">許可する正確な文字列。</span></p>

<markup>@return exact strings to allow</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Wd5ok"  title="原文: allow.pattern"><code>allow.pattern</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3sTt8E" title="原文 : Pattern[]">Pattern[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1J47D6" title="原文 : Patterns specifying strings to allow.">許可する文字列を指定するパターン。</span></p>

<markup>@return patterns which allow matching</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.CkVgD"  title="原文: allow.prefix"><code>allow.prefix</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.1"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.iGBbN" title="原文 : Prefixes specifying strings to allow.">許可する文字列を指定するプレフィクス。</span></p>

<markup>@return prefixes which allow matching</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1fvydx"  title="原文: allow.suffix"><code>allow.suffix</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.2"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.39GGxl" title="原文 : Suffixes specifying strings to allow.">許可する文字列を指定するサフィクス。</span></p>

<markup>@return suffixes which allow matching</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3D8cT2"  title="原文: deny.exact"><code>deny.exact</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.3"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3eWIjf" title="原文 : Exact strings to deny.">否定する文字列。</span></p>

<markup>@return exact strings to allow</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.rDtYO"  title="原文: deny.pattern"><code>deny.pattern</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3sTt8E.1" title="原文 : Pattern[]">Pattern[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1l5KOj" title="原文 : Patterns specifying strings to deny.">拒否する文字列を指定するパターン。</span></p>

<markup>@return patterns which deny matching</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.NF5SO"  title="原文: deny.prefix"><code>deny.prefix</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.4"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2jrFnf" title="原文 : Prefixes specifying strings to deny.">拒否する文字列を指定するプレフィクス。</span></p>

<markup>@return prefixes which deny matching</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1G5xjY"  title="原文: deny.suffix"><code>deny.suffix</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.5"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2vKwAm" title="原文 : Suffixes specifying strings to deny.">拒否する文字列を指定するサフィクス。</span></p>

<markup>@return suffixes which deny matching</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
