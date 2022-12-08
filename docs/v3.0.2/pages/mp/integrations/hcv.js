<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.10"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.8" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.7" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.5" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.7" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.y2VtB" title="原文 : Local Testing"><router-link @click.native="this.scrollFix('#Local-Testing')" to="#Local-Testing">ローカル・テスト</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1eCH3t" title="原文 : References"><router-link @click.native="this.scrollFix('#_references')" to="#_references">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.8"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.4eTCPn.spl1" title="原文 : HashiCorp Vault is a commonly used Vault in many microservices.">HashiCorp Vaultは、多くのマイクロサービスでよく使用されているVaultです。</span> <span class="merged" id="all.4eTCPn.spl2" title="原文 : The APIs are REST-based and Helidon implements them using reactive client.">APIはRESTベースであり、Helidonはリアクティブ・クライアントを使用して実装します。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.8"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.2iotqg" title="原文 : To enable HashiCorp Vault add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">HashiCorp Vaultを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.vault&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-vault-cdi&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.4WLHW2" title="原文 : The following is a list of maven coordinates of all Vault modules available:">次に、使用可能なすべてのVaultモジュールのmavenコーディネートのリストを示します:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.vault.auths&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-vault-auths-token&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.vault.auths&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-vault-auths-approle&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.vault.auths&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-vault-auths-k8s&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.vault.secrets&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-vault-secrets-kv1&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.vault.secrets&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-vault-secrets-kv2&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.vault.secrets&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-vault-secrets-cubbyhole&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.vault.secrets&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-vault-secrets-transit&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.vault.secrets&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-vault-secrets-database&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.vault.sys&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-vault-sys&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.5"  title="原文:: Usage">使用方法</span></h2>
<div class="section">
<p><span class="merged" id="all.3JhxTf" title="原文 : Vault integration supports the following:">Vault統合では、次の機能がサポートされています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3D4Hj6" title="原文 : Secret Engines: Key/Value version 2, Key/Value version 1, Cubbyhole, PKI, Transit, Database"><strong>シークレット・エンジン</strong>: キー/バリュー・バージョン2、キー/バリュー・バージョン1、Cubbyhole、PKI、トランジット、データベース</span></p>

</li>
<li>
<p><span class="merged" id="all.1arUZQ" title="原文 : Authentication Methods: Token, Kubernetes (k8s), AppRole"><strong>認証方式</strong>: トークン、Kubernetes (k8s)、AppRole</span></p>

</li>
<li>
<p><span class="merged" id="all.12tx12" title="原文 : Other Sys Operations and Configurations"><strong>その他のシステム操作および構成</strong></span></p>

</li>
</ul>

<p><span class="merged" id="all.2qYYw9.spl1" title="原文 : Each of these features is implemented as a separate module, with the Vault class binding them together.">これらの各機能は個別のモジュールとして実装され、Vaultクラスによって結合されます。</span> <span class="merged" id="all.2qYYw9.spl2" title="原文 : In Helidon MP, with injection, this binding is done automatically, and you can simply inject your favorite secret engine.">Helidon MPでは、インジェクションを使用すると、このバインディングが自動的に行われ、お気に入りのシークレット・エンジンを単にインジェクトできます。</span> </p>

<p><span class="merged" id="all.UYPG6" title="原文 : The following classes can be injected into any CDI bean (if appropriate module is on the classpath):">次のクラスは、任意のCDI Beanにインジェクトできます(適切なモジュールがクラスパスにある場合):</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.4aZPRH" title="原文 : Kv2Secrets - Key/Value Version 2 Secrets (versioned secrets, default)">Kv2Secrets - キー/バリュー・バージョン2のシークレット(バージョニングされたシークレット、デフォルト)</span></p>

</li>
<li>
<p><span class="merged" id="all.2UeEps" title="原文 : Kv1Secrets - Key/Value Version 1 Secrets (un-versioned secrets, legacy)">Kv1Secrets - キー/バリュー・バージョン1シークレット(バージョン管理されていないシークレット、レガシー)</span></p>

</li>
<li>
<p><span class="merged" id="all.xtZLv" title="原文 : CubbyholeSecrets - Cubbyhole secrets (token bound secrets)">CubbyholeSecrets - Cubbyholeシークレット(トークン・バウンド・シークレット)</span></p>

</li>
<li>
<p><span class="merged" id="all.2pNJaX" title="原文 : DbSecrets - Database secrets (for generating temporary DB credentials)">DbSecrets - データベース・シークレット(一時DB資格証明の生成用)</span></p>

