<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3dnLlr" title="原文 : Helidon MP Config Guide">Helidon MP構成ガイド</span></dt>
<dd slot="desc"><p><span class="merged" id="all.42O2nK" title="原文 : This guide describes how to create a sample MicroProfile (MP) project that can be used to run some basic examples using both default and custom configuration with Helidon MP.">このガイドでは、Helidon MPでデフォルト構成とカスタム構成の両方を使用していくつかの基本的な例を実行するために使用できるサンプルMicroProfile (MP)プロジェクトの作成方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_what_you_need"><span class="merged" id="all.27ZcMH.2"  title="原文:: What You Need">必要事項</span></h2>
<div class="section">
<p><span class="merged" id="all.3yeiO0" title="原文 : For this 20 minute tutorial, you will need the following:">この20分間のチュートリアルでは、次のものが必要です:</span></p>


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
<td class=""><span class="merged" id="all.3J4a7U" title="原文 : A Helidon MP Application">Helidon MPアプリケーション</span></td>
<td class=""><span class="merged" id="all.13muNj" title="原文 : You can use your own application or use the Helidon MP Quickstart to create a sample application.">独自のアプリケーションを使用するか、<router-link to="/mp/guides/quickstart">「Helidon MPクイックスタート」</router-link>を使用してサンプル・アプリケーションを作成できます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2sRt9f.2" title="原文 : Java&#160;SE&#160;17 (Open&#160;JDK&#160;17)"><a href="https://www.oracle.com/technetwork/java/javase/downloads" target="_blank">Java&#160;SE&#160;17</a> (<a href="http://jdk.java.net" target="_blank">Open&#160;JDK&#160;17</a>)</span></td>
<td class=""><span class="merged" id="all.3aBChT.2" title="原文 : Helidon requires Java 17+.">HelidonにはJava 17以上が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1DYqqk.3" title="原文 : Maven 3.6.1+"><a href="https://maven.apache.org/download.cgi" target="_blank">Maven 3.6.1+</a></span></td>
<td class=""><span class="merged" id="all.3woDk0.2" title="原文 : Helidon requires Maven 3.6.1+.">Helidonには、Maven 3.6.1+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ND1mN.2"  title="原文:: Docker 18.09+"><a href="https://docs.docker.com/install/" target="_blank">Docker 18.09+</a></span></td>
<td class=""><span class="merged" id="all.aX1BT.2" title="原文 : You need Docker if you want to build and deploy Docker containers.">Dockerコンテナをビルドおよびデプロイする場合は、Dockerが必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Lo77h.2"  title="原文:: Kubectl 1.16.5+"><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" target="_blank">Kubectl 1.16.5+</a></span></td>
<td class=""><span class="merged" id="all.1JBSOB.2" title="原文 : If you want to deploy to Kubernetes, you need kubectl and a Kubernetes cluster (you can install one on your desktop.">Kubernetesにデプロイする場合は、<code>kubectl</code>およびKubernetesクラスタが必要です (<router-link to="/about/kubernetes">「デスクトップにインストール」</router-link>できます)。</span></td>
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


<h2 id="_getting_started_with_configuration"><span class="merged" id="all.4SXDCA" title="原文 : Getting Started with Configuration">構成の開始</span></h2>
<div class="section">
<p><span class="merged" id="all.34IEar.spl1" title="原文 : Helidon provides a very flexible and comprehensive configuration system, offering you many application configuration choices.">Helidonは、非常に柔軟で包括的な構成システムを提供し、多くのアプリケーション構成を選択できます。</span> <span class="merged" id="all.34IEar.spl2" title="原文 : You can include configuration data from a variety of sources using different formats, like JSON and YAML.">JSONやYAMLなどの様々な形式を使用して、様々なソースからの構成データを含めることができます。</span> <span class="merged" id="all.34IEar.spl3" title="原文 : Furthermore, you can customize the precedence of sources and make them optional or mandatory.">さらに、ソースの優先順位をカスタマイズして、オプションまたは必須にすることもできます。</span> <span class="merged" id="all.34IEar.spl4" title="原文 : This guide introduces Helidon MP configuration and demonstrates the fundamental concepts using several examples.">このガイドでは、Helidon MP構成について説明し、いくつかの例を使用して基本概念を示します。</span> <span class="merged" id="all.34IEar.spl5" title="原文 : Refer to Helidon Config for the full configuration concepts documentation.">構成の概念の詳細は、<router-link to="/mp/config/introduction">「Helidon構成」</router-link>を参照してください。</span> </p>


