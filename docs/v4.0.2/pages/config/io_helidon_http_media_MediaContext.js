<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1o2CdS" title="原文 : MediaContext (http.media) Configuration">MediaContext (http.media)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1qlfrL" title="原文 : Type: io.helidon.http.media.MediaContext">タイプ: <a href="/apidocs/io.helidon.http.media/io/helidon/http/media/MediaContext.html" target="_blank">io.helidon.http.media.MediaContext</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.22"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.22" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.23"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.23"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.23"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.23"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.VnZsY"  title="原文: fallback"><code>fallback</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3UN167" title="原文 : MediaContext"><router-link to="/config/io_helidon_http_media_MediaContext">MediaContext</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3eKdfy" title="原文 : Existing context to be used as a fallback for this context.">このコンテキストのフォールバックとして使用される既存のコンテキスト。</span></p>

<markup>@return media context to use if supports configured on this request cannot provide a good result</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2ucwCu"  title="原文: media-supports"><code>media-supports</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1OcEwJ" title="原文 : io.helidon.http.media.MediaSupport[] (service provider interface)">io.helidon.http.media.MediaSupport[] (サービス・プロバイダ・インタフェース)</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3t67Rj.spl1" title="原文 : Media supports to use.">メディアは利用を支えています。</span> <span class="merged" id="all.3t67Rj.spl2" title="原文 : This instance has priority over provider(s) discovered by service loader.">このインスタンスは、サービス・ローダーによって検出されたプロバイダよりも優先されます。</span> <span class="merged" id="all.3t67Rj.spl3" title="原文 : The providers are used in order of calling this method, where the first support added is the first one to be queried for readers and writers.">プロバイダは、このメソッドを呼び出す順に使用されます。ここで、最初に追加されたサポートは、リーダーおよびライターに対して問い合せる最初のサポートです。</span> </p>

<markup>@return media supports</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3Tg34i"  title="原文: register-defaults"><code>register-defaults</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.29"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.15"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2Gi2j" title="原文 : Should we register defaults of Helidon, such as String media support.">Stringメディア・サポートなど、Helidonのデフォルトを登録する必要があります。</span></p>

<markup>@return whether to register default media supports</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
