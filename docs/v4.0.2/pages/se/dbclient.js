<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.49"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.48" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.34" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.29" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.16" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.28" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.18" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.64"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.qwLXE" title="原文 : The Helidon SE DB Client provides a unified API for working with databases.">Helidon SE DBクライアントは、データベースを操作するための統合APIを提供します。</span></p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.42"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.3HlkJo" title="原文 : To enable DB Client add the following dependency to your project’s pom.xml (see Managing Dependencies).">DBクライアントを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.dbclient&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-dbclient&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.4AZBqb" title="原文 : To use with a JDBC client also add the following dependency:">JDBCクライアントで使用するには、次の依存関係も追加します:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.dbclient&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-dbclient-jdbc&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.180MLQ" title="原文 : Or to use with MongoDB client add the following dependency:">または、MongoDBクライアントで使用するには、次の依存関係を追加します:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.dbclient&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-dbclient-mongodb&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.46"  title="原文:: Usage">使用</span></h2>
<div class="section">
<p><span class="merged" id="all.3ZBmwH.spl1" title="原文 : The DB Client simplifies how you work with databases by abstracting the type of the database.">DBクライアントは、データベースのタイプを抽象化することで、データベースの操作を簡略化します。</span> <span class="merged" id="all.3ZBmwH.spl2" title="原文 : The API can be used both for relational and non-relational databases.">このAPIは、リレーショナル・データベースと非リレーショナル・データベースの両方に使用できます。</span> </p>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.18"  title="原文:: API">API</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.4DEr0B" title="原文 : Database configuration abstraction">データベース構成の抽象化</span></p>
<p><span class="merged" id="all.3qUYHA.spl1" title="原文 : Using Helidon configuration allows database implementation specific configuration options without the need to use database implementation specific APIs.">Helidon構成を使用すると、データベース実装固有のAPIを使用せずに、データベース実装固有の構成オプションを使用できます。</span> <span class="merged" id="all.3qUYHA.spl2" title="原文 : This allows for seamless switching between databases based on configuration.">これにより、構成に基づいてデータベースをシームレスに切り替えることができます。</span> </p>

</li>
<li>
<p><span class="merged" id="all.aaIoD" title="原文 : Statement configuration abstraction">文構成の抽象化</span></p>
<p><span class="merged" id="all.roET7.spl1" title="原文 : Using Helidon configuration allows use of database specific statements.">Helidon構成を使用すると、データベース固有の文を使用できます。</span> <span class="merged" id="all.roET7.spl2" title="原文 : This allows usage of different databases on different environments without changing code.">これにより、コードを変更せずに、異なる環境で異なるデータベースを使用できます。</span> </p>

</li>
<li>
<p><span class="merged" id="all.4P311N" title="原文 : Unified API for data access and query">データ・アクセスおよび問合せ用の統合API</span></p>
<p><span class="merged" id="all.25vKWw" title="原文 : Thanks to the statement configuration abstraction, we can invoke a statement against a relational or non-relations databases (such as MySQL and MongoDB) without modifying source code">文構成の抽象化により、ソース・コードを変更せずにリレーショナル・データベースまたは非リレーショナル・データベース(MySQLやMongoDBなど)に対して文を起動できます</span></p>

</li>
<li>
<p><span class="merged" id="all.2SHZr1" title="原文 : Observability ">観測性<br></span>
</p>
<p><span class="merged" id="all.tEQwv" title="原文 : The API offers support for health checks, metrics and tracing.">このAPIは、ヘルス・チェック、メトリクスおよびトレースのサポートを提供します。</span></p>

</li>
</ul>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.32"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.2UiGXF" title="原文 : Before you begin you must add the DB Client dependencies and configure the client.">開始する前に、DBクライアントの依存関係を追加し、クライアントを構成する必要があります。</span></p>


<h3 id="_add_the_db_client_dependencies_to_the_maven_pom_xml_file"><span class="merged" id="all.3KI1Bq" title="原文 : Add the DB Client dependencies to the Maven pom.xml file.">DBクライアント依存関係をMaven <code>pom.xml</code>ファイルに追加します。</span></h3>
<div class="section">
<p><span class="merged" id="all.2QyEnM" title="原文 : For the DB Client using JDBC implementation and H2 database, you must include the following dependencies in your project:">JDBC実装およびH2データベースを使用するDBクライアントの場合、プロジェクトに次の依存関係を含める必要があります:</span></p>

