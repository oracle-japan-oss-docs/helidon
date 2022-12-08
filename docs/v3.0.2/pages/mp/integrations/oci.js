<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.13"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.11" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.10" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.8" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.9" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1eCH3t.3" title="原文 : References"><router-link @click.native="this.scrollFix('#_references')" to="#_references">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.11"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.1bT6sv" title="原文 : Helidon MP OCI Integration provides easy access to Oracle Cloud Infrastructure using the OCI Java SDK.">Helidon MP OCI統合により、OCI Java SDKを使用してOracle Cloud Infrastructureに簡単にアクセスできます。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3uxJLt.spl1" title="原文 : OCI SDK uses JAX-RS Client 2.1.6 (javax package names), which makes it incompatible with Helidon 3 applications and any application that uses JAX-RS 3 (jakarta package naming).">OCI SDKは、JAX-RS Client 2.1.6 (javaxパッケージ名)を使用します。これにより、Helidon 3アプリケーションおよびJAX-RS 3 (jakartaパッケージ・ネーミング)を使用するアプリケーションと互換性がありません。</span> <span class="merged" id="all.3uxJLt.spl2" title="原文 : See Resolving compatibility issue with OCI SDK for detailed information on how to work around this issue.">この問題に対処する方法の詳細は、<router-link @click.native="this.scrollFix('#oci-compatibility')" to="#oci-compatibility">「OCI SDKとの互換性の問題の解決」</router-link>を参照してください。</span> </p>
</div>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.11"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.1ZDJPQ" title="原文 : To enable OCI Integration add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">OCI統合を有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
     &lt;groupId&gt;io.helidon.integrations.oci.sdk&lt;/groupId&gt;
     &lt;artifactId&gt;helidon-integrations-oci-sdk-cdi&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.8"  title="原文:: Usage">使用方法</span></h2>
<div class="section">
<p><span class="merged" id="all.13VxD4" title="原文 : When added to your application Helidon OCI SDK CDI portable extension provides support for injecting Oracle Cloud Infrastructure SDK Clients in your Helidon MicroProfile application.">アプリケーションHelidon OCI SDK <a href="https://jakarta.ee/specifications/cdi/3.0/jakarta-cdi-spec-3.0.html#spi" target="_blank">「CDIポータブル拡張機能」</a>に追加すると、Helidon MicroProfileアプリケーションに<a href="https://docs.cloud.oracle.com/iaas/Content/API/SDKDocs/javasdk.htm" target="_blank">「Oracle Cloud Infrastructure SDKクライアント」</a>をインジェクトできます。</span></p>

<p><span class="merged" id="all.4GYC8L" title="原文 : The extension also handles authenticating with OCI by automatically picking up OCI credentials from your environment.">拡張機能では、環境からOCI資格証明を自動的に取得することで、OCIでの認証も処理されます。</span></p>


<h3 id="_configuring_the_helidon_oci_sdk_extension"><span class="merged" id="all.1Svu7H" title="原文 : Configuring the Helidon OCI SDK Extension">Helidon OCI SDK拡張の構成</span></h3>
<div class="section">
<p><span class="merged" id="all.3QKS8F.spl1" title="原文 : When you inject an OCI SDK Client object, the Helidon OCI SDK extension configures and constructs the object for you.">OCI SDKクライアント・オブジェクトをインジェクトすると、Helidon OCI SDK拡張によってオブジェクトが構成および構築されます。</span> <span class="merged" id="all.3QKS8F.spl2" title="原文 : The configuration primarily consists of initializing an OCI AuthenticationDetailsProvider.">構成は、主にOCI <code>AuthenticationDetailsProvider</code>の初期化で構成されます。</span> <span class="merged" id="all.3QKS8F.spl3" title="原文 : By default, the extension will examine your environment and select the best AuthenticationDetailsProvider and configure it for you.">デフォルトでは、拡張によって環境が確認され、最適な<code>AuthenticationDetailsProvider</code>が選択されて構成されます。</span> </p>

