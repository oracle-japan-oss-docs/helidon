<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.XUA2h" title="原文 : Helidon MP Tutorial">Helidon MPチュートリアル</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1KZLrG" title="原文 : This tutorial describes how to build a Helidon MicroProfile (MP) application from scratch including JSON REST endpoints, metrics, health check, and configuration.">このチュートリアルでは、JSON RESTエンドポイント、メトリクス、ヘルス・チェックおよび構成を含むHelidon MicroProfile (MP)アプリケーションを最初からビルドする方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_what_you_need"><span class="merged" id="all.27ZcMH.11"  title="原文:: What You Need">必要事項</span></h2>
<div class="section">
<p><span class="merged" id="all.1gm77V" title="原文 : For this 30 minute tutrial, you will need the following:">この30分のトライアルでは、次のものが必要です:</span></p>


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
<td class=""><span class="merged" id="all.1hKNxI.8" title="原文 : A Helidon {upper-case-flavor} Application">Helidon {upper-case-flavor} アプリケーション</span></td>
<td class=""><span class="merged" id="all.3jMlMY.8" title="原文 : You can use your own application or use the Helidon {upper-case-flavor} Quickstart to create a sample application.">独自のアプリケーションを使用するか、<a href="https://helidon.io/docs/v2/#/{lower-case-flavor}/guides/02_quickstart" id="" target="_blank" >「Helidon {upper-case-flavor} クイックスタート」</a>を使用してサンプル・アプリケーションを作成できます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3UjXGj.9" title="原文 : Java&#160;SE&#160;11 (Open&#160;JDK&#160;11)"><a href="https://www.oracle.com/technetwork/java/javase/downloads" id="" target="_blank" >Java&#160;SE&#160;11</a> (<a href="http://jdk.java.net" id="" target="_blank" >Open&#160;JDK&#160;11</a>)</span></td>
<td class=""><span class="merged" id="all.3e6V0X.9" title="原文 : Helidon requires Java 11+.">HelidonにはJava 11以上が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1nyTbh.11" title="原文 : Maven 3.6.1+"><a href="https://maven.apache.org/download.cgi" id="" target="_blank" >Maven 3.6.1+</a></span></td>
<td class=""><span class="merged" id="all.3woDk0.9" title="原文 : Helidon requires Maven 3.6.1+.">Helidonには、Maven 3.6.1+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1HtX9I.10"  title="原文:: Docker 18.09+"><a href="https://docs.docker.com/install/" id="" target="_blank" >Docker 18.09+</a></span></td>
<td class=""><span class="merged" id="all.aX1BT.9" title="原文 : You need Docker if you want to build and deploy Docker containers.">Dockerコンテナをビルドおよびデプロイする場合は、Dockerが必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48aNQe.10"  title="原文:: Kubectl 1.16.5+"><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" id="" target="_blank" >Kubectl 1.16.5+</a></span></td>
<td class=""><span class="merged" id="all.1tjPJQ.9" title="原文 : If you want to deploy to Kubernetes, you need kubectl and a Kubernetes cluster (you can install one on your desktop).">Kubernetesにデプロイする場合は、<code>kubectl</code>およびKubernetesクラスタ(<router-link to="/about/05_kubernetes">「デスクトップにインストール」</router-link>も可)が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4N9w7q.2"  title="原文:: curl"><a href="https://curl.se/download.html" id="" target="_blank" >curl</a></span></td>
<td class=""><span class="merged" id="all.2BBRFb.2" title="原文 : (Optional) for testing">(オプション)テスト用</span></td>
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

<h2 id="_create_the_maven_project"><span class="merged" id="all.3sABdy" title="原文 : Create the Maven Project">Mavenプロジェクトの作成</span></h2>
<div class="section">
<p><span class="merged" id="all.gW6sm" title="原文 : This tutorial demonstrates how to create the application from scratch, without using the Maven archetypes as a quickstart.">このチュートリアルでは、Maven原型をクイックスタートとして使用せずに、最初からアプリケーションを作成する方法を示します。</span></p>

<p><span class="merged" id="all.5795c.spl1" title="原文 : Create a new empty directory for the project (for example, helidon-mp-tutorial).">プロジェクトの新しい空のディレクトリ(たとえば、<code>helidon-mp-tutorial</code>)を作成します。</span> <span class="merged" id="all.5795c.spl2" title="原文 : Change into this directory.">このディレクトリに移動します。</span> </p>

<p><span class="merged" id="all.3CL2Vl" title="原文 : Create a new Maven POM file (called pom.xml) and add the following content:">新しいMaven POMファイル(<code>pom.xml</code>と呼ばれる)を作成し、次のコンテンツを追加します:</span></p>

<markup
lang="xml"
title="Initial Maven POM file"
>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
    &lt;parent&gt; <span class="conum" data-value="1" />
        &lt;groupId&gt;io.helidon.applications&lt;/groupId&gt;
        &lt;artifactId&gt;helidon-mp&lt;/artifactId&gt;
        &lt;version&gt;2.5.4&lt;/version&gt;
        &lt;relativePath/&gt;
    &lt;/parent&gt;

    &lt;groupId&gt;io.helidon.examples&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-mp-tutorial&lt;/artifactId&gt;  <span class="conum" data-value="2" />
    &lt;name&gt;${project.artifactId}&lt;/name&gt;

    &lt;properties&gt;
        &lt;mainClass&gt;io.helidon.examples.Main&lt;/mainClass&gt; <span class="conum" data-value="3" />
    &lt;/properties&gt;

    &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;io.helidon.microprofile.bundles&lt;/groupId&gt;
            &lt;artifactId&gt;helidon-microprofile&lt;/artifactId&gt; <span class="conum" data-value="4" />
        &lt;/dependency&gt;
    &lt;/dependencies&gt;

    &lt;build&gt; <span class="conum" data-value="5" />
        &lt;plugins&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
                &lt;artifactId&gt;maven-dependency-plugin&lt;/artifactId&gt;
                &lt;executions&gt;
                    &lt;execution&gt;
                        &lt;id&gt;copy-libs&lt;/id&gt;
                    &lt;/execution&gt;
                &lt;/executions&gt;
            &lt;/plugin&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.jboss.jandex&lt;/groupId&gt;
                &lt;artifactId&gt;jandex-maven-plugin&lt;/artifactId&gt;
                &lt;executions&gt;
                    &lt;execution&gt;
                        &lt;id&gt;make-index&lt;/id&gt;
                    &lt;/execution&gt;
                &lt;/executions&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;
&lt;/project&gt;</markup>

<p><span class="merged" id="all.2hhbYY" title="原文 : The POM file contains the basic project information and configurations needed to get started and does the following:">POMファイルには、開始するために必要な基本的なプロジェクト情報および構成が含まれており、次のことを実行します:</span></p>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.26GU0l.spl1" title="原文 : Includes the Helidon MP application parent pom.">Helidon MPアプリケーションの親POMが含まれます。</span> <span class="merged" id="all.26GU0l.spl2" title="原文 : This parent pom contains dependency and plugin management to keep your application&rsquo;s pom simple and clean.">この親POMには、アプリケーションのPOMを単純かつクリーンに保つための依存関係およびプラグイン管理が含まれています。</span> </li>
<li data-value="2"><span class="merged" id="all.oM6bp" title="原文 : Establishes the Maven coordinates for the new project.">新規プロジェクトのMaven連携を確立します。</span></li>
<li data-value="3"><span class="merged" id="all.4DdEH.spl1" title="原文 : Sets the mainClass which will be used later when building a JAR file.">後でJARファイルをビルドするときに使用される<code>mainClass</code>を設定します。</span> <span class="merged" id="all.4DdEH.spl2" title="原文 : The class will be created later in this tutorial.">クラスは、このチュートリアルの後半で作成します。</span> </li>
<li data-value="4"><span class="merged" id="all.1UaK4f.spl1" title="原文 : Adds a dependency for the MicroProfile bundle which allows the use of MicroProfile features in the application.">アプリケーションでMicroProfile機能を使用できるようにするMicroProfileバンドルの依存関係を追加します。</span> <span class="merged" id="all.1UaK4f.spl2" title="原文 : The helidon-mp parent pom includes dependency management, so you don&rsquo;t need to include a version number here.">helidon-mp親POMには依存関係管理が含まれているため、ここにバージョン番号を含める必要はありません。</span> <span class="merged" id="all.1UaK4f.spl3" title="原文 : You will automatically use the version of Helidon that matches the version of the parent pom ({helidon.version} in this case).">親POM (この場合は{helidon.version} )のバージョンと一致するバージョンのHelidonを自動的に使用します。</span> </li>
<li data-value="5"><span class="merged" id="all.3Fg9mt.spl1" title="原文 : Adds plugins to be executed during the build.">ビルド中に実行されるプラグインを追加します。</span> <span class="merged" id="all.3Fg9mt.spl2" title="原文 : The maven-dependency-plugin is used to copy the runtime dependencies into your target directory."><code>maven-dependency-plugin</code>は、ランタイム依存関係をターゲット・ディレクトリにコピーするために使用されます。</span> <span class="merged" id="all.3Fg9mt.spl3" title="原文 : The jandex-maven-plugin builds an index of your class files for faster loading."><code>jandex-maven-plugin</code>は、ロードを高速化するためにクラス・ファイルの索引をビルドします。</span> <span class="merged" id="all.3Fg9mt.spl4" title="原文 : The Helidon parent pom handles the details of configuring these plugins.">Helidonの親POMは、これらのプラグインの構成の詳細を処理します。</span> <span class="merged" id="all.3Fg9mt.spl5" title="原文 : But you can modify the configuration here.">ただし、ここで構成を変更できます。</span> </li>
</ul>
<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.2mxriT.spl1" title="原文 : MicroProfile contains features like Metrics, Health Check, Streams Operators, Open Tracing, OpenAPI, REST client, and fault tolerance.">MicroProfileには、メトリクス、ヘルス・チェック、ストリーム・オペレータ、オープン・トレース、OpenAPI、RESTクライアント、フォルト・トレランスなどの機能が含まれます。</span> <span class="merged" id="all.2mxriT.spl2" title="原文 : You can find detailed information about MicroProfile on the Eclipse MicroProfile site.">MicroProfileの詳細は、<a href="https://projects.eclipse.org/projects/technology.microprofile" id="" target="_blank" >Eclipse MicroProfile</a>サイトを参照してください。</span> </p>
</div>
<p><span class="merged" id="all.1EoHq4" title="原文 : With this pom.xml, the application can be built successfully with Maven:">この<code>pom.xml</code>では、Mavenを使用してアプリケーションを正常に構築できます:</span></p>

