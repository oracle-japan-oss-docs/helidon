<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.52"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.50" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.32" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.34" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1eCH3t.6" title="原文 : References"><router-link @click.native="this.scrollFix('#_references')" to="#_references">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.66"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.1tOOSq" title="原文 : Helidon SE OCI Integration provides easy access to Oracle Cloud Infrastructure using the OCI Java SDK.">Helidon SE OCI Integrationでは、OCI Java SDKを使用してOracle Cloud Infrastructureに簡単にアクセスできます。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3uxJLt.1.spl1" title="原文 : OCI SDK uses JAX-RS Client 2.1.6 (javax package names), which makes it incompatible with Helidon 3 applications and any application that uses JAX-RS 3 (jakarta package naming).">OCI SDKは、JAX-RS Client 2.1.6 (javaxパッケージ名)を使用します。これにより、Helidon 3アプリケーションおよびJAX-RS 3 (jakartaパッケージ・ネーミング)を使用するアプリケーションと互換性がありません。</span> <span class="merged" id="all.3uxJLt.1.spl2" title="原文 : See Resolving compatibility issue with OCI SDK for detailed information on how to work around this issue.">この問題に対処する方法の詳細は、<router-link @click.native="this.scrollFix('#oci-compatibility')" to="#oci-compatibility">「OCI SDKとの互換性の問題の解決」</router-link>を参照してください。</span> </p>
</div>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.49"  title="原文:: Usage">使用方法</span></h2>
<div class="section">
<p><span class="merged" id="all.1waxL7.spl1" title="原文 : It is recommended that you use the OCI Java SDK directly, in particular the Async clients.">OCI Java SDK、特に非同期クライアントを直接使用することをお薦めします。</span> <span class="merged" id="all.1waxL7.spl2" title="原文 : All you need to do is configure and create an OCI SDK Client object.">OCI SDKクライアント・オブジェクトを構成および作成する必要があります。</span> <span class="merged" id="all.1waxL7.spl3" title="原文 : The configuration primarily consists of setting up authenticate with OCI.">構成は主に、OCIでの認証の設定で構成されます。</span> </p>


<h3 id="_configuring_the_oci_sdk_client"><span class="merged" id="all.3dnd5r" title="原文 : Configuring the OCI SDK Client">OCI SDKクライアントの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.2ipryg" title="原文 : Authentication with OCI is abstracted through AuthenticationDetailsProvider.">OCIでの認証は、<code>AuthenticationDetailsProvider</code>を介して抽象化されます。</span></p>

<p><span class="merged" id="all.2dyMvy.spl1" title="原文 : If your environment is already set up to work with the OCI SDK or the OCI command line, then it is very likely you do not need to do any additional configuration.">OCI SDKまたはOCIコマンドラインで動作するように環境がすでに設定されている場合、追加の構成を行う必要はありません。</span> <span class="merged" id="all.2dyMvy.spl2" title="原文 : It is recommended that you do this first, and verify your configuration by using the OCI CLI to access the service.">最初にこれを実行し、<a href="https://docs.cloud.oracle.com/iaas/Content/API/SDKDocs/javasdk.htm" target="_blank">OCI CLI</a>を使用してサービスにアクセスすることにより構成を確認することをお薦めします。</span> </p>

<markup
lang="java"

>ConfigFile config
= ConfigFileReader.parse("~/.oci/config", "DEFAULT");
AuthenticationDetailsProvider authProvider = new ConfigFileAuthenticationDetailsProvider(config);</markup>

<p><span class="merged" id="all.WqkVx" title="原文 : You also need to add the following dependency to your application for this">また、このアプリケーションに対して次の依存関係を追加する必要があります</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;com.oracle.oci.sdk&lt;/groupId&gt;
    &lt;artifactId&gt;oci-java-sdk-common&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h3 id="_accessing_oci_services"><span class="merged" id="all.3VMCIM.1" title="原文 : Accessing OCI Services">OCIサービスへのアクセス</span></h3>
