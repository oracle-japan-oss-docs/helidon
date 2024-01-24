<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.58"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.57" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.34" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.34" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1eCH3t.6" title="原文 : References"><router-link @click.native="this.scrollFix('#_references')" to="#_references">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.73"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.1tOOSq" title="原文 : Helidon SE OCI Integration provides easy access to Oracle Cloud Infrastructure using the OCI Java SDK.">Helidon SE OCI Integrationでは、OCI Java SDKを使用してOracle Cloud Infrastructureに簡単にアクセスできます。</span></p>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.51"  title="原文:: Usage">使用</span></h2>
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
    &lt;artifactId&gt;oci-java-sdk-common-httpclient-jersey3&lt;/artifactId&gt;
    &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;</markup>

</div>


<h3 id="_accessing_oci_services"><span class="merged" id="all.3VMCIM.1" title="原文 : Accessing OCI Services">OCIサービスへのアクセス</span></h3>
<div class="section">
<p><span class="merged" id="all.2WFdho.spl1" title="原文 : Once you have authentication with OCI configured, you can use it to access any OCI service supported by the OCI SDK.">OCIによる認証を構成したら、それを使用して、OCI SDKでサポートされているOCIサービスにアクセスできます。</span> <span class="merged" id="all.2WFdho.spl2" title="原文 : You will need to add dependencies for the specific ODI SDK clients you will use.">使用する特定のODI SDKクライアントの依存関係を追加する必要があります。</span> </p>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.36"  title="原文:: Examples">例</span></h2>
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

</div>


<h2 id="_references"><span class="merged" id="all.3oSja0.10"  title="原文:: References">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1BHGAC.1" title="原文 : OCI SDK Usage Examples"><a href="https://github.com/oracle/helidon/tree/4.0.2/examples/integrations/oci" target="_blank">OCI SDKの使用例</a></span></p>

</li>
<li>
<p><span class="merged" id="all.qu4HR" title="原文 : OCI Documentation ]"><a href="https://docs.oracle.com/en-us/iaas/Content/home.htm" target="_blank">「OCIドキュメント」</a> ]</span></p>

</li>
</ul>

</div>

</doc-view>
