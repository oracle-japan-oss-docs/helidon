<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.37"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.36" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.29" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.25" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.23" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.14" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.17" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.52"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.2hHrUC" title="原文 : Helidon provides built-in test support for CDI testing in JUnit5.">Helidonには、JUnit5でのCDIテストの組込みテスト・サポートが用意されています。</span></p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.33"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.3IEg1V" title="原文 : To enable Testing with JUnit add the following dependency to your project’s pom.xml (see Managing Dependencies).">JUnitを使用してテストを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.testing&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-testing-junit5&lt;/artifactId&gt;
    &lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.31"  title="原文:: Usage">使用</span></h2>
<div class="section">
<p><span class="merged" id="all.3jT50h.spl1" title="原文 : A test can be annotated with io.helidon.microprofile.testing.junit5.HelidonTest annotation to mark it as a CDI test.">テストに<code>io.helidon.microprofile.testing.junit5.HelidonTest</code>注釈を付けてCDIテストとしてマークできます。</span> <span class="merged" id="all.3jT50h.spl2" title="原文 : This annotation will start the CDI container before any test method is invoked, and stop it after the last method is invoked.">この注釈は、テスト・メソッドが呼び出される前にCDIコンテナを起動し、最後のメソッドが呼び出された後に停止します。</span> <span class="merged" id="all.3jT50h.spl3" title="原文 : This annotation also enables injection into the test class itself.">この注釈は、テスト・クラス自体へのインジェクションも可能にします。</span> </p>


<h3 id="_usage_per_method_cdi_container"><span class="merged" id="all.1pgDVX.1" title="原文 : Usage - per method CDI container">使用 - CDIコンテナごと</span></h3>
<div class="section">
<p><span class="merged" id="all.38maI9.1" title="原文 : A test can be annotated as follows:">テストには次のように注釈を付けることができます:</span></p>

<p><span class="merged" id="all.2qmZmL.2"  title="原文: @HelidonTest(resetPerTest = true)"><code>@HelidonTest(resetPerTest = true)</code></span></p>

<p><span class="merged" id="all.1jWtRi.1" title="原文 : This will change the behavior as follows:">これにより、動作が次のように変更されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.6SJbX.1" title="原文 : A new CDI container is created for each test method invocation">テスト・メソッド呼出しごとに新しいCDIコンテナが作成されます</span></p>

</li>
<li>
<p><span class="merged" id="all.f3sTM.1" title="原文 : annotations to add config, beans and extension can be added for each method in addition to the class">クラスに加えて、各メソッドに構成、Beanおよび拡張機能を追加するための注釈を追加できます</span></p>

</li>
<li>
<p><span class="merged" id="all.2cOjoN.1" title="原文 : you cannot inject fields or constructor parameters of the test class itself (as a single instance is shared by more containers)">テスト・クラス自体のフィールドまたはコンストラクタ・パラメータはインジェクトできません(単一インスタンスが複数のコンテナで共有されているため)</span></p>

</li>
<li>
<p><span class="merged" id="all.4CZ3jD" title="原文 : you can add SeContainer as a method parameter of any test method and you will get the current container">任意のテスト・メソッドのメソッド・パラメータとして<code>SeContainer</code>を追加でき、現在のコンテナを取得できます</span></p>

</li>
</ul>

</div>


<h3 id="_usage_configuration"><span class="merged" id="all.mK8xd.1" title="原文 : Usage - configuration">使用 - 構成</span></h3>
<div class="section">
<p><span class="merged" id="all.2wKZm2.1.spl1" title="原文 : In addition to the @AddConfig annotation, you can also use @Configuration to configure additional classpath properties config sources using configSources, and to mark that a custom configuration is desired."><code>@AddConfig</code>注釈に加えて、<code>@Configuration</code>を使用して、<code>configSources</code>で追加のクラスパス・プロパティ構成ソースを構成し、カスタム構成が必要であることをマークすることもできます。</span> <span class="merged" id="all.2wKZm2.1.spl2" title="原文 : If @Configuration(useExisting=true), the existing (or default) MicroProfile configuration would be used."><code>@Configuration(useExisting=true)</code>の場合、既存の(またはデフォルト)MicroProfile構成が使用されます。</span> <span class="merged" id="all.2wKZm2.1.spl3" title="原文 : In this case it is important to set property mp.initializer.allow=true in order CDI container to start, when used with @HelidonTest.">この場合、<code>@HelidonTest</code>とともに使用する場合は、CDIコンテナを起動するためにプロパティ<code>mp.initializer.allow=true</code>を設定することが重要です。</span> <span class="merged" id="all.2wKZm2.1.spl4" title="原文 : You can set up config in @BeforeAll method and register it with ConfigProviderResolver using MP Config APIs, and declare @Configuration(useExisting=true)."><code>@BeforeAll</code>メソッドで構成を設定し、MP構成APIを使用して<code>ConfigProviderResolver</code>に登録し、<code>@Configuration(useExisting=true)</code>を宣言できます。</span> <span class="merged" id="all.2wKZm2.1.spl5" title="原文 : Note that this is not compatible with repeatable tests that use method sources that access CDI, as we must delay the CDI startup to the test class instantiation (which is too late, as the method sources are already invoked by this time).">CDIにアクセスするメソッド・ソースを使用する繰返し可能なテストとは互換性がないことに注意してください。CDIの起動をテスト・クラスのインスタンス化まで遅延させる必要があります(メソッド・ソースはこの時点ですでに呼び出されているため、遅すぎます)。</span> </p>

