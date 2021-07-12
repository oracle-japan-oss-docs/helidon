<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.43xTBs" title="原文 : Security Introduction">セキュリティの概要</span></dt>
<dd slot="desc"><p><span class="merged" id="all.316SZv" title="原文 : Helidon Security provides authentication, authroization and auditing for your Helidon application.">Helidon Securityは、Helidonアプリケーションの認証、認可および監査を提供します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.58" title="原文 : Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.3phYpy.1" title="原文 : To enable Security add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">セキュリティを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.security&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-security&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_overview"><span class="merged" id="all.YrpRV.9"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.4Sqcb0" title="原文 : Helidon Security provides the following features">Helidonセキュリティには、次の機能があります</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1qr63S.spl1" title="原文 : Authentication - support for authenticating incoming requests, creating a security Subject with Principal and Grants.">認証 - 受信リクエストの認証、プリンシパルおよび付与を使用したセキュリティ・サブジェクトの作成のサポート。</span> <span class="merged" id="all.1qr63S.spl2" title="原文 : Principal represents current user/service.">プリンシパルは、現在のユーザー/サービスを表します。</span> <span class="merged" id="all.1qr63S.spl3" title="原文 : Grant may represent a Role, Scope etc. Responsibility to create Principals and Grants lies with with AuthenticationProvider SPI.">付与はロール、スコープなどを表すことができます。プリンシパルと権限付与を作成する職責は、AuthenticationProvider SPIにあります。</span> <span class="merged" id="all.1qr63S.spl4" title="原文 : The following Principals are expected and supported out of the box:">デフォルトでは、次のプリンシパルが想定され、サポートされています:</span> 
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.24t389" title="原文 : UserPrincipal - the party is an end-user (e.g. a person) - there can be zero to one user principals in a subject">UserPrincipal - パーティがエンド・ユーザー(個人など)の場合 - サブジェクトのユーザー・プリンシパルがゼロから1つの場合があります</span>

</li>
<li>
<span class="merged" id="all.1Mf9aF" title="原文 : ServicePrincipal - the party is a service (e.g. a computer program) - there can be zero to one service principals in a subject">ServicePrincipal - パーティがサービス(コンピュータ・プログラムなど) - サブジェクト内のサービス・プリンシパルはゼロから1つです</span>

</li>
</ol>
</li>
<li>
<span class="merged" id="all.2PbLXT.spl1" title="原文 : Authorization - support for authorizing incoming requests.">認可 - 受信リクエストの認可のサポート。</span> <span class="merged" id="all.2PbLXT.spl2" title="原文 : Out-of-the-box the security module supports ABAC and RBAC (Attribute based access control and Role based access control).">デフォルトでは、セキュリティ・モジュールはABACおよびRBAC (属性ベースのアクセス制御およびロール・ベースのアクセス制御)をサポートしています。</span> <span class="merged" id="all.2PbLXT.spl3" title="原文 : RBAC is handled through RolesAllowed annotation (for integrations that support injection).">RBACは、RolesAllowed注釈を介して処理されます(インジェクションをサポートする統合の場合)。</span> 

</li>
<li>
<span class="merged" id="all.1zNVXa.spl1" title="原文 : Outbound security - support for propagating identity or (in general) securing outbound requests.">アウトバウンド・セキュリティ - アイデンティティの伝播または(一般的に)アウトバウンド・リクエストの保護のサポート。</span> <span class="merged" id="all.1zNVXa.spl2" title="原文 : Modification of a request to include outbound security is responsibility of OutboundSecurityProvider SPI">アウトバウンド・セキュリティを含むようにリクエストを変更することは、OutboundSecurityProvider SPIの役割です</span> 

