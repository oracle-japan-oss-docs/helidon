<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.5"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.4" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.4" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.3" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.4" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.3" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.3" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.3" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.4"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.AUNjL.spl1" title="原文 : Helidon MP implements the MicroProfile GraphQL specification.">Helidon MPは、<a href="https://download.eclipse.org/microprofile/microprofile-graphql-2.0/microprofile-graphql-spec-2.0.html" target="_blank">「MicroProfile GraphQL仕様」</a>を実装します。</span> <span class="merged" id="all.AUNjL.spl2" title="原文 : This specifcation describes how applications can be built to expose an endpoint for GraphQL.">この指定では、GraphQLのエンドポイントを公開するためにアプリケーションを構築する方法について説明します。</span> <span class="merged" id="all.AUNjL.spl3" title="原文 : GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling data queries.">GraphQLは、API用のオープン・ソースのデータ問合せおよび操作言語であり、データ問合せを実行するためのランタイムです。</span> <span class="merged" id="all.AUNjL.spl4" title="原文 : It provides an alternative to, though not necessarily a replacement for, REST.">RESTの代替機能を提供します(必ずしも代替機能ではありません)。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.4"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.3m97GA" title="原文 : To enable MicroProfile GraphQL add the following dependency to your project’s pom.xml (see Managing Dependencies).">MicroProfile GraphQLを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.graphql&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-graphql-server&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.3"  title="原文:: API">API</span></h2>
<div class="section">
<p><span class="merged" id="all.1h24hb" title="原文 : The MicroProfile GraphQL specification defines a number of key annotations to be used when writing a GraphQL endpoint:">MicroProfile GraphQL仕様では、GraphQLエンドポイントの記述時に使用されるいくつかのキー注釈が定義されています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.398EpC" title="原文 : @GraphQLApi - identifies a CDI Bean as a GraphQL endpoint"><code>@GraphQLApi</code> - CDI BeanをGraphQLエンドポイントとして識別</span></p>

</li>
<li>
<p><span class="merged" id="all.2jPArF" title="原文 : @Query - identifies a method as returning one or more entities"><code>@Query</code> - 1つ以上のエンティティを返すメソッドを識別</span></p>

</li>
<li>
<p><span class="merged" id="all.28d8Hk" title="原文 : @Mutation - identifies a method which creates, deletes or updates entities"><code>@Mutation</code> - エンティティを作成、削除または更新するメソッドを識別</span></p>

</li>
</ul>

<p><span class="merged" id="all.20rjb6" title="原文 : For example, the following defines a GraphQL endpoint with a number of queries and mutations that work against a fictional CustomerService service and Customer class.">たとえば、次の例では、架空の<code>CustomerService</code>サービスおよび<code>Customer</code>クラスに対して機能する多数の問合せおよびミューテーションを含むGraphQLエンドポイントを定義します。</span></p>

<markup
lang="java"
title="Simple ContactGraphQLApi"
>@ApplicationScoped
@GraphQLApi
public class ContactGraphQLApi {

    @Inject
    private CustomerService customerService;

    @Query
    public Collection&lt;Customer&gt; findAllCustomers() {  <span class="conum" data-value="1" />
        return customerService.getAllCustomers();
    }

    @Query
    public Customer findCustomer(@Name("customerId") int id) {  <span class="conum" data-value="2" />
        return customerService.getCustomer(id);
    }

    @Query
    public Collection&lt;Customer&gt; findCustomersByName(@Name("name") String name) {  <span class="conum" data-value="3" />
        return customerService.getAllCustomers(name);
    }

