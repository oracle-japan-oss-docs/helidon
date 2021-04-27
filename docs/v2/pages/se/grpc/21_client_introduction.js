<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1ub9oD" title="原文 : gRPC Client Introduction">gRPCクライアントの概要</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1prDLd.spl1" title="原文 : Helidon gRPC Client provides a framework for creating gRPC client applications.">Helidon gRPCクライアントは、<a href="http://grpc.io/" id="" target="_blank" >gRPC</a>クライアント・アプリケーションを作成するためのフレームワークを提供します。</span> <span class="merged" id="all.1prDLd.spl2" title="原文 : The client framework allows a uniform way to access gRPC services that use either Protobuf or some custom serialization format.">クライアント・フレームワークを使用すると、Protobufまたは一部のカスタム直列化フォーマットを使用するgRPCサービスに均一にアクセスできます。</span> <span class="merged" id="all.1prDLd.spl3" title="原文 : It also allows access to gRPC services that use either Java serialization, Protobuf or a custom serialization format.">また、Java直列化、Protobufまたはカスタム直列化フォーマットのいずれかを使用するgRPCサービスにアクセスできます。</span> </p>

<p><span class="merged" id="all.zOacr.spl1" title="原文 : The class GrpcServiceClient acts as the client object for accessing a gRPC service.">クラス<code>GrpcServiceClient</code>は、gRPCサービスにアクセスするためのクライアント・オブジェクトとして機能します。</span> <span class="merged" id="all.zOacr.spl2" title="原文 : Creating a GrpcServiceClient involves:"><code>GrpcServiceClient</code>の作成には、次の作業が含まれます:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.125IVt" title="原文 : Creating a ClientServiceDescriptor which describes the methods in the service that this client can invoke.">このクライアントが呼び出せるサービスのメソッドを記述する<code>ClientServiceDescriptor</code>の作成。</span>

</li>
<li>
<span class="merged" id="all.2HVobl" title="原文 : Creating a gRPC Channel through which the client communicates with the server.">クライアントがサーバーとの通信に使用するgRPC <code>Channel</code>の作成。</span>

</li>
</ol>
<p><span class="merged" id="all.2urLdn" title="原文 : In later sections in this document, you will see how to customize both ClientServiceDescriptor and the Channel.">このドキュメントの後半の項では、<code>ClientServiceDescriptor</code>と<code>Channel</code>の両方をカスタマイズする方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_maven_coordinates"><span class="merged" id="all.317oeS.11" title="原文 : Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.3Y1dJo.4.spl1" title="原文 : The Managing Dependencies page describes how you should declare dependency management for Helidon applications."><router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>ページでは、Helidonアプリケーションの依存性管理を宣言する方法について説明します。</span> <span class="merged" id="all.3Y1dJo.4.spl2" title="原文 : Then declare the following dependency in your project:">次に、プロジェクトで次の依存性を宣言します:</span> </p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.grpc&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-grpc-client&lt;/artifactId&gt; <span class="conum" data-value="1" />
&lt;/dependency&gt;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.31etcG" title="原文 : Declare dependency on Helidon gRPC Client.">Helidon gRPCクライアントへの依存性を宣言します。</span></li>
</ul>
</div>

<h2 id="_quick_start"><span class="merged" id="all.2FbcJI.2"  title="原文:: Quick Start">クイック・スタート</span></h2>
<div class="section">
<p><span class="merged" id="all.3fkJDd" title="原文 : First, create and run a minimalist HelloService gRPC server application as described in the gRPC Server documentation.">まず、<a href="https://github.com/oracle/helidon/blob/master/docs/src/main/docs/grpc/01_introduction.adoc" id="" target="_blank" >「gRPCサーバー」</a>のドキュメントの説明に従って、<code>HelloService</code> gRPCサーバー・アプリケーションを最小化して実行します。</span></p>

<p><span class="merged" id="all.21UkBP" title="原文 : Assuming that the server is running on port 1408, create a client as follows:">サーバーがポート1408で実行されていると仮定して、次のようにクライアントを作成します:</span></p>

