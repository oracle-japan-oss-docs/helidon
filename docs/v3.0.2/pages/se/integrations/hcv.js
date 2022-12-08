<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.50"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.48" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.36" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.30" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.32" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.y2VtB.1" title="原文 : Local Testing"><router-link @click.native="this.scrollFix('#Local-Testing')" to="#Local-Testing">ローカル・テスト</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1eCH3t.4" title="原文 : References"><router-link @click.native="this.scrollFix('#_references')" to="#_references">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.64"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.4eTCPn.1.spl1" title="原文 : HashiCorp Vault is a commonly used Vault in many microservices.">HashiCorp Vaultは、多くのマイクロサービスでよく使用されているVaultです。</span> <span class="merged" id="all.4eTCPn.1.spl2" title="原文 : The APIs are REST-based and Helidon implements them using reactive client.">APIはRESTベースであり、Helidonはリアクティブ・クライアントを使用して実装します。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.46"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.2iotqg.1" title="原文 : To enable HashiCorp Vault add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">HashiCorp Vaultを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.vault&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-vault&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.4WLHW2.1" title="原文 : The following is a list of maven coordinates of all Vault modules available:">次に、使用可能なすべてのVaultモジュールのmavenコーディネートのリストを示します:</span></p>

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


<h2 id="_usage"><span class="merged" id="all.JUOSC.47"  title="原文:: Usage">使用方法</span></h2>
<div class="section">
<p><span class="merged" id="all.3JhxTf.1" title="原文 : Vault integration supports the following:">Vault統合では、次の機能がサポートされています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3D4Hj6.1" title="原文 : Secret Engines: Key/Value version 2, Key/Value version 1, Cubbyhole, PKI, Transit, Database"><strong>シークレット・エンジン</strong>: キー/バリュー・バージョン2、キー/バリュー・バージョン1、Cubbyhole、PKI、トランジット、データベース</span></p>

</li>
<li>
<p><span class="merged" id="all.1arUZQ.1" title="原文 : Authentication Methods: Token, Kubernetes (k8s), AppRole"><strong>認証方式</strong>: トークン、Kubernetes (k8s)、AppRole</span></p>

</li>
<li>
<p><span class="merged" id="all.12tx12.1" title="原文 : Other Sys Operations and Configurations"><strong>その他のシステム操作および構成</strong></span></p>

</li>
</ul>

<p><span class="merged" id="all.4EFekV.spl1" title="原文 : Each of these features is implemented as a separate module, with the Vault class binding them together.">これらの各機能は個別のモジュールとして実装され、Vaultクラスによって結合されます。</span> <span class="merged" id="all.4EFekV.spl2" title="原文 : Code to set up Vault and obtain a specific secret engine:">Vaultを設定し、特定のシークレット・エンジンを取得するコード:</span> </p>

<markup
lang="java"

>Vault vault = Vault.builder()
     .config(config.get("vault"))
     .build();
Kv2SecretsRx secrets = vault.secrets(Kv2SecretsRx.ENGINE);</markup>

<p><span class="merged" id="all.3ipAng" title="原文 : Similar code can be used for any secret engine available:">同様のコードは、使用可能なすべてのシークレット・エンジンに使用できます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.37HuBX" title="原文 : Kv2SecretsRx - Key/Value Version 2 Secrets (versioned secrets, default)">Kv2SecretsRx - キー/バリュー・バージョン2のシークレット(バージョニングされたシークレット、デフォルト)</span></p>

</li>
<li>
<p><span class="merged" id="all.Fg4pI" title="原文 : Kv1SecretsRx - Key/Value Version 1 Secrets (unversioned secrets, legacy)">Kv1SecretsRx - キー/バリュー・バージョン1のシークレット(バージョニングされていないシークレット、レガシー)</span></p>

</li>
<li>
<p><span class="merged" id="all.26GbHF" title="原文 : CubbyholeSecretsRx - Cubbyhole secrets (token bound secrets)">CubbyholeSecretsRx - Cubbyholeシークレット(トークン・バウンド・シークレット)</span></p>

</li>
<li>
<p><span class="merged" id="all.3DrPzL" title="原文 : DbSecretsRx - Database secrets (for generating temporary DB credentials)">DbSecretsRx - データベース・シークレット(一時DB資格証明の生成用)</span></p>