<p><span class="merged" id="all.zCZ1n.spl1" title="原文 : This means if your environment is already set up to work with the OCI SDK or the OCI command line, then it is very likely you do not need to do any additional configuration of the extension.">つまり、OCI SDKまたはOCIコマンドラインで動作するように環境がすでに設定されている場合、拡張の追加構成を行う必要はありません。</span> <span class="merged" id="all.zCZ1n.spl2" title="原文 : Just add it as a dependency, and it will self-configure.">依存関係として追加するだけで、自動的に構成されます。</span> </p>

<p><span class="merged" id="all.6vCWw.spl1" title="原文 : If for some reason you require full control over the OCI configuration you have that as well.">なんらかの理由でOCI構成を完全に制御する必要がある場合は、それも必要です。</span> <span class="merged" id="all.6vCWw.spl2" title="原文 : For more information concerning the extension and its configuration and authentication options see the OciExtension javadocs.">拡張およびその構成および認証オプションの詳細は、<a href="./apidocs/io.helidon.integrations.oci.sdk.cdi/io/helidon/integrations/oci/sdk/cdi/OciExtension.html" target="_blank">OciExtension</a> javadocを参照してください。</span> <span class="merged" id="all.6vCWw.spl3" title="原文 : In particular the oci.auth-strategies property lets you control which AuthenticationDetailsProvider will be used.">特に、<code>oci.auth-strategies</code>プロパティを使用すると、使用する<code>AuthenticationDetailsProvider</code>を制御できます。</span> </p>

</div>


<h3 id="_accessing_oci_services"><span class="merged" id="all.3VMCIM" title="原文 : Accessing OCI Services">OCIサービスへのアクセス</span></h3>
<div class="section">
<p><span class="merged" id="all.3ljhd0.spl1" title="原文 : Since the Helidon OCI SDK extension supports injecting any OCI client from the OCI SDK, you can use it to access any OCI service supported by the OCI SDK.">Helidon OCI SDK拡張ではOCI SDKからOCIクライアントをインジェクトできるため、OCI SDKでサポートされている任意のOCIサービスにアクセスできます。</span> <span class="merged" id="all.3ljhd0.spl2" title="原文 : In addition to adding the Helidon OCI SDK Extension dependency (as described above) you will need to add dependencies for the specific ODI SDK clients you will use.">Helidon OCI SDK Extension依存関係(前述)の追加に加えて、使用する特定のODI SDKクライアントの依存関係を追加する必要があります。</span> </p>

<p><span class="merged" id="all.QS7ks.spl1" title="原文 : You will also need to configure your environment to authenticate with OCI.">また、OCIで認証するように環境を構成する必要があります。</span> <span class="merged" id="all.QS7ks.spl2" title="原文 : It is recommended that you do this first, and verify your configuration by using the OCI CLI to access the service.">最初にこれを実行し、<a href="https://docs.cloud.oracle.com/iaas/Content/API/SDKDocs/javasdk.htm" target="_blank">OCI CLI</a>を使用してサービスにアクセスすることにより構成を確認することをお薦めします。</span> </p>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.9"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.2Vpfw8" title="原文 : This example describes how to use Helidon OCI SDK Extension to access OCI Object Storage.">この例では、Helidon OCI SDK Extensionを使用してOCI Object Storageにアクセスする方法について説明します。</span></p>

<p><span class="merged" id="all.2C3iqM" title="原文 : As mentioned above in , you need to add a dependency on the OCI SDK Object Storage API:">前述の<router-link @click.native="this.scrollFix('#_accessing_oci_services')" to="#_accessing_oci_services"></router-link>に示すように、OCI SDK Object Storage APIへの依存関係を追加する必要があります:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;com.oracle.oci.sdk&lt;/groupId&gt;
    &lt;artifactId&gt;oci-java-sdk-objectstorage&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>


