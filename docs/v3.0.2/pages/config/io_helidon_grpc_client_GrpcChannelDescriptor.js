<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.42kL7M" title="原文 : GrpcChannelDescriptor (grpc.client) Configuration">GrpcChannelDescriptor (grpc.client)の構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.45402X" title="原文 : Type: io.helidon.grpc.client.GrpcChannelDescriptor">タイプ: <a href="./apidocs/io.helidon.grpc.client/io/helidon/grpc/client/GrpcChannelDescriptor.html" target="_blank">io.helidon.grpc.client.GrpcChannelDescriptor</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.14"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.14" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.15"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.15"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.15"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.15"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2N9hZv"  title="原文: host"><code>host</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.19"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3XTPrz"  title="原文: localhost"><code>localhost</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.46MYtu" title="原文 : Set the host name to connect.">接続するホスト名を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OXzp4"  title="原文: port"><code>port</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.14"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1eyLYf"  title="原文: 1408"><code>1408</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2sPFbS" title="原文 : Set the port that will be used to connect to the server.">サーバーへの接続に使用するポートを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2qMA9k"  title="原文: target"><code>target</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.20"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3d9LAX" title="原文 : Set the target string, which can be either a valid io.grpc.NameResolver compliant URI, or an authority string.">ターゲット文字列を設定します。有効なio.grpc.NameResolver準拠のURIまたは認可文字列のいずれかです。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.49aL8q"  title="原文: tls"><code>tls</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2vOda7" title="原文 : GrpcTlsDescriptor"><router-link to="/config/io_helidon_grpc_core_GrpcTlsDescriptor">GrpcTlsDescriptor</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1txT8H.spl1" title="原文 : Set the GrpcTlsDescriptor.">GrpcTlsDescriptorを設定します。</span> <span class="merged" id="all.1txT8H.spl2" title="原文 : If tlsDescriptor is null or if the tlsDescriptor.isEnabled() is false, then no TLS will be used."><code>tlsDescriptor</code>がnullの場合、または<code>tlsDescriptor.isEnabled()</code>がfalseの場合、TLSは使用されません。</span> </p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
