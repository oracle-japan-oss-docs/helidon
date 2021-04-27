<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3c11PN" title="原文 : MicroProfile GraphQL">MicroProfile GraphQL</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1R5H4e" title="原文 : The Microprofile GraphQL APIs are an extension to Helidon MP to allow building of applications that can expose a GraphQL endpoint.">Microprofile GraphQL APIは、GraphQLエンドポイントを公開できるアプリケーションを構築できるようにするための<router-link @click.native="this.scrollFix('#microprofile/01_introduction.adoc')" to="#microprofile/01_introduction.adoc">Helidon MP</router-link>の拡張機能です。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_experimental"><span class="merged" id="all.3qlK5J"  title="原文:: Experimental">試作</span></h2>
<div class="section">
<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.1Yszz0" title="原文 : The Helidon GraphQL feature is currently experimental and the APIs are subject to changes until GraphQL support is stabilized.">Helidon GraphQL機能は現在試験的であり、APIはGraphQLサポートが安定するまで変更される可能性があります。</span></p>
</div>
</div>

<h2 id="_about_the_microprofile_graphql_specification"><span class="merged" id="all.3FAKkB" title="原文 : About the MicroProfile GraphQL Specification">MicroProfile GraphQL仕様について</span></h2>
<div class="section">
<p><span class="merged" id="all.1DOdYB.spl1" title="原文 : Helidon MP implements the MicroProfile GraphQL spec version 1.0.3.">Helidon MPは、MicroProfile GraphQL <a href="https://github.com/eclipse/microprofile-graphql" id="" target="_blank" >spec</a>バージョン1.0.3を実装しています。</span> <span class="merged" id="all.1DOdYB.spl2" title="原文 : The spec prescribes how applications can be built to expose an endpoint for GraphQL.">仕様には、GraphQLのエンドポイントを公開するためのアプリケーションの構築方法が規定されています。</span> <span class="merged" id="all.1DOdYB.spl3" title="原文 : GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data.">GraphQLは、APIのオープンソースのデータ問合せおよび操作言語であり、問合せを既存のデータで実行するためのランタイムです。</span> <span class="merged" id="all.1DOdYB.spl4" title="原文 : It provides an alternative to, though not necessarily a replacement for, REST.">RESTの代替機能を提供します(必ずしも代替機能ではありません)。</span> </p>

<p><span class="merged" id="all.nXkYc" title="原文 : For more information on GraphQL see https://graphql.org/.">GraphQLの詳細は、<a href="https://graphql.org/" id="" target="_blank" >https://graphql.org/</a>を参照してください。</span></p>

</div>

<h2 id="_maven_coordinates"><span class="merged" id="all.317oeS" title="原文 : Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.3Y1dJo.spl1" title="原文 : The Managing Dependencies page describes how you should declare dependency management for Helidon applications."><router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>ページでは、Helidonアプリケーションの依存性管理を宣言する方法について説明します。</span> <span class="merged" id="all.3Y1dJo.spl2" title="原文 : Then declare the following dependency in your project:">次に、プロジェクトで次の依存性を宣言します:</span> </p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.graphql&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-graphql-server&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_getting_started"><span class="merged" id="all.J6ASm.2"  title="原文:: Getting Started">開始</span></h2>
<div class="section">

<h3 id="_defining_your_api"><span class="merged" id="all.1seXeR" title="原文 : Defining your API">APIの定義</span></h3>
<div class="section">
<p><span class="merged" id="all.1h24hb" title="原文 : The MicroProfile GraphQL specification defines a number of key annotations to be used when writing a GraphQL endpoint:">MicroProfile GraphQL仕様では、GraphQLエンドポイントの記述時に使用されるいくつかのキー注釈が定義されています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1VrBZA" title="原文 : @GraphQLApi - identifies a CDI Bean as a GraphQL Endpoint"><code>@GraphQLApi</code> - CDI BeanをGraphQLエンドポイントとして識別</span></p>

</li>
<li>
<p><span class="merged" id="all.EVmYG" title="原文 : @Query - identifies a method as returning specified fields for an object or collection of entities"><code>@Query</code> - オブジェクトまたはエンティティのコレクションに対して指定されたフィールドを返すメソッドを識別</span></p>

</li>
<li>
<p><span class="merged" id="all.28d8Hk" title="原文 : @Mutation - identifies a method which creates, deletes or updates entities"><code>@Mutation</code> - エンティティを作成、削除または更新するメソッドを識別</span></p>