<h3 id="_injecting_an_object_storage_client"><span class="merged" id="all.w46lx" title="原文 : Injecting an Object Storage Client">オブジェクト・ストレージ・クライアントのインジェクト</span></h3>
<div class="section">
<p><span class="merged" id="all.opIlu" title="原文 : Now you can inject OCI SDK Clients.">OCI SDKクライアントをインジェクトできるようになりました。</span></p>

<markup
lang="java"
title="Field-injection example"
>@Inject
private ObjectStorage client;</markup>

<markup
lang="java"
title="Constructor-injection example"
>public class MyClass {

    private final ObjectStorage client;

    @Inject
    public YourConstructor(@Named("orders") ObjectStorage client) {
        this.client = client;
    }
}</markup>

<p><span class="merged" id="all.2GUFaH" title="原文 : The extension implements this injection point by creating an Object Storage client object in the singleton scope.">拡張機能は、<a href="https://jakarta.ee/specifications/dependency-injection/2.0/apidocs/jakarta/inject/Singleton.html" target="_blank">「シングルトン・スコープ」</a>でオブジェクト・ストレージ・クライアント・オブジェクトを作成することで、このインジェクション・ポイントを実装します。</span></p>

</div>


<h3 id="_using_the_object_storage_client"><span class="merged" id="all.37jrZr" title="原文 : Using the Object Storage client">オブジェクト・ストレージ・クライアントの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.1J45Bt" title="原文 : Once you have injected an ObjectStorage client you can use it as described in:">ObjectStorageクライアントをインジェクトしたら、次のようにそれを使用できます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.9DYAv" title="原文 : OCI SDK Object Storage Javadocs"><a href="https://docs.oracle.com/en-us/iaas/tools/java/latest/com/oracle/bmc/objectstorage/package-summary.html" target="_blank">OCI SDKオブジェクト・ストレージのJavadoc</a></span></p>

</li>
<li>
<p><span class="merged" id="all.3szBZK" title="原文 : OCI Object Storage Overview"><a href="https://docs.cloud.oracle.com/iaas/Content/Object/Concepts/objectstorageoverview.htm" target="_blank">OCIオブジェクト・ストレージの概要</a></span></p>

</li>
</ul>

</div>


<h3 id="_resolving_javax_and_jakarta_package_compatibility_issue_with_oci_sdk"><span class="merged" id="all.387qjb" title="原文 : Resolving javax and jakarta package compatibility issue with OCI SDK">OCI SDKとの共存およびJakartaパッケージの互換性の問題の解決</span></h3>
<div class="section">
<p id="oci-compatibility"><span class="merged" id="all.nu264.spl1" title="原文 : With Helidon 3.x, we are now implementing the MicroProfile 5.0 Platform and selected Jakarta EE 9.1 specifications.">Helidon 3.xでは、MicroProfile 5.0プラットフォームを実装し、Jakarta EE 9.1仕様を選択しています。</span> <span class="merged" id="all.nu264.spl2" title="原文 : We are also going away from javax.* packages and fully embracing jakarta.* package.">また、javax.*パッケージから離れて、jakarta.*パッケージを完全に取り込んでいます。</span> </p>

<p><span class="merged" id="all.49GxTq.spl1" title="原文 : However, the current release 2.37.0 of OCI Java SDK is still using javax.* packages which created compatibility issues e.g. Helidon 3 uses JAX-RS 3.0.0 (jakarta package names) and the corresponding Jersey implementation.">ただし、OCI Java SDKの現在のリリース2.37.0では、引き続きjavax.*パッケージが引き続き使用されており、互換性の問題があります。たとえば、Helidon 3はJAX-RS 3.0.0(jakartaパッケージ名)とそれに対応するJersey実装が使用されます。</span> <span class="merged" id="all.49GxTq.spl2" title="原文 : OCI SDK 2.37.0 uses JAX-RS Client 2.1.6 (javax package names) and the corresponding Jersey implementation.">OCI SDK 2.37.0では、JAX-RS Client 2.1.6 (内部パッケージ名)および対応するJersey実装を使用します。</span> <span class="merged" id="all.49GxTq.spl3" title="原文 : Therefore, the OCI SDK is incompatible with Helidon 3 applications and any application that uses JAX-RS 3.">したがって、OCI SDKは、Helidon 3アプリケーションおよびJAX-RS 3を使用するアプリケーションとの互換性がありません。</span> <span class="merged" id="all.49GxTq.spl4" title="原文 : We have filed an issue with OCI SDK team, see https://github.com/oracle/oci-java-sdk/issues/371 for details on this.">OCI SDKチームに問題があります。詳細は、<a class="bare" href="https://github.com/oracle/oci-java-sdk/issues/371" target="_blank">https://github.com/oracle/oci-java-sdk/issues/371</a>を参照してください。</span> </p>