<div class="section">
<p><span class="merged" id="all.2WFdho.spl1" title="原文 : Once you have authentication with OCI configured, you can use it to access any OCI service supported by the OCI SDK.">OCIによる認証を構成したら、それを使用して、OCI SDKでサポートされているOCIサービスにアクセスできます。</span> <span class="merged" id="all.2WFdho.spl2" title="原文 : You will need to add dependencies for the specific ODI SDK clients you will use.">使用する特定のODI SDKクライアントの依存関係を追加する必要があります。</span> </p>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.37"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.1b0zWC" title="原文 : This example describes how to access OCI Object Storage.">この例では、OCIオブジェクト・ストレージにアクセスする方法について説明します。</span></p>

<p><span class="merged" id="all.2C3iqM.1" title="原文 : As mentioned above in , you need to add a dependency on the OCI SDK Object Storage API:">前述の<router-link @click.native="this.scrollFix('#_accessing_oci_services')" to="#_accessing_oci_services"></router-link>に示すように、OCI SDK Object Storage APIへの依存関係を追加する必要があります:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;com.oracle.oci.sdk&lt;/groupId&gt;
    &lt;artifactId&gt;oci-java-sdk-objectstorage&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>


<h3 id="_creating_an_object_storage_client"><span class="merged" id="all.mQGHf" title="原文 : Creating an Object Storage Client">オブジェクト・ストレージ・クライアントの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.QjPR5" title="原文 : Now you can create OCI SDK Clients.">これで、OCI SDKクライアントを作成できます。</span></p>

<markup
lang="java"

>ConfigFile config
= ConfigFileReader.parse("~/.oci/config", "DEFAULT");
AuthenticationDetailsProvider authProvider = new ConfigFileAuthenticationDetailsProvider(config);
ObjectStorageAsync objectStorageAsyncClient = new ObjectStorageAsyncClient(authProvider);</markup>

</div>


<h3 id="_using_the_object_storage_client"><span class="merged" id="all.37jrZr.1" title="原文 : Using the Object Storage client">オブジェクト・ストレージ・クライアントの使用</span></h3>
<div class="section">
<p><span class="merged" id="all.1f4oLe" title="原文 : Once you have created an ObjectStorage client you can use it as described in:">ObjectStorageクライアントを作成すると、次のようにそれを使用できます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.9DYAv.1" title="原文 : OCI SDK Object Storage Javadocs"><a href="https://docs.oracle.com/en-us/iaas/tools/java/latest/com/oracle/bmc/objectstorage/package-summary.html" target="_blank">OCI SDKオブジェクト・ストレージのJavadoc</a></span></p>

</li>
<li>
<p><span class="merged" id="all.3szBZK.1" title="原文 : OCI Object Storage Overview"><a href="https://docs.cloud.oracle.com/iaas/Content/Object/Concepts/objectstorageoverview.htm" target="_blank">OCIオブジェクト・ストレージの概要</a></span></p>

</li>
</ul>

</div>


<h3 id="_resolving_javax_and_jakarta_package_compatibility_issue_with_oci_sdk"><span class="merged" id="all.387qjb.1" title="原文 : Resolving javax and jakarta package compatibility issue with OCI SDK">OCI SDKとの共存およびJakartaパッケージの互換性の問題の解決</span></h3>
<div class="section">
<p id="oci-compatibility"><span class="merged" id="all.nu264.1.spl1" title="原文 : With Helidon 3.x, we are now implementing the MicroProfile 5.0 Platform and selected Jakarta EE 9.1 specifications.">Helidon 3.xでは、MicroProfile 5.0プラットフォームを実装し、Jakarta EE 9.1仕様を選択しています。</span> <span class="merged" id="all.nu264.1.spl2" title="原文 : We are also going away from javax.* packages and fully embracing jakarta.* package.">また、javax.*パッケージから離れて、jakarta.*パッケージを完全に取り込んでいます。</span> </p>