<h3 id="_create_a_sample_helidon_mp_project"><span class="merged" id="all.wmhRR" title="原文 : Create a Sample Helidon MP Project">サンプルHelidon MPプロジェクトの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.2oWHvo" title="原文 : Use the Helidon MP Maven archetype to create a simple project that can be used for the examples in this guide.">Helidon MP Maven原型を使用して、このガイドの例で使用できる単純なプロジェクトを作成します。</span></p>

<markup
lang="bash"
title="Run the Maven archetype:"
>mvn -U archetype:generate -DinteractiveMode=false \
    -DarchetypeGroupId=io.helidon.archetypes \
    -DarchetypeArtifactId=helidon-quickstart-mp \
    -DarchetypeVersion=3.0.2 \
    -DgroupId=io.helidon.examples \
    -DartifactId=helidon-quickstart-mp \
    -Dpackage=io.helidon.examples.quickstart.mp</markup>

<markup
lang="bash"
title="The project will be built and run from the <code>helidon-quickstart-mp</code> directory:"
>cd helidon-quickstart-mp</markup>

</div>


<h3 id="_default_configuration"><span class="merged" id="all.D7U1C"  title="原文:: Default Configuration">デフォルトの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.1BLfQQ.spl1" title="原文 : Helidon has an internal configuration, so you are not required to provide any configuration data for your application, though in practice you most likely would.">Helidonには内部構成があるため、ほとんどの場合、アプリケーションの構成データを指定する必要はありません。</span> <span class="merged" id="all.1BLfQQ.spl2" title="原文 : By default, that configuration can be overridden from three sources: system properties, environment variables, and the contents of META-INF/microprofile-config.properties.">デフォルトでは、この構成は3つのソースからオーバーライドできます: システム・プロパティ、環境変数および<code>META-INF/microprofile-config.properties</code>の内容。</span> <span class="merged" id="all.1BLfQQ.spl3" title="原文 : For example, if you specify a custom server port in META-INF/microprofile-config.properties then your server will listen on that port.">たとえば、<code>META-INF/microprofile-config.properties</code>でカスタム・サーバー・ポートを指定すると、サーバーはそのポートでリスニングします。</span> </p>

<p><span class="merged" id="all.2zoeWU.spl1" title="原文 : A main class is also required to start up the server and run the application.">サーバーを起動してアプリケーションを実行するには、メイン・クラスも必要です。</span> <span class="merged" id="all.2zoeWU.spl2" title="原文 : By default, the Quickstart sample project uses the built-in Helidon main class.">デフォルトでは、Quickstartサンプル・プロジェクトは組込みのHelidonメイン・クラスを使用します。</span> <span class="merged" id="all.2zoeWU.spl3" title="原文 : In this guide you want to use your own main class, so you have more control over the server initialization.">このガイドでは独自のメイン・クラスを使用するため、サーバーの初期化をより詳細に制御できます。</span> <span class="merged" id="all.2zoeWU.spl4" title="原文 : First define your own Main:">最初に、独自の<code>Main</code>を定義します:</span> </p>

<markup
lang="java"
title="src/main/java/io/helidon/examples/quickstart/mp/Main.java"
>package io.helidon.examples.quickstart.mp;

import io.helidon.microprofile.server.Server;
import java.io.IOException;

public final class Main {

    private Main() { } <span class="conum" data-value="1" />

    public static void main(final String[] args) {
        Server server = startServer();
        System.out.println("http://localhost:" + server.port() + "/greet");
    }

    static Server startServer() {
        return Server.create().start(); <span class="conum" data-value="2" />
    }

}</markup>

<p><span class="merged" id="all.cfMpi" title="原文 : In this class, a main method is defined which starts the Helidon MP server and prints out a message with the listen address.">このクラスでは、Helidon MPサーバーを起動し、リスニング・アドレスを含むメッセージを出力する<code>main</code>メソッドが定義されます。</span></p>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.CoXHI" title="原文 : Notice that this class has an empty no-args constructor to make sure this class cannot be instantiated.">このクラスには、このクラスをインスタンス化できないようにする空の引数なしコンストラクタがあることに注意してください。</span></li>
<li data-value="2"><span class="merged" id="all.3Y5ssM" title="原文 : The MicroProfile server is started with the default configuration.">MicroProfileサーバーは、デフォルト構成で起動されます。</span></li>
</ul>

<p><span class="merged" id="all.4Jk7Uc" title="原文 : Next change the project&rsquo;s pom.xml to use your main class:">次に、メイン・クラスを使用するようにプロジェクトの<code>pom.xml</code>を変更します:</span></p>