</li>
<li>
<p><span class="merged" id="all.4HUq5P" title="原文 : PkiSecrets - PKI secrets (for generating keys and X.509 certificates)">PkiSecrets - PKIシークレット(キーおよびX.509証明書の生成用)</span></p>

</li>
<li>
<p><span class="merged" id="all.4Y3cPD" title="原文 : TransitSecrets - Transit operations (encryption, signatures, HMAC)">TransitSecrets - 転送操作(暗号化、シグネチャ、HMAC)</span></p>

</li>
<li>
<p><span class="merged" id="all.36mAGL" title="原文 : AppRoleAuth - AppRole authentication method (management operations)">AppRoleAuth - AppRole認証方式(管理操作)</span></p>

</li>
<li>
<p><span class="merged" id="all.1MuaPl" title="原文 : K8sAuth - Kubernetes authentication method (management operations)">K8sAuth - Kubernetes認証方式(管理操作)</span></p>

</li>
<li>
<p><span class="merged" id="all.3boHn7" title="原文 : TokenAuth - Token authentication method (management operations)">TokenAuth - トークン認証方式(管理操作)</span></p>

</li>
<li>
<p><span class="merged" id="all.S6aY1" title="原文 : Sys - System operations (management of Vault - enabling/disabling secret engines and authentication methods)">Sys - システム操作(Vaultの管理) - シークレット・エンジンおよび認証方式の有効化/無効化)</span></p>

</li>
<li>
<p><span class="merged" id="all.1FjFy2" title="原文 : *Rx - reactive counterparts to the classes defined above, usually not recommended in CDI, as it is a blocking environment">*Rx - 前述のように定義されたクラスに対応するリアクティブ。CDIはブロッキング環境であるため、通常はお薦めしません</span></p>

</li>
</ul>

<p><span class="merged" id="all.3RFxO1" title="原文 : In addition to these features, Vault itself can be authenticated as follows:">これらの機能に加えて、Vault自体は次のように認証されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3oaITJ" title="原文 : Token authentication - token is configured when connecting to Vault">トークン認証 - トークンはVaultへの接続時に構成されます</span></p>

</li>
</ul>

<div class="listing">
<markup>vault.address=http://localhost:8200
vault.token=my-token</markup>
</div>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3ErKYC" title="原文 : AppRole authentication - AppRole ID and secret ID are configured, integration exchanges these for a temporary token that is used to connect to Vault">AppRole認証 - AppRole IDおよびシークレットIDが構成されており、統合により、Vaultへの接続に使用される一時トークンとこれらが交換されます</span></p>

</li>
</ul>

<div class="listing">
<markup>vault.auth.app-role.role-id=app-role-id
vault.auth.app-role.secret-id=app-role-secret-id</markup>
</div>

<ul class="ulist">
<li>
<p><span class="merged" id="all.37g4yJ" title="原文 : K8s authentication - the k8s JWT token is discovered on current node and used to obtain a temporary token that is used to connect to Vault">K8s認証 - k8s JWTトークンが現在のノードで検出され、Vaultへの接続に使用される一時トークンを取得するために使用されます</span></p>

</li>
</ul>

<div class="listing">
<markup>vault.auth.k8s.token-role=my-role <span class="conum" data-value="1" /></markup>
</div>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4eCd0D" title="原文 : The token role must be configured in Vault">トークン・ロールはVaultで構成する必要があります</span></li>
</ul>


<h3 id="_extensibility"><span class="merged" id="all.3z3Z0n"  title="原文:: Extensibility">拡張性</span></h3>
<div class="section">
<p><span class="merged" id="all.3MzQXg.spl1" title="原文 : New secret engines and authentication methods can be implemented quite easily, as the integration is based on service providers (using ServiceLoader).">統合はサービス・プロバイダに基づいているため(ServiceLoaderを使用)、新しいシークレット・エンジンおよび認証方式は非常に簡単に実装できます。</span> <span class="merged" id="all.3MzQXg.spl2" title="原文 : This gives us (or you, as the users) the option to add new secret engines and/or authentication methods without adding a plethora of methods to the Vault class.">これにより、Vaultクラスにメソッドを追加せずに、新しいシークレット・エンジンや認証方式を追加できます。</span> </p>

<p><span class="merged" id="all.3BJnlu" title="原文 : See the following SPIs:">次のSPIを参照してください:</span></p>

