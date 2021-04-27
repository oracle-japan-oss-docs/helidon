<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3Dm1ZF" title="原文 : Helidon MicroProfile">Helidon MicroProfile</span></dt>
<dd slot="desc"><p><span class="merged" id="all.tOpsq" title="原文 : Complete these tasks to get started with your MicroProfile application.">MicroProfileアプリケーションを開始するには、次のタスクを実行します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_getting_started_with_helidon_microprofile"><span class="merged" id="all.23jWDl" title="原文 : Getting Started with Helidon MicroProfile">Helidon MicroProfileの開始</span></h2>
<div class="section">
<p><span class="merged" id="all.2OCfyz.spl1" title="原文 : Helidon provides a MicroProfile server implementation (io.helidon.microprofile.server) that encapsulates the Helidon WebServer.">Helidonは、Helidon WebServerをカプセル化するMicroProfileサーバー実装(<code>io.helidon.microprofile.server</code>)を提供します。</span> <span class="merged" id="all.2OCfyz.spl2" title="原文 : You can either instantiate the server directly as is done in the Helidon MP Quickstart example or use its built-in main as shown below."><router-link @click.native="this.scrollFix('#guides/03_quickstart-mp.adoc')" to="#guides/03_quickstart-mp.adoc">「Helidon MPクイックスタートの例」</router-link>の場合と同様にサーバーを直接インスタンス化するか、次に示すように組込み<code>main</code>を使用できます。</span> </p>


<h3 id="_maven_coordinates"><span class="merged" id="all.317oeS.3" title="原文 : Maven Coordinates">Maven連携</span></h3>
<div class="section">
<p><span class="merged" id="all.3Y1dJo.3.spl1" title="原文 : The Managing Dependencies page describes how you should declare dependency management for Helidon applications."><router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>ページでは、Helidonアプリケーションの依存性管理を宣言する方法について説明します。</span> <span class="merged" id="all.3Y1dJo.3.spl2" title="原文 : Then declare the following dependency in your project:">次に、プロジェクトで次の依存性を宣言します:</span> </p>

<markup
lang="xml"
title="完全なMicroProfileのMaven依存性"
>&lt;dependency&gt;
  &lt;groupId&gt;io.helidon.microprofile.bundles&lt;/groupId&gt;
  &lt;artifactId&gt;helidon-microprofile&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.A9eq6.spl1" title="原文 : The above dependency adds all the features available in MicroProfile.">前述の依存関係により、MicroProfileで使用可能なすべての機能が追加されます。</span> <span class="merged" id="all.A9eq6.spl2" title="原文 : If you want to start with a smaller core set of features then you can use the core bundle instead.">より小さいコア機能セットで開始する場合は、かわりに<code>core</code>バンドルを使用できます。</span> <span class="merged" id="all.A9eq6.spl3" title="原文 : This bundle includes the base feature in MicroProfile (such as JAX-RS, CDI, JSON-P/B, and Config) and leaves out some of the additional features such as Metrics and Tracing.">このバンドルには、MicroProfileの基本機能(JAX-RS、CDI、JSON-P/B、Configなど)が含まれ、メトリックやトレースなどの一部の追加機能は含まれません。</span> <span class="merged" id="all.A9eq6.spl4" title="原文 : You can add those dependencies individually if you choose.">必要に応じて、これらの依存関係を個別に追加できます。</span> </p>

<markup
lang="xml"
title="MicroProfileのコア機能のみに対するMavenの依存性"
>&lt;dependency&gt;
  &lt;groupId&gt;io.helidon.microprofile.bundles&lt;/groupId&gt;
  &lt;artifactId&gt;helidon-microprofile-core&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h3 id="_project_files"><span class="merged" id="all.1gvjeA"  title="原文:: Project files">プロジェクト・ファイル</span></h3>
<div class="section">
<p><span class="merged" id="all.369E4x" title="原文 : Create a JAX-RS Resource class with at least one resource method.">少なくとも1つのリソース・メソッドを使用してJAX-RSリソース・クラスを作成します。</span></p>

