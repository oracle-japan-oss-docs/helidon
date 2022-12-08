<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.4bCujn" title="原文 : Cloud Security Container Integrations">クラウド・セキュリティ・コンテナ統合</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1y0ECJ" title="原文 : The following cloud security containers are integrated with Helidon Security:">次のクラウド・セキュリティ・コンテナは、Helidonセキュリティと統合されています:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.fMfNf" title="原文 : WebServer"><router-link @click.native="this.scrollFix('#_webserver')" to="#_webserver">WebServer</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2puozr" title="原文 : Jersey "><router-link @click.native="this.scrollFix('#_jersey')" to="#_jersey">Jersey </router-link></span></p>

</li>
</ul>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_webserver"><span class="merged" id="all.2mhjof.3"  title="原文: WebServer">WebServer</span></h2>
<div class="section">
<p><span class="merged" id="all.34fjiP" title="原文 : To integrate reactive web server, add the following dependency to your project&rsquo;s pom.xml file:"><router-link to="/se/webserver">「リアクティブwebサーバー」</router-link>を統合するには、プロジェクトのpom.xmlファイルに次の依存関係を追加します:</span></p>

<markup
lang="xml"
title="Maven Dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.security.integration&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-security-integration-webserver&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>


<h3 id="_configure_security_with_webserver"><span class="merged" id="all.WGVyC" title="原文 : Configure Security with WebServer">WebServerを使用したセキュリティの構成</span></h3>
<div class="section">
<p><span class="merged" id="all.2vBuqO" title="原文 : There are two steps to configure security with WebServer:">WebServerを使用してセキュリティを構成するには、次の2つのステップがあります:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2Jsyv" title="原文 : Create a security instance and register it with the server.">セキュリティ・インスタンスを作成し、サーバーに登録します。</span>

</li>
<li>
<span class="merged" id="all.7Nm8D" title="原文 : Protect server routes with optional security features.">オプションのセキュリティ機能を使用してサーバー・ルートを保護します。</span>

</li>
</ol>

<markup
lang="java"
title="Example using builders"
>// web server's Routing
Routing.builder()
    // This is step 1 - register security instance with web server processing
    // security - instance of security either from config or from a builder
    // securityDefaults - default enforcement for each route that has a security definition
    .register(WebSecurity.create(security).securityDefaults(WebSecurity.authenticate()))
    // this is step 2 - protect a route
    // protect this route with authentication (from defaults) and role "user"
    .get("/service1", WebSecurity.rolesAllowed("user"), (req, res) -&gt; {
        processService1Request(req, res);
    })
    .build();</markup>

<markup
lang="java"
title="Example using configuration"
>Routing.builder()
    // helper method to load both security and web server security from configuration
    .register(WebSecurity.create(config))
    // continue with web server route configuration
    .build();</markup>

<markup
lang="yaml"
title="Example using configuration (YAML)"
># This may change in the future - to align with web server configuration, once it is supported
security.web-server:
  # Configuration of integration with web server
  defaults:
    authenticate: true
  paths:
    - path: "/service1/[/{*}]"
      methods: ["get"]
      roles-allowed: ["user"]</markup>

</div>


<h3 id="_protecting_helidon_endpoints"><span class="merged" id="all.42i1fJ.1" title="原文 : Protecting Helidon Endpoints">Helidonエンドポイントの保護</span></h3>
<div class="section">
<p><span class="merged" id="all.3RhFcF.1" title="原文 : There are several endpoints provided by Helidon services, such as:">Helidonサービスによって提供されるエンドポイントには、次のようなものがあります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2jZ40R.1" title="原文 : Health endpoint (/health)">ヘルス・エンドポイント(<code>/health</code>)</span></p>

</li>
<li>
<p><span class="merged" id="all.YirxS.1" title="原文 : Metrics endpoint (/metrics)">メトリクス・エンドポイント(<code>/metrics</code>)</span></p>

</li>
<li>
<p><span class="merged" id="all.1lSThs.1" title="原文 : OpenAPI endpoint (/openapi)">OpenAPIエンドポイント(<code>/openapi</code>)</span></p>

</li>
<li>
<p><span class="merged" id="all.25mnG1.1" title="原文 : Configured static content (can use any path configured)">構成済の静的コンテンツ(構成済の任意のパスを使用可能)</span></p>

</li>
</ul>