</li>
</ul>
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.4EqDya" title="原文 : Please see the Microprofile GraphQL spec for the full list of available annotations.">使用可能な注釈の完全なリストは、<a href="https://github.com/eclipse/microprofile-graphql" id="" target="_blank" >「Microprofile GraphQL仕様」</a>を参照してください。</span></p>
</div>
<p><span class="merged" id="all.20rjb6" title="原文 : For example, the following defines a GraphQL endpoint with a number of queries and mutations that work against a fictional CustomerService service and Customer class.">たとえば、次の例では、架空の<code>CustomerService</code>サービスおよび<code>Customer</code>クラスに対して機能する多数の問合せおよびミューテーションを含むGraphQLエンドポイントを定義します。</span></p>

<markup
lang="java"
title="単純なContactGraphQLApi"
>@ApplicationScoped
@org.eclipse.microprofile.graphql.GraphQLApi
public class ContactGraphQLApi {

    @Inject
    private CustomerService customerService;

    @org.eclipse.microprofile.graphql.Query
    public Collection&lt;Customer&gt; findAllCustomers() {  <span class="conum" data-value="1" />
        return customerService.getAllCustomers();
    }

    @org.eclipse.microprofile.graphql.Query
    public Customer findCustomer(@Name("customerId") int id) {  <span class="conum" data-value="2" />
        return customerService.getCustomer(id);
    }

    @org.eclipse.microprofile.graphql.Query
    public Collection&lt;Customer&gt; findCustomersByName(@Name("name") String name) {  <span class="conum" data-value="3" />
        return customerService.getAllCustomers(name);
    }

    @org.eclipse.microprofile.graphql.Mutation
    public Contact createCustomer(@Name("customerId") int id,  <span class="conum" data-value="4" />
                                  @Name("name") String name,
                                  @Name("balance") float balance) {
        return customerService.createCustomer(id, name, balance);
    }
}

public class customer {
    private int id;
    @NonNull
    private String name;
    private float balance;

