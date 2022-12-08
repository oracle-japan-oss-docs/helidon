<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.Q9fS5" title="原文 : Helidon SE DB Client Guide">Helidon SE DBクライアント・ガイド</span></dt>
<dd slot="desc"><p><span class="merged" id="all.Yciv" title="原文 : This guide describes the features of Helidon&rsquo;s DB Client and how to create a sample Helidon SE project that can be used to run some basic examples using the Helidon DB Client.">このガイドでは、HelidonのDBクライアントの機能と、Helidon DBクライアントを使用していくつかの基本的な例を実行するために使用できるサンプルのHelidon SEプロジェクトの作成方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_what_you_need"><span class="merged" id="all.27ZcMH.14"  title="原文:: What You Need">必要事項</span></h2>
<div class="section">
<p><span class="merged" id="all.2UQif6.1" title="原文 : For this 15 minute tutorial, you will need the following:">この15分間のチュートリアルでは、次のものが必要です:</span></p>


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
<td class=""><span class="merged" id="all.3EWh8P.1" title="原文 : A Helidon SE Application">Helidon SEアプリケーション</span></td>
<td class=""><span class="merged" id="all.3f8L7i.1" title="原文 : You can use your own application or use the Helidon SE Quickstart to create a sample application.">独自のアプリケーションを使用するか、<router-link to="/se/guides/quickstart">「Helidon SEクイックスタート」</router-link>を使用してサンプル・アプリケーションを作成できます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2sRt9f.15" title="原文 : Java&#160;SE&#160;17 (Open&#160;JDK&#160;17)"><a href="https://www.oracle.com/technetwork/java/javase/downloads" target="_blank">Java&#160;SE&#160;17</a> (<a href="http://jdk.java.net" target="_blank">Open&#160;JDK&#160;17</a>)</span></td>
<td class=""><span class="merged" id="all.3aBChT.15" title="原文 : Helidon requires Java 17+.">HelidonにはJava 17以上が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1DYqqk.16" title="原文 : Maven 3.6.1+"><a href="https://maven.apache.org/download.cgi" target="_blank">Maven 3.6.1+</a></span></td>
<td class=""><span class="merged" id="all.3woDk0.15" title="原文 : Helidon requires Maven 3.6.1+.">Helidonには、Maven 3.6.1+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ND1mN.15"  title="原文:: Docker 18.09+"><a href="https://docs.docker.com/install/" target="_blank">Docker 18.09+</a></span></td>
<td class=""><span class="merged" id="all.aX1BT.15" title="原文 : You need Docker if you want to build and deploy Docker containers.">Dockerコンテナをビルドおよびデプロイする場合は、Dockerが必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Lo77h.15"  title="原文:: Kubectl 1.16.5+"><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" target="_blank">Kubectl 1.16.5+</a></span></td>
<td class=""><span class="merged" id="all.1JBSOB.15" title="原文 : If you want to deploy to Kubernetes, you need kubectl and a Kubernetes cluster (you can install one on your desktop.">Kubernetesにデプロイする場合は、<code>kubectl</code>およびKubernetesクラスタが必要です (<router-link to="/about/kubernetes">「デスクトップにインストール」</router-link>できます)。</span></td>
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
export JAVA_HOME=`/usr/libexec/java_home -v 17`

# On Linux
# Use the appropriate path to your JDK
export JAVA_HOME=/usr/lib/jvm/jdk-17</markup>

</div>


<h2 id="_introduction"><span class="merged" id="all.4LJMHk.9"  title="原文:: Introduction">導入</span></h2>
<div class="section">
<p><span class="merged" id="all.NiTcl.spl1" title="原文 : The Helidon DB Client simplifies how you work with databases in reactive applications.">Helidon DBクライアントは、リアクティブ・アプリケーションでのデータベースの操作方法を簡素化します。</span> <span class="merged" id="all.NiTcl.spl2" title="原文 : It provides a unified, reactive API for working with databases in a non-blocking way.">ブロッキングを発生させない方法でデータベースを操作するための、統一されたリアクティブAPIを提供します。</span> </p>


<h3 id="_main_features"><span class="merged" id="all.4TQnZ"  title="原文:: Main Features">主な機能</span></h3>
<div class="section">
<p><span class="merged" id="all.2KXfgW" title="原文 : The main features of Helidon DB Client are:">Helidon DBクライアントの主な機能は次のとおりです:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.pOa49" title="原文 : Unified API for data access and query: The API was implemented as a layer above JDBC or MongoDB Reactive Streams Java Driver, so any relational databases with JDBC driver or MongoDB are supported."><strong>データ・アクセスおよび問合せ用の統合API</strong>: APIは、JDBCまたはMongoDBリアクティブ・ストリームJavaドライバより上のレイヤーとして実装されているため、JDBCドライバまたはMongoDBのリレーショナル・データベースがサポートされています。</span></p>

</li>
<li>
<p><span class="merged" id="all.4L2eiu.spl1" title="原文 : Reactive database access with non-reactive drivers: Most JDBC drivers are blocking."><strong>非リアクティブ・ドライバによるリアクティブ・データベース・アクセス</strong>: ほとんどのJDBCドライバがブロックしています。</span> <span class="merged" id="all.4L2eiu.spl2" title="原文 : Using them in a reactive application is problematic.">事後対応型アプリケーションでの使用に問題があります。</span> <span class="merged" id="all.4L2eiu.spl3" title="原文 : Helidon DB Client allows the use of blocking JDBC drivers in your reactive application by wrapping a blocking driver in an executor service.">Helidon DBクライアントでは、エグゼキュータ・サービスでブロック・ドライバをラップすることで、リアクティブ・アプリケーションでJDBCドライバをブロックできます。</span> </p>

</li>
<li>
<p><span class="merged" id="all.MUcBu" title="原文 : Observability: Support for health checks, metrics and tracing."><strong>観測性</strong>: ヘルス・チェック、メトリクスおよびトレースのサポート。</span></p>

