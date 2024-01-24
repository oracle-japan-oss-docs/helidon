<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.32"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.30" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.25" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.11" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.21" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.18" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.12" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.39"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.Og3V7" title="原文 : MicroProfile Rest Client adds the capability to invoke remote services by defining a Java interface with Jakarta REST (JAX-RS) annotations that resembles a server-side resource class.">MicroProfile Rest Clientは、サーバー側のリソース・クラスに似ているJakarta REST (JAX-RS)注釈を使用してJavaインタフェースを定義することで、リモート・サービスを起動する機能を追加します。</span></p>

<p><span class="merged" id="all.3e7o1X" title="原文 : Helidon will automatically create a proxy class for the interface and map local proxy calls to remote REST calls.">Helidonは、インタフェースの<em>proxy</em>クラスを自動的に作成し、ローカル・プロキシ・コールをリモートRESTコールにマップします。</span></p>

<p><span class="merged" id="all.17K9sL" title="原文 : For more information, see Rest Client For MicroProfile Specification.">詳細は、<a href="https://download.eclipse.org/microprofile/microprofile-rest-client-3.0/microprofile-rest-client-spec-3.0.html" target="_blank">「MicroProfile仕様のRestクライアント」</a>を参照してください。</span></p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.28"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.4Fl5cW" title="原文 : To enable MicroProfile Rest Client either add a dependency on the helidon-microprofile bundle or add the following dependency to your project’s pom.xml (see Managing Dependencies).">MicroProfile Rest Clientを有効にするには、<router-link to="/mp/introduction/microprofile">helidon-microprofile bundle</router-link>に依存関係を追加するか、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.rest-client&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-rest-client&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.12"  title="原文:: API">API</span></h2>
<div class="section">

<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 33.333%;">
<col style="width: 66.667%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.oZPHH.2"  title="原文:: Class">クラス</span></th>
<th><span class="merged" id="all.4JM9z7.19"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.b4o1s"  title="原文: org.eclipse.microprofile.rest.client.RestClientBuilder">org.eclipse.microprofile.rest.client.RestClientBuilder</span></td>
<td class=""><span class="merged" id="all.3E8Op5.spl1" title="原文 : Base builder instance.">ベース・ビルダー・インスタンス。</span> <span class="merged" id="all.3E8Op5.spl2" title="原文 : Contains configuration options and a build method that creates the actual client instance.">実際クライアント・インスタンスを作成する構成オプションおよび<code>build</code>メソッドが含まれます。</span> </td>
</tr>
</tbody>
</table>
</div>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 33.333%;">
<col style="width: 66.667%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1mFIlG.4"  title="原文:: Annotation">注釈</span></th>
<th><span class="merged" id="all.4JM9z7.20"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1y3CgF"  title="原文: @RegisterRestClient">@RegisterRestClient</span></td>
<td class=""><span class="merged" id="all.2NQK4V.spl1" title="原文 : A marker annotation to register a client at runtime.">実行時にクライアントを登録するためのマーカー注釈。</span> <span class="merged" id="all.2NQK4V.spl2" title="原文 : This marker must be applied to any CDI managed clients.">このマーカーは、すべてのCDI管理対象クライアントに適用する必要があります。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1hdFIc"  title="原文: @RestClient">@RestClient</span></td>
<td class=""><span class="merged" id="all.O27mG" title="原文 : RestClient qualifier which should be used on an CDI injection points.">CDIインジェクション・ポイントで使用されるRestClient修飾子。</span></td>
</tr>
</tbody>
</table>
</div>


<h3 id="creating-a-new-client"><span class="merged" id="all.3dB7vw" title="原文 : Creating a New Client Using a Builder">ビルダーを使用した新規クライアントの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.J6thG" title="原文 : MicroProfile Rest Client can be created using a builder obtained from RestClientBuilder.newBuilder().">MicroProfile Rest Clientは、<code>RestClientBuilder.newBuilder()</code>から取得したビルダーを使用して作成できます。</span></p>

<p><span class="merged" id="all.4U0jnl" title="原文 : The builder provides methods to specify the client interface to be proxied as well as to configure additional details such as server URI, SSL context, connection timeouts, etc. Any method call on the resulting proxy object will be automatically translated into a remote call to the service using the provided configuration.">ビルダーは、プロキシされるクライアント・インタフェースを指定するメソッドを提供し、サーバーURI、SSLコンテキスト、接続タイムアウトなどの追加の詳細を構成します。結果のプロキシ・オブジェクトに対するメソッド・コールは、指定された構成を使用して、サービスへのリモート・コールに自動的に変換されます。</span></p>