</li>
<li>
<span class="merged" id="all.1HO8Rc.spl1" title="原文 : Audit - security module audits most important events through its own API (e.g. Authentication events, Authorization events, outbound security events).">監査 - セキュリティ・モジュールは、独自のAPI (認証イベント、認可イベント、アウトバウンド・セキュリティ・イベントなど)を介して最も重要なイベントを監査します。</span> <span class="merged" id="all.1HO8Rc.spl2" title="原文 : A default AuditProvider is provided as well, logging to Java util logging (JUL) logger called &quot;AUDIT&quot; (may be overridden through configuration).">デフォルトのAuditProviderも提供され、AUDITと呼ばれるJavaユーティリティ・ロギング(JUL)ロガーへのロギングが行われます(構成によってオーバーライドされる場合があります)。</span> <span class="merged" id="all.1HO8Rc.spl3" title="原文 : AuditProvider SPI may be implemented to support other auditing options.">AuditProvider SPIは、他の監査オプションをサポートするために実装できます。</span> 

</li>
</ol>
<p><span class="merged" id="all.10GojY.spl1" title="原文 : Security module is quite HTTP centric (as most common use cases are related to HTTP REST), though it is not HTTP specific (the security module may be used to secure even other transports, such as JMS, Kafka messages etc. if an appropriate integration module is developed, as all APIs can be mapped to a non-HTTP protocol).">セキュリティ・モジュールはHTTP中心ですが(最も一般的なユースケースはHTTP RESTに関連していますが)、HTTP固有ではありません(セキュリティ・モジュールは、すべてのAPIをHTTP以外のプロトコルにマップできるため、適切な統合モジュールが開発されている場合は、JMSやKafkaメッセージなどの他のトランスポートを保護するために使用できます)。</span> <span class="merged" id="all.10GojY.spl2" title="原文 : Nevertheless there may be security providers that only make sense with HTTP (such as HTTP digest authentication).">ただし、HTTPでのみ有効なセキュリティ・プロバイダ(HTTPダイジェスト認証など)が存在する場合もあります。</span> </p>

</div>

<h2 id="_how_to_use"><span class="merged" id="all.3aZOU2"  title="原文:: How to use">使用方法</span></h2>
<div class="section">
<p><span class="merged" id="all.3pZpo1.spl1" title="原文 : To integrate with a container, or to use Security standalone, we must create an instance of security.">コンテナと統合するか、セキュリティ・スタンドアロンを使用するには、セキュリティのインスタンスを作成する必要があります。</span> <span class="merged" id="all.3pZpo1.spl2" title="原文 : In general, Security supports three approaches">一般的に、セキュリティでは3つのアプローチがサポートされます</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.38tafW" title="原文 : a fluent-API builder pattern - you configure everything &quot;by hand&quot;">fluent-APIビルダー・パターン - すべてを手動で構成</span></p>

</li>
<li>
<p><span class="merged" id="all.26BfIv" title="原文 : a configuration based pattern - you configure everything in a configuration file">構成ベースのパターン - 構成ファイル内のすべてを構成</span></p>

</li>
<li>
<p><span class="merged" id="all.3RnEXe" title="原文 : hybrid - you load a builder from configuration and update it in a program">ハイブリッド - 構成からビルダーをロードし、プログラム内で更新</span></p>

</li>
</ul>
<p><span class="merged" id="all.4gYfC7" title="原文 : Once a security instance is built, it can be used to initialize an integration with a container, or to use security from a program directly:">セキュリティ・インスタンスが構築されると、それを使用して<router-link @click.native="this.scrollFix('#_cloud_security_container_integrations')" to="#_cloud_security_container_integrations">「コンテナとの統合」</router-link>を初期化したり、プログラムから直接セキュリティを使用できます:</span></p>

<markup
lang="java"
title="セキュリティ直接使用"
>// create a security context
SecurityContext context = security.contextBuilder(UUID.randomUUID().toString())
                .env(SecurityEnvironment.builder()
                             .method("get")
                             .path("/test")
                             .transport("http")
                             .header("Authorization", "Bearer abcdefgh")
                             .build())
                .build();