<p><span class="merged" id="all.2Vph6V.1" title="原文 : If you want to use method sources that use CDI with repeatable tests, please do not use @Configuration(useExisting=true)"><strong>CDIを繰返し可能なテストで使用するメソッド・ソースを使用する場合は、<code>@Configuration(useExisting=true)</code>を使用しないでください</strong></span></p>

</div>


<h3 id="_usage_added_parameters_and_injection_types"><span class="merged" id="all.20MrbS" title="原文 : Usage - added parameters and injection types">使用 - 追加されたパラメータとインジェクション・タイプ</span></h3>
<div class="section">
<p><span class="merged" id="all.3qRbga" title="原文 : The following types are available for injection (when a single CDI container is used per test class):">インジェクションには次のタイプを使用できます(テスト・クラスごとに単一のCDIコンテナが使用される場合):</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1wljIK" title="原文 : WebTarget - a JAX-RS client’s target configured for the current hostname and port when helidon-micorprofile-server is on the classpath"><code>WebTarget</code> - <code>helidon-micorprofile-server</code>がクラスパスにある場合は、現在のホスト名とポートに構成されているJAX-RSクライアント・ターゲット</span></p>

</li>
</ul>

<p><span class="merged" id="all.1GbfJN" title="原文 : The following types are available as method parameters (in any type of Helidon tests):">次のタイプをメソッド・パラメータとして使用できます(どのタイプのHelidonテストでも):</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1wljIK.1" title="原文 : WebTarget - a JAX-RS client’s target configured for the current hostname and port when helidon-micorprofile-server is on the classpath"><code>WebTarget</code> - <code>helidon-micorprofile-server</code>がクラスパスにある場合は、現在のホスト名とポートに構成されているJAX-RSクライアント・ターゲット</span></p>

</li>
<li>
<p><span class="merged" id="all.3DBsob" title="原文 : SeContainer - the current container instance"><code>SeContainer</code> - 現在のコンテナ・インスタンス</span></p>

</li>
</ul>

</div>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.15"  title="原文:: API">API</span></h2>
<div class="section">
<p><span class="merged" id="all.39oM3Q.1.spl1" title="原文 : The annotations described in this section are inherited (for the non-repeatable ones), and additive (for repeatable).">この項で説明する注釈は、継承され(繰返し不可能な注釈の場合)、加算されます(繰返し可能な注釈の場合)。</span> <span class="merged" id="all.39oM3Q.1.spl2" title="原文 : So if you declare @DisableDiscovery on abstract class, all implementations will have discovery disabled, unless you annotate the implementation class with @DisableDiscovery(false).">そのため、抽象クラスで<code>@DisableDiscovery</code>を宣言すると、<code>@DisableDiscovery(false)</code>で実装クラスに注釈を付けないかぎり、すべての実装で検出が無効になります。</span> <span class="merged" id="all.39oM3Q.1.spl3" title="原文 : If you declare @AddBean on both abstract class and implementation class, both beans will be added.">抽象クラスと実装クラスの両方で<code>@AddBean</code>を宣言すると、両方のBeanが追加されます。</span> </p>