</li>
<li>
<p><span class="merged" id="all.4XL2Ai.spl1" title="原文 : Backpressure: Performs database operations only when it is requested by the consumer."><strong>バックプレッシャ</strong>: データベース操作は、コンシューマによってリクエストされた場合にのみ実行します。</span> <span class="merged" id="all.4XL2Ai.spl2" title="原文 : This is propagated all the way to the TCP layer.">これは、すべての方法でTCPレイヤーに伝播されます。</span> </p>

</li>
<li>
<p><span class="merged" id="all.2AGSo9.spl1" title="原文 : Portability between relational database drivers: Works with native database statements that can be used inline in the code or defined as named statements in database configuration."><strong>リレーショナル・データベース・ドライバ間の移植性</strong>: コードでインラインで使用したり、データベース構成で名前付き文として定義できるネイティブ・データベース文とともに機能します。</span> <span class="merged" id="all.2AGSo9.spl2" title="原文 : By moving the native query code to configuration files, the Helidon DB Client allows you to switch to another database by changing the configuration files, not the code.">ネイティブ問合せコードを構成ファイルに移動することで、Helidon DBクライアントでは、コードではなく構成ファイルを変更して別のデータベースに切り替えることができます。</span> </p>

</li>
</ul>

</div>

</div>


<h2 id="_getting_started_with_helidon_db_client"><span class="merged" id="all.2pO6eD" title="原文 : Getting Started with Helidon DB Client">Helidon DBクライアントの開始</span></h2>
<div class="section">
<p><span class="merged" id="all.2gcCiW" title="原文 : This section describes how to configure and use the key features of the Helidon DB Client.">この項では、Helidon DBクライアントの主要な機能を構成および使用する方法について説明します。</span></p>


<h3 id="_set_up_the_h2_database"><span class="merged" id="all.3BvZz6" title="原文 : Set Up the H2 database">H2データベースの設定</span></h3>
<div class="section">
<p><span class="merged" id="all.4G0Dcb.spl1" title="原文 : H2 is a Java SQL database that is lightweight and easy to use.">H2は、軽量で使いやすいJava SQLデータベースです。</span> <span class="merged" id="all.4G0Dcb.spl2" title="原文 : If H2 is not installed on your machine, here are few steps to quickly download and set it up:">マシンにH2がインストールされていない場合、ダウンロードして設定するステップは、次のとおりです:</span> </p>


<h4 id="_from_docker"><span class="merged" id="all.4BOFuY" title="原文 : From Docker">Dockerから</span></h4>
<div class="section">
<p><span class="merged" id="all.430Jf9.spl1" title="原文 : Create a new file in helidon-quickstart-se named Dockerfile.h2."><code>Dockerfile.h2</code>という名前の新しいファイルを<code>helidon-quickstart-se</code>に作成します。</span> <span class="merged" id="all.430Jf9.spl2" title="原文 : It will be used to create the H2 docker image to run H2 in a container.">コンテナでH2を実行するためのH2 dockerイメージの作成に使用されます。</span> </p>

<markup
lang="dockerfile"
title="Write the following content into the new file created"
>FROM openjdk:11-jre-slim

ENV H2_VERSION "1.4.199"

ADD "https://repo1.maven.org/maven2/com/h2database/h2/${H2_VERSION}/h2-${H2_VERSION}.jar" /opt/h2.jar

COPY h2.server.properties /root/.h2.server.properties

EXPOSE 8082
EXPOSE 9092

CMD java \
       -cp /opt/h2.jar \
       org.h2.tools.Server \
       -web -webDaemon -webAllowOthers -webPort 8082 \
       -tcp -tcpAllowOthers -tcpPort 9092 \
       -ifNotExists</markup>

<p><span class="merged" id="all.4RmCLx" title="原文 : Create a new file h2.server.properties in the current directory.">現在のディレクトリに新しいファイル<code>h2.server.properties</code>を作成します。</span></p>

<markup
lang="properties"
title="Copy the properties into the properties file."
>webSSL=false
webAllowOthers=true
webPort=8082
0=Generic H2 (Server)|org.h2.Driver|jdbc\:h2\:tcp\://localhost\:9092/~/test|sa</markup>

<markup
lang="bash"
title="Build the H2 docker image"
>docker build -f Dockerfile.h2 . -t h2db</markup>

<markup
lang="bash"
title="Run the H2 docker image"
>docker run --rm -p 8082:8082 -p 9092:9092 --name=h2 h2db</markup>

</div>


<h4 id="_from_the_command_line"><span class="merged" id="all.2wrgiq"  title="原文: From the Command Line"> コマンド行から</span></h4>
<div class="section">
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.27MTOO" title="原文 : Download the latest H2 version from the official website: https://www.h2database.com/html/main.html">公式webサイトから最新のH2バージョンをダウンロード : <a class="bare" href="https://www.h2database.com/html/main.html" target="_blank">https://www.h2database.com/html/main.html</a></span>
<markup>Note: Windows operating system users can download the Windows Installer.</markup>
</li>
<li>
<span class="merged" id="all.30IgXM" title="原文 : Unzip the downloaded file into your directory.">ダウンロードしたファイルをディレクトリに解凍します。</span>
<ul class="ulist">
<li>
<p><span class="merged" id="all.4W2RC1" title="原文 : Only the h2-{latest-version}.jar, located in the h2/bin folder, will be needed.">h2/binフォルダにあるh2-{latest-version}.jarのみが必要です。</span></p>

</li>
</ul>

</li>
<li>
<span class="merged" id="all.u2CjP" title="原文 : Open a terminal window and run the following command to start H2:">端末ウィンドウを開き、次のコマンドを実行してH2を起動します:</span>

</li>
</ol>

<markup
lang="bash"
title="Replace <code>{latest-version}</code> with your current H2 version:"
>java -jar h2-\{latest-version}.jar -webAllowOthers -tcpAllowOthers</markup>

<markup
lang="bash"
title="Terminal output"
>Web Console server running at http://127.0.1.1:8082 (others can connect)
Opening in existing browser session.
TCP server running at tcp://127.0.1.1:9092 (others can connect)
PG server running at pg://127.0.1.1:5435 (only local connections)</markup>