    @Mutation
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
<li data-value="1"><span class="merged" id="all.f5DWd" title="原文 : a query with no-arguments that will return all Customer s">すべての<code>Customer</code>を返す引数なしの問合せ</span></li>
<li data-value="2"><span class="merged" id="all.KEJmD" title="原文 : a query that takes an argument to return a specific Customer">特定の<code>Customer</code>を返すために引数を取る問合せ</span></li>
<li data-value="3"><span class="merged" id="all.4SUoJr" title="原文 : a query that optionally takes a name and returns a collection of Customer s">オプションで名前を取得し、<code>Customer</code>のコレクションを返す問合せ</span></li>
<li data-value="4"><span class="merged" id="all.KORHa" title="原文 : a mutation that creates a Customer and returns the newly created Customer">顧客を作成し、新しく作成した<code>Customer</code>を返す突然変異</span></li>
</ul>

<p><span class="merged" id="all.218fsV" title="原文 : The example above would generate a GraphQL schema as shown below:">前述の例では、次に示すようにGraphQLスキーマが生成されます:</span></p>

<markup
lang="graphql"
title="Sample GraphQL schema"
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

<p><span class="merged" id="all.brUVw" title="原文 : After application startup, a GraphQL schema will be generated from your annotated API classes and POJO’s and you will be able to access these via the URLs described below.">アプリケーションの起動後、注釈付きAPIクラスおよびPOJOからGraphQLスキーマが生成され、次に示すURLからアクセスできます。</span></p>


<h3 id="_building_your_application"><span class="merged" id="all.3EsoBf"  title="原文:: Building your application">アプリケーションの構築</span></h3>
<div class="section">
<p><span class="merged" id="all.K8CPf" title="原文 : As part of building your application, you must create a Jandex index using the jandex-maven-plugin for all API and POJO classes.">アプリケーションの構築の一環として、すべてのAPIクラスおよびPOJOクラスの<code>jandex-maven-plugin</code>を使用してJandex索引を作成する必要があります。</span></p>

<markup
lang="xml"
title="Generate Jandex index"
>&lt;plugin&gt;
    &lt;groupId&gt;io.smallrye&lt;/groupId&gt;
    &lt;artifactId&gt;jandex-maven-plugin&lt;/artifactId&gt;
    &lt;executions&gt;
        &lt;execution&gt;
            &lt;id&gt;make-index&lt;/id&gt;
        &lt;/execution&gt;
    &lt;/executions&gt;
&lt;/plugin&gt;</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1MGXVQ" title="原文 : As per the instructions here ensure you have added a src/main/resources/META-INF/beans.xml file, so the CDI implementation can pick up your classes."><router-link to="/mp/introduction/microprofile">「こちら」</router-link>の指示に従って、CDI実装がクラスを取得できるように<code>src/main/resources/META-INF/beans.xml</code>ファイルを追加したことを確認します。</span></p>
</div>

</div>


<h3 id="_accessing_the_graphql_endpoints"><span class="merged" id="all.1Eea6I" title="原文 : Accessing the GraphQL endpoints">GraphQLエンドポイントへのアクセス</span></h3>
<div class="section">
<p><span class="merged" id="all.2yEcZx.spl1" title="原文 : After starting your application you should see a log message indicating that GraphQL is in the list of features.">アプリケーションを起動すると、GraphQLが機能のリストにあることを示すログ・メッセージが表示されます。</span> <span class="merged" id="all.2yEcZx.spl2" title="原文 : You can access the GraphQL endpoint at http://host:port/graphql, and the corresponding schema at http://host:port/graphql/schema.graphql."><code><a class="bare" href="http://host:port/graphql" target="_blank">http://host:port/graphql</a></code>のGraphQLエンドポイント、および<code><a class="bare" href="http://host:port/graphql/schema.graphql" target="_blank">http://host:port/graphql/schema.graphql</a></code>の対応するスキーマにアクセスできます。</span> <span class="merged" id="all.2yEcZx.spl3" title="原文 : See for additional information on how to change the location of these resources.">これらのリソースのロケーションを変更する方法の詳細は、<router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration"></router-link>を参照してください。</span> </p>

<p><span class="merged" id="all.3zSBqa" title="原文 : If you wish to use the GraphQL UI then please see the GraphQL MP Example."><a href="https://github.com/graphql/graphiql" target="_blank">GraphQL UI</a>を使用する場合は、<a href="https://github.com/oracle/helidon/tree/4.0.2/examples/microprofile/graphql" target="_blank">「GraphQL MPの例」</a>を参照してください。</span></p>

</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.4"  title="原文:: Configuration">構成</span></h2>
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
<th><span class="merged" id="all.2XKMH3.109"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.G3u1e.109"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.110"  title="原文:: description">説明</span></th>
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
<th><span class="merged" id="all.2XKMH3.110"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.G3u1e.110"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.111"  title="原文:: description">説明</span></th>
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
<th><span class="merged" id="all.2XKMH3.111"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.G3u1e.111"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.112"  title="原文:: description">説明</span></th>
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


<h2 id="_examples"><span class="merged" id="all.2OLHXv.3"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.rioFe" title="原文 : For a complete example, see GraphQL MP Example.">完全な例については、<a href="https://github.com/oracle/helidon/tree/4.0.2/examples/microprofile/graphql" target="_blank">「GraphQL MPの例」</a>を参照してください。</span></p>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.4"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1ajZDc"  title="原文:: GraphQL."><a href="http://graphql.org" target="_blank">GraphQL</a></span></p>

</li>
</ul>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.3"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1OhYFh" title="原文 : MicroProfile GraphQL Javadocs."><a href="{microprofile-rest-graphql-url}/apidocs" target="_blank">MicroProfile GraphQL Javadocs</a>。</span></p>

</li>
</ul>

</div>

</doc-view>