<markup
lang="xml"
title="pom.xml"
>    &lt;properties&gt;
        &lt;mainClass&gt;io.helidon.examples.quickstart.mp.Main&lt;/mainClass&gt;
    &lt;/properties&gt;</markup>

<p><span class="merged" id="all.2U9x90" title="原文 : This property will be used to set the Main-Class attribute in the application jar&rsquo;s MANIFEST.">このプロパティは、アプリケーションjarのMANIFESTで<code>Main-Class</code>属性を設定するために使用されます。</span></p>

<p><span class="merged" id="all.38HyLZ.spl1" title="原文 : In your application code, Helidon uses the default configuration when you create a Server object without a custom Config object.">アプリケーション・コードでは、カスタム<code>Config</code>オブジェクトなしで<code>Server</code>オブジェクトを作成する場合、Helidonはデフォルトの構成を使用します。</span> <span class="merged" id="all.38HyLZ.spl2" title="原文 : See the following code from the project you created.">作成したプロジェクトから次のコードを参照してください。</span> </p>

<markup
lang="Java"
title="View <code>Main.startServer</code>:"
>    static Server startServer() {
        return Server.create().start(); <span class="conum" data-value="1" />
    }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.28k6LE" title="原文 : There is no Config object being used during server creation, so the default configuration is used.">サーバーの作成中に<code>Config</code>オブジェクトが使用されていないため、デフォルトの構成が使用されます。</span></li>
</ul>

</div>


<h3 id="_source_precedence_for_default_configuration"><span class="merged" id="all.3Xdinn" title="原文 : Source Precedence for Default Configuration">デフォルト構成のソース優先順位</span></h3>
<div class="section">
<p><span class="merged" id="all.4BGnaQ.spl1" title="原文 : In order to properly configure your application using configuration sources, you need to understand the precedence rules that Helidon uses to merge your configuration data.">構成ソースを使用してアプリケーションを正しく構成するには、Helidonが構成データをマージするために使用する優先順位ルールを理解する必要があります。</span> <span class="merged" id="all.4BGnaQ.spl2" title="原文 : By default, Helidon will use the following sources in precedence order:">デフォルトでは、Helidonは次のソースを優先順に使用します:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.yeWel"  title="原文:: Java system properties">Javaシステム・プロパティ</span>

</li>
<li>
<span class="merged" id="all.401dbB.1"  title="原文:: Environment variables">環境変数</span>

</li>
<li>
<span class="merged" id="all.pKjAy" title="原文 : Properties specified in META-INF/microprofile-config.properties"><code>META-INF/microprofile-config.properties</code>で指定されたプロパティ</span>

</li>
</ol>

<p><span class="merged" id="all.Nfnhq.spl1" title="原文 : Each of these sources specify configuration properties in Java Property format (key/value), like color=red.">これらの各ソースは、<code>color=red</code>などの「Javaプロパティ」形式(キー/バリュー)で構成プロパティを指定します。</span> <span class="merged" id="all.Nfnhq.spl2" title="原文 : If any of the Helidon required properties are not specified in one of these source, like server.port, then Helidon will use a default value.">これらのソース(<code>server.port</code>など)のいずれかでHelidonの必須プロパティが指定されていない場合、Helidonはデフォルト値を使用します。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1OfPmA.spl1" title="原文 : Because environment variable names are restricted to alphanumeric characters and underscores, Helidon adds aliases to the environment configuration source, allowing entries with dotted and/or hyphenated keys to be overridden.">環境変数名は英数字およびアンダースコアに制限されるため、Helidonは環境構成ソースに別名を追加し、ドットまたはハイフン(あるいはその両方)のキーを持つエントリを上書きできます。</span> <span class="merged" id="all.1OfPmA.spl2" title="原文 : For example, this mapping allows an environment variable named &quot;APP_GREETING&quot; to override an entry key named &quot;app.greeting&quot;.">たとえば、このマッピングを使用すると、"APP_GREETING"という環境変数で"app.greeting"というエントリ・キーをオーバーライドできます。</span> <span class="merged" id="all.1OfPmA.spl3" title="原文 : In the same way, an environment variable named &quot;APP_dash_GREETING&quot; will map to &quot;app-greeting&quot;.">同様に、"APP_dash_GREETING"という名前の環境変数が"app-greeting"にマップされます。</span> <span class="merged" id="all.1OfPmA.spl4" title="原文 : See Microprofile Config Specifications for more information.">詳細は、<a href="https://download.eclipse.org/microprofile/microprofile-config-3.0.1/microprofile-config-spec-3.0.1.html" target="_blank">「Microprofile構成仕様」</a>を参照してください。</span> </p>
</div>