<markup
lang="java"
title="Example"
>SomeResource greetResource = RestClientBuilder.newBuilder()
                                 .baseUri(URI.create("http://localhost:8080/greet"))
                                 .build(GreetRestClient.class);
greetResource.getDefaultMessage();</markup>

<p><span class="merged" id="all.3mjlEL" title="原文 : The RestClientBuilder interface extends the Configurable interface from Jakarta REST (JAX-RS), enabling direct registration of providers such as filters, param converters, exception mappers, etc."><code>RestClientBuilder</code>インタフェースは、Jakarta REST (JAX-RS)から<code>Configurable</code>インタフェースを拡張し、フィルタ、パラメータ・コンバータ、例外マッパーなどの<em>「プロバイダ」</em>を直接登録できるようにします。</span></p>

<markup
lang="java"
title="Example"
>SomeResource greetResource = RestClientBuilder.newBuilder()
                                 .baseUri(URI.create("http://localhost:8080"))
                                 .register(GreetClientRequestFilter.class)
                                 .register(GreetClientExceptionMapper.class)
                                 .build(GreetRestClient.class);
greetResource.getDefaultMessage();</markup>

</div>


<h3 id="_creating_a_new_client_using_cdi"><span class="merged" id="all.pMryK" title="原文 : Creating a New Client Using CDI">CDIを使用した新規クライアントの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.4JMumO.spl1" title="原文 : A client interface can be annotated with @RegisterRestClient to automatically register it with CDI.">クライアント・インタフェースに<code>@RegisterRestClient</code>という注釈を付けると、自動的にCDIに登録できます。</span> <span class="merged" id="all.4JMumO.spl2" title="原文 : This annotation has a property called baseUri that can be used to define the base endpoint to be used by the client to access the service.">この注釈には、<code>baseUri</code>というプロパティがあり、これを使用して、サービスにアクセスするためにクライアントが使用するベース・エンドポイントを定義できます。</span> </p>

<markup
lang="java"
title="Example"
>@Path("/greet")
@RegisterRestClient(baseUri="http://localhost:8080")
public interface GreetRestClient {
    // ...
}</markup>

<p><span class="merged" id="all.3hx09q" title="原文 : Any Jakarta REST (JAX-RS) providers for a client can be registered using the (repeatable) @RegisterProvider annotation on the interface as shown below.">クライアントのJakarta REST (JAX-RS)プロバイダは、次に示すように、インタフェース上の(繰返し可能な) <code>@RegisterProvider</code>注釈を使用して登録できます。</span></p>

<markup
lang="java"
title="Example"
>@Path("/greet")
@RegisterRestClient(baseUri="http://localhost:8080")
@RegisterProvider(GreetClientRequestFilter.class)
@RegisterProvider(GreetClientExceptionMapper.class)
public interface GreetRestClient {
    // ...
}</markup>

<p><span class="merged" id="all.mVxU2" title="原文 : Once a client interface is annotated, it can be injected into any CDI bean.">クライアント・インタフェースに注釈を付けると、任意のCDI beanにインジェクトできます。</span></p>

<p><span class="merged" id="all.IY9f7" title="原文 : All properties in annotation RegisterRestClient can be overridden via configuration as described in Configuration options">注釈<code>RegisterRestClient</code>のすべてのプロパティは、<router-link @click.native="this.scrollFix('#_configuration_options')" to="#_configuration_options">「構成オプション」</router-link>の説明に従って構成でオーバーライドできます</span></p>

<markup
lang="java"
title="Example"
>public class MyBean {
    @Inject
    @RestClient
    GreetRestClient client;

    void myMethod() {
        client.getMessage("Helidon");
    }
}</markup>

</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.25"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.47Rjtr" title="原文 : Configuration is only available for CDI managed client instances, it is not supported for client created programmatically using RestClientBuilder.">構成はCDI管理対象クライアント・インスタンスでのみ使用でき、<code>RestClientBuilder</code>を使用してプログラム的に作成されたクライアントではサポートされていません。</span></p>

<p><span class="merged" id="all.4TcSXE" title="原文 : Most of the configuration properties mentioned below have to be prepended with the fully qualified classname of the client interface to be configured.">次に示す構成プロパティのほとんどは、構成するクライアント・インタフェースの完全修飾クラス名の前に付加する必要があります。</span></p>

