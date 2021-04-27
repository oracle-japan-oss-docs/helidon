<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3ue7W1" title="原文 : gRPC Server Configuration">gRPCサーバー構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.bEWpC" title="原文 : Configure the gRPC Server using the Helidon configuration framework, either programmatically or via a configuration file.">Helidon構成フレームワークを使用して、プログラムまたは構成ファイルを介してgRPCサーバーを構成します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_configuring_the_grpc_server_in_your_code"><span class="merged" id="all.3zFIQs" title="原文 : Configuring the gRPC Server in your code">コードでのgRPCサーバーの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.2NJkzj" title="原文 : The easiest way to configure the gRPC Server is in your application code.">gRPCサーバーを構成する最も簡単な方法は、アプリケーション・コードを使用することです。</span></p>

<markup
lang="java"

>GrpcServerConfiguration configuration = GrpcServerConfiguration.builder()
                                                       .port(8080)
                                                       .build();
GrpcServer grpcServer = GrpcServer.create(configuration, routing);</markup>

</div>

<h2 id="_configuring_the_grpc_server_in_a_configuration_file"><span class="merged" id="all.4UL9y" title="原文 : Configuring the gRPC Server in a configuration file">構成ファイルでのgRPCサーバーの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.4bpKp9" title="原文 : You can also define the configuration in a file.">ファイルで構成を定義することもできます。</span></p>

<markup
lang="hocon"
title="GrpcServer構成ファイル<code>application.yaml</code>"
>grpcserver:
  port: 3333</markup>

<p><span class="merged" id="all.1Cq2QG" title="原文 : Then, in your application code, load the configuration from that file.">次に、アプリケーション・コードで、そのファイルから構成をロードします。</span></p>

<markup
lang="java"
title="クラスパスにある<code>application.conf</code>ファイルを使用したGrpcServerの初期化"
>GrpcServerConfiguration configuration = GrpcServerConfiguration.create(
        Config.builder()
              .sources(classpath("application.conf"))
              .build());

GrpcServer grpcServer = GrpcServer.create(configuration, routing);</markup>

</div>

<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.9"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<p><span class="merged" id="all.4SHv5W" title="原文 : See all configuration options here.">すべての構成オプション<a href="./apidocs/io.helidon.grpc.server/io/helidon/grpc/server/GrpcServerConfiguration.html" id="" target="_blank" >「こちら」</a>を参照してください。</span></p>

</div>
</doc-view>
