<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.21sCMk.1"  title="原文:: OCI Vault">OCI Vault</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3HBRRw" title="原文 : The Helidon SE OCI Vault integration provides a reactive API Oracle Cloud Vault features.">Helidon SE OCI Vault統合は、リアクティブAPIのOracle Cloud Vault機能を提供します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_experimental"><span class="merged" id="all.3qlK5J.9"  title="原文:: Experimental">試作</span></h2>
<div class="section">
<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.2AP6Yx.5.spl1" title="原文 : Helidon integration with Oracle Cloud Infrastructure is still experimental and not intended for production use.">HelidonとOracle Cloud Infrastructureの統合は、引き続き試験的であり、本番での使用を目的としていません。</span> <span class="merged" id="all.2AP6Yx.5.spl2" title="原文 : APIs and features have not yet been fully tested and are subject to change.">APIおよび機能はまだ完全にテストされておらず、変更される可能性があります。</span> </p>
</div>
</div>

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.49" title="原文 : Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.3YZk23.1" title="原文 : To enable OCI Vault add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">OCI Vaultを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.oci&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-oci-vault&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_setting_up_the_oci_vault"><span class="merged" id="all.22vt2W.1" title="原文 : Setting up the OCI Vault">OCI Vaultの設定</span></h2>
<div class="section">
<p><span class="merged" id="all.48z882.1" title="原文 : In order to use the OCI Vault integration, the following setup should be made.">OCI Vault統合を使用するには、次の設定を行う必要があります。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.l4kXG.1" title="原文 : The configuration required for Vault integration includes:">Vault統合に必要な構成は次のとおりです:</span></p>

</li>
<li>
<p><span class="merged" id="all.1Liomg.1" title="原文 : Vault OCID - to use the correct Vault, as more than one can be configured">ボールトOCID - 複数のVaultを構成できるため、適切なVaultを使用できます</span></p>

</li>
<li>
<p><span class="merged" id="all.14EyKL.1" title="原文 : Compartment OCID - OCI-specific compartment">コンパートメントOCID - OCI固有のコンパートメント</span></p>

</li>
<li>
<p><span class="merged" id="all.29snpi.1" title="原文 : Encryption Key OCID - required when doing encryption/decryption">暗号化キーOCID - 暗号化/復号化の実行時に必要</span></p>

</li>
<li>
<p><span class="merged" id="all.3nAfXO.1" title="原文 : Signature Key OCID - required when doing signatures/verification">シグネチャ・キーOCID - シグネチャ/検証の実行時に必要</span></p>

</li>
<li>
<p><span class="merged" id="all.1Yjc57.1" title="原文 : Cryptographic endpoint - required for all except secrets">暗号化エンドポイント - シークレット以外のすべてに必要</span></p>

</li>
</ul>
<p><span class="merged" id="all.1bU1g0" title="原文 : First specify OCIDs and URLs of Vault items in application.yaml:">最初に、<code>application.yaml</code>でVaultアイテムのOCIDおよびURLを指定します:</span></p>

<markup
lang="yaml"

>oci:
  vault:
    vault-ocid: "&lt;...&gt;"
    compartment-ocid: "&lt;...&gt;"
    encryption-key-ocid: "&lt;...&gt;"
    signature-key-ocid: "&lt;...&gt;"
    cryptographic-endpoint: "&lt;...&gt;"</markup>

<p><span class="merged" id="all.cVwNP.2.spl1" title="原文 : Current configuration requires ~/.oci/config to be available in the home folder.">現在の構成では、<code>~/.oci/config</code>がホーム・フォルダで使用可能である必要があります。</span> <span class="merged" id="all.cVwNP.2.spl2" title="原文 : This configuration file can be downloaded from OCI.">この構成ファイルはOCIからダウンロードできます。</span> </p>

<p><span class="merged" id="all.4fxYl1.1" title="原文 : The OCIDs can be set up and found in OCI under Security tab.">OCIDはOCIのセキュリティ・タブで設定および検索できます。</span></p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="OCI Vault" src="./images/oci/ocivault.png" /> </v-card-text> </v-card>

<p><span class="merged" id="all.lYh0Z" title="原文 : Next, these values should be read and provided to VaultService:">次に、これらの値を読み取り、<code>VaultService</code>に提供する必要があります:</span></p>

