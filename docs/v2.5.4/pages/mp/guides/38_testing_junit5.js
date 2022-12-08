<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3UcgKt" title="原文 : Helidon MP Testing with JUnit 5 Guide">JUnit 5ガイドによるHelidon MPテスト</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3DQXb1" title="原文 : This guide describes how to write and execute tests for your MicroProfile applications in a JUnit 5 environment using optimized customizations.">このガイドでは、最適化されたカスタマイズを使用して、JUnit 5環境でMicroProfileアプリケーションのテストを記述および実行する方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_what_you_need"><span class="merged" id="all.27ZcMH.15"  title="原文:: What You Need">必要事項</span></h2>
<div class="section">
<p><span class="merged" id="all.3yeiO0.3" title="原文 : For this 20 minute tutorial, you will need the following:">この20分間のチュートリアルでは、次のものが必要です:</span></p>


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
<td class=""><span class="merged" id="all.1hKNxI.12" title="原文 : A Helidon {upper-case-flavor} Application">Helidon {upper-case-flavor} アプリケーション</span></td>
<td class=""><span class="merged" id="all.3jMlMY.12" title="原文 : You can use your own application or use the Helidon {upper-case-flavor} Quickstart to create a sample application.">独自のアプリケーションを使用するか、<a href="https://helidon.io/docs/v2/#/{lower-case-flavor}/guides/02_quickstart" id="" target="_blank" >「Helidon {upper-case-flavor} クイックスタート」</a>を使用してサンプル・アプリケーションを作成できます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3UjXGj.13" title="原文 : Java&#160;SE&#160;11 (Open&#160;JDK&#160;11)"><a href="https://www.oracle.com/technetwork/java/javase/downloads" id="" target="_blank" >Java&#160;SE&#160;11</a> (<a href="http://jdk.java.net" id="" target="_blank" >Open&#160;JDK&#160;11</a>)</span></td>
<td class=""><span class="merged" id="all.3e6V0X.13" title="原文 : Helidon requires Java 11+.">HelidonにはJava 11以上が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1nyTbh.15" title="原文 : Maven 3.6.1+"><a href="https://maven.apache.org/download.cgi" id="" target="_blank" >Maven 3.6.1+</a></span></td>
<td class=""><span class="merged" id="all.3woDk0.13" title="原文 : Helidon requires Maven 3.6.1+.">Helidonには、Maven 3.6.1+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1HtX9I.14"  title="原文:: Docker 18.09+"><a href="https://docs.docker.com/install/" id="" target="_blank" >Docker 18.09+</a></span></td>
<td class=""><span class="merged" id="all.aX1BT.13" title="原文 : You need Docker if you want to build and deploy Docker containers.">Dockerコンテナをビルドおよびデプロイする場合は、Dockerが必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48aNQe.14"  title="原文:: Kubectl 1.16.5+"><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" id="" target="_blank" >Kubectl 1.16.5+</a></span></td>
<td class=""><span class="merged" id="all.1tjPJQ.13" title="原文 : If you want to deploy to Kubernetes, you need kubectl and a Kubernetes cluster (you can install one on your desktop).">Kubernetesにデプロイする場合は、<code>kubectl</code>およびKubernetesクラスタ(<router-link to="/about/05_kubernetes">「デスクトップにインストール」</router-link>も可)が必要です。</span></td>
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

<h2 id="_dependencies"><span class="merged" id="all.4R2wMP"  title="原文:: Dependencies">依存関係</span></h2>
<div class="section">
<p><span class="merged" id="all.rcWHK" title="原文 : To start using this feature, add the following dependencies to the testing module:">この機能の使用を開始するには、テスト・モジュールに次の依存関係を追加します:</span></p>

<markup
lang="xml"
title="Maven dependencies"
>&lt;dependencies&gt;
   &lt;dependency&gt;
      &lt;groupId&gt;io.helidon.microprofile.tests&lt;/groupId&gt;
      &lt;artifactId&gt;helidon-microprofile-tests-junit5&lt;/artifactId&gt;
      &lt;scope&gt;test&lt;/scope&gt;
   &lt;/dependency&gt;
   &lt;dependency&gt;
      &lt;groupId&gt;org.junit.jupiter&lt;/groupId&gt;
      &lt;artifactId&gt;junit-jupiter-engine&lt;/artifactId&gt;
   &lt;/dependency&gt;
&lt;/dependencies&gt;</markup>

</div>

<h2 id="_create_a_sample_helidon_mp_project"><span class="merged" id="all.wmhRR.2" title="原文 : Create a Sample Helidon MP Project">サンプルHelidon MPプロジェクトの作成</span></h2>
<div class="section">
<p><span class="merged" id="all.1EA7tu" title="原文 : In this guide we will use the Helidon MP Quick Start project in our examples.">このガイドでは、例で<a href="https://helidon.io/docs/v2/#/mp/guides/02_quickstart" id="" target="_blank" >「Helidon MPクイック・スタート」</a>プロジェクトを使用します。</span></p>