<p><span class="merged" id="all.2S1FZE" title="原文 : It is possible to avoid fully qualified classname by using @RegisterRestClient(configKey=&quot;clientAlias&quot;), the prefix $restClient is used below to indicate an alias or a class name."><code>@RegisterRestClient(configKey="clientAlias")</code>を使用して完全修飾クラス名を回避できます。次に、別名またはクラス名を示すプレフィクス<code>$restClient</code>を使用します。</span></p>


<h3 id="_configuration_options"><span class="merged" id="all.3SKgM1.113"  title="原文:: Configuration options">構成オプション</span></h3>
<div class="section">
<p><span class="merged" id="all.2O2NgP" title="原文 : Required configuration options:">必要な構成オプション:</span></p>


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
<th><span class="merged" id="all.2XKMH3.119"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.117"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.119"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.120"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1hWj7H"  title="原文: $restClient/mp-rest/url"><code>$restClient/mp-rest/url</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.247"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3Y6f4U.spl1" title="原文 : Sets the base URL to use for this service.">このサービスに使用するベースURLを設定します。</span> <span class="merged" id="all.3Y6f4U.spl2" title="原文 : This option or /mp-rest/uri need to be set if the value is not present in RegisterRestClient#baseUri."><code>RegisterRestClient#baseUri</code>に値が存在しない場合は、このオプションまたは<code>/mp-rest/uri</code>を設定する必要があります。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.MmfOF"  title="原文: $restClient/mp-rest/uri"><code>$restClient/mp-rest/uri</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.248"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3aEmx9.spl1" title="原文 : Sets the base URI to use for this service.">このサービスに使用するベースURIを設定します。</span> <span class="merged" id="all.3aEmx9.spl2" title="原文 : This option or /mp-rest/url need to be set if the value is not present in RegisterRestClient#baseUri."><code>RegisterRestClient#baseUri</code>に値が存在しない場合は、このオプションまたは<code>/mp-rest/url</code>を設定する必要があります。</span> </td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.4WZWC7" title="原文 : Optional configuration options:">オプションの構成オプション:</span></p>


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
<th><span class="merged" id="all.2XKMH3.120"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.118"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.120"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.121"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3JuzQ4"  title="原文: $restClient/mp-rest/scope"><code>$restClient/mp-rest/scope</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.249"  title="原文:: string">文字列</span></td>
<td class=""><span class="merged" id="all.13664S"  title="原文: jakarta.enterprise.context.Dependent"><code>jakarta.enterprise.context.Dependent</code></span></td>
<td class=""><span class="merged" id="all.pt7nQ" title="原文 : The fully qualified classname to a CDI scope to use for injection.">インジェクションに使用するCDIスコープへの完全修飾クラス名。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Nftx6"  title="原文: $restClient/mp-rest/connectTimeout"><code>$restClient/mp-rest/connectTimeout</code></span></td>
<td class=""><span class="merged" id="all.15f2Ma.29"  title="原文:: long">long</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.1Hxvcw" title="原文 : Sets timeout in milliseconds to wait to connect to the remote endpoint.">リモート・エンドポイントへの接続を待機するタイムアウト(ミリ秒)を設定します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3aZbau"  title="原文: $restClient/mp-rest/readTimeout"><code>$restClient/mp-rest/readTimeout</code></span></td>
<td class=""><span class="merged" id="all.15f2Ma.30"  title="原文:: long">long</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.4DFvY" title="原文 : Sets timeout in milliseconds to wait for a response from the remote endpoint.">リモート・エンドポイントからのレスポンスを待機するタイムアウトをミリ秒単位で設定します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2tWbc0"  title="原文: $restClient/mp-rest/followRedirects"><code>$restClient/mp-rest/followRedirects</code></span></td>
<td class=""><span class="merged" id="all.2XHIO8.176"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.42DdBS.56"  title="原文: false"><code>false</code></span></td>
<td class=""><span class="merged" id="all.2N85AV" title="原文 : Sets value used to determine whether the client should follow HTTP redirect responses.">クライアントがHTTPリダイレクト・レスポンスに従うかどうかを判断するために使用する値を設定します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4SqJGb"  title="原文: $restClient/mp-rest/proxyAddress"><code>$restClient/mp-rest/proxyAddress</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.250"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3E8MKr" title="原文 : Sets a string value in the form of &lt;proxyHost&gt;:&lt;proxyPort&gt; that specifies the HTTP proxy server hostname (or IP address) and port for requests of this client to use.">&lt;proxyHost>の形式で文字列値を設定:このクライアントのリクエストに使用するHTTPプロキシ・サーバーのホスト名(またはIPアドレス)およびポートを指定する&lt;proxyPort>。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3Qvo5d"  title="原文: $restClient/mp-rest/queryParamStyle"><code>$restClient/mp-rest/queryParamStyle</code></span></td>
<td class=""><span class="merged" id="all.4GHGb9" title="原文 : string (MULTI_PAIRS, COMMA_SEPARATED, ARRAY_PAIRS)">文字列(MULTI_PAIRS、COMMA_SEPARATED、ARRAY_PAIRS)</span></td>
<td class=""><span class="merged" id="all.1rgqmZ"  title="原文: MULTI_PAIRS"><code>MULTI_PAIRS</code></span></td>
<td class=""><span class="merged" id="all.3EKp4p" title="原文 : Sets enumerated type string value that specifies the format in which multiple values for the same query parameter is used.">同じ問合せパラメータに複数の値が使用される形式を指定する列挙型文字列値を設定します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2F3UdT"  title="原文: $restClient/mp-rest/trustStore"><code>$restClient/mp-rest/trustStore</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.251"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.skzOk.spl1" title="原文 : Sets the trust store location.">トラスト・ストアのロケーションを設定します。</span> <span class="merged" id="all.skzOk.spl2" title="原文 : Can point to either a classpath resource (e.g. classpath:/client-truststore.jks) or a file (e.g. file:/home/user/client-truststore.jks).">クラスパス・リソース(例、classpath:/client-truststore.jks)またはファイル(例、file:/home/user/client-truststore.jks)のいずれかを指すことができます。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1c3YBa"  title="原文: $restClient/mp-rest/trustStorePassword"><code>$restClient/mp-rest/trustStorePassword</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.252"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.30uktN" title="原文 : Sets the password for the trust store.">トラスト・ストアのパスワードを設定します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4M5w2R"  title="原文: $restClient/mp-rest/trustStoreType"><code>$restClient/mp-rest/trustStoreType</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.253"  title="原文:: string">文字列</span></td>
<td class=""><span class="merged" id="all.2XpOwx"  title="原文: JKS"><code>JKS</code></span></td>
<td class=""><span class="merged" id="all.42WFiz" title="原文 : Sets the type of the trust store.">トラスト・ストアのタイプを設定します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2PLHgU"  title="原文: $restClient/mp-rest/keyStore"><code>$restClient/mp-rest/keyStore</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.254"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.2CwsSy.spl1" title="原文 : Sets the key store location.">キーストアのロケーションを設定します。</span> <span class="merged" id="all.2CwsSy.spl2" title="原文 : Can point to either a classpath resource (e.g. classpath:/client-keystore.jks) or a file (e.g. file:/home/user/client-keystore.jks).">クラスパス・リソース(例、classpath:/client-keystore.jks)またはファイル(例、file:/home/user/client-keystore.jks)のいずれかを指すことができます。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.17yKHO"  title="原文: $restClient/mp-rest/keyStorePassword"><code>$restClient/mp-rest/keyStorePassword</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.255"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.16yZjg" title="原文 : Sets the password for the keystore.">キーストアのパスワードを設定します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.43CZOD"  title="原文: $restClient/mp-rest/keyStoreType"><code>$restClient/mp-rest/keyStoreType</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.256"  title="原文:: string">文字列</span></td>
<td class=""><span class="merged" id="all.2XpOwx.1"  title="原文: JKS"><code>JKS</code></span></td>
<td class=""><span class="merged" id="all.2QRlN" title="原文 : Sets the type of the keystore.">キーストアのタイプを設定します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1TSfqY"  title="原文: $restClient/mp-rest/hostnameVerifier"><code>$restClient/mp-rest/hostnameVerifier</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.257"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.1unAgV.spl1" title="原文 : Sets the hostname verifier class.">ホスト名検証クラスを設定します。</span> <span class="merged" id="all.1unAgV.spl2" title="原文 : This class must have a public no-argument constructor.">このクラスには、public引数なしコンストラクタが必要です。</span> </td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.2s6Yk2" title="原文 : Configuration options affecting CDI and programmatically created clients:">CDIおよびプログラムによって作成されたクライアントに影響する構成オプション:</span></p>


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
<th><span class="merged" id="all.2XKMH3.121"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.119"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.121"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.122"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.34WBDy"  title="原文: $restClient/mp-rest/providers"><code>$restClient/mp-rest/providers</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.258"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.43fKDM" title="原文 : A comma separated list of fully-qualified provider classnames to include in the client.">クライアントに含める完全修飾プロバイダ・クラス名のカンマ区切りリスト。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.lherr"  title="原文: $restClient/mp-rest/providers/&lt;fully-qualified-provider-classname&gt;/priority"><code>$restClient/mp-rest/providers/&lt;fully-qualified-provider-classname>/priority</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.259"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.fW0i9" title="原文 : Sets the priority of the provider for this interface.">このインタフェースのプロバイダの優先度を設定します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4UqNGg"  title="原文: org.eclipse.microprofile.rest.client.propagateHeaders"><code>org.eclipse.microprofile.rest.client.propagateHeaders</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.260"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.4cL4K7.spl1" title="原文 : To specify which headers to propagate from the inbound JAX-RS request to the outbound MP Rest Client request.">インバウンドJAX-RSリクエストからアウトバウンドMP Restクライアント・リクエストに伝播するヘッダーを指定します。</span> <span class="merged" id="all.4cL4K7.spl2" title="原文 : Should not be prefixed with the rest client class or alias.">残りのクライアント・クラスまたは別名にはプレフィクスを付けないでください。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2qyLHF"  title="原文: microprofile.rest.client.disable.default.mapper"><code>microprofile.rest.client.disable.default.mapper</code></span></td>
<td class=""><span class="merged" id="all.2XHIO8.177"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.42DdBS.57"  title="原文: false"><code>false</code></span></td>
<td class=""><span class="merged" id="all.46mHK1.spl1" title="原文 : Whether to disable default exception mapper.">デフォルト例外マッパーを無効にするかどうか。</span> <span class="merged" id="all.46mHK1.spl2" title="原文 : Should not be prefixed with the rest client class or alias.">残りのクライアント・クラスまたは別名にはプレフィクスを付けないでください。</span> </td>
</tr>
</tbody>
</table>
</div>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.20"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.4QbWVM.spl1" title="原文 : To be able to run and test this example, use the Helidon MP examples/quickstarts.">この例を実行およびテストするには、<router-link to="/mp/guides/quickstart">「Helidon MPの例/クイックスタート」</router-link>を使用します。</span> <span class="merged" id="all.4QbWVM.spl2" title="原文 : Add a dependency on the Helidon Rest Client implementation and create the following client interface:">Helidon Rest Client実装に依存関係を追加し、次のクライアント・インタフェースを作成します:</span> </p>