<p><span class="merged" id="all.49GxTq.1.spl1" title="原文 : However, the current release 2.37.0 of OCI Java SDK is still using javax.* packages which created compatibility issues e.g. Helidon 3 uses JAX-RS 3.0.0 (jakarta package names) and the corresponding Jersey implementation.">ただし、OCI Java SDKの現在のリリース2.37.0では、引き続きjavax.*パッケージが引き続き使用されており、互換性の問題があります。たとえば、Helidon 3はJAX-RS 3.0.0(jakartaパッケージ名)とそれに対応するJersey実装が使用されます。</span> <span class="merged" id="all.49GxTq.1.spl2" title="原文 : OCI SDK 2.37.0 uses JAX-RS Client 2.1.6 (javax package names) and the corresponding Jersey implementation.">OCI SDK 2.37.0では、JAX-RS Client 2.1.6 (内部パッケージ名)および対応するJersey実装を使用します。</span> <span class="merged" id="all.49GxTq.1.spl3" title="原文 : Therefore, the OCI SDK is incompatible with Helidon 3 applications and any application that uses JAX-RS 3.">したがって、OCI SDKは、Helidon 3アプリケーションおよびJAX-RS 3を使用するアプリケーションとの互換性がありません。</span> <span class="merged" id="all.49GxTq.1.spl4" title="原文 : We have filed an issue with OCI SDK team, see https://github.com/oracle/oci-java-sdk/issues/371 for details on this.">OCI SDKチームに問題があります。詳細は、<a class="bare" href="https://github.com/oracle/oci-java-sdk/issues/371" target="_blank">https://github.com/oracle/oci-java-sdk/issues/371</a>を参照してください。</span> </p>

<p><span class="merged" id="all.4Wu3Ll.1" title="原文 : OCI SDK team has provided us with shaded jar as workaround as mentioned in the issue.">OCI SDKチームは、この問題で説明した回避策として、<code>shaded</code> jarを提供しました。</span></p>

<p><span class="merged" id="all.2xtivY.1" title="原文 : Now, when you want to use modules from OCI SDK in your application, instead of using individual modules as defined in our OCI integration documentation, you need to use full shaded jar.">OCI SDKのモジュールをアプリケーションで使用する場合は、OCI統合ドキュメントで定義されている個々のモジュールを使用するかわりに、<code>full shaded</code> jarを使用する必要があります。</span></p>

<markup
lang="xml"

>    &lt;dependency&gt;
      &lt;groupId&gt;com.oracle.oci.sdk&lt;/groupId&gt;
      &lt;artifactId&gt;oci-java-sdk-shaded-full&lt;/artifactId&gt;
      &lt;version&gt;2.37.0&lt;/version&gt;
    &lt;/dependency&gt;</markup>

<p><span class="merged" id="all.2OJ1fG.1" title="原文 : Since the full shaded jar doesn&rsquo;t bring in its transitive dependencies, you will also need to define following dependencies in your application so that it works at runtime."><code>full shaded</code> jarは推移的な依存関係をもたらさないため、実行時に機能するように、アプリケーションで次の依存関係を定義する必要もあります。</span></p>

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

<p><span class="merged" id="all.3APv2Y.1" title="原文 : Please refer to our OCI SDK Usage Examples to see this in action.">これについては、<a href="https://github.com/oracle/helidon/tree/master/examples/integrations/oci" target="_blank">「OCI SDKの使用例」</a>を参照してください。</span></p>

</div>

</div>


<h2 id="_references"><span class="merged" id="all.3oSja0.10"  title="原文:: References">参照</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.2PSMXR.1" title="原文 : OCI SDK Usage Examples"><a href="https://github.com/oracle/helidon/tree/master/examples/integrations/oci" target="_blank">OCI SDKの使用例</a></span></p>

</li>
<li>
<p><span class="merged" id="all.qu4HR" title="原文 : OCI Documentation ]"><a href="https://docs.oracle.com/en-us/iaas/Content/home.htm" target="_blank">「OCIドキュメント」</a> ]</span></p>

</li>
</ul>

</div>

</doc-view>