<p><span class="merged" id="all.4Wu3Ll" title="原文 : OCI SDK team has provided us with shaded jar as workaround as mentioned in the issue.">OCI SDKチームは、この問題で説明した回避策として、<code>shaded</code> jarを提供しました。</span></p>

<p><span class="merged" id="all.2xtivY" title="原文 : Now, when you want to use modules from OCI SDK in your application, instead of using individual modules as defined in our OCI integration documentation, you need to use full shaded jar.">OCI SDKのモジュールをアプリケーションで使用する場合は、OCI統合ドキュメントで定義されている個々のモジュールを使用するかわりに、<code>full shaded</code> jarを使用する必要があります。</span></p>

<markup
lang="xml"

>    &lt;dependency&gt;
      &lt;groupId&gt;com.oracle.oci.sdk&lt;/groupId&gt;
      &lt;artifactId&gt;oci-java-sdk-shaded-full&lt;/artifactId&gt;
      &lt;version&gt;2.37.0&lt;/version&gt;
    &lt;/dependency&gt;</markup>

<p><span class="merged" id="all.2OJ1fG" title="原文 : Since the full shaded jar doesn&rsquo;t bring in its transitive dependencies, you will also need to define following dependencies in your application so that it works at runtime."><code>full shaded</code> jarは推移的な依存関係をもたらさないため、実行時に機能するように、アプリケーションで次の依存関係を定義する必要もあります。</span></p>

<markup
lang="xml"

>    &lt;dependency&gt;
        &lt;groupId&gt;org.bouncycastle&lt;/groupId&gt;
        &lt;artifactId&gt;bcpkix-jdk15on&lt;/artifactId&gt;
        &lt;version&gt;1.70&lt;/version&gt;
        &lt;scope&gt;runtime&lt;/scope&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.slf4j&lt;/groupId&gt;
        &lt;artifactId&gt;slf4j-jdk14&lt;/artifactId&gt;
        &lt;version&gt;1.7.32&lt;/version&gt;
        &lt;scope&gt;runtime&lt;/scope&gt;
    &lt;/dependency&gt;</markup>

<p><span class="merged" id="all.3APv2Y" title="原文 : Please refer to our OCI SDK Usage Examples to see this in action.">これについては、<a href="https://github.com/oracle/helidon/tree/master/examples/integrations/oci" target="_blank">「OCI SDKの使用例」</a>を参照してください。</span></p>

</div>

</div>


<h2 id="_references"><span class="merged" id="all.3oSja0.5"  title="原文:: References">参照</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.RiUY8" title="原文 : OciExtension Javadocs"><a href="./apidocs/io.helidon.integrations.oci.sdk.cdi/io/helidon/integrations/oci/sdk/cdi/OciExtension.html" target="_blank">OciExtension</a> Javadocs</span></p>

</li>
<li>
<p><span class="merged" id="all.2PSMXR" title="原文 : OCI SDK Usage Examples"><a href="https://github.com/oracle/helidon/tree/master/examples/integrations/oci" target="_blank">OCI SDKの使用例</a></span></p>

</li>
</ul>

</div>

</doc-view>
