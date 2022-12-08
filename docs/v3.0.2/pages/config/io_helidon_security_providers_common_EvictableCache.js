<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.43qt31" title="原文 : EvictableCache (security.providers.common) Configuration">EvictableCache (security.providers.common)の構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2vIEIF" title="原文 : Type: io.helidon.security.providers.common.EvictableCache">タイプ: <a href="./apidocs/io.helidon.security.providers.common/io/helidon/security/providers/common/EvictableCache.html" target="_blank">io.helidon.security.providers.common.EvictableCache</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.33"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.34" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.40"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.40"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.40"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.40"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.YIm08"  title="原文: cache-enabled"><code>cache-enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.43"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.22"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2PAQEm.spl1" title="原文 : If the cacheEnabled is set to false, no caching will be done.">cacheEnabledがfalseに設定されている場合、キャッシュは実行されません。</span> <span class="merged" id="all.2PAQEm.spl2" title="原文 : Otherwise (default behavior) evictable caching will be used.">それ以外の場合は(デフォルトの動作)追出し可能なキャッシュが使用されます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.NvDoI"  title="原文: cache-evict-delay-millis"><code>cache-evict-delay-millis</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.10"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xzmO"  title="原文: 60000"><code>60000</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3IdGho" title="原文 : Delay from the creation of the cache to first eviction">キャッシュの作成から最初の削除までの遅延</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3wFy40"  title="原文: cache-evict-period-millis"><code>cache-evict-period-millis</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.11"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3S5D4H"  title="原文: 300000"><code>300000</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.JhnB" title="原文 : How often to evict records">レコードを削除する頻度</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4VkSiJ"  title="原文: cache-overall-timeout-millis"><code>cache-overall-timeout-millis</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.12"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2vr5rf"  title="原文: 3600000"><code>3600000</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.oXgzv" title="原文 : Configure record timeout since its creation.">作成以降にレコード・タイムアウトを構成します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2tyYFp"  title="原文: cache-timeout-millis"><code>cache-timeout-millis</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.13"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2vr5rf.1"  title="原文: 3600000"><code>3600000</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.B09Ce" title="原文 : Configure record timeout since last access.">最後のアクセス以降にレコード・タイムアウトを構成します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3DFIYN"  title="原文: evictor-class"><code>evictor-class</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.oZPHH.1"  title="原文:: Class">クラス</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1FyLqF.spl1" title="原文 : Configure evictor to check if a record is still valid.">エビクタを構成して、レコードが有効かどうかをチェックします。</span> <span class="merged" id="all.1FyLqF.spl2" title="原文 : This should be a fast way to check, as it is happening in a ConcurrentHashMap#forEachKey(long, Consumer).">これは、ConcurrentHashMap#forEachKey(long, Consumer)で発生するため、確認の高速な方法です。</span> <span class="merged" id="all.1FyLqF.spl3" title="原文 : This is also called during all get and remove operations to only return valid records.">これは、すべての取得および削除操作中にコールされ、有効なレコードのみを返します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.28bxzM"  title="原文: max-size"><code>max-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.14"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42iix4"  title="原文: 100000"><code>100000</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1nR5qa" title="原文 : Configure maximal cache size.">最大キャッシュ・サイズを構成します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4PSV1k"  title="原文: parallelism-threshold"><code>parallelism-threshold</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15f2Ma.15"  title="原文:: long">long</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.280ErD.4"  title="原文: 10000"><code>10000</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.41l0Ej" title="原文 : Configure parallelism threshold.">並列度しきい値を構成します。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