</li>
<li>
<p><span class="merged" id="all.V938o" title="原文 : PkiSecretsRx - PKI secrets (for generating keys and X.509 certificates)">PkiSecretsRx - PKIシークレット(キーおよびX.509証明書の生成用)</span></p>

</li>
<li>
<p><span class="merged" id="all.brMUq" title="原文 : TransitSecretsRx - Transit operations (encryption, signatures, HMAC)">TransitSecretsRx - 転送操作(暗号化、シグネチャ、HMAC)</span></p>

</li>
</ul>

<p><span class="merged" id="all.3RFxO1.1" title="原文 : In addition to these features, Vault itself can be authenticated as follows:">これらの機能に加えて、Vault自体は次のように認証されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3oaITJ.1" title="原文 : Token authentication - token is configured when connecting to Vault">トークン認証 - トークンはVaultへの接続時に構成されます</span></p>

</li>
</ul>

<div class="listing">
<markup>vault:
   address: "http://localhost:8200"
   token: "my-token"</markup>
</div>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3ErKYC.1" title="原文 : AppRole authentication - AppRole ID and secret ID are configured, integration exchanges these for a temporary token that is used to connect to Vault">AppRole認証 - AppRole IDおよびシークレットIDが構成されており、統合により、Vaultへの接続に使用される一時トークンとこれらが交換されます</span></p>

</li>
</ul>

<div class="listing">
<markup>vault:
  auth:
    app-role:
      role-id: "app-role-id"
      secret-id: app-role-secret-id</markup>
</div>

<ul class="ulist">
<li>
<p><span class="merged" id="all.37g4yJ.1" title="原文 : K8s authentication - the k8s JWT token is discovered on current node and used to obtain a temporary token that is used to connect to Vault">K8s認証 - k8s JWTトークンが現在のノードで検出され、Vaultへの接続に使用される一時トークンを取得するために使用されます</span></p>

</li>
</ul>

<div class="listing">
<markup>vault:
  auth:
    k8s:
      token-role: "my-role" <span class="conum" data-value="1" /></markup>
</div>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2MYhgF" title="原文 : The token role must be configured in Vault Minimal configuration to connect to Vault:">Vaultに接続するには、Vault Minimal構成でトークン・ロールを構成する必要があります:</span></li>
</ul>

<p><span class="merged" id="all.3zKXoF" title="原文 : Code to get the Sys operations of Vault:">VaultのSys操作を取得するコード:</span></p>

<markup
lang="java"

>SysRx sys = vault.sys(SysRx.API);</markup>


<h3 id="_extensibility"><span class="merged" id="all.3z3Z0n.1"  title="原文:: Extensibility">拡張性</span></h3>
<div class="section">
<p><span class="merged" id="all.3MzQXg.1.spl1" title="原文 : New secret engines and authentication methods can be implemented quite easily, as the integration is based on service providers (using ServiceLoader).">統合はサービス・プロバイダに基づいているため(ServiceLoaderを使用)、新しいシークレット・エンジンおよび認証方式は非常に簡単に実装できます。</span> <span class="merged" id="all.3MzQXg.1.spl2" title="原文 : This gives us (or you, as the users) the option to add new secret engines and/or authentication methods without adding a plethora of methods to the Vault class.">これにより、Vaultクラスにメソッドを追加せずに、新しいシークレット・エンジンや認証方式を追加できます。</span> </p>

<p><span class="merged" id="all.3BJnlu.1" title="原文 : See the following SPIs:">次のSPIを参照してください:</span></p>

<markup
lang="properties"

>io.helidon.integrations.vault.spi.AuthMethodProvider
io.helidon.integrations.vault.spi.SecretsEngineProvider
io.helidon.integrations.vault.spi.SysProvider
io.helidon.integrations.vault.spi.VaultAuth
io.helidon.integrations.vault.spi.InjectionProvider</markup>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.35"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.m4QWu" title="原文 : The following example shows usage of Vault to encrypt a secret.">次の例は、シークレットを暗号化するためのVaultの使用を示しています。</span></p>


<h3 id="_usage_with_webserver"><span class="merged" id="all.1AmitT" title="原文 : Usage with WebServer">WebServerでの使用方法</span></h3>
<div class="section">
<p><span class="merged" id="all.1dLGRn" title="原文 : Configure the Vault object using token base configuration:">トークン・ベース構成を使用して<code>Vault</code>オブジェクトを構成します:</span></p>

