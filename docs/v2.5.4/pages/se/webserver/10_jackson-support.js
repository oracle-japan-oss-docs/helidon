<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.72"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.2UmVUi" title="原文 : To enable Jackson Support add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">Jacksonサポートを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.media&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-media-jackson&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_jackson_support"><span class="merged" id="all.2DXHdl" title="原文 : Jackson Support">Jacksonのサポート</span></h2>
<div class="section">
<p><span class="merged" id="all.13Y9qZ.spl1" title="原文 : The WebServer supports Jackson.">WebServerは、<a href="https://github.com/FasterXML/jackson#jackson-project-home-github" id="" target="_blank" >Jackson</a>をサポートしています。</span> <span class="merged" id="all.13Y9qZ.spl2" title="原文 : When this support is enabled, Java objects will be serialized to and deserialized from JSON automatically using Jackson.">このサポートが有効な場合、Javaオブジェクトは、Jacksonを使用してJSONに対して自動的に直列化および直列化復元されます。</span> </p>


<h3 id="_usage"><span class="merged" id="all.JUOSC.13"  title="原文:: Usage">使用方法</span></h3>
<div class="section">
<p><span class="merged" id="all.2Wh0qe" title="原文 : To enable Jackson support, first create and register a JacksonSupport instance with a WebServer.Builder.">Jacksonサポートを有効にするには、まず<a href="https://helidon.io/docs/latest/apidocs/io/helidon/media/jackson/JacksonSupport.html" id="" target="_blank" ><code>JacksonSupport</code></a>インスタンスを作成し、<a href="https://helidon.io/docs/latest/apidocs/io/helidon/webserver/WebServer.Builder.html" id="" target="_blank" ><code>WebServer.Builder</code></a>に登録します。</span></p>

<markup
lang="java"
title="Registration of the <code>JacksonSupport</code> via <code>WebServer</code>"
>JacksonSupport jacksonSupport = JacksonSupport.create(); <span class="conum" data-value="1" />
WebServer webServer = WebServer.builder()
    .addMediaSupport(jacksonSupport) <span class="conum" data-value="2" />
    .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.31xHCQ.spl1" title="原文 : Create a JacksonSupport instance."><code>JacksonSupport</code>インスタンスを作成します。</span> <span class="merged" id="all.31xHCQ.spl2" title="原文 : This instance may be reused freely.">このインスタンスは自由に再利用できます。</span> </li>
<li data-value="2"><span class="merged" id="all.1QJSpD" title="原文 : Register that JacksonSupport instance to enable automatic deserialization of Java objects from and serialization of Java objects to JSON.">その<code>JacksonSupport</code>インスタンスを登録して、JavaオブジェクトのJSONからの自動直列化復元およびJSONへの直列化を有効にします。</span></li>
</ul>
<p><span class="merged" id="all.3kfSyM.spl1" title="原文 : Now that automatic JSON serialization and deserialization facilities have been set up, you can register a Handler that works with Java objects instead of raw JSON.">JSONの自動直列化および直列化復元機能が設定されたので、RAW JSONのかわりにJavaオブジェクトで動作する<code>Handler</code>を登録できます。</span> <span class="merged" id="all.3kfSyM.spl2" title="原文 : Deserialization from and serialization to JSON will be handled by Jackson.">JSONからの直列化復元およびJSONへの直列化は、<a href="https://github.com/FasterXML/jackson#jackson-project-home-github" id="" target="_blank" >Jackson</a>によって処理されます。</span> </p>

<p><span class="merged" id="all.4eUl55.1" title="原文 : Suppose you have a Person class that looks like this:">次のような<code>Person</code>クラスがあるとします:</span></p>

<markup
lang="java"
title="Hypothetical <code>Person</code> class"
>public class Person {

    private String name;

    public Person() {
        super();
    }

    public String getName() {
        return this.name;
    }

    public void setName(final String name) {
        this.name = name;
    }
}</markup>

<p><span class="merged" id="all.ZgWx9.1" title="原文 : Then you can set up a Handler like this:">その後、次のように<code>Handler</code>を設定できます:</span></p>

<markup
lang="java"
title="A <code>Handler</code> that works with Java objects instead of raw JSON"
>final Routing routing =
    routingBuilder.post("/echo", <span class="conum" data-value="1" />
                        Handler.create(Person.class, <span class="conum" data-value="2" />
                                       (req, res, person) -&gt; res.send(person)))) <span class="conum" data-value="3" />
    .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.26pQSQ.1" title="原文 : Set up a route for POST requests using the Routing.Builder#post(String, Handler…​) method"><a href="https://helidon.io/docs/latest/apidocs/io/helidon/webserver/Routing.Builder.html#post-java.lang.String-io.helidon.webserver.Handler…​-" id="" target="_blank" >「<code>Routing.Builder#post(String, Handler…​)</code>メソッド」</a>を使用した<code>POST</code>リクエストのルートの設定</span></li>
<li data-value="2"><span class="merged" id="all.2zVFRX.1" title="原文 : Use the Handler#create(Class, Handler.EntityHandler) method to install a Handler.EntityHandler that works with Person instances."><a href="https://helidon.io/docs/latest/apidocs/io/helidon/webserver/Handler.html#create-java.lang.Class-io.helidon.webserver.Handler.EntityHandler-" id="" target="_blank" >「<code>Handler#create(Class, Handler.EntityHandler)</code>メソッド」</a>を使用して、<code>Person</code>インスタンスで動作する<code>Handler.EntityHandler</code>をインストールします。</span></li>
<li data-value="3"><span class="merged" id="all.OxlEj.1.spl1" title="原文 : This Handler.EntityHandler consumes a Person instance (person) and simply echoes it back.">この<code>Handler.EntityHandler</code>は、<code>Person</code>インスタンス(<code>person</code>)を使用し、単にエコー・バックします。</span> <span class="merged" id="all.OxlEj.1.spl2" title="原文 : Note that there is no working with raw JSON here.">ここではRAW JSONを使用しないことに注意してください。</span> </li>
</ul>
<markup
lang="bash"
title="Example of posting JSON to the <code>/echo</code> endpoint"
>curl --noproxy '*' -X POST -H "Content-Type: application/json" \
    http://localhost:8080/echo -d '{"name":"Joe"}'
{"name":"Joe"}</markup>

</div>
</div>
</doc-view>
