<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3fKPXl" title="原文 : gRPC Server Introduction">gRPCサーバーの概要</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2Sd5Lf" title="原文 : Helidon gRPC Server provides a framework for creating gRPC applications.">Helidon gRPCサーバーは、<a href="http://grpc.io/" id="" target="_blank" >gRPC</a>アプリケーションを作成するためのフレームワークを提供します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_experimental"><span class="merged" id="all.3qlK5J.3"  title="原文:: Experimental">試作</span></h2>
<div class="section">
<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.omcRl" title="原文 : The Helidon gRPC feature is currently experimental and the APIs are subject to changes until gRPC support is stabilized.">Helidon gRPC機能は現在試験的であり、gRPCサポートが安定するまでAPIは変更される可能性があります。</span></p>
</div>
</div>

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.45"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.3JfjiN" title="原文 : To enable gRPC add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">gRPCを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>    &lt;dependency&gt;
        &lt;groupId&gt;io.helidon.grpc&lt;/groupId&gt;
        &lt;artifactId&gt;helidon-grpc-server&lt;/artifactId&gt;
    &lt;/dependency&gt;</markup>

</div>

<h2 id="_quick_start"><span class="merged" id="all.2FbcJI.1"  title="原文:: Quick Start">クイック・スタート</span></h2>
<div class="section">
<p><span class="merged" id="all.4WbR52" title="原文 : Here is the code for a minimalist gRPC application that runs on a default port (1408):">次に、デフォルト・ポート(1408)で実行される最小のgRPCアプリケーションのコードを示します:</span></p>

<markup
lang="java"

>    public static void main(String[] args) throws Exception {
        GrpcServer grpcServer = GrpcServer
                .create(GrpcRouting.builder()
                                .register(new HelloService()) <span class="conum" data-value="1" />
                                .build())
                .start() <span class="conum" data-value="2" />
                .toCompletableFuture()
                .get(10, TimeUnit.SECONDS); // Implement the simplest possible gRPC service. <span class="conum" data-value="3" />

        System.out.println("gRPC Server started at: http://localhost:" + grpcServer.port()); <span class="conum" data-value="4" />
    }

    static class HelloService implements GrpcService { <span class="conum" data-value="5" />
        @Override
        public void update(ServiceDescriptor.Rules rules) {
            rules.unary("SayHello", ((request, responseObserver) -&gt; complete(responseObserver, "Hello " + request))); <span class="conum" data-value="6" />
        }
    }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1Nh6tz" title="原文 : Register gRPC service.">gRPCサービスを登録します。</span></li>
<li data-value="2"><span class="merged" id="all.4MC0LP.1"  title="原文:: Start the server.">サーバーを起動します。</span></li>
<li data-value="3"><span class="merged" id="all.3ZVyyY" title="原文 : Wait for the server to start while throwing possible errors as exceptions.">例外として発生する可能性のあるエラーをスローしている間、サーバーが起動するまで待機します。</span></li>
<li data-value="4"><span class="merged" id="all.LZyih" title="原文 : The server is bound to a default port (1408).">サーバーはデフォルト・ポート(1408)にバインドされています。</span></li>
<li data-value="5"><span class="merged" id="all.46XzQr" title="原文 : Implement the simplest possible gRPC service.">可能なかぎり単純なgRPCサービスを実装します。</span></li>
<li data-value="6"><span class="merged" id="all.3VfwKj" title="原文 : Add unary method HelloService/SayHello to the service definition.">単項メソッド<code>HelloService/SayHello</code>をサービス定義に追加します。</span></li>
</ul>
<p><span class="merged" id="all.1VZmZO.spl1" title="原文 : The example above deploys a very simple service to the gRPC server that by default uses Java serialization to marshall requests and responses.">前述の例では、デフォルトでJava直列化を使用してリクエストとレスポンスをマーシャリングするgRPCサーバーに、非常に単純なサービスをデプロイします。</span> <span class="merged" id="all.1VZmZO.spl2" title="原文 : We will look into deployment of &quot;standard&quot; gRPC services that use Protobuf for request and response marshalling, as well as how you can configure custom marshallers, later in this document.">Protobufを使用してリクエストおよびレスポンスのマーシャリングを行う「標準」gRPCサービスのデプロイメント、およびカスタム・マーシャラの構成方法については、このドキュメントの後半で説明します。</span> </p>

</div>
</doc-view>