<markup
lang="bash"

>mvn clean package</markup>

<p><span class="merged" id="all.diAhu" title="原文 : This will create a JAR file in the target directory.">これにより、<code>target</code>ディレクトリにJARファイルが作成されます。</span></p>

<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.iJdfS" title="原文 : The warning message JAR will be empty - no content was marked for inclusion! can be ignored for now because there is no actual content in the application yet.">アプリケーションに実際のコンテンツがまだないため、ここでは警告メッセージ<code>JAR will be empty - no content was marked for inclusion!</code>を無視できます。</span></p>
</div>
</div>

<h2 id="_start_implementing_the_microprofile_application"><span class="merged" id="all.2rZtfZ" title="原文 : Start Implementing the MicroProfile Application">MicroProfileアプリケーションの実装の開始</span></h2>
<div class="section">
<p><span class="merged" id="all.sqanS.spl1" title="原文 : The actual application logic can be created now.">これで、実際のアプリケーション・ロジックを作成できます。</span> <span class="merged" id="all.sqanS.spl2" title="原文 : Create a directory for your source code, and then create directories for the package hierarchy:">ソース・コードのディレクトリを作成してから、パッケージ階層のディレクトリを作成します:</span> </p>

<markup
lang="bash"
title="Create directories for source code"
>mkdir -p src/main/java/io/helidon/examples</markup>

<p><span class="merged" id="all.3SYANd.spl1" title="原文 : The application will be a simple REST service that will return a greeting to the caller.">アプリケーションは、呼出し側に応答メッセージを返す単純なRESTサービスになります。</span> <span class="merged" id="all.3SYANd.spl2" title="原文 : The first iteration of the application will contain a resource class and a Main class which will be used to start up the Helidon server and the application.">アプリケーションの最初の反復には、Helidonサーバーとアプリケーションの起動に使用されるリソース・クラスとMainクラスが含まれます。</span> </p>

<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.3Eqiw4.spl1" title="原文 : Technically, your own main class is not needed unless you want to control the startup sequence.">技術的には、起動シーケンスを制御する場合を除き、独自のメイン・クラスは必要ありません。</span> <span class="merged" id="all.3Eqiw4.spl2" title="原文 : You can set the mainClass property to io.helidon.microprofile.cdi.Main and it will use Helidon&rsquo;s default main class."><code>mainClass</code>プロパティを<code>io.helidon.microprofile.cdi.Main</code>に設定すると、Helidonのデフォルトのメイン・クラスが使用されます。</span> </p>
</div>
<p><span class="merged" id="all.JZbtb" title="原文 : The GreetResource is defined in the GreetResource.java class as shown below:"><code>GreetResource</code>は、次に示すように<code>GreetResource.java</code>クラスで定義されます:</span></p>

<markup
lang="java"
title="src/main/java/io/helidon/examples/GreetResource.java"
>package io.helidon.examples;

import javax.enterprise.context.RequestScoped;
import javax.json.Json;
import javax.json.JsonBuilderFactory;
import javax.json.JsonObject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.Collections;

@Path("/greet") <span class="conum" data-value="1" />
@RequestScoped <span class="conum" data-value="2" />
public class GreetResource {

    private static final JsonBuilderFactory JSON = Json.createBuilderFactory(Collections.emptyMap());

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public JsonObject getDefaultMessage() { <span class="conum" data-value="3" />
        return JSON.createObjectBuilder()
                .add("message", "Hello World")
                .build(); <span class="conum" data-value="4" />
    }

}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.5eNAB" title="原文 : This class is annotated with Path which sets the path for this resource as /greet.">このクラスには、このリソースのパスを<code>/greet</code>として設定する<code>Path</code>の注釈が付けられます。</span></li>
<li data-value="2"><span class="merged" id="all.30zJkM.spl1" title="原文 : The RequestScoped annotation defines that this bean is request scoped."><code>RequestScoped</code>注釈は、このBeanがリクエスト・スコープであることを定義します。</span> <span class="merged" id="all.30zJkM.spl2" title="原文 : The request scope is active only for the duration of one web service invocation and it is destroyed at the end of that invocation.">リクエスト・スコープは、1つのwebサービス呼出しの間のみアクティブになり、その呼出しの最後に破棄されます。</span> <span class="merged" id="all.30zJkM.spl3" title="原文 : You can learn more about scopes and contexts, and how they are used from the Specification.">スコープとコンテキスト、およびそれらの使用方法の詳細は、<a href="https://docs.jboss.org/cdi/api/2.0/index.html" id="" target="_blank" >「仕様」</a>を参照してください。</span> </li>
<li data-value="3"><span class="merged" id="all.2y69Fg.spl1" title="原文 : A public JsonObject getDefaultMessage() method is defined which is annotated with GET, meaning it will accept the HTTP GET method."><code>GET</code>の注釈が付いた<code>public JsonObject getDefaultMessage()</code>メソッドが定義されています。つまり、HTTP GETメソッドを受け入れます。</span> <span class="merged" id="all.2y69Fg.spl2" title="原文 : It is also annotated with Produces(MediaType.APPLICATION_JSON) which declares that this method will return JSON data.">また、このメソッドがJSONデータを返すことを宣言する<code>Produces(MediaType.APPLICATION_JSON)</code>で注釈が付けられます。</span> </li>
<li data-value="4"><span class="merged" id="all.2JvZv9.spl1" title="原文 : The method body creates a JSON object containing a single object named &quot;message&quot; with the content &quot;Hello World&quot;.">メソッド本文は、"Hello World"という内容の"message"という名前の単一オブジェクトを含むJSONオブジェクトを作成します。</span> <span class="merged" id="all.2JvZv9.spl2" title="原文 : This method will be expanded and improved later in the tutorial.">このメソッドは、チュートリアルの後半で拡張および改善されます。</span> </li>
</ul>
<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.1JjIcD.spl1" title="原文 : So far this is just a JAX-RS application, with no Helidon or MicroProfile specific code in it.">これは単なるJAX-RSアプリケーションで、HelidonまたはMicroProfile固有のコードは含まれていません。</span> <span class="merged" id="all.1JjIcD.spl2" title="原文 : There are many JAX-RS tutorials available if you want to learn more about this kind of application.">この種のアプリケーションの詳細を学習する場合は、多くのJAX-RSチュートリアルを使用できます。</span> </p>
</div>
<p><span class="merged" id="all.pN3vX.spl1" title="原文 : A main class is also required to start up the server and run the application.">サーバーを起動してアプリケーションを実行するには、メイン・クラスも必要です。</span> <span class="merged" id="all.pN3vX.spl2" title="原文 : If you don&rsquo;t use Helidon&rsquo;s built-in main class you can define your own:">Helidonの組込みメイン・クラスを使用しない場合は、独自のクラスを定義できます:</span> </p>

<markup
lang="java"
title="src/main/java/io/helidon/examples/Main.java"
>package io.helidon.examples;

import io.helidon.microprofile.server.Server;
import java.io.IOException;

public final class Main {

    private Main() { } <span class="conum" data-value="1" />

    public static void main(final String[] args) throws IOException {
        Server server = startServer();
        System.out.println("http://localhost:" + server.port() + "/greet");
    }