<p><span class="merged" id="all.15AJR2" title="原文 : The following examples will demonstrate the default precedence order.">次の例では、デフォルトの優先順位を示します。</span></p>


<h4 id="_default_configuration_resource"><span class="merged" id="all.1Foi1u" title="原文 : Default Configuration Resource">デフォルトの構成リソース</span></h4>
<div class="section">
<p><span class="merged" id="all.or8Jn.spl1" title="原文 : Change a configuration parameter in the default configuration resource file, META-INF/microprofile-config.properties.">デフォルトの構成リソース・ファイルである<code>META-INF/microprofile-config.properties</code>の構成パラメータを変更します。</span> <span class="merged" id="all.or8Jn.spl2" title="原文 : There are no environment variable or system property overrides defined.">環境変数またはシステム・プロパティのオーバーライドが定義されていません。</span> </p>

<markup
lang="bash"
title="Change <code>app.greeting</code> in the <code>META-INF/microprofile-config.properties</code> from <code>Hello</code> to <code>HelloFromMPConfig</code>:"
>app.greeting=HelloFromMPConfig</markup>

<markup
lang="bash"
title="Build the application, skipping unit tests, then run it:"
>mvn package -DskipTests=true
java -jar target/helidon-quickstart-mp.jar</markup>

<markup
lang="bash"
title="Run the curl command in a new terminal window and check the response:"
>curl http://localhost:8080/greet</markup>

<markup
lang="json"

