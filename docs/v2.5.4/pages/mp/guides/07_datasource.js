<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2R7978" title="原文 : Helidon MP Data Source Guide">Helidon MPデータ・ソース・ガイド</span></dt>
<dd slot="desc"><p><span class="merged" id="all.gew0H" title="原文 : This guide shows how to configure and use named DataSources in your Helidon MP application.">このガイドでは、Helidon MPアプリケーションで名前付き<a href="https://docs.oracle.com/javase/8/docs/api/javax/sql/DataSource.html" id="" target="_blank" ><code>DataSource</code></a>を構成および使用する方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_what_you_need"><span class="merged" id="all.27ZcMH.8"  title="原文:: What You Need">必要事項</span></h2>
<div class="section">
<p><span class="merged" id="all.3yeiO0.2" title="原文 : For this 20 minute tutorial, you will need the following:">この20分間のチュートリアルでは、次のものが必要です:</span></p>


<div class="table__overflow elevation-1  flex sm7
">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1hKNxI.5" title="原文 : A Helidon {upper-case-flavor} Application">Helidon {upper-case-flavor} アプリケーション</span></td>
<td class=""><span class="merged" id="all.3jMlMY.5" title="原文 : You can use your own application or use the Helidon {upper-case-flavor} Quickstart to create a sample application.">独自のアプリケーションを使用するか、<a href="https://helidon.io/docs/v2/#/{lower-case-flavor}/guides/02_quickstart" id="" target="_blank" >「Helidon {upper-case-flavor} クイックスタート」</a>を使用してサンプル・アプリケーションを作成できます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3UjXGj.6" title="原文 : Java&#160;SE&#160;11 (Open&#160;JDK&#160;11)"><a href="https://www.oracle.com/technetwork/java/javase/downloads" id="" target="_blank" >Java&#160;SE&#160;11</a> (<a href="http://jdk.java.net" id="" target="_blank" >Open&#160;JDK&#160;11</a>)</span></td>
<td class=""><span class="merged" id="all.3e6V0X.6" title="原文 : Helidon requires Java 11+.">HelidonにはJava 11以上が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1nyTbh.8" title="原文 : Maven 3.6.1+"><a href="https://maven.apache.org/download.cgi" id="" target="_blank" >Maven 3.6.1+</a></span></td>
<td class=""><span class="merged" id="all.3woDk0.6" title="原文 : Helidon requires Maven 3.6.1+.">Helidonには、Maven 3.6.1+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1HtX9I.7"  title="原文:: Docker 18.09+"><a href="https://docs.docker.com/install/" id="" target="_blank" >Docker 18.09+</a></span></td>
<td class=""><span class="merged" id="all.aX1BT.6" title="原文 : You need Docker if you want to build and deploy Docker containers.">Dockerコンテナをビルドおよびデプロイする場合は、Dockerが必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48aNQe.7"  title="原文:: Kubectl 1.16.5+"><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" id="" target="_blank" >Kubectl 1.16.5+</a></span></td>
<td class=""><span class="merged" id="all.1tjPJQ.6" title="原文 : If you want to deploy to Kubernetes, you need kubectl and a Kubernetes cluster (you can install one on your desktop).">Kubernetesにデプロイする場合は、<code>kubectl</code>およびKubernetesクラスタ(<router-link to="/about/05_kubernetes">「デスクトップにインストール」</router-link>も可)が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4N9w7q"  title="原文:: curl"><a href="https://curl.se/download.html" id="" target="_blank" >curl</a></span></td>
<td class=""><span class="merged" id="all.2BBRFb" title="原文 : (Optional) for testing">(オプション)テスト用</span></td>
</tr>
</tbody>
</table>
</div>
<markup
lang="bash"
title="Verify Prerequisites"
>java -version
mvn --version
docker --version
kubectl version --short</markup>

<markup
lang="bash"
title="Setting JAVA_HOME"
># On Mac
export JAVA_HOME=`/usr/libexec/java_home -v 11`

