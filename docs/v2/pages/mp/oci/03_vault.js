<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.21sCMk"  title="原文:: OCI Vault">OCI Vault</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2etOnj" title="原文 : The Helidon MP OCI Vault integration provides easy access to Oracle Cloud Vault features.">Helidon MP OCI Vault統合により、Oracle Cloud Vaultの機能に簡単にアクセスできます。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_experimental"><span class="merged" id="all.3qlK5J.3"  title="原文:: Experimental">試作</span></h2>
<div class="section">
<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.2AP6Yx.2.spl1" title="原文 : Helidon integration with Oracle Cloud Infrastructure is still experimental and not intended for production use.">HelidonとOracle Cloud Infrastructureの統合は、引き続き試験的であり、本番での使用を目的としていません。</span> <span class="merged" id="all.2AP6Yx.2.spl2" title="原文 : APIs and features have not yet been fully tested and are subject to change.">APIおよび機能はまだ完全にテストされておらず、変更される可能性があります。</span> </p>
</div>
</div>

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.18" title="原文 : Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.3YZk23" title="原文 : To enable OCI Vault add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">OCI Vaultを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.oci&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-oci-cdi&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.oci&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-oci-vault&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_setting_up_the_oci_vault"><span class="merged" id="all.22vt2W" title="原文 : Setting up the OCI Vault">OCI Vaultの設定</span></h2>
<div class="section">
<p><span class="merged" id="all.48z882" title="原文 : In order to use the OCI Vault integration, the following setup should be made.">OCI Vault統合を使用するには、次の設定を行う必要があります。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.l4kXG" title="原文 : The configuration required for Vault integration includes:">Vault統合に必要な構成は次のとおりです:</span></p>

</li>
<li>
<p><span class="merged" id="all.1Liomg" title="原文 : Vault OCID - to use the correct Vault, as more than one can be configured">ボールトOCID - 複数のVaultを構成できるため、適切なVaultを使用できます</span></p>

</li>
<li>
<p><span class="merged" id="all.14EyKL" title="原文 : Compartment OCID - OCI-specific compartment">コンパートメントOCID - OCI固有のコンパートメント</span></p>

</li>
<li>
<p><span class="merged" id="all.29snpi" title="原文 : Encryption Key OCID - required when doing encryption/decryption">暗号化キーOCID - 暗号化/復号化の実行時に必要</span></p>

</li>
<li>
<p><span class="merged" id="all.3nAfXO" title="原文 : Signature Key OCID - required when doing signatures/verification">シグネチャ・キーOCID - シグネチャ/検証の実行時に必要</span></p>

</li>
<li>
<p><span class="merged" id="all.1Yjc57" title="原文 : Cryptographic endpoint - required for all except secrets">暗号化エンドポイント - シークレット以外のすべてに必要</span></p>

</li>
</ul>
<p><span class="merged" id="all.Js4e5" title="原文 : First specify OCIDs and URLs of Vault items in microprofile-config.properties:">最初に、<code>microprofile-config.properties</code>でVaultアイテムのOCIDおよびURLを指定します:</span></p>

<markup
lang="properties"

>oci.vault.vault-ocid: "&lt;...&gt;"
oci.vault.compartment-ocid: "&lt;...&gt;"
oci.vault.encryption-key-ocid: "&lt;...&gt;"
oci.vault.signature-key-ocid: "&lt;...&gt;"
oci.vault.cryptographic-endpoint: "&lt;...&gt;"</markup>

<p><span class="merged" id="all.4fxYl1" title="原文 : The OCIDs can be set up and found in OCI under Security tab.">OCIDはOCIのセキュリティ・タブで設定および検索できます。</span></p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="OCI Vault" src="./images/oci/ocivault.png" /> </v-card-text> </v-card>

<p><span class="merged" id="all.1AVQ9g" title="原文 : REST endpoint should be setup as follows:">RESTエンドポイントは次のように設定する必要があります:</span></p>

<markup
lang="java"