<p><span class="merged" id="all.2VdT0S.1" title="原文 : These endpoints are all implemented using Helidon reactive WebServer and as such can be protected only through Security integration with WebServer.">これらのエンドポイントはすべてHelidonリアクティブWebServerを使用して実装されるため、WebServerとのセキュリティ統合によってのみ保護できます。</span></p>

<p><span class="merged" id="all.2TJIva.1" title="原文 : The following section describes configuration of such protection using configuration files, in this case using a yaml file, as it provides a tree structure.">次の項では、構成ファイル(この場合はツリー構造を提供する<code>yaml</code>ファイル)を使用したこのような保護の構成について説明します。</span></p>


<h4 id="_configuring_endpoint_protection"><span class="merged" id="all.3VSIMo.1" title="原文 : Configuring Endpoint Protection">エンドポイント保護の構成</span></h4>
<div class="section">
<p><span class="merged" id="all.LhjkA.1" title="原文 : The configuration is usually placed under security.web-server (this can be customized in Helidon SE).">構成は通常、<code>security.web-server</code>の下に配置されます(Helidon SEでカスタマイズできます)。</span></p>

<p><span class="merged" id="all.2j9UT5.1" title="原文 : The following example shows how to configure the application.yaml using customized setting:">次の例は、カスタマイズ設定を使用してapplication.yamlを構成する方法を示しています:</span></p>

<markup
lang="yaml"
title="application.yaml"
>security:
  providers:
    - abac: <span class="conum" data-value="1" />
    - provider-key: <span class="conum" data-value="2" />
  web-server:
    defaults:
      authenticate: true <span class="conum" data-value="3" />
    paths:
      - path: "/metrics[/{*}]" <span class="conum" data-value="4" />
        roles-allowed: "admin"
      - path: "/health[/{*}]" <span class="conum" data-value="5" />
        roles-allowed: "monitor"
      - path: "/openapi[/{*}]" <span class="conum" data-value="6" />
        abac:
          scopes: ["openapi"]
      - path: "/static[/{*}]" <span class="conum" data-value="7" />
        roles-allowed: ["user", "monitor"]</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1Gmt4x.1" title="原文 : Attribute based access control provider that checks roles and scopes">ロールおよびスコープをチェックする属性ベースのアクセス制御プロバイダ</span></li>
<li data-value="2"><span class="merged" id="all.4BrwFO.1" title="原文 : The provider(s) used in your application, such as oidc"><code>oidc</code>など、アプリケーションで使用されるプロバイダ</span></li>
<li data-value="3"><span class="merged" id="all.2kfP0W.1" title="原文 : Default configuration for all configured paths">すべての構成済パスのデフォルト構成</span></li>
<li data-value="4"><span class="merged" id="all.2b7W73.1" title="原文 : Protection of /metrics and all nested paths with admin role required"><code>/metrics</code>およびネストされたすべてのパスを<code>admin</code>ロールで保護する必要があります</span></li>
<li data-value="5"><span class="merged" id="all.3g6arN.1" title="原文 : Protection of /health and all nested paths with monitor role required"><code>/health</code>およびネストされたすべてのパスを<code>monitor</code>ロールで保護する必要があります</span></li>
<li data-value="6"><span class="merged" id="all.1YQdmy.1" title="原文 : Protection of /openapi and all nested paths with openapi scope required"><code>/openapi</code>およびネストされたすべてのパスを<code>openapi</code>スコープで保護する必要があります</span></li>
<li data-value="7"><span class="merged" id="all.4ETk7v.1" title="原文 : Protection of static content configured on /static path with either user or monitor role required"><code>user</code>または<code>monitor</code>のいずれかのロールが必要な<code>/static</code>パスに構成された静的コンテンツの保護</span></li>
</ul>

<p><span class="merged" id="all.UG0lR.1" title="原文 : If you need to use a properties file, such as microprofile-config.properties, you can convert the file by using index based numbers for arrays, such as:"><code>microprofile-config.properties</code>などのプロパティ・ファイルを使用する必要がある場合は、次のような配列の索引ベースの番号を使用してファイルを変換できます:</span></p>

<markup
lang="properties"
title="microprofile-config.properties"
>security.providers.0.abac=
security.providers.1.provider-key.optional=false
security.web-server.defaults.authenticate=true
security.web-server.paths.0.path=/metrics[/{*}]
security.web-server.paths.0.roles-allowed=admin
security.web-server.paths.3.path=/static[/{*}]
security.web-server.paths.3.roles-allowed=user,monitor</markup>

</div>

</div>

</div>