<markup
lang="java"

>Config config = buildConfig();
        Vault tokenVault = Vault.builder()
                .config(config.get("vault.token"))
                .updateWebClient(it -&gt; it.connectTimeout(5, TimeUnit.SECONDS)
                        .readTimeout(5, TimeUnit.SECONDS))
                .build();</markup>

<p><span class="merged" id="all.3MbguR" title="原文 : Then WebService has to be configured with endpoints routing registered:">次に、エンドポイント・ルーティングを登録して<code>WebService</code>を構成する必要があります:</span></p>

<markup
lang="java"

>SysRx sys = tokenVault.sys(SysRx.API);
WebServer webServer = WebServer.builder()
        .config(config.get("server"))
        .routing(Routing.builder()
                         .register("/cubbyhole", new CubbyholeService(sys, tokenVault.secrets(CubbyholeSecretsRx.ENGINE)))
                         .register("/kv1", new Kv1Service(sys, tokenVault.secrets(Kv1SecretsRx.ENGINE)))
                         .register("/kv2", new Kv2Service(sys, tokenVault.secrets(Kv2SecretsRx.ENGINE)))
                         .register("/transit", new TransitService(sys, tokenVault.secrets(TransitSecretsRx.ENGINE))))
        .build()
        .start()
        .await();</markup>

<p><span class="merged" id="all.JBwqc" title="原文 : AppRole-based and Kubernetes authentications are available.">AppRoleベースおよびKubernetes認証を使用できます。</span></p>

</div>


<h3 id="_cubbyhole_secrets"><span class="merged" id="all.1IhZHd.1" title="原文 : Cubbyhole secrets">Cubbyholeシークレット</span></h3>
<div class="section">
<p><span class="merged" id="all.qUZan" title="原文 : Cubbyhole secrets engine operations:">Cubbyholeシークレット・エンジンの操作:</span></p>

<markup
lang="java"

>@Override
public void update(Routing.Rules rules) {
    rules.get("/create", this::createSecrets)
            .get("/secrets/{path:.*}", this::getSecret);
}

private void createSecrets(ServerRequest req, ServerResponse res) { <span class="conum" data-value="1" />
    secrets.create("first/secret", Map.of("key", "secretValue"))
            .thenAccept(ignored -&gt; res.send("Created secret on path /first/secret"))
            .exceptionally(res::send);
}