</div>

</div>


<h3 id="_connect_to_the_database"><span class="merged" id="all.2Vz9Xa"  title="原文: Connect to the Database">データベースへの接続</span></h3>
<div class="section">
<p><span class="merged" id="all.90AgA.spl1" title="原文 : Open the console at http://127.0.1.1:8082 in your favorite browser.">お気に入りのブラウザで<a class="bare" href="http://127.0.1.1:8082" target="_blank">http://127.0.1.1:8082</a>でコンソールを開きます。</span> <span class="merged" id="all.90AgA.spl2" title="原文 : It displays a login window.">ログイン・ウィンドウが表示されます。</span> <span class="merged" id="all.90AgA.spl3" title="原文 : Select Generic H2 from Saved Settings."><code>Saved Settings</code>から<code>Generic H2</code>を選択します。</span> <span class="merged" id="all.90AgA.spl4" title="原文 : The following settings should be set by default:">デフォルトで次の設定を設定する必要があります:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.Swwq6" title="原文 : Driver Class: org.h2.Driver">ドライバ・クラス: org.h2.Driver</span></p>

</li>
<li>
<p><span class="merged" id="all.3IwNNv" title="原文 : JDBC URL: jdbc:h2:tcp://localhost:9092/~/test">JDBC URL: jdbc:h2:tcp://localhost:9092/~/test</span></p>

</li>
<li>
<p><span class="merged" id="all.28fanB"  title="原文:: User Name: sa">ユーザー名: sa</span></p>

</li>
<li>
<p><span class="merged" id="all.1lVfvt"  title="原文:: Password:">パスワード:</span></p>

</li>
</ul>

<p><span class="merged" id="all.SA4hE.spl1" title="原文 : Password must stay empty.">パスワードは空にする必要があります。</span> <span class="merged" id="all.SA4hE.spl2" title="原文 : Click Connect, the browser displays a web page."><strong>「接続」</strong>をクリックすると、ブラウザにwebページが表示されます。</span> <span class="merged" id="all.SA4hE.spl3" title="原文 : The database is correctly set and running.">データベースが正しく設定され、実行されています。</span> </p>

</div>


<h3 id="_create_a_sample_se_project_using_maven_archetype"><span class="merged" id="all.3MvvGF" title="原文 : Create a Sample SE Project Using Maven Archetype">Maven Archetypeを使用したサンプルSEプロジェクトの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.2w3hsK.spl1" title="原文 : Generate the project sources using the Helidon SE Maven archetype.">Helidon SE Maven原型を使用してプロジェクト・ソースを生成します。</span> <span class="merged" id="all.2w3hsK.spl2" title="原文 : The result is a simple project that can be used for the examples in this guide.">その結果、このガイドの例で使用できる単純なプロジェクトになります。</span> </p>

<markup
lang="bash"
title="Run the Maven archetype:"
>mvn -U archetype:generate -DinteractiveMode=false \
    -DarchetypeGroupId=io.helidon.archetypes \
    -DarchetypeArtifactId=helidon-quickstart-se \
    -DarchetypeVersion=3.0.2 \
    -DgroupId=io.helidon.examples \
    -DartifactId=helidon-quickstart-se \
    -Dpackage=io.helidon.examples.quickstart.se</markup>

<p><span class="merged" id="all.2gjOp" title="原文 : A new directory named helidon-quickstart-se is created."><code>helidon-quickstart-se</code>という名前の新しいディレクトリが作成されます。</span></p>

<markup
lang="bash"
title="Enter into this directory:"
>cd helidon-quickstart-se</markup>

</div>


<h3 id="_add_dependencies"><span class="merged" id="all.CXQ5D"  title="原文:: Add Dependencies">依存関係の追加</span></h3>
<div class="section">
<p><span class="merged" id="all.24nyur" title="原文 : Navigate to the helidon-quickstart-se directory and open the pom.xml file to add the following Helidon dependencies required to use the DB Client:"><code>helidon-quickstart-se</code>ディレクトリに移動し、<code>pom.xml</code>ファイルを開き、DBクライアントの使用に必要な次のHelidon依存関係を追加します:</span></p>

<markup
lang="xml"
title="Copy these dependencies to pom.xml:"
>&lt;dependencies&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;io.helidon.dbclient&lt;/groupId&gt;       <span class="conum" data-value="1" />
        &lt;artifactId&gt;helidon-dbclient&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;io.helidon.dbclient&lt;/groupId&gt;      <span class="conum" data-value="2" />
        &lt;artifactId&gt;helidon-dbclient-jdbc&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;io.helidon.integrations.db&lt;/groupId&gt;   <span class="conum" data-value="3" />
        &lt;artifactId&gt;h2&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;io.helidon.dbclient&lt;/groupId&gt;      <span class="conum" data-value="4" />
        &lt;artifactId&gt;helidon-dbclient-health&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;io.helidon.dbclient&lt;/groupId&gt;      <span class="conum" data-value="5" />
        &lt;artifactId&gt;helidon-dbclient-metrics&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;io.helidon.dbclient&lt;/groupId&gt;      <span class="conum" data-value="6" />
        &lt;artifactId&gt;helidon-dbclient-jsonp&lt;/artifactId&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4Kh93s" title="原文 : DB Client API dependency.">DBクライアントAPIの依存関係。</span></li>
<li data-value="2"><span class="merged" id="all.4LTvH2" title="原文 : Using JDBC driver for this example.">この例では、JDBCドライバを使用します。</span></li>
<li data-value="3"><span class="merged" id="all.3cfyuW" title="原文 : H2 driver dependency.">H2ドライバの依存関係。</span></li>
<li data-value="4"><span class="merged" id="all.2vVf6i" title="原文 : Support for health check.">ヘルス・チェックのサポート。</span></li>
<li data-value="5"><span class="merged" id="all.4DrkcE" title="原文 : Support for metrics.">メトリクスのサポート。</span></li>
<li data-value="6"><span class="merged" id="all.1PYfTd" title="原文 : Support for Jsonp.">Jsonpのサポート。</span></li>
</ul>