<h2 id="_jersey"><span class="merged" id="all.4FQBwO.1"  title="原文:: Jersey">Jersey</span></h2>
<div class="section">
<p><span class="merged" id="all.2is3YN" title="原文 : Jersey (JAX-RS implementation) can be configured for both inbound and outbound security.">Jersey (JAX-RS実装)は、インバウンドとアウトバウンドの両方のセキュリティに対して構成できます。</span></p>

<markup
lang="xml"
title="Maven Dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.security.integration&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-security-integration-jersey&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>


<h3 id="_inbound_security"><span class="merged" id="all.3EjvFr"  title="原文:: Inbound security">インバウンド・セキュリティ</span></h3>
<div class="section">
<markup
lang="java"
title="Integrate with Jersey"
>ResourceConfig resourceConfig = new ResourceConfig()
    // register JAX-RS resource
    .register(JaxRsResource.class)
    // integrate security
    .register(new io.helidon.security.jersey.SecurityFeature(security));</markup>

</div>


<h3 id="_secure_a_resource_method"><span class="merged" id="all.3zf8m6" title="原文 : Secure a Resource Method">リソース・メソッドの保護</span></h3>
<div class="section">
<p><span class="merged" id="all.49hLmX.spl1" title="原文 : The current approach does not have a configuration option so security must be configured through annotations.">現在のアプローチには構成オプションがないため、注釈を使用してセキュリティを構成する必要があります。</span> <span class="merged" id="all.49hLmX.spl2" title="原文 : Security currently supports @Authenticated and @Authorized.">現在、セキュリティは@Authenticatedおよび@Authorizedをサポートしています。</span> <span class="merged" id="all.49hLmX.spl3" title="原文 : When a resource is annotated with one of these annotations (application class, resource class, or resource method), security will be triggered.">リソースにこれらの注釈(アプリケーション・クラス、リソース・クラスまたはリソース・メソッド)のいずれかが付いている場合、セキュリティがトリガーされます。</span> </p>

<markup
lang="java"
title="Securing a resource method"
>// this is sufficient for security to be triggered, see javadoc for further details
@Authenticated
@Path("/{name}")
@GET
@Produces(MediaType.TEXT_PLAIN)
// due to Jersey approach to path matching, we need two methods to match both the "root" and "root" + subpaths
public String getHelloName(@PathParam("name") String name) {
    return "Hello " + name + ", your current subject: " + securityContext.getSubject();
}</markup>

</div>


<h3 id="_access_context"><span class="merged" id="all.1iWQ4J"  title="原文:: Access Context">コンテキストのアクセス</span></h3>
<div class="section">
<markup
lang="java"
title="Support in a JAX-RS resource"
>// inject io.helidon.security.SecurityContext
@Context
private SecurityContext securityContext;</markup>

</div>


<h3 id="_outbound_security"><span class="merged" id="all.2O9qQg"  title="原文:: Outbound Security">アウトバウンド・セキュリティ</span></h3>
<div class="section">
<p><span class="merged" id="all.2tEJ6p.spl1" title="原文 : Outbound security is automatically registered with Jersey client.">アウトバウンド・セキュリティは、Jerseyクライアントに自動的に登録されます。</span> <span class="merged" id="all.2tEJ6p.spl2" title="原文 : The provider must have outbound security configured for identity to be propagated.">アイデンティティを伝播するには、プロバイダにアウトバウンド・セキュリティが構成されている必要があります。</span> </p>

<markup
lang="xml"
title="Maven Dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.security.integration&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-security-integration-jersey-client&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<markup
lang="java"
title="Call remote target with outbound security"
>Client client = ClientBuilder.newClient();

try {
    // call the resource, will propagate identity as configured in Security
    String response = client.target("https://www.google.com")
        .request()
        // configure the security context for this request (as client and targets may be re-used)
        .property(ClientSecurity.PROPERTY_CONTEXT, securityContext)
        .get(String.class);
} finally {
    client.close();
}</markup>

</div>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.22"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.4BHMeZ" title="原文 : Helidon Jersey Security Integration"><a href="./apidocs/io.helidon.security.integration.jersey/module-summary.html" target="_blank">Helidon Jerseyのセキュリティ統合</a></span></p>

</li>
<li>
<p><span class="merged" id="all.32rfX2" title="原文 : Helidon WebServer Security Integration"><a href="./apidocs/io.helidon.security.integration.webserver/module-summary.html" target="_blank">Helidon WebServerセキュリティ統合</a></span></p>

</li>
</ul>

</div>

</doc-view>