// use the context to authenticate a request
context.atnClientBuilder()
                .submit()
                .whenComplete((response, exception) -&gt; {
                    // this is to show the features, not a real-world production code...
                    if (null == exception) {
                        if (response.getStatus().isSuccess()) {
                            System.out.println(response.getUser());
                            System.out.println(response.getService());
                        } else {
                            System.out.println("Authentication failed: " + response.getDescription());
                        }
                    } else {
                        exception.printStackTrace();
                    }
                });</markup>


<h3 id="_builder_pattern"><span class="merged" id="all.3FRo7r" title="原文 : Builder pattern">ビルダー・パターン</span></h3>
<div class="section">
<markup
lang="java"
title="ビルダーを使用したセキュリティ"
>Security security = Security.builder()
        // create a provider instance based on the provider documentation
        .addProvider(...)
        .build();</markup>

</div>

<h3 id="_configuration_pattern"><span class="merged" id="all.3nMvBc" title="原文 : Configuration pattern">構成パターン</span></h3>
<div class="section">
<p><span class="merged" id="all.3ElQel" title="原文 : See Secure config for details about encrypting passwords in configuration files.">構成ファイルでのパスワードの暗号化の詳細は、<router-link @click.native="this.scrollFix('#_tools')" to="#_tools">「セキュアな構成」</router-link>を参照してください。</span></p>

<markup
lang="java"
title="構成からのセキュリティ"
>// uses io.helidon.Config
Security security = Security.create(config);</markup>

<markup
lang="yaml"
title="構成からのセキュリティ - application.yaml"
># Uses config encryption filter to encrypt passwords
security:
  providers:
  - abac:
  - http-basic-auth:
      realm: "helidon"
      users:
      - login: "jack"
        password: "${CLEAR=password}"
        roles: ["user", "admin"]
      - login: "jill"
        password: "${CLEAR=password}"
        roles: ["user"]</markup>


<h4 id="_overriding_configuration"><span class="merged" id="all.2x1sf8" title="原文 : Overriding configuration">構成のオーバーライド</span></h4>
<div class="section">
<p><span class="merged" id="all.36sz4Z.spl1" title="原文 : When a configuration needs to be overridden, we may have problems with the list type of the providers configuration.">構成をオーバーライドする必要がある場合、<code>providers</code>構成のリスト・タイプに問題がある可能性があります。</span> <span class="merged" id="all.36sz4Z.spl2" title="原文 : To simplify overrides using properties, you can explicitly setup a type of provider using a type key.">プロパティを使用したオーバーライドを簡略化するために、<code>type</code>キーを使用してプロバイダのタイプを明示的に設定できます。</span> </p>

<p><span class="merged" id="all.2apT5L.4"  title="原文:: Example:">例:</span></p>

<markup
lang="properties"

>security.providers.1.type=header-atn
security.providers.1.header-atn.authenticate=false</markup>

<p><span class="merged" id="all.2Zhajy.spl1" title="原文 : Would explicitly override the second provider (http-basic-auth in example above) with header-atn provider.">2番目のプロバイダ(前述の例では<code>http-basic-auth</code>)を<code>header-atn</code>プロバイダで明示的にオーバーライドします。</span> <span class="merged" id="all.2Zhajy.spl2" title="原文 : Note that the type and the key of the provider must match."><code>type</code>とプロバイダのキーが一致している必要があります。</span> </p>

</div>
</div>

<h3 id="_hybrid_pattern_builder_configuration"><span class="merged" id="all.1TKBOS" title="原文 : Hybrid pattern (Builder &amp; Configuration)">ハイブリッド・パターン(ビルダー&amp;構成)</span></h3>
<div class="section">
<markup
lang="java"
title="構成およびビルダーからのセキュリティ"
>// uses io.helidon.Config
Security security = Security.builder(config)
                .addProvider(...)
                .build();

// or reverse order:
Security security = Security.builder()
                .addProvider()
                .config(config)
                .build();</markup>

</div>
</div>
</doc-view>
