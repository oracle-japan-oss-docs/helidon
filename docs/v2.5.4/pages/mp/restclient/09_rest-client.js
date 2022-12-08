<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.29"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.1gpkOd" title="原文 : To enable MicroProfile Rest Client either add a dependency on the helidon-microprofile bundle or add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">MicroProfile Rest Clientを有効にするには、<router-link to="/mp/introduction/02_microprofile">helidon-microprofile bundle</router-link>に依存関係を追加するか、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.rest-client&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-rest-client&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_configuring_rest_client_with_helidon_mp"><span class="merged" id="all.tmxYt" title="原文 : Configuring Rest Client with Helidon MP">Helidon MPでのRestクライアントの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.21VX03" title="原文 : MicroProfile Rest Client adds the capability to invoke remote microservices using a JAX-RS like interface to declare the operations.">MicroProfile Rest Clientには、JAX-RSに似たインタフェースを使用してリモート・マイクロサービスを呼び出し、操作を宣言する機能が追加されています。</span></p>

</div>

<h2 id="_creating_a_new_client_using_a_builder"><span class="merged" id="all.2SZcqK" title="原文 : Creating a new client using a builder">ビルダーを使用した新規クライアントの作成</span></h2>
<div class="section">
<p><span class="merged" id="all.3XN62s.spl1" title="原文 : MicroProfile Rest Client can be created using a builder obtained from RestClientBuilder.newBuilder().">MicroProfile Rest Clientは、<code>RestClientBuilder.newBuilder()</code>から取得したビルダーを使用して作成できます。</span> <span class="merged" id="all.3XN62s.spl2" title="原文 : The builder provides methods to configure details for the client and to define the desired rest client interface.">ビルダーには、クライアントの詳細を構成し、目的の残りのクライアント・インタフェースを定義するメソッドが用意されています。</span> </p>

<p><span class="merged" id="all.2apT5L.1"  title="原文:: Example:">例:</span></p>

<markup
lang="java"

>SomeResource someResource = RestClientBuilder.newBuilder()
                                 .baseUri(URI.create("http://localhost:8080/baseUri"))
                                 .build(SomeResource.class);

someResource.someMethod(apiModel);</markup>

</div>

<h2 id="_creating_new_client_cdi"><span class="merged" id="all.mCzg2" title="原文 : Creating new client - CDI">新規クライアントの作成 - CDI</span></h2>
<div class="section">
<p><span class="merged" id="all.48JTzD.spl1" title="原文 : A rest client interface can be annotated with @RegisterRestClient to automatically register it with CDI.">残りのクライアント・インタフェースには、CDIに自動的に登録するために<code>@RegisterRestClient</code>の注釈を付けることができます。</span> <span class="merged" id="all.48JTzD.spl2" title="原文 : The RegisterRestClient annotation has a property baseUri that can be used to define the base endpoint of this client."><code>RegisterRestClient</code>注釈には、このクライアントのベース・エンドポイントの定義に使用できるプロパティ<code>baseUri</code>があります。</span> <span class="merged" id="all.48JTzD.spl3" title="原文 : This value can be overridden using configuration.">この値は、構成を使用してオーバーライドできます。</span> </p>

<p><span class="merged" id="all.2apT5L.2"  title="原文:: Example:">例:</span></p>

<markup
lang="java"

>@RegisterRestClient(baseUri="http://localhost:8080/baseUri")
public interface SomeResource {

// ...

}</markup>

<p><span class="merged" id="all.3zfNvh" title="原文 : Once a rest client interface is annotated, it can be injected into any CDI bean.">restクライアント・インタフェースに注釈を付けると、CDI beanにインジェクトできます。</span></p>

<p><span class="merged" id="all.2apT5L.3"  title="原文:: Example:">例:</span></p>

<markup
lang="java"

>@Inject
@RestClient
SomeResource client;

// ...

client.sampleMethod();</markup>

</div>

<h2 id="_rest_client_configuration"><span class="merged" id="all.2qEZsx" title="原文 : Rest client configuration">Restクライアント構成</span></h2>
<div class="section">
<p><span class="merged" id="all.2IKUlf" title="原文 : Rest client implementation allows you to configure its parameters by builder, annotations, and configuration.">Restクライアント実装では、ビルダー、注釈および構成によってパラメータを構成できます。</span></p>

<p><span class="merged" id="all.4S5CKz.spl1" title="原文 : You can configure new providers, base URI/URL and other options of the client.">クライアントの新しいプロバイダ、ベースURI/URLおよびその他のオプションを構成できます。</span> <span class="merged" id="all.4S5CKz.spl2" title="原文 : See specification for full details: https://download.eclipse.org/microprofile/microprofile-rest-client-1.2.1/microprofile-rest-client-1.2.1.html">詳細は仕様を参照してください : <a href="https://download.eclipse.org/microprofile/microprofile-rest-client-1.2.1/microprofile-rest-client-1.2.1.html" id="" target="_blank" >https://download.eclipse.org/microprofile/microprofile-rest-client-1.2.1 /microprofile-rest-client-1.2.1.html</a></span> </p>

</div>

<h2 id="_quickstart_example"><span class="merged" id="all.WhHrS" title="原文 : Quickstart example">クイックスタートの例</span></h2>
<div class="section">
<p><span class="merged" id="all.3mGYoz.spl1" title="原文 : To be able to run and test this example, please head to the Helidon examples/quickstarts and start the helidon-quickstart-mp.">この例を実行してテストするには、Helidonの例/クイックスタートに進んで、helidon-quickstart-mpを起動してください。</span> <span class="merged" id="all.3mGYoz.spl2" title="原文 : Then create project with the dependency on the Helidon rest client implementation and create the following rest client interface:">次に、Helidon restクライアント実装に依存関係のあるプロジェクトを作成し、次のRestクライアント・インタフェースを作成します:</span> </p>

<p><span class="merged" id="all.XciJc" title="原文 : Rest client interface">Restクライアント・インタフェース</span></p>

<markup
lang="java"

>@Path("/greet")
interface GreetRestClient {

     @GET
     JsonObject getDefaultMessage();

     @Path("/{name}")
     @GET
     JsonObject getMessage(@PathParam("name") String name);

}</markup>

<p><span class="merged" id="all.1Wt5Jn" title="原文 : Then create runnable method the same way as it is described in Creating new client - Interface,but with baseUri http://localhost:8080/greet and the above interface.">次に、<code>Creating new client - Interface</code>で説明した方法と同じ方法で実行可能メソッドを作成しますが、baseUri <code><a href="http://localhost:8080/greet" id="" target="_blank" >http://localhost:8080/greet</a></code>および前述のインタフェースを使用します。</span></p>

<p><span class="merged" id="all.XV2r7" title="原文 : By calling GreetRestClient.getDefaultMessage() you reach the endpoint of Helidon quickstart."><code>GreetRestClient.getDefaultMessage()</code>をコールすると、Helidonクイックスタートのエンドポイントに到達します。</span></p>

</div>
</doc-view>
