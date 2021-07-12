<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1hF7o6"  title="原文:: Configuring the Server">サーバーの構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2uKrej" title="原文 : By default, the server uses the MicroProfile Config, but you may also want to use Helidon configuration.">デフォルトでは、サーバーはMicroProfile構成を使用しますが、Helidon構成を使用することもできます。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_configuring_the_server"><span class="merged" id="all.1hF7o6.1"  title="原文:: Configuring the Server">サーバーの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.1XSSq" title="原文 : There are 3 default MicroProfile Config sources:">次の3つのデフォルトのMicroProfile構成ソースがあります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.23UOVW"  title="原文: System.getProperties()"><code>System.getProperties()</code></span></p>

</li>
<li>
<p><span class="merged" id="all.Pa9I"  title="原文: System.getenv()"><code>System.getenv()</code></span></p>

</li>
<li>
<p><span class="merged" id="all.4MjPI2" title="原文 : all META-INF/microprofile-config.properties files on the class path">クラスパス上のすべての<code>META-INF/microprofile-config.properties</code>ファイル</span></p>

</li>
<li>
<p><span class="merged" id="all.35gufh" title="原文 : application.yaml on the classpath (read by default by Helidon Config)">クラスパス上の<code>application.yaml</code> (Helidon Configによってデフォルトで読み取られる)</span></p>

</li>
</ul>
<p><span class="merged" id="all.2D7Pev" title="原文 : In this example, the configuration is in a file, and it includes Helidon configuration options.">この例では、構成はファイル内にあり、Helidon構成オプションが含まれています。</span></p>

<markup
lang="properties"
title="META-INF/microprofile-config.properties - サーバー構成"
># default is localhost
server.host=some.host
# default is 7001
server.port=7011

# Helidon configuration (optional)

# Length of queue for incoming connections. Default is 1024
server.backlog=512
# TCP receive window. Default is 0 to use implementation default
server.receive-buffer=256
# Socket timeout milliseconds - defaults to 0 (infinite)
server.timeout=30000
# Defaults to Runtime.availableProcessors()
server.workers=4</markup>

</div>

<h2 id="_configuring_tls"><span class="merged" id="all.3iyelh.1" title="原文 : Configuring TLS">TLSの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.4JOn4V" title="原文 : Helidon MP also supports custom TLS configuration.">Helidon MPは、カスタムTLS構成もサポートしています。</span></p>

<p><span class="merged" id="all.29zovo" title="原文 : User is able to set following properties:">ユーザーは次のプロパティを設定できます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3ZfuzY" title="原文 : Server truststore">サーバー・トラストストア</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.3RbyFt" title="原文 : Keystore with trusted certificates">信頼できる証明書を含むキーストア</span></p>

</li>
</ul>
</li>
<li>
<p><span class="merged" id="all.35j6lq" title="原文 : Private key and certificate">秘密キーと証明書</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.1fI1ci" title="原文 : Server certificate which will be used in TLS handshake">TLSハンドシェイクで使用されるサーバー証明書</span></p>

</li>
</ul>
</li>
</ul>
<markup
lang="properties"
title="META-INF/microprofile-config.properties - サーバー構成"
>#Truststore setup
server.tls.trust.keystore.resource.resource-path=server.p12
server.tls.trust.keystore.passphrase=password
server.tls.trust.keystore.trust-store=true

#Keystore with private key and server certificate
server.tls.private-key.keystore.resource.resource-path=server.p12
server.tls.private-key.keystore.passphrase=password</markup>

<p><span class="merged" id="all.4QjB6G" title="原文 : Or the same configuration done in application.yaml file.">または、同じ構成がapplication.yamlファイルで実行されました。</span></p>

<markup
lang="yaml"
title="application.yaml - サーバー構成"
>server:
  tls:
    #Truststore setup
    trust:
      keystore:
        passphrase: "password"
        trust-store: true
        resource:
          resource-path: "keystore.p12"
    #Keystore with private key and server certificate
    private-key:
      keystore:
        passphrase: "password"
        resource:
          resource-path: "keystore.p12"</markup>

</div>

