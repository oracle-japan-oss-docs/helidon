<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.Q57NY.1" title="原文 : Oracle Cloud Infrastructure Integration">Oracle Cloud Infrastructure統合</span></dt>
<dd slot="desc"><p><span class="merged" id="all.KSMcS" title="原文 : Helidon SE OCI Integration provides easy access to Oracle Cloud Infrastructure.">Helidon SE OCI統合により、Oracle Cloud Infrastructureに簡単にアクセスできます。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_experimental"><span class="merged" id="all.3qlK5J.7"  title="原文:: Experimental">試作</span></h2>
<div class="section">
<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.2AP6Yx.3.spl1" title="原文 : Helidon integration with Oracle Cloud Infrastructure is still experimental and not intended for production use.">HelidonとOracle Cloud Infrastructureの統合は、引き続き試験的であり、本番での使用を目的としていません。</span> <span class="merged" id="all.2AP6Yx.3.spl2" title="原文 : APIs and features have not yet been fully tested and are subject to change.">APIおよび機能はまだ完全にテストされておらず、変更される可能性があります。</span> </p>
</div>
</div>

<h2 id="_general_configuration"><span class="merged" id="all.3ov8Ns.1"  title="原文:: General Configuration">一般構成</span></h2>
<div class="section">

<h3 id="_using_helidon_se_properties_configuration"><span class="merged" id="all.3YRa65" title="原文 : Using Helidon SE Properties Configuration">Helidon SEプロパティ構成の使用</span></h3>
<div class="section">
<p><span class="merged" id="all.41k1nj" title="原文 : The first option to configure connection to OCI is to directly specify properties in application.yaml file:">OCIへの接続を構成する最初のオプションは、<code>application.yaml</code>ファイルでプロパティを直接指定することです:</span></p>

<markup
lang="yaml"

>oci:
    config:
        oci-profile:
            user: ocid1.user....
            fingerprint: 1c:6c:....
            tenancy: ocid1.tenancy.oc1..
            region: us-...
            key-pem: &lt;pem content&gt;</markup>

</div>

<h3 id="_using_oci_configuration"><span class="merged" id="all.1c1OsP.1" title="原文 : Using OCI Configuration">OCI構成の使用</span></h3>
<div class="section">
<p><span class="merged" id="all.oePu1.1.spl1" title="原文 : The second option is via OCI configuration file.">2つ目のオプションは、OCI構成ファイルを使用します。</span> <span class="merged" id="all.oePu1.1.spl2" title="原文 : For authentication in OCI a special configuration file should be set up.">OCIで認証を行うには、特別な構成ファイルを設定する必要があります。</span> <span class="merged" id="all.oePu1.1.spl3" title="原文 : The file is usually located at ~/.oci/config">ファイルは通常、<code>~/.oci/config</code>にあります</span> </p>

<markup
lang="properties"

>[DEFAULT]
user=ocid1.user....
fingerprint=1c:6c:....
tenancy=ocid1.tenancy.oc1..
region=us-...
key_file=&lt;path to key file&gt;</markup>

<p><span class="merged" id="all.2kY7HF" title="原文 : More information how to set up on your environment: Official website">環境での設定方法の詳細: <a href="https://docs.oracle.com/en-us/iaas/Content/API/Concepts/sdkconfig.htm#SDK_and_CLI_Configuration_File" id="" target="_blank" >公式webサイト</a></span></p>

</div>
</div>
</doc-view>