</div>


<h3 id="_configure_the_db_client"><span class="merged" id="all.s9eQn" title="原文 : Configure the DB Client">DBクライアントの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.2YY79v.spl1" title="原文 : To configure the application, Helidon uses the application.yaml.">アプリケーションを構成するには、Helidonは<code>application.yaml</code>を使用します。</span> <span class="merged" id="all.2YY79v.spl2" title="原文 : The DB Client configuration can be joined in the same file and is located here: src/main/resources.">DBクライアント構成は、同じファイルに結合でき、ここにあります: <code>src/main/resources</code>。</span> </p>

<markup
lang="yaml"
title="Copy these properties into application.yaml"
>db:
  source: jdbc  <span class="conum" data-value="1" />
  connection:   <span class="conum" data-value="2" />
    url: "jdbc:h2:tcp://localhost:9092/~/test"
    username: "sa"
    password:
  statements:   <span class="conum" data-value="3" />
    create-table: "CREATE TABLE IF NOT EXISTS LIBRARY (NAME VARCHAR NOT NULL, INFO VARCHAR NOT NULL)"
    insert-book: "INSERT INTO LIBRARY (NAME, INFO) VALUES (:name, :info)"
    select-book: "SELECT INFO FROM LIBRARY WHERE NAME = ?"
    delete-book: "DELETE FROM LIBRARY WHERE NAME = ?"</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.430XPK" title="原文 : Source property support two values: jdbc and mongo.">ソース・プロパティでは2つの値がサポートされています: jdbcとmongo。</span></li>
<li data-value="2"><span class="merged" id="all.4Lhmip" title="原文 : Connection detail we used to set up H2.">H2の設定に使用した接続の詳細。</span></li>
<li data-value="3"><span class="merged" id="all.4TJIXE" title="原文 : SQL statements to manage the database.">データベースを管理するSQL文。</span></li>
</ul>

</div>


<h3 id="_build_and_set_up_helidon_db_client"><span class="merged" id="all.D5bYB" title="原文 : Build and Set Up Helidon DB Client">Helidon DBクライアントのビルドおよび設定</span></h3>
<div class="section">
<p><span class="merged" id="all.1zgL62" title="原文 : In the application Main.class, an instance of DbClient is created based on the configuration from application.yaml.">アプリケーション<code>Main.class</code>では、<code>application.yaml</code>の構成に基づいてDbClientのインスタンスが作成されます。</span></p>

<markup
lang="java"
title="Create a DbClient in the Main.startServer method:"
>import io.helidon.dbclient.metrics.DbClientMetrics; <span class="conum" data-value="1" />
import io.helidon.dbclient.DbClient;

Config config = Config.create(); // Landmark to add DB client

DbClient dbClient = DbClient.builder()
                .config(config.get("db"))       <span class="conum" data-value="2" />
                .addService(DbClientMetrics.counter().statementNames("select-book"))   <span class="conum" data-value="3" />
                .build();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1TH1UM" title="原文 : Add import statements">import文の追加</span></li>
<li data-value="2"><span class="merged" id="all.2W6A4s" title="原文 : Configure the DB Client with the &quot;db&quot; section of application.yaml.">application.yamlの「DB」セクションを使用してDBクライアントを構成します。</span></li>
<li data-value="3"><span class="merged" id="all.1de1OR" title="原文 : Add a counter for metrics.">メトリクスのカウンタを追加します。</span></li>
</ul>

<p><span class="merged" id="all.41uAiH.spl1" title="原文 : The DB Client metric counter will be executed only for the select-book statement and it will check how many times it was invoked.">DBクライアント・メトリック・カウンタは、<code>select-book</code>文に対してのみ実行され、起動された回数を確認します。</span> <span class="merged" id="all.41uAiH.spl2" title="原文 : At this point, the database is empty, and needs to be initialized.">この時点で、データベースは空であり、初期化する必要があります。</span> <span class="merged" id="all.41uAiH.spl3" title="原文 : To achieve that, the DB Client can be used to create a table in the database.">これを実現するために、DBクライアントを使用してデータベースに表を作成できます。</span> </p>

<markup
lang="java"
title="Insert a createTable method below the dbClient:"
>DbClient dbClient = DbClient.builder()
                .config(config.get("db"))
                .addService(DbClientMetrics.counter().statementNames("select-book"))
                .build();

createTable(dbClient);</markup>