# On Linux
# Use the appropriate path to your JDK
export JAVA_HOME=/usr/lib/jvm/jdk-11</markup>

</div>

<h2 id="_overview"><span class="merged" id="all.YrpRV.1"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.SgGUc.spl1" title="原文 : By following this guide you&rsquo;ll enhance a bare-bones Helidon MP application to access an in-memory H2 database database.">このガイドに従って、メモリー内の<a href="https://www.h2database.com/html/main.html" id="" target="_blank" >「H2データベース」</a>データベースにアクセスするために、ベア・ボーンHelidon MPアプリケーションを拡張します。</span> <span class="merged" id="all.SgGUc.spl2" title="原文 : You&rsquo;ll see how to install the relevant dependencies, set up and configure the datasource, and add datasource-related code to your application.">関連する依存関係をインストールし、データソースを設定および構成し、データソース関連のコードをアプリケーションに追加する方法について説明します。</span> </p>

</div>

<h2 id="_use_the_maven_archetype_to_generate_a_helidon_mp_application"><span class="merged" id="all.3kO60q" title="原文 : Use the Maven Archetype to Generate a Helidon MP Application">Maven Archetypeを使用したHelidon MPアプリケーションの生成</span></h2>
<div class="section">
<p><span class="merged" id="all.vTXp3" title="原文 : In a shell, cd into an empty directory and run this:">シェルでは、<code>cd</code>は空のディレクトリに移動し、次を実行します:</span></p>

<markup
lang="bash"

>mvn -U archetype:generate \
    -DinteractiveMode=false \
    -DarchetypeGroupId=io.helidon.archetypes \
    -DarchetypeArtifactId=helidon-bare-mp \
    -DarchetypeVersion=2.5.4 \
    -DgroupId=io.helidon.example \
    -DartifactId=helidon-ds \
    -Dpackage=io.helidon.example.ds \
    -DrestResourceName=ExampleResource \
    -DapplicationName=ExampleApplication</markup>

<p><span class="merged" id="all.1eaYZm.spl1" title="原文 : Now cd into helidon-ds.">これで<code>cd</code>が<code>helidon-ds</code>に追加されました。</span> <span class="merged" id="all.1eaYZm.spl2" title="原文 : The rest of this guide will assume all relative paths are relative to this directory.">このガイドの残りの部分では、すべての相対パスがこのディレクトリに対する相対パスであると想定しています。</span> </p>


<h3 id="_add_the_h2_database_driver_to_the_runtime_classpath"><span class="merged" id="all.4FIoJ" title="原文 : Add the H2 Database Driver to the Runtime Classpath">H2データベース・ドライバのランタイム・クラスパスへの追加</span></h3>
<div class="section">
<p><span class="merged" id="all.2mi5Cl" title="原文 : Add the following dependency in your pom.xml:"><code>pom.xml</code>に次の依存関係を追加します:</span></p>

<markup
lang="xml"
title="<code>pom.xml</code>"
>&lt;dependency&gt;
    &lt;groupId&gt;com.h2database&lt;/groupId&gt;
    &lt;artifactId&gt;h2&lt;/artifactId&gt;
    &lt;version&gt;1.4.199&lt;/version&gt;
    &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.3mRi1P" title="原文 : In a production application, you may use a different database, so in that case you may add a different database driver dependency here instead.">本番アプリケーションでは、別のデータベースを使用することもできます。その場合は、かわりにここで別のデータベース・ドライバの依存関係を追加できます。</span></p>

</div>

<h3 id="_add_the_hikari_connection_pool_extension_to_the_runtime_classpath"><span class="merged" id="all.3Jsz1M" title="原文 : Add the Hikari Connection Pool Extension to the Runtime Classpath">ランタイム・クラスパスへのHikari接続プール拡張機能の追加</span></h3>
<div class="section">
<p><span class="merged" id="all.2mi5Cl.1" title="原文 : Add the following dependency in your pom.xml:"><code>pom.xml</code>に次の依存関係を追加します:</span></p>