<h2 id="conf-additional-ports"><span class="merged" id="all.3uDA6e" title="原文 : Configuring additional ports">追加ポートの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.3tXYqy" title="原文 : Helidon MP can expose multiple ports, with the following limitations:">Helidon MPでは複数のポートを公開できますが、次の制限があります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.28pb0y" title="原文 : The default port is the port that serves your application (JAX-RS applications and resources)">デフォルト・ポートは、アプリケーション(JAX-RSアプリケーションおよびリソース)を提供するポートです</span></p>

</li>
<li>
<p><span class="merged" id="all.1eVgIT" title="原文 : Other ports (in this example we configure one &quot;admin&quot; port) can be assigned endpoints that are exposed by Helidon components, currently supported by MP Health and MP Metrics">他のポート(この例では管理ポートを構成)には、MPヘルスおよびMPメトリクスで現在サポートされているHelidonコンポーネントによって公開されているエンドポイントを割り当てることができます</span></p>

</li>
</ul>
<p><span class="merged" id="all.4Fq5rv" title="原文 : For this example, we will use a yaml file:">この例では、<code>yaml</code>ファイルを使用します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.13L73C" title="原文 : The port 7011 is the default port and will serve your application">ポート<code>7011</code>はデフォルト・ポートであり、アプリケーションを提供</span></p>

</li>
<li>
<p><span class="merged" id="all.1YBSaN" title="原文 : The port 8011 is named &quot;admin&quot; (this is an arbitrary name)">ポート<code>8011</code>の名前はadminです(これは任意の名前です)</span></p>

</li>
<li>
<p><span class="merged" id="all.3UFTi1" title="原文 : MP Metrics are configured to use the &quot;admin&quot; port through the routing configuration (reference is by name)">MPメトリクスは、<code>routing</code>構成を介して管理ポートを使用するように構成されています(参照は名前で行われます)</span></p>

</li>
<li>
<p><span class="merged" id="all.1gl7fK" title="原文 : MP Health is configured the same way to reference the &quot;admin&quot; port">MPヘルスは、管理ポートを参照する場合と同じ方法で構成されます</span></p>

</li>
</ul>
<markup
lang="yaml"
title="application.yaml - サーバー構成"
>server:
  port: 7011
  host: "some.host"
  sockets:
    admin:
      port: 8011
      bind-address: "some.host"

metrics:
  routing: "admin"

health:
  routing: "admin"</markup>

</div>

<h2 id="_assigning_jax_rs_applications_to_ports"><span class="merged" id="all.3hqLWZ" title="原文 : Assigning JAX-RS applications to ports">JAX-RSアプリケーションのポートへの割当て</span></h2>
<div class="section">
<p><span class="merged" id="all.3geMyS"  title="原文:: Since 1.4">導入されたバージョン 1.4</span></p>

<p><span class="merged" id="all.45nTOQ.spl1" title="原文 : Helidon has the concept of named routings.">Helidonには、名前付きルーティングの概念があります。</span> <span class="merged" id="all.45nTOQ.spl2" title="原文 : These correspond to the named ports we have described in the previous section.">これらは、前の項で説明した名前付きポートに対応します。</span> </p>

<p><span class="merged" id="all.2iCpS2" title="原文 : You can assign a JAX-RS application to a named routing (and as a result to a named port) using either an annotation or configuration (or both to override the value from annotation).">注釈または構成(あるいはその両方)を使用して、JAX-RSアプリケーションを名前付きルーティングに割り当てることができます(その結果、注釈からの値をオーバーライドします)。</span></p>


<h3 id="_annotation_routingname"><span class="merged" id="all.3Pn5Xy" title="原文 : Annotation @RoutingName">注釈<code>@RoutingName</code></span></h3>
<div class="section">
<p><span class="merged" id="all.2diMag" title="原文 : You can annotate an application with this annotation to assign it to a specific named routing, that is (most likely) going to be bound to a specific port.">この注釈を使用してアプリケーションに注釈を付け、特定の名前付きルーティング(おそらく特定のポートにバインドされる)に割り当てることができます。</span></p>

