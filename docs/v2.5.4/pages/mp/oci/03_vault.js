<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.21sCMk"  title="原文:: OCI Vault">OCI Vault</span></dt>
<dd slot="desc"><p><span class="merged" id="all.4EnE5x.spl1" title="原文 : You can use Helidon&rsquo;s OCI SDK Extension to access OCI Services.">Helidonの<router-link to="/mp/oci/01_oci">「OCI SDK拡張」</router-link>を使用して、OCIサービスにアクセスできます。</span> <span class="merged" id="all.4EnE5x.spl2" title="原文 : This document describes how to use it to access OCI Vault.">このドキュメントでは、OCI Vaultへのアクセスに使用する方法について説明します。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.20"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.3YZk23" title="原文 : To enable OCI Vault add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">OCI Vaultを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
     &lt;groupId&gt;io.helidon.integrations.oci.sdk&lt;/groupId&gt;
     &lt;artifactId&gt;helidon-integrations-oci-sdk-cdi&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.3XfpdX.spl1" title="原文 : Then add dependencies on the OCI SDK&rsquo;s Vault API.">次に、OCI SDKのVault APIへの依存関係を追加します。</span> <span class="merged" id="all.3XfpdX.spl2" title="原文 : Your specific dependencies may differ depending on the OCI SDK features you use.">特定の依存関係は、使用するOCI SDK機能によって異なる場合があります。</span> </p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;com.oracle.oci.sdk&lt;/groupId&gt;
    &lt;artifactId&gt;oci-java-sdk-vault&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;com.oracle.oci.sdk&lt;/groupId&gt;
    &lt;artifactId&gt;oci-java-sdk-keymanagement&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;com.oracle.oci.sdk&lt;/groupId&gt;
    &lt;artifactId&gt;oci-java-sdk-secrets&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_injecting_a_vault_client"><span class="merged" id="all.39p9D6" title="原文 : Injecting a Vault client">Vaultクライアントのインジェクト</span></h2>
<div class="section">
<p><span class="merged" id="all.1a9wJz.1" title="原文 : Once you have Helidon&rsquo;s OCI extension added to your application you can inject OCI SDK Clients.">HelidonのOCI拡張機能をアプリケーションに追加したら、OCI SDKクライアントをインジェクトできます。</span></p>

<markup
lang="java"
title="Field-injection example"
> @Inject
 private Vaults vaults;</markup>

<markup
lang="java"
title="Constructor-injection example"
> @Inject
 VaultResource(Secrets secrets, KmsCrypto crypto, Vaults vaults) {
     this.secrets = secrets;
     this.crypto = crypto;
     this.vaults = vaults;
  }</markup>

<p><span class="merged" id="all.2YNzBY" title="原文 : The extension implements these injection points by creating objects in the singleton scope.">拡張は、<a href="{jsr330-singleton-api-url}" id="" target="_blank" >「シングルトン・スコープ」</a>にオブジェクトを作成して、これらのインジェクション・ポイントを実装します。</span></p>

</div>

<h2 id="_configuring_the_helidon_oci_sdk_extension"><span class="merged" id="all.1Svu7H.2" title="原文 : Configuring the Helidon OCI SDK Extension">Helidon OCI SDK拡張の構成</span></h2>
<div class="section">
<p><span class="merged" id="all.3pKhSk.1.spl1" title="原文 : By default the extension will select and configure an appropriate OCI Authentication Details Provider for you based on your environment.">デフォルトでは、環境に基づいて適切なOCI認証詳細プロバイダが選択および構成されます。</span> <span class="merged" id="all.3pKhSk.1.spl2" title="原文 : For this reason it is recommended that you configure your environment first and get it working with the OCI CLI before using the Helidon OCI SDK Extension.">このため、Helidon OCI SDK Extensionを使用する前に、まず環境を構成し、<a href="{oci-javasdk-url}" id="" target="_blank" >OCI CLI</a>を操作することをお薦めします。</span> </p>

<p><span class="merged" id="all.1uIYk8.1" title="原文 : For more information see Helidon OCI Extension.">詳細については、<router-link to="/mp/oci/01_oci">「Helidon OCI拡張」</router-link>を参照してください。</span></p>

</div>

<h2 id="_using_the_vault_client"><span class="merged" id="all.2leszm" title="原文 : Using the Vault client">Vaultクライアントの使用</span></h2>
<div class="section">
<p><span class="merged" id="all.IxLpV" title="原文 : Once you have injected OCI Vault objects you can use them as described in:">OCI Vaultオブジェクトをインジェクトしたら、次のように使用できます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1zmyWE" title="原文 : OCI SDK Vault Javadocs"><a href="https://docs.oracle.com/en-us/iaas/tools/java/latest/com/oracle/bmc/vault/package-summary.html" id="" target="_blank" >OCI SDK Vault Javadocs</a></span></p>

</li>
<li>
<p><span class="merged" id="all.3q0XMI" title="原文 : OCI Vault Overview"><a href="https://docs.oracle.com/en-us/iaas/Content/KeyManagement/home.htm" id="" target="_blank" >OCI Vaultの概要</a></span></p>

</li>
</ul>
</div>
</doc-view>
