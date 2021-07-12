<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3dtAxi" title="原文 : gRPC MicroProfile Clients">gRPC MicroProfileクライアント</span></dt>
<dd slot="desc"><p><span class="merged" id="all.26OnTM.spl1" title="原文 : Building Java gRPC clients using the Helidon MP gRPC APIs is very simple and removes a lot of the boiler plate code typically associated to more traditional approaches to writing gRPC Java clients.">Helidon MP gRPC APIを使用したJava gRPCクライアントのビルドは非常に簡単で、gRPC Javaクライアントを記述するための従来のアプローチにより多くのボイラープレート・コードが削除されます。</span> <span class="merged" id="all.26OnTM.spl2" title="原文 : At it simplest a gRPC Java client can be written using nothing more than a suitably annotated interface.">gRPC Javaクライアントは、もっとも簡単に記述できるのは、適切に注釈が付けられたインタフェースだけです。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.11" title="原文 : Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.2KJXSs" title="原文 : To enable gRPC MicroProfile Clients add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">gRPC MicroProfileクライアントを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.grpc&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-grpc-client&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_building_a_grpc_client"><span class="merged" id="all.cbths" title="原文 : Building a gRPC Client">gRPCクライアントのビルド</span></h2>
<div class="section">
<p><span class="merged" id="all.3ocz0P" title="原文 : There are a few steps to building and using a gRPC client in Helidon MP.">Helidon MPでgRPCクライアントをビルドおよび使用するには、いくつかのステップがあります。</span></p>

<p><span class="merged" id="all.1Jke62" title="原文 : As discussed in the section on Server-Side Services there are four different types of gRPC method."><router-link @click.native="this.scrollFix('#grpc/32_mp_server_side_services.adoc')" to="#grpc/32_mp_server_side_services.adoc">「サーバー側サービス」</router-link>の項で説明されているように、gRPCメソッドには4つの異なるタイプがあります。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.qaA7x.1" title="原文 : Unary - a simple method with at most a single request value and returning at most a single response value.">単項 - 最大で単一のリクエスト値を持ち、最大で単一のレスポンス値を返す単純なメソッド。</span></p>

</li>
<li>
<p><span class="merged" id="all.23vi42.1" title="原文 : Server Streaming - a method that takes at most a single request value but may return zero or more response values.">サーバー・ストリーム - 最大で単一のリクエスト値を取り、ゼロ個以上のレスポンス値を返すことができるメソッド。</span></p>

</li>
<li>
<p><span class="merged" id="all.1q6III.1" title="原文 : Client Streaming - a request that takes one or more request values and returns at most one response value.">クライアント・ストリーミング - 1つ以上のリクエスト値を取り、最大1つのレスポンス値を返すリクエスト。</span></p>

</li>
<li>
<p><span class="merged" id="all.3E2LNR.1" title="原文 : Bi-directional Streaming - a method that can take one or more request values and return zero or more response values.">双方向ストリーミング - 1つ以上のリクエスト値を取り、ゼロ個以上のレスポンス値を返すことができるメソッド。</span></p>

</li>
</ul>
<p><span class="merged" id="all.1wP9Y6" title="原文 : An as with the server-side APIS, the Helidon MP gRPC client APIs support a number of different method signatures for each of the different gRPC method types.">サーバー側APIと同様に、Helidon MP gRPCクライアントAPIは、様々なgRPCメソッド・タイプごとに様々なメソッド・シグネチャをサポートしています。</span></p>


<h3 id="_the_client_service_interface"><span class="merged" id="all.2k8oYh" title="原文 : The Client Service Interface">クライアント・サービス・インタフェース</span></h3>
<div class="section">
<p><span class="merged" id="all.1uMpe7" title="原文 : The next step is to produce an interface with the service methods that the client requires.">次のステップでは、クライアントが必要とするサービス・メソッドとのインタフェースを生産します。</span></p>

<p><span class="merged" id="all.3yE7uD" title="原文 : For example, suppose we have a simple server side service that has a unary method to convert a string to uppercase.">たとえば、文字列を大文字に変換する単項メソッドを持つ単純なサーバー側サービスがあるとします。</span></p>

<markup
lang="java"
title="簡易gRPCサービス"
>@ApplicationScoped
@io.helidon.microprofile.grpc.core.Grpc
public interface StringService {

    @io.helidon.microprofile.grpc.core.Unary
    public String upper(String s) {
        return s == null ? null : s.toUpperCase();
    }
}</markup>