<p><span class="merged" id="all.1TxjbJ" title="原文 : The annotation has two attributes: - value that defines the routing name - required to mark that the routing name MUST be configured in Helidon server">注釈には2つの属性があります: - <code>value</code>はルーティング名を定義します - <code>required</code>はルーティング名をHelidonサーバーで構成する必要があることを示します</span></p>

<markup
lang="yaml"
title="<code>@RoutingName</code>の例"
>@ApplicationScoped
@ApplicationPath("/admin")
@RoutingName(value="admin", required="true")
public class AdminApplication extends Application {
//....
}</markup>

<p><span class="merged" id="all.3jexaQ" title="原文 : The example above will be bound to admin routing (and port) and will fail if such a port is not configured.">前述の例は、<code>admin</code>ルーティング(およびポート)にバインドされ、そのようなポートが構成されていない場合は失敗します。</span></p>

</div>

<h3 id="_configuration_override_of_routing_name"><span class="merged" id="all.1jqoi9" title="原文 : Configuration override of routing name">ルーティング名の構成オーバーライド</span></h3>
<div class="section">
<p><span class="merged" id="all.6NNND" title="原文 : For each application class you can define the routing name and its required flag by specifying a configuration option class-name.routing-name.name and class-name.routing-name.required.">アプリケーション・クラスごとに、構成オプション<code>class-name.routing-name.name</code>および<code>class-name.routing-name.required</code>を指定することによって、ルーティング名とその必須フラグを定義できます。</span></p>

<p><span class="merged" id="all.4Rtg1f" title="原文 : Example (YAML) configuration for a class io.helidon.examples.AdminApplication that changes the routing name to management and its required flag to false:">ルーティング名を<code>management</code>に、その必須フラグを<code>false</code>に変更するクラス<code>io.helidon.examples.AdminApplication</code>の(YAML)構成の例:</span></p>

<markup
lang="yaml"

>io.helidon.examples.AdminApplication:
  routing-name:
    name: "management"
    required: false</markup>

</div>
</div>

<h2 id="_overriding_jax_rs_application_path"><span class="merged" id="all.1QfO4o" title="原文 : Overriding JAX-RS application path">JAX-RSアプリケーション・パスのオーバーライド</span></h2>
<div class="section">
<p><span class="merged" id="all.4TRjje.spl1" title="原文 : Since Helidon 1.4 In JAX-RS we can use @ApplicationPath to configure a path the JAX-RS application is available on.">Helidon 1.4 In JAX-RSでは、<code>@ApplicationPath</code>を使用してJAX-RSアプリケーションが使用可能なパスを構成できます。</span> <span class="merged" id="all.4TRjje.spl2" title="原文 : As this is compiled into the source code, Helidon provides a way to override this using configuration.">これがソース・コードにコンパイルされると、Helidonでは構成を使用してこれをオーバーライドする方法が提供されます。</span> </p>

<p><span class="merged" id="all.4dewbZ" title="原文 : For each application class you can define the routing path by specifying a configuration option class-name.routing-path.path.">アプリケーション・クラスごとに、構成オプション<code>class-name.routing-path.path</code>を指定してルーティング・パスを定義できます。</span></p>

<p><span class="merged" id="all.3QK8el" title="原文 : Example (YAML) configuration for a class io.helidon.example.AdminApplication that changes the routing path to /management:">ルーティング・パスを<code>/management</code>に変更するクラス<code>io.helidon.example.AdminApplication</code>の例(YAML)構成:</span></p>

<markup
lang="yaml"

>io.helidon.examples.AdminApplication:
  routing-path:
    path: "/management"</markup>

</div>

<h2 id="_example_configuration_of_jax_rs_application"><span class="merged" id="all.2fWVNM" title="原文 : Example configuration of JAX-RS application">JAX-RSアプリケーションの構成例</span></h2>
<div class="section">
<p><span class="merged" id="all.Uu6pj" title="原文 : A full configuration example (YAML):">完全な構成例(YAML):</span></p>

<markup
lang="yaml"

>server:
  port: 8080
  sockets:
    management:
      port: 8090

io.helidon.examples.AdminApplication:
  routing-name:
    name: "management"
    required: true
  routing-path:
    path: "/management"</markup>

</div>
</doc-view>
