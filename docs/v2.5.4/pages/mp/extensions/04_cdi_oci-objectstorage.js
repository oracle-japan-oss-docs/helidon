<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2V5Itc" title="原文 : CDI extension for OCI">OCIのCDI拡張</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3PxdVw" title="原文 : This CDI portable extension provides support for injecting an Oracle Cloud Infrastructure Object Storage client in your Helidon MicroProfile applications.">この<a href="https://jakarta.ee/specifications/cdi/2.0/cdi-spec-2.0.html#spi" id="" target="_blank" >「CDIポータブル拡張機能」</a>では、Helidon MicroProfileアプリケーションへの<a href="https://docs.cloud.oracle.com/iaas/Content/Object/Concepts/objectstorageoverview.htm" id="" target="_blank" >「Oracle Cloud Infrastructure Object Storageクライアント」</a>のインジェクトがサポートされています。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.7"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.26SjFW" title="原文 : To enable OCI Object Storage Support add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">OCIオブジェクト・ストレージ・サポートを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
     &lt;groupId&gt;io.helidon.integrations.oci.sdk&lt;/groupId&gt;
     &lt;artifactId&gt;helidon-integrations-oci-sdk-cdi&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_using_the_helidon_oci_sdk_extension"><span class="merged" id="all.19nDD5" title="原文 : Using The Helidon OCI SDK Extension">Helidon OCI SDK Extensionの使用</span></h2>
<div class="section">
<p><span class="merged" id="all.1U2uee" title="原文 : Please see Helidon&rsquo;s Oracle Cloud Infrastructure Integration for information on how to use Helidon&rsquo;s OCI SDK Extension.">HelidonのOCI SDK Extensionの使用方法の詳細は、<router-link to="/mp/oci/01_oci">「Helidon Oracle Cloud Infrastructure統合」</router-link>を参照してください。</span></p>

</div>
</doc-view>