>@Path("/vault")
public class VaultResource {
    private final OciVault vault;
    private final String vaultOcid;
    private final String compartmentOcid;
    private final String encryptionKeyOcid;
    private final String signatureKeyOcid;

    @Inject
    VaultResource(@Named("custom") OciVault vault, <span class="conum" data-value="1" />
                  @ConfigProperty(name = "app.vault.vault-ocid") <span class="conum" data-value="2" />
                          String vaultOcid,
                  @ConfigProperty(name = "app.vault.compartment-ocid") <span class="conum" data-value="3" />
                          String compartmentOcid,
                  @ConfigProperty(name = "app.vault.encryption-key-ocid") <span class="conum" data-value="4" />
                          String encryptionKeyOcid,
                  @ConfigProperty(name = "app.vault.signature-key-ocid") <span class="conum" data-value="5" />
                          String signatureKeyOcid) {
        this.vault = vault;
        this.vaultOcid = vaultOcid;
        this.compartmentOcid = compartmentOcid;
        this.encryptionKeyOcid = encryptionKeyOcid;
        this.signatureKeyOcid = signatureKeyOcid;
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3ZQkVK" title="原文 : OciVault support class is configured and injected automatically"><code>OciVault</code>サポート・クラスは自動的に構成およびインジェクトされます</span></li>
<li data-value="2"><span class="merged" id="all.3MJcHd" title="原文 : &lt;3&gt; &lt;4&gt; &lt;5&gt; Properties a read from the configuration">構成から読み取られた&lt;3> &lt;4> &lt;5>プロパティ</span></li>
</ul>
</div>

<h2 id="_oci_vault_usage"><span class="merged" id="all.3jxuoU" title="原文 : OCI Vault usage">OCI Vaultの使用</span></h2>
<div class="section">

<h3 id="_encryption"><span class="merged" id="all.Nhjlz.1"  title="原文:: Encryption">暗号化</span></h3>
<div class="section">
<p><span class="merged" id="all.2t7ZiL" title="原文 : To encrypt a text, submit a GET request to the /encrypt endpoint:">テキストを暗号化するには、<code>GET</code>リクエストを<code>/encrypt</code>エンドポイントに送信します:</span></p>

<markup
lang="java"

>@GET
@Path("/encrypt/{text}")
public String encrypt(@PathParam("text") String secret) {
    return vault.encrypt(Encrypt.Request.builder()
                                 .keyId(encryptionKeyOcid)
                                 .data(Base64Value.create(secret)))
            .cipherText();
}</markup>

</div>

<h3 id="_decryption"><span class="merged" id="all.2Duco4"  title="原文:: Decryption">復号化</span></h3>
<div class="section">
<p><span class="merged" id="all.aLi9I" title="原文 : To decrypt a text, submit a GET request to /decrypt endpoint:">テキストを復号化するには、<code>GET</code>リクエストを<code>/decrypt</code>エンドポイントに送信します:</span></p>

<markup
lang="java"

>@GET
@Path("/decrypt/{text: .*}")
public String decrypt(@PathParam("text") String cipherText) {
    return vault.decrypt(Decrypt.Request.builder()
                                 .keyId(encryptionKeyOcid)
                                 .cipherText(cipherText))
            .decrypted()
            .toDecodedString();
}</markup>

</div>

<h3 id="_signature"><span class="merged" id="all.oUoao"  title="原文:: Signature">シグネチャ</span></h3>
<div class="section">
<p><span class="merged" id="all.ILGbS" title="原文 : To retrieve a signature, submit a GET request to /sign endpoint:">シグネチャを取得するには、<code>GET</code>リクエストを<code>/sign</code>エンドポイントに送信します:</span></p>

<markup
lang="java"

>@GET
@Path("/sign/{text}")
public String sign(@PathParam("text") String dataToSign) {
    return vault.sign(Sign.Request.builder()
                              .keyId(signatureKeyOcid)
                              .algorithm(Sign.Request.ALGORITHM_SHA_224_RSA_PKCS_PSS)
                              .message(Base64Value.create(dataToSign)))
            .signature()
            .toBase64();
}</markup>

</div>

<h3 id="_verification_of_a_signature"><span class="merged" id="all.2ePePb" title="原文 : Verification of a signature">シグネチャの検証</span></h3>
<div class="section">
<p><span class="merged" id="all.2jS7JA" title="原文 : To verify the correctness of the signature, submit a GET request to /verify endpoint:">シグネチャが正しいことを確認するには、<code>GET</code>リクエストを<code>/verify</code>エンドポイントに送信します:</span></p>

<markup
lang="java"

>    @GET
    @Path("/sign/{text}/{signature: .*}")
    public String verify(@PathParam("text") String dataToVerify,
                         @PathParam("signature") String signature) {
        boolean valid = vault.verify(Verify.Request.builder()
                                             .keyId(signatureKeyOcid)
                                             .message(Base64Value.create(dataToVerify))
                                             .algorithm(Sign.Request.ALGORITHM_SHA_224_RSA_PKCS_PSS)
                                             .signature(Base64Value.createFromEncoded(signature)))
                .isValid();

        return valid ? "Signature valid" : "Signature not valid";
    }</markup>

</div>

<h3 id="_creating_a_signature"><span class="merged" id="all.4JqP66" title="原文 : Creating a signature">シグネチャの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.Rwxce" title="原文 : To create a secret with a provided name, submit a GET request to /secret:">指定した名前でシークレットを作成するには、<code>GET</code>リクエストを<code>/secret</code>に送信します:</span></p>

<markup
lang="java"

>@POST
@Path("/secret/{name}")
public String createSecret(@PathParam("name") String name,
                           String secretText) {
    return vault.createSecret(CreateSecret.Request.builder()
                                      .secretName(name)
                                      .secretContent(CreateSecret.SecretContent.create(secretText))
                                      .vaultId(vaultOcid)
                                      .compartmentId(compartmentOcid)
                                      .encryptionKeyId(encryptionKeyOcid))
            .secret()
            .id();

}</markup>

</div>

<h3 id="_getting_a_signature"><span class="merged" id="all.1PFw2f" title="原文 : Getting a signature">シグネチャの取得</span></h3>
<div class="section">
<p><span class="merged" id="all.KThgf" title="原文 : To get a secret by its OCID, use GET Request to /secret:">OCIDでシークレットを取得するには、<code>/secret</code>への<code>GET</code>リクエストを使用します:</span></p>

<markup
lang="java"

>@GET
@Path("/secret/{id}")
public String getSecret(@PathParam("id") String secretOcid) {
    Optional&lt;GetSecretBundle.Response&gt; response =
             vault.getSecretBundle(GetSecretBundle.Request.builder()
            .secretId(secretOcid))
            .entity();

    if (response.isEmpty()) {
        throw new NotFoundException("Secret with id " + secretOcid +
                                                       " does not exist");
    }

    return response.get().secretString().orElse("");
}</markup>

</div>

<h3 id="_deleting_a_signature"><span class="merged" id="all.3yCErG" title="原文 : Deleting a signature">シグネチャの削除</span></h3>
<div class="section">
<p><span class="merged" id="all.2JHsV3" title="原文 : To delete a secret, a DELETE request to /secret should be used:">シークレットを削除するには、<code>/secret</code>に対する<code>DELETE</code>リクエストを使用する必要があります:</span></p>

<markup
lang="java"

>@DELETE
@Path("/secret/{id}")
public String deleteSecret(@PathParam("id") String secretOcid) {
    Instant deleteTime = Instant.now().plus(30, ChronoUnit.DAYS);

    vault.deleteSecret(DeleteSecret.Request.builder()
                               .secretId(secretOcid)
                               .timeOfDeletion(deleteTime));

    return "Secret " + secretOcid + " was deleted";
}</markup>

</div>
</div>
</doc-view>