<markup
lang="java"

>Config vaultConfig = config.get("oci.vault");
// the following three parameters are required
String vaultOcid = vaultConfig.get("vault-ocid").asString().get();
String compartmentOcid = vaultConfig.get("compartment-ocid").asString().get();
String encryptionKey = vaultConfig.get("encryption-key-ocid").asString().get();
String signatureKey = vaultConfig.get("signature-key-ocid").asString().get();

// this requires OCI configuration in the usual place
// ~/.oci/config
OciVaultRx ociVault = OciVaultRx.create(config.get("oci"));

WebServer.builder()
        .config(config.get("server"))
        .routing(Routing.builder()
                         .register("/vault", new VaultService(ociVault,
                                                              vaultOcid,
                                                              compartmentOcid,
                                                              encryptionKey,
                                                              signatureKey)))
        .build()
        .start()
        .await();</markup>

<p><span class="merged" id="all.1xAu1E" title="原文 : The VaultService should define an update method to map paths to handler methods:"><code>VaultService</code>では、ハンドラ・メソッドにパスをマップする<code>update</code>メソッドを定義する必要があります:</span></p>

<markup
lang="java"

>@Override
public void update(Routing.Rules rules) {
    rules.get("/encrypt/{text:.*}", this::encrypt)
            .get("/decrypt/{text:.*}", this::decrypt)
            .get("/sign/{text}", this::sign)
            .get("/verify/{text}/{signature:.*}", this::verify)
            .get("/secret/{id}", this::getSecret)
            .post("/secret/{name}", Handler.create(String.class, this::createSecret))
            .delete("/secret/{id}", this::deleteSecret);
}</markup>

</div>

<h2 id="_oci_vault_usage"><span class="merged" id="all.3jxuoU.1" title="原文 : OCI Vault usage">OCI Vaultの使用</span></h2>
<div class="section">

<h3 id="_encryption"><span class="merged" id="all.Nhjlz.3"  title="原文:: Encryption">暗号化</span></h3>
<div class="section">
<p><span class="merged" id="all.2t7ZiL.1" title="原文 : To encrypt a text, submit a GET request to the /encrypt endpoint:">テキストを暗号化するには、<code>GET</code>リクエストを<code>/encrypt</code>エンドポイントに送信します:</span></p>

<markup
lang="java"

>private void encrypt(ServerRequest req, ServerResponse res) {
    vault.encrypt(Encrypt.Request.builder()
                          .keyId(encryptionKeyOcid)
                          .data(Base64Value.create(req.path().param("text"))))
            .map(Encrypt.Response::cipherText)
            .forSingle(res::send)
            .exceptionally(res::send);
}</markup>

</div>

<h3 id="_decryption"><span class="merged" id="all.2Duco4.1"  title="原文:: Decryption">復号化</span></h3>
<div class="section">
<p><span class="merged" id="all.aLi9I.1" title="原文 : To decrypt a text, submit a GET request to /decrypt endpoint:">テキストを復号化するには、<code>GET</code>リクエストを<code>/decrypt</code>エンドポイントに送信します:</span></p>

<markup
lang="java"

>private void decrypt(ServerRequest req, ServerResponse res) {
    vault.decrypt(Decrypt.Request.builder()
                          .keyId(encryptionKeyOcid)
                          .cipherText(req.path().param("text")))
            .map(Decrypt.Response::decrypted)
            .map(Base64Value::toDecodedString)
            .forSingle(res::send)
            .exceptionally(res::send);
}</markup>

</div>

<h3 id="_signature"><span class="merged" id="all.oUoao.1"  title="原文:: Signature">シグネチャ</span></h3>
<div class="section">
<p><span class="merged" id="all.ILGbS.1" title="原文 : To retrieve a signature, submit a GET request to /sign endpoint:">シグネチャを取得するには、<code>GET</code>リクエストを<code>/sign</code>エンドポイントに送信します:</span></p>

<markup
lang="java"

>private void sign(ServerRequest req, ServerResponse res) {
    vault.sign(Sign.Request.builder()
                       .keyId(signatureKeyOcid)
                       .algorithm(Sign.Request.ALGORITHM_SHA_224_RSA_PKCS_PSS)
                       .message(Base64Value.create(req.path().param("text"))))
            .map(Sign.Response::signature)
            .map(Base64Value::toBase64)
            .forSingle(res::send)
            .exceptionally(res::send);
}</markup>