<markup
lang="java"
title="Use the DbClient to build a table:"
>private static void createTable(DbClient dbClient) {
    dbClient.execute(exec -&gt; exec.namedDml("create-table"))     <span class="conum" data-value="1" />
            .await();
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2U8LXX" title="原文 : Use the &quot;create-table&quot; script to build a table with book name and information.">「create-table」スクリプトを使用して、ブック名と情報を含む表を作成します。</span></li>
</ul>

<p><span class="merged" id="all.3jZovr.spl1" title="原文 : The createTable is invoked only once and creates an empty table with two columns: name and info."><code>createTable</code>は1回のみ起動され、2つの列を含む空の表が作成されます: 名前と情報。</span> <span class="merged" id="all.3jZovr.spl2" title="原文 : The script is used to boostrap the server, so the await method is called in this particular case because the table must be created before the server starts.">スクリプトはサーバーのブー・ストラップに使用されるため、この場合は<code>await</code>メソッドがコールされます。これは、サーバーが起動する前に表を作成する必要があるためです。</span> <span class="merged" id="all.3jZovr.spl3" title="原文 : A new service can manage requests to interact with this table which represents our library.The services are registered in the createRouting method.">新しいサービスは、ライブラリを表すこのテーブルと対話するためのリクエストを管理できます。サービスは<code>createRouting</code>メソッドで登録されます。</span> </p>

<markup
lang="java"
title="Modify the createRouting method:"
>import io.helidon.dbclient.health.DbClientHealthCheck;

WebServer server = WebServer.builder(createRouting(config, dbClient))   <span class="conum" data-value="1" />
                .config(config.get("server"))
                .addMediaSupport(JsonpSupport.create())
                .build();

private static Routing createRouting(Config config, DbClient dbClient) {
    HealthSupport health = HealthSupport.builder()
            .addLiveness(DbClientHealthCheck.create(dbClient))  <span class="conum" data-value="2" />
            .build();

    return Routing.builder()
            .register(health)                   // Health at "/health"
            .register(MetricsSupport.create())                  // Metrics at "/metrics"
            .register("/greet", new GreetService(config))
            .register("/library", new LibraryService(dbClient))  <span class="conum" data-value="3" />
            .build();
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1zetcg" title="原文 : Add dbClient as a parameter of createRouting method.">dbClientをcreateRoutingメソッドのパラメータとして追加します。</span></li>
<li data-value="2"><span class="merged" id="all.2NE2dp" title="原文 : Add Health check to control the application behavior.">ヘルス・チェックを追加して、アプリケーションの動作を制御します。</span></li>
<li data-value="3"><span class="merged" id="all.mP26T" title="原文 : Register the LibraryService to the Routing.">LibraryServiceをルーティングに登録します。</span></li>
</ul>

<p><span class="merged" id="all.2THbXl.spl1" title="原文 : The library service does not yet exist, but you&rsquo;ll creat it in the next step of the guide.">ライブラリ・サービスはまだ存在していませんが、ガイドの次のステップで作成します。</span> <span class="merged" id="all.2THbXl.spl2" title="原文 : It has a constructor with the DB Client as a parameter because it will manage the library.">DBクライアントをパラメータとして持つコンストラクタは、ライブラリを管理するためです。</span> <span class="merged" id="all.2THbXl.spl3" title="原文 : The DB Client health check uses the select-book statement from the configuration.">DBクライアントのヘルス・チェックでは、構成の<code>select-book</code>文が使用されます。</span> <span class="merged" id="all.2THbXl.spl4" title="原文 : As shown above, to create a DB Client health check, call the DbClientHealthCheck.create method and pass the concerned DbClient.">前述のように、DBクライアントのヘルス・チェックを作成するには、<code>DbClientHealthCheck.create</code>メソッドをコールし、関連するDbClientを渡します。</span> <span class="merged" id="all.2THbXl.spl5" title="原文 : Then add it to the health support builder and register it to the routing.">次に、ヘルス・サポート・ビルダーに追加し、ルーティングに登録します。</span> </p>

</div>


<h3 id="_create_the_library_service"><span class="merged" id="all.4UcqAw" title="原文 : Create the Library service">ライブラリ・サービスを作成</span></h3>
<div class="section">
<p><span class="merged" id="all.2MaCHG" title="原文 : Create LibraryService class into io.helidon.examples.quickstart.se package."><code>io.helidon.examples.quickstart.se</code>パッケージにLibraryServiceクラスを作成します。</span></p>

<markup
lang="java"
title="LibraryService class looks like this:"
>package io.helidon.examples.quickstart.se;

import io.helidon.common.http.Http;     <span class="conum" data-value="1" />
import io.helidon.dbclient.DbClient;
import io.helidon.webserver.Routing;
import io.helidon.webserver.ServerRequest;
import io.helidon.webserver.ServerResponse;
import io.helidon.webserver.Service;

public class LibraryService implements Service {

    private final DbClient dbClient;    <span class="conum" data-value="2" />

    LibraryService(DbClient pDbClient){
        this.dbClient = pDbClient;      <span class="conum" data-value="3" />
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2nmnOH" title="原文 : Add new import statement">新規インポート文の追加</span></li>
<li data-value="2"><span class="merged" id="all.4ZLovN" title="原文 : Declare the Helidon DB Client">Helidon DBクライアントの宣言</span></li>
<li data-value="3"><span class="merged" id="all.2tkBkN" title="原文 : A DB Client instance is provided when LibraryService is instantiated.">LibraryServiceがインスタンス化されると、DBクライアント・インスタンスが提供されます。</span></li>
</ul>

<p><span class="merged" id="all.3MW6KF.spl1" title="原文 : As the LibraryService implements io.helidon.webserver.Service, the update(Routing) method has to be implemented.">LibraryServiceが<code>io.helidon.webserver.Service</code>を実装しているため、<code>update(Routing)</code>メソッドを実装する必要があります。</span> <span class="merged" id="all.3MW6KF.spl2" title="原文 : It defines application endpoints and Http request which can be reached by clients.">クライアントが到達できるアプリケーション・エンドポイントおよびHTTPリクエストを定義します。</span> </p>

<markup
lang="java"
title="Add update method to LibraryService"
>@Override
public void update(Routing.Rules rules) {
    rules
        .get("/{name}", this::getBook)      <span class="conum" data-value="1" />
        .put("/{name}", this::addBook)      <span class="conum" data-value="2" />
        .delete("/{name}", this::deleteBook)   <span class="conum" data-value="3" />
        .get("/json/{name}", this::getJsonBook); <span class="conum" data-value="4" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1Yi0fo" title="原文 : Return information about the required book from the database.">データベースから必要なブックに関する情報を返します。</span></li>
<li data-value="2"><span class="merged" id="all.xcgBS" title="原文 : Add a book to the library.">ライブラリに本を追加します。</span></li>
<li data-value="3"><span class="merged" id="all.R59M0" title="原文 : Remove a book from the library.">ライブラリから本を削除します。</span></li>
<li data-value="4"><span class="merged" id="all.Rmrn3" title="原文 : Return the book information in Json format.">ブック情報をJson形式で返します。</span></li>
</ul>

<p><span class="merged" id="all.1NtnI.spl1" title="原文 : To summarize, there is one endpoint that can manipulate books.">要約すると、ブックを操作できるエンドポイントが1つあります。</span> <span class="merged" id="all.1NtnI.spl2" title="原文 : The number of endpoints and application features can be changed from these rules by creating or modifying methods. {name} is a path parameter for the book name.">エンドポイントおよびアプリケーション機能の数は、メソッドを作成または変更することで、これらのルールから変更できます。<code>{name}</code>は、ブック名のパス・パラメータです。</span> <span class="merged" id="all.1NtnI.spl3" title="原文 : The architecture of the application is defined, so the next step is to create these features.">アプリケーションのアーキテクチャが定義されているため、次のステップはこれらの機能を作成することです。</span> </p>

<markup
lang="java"
title="Add getBook to the LibraryService:"
>private void getBook(ServerRequest serverRequest, ServerResponse serverResponse) {
    String bookName = serverRequest.path().param("name");   <span class="conum" data-value="1" />

    dbClient.execute(exec -&gt; exec.namedGet("select-book", bookName))    <span class="conum" data-value="2" />
            .thenAccept(row -&gt; {
                if (row.isPresent()) {
                    serverResponse.send(row.get().column("INFO").as(String.class)); <span class="conum" data-value="3" />
                } else {
                    serverResponse.status(Http.Status.NOT_FOUND_404)    <span class="conum" data-value="4" />
                            .send();
                }
            })
            .exceptionally(serverResponse::send);   <span class="conum" data-value="5" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1808dR" title="原文 : Get the book name from the path in the URL.">URLのパスからブック名を取得します。</span></li>
<li data-value="2"><span class="merged" id="all.4OVAUD" title="原文 : Helidon DB Client executes the select-book SQL script from application.yaml.">Helidon DBクライアントは、application.yamlから<code>select-book</code> SQLスクリプトを実行します。</span></li>
<li data-value="3"><span class="merged" id="all.4Cv8st" title="原文 : Sends book information to the client.">ブック情報をクライアントに送信します。</span></li>
<li data-value="4"><span class="merged" id="all.3ri5pD" title="原文 : Sends 404 HTTP status if no book was found for the given name.">指定された名前のブックが見つからなかった場合に404 HTTPステータスを送信します。</span></li>
<li data-value="5"><span class="merged" id="all.32AWM2" title="原文 : If an exception occurred during the process, it is sent to the client.">プロセス中に例外が発生しました。クライアントに送信されます。</span></li>
</ul>

<p><span class="merged" id="all.3jnLC9.spl1" title="原文 : The getBook method reach the book from the database and send the information to the client."><code>getBook</code>メソッドはデータベースからブックに到達し、その情報をクライアントに送信します。</span> <span class="merged" id="all.3jnLC9.spl2" title="原文 : The name of the book is located into the url path.">ブックの名前はURLパスにあります。</span> <span class="merged" id="all.3jnLC9.spl3" title="原文 : If the book is not present in the database, a HTTP 404 is sent back.">データベースにブックが存在しない場合は、HTTP 404が返されます。</span> <span class="merged" id="all.3jnLC9.spl4" title="原文 : The execute(Function&lt;DbExecute, T&gt; executor) method is called on the dbClient instance to execute one statement.">dbClientインスタンスで<code>execute(Function&lt;DbExecute, T> executor)</code>メソッドがコールされ、1つの文が実行されます。</span> <span class="merged" id="all.3jnLC9.spl5" title="原文 : Nevertheless, it is possible to execute a set of tasks into a single execution unit by using inTransaction (Function&lt;DbTransaction, T&gt; executor) method.">ただし、<code>inTransaction (Function&lt;DbTransaction, T> executor)</code>メソッドを使用して、一連のタスクを1つの実行ユニットに実行できます。</span> </p>

<p><span class="merged" id="all.19fr34.spl1" title="原文 : DbExecute class provides many builders to create statements such as, DML, insert, update, delete, query and get statements.">DbExecuteクラスは、DML、挿入、更新、削除、問合せ、get文などの文を作成するための多くのビルダーを提供します。</span> <span class="merged" id="all.19fr34.spl2" title="原文 : For each statement there are two builders which can be regrouped in 2 categories.">各文にはつのビルダーがあり、2つのカテゴリで再グループ化できます。</span> <span class="merged" id="all.19fr34.spl3" title="原文 : Builders with methods containing Named keyword, they use a statement defined in the configuration file."><code>Named</code>キーワードを含むメソッドを持つビルダーは、構成ファイルで定義された文を使用します。</span> </p>

<p><span class="merged" id="all.3mz5TX.spl1" title="原文 : And builders without Named keyword, they use a statement passed as an argument.">また、<code>Named</code>キーワードのないビルダーは、引数として渡された文を使用します。</span> <span class="merged" id="all.3mz5TX.spl2" title="原文 : More information on the Helidon DB Client here.">Helidon DBクライアントの詳細は<router-link to="/se/dbclient">こちら</router-link>です。</span> </p>

<markup
lang="java"
title="Add getJsonBook to the LibraryService:"
>private void getJsonBook(ServerRequest serverRequest, ServerResponse serverResponse) {
    String bookName = serverRequest.path().param("name");

    dbClient.execute(exec -&gt; exec.namedGet("select-book", bookName))
            .thenAccept(row -&gt; {
                if (row.isPresent()) {
                    serverResponse.send(row.get().as(JsonObject.class));
                } else {
                    serverResponse.status(Http.Status.NOT_FOUND_404)
                            .send();
                }
            })
            .exceptionally(serverResponse::send);
}</markup>

<p><span class="merged" id="all.3pQhjR" title="原文 : Instead of sending the INFO content of the targeted book, the getJsonBook method send the whole row of the database as a JsonObject.">ターゲット・ブックの<code>INFO</code>コンテンツを送信するかわりに、<code>getJsonBook</code>メソッドはデータベースの行全体を<code>JsonObject</code>として送信します。</span></p>

<markup
lang="java"
title="Add addBook to the LibraryService:"
>private void addBook(ServerRequest serverRequest, ServerResponse serverResponse) {
    String bookName = serverRequest.path().param("name");

    serverRequest.content()
            .as(String.class)
            .thenAccept(newValue -&gt; {
                dbClient.execute(exec -&gt; exec.createNamedInsert("insert-book")
                        .addParam("name", bookName)     <span class="conum" data-value="1" />
                        .addParam("info", newValue)
                        .execute())
                        .thenAccept(count -&gt; serverResponse.status(Http.Status.CREATED_201).send())     <span class="conum" data-value="2" />
                        .exceptionally(serverResponse::send);
            });
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2p9TO0.spl1" title="原文 : The SQL statement requires the book name and its information.">SQL文には、ブック名と情報が必要です。</span> <span class="merged" id="all.2p9TO0.spl2" title="原文 : They are provided with addParam method.">これらは<code>addParam</code>メソッドで提供されます。</span> </li>
<li data-value="2"><span class="merged" id="all.3J8gy3" title="原文 : A new book was added to library, so a HTTP 201 code is returned.">新しいブックがライブラリに追加されたため、HTTP 201コードが返されます。</span></li>
</ul>

<p><span class="merged" id="all.2ZENeJ.spl1" title="原文 : When a user adds a new book, it uses HTTP PUT method where the book name is in the URL and the information in the request content.">ユーザーが新しいブックを追加すると、ブック名がURLにあるHTTP PUTメソッドとリクエスト・コンテンツ内の情報が使用されます。</span> <span class="merged" id="all.2ZENeJ.spl2" title="原文 : To catch this content, the information is retrieved as a string and then the DB Client execute the insert-book script to add the book to the library.">このコンテンツを捕捉するために、情報は文字列として取得され、DBクライアントは<code>insert-book</code>スクリプトを実行してブックをライブラリに追加します。</span> <span class="merged" id="all.2ZENeJ.spl3" title="原文 : It requires two parameters, the book name and information which are passed to the dbClient thanks to addParam method.">これには、<code>addParam</code>メソッドのおかげでdbClientに渡されるブック名と情報という2つのパラメータが必要です。</span> <span class="merged" id="all.2ZENeJ.spl4" title="原文 : A HTTP 201 is sent back as a confirmation if no exception is thrown.">例外がスローされない場合は、HTTP 201が確認として返されます。</span> </p>

<markup
lang="java"
title="Add deleteBook to LibraryService:"
>private void deleteBook(ServerRequest serverRequest, ServerResponse serverResponse) {
    String bookName = serverRequest.path().param("name");

    dbClient.execute(exec -&gt;  exec.namedDelete("delete-book", bookName))     <span class="conum" data-value="1" />
                        .thenAccept(count -&gt; serverResponse.status(Http.Status.NO_CONTENT_204).send())   <span class="conum" data-value="2" />
                        .exceptionally(serverResponse::send);
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2OvXo0" title="原文 : Execute SQL script from application.yaml to remove a book from the library by its name.">application.yamlからSQLスクリプトを実行して、名前でライブラリからブックを削除します。</span></li>
<li data-value="2"><span class="merged" id="all.1Uww6f" title="原文 : The required book was removed, so a HTTP 204 is sent.">必要なブックが削除されたため、HTTP 204が送信されます。</span></li>
</ul>

<p><span class="merged" id="all.hmtQf.spl1" title="原文 : To remove a book from the library, use the &quot;delete-book&quot; script in the way than previously.">ライブラリからブックを削除するには、前述のように「delete-book」スクリプトを使用します。</span> <span class="merged" id="all.hmtQf.spl2" title="原文 : If the book is removed successfully, a HTTP 204 is sent back.">ブックが正常に削除されると、HTTP 204が返送されます。</span> </p>

</div>

</div>


<h2 id="_build_and_run_the_library_application"><span class="merged" id="all.3KY999" title="原文 : Build and Run the Library Application">ライブラリ・アプリケーションの構築および実行</span></h2>
<div class="section">
<p><span class="merged" id="all.mlQel" title="原文 : The application is ready to be built and run.">アプリケーションは構築および実行可能な状態です。</span></p>

<markup
lang="bash"
title="Run the following to build the application:"
>mvn package</markup>

<p><span class="merged" id="all.2M8ORq.spl1" title="原文 : Note that the tests are passing as the GreetService process was not modified."><code>GreetService</code>プロセスが変更されていないため、テストは渡されます。</span> <span class="merged" id="all.2M8ORq.spl2" title="原文 : For the purposes of this demonstration, we only added independent new content to the existing application.">このデモンストレーションの目的で、既存のアプリケーションに独立した新しいコンテンツのみを追加しました。</span> <span class="merged" id="all.2M8ORq.spl3" title="原文 : Make sure H2 is running and start the Helidon quickstart with this command:">H2が実行されていることを確認し、このコマンドを使用してHelidonクイックスタートを開始します:</span> </p>

<markup
lang="bash"
title="Run the application"
>java -jar target/helidon-quickstart-se.jar</markup>

<p><span class="merged" id="all.3H5OAc.spl1" title="原文 : Once the application starts, check the table LIBRARY is created in the H2 database.">アプリケーションが起動したら、H2データベースに表LIBRARYが作成されていることを確認します。</span> <span class="merged" id="all.3H5OAc.spl2" title="原文 : To do so, go to the H2 Server console and LIBRARY table should be present in the left column under jdbc:h2:tcp://localhost:9092/~/test.">これを行うには、H2サーバー・コンソールに移動し、<code>jdbc:h2:tcp://localhost:9092/~/test</code>の下の左の列にLIBRARY表が存在する必要があります。</span> <span class="merged" id="all.3H5OAc.spl3" title="原文 : If it is not, try to refresh the page, and it should appear.">そうでない場合は、ページをリフレッシュして表示する必要があります。</span> </p>

<p><span class="merged" id="all.2OfI3t" title="原文 : Use curl to send request to the application:"><code>curl</code>を使用して、アプリケーションにリクエストを送信します:</span></p>

<markup
lang="bash"
title="Get a book from the library"
>curl -i http://localhost:8080/library/SomeBook</markup>

<markup
lang="listing"
title="HTTP response"
>HTTP/1.1 404 Not Found
Date: Tue, 12 Jan 2021 14:00:48 +0100
transfer-encoding: chunked
connection: keep-alive</markup>

<p><span class="merged" id="all.4Azs9P.spl1" title="原文 : There is currently no book inside the library, so the application returns a 404.">現在ライブラリ内にブックがないため、アプリケーションは404を返します。</span> <span class="merged" id="all.4Azs9P.spl2" title="原文 : Yet the application created an empty library table.">ただし、アプリケーションは空のライブラリ表を作成しました。</span> <span class="merged" id="all.4Azs9P.spl3" title="原文 : Try to add a new book.">新しい本を追加してみてください。</span> </p>

<markup
lang="bash"
title="Add a book from the library"
>curl -i -X PUT -d "Fantasy" http://localhost:8080/library/HarryPotter</markup>

<markup
lang="listing"
title="HTTP response"
>HTTP/1.1 201 Created
Date: Tue, 12 Jan 2021 14:01:08 +0100
transfer-encoding: chunked
connection: keep-alive</markup>

<p><span class="merged" id="all.2kQ93H.spl1" title="原文 : This command creates an HTTP PUT request with the genre Fantasy content at the address http://localhost:8080/library/{book-name}.">このコマンドは、アドレス<a class="bare" href="http://localhost:8080/library/{book-name}" target="_blank">http://localhost:8080/library/{book-name}</a>のジャンル<code>Fantasy</code>コンテンツを持つHTTP PUTリクエストを作成します。</span> <span class="merged" id="all.2kQ93H.spl2" title="原文 : The 201 code means that Harry Potter book was successfully added to the library.">201コードは、Harry Potter本がライブラリに正常に追加されたことを意味します。</span> <span class="merged" id="all.2kQ93H.spl3" title="原文 : You can now try to get it !">得てみよう!</span> </p>

<markup
lang="bash"
title="Get Harry Potter from the library"
>curl -i http://localhost:8080/library/HarryPotter</markup>

<markup
lang="listing"
title="HTTP response"
>HTTP/1.1 200 OK
Content-Type: text/plain
Date: Tue, 12 Jan 2021 14:01:14 +0100
connection: keep-alive
content-length: 6

Fantasy</markup>

<p><span class="merged" id="all.14tbk6" title="原文 : The application accepted the request and returned an HTTP 200 OK with the book genre that was added earlier.">アプリケーションはリクエストを受け付け、以前に追加されたブック・ジャンルでHTTP 200 OKを返しました。</span></p>

<markup
lang="bash"
title="Get Harry Potter from the library in Json"
>curl -i http://localhost:8080/library/json/HarryPotter</markup>

<markup
lang="listing"
title="HTTP response"
>HTTP/1.1 200 OK
Content-Type: text/plain
Date: Tue, 12 Jan 2021 14:01:14 +0100
connection: keep-alive
content-length: 6

{"INFO":"Fantasy"}</markup>

<p><span class="merged" id="all.2XkN1p.spl1" title="原文 : It returns the database row in a Json format for the Harry Potter book.">ハリー・ポッター・ブックのデータベース行をJson形式で返します。</span> <span class="merged" id="all.2XkN1p.spl2" title="原文 : Harry Potter can be removed from the library with the following:">ハリー・ポッターは、次の方法でライブラリから削除できます:</span> </p>

<markup
lang="bash"
title="Remove Harry Potter from the library"
>curl -i -X DELETE http://localhost:8080/library/HarryPotter</markup>

<markup
lang="listing"
title="HTTP response"
>HTTP/1.1 204 No Content
Date: Tue, 12 Jan 2021 14:01:22 +0100
connection: keep-alive</markup>

<p><span class="merged" id="all.3p71rY.spl1" title="原文 : The book had been removed from the library and confirmed by the 204 HTTP status.">本は図書館から削除され、204のHTTPステータスによって確認された。</span> <span class="merged" id="all.3p71rY.spl2" title="原文 : To check that the book was correctly deleted, try to get it again.">ブックが正しく削除されたことを確認するには、再度取得してください。</span> </p>

<markup
lang="bash"
title="Get Harry Potter from the library"
>curl -i http://localhost:8080/library/HarryPotter</markup>

<markup
lang="listing"
title="HTTP response"
>HTTP/1.1 404 Not Found
Date: Tue, 12 Jan 2021 14:00:48 +0100
transfer-encoding: chunked
connection: keep-alive</markup>

<p><span class="merged" id="all.1l7JHD.spl1" title="原文 : The book is not found.">本が見つかりません。</span> <span class="merged" id="all.1l7JHD.spl2" title="原文 : We quickly checked, thanks to this suite of command, the application behavior.">この一連のコマンドのおかげで、アプリケーションの動作がすぐに確認されました。</span> </p>

<markup
lang="bash"
title="Check the health of your application:"
>curl http://localhost:8080/health</markup>

<markup
lang="json"
title="Response body"
>{
  "state" : "UP",
  "status" : "UP",
  "name" : "jdbc:h2"
}</markup>

<p><span class="merged" id="all.2lk4g" title="原文 : It confirms that the database is UP.">データベースが稼働中であることを確認します。</span></p>

<markup
lang="bash"
title="Check the metrics of your application:"
>curl -H "Accept: application/json" http://localhost:8080/metrics/application</markup>

<markup
lang="json"
title="Response body"
>{
  "db.counter.select-book" : 4
}</markup>

<p><span class="merged" id="all.KcmMr" title="原文 : The select-book statement was invoked four times.">select-book文は4回呼び出されました。</span></p>


<h3 id="_summary"><span class="merged" id="all.1nTCR.9"  title="原文:: Summary">サマリー</span></h3>
<div class="section">
<p><span class="merged" id="all.1XFiD.spl1" title="原文 : This guide provided an introduction to the Helidon DB Client&rsquo;s key features.">このガイドでは、Helidon DBクライアントの主要な機能の概要を説明します。</span> <span class="merged" id="all.1XFiD.spl2" title="原文 : If you want to learn more, see the Helidon DB Client samples in https://medium.com/helidon/helidon-db-client-e12bbdc85b7.">詳細は、<a class="bare" href="https://medium.com/helidon/helidon-db-client-e12bbdc85b7" target="_blank">https://medium.com/helidon/helidon-db-client-e12bbdc85b7</a>のHelidon DBクライアント・サンプルを参照してください。</span> </p>

</div>

</div>

</doc-view>
