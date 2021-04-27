<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.GtU0K" title="原文 : Testing with JUnit5">JUnit5でのテスト</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2hHrUC" title="原文 : Helidon provides built-in test support for CDI testing in JUnit5.">Helidonには、JUnit5でのCDIテストの組込みテスト・サポートが用意されています。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_dependency"><span class="merged" id="all.1l1QyT.3"  title="原文:: Dependency">依存性</span></h2>
<div class="section">
<markup
lang="xml"
title="Mavenの依存性"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.tests&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-tests-junit5&lt;/artifactId&gt;
    &lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_usage_default"><span class="merged" id="all.4Gs7wz" title="原文 : Usage - default">使用 - デフォルト</span></h2>
<div class="section">
<p><span class="merged" id="all.2YB9uq.spl1" title="原文 : A test can be annotated with io.helidon.microprofile.tests.junit5.HelidonTest annotation to mark it as a CDI test.">テストに<code>io.helidon.microprofile.tests.junit5.HelidonTest</code>注釈を付けてCDIテストとしてマークできます。</span> <span class="merged" id="all.2YB9uq.spl2" title="原文 : This annotation will start the CDI container before any test method is invoked, and stop it after the last method is invoked.">この注釈は、テスト・メソッドが呼び出される前にCDIコンテナを起動し、最後のメソッドが呼び出された後に停止します。</span> <span class="merged" id="all.2YB9uq.spl3" title="原文 : This annotation also enables injection into the test class itself.">この注釈は、テスト・クラス自体へのインジェクションも可能にします。</span> </p>

<p><span class="merged" id="all.39oM3Q.spl1" title="原文 : The annotations described in this section are inherited (for the non-repeatable ones), and additive (for repeatable).">この項で説明する注釈は、継承され(繰返し不可能な注釈の場合)、加算されます(繰返し可能な注釈の場合)。</span> <span class="merged" id="all.39oM3Q.spl2" title="原文 : So if you declare @DisableDiscovery on abstract class, all implementations will have discovery disabled, unless you annotate the implementation class with @DisableDiscovery(false).">そのため、抽象クラスで<code>@DisableDiscovery</code>を宣言すると、<code>@DisableDiscovery(false)</code>で実装クラスに注釈を付けないかぎり、すべての実装で検出が無効になります。</span> <span class="merged" id="all.39oM3Q.spl3" title="原文 : If you declare @AddBean on both abstract class and implementation class, both beans will be added.">抽象クラスと実装クラスの両方で<code>@AddBean</code>を宣言すると、両方のBeanが追加されます。</span> </p>

<p><span class="merged" id="all.aLTTa" title="原文 : In addition to this simplification, the following annotations are supported:">この簡略化に加えて、次の注釈がサポートされています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.smxtO" title="原文 : io.helidon.microprofile.tests.junit5.AddBean - to add one or more beans to the container (if not part of a bean archive, or when discovery is disabled)"><code>io.helidon.microprofile.tests.junit5.AddBean</code> - 1つ以上のbeanをコンテナに追加します(beanアーカイブに含まれていない場合、または検出が無効な場合)</span></p>

</li>
<li>
<p><span class="merged" id="all.1AO0Cu" title="原文 : io.helidon.microprofile.tests.junit5.AddExtension - to add one or more CDI extensions to the container (if not added through service loader, or when discovery is disabled)"><code>io.helidon.microprofile.tests.junit5.AddExtension</code> - コンテナにCDI拡張を追加します(サービス・ローダーを介して追加されていない場合、または検出が無効になっている場合)</span></p>

</li>
<li>
<p><span class="merged" id="all.2kRvPg" title="原文 : io.helidon.microprofile.tests.junit5.AddConfig - to add one or more configuration properties to MicroProfile config without the need of creating a microprofile-config.properties file"><code>io.helidon.microprofile.tests.junit5.AddConfig</code> - <code>microprofile-config.properties</code>ファイルを作成せずに、MicroProfile構成に1つ以上の構成プロパティを追加</span></p>

</li>
<li>
<p><span class="merged" id="all.RQsr" title="原文 : io.helidon.microprofile.tests.junit5.DisableDiscovery - to disable automated discovery of beans and extensions"><code>io.helidon.microprofile.tests.junit5.DisableDiscovery</code> - Beanおよび拡張機能の自動検出を無効にします</span></p>

</li>
</ul>
<markup
lang="java"
title="コード・サンプル"
>@HelidonTest
@DisableDiscovery
@AddBean(MyBean.class)
@AddExtension(ConfigCdiExtension.class)
@AddConfig(key = "app.greeting", value = "TestHello")
class TestNoDiscovery {
    @Inject
    private MyBean myBean;

    @Test
    void testGreeting() {
        assertThat(myBean, notNullValue());
        assertThat(myBean.greeting(), is("TestHello"));
    }
}</markup>

</div>

<h2 id="_usage_per_method_cdi_container"><span class="merged" id="all.1pgDVX" title="原文 : Usage - per method CDI container">使用 - CDIコンテナごと</span></h2>
<div class="section">
<p><span class="merged" id="all.38maI9" title="原文 : A test can be annotated as follows:">テストには次のように注釈を付けることができます:</span></p>

