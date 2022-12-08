<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.Q57NY" title="原文 : Oracle Cloud Infrastructure Integration">Oracle Cloud Infrastructure統合</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1bT6sv" title="原文 : Helidon MP OCI Integration provides easy access to Oracle Cloud Infrastructure using the OCI Java SDK.">Helidon MP OCI統合により、OCI Java SDKを使用してOracle Cloud Infrastructureに簡単にアクセスできます。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.18"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.3s52al" title="原文 : To enable OCI Integration add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">OCI統合を有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
     &lt;groupId&gt;io.helidon.integrations.oci.sdk&lt;/groupId&gt;
     &lt;artifactId&gt;helidon-integrations-oci-sdk-cdi&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_the_helidon_oci_sdk_extension"><span class="merged" id="all.2P0Z4D" title="原文 : The Helidon OCI SDK Extension">Helidon OCI SDK拡張</span></h2>
<div class="section">
<p><span class="merged" id="all.1wNdI2.spl1" title="原文 : When added to your application this CDI portable extension provides support for injecting Oracle Cloud Infrastructure SDK Clients in your Helidon MicroProfile application.">アプリケーションに追加すると、この<a href="https://jakarta.ee/specifications/cdi/2.0/cdi-spec-2.0.html#spi" id="" target="_blank" >「CDIポータブル拡張機能」</a>は、Helidon MicroProfileアプリケーションに<a href="https://docs.cloud.oracle.com/iaas/Content/API/SDKDocs/javasdk.htm" id="" target="_blank" >「Oracle Cloud Infrastructure SDKクライアント」</a>をインジェクトするためのサポートを提供します。</span> <span class="merged" id="all.1wNdI2.spl2" title="原文 : The extension also handles authenticating with OCI by automatically picking up OCI credentials from your environment.">拡張機能では、環境からOCI資格証明を自動的に取得することで、OCIでの認証も処理されます。</span> </p>

</div>

<h2 id="_configuring_the_helidon_oci_sdk_extension"><span class="merged" id="all.1Svu7H" title="原文 : Configuring the Helidon OCI SDK Extension">Helidon OCI SDK拡張の構成</span></h2>
<div class="section">
<p><span class="merged" id="all.49yTd0.spl1" title="原文 : When you inject an OCI SDK Client object, the Helidon OCI SDK extension configures and constructs the object for you.">OCI SDKクライアント・オブジェクトをインジェクトすると、Helidon OCI SDK拡張によってオブジェクトが構成および構築されます。</span> <span class="merged" id="all.49yTd0.spl2" title="原文 : The configuration primarily consists of initializing an OCI AuthenticationDetailsProvider.">構成は、主にOCI <code>AuthenticationDetailsProvider</code>の初期化で構成されます。</span> <span class="merged" id="all.49yTd0.spl3" title="原文 : By default the extension will examine your environment and select the best AuthenticationDetailsProvider and configure it for you.">デフォルトでは、拡張によって環境が確認され、最適な<code>AuthenticationDetailsProvider</code>を選択し、それを構成します。</span> </p>

<p><span class="merged" id="all.8ISwi.spl1" title="原文 : This means if your environment is already set up to work with the OCI SDK or the OCI command line, then it is very likely you do not need to do any additional configuration of the extension.">つまり、OCI SDKまたはOCIコマンドラインで動作するように環境がすでに設定されている場合、拡張の追加構成を行う必要はありません。</span> <span class="merged" id="all.8ISwi.spl2" title="原文 : Just add it as a dependency and it will self-configure.">依存関係として追加するだけで、自動的に構成されます。</span> </p>

<p><span class="merged" id="all.t1o47.spl1" title="原文 : If for some reason you require full control over the OCI configuration you have that as well.">なんらかの理由でOCI構成を完全に制御する必要がある場合は、それも必要です。</span> <span class="merged" id="all.t1o47.spl2" title="原文 : For more information concerning the extension and its configuration and authentication options see the OciExtension javadocs.">拡張およびその構成および認証オプションの詳細は、<a href="./apidocs/io.helidon.integrations.oci.sdk.cdi/io/helidon/integrations/oci/sdk/cdi/OciExtension.html" id="" target="_blank" >OciExtension</a> javadocを参照してください。</span> <span class="merged" id="all.t1o47.spl3" title="原文 : In particular the oci.auth-strategies property lets you control which AuthenticationDetailsProvider will be used.">特に、<code>oci.auth-strategies</code>プロパティを使用すると、使用する<code>AuthenticationDetailsProvider</code>を制御できます。</span> </p>

</div>

<h2 id="_accessing_oci_services"><span class="merged" id="all.3VMCIM" title="原文 : Accessing OCI Services">OCIサービスへのアクセス</span></h2>
<div class="section">
<p><span class="merged" id="all.3ljhd0.spl1" title="原文 : Since the Helidon OCI SDK extension supports injecting any OCI client from the OCI SDK, you can use it to access any OCI service supported by the OCI SDK.">Helidon OCI SDK拡張ではOCI SDKからOCIクライアントをインジェクトできるため、OCI SDKでサポートされている任意のOCIサービスにアクセスできます。</span> <span class="merged" id="all.3ljhd0.spl2" title="原文 : In addition to adding the Helidon OCI SDK Extension dependency (as described above) you will need to add dependencies for the specific ODI SDK clients you will use.">Helidon OCI SDK Extension依存関係(前述)の追加に加えて、使用する特定のODI SDKクライアントの依存関係を追加する必要があります。</span> </p>

<p><span class="merged" id="all.22qN0d.spl1" title="原文 : You will also need to configure your environment to authenticate with OCI.">また、OCIで認証するように環境を構成する必要があります。</span> <span class="merged" id="all.22qN0d.spl2" title="原文 : It is recommended that you do this first, and verify your configuration by using the OCI CLI to access the service.">最初にこれを実行し、<a href="https://docs.cloud.oracle.com/iaas/Content/API/SDKDocs/javasdk.htm" id="" target="_blank" >OCI CLI</a>を使用してサービスにアクセスすることにより構成を確認することをお薦めします。</span> </p>

<p><span class="merged" id="all.4D1Her" title="原文 : The following documentation will help you get started with some common OCI Services:">次のドキュメントは、一般的なOCIサービスの開始に役立ちます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3lffAh" title="原文 : OCI Object Storage"><router-link to="/mp/oci/02_object-storage">OCIオブジェクト・ストレージ</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2V49oD" title="原文 : OCI Vault"><router-link to="/mp/oci/03_vault">OCI Vault</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1uem9v" title="原文 : OCI ATP"><router-link to="/mp/oci/04_atp">OCI ATP</router-link></span></p>

</li>
</ul>
</div>
</doc-view>
