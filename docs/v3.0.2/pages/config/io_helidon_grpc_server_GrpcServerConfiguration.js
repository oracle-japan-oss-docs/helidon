<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.4XWNUO" title="原文 : GrpcServerConfiguration (grpc.server) Configuration">GrpcServerConfiguration (grpc.server)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2H6mAf" title="原文 : Type: io.helidon.grpc.server.GrpcServerConfiguration">タイプ: <a href="./apidocs/io.helidon.grpc.server/io/helidon/grpc/server/GrpcServerConfiguration.html" target="_blank">io.helidon.grpc.server.GrpcServerConfiguration</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.16"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.16" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.17"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.17"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.17"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.17"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.309fiz.4"  title="原文: name"><code>name</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.21"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.18ZckH"  title="原文: grpc.server"><code>grpc.server</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.nAZ49" title="原文 : Set the name of the gRPC server.">gRPCサーバーの名前を設定します。</span></p>

<markup>Configuration key: `name`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3d0DZR"  title="原文: native"><code>native</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.15"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.5"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1XATWJ" title="原文 : Specify if native transport should be used.">ネイティブ・トランスポートを使用するかどうかを指定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2OXzp4.1"  title="原文: port"><code>port</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.15"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.1eyLYf.1"  title="原文: 1408"><code>1408</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4JZRAy.spl1" title="原文 : Sets server port.">サーバー・ポートを設定します。</span> <span class="merged" id="all.4JZRAy.spl2" title="原文 : If port is 0 or less then any available ephemeral port will be used.">ポートが<code>0</code>以下の場合は、使用可能なエフェメラル・ポートが使用されます。</span> </p>

<markup>Configuration key: `port`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4ZTtEy"  title="原文: workers"><code>workers</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.16"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.lxuei"  title="原文: Number of processors available to the JVM"><code>Number of processors available to the JVM</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XV1dm.spl1" title="原文 : Sets a count of threads in pool used to process HTTP requests.">HTTPリクエストの処理に使用されるプール内のスレッド数を設定します。</span> <span class="merged" id="all.2XV1dm.spl2" title="原文 : Default value is CPU_COUNT * 2.">デフォルト値は<code>CPU_COUNT * 2</code>です。</span> </p>

<markup>Configuration key: `workers`</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