<markup
lang="java"

>public static void main(String[] args) throws Exception {
    ClientServiceDescriptor descriptor = ClientServiceDescriptor.builder(HelloService.class)    // (1)
                                                                .unary("SayHello")              // (2)
                                                                .build();

    Channel channel = ManagedChannelBuilder.forAddress("localhost", 1408)                       // (3)
                                           .usePlaintext()
                                           .build();

    GrpcServiceClient client = GrpcServiceClient.create(channel, descriptor);                   // (4)

    CompletionStage&lt;String&gt; future = client.unary("SayHello", "Helidon gRPC!!");                                // (5)
    System.out.println(future.get());                                                           // (6)

}</markup>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2XAv7Y" title="原文 : Create a ClientServiceDescriptor for the HelloService."><code>HelloService</code>の<code>ClientServiceDescriptor</code>を作成します。</span>

</li>
<li>
<span class="merged" id="all.17bizy.spl1" title="原文 : Add the SayHello unary method to the ClientServiceDescriptor."><code>SayHello</code>単項メソッドを<code>ClientServiceDescriptor</code>に追加します。</span> <span class="merged" id="all.17bizy.spl2" title="原文 : This method, by default, uses Java serialization for marshalling and unmarshalling the request and response values.">このメソッドは、デフォルトで、リクエスト値とレスポンス値のマーシャリングおよびアンマーシャリングにJava直列化を使用します。</span> 

</li>
<li>
<span class="merged" id="all.1BxUfV" title="原文 : Create a gRPC Channel that is communicates with the server that is running in localhost and on port 1408 (using plaintext).">localhostおよびポート1408 (プレーン・テキストを使用)で実行されているサーバーと通信するgRPC <code>Channel</code>を作成します。</span>

</li>
<li>
<span class="merged" id="all.Mo9I8.spl1" title="原文 : Create the GrpcServiceClient that uses the above Channel and ClientServiceDescriptor.">前述の<code>Channel</code>および<code>ClientServiceDescriptor</code>を使用する<code>GrpcServiceClient</code>を作成します。</span> <span class="merged" id="all.Mo9I8.spl2" title="原文 : GrpcClientService represents a client that can be used to define the set of methods described by the specified ClientServiceDescriptor."><code>GrpcClientService</code>は、指定された<code>ClientServiceDescriptor</code>で記述される一連のメソッドを定義するために使用できるクライアントを表します。</span> <span class="merged" id="all.Mo9I8.spl3" title="原文 : In our case, the ClientServiceDescriptor defines one unary method called SayHello.">この場合、<code>ClientServiceDescriptor</code>では、<code>SayHello</code>と呼ばれる単項メソッドが定義されます。</span> 

</li>
<li>
<span class="merged" id="all.2iVIxZ" title="原文 : Invoke the SayHello method which returns a CompletionStage&lt;String&gt;."><code>CompletionStage&lt;String></code>を返す<code>SayHello</code>メソッドを起動します。</span>

</li>
<li>
<span class="merged" id="all.3Toecs" title="原文 : Print the result.">結果を出力します。</span>

</li>
</ol>
<p><span class="merged" id="all.3hew41" title="原文 : The example above creates a very simple client to the gRPC server that by default uses Java serialization to marshall requests and responses.">前述の例では、gRPCサーバーに対して非常に単純なクライアントが作成され、デフォルトではJava直列化を使用してリクエストとレスポンスがマーシャリングされます。</span></p>

<p><span class="merged" id="all.q7j7z" title="原文 : We will look into deployment of &quot;standard&quot; gRPC services that use Protobuf for request and response marshalling, as well as how you can configure custom marshallers, later in this document.">Protobufを使用してリクエストおよびレスポンスのマーシャリングを行う「標準」gRPCサービスのデプロイメント、およびカスタム・マーシャラの構成方法については、このドキュメントの後半で説明します。</span></p>

</div>
</doc-view>
