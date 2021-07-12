<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.66" title="原文 : Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.19aBve" title="原文 : To enable JSON Support add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">JSONサポートを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.media&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-media-jsonp&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_json_support"><span class="merged" id="all.1dpXAk" title="原文 : Json Support">Jsonサポート</span></h2>
<div class="section">
<p><span class="merged" id="all.3OJjiJ.spl1" title="原文 : The WebServer supports JSON-P.">WebServerはJSON-Pをサポートしています。</span> <span class="merged" id="all.3OJjiJ.spl2" title="原文 : When enabled, you can send and receive JSON-P objects transparently.">有効にすると、JSON-Pオブジェクトを透過的に送受信できます。</span> </p>


<h3 id="_usage"><span class="merged" id="all.JUOSC.10"  title="原文:: Usage">使用方法</span></h3>
<div class="section">
<p><span class="merged" id="all.1mX58H.spl1" title="原文 : To enable JSON-P support, first register it with the web server.">JSON-Pサポートを有効にするには、まずwebサーバーに登録します。</span> <span class="merged" id="all.1mX58H.spl2" title="原文 : Then you can add routes that handle and return JSON.">その後、JSONを処理して返すルートを追加できます。</span> </p>

<markup
lang="java"
title="JsonpSupportを構成し、エンティティの読取りおよび書込みに使用"
>JsonpSupport jsonbSupport = JsonpSupport.create(); <span class="conum" data-value="1" />
WebServer webServer = WebServer.builder()
    .addMediaSupport(jsonpSupport) <span class="conum" data-value="2" />
    .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.44kSS1" title="原文 : Register JsonpSupport to enable transformation from and to JsonObject objects">JsonpSupportを登録して、<code>JsonObject</code>オブジェクトとの間の変換を可能にします</span></li>
<li data-value="2"><span class="merged" id="all.2RtWLx" title="原文 : Register that JsonpSupport instance to enable automatic deserialization of Java objects from and serialization of Java objects to JSON.">そのJsonpSupportインスタンスを登録して、JavaオブジェクトのJSONからの自動直列化復元およびJSONへの直列化を有効にします。</span></li>
</ul>
<markup
lang="java"
title="JSONオブジェクトを受信して返すハンドラ"
>private static final JsonBuilderFactory JSON_FACTORY = Json.createBuilderFactory(Collections.emptyMap()); <span class="conum" data-value="1" />

private void sayHello(ServerRequest req, ServerResponse res, JsonObject json) { <span class="conum" data-value="2" />
        JsonObject msg = JSON_FACTORY.createObjectBuilder()   <span class="conum" data-value="3" />
          .add("message", "Hello " + json.getString("name"))
          .build();
        res.send(msg);                            <span class="conum" data-value="4" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3RBreb" title="原文 : Using a JsonBuilderFactory is more efficient than Json.createObjectBuilder()"><code>JsonBuilderFactory</code>の使用は、<code>Json.createObjectBuilder()</code>よりも効率的です</span></li>
<li data-value="2"><span class="merged" id="all.1Dpxm5" title="原文 : JsonObject is passed to handler">JsonObjectはハンドラに渡されます</span></li>
<li data-value="3"><span class="merged" id="all.2dvXIE" title="原文 : Create a JsonObject using JSON-P to hold return data">JSON-Pを使用して戻りデータを保持するJsonObjectの作成</span></li>
<li data-value="4"><span class="merged" id="all.2Axpbh" title="原文 : Send JsonObject in response">レスポンスでJsonObjectを送信</span></li>
</ul>
<markup
lang="bash"
title="sayHelloエンドポイントへのJSONのポストの例"
>curl --noproxy '*' -X POST -H "Content-Type: application/json" \
    http://localhost:8080/sayhello -d '{"name":"Joe"}'
{"message":"Hello Joe"}</markup>

</div>

<h3 id="_configuring_json_readerwriter_factories"><span class="merged" id="all.203xz0" title="原文 : Configuring Json Reader/Writer factories">Jsonリーダー/ライター・ファクトリの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.24D4D" title="原文 : To configure JSON-P JsonReaderFactory and JsonWriterFactory that are used by the JsonpSupport instance, create the JsonpSupport object:"><code>JsonpSupport</code>インスタンスで使用されるJSON-P <code>JsonReaderFactory</code>および<code>JsonWriterFactory</code>を構成するには、<code>JsonpSupport</code>オブジェクトを作成します:</span></p>

<markup
lang="java"
title="指定された構成で<code>JsonpSupport</code>を作成"
>JsonpSupport.create(Map.of(JsonGenerator.PRETTY_PRINTING, false))</markup>

</div>
</div>
</doc-view>
