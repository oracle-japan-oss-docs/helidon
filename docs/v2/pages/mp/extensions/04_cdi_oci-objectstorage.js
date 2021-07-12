<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.4VggzY" title="原文 : CDI extension for OCI Object storage">OCIオブジェクト・ストレージのCDI拡張機能</span></dt>
<dd slot="desc"><p><span class="merged" id="all.4Dkl5e" title="原文 : This CDI portable extension provides support for injecting an Oracle Cloud Infrastructure Object Storage client in your Helidon MicroProfile applications.">この<a href="https://docs.jboss.org/cdi/spec/2.0/cdi-spec.html#spi" id="" target="_blank" >「CDIポータブル拡張機能」</a>では、Helidon MicroProfileアプリケーションへの<a href="https://docs.cloud.oracle.com/iaas/Content/Object/Concepts/objectstorageoverview.htm" id="" target="_blank" >「Oracle Cloud Infrastructure Object Storageクライアント」</a>のインジェクトがサポートされています。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.6" title="原文 : Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.26SjFW" title="原文 : To enable OCI Object Storage Support add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">OCIオブジェクト・ストレージ・サポートを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
     &lt;groupId&gt;io.helidon.integrations.cdi&lt;/groupId&gt;
     &lt;artifactId&gt;helidon-integrations-cdi-oci-objectstorage&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_injecting_an_object_storage_client"><span class="merged" id="all.xdzpz" title="原文 : Injecting an Object Storage client">オブジェクト・ストレージ・クライアントのインジェクト</span></h2>
<div class="section">
<markup
lang="java"
title="フィールド・インジェクションの例"
> @Inject
 private ObjectStorage client;</markup>

<markup
lang="java"
title="コンストラクタ・インジェクションの例"
> private final ObjectStorage client;
 @Inject
 public YourConstructor(@Named("orders") ObjectStorage client) {
   super();
   this.client = client;
 }</markup>

<p><span class="merged" id="all.3pl4HF" title="原文 : The extension implements this injection point by creating an Object Storage client object in the application scope.">拡張機能は、<a href="{cdi-applicationscoped-api-url}" id="" target="_blank" >「アプリケーション・スコープ」</a>でObject Storageクライアント・オブジェクトを作成することで、このインジェクション・ポイントを実装します。</span></p>

<p><span class="merged" id="all.3rUbVZ.spl1" title="原文 : You can configure the object using MicroProfile config."><router-link @click.native="this.scrollFix('#microprofile/02_server-configuration.adoc')" to="#microprofile/02_server-configuration.adoc">「MicroProfile構成」</router-link>を使用してオブジェクトを構成できます。</span> <span class="merged" id="all.3rUbVZ.spl2" title="原文 : For example, the Object Storage client created above can be configured as follows:">たとえば、上で作成したObject Storageクライアントは、次のように構成できます:</span> </p>

<markup
lang="properties"
title="META-INF/microprofile-config.properties"
>oci.auth.fingerprint=
oci.auth.keyFile=
oci.auth.passphraseCharacters=
oci.auth.user=
oci.auth.tenancy=
oci.objectstorage.region=
oci.objectstorage.namespace=</markup>

<p><span class="merged" id="all.2L0PdN" title="原文 : These properties are described in the Oracle Cloud Infrastructure Object Storage Java SDK documentation.">これらのプロパティは、<a href="https://docs.cloud.oracle.com/iaas/Content/API/SDKDocs/javasdk.htm" id="" target="_blank" >「Oracle Cloud Infrastructure Object Storage Java SDKのドキュメント」</a>で説明されています。</span></p>

</div>
</doc-view>