<p><span class="merged" id="all.4YuHvQ" title="原文 : This application provides an endpoint /greet, and we want to make sure this endpoint is available and returns expected value.">このアプリケーションはエンドポイント<code>/greet</code>を提供し、このエンドポイントが使用可能であることを確認して、予想される値を返します。</span></p>


<h3 id="_create_a_test_class"><span class="merged" id="all.2qDbXp" title="原文 : Create a Test Class">テスト・クラスを作成</span></h3>
<div class="section">
<p><span class="merged" id="all.1tvV3G" title="原文 : First you&rsquo;ll need to create a test class with an empty test method, and annotate it with @HelidonTest:">まず、空のテスト・メソッドでテスト・クラスを作成し、<code>@HelidonTest</code>で注釈を付ける必要があります:</span></p>

<markup
lang="java"
title="Test Class"
>import io.helidon.microprofile.tests.junit5.HelidonTest;

import org.junit.jupiter.api.Test;

@HelidonTest
class GreetTest {
    @Test
    void testDefaultGreeting() {
    }
}</markup>

<p><span class="merged" id="all.Sjtkh.spl1" title="原文 : The @HelidonTest annotation will cause the test extension to start a Helidon MicroProfile server so that you do not need to manage the server lifecycle in your test."><code>@HelidonTest</code>注釈を使用すると、テストでサーバーのライフサイクルを管理する必要がないように、テスト拡張でHelidon MicroProfileサーバーが起動されます。</span> <span class="merged" id="all.Sjtkh.spl2" title="原文 : The container is initialized once before the test class is instantiated, and shut down after the last test runs.">コンテナは、テスト・クラスがインスタンス化される前に1回初期化され、最後のテスト実行後に停止します。</span> </p>

<p><span class="merged" id="all.1b6ZXc" title="原文 : You can see this in the test output:">これはテスト出力で確認できます:</span></p>


<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.2otnuZ" title="原文 : The @HelidonTest annotation uses a random port regardless of the port configured in the application.yaml."><code>@HelidonTest</code>注釈は、application.yamlで構成されているポートに関係なく、ランダム・ポートを使用します。</span></p>
</div>
</div>

<h3 id="_inject_a_webtarget"><span class="merged" id="all.2Rtnaw" title="原文 : Inject a WebTarget">WebTargetのインジェクト</span></h3>
<div class="section">
<p><span class="merged" id="all.2PdNUf.spl1" title="原文 : The test is only useful if it invokes the server and verifies the result.">テストは、サーバーを起動して結果を確認する場合にのみ役立ちます。</span> <span class="merged" id="all.2PdNUf.spl2" title="原文 : To support testing, you can inject a WebTarget that is configured for the currently running server (it can also be a parameter to a test method).">テストをサポートするために、現在実行中のサーバー用に構成されている<code>WebTarget</code>をインジェクトできます(テスト・メソッドのパラメータにすることもできます)。</span> <span class="merged" id="all.2PdNUf.spl3" title="原文 : We can use the target to invoke our endpoint and validate the result.">ターゲットを使用してエンドポイントを起動し、結果をバリデートできます。</span> </p>

<markup
lang="java"
title="Updated Class with webTarget"
>import static org.junit.jupiter.api.Assertions.assertEquals;

@HelidonTest
class GreetTest {
    @Inject
    WebTarget webTarget;

    @Test
    void testDefaultGreeting() {
        JsonObject jsonObject = webTarget.path("/greet")
                .request()
                .get(JsonObject.class);

        String expected = "Hello World!";
        String actual = jsonObject.getString("message");
        assertEquals(expected, actual, "Message in JSON");
    }
}</markup>

<p><span class="merged" id="all.2WSoGm" title="原文 : The test is now complete and verifies the message.">テストが完了し、メッセージを確認します。</span></p>

</div>

<h3 id="_customize_the_testing_extension"><span class="merged" id="all.2VEvHu" title="原文 : Customize the Testing Extension">テスト拡張のカスタマイズ</span></h3>
<div class="section">
<p><span class="merged" id="all.3SDT6N" title="原文 : The testing extension supports a few additional annotations that allow for finer control of the test execution.">テスト拡張では、テスト実行をより細かく制御できる追加の注釈をいくつかサポートしています。</span></p>