<markup
lang="xml"

>&lt;dependencies&gt;
     &lt;dependency&gt;
         &lt;groupId&gt;io.helidon.dbclient&lt;/groupId&gt; <span class="conum" data-value="1" />
         &lt;artifactId&gt;helidon-dbclient&lt;/artifactId&gt;
     &lt;/dependency&gt;
     &lt;dependency&gt;
         &lt;groupId&gt;io.helidon.dbclient&lt;/groupId&gt; <span class="conum" data-value="2" />
         &lt;artifactId&gt;helidon-dbclient-jdbc&lt;/artifactId&gt;
     &lt;/dependency&gt;
     &lt;dependency&gt;
         &lt;groupId&gt;com.h2database&lt;/groupId&gt; <span class="conum" data-value="3" />
         &lt;artifactId&gt;h2&lt;/artifactId&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.Uicp8" title="原文 : Add the Helidon DB Client">Helidon DBクライアントの追加</span></li>
<li data-value="2"><span class="merged" id="all.zlY1K" title="原文 : Specify JDBC or MongoDB">JDBCまたはMongoDBの指定</span></li>
<li data-value="3"><span class="merged" id="all.1syUxA" title="原文 : Add the database JDBC driver (only for JDBC)">データベースJDBCドライバの追加(JDBCの場合のみ)</span></li>
</ul>

</div>


<h3 id="_use_helidon_config_to_configure_the_client"><span class="merged" id="all.1Vaotl" title="原文 : Use Helidon Config to configure the client.">Helidon Configを使用してクライアントを構成します。</span></h3>
<div class="section">
<p><span class="merged" id="all.2JQoxR.spl1" title="原文 : The DB Client must be configured before you begin.">開始する前に、DBクライアントを構成する必要があります。</span> <span class="merged" id="all.2JQoxR.spl2" title="原文 : In the example below we’ll use Helidon Config to set up JDBC-based client:">次の例では、Helidon Configを使用してJDBCベースのクライアントを設定します:</span> </p>

<markup
lang="yaml"

>db:
  source: "jdbc" <span class="conum" data-value="1" />
  connection:
    url: "jdbc:mysql://127.0.0.1:3306/pokemon?useSSL=false" <span class="conum" data-value="2" />
    username: "user"
    password: "password"
  statements: <span class="conum" data-value="3" />
    ping: "DO 0" <span class="conum" data-value="4" />
    select-all-pokemons: "SELECT id, name FROM Pokemons"</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3hZU2C" title="原文 : Source: jdbc or mongoDb">Source: <code>jdbc</code>または<code>mongoDb</code></span></li>
<li data-value="2"><span class="merged" id="all.19noFW" title="原文 : Connection: database connection parameters">Connection: データベース接続パラメータ</span></li>
<li data-value="3"><span class="merged" id="all.2QsWDp" title="原文 : Statements: named statements to be used in application">Statements: アプリケーションで使用される名前付き文</span></li>
<li data-value="4"><span class="merged" id="all.1iPGKu" title="原文 : A ping statement used by health check">ヘルス・チェックで使用されるping文</span></li>
</ul>

</div>

</div>


<h2 id="_using_db_client_api_methods"><span class="merged" id="all.eQ2K0" title="原文 : Using DB Client API Methods">DBクライアントAPIメソッドの使用</span></h2>
<div class="section">
<p><span class="merged" id="all.2ymenv.spl1" title="原文 : The Helidon DB Client API contains many methods to run various statements with parameters and to retrieve statement execution results.">Helidon DBクライアントAPIには、パラメータを使用して様々な文を実行し、文の実行結果を取得するための多くのメソッドが含まれています。</span> <span class="merged" id="all.2ymenv.spl2" title="原文 : The following sections describe the options you can use to build and execute your statements.">次の各項では、文のビルドおよび実行に使用できるオプションについて説明します。</span> </p>