<p><span class="merged" id="all.1RSFTP.spl1" title="原文 : The service has been written using the Helidon MP APIs but could just as easily be a traditional gRPC Java service generated from Protobuf files.">このサービスはHelidon MP APIを使用して記述されていますが、Protobufファイルから生成された従来のgRPC Javaサービスと同じくらい簡単になる可能性があります。</span> <span class="merged" id="all.1RSFTP.spl2" title="原文 : The client API is agnostic of the server side implementation, it only cares about the method type, the request and response types and the type of Marshaller used to serialize the request and response.">クライアントAPIはサーバー側の実装に依存せず、メソッド・タイプ、リクエスト・タイプとレスポンス・タイプ、およびリクエストとレスポンスの直列化に使用されるMarshallerのタイプについてのみ認識します。</span> </p>

<p><span class="merged" id="all.FiAqg" title="原文 : To write a client for the StringService all that is required is an interface.">StringServiceのクライアントを記述するために必要なのは、インタフェースのみです。</span></p>

<markup
lang="java"
title="簡易gRPCサービス"
>@ApplicationScoped
@io.helidon.microprofile.grpc.core.Grpc
public interface StringService {

    @io.helidon.microprofile.grpc.core.Unary
    public String upper(String s);
}</markup>

<p><span class="merged" id="all.28nQpF.spl1" title="原文 : There is no need to write any code to implement the client.">クライアントを実装するためにコードを記述する必要はありません。</span> <span class="merged" id="all.28nQpF.spl2" title="原文 : The Helidon MP gRPC APIs will create a dynamic proxy for the interface using the information from the annotations and method signatures.">Helidon MP gRPC APIは、注釈およびメソッド・シグネチャからの情報を使用して、インタフェースの動的プロキシを作成します。</span> </p>

<p><span class="merged" id="all.1g9AOY" title="原文 : The interface in the example above used the same method signature as the server but this does not have to be the case, the interface could have used any supported signature for a unary method, so for example it could just have easily been the standard unary method signature:">前述の例のインタフェースでは、サーバーと同じメソッド・シグネチャが使用されていましたが、必ずしもそうである必要はありません。たとえば、インタフェースでは、サポートされている任意のシグネチャを単項メソッドに使用できるため、単純に標準の単項メソッド・シグネチャにすることができます:</span></p>

<markup
lang="java"
title="簡易gRPCサービス"
>@ApplicationScoped
@io.helidon.microprofile.grpc.core.Grpc
public interface StringService {

    @io.helidon.microprofile.grpc.core.Unary
    public void upper(String s, StreamObserver&lt;String&gt; response);
}</markup>

<p><span class="merged" id="all.2h5Cqj" title="原文 : We could also have made the client asynchronous by using one of the async method signatures:">非同期メソッド・シグネチャのいずれかを使用して、クライアントを非同期にすることもできます:</span></p>

<markup
lang="java"
title="簡易gRPCサービス"
>@ApplicationScoped
@io.helidon.microprofile.grpc.core.Grpc
public interface StringService {

    @io.helidon.microprofile.grpc.core.Unary
    public CompletableFuture&lt;String&gt; upper(String s);
}</markup>

</div>

<h3 id="_configuring_channels"><span class="merged" id="all.2BCCpb"  title="原文:: Configuring Channels">チャネルの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.xmr4W.spl1" title="原文 : For a gRPC client to connect to a server it requires a Channel.">gRPCクライアントがサーバーに接続するには、チャネルが必要です。</span> <span class="merged" id="all.xmr4W.spl2" title="原文 : The Helidon MP gRPC APIs provide a way to inject channels into CDI beans that require them.">Helidon MP gRPC APIは、チャネルを必要とするCDI beanにチャネルをインジェクトする方法を提供します。</span> </p>

<p><span class="merged" id="all.CNaAP.spl1" title="原文 : Channels are configured in the grpc section of the Helidon application configuration.">チャネルは、Helidonアプリケーション構成の<code>grpc</code>セクションで構成されます。</span> <span class="merged" id="all.CNaAP.spl2" title="原文 : The examples below use an application.yaml file but there are many other ways to use and override configuration in Helidon">次の例では<code>application.yaml</code>ファイルを使用していますが、<router-link @click.native="this.scrollFix('#config/01_introduction.adoc')" to="#config/01_introduction.adoc">「Helidonでの構成」</router-link>を使用およびオーバーライドする方法は他にも多数あります</span> </p>