<markup
lang="java"
title="JAX-RSリソース・クラスのサンプル"
>@Path("/")
@RequestScoped
public class HelloWorldResource {
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String message() {
        return "Hello World";
    }
}</markup>

<p><span class="merged" id="all.1Mcok6" title="原文 : And create a JAX-RS application.">JAX-RSアプリケーションを作成します。</span></p>

<markup
lang="java"
title="サンプルJAX-RSアプリケーション"
>@ApplicationScoped
@ApplicationPath("/")
public class HelloWorldApplication extends Application {
    @Override
    public Set&lt;Class&lt;?&gt;&gt; getClasses() {
        return Set.of(
                HelloWorldResource.class
        );
    }
}</markup>

<p><span class="merged" id="all.41Vk18" title="原文 : Add beans.xml in src/main/resources/META-INF so the CDI implementation can pick up your classes.">CDI実装がクラスを取得できるように、<code>src/main/resources/META-INF</code>に<code>beans.xml</code>を追加します。</span></p>

<markup
lang="xml"
title="beans.xml"
>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;beans/&gt;</markup>

<p><span class="merged" id="all.Tjaqv" title="原文 : As a last step, add a main method to your application (or a dedicated Main class) to start everything up.">最後のステップとして、アプリケーション(または専用のMainクラス)にmainメソッドを追加して、すべてを起動します。</span></p>

<markup
lang="java"
title="サンプルJAX-RSアプリケーション"
>public static void main(String[] args) {
    io.helidon.microprofile.server.Main.main(args);
}</markup>

<p><span class="merged" id="all.DTySS.spl1" title="原文 : Run the main class.">mainクラスを実行します。</span> <span class="merged" id="all.DTySS.spl2" title="原文 : The server will start on port 7001 and serve your resources.">サーバーはポート7001で起動し、リソースを提供します。</span> </p>

</div>

<h3 id="_adding_jandex"><span class="merged" id="all.3oFwaS" title="原文 : Adding Jandex">Jandexの追加</span></h3>
<div class="section">
<p><span class="merged" id="all.1w25im" title="原文 : Jandex is an indexing tool for Weld (the CDI implementation used by Helidon) that helps speed up the boot time of an application.">Jandexは、Weld (Helidonで使用されるCDI実装)用の索引付けツールで、アプリケーションの起動時間の短縮に役立ちます。</span></p>

<p><span class="merged" id="all.449SpO" title="原文 : To use Jandex, configure a Maven plugin that adds the index to your JAR file and a dependency on Jandex.">Jandexを使用するには、JARファイルに索引を追加するMavenプラグインとJandexへの依存関係を構成します。</span></p>

<markup
lang="xml"
title="jandex依存関係"
>&lt;dependency&gt;
    &lt;groupId&gt;org.jboss&lt;/groupId&gt;
    &lt;artifactId&gt;jandex&lt;/artifactId&gt;
    &lt;version&gt;2.0.4.Final&lt;/version&gt;
&lt;/dependency&gt;</markup>

<markup
lang="xml"
title="jandexプラグイン構成"
>&lt;build&gt;
    &lt;plugins&gt;
        &lt;plugin&gt;
            &lt;groupId&gt;org.jboss.jandex&lt;/groupId&gt;
            &lt;artifactId&gt;jandex-maven-plugin&lt;/artifactId&gt;
            &lt;version&gt;1.0.5&lt;/version&gt;
            &lt;executions&gt;
                &lt;execution&gt;
                    &lt;id&gt;make-index&lt;/id&gt;
                    &lt;goals&gt;
                        &lt;goal&gt;jandex&lt;/goal&gt;
                    &lt;/goals&gt;
                    &lt;phase&gt;process-classes&lt;/phase&gt;
                &lt;/execution&gt;
            &lt;/executions&gt;
        &lt;/plugin&gt;
    &lt;/plugins&gt;
&lt;/build&gt;</markup>

</div>
</div>
</doc-view>