<markup
lang="xml"
title="<code>pom.xml</code>"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.cdi&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-cdi-datasource-hikaricp&lt;/artifactId&gt;
    &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;</markup>

</div>

<h3 id="_add_an_application_yaml_file_with_database_connectivity_information"><span class="merged" id="all.xk1tX" title="原文 : Add an application.yaml File With Database Connectivity Information">データベース接続情報を含む<code>application.yaml</code>ファイルの追加</span></h3>
<div class="section">
<p><span class="merged" id="all.xV0R" title="原文 : Replace the contents of the following file under src/main/resources:"><code>src/main/resources</code>で、次のファイルの内容を置き換えます:</span></p>

<markup
lang="yaml"
title="<code>src/main/resources/application.yaml</code>"
>server:
    port: 8080
javax:
    sql:
        DataSource: <span class="conum" data-value="1" />
            test: <span class="conum" data-value="2" />
                dataSourceClassName: org.h2.jdbcx.JdbcDataSource <span class="conum" data-value="3" />
                dataSource: <span class="conum" data-value="4" />
                    url: jdbc:h2:mem:test <span class="conum" data-value="5" />
                    user: sa
                    password: ""</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1yDzr8" title="原文 : This javax:/sql:/DataSource: preamble is required.">この<code>javax:</code>/<code>sql:</code>/<code>DataSource:</code>プリアンブルは必須です。</span></li>
<li data-value="2"><span class="merged" id="all.28ZEFz" title="原文 : test is the name of the DataSource being configured here."><code>test</code>は、ここで構成する<code>DataSource</code>の名前です。</span></li>
<li data-value="3"><span class="merged" id="all.2wHvDM" title="原文 : dataSourceClassName is an essential Hikari connection pool property."><code>dataSourceClassName</code>は<a href="https://github.com/brettwooldridge/HikariCP/blob/dev/README.md#configuration-knobs-baby" id="" target="_blank" >「Hikari接続プールの必須プロパティ」</a>です。</span></li>
<li data-value="4"><span class="merged" id="all.3p5pEJ" title="原文 : dataSource is a Hikari connection pool keyword."><code>dataSource</code>は<a href="https://github.com/brettwooldridge/HikariCP/blob/dev/README.md#initialization" id="" target="_blank" >「Hikari接続プール・キーワード」</a>です。</span></li>
<li data-value="5"><span class="merged" id="all.33VjBW" title="原文 : These are some of the Java Beans-compliant properties exposed by, in this case, the org.h2.jdbcx.JdbcDataSource class.">これらは、この場合に<a href="https://www.h2database.com/javadoc/org/h2/jdbcx/JdbcDataSource.html" id="" target="_blank" >「<code>org.h2.jdbcx.JdbcDataSource</code>クラス」</a>によって公開されるJava Bean準拠のプロパティの一部です。</span></li>
</ul>
</div>

<h3 id="_inject_a_datasource_into_your_application_code"><span class="merged" id="all.3FisNj" title="原文 : Inject a Datasource into Your Application Code">アプリケーション・コードへのデータソースのインジェクト</span></h3>
<div class="section">
<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.9Y6tW" title="原文 : For more information about datasources, see https://docs.oracle.com/javase/8/docs/api/javax/sql/DataSource.html">データソースの詳細は、<a href="https://docs.oracle.com/javase/8/docs/api/javax/sql/DataSource.html" id="" target="_blank" >https://docs.oracle.com/javase/8/docs/api/javax/sql/DataSource.html</a>を参照してください</span></p>
</div>
<p><span class="merged" id="all.1HfXTg" title="原文 : In the src/main/java/io/helidon/example/ds/ExampleResource.java file, add the following imports:"><code>src/main/java/io/helidon/example/ds/ExampleResource.java</code>ファイルに、次のインポートを追加します:</span></p>