<markup
lang="yaml"
title="application.yaml"
>grpc:
  channels:                <span class="conum" data-value="1" />
    test-server:           <span class="conum" data-value="2" />
      host: localhost      <span class="conum" data-value="3" />
      port: 1408           <span class="conum" data-value="4" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3Zm8tG" title="原文 : Channels are configured in the`channels` section">チャネルは`channels`セクションで構成されます</span></li>
<li data-value="2"><span class="merged" id="all.4aHwIX" title="原文 : Each sub-section is the Channel name that is then used to refer to this Channel in the application code">各サブセクションは、アプリケーション・コードでこのチャネルを参照するために使用されるチャネル名です</span></li>
<li data-value="3"><span class="merged" id="all.4eiPPD" title="原文 : Each channel contains a host name">各チャネルにはホスト名が含まれます</span></li>
<li data-value="4"><span class="merged" id="all.3SanzD" title="原文 : and a port.">ポートを指定します。</span></li>
</ul>
<p><span class="merged" id="all.1fbBNA" title="原文 : While most client application only connect to a single server it is possible to configure multiple named channels if the client needs to connect to multiple servers.">ほとんどのクライアント・アプリケーションは単一サーバーにのみ接続しますが、クライアントが複数のサーバーに接続する必要がある場合は、複数の名前付きチャネルを構成できます。</span></p>

<markup
lang="yaml"
title="application.yaml"
>grpc:
  channels:
    london:
      host: london.foo.com
      port: 1408
    new-york:
      host: ny.foo.com
      port: 1408</markup>

<p><span class="merged" id="all.1naXFs" title="原文 : The above example shows two channel configurations, one named london and the other new-york.">前述の例は、<code>london</code>という名前のチャネル構成と、他の<code>new-york</code>という名前のチャネル構成を示しています。</span></p>


<h4 id="_configuring_tls"><span class="merged" id="all.3iyelh" title="原文 : Configuring TLS">TLSの構成</span></h4>
<div class="section">
<p><span class="merged" id="all.2VKu8W" title="原文 : It is also possible to configure a Channel to use TLS if the server is using TLS.">サーバーがTLSを使用している場合は、TLSを使用するようにチャネルを構成することもできます。</span></p>

<markup
lang="yaml"
title="application.yaml"
>grpc:
  channels:
    test-server:
      host: localhost
      port: 1408
      tls:                          <span class="conum" data-value="1" />
        enabled: true               <span class="conum" data-value="2" />
        tls-cert-path: /certs/foo.cert    <span class="conum" data-value="3" />
        tls-key-path: /certs/foo.key      <span class="conum" data-value="4" />
        tls-ca-cert-path: /certs/ca.cert   <span class="conum" data-value="5" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1eTPJ1" title="原文 : The tls section of the channel configuration is used to configure TLS.">チャネル構成の<code>tls</code>セクションを使用してTLSを構成します。</span></li>
<li data-value="2"><span class="merged" id="all.fWHWf" title="原文 : The enabled value is used to enable or disable TLS for this channel."><code>enabled</code>値は、このチャネルのTLSを有効または無効にするために使用されます。</span></li>
<li data-value="3"><span class="merged" id="all.2L2iHm" title="原文 : The tls-cert value is the location of the TLS certificate file"><code>tls-cert</code>値はTLS証明書ファイルのロケーションです</span></li>
<li data-value="4"><span class="merged" id="all.4KpRDT" title="原文 : The tls-key value is the location of the TLS key file"><code>tls-key</code>値はTLSキー・ファイルのロケーションです</span></li>
<li data-value="5"><span class="merged" id="all.11kPya" title="原文 : The tls-ca-cert value is the location of the TLS CA certificate file"><code>tls-ca-cert</code>値はTLS CA証明書ファイルのロケーションです</span></li>
</ul>
<p><span class="merged" id="all.1XKCFq.spl1" title="原文 : The SSL configuration uses the Helidon Resource class to locate configured keys and certificates.">SSL構成では、Helidon <code>Resource</code>クラスを使用して、構成済のキーおよび証明書を検索します。</span> <span class="merged" id="all.1XKCFq.spl2" title="原文 : In the example above the tls-cert-path config key has the -path suffix which tells the configuration to load /certs/foo.cert as a file.">前述の例では、<code>tls-cert-path</code>構成キーに、<code>/certs/foo.cert</code>をファイルとしてロードするように構成に指示する<code>-path</code>サフィクスがあります。</span> <span class="merged" id="all.1XKCFq.spl3" title="原文 : If /certs/foo.cert was a resource on the classpath the configuration key could have been changed to tls-cert-resource-path to load /certs/foo.cert from the classpath."><code>/certs/foo.cert</code>がクラスパス上のリソースであった場合、クラスパスから<code>/certs/foo.cert</code>をロードするために構成キーが<code>tls-cert-resource-path</code>に変更されている可能性があります。</span> <span class="merged" id="all.1XKCFq.spl4" title="原文 : The same applies to the tls-key and tls-ca-cert configuration keys."><code>tls-key</code>および<code>tls-ca-cert</code>の構成キーにも同じことが当てはまります。</span> <span class="merged" id="all.1XKCFq.spl5" title="原文 : See the io.helidon.common.configurable.Resource class for details.">詳細は、<code>io.helidon.common.configurable.Resource</code>クラスを参照してください。</span> </p>

