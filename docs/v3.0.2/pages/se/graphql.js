<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.46"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.44" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.32" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.18" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.26" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.28" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.19" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.60"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.4Jsst4.spl1" title="原文 : The Helidon GraphQL Server provides a framework for creating GraphQL applications that integrate with the Helidon WebServer.">Helidon GraphQLサーバーは、Helidon WebServerと統合する<a href="https://github.com/graphql-java/graphql-java" target="_blank">GraphQL</a>アプリケーションを作成するためのフレームワークを提供します。</span> <span class="merged" id="all.4Jsst4.spl2" title="原文 : GraphQL is a query language to access server data.">GraphQLは、サーバー・データにアクセスするための問合せ言語です。</span> <span class="merged" id="all.4Jsst4.spl3" title="原文 : The Helidon GraphQL integration enables HTTP clients to issue queries over the network and retrieve data; it is an alternative to other protocols such as REST or GRPC.">Helidon GraphQL統合により、HTTPクライアントはネットワークを介して問合せを発行し、データを取得できます。これは、RESTやGRPCなどの他のプロトコルに代わるものです。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.42"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.4VCyUH" title="原文 : To enable GraphQL add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">GraphQLを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.graphql&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-graphql-server&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.20"  title="原文:: API">API</span></h2>
<div class="section">
<p><span class="merged" id="all.gEyvx.spl1" title="原文 : An instance of GraphQlSupport must be registered in the Helidon WebServer routes to enable GraphQL support in your application.">アプリケーションでGraphQLサポートを有効にするには、<code>GraphQlSupport</code>のインスタンスをHelidon WebServerルートに登録する必要があります。</span> <span class="merged" id="all.gEyvx.spl2" title="原文 : In addition, a GraphQL schema needs to be specified to verify and execute queries.">また、問合せを検証して実行するには、GraphQLスキーマを指定する必要があります。</span> </p>

<p><span class="merged" id="all.4HJGoT" title="原文 : The following code fragment creates an instance of GraphQlSupport and registers it in the Helidon WebServer.">次のコード・フラグメントは、<code>GraphQlSupport</code>のインスタンスを作成し、Helidon WebServerに登録します。</span></p>

<markup
lang="java"

>    WebServer server = WebServer.builder()
            .routing(Routing.builder()
                            .register(GraphQlSupport.create(buildSchema()))
                            .build())
            .build();</markup>

<p><span class="merged" id="all.tL53M.spl1" title="原文 : By default, GraphQlSupport will reserve /graphql as the URI path to process queries.">デフォルトでは、<code>GraphQlSupport</code>は問合せを処理するURIパスとして<code>/graphql</code>を予約します。</span> <span class="merged" id="all.tL53M.spl2" title="原文 : The buildSchema method creates the schema and defines 2 types of queries for this application:"><code>buildSchema</code>メソッドはスキーマを作成し、このアプリケーションに対して2つのタイプの問合せを定義します:</span> </p>

<markup
lang="java"

>private static GraphQLSchema buildSchema() {
    String schema = "type Query{\n"    <span class="conum" data-value="1" />
            + "hello: String \n"
            + "helloInDifferentLanguages: [String] \n"
            + "\n}";

    SchemaParser schemaParser = new SchemaParser();
    TypeDefinitionRegistry typeDefinitionRegistry = schemaParser.parse(schema);

    // DataFetcher to return various hellos in difference languages  <span class="conum" data-value="2" />
    DataFetcher&lt;List&lt;String&gt;&gt; hellosDataFetcher = (DataFetcher&lt;List&lt;String&gt;&gt;) environment -&gt;
            List.of("Bonjour", "Hola", "Zdravstvuyte", "Nǐn hǎo", "Salve", "Gudday",
                    "Konnichiwa", "Guten Tag");

    RuntimeWiring runtimeWiring = RuntimeWiring.newRuntimeWiring()  <span class="conum" data-value="3" />
            .type("Query", builder -&gt; builder.dataFetcher("hello", new StaticDataFetcher("world")))
            .type("Query", builder -&gt; builder.dataFetcher("helloInDifferentLanguages", hellosDataFetcher))
            .build();

    SchemaGenerator schemaGenerator = new SchemaGenerator();
    return schemaGenerator.makeExecutableSchema(typeDefinitionRegistry, runtimeWiring);  <span class="conum" data-value="4" />
}</markup>

