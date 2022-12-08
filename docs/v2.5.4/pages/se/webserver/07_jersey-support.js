<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.69"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.1fcxx9" title="原文 : To enable Jersey (JAX-RS) Support add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">Jersey (JAX-RS)サポートを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-jersey&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_jax_rs_support"><span class="merged" id="all.2VK4t4" title="原文 : JAX-RS Support">JAX-RSのサポート</span></h2>
<div class="section">
<p><span class="merged" id="all.4efXgj" title="原文 : You can register a Jersey (JAX-RS) application at a context root using the JerseySupport class."><code>JerseySupport</code>クラスを使用して、Jersey (JAX-RS)アプリケーションを<em>「コンテキスト・ルート」</em>に登録できます。</span></p>


<h3 id="_registering_a_jersey_application"><span class="merged" id="all.3iRrG4" title="原文 : Registering a Jersey Application">Jerseyアプリケーションの登録</span></h3>
<div class="section">
<p><span class="merged" id="all.1jVYEw" title="原文 : To register a Jersey application at a context root, use the JerseySupport class and its JerseySupport.Builder builder.">コンテキスト・ルートで<strong>Jersey</strong>アプリケーションを登録するには、<code>JerseySupport</code>クラスとその<code>JerseySupport.Builder</code>ビルダーを使用します。</span></p>

<p><span class="merged" id="all.1dmjV0" title="原文 : JerseySupport can register the JAX-RS resources directly."><code>JerseySupport</code>はJAX-RSリソースを直接登録できます。</span></p>

<markup
lang="java"
title="Jersey (JAX-RS) <code>HelloWorld</code> resource"
>@Path("/")
public class HelloWorld {

    @GET
    @Path("hello")
    public Response hello() {
        return Response.ok("Hello World!").build();
    }
}</markup>

<markup
lang="java"
title="Registering the <code>HelloWorld</code> resource"
>Routing.builder()
       .register("/jersey", <span class="conum" data-value="1" />
                 JerseySupport.builder()
                              .register(HelloWorld.class) <span class="conum" data-value="2" />
                              .build())
       .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2VZgb1" title="原文 : Register the Jersey application at /jersey context root"><code>/jersey</code>コンテキスト・ルートでのJerseyアプリケーションの登録</span></li>
<li data-value="2"><span class="merged" id="all.oufh1" title="原文 : The Jersey Application stays hidden and consists of a single HelloWorld resource class">Jersey <code>Application</code>は非表示のままで、単一の<code>HelloWorld</code>リソース・クラスで構成されます</span></li>
</ul>
<p><span class="merged" id="all.4ddCgm" title="原文 : As a result, an HTTP GET request to /jersey/hello would yield a Hello World! response string.">その結果、<code>/jersey/hello</code>へのHTTP GETリクエストによって<code>Hello World!</code>レスポンス文字列が生成されます。</span></p>


<h4 id="_registering_a_jax_rs_application"><span class="merged" id="all.1SpqnE" title="原文 : Registering a JAX-RS Application">JAX-RSアプリケーションの登録</span></h4>
<div class="section">
<p><span class="merged" id="all.2T1zEE" title="原文 : You can also register the JAX-RS Application object.">JAX-RS <code>Application</code>オブジェクトを登録することもできます。</span></p>

<markup
lang="java"
title="Register the <code>HelloWorld</code> resource"
>Routing.builder()
       .register("/jersey", <span class="conum" data-value="1" />
                 JerseySupport.builder(new MyApplication()) <span class="conum" data-value="2" />
                              .build())
       .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2VZgb1.1" title="原文 : Register the Jersey application at /jersey context root"><code>/jersey</code>コンテキスト・ルートでのJerseyアプリケーションの登録</span></li>
<li data-value="2"><span class="merged" id="all.1qDemE" title="原文 : MyApplication handles requests made to /jersey context root."><code>MyApplication</code>は、 /jerseyコンテキスト・ルートに対して行われたリクエストを処理します。</span></li>
</ul>
</div>

<h4 id="_accessing_webserver_internals_from_a_jax_rs_application"><span class="merged" id="all.34gm6B" title="原文 : Accessing WebServer Internals from a JAX-RS Application">JAX-RSアプリケーションからのWebServer内部へのアクセス</span></h4>
<div class="section">
<p><span class="merged" id="all.3PkpHQ" title="原文 : You can inject WebServer request and response objects into your JAX-RS application using @Context."><code>@Context</code>を使用して、WebServerリクエストおよびレスポンス・オブジェクトをJAX-RSアプリケーションにインジェクトできます。</span></p>

<markup
lang="java"
title="Injection of WebServer internal objects"
>@Path("/")
@RequestScoped
public class HelloWorld {
    @Context
    private ServerRequest request;

    @Context
    private ServerResponse response;
}</markup>

</div>
</div>
</div>
</doc-view>