<div class="block-title"><span class="merged" id="all.1XqHrm" title="原文 : Optional Extension Annotations"><span>オプションの拡張注釈</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1mFIlG"  title="原文:: Annotation">注釈</span></th>
<th><span class="merged" id="all.4JM9z7.3"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2qmZmL"  title="原文: @HelidonTest(resetPerTest = true)"><code>@HelidonTest(resetPerTest = true)</code></span></td>
<td class=""><span class="merged" id="all.3sbsuS" title="原文 : Resets the container for each method.">各メソッドのコンテナをリセットします。</span></td><td class=""><span class="merged" id="all.2ULCM9.spl1" title="原文 : This is useful when we want to modify configuration or beans between executions.">これは、実行間で構成またはBeanを変更する場合に便利です。</span> <span class="merged" id="all.2ULCM9.spl2" title="原文 : In such a case, injection into fields is not possible, as we would need a different instance for each test.">このような場合、テストごとに異なるインスタンスが必要になるため、フィールドへのインジェクションはできません。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.17h47K"  title="原文: @AddConfig(key = &quot;app.greeting&quot;, value = &quot;Unite&quot;)"><code>@AddConfig(key = "app.greeting", value = "Unite")</code></span></td>
<td class=""><span class="merged" id="all.skVHV" title="原文 : Defines a new configuration (either on class level, or method level) by adding a single configuration key/value.">単一の構成キー/バリューを追加して、(クラス・レベルまたはメソッド・レベルのいずれかで)新しい構成を定義します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.dnqL"  title="原文: @Configuration(configSources = &quot;test-config.properties&quot;)"><code>@Configuration(configSources = "test-config.properties")</code></span></td>
<td class=""><span class="merged" id="all.22tPoq" title="原文 : Adds a whole config source from classpath.">クラスパスから構成ソース全体を追加します。</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.89GNb" title="原文 : Here&rsquo;s an example showing how these approaches are used to execute the same endpoint with different configuration:">次に、異なる構成で同じエンドポイントを実行するためにこれらのアプローチが使用される例を示します:</span></p>

<markup
lang="java"

>@HelidonTest(resetPerTest = true)
class GreetTest {
    @Test
    void testDefaultGreeting(WebTarget webTarget) {
        validate(webTarget, "/greet", "Hello World!");
    }

    @Test
    @AddConfig(key = "app.greeting", value = "Unite")
    void testConfiguredGreeting(WebTarget webTarget) {
        validate(webTarget, "/greet", "Unite World!");
    }

    private void validate(WebTarget webTarget,
                          String path,
                          String expected) {

        JsonObject jsonObject = webTarget.path(path)
                .request()
                .get(JsonObject.class);

        String actual = jsonObject.getString("message");
        assertEquals(expected, actual, "Message in JSON");
    }
}</markup>

</div>

<h3 id="_use_beans_for_testing"><span class="merged" id="all.2BagPS" title="原文 : Use Beans for Testing">テストにBeanを使用</span></h3>
<div class="section">
<p><span class="merged" id="all.4aSaCY.spl1" title="原文 : If you prefer to use only beans for testing, and want to add a different bean for each test, then you must use the @AddBean annotation.">テストにBeanのみを使用し、テストごとに異なるBeanを追加する場合は、<code>@AddBean</code>注釈を使用する必要があります。</span> <span class="merged" id="all.4aSaCY.spl2" title="原文 : This cannot be achieved by CDI discovery because if we place META-INF/beans.xml on the classpath, then all of our beans would be added.">これは、クラスパスに<code>META-INF/beans.xml</code>を配置すると、すべてのBeanが追加されるため、CDI検出では実現できません。</span> </p>

<markup
lang="java"

>@AddBean(TestBean.class)</markup>

<p><span class="merged" id="all.NdYZY.spl1" title="原文 : By default the bean is added to the container with scope set to ApplicationScoped.">デフォルトでは、Beanはスコープが<code>ApplicationScoped</code>に設定されているコンテナに追加されます。</span> <span class="merged" id="all.NdYZY.spl2" title="原文 : You can customize scope either by annotating the bean class with another scope or through the annotation:">Beanクラスに別のスコープを指定するか、注釈を使用してスコープをカスタマイズできます:</span> </p>

<markup
lang="java"

>@AddBean(value = TestBean.class, scope = Dependent.class)</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3TyZW1" title="原文 : This annotation can also be placed on a method when running in resetPerTest mode.">この注釈は、<code>resetPerTest</code>モードで実行するときにメソッドに配置することもできます。</span></p>
</div>
</div>

<h3 id="_add_test_extension"><span class="merged" id="all.3sXW0F" title="原文 : Add Test Extension">テスト拡張の追加</span></h3>
<div class="section">
<p><span class="merged" id="all.1zTTVR.spl1" title="原文 : When a custom bean is not enough, you may want to extend the CDI with a test-only Extension.">カスタムBeanが十分でない場合は、テストのみの<code>Extension</code>を使用してCDIを拡張できます。</span> <span class="merged" id="all.1zTTVR.spl2" title="原文 : Once again, if we use the standard way of doing this, we would need to create a META-INF/services record that would be picked up by every test class.">再度、これを行う標準的な方法を使用する場合は、すべてのテスト・クラスで取得される<code>META-INF/services</code>レコードを作成する必要があります。</span> </p>

