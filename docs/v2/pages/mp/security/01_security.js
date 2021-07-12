<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2wSmwl"  title="原文:: Adding Security">セキュリティの追加</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1in22W" title="原文 : To add security, such as protecting resource methods with authentication, to a MicroProfile application, add the Helidon security integration dependency to your project.">認証によるリソース・メソッドの保護などのセキュリティをMicroProfileアプリケーションに追加するには、Helidonセキュリティ統合の依存関係をプロジェクトに追加します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.28" title="原文 : Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.3phYpy" title="原文 : To enable Security add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">セキュリティを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
  &lt;groupId&gt;io.helidon.microprofile&lt;/groupId&gt;
  &lt;artifactId&gt;helidon-microprofile-security&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>


<h3 id="_securing_a_jax_rs_resource"><span class="merged" id="all.3QGX2E" title="原文 : Securing a JAX-RS Resource">JAX-RSリソースの保護</span></h3>
<div class="section">
<p><span class="merged" id="all.3GQbcA" title="原文 : For JAX-RS resources, declare security by adding annotations to a resource class or method.">JAX-RSリソースの場合、リソース・クラスまたはメソッドに注釈を追加してセキュリティを宣言します。</span></p>

<markup
lang="java"
title="protectedリソース・メソッド"
>@GET
@io.helidon.security.annotations.Authenticated
@io.helidon.security.annotations.Authorized
// you can also use io.helidon.security.abac.role.RoleValidator.Roles
@RolesAllowed("admin")
public String adminResource(@Context io.helidon.security.SecurityContext securityContext) {
  return "you are " + securityContext.userName();
}</markup>

<p><span class="merged" id="all.3yefc6" title="原文 : Security in Helidon MicroProfile is built on top of Jersey&rsquo;s and can be enabled/disabled using the property security.jersey.enabled=[true|false].">Helidon MicroProfileのセキュリティはJerseyの上に構築され、<code>security.jersey.enabled=[true|false]</code>プロパティを使用して有効化/無効化できます。</span></p>

</div>

<h3 id="_protecting_helidon_endpoints"><span class="merged" id="all.1j0SRy" title="原文 : Protecting Helidon endpoints">Helidonエンドポイントの保護</span></h3>
<div class="section">
<p><span class="merged" id="all.3RhFcF" title="原文 : There are several endpoints provided by Helidon services, such as:">Helidonサービスによって提供されるエンドポイントには、次のようなものがあります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2jZ40R" title="原文 : Health endpoint (/health)">ヘルス・エンドポイント(<code>/health</code>)</span></p>

</li>
<li>
<p><span class="merged" id="all.YirxS" title="原文 : Metrics endpoint (/metrics)">メトリクス・エンドポイント(<code>/metrics</code>)</span></p>

</li>
<li>
<p><span class="merged" id="all.1lSThs" title="原文 : OpenAPI endpoint (/openapi)">OpenAPIエンドポイント(<code>/openapi</code>)</span></p>

</li>
<li>
<p><span class="merged" id="all.25mnG1" title="原文 : Configured static content (can use any path configured)">構成済の静的コンテンツ(構成済の任意のパスを使用可能)</span></p>

</li>
</ul>
<p><span class="merged" id="all.2VdT0S" title="原文 : These endpoints are all implemented using Helidon reactive WebServer and as such can be protected only through Security integration with WebServer.">これらのエンドポイントはすべてHelidonリアクティブWebServerを使用して実装されるため、WebServerとのセキュリティ統合によってのみ保護できます。</span></p>

<p><span class="merged" id="all.2TJIva" title="原文 : The following section describes configuration of such protection using configuration files, in this case using a yaml file, as it provides a tree structure.">次の項では、構成ファイル(この場合はツリー構造を提供する<code>yaml</code>ファイル)を使用したこのような保護の構成について説明します。</span></p>


<h4 id="_configuring_endpoint_protection"><span class="merged" id="all.3vOALC" title="原文 : Configuring endpoint protection">エンドポイント保護の構成</span></h4>
<div class="section">
<p><span class="merged" id="all.LhjkA" title="原文 : The configuration is usually placed under security.web-server (this can be customized in Helidon SE).">構成は通常、<code>security.web-server</code>の下に配置されます(Helidon SEでカスタマイズできます)。</span></p>

<p><span class="merged" id="all.3KO18q" title="原文 : The following shows an example we will explain in detail:">次に、詳細に説明する例を示します:</span></p>

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
<li data-value="1"><span class="merged" id="all.1Gmt4x" title="原文 : Attribute based access control provider that checks roles and scopes">ロールおよびスコープをチェックする属性ベースのアクセス制御プロバイダ</span></li>
<li data-value="2"><span class="merged" id="all.4BrwFO" title="原文 : The provider(s) used in your application, such as oidc"><code>oidc</code>など、アプリケーションで使用されるプロバイダ</span></li>
<li data-value="3"><span class="merged" id="all.2kfP0W" title="原文 : Default configuration for all configured paths">すべての構成済パスのデフォルト構成</span></li>
<li data-value="4"><span class="merged" id="all.2b7W73" title="原文 : Protection of /metrics and all nested paths with admin role required"><code>/metrics</code>およびネストされたすべてのパスを<code>admin</code>ロールで保護する必要があります</span></li>
<li data-value="5"><span class="merged" id="all.3g6arN" title="原文 : Protection of /health and all nested paths with monitor role required"><code>/health</code>およびネストされたすべてのパスを<code>monitor</code>ロールで保護する必要があります</span></li>
<li data-value="6"><span class="merged" id="all.1YQdmy" title="原文 : Protection of /openapi and all nested paths with openapi scope required"><code>/openapi</code>およびネストされたすべてのパスを<code>openapi</code>スコープで保護する必要があります</span></li>
<li data-value="7"><span class="merged" id="all.4ETk7v" title="原文 : Protection of static content configured on /static path with either user or monitor role required"><code>user</code>または<code>monitor</code>のいずれかのロールが必要な<code>/static</code>パスに構成された静的コンテンツの保護</span></li>
</ul>
<p><span class="merged" id="all.UG0lR" title="原文 : If you need to use a properties file, such as microprofile-config.properties, you can convert the file by using index based numbers for arrays, such as:"><code>microprofile-config.properties</code>などのプロパティ・ファイルを使用する必要がある場合は、次のような配列の索引ベースの番号を使用してファイルを変換できます:</span></p>

<markup
lang="properties"
title="microprofile-config.properties"
>security.providers.0.abac=
security.providers.1.provider-key.optional=false
security.web-server.defaults.authenticate=true
security.web-server.paths.0.path=/metrics[/{*}]
security.web-server.paths.0.roles-allowed=admin
# ....
security.web-server.paths.3.path=/static[/{*}]
security.web-server.paths.3.roles-allowed=user,monitor</markup>

</div>
</div>
</div>
</doc-view>