<h3 id="_executor_selection"><span class="merged" id="all.4f4ulb" title="原文 : Executor Selection">エグゼキュータの選択</span></h3>
<div class="section">
<p><span class="merged" id="all.13NwfJ" title="原文 : DBClient class has two methods to select whether statements will be executed in transaction or not:"><code>DBClient</code>クラスには、文をトランザクションで実行するかどうかを選択するための次の2つのメソッドがあります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1JGDZV"  title="原文: execute()"><code>execute()</code></span></p>

</li>
<li>
<p><span class="merged" id="all.OAnFn"  title="原文: transaction()"><code>transaction()</code></span></p>

</li>
</ul>

<p><span class="merged" id="all.406XOY" title="原文 : Both methods provide an executor: either DbExecute or DbTransaction.">どちらのメソッドでもエグゼキュータが提供されます: <code>DbExecute</code>または<code>DbTransaction</code>のいずれか。</span></p>

</div>


<h3 id="_statement_building_and_execution"><span class="merged" id="all.1znln8" title="原文 : Statement Building and Execution">文のビルドと実行</span></h3>
<div class="section">
<p><span class="merged" id="all.3dynjK" title="原文 : DbExecute class offers many methods for various statements builders:">DbExecuteクラスには、様々な文ビルダー用の多数のメソッドが用意されています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1KEDLI" title="原文 : DML statements: createDmlStatement, createNamedDmlStatement">DML文: <code>createDmlStatement</code>, <code>createNamedDmlStatement</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3QRCVx" title="原文 : insert statements: createInsert, createNamedInsert">挿入文: <code>createInsert</code>, <code>createNamedInsert</code></span></p>

</li>
<li>
<p><span class="merged" id="all.1Mp4Na" title="原文 : update statements: createUpdate, createNamedUpdate">更新文: <code>createUpdate</code>, <code>createNamedUpdate</code></span></p>

</li>
<li>
<p><span class="merged" id="all.kQA9e" title="原文 : delete statements: createDelete, createNamedDelete">削除文: <code>createDelete</code>, <code>createNamedDelete</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2qs5qX" title="原文 : query statements: createQuery, createNamedQuery">問合せ文: <code>createQuery</code>, <code>createNamedQuery</code></span></p>

</li>
<li>
<p><span class="merged" id="all.zy5Mb" title="原文 : get statements: createGet, createNamedGet">get文: <code>createGet</code>, <code>createNamedGet</code></span></p>

</li>
</ul>

<p><span class="merged" id="all.1mzywR" title="原文 : Methods with &quot;Named&quot; in their name (createNamedDmlStatement) expect statement name from statements section of Config, or a named statement configured when the DbClient was created using a Builder.">名前に「Named」が含まれるメソッド(<code>create<strong>Named</strong>DmlStatement</code>)では、Configのstatementsセクションの文名、または<code>DbClient</code>が<code>Builder</code>を使用して作成されたときに構成された名前付き文が想定されます。</span></p>

<p><span class="merged" id="all.LIXxa.spl1" title="原文 : All statement builders offer methods to set statement parameters.">すべての文ビルダーには、文パラメータを設定するメソッドが用意されています。</span> <span class="merged" id="all.LIXxa.spl2" title="原文 : Those parameters can be ordered parameters or named parameters.">これらのパラメータには、順序付けられたパラメータまたは名前付きパラメータを指定できます。</span> <span class="merged" id="all.LIXxa.spl3" title="原文 : Ordered and named parameters can’t be mixed in a single statement.">順序付けられたパラメータと名前付きパラメータを単一の文に混在させることはできません。</span> </p>

<p><span class="merged" id="all.apUmQ" title="原文 : Note that get statements are query statements that allow zero to one results."><code>get</code>文は、ゼロから単一の結果を許可する問合せ文であることに注意してください。</span></p>

</div>


<h3 id="_ordered_parameters"><span class="merged" id="all.SM7yG" title="原文 : Ordered Parameters">順序付きパラメータ</span></h3>
<div class="section">
<p><span class="merged" id="all.3qyipA" title="原文 : Ordered parameters are written down as ? in the statement text:">順序付けられたパラメータは、文のテキストに<code>?</code>として書き込まれます:</span></p>