private void getSecret(ServerRequest req, ServerResponse res) { <span class="conum" data-value="2" />
    String path = req.path().param("path");

    secrets.get(path)
            .thenAccept(secret -&gt; {
                if (secret.isPresent()) {
                    // using toString so we do not need to depend on JSON-B
                    res.send(secret.get().values().toString());
                } else {
                    res.status(Http.Status.NOT_FOUND_404);
                    res.send();
                }
            })
            .exceptionally(res::send);
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.rcQ2U" title="原文 : Create a secret from request entity.">リクエスト・エンティティからシークレットを作成します。</span></li>
<li data-value="2"><span class="merged" id="all.rsktv.3" title="原文 : Get the secret on a specified path.">指定されたパスのシークレットを取得します。</span></li>
</ul>

</div>


<h3 id="_kv1_secrets"><span class="merged" id="all.26pxrl" title="原文 : KV1 Secrets">KV1のシークレット</span></h3>
<div class="section">
<p><span class="merged" id="all.uq5Eb.1" title="原文 : Key/Value version 1 secrets engine operations:">キー/バリュー・バージョン1のシークレット・エンジン操作:</span></p>

<markup
lang="java"

>@Override
public void update(Routing.Rules rules) {
    rules.get("/enable", this::enableEngine)
            .get("/create", this::createSecrets)
            .get("/secrets/{path:.*}", this::getSecret)
            .delete("/secrets/{path:.*}", this::deleteSecret)
            .get("/disable", this::disableEngine);
}

private void disableEngine(ServerRequest req, ServerResponse res) { <span class="conum" data-value="1" />
    sys.disableEngine(Kv1SecretsRx.ENGINE)
            .thenAccept(ignored -&gt; res.send("KV1 Secret engine disabled"))
            .exceptionally(res::send);
}

private void enableEngine(ServerRequest req, ServerResponse res) { <span class="conum" data-value="2" />
    sys.enableEngine(Kv1SecretsRx.ENGINE)
            .thenAccept(ignored -&gt; res.send("KV1 Secret engine enabled"))
            .exceptionally(res::send);
}

private void createSecrets(ServerRequest req, ServerResponse res) { <span class="conum" data-value="3" />
    secrets.create("first/secret", Map.of("key", "secretValue"))
            .thenAccept(ignored -&gt; res.send("Created secret on path /first/secret"))
            .exceptionally(res::send);
}

private void deleteSecret(ServerRequest req, ServerResponse res) { <span class="conum" data-value="4" />
    String path = req.path().param("path");

    secrets.delete(path)
            .thenAccept(ignored -&gt; res.send("Deleted secret on path " + path));
}

private void getSecret(ServerRequest req, ServerResponse res) { <span class="conum" data-value="5" />
    String path = req.path().param("path");

    secrets.get(path)
            .thenAccept(secret -&gt; {
                if (secret.isPresent()) {
                    // using toString so we do not need to depend on JSON-B
                    res.send(secret.get().values().toString());
                } else {
                    res.status(Http.Status.NOT_FOUND_404);
                    res.send();
                }
            })
            .exceptionally(res::send);
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2pYHjL.2" title="原文 : Disable the secrets engine on the default path.">デフォルト・パスのシークレット・エンジンを無効にします。</span></li>
<li data-value="2"><span class="merged" id="all.2AWrwe.2" title="原文 : Enable the secrets engine on the default path.">デフォルト・パスでシークレット・エンジンを有効にします。</span></li>
<li data-value="3"><span class="merged" id="all.rcQ2U.1" title="原文 : Create a secret from request entity.">リクエスト・エンティティからシークレットを作成します。</span></li>
<li data-value="4"><span class="merged" id="all.23pdH3.3" title="原文 : Delete the secret on a specified path.">指定したパスのシークレットを削除します。</span></li>
<li data-value="5"><span class="merged" id="all.rsktv.4" title="原文 : Get the secret on a specified path.">指定されたパスのシークレットを取得します。</span></li>
</ul>

</div>


<h3 id="_kv2_secrets"><span class="merged" id="all.1MpXAa" title="原文 : KV2 Secrets">KV2のシークレット</span></h3>
<div class="section">
<p><span class="merged" id="all.tQdbe.1" title="原文 : Key/Value version 2 secrets engine operations:">キー/バリュー・バージョン2シークレット・エンジンの操作:</span></p>

<markup
lang="java"

>@Override
public void update(Routing.Rules rules) {
    rules.get("/create", this::createSecrets)
            .get("/secrets/{path:.*}", this::getSecret)
            .delete("/secrets/{path:.*}", this::deleteSecret);
}

private void createSecrets(ServerRequest req, ServerResponse res) { <span class="conum" data-value="1" />
    secrets.create("first/secret", Map.of("key", "secretValue"))
            .thenAccept(ignored -&gt; res.send("Created secret on path /first/secret"))
            .exceptionally(res::send);
}

private void deleteSecret(ServerRequest req, ServerResponse res) { <span class="conum" data-value="2" />
    String path = req.path().param("path");

    secrets.deleteAll(path)
            .thenAccept(ignored -&gt; res.send("Deleted secret on path " + path));
}

private void getSecret(ServerRequest req, ServerResponse res) { <span class="conum" data-value="3" />
    String path = req.path().param("path");

    secrets.get(path)
            .thenAccept(secret -&gt; {
                if (secret.isPresent()) {
                    // using toString so we do not need to depend on JSON-B
                    Kv2Secret kv2Secret = secret.get();
                    res.send("Version " + kv2Secret.metadata().version() + ", secret: " + kv2Secret.values().toString());
                } else {
                    res.status(Http.Status.NOT_FOUND_404);
                    res.send();
                }
            })
            .exceptionally(res::send);
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.rcQ2U.2" title="原文 : Create a secret from request entity.">リクエスト・エンティティからシークレットを作成します。</span></li>
<li data-value="2"><span class="merged" id="all.23pdH3.4" title="原文 : Delete the secret on a specified path.">指定したパスのシークレットを削除します。</span></li>
<li data-value="3"><span class="merged" id="all.rsktv.5" title="原文 : Get the secret on a specified path.">指定されたパスのシークレットを取得します。</span></li>
</ul>

</div>


<h3 id="_transit_secrets"><span class="merged" id="all.2O2uwY.1" title="原文 : Transit secrets">トランジット・シークレット</span></h3>
<div class="section">
<p><span class="merged" id="all.3Lb4x.1" title="原文 : Transit secrets engine operations:">転送シークレット・エンジンの操作:</span></p>

<markup
lang="bash"

>@Override
public void update(Routing.Rules rules) {
    rules.get("/enable", this::enableEngine)
            .get("/keys", this::createKeys)
            .delete("/keys", this::deleteKeys)
            .get("/batch", this::batch)
            .get("/encrypt/{text:.*}", this::encryptSecret)
            .get("/decrypt/{text:.*}", this::decryptSecret)
            .get("/sign", this::sign)
            .get("/hmac", this::hmac)
            .get("/verify/sign/{text:.*}", this::verify)
            .get("/verify/hmac/{text:.*}", this::verifyHmac)
            .get("/disable", this::disableEngine);
}

private void enableEngine(ServerRequest req, ServerResponse res) { <span class="conum" data-value="1" />
    sys.enableEngine(TransitSecretsRx.ENGINE)
            .thenAccept(ignored -&gt; res.send("Transit Secret engine enabled"))
            .exceptionally(res::send);
}

private void disableEngine(ServerRequest req, ServerResponse res) { <span class="conum" data-value="2" />
    sys.disableEngine(TransitSecretsRx.ENGINE)
            .thenAccept(ignored -&gt; res.send("Transit Secret engine disabled"))
            .exceptionally(res::send);
}

private void createKeys(ServerRequest req, ServerResponse res) { <span class="conum" data-value="3" />
    CreateKey.Request request = CreateKey.Request.builder()
            .name(ENCRYPTION_KEY);

    secrets.createKey(request)
            .flatMapSingle(ignored -&gt; secrets.createKey(CreateKey.Request.builder()
                                                                .name(SIGNATURE_KEY)
                                                                .type("rsa-2048")))
            .forSingle(ignored -&gt; res.send("Created keys"))
            .exceptionally(res::send);
}

private void deleteKeys(ServerRequest req, ServerResponse res) { <span class="conum" data-value="4" />

    secrets.updateKeyConfig(UpdateKeyConfig.Request.builder()
                                    .name(ENCRYPTION_KEY)
                                    .allowDeletion(true))
            .peek(ignored -&gt; System.out.println("Updated key config"))
            .flatMapSingle(ignored -&gt; secrets.deleteKey(DeleteKey.Request.create(ENCRYPTION_KEY)))
            .forSingle(ignored -&gt; res.send("Deleted key."))
            .exceptionally(res::send);
}

private void encryptSecret(ServerRequest req, ServerResponse res) { <span class="conum" data-value="5" />
    String secret = req.path().param("text");

    secrets.encrypt(Encrypt.Request.builder()
                            .encryptionKeyName(ENCRYPTION_KEY)
                            .data(Base64Value.create(secret)))
            .forSingle(response -&gt; res.send(response.encrypted().cipherText()))
            .exceptionally(res::send);
}

private void decryptSecret(ServerRequest req, ServerResponse res) { <span class="conum" data-value="6" />
    String encrypted = req.path().param("text");

    secrets.decrypt(Decrypt.Request.builder()
                            .encryptionKeyName(ENCRYPTION_KEY)
                            .cipherText(encrypted))
            .forSingle(response -&gt; res.send(String.valueOf(response.decrypted().toDecodedString())))
            .exceptionally(res::send);
}

private void hmac(ServerRequest req, ServerResponse res) { <span class="conum" data-value="7" />
    secrets.hmac(Hmac.Request.builder()
                         .hmacKeyName(ENCRYPTION_KEY)
                         .data(SECRET_STRING))
            .forSingle(response -&gt; res.send(response.hmac()))
            .exceptionally(res::send);
}

private void sign(ServerRequest req, ServerResponse res) { <span class="conum" data-value="8" />
    secrets.sign(Sign.Request.builder()
                         .signatureKeyName(SIGNATURE_KEY)
                         .data(SECRET_STRING))
            .forSingle(response -&gt; res.send(response.signature()))
            .exceptionally(res::send);
}

private void verifyHmac(ServerRequest req, ServerResponse res) { <span class="conum" data-value="9" />
    String hmac = req.path().param("text");

    secrets.verify(Verify.Request.builder()
                           .digestKeyName(ENCRYPTION_KEY)
                           .data(SECRET_STRING)
                           .hmac(hmac))
            .forSingle(response -&gt; res.send("Valid: " + response.isValid()))
            .exceptionally(res::send);
}

private void verify(ServerRequest req, ServerResponse res) { <span class="conum" data-value="10" />
    String signature = req.path().param("text");

    secrets.verify(Verify.Request.builder()
                           .digestKeyName(SIGNATURE_KEY)
                           .data(SECRET_STRING)
                           .signature(signature))
            .forSingle(response -&gt; res.send("Valid: " + response.isValid()))
            .exceptionally(res::send);
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2AWrwe.3" title="原文 : Enable the secrets engine on the default path.">デフォルト・パスでシークレット・エンジンを有効にします。</span></li>
<li data-value="2"><span class="merged" id="all.2pYHjL.3" title="原文 : Disable the secrets engine on the default path.">デフォルト・パスのシークレット・エンジンを無効にします。</span></li>
<li data-value="3"><span class="merged" id="all.u7WYD" title="原文 : Create the encryption and signature keys.">暗号化キーとシグネチャ・キーを作成します。</span></li>
<li data-value="4"><span class="merged" id="all.3dWJTJ.1" title="原文 : Delete the encryption and signature keys.">暗号化キーとシグネチャ・キーを削除します。</span></li>
<li data-value="5"><span class="merged" id="all.3g5E3c.1" title="原文 : Encrypt a secret.">シークレットを暗号化します。</span></li>
<li data-value="6"><span class="merged" id="all.OXDfq.1" title="原文 : Decrypt a secret.">シークレットを復号化します。</span></li>
<li data-value="7"><span class="merged" id="all.2q7OAg.1" title="原文 : Create an HMAC for text.">テキストのHMACを作成します。</span></li>
<li data-value="8"><span class="merged" id="all.2AoaCz.1" title="原文 : Create a signature for text.">テキストのシグネチャを作成します。</span></li>
<li data-value="9"><span class="merged" id="all.2ih1J1.1" title="原文 : Verify HMAC.">HMACを確認します。</span></li>
<li data-value="10"><span class="merged" id="all.2lCElH.1"  title="原文:: Verify signature.">シグネチャを確認してください。</span></li>
</ul>

</div>


<h3 id="_authentication_with_kubernetes"><span class="merged" id="all.34ejQb" title="原文 : Authentication with Kubernetes">Kubernetesによる認証</span></h3>
<div class="section">
<p><span class="merged" id="all.1TNb9" title="原文 : In order to use Kubernetes authentication:">Kubernetes認証を使用するには:</span></p>

<markup
lang="java"

>class K8sExample {
    private static final String SECRET_PATH = "k8s/example/secret";
    private static final String POLICY_NAME = "k8s_policy";

    private final Vault tokenVault;
    private final String k8sAddress;
    private final Config config;
    private final SysRx sys;

    private Vault k8sVault;

    K8sExample(Vault tokenVault, Config config) {
        this.tokenVault = tokenVault;
        this.sys = tokenVault.sys(SysRx.API);
        this.k8sAddress = config.get("cluster-address").asString().get();
        this.config = config;
    }

    public Single&lt;String&gt; run() { <span class="conum" data-value="1" />
        /*
         The following tasks must be run before we authenticate
         */
        return enableK8sAuth()
                // Now we can login using k8s - must run within a k8s cluster (or you need the k8s configuration files locally)
                .flatMapSingle(ignored -&gt; workWithSecrets())
                // Now back to token based Vault, as we will clean up
                .flatMapSingle(ignored -&gt; disableK8sAuth())
                .map(ignored -&gt; "k8s example finished successfully.");
    }

    private Single&lt;ApiResponse&gt; workWithSecrets() { <span class="conum" data-value="2" />
        Kv2SecretsRx secrets = k8sVault.secrets(Kv2SecretsRx.ENGINE);

        return secrets.create(SECRET_PATH, Map.of("secret-key", "secretValue",
                                                  "secret-user", "username"))
                .flatMapSingle(ignored -&gt; secrets.get(SECRET_PATH))
                .peek(secret -&gt; {
                    if (secret.isPresent()) {
                        Kv2Secret kv2Secret = secret.get();
                        System.out.println("k8s first secret: " + kv2Secret.value("secret-key"));
                        System.out.println("k8s second secret: " + kv2Secret.value("secret-user"));
                    } else {
                        System.out.println("k8s secret not found");
                    }
                }).flatMapSingle(ignored -&gt; secrets.deleteAll(SECRET_PATH));
    }

    private Single&lt;ApiResponse&gt; disableK8sAuth() { <span class="conum" data-value="3" />
        return sys.deletePolicy(POLICY_NAME)
                .flatMapSingle(ignored -&gt; sys.disableAuth(K8sAuthRx.AUTH_METHOD.defaultPath()));
    }

    private Single&lt;ApiResponse&gt; enableK8sAuth() { <span class="conum" data-value="4" />
        // enable the method
        return sys.enableAuth(K8sAuthRx.AUTH_METHOD)
                // add policy
                .flatMapSingle(ignored -&gt; sys.createPolicy(POLICY_NAME, VaultPolicy.POLICY))
                .flatMapSingle(ignored -&gt; tokenVault.auth(K8sAuthRx.AUTH_METHOD)
                        .configure(ConfigureK8s.Request.builder()
                                           .address(k8sAddress)))
                .flatMapSingle(ignored -&gt; tokenVault.auth(K8sAuthRx.AUTH_METHOD)
                        // this must be the same role name as is defined in application.yaml
                        .createRole(CreateRole.Request.builder()
                                            .roleName("my-role")
                                            .addBoundServiceAccountName("*")
                                            .addBoundServiceAccountNamespace("default")
                                            .addTokenPolicy(POLICY_NAME)))
                .peek(ignored -&gt; k8sVault = Vault.create(config))
                .map(Function.identity());
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1UbwIR" title="原文 : Run the Kubernetes Authentication by enabling it.">Kubernetes認証を有効にして実行します。</span></li>
<li data-value="2"><span class="merged" id="all.2VxVl2" title="原文 : Create Kubernetes secrets.">Kubernetesシークレットを作成します。</span></li>
<li data-value="3"><span class="merged" id="all.18k2Bx" title="原文 : Disable Kubernetes authentication if needed.">必要に応じて、Kubernetes認証を無効にします。</span></li>
<li data-value="4"><span class="merged" id="all.1ots7B" title="原文 : Function used to enable Kubernetes authentication.">Kubernetes認証を有効にするために使用される機能。</span></li>
</ul>

</div>

</div>


<h2 id="Local-Testing"><span class="merged" id="all.3HPxA2" title="原文 : Local testing">ローカル・テスト</span></h2>
<div class="section">
<p><span class="merged" id="all.101NjA.1" title="原文 : Vault is available as a docker image, so to test locally, you can simply:">Vaultはドッキング・ステーション・イメージとして使用できるため、ローカルでテストするには、次の操作を行います:</span></p>

<markup
lang="bash"

>docker run -e VAULT_DEV_ROOT_TOKEN_ID=my-token -d --name=vault -p8200:8200 vault</markup>

<p><span class="merged" id="all.1XeBdv.spl1" title="原文 : This will create a Vault docker image, run it in background and open it on localhost:8200 with a custom root token my-token, using name vault.">これにより、Vault dockerイメージが作成され、バックグラウンドで実行され、名前vaultを使用して、カスタム・ルート・トークンmy-tokenでlocalhost:8200で開きます。</span> <span class="merged" id="all.1XeBdv.spl2" title="原文 : This is of course only suitable for local testing, as the root token has too many rights, but it can be easily used with the examples below.">ルート・トークンの権限が多すぎるため、これはローカル・テストにのみ適していますが、次の例で簡単に使用できます。</span> </p>

</div>


<h2 id="_references"><span class="merged" id="all.3oSja0.8"  title="原文:: References">参照</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.3RehOY.1" title="原文 : Hashicorp Vault Usage Examples"><a href="https://github.com/oracle/helidon/tree/master/examples/integrations/vault" target="_blank">Hashicorp Vaultの使用例</a></span></p>

</li>
</ul>

</div>

</doc-view>
