<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.5JV1J" title="原文 : gRPC Client Configuration">gRPCクライアント構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2rPYVY" title="原文 : Configure the gRPC client using the Helidon configuration framework, either programmatically or via a configuration file.">Helidon構成フレームワークを使用して、プログラムまたは構成ファイルを介してgRPCクライアントを構成します。</span></p>

<p><span class="merged" id="all.4Iq7AG" title="原文 : As mentioned earlier, creating a GrpcServiceClient involves:">前述のように、<code>GrpcServiceClient</code>の作成には次の作業が含まれます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.125IVt.1" title="原文 : Creating a ClientServiceDescriptor which describes the methods in the service that this client can invoke.">このクライアントが呼び出せるサービスのメソッドを記述する<code>ClientServiceDescriptor</code>の作成。</span>

</li>
<li>
<span class="merged" id="all.2HVobl.1" title="原文 : Creating a gRPC Channel through which the client communicates with the server.">クライアントがサーバーとの通信に使用するgRPC <code>Channel</code>の作成。</span>

</li>
</ol></dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_configuring_the_clientservicedescriptor"><span class="merged" id="all.3scOM1" title="原文 : Configuring the ClientServiceDescriptor">ClientServiceDescriptorの構成</span></h2>
<div class="section">

<h3 id="_configuring_the_clientservicedescriptor_in_your_code"><span class="merged" id="all.4242zP" title="原文 : Configuring the ClientServiceDescriptor in your code">コードでのClientServiceDescriptorの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.1WLzXx" title="原文 : The only way to configure the ClientServiceDescriptor is in your application code."><code>ClientServiceDescriptor</code>を構成する唯一の方法は、アプリケーション・コード内で行うことです。</span></p>

<markup
lang="java"

>ClientServiceDescriptor descriptor = ClientServiceDescriptor +
        .builder(HelloService.class)    // (1)
        .unary("SayHello")              // (2)
        .build();                       // (3)</markup>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.keDUt" title="原文 : Create a builder for a ClientServiceDescriptor for the HelloService."><code>HelloService</code>用の<code>ClientServiceDescriptor</code>のビルダーを作成します。</span>

</li>
<li>
<span class="merged" id="all.g1yMK.spl1" title="原文 : Specify that the HelloService has a unary method named SayHello."><code>HelloService</code>に<code>SayHello</code>という名前の単項メソッドがあることを指定します。</span> <span class="merged" id="all.g1yMK.spl2" title="原文 : There are many other methods in this class that allow you to define ClientStreaming, ServerStreaming and Bidirectional methods.">このクラスには、<code>ClientStreaming</code>、<code>ServerStreaming</code>および<code>Bidirectional</code>メソッドを定義できる他の多くのメソッドがあります。</span> 

</li>
<li>
<span class="merged" id="all.40tQ0Y" title="原文 : Build the ClientServiceDescriptor."><code>ClientServiceDescriptor</code>をビルドします。</span>

</li>
</ol>
</div>
</div>

<h2 id="_configuring_the_grpc_channel"><span class="merged" id="all.ak6Vd" title="原文 : Configuring the gRPC Channel">gRPCチャネルの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.18rBuO" title="原文 : gRPC allows various channel configurations (deadlines, retries, interceptors etc.)">gRPCでは、様々なチャネル構成(期限、再試行、インターセプタなど)が可能です。)</span></p>

<p><span class="merged" id="all.3lRe86" title="原文 : Please refer to gRPC documentation: https://grpc.io/grpc-java/javadoc/io/grpc/ManagedChannelBuilder.html.">gRPCのドキュメントを参照してください : <a href="https://grpc.io/grpc-java/javadoc/io/grpc/ManagedChannelBuilder.html" id="" target="_blank" >https://grpc.io/grpc-java/javadoc/io/grpc/ManagedChannelBuilder.html</a>。</span></p>

</div>
</doc-view>