    static Server startServer() {
        return Server.create().start(); <span class="conum" data-value="2" />
    }

}</markup>

<p><span class="merged" id="all.cfMpi.1" title="原文 : In this class, a main method is defined which starts the Helidon MP server and prints out a message with the listen address.">このクラスでは、Helidon MPサーバーを起動し、リスニング・アドレスを含むメッセージを出力する<code>main</code>メソッドが定義されます。</span></p>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.CoXHI.1" title="原文 : Notice that this class has an empty no-args constructor to make sure this class cannot be instantiated.">このクラスには、このクラスをインスタンス化できないようにする空の引数なしコンストラクタがあることに注意してください。</span></li>
<li data-value="2"><span class="merged" id="all.3Y5ssM.1" title="原文 : The MicroProfile server is started with the default configuration.">MicroProfileサーバーは、デフォルト構成で起動されます。</span></li>
</ul>
<p><span class="merged" id="all.25prxg" title="原文 : Helidon MP applications also require a beans.xml resource file to tell Helidon to use the annotations discussed above to discover Java beans in the application.">Helidon MPアプリケーションには、前述の注釈を使用してアプリケーション内のJava beanを検出するようにHelidonに指示する<code>beans.xml</code>リソース・ファイルも必要です。</span></p>

<p><span class="merged" id="all.2kEhYi" title="原文 : Create a beans.xml in the src/main/resources/META-INF directory with the following content:">次の内容で<code>beans.xml</code>を<code>src/main/resources/META-INF</code>ディレクトリに作成します:</span></p>

<markup
lang="xml"
title="src/main/resources/META-INF/beans.xml"
>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;beans xmlns="http://xmlns.jcp.org/xml/ns/javaee"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
                           http://xmlns.jcp.org/xml/ns/javaee/beans_2_0.xsd"
       version="2.0"
       bean-discovery-mode="annotated"&gt; <span class="conum" data-value="1" />
&lt;/beans&gt;</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.45sZB4" title="原文 : The bean-discovery-mode tells Helidon to look for the annotations to discover Java beans in the application."><code>bean-discovery-mode</code>は、アプリケーションでJava beanを検出するための注釈を検索するようにHelidonに指示します。</span></li>
</ul>
</div>

<h2 id="_build_the_application"><span class="merged" id="all.2sc1No.2" title="原文 : Build the Application">アプリケーションのビルド</span></h2>
<div class="section">
<p><span class="merged" id="all.j91U7" title="原文 : Helidon MP applications are packaged into a JAR file and the dependencies are copied into a libs directory.">Helidon MPアプリケーションはJARファイルにパッケージ化され、依存関係は<code>libs</code>ディレクトリにコピーされます。</span></p>

<markup>You can now build the application.</markup>
<markup
lang="bash"
title="Build the Application"
>mvn package</markup>

<p><span class="merged" id="all.2O8bJP.spl1" title="原文 : This will build the application jar and save all runtime dependencies in the target/libs directory.">これにより、アプリケーションjarがビルドされ、すべてのランタイム依存関係が<code>target/libs</code>ディレクトリに保存されます。</span> <span class="merged" id="all.2O8bJP.spl2" title="原文 : This means you can easily start the application by running the application jar file:">つまり、アプリケーションjarファイルを実行することで、アプリケーションを簡単に起動できます:</span> </p>

<markup
lang="bash"
title="Run the application"
>java -jar target/helidon-mp-tutorial.jar</markup>

<p><span class="merged" id="all.130w4t.spl1" title="原文 : At this stage, the application is a very simple &quot;Hello World&quot; greeting service.">この段階では、アプリケーションは非常にシンプルな「Hello World」サービスです。</span> <span class="merged" id="all.130w4t.spl2" title="原文 : It supports a single GET request for generating a greeting message.">応答メッセージを生成するための単一のGETリクエストをサポートします。</span> <span class="merged" id="all.130w4t.spl3" title="原文 : The response is encoded using JSON.">レスポンスはJSONを使用してエンコードされます。</span> <span class="merged" id="all.130w4t.spl4"  title="原文:: For example:">次に例を示します。</span> </p>

<markup
lang="bash"
title="Try the Application"
>curl -X GET http://localhost:7001/greet
{"message":"Hello World!"}</markup>

<p><span class="merged" id="all.N1dDR.spl1" title="原文 : In the output you can see the JSON output from the getDefaultMessage() method that was discussed earlier.">出力には、前述の<code>getDefaultMessage()</code>メソッドからのJSON出力が表示されます。</span> <span class="merged" id="all.N1dDR.spl2" title="原文 : The server has used a default port 7001.">サーバーはデフォルト・ポート<code>7001</code>を使用しています。</span> <span class="merged" id="all.N1dDR.spl3" title="原文 : The application can be stopped cleanly by pressing Ctrl+C.">Ctrl+Cを押すと、アプリケーションを正常に停止できます。</span> </p>

</div>

<h2 id="_configuration"><span class="merged" id="all.Pfqvy.1"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.20zvey.spl1" title="原文 : Helidon MP applications can use the META-INF/microprofile-config.properties file to specify configuration data.">Helidon MPアプリケーションでは、<code>META-INF/microprofile-config.properties</code>ファイルを使用して構成データを指定できます。</span> <span class="merged" id="all.20zvey.spl2" title="原文 : This file (resource) is read by default if it is present on the classpath.">このファイル(リソース)がクラスパスに存在する場合、デフォルトで読み取られます。</span> <span class="merged" id="all.20zvey.spl3" title="原文 : Create this file in src/main/resources/META-INF with the following content:">このファイルは、次の内容で<code>src/main/resources/META-INF</code>に作成します:</span> </p>

<markup
lang="bash"
title="Initial microprofile-config.properties"
># Microprofile server properties
server.port=8080
server.host=0.0.0.0</markup>

<p><span class="merged" id="all.3jVJtM.spl1" title="原文 : Rebuild the application and run it again.">アプリケーションを再ビルドして再実行してください。</span> <span class="merged" id="all.3jVJtM.spl2" title="原文 : Notice that it now uses port 8080 as specified in the configuration file.">構成ファイルに指定されているポート8080が使用されていることに注意してください。</span> </p>

<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.3bQIRH" title="原文 : You can learn more about options for configuring the Helidon Server on the Configuring the Server page.">Helidon Serverの構成オプションの詳細は、<router-link to="/mp/jaxrs/02_server-configuration">「サーバーの構成」</router-link>ページを参照してください。</span></p>
</div>
<p><span class="merged" id="all.3Uf6J7.spl1" title="原文 : In addition to predefined server properties, application-specific configuration information can be added to this file.">事前定義されたサーバー・プロパティに加えて、アプリケーション固有の構成情報をこのファイルに追加できます。</span> <span class="merged" id="all.3Uf6J7.spl2" title="原文 : Add the app.greeting property to the file as shown below.">次に示すように、<code>app.greeting</code>プロパティをファイルに追加します。</span> <span class="merged" id="all.3Uf6J7.spl3" title="原文 : This property will be used to set the content of greeting message.">このプロパティは、挨拶メッセージの内容を設定するために使用されます。</span> </p>

<markup
lang="bash"
title="Updated META-INF/microprofile-config.properties"
># Microprofile server properties
server.port=8080
server.host=0.0.0.0

# Application properties
app.greeting=Hello</markup>

<p><span class="merged" id="all.3xeLjF.spl1" title="原文 : Add a new &quot;provider&quot; class to read this property and make it available to the application.">新しいプロバイダ・クラスを追加してこのプロパティを読み取り、アプリケーションで使用できるようにします。</span> <span class="merged" id="all.3xeLjF.spl2" title="原文 : The class will be called GreetingProvider.java and have the following content:">このクラスは<code>GreetingProvider.java</code>と呼ばれ、次の内容を持ちます:</span> </p>

<markup
lang="java"
title="src/main/java/io/helidon/examples/GreetingProvider.java"
>package io.helidon.examples;

import org.eclipse.microprofile.config.inject.ConfigProperty;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import java.util.concurrent.atomic.AtomicReference;

@ApplicationScoped <span class="conum" data-value="1" />
public class GreetingProvider {
  private final AtomicReference&lt;String&gt; message = new AtomicReference&lt;&gt;(); <span class="conum" data-value="2" />

  @Inject <span class="conum" data-value="3" />
  public GreetingProvider(@ConfigProperty(name = "app.greeting") String message) {
    this.message.set(message);
  }

  String getMessage() {
    return message.get();
  }

