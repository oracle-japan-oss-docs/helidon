<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2wJyQi" title="原文 : GraphQL Server Introduction">GraphQLサーバーの概要</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2lvVhi" title="原文 : Helidon GraphQL Server provides a framework for creating GraphQL applications.">Helidon GraphQL Serverは、<a href="https://github.com/graphql-java/graphql-java" id="" target="_blank" >GraphQL</a>アプリケーションを作成するためのフレームワークを提供します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_experimental"><span class="merged" id="all.3qlK5J.5"  title="原文:: Experimental">試作</span></h2>
<div class="section">
<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.1Yszz0.1" title="原文 : The Helidon GraphQL feature is currently experimental and the APIs are subject to changes until GraphQL support is stabilized.">Helidon GraphQL機能は現在試験的であり、APIはGraphQLサポートが安定するまで変更される可能性があります。</span></p>
</div>
</div>

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.41" title="原文 : Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.gHWxu" title="原文 : To enable GraphQL add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">GraphQLを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.graphql&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-graphql-server&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_quick_start"><span class="merged" id="all.2FbcJI"  title="原文:: Quick Start">クイック・スタート</span></h2>
<div class="section">
<p><span class="merged" id="all.3g8uN1" title="原文 : Here is the code for a minimalist GraphQL application that exposes 2 queries.">次に、2つの問合せを公開する最小限のGraphQLアプリケーションのコードを示します。</span></p>

<markup
lang="java"

>    public static void main(String[] args) {
        WebServer server = WebServer.builder()
                .routing(Routing.builder()
                                 .register(GraphQlSupport.create(buildSchema()))  <span class="conum" data-value="1" />
                                 .build())
                .build();

        server.start()  <span class="conum" data-value="2" />
               .thenApply(webServer -&gt; {
                   String endpoint = "http://localhost:" + webServer.port();
                   System.out.println("GraphQL started on " + endpoint + "/graphql");
                   System.out.println("GraphQL schema availanle on " + endpoint + "/graphql/schema.graphql");
                   return null;
               });
    }

    private static GraphQLSchema buildSchema() {
        String schema = "type Query{\n"    <span class="conum" data-value="3" />
                + "hello: String \n"
                + "helloInDifferentLanguages: [String] \n"
                + "\n}";

        SchemaParser schemaParser = new SchemaParser();
        TypeDefinitionRegistry typeDefinitionRegistry = schemaParser.parse(schema);

        // DataFetcher to return various hello's in difference languages  <span class="conum" data-value="4" />
        DataFetcher&lt;List&lt;String&gt;&gt; hellosDataFetcher = (DataFetcher&lt;List&lt;String&gt;&gt;) environment -&gt;
                List.of("Bonjour", "Hola", "Zdravstvuyte", "Nǐn hǎo", "Salve", "Gudday", "Konnichiwa", "Guten Tag");

        RuntimeWiring runtimeWiring = RuntimeWiring.newRuntimeWiring()  <span class="conum" data-value="5" />
                .type("Query", builder -&gt; builder.dataFetcher("hello", new StaticDataFetcher("world")))
                .type("Query", builder -&gt; builder.dataFetcher("helloInDifferentLanguages", hellosDataFetcher))
                .build();

        SchemaGenerator schemaGenerator = new SchemaGenerator();
        return schemaGenerator.makeExecutableSchema(typeDefinitionRegistry, runtimeWiring);  <span class="conum" data-value="6" />
    }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3yDtFR" title="原文 : Register GraphQL support.">GraphQLサポートを登録します。</span></li>
<li data-value="2"><span class="merged" id="all.4MC0LP"  title="原文:: Start the server.">サーバーを起動します。</span></li>
<li data-value="3"><span class="merged" id="all.37GrbB" title="原文 : Define the GraphQL schema.">GraphQLスキーマを定義します。</span></li>
<li data-value="4"><span class="merged" id="all.SWOF" title="原文 : Create a DataFetcher to return a List of Hellos in different languages.">異なる言語のローのリストを返すDataFetcherを作成します。</span></li>
<li data-value="5"><span class="merged" id="all.qDYg4" title="原文 : Wire up the DataFetchers.">DataFetchersを接続します。</span></li>
<li data-value="6"><span class="merged" id="all.USZUX" title="原文 : Generate the GraphQL schema.">GraphQLスキーマを生成します。</span></li>
</ul>
<p><span class="merged" id="all.9zkSi" title="原文 : The example above deploys a very simple service exposing the /graphql endpoint.">前述の例では、<code>/graphql</code>エンドポイントを公開する非常に単純なサービスをデプロイします。</span></p>

<p><span class="merged" id="all.2aacc9" title="原文 : You can then probe the endpoints:">次に、エンドポイントをプローブできます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.4ek4Hn" title="原文 : Hello word endpoint">Helloワード・エンドポイント</span>
<markup
lang="bash"

>curl -X POST http://127.0.0.1:PORT/graphql -d '{"query":"query { hello }"}'

"data":{"hello":"world"}}</markup>

</li>
<li>
<span class="merged" id="all.37E25Y" title="原文 : Hello in different languages">異なる言語でのHello</span>
<markup
lang="bash"

>curl -X POST http://127.0.0.1:PORT/graphql -d '{"query":"query { helloInDifferentLanguages }"}'

{"data":{"helloInDifferentLanguages":["Bonjour","Hola","Zdravstvuyte","Nǐn hǎo","Salve","Gudday","Konnichiwa","Guten Tag"]}}</markup>

</li>
</ol>
</div>
</doc-view>