</div>
</div>

<h3 id="_using_channels"><span class="merged" id="all.WvAIz"  title="原文:: Using Channels">チャネルの使用方法</span></h3>
<div class="section">
<p><span class="merged" id="all.3aGr4R.spl1" title="原文 : Once one or more channels have been configured they can be used by client code.">1つ以上のチャネルが構成されると、クライアント・コードで使用できるようになります。</span> <span class="merged" id="all.3aGr4R.spl2" title="原文 : The simplest way to use a channel is to inject it into beans using CDI.">チャネルを使用する最も簡単な方法は、CDIを使用してそれをBeanにインジェクトすることです。</span> <span class="merged" id="all.3aGr4R.spl3" title="原文 : The Helidon gRPC client APIs have CDI producers that can provide io.grpc.Channel instances.">Helidon gRPCクライアントAPIには、<code>io.grpc.Channel</code>インスタンスを提供できるCDIプロデューサがあります。</span> </p>

<p><span class="merged" id="all.2wSilN" title="原文 : For example, a class might have an injectable io.grpc.Channel field:">たとえば、クラスにインジェクト可能な<code>io.grpc.Channel</code>フィールドがあるとします:</span></p>

<markup
lang="java"
title="gRPCチャネル・インジェクション"
>    @Inject                             <span class="conum" data-value="1" />
    @GrpcChannel(name = "test-server")  <span class="conum" data-value="2" />
    private Channel channel;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1XulD6" title="原文 : The @Inject annotation tells CDI to inject the channel."><code>@Inject</code>注釈は、チャネルをインジェクトするようCDIに指示します。</span></li>
<li data-value="2"><span class="merged" id="all.1W0ZGK.spl1" title="原文 : The @GrpcChannel annotation is the qualifier that supplies the Channel name."><code>@GrpcChannel</code>注釈は、チャネル名を提供する修飾子です。</span> <span class="merged" id="all.1W0ZGK.spl2" title="原文 : This is the same name as used in the channel configuration in the configuration examples above.">これは、前述の構成例のチャネル構成で使用されている名前と同じです。</span> </li>
</ul>
<p><span class="merged" id="all.147wI2" title="原文 : When an instance of the CDI bean with the channel field is instantiated a channel will be injected into it.">チャネル・フィールドを持つCDI beanのインスタンスがインスタンス化されると、チャネルがインスタンスにインジェクトされます。</span></p>


<h4 id="_the_in_process_channel"><span class="merged" id="all.2gL1dd" title="原文 : The In-Process Channel">インプロセス・チャネル</span></h4>
<div class="section">
<p><span class="merged" id="all.2Mmrnr.spl1" title="原文 : If code is running in an application that is executing as part of a Helidon MP gRPC server there is a special in-process channel available.">Helidon MP gRPCサーバーの一部として実行されているアプリケーションでコードが実行されている場合は、特別なインプロセス・チャネルを使用できます。</span> <span class="merged" id="all.2Mmrnr.spl2" title="原文 : This allows code executing on the server to make calls to gRPC services deployed on that server in the same way an external client does.">これにより、サーバー上で実行されているコードは、外部クライアントと同じ方法で、そのサーバーにデプロイされているgRPCサービスを呼び出すことができます。</span> <span class="merged" id="all.2Mmrnr.spl3" title="原文 : To inject an in-process channel a different qualifier annotation is used.">インプロセス・チャネルをインジェクトするには、異なるクオリファイア注釈を使用します。</span> </p>