<p><span class="merged" id="all.2kkBHH" title="原文 : The following is a description of each of these steps:">次に、これらの各ステップについて説明します:</span></p>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.37GrbB" title="原文 : Define the GraphQL schema.">GraphQLスキーマを定義します。</span></li>
<li data-value="2"><span class="merged" id="all.2YWFFu" title="原文 : Create a DataFetcher to return a list of hellos in different languages."><code>DataFetcher</code>を作成して、様々な言語のhellosのリストを返します。</span></li>
<li data-value="3"><span class="merged" id="all.3Oe6zB" title="原文 : Wire up the DataFetcher s."><code>DataFetcher</code>をワイヤー・アップします。</span></li>
<li data-value="4"><span class="merged" id="all.USZUX" title="原文 : Generate the GraphQL schema.">GraphQLスキーマを生成します。</span></li>
</ul>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.31"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.3tsm8Z.1" title="原文 : The following configuration keys can be used to set up integration with WebServer:">次の構成キーを使用して、WebServerとの統合を設定できます:</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 22.222%;">
<col style="width: 22.222%;">
<col style="width: 55.556%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.108"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.G3u1e.109"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.114"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.o7Epu.1"  title="原文: graphql.web-context"><code>graphql.web-context</code></span></td>
<td class=""><span class="merged" id="all.Bt4TM.1"  title="原文: /graphql"><code>/graphql</code></span></td>
<td class=""><span class="merged" id="all.4Cp3rF.1" title="原文 : Context that serves the GraphQL endpoint.">GraphQLエンドポイントを提供するコンテキスト。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3eri48.1"  title="原文: graphql.schema-uri"><code>graphql.schema-uri</code></span></td>
<td class=""><span class="merged" id="all.4Xh5En.1"  title="原文: /schema.graphql"><code>/schema.graphql</code></span></td>
<td class=""><span class="merged" id="all.ywJfd.1" title="原文 : URI that serves the schema (under web context)">スキーマを提供するURI (webコンテキストの下)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3iTZx9.1"  title="原文: graphql.cors"><code>graphql.cors</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.wTXnq.1" title="原文 : CORS configuration for this service">このサービスのCORS構成</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.PEdHe.1"  title="原文: graphql.executor-service"><code>graphql.executor-service</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.2kZFB7.1" title="原文 : Configuration of ServerThreadPoolSupplier used to set up executor service">エグゼキュータ・サービスの設定に使用される<code>ServerThreadPoolSupplier</code>の構成</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.4PzzMs.1" title="原文 : The following configuration keys can be used to set up GraphQL invocation:">次の構成キーを使用して、GraphQLの起動を設定できます:</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 22.222%;">
<col style="width: 22.222%;">
<col style="width: 55.556%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.109"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.G3u1e.110"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.115"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1oBJga.1"  title="原文: graphql.default-error-message"><code>graphql.default-error-message</code></span></td>
<td class=""><span class="merged" id="all.Vry9w.2"  title="原文: Server Error"><code>Server Error</code></span></td>
<td class=""><span class="merged" id="all.AcQGf.2" title="原文 : Error message to send to caller in case of error">エラー発生時にコール元に送信するエラー・メッセージ</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.qBIYv.1"  title="原文: graphql.exception-white-list"><code>graphql.exception-white-list</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3zpEg6.2" title="原文 : Array of checked exception classes that should return default error message">デフォルトのエラー・メッセージを返すチェック例外クラスの配列</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.o9FPc.1"  title="原文: graphql.exception-black-list"><code>graphql.exception-black-list</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.16KeOU.2" title="原文 : Array of unchecked exception classes that should return message to caller (instead of default error message)">(デフォルトのエラー・メッセージのかわりに)コール元にメッセージを返す未チェックの例外クラスの配列</span></td>
</tr>
</tbody>
</table>
</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.31"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.18fc5Q" title="原文 : Using the schema defined in Section , you can probe the following endpoints:">セクション<router-link @click.native="this.scrollFix('#_api')" to="#_api"></router-link>で定義されたスキーマを使用すると、次のエンドポイントをプローブできます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.ZYuDY" title="原文 : Hello world endpoint">Hello worldエンドポイント</span>
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


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.21"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.3IzXwd" title="原文 : GraphQL Javadocs"><a href="./apidocs/io.helidon.graphql.server/module-summary.html" target="_blank">GraphQL Javadocs</a></span></p>

</li>
</ul>

</div>

</doc-view>