<markup
lang="java"
title="client interface"
>@Path("/greet")
interface GreetRestClient {

     @GET
     JsonObject getDefaultMessage();

     @Path("/{name}")
     @GET
     JsonObject getMessage(@PathParam("name") String name);

}</markup>

<p><span class="merged" id="all.1BJE0S" title="原文 : Then create a runnable method as described in Creating new client, but with baseUri http://localhost:8080/greet and the above interface.">次に、<router-link @click.native="this.scrollFix('#creating-a-new-client')" to="#creating-a-new-client">「新規クライアントの作成」</router-link>で説明するように実行可能なメソッドを作成します。ただし、baseUri <code><a class="bare" href="http://localhost:8080/greet" target="_blank">http://localhost:8080/greet</a></code>および前述のインタフェースを使用します。</span></p>

<p><span class="merged" id="all.XV2r7" title="原文 : By calling GreetRestClient.getDefaultMessage() you reach the endpoint of Helidon quickstart."><code>GreetRestClient.getDefaultMessage()</code>をコールすると、Helidonクイックスタートのエンドポイントに到達します。</span></p>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.12"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1zr6BH" title="原文 : Helidon MicroProfile RestClient JavaDoc"><a href="/apidocs/io.helidon.microprofile.restclient/module-summary.html" target="_blank">Helidon MicroProfile RestClient JavaDoc</a></span></p>

</li>
<li>
<p><span class="merged" id="all.1OZT7l" title="原文 : MicroProfile RestClient Specification"><a href="https://download.eclipse.org/microprofile/microprofile-rest-client-3.0/microprofile-rest-client-spec-3.0.html" target="_blank">MicroProfile RestClient仕様</a></span></p>

</li>
<li>
<p><span class="merged" id="all.1ymBzx" title="原文 : MicroProfile RestClient on GitHub"><a href="https://github.com/eclipse/microprofile-rest-client" target="_blank">GitHubのMicroProfile RestClient</a></span></p>

</li>
</ul>

</div>

</doc-view>