</div>

<h3 id="_verification_of_a_signature"><span class="merged" id="all.2ePePb.1" title="原文 : Verification of a signature">シグネチャの検証</span></h3>
<div class="section">
<p><span class="merged" id="all.2jS7JA.1" title="原文 : To verify the correctness of the signature, submit a GET request to /verify endpoint:">シグネチャが正しいことを確認するには、<code>GET</code>リクエストを<code>/verify</code>エンドポイントに送信します:</span></p>

<markup
lang="java"

>private void verify(ServerRequest req, ServerResponse res) {
    String text = req.path().param("text");
    String signature = req.path().param("signature");

    vault.verify(Verify.Request.builder()
                         .keyId(signatureKeyOcid)
                         .algorithm(Sign.Request.ALGORITHM_SHA_224_RSA_PKCS_PSS)
                         .message(Base64Value.create(text))
                         .signature(Base64Value.createFromEncoded(signature)))
            .map(Verify.Response::isValid)
            .map(it -&gt; it ? "Signature Valid" : "Signature Invalid")
            .forSingle(res::send)
            .exceptionally(res::send);
}</markup>

</div>

<h3 id="_creating_a_signature"><span class="merged" id="all.4JqP66.1" title="原文 : Creating a signature">シグネチャの作成</span></h3>
<div class="section">
<p><span class="merged" id="all.Rwxce.1" title="原文 : To create a secret with a provided name, submit a GET request to /secret:">指定した名前でシークレットを作成するには、<code>GET</code>リクエストを<code>/secret</code>に送信します:</span></p>

<markup
lang="java"

>private void createSecret(ServerRequest req, ServerResponse res, String secretText) {
    vault.createSecret(CreateSecret.Request.builder()
                               .secretContent(CreateSecret.SecretContent.create(secretText))
                               .vaultId(vaultOcid)
                               .compartmentId(compartmentOcid)
                               .encryptionKeyId(encryptionKeyOcid)
                               .secretName(req.path().param("name")))
            .map(CreateSecret.Response::secret)
            .map(Secret::id)
            .forSingle(res::send)
            .exceptionally(res::send);
}</markup>

</div>

<h3 id="_getting_a_signature"><span class="merged" id="all.1PFw2f.1" title="原文 : Getting a signature">シグネチャの取得</span></h3>
<div class="section">
<p><span class="merged" id="all.2LBrjP" title="原文 : To get a secret by its OCID, submit a GET request to /secret:">OCIDでシークレットを取得するには、<code>GET</code>リクエストを<code>/secret</code>に送信します:</span></p>

<markup
lang="java"

>private void getSecret(ServerRequest req, ServerResponse res) {
    vault.getSecretBundle(GetSecretBundle.Request.create(req.path().param("id")))
            .forSingle(apiResponse -&gt; {
                Optional&lt;GetSecretBundle.Response&gt; entity = apiResponse.entity();
                if (entity.isEmpty()) {
                    res.status(Http.Status.NOT_FOUND_404).send();
                } else {
                    GetSecretBundle.Response response = entity.get();
                    res.send(response.secretString().orElse(""));
                }
            })
            .exceptionally(res::send);
}</markup>

</div>

<h3 id="_deleting_a_signature"><span class="merged" id="all.3yCErG.1" title="原文 : Deleting a signature">シグネチャの削除</span></h3>
<div class="section">
<p><span class="merged" id="all.2JHsV3.1" title="原文 : To delete a secret, a DELETE request to /secret should be used:">シークレットを削除するには、<code>/secret</code>に対する<code>DELETE</code>リクエストを使用する必要があります:</span></p>

<markup
lang="java"

>private void deleteSecret(ServerRequest req, ServerResponse res) {
    Instant deleteTime = Instant.now().plus(30, ChronoUnit.DAYS);

    vault.deleteSecret(DeleteSecret.Request.builder()
                               .secretId(req.path().param("id"))
                               .timeOfDeletion(deleteTime))
            .forSingle(it -&gt; res.status(it.status()).send())
            .exceptionally(res::send);

}</markup>

</div>
</div>
</doc-view>