<markup
lang="sql"

>SELECT name FROM Pokemons WHERE id = ?</markup>

<p><span class="merged" id="all.2OwGAv" title="原文 : The ordered parameters are equivalent to JDBC PreparedStatement parameters.">順序付けされたパラメータは、JDBC <code>PreparedStatement</code>パラメータと同等です。</span></p>

<p><span class="merged" id="all.3fJc3X" title="原文 : Methods to set ordered parameters are:">順序付けられたパラメータを設定するメソッドは次のとおりです:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1IjH8B" title="原文 : params(List&lt;?&gt; parameters) with all parameters as List">すべてのパラメータをリストとして使用した<code>params(List&lt;?> parameters)</code></span></p>

</li>
<li>
<p><span class="merged" id="all.1RAqmu" title="原文 : params(Object… parameters) with all parameters as array">すべてのパラメータを配列として使用した<code>params(Object… parameters)</code></span></p>

</li>
<li>
<p><span class="merged" id="all.8Ck62" title="原文 : indexedParam(Object parameters) POJO used with registered mapper">登録されたマッパーで使用される<code>indexedParam(Object parameters)</code> POJO</span></p>

</li>
<li>
<p><span class="merged" id="all.1HjW5W" title="原文 : addParam(Object parameter) with single parameter, can be called repeatedly">単一のパラメータを持つ<code>addParam(Object parameter)</code>は、繰り返しコールできます</span></p>

</li>
</ul>

</div>


<h3 id="_named_parameters"><span class="merged" id="all.10OvNo"  title="原文:: Named Parameters">名前付きパラメータ</span></h3>
<div class="section">
<p><span class="merged" id="all.2v9kzm" title="原文 : Named parameters are written down as :&lt;name&gt; in the JDBC statements">名前付きパラメータは、JDBC文に<code>:&lt;name></code>として書き込まれます</span></p>

<markup
lang="sql"

>SELECT name FROM Pokemons WHERE id = :id</markup>

<p><span class="merged" id="all.4F5FlL" title="原文 : or as $&lt;name&gt; in the MongoDB statement:">または、MongoDB文の<code>$&lt;name></code>として、次のようにします:</span></p>

<markup
lang="json"

>{
    "collection": "pokemons",
    "operation": "update",
    "value": {
      "$set": {
        "name": "$name"
      }
    },
    "query": { "id": "$id" }
}</markup>

<p><span class="merged" id="all.1OlMwb" title="原文 : Methods to set named parameters are:">名前付きパラメータを設定するメソッドは次のとおりです:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4CmU2v" title="原文 : params(Map&lt;String, ?&gt; parameters) with all parameters as Map">すべてのパラメータをMapとして使用した<code>params(Map&lt;String, ?> parameters)</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3A6fyg" title="原文 : namedParam(Object parameters) POJO used with registered mapper">登録されたマッパーで使用される<code>namedParam(Object parameters)</code> POJO</span></p>

</li>
<li>
<p><span class="merged" id="all.2rtCUY" title="原文 : addParam(String name, Object parameter) with single parameter, can be called repeatedly">単一のパラメータを持つ<code>addParam(String name, Object parameter)</code>は、繰り返しコールできます</span></p>

</li>
</ul>

</div>


<h3 id="_statement_execution"><span class="merged" id="all.4C96J4" title="原文 : Statement Execution">文の実行</span></h3>
<div class="section">
<p><span class="merged" id="all.3hePqk.spl1" title="原文 : Statements are executed by calling execute() method after statement parameters are set.">文は、文パラメータの設定後にexecute()メソッドをコールすることで実行されます。</span> <span class="merged" id="all.3hePqk.spl2" title="原文 : This method returns either a Single or Multi depending on statement type.">このメソッドは、文のタイプに応じて<code>Single</code>または<code>Multi</code>を戻します。</span> <span class="merged" id="all.3hePqk.spl3" title="原文 : The type returned also depends on statement type.">戻されるタイプは、文タイプによっても異なります。</span> </p>