>{
  "message": "HelloFromMPConfig World!" <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.32GXrK" title="原文 : The new app.greeting value in META-INF/microprofile-config.properties is used."><code>META-INF/microprofile-config.properties</code>の新しい<code>app.greeting</code>値が使用されます。</span></li>
</ul>


<h5 id="_environment_variable_override"><span class="merged" id="all.3OxxCz" title="原文 : Environment Variable Override">環境変数の上書き</span></h5>
<div class="section">
<p><span class="merged" id="all.1xcYSj" title="原文 : An environment variable has a higher precedence than the configuration properties file.">環境変数は、構成プロパティ・ファイルよりも優先されます。</span></p>

<markup
lang="bash"
title="Set the environment variable and restart the application:"
>export APP_GREETING=HelloFromEnvironment
java -jar target/helidon-quickstart-mp.jar</markup>

<markup
lang="bash"
title="Invoke the endpoint below and check the response:"
>curl http://localhost:8080/greet</markup>

<markup
lang="json"

>{
  "message": "HelloFromEnvironment World!" <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.gjvkO" title="原文 : The environment variable took precedence over the value in META-INF/microprofile-config.properties.">環境変数は、<code>META-INF/microprofile-config.properties</code>の値よりも優先されます。</span></li>
</ul>

</div>


<h5 id="_system_property_override"><span class="merged" id="all.19x1z6" title="原文 : System Property Override">システム・プロパティの上書き</span></h5>
<div class="section">
<p><span class="merged" id="all.21rWRl" title="原文 : A system property has a higher precedence than environment variables.">システム・プロパティの優先順位は環境変数よりも高くなります。</span></p>

<markup
lang="bash"
title="Restart the application with a system property.  The <code>app.greeting</code> environment variable is still set:"
>java -Dapp.greeting="HelloFromSystemProperty"  -jar target/helidon-quickstart-mp.jar</markup>

<markup
lang="bash"
title="Invoke the endpoint below and check the response:"
>curl http://localhost:8080/greet</markup>

<markup
lang="json"

>{
  "message": "HelloFromSystemProperty World!" <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3gvU7Z" title="原文 : The system property took precedence over both the environment variable and META-INF/microprofile-config.properties.">システム・プロパティは、環境変数と<code>META-INF/microprofile-config.properties</code>の両方より優先されました。</span></li>
</ul>

</div>

</div>

</div>

</div>


<h2 id="_accessing_config_within_an_application"><span class="merged" id="all.3HwFWy" title="原文 : Accessing Config within an Application">アプリケーション内の構成へのアクセス</span></h2>
<div class="section">
<p><span class="merged" id="all.1pM8AC.spl1" title="原文 : The examples in this section will demonstrate how to access that config data at runtime.">この項の例では、実行時にその構成データにアクセスする方法を示します。</span> <span class="merged" id="all.1pM8AC.spl2" title="原文 : Your application uses the Config object to access the in-memory tree, retrieving config data.">アプリケーションでは、<code>Config</code>オブジェクトを使用してインメモリー・ツリーにアクセスし、構成データを取得します。</span> </p>

<p><span class="merged" id="all.3Uffrl" title="原文 : The generated project already accesses configuration data in the GreetingProvider class as follows:">生成されたプロジェクトは、次のように<code>GreetingProvider</code>クラスの構成データにすでにアクセスしています:</span></p>

<markup
lang="java"
title="View the following code from <code>GreetingProvider.java</code>:"
>@ApplicationScoped <span class="conum" data-value="1" />
public class GreetingProvider {
    private final AtomicReference&lt;String&gt; message = new AtomicReference&lt;&gt;(); <span class="conum" data-value="2" />

    @Inject
    public GreetingProvider(@ConfigProperty(name = "app.greeting") String message) {   <span class="conum" data-value="3" />
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
<li data-value="1"><span class="merged" id="all.4apTex" title="原文 : This class is application scoped so a single instance of GreetingProvider will be shared across the entire application.">このクラスはアプリケーション・スコープであるため、<code>GreetingProvider</code>の単一インスタンスはアプリケーション全体で共有されます。</span></li>
<li data-value="2"><span class="merged" id="all.4gcnTU" title="原文 : Define a thread-safe reference that will refer to the message member variable.">メッセージ・メンバー変数を参照するスレッド・セーフな参照を定義します。</span></li>
<li data-value="3"><span class="merged" id="all.132fM" title="原文 : The value of the configuration property app.greeting is injected into the GreetingProvider. constructor as a String parameter named message.">構成プロパティ<code>app.greeting</code>の値は、<code>message</code>という名前の<code>String</code>パラメータとして<code>GreetingProvider</code>.コンストラクタにインジェクトされます。</span></li>
</ul>


<h3 id="_injecting_at_field_level"><span class="merged" id="all.1p3jAq" title="原文 : Injecting at Field Level">フィールド・レベルでのインジェクト</span></h3>
<div class="section">
<p><span class="merged" id="all.3QilO5.spl1" title="原文 : You can inject configuration at the field level as shown below.">次に示すように、フィールド・レベルで構成をインジェクトできます。</span> <span class="merged" id="all.3QilO5.spl2" title="原文 : Use the volatile keyword since you cannot use AtomicReference with field level injection.">フィールド・レベル・インジェクションでは<code>AtomicReference</code>を使用できないため、<code>volatile</code>キーワードを使用します。</span> </p>

<markup
lang="yaml"
title="Update the  <code>meta-config.yaml</code> with the following contents:"
>sources:
  - type: "classpath"
    properties:
      resource: "META-INF/microprofile-config.properties"  <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1DfWfw" title="原文 : This example only uses the default classpath source.">この例では、デフォルトのクラスパス・ソースのみを使用します。</span></li>
</ul>

<markup
lang="java"
title="Update the following code from <code>GreetingProvider.java</code>:"
>@ApplicationScoped
public class GreetingProvider {

    @Inject
    @ConfigProperty(name = "app.greeting") <span class="conum" data-value="1" />
    private volatile String message; <span class="conum" data-value="2" />

    String getMessage() {
        return message;
    }

    void setMessage(String message) {
        this.message = message;
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.9dzbL" title="原文 : Inject the value of app.greeting into the GreetingProvider object."><code>app.greeting</code>の値を<code>GreetingProvider</code>オブジェクトにインジェクトします。</span></li>
<li data-value="2"><span class="merged" id="all.2Fr35i" title="原文 : Define a class member variable to hold the greeting.">グリーティングを保持するクラス・メンバー変数を定義します。</span></li>
</ul>

<markup
lang="bash"
title="Build and run the application, then invoke the endpoint and check the response:"
>curl http://localhost:8080/greet</markup>

<markup
lang="json"

>{
  "message": "HelloFromMPConfig World!"
}</markup>

</div>


<h3 id="_injecting_the_config_object"><span class="merged" id="all.2DlHIN" title="原文 : Injecting the Config Object">構成オブジェクトのインジェクト</span></h3>
<div class="section">
<p><span class="merged" id="all.1va6yp" title="原文 : You can inject the Config object into the class and access it directly as shown below.">次に示すように、<code>Config</code>オブジェクトをクラスにインジェクトして直接アクセスできます。</span></p>

<markup
lang="java"
title="Update the <code>GreetingProvider.java</code> file; 1) Add new imports and 2) Replace the <code>GreetingProvider</code> class:"
> <span class="conum" data-value="1" />
import io.helidon.config.Config;
import jakarta.enterprise.context.Initialized;
import jakarta.enterprise.event.Observes;

@ApplicationScoped
public class GreetingProvider {
    private final AtomicReference&lt;String&gt; message = new AtomicReference&lt;&gt;();

    @Inject <span class="conum" data-value="2" />
    public GreetingProvider(Config config) {
        String message = config.get("app.greeting").asString().get(); <span class="conum" data-value="3" />
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
<li data-value="1"><span class="merged" id="all.2d9mcZ" title="原文 : Add three new imports.">3つの新しいインポートを追加します。</span></li>
<li data-value="2"><span class="merged" id="all.2o4HV9" title="原文 : Inject the Config object into the GreetingProvider object."><code>Config</code>オブジェクトを<code>GreetingProvider</code>オブジェクトにインジェクトします。</span></li>
<li data-value="3"><span class="merged" id="all.105OzQ" title="原文 : Get the app.greeting value from the Config object and set the member variable."><code>Config</code>オブジェクトから<code>app.greeting</code>値を取得し、メンバー変数を設定します。</span></li>
</ul>

<markup
lang="bash"
title="Build and run the application, then invoke the endpoint and check the response:"
>curl http://localhost:8080/greet</markup>

<markup
lang="json"

>{
  "message": "HelloFromMPConfig World!"
}</markup>

</div>


<h3 id="_navigating_the_config_tree"><span class="merged" id="all.1cAhxf" title="原文 : Navigating the Config Tree">構成ツリーのナビゲート</span></h3>
<div class="section">
<p><span class="merged" id="all.3AR2UI.spl1" title="原文 : Helidon offers a variety of methods to access in-memory configuration.">Helidonには、インメモリー構成にアクセスするための様々なメソッドがあります。</span> <span class="merged" id="all.3AR2UI.spl2" title="原文 : These can be categorized as key access or tree navigation.">これらは、<em>「キー・アクセス」</em>または<em>「ツリー・ナビゲーション」</em>に分類できます。</span> <span class="merged" id="all.3AR2UI.spl3" title="原文 : You have been using key access for all the examples to this point.">この時点のすべての例に<em>「キー・アクセス」</em>を使用しました。</span> <span class="merged" id="all.3AR2UI.spl4" title="原文 : For example app.greeting is accessing the greeting child node of the app parent node.">たとえば、<code>app.greeting</code>が<code>app</code>親ノードの<code>greeting</code>子ノードにアクセスしているとします。</span> </p>

<p><span class="merged" id="all.3hc8Uh" title="原文 : This simple example below demonstrates how to access a child node as a detached configuration subtree.">次の単純な例は、連結解除された構成サブツリーとして子ノードにアクセスする方法を示しています。</span></p>

<markup
lang="yaml"
title="Create a file <code>config-file.yaml</code> in the <code>helidon-quickstart-mp</code> directory and add the following contents:"
>app:
  greeting:
    sender: Joe
    message: Hello-from-config-file.yaml</markup>

<markup
lang="yaml"
title="Update the  <code>meta-config.yaml</code> with the following contents:"
>sources:
  - type: "classpath"
    properties:
      resource: "META-INF/microprofile-config.properties"
  - type: "file"
    properties:
      path: "./config-file.yaml"</markup>

<markup
lang="java"
title="Replace <code>GreetingProvider</code> class with the following code:"
>@ApplicationScoped
public class GreetingProvider {
    private final AtomicReference&lt;String&gt; message = new AtomicReference&lt;&gt;();
    private final AtomicReference&lt;String&gt; sender = new AtomicReference&lt;&gt;();

    @Inject
    Config config;

    public void onStartUp(@Observes @Initialized(ApplicationScoped.class) Object init) {
        Config appNode = config.get("app.greeting"); <span class="conum" data-value="1" />
        message.set(appNode.get("message").asString().get());  <span class="conum" data-value="2" />
        sender.set(appNode.get("sender").asString().get());   <span class="conum" data-value="3" />
    }

    String getMessage() {
        return sender.get() + " says " + message.get();
    }

    void setMessage(String message) {
        this.message.set(message);
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2Heq0m" title="原文 : Get the configuration subtree where the app.greeting node is the root."><code>app.greeting</code>ノードがルートである構成サブツリーを取得します。</span></li>
<li data-value="2"><span class="merged" id="all.3pfcl9" title="原文 : Get the value from the message Config node."><code>message</code> <code>Config</code>ノードから値を取得します。</span></li>
<li data-value="3"><span class="merged" id="all.BM14s" title="原文 : Get the value from the sender Config node."><code>sender</code> <code>Config</code>ノードから値を取得します。</span></li>
</ul>

<markup
lang="bash"
title="Build and run the application, then invoke the endpoint and check the response:"
>curl http://localhost:8080/greet</markup>

<markup
lang="json"

>{
  "message": "Joe says Hello-from-config-file.yaml World!"
}</markup>

</div>

</div>


<h2 id="_integration_with_kubernetes"><span class="merged" id="all.4PhaKc" title="原文 : Integration with Kubernetes">Kubernetesとの統合</span></h2>
<div class="section">
<p><span class="merged" id="all.1bExtP.spl1" title="原文 : The following example uses a Kubernetes ConfigMap to pass the configuration data to your Helidon application deployed to Kubernetes.">次の例では、Kubernetes ConfigMapを使用して、KubernetesにデプロイされたHelidonアプリケーションに構成データを渡します。</span> <span class="merged" id="all.1bExtP.spl2" title="原文 : When the pod is created, Kubernetes will automatically create a local file within the container that has the contents of the configuration file used for the ConfigMap.">ポッドが作成されると、Kubernetesによって、ConfigMapに使用される構成ファイルの内容を含むコンテナ内にローカル・ファイルが自動的に作成されます。</span> <span class="merged" id="all.1bExtP.spl3" title="原文 : This example will create the file at /etc/config/config-file.properties.">この例では、<code>/etc/config/config-file.properties</code>でファイルを作成します。</span> </p>

<markup
lang="java"
title="Update the <code>Main</code> class and replace the <code>buildConfig</code> method:"
>private static Config buildConfig() {
  return Config.builder()
      .sources(
          file("/etc/config/config-file.properties").optional(), <span class="conum" data-value="1" />
          classpath("META-INF/microprofile-config.properties")) <span class="conum" data-value="2" />
      .build();
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3Decxr" title="原文 : The app.greeting value will be fetched from /etc/config/config-file.properties within the container."><code>app.greeting</code>値は、コンテナ内の<code>/etc/config/config-file.properties</code>からフェッチされます。</span></li>
<li data-value="2"><span class="merged" id="all.4SVnpb" title="原文 : The server port is specified in META-INF/microprofile-config.properties within the helidon-quickstart-mp.jar.">サーバー・ポートは、<code>helidon-quickstart-mp.jar</code>内の<code>META-INF/microprofile-config.properties</code>で指定されます。</span></li>
</ul>

<markup
lang="java"
title="Update the following code from <code>GreetingProvider.java</code>:"
>@ApplicationScoped
public class GreetingProvider {

    @Inject
    @ConfigProperty(name = "app.greeting") <span class="conum" data-value="1" />
    private volatile String message; <span class="conum" data-value="2" />

    String getMessage() {
        return message;
    }

    void setMessage(String message) {
        this.message = message;
    }
}</markup>

<markup
lang="bash"
title="Build and run the application, then invoke the endpoint and check the response:"
>curl http://localhost:8080/greet</markup>

<markup
lang="json"

>{
  "message": "HelloFromConfigFile World!"
}</markup>

<markup
lang="bash"
title="Stop the application and build the docker image:"
>docker build -t helidon-config-mp .</markup>

<markup
lang="bash"
title="Generate a ConfigMap from <code>config-file.properties</code>:"
>kubectl create configmap helidon-configmap --from-file config-file.properties</markup>

<markup
lang="bash"
title="View the contents of the ConfigMap:"
>kubectl get configmap helidon-configmap -o yaml</markup>

<markup
lang="yaml"

>apiVersion: v1
data:
  config-file.properties: |   <span class="conum" data-value="1" />
    app.greeting=HelloFromConfigFile   <span class="conum" data-value="2" />
kind: ConfigMap</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4FquKi" title="原文 : The file config-file.properties will be created within the Kubernetes container.">ファイル<code>config-file.properties</code>は、Kubernetesコンテナ内に作成されます。</span></li>
<li data-value="2"><span class="merged" id="all.3Q8Arf" title="原文 : The config-file.properties file will have this single property defined."><code>config-file.properties</code>ファイルには、この単一のプロパティが定義されます。</span></li>
</ul>

<markup
lang="yaml"
title="Create the Kubernetes YAML specification, named <code>k8s-config.yaml</code>, with the following contents:"
>kind: Service
apiVersion: v1
metadata:
  name: helidon-config <span class="conum" data-value="1" />
  labels:
    app: helidon-config
spec:
  type: NodePort
  selector:
    app: helidon-config
  ports:
    - port: 8080
      targetPort: 8080
      name: http
---
kind: Deployment
apiVersion: apps/v1
metadata:
  name: helidon-config
spec:
  replicas: 1 <span class="conum" data-value="2" />
  selector:
    matchLabels:
      app: helidon-config
  template:
    metadata:
      labels:
        app: helidon-config
        version: v1
    spec:
      containers:
        - name: helidon-config
          image: helidon-config-mp
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 8080
          volumeMounts:
            - name: config-volume
              mountPath: /etc/config <span class="conum" data-value="3" />
      volumes:
        - name: config-volume
          configMap:
            # Provide the name of the ConfigMap containing the files you want
            # to add to the container
            name:  helidon-configmap <span class="conum" data-value="4" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3s9wLQ" title="原文 : A service of type NodePort that serves the default routes on port 8080.">ポート<code>8080</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
<li data-value="2"><span class="merged" id="all.1dhwFj" title="原文 : A deployment with one replica of a pod.">ポッドの1つのレプリカを持つデプロイメント。</span></li>
<li data-value="3"><span class="merged" id="all.2hSlHR.spl1" title="原文 : Mount the ConfigMap as a volume at /etc/config.">ConfigMapをボリュームとして<code>/etc/config</code>にマウントします。</span> <span class="merged" id="all.2hSlHR.spl2" title="原文 : This is where Kubernetes will create config-file.properties.">ここで、Kubernetesは<code>config-file.properties</code>を作成します。</span> </li>
<li data-value="4"><span class="merged" id="all.2He1jG" title="原文 : Specify the ConfigMap which contains the configuration data.">構成データを含むConfigMapを指定します。</span></li>
</ul>

<markup
lang="bash"
title="Create and deploy the application into Kubernetes:"
>kubectl apply -f ./k8s-config.yaml</markup>

<markup
lang="bash"
title="Get the service information:"
>kubectl get service/helidon-config</markup>

<markup
lang="bash"

>NAME             TYPE       CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
helidon-config   NodePort   10.99.159.2   &lt;none&gt;        8080:31143/TCP   8s <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3Q1f91" title="原文 : A service of type NodePort that serves the default routes on port 31143.">ポート<code>31143</code>上のデフォルト・ルートを提供する<code>NodePort</code>タイプのサービス。</span></li>
</ul>

<markup
lang="bash"
title="Verify the configuration endpoint using port <code>31143</code>, your port will likely be different:"
>curl http://localhost:31143/greet</markup>

<markup
lang="json"

>{
  "message": "HelloFromConfigFile World!" <span class="conum" data-value="1" />
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4QvX6g" title="原文 : The greeting value from /etc/config/config-file.properties within the container was used.">コンテナ内の<code>/etc/config/config-file.properties</code>からの応答メッセージ値が使用されました。</span></li>
</ul>

<p><span class="merged" id="all.HBnIV" title="原文 : You can now delete the Kubernetes resources that were just created during this example.">これで、この例で作成したKubernetesリソースを削除できます。</span></p>

<markup
lang="bash"
title="Delete the Kubernetes resources:"
>kubectl delete -f ./k8s-config.yaml
kubectl delete configmap  helidon-configmap</markup>

</div>


<h2 id="_summary"><span class="merged" id="all.1nTCR"  title="原文:: Summary">サマリー</span></h2>
<div class="section">
<p><span class="merged" id="all.2ChKrm.spl1" title="原文 : This guide has demonstrated how to use basic Helidon configuration features.">このガイドでは、基本的なHelidon構成機能の使用方法について説明しました。</span> <span class="merged" id="all.2ChKrm.spl2" title="原文 : For more information about using the advanced Helidon configuration features, including mutability support and extensions, see Helidon Configuration.">可変性のサポートや拡張など、高度なHelidon構成機能の使用方法の詳細は、<router-link to="/mp/config/introduction">「Helidon構成」</router-link>を参照してください。</span> </p>

</div>


<h2 id="_references"><span class="merged" id="all.3oSja0.1"  title="原文:: References">参照</span></h2>
<div class="section">
<p><span class="merged" id="all.UfWha" title="原文 : Refer to the following references for additional information:">詳細は、次のリファレンスを参照してください:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4KIvFr" title="原文 : MicroProfile Config specification"><a href="https://download.eclipse.org/microprofile/microprofile-config-3.0.1/microprofile-config-spec-3.0.1.html" target="_blank">MicroProfile構成の指定</a></span></p>

</li>
<li>
<p><span class="merged" id="all.2QPyK5" title="原文 : MicroProfile Config Javadoc"><a href="https://download.eclipse.org/microprofile/microprofile-config-3.0.1/apidocs" target="_blank">MicroProfile構成Javadoc</a></span></p>

</li>
<li>
<p><span class="merged" id="all.1cU8n2" title="原文 : Helidon Javadoc"><a href="./apidocs/index.html?overview-summary.html" target="_blank">Helidon Javadoc</a></span></p>

</li>
</ul>

</div>

</doc-view>