<markup
lang="listing"

>io.helidon.integrations.vault.spi.AuthMethodProvider
io.helidon.integrations.vault.spi.SecretsEngineProvider
io.helidon.integrations.vault.spi.SysProvider
io.helidon.integrations.vault.spi.VaultAuth
io.helidon.integrations.vault.spi.InjectionProvider</markup>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.7"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.3CiZ43" title="原文 : The following example shows usage of Vault to encrypt a secret using the default Vault configuration (in a JAX-RS resource):">次の例では、デフォルトのVault構成(JAX-RSリソース内)を使用してシークレットを暗号化するためのVaultの使用方法を示します:</span></p>

<markup
lang="java"

>@Path("/transit")
class TransitResource {
    private final TransitSecrets secrets;

    @Inject
    TransitResource(TransitSecrets secrets) {
        this.secrets = secrets;
    }

    @Path("/encrypt/{secret: .*}")
    @GET
    public String encrypt(@PathParam("secret") String secret) {
        return secrets.encrypt(Encrypt.Request.builder()
                        .encryptionKeyName(ENCRYPTION_KEY)
                        .data(Base64Value.create(secret)))
                    .encrypted()
                    .cipherText();
    }
}</markup>


<h3 id="_cubbyhole_secrets"><span class="merged" id="all.1IhZHd" title="原文 : Cubbyhole secrets">Cubbyholeシークレット</span></h3>
<div class="section">
<p><span class="merged" id="all.1J2JWD" title="原文 : Cubbyhole example:">Cubbyholeの例:</span></p>

<markup
lang="java"

>@Path("/cubbyhole")
public class CubbyholeResource {
    private final CubbyholeSecrets secrets;

    @Inject
    CubbyholeResource(CubbyholeSecrets secrets) {
        this.secrets = secrets;
    }

    @POST
    @Path("/secrets/{path: .*}")
    public Response createSecret(@PathParam("path") String path, String secret) { <span class="conum" data-value="1" />
        CreateCubbyhole.Response response = secrets.create(path, Map.of("secret", secret));

        return Response.ok()
                .entity("Created secret on path: " + path + ", key is \"secret\", original status: " + response.status().code())
                .build();
    }

    @DELETE
    @Path("/secrets/{path: .*}")
    public Response deleteSecret(@PathParam("path") String path) { <span class="conum" data-value="2" />
        DeleteCubbyhole.Response response = secrets.delete(path);

        return Response.ok()
                .entity("Deleted secret on path: " + path + ". Original status: " + response.status().code())
                .build();
    }