<p><span class="merged" id="all.aLTTa.1" title="原文 : In addition to this simplification, the following annotations are supported:">この簡略化に加えて、次の注釈がサポートされています:</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1mFIlG.7"  title="原文:: Annotation">注釈</span></th>
<th><span class="merged" id="all.JUOSC.32"  title="原文:: Usage">使用</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.21PaTQ"  title="原文: @io.helidon.microprofile.testing.junit5.AddBean"><code>@io.helidon.microprofile.testing.junit5.AddBean</code></span></td>
<td class=""><span class="merged" id="all.3fWJ3Z.1" title="原文 : Used to add one or more beans to the container (if not part of a bean archive, or when discovery is disabled)">1つ以上のBeanをコンテナに追加するために使用します(beanアーカイブの一部でない場合、または検出が無効である場合)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3WYA7D"  title="原文: @io.helidon.microprofile.testing.junit5.AddExtension"><code>@io.helidon.microprofile.testing.junit5.AddExtension</code></span></td>
<td class=""><span class="merged" id="all.3rM4Fp.1" title="原文 : Used to add one or more CDI extensions to the container (if not added through service loader, or when discovery is disabled)">1つ以上のCDI拡張をコンテナに追加するために使用します(サービス・ローダーを介して追加しない場合、または検出が無効の場合)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.H4VDU"  title="原文: @io.helidon.microprofile.testing.junit5.AddConfig"><code>@io.helidon.microprofile.testing.junit5.AddConfig</code></span></td>
<td class=""><span class="merged" id="all.1yNFp.1" title="原文 : Used to add one or more configuration properties to MicroProfile config without the need of creating a microprofile-config.properties file"><code>microprofile-config.properties</code>ファイルを作成せずに1つ以上の構成プロパティをMicroProfile構成に追加するために使用</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.RINzV" title="原文 : Used @io.helidon.microprofile.testing.junit5.DisableDiscovery">使用済<code>@io.helidon.microprofile.testing.junit5.DisableDiscovery</code></span></td>
<td class=""><span class="merged" id="all.1HASvN" title="原文 : to disable automated discovery of beans and extensions">Beanおよび拡張機能の自動検出を無効にします</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.RINzV.1" title="原文 : Used @io.helidon.microprofile.testing.junit5.DisableDiscovery">使用済<code>@io.helidon.microprofile.testing.junit5.DisableDiscovery</code></span></td>
<td class=""><span class="merged" id="all.1HASvN.1" title="原文 : to disable automated discovery of beans and extensions">Beanおよび拡張機能の自動検出を無効にします</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2f3KY1.1" title="原文 : Used @io.helidon.microprofile.testing.junit5.AddJaxRs">使用済<code>@io.helidon.microprofile.testing.junit5.AddJaxRs</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.RGjCB.1.spl1" title="原文 : add JaxRs support to the test class.">テスト・クラスにJaxRsサポートを追加します。</span> <span class="merged" id="all.RGjCB.1.spl2" title="原文 : Only used with @DisableDiscovery annotation, otherwise an exception will be thrown."><code>@DisableDiscovery</code>注釈でのみ使用され、それ以外の場合は例外がスローされます。</span> <span class="merged" id="all.RGjCB.1.spl3" title="原文 : Automatically adds the following Beans and Extensions to the test class:">次のBeanおよび拡張機能をテスト・クラスに自動的に追加します:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4Aa47t.1"  title="原文: ServerCdiExtension"><code>ServerCdiExtension</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2hHZh0.1"  title="原文: JaxRsCdiExtension"><code>JaxRsCdiExtension</code></span></p>

</li>
<li>
<p><span class="merged" id="all.13Htqz.1"  title="原文: CdiComponentProvider"><code>CdiComponentProvider</code></span></p>

</li>
<li>
<p><span class="merged" id="all.3eavTo.1"  title="原文: org.glassfish.jersey.ext.cdi1x.internal.ProcessAllAnnotatedTypes"><code>org.glassfish.jersey.ext.cdi1x.internal.ProcessAllAnnotatedTypes</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2iW0wP.1"  title="原文: org.glassfish.jersey.weld.se.WeldRequestScope"><code>org.glassfish.jersey.weld.se.WeldRequestScope</code></span></p>

</li>
</ul>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.25"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.1gQogd.1.spl1" title="原文 : In the current example, Helidon container will be launched prior test.">現在の例では、Helidonコンテナはテストの前に起動されます。</span> <span class="merged" id="all.1gQogd.1.spl2" title="原文 : The Bean Discovery will be disabled."><em>「Beanの検出」</em>は無効になります。</span> <span class="merged" id="all.1gQogd.1.spl3" title="原文 : MyBean will be added to the test, so that it can be injected."><em>MyBean</em>がテストに追加され、インジェクトできるようになります。</span> <span class="merged" id="all.1gQogd.1.spl4" title="原文 : ConfigCdiExtension will be enabled for this test.">このテストでは、<em>ConfigCdiExtension</em>が有効になります。</span> <span class="merged" id="all.1gQogd.1.spl5" title="原文 : And finally, a configuration property will be added using @AddConfig annotation.">最後に、<code>@AddConfig</code>注釈を使用して構成プロパティが追加されます。</span> </p>