<markup
lang="java"
title="<code>src/main/java/io/helidon/example/ds/ExampleResource.java</code>"
>import javax.enterprise.context.Dependent;
import javax.inject.Inject;
import javax.inject.Named;
import javax.sql.DataSource;</markup>

<p><span class="merged" id="all.1tDtVY" title="原文 : Annotate the resource class declaration with @Dependent:"><code>@Dependent</code>を使用してリソース・クラス宣言に注釈を付けます:</span></p>

<markup
lang="java"
title="<code>src/main/java/io/helidon/example/ds/ExampleResource.java</code>"
>@Dependent <span class="conum" data-value="1" />
public class ExampleResource {</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.11HW3U" title="原文 : This ensures that io.helidon.example.jpa.ExampleResource is a discoverable CDI bean.">これにより、<code>io.helidon.example.jpa.ExampleResource</code>が検出可能なCDI beanであることが保証されます。</span></li>
</ul>
<p><span class="merged" id="all.25yRGZ" title="原文 : Then add the following annotated field declaration:">次に、次の注釈付きフィールド宣言を追加します:</span></p>

<markup
lang="java"
title="<code>src/main/java/io/helidon/example/ds/ExampleResource.java</code>"
>@Inject <span class="conum" data-value="1" />
@Named("test") <span class="conum" data-value="2" />
private DataSource testDataSource;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3TS4GX" title="原文 : The @Inject annotation is used to indicate that the CDI container should set the annotated field automatically."><a href="http://javax-inject.github.io/javax-inject/api/javax/inject/Inject.html" id="" target="_blank" >「<code>@Inject</code>注釈」</a>は、CDIコンテナが注釈付きフィールドを自動的に設定する必要があることを示すために使用されます。</span></li>
<li data-value="2"><span class="merged" id="all.3Etx9M.spl1" title="原文 : The @Named annotation is used to select which data source should be injected."><a href="http://javax-inject.github.io/javax-inject/api/javax/inject/Named.html" id="" target="_blank" >「<code>@Named</code>注釈」</a>を使用して、インジェクトするデータ・ソースを選択します。</span> <span class="merged" id="all.3Etx9M.spl2" title="原文 : Here, the test data source is requested.">ここでは、<code>test</code>データ・ソースがリクエストされます。</span> </li>
</ul>
</div>

<h3 id="_use_the_injected_datasource"><span class="merged" id="all.VKGzg" title="原文 : Use The Injected DataSource">インジェクトされたDataSourceの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.3u66Oh" title="原文 : Now that you have a DataSource, you&rsquo;ll use it to connect to the database."><code>DataSource</code>ができたので、これを使用してデータベースに接続します。</span></p>

<p><span class="merged" id="all.2ME66R" title="原文 : First, ensure the io.helidon.example.ds.ExampleResource resource class imports various java.sql classes:">まず、<code>io.helidon.example.ds.ExampleResource</code>リソース・クラスが様々な<code>java.sql</code>クラスをインポートしていることを確認します:</span></p>

<markup
lang="java"
title="<code>src/main/java/io/helidon/example/ds/ExampleResource.java</code>"
>import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;</markup>

<p><span class="merged" id="all.1F50Pt" title="原文 : Add the following resource method to the ExampleResource class:">次のリソース・メソッドを<code>ExampleResource</code>クラスに追加します:</span></p>

<markup
lang="java"
title="<code>src/main/java/io/helidon/example/ds/ExampleResource.java</code>"
>@GET
@Path("tables")
@Produces("text/plain")
public String getTableNames() throws SQLException { <span class="conum" data-value="1" />
    StringBuilder sb = new StringBuilder();
    try (Connection connection = this.testDataSource.getConnection(); <span class="conum" data-value="2" />
         PreparedStatement ps =
           connection.prepareStatement(" SELECT TABLE_NAME" <span class="conum" data-value="3" />
                                       + " FROM INFORMATION_SCHEMA.TABLES "
                                       + "ORDER BY TABLE_NAME ASC");
         ResultSet rs = ps.executeQuery()) {
      while (rs.next()) {
        sb.append(rs.getString(1)).append("\n");
      }
    }
    return sb.toString();
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3drmUs" title="原文 : Database interactions can throw SQLException.">データベースの相互作用によって<code>SQLException</code>がスローされる場合があります。</span></li>
<li data-value="2"><span class="merged" id="all.2ruacD" title="原文 : We acquire a Connection, a PreparedStatement and a ResultSet in a try-with-resources block.">try-with-resourcesブロックで<code>Connection</code>、<code>PreparedStatement</code>および<code>ResultSet</code>を取得します。</span></li>
<li data-value="3"><span class="merged" id="all.14Y3KW" title="原文 : This SQL statement returns a list of all table names in the database.">このSQL文は、データベース内のすべての表名のリストを戻します。</span></li>
</ul>
</div>
</div>

<h2 id="_build_the_application"><span class="merged" id="all.2sc1No" title="原文 : Build the Application">アプリケーションのビルド</span></h2>
<div class="section">
<p><span class="merged" id="all.2dDAwc" title="原文 : Execute the following from the root directory of your application:">アプリケーションのルート・ディレクトリから次のコマンドを実行します:</span></p>

<markup
lang="bash"

>mvn clean package</markup>

</div>

<h2 id="_run_the_application"><span class="merged" id="all.2WCg9p"  title="原文:: Run the Application">アプリケーションの実行</span></h2>
<div class="section">
<p><span class="merged" id="all.2dDAwc.1" title="原文 : Execute the following from the root directory of your application:">アプリケーションのルート・ディレクトリから次のコマンドを実行します:</span></p>

<markup
lang="bash"

>java -jar target/helidon-ds.jar</markup>

</div>

<h2 id="_test_the_application"><span class="merged" id="all.2hLqhJ"  title="原文:: Test the Application">アプリケーションのテスト</span></h2>
<div class="section">
<p><span class="merged" id="all.1ISuhH"  title="原文:: Execute the following:">次を実行します。</span></p>

<markup
lang="bash"

>curl http://localhost:8080/example/tables</markup>

<p><span class="merged" id="all.1zRc8y" title="原文 : Observe that the result will be a list of database table names.">結果がデータベース表名のリストになることを確認します。</span></p>

</div>

<h2 id="_related_examples"><span class="merged" id="all.VnL0B" title="原文 : Related Examples">関連する例</span></h2>
<div class="section">
<p><span class="merged" id="all.BKEUW" title="原文 : Helidon features a few examples of projects that use datasources.">Helidonには、データソースを使用するプロジェクトの例がいくつか用意されています。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1SULFY" title="原文 : An example showing a Hikari connection pool data source connected to an H2 database"><a href="https://github.com/oracle/helidon/tree/2.5.4/examples/integrations/cdi/datasource-hikaricp-h2" id="" target="_blank" >H2データベースに接続されたHikari接続プール・データ・ソースを示す例</a></span></p>

</li>
<li>
<p><span class="merged" id="all.1ulqZ0" title="原文 : An example showing a Hikari connection pool data source connected to a MySQL database"><a href="https://github.com/oracle/helidon/tree/2.5.4/examples/integrations/cdi/datasource-hikaricp-mysql" id="" target="_blank" >MySQLデータベースに接続されたHikari接続プール・データ・ソースを示す例</a></span></p>

</li>
</ul>
<p><span class="merged" id="all.2z6lph.spl1" title="原文 : Some examples&apos; configurations can be found in their META-INF/microprofile-config.properties resources instead of in an application.yaml file as described above.">一部の構成例は、前述のように、<code>application.yaml</code>ファイルではなく<code>META-INF/microprofile-config.properties</code>リソースにあります。</span> <span class="merged" id="all.2z6lph.spl2" title="原文 : Though the syntax is different, the same principles as those described above still apply.">構文は異なりますが、前述の原則と同じ原則が適用されます。</span> </p>

</div>
</doc-view>
