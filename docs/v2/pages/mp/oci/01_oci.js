<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.Q57NY" title="原文 : Oracle Cloud Infrastructure Integration">Oracle Cloud Infrastructure統合</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2Ft09V" title="原文 : Helidon MP OCI Integration provides easy access to Oracle Cloud Infrastructure.">Helidon MP OCI統合を使用すると、Oracle Cloud Infrastructureに簡単にアクセスできます。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_experimental"><span class="merged" id="all.3qlK5J.1"  title="原文:: Experimental">試作</span></h2>
<div class="section">
<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.2AP6Yx.spl1" title="原文 : Helidon integration with Oracle Cloud Infrastructure is still experimental and not intended for production use.">HelidonとOracle Cloud Infrastructureの統合は、引き続き試験的であり、本番での使用を目的としていません。</span> <span class="merged" id="all.2AP6Yx.spl2" title="原文 : APIs and features have not yet been fully tested and are subject to change.">APIおよび機能はまだ完全にテストされておらず、変更される可能性があります。</span> </p>
</div>
</div>

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.16" title="原文 : Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.3s52al" title="原文 : To enable OCI Integration add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">OCI統合を有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.oci&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-oci-cdi&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_general_configuration"><span class="merged" id="all.3ov8Ns"  title="原文:: General Configuration">一般構成</span></h2>
<div class="section">

<h3 id="_using_helidon_mp_properties_configuration"><span class="merged" id="all.2RNTVg" title="原文 : Using Helidon MP Properties Configuration">Helidon MPプロパティ構成の使用</span></h3>
<div class="section">
<p><span class="merged" id="all.C5NhC" title="原文 : The first option to configure connection to OCI is to directly specify properties in microprofile-config.properties file:">OCIへの接続を構成する最初のオプションは、<code>microprofile-config.properties</code>ファイルでプロパティを直接指定することです:</span></p>

<markup
lang="properties"

>oci.config.oci-profile.user=ocid1.user....
oci.config.oci-profile.fingerprint=1c:6c:....
oci.config.oci-profile.tenancy=ocid1.tenancy.oc1..
oci.config.oci-profile.region=us-...
oci.config.oci-profile.key-pem=&lt;pem content&gt;</markup>

</div>

<h3 id="_using_oci_configuration"><span class="merged" id="all.1c1OsP" title="原文 : Using OCI Configuration">OCI構成の使用</span></h3>
<div class="section">
<p><span class="merged" id="all.oePu1.spl1" title="原文 : The second option is via OCI configuration file.">2つ目のオプションは、OCI構成ファイルを使用します。</span> <span class="merged" id="all.oePu1.spl2" title="原文 : For authentication in OCI a special configuration file should be set up.">OCIで認証を行うには、特別な構成ファイルを設定する必要があります。</span> <span class="merged" id="all.oePu1.spl3" title="原文 : The file is usually located at ~/.oci/config">ファイルは通常、<code>~/.oci/config</code>にあります</span> </p>

<markup
lang="properties"

>[DEFAULT]
user=ocid1.user....
fingerprint=1c:6c:....
tenancy=ocid1.tenancy.oc1..
region=us-...
key_file=&lt;path to key file&gt;</markup>

<p><span class="merged" id="all.2RMvco" title="原文 : For more information on setting up basic configuration information, see SDK and CLI Configuration File in OCI Developer Resources.">基本構成情報の設定の詳細は、OCI開発者リソースの<a href="https://docs.oracle.com/en-us/iaas/Content/API/Concepts/sdkconfig.htm#SDK_and_CLI_Configuration_File" id="" target="_blank" >「SDKおよびCLI構成ファイル」</a>を参照してください。</span></p>

</div>
</div>
</doc-view>