<p><span class="merged" id="all.1F2Nwy" title="原文 : For this purpose, we provide the following annotation which adds the extension to the container and allows you to modify its behavior as a usual CDI Portable Extension:">この目的のために、コンテナに拡張機能を追加し、通常のCDIノートブック拡張機能として動作を変更できる次の注釈を提供します:</span></p>

<markup
lang="java"

>@AddExtension(TestExtension.class)</markup>

</div>

<h3 id="_disable_discovery"><span class="merged" id="all.Roy0n" title="原文 : Disable Discovery">検出の無効化</span></h3>
<div class="section">
<p><span class="merged" id="all.1mzlw5" title="原文 : If you want to disable discovery and only add custom extensions and beans, then use the following annotation:">検出を無効にし、カスタム拡張およびBeanのみを追加する場合は、次の注釈を使用します:</span></p>

<markup
lang="java"

>@DisableDiscovery</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.4Nb4Jj.spl1" title="原文 : This annotation is typically used in conjunction with @AddBeans and/or @AddExtension.">この注釈は通常、<code>@AddBeans</code>または<code>@AddExtension</code>(あるいはその両方)とともに使用されます。</span> <span class="merged" id="all.4Nb4Jj.spl2" title="原文 : As you have seen in standard test output, by default Helidon starts with the dependencies defined in pom.xml.">標準テスト出力で見たとおり、デフォルトでは、Helidonはpom.xmlで定義された依存関係から始まります。</span> </p>
</div>
</div>
</div>

<h2 id="_write_a_basic_test"><span class="merged" id="all.3VuRxD" title="原文 : Write a Basic Test">基本テストの記述</span></h2>
<div class="section">
<p><span class="merged" id="all.32eILh.spl1" title="原文 : If you want just the basic test features enabled, then you only have to add a few required extensions and classes to your test.">基本的なテスト機能のみを有効にする場合は、いくつかの必要な拡張機能およびクラスのみをテストに追加する必要があります。</span> <span class="merged" id="all.32eILh.spl2" title="原文 : The following example uses only those extensions and classes required to run a bean that injects configuration value:">次の例では、構成値をインジェクトするBeanの実行に必要な拡張機能およびクラスのみを使用します:</span> </p>

<markup
lang="java"

>import javax.inject.Inject;

import io.helidon.microprofile.config.ConfigCdiExtension;
import io.helidon.microprofile.tests.junit5.AddBean;
import io.helidon.microprofile.tests.junit5.AddConfig;
import io.helidon.microprofile.tests.junit5.AddExtension;
import io.helidon.microprofile.tests.junit5.DisableDiscovery;
import io.helidon.microprofile.tests.junit5.HelidonTest;

import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

@HelidonTest
@DisableDiscovery
@AddExtension(ConfigCdiExtension.class)
@AddBean(GreetTest.ConfiguredBean.class)
@AddConfig(key = "test.message", value = "Hello Guide!")
class GreetTest {
    @Inject
    ConfiguredBean bean;

    @Test
    void testBean() {
        assertEquals("Hello Guide!", bean.message());
    }

    public static class ConfiguredBean {
        @Inject
        @ConfigProperty(name = "test.message")
        private String message;

        String message() {
            return message;
        }
    }
}</markup>

</div>

<h2 id="_summary"><span class="merged" id="all.1nTCR.5"  title="原文:: Summary">サマリー</span></h2>
<div class="section">
<p><span class="merged" id="all.3kxOxI.spl1" title="原文 : This guide demonstrated how to create tests for MicroProfile applications in a JUnit 5 environment.">このガイドでは、JUnit 5環境でMicroProfileアプリケーションのテストを作成する方法を示します。</span> <span class="merged" id="all.3kxOxI.spl2" title="原文 : It described some useful customizations that can be added to your testing extension and allow you to configure test outcomes for your Helidon MP applications.">ここでは、テスト拡張に追加できる便利なカスタマイズについて説明し、Helidon MPアプリケーションのテスト結果を構成できます。</span> </p>

<p><span class="merged" id="all.UfWha.4" title="原文 : Refer to the following references for additional information:">詳細は、次のリファレンスを参照してください:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.YqTQV" title="原文 : JUnit 5 User Guide"><a href="https://junit.org/junit5/docs/current/user-guide/" id="" target="_blank" >JUnit 5ユーザー・ガイド</a></span></p>

</li>
<li>
<p><span class="merged" id="all.39WlS7" title="原文 : Testing with JUnit 5"><router-link to="/mp/testing/01_testing">JUnit 5を使用したテスト</router-link></span></p>

</li>
</ul>
</div>
</doc-view>