<p><span class="merged" id="all.2B6J4F" title="原文 : JDBC query with ordered parameters and query that does not run in the transaction:">トランザクションで実行されない順序付けられたパラメータおよび問合せを含むJDBC問合せ:</span></p>

<markup
lang="java"

>dbClient.execute()
    .createQuery("SELECT name FROM Pokemons WHERE id = ?")
    .params(1)
    .execute();</markup>

<p><span class="merged" id="all.1ZxZDy" title="原文 : JDBC query with named parameters and the query runs in transaction:">名前付きパラメータを使用したJDBC問合せおよび問合せがトランザクションで実行されます:</span></p>

<markup
lang="java"

>dbClient.transaction()
    .createQuery("SELECT name FROM Pokemons WHERE id = :id")
    .addParam("id", 1)
    .execute();</markup>

<p><span class="merged" id="all.3DQAQc" title="原文 : Both examples will return Multi&lt;DbRow&gt; with rows returned by the query.">どちらの例でも、問合せによって返された行を含む<code>Multi&lt;DbRow></code>が返されます。</span></p>

<p><span class="merged" id="all.FJ1xD" title="原文 : This example shows a MongoDB update statement with named parameters and the query does not run in transaction:">次の例では、名前付きパラメータを使用したMongoDB更新文を示します。この問合せはトランザクションでは実行されません:</span></p>

<markup
lang="java"

>dbClient.execute()
    .createUpdate("{\"collection\": \"pokemons\","
        + "\"value\":{$set:{\"name\":$name}},"
        + "\"query\":{id:$id}}")
    .addParam("id", 1)
    .addParam("name", "Pikachu")
    .execute();</markup>

<p><span class="merged" id="all.Zlhw2" title="原文 : This update statement will return a long with the number of modified records in the database.">この更新文は、データベース内の変更済レコード数を含む<code>long</code>を返します。</span></p>


<h4 id="_dml_statement_result"><span class="merged" id="all.1MTmvU" title="原文 : DML Statement Result">DML文の結果</span></h4>
<div class="section">
<p><span class="merged" id="all.HESTl" title="原文 : Execution of DML statements will always return a long with the number of modified records in the database.">DML文を実行すると、データベース内の変更済レコード数を含む<code>long</code>が常に返されます。</span></p>

<p><span class="merged" id="all.1qmSB0" title="原文 : In following example, the number of modified records is printed to standard output:">次の例では、変更されたレコードの数が標準出力に出力されます:</span></p>

<markup
lang="java"

>long count = dbClient.execute()
    .insert("INSERT INTO Pokemons (id, name) VALUES(?, ?)",
        1, "Pikachu"));
System.out.printf("Inserted %d records\n", count)</markup>

</div>


<h4 id="_query_statement_result"><span class="merged" id="all.2yBpm9" title="原文 : Query Statement Result">問合せ文の結果</span></h4>
<div class="section">
<p><span class="merged" id="all.3vBB2v" title="原文 : Execution of a query statement will always return Stream&lt;DbRow&gt;&gt;.">問合せ文を実行すると、常に<code>Stream&lt;DbRow>></code>が返されます。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3PWdTw" title="原文 : The stream is populated lazily, result rows can be processed individually">ストリームは遅延して移入され、結果行は個別に処理できます</span></p>

</li>
<li>
<p><span class="merged" id="all.1D9lCm" title="原文 : Use .map(…) to map returned result"><code>.map(…)</code>を使用して、戻された結果をマップ</span></p>

</li>
<li>
<p><span class="merged" id="all.1J7GOd" title="原文 : Use .toList() on the stream to collect all rows">すべての行を収集するには、ストリームで<code>.toList()</code>を使用</span></p>

</li>
</ul>

</div>

</div>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.20"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">
<p><span class="merged" id="all.4dJD0.spl1" title="原文 : Now that you understand how to build and execute statements, try it for yourself.">文をビルドして実行する方法を理解したら、自分で試してみます。</span> <span class="merged" id="all.4dJD0.spl2" title="原文 : DB Client Examples."><a href="https://github.com/oracle/helidon/tree/4.0.2/examples/dbclient" target="_blank">「DBクライアントの例」</a>。</span> </p>

</div>

</doc-view>