<p><span class="merged" id="all.2qmZmL"  title="原文: @HelidonTest(resetPerTest = true)"><code>@HelidonTest(resetPerTest = true)</code></span></p>

<p><span class="merged" id="all.1jWtRi" title="原文 : This will change the behavior as follows:">これにより、動作が次のように変更されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.6SJbX" title="原文 : A new CDI container is created for each test method invocation">テスト・メソッド呼出しごとに新しいCDIコンテナが作成されます</span></p>

</li>
<li>
<p><span class="merged" id="all.f3sTM" title="原文 : annotations to add config, beans and extension can be added for each method in addition to the class">クラスに加えて、各メソッドに構成、Beanおよび拡張機能を追加するための注釈を追加できます</span></p>

</li>
<li>
<p><span class="merged" id="all.2cOjoN" title="原文 : you cannot inject fields or constructor parameters of the test class itself (as a single instance is shared by more containers)">テスト・クラス自体のフィールドまたはコンストラクタ・パラメータはインジェクトできません(単一インスタンスが複数のコンテナで共有されているため)</span></p>

</li>
<li>
<p><span class="merged" id="all.4CZ3jD" title="原文 : you can add SeContainer as a method parameter of any test method and you will get the current container">任意のテスト・メソッドのメソッド・パラメータとして<code>SeContainer</code>を追加でき、現在のコンテナを取得できます</span></p>

</li>
</ul>
</div>

<h2 id="_usage_configuration"><span class="merged" id="all.mK8xd" title="原文 : Usage - configuration">使用 - 構成</span></h2>
<div class="section">
<p><span class="merged" id="all.2NYC94.spl1" title="原文 : In addition to the @AddConfig annotation, you can also use @Configuration to configure additional classpath properties config sources using configSources, and to mark that a custom configuration is desired."><code>@AddConfig</code>注釈に加えて、<code>@Configuration</code>を使用して、<code>configSources</code>で追加のクラスパス・プロパティ構成ソースを構成し、カスタム構成が必要であることをマークすることもできます。</span> <span class="merged" id="all.2NYC94.spl2" title="原文 : You can set up config in @BeforeAll method and register it with ConfigProviderResolver using MP Config APIs, and declare @Configuration(useExisting=true)."><code>@BeforeAll</code>メソッドで構成を設定し、MP構成APIを使用して<code>ConfigProviderResolver</code>に登録し、<code>@Configuration(useExisting=true)</code>を宣言できます。</span> <span class="merged" id="all.2NYC94.spl3" title="原文 : Note that this is not compatible with repeatable tests that use method sources that access CDI, as we must delay the CDI startup to the test class instantiation (which is too late, as the method sources are already invoked by this time).">CDIにアクセスするメソッド・ソースを使用する繰返し可能なテストとは互換性がないことに注意してください。CDIの起動をテスト・クラスのインスタンス化まで遅延させる必要があります(メソッド・ソースはこの時点ですでに呼び出されているため、遅すぎます)。</span> </p>

<p><span class="merged" id="all.2Vph6V" title="原文 : If you want to use method sources that use CDI with repeatable tests, please do not use @Configuration(useExisting=true)"><strong>CDIを繰返し可能なテストで使用するメソッド・ソースを使用する場合は、<code>@Configuration(useExisting=true)</code>を使用しないでください</strong></span></p>

</div>

<h2 id="_usage_added_parameters_and_injection_types"><span class="merged" id="all.20MrbS" title="原文 : Usage - added parameters and injection types">使用 - 追加されたパラメータとインジェクション・タイプ</span></h2>
<div class="section">
<p><span class="merged" id="all.3qRbga" title="原文 : The following types are available for injection (when a single CDI container is used per test class):">インジェクションには次のタイプを使用できます(テスト・クラスごとに単一のCDIコンテナが使用される場合):</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1wljIK" title="原文 : WebTarget - a JAX-RS client&rsquo;s target configured for the current hostname and port when helidon-micorprofile-server is on the classpath"><code>WebTarget</code> - <code>helidon-micorprofile-server</code>がクラスパスにある場合は、現在のホスト名とポートに構成されているJAX-RSクライアント・ターゲット</span></p>

</li>
</ul>
<p><span class="merged" id="all.1GbfJN" title="原文 : The following types are available as method parameters (in any type of Helidon tests):">次のタイプをメソッド・パラメータとして使用できます(どのタイプのHelidonテストでも):</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1wljIK.1" title="原文 : WebTarget - a JAX-RS client&rsquo;s target configured for the current hostname and port when helidon-micorprofile-server is on the classpath"><code>WebTarget</code> - <code>helidon-micorprofile-server</code>がクラスパスにある場合は、現在のホスト名とポートに構成されているJAX-RSクライアント・ターゲット</span></p>

</li>
<li>
<p><span class="merged" id="all.3DBsob" title="原文 : SeContainer - the current container instance"><code>SeContainer</code> - 現在のコンテナ・インスタンス</span></p>

</li>
</ul>
</div>
</doc-view>