    // getters and setters omitted for brevity
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.22Ktz3" title="原文 : a query with no-arguments that will return all Customers">すべてのCustomersを返す引数なしの問合せ</span></li>
<li data-value="2"><span class="merged" id="all.4OlACi" title="原文 : a query that takes an argument to return a specific Customer">特定の顧客を返す引数を取る問合せ</span></li>
<li data-value="3"><span class="merged" id="all.1SOB9p" title="原文 : a query that optionally takes a name and returns a collection of Customers">オプションで名前を取り、Customersのコレクションを返す問合せ</span></li>
<li data-value="4"><span class="merged" id="all.hig2J" title="原文 : a mutation that creates a Customer and returns the newly created Customer">Customerを作成し、新しく作成されたCustomerを返すミューテーション</span></li>
</ul>
<p><span class="merged" id="all.1l5rRI" title="原文 : The above would generate a GraphQL schema as shown below:">前述の例では、次に示すようにGraphQLスキーマが生成されます:</span></p>

<markup
lang="graphql"
title="サンプルGraphQLスキーマ"
>type Query {
   findAllCustomers: [Customer]
   findCustomer(customerId: Int!): Customer
   findCustomersByName(name: String): [Customers]
}

type Mutation {
   createCustomer(customerId: Int!, name: String!, balance: Float!): Customer
}

type Customer {
   id: Int!
   name: String!
   balance: Float
}</markup>

<p><span class="merged" id="all.28O9zW" title="原文 : After application startup, a GraphQL schema will be generated from your annotated API classes and POJO&rsquo;s and you will be able to access these via the URL&rsquo;s described below.">アプリケーションの起動後、注釈付きAPIクラスおよびPOJOからGraphQLスキーマが生成され、次に説明するURLを介してこれらにアクセスできるようになります。</span></p>

</div>

<h3 id="_creating_your_entry_point"><span class="merged" id="all.1P7bkI" title="原文 : Creating your entry-point">エントリ・ポイントの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.4OwSP6" title="原文 : As per the instructions here ensure you have added a src/main/resources/META-INF/beans.xml file, so the CDI implementation can pick up your classes."><router-link to="/mp/introduction/02_microprofile">「こちら」</router-link>の指示に従って、CDI実装がクラスを取得できるように<code>src/main/resources/META-INF/beans.xml</code>ファイルを追加したことを確認します。</span></p>

<p><span class="merged" id="all.10145C" title="原文 : A Main class is not needed, you can configure io.helidon.microprofile.cdi.Main as the entry point."><code>Main</code>クラスは不要です。<code>io.helidon.microprofile.cdi.Main</code>をエントリ・ポイントとして構成できます。</span></p>

<p><span class="merged" id="all.3j7Yhm" title="原文 : Optionally, you can configure a custom entry point (such as when you need custom configuration setup).">オプションで、カスタム・エントリ・ポイントを構成できます(カスタム構成設定が必要な場合など)。</span></p>

<markup
lang="java"
title="サンプル・エントリ・ポイント"
>public class MyMain {
    public static void main(String[] args) {
        io.helidon.microprofile.cdi.Main.main(args);
    }
}</markup>

</div>

<h3 id="_building_your_application"><span class="merged" id="all.3EsoBf"  title="原文:: Building your application">アプリケーションの構築</span></h3>
<div class="section">
<p><span class="merged" id="all.3EY4xQ" title="原文 : As part of building your application, you must create a Jandex index using the jandex-maven-plugin for all API and POJO classes that are used.">アプリケーションのビルドの一環として、使用されるすべてのAPIおよびPOJOクラスに対して<code>jandex-maven-plugin</code>を使用してJandex索引を作成する必要があります。</span></p>

<markup
lang="xml"
title="Jandex索引の生成"
>&lt;plugin&gt;
&lt;groupId&gt;org.jboss.jandex&lt;/groupId&gt;
&lt;artifactId&gt;jandex-maven-plugin&lt;/artifactId&gt;
&lt;executions&gt;
  &lt;execution&gt;
    &lt;id&gt;make-index&lt;/id&gt;
  &lt;/execution&gt;
&lt;/executions&gt;
&lt;/plugin&gt;</markup>

</div>
</div>

<h2 id="_accessing_the_graphql_end_points"><span class="merged" id="all.4fGPw2" title="原文 : Accessing the GraphQL end-points">GraphQLエンドポイントへのアクセス</span></h2>
<div class="section">
<p><span class="merged" id="all.3NTYKB" title="原文 : After starting your application you should see a message similar to the following indicating the GraphQL support is available:">アプリケーションを起動すると、GraphQLサポートが使用可能であることを示す次のようなメッセージが表示されます:</span></p>

<markup
lang="bash"
title="サンプルの起動出力"
>2020.11.16 12:29:58 INFO io.helidon.common.HelidonFeatures Thread[features-thread,5,main]: Helidon MP 2.1.1-SNAPSHOT features: [CDI, Config, Fault Tolerance, GraphQL, Health, JAX-RS, Metrics, Open API, Security, Server, Tracing]
2020.11.16 12:29:58 INFO io.helidon.common.HelidonFeatures.experimental Thread[features-thread,5,main]: You are using experimental features. These APIs may change, please follow changelog!
2020.11.16 12:29:58 INFO io.helidon.common.HelidonFeatures.experimental Thread[features-thread,5,main]: 	Experimental feature: GraphQL (GraphQL)</markup>

<p><span class="merged" id="all.4aTLmt" title="原文 : You can then use your GraphQL client via the default endpoint http://host:port/graphql.">その後、デフォルトのエンドポイント<code><a href="http://host:port/graphql" id="" target="_blank" >http://host:port/graphql</a></code>を介してGraphQLクライアントを使用できます。</span></p>

<p><span class="merged" id="all.1wF8CO" title="原文 : The GraphQL Schema is available via http://host:port/graphql/schema.graphql.">GraphQL Schemaは<code><a href="http://host:port/graphql/schema.graphql" id="" target="_blank" >http://host:port/graphql/schema.graphql</a></code>を介して使用できます。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.2IlOnH" title="原文 : If you wish to use the GraphiQL UI (https://github.com/graphql/graphiql) then please see the Helidon Microprofile GraphQL example at the following URL: https://github.com/oracle/helidon/tree/master/examples/microprofile/graphql">GraphiQL UI (<a href="https://github.com/graphql/graphiql" id="" target="_blank" >https://github.com/graphql/graphiql</a>)を使用する場合は、次のURLでHelidon Microprofile GraphQLの例を参照してください : <a href="https://github.com/oracle/helidon/tree/master/examples/microprofile/graphql" id="" target="_blank" >https://github.com/oracle/helidon/tree/master/examples/microprofile/graphql</a></span></p>
</div>
</div>

<h2 id="_configuration_options"><span class="merged" id="all.276fEP"  title="原文:: Configuration Options">構成オプション</span></h2>
<div class="section">

<h3 id="_microprofile_graphql"><span class="merged" id="all.3c11PN.1" title="原文 : MicroProfile GraphQL">MicroProfile GraphQL</span></h3>
<div class="section">
<p><span class="merged" id="all.6vgC0" title="原文 : The specification defines the following configuration options:">仕様では、次の構成オプションが定義されています:</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 22.222%;">
<col style="width: 22.222%;">
<col style="width: 55.556%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.G3u1e"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2vvWCx"  title="原文: mp.graphql.defaultErrorMessage"><code>mp.graphql.defaultErrorMessage</code></span></td>
<td class=""><span class="merged" id="all.Vry9w"  title="原文: Server Error"><code>Server Error</code></span></td>
<td class=""><span class="merged" id="all.AcQGf" title="原文 : Error message to send to caller in case of error">エラー発生時にコール元に送信するエラー・メッセージ</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.CxeNm"  title="原文: mp.graphql.exceptionsBlackList"><code>mp.graphql.exceptionsBlackList</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3zpEg6" title="原文 : Array of checked exception classes that should return default error message">デフォルトのエラー・メッセージを返すチェック例外クラスの配列</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.GPXgZ"  title="原文: mp.graphql.exceptionsWhiteList"><code>mp.graphql.exceptionsWhiteList</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.16KeOU" title="原文 : Array of unchecked exception classes that should return message to caller (instead of default error message)">(デフォルトのエラー・メッセージのかわりに)コール元にメッセージを返す未チェックの例外クラスの配列</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.2ITARX" title="原文 : These configuration options are more significant that the configuration options that can be used to configure GraphQL invocation (see below).">これらの構成オプションは、GraphQLの起動を構成するために使用できる構成オプションよりも重要です(次を参照)。</span></p>

</div>

<h3 id="_helidon_graphql"><span class="merged" id="all.3b6A9I" title="原文 : Helidon GraphQL">Helidon GraphQL</span></h3>
<div class="section">
<p><span class="merged" id="all.3NfMm1" title="原文 : In addition, we provide the following configuration options:">さらに、次の構成オプションが用意されています:</span></p>

<p><span class="merged" id="all.3tsm8Z" title="原文 : The following configuration keys can be used to set up integration with WebServer:">次の構成キーを使用して、WebServerとの統合を設定できます:</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 22.222%;">
<col style="width: 22.222%;">
<col style="width: 55.556%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.1"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.G3u1e.1"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.1"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.o7Epu"  title="原文: graphql.web-context"><code>graphql.web-context</code></span></td>
<td class=""><span class="merged" id="all.Bt4TM"  title="原文: /graphql"><code>/graphql</code></span></td>
<td class=""><span class="merged" id="all.4Cp3rF" title="原文 : Context that serves the GraphQL endpoint.">GraphQLエンドポイントを提供するコンテキスト。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3eri48"  title="原文: graphql.schema-uri"><code>graphql.schema-uri</code></span></td>
<td class=""><span class="merged" id="all.4Xh5En"  title="原文: /schema.graphql"><code>/schema.graphql</code></span></td>
<td class=""><span class="merged" id="all.ywJfd" title="原文 : URI that serves the schema (under web context)">スキーマを提供するURI (webコンテキストの下)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3iTZx9"  title="原文: graphql.cors"><code>graphql.cors</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.wTXnq" title="原文 : CORS configuration for this service">このサービスのCORS構成</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.PEdHe"  title="原文: graphql.executor-service"><code>graphql.executor-service</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.2kZFB7" title="原文 : Configuration of ServerThreadPoolSupplier used to set up executor service">エグゼキュータ・サービスの設定に使用される<code>ServerThreadPoolSupplier</code>の構成</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.4PzzMs" title="原文 : The following configuration keys can be used to set up GraphQL invocation:">次の構成キーを使用して、GraphQLの起動を設定できます:</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 22.222%;">
<col style="width: 22.222%;">
<col style="width: 55.556%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.2"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.G3u1e.2"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.2"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1oBJga"  title="原文: graphql.default-error-message"><code>graphql.default-error-message</code></span></td>
<td class=""><span class="merged" id="all.Vry9w.1"  title="原文: Server Error"><code>Server Error</code></span></td>
<td class=""><span class="merged" id="all.AcQGf.1" title="原文 : Error message to send to caller in case of error">エラー発生時にコール元に送信するエラー・メッセージ</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.qBIYv"  title="原文: graphql.exception-white-list"><code>graphql.exception-white-list</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3zpEg6.1" title="原文 : Array of checked exception classes that should return default error message">デフォルトのエラー・メッセージを返すチェック例外クラスの配列</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.o9FPc"  title="原文: graphql.exception-black-list"><code>graphql.exception-black-list</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.16KeOU.1" title="原文 : Array of unchecked exception classes that should return message to caller (instead of default error message)">(デフォルトのエラー・メッセージのかわりに)コール元にメッセージを返す未チェックの例外クラスの配列</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</doc-view>