<markup
lang="java"
title="Code sample"
>@HelidonTest    <span class="conum" data-value="1" />
@DisableDiscovery   <span class="conum" data-value="2" />
@AddBean(MyBean.class)  <span class="conum" data-value="3" />
@AddExtension(ConfigCdiExtension.class) <span class="conum" data-value="4" />
@AddConfig(key = "app.greeting", value = "TestHello")   <span class="conum" data-value="5" />
class TestExample {
    @Inject
    private MyBean myBean;  <span class="conum" data-value="6" />

    @Test
    void testGreeting() {   <span class="conum" data-value="7" />
        assertThat(myBean, notNullValue());
        assertThat(myBean.greeting(), is("TestHello"));
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3O6bJy.2" title="原文 : Start the Helidon container.">Helidonコンテナを起動します。</span></li>
<li data-value="2"><span class="merged" id="all.R0OzM.1" title="原文 : Set disabled Bean Discovery for the current test class.">現在のテスト・クラスの無効なBean検出を設定します。</span></li>
<li data-value="3"><span class="merged" id="all.2qHOC4.1" title="原文 : Add MyBean to current context."><code>MyBean</code>を現在のコンテキストに追加します。</span></li>
<li data-value="4"><span class="merged" id="all.1e0mSb.1" title="原文 : Add a configuration CDI extension to the current test.">現在のテストに構成CDI拡張を追加します。</span></li>
<li data-value="5"><span class="merged" id="all.1zkZgW.1" title="原文 : Add configuration properties.">構成プロパティを追加します。</span></li>
<li data-value="6"><span class="merged" id="all.3lTOmW.1" title="原文 : Inject MyBean as it is available in the CDI context."><code>MyBean</code>は、CDIコンテキストで使用可能なものとしてインジェクトします。</span></li>
<li data-value="7"><span class="merged" id="all.CY4ul.1" title="原文 : Run rests.">休憩を実行します。</span></li>
</ul>

<p><span class="merged" id="all.P7Vub.1" title="原文 : To test @RequestScoped bean with JaxRs support:">JaxRsサポートで<code>@RequestScoped</code>ビーンをテストするには:</span></p>

<markup
lang="java"
title="Test <code>RequestScoped</code> bean"
>@HelidonTest    <span class="conum" data-value="1" />
@DisableDiscovery <span class="conum" data-value="2" />

@AddJaxRs <span class="conum" data-value="3" />
@AddBean(TestReqScopeDisabledDiscovery.MyController.class)
public class TestReqScopeDisabledDiscovery {

    @Inject
    private WebTarget target;

    @Test
    void testGet() {
        assertEquals("Hallo!", target
                .path("/greeting")
                .request()
                .get(String.class));
    }

    @Path("/greeting")
    @RequestScoped  <span class="conum" data-value="4" />
    public static class MyController {
        @GET
        public Response get() {
            return Response.ok("Hallo!").build();
        }
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3O6bJy.3" title="原文 : Start the Helidon container.">Helidonコンテナを起動します。</span></li>
<li data-value="2"><span class="merged" id="all.1kS2Mh.1" title="原文 : Set disabled Bean discovery.">無効なBean検出を設定します。</span></li>
<li data-value="3"><span class="merged" id="all.4Pptlr.1" title="原文 : Add JaxRs support to the current test class.">現在のテスト・クラスにJaxRsサポートを追加します。</span></li>
<li data-value="4"><span class="merged" id="all.1aEdv9.1" title="原文 : Define a RequestScoped bean."><code>RequestScoped</code>ビーンを定義します。</span></li>
</ul>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.16"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.qQOiU" title="原文 : Official blog article about Helidon and JUnit usage"><a href="https://medium.com/helidon/testing-helidon-9df2ea14e22" target="_blank">HelidonおよびJUnitの使用方法に関する公式ブログ記事</a></span></p>

</li>
</ul>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.17"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1yTl5B.1" title="原文 : JUnit 5 User Guide"><a href="https://junit.org/junit5/docs/current/user-guide/" target="_blank">JUnit 5ユーザー・ガイド</a></span></p>

</li>
</ul>

</div>

</doc-view>