  void setMessage(String message) {
    this.message.set(message);
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1XJRFz" title="原文 : This class also has the ApplicationScoped annotation, so it will persist for the life of the application.">このクラスには<code>ApplicationScoped</code>注釈もあるため、アプリケーションの存続期間中は保持されます。</span></li>
<li data-value="2"><span class="merged" id="all.21v2sr.spl1" title="原文 : The class contains an AtomicReference to a String where the greeting will be stored.">このクラスには、グリーティングが格納される<code>String</code>への<code>AtomicReference</code>が含まれます。</span> <span class="merged" id="all.21v2sr.spl2" title="原文 : The AtomicReference provides lock-free thread-safe access to the underlying String."><code>AtomicReference</code>は、基礎となる<code>String</code>へのロック・フリーのスレッド・セーフ・アクセスを提供します。</span> </li>
<li data-value="3"><span class="merged" id="all.IlusL.spl1" title="原文 : The public GreetingProvider(…​) constructor is annotated with Inject which tells Helidon to use Contexts and Dependency Injection to provide the needed values."><code>public GreetingProvider(…​)</code>コンストラクタには、Contexts and Dependency Injectionを使用して必要な値を提供するようにHelidonに指示する<code>Inject</code>の注釈が付けられます。</span> <span class="merged" id="all.IlusL.spl2" title="原文 : In this case, the String message is annotated with ConfigProperty(name = &quot;app.greeting&quot;) so Helidon will inject the property from the configuration file with the key app.greeting.">この場合、<code>String message</code>には<code>ConfigProperty(name = "app.greeting")</code>の注釈が付けられているため、Helidonはキー<code>app.greeting</code>を使用して構成ファイルからプロパティをインジェクトします。</span> <span class="merged" id="all.IlusL.spl3" title="原文 : This method demonstrates how to read configuration information into the application.">このメソッドは、構成情報をアプリケーションに読み込む方法を示します。</span> <span class="merged" id="all.IlusL.spl4" title="原文 : A getter and setter are also included in this class.">getterおよびsetterもこのクラスに含まれます。</span> </li>
</ul>
<p><span class="merged" id="all.dsSEI.spl1" title="原文 : The GreetResource must be updated to use this value instead of the hard coded response.">ハードコードされたレスポンスのかわりにこの値を使用するように<code>GreetResource</code>を更新する必要があります。</span> <span class="merged" id="all.dsSEI.spl2" title="原文 : Make the following updates to that class:">そのクラスに対して次の更新を行います:</span> </p>

<markup
lang="java"
title="Updated GreetResource class"
>package io.helidon.examples;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.json.Json;
import javax.json.JsonBuilderFactory;
import javax.json.JsonObject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.Collections;

@Path("/greet")
@RequestScoped
public class GreetResource {

    private static final JsonBuilderFactory JSON = Json.createBuilderFactory(Collections.emptyMap());
    private final GreetingProvider greetingProvider;

    @Inject <span class="conum" data-value="1" />
    public GreetResource(GreetingProvider greetingConfig) {
        this.greetingProvider = greetingConfig;
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public JsonObject getDefaultMessage() {
        return createResponse("World"); <span class="conum" data-value="2" />
    }

    private JsonObject createResponse(String who) { <span class="conum" data-value="3" />
        String msg = String.format("%s %s!", greetingProvider.getMessage(), who);

        return JSON.createObjectBuilder()
                .add("message", msg)
                .build();
    }

}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.CVF4w" title="原文 : This updated class adds a GreetingProvider and uses constructor injection to get the value from the configuration file.">この更新されたクラスは、<code>GreetingProvider</code>を追加し、コンストラクタ・インジェクションを使用して構成ファイルから値を取得します。</span></li>
<li data-value="2"><span class="merged" id="all.2b1fk5" title="原文 : The logic to create the response message is refactored into a createResponse method and the getDefaultMessage() method is updated to use this new method.">レスポンス・メッセージを作成するロジックは<code>createResponse</code>メソッドにリファクタされ、<code>getDefaultMessage()</code>メソッドはこの新しいメソッドを使用するように更新されます。</span></li>
<li data-value="3"><span class="merged" id="all.30evzi" title="原文 : In createResponse() the message is obtained from the GreetingProvider which in turn got it from the configuration files."><code>createResponse()</code>では、メッセージは<code>GreetingProvider</code>から取得され、構成ファイルから取得されます。</span></li>
</ul>
<p><span class="merged" id="all.2lY1OS.spl1" title="原文 : Rebuild and run the application.">アプリケーションを再ビルドして実行します。</span> <span class="merged" id="all.2lY1OS.spl2" title="原文 : Notice that it now uses the greeting from the configuration file.">構成ファイルのグリーティングが使用されていることを確認します。</span> <span class="merged" id="all.2lY1OS.spl3" title="原文 : Change the configuration file and restart the application, notice that it uses the changed value.">構成ファイルを変更してアプリケーションを再起動し、変更した値が使用されていることを確認します。</span> </p>

<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.49NLbM" title="原文 : To learn more about Helidon MP configuration please see the Config section of the documentation.">Helidon MP構成の詳細は、ドキュメントの<router-link to="/mp/config/01_introduction">Config</router-link>の項を参照してください。</span></p>
</div>
</div>

<h2 id="_extending_the_application"><span class="merged" id="all.3yyvWQ" title="原文 : Extending the Application">アプリケーションの拡張</span></h2>
<div class="section">
<p><span class="merged" id="all.4LZgeF" title="原文 : In this section, the application will be extended to add a PUT resource method which will allow users to update the greeting and a second GET resource method which will accept a parameter.">このセクションでは、アプリケーションを拡張してPUTリソース・メソッドを追加し、ユーザーがグリーティングと、パラメータを受け入れる2つ目のGETリソース・メソッドを更新できるようにします。</span></p>

<p><span class="merged" id="all.2EbWIR" title="原文 : Here are the two new methods to add to GreetResource.java:"><code>GreetResource.java</code>に追加する2つの新しいメソッドを次に示します:</span></p>

<markup
lang="java"
title="New methods for GreetResource.java"
>import javax.ws.rs.Consumes;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;

    // some lines omitted

    @Path("/{name}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public JsonObject getMessage(@PathParam("name") String name) { <span class="conum" data-value="1" />
        return createResponse(name);
    }

    @Path("/greeting")
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateGreeting(JsonObject jsonObject) { <span class="conum" data-value="2" />

        if (!jsonObject.containsKey("greeting")) {
            JsonObject entity = JSON.createObjectBuilder()
                    .add("error", "No greeting provided")
                    .build();
            return Response.status(Response.Status.BAD_REQUEST).entity(entity).build();
        }

        String newGreeting = jsonObject.getString("greeting");

        greetingProvider.setMessage(newGreeting);
        return Response.status(Response.Status.NO_CONTENT).build();
    }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.49TIA2.spl1" title="原文 : The first of these two methods implements a new HTTP GET service that returns JSON and it has a path parameter.">最初の2つのメソッドは、JSONを返す新しいHTTP GETサービスを実装し、パス・パラメータを持ちます。</span> <span class="merged" id="all.49TIA2.spl2" title="原文 : The Path annotation defines the next part of the path to be a parameter named name."><code>Path</code>注釈は、パスの次の部分を<code>name</code>という名前のパラメータとして定義します。</span> <span class="merged" id="all.49TIA2.spl3" title="原文 : In the method arguments the PathParam(&quot;name&quot;) annotation on String name has the effect of passing the parameter from the URL into this method as name.">メソッドの引数で、<code>String name</code>の<code>PathParam("name")</code>注釈には、URLからこのメソッドに<code>name</code>としてパラメータを渡す効果があります。</span> </li>
<li data-value="2"><span class="merged" id="all.2s7cIg.spl1" title="原文 : The second method implements a new HTTP PUT service which produces and consumes JSON, note the Consumes and PUT annotations.">もう一方のメソッドは、JSONを生産および使用する新しいHTTP PUTサービスを実装します。<code>Consumes</code>および<code>PUT</code>の注釈に注意してください。</span> <span class="merged" id="all.2s7cIg.spl2" title="原文 : It also defines a path of &quot;/greeting&quot;.">また、"/greeting"のパスも定義します。</span> <span class="merged" id="all.2s7cIg.spl3" title="原文 : Notice that the method argument is a JsonObject.">method引数が<code>JsonObject</code>であることに注意してください。</span> <span class="merged" id="all.2s7cIg.spl4" title="原文 : Inside the method body there is code to check for the expected JSON, extract the value and update the message in the GreetingProvider.">メソッド本文には、予期されるJSONをチェックし、値を抽出して<code>GreetingProvider</code>でメッセージを更新するコードがあります。</span> </li>
</ul>
<p><span class="merged" id="all.10vabR.spl1" title="原文 : Rebuild and run the application.">アプリケーションを再ビルドして実行します。</span> <span class="merged" id="all.10vabR.spl2" title="原文 : Test the new services using curl commands similar to those shown below:">次のようなcurlコマンドを使用して、新しいサービスをテストします:</span> </p>

<markup
lang="bash"
title="Testing the new services"
>curl -X GET http://localhost:8080/greet
{"message":"Hello World!"}

curl -X GET http://localhost:8080/greet/Joe
{"message":"Hello Joe!"}

curl -X PUT -H "Content-Type: application/json" -d '{"greeting" : "Hola"}' http://localhost:8080/greet/greeting

curl -X GET http://localhost:8080/greet/Jose
{"message":"Hola Jose!"}</markup>

<p><span class="merged" id="all.2E40bW" title="原文 : Helidon MP provides many other features which can be added to the application.">Helidon MPには、アプリケーションに追加できるその他の機能が多数用意されています。</span></p>

</div>

<h2 id="_logging"><span class="merged" id="all.5r4dy"  title="原文:: Logging">ロギング</span></h2>
<div class="section">
<p><span class="merged" id="all.HkN8G.spl1" title="原文 : The application logging can be customized.">アプリケーション・ロギングはカスタマイズできます。</span> <span class="merged" id="all.HkN8G.spl2" title="原文 : The default logging provider is java.util.logging, however it is possible to use other providers.">デフォルトのロギング・プロバイダは<code>java.util.logging</code>ですが、他のプロバイダを使用することもできます。</span> <span class="merged" id="all.HkN8G.spl3" title="原文 : In this tutorial the default provider is used.">このチュートリアルでは、デフォルト・プロバイダを使用します。</span> </p>

<p><span class="merged" id="all.3GSIzt" title="原文 : Create a logging.properties file in src/main/resources with the following content:"><code>src/main/resources</code>で、次の内容の<code>logging.properties</code>ファイルを作成します:</span></p>

<markup
lang="properties"
title="Example logging.properties file"
># Send messages to the console
handlers=io.helidon.common.HelidonConsoleHandler <span class="conum" data-value="1" />

# HelidonConsoleHandler uses a SimpleFormatter subclass that replaces "!thread!" with the current thread
java.util.logging.SimpleFormatter.format=%1$tY.%1$tm.%1$td %1$tH:%1$tM:%1$tS %4$s %3$s !thread!: %5$s%6$s%n <span class="conum" data-value="2" />

# Global logging level. Can be overridden by specific loggers
.level=INFO <span class="conum" data-value="3" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.Wy5Zp.spl1" title="原文 : The Helidon console logging handler is configured.">Helidonコンソール・ロギング・ハンドラが構成されています。</span> <span class="merged" id="all.Wy5Zp.spl2" title="原文 : This handler writes to System.out, does not filter by level and uses a custom SimpleFormatter that supports thread names.">このハンドラは、<code>System.out</code>に書き込み、レベルでフィルタせず、スレッド名をサポートするカスタム<code>SimpleFormatter</code>を使用します。</span> </li>
<li data-value="2"><span class="merged" id="all.IYGsl" title="原文 : The format string is set using the standard options to include the timestamp, thread name and message.">書式文字列は、タイムスタンプ、スレッド名およびメッセージを含める標準オプションを使用して設定されます。</span></li>
<li data-value="3"><span class="merged" id="all.IEAYK" title="原文 : The global logging level is set to INFO.">グローバル・ロギング・レベルは<code>INFO</code>に設定されます。</span></li>
</ul>
<p><span class="merged" id="all.3dypvA" title="原文 : The Helidon MicroProfile server will detect the new logging.properties file and configure the LogManager for you.">Helidon MicroProfileサーバーによって新しい<code>logging.properties</code>ファイルが検出され、LogManagerが構成されます。</span></p>

<p><span class="merged" id="all.48Bcf4" title="原文 : Rebuild and run the application and notice the new logging format takes effect.">アプリケーションを再ビルドして実行し、新しいロギング形式が有効になっていることを確認します。</span></p>

<markup
lang="bash"
title="Log output"
>// before
Aug 22, 2019 11:10:11 AM io.helidon.webserver.NettyWebServer lambda$start$8
INFO: Channel '@default' started: [id: 0xd0afba31, L:/0:0:0:0:0:0:0:0:8080]
Aug 22, 2019 11:10:11 AM io.helidon.microprofile.server.ServerImpl lambda$start$10
INFO: Server started on http://localhost:8080 (and all other host addresses) in 182 milliseconds.
http://localhost:8080/greet

// after
2019.08.22 11:24:42 INFO io.helidon.webserver.NettyWebServer Thread[main,5,main]: Version: 1.2.0
2019.08.22 11:24:42 INFO io.helidon.webserver.NettyWebServer Thread[nioEventLoopGroup-2-1,10,main]: Channel '@default' started: [id: 0x8f652dfe, L:/0:0:0:0:0:0:0:0:8080]
2019.08.22 11:24:42 INFO io.helidon.microprofile.server.ServerImpl Thread[nioEventLoopGroup-2-1,10,main]: Server started on http://localhost:8080 (and all other host addresses) in 237 milliseconds.
http://localhost:8080/greet</markup>

</div>

<h2 id="_metrics"><span class="merged" id="all.4LL0ot.4"  title="原文:: Metrics">メトリクス</span></h2>
<div class="section">
<p><span class="merged" id="all.O2AKQ" title="原文 : Helidon provides built-in support for metrics endpoints.">Helidonには、メトリクス・エンドポイントの組込みサポートが用意されています。</span></p>

<markup
lang="bash"
title="Metrics in Prometheus Format"
>curl -s -X GET http://localhost:8080/metrics</markup>

<markup
lang="bash"
title="Metrics in JSON Format"
>curl -H 'Accept: application/json' -X GET http://localhost:8080/metrics</markup>

<p><span class="merged" id="all.4XBqiT" title="原文 : It is possible to disable metrics by adding properties to the microprofile-config.properties file, for example:"><code>microprofile-config.properties</code>ファイルにプロパティを追加することで、メトリクスを無効にできます。次に例を示します:</span></p>

<markup
lang="bash"
title="Disable a metric"
>metrics.base.classloader.currentLoadedClass.count.enabled=false</markup>

<p><span class="merged" id="all.chi81" title="原文 : Call the metrics endpoint before adding this change to confirm that the metric is included, then add the property to disable the metric, rebuild and restart the application and check again:">この変更を追加する前にメトリクス・エンドポイントをコールしてメトリックが含まれていることを確認してから、プロパティを追加してメトリックを無効にし、アプリケーションを再ビルドして再起動し、再度確認します:</span></p>

<markup
lang="bash"
title="Checking metrics before and after disabling the metric"
># before
curl -s http://localhost:8080/metrics | grep classloader_current
# TYPE base:classloader_current_loaded_class_count counter
# HELP base:classloader_current_loaded_class_count Displays the number of classes that are currently loaded in the Java virtual machine.
base:classloader_current_loaded_class_count 7936

# after
curl -s http://localhost:8080/metrics | grep classloader_current
# (no output)</markup>

<p><span class="merged" id="all.2GSSnq.spl1" title="原文 : Helidon also support custom metrics.">Helidonでは、カスタム・メトリクスもサポートされます。</span> <span class="merged" id="all.2GSSnq.spl2" title="原文 : To add a new metric, annotate the JAX-RS resource with one of the metric annotations as shown in the example below:">新しいメトリックを追加するには、次の例に示すように、JAX-RSリソースにいずれかのメトリック注釈を付けます:</span> </p>

<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.HJMVR" title="原文 : You can find details of the available annotations in the MicroProfile Metrics Specification.">使用可能な注釈の詳細は、<a href="https://microprofile.io/project/eclipse/microprofile-metrics" id="" target="_blank" >「MicroProfileメトリクス仕様」</a>を参照してください。</span></p>
</div>
<markup
lang="java"
title="Updated GreetResource.java with custom metrics"
>import org.eclipse.microprofile.metrics.annotation.Timed;

    // some lines omitted

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Timed <span class="conum" data-value="1" />
    public JsonObject getDefaultMessage() {
        return createResponse("World");
    }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.18euoV" title="原文 : The Timed annotation is added to the getDefaultMessage() method."><code>Timed</code>注釈が<code>getDefaultMessage()</code>メソッドに追加されます。</span></li>
</ul>
<p><span class="merged" id="all.1Szgqq.spl1" title="原文 : Rebuild and run the application.">アプリケーションを再ビルドして実行します。</span> <span class="merged" id="all.1Szgqq.spl2" title="原文 : Make some calls to the endpoint (http://localhost:8080/greet) so there will be some data to report.">レポートするデータがいくつか存在するように、エンドポイント(<a href="http://localhost:8080/greet" id="" target="_blank" >http://localhost:8080/greet</a>)をコールします。</span> <span class="merged" id="all.1Szgqq.spl3" title="原文 : Then obtain the application metrics as follows:">次に、次のようにアプリケーション・メトリクスを取得します:</span> </p>

<markup
lang="bash"
title="Checking the application metrics"
>curl -H "Accept: application/json" http://localhost:8080/metrics/application
{
  "io.helidon.examples.GreetResource.getDefaultMessage": {
    "count": 2,
    "meanRate": 0.036565171873527716,
    "oneMinRate": 0.015991117074135343,
    "fiveMinRate": 0.0033057092356765017,
    "fifteenMinRate": 0.0011080303990206543,
    "min": 78658,
    "max": 1614077,
    "mean": 811843.8728029992,
    "stddev": 766932.8494434259,
    "p50": 78658,
    "p75": 1614077,
    "p95": 1614077,
    "p98": 1614077,
    "p99": 1614077,
    "p999": 1614077
  }
}</markup>

<p><span class="merged" id="all.3DCxcQ" title="原文 : Learn more about using Helidon and MicroProfile metrics in the Metrics Guide."><router-link to="/mp/guides/05_metrics">「メトリクス・ガイド」</router-link>でのHelidonおよびMicroProfileメトリクスの使用についてさらに学習します。</span></p>

</div>

<h2 id="_health_check"><span class="merged" id="all.1G6No9"  title="原文:: Health Check">ヘルス・チェック</span></h2>
<div class="section">
<p><span class="merged" id="all.weYON.spl1" title="原文 : Helidon provides built-in support for health check endpoints.">Helidonは、ヘルス・チェック・エンドポイントの組込みサポートを提供します。</span> <span class="merged" id="all.weYON.spl2" title="原文 : Obtain the built-in health check using the following URL:">次のURLを使用して組込みヘルス・チェックを取得します:</span> </p>

<markup
lang="bash"
title="Health check"
>curl -s -X GET http://localhost:8080/health
{
  "outcome": "UP",
  "status": "UP",
  "checks": [
    {
      "name": "deadlock",
      "state": "UP",
      "status": "UP"
    },
    {
      "name": "diskSpace",
      "state": "UP",
      "status": "UP",
      "data": {
        "free": "381.23 GB",
        "freeBytes": 409340088320,
        "percentFree": "43.39%",
        "total": "878.70 GB",
        "totalBytes": 943491723264
      }
    },
    {
      "name": "heapMemory",
      "state": "UP",
      "status": "UP",
      "data": {
        "free": "324.90 MB",
        "freeBytes": 340682920,
        "max": "3.46 GB",
        "maxBytes": 3715629056,
        "percentFree": "97.65%",
        "total": "408.00 MB",
        "totalBytes": 427819008
      }
    }
  ]
}</markup>

<p><span class="merged" id="all.2M7UJD.spl1" title="原文 : Endpoints for readiness and liveness checks are also provided by default.">レディネスおよびリブネス・チェックのエンドポイントもデフォルトで提供されます。</span> <span class="merged" id="all.2M7UJD.spl2" title="原文 : Obtain the default results using these URLs, which return the same result as the previous example.:">前述の例と同じ結果を返すこれらのURLを使用して、デフォルトの結果を取得します:</span> </p>

<markup
lang="bash"
title="Default readiness and liveness endpoints"
># readiness
curl -i  -X GET http://localhost:8080/health/ready

# liveness
curl -i  -X GET http://localhost:8080/health/live</markup>

<p><span class="merged" id="all.1gDMwK.spl1" title="原文 : Helidon allows the addition of custom health checks to applications.">Helidonでは、アプリケーションにカスタム・ヘルス・チェックを追加できます。</span> <span class="merged" id="all.1gDMwK.spl2" title="原文 : Create a new class GreetHealthcheck.java with the following content:">次の内容で新しいクラス<code>GreetHealthcheck.java</code>を作成します:</span> </p>

<markup
lang="java"
title="src/main/java/io/helidon/examples/GreetHealthcheck.java"
>package io.helidon.examples;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.eclipse.microprofile.health.HealthCheck;
import org.eclipse.microprofile.health.HealthCheckResponse;
import org.eclipse.microprofile.health.Liveness;

@Liveness <span class="conum" data-value="1" />
@ApplicationScoped <span class="conum" data-value="2" />
public class GreetHealthcheck implements HealthCheck {
  private GreetingProvider provider;

  @Inject <span class="conum" data-value="3" />
  public GreetHealthcheck(GreetingProvider provider) {
    this.provider = provider;
  }

  @Override
  public HealthCheckResponse call() { <span class="conum" data-value="4" />
    String message = provider.getMessage();
    return HealthCheckResponse.named("greeting") <span class="conum" data-value="5" />
        .state("Hello".equals(message))
        .withData("greeting", message)
        .build();
  }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3K3t80.spl1" title="原文 : This class has the MicroProfile Liveness annotation which tells Helidon that this class provides a custom health check.">このクラスには、このクラスがカスタム・ヘルス・チェックを提供することをHelidonに伝えるMicroProfile <code>Liveness</code>注釈があります。</span> <span class="merged" id="all.3K3t80.spl2" title="原文 : You can learn more about the available annotations in the MicroProfile Health Protocol and Wireformat document.">使用可能な注釈の詳細は、<a href="https://github.com/eclipse/microprofile-health/blob/master/spec/src/main/asciidoc/protocol-wireformat.adoc" id="" target="_blank" >「MicroProfile Health ProtocolおよびWireformat」</a>ドキュメントを参照してください。</span> </li>
<li data-value="2"><span class="merged" id="all.3Ob2IW" title="原文 : This class also has the ApplicationScoped annotation, as seen previously.">このクラスには、前述のように<code>ApplicationScoped</code>注釈もあります。</span></li>
<li data-value="3"><span class="merged" id="all.2J6OuF.spl1" title="原文 : The GreetingProvider is injected using Context and Dependency Injection."><code>GreetingProvider</code>は、コンテキストと依存関係のインジェクションを使用してインジェクトされます。</span> <span class="merged" id="all.2J6OuF.spl2" title="原文 : This example will use the greeting to determine whether the application is healthy, this is a contrived example for demonstration purposes.">この例では、グリーティングを使用して、アプリケーションが健全かどうかを判断します。これはデモ用の現実的な例です。</span> </li>
<li data-value="4"><span class="merged" id="all.2b1R0A.spl1" title="原文 : Health checks must implement the HealthCheck functional interface, which includes the method HealthCheckResponse call().">ヘルス・チェックでは、メソッド<code>HealthCheckResponse call()</code>を含む<code>HealthCheck</code>機能インタフェースを実装する必要があります。</span> <span class="merged" id="all.2b1R0A.spl2" title="原文 : Helidon will invoke the call() method to verify the healthiness of the application.">Helidonは、<code>call()</code>メソッドを呼び出して、アプリケーションのヘルス・ネスを検証します。</span> </li>
<li data-value="5"><span class="merged" id="all.49Y7Nq" title="原文 : In this example, the application is deemed to be healthy if the GreetingProvider,getMessage() method returns the string &quot;Hello&quot; and unhealthy otherwise.">この例では、<code>GreetingProvider,getMessage()</code>メソッドが文字列<code>"Hello"</code>を返す場合、アプリケーションは健全であるとみなされ、それ以外の場合は健全でないとみなされます。</span></li>
</ul>
<p><span class="merged" id="all.mxQX3" title="原文 : Rebuild the application, make sure that the mp.conf has the greeting set to something other than &quot;Hello&quot; and then run the application and check the health:">アプリケーションを再ビルドし、<code>mp.conf</code>で<code>greeting</code>が<code>"Hello"</code>以外に設定されていることを確認してから、アプリケーションを実行し、ヘルスを確認します:</span></p>

<markup
lang="bash"
title="Custom health check reporting unhealthy state"
>curl -i -X GET http://localhost:8080/health/live
HTTP/1.1 503 Service Unavailable <span class="conum" data-value="1" />
Content-Type: application/json
Date: Fri, 23 Aug 2019 10:07:23 -0400
transfer-encoding: chunked
connection: keep-alive

{"outcome":"DOWN","status":"DOWN","checks":[{"name":"deadlock","state":"UP","status":"UP"},{"name":"diskSpace","state":"UP","status":"UP","data":{"free":"381.08 GB","freeBytes":409182306304,"percentFree":"43.37%","total":"878.70 GB","totalBytes":943491723264}},{"name":"greeting","state":"DOWN","status":"DOWN","data":{"greeting":"Hey"}},{"name":"heapMemory","state":"UP","status":"UP","data":{"free":"243.81 MB","freeBytes":255651048,"max":"3.46 GB","maxBytes":3715629056,"percentFree":"98.58%","total":"294.00 MB","totalBytes":308281344}}]} <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2o8Jik" title="原文 : The HTTP return code is now 503 Service Unavailable.">HTTPリターン・コードは503 Service Unavailableになりました。</span></li>
<li data-value="2"><span class="merged" id="all.4NJofR" title="原文 : The status is reported as &quot;DOWN&quot; and the custom check is included in the output.">ステータスは「DOWN」として報告され、カスタム・チェックが出力に含まれます。</span></li>
</ul>
<p><span class="merged" id="all.2W3CZP" title="原文 : Now update the greeting to &quot;Hello&quot; using the following request, and then check health again:">ここで、次のリクエストを使用してグリーティングを<code>"Hello"</code>に更新し、ヘルスを再度確認します:</span></p>

<markup
lang="bash"
title="Update the greeting and check health again"
># update greeting
curl -i -X PUT -H "Content-Type: application/json" -d '{"greeting": "Hello"}' http://localhost:8080/greet/greeting
HTTP/1.1 204 No Content <span class="conum" data-value="1" />
Date: Thu, 22 Aug 2019 13:29:57 -0400
connection: keep-alive

# check health
curl -i -X GET http://localhost:8080/health/live
HTTP/1.1 200 OK <span class="conum" data-value="2" />
Content-Type: application/json
Date: Fri, 23 Aug 2019 10:08:09 -0400
connection: keep-alive
content-length: 536

{"outcome":"UP","status":"UP","checks":[{"name":"deadlock","state":"UP","status":"UP"},{"name":"diskSpace","state":"UP","status":"UP","data":{"free":"381.08 GB","freeBytes":409179811840,"percentFree":"43.37%","total":"878.70 GB","totalBytes":943491723264}},{"name":"greeting","state":"UP","status":"UP","data":{"greeting":"Hello"}},{"name":"heapMemory","state":"UP","status":"UP","data":{"free":"237.25 MB","freeBytes":248769720,"max":"3.46 GB","maxBytes":3715629056,"percentFree":"98.40%","total":"294.00 MB","totalBytes":308281344}}]} <span class="conum" data-value="3" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2YeQN4" title="原文 : The PUT returns a HTTP 204.">PUTはHTTP 204を返します。</span></li>
<li data-value="2"><span class="merged" id="all.1Wfv6P" title="原文 : The health check now returns a HTTP 200.">ヘルス・チェックでHTTP 200が返されるようになりました。</span></li>
<li data-value="3"><span class="merged" id="all.3aAkd0" title="原文 : The status is now reported as &quot;UP&quot; and the details are provided in the checks.">ステータスが「稼働中」としてレポートされ、詳細がチェックで提供されます。</span></li>
</ul>
<p><span class="merged" id="all.2GiL7l" title="原文 : Learn more about health checks in the Health Check Guide."><router-link to="/mp/guides/04_health">「ヘルス・チェック・ガイド」</router-link>のヘルス・チェックについてさらに学習します。</span></p>

</div>

<h2 id="_build_a_docker_image"><span class="merged" id="all.3PwUaB.1"  title="原文:: Build a Docker Image">Dockerイメージのビルド</span></h2>
<div class="section">
<p><span class="merged" id="all.1iHhy5.spl1" title="原文 : To run the application in Docker (or Kubernetes), a Dockerfile is needed to build a Docker image.">Docker (またはKubernetes)でアプリケーションを実行するには、Dockerイメージをビルドするために<code>Dockerfile</code>が必要です。</span> <span class="merged" id="all.1iHhy5.spl2" title="原文 : To build the Docker image, you need to have Docker installed and running on your system.">Dockerイメージをビルドするには、システムにDockerがインストールされ、稼働している必要があります。</span> </p>

<p><span class="merged" id="all.3ULDVn" title="原文 : Add a new Dockerfile in the project root directory with the following content:">次の内容で新しい<code>Dockerfile</code>をプロジェクトのルート・ディレクトリに追加します:</span></p>

<markup
lang="bash"
title="Dockerfile content"
>FROM maven:3.6-jdk-11 as build <span class="conum" data-value="1" />
WORKDIR /helidon

ADD pom.xml .
RUN mvn package -DskipTests <span class="conum" data-value="2" />

ADD src src
RUN mvn package -DskipTests <span class="conum" data-value="3" />
RUN echo "done!"

FROM openjdk:11-jre-slim <span class="conum" data-value="4" />
WORKDIR /helidon

COPY --from=build /helidon/target/helidon-mp-tutorial.jar ./ <span class="conum" data-value="5" />
COPY --from=build /helidon/target/libs ./libs

CMD ["java", "-jar", "helidon-mp-tutorial.jar"] <span class="conum" data-value="6" />
EXPOSE 8080</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4ZyS96.spl1" title="原文 : This Dockerfile uses Docker&rsquo;s multi-stage build feature.">このDockerfileでは、Dockerの複数ステージのビルド機能を使用します。</span> <span class="merged" id="all.4ZyS96.spl2" title="原文 : The FROM keyword creates the first stage."><code>FROM</code>キーワードは、最初のステージを作成します。</span> <span class="merged" id="all.4ZyS96.spl3" title="原文 : In this stage, the base container has the build tools needed to build the application.">このステージでは、ベース・コンテナにアプリケーションのビルドに必要なビルド・ツールがあります。</span> <span class="merged" id="all.4ZyS96.spl4" title="原文 : These are not required to run the application, so the second stage uses a smaller container.">これらはアプリケーションの実行に必須ではないため、2番目のステージでは小さいコンテナを使用します。</span> </li>
<li data-value="2"><span class="merged" id="all.2zZlgS.spl1" title="原文 : Add the pom.xml and running an &quot;empty&quot; maven build will download all of the dependencies and plugins in this layer."><code>pom.xml</code>を追加し、空のmavenビルドを実行すると、このレイヤーのすべての依存関係およびプラグインがダウンロードされます。</span> <span class="merged" id="all.2zZlgS.spl2" title="原文 : This will make future builds faster because they will use this cached layer rather than downloading everything again.">これにより、すべてを再度ダウンロードするのではなく、このキャッシュされたレイヤーを使用するため、将来のビルドが高速になります。</span> </li>
<li data-value="3"><span class="merged" id="all.4bJiRD" title="原文 : Add the source code and do the real build.">ソース・コードを追加し、実際のビルドを実行します。</span></li>
<li data-value="4"><span class="merged" id="all.7kOcm" title="原文 : Start a second stage using a much smaller runtime image.">より小さいランタイム・イメージを使用して2つ目のステージを開始します。</span></li>
<li data-value="5"><span class="merged" id="all.s8Jzz" title="原文 : Copy the binary and libraries from the first stage.">最初のステージからバイナリとライブラリをコピーします。</span></li>
<li data-value="6"><span class="merged" id="all.44tVZp" title="原文 : Set the initial command and expose port 8080.">初期コマンドを設定し、ポート8080を公開します。</span></li>
</ul>
<p><span class="merged" id="all.2oUnrs" title="原文 : To create the Docker image, use the following command:">Dockerイメージを作成するには、次のコマンドを使用します:</span></p>

<markup
lang="bash"
title="Docker build"
>docker build -t helidon-mp-tutorial .</markup>

<p><span class="merged" id="all.4ci7C0" title="原文 : Make sure the application is shutdown if it was still running locally so that port 8080 will not be in use, then start the application in Docker using the following command:">ポート8080が使用されないように、アプリケーションがまだローカルで実行されている場合は停止していることを確認してから、次のコマンドを使用してDockerでアプリケーションを起動します:</span></p>

<markup
lang="bash"
title="Run Docker Image"
>docker run --rm -p 8080:8080 helidon-mp-tutorial:latest</markup>

<p><span class="merged" id="all.37xfsm" title="原文 : Try the application as before.">前述のようにアプリケーションを試します。</span></p>

<markup
lang="bash"
title="Try the application"
>curl http://localhost:8080/greet/bob
{"message":"Howdee bob!"}

curl http://localhost:8080/health/ready
{"outcome":"UP","status":"UP","checks":[]}</markup>

</div>

<h2 id="_deploy_the_application_to_kubernetes"><span class="merged" id="all.4NTG6I" title="原文 : Deploy the application to Kubernetes">Kubernetesへのアプリケーションのデプロイ</span></h2>
<div class="section">
<p><span class="merged" id="all.3i1Fnd.1.spl1" title="原文 : If you don&rsquo;t have access to a Kubernetes cluster, you can install one on your desktop.">Kubernetesクラスタにアクセスできない場合は、<router-link to="/about/05_kubernetes">「デスクトップにインストール」</router-link>を使用できます。</span> <span class="merged" id="all.3i1Fnd.1.spl2" title="原文 : Then deploy the example:">次に、例をデプロイします:</span> </p>

<markup
lang="bash"
title="Verify connectivity to cluster"
>kubectl cluster-info
kubectl get nodes</markup>

<p><span class="merged" id="all.1z8gWr.spl1" title="原文 : To deploy the application to Kubernetes, a Kubernetes YAML file that defines the deployment and associated resources is needed.">アプリケーションをKubernetesにデプロイするには、デプロイメントおよび関連リソースを定義するKubernetes YAMLファイルが必要です。</span> <span class="merged" id="all.1z8gWr.spl2" title="原文 : In this case all that is required is the deployment and a service.">この場合、必要なのはデプロイメントとサービスのみです。</span> </p>

<p><span class="merged" id="all.ZMYeE" title="原文 : Create a file called app.yaml in the project&rsquo;s root directory with the following content:">プロジェクトのルート・ディレクトリに、次の内容の<code>app.yaml</code>というファイルを作成します:</span></p>

<markup
lang="yaml"
title="Kubernetes YAML file"
>---
kind: Service <span class="conum" data-value="1" />
apiVersion: v1
metadata:
  name: helidon-mp-tutorial
  labels:
    app: helidon-mp-tutorial
spec:
  type: NodePort <span class="conum" data-value="2" />
  selector:
    app: helidon-mp-tutorial
  ports:
    - port: 8080
      targetPort: 8080
      name: http
---
kind: Deployment <span class="conum" data-value="3" />
apiVersion: apps/v1
metadata:
  name: helidon-mp-tutorial
spec:
  replicas: 1 <span class="conum" data-value="4" />
  selector:
    matchLabels:
      app: helidon-mp-tutorial
  template:
    metadata:
      labels:
        app: helidon-mp-tutorial
        version: v1
    spec:
      containers:
        - name: helidon-mp-tutorial
          image: helidon-mp-tutorial <span class="conum" data-value="5" />
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 8080</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2xuAMN" title="原文 : Define a Service to provide access to the application.">アプリケーションへのアクセスを提供するサービスを定義します。</span></li>
<li data-value="2"><span class="merged" id="all.TIZct" title="原文 : Define a NodePort to expose the application outside the Kubernetes cluster.">NodePortを定義して、Kubernetesクラスタの外部にアプリケーションを公開します。</span></li>
<li data-value="3"><span class="merged" id="all.1e3faN" title="原文 : Define a Deployment of the application.">アプリケーションのデプロイメントを定義します。</span></li>
<li data-value="4"><span class="merged" id="all.2JdjYB" title="原文 : Define how many replicas of the application to run.">実行するアプリケーションのレプリカの数を定義します。</span></li>
<li data-value="5"><span class="merged" id="all.3Ocwl9.spl1" title="原文 : Define the Docker image to use - this must be the one that was built in the previous step.">使用するDockerイメージの定義 - これは、前のステップで作成したものである必要があります。</span> <span class="merged" id="all.3Ocwl9.spl2" title="原文 : If the image was built on a different machine to the one where Kubernetes is running, or if Kubernetes is running on multiple machines (worker nodes) then the image must either be manually copied to each node or otherwise pushed to a Docker registry that is accessible to the worker nodes.">イメージがKubernetesが実行されているマシンとは異なるマシン上に構築された場合、またはKubernetesが複数のマシン(ワーカー・ノード)上で実行されている場合は、イメージを各ノードに手動でコピーするか、ワーカー・ノードからアクセス可能なDockerレジストリにプッシュする必要があります。</span> </li>
</ul>
<p><span class="merged" id="all.2bFK8C" title="原文 : This Kubernetes YAML file can be used to deploy the application to Kubernetes:">このKubernetes YAMLファイルを使用して、アプリケーションをKubernetesにデプロイできます:</span></p>

<markup
lang="bash"
title="Deploy the application to Kubernetes"
>kubectl create -f app.yaml
kubectl get pods                    # Wait for quickstart pod to be RUNNING</markup>

<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.35OPSY.spl1" title="原文 : Remember, if Kubernetes is running on a different machine, or inside a VM (as in Docker for Desktop) then the Docker image must either be manually copied to the Kubernetes worker nodes or pushed to a Docker registry that is accessible to those worker nodes.">Kubernetesが別のマシンまたはVM (Docker for Desktopなど)内で実行されている場合は、DockerイメージをKubernetesワーカー・ノードに手動でコピーするか、それらのワーカー・ノードからアクセス可能なDockerレジストリにプッシュする必要があります。</span> <span class="merged" id="all.35OPSY.spl2" title="原文 : Update the image entry in the example above to include the Docker registry name.">前述の例の<code>image</code>エントリを更新して、Dockerレジストリ名を含めます。</span> <span class="merged" id="all.35OPSY.spl3" title="原文 : If the registry is private a Docker registry secret will also be required.">レジストリがプライベートの場合は、Dockerレジストリ・シークレットも必要です。</span> </p>
</div>
<p><span class="merged" id="all.4ev8PR.spl1" title="原文 : The step above created a service that is exposed using any available node port.">前述のステップでは、使用可能なノード・ポートを使用して公開されるサービスを作成しました。</span> <span class="merged" id="all.4ev8PR.spl2" title="原文 : Kubernetes allocates a free port.">Kubernetesによって空きポートが割り当てられます。</span> <span class="merged" id="all.4ev8PR.spl3" title="原文 : Lookup the service to find the port.">サービスを検索してポートを見つけます。</span> </p>

<markup
lang="bash"
title="Lookup the service"
>kubectl get service helidon-mp-tutorial</markup>

<p><span class="merged" id="all.RmwS5.spl1" title="原文 : Note the PORTs.">ポートを書き留めます。</span> <span class="merged" id="all.RmwS5.spl2" title="原文 : The application can be exercised as before but use the second port number (the NodePort) instead of 8080.">アプリケーションは以前と同様に実行できますが、8080のかわりに2番目のポート番号(NodePort)を使用します。</span> <span class="merged" id="all.RmwS5.spl3"  title="原文:: For example:">次に例を示します。</span> </p>

<markup
lang="bash"
title="Access the application"
>curl -X GET http://localhost:31431/greet</markup>

<p><span class="merged" id="all.40RggI" title="原文 : If desired, the Kubernetes YAML file can also be used to remove the application from Kubernetes as follows:">必要に応じて、次のようにKubernetes YAMLファイルを使用してKubernetesからアプリケーションを削除することもできます:</span></p>

<markup
lang="bash"
title="Remove the application from Kubernetes"
>kubectl delete -f app.yaml</markup>

</div>

<h2 id="_summary"><span class="merged" id="all.1nTCR.4"  title="原文:: Summary">サマリー</span></h2>
<div class="section">
<p><span class="merged" id="all.3jCdnv.spl1" title="原文 : This tutorial demonstrated how to build a new Helidon MP application, how to use Helidon and MicroProfile configuration, logging, metrics, and health checks.">このチュートリアルでは、新しいHelidon MPアプリケーションを構築する方法、HelidonおよびMicroProfile構成、ロギング、メトリクスおよびヘルス・チェックの使用方法のデモンストレーションを行いました。</span> <span class="merged" id="all.3jCdnv.spl2" title="原文 : It also demonstrated how to package the application in a Docker image and run it in Kubernetes.">また、アプリケーションをDockerイメージにパッケージ化し、Kubernetesで実行する方法も示しました。</span> </p>

<p><span class="merged" id="all.2DwKZy.spl1" title="原文 : There were several links to more detailed information included in the tutorial.">チュートリアルには、詳細情報へのリンクがいくつか含まれています。</span> <span class="merged" id="all.2DwKZy.spl2" title="原文 : These links are repeated below and can be explored to learn more details about Helidon application development.">これらのリンクを次に繰り返し、Helidonアプリケーション開発の詳細を確認できます。</span> </p>

</div>

<h2 id="_related_links"><span class="merged" id="all.4FSQ7e"  title="原文:: Related links">関連リンク</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.4AFQAC" title="原文 : Eclipse MicroProfile"><a href="https://projects.eclipse.org/projects/technology.microprofile" id="" target="_blank" >Eclipse MicroProfile</a></span></p>

</li>
<li>
<p><span class="merged" id="all.I7HXC" title="原文 : Contexts and Dependency Injection Specification"><a href="https://docs.jboss.org/cdi/api/2.0/index.html" id="" target="_blank" >Contexts and Dependency Injection仕様</a></span></p>

</li>
<li>
<p><span class="merged" id="all.1u7uj5" title="原文 : Configuring the Server"><router-link to="/mp/jaxrs/02_server-configuration">サーバーの構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2rO9Bn" title="原文 : Config"><router-link to="/mp/config/01_introduction">Config</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.AvEOZ" title="原文 : MicroProfile Metrics Specification"><a href="https://microprofile.io/project/eclipse/microprofile-metrics" id="" target="_blank" >MicroProfileメトリクス仕様</a></span></p>

</li>
<li>
<p><span class="merged" id="all.1GHj85" title="原文 : Metrics Guide"><router-link to="/mp/guides/05_metrics">メトリクス・ガイド</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2MZ344" title="原文 : MicroProfile Health Protocol and Wireformat"><a href="https://github.com/eclipse/microprofile-health/blob/master/spec/src/main/asciidoc/protocol-wireformat.adoc" id="" target="_blank" >MicroProfile Health ProtocolおよびWireformat</a></span></p>

</li>
<li>
<p><span class="merged" id="all.4FUgLN" title="原文 : Install Kubernetes on your desktop"><router-link to="/about/05_kubernetes">デスクトップへのKubernetesのインストール</router-link></span></p>

</li>
</ul>
</div>
</doc-view>