<markup
lang="java"
title="gRPCインプロセス・チャネル・インジェクション"
>    @Inject                  <span class="conum" data-value="1" />
    @InProcessGrpcChannel    <span class="conum" data-value="2" />
    private Channel channel;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1tOuWe" title="原文 : The @Inject annotation is used the same as previously."><code>@Inject</code>注釈は、以前と同じように使用されます。</span></li>
<li data-value="2"><span class="merged" id="all.1i7v5U" title="原文 : The @InProcessGrpcChannel is the qualifier that is used to tell the Helidon MP gRPC API to inject an in-process channel."><code>@InProcessGrpcChannel</code>は、インプロセス・チャネルをインジェクトするようにHelidon MP gRPC APIに指示するために使用される修飾子です。</span></li>
</ul>
</div>
</div>

<h3 id="_using_the_client_interface_in_an_application"><span class="merged" id="all.1WKZUM" title="原文 : Using the Client Interface in an Application">アプリケーションでのクライアント・インタフェースの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.3UoL8o.spl1" title="原文 : Now that there is a client interface and a Channel configuration we can use these in the client application.">クライアント・インタフェースとチャネル構成ができたので、これらをクライアント・アプリケーションで使用できます。</span> <span class="merged" id="all.3UoL8o.spl2" title="原文 : The simplest way is to use the client in a CDI microprofile application.">最も簡単な方法は、CDIマイクロプロファイル・アプリケーションでクライアントを使用することです。</span> </p>

<p><span class="merged" id="all.vGhal.spl1" title="原文 : In the application class that requires the client we can declare a field of the same type as the client service interface.">クライアントを必要とするアプリケーション・クラスでは、クライアント・サービス・インタフェースと同じ型のフィールドを宣言できます。</span> <span class="merged" id="all.vGhal.spl2" title="原文 : The field is then annotated so that CDI will inject the client proxy into the field.">CDIがクライアント・プロキシをフィールドにインジェクトするように、フィールドに注釈が付けられます。</span> </p>

<markup
lang="java"
title="簡易gRPCサービス"
>@ApplicationScoped
public class Client {

    @Inject                                  <span class="conum" data-value="1" />
    @GrpcProxy                        <span class="conum" data-value="2" />
    @GrpcChannel(name = "test-server")       <span class="conum" data-value="3" />
    private StringService stringService;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4QZo8q" title="原文 : The @Inject annotation tells the CDI to inject the client implementation; the gRPC MP APIs have a bean provider that does this."><code>@Inject</code>注釈は、クライアント実装をインジェクトするようCDIに指示します。gRPC MP APIには、これを行うBeanプロバイダがあります。</span></li>
<li data-value="2"><span class="merged" id="all.10PLoi" title="原文 : The @GrpcProxy annotation is used by the CDI container to match the injection point to the gRPC MP APIs provider"><code>@GrpcProxy</code>注釈は、インジェクション・ポイントをgRPC MP APIプロバイダと一致させるためにCDIコンテナによって使用されます</span></li>
<li data-value="3"><span class="merged" id="all.4KUOdG.spl1" title="原文 : The @GrpcChannel annotation identifies the gRPC channel to be used by the client."><code>@GrpcChannel</code>注釈は、クライアントによって使用されるgRPCチャネルを識別します。</span> <span class="merged" id="all.4KUOdG.spl2" title="原文 : The name used in the annotation refers to a channel name in the application configuration.">注釈で使用される名前は、アプリケーション構成内のチャネル名を参照します。</span> </li>
</ul>
<p><span class="merged" id="all.11SpGC" title="原文 : Now when the CDI container instantiates instances of the Client it will inject a dynamic proxy into the stringService field and then any code in methods in the Client class can call methods on the StringService which will be translated to gRPC calls.">CDIコンテナは、<code>Client</code>のインスタンスをインスタンス化するときに、動的プロキシを<code>stringService</code>フィールドにインジェクトし、<code>Client</code>クラスのメソッド内の任意のコードが、gRPCコールに変換される<code>StringService</code>のメソッドをコールできるようになりました。</span></p>

<p><span class="merged" id="all.1zcJRv.spl1" title="原文 : In the example above there is no need to directly use a Channel directly.">前述の例では、<code>Channel</code>を直接使用する必要はありません。</span> <span class="merged" id="all.1zcJRv.spl2" title="原文 : The correct channel is added to the dynamic client proxy internally by the Helidon MP gRPC APIs.">Helidon MP gRPC APIによって、動的クライアント・プロキシに適切なチャネルが内部的に追加されます。</span> </p>

</div>
</div>
</doc-view>