    @GET
    @Path("/secrets/{path: .*}")
    public Response getSecret(@PathParam("path") String path) { <span class="conum" data-value="3" />
        Optional&lt;Secret&gt; secret = secrets.get(path);

        if (secret.isPresent()) {
            Secret kv1Secret = secret.get();
            return Response.ok()
                    .entity("Secret: " + secret.get().values().toString())
                    .build();
        } else {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4em2Cd" title="原文 : Create a secret from request entity, the name of the value is {@code secret}.">リクエスト・エンティティからシークレットを作成します。値の名前は {@code secret}です。</span></li>
<li data-value="2"><span class="merged" id="all.23pdH3" title="原文 : Delete the secret on a specified path.">指定したパスのシークレットを削除します。</span></li>
<li data-value="3"><span class="merged" id="all.rsktv" title="原文 : Get the secret on a specified path.">指定されたパスのシークレットを取得します。</span></li>
</ul>

</div>


<h3 id="_kv1_secrets"><span class="merged" id="all.3S3Pwj" title="原文 : KV1 secrets">KV1シークレット</span></h3>
<div class="section">
<p><span class="merged" id="all.uq5Eb" title="原文 : Key/Value version 1 secrets engine operations:">キー/バリュー・バージョン1のシークレット・エンジン操作:</span></p>

<markup
lang="java"

>@Path("/kv1")
public class Kv1Resource {
    private final Sys sys;
    private final Kv1Secrets secrets;

    @Inject
    Kv1Resource(Sys sys, Kv1Secrets secrets) {
        this.sys = sys;
        this.secrets = secrets;
    }

    @Path("/engine")
    @GET
    public Response enableEngine() { <span class="conum" data-value="1" />
        EnableEngine.Response response = sys.enableEngine(Kv1SecretsRx.ENGINE);

        return Response.ok()
                .entity("Key/value version 1 secret engine is now enabled. Original status: " + response.status().code())
                .build();
    }

    @Path("/engine")
    @DELETE
    public Response disableEngine() { <span class="conum" data-value="2" />
        DisableEngine.Response response = sys.disableEngine(Kv1SecretsRx.ENGINE);
        return Response.ok()
                .entity("Key/value version 1 secret engine is now disabled. Original status: " + response.status().code())
                .build();
    }

    @POST
    @Path("/secrets/{path: .*}")
    public Response createSecret(@PathParam("path") String path, String secret) { <span class="conum" data-value="3" />
        CreateKv&lt;1&gt;Response response = secrets.create(path, Map.of("secret", secret));

        return Response.ok()
                .entity("Created secret on path: " + path + ", key is \"secret\", original status: " + response.status().code())
                .build();
    }

    @DELETE
    @Path("/secrets/{path: .*}")
    public Response deleteSecret(@PathParam("path") String path) { <span class="conum" data-value="4" />
        DeleteKv&lt;1&gt;Response response = secrets.delete(path);

        return Response.ok()
                .entity("Deleted secret on path: " + path + ". Original status: " + response.status().code())
                .build();
    }

    @GET
    @Path("/secrets/{path: .*}")
    public Response getSecret(@PathParam("path") String path) { <span class="conum" data-value="5" />
        Optional&lt;Secret&gt; secret = secrets.get(path);

        if (secret.isPresent()) {
            Secret kv1Secret = secret.get();
            return Response.ok()
                    .entity("Secret: " + secret.get().values().toString())
                    .build();
        } else {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2AWrwe" title="原文 : Enable the secrets engine on the default path.">デフォルト・パスでシークレット・エンジンを有効にします。</span></li>
<li data-value="2"><span class="merged" id="all.2pYHjL" title="原文 : Disable the secrets engine on the default path.">デフォルト・パスのシークレット・エンジンを無効にします。</span></li>
<li data-value="3"><span class="merged" id="all.3T926B" title="原文 : Create a secret from request entity, the name of the value is secret.">リクエスト・エンティティからシークレットを作成します。値の名前は<code>secret</code>です。</span></li>
<li data-value="4"><span class="merged" id="all.23pdH3.1" title="原文 : Delete the secret on a specified path.">指定したパスのシークレットを削除します。</span></li>
<li data-value="5"><span class="merged" id="all.rsktv.1" title="原文 : Get the secret on a specified path.">指定されたパスのシークレットを取得します。</span></li>
</ul>

</div>


<h3 id="_kv2_secrets"><span class="merged" id="all.2R3tC4" title="原文 : KV2 secrets">KV2シークレット</span></h3>
<div class="section">
<p><span class="merged" id="all.tQdbe" title="原文 : Key/Value version 2 secrets engine operations:">キー/バリュー・バージョン2シークレット・エンジンの操作:</span></p>

<markup
lang="java"

>@Path("/kv2")
public class Kv2Resource {
    private final Kv2Secrets secrets;

    @Inject
    Kv2Resource(@VaultName("app-role") @VaultPath("custom") Kv2Secrets secrets) {
        this.secrets = secrets;
    }

    @POST
    @Path("/secrets/{path: .*}")
    public Response createSecret(@PathParam("path") String path, String secret) { <span class="conum" data-value="1" />
        CreateKv&lt;2&gt;Response response = secrets.create(path, Map.of("secret", secret));
        return Response.ok()
                .entity("Created secret on path: " + path + ", key is \"secret\", original status: " + response.status().code())
                .build();
    }

    @DELETE
    @Path("/secrets/{path: .*}")
    public Response deleteSecret(@PathParam("path") String path) { <span class="conum" data-value="2" />
        DeleteAllKv&lt;2&gt;Response response = secrets.deleteAll(path);
        return Response.ok()
                .entity("Deleted secret on path: " + path + ". Original status: " + response.status().code())
                .build();
    }

    @GET
    @Path("/secrets/{path: .*}")
    public Response getSecret(@PathParam("path") String path) { <span class="conum" data-value="3" />

        Optional&lt;Kv2Secret&gt; secret = secrets.get(path);

        if (secret.isPresent()) {
            Kv2Secret kv2Secret = secret.get();
            return Response.ok()
                    .entity("Version " + kv2Secret.metadata().version() + ", secret: " + kv2Secret.values().toString())
                    .build();
        } else {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3T926B.1" title="原文 : Create a secret from request entity, the name of the value is secret.">リクエスト・エンティティからシークレットを作成します。値の名前は<code>secret</code>です。</span></li>
<li data-value="2"><span class="merged" id="all.23pdH3.2" title="原文 : Delete the secret on a specified path.">指定したパスのシークレットを削除します。</span></li>
<li data-value="3"><span class="merged" id="all.rsktv.2" title="原文 : Get the secret on a specified path.">指定されたパスのシークレットを取得します。</span></li>
</ul>

</div>


<h3 id="_transit_secrets"><span class="merged" id="all.2O2uwY" title="原文 : Transit secrets">トランジット・シークレット</span></h3>
<div class="section">
<p><span class="merged" id="all.3Lb4x" title="原文 : Transit secrets engine operations:">転送シークレット・エンジンの操作:</span></p>

<markup
lang="java"

>@Path("/transit")
public class TransitResource {
    private static final String ENCRYPTION_KEY = "encryption-key";
    private static final String SIGNATURE_KEY = "signature-key";

    private final Sys sys;
    private final TransitSecrets secrets;

    @Inject
    TransitResource(Sys sys, TransitSecrets secrets) {
        this.sys = sys;
        this.secrets = secrets;
    }

    @Path("/engine")
    @GET
    public Response enableEngine() { <span class="conum" data-value="1" />
        EnableEngine.Response response = sys.enableEngine(TransitSecretsRx.ENGINE);

        return Response.ok()
                .entity("Transit secret engine is now enabled. Original status: " + response.status().code())
                .build();
    }

    @Path("/engine")
    @DELETE
    public Response disableEngine() { <span class="conum" data-value="2" />
        DisableEngine.Response response = sys.disableEngine(TransitSecretsRx.ENGINE);

        return Response.ok()
                .entity("Transit secret engine is now disabled. Original status: " + response.status())
                .build();
    }

    @Path("/keys")
    @GET
    public Response createKeys() { <span class="conum" data-value="3" />
        secrets.createKey(CreateKey.Request.builder()
                                  .name(ENCRYPTION_KEY));

        secrets.createKey(CreateKey.Request.builder()
                                  .name(SIGNATURE_KEY)
                                  .type("rsa-2048"));

        return Response.ok()
                .entity("Created encryption (and HMAC), and signature keys")
                .build();
    }

    @Path("/keys")
    @DELETE
    public Response deleteKeys() { <span class="conum" data-value="4" />
        // we must first enable deletion of the key (by default it cannot be deleted)
        secrets.updateKeyConfig(UpdateKeyConfig.Request.builder()
                                        .name(ENCRYPTION_KEY)
                                        .allowDeletion(true));

        secrets.updateKeyConfig(UpdateKeyConfig.Request.builder()
                                        .name(SIGNATURE_KEY)
                                        .allowDeletion(true));

        secrets.deleteKey(DeleteKey.Request.create(ENCRYPTION_KEY));
        secrets.deleteKey(DeleteKey.Request.create(SIGNATURE_KEY));

        return Response.ok()
                .entity("Deleted encryption (and HMAC), and signature keys")
                .build();
    }

    @Path("/encrypt/{secret: .*}")
    @GET
    public String encryptSecret(@PathParam("secret") String secret) { <span class="conum" data-value="5" />
        return secrets.encrypt(Encrypt.Request.builder()
                                       .encryptionKeyName(ENCRYPTION_KEY)
                                       .data(Base64Value.create(secret)))
                .encrypted()
                .cipherText();
    }

    @Path("/decrypt/{cipherText: .*}")
    @GET
    public String decryptSecret(@PathParam("cipherText") String cipherText) { <span class="conum" data-value="6" />
        return secrets.decrypt(Decrypt.Request.builder()
                                       .encryptionKeyName(ENCRYPTION_KEY)
                                       .cipherText(cipherText))
                .decrypted()
                .toDecodedString();
    }

    @Path("/hmac/{text}")
    @GET
    public String hmac(@PathParam("text") String text) { <span class="conum" data-value="7" />
        return secrets.hmac(Hmac.Request.builder()
                                    .hmacKeyName(ENCRYPTION_KEY)
                                    .data(Base64Value.create(text)))
                .hmac();
    }

    @Path("/sign/{text}")
    @GET
    public String sign(@PathParam("text") String text) { <span class="conum" data-value="8" />
        return secrets.sign(Sign.Request.builder()
                                    .signatureKeyName(SIGNATURE_KEY)
                                    .data(Base64Value.create(text)))
                .signature();
    }

    @Path("/verify/hmac/{secret}/{hmac: .*}")
    @GET
    public String verifyHmac(@PathParam("secret") String secret, @PathParam("hmac") String hmac) { <span class="conum" data-value="9" />
        boolean isValid = secrets.verify(Verify.Request.builder()
                                                 .digestKeyName(ENCRYPTION_KEY)
                                                 .data(Base64Value.create(secret))
                                                 .hmac(hmac))
                .isValid();

        return (isValid ? "HMAC Valid" : "HMAC Invalid");
    }
    @Path("/verify/sign/{secret}/{signature: .*}")
    @GET
    public String verifySignature(@PathParam("secret") String secret, @PathParam("signature") String signature) { <span class="conum" data-value="10" />
        boolean isValid = secrets.verify(Verify.Request.builder()
                                                 .digestKeyName(SIGNATURE_KEY)
                                                 .data(Base64Value.create(secret))
                                                 .signature(signature))
                .isValid();

        return (isValid ? "Signature Valid" : "Signature Invalid");
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2AWrwe.1" title="原文 : Enable the secrets engine on the default path.">デフォルト・パスでシークレット・エンジンを有効にします。</span></li>
<li data-value="2"><span class="merged" id="all.2pYHjL.1" title="原文 : Disable the secrets engine on the default path.">デフォルト・パスのシークレット・エンジンを無効にします。</span></li>
<li data-value="3"><span class="merged" id="all.2rbklt" title="原文 : Create the encrypting and signature keys.">暗号化キーとシグネチャ・キーを作成します。</span></li>
<li data-value="4"><span class="merged" id="all.3dWJTJ" title="原文 : Delete the encryption and signature keys.">暗号化キーとシグネチャ・キーを削除します。</span></li>
<li data-value="5"><span class="merged" id="all.3g5E3c" title="原文 : Encrypt a secret.">シークレットを暗号化します。</span></li>
<li data-value="6"><span class="merged" id="all.OXDfq" title="原文 : Decrypt a secret.">シークレットを復号化します。</span></li>
<li data-value="7"><span class="merged" id="all.2q7OAg" title="原文 : Create an HMAC for text.">テキストのHMACを作成します。</span></li>
<li data-value="8"><span class="merged" id="all.2AoaCz" title="原文 : Create a signature for text.">テキストのシグネチャを作成します。</span></li>
<li data-value="9"><span class="merged" id="all.2ih1J1" title="原文 : Verify HMAC.">HMACを確認します。</span></li>
<li data-value="10"><span class="merged" id="all.2lCElH"  title="原文:: Verify signature.">シグネチャを確認してください。</span></li>
</ul>

</div>

</div>


<h2 id="Local-Testing"><span class="merged" id="all.2HSCRq" title="原文 : Local Testing">ローカル・テスト</span></h2>
<div class="section">
<p><span class="merged" id="all.101NjA" title="原文 : Vault is available as a docker image, so to test locally, you can simply:">Vaultはドッキング・ステーション・イメージとして使用できるため、ローカルでテストするには、次の操作を行います:</span></p>

<markup
lang="bash"

>docker run -e VAULT_DEV_ROOT_TOKEN_ID=my-token -d --name=vault -p8200:8200 vault</markup>

<p><span class="merged" id="all.2LLPWM.spl1" title="原文 : This will create a Vault docker image, run it in background and open it on localhost:8200 with a custom root token my-token, using name vault.">これにより、Vault dockerイメージが作成され、バックグラウンドで実行して、名前ボールトを使用してカスタム・ルート・トークンmy-tokenを使用して<code>localhost:8200</code>で開きます。</span> <span class="merged" id="all.2LLPWM.spl2" title="原文 : This is of course only suitable for local testing, as the root token has too many rights, but it can be easily used with the examples below.">ルート・トークンの権限が多すぎるため、これはローカル・テストにのみ適していますが、次の例で簡単に使用できます。</span> </p>

</div>


<h2 id="_references"><span class="merged" id="all.3oSja0.2"  title="原文:: References">参照</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.3RehOY" title="原文 : Hashicorp Vault Usage Examples"><a href="https://github.com/oracle/helidon/tree/master/examples/integrations/vault" target="_blank">Hashicorp Vaultの使用例</a></span></p>

</li>
</ul>

</div>

</doc-view>
